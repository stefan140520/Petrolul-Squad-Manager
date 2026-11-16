import { useEffect, useState } from "react";
import JucatoriList from "../components/JucatoriList.jsx";
import JucatorForm from "../components/JucatorForm.jsx";
import {
  createJucator,
  deleteJucator,
  fetchJucatori,
  updateJucator,
} from "../api.js";
import styles from "./JucatoriPage.module.css";

export default function JucatoriPage() {
  const [jucatori, setJucatori] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const titulari = jucatori.filter((j) => !j.rezerva).length;

  return (
    <div className={styles.grid}>
      <aside className={styles.sidebar}>
        <section className="panel">
          <h2>Adaugă jucător</h2>
          <JucatorForm onAdd={handleAdd} />
        </section>

        <section className="panel">
          <h2>Următorul Meci</h2>
          <div className={styles.meciInfo}>
            <span className={styles.meciCompetitie}>SuperLiga • Etapa 14</span>
            <div className={styles.meciEchipe}>
              <strong>FC Petrolul</strong> vs <strong>CFR Cluj</strong>
            </div>
            <p className={styles.meciDetaliu}>📅 31 Octombrie 2026, ora 19:00</p>
            <p className={styles.meciDetaliu}>🏟️ Stadionul „Ilie Oană”, Ploiești</p>
            <div className={styles.meciStatus}>Se joacă acasă 🐺</div>
          </div>
        </section>
      </aside>

      <section className="panel">
        <h2>Lotul meu</h2>
        <p className={styles.summary}>
          {jucatori.length} jucători, dintre care {titulari} titulari
        </p>

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
    </div>
  );
}