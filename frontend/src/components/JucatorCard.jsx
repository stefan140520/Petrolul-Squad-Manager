const ETICHETE_POSTURI = { 
  atacant: "Atacant", 
  mijlocas: "Mijlocaș", 
  fundas: "Fundaș", 
  portar: "Portar" 
};

export default function JucatorCard({ jucator, onToggle, onDelete }) {
  return (
    <li className={jucator.rezerva ? "item-card done" : "item-card"}>
      <label className="item-main">
        <input
          type="checkbox"
          checked={jucator.rezerva}
          onChange={() => onToggle(jucator.id)}
        />
        <div>
          <h3>{jucator.nume}</h3>
          <span className={`badge badge-${jucator.post}`}>
            {ETICHETE_POSTURI[jucator.post]}
          </span>
        </div>
      </label>
      
      <button
        className="btn-danger"
        onClick={() => onDelete(jucator.id)}
        aria-label={`Șterge ${jucator.nume}`}
      >
        Șterge
      </button>
    </li>
  );
}