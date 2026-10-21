# ČZU Skripta – jak přidávat předměty, témata, diagramy a videa

Statický web bez build kroku a bez závislostí: HTML + JS soubory, otevře se přímo v prohlížeči
(nebo `python3 -m http.server` v kořeni). Obsah je česky.

```
index.html              rozcestník předmětů (karty)
assets/app.js           společný engine (vykreslení témat, hledání, kartičky, videa)
assets/style.css        styly (tmavý/světlý motiv přes CSS proměnné)
assets/dg.js            SVG helpery pro diagramy (DG)
<předmět>/index.html    stránka předmětu: window.SUBJECT + seznam <script> s tématy
<předmět>/topics/NN-*.js   jedno téma = jeden soubor, volá registerTopic({...})
<předmět>/diagrams.js   SVG diagramy předmětu (const UPP / ZPN …)
<předmět>/map.js         volitelná myšlenková mapa (#/mapa, widget 'mapa'): ručně kostra, sekce a pojmy se berou z témat; vzor zpn/map.js
<předmět>/videos/       vygenerovaná videa *.mp4, náhledy *.jpg a index.js (window.VIDEOS)
tools/video.mjs         generátor videí, tools/video-lib.mjs stavebnice snímků,
tools/videos-<předmět>.mjs scénáře videí, tools/shot.swift render HTML → PNG
```

Předměty: `upp` (B-UPP, Úvod do principu počítačů), `zpn` (Základy právních nauk), `tros` (Teorie řízení organizačních systémů / Základy řízení; scénáře videí `tools/videos-tros.mjs`), `mlg` (Matematická logika a grafy; zatím jen výroková logika, negace a Quine–McCluskey; scénáře videí `tools/videos-mlg.mjs`).

## Nový předmět

**Každý nový předmět musí mít od začátku i diagramy (`<id>/diagrams.js`) a videa (`tools/videos-<id>.mjs` + `<id>/videos/`)** – nejsou volitelné. Postup: témata → diagramy do témat → scénáře videí → `node tools/video.mjs <id>` → `videos/index.js` do `index.html`. Předmět je hotový, až když projdou body „Hotovo“ na konci této sekce.

1. Složka `<id>/` (krátké id, např. `mat`) s `topics/`.
2. `<id>/index.html` – zkopíruj `upp/index.html` a uprav:
   - `<title>`, nadpis v `<header>` a kód v `<span class="code">`,
   - `window.SUBJECT = { id, code, name, desc, lockDraft: true }` (`id` = název složky; je i klíčem v localStorage),
   - pořadí skriptů: `../assets/app.js`, `../assets/dg.js`, `diagrams.js` (má-li diagramy), pak `topics/*.js`, nakonec `videos/index.js` (má-li videa).
3. Kartu do kořenového `index.html` (`<a class="tcard" href="<id>/index.html">…`).
4. `<id>/diagrams.js` (viz „Diagramy“) – aspoň jeden diagram na téma tam, kde je co zobrazit (postupy, vztahy množin, schémata, tabulky převodů); do `index.html` ho dej před `topics/*.js`.
5. `tools/videos-<id>.mjs` a vygenerovaná videa (viz „Videa“) – aspoň jedno video na téma, každé u sekce, ke které patří; `<script src="videos/index.js">` na konec `index.html`.
6. Přidej předmět do seznamu „Předměty“ výše.

**Hotovo:** (a) `node tools/video.mjs <id>` doběhne bez chyb a vyhodí `throw` u špatných čísel; (b) všechna `at` sedí na nadpisy sekcí; (c) diagramy i snímky videí jsou prohlédnuté (nepřetékají texty); (d) téma s `src: 'doplneno'` videa ani diagram nepotřebuje (je zamčené).

## Nové téma

Soubor `<předmět>/topics/NN-nazev.js` (NN = pořadí) a jeho `<script>` v `<předmět>/index.html`.

