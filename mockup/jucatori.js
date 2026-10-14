// Datele de test și valorile permise
const jucatori = [
  { id: 1, nume: "Gheorghe Grozav", rezerva: false, post: "atacant" },
  { id: 2, nume: "Paul Papp", rezerva: true, post: "fundas" },
  { id: 3, nume: "Sergiu Hanca", rezerva: false, post: "mijlocas" }
];

const POSTURI_PERMISE = ["atacant", "mijlocas", "fundas", "portar"];

// 1. Listarea numelor jucătorilor (folosind map)
function listeazaNume(lista) {
  return lista.map((j) => j.nume);
}

// 2. Numărarea elementelor active / titulari (folosind filter)
function numaraTitulari(lista) {
  const titulari = lista.filter((j) => !j.rezerva);
  return titulari.length;
}

// 3. Căutarea după nume (insensibilă la litere mari/mici)
function cautaDupaNume(lista, text) {
  const textMic = text.toLowerCase();
  return lista.filter((j) => j.nume.toLowerCase().includes(textMic));
}

// Funcție ajutătoare pentru generarea următorului ID unic
function nextId(lista) {
  return lista.reduce((max, j) => Math.max(max, j.id), 0) + 1;
}

// 4. Adăugarea unui element (cu validare)
function adaugaJucator(lista, nume, post = "mijlocas") {
  const numeCurat = nume.trim();
  
  if (numeCurat === "") {
    console.log("Eroare validare: Numele nu poate fi gol.");
    return lista;
  }
  
  if (!POSTURI_PERMISE.includes(post)) {
    console.log(`Eroare validare: Postul '${post}' este invalid.`);
    return lista;
  }
  
  const jucatorNou = {
    id: nextId(lista),
    nume: numeCurat,
    rezerva: false,
    post: post
  };
  
  // Returnează array-ul nou fără a modifica originalul
  return [...lista, jucatorNou];
}

// 5. Comutarea stării de rezervă / titular
function comutaStare(lista, id) {
  return lista.map((j) => {
    if (j.id === id) {
      return { ...j, rezerva: !j.rezerva };
    }
    return j;
  });
}

// 6. Ștergerea unui jucător din listă
function stergeJucator(lista, id) {
  return lista.filter((j) => j.id !== id);
}


// ==========================================
// Testele din consolă 
// ==========================================
console.log("--- Citire ---");
console.log("Lotul:", listeazaNume(jucatori).join(", "));
console.log("Titulari (active):", numaraTitulari(jucatori));
console.log("Căutare 'gheorghe':", listeazaNume(cautaDupaNume(jucatori, "gheorghe")).join(", "));

console.log("--- Adăugare ---");
let listaNoua = adaugaJucator(jucatori, "Alexandru Tudorie", "atacant");
console.log("Lista nouă are:", listaNoua.length, "jucători");
console.log("Originalul a rămas cu:", jucatori.length, "jucători");

console.log("--- Modificare și ștergere ---");
listaNoua = comutaStare(listaNoua, 1); // Face id-ul 1 rezervă
console.log("După schimbarea stării id-ului 1, titulari:", numaraTitulari(listaNoua));

listaNoua = stergeJucator(listaNoua, 3);
console.log("După ștergerea id-ului 3 (Hanca), lotul conține:", listeazaNume(listaNoua).join(", "));

console.log("--- Validare ---");
adaugaJucator(listaNoua, "   "); // Validare nume gol
adaugaJucator(listaNoua, "Lucian Dumitriu", "extremă stângă"); // Validare post greșit