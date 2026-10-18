registerTopic({
  id: 'data-a-kodovani', order: 2, icon: '💾', title: 'Informace, data, bity a bajty', src: 'podklady',
  summary: 'Rozdíl mezi daty a informací, binární soustava v počítači, jednotky bit / byte / půlbyte a jejich násobky (2<sup>10</sup>), kódování a dekódování dat a pojem kód.',
  vocab: [
    { w: 'Data', x: 'Reprezentace skutečnosti (čísla, znaky, texty, fakta) schopná přenosu, uchování a zpracování – v počítači obvykle binární řetězce.' },
    { w: 'Informace', x: 'Sdělení, které má pro příjemce význam a usnadňuje mu rozhodování.' },
    { w: 'Interpretace dat', x: 'Proces, kterým z dat získáváme informaci (musíme jim rozumět).' },
    { w: 'Kód', x: 'Prosté (vzájemně jednoznačné) zobrazení objektů na kódová slova.' },
    { w: 'Kódové slovo', x: 'Binární řetězec přiřazený objektu; má-li délku n bitů, existuje 2<sup>n</sup> různých slov.' }
  ],
  key: [
    '<b>Data samy o sobě nejsou informace</b> – informaci dostaneš až interpretací (musíš znát kód).',
    '<b>1 bit</b> = 0/1 (ANO/NE), nedělitelný. <b>1 byte (B) = 8 bitů = 256 stavů</b> (0–255). <b>Půlbyte = 4 bity = 1 hex cifra</b>.',
    'Informatické násobky: <b>kilo = 2<sup>10</sup> = 1024</b>, mega = 2<sup>20</sup>, giga = 2<sup>30</sup>, tera = 2<sup>40</sup>, peta = 2<sup>50</sup>.',
    'n-bitová kódová slova = <b>2<sup>n</sup></b> různých kódových slov.',
    'Stejné kódové slovo může podle kódu představovat číslo, znak i barvu – bez znalosti kódu nelze dekódovat.'
  ],
  sections: [
    { title: 'Informace versus data', blocks: [
      { t: 'versus', cols: [
        { h: 'Data (údaj)', items: ['číselné hodnoty, znaky, texty, fakta', 'uspořádaná posloupnost znaků abecedy – v počítači binární řetězce', 'lze přenášet, uchovávat, zpracovávat'] },
        { h: 'Informace', items: ['sdělení s významem pro příjemce', 'usnadňuje volbu mezi alternativami při rozhodování', 'vzniká <b>interpretací</b> dat'] }
      ] },
      { t: 'ex', x: 'Text v čínštině nebo Morseova abeceda <b>∙∙∙ / --- / ∙∙∙</b> (S.O.S.) jsou data; informaci z nich získá jen ten, kdo kód zná.' },
      { t: 'def', term: 'Počítač (výpočetní systém)', x: 'Stroj na automatické ukládání, zpracovávání, zpřístupňování a přenos dat.' }
    ] },
    { title: 'Binární soustava v počítači', blocks: [
      { t: 'p', x: 'Počítač von Neumannovy architektury používá <b>dvojkovou soustavu</b> – všechny součásti zpracovávají údaje jako nuly a jedničky:' },
      { t: 'icons', items: [
        { i: '🧠', h: 'Operační paměť', x: 'ukládá data i programy jako 0/1' },
        { i: '➗', h: 'ALU', x: 'počítá ve dvojkové soustavě' },
        { i: '⌨️', h: 'Vstupní zařízení', x: 'stisk klávesy → 0/1' },
        { i: '🖥️', h: 'Výstupní zařízení', x: '0/1 → barva na obrazovce' }
      ] },
      { t: 'p', x: 'Stavy 1 / 0 se technicky snadno realizují: úrovně napětí, směr magnetických oblastí, odraz a pohlcení světla.' }
    ] },
    { title: 'Jednotky: bit, byte, půlbyte', blocks: [
      { t: 'svg', title: 'Bit, půlbyte a byte', x: UPP.byteDiagram() },
      { t: 'table', head: ['Jednotka', 'Značka', 'Velikost', 'Poznámka'], rows: [
        ['bit (binary digit)', 'b', '1 bit', 'ANO/NE, 1/0; dále nedělitelný; používá se hlavně u přenosu dat (rychlost sítě v b/s)'],
        ['půlbyte', '–', '4 bity = 16 stavů', '1 šestnáctková cifra'],
        ['byte (bajt)', 'B', '8 bitů = 2<sup>8</sup> = 256 stavů', 'čísla 0–255; nejmenší jednotka pro uložení dat (paměť, disk); zapisuje se 2 hex ciframi']
      ] },
      { t: 'tip', x: 'Bit = malé <b>b</b>, byte = velké <b>B</b>. Rychlost sítě se uvádí v <b>b</b>/s, velikost souboru v <b>B</b>.' }
    ] },
    { title: 'Vyšší jednotky', blocks: [
      { t: 'grid', head: ['Předpona', 'Značka', 'Fyzikální jednotky', 'Informatické jednotky'], rows: [
        ['kilo-', 'k', '10<sup>3</sup> = 1 000', '2<sup>10</sup> = 1 024'],
        ['mega-', 'M', '10<sup>6</sup> = 1 000 000', '2<sup>20</sup> = 1 048 576'],
        ['giga-', 'G', '10<sup>9</sup>', '2<sup>30</sup>'],
        ['tera-', 'T', '10<sup>12</sup>', '2<sup>40</sup>'],
        ['peta-', 'P', '10<sup>15</sup>', '2<sup>50</sup>']
      ] },
      { t: 'warn', x: 'Zlomkové předpony (mili-, mikro-, piko-) se pro informatické jednotky <b>nepoužívají</b> – nemají smysl (nelze mít polovinu bitu).' },
      { t: 'ex', x: '1 MB = 1 048 576 B = 8 388 608 b. Hexadecimální výpis paměti zobrazuje každý bajt jako dvojici hex cifer (např. <code>4F 4B</code>).' }
    ] },
    { title: 'Kódování a dekódování', blocks: [
      { t: 'def', term: 'Kód', x: 'Prosté (vzájemně jednoznačné) zobrazení množiny kódovaných objektů {x<sub>i</sub>} do množiny kódových slov {x′<sub>i</sub> = k(x<sub>i</sub>)}, kde kódová slova jsou binární řetězce. Mají-li délku n, lze vytvořit 2<sup>n</sup> různých kódových slov.' },
      { t: 'flow', title: 'Cesta dat', steps: [
        { h: 'Objekt', x: 'číslo, znak, barva, logická hodnota' },
        { h: 'Kódování', x: 'kód k přiřadí kódové slovo' },
        { h: 'Uložení', x: 'binární řetězec v paměti' },
        { h: 'Dekódování', x: 'interpretace musí znát stejný kód' }
      ] },
      { t: 'ex', x: 'Slovo 01000001 je <b>65</b> jako číslo, <b>„A“</b> jako ASCII znak – záleží na použitém kódu. Kolik objektů rozliší n bitů: n = 8 → 256, n = 16 → 65 536.' },
      { t: 'p', x: '<b>Druhy dat v počítači:</b>' },
      { t: 'ul', items: [
        '<b>Informační data:</b> logické hodnoty, znaky, čísla (v pevné řádové čárce – celá, v pohyblivé – reálná).',
        '<b>Povelová data:</b> instrukce programu (říkají procesoru, jak zpracovat informační data).'
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>b</b> (bit) a <b>B</b> (byte): 1 B = 8 b.',
    'Počítat 1 kB = 1000 B v informatice – dle slajdů je kilo = <b>1024</b> (2<sup>10</sup>).',
    'Tvrdit, že data jsou informace – informaci získáme až interpretací.',
    'Zapomenout, že kód musí být <b>prosté</b> zobrazení – různé objekty nesmí mít stejné kódové slovo.'
  ],
  qa: [
    { q: 'Jaký je rozdíl mezi daty a informací?', a: 'Data jsou zaznamenané údaje (binární řetězce), schopné přenosu a uchování; informace je sdělení s významem pro příjemce. Z dat ji získáme interpretací – k tomu je třeba znát kód.' },
    { q: 'Co je bit a byte? Kolik stavů má byte?', a: 'Bit je nejmenší nedělitelná jednotka (0/1, ANO/NE). Byte = 8 bitů = 2<sup>8</sup> = 256 různých stavů (čísla 0–255).' },
    { q: 'Co je půlbyte a k čemu slouží?', a: '4 bity (16 možností) = jedna cifra šestnáctkové soustavy; byte je dvojice hex cifer.' },
    { q: 'Kolik bajtů je 1 kB, 1 MB, 1 GB (informatické jednotky)?', a: '1 kB = 2<sup>10</sup> = 1024 B; 1 MB = 2<sup>20</sup> = 1 048 576 B; 1 GB = 2<sup>30</sup> B.' },
    { q: 'Proč počítače používají binární soustavu a jak lze 0/1 technicky realizovat?', a: 'Dva stavy lze snadno a spolehlivě rozlišit: napětí, směr magnetických oblastí, odraz a pohlcení světla.' },
    { q: 'Co je kód a kolik kódových slov lze vytvořit z n bitů?', a: 'Kód je prosté zobrazení objektů na kódová slova (binární řetězce); z n bitů lze vytvořit 2<sup>n</sup> různých kódových slov.' },
    { q: 'Proč musíme při dekódování znát použitý kód?', a: 'Stejné kódové slovo může podle různých kódů představovat různé objekty (číslo, znak, …); bez znalosti kódu nelze určit, co představuje.' },
    { q: 'Rozlište informační a povelová data.', a: 'Informační data nesou informaci (logické hodnoty, znaky, čísla); povelová data jsou instrukce programu, které určují procesoru, jak informační data zpracovat.' }
  ]
});
