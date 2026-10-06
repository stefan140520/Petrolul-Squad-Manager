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

## Stage 2: data logic
Plain JavaScript, no DOM. jucatori.js holds the array and the functions
that read and change it. Results are printed in the browser console (F12).

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: Vite and React project




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