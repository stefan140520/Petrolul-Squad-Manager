// Un singur jucător din lot, primit prin props.
const ETICHETE_POSTURI = { 
  atacant: "Atacant", 
  mijlocas: "Mijlocaș", 
  fundas: "Fundaș", 
  portar: "Portar" 
};

export default function JucatorCard({ jucator }) {
  return (
    <li className={jucator.rezerva ? "item-card done" : "item-card"}>
      <div>
        <h3>{jucator.nume}</h3>
        <span className={`badge badge-${jucator.post}`}>
          {ETICHETE_POSTURI[jucator.post]}
        </span>
      </div>
      <span className="status">{jucator.rezerva ? "Rezervă" : "Titular"}</span>
    </li>
  );
}