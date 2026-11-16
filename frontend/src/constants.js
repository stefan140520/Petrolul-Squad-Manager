export const POSTURI = [
  { value: "portar", label: "Portar" },
  { value: "fundas", label: "Fundaș" },
  { value: "mijlocas", label: "Mijlocaș" },
  { value: "atacant", label: "Atacant" },
];

export const ETICHETE_POSTURI = Object.fromEntries(
  POSTURI.map((p) => [p.value, p.label])
);