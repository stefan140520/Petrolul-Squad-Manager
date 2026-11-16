import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchJucator } from "../api.js";
import { ETICHETE_POSTURI } from "../constants.js";
import styles from "./JucatorDetaliuPage.module.css";

export default function JucatorDetaliuPage() {
  const { id } = useParams();
  const [jucator, setJucator] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;
    fetchJucator(id)
      .then((data) => {
        if (!ignore) {
          setJucator(data);
          setError(null);
        }
      })
      .catch((err) => {
        if (!ignore) setError(err.message);
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [id]);

  if (loading) {
    return (
      <p className="info" data-testid="loading">
        Se încarcă detaliile jucătorului...
      </p>
    );
  }

  if (error) {
    return (
      <section className={`panel ${styles.detail}`}>
        <p className="error" data-testid="error">
          Jucătorul nu a putut fi încărcat: {error}
        </p>
        <Link to="/" className={styles.back}>
          ← Înapoi la lot
        </Link>
      </section>
    );
  }

  return (
    <section className={`panel ${styles.detail}`} data-testid="detail">
      <Link to="/" className={styles.back}>
        ← Înapoi la lot
      </Link>

      <div className={styles.headerRow}>
        <img
          src="/emblema.jpg"
          alt="Emblema Petrolul"
          className={styles.emblem}
        />
        <h2
          className={
            jucator.rezerva ? `${styles.title} ${styles.done}` : styles.title
          }
          data-testid="detail-title"
        >
          {jucator.nume}
        </h2>
      </div>

      <dl className={styles.fields}>
        <dt>Post</dt>
        <dd>
          <span className={`badge badge-${jucator.post}`}>
            {ETICHETE_POSTURI[jucator.post]}
          </span>
        </dd>

        <dt>Status în lot</dt>
        <dd>{jucator.rezerva ? "Rezervă" : "Titular"}</dd>

        <dt>Club</dt>
        <dd>FC Petrolul Ploiești</dd>

        <dt>Stadion</dt>
        <dd>Stadionul „Ilie Oană”, Ploiești</dd>

        <dt>ID jucător</dt>
        <dd>#{jucator.id}</dd>
      </dl>
    </section>
  );
}