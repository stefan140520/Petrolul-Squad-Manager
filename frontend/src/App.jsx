import { useEffect, useState } from "react";
import JucatoriList from "./components/JucatoriList.jsx";
import { fetchJucatori } from "./api.js";

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [jucatori, setJucatori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tema, setTema] = useState(temaInitiala);

  // Rulează o singură dată, după prima randare
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

  function handleToggle(id) {
    setJucatori((prev) =>
      prev.map((j) => (j.id === id ? { ...j, rezerva: !j.rezerva } : j))
    );
  }

  function handleDelete(id) {
    setJucatori((prev) => prev.filter((j) => j.id !== id));
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
        <aside className="meci-sidebar">
          <div className="panel">
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
          </div>
        </aside>

        <section className="panel lot-section">
          <h2>Lotul meu</h2>
          {loading && <p className="info">Se încarcă lista...</p>}
          {error && (
            <p className="error">
              Nu am putut încărca datele: {error}. Rulează <code>npm run api</code>?
            </p>
          )}
          {!loading && !error && (
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