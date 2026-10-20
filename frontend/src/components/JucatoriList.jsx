import JucatorCard from "./JucatorCard.jsx";

export default function JucatoriList({ listaJucatori }) {
  // Verificare pentru listă goală
  if (listaJucatori.length === 0) {
    return <p className="empty">Lotul este momentan gol.</p>;
  }

  // Randarea listei dacă există elemente
  return (
    <ul className="item-list">
      {listaJucatori.map((jucator) => (
        <JucatorCard key={jucator.id} jucator={jucator} />
      ))}
    </ul>
  );
}