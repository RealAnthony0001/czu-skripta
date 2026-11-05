registerTopic({
  id: 'zapis-algoritmu', order: 2, icon: '📝', title: 'Formální zápis algoritmů a první úlohy', src: 'podklady', lec: [1], where: 'Přednáška 1 – formální zápis, úlohy k procvičení',
  summary: 'Textový popis, pseudokód a vývojový diagram (značky), a na nich tři úlohy z přednášky: nejmenší ze tří čísel, průměr řady ukončené nulou a násobení pomocí sčítání.',
  vocab: [
    { w: 'textový popis', x: 'algoritmus zapsaný textovými příkazy a dotazy („udělej krok“, „mám před sebou překážku?“)' },
    { w: 'pseudokód', x: 'mezistupeň mezi textem, grafickým zápisem a kódem; standardizované příkazy a operace' },
    { w: 'vývojový diagram', x: 'grafický zápis algoritmu značkami spojenými šipkami' },
    { w: 'rozhodovací člen', x: 'kosočtverec s podmínkou; vycházejí z něj dvě větve (+ / −)' },
    { w: 'spojka', x: 'kroužek, který propojí části diagramu (např. na jiné stránce); čísluje se' }
  ],
  key: [
    'Tři formy zápisu: <b>textový popis → pseudokód → vývojový diagram</b> (dál strukturogram, viz P2).',
    'Pseudokód: <span class="mo">když (měsíc=12) pak (…) jinak (…)</span>, <span class="mo">dokud (počet_kroků&lt;10) dělej (…)</span>.',
    'Značky: ovál = začátek/konec, kosočtverec = rozhodnutí, obdélník = příkaz / načtení dat, obdélník s pruhy = podprogram, kruh = spojka.',
    'Úloha s řadou ukončenou nulou: nulu <b>nezapočítávat</b> a ošetřit případ, kdy se nezadá nic.'
  ],
  sections: [
    { title: 'Tři způsoby zápisu', blocks: [
      { t: 'table', head: ['Zápis', 'Co to je', 'Příklady z přednášky'], rows: [
        ['Textový popis', 'textové příkazy a dotazy', 'udělej krok · otoč se o 90 stupňů · mám před sebou překážku? · dokud je počet kroků &lt; 10, dělej…'],
        ['Pseudokód', 'mezistupeň mezi textovým popisem, grafickým zápisem a kódem v konkrétním jazyce; standardizované příkazy a operace', 'krok · když (měsíc=12) pak (něco) jinak (něco jiného) · dokud (počet_kroků&lt;10) dělej (něco)'],
        ['Vývojový diagram', 'grafický zápis značkami a šipkami', 'viz značky níže']
      ] },
      { t: 'svg', title: 'Značky vývojového diagramu', x: ALG.symboly(), cap: 'Pět značek ze slajdu. Ovál začíná a končí algoritmus, kosočtverec obsahuje podmínku a větví výpočet, obdélník je příkaz nebo načtení dat, obdélník se svislými pruhy volá podprogram (funkci) a očíslovaný kroužek spojuje přerušené šipky.' }
    ] },
    { title: 'Úloha: nejmenší ze tří čísel', blocks: [
      { t: 'p', x: 'Zadání: máš čísla a, b, c a máš rozhodnout, jaká je hodnota nejmenšího z nich.' },
      { t: 'svg', title: 'Řešení vývojovým diagramem (doplněno)', x: ALG.minTri(), cap: 'Do proměnné min se nejdřív uloží a. Pak se postupně porovná b a c: je-li číslo menší než dosavadní min, přepíše ho („+“ vpravo). Nakonec se vypíše min. Stačí dvě porovnání.' },
      { t: 'ex', x: 'a = 7, b = 3, c = 5: min = 7 → 3 &lt; 7, min = 3 → 5 &lt; 3 neplatí → vypíše se <b>3</b>.' }
    ] },
    { title: 'Úloha: průměr v zadané posloupnosti', blocks: [
      { t: 'p', x: 'Zadání: algoritmus se postupně ptá na čísla; zadá-li uživatel 0, zadávání končí a vypíše se průměr zadaných čísel.' },
      { t: 'svg', title: 'Řešení vývojovým diagramem (doplněno)', x: ALG.prumer(), cap: 'Smyčka vlevo načítá čísla, přičítá je do součtu a počítá je. Když přijde 0, smyčka skončí a vpravo se ještě zkontroluje, zda bylo zadáno aspoň jedno číslo – jinak by se dělilo nulou.' },
      { t: 'ex', x: 'Vstup 4, 8, 6, 0 → soucet = 18, pocet = 3 → průměr <b>6</b>. Nula ukončuje zadávání a do průměru se nepočítá.' },
      { t: 'warn', x: 'Když uživatel zadá hned 0, je pocet = 0 a dělení by selhalo. Správný algoritmus tento případ ošetří (resultativnost i pro „prázdný“ vstup).' }
    ] },
    { title: 'Úloha: vynásobení celých kladných čísel', blocks: [
      { t: 'p', x: 'Zadání: pomocí operace sčítání vynásob dvě zadaná kladná celá čísla; jako rozšíření uprav algoritmus na všechna celá čísla.' },
      { t: 'flow', title: 'Postup (doplněno)', steps: [
        { h: 'načti a, b', x: 'obě kladná celá čísla' },
        { h: 'vysledek = 0', x: 'počáteční hodnota součtu' },
        { h: 'opakuj b-krát', x: 'vysledek = vysledek + a' },
        { h: 'piš vysledek', x: 'a · b vznikne jako a + a + … + a (b sčítanců)' }
      ] },
      { t: 'ex', x: 'a = 4, b = 3: 0 → 4 → 8 → <b>12</b>.' },
      { t: 'tip', x: 'Rozšíření na všechna celá čísla (doplněno): sčítej |a| tolikrát, kolik je |b|, a na konci uprav znaménko – výsledek je záporný, právě když má právě jedno z čísel záporné znaménko. Pro b = 0 se cyklus neprovede a výsledek je 0.' }
    ] }
  ],
  mistakes: [
    'Do průměru započítat ukončovací nulu.',
    'Nekontrolovat, zda byl zadán aspoň jeden prvek (dělení nulou).',
    'U hledání minima začít s min = 0 – pro samá kladná čísla by výsledek byl chybně 0; začíná se prvním číslem.',
    'Splést značky: obdélník = příkaz, kosočtverec = rozhodnutí, ovál = začátek/konec.'
  ],
  qa: [
    { q: 'Jaké tři formy zápisu algoritmu uvádí přednáška 1?', a: 'Textový popis, pseudokód a vývojový diagram.' },
    { q: 'Co je pseudokód?', a: 'Mezistupeň mezi textovým popisem, grafickým zápisem a kódem v konkrétním jazyce; používá standardizované příkazy a operace.' },
    { q: 'Jakou značkou se ve vývojovém diagramu kreslí rozhodnutí?', a: 'Kosočtvercem (rozhodovací člen).' },
    { q: 'Co znamená ovál a co kroužek?', a: 'Ovál = začátek / konec, kroužek = spojka (čísluje se).' },
    { q: 'Jak se kreslí podprogram?', a: 'Obdélníkem se svislými pruhy po stranách.' },
    { q: 'Jak spočítat průměr řady ukončené nulou?', a: 'Sčítat čísla a počítat je, dokud nepřijde 0; pak vypsat soucet / pocet – a ošetřit pocet = 0.' },
    { q: 'Jak vynásobit a · b jen sčítáním?', a: 'Začít s 0 a b-krát přičíst a.' },
    { q: 'Kolik porovnání stačí na minimum ze tří čísel?', a: 'Dvě (min = a, porovnat s b, pak s c).' }
  ]
});
