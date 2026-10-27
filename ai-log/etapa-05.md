# Stage 5: AI log

## Tools
- Gemini

## Conversations
Link: (pune linkul de la această conversație aici)

## Key requests
### 1. Implementarea interactivității cu useState
- Asked: Am cerut adaptarea codului pentru a face lista jucătorilor interactivă (bifare și ștergere) și adăugarea Dark/Light mode, respectând tema "Petrolul Squad Manager".
- Got: Am primit codul complet pentru `App.jsx` folosind `useState` pentru a stoca lista de jucători și tema. De asemenea, funcțiile imutabile pentru `handleToggle` și `handleDelete`.
- Changed or rejected: Am acceptat codul, am adăugat și stilizarea necesară în `App.css` pentru a repara afișarea checkbox-ului și a butonului de ștergere. Am cerut la un moment dat un aspect de card FIFA, dar am revenit la designul clasic din ghid pentru a respecta mai bine structura laboratorului.

## What I learned / what did not work
Am înțeles cum funcționează `useState` și cum se trimit funcțiile (`onToggle`, `onDelete`) din componenta părinte (`App.jsx`) către componenta copil (`JucatorCard.jsx`) prin props. Am învățat ce este un "checkbox controlat" (folosind `checked` și `onChange`) și cum actualizările stării trebuie să fie imutabile (folosind `.map` și `.filter`). De asemenea, am văzut cum o valoare derivată (numărul de titulari) se recalculează automat la fiecare modificare a stării.