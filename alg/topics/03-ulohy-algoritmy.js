registerTopic({
  id: 'ulohy-algoritmy', order: 3, icon: '🧮', title: 'Úlohy ze cvičení: algoritmy', src: 'podklady', where: 'Cvičení – Algoritmy (řešené a neřešené příklady)',
  summary: 'Deset úloh ze cvičení – každodenní činnost, seřazení tří a čtyř čísel s co nejméně porovnáními, bankovky a mince, minimum, prvočíslo, sudá čísla, počet čísel v intervalu, doplnění diagramu maxima a faktoriál.',
  vocab: [
    { w: 'složitost (počet porovnání)', x: 'kolik porovnání algoritmus potřebuje; měřítko, jak dobře je navržený' },
    { w: 'mod', x: 'zbytek po celočíselném dělení (7 mod 2 = 1)' },
    { w: 'div', x: 'celočíselné dělení (1789 div 1000 = 1)' },
    { w: 'zdrobnění algoritmu', x: 'rozepsání kroku na podrobnější kroky – teprve pak se ukáže skrytá selekce nebo iterace' }
  ],
  key: [
    'Tři čísla se dají seřadit <b>třemi porovnáními</b>, čtyři čísla nejméně <b>pěti</b>.',
    'Bankovky a mince lze rozdělit <b>bez cyklu</b>: pro každou hodnotu <span class="mo">počet = částka div hodnota</span>, <span class="mo">částka = částka mod hodnota</span>.',
    'Sudé číslo: <span class="mo">x mod 2 == 0</span>; v intervalu: <span class="mo">x &gt;= min and x &lt;= max</span>.',
    'Prvočíslo: hledá se dělitel d od 2, dokud d · d ≤ n.'
  ],
  sections: [
    { title: 'Řešené příklady – zadání a řešení (řešení doplněno)', blocks: [
      { t: 'p', x: 'Podklady obsahují jen zadání řešených příkladů; postupy níže jsou dopočítané a ověřené skriptem.' },
      { t: 'ex', x: '<b>Př. 1 – každodenní činnost.</b> Algoritmus zapiš slovně v bodech a najdi v něm selekci a iteraci. Např. příprava čaje: 1. napusť vodu do konvice; 2. <i>dokud voda nevře, čekej</i> (iterace); 3. dej sáček do hrnku a zalij; 4. <i>když chceš sladký čaj, přidej cukr</i> (selekce); 5. vyjmi sáček. Krok „uvař vodu“ vypadá jako jeden příkaz, ale při zdrobnění se v něm objeví cyklus (čekání).' },
      { t: 'flow', title: 'Př. 2 – seřazení tří čísel třemi porovnáními', steps: [
        { h: 'když a &gt; b', x: 'prohoď a, b (teď a ≤ b)' },
        { h: 'když b &gt; c', x: 'prohoď b, c (teď je c největší)' },
        { h: 'když a &gt; b', x: 'prohoď a, b (seřadí zbylou dvojici)' },
        { h: 'piš a, b, c', x: 'od nejmenšího po největší' }
      ] },
      { t: 'tip', x: 'Ověření: zadání chce vyzkoušet všech <b>6</b> pořadí (3! = 6). Postup výše seřadí každé z nich vždy po <b>3</b> porovnáních (ověřeno pro všechny permutace).' },
      { t: 'ex', x: '<b>Př. 3 – bankovky a mince bez cyklu</b> (hodnoty doplněny: 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 2, 1 Kč). Pro každou hodnotu shora: počet = částka div hodnota, částka = částka mod hodnota. Pro 1789 Kč: 1 × 1000, 1 × 500, 1 × 200, 1 × 50, 1 × 20, 1 × 10, 1 × 5, 2 × 2 Kč. Hodnot je pevný počet, proto stačí 12 kroků za sebou (sekvence) – cyklus není nutný.' },
      { t: 'ex', x: '<b>Př. 4 – nejmenší číslo v řadě:</b> min = první číslo; pro každé další x: když x &lt; min, pak min = x; na konci piš min. Stejná myšlenka jako u minima ze tří čísel, jen v cyklu.' },
      { t: 'flow', title: 'Př. 5 – je n prvočíslo?', steps: [
        { h: 'když n &lt; 2', x: 'není prvočíslo, konec' },
        { h: 'd = 2', x: 'první kandidát na dělitele' },
        { h: 'dokud d · d &lt;= n', x: 'když n mod d == 0 → není prvočíslo, konec; jinak d = d + 1' },
        { h: 'piš „je prvočíslo“', x: 'žádný dělitel do √n se nenašel' }
      ] },
      { t: 'tip', x: 'Stačí zkoušet dělitele do √n: když n = d · e a obě čísla by byla větší než √n, byl by součin větší než n.' }
    ] },
    { title: 'Neřešené příklady (navržená řešení doplněna)', blocks: [
      { t: 'ul', items: [
        '<b>Př. 1 – sudá čísla:</b> načítej čísla a vypiš jen ta, pro která platí <span class="mo">x mod 2 == 0</span>. (Zadání neříká, jak řada končí – např. nulou jako u průměru.)',
        '<b>Př. 2 – kolik čísel je z intervalu ⟨min, max⟩:</b> pocet = 0; pro každé x: když <span class="mo">x &gt;= min and x &lt;= max</span>, pak pocet = pocet + 1; piš pocet. Interval je uzavřený, proto ≥ a ≤.',
        '<b>Př. 3 – seřazení čtyř čísel pěti porovnáními:</b> 1) seřaď dvojici a, b; 2) seřaď dvojici c, d; 3) menší z a, c je celkové minimum; 4) větší z b, d je celkové maximum; 5) porovnej zbylá dvě čísla uprostřed.',
        '<b>Př. 5 – faktoriál:</b> f = 1, i = 1; dokud i &lt;= n: f = f · i, i = i + 1; piš f. Pro n = 5: 1 · 2 · 3 · 4 · 5 = <b>120</b>; pro n = 0 se cyklus neprovede a f = 1.'
      ] },
      { t: 'svg', title: 'Př. 4 – doplnění vývojového diagramu (největší číslo v řadě)', x: ALG.maxDopln(), cap: 'Sedm okének z obrázku zadání, očíslovaná ① až ⑦. Výrazy „načti x“ a „max = x“ se použijí dvakrát. První číslo se rovnou uloží jako max; dokud x není 0, porovná se s max, případně ho přepíše, a načte se další číslo. Šipka vpravo se vrací nad podmínku ③.' },
      { t: 'warn', x: 'V obrázku zadání vede z prvního kosočtverce větev „−“ ke konci a „+“ do cyklu. S výrazem <span class="mo">x == 0</span> (jediný vhodný z nabídky) to platí obráceně: když x == 0 platí, má algoritmus skončit. Buď se znaménka prohodí, nebo by podmínka musela znít x ≠ 0.' }
    ] }
  ],
  mistakes: [
    'Řadit tři čísla „hrubou silou“ s více než třemi porovnáními – zadání chce optimalizovat.',
    'Testovat jen jedno pořadí vstupu – u řazení tří čísel je třeba ověřit všech 6 možností.',
    'U intervalu ⟨min, max⟩ použít ostré nerovnosti – krajní body patří do intervalu.',
    'U prvočísla zapomenout na n &lt; 2 (1 ani 0 nejsou prvočísla).',
    'Začít faktoriál s f = 0 – výsledek by byl vždy 0.'
  ],
  qa: [
    { q: 'Kolik porovnání stačí na seřazení tří čísel?', a: 'Tři (porovnat a–b, b–c, a–b a podle potřeby prohodit).' },
    { q: 'Kolik pořadí tří čísel je třeba při ověřování vyzkoušet?', a: 'Šest (3! = 6).' },
    { q: 'Jaký je nejmenší možný počet porovnání pro seřazení čtyř čísel?', a: 'Pět.' },
    { q: 'Jak rozdělit částku na bankovky a mince bez cyklu?', a: 'Pro každou hodnotu shora: počet = částka div hodnota, částka = částka mod hodnota – pevný počet kroků za sebou.' },
    { q: 'Jak poznat sudé číslo?', a: 'x mod 2 == 0.' },
    { q: 'Do kolika stačí zkoušet dělitele při testu prvočísla?', a: 'Do √n, tj. dokud d · d ≤ n.' },
    { q: 'Jak spočítat faktoriál n?', a: 'f = 1; pro i od 1 do n: f = f · i. 5! = 120, 0! = 1.' },
    { q: 'Proč v úloze „doplň okénka“ se 7 okénky stačí 5 výrazů?', a: 'Výrazy „načti x“ a „max = x“ se použijí dvakrát – před cyklem a uvnitř cyklu.' }
  ]
});
