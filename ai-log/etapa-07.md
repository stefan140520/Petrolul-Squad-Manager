# Stage 7: AI log

## Tools
- Gemini

## Conversations
Link: (pune linkul acestei conversații aici)

## Key requests
### 1. Formular controlat, validare și operații CRUD pe server
- Asked: Am cerut implementarea Etapei 7 pentru aplicația Petrolul Squad: un formular controlat pentru adăugarea jucătorilor cu validare, mutarea operațiilor de adăugare, bifare și ștergere pe json-server, plus pregătirea pentru verificarea automată (`tw.json` și atributele `data-testid`).
- Got: Extinderea fișierului `api.js` cu funcția comună `request` (`POST`, `PATCH`, `DELETE`), componenta `JucatorForm.jsx`, actualizarea `App.jsx`, `JucatorCard.jsx`, `JucatoriList.jsx` și fișierul `tw.json`.
- Changed or rejected: Am integrat formularul în bara laterală din stânga, deasupra informațiilor despre următorul meci, și am adaptat câmpurile și validările la tema Petrolul Ploiești (`nume`, `post`, `rezerva`).

## What I learned / what did not work
Am învățat cum funcționează un formular controlat în React (`value` și `onChange`), cum se previne reîncărcarea paginii cu `e.preventDefault()`, cum se face validarea datelor înainte de trimiterea cererii HTTP și de ce este important ca interfața să fie actualizată abia după confirmarea serverului.