# Stage 6: AI log

## Tools
- Gemini

## Conversations
Link: (pune linkul conversației noastre aici)

## Key requests
### 1. Migrarea datelor pe un API simulat (json-server)
- Asked: Am cerut ajutor pentru mutarea datelor din codul React într-un server local JSON (`db.json`) și încărcarea lor folosind `useEffect` și `fetch`.
- Got: Structura pentru `db.json`, configurarea `api.js` pentru apelurile HTTP, configurarea scriptului `"api"` în `package.json` și codul pentru `App.jsx` cu tratarea stărilor de încărcare (loading) și eroare.
- Changed or rejected: Am păstrat toate propunerile, adaptând câmpurile pentru jucătorii echipei Petrolul Ploiești și adăugând stilurile CSS pentru stările de încărcare și eroare.

## What I learned / what did not work
Am învățat cum se simulează un API REST folosind `json-server`, cum se efectuează cereri HTTP asincrone folosind `fetch` în interiorul hook-ului `useEffect` și cum se folosește un fanion de curățare (`let ignore = false`) pentru a preveni actualizarea stării după demontarea componentei. De asemenea, am înțeles importanța tratării celor 3 stări ale unei încărcări (loading, succes, eroare).