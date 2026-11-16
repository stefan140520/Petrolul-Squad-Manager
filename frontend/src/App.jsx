import { useEffect, useState } from "react";
import JucatoriList from "./components/JucatoriList.jsx";
import JucatorForm from "./components/JucatorForm.jsx";
import {
  createJucator,
  deleteJucator,
  fetchJucatori,
  updateJucator,
} from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [jucatori, setJucatori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const data = await fetchJucatori();
        if (!ignore) setJucatori(data);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  // Întâi serverul, apoi state-ul: pe ecran ajunge doar ce s-a salvat
  async function handleAdd(jucatorNou) {
    const creat = await createJucator(jucatorNou);
    setJucatori((prev) => [...prev, creat]);
  }

  async function handleToggle(id) {
    const jucator = jucatori.find((j) => j.id === id);
    try {
      const actualizat = await updateJucator(id, { rezerva: !jucator.rezerva });
      setJucatori((prev) => prev.map((j) => (j.id === id ? actualizat : j)));
    } catch (err) {
      setError(err.message);
    }
  }

  async function handleDelete(id) {
    try {
      await deleteJucator(id);
      setJucatori((prev) => prev.filter((j) => j.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }

  function handleTema() {
    const noua = tema === "dark" ? "light" : "dark";
    setTema(noua);
    document.documentElement.dataset.theme = noua;
  }

  const titulari = jucatori.filter((j) => !j.rezerva).length;

  return (
    <>
      <header className="app-header">
        <button
          className="theme-toggle"
          onClick={handleTema}
          aria-pressed={tema === "dark"}
        >
          {tema === "dark" ? "Mod luminos" : "Mod întunecat"}
        </button>
        <h1>Petrolul Squad</h1>
        <p>Gestionează lotul pentru următorul meci de pe Ilie Oană.</p>
        <p className="app-count">
          {jucatori.length} jucători, dintre care {titulari} titulari
        </p>
      </header>

      <main className="container layout-principal">
        {/* Coloana din stânga: Formular adăugare + Info Următorul Meci */}
        <aside className="meci-sidebar">
          <section className="panel">
            <h2>Adaugă jucător</h2>
            <JucatorForm onAdd={handleAdd} />
          </section>

          <section className="panel">
            <h2>Următorul Meci</h2>
            <div className="meci-card-info">
              <span className="meci-competitie">SuperLiga • Etapa 14</span>
              <div className="meci-echipe">
                <strong>FC Petrolul</strong> vs <strong>CFR Cluj</strong>
              </div>
              <p className="meci-detalii">📅 31 Octombrie 2026, ora 19:00</p>
              <p className="meci-detalii">🏟️ Stadionul „Ilie Oană”, Ploiești</p>
              <div className="meci-status">Se joacă acasă 🐺</div>
            </div>
          </section>
        </aside>

        {/* Coloana din dreapta: Lotul de jucători */}
        <section className="panel lot-section">
          <h2>Lotul meu</h2>
          {loading && (
            <p className="info" data-testid="loading">
              Se încarcă lista...
            </p>
          )}
          {error && (
            <p className="error" data-testid="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          {!loading && (
            <JucatoriList
              listaJucatori={jucatori}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          )}
        </section>
      </main>
    </>
  );
}