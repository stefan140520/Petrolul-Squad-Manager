import { Link } from "react-router-dom";
import { ETICHETE_POSTURI } from "../constants.js";
import styles from "./JucatorCard.module.css";

export default function JucatorCard({ jucator, onToggle, onDelete }) {
  return (
    <li
      className={jucator.rezerva ? `${styles.card} ${styles.done}` : styles.card}
      data-testid="item"
      data-id={jucator.id}
    >
      <div className={styles.main}>
        <input
          type="checkbox"
          checked={jucator.rezerva}
          onChange={() => onToggle(jucator.id)}
          aria-label={`Marchează ${jucator.nume}`}
          data-testid="item-toggle"
        />

        <img
          src="/emblema.jpg"
          alt="Emblema Petrolul"
          className={styles.emblem}
        />

        <div>
          <Link
            to={`/jucatori/${jucator.id}`}
            className={styles.title}
            data-testid="item-link"
          >
            {jucator.nume}
          </Link>
          <span className={`badge badge-${jucator.post}`}>
            {ETICHETE_POSTURI[jucator.post]}
          </span>
        </div>
      </div>

      <button
        className="btn-danger"
        onClick={() => onDelete(jucator.id)}
        aria-label={`Șterge ${jucator.nume}`}
        data-testid="item-delete"
      >
        Șterge
      </button>
    </li>
  );
}