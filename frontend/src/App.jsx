import JucatoriList from "./components/JucatoriList.jsx";

// Datele jucătorilor
const jucatori = [
  { id: 1, nume: "Gheorghe Grozav", rezerva: false, post: "atacant" },
  { id: 2, nume: "Paul Papp", rezerva: true, post: "fundas" },
  { id: 3, nume: "Sergiu Hanca", rezerva: false, post: "mijlocas" }
];

export default function App() {
  const titulari = jucatori.filter((j) => !j.rezerva).length;

  return (
    <>
      <header className="app-header">
        <h1>Petrolul Squad</h1>
        <p>Gestionează lotul pentru următorul meci de pe Ilie Oană.</p>
        <p className="app-count">
          {jucatori.length} jucători, dintre care {titulari} titulari
        </p>
      </header>

      <main className="container">
        <section className="panel">
          <h2>Lotul meu</h2>
          {/* Am înlocuit pre-ul (JSON) cu componenta ce desenează lista */}
          <JucatoriList listaJucatori={jucatori} />
        </section>
      </main>
    </>
  );
}