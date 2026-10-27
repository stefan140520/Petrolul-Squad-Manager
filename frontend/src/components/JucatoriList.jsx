import JucatorCard from "./JucatorCard.jsx";

export default function JucatoriList({ listaJucatori, onToggle, onDelete }) {
  if (listaJucatori.length === 0) {
    return <p className="empty">Lotul este momentan gol.</p>;
  }

  return (
    <ul className="item-list">
      {listaJucatori.map((jucator) => (
        <JucatorCard 
          key={jucator.id} 
          jucator={jucator} 
          onToggle={onToggle} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
}