import { useState } from "react";

const POSTURI = [
  { value: "portar", label: "Portar" },
  { value: "fundas", label: "Fundaș" },
  { value: "mijlocas", label: "Mijlocaș" },
  { value: "atacant", label: "Atacant" },
];

const NUME_MAX = 60;

export default function JucatorForm({ onAdd }) {
  const [nume, setNume] = useState("");
  const [post, setPost] = useState("mijlocas");
  const [eroare, setEroare] = useState("");
  const [trimite, setTrimite] = useState(false);

  function valideaza() {
    const n = nume.trim();
    if (n === "") return "Numele jucătorului este obligatoriu.";
    if (n.length < 2) return "Numele trebuie să aibă cel puțin 2 caractere.";
    if (n.length > NUME_MAX) return `Numele are maximum ${NUME_MAX} de caractere.`;
    return "";
  }

  async function handleSubmit(e) {
    e.preventDefault(); // oprește reîncărcarea paginii
    const mesaj = valideaza();
    if (mesaj) {
      setEroare(mesaj);
      return;
    }

    setEroare("");
    setTrimite(true);
    try {
      await onAdd({ nume: nume.trim(), post, rezerva: false });
      setNume("");
      setPost("mijlocas");
    } catch (err) {
      setEroare(err.message);
    } finally {
      setTrimite(false);
    }
  }

  return (
    <form className="jucator-form" onSubmit={handleSubmit} noValidate data-testid="form">
      <label>
        Nume jucător
        <input
          type="text"
          value={nume}
          onChange={(e) => setNume(e.target.value)}
          placeholder="Ex: Gheorghe Grozav"
          maxLength={NUME_MAX}
          aria-invalid={Boolean(eroare)}
          data-testid="form-title"
        />
      </label>

      <label>
        Post în teren
        <select
          value={post}
          onChange={(e) => setPost(e.target.value)}
          data-testid="form-post"
        >
          {POSTURI.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      {eroare && (
        <p className="error" data-testid="form-error">
          {eroare}
        </p>
      )}

      <button type="submit" disabled={trimite} data-testid="form-submit">
        {trimite ? "Se salvează..." : "Adaugă jucător"}
      </button>
    </form>
  );
}