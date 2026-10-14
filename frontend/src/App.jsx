// 1. Datele
const jucatori = [
  { id: 1, nume: "Gheorghe Grozav", rezerva: false, post: "atacant" },
  { id: 2, nume: "Paul Papp", rezerva: true, post: "fundas" },
  { id: 3, nume: "Sergiu Hanca", rezerva: false, post: "mijlocas" }
];

// 2. Componenta principala
export default function App() {
  // Calculul valorii dinamice (cati sunt titulari)
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
          {/* Temporar: afisam lista cruda de date pana in etapa 4 */}
          <pre>{JSON.stringify(jucatori, null, 2)}</pre>
        </section>
      </main>
    </>
  );
}