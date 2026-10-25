# ČZU Skripta – jak přidávat předměty, témata a diagramy

Statický web bez build kroku a bez závislostí: HTML + JS soubory, otevře se přímo v prohlížeči
(nebo `python3 -m http.server` v kořeni). Obsah je česky.

```
index.html              rozcestník předmětů (karty)
assets/app.js           společný engine (vykreslení témat, hledání, kartičky)
assets/style.css        styly (tmavý/světlý motiv přes CSS proměnné)
assets/dg.js            SVG helpery pro diagramy (DG)
<předmět>/index.html    stránka předmětu: window.SUBJECT + seznam <script> s tématy
<předmět>/topics/NN-*.js   jedno téma = jeden soubor, volá registerTopic({...})
<předmět>/diagrams.js   SVG diagramy předmětu (const UPP / ZPN …)
assets/map.js           společný engine myšlenkové mapy (#/mapa, widget 'mapa'): MINDMAP(kostra)
<předmět>/map.js         kostra mapy: MINDMAP({ h, c, x, kids: [{ h, c, x, kids: ['id-tématu', …] }] }); sekce a pojmy se berou z témat; vzor upp/map.js
tools/shot.swift        render HTML → PNG (WebKit) pro kontrolu diagramů
```

Předměty: `upp` (B-UPP, Úvod do principu počítačů), `zpn` (Základy právních nauk), `tros` (Teorie řízení organizačních systémů / Základy řízení), `mlg` (Matematická logika a grafy – logika, množiny a relace, grafy, konečné automaty; přednášky P1–P12 odvozené z pořadí podkladů), `ang` (Angličtina podle učebnice Lifestyle Intermediate: gramatika z lekcí 1–12 a Grammar reference (témata 1–25), ke každé lekci téma s Word Focus, Communication strategies a Interaction (26–37) a Review 1–3, 4–6, 7–9, 10–12 (38–41); učebnice je jen sken, text se získal OCR – ověř při pochybnostech ve zdrojovém PDF).

## Podklady (`src_materials/`)

```
src_materials/<předmět>/original/    původní soubory (PDF, docx, pptx …) – mimo git (.gitignore), jen lokálně
src_materials/<předmět>/extracted/   textová extrakce, 1 soubor .txt na originál, stejný název – JE v gitu
```

`extracted/`: PDF po stránkách (`=== PAGE n ===`), pptx po slajdech (`=== SLIDE n ===`); tabulky a obrázky v nich chybí. Učebnice `ang` je OCR (Apple Vision, může mít chyby). **Neextrahováno:** 7 starých `.ppt` v `zpn/original` (nemáme nástroj) – obsah ověř jinak nebo se zeptej.

**Před prací na předmětu (nové téma, oprava, doplnění):**
1. Zkontroluj aktuální skripta předmětu (`<předmět>/topics/*.js`, `diagrams.js`) – co už je pokryto.
2. Chybí-li fakt, hledej ho v `src_materials/<předmět>/extracted/` (`grep -ri`), případně na jiných předmětech, pokud se tématem překrývají.
3. Není-li to ani tam, **zeptej se uživatele na další podklady**; až je dodá, ulož originály do `original/`, extrahuj do `extracted/`, commitni `extracted/` a teprve potom je zpracuj do témat.
4. Co v podkladech není, nevymýšlej; doplněný obsah označ podle pravidel níže („(doplněno)“).

## Nový předmět

**Každý nový předmět musí mít od začátku i diagramy (`<id>/diagrams.js`)** – nejsou volitelné. Postup: témata → diagramy do témat → myšlenková mapa. Videa se nedělají. Předmět je hotový, až když projdou body „Hotovo“ na konci této sekce.

1. Složka `<id>/` (krátké id, např. `mat`) s `topics/`.
2. `<id>/index.html` – zkopíruj `upp/index.html` a uprav:
   - `<title>`, nadpis v `<header>` a kód v `<span class="code">`,
   - `window.SUBJECT = { id, code, name, desc, lockDraft: true }` (`id` = název složky; je i klíčem v localStorage),
   - pořadí skriptů: `../assets/app.js`, `../assets/dg.js`, `diagrams.js` (má-li diagramy), `../assets/map.js` + `map.js` (myšlenková mapa), pak `topics/*.js`.
3. Kartu do kořenového `index.html` (`<a class="tcard" href="<id>/index.html">…`).
4. `<id>/diagrams.js` (viz „Diagramy“) – aspoň jeden diagram na téma tam, kde je co zobrazit (postupy, vztahy množin, schémata, tabulky převodů); do `index.html` ho dej před `topics/*.js`.
5. `<id>/map.js` – myšlenková mapa: větve podle logiky předmětu, v nich id témat (téma mimo kostru spadne do větve „Ostatní“). Pojmy v uzlech se generují z témat.
6. Přidej předmět do seznamu „Předměty“ výše.

**Hotovo:** (a) témata se načtou ve `vm` bez chyb; (b) diagramy jsou vyrenderované a prohlédnuté (nepřetékají texty); (c) téma s `src: 'doplneno'` diagram nepotřebuje (je zamčené).

## Nové téma

Soubor `<předmět>/topics/NN-nazev.js` (NN = pořadí) a jeho `<script>` v `<předmět>/index.html`.

```js
registerTopic({
  id: 'ciselne-soustavy',      // unikátní v předmětu, je v URL (#/id)
  order: 1,                    // pořadí v menu; 0 = „O předmětu“
  icon: '🔢', title: '…', summary: '…',
  src: 'podklady',             // 'podklady' = z dodaných materiálů; 'doplneno' = bez podkladů → téma je ZAMČENÉ (SUBJECT.lockDraft)
  lec: [6],                    // čísla přednášek (štítek P6 v menu a na kartě); u více přednášek [6, 9]
  where: 'Přednáška 6 + Cvičení 3',   // volitelné, zdroj
  vocab: [{ w: 'pojem', x: 'vysvětlení' }],          // slovníček nahoře
  key: ['<b>…</b> …'],                                // rychlý přehled vpravo
  sections: [{ title: 'Název sekce', blocks: [ … ] }],
  mistakes: ['…'],                                   // časté chyby
  qa: [{ q: 'otázka', a: 'odpověď' }]                // otázky + kartičky
});
```

Záložky (volitelné): `window.SUBJECT.groups = [{ id, name, short, icon }]` a v tématu `group: 'id'` rozdělí menu i přehled na záložky; téma bez `group` je vidět ve všech (vzor: `ang`).

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
- Kontrola: vyrenderovat do PNG a prohlédnout; hlídat přetékající text v boxech a překryvy. Headless Chrome tu nefunguje, renderuje WebKit: `swiftc -O -o /tmp/shot tools/shot.swift`, pak `/tmp/shot / diagram.html diagram.png` (HTML stránka s `<div class="dg">` a odkazem na `assets/style.css`; snímek 1280×720).

## Ověření změn
- `node --check assets/app.js`; témata předmětu načíst v `node:vm` s `registerTopic` (odhalí chybějící čárky).
- Spustit `python3 -m http.server` a projít hlavní stránku i téma; po změně CSS/JS může prohlížeč držet starou verzi v cache.
