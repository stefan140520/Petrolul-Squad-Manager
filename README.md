# Petrolul Squad Manager
A web application designed to manage the football squad for Petrolul Ploiești.
It helps the coach organize players by their positions on the pitch and match availability.

## Data model

| Field | Type | Notes |
| --- | --- | --- |
| Player Name | text | required, max 100 chars |
| Status | boolean | toggled from the list, default false (active = Starter, done = Bench/Sub) |
| Position | fixed values | Forward, Midfielder, Defender, Goalkeeper |
| Squad | relation | First Team, Second Team, U21 |
| Coach | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Gheorghe Grozav, active, Forward
2. Paul Papp, done, Defender
3. Sergiu Hanca, active, Midfielder

## AI usage

| Tool | Used for |
| --- | --- |
| Gemini | Understanding project requirements, defining the data model and README template |

Details per stage: see the `ai-log/` folder.

## Stage 4: components
The list is rendered from the data, through two components:
JucatoriList receives the whole array and renders one card per item
JucatorCard receives a single item through props and displays it

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [ ] Stage 5: local state and events



| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/README.md] | read |
| S1-R2 | AI usage section | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/ai-log/etapa-01.md] | read |
| S1-R3 | AI log for stage 1 | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/ai-log/etapa-01.md] | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/2e410af3c1587299229678dcc07e8f01defd3264/index.html#L10-L64] | open the page |
| S1-R5 | finished card looks different | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/2e410af3c1587299229678dcc07e8f01defd3264/style.css#L120-L124] | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/2e410af3c1587299229678dcc07e8f01defd3264/style.css#L132-L135] | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/2e410af3c1587299229678dcc07e8f01defd3264/style.css#L137-L151] | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [https://github.com/stefan140520/Petrolul-Squad-Manager/commit/2e410af3c1587299229678dcc07e8f01defd3264] | commit history |git add README.md

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/792371881bacddac3b9c775d91cd7a105de8a348/index.html#L67] | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/792371881bacddac3b9c775d91cd7a105de8a348/jucatori.js#L2-L6] | read |
| S2-R3 | list, count, search, add, toggle, delete | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/792371881bacddac3b9c775d91cd7a105de8a348/jucatori.js#L76-L90] | console output |
| S2-R4 | add rejects empty name and invalid tag | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/792371881bacddac3b9c775d91cd7a105de8a348/jucatori.js#L36-L41] | last 2 console lines |
| S2-R5 | original array unchanged after add | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/792371881bacddac3b9c775d91cd7a105de8a348/jucatori.js#L84] | console line |
| S2-R6 | README Stage 2 section + AI log | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/README.md] | read |
| S2-R7 | commit "Stage 2" pushed | [https://github.com/stefan140520/Petrolul-Squad-Manager/commit/792371881bacddac3b9c775d91cd7a105de8a348] | commit history |
## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2
moved into the main component; the list is still printed raw.

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React projectcd ..
| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/frontend/package.json] | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/98654c737ff48faca5911a172e1ad0e861562c87/frontend/src/App.jsx#L11-L21] | edit data, save |
| S3-R3 | data from README, not from the example | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/98654c737ff48faca5911a172e1ad0e861562c87/frontend/src/App.jsx#L2-L6] | compare with README |
| S3-R4 | stage 1 styles reused | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/frontend/src/App.css] | look at the page |
| S3-R5 | node_modules ignored, build passes | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/frontend/.gitignore] | npm run build |
| S3-R6 | README Stage 3 section + AI log | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/README.md], [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/ai-log/etapa-03.md] | read |
| S3-R7 | commit "Stage 3" pushed | [https://github.com/stefan140520/Petrolul-Squad-Manager/commit/98654c737ff48faca5911a172e1ad0e861562c87] | commit history |

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | [https://github.com/stefan140520/Petrolul-Squad-Manager/tree/main/frontend/src/components] | open folder |
| S4-R2 | card receives data through props | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/25b93e81b5e7e1b9f087eba4ccb8e8ee36596aec/frontend/src/components/JucatorCard.jsx#L9-L21] | read |
| S4-R3 | map + key={id}, no console warnings | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/25b93e81b5e7e1b9f087eba4ccb8e8ee36596aec/frontend/src/components/JucatoriList.jsx#L12-L13] | F12, Console |
| S4-R4 | message for empty list | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/25b93e81b5e7e1b9f087eba4ccb8e8ee36596aec/frontend/src/components/JucatoriList.jsx#L5] | set array to [] |
| S4-R5 | state changes the card look | [Lhttps://github.com/stefan140520/Petrolul-Squad-Manager/blob/25b93e81b5e7e1b9f087eba4ccb8e8ee36596aec/frontend/src/components/JucatorCard.jsx#L11] | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/README.md], [https://github.com/stefan140520/Petrolul-Squad-Manager/blob/main/ai-log/etapa-04.md] | read |
| S4-R7 | commit "Stage 4" pushed | [https://github.com/stefan140520/Petrolul-Squad-Manager/commit/25b93e81b5e7e1b9f087eba4ccb8e8ee36596aec] | commit history |

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page,
and the counters in the header follow automatically. A button in the
header switches between light and dark mode. Changes are lost on refresh,
which is what stage 6 and stage 10 fix.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events
- [ ] Stage 6: loading data from a mock API

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | [LINK_App_useState] | read |
| S5-R2 | toggling changes state and card look | [LINK_App_handleToggle_si_JucatorCard_checkbox] | click a checkbox |
| S5-R3 | delete removes the item | [LINK_App_handleDelete_si_JucatorCard_buton] | click Delete |
| S5-R4 | header counter derived, not in state | [LINK_App_Titulari_Derivat] | toggle, watch header |
| S5-R5 | immutable updates (no push, splice) | [LINK_App_Imutabil_Map_Filter] | read |
| S5-R6 | light/dark toggle: state + data-theme | [LINK_App_Theme_si_AppCSS] | click the button |
| S5-R7 | no console warnings; README + AI log | [LINK_README_AILOG] | F12, Console |
| S5-R8 | commit "Stage 5" pushed | [LINK_COMMIT_STAGE_5] | commit history |