import { useState } from "react";
import JucatoriList from "./components/JucatoriList.jsx";

const JUCATORI_INITIALI = [
  { id: 1, nume: "Lukas Zima", rezerva: false, post: "portar" },
  { id: 2, nume: "N'Lundulu Dan", rezerva: false, post: "fundas" },
  { id: 3, nume: "Paul Papp", rezerva: true, post: "fundas" },
  { id: 4, nume: "Sergiu Hanca", rezerva: false, post: "mijlocas" },
  { id: 5, nume: "Martins Rodrigo", rezerva: false, post: "atacant" },
  { id: 6, nume: "Lucho Vega", rezerva: true, post: "atacant" },
  { id: 7, nume: "Tutu Mark", rezerva: true, post: "mijlocas" }
];

function temaInitiala() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function App() {
  const [jucatori, setJucatori] = useState(JUCATORI_INITIALI);
  const [tema, setTema] = useState(temaInitiala);

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
        {/* Partea stângă: Următorul Meci */}
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

        {/* Partea dreaptă: Lotul de jucători */}
        <section className="panel lot-section">
          <h2>Lotul meu</h2>
          <JucatoriList
            listaJucatori={jucatori}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </section>
      </main>
    </>
  );
}