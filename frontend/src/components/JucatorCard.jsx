const ETICHETE_POSTURI = {
  atacant: "Atacant",
  mijlocas: "Mijlocaș",
  fundas: "Fundaș",
  portar: "Portar",
};

export default function JucatorCard({ jucator, onToggle, onDelete }) {
  return (
    <li
      className={jucator.rezerva ? "item-card done" : "item-card"}
      data-testid="item"
      data-id={jucator.id}
    >
      <label className="item-main">
        <input
          type="checkbox"
          checked={jucator.rezerva}
          onChange={() => onToggle(jucator.id)}
          data-testid="item-toggle"
        />

        <img
          src="/emblema.jpg"
          alt="Emblema Petrolul"
          className="player-emblem"
        />

        <div>
          <h3 data-testid="item-title">{jucator.nume}</h3>
          <span className={`badge badge-${jucator.post}`}>
            {ETICHETE_POSTURI[jucator.post]}
          </span>
        </div>
      </label>

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
