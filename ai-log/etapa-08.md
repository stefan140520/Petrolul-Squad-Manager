# Stage 8: AI log

## Tools
- Gemini

## Conversations
Link: (pune linkul acestei conversații aici)

## Key requests
### 1. Rutare cu React Router și stilizare cu CSS Modules
- Asked: Am cerut împărțirea aplicației Petrolul Squad în mai multe pagini folosind React Router (`/`, `/jucatori/:id`, `/despre` și ruta `*` pentru 404), crearea unui layout comun cu navigare fără reîncărcare și migrarea stilurilor din CSS global în fișiere `.module.css` pe fiecare componentă.
- Got: Configurarea `BrowserRouter` în `main.jsx`, harta rutelor în `App.jsx`, componenta `Layout.jsx` cu `NavLink` și `Outlet`, paginile `JucatoriPage`, `JucatorDetaliuPage`, `DesprePage` și `NotFoundPage`, fișierele `.module.css` aferente, `constants.js` și funcția `fetchJucator(id)` în `api.js`.
- Changed or rejected: Am păstrat identitatea vizuală FC Petrolul Ploiești (fundalul, sigla `emblema.jpg`, comutatorul pentru tema dark/light în antet) și panoul cu următorul meci pe pagina principală.

## What I learned / what did not work
Am învățat cum funcționează navigarea SPA fără reîncărcare cu `BrowserRouter`, `Routes`, `NavLink` și `Outlet`, cum se preia parametrul dinamic `id` din URL cu `useParams()` și cum izolează CSS Modules clasele fiecărei componente. De asemenea, am rezolvat o eroare de rulare cauzată de instalarea accidentală a `react-router-dom` în rădăcină în loc de `frontend`.