```js
registerTopic({
  id: 'ciselne-soustavy',      // unikátní v předmětu, je v URL (#/id) a ve videích (klíč VIDEOS)
  order: 1,                    // pořadí v menu; 0 = „O předmětu“
  icon: '🔢', title: '…', summary: '…',
  src: 'podklady',             // 'podklady' = z dodaných materiálů; 'doplneno' = bez podkladů → téma je ZAMČENÉ (SUBJECT.lockDraft)
  where: 'Přednáška 6 + Cvičení 3',   // volitelné, zdroj
  vocab: [{ w: 'pojem', x: 'vysvětlení' }],          // slovníček nahoře
  key: ['<b>…</b> …'],                                // rychlý přehled vpravo
  sections: [{ title: 'Název sekce', blocks: [ … ] }],
  mistakes: ['…'],                                   // časté chyby
  qa: [{ q: 'otázka', a: 'odpověď' }]                // otázky + kartičky
});
```

Texty jsou HTML (`<b>`, `<sub>`, `<sup>`, `<i>`). Bloky v `blocks` (`t` = typ):

| typ | pole | vzhled |
|---|---|---|
| `p` | `x` | odstavec |
| `ul` / `ol` | `items: []` | seznam |
| `def` | `term`, `x` | definice (modrý box) |
| `law` | `ref`, `x` | citace zákona / paragrafu |
| `tip` / `warn` / `ex` | `x` | Zapamatuj si / Pozor / Příklad |
| `table` | `head`, `rows` | podle tvaru: 2 sloupce → glosář; 1. hlavička „hledisko/kritérium/znak/prázdná“ → srovnání; jinak karty / řádky |
| `grid` | `head`, `rows` | obyčejná tabulka (hodnoty, výsledky příkladů) |
| `flow` | `title`, `steps: [{h, x}]` | očíslovaný postup |
| `tree` | `title`, `root: {h, x, kids: [...]}` | strom |
| `pyramid` | `title`, `levels: [{h, x}]` | hierarchie (nahoře nejvyšší) |
| `timeline` | `title`, `items: [{when, h, x}]` | časová osa |
| `nums` | `title`, `items: [{n, u, x}]` | čísla k zapamatování |
| `icons` | `title`, `items: [{i, h, x}]` | dlaždice s emoji |
| `versus` | `title`, `cols: [{h, items}]`, `x` | srovnání sloupců (2 → se znakem ×); `x` = souvislé vysvětlení pod sloupci („Srozumitelně“) – u ZPN ho má každé porovnání |
| `svg` | `title`, `x`, `cap` | vlastní diagram, `x: UPP.nazev()` |
| `widget` | `name`, `title`, `x`, `cap` | interaktivní prvek; kód ve `<předmět>/*.js` (před `topics/*.js`) se registruje jako `window.WIDGETS[name] = (element, blok) => …`; styly s předponou `qw-` v `style.css`; vzor: `mlg/qm-widget.js` (Quine–McCluskey krok za krokem) |

Pravidla obsahu:
- Fakta jen z podkladů. Je-li ve slajdech chyba, napiš správnou verzi a přidej `warn` s vysvětlením („Slajd uvádí…, správně…“).
- Obsah mimo podklady označ v nadpisu sekce „(doplněno)“; celé téma bez podkladů má `src: 'doplneno'` (zůstane zamčené, nevidí se).
- Příklady počítej a ověř (u čísel nejlépe skriptem), ne odhadem.
- Porovnání A × B (`versus`) doplň polem `x`: 3–6 vět souvislého textu (ne body), které vysvětlí podstatu rozdílu a ukážou ho na běžném příkladu.

## Diagramy (SVG)

V `<předmět>/diagrams.js` uvnitř `const XXX = (() => { const { svg, text, rect, line, path, box, cells } = DG; … return { … }; })();`.

- `svg(w, h, body)` – viewBox; text 13 px, takže šířka ~720–760.
- `box(x, y, w, h, cls, popisek, podpopisek)`, `rect`, `text(x, y, s, cls)`, `line(x1, y1, x2, y2, cls, '' | 'end' | 'both')`, `path(d, cls, šipka)`, `cells(x, y, '0101', clsPole)` (bity).
- Třídy (styly v `style.css`, sekce `.dg`): výplně `b` (neutrální), `fA` (červená), `fD` (modrá), `fW` (oranžová), `fE` (růžová), `pd` (čárkovaný rámeček); čáry `ln`, `lA`, `lD`, `lW`, `ds` (čárkovaná); text `c` (na střed), `e` (zarovnat vpravo), `bd`, `sm`, `mu` (šedý), `mo` (monospace), `tA/tD/tW/tE` (barvy).
- Do tématu: `{ t: 'svg', title: '…', x: XXX.nazev(), cap: '…' }` – diagram musí být v `diagrams.js` načteném před tématy.
- Kontrola: vyrenderovat do PNG (viz `tools/shot.swift` níže) a prohlédnout; hlídat přetékající text v boxech a překryvy.

## Videa

Krátká videa (≈ 40–75 s): snímky + český komentář (hlas Zuzana). Každé video se na webu zobrazí v sekci, jejíž nadpis obsahuje `at`; na hlavní stránce dostane kapitola odznak „▶ N videí“.

Požadavky (jen macOS): `say` s hlasem Zuzana, `ffmpeg`/`ffprobe` (Homebrew), `swiftc` (Xcode CLT), Node 18+.
Headless Chrome/Brave tu nefunguje – snímky renderuje WebKit přes `tools/shot.swift`.

```bash
node tools/video.mjs upp            # všechna videa předmětu
node tools/video.mjs zpn 05-2       # jen videa, jejichž soubor obsahuje "05-2"
```

Výstup: `<předmět>/videos/<file>.mp4` + `.jpg` (náhled) + `index.js` (seznam pro web; přegeneruje se vždy celý z existujících mp4).

### Nový předmět s videi
1. `tools/videos-<id>.mjs` (vzor `tools/videos-zpn.mjs`): `export const CODE = 'XYZ'` (text v liště snímku) a `export const VIDEOS = { '<id-tématu>': [ … ] }`.
2. Diagramy do snímků: `const XXX = loadDiagrams('<id>', 'XXX')`.
3. Do `<id>/index.html` přidat `<script src="videos/index.js"></script>` (až po vygenerování).

### Scénář videa
```js
{ file: '06-2-promlceni-prekluze',     // název souboru: NN-poradi-nazev
  at: 'Promlčení (§ 609',              // část nadpisu sekce, kam video patří (bez HTML)
  title: 'Promlčení a prekluze',
  steps: [                             // krok = jeden snímek + jeden komentář
    { h: title('Nadpis', 'podtitulek'), say: 'Úvodní věta.' },
    ...reveal('Nadpis seznamu', [['řádek na snímku', 'komentář k řádku'], …]),   // odkrývání po řádcích
    { h: diagram('Nadpis', XXX.nazev()), say: '…' },
    { h: list('Pozor', ['…', '…'], 2, false), say: '…' },
    { h: `<h2>…</h2>${tt(['', 'A', 'B'], [['řádek', '1', '2']])}`, say: '…' }    // tabulka
  ] }
```
Helpery z `tools/video-lib.mjs`: `title`, `list(h, items, kolikViditelných, zvýraznitPoslední)`, `reveal`, `diagram`, `big` (velký vzorec), `tt` (tabulka), `sp` (bity do komentáře po cifrách).

Pravidla pro komentář (`say`) – syntéza čte doslova:
- Žádné symboly a zkratky: místo „§ 605“ „paragraf šest set pět“, „čl.“ → „článek“, „PS“ → „Poslanecká sněmovna“, „−5“ → „minus pět“, „2³“ → „dva na třetí“.
- Bity a hex cifry odděleně („jedna nula jedna“, „cé nula dé“), data a letopočty slovy.
- Snímek je stručný, komentář vysvětluje celou větou. Délka jednoho kroku ≈ 1–3 věty.
- Čísla v příkladech generuj výpočtem ve scénáři a ověř `throw`/asserty (viz `videos-upp.mjs`: doplňkový kód, Hamming, IEEE 754, `videos-zpn.mjs`: dny v týdnu).

Kontrola po renderu:
- Ověř, že všechna `at` sedí na sekce (jinak video spadne do první sekce tématu) – stačí načíst témata ve `vm` a hledat `s.title.includes(v.at)`.
- Prohlédni snímky z `/tmp/skripta-video/<file>-<krok>.png` (vysoké diagramy se mohou oříznout; omezení je `max-height` v CSS v `video-lib.mjs`).
- Videa si poslechni (výslovnost cizích slov, latiny).

## Ověření změn
- `node --check assets/app.js`; témata předmětu načíst v `node:vm` s `registerTopic` (odhalí chybějící čárky).
- Spustit `python3 -m http.server` a projít hlavní stránku i téma; po změně CSS/JS může prohlížeč držet starou verzi v cache.
