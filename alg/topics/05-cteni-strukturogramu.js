registerTopic({
  id: 'cteni-strukturogramu', order: 5, icon: '🔎', title: 'Čtení a tvorba strukturogramů – úlohy', src: 'podklady', lec: [2], where: 'Cvičení – Strukturogramy (řešené a neřešené příklady)',
  summary: 'Pět řešených úloh „co algoritmus vypíše“ krok po kroku (hvězdičky, O/X, čtení řady, vnořené cykly, funkce F) a neřešené úlohy: počet hvězdiček, výpis 10…1, rozdíl čísel, sousedé nul a největší společný dělitel.',
  vocab: [
    { w: 'trasování', x: 'ruční provedení algoritmu: po každém kroku zapisuješ hodnoty proměnných a výstup do tabulky' },
    { w: 'načti', x: 'vezme další číslo ze vstupní řady' },
    { w: 'a mod 2 == 0', x: 'a je sudé (zbytek po dělení dvěma je 0)' },
    { w: 'NSD', x: 'největší společný dělitel dvou čísel' }
  ],
  key: [
    'Trasuj do <b>tabulky</b>: sloupec pro každou proměnnou + výstup; nový řádek po každé změně.',
    'U cyklu vždy znovu otestuj podmínku <b>s novými hodnotami</b> – i po posledním průchodu.',
    'Výsledky řešených úloh: Ř1 <b>3 hvězdičky</b>, Ř2 <b>OOOOOOXXXX</b>, Ř3 <b>7, 0, 2, 6, 0, 0, 2</b>, Ř5 <b>2, 2, 8, 1, 1, 5</b>.',
    'Ř4 vypíše skupiny B, AA, BBB, AAAA, … až 8 × A (celkem 36 znaků).'
  ],
  sections: [
    { title: 'Řešené příklady – krok za krokem', blocks: [
      { t: 'widget', name: 'strukt', title: 'Krokování strukturogramu', p: 'r1', list: ['r1', 'r2', 'r3', 'r4', 'r5', 'n1', 'n2'],
        fig: ALG.prog('r1'), figcap: 'Ř1: a = 1, b = 10; dokud a &lt; b: a zvětši o 2, b zmenši o 1 a vypiš hvězdičku. Svislý pruh vlevo označuje tělo cyklu.',
        how: ['Vyber program; v obrázku se žlutě zvýrazní blok, který se právě provádí (červeně podmínka cyklu, která už neplatí), modrý proužek ukazuje větev selekce, kterou výpočet jde.', 'Vpravo jsou hodnoty proměnných po kroku, dosavadní výstup a u úloh s „načti“ zbytek vstupu.', 'Vstupní řadu u Ř3 a Ř5 můžeš přepsat a zkoušet vlastní čísla.', 'Šipkami ◀ ▶ (nebo klávesami) se pohybuješ po krocích.'],
        sol: 'Ř1: (a, b) = (1, 10) → (3, 9) * → (5, 8) * → (7, 7) * → 7 &lt; 7 neplatí, konec. Hvězdička se vypíše <b>3×</b>.' },
      { t: 'grid', head: ['a', 'b = 20 − 2a', 'a &gt; b?', 'výpis'], rows: [['1', '18', 'ne', 'O'], ['2', '16', 'ne', 'O'], ['3', '14', 'ne', 'O'], ['4', '12', 'ne', 'O'], ['5', '10', 'ne', 'O'], ['6', '8', 'ne', 'O'], ['7', '6', 'ano', 'X'], ['8', '4', 'ano', 'X'], ['9', '2', 'ano', 'X'], ['10', '0', 'ano', 'X']] },
      { t: 'p', x: '<b>Ř2</b> (tabulka výše): cyklus běží pro a = 1 … 10, výstup <b>OOOOOOXXXX</b>. X se poprvé objeví, když a = 7 &gt; b = 6.' },
      { t: 'svg', title: 'Ř3 – čtení řady', x: ALG.prog('r3'), cap: 'Před cyklem se načte první číslo. V těle se načte číslo, vypíše se a načte se další – vypisuje se tedy každé druhé číslo a podmínka a &gt; 0 testuje to přeskočené.' },
      { t: 'ex', x: '<b>Ř3</b>, vstup 3, 7, 1, 0, 4, 2, 5, 6, 6, 0, 3, 0, 5, 2, 0, 8, 4: a = 3 &gt; 0 → načte 7, <b>piš 7</b>, a = 1 → načte 0, <b>piš 0</b>, a = 4 → <b>2</b>, a = 5 → <b>6</b>, a = 6 → <b>0</b>, a = 3 → <b>0</b>, a = 5 → <b>2</b>, a = 0 → konec. Výstup <b>7, 0, 2, 6, 0, 0, 2</b> (8 a 4 se už nenačtou).' },
      { t: 'ex', x: '<b>Ř4</b>: vnější cyklus a = 10 … 2, vnitřní b = 10 dolů, dokud b &gt; a – proběhne 10 − a krát. Sudé a píše A, liché B. a = 10: nic; a = 9: B; a = 8: AA; a = 7: BBB; a = 6: AAAA; a = 5: BBBBB; a = 4: AAAAAA; a = 3: BBBBBBB; a = 2: AAAAAAAA. Výstup <b>BAABBBAAAABBBBBAAAAAABBBBBBBAAAAAAAA</b> (36 znaků).' },
      { t: 'svg', title: 'Ř5 – hlavní program a funkce F', x: ALG.prog('r5'), cap: 'F(x) vrací 1 pro liché x, 0 pro x = 2 a x pro ostatní sudá čísla. Hlavní program běží, dokud F(x) &gt; 0, tedy dokud nepřijde 2 nebo 0.' },
      { t: 'grid', head: ['x', 'F(x)', 'x &gt; 5?', 'vypíše'], rows: [['3', '1', 'ne', 'F(3) + 1 = 2'], ['1', '1', 'ne', 'F(1) + 1 = 2'], ['7', '1', 'ano', 'F(8) = 8'], ['6', '6', 'ano', 'F(7) = 1'], ['8', '8', 'ano', 'F(9) = 1'], ['4', '4', 'ne', 'F(4) + 1 = 5'], ['2', '0', '–', 'konec cyklu']] },
      { t: 'p', x: '<b>Ř5</b>, vstup 3, 1, 7, 6, 8, 4, 2, 5, 0: výstup <b>2, 2, 8, 1, 1, 5</b>. Na x = 2 je F(2) = 0, cyklus skončí a 5, 0 se už nenačtou.' },
      { t: 'warn', x: 'Pozor na rozdíl <b>F(x) + 1</b> × <b>F(x + 1)</b>: u x = 7 je F(7) + 1 = 2, ale F(8) = 8.' }
    ] },
    { title: 'Neřešené příklady (řešení doplněno a ověřeno)', blocks: [
      { t: 'ul', items: [
        '<b>Př. 1</b>: a = 1, b = 3; dokud a &lt; b: piš *, když a == 2 pak b = b + 1, a = a + 1. Průběh: a = 1 → *, a = 2 → *, b = 4, a = 3 → *, a = 4 → 4 &lt; 4 neplatí. <b>3 hvězdičky</b> (program N1 ve widgetu).',
        '<b>Př. 2</b>: místo ??? doplň <span class="mo">11 − a</span> – pro a = 1 … 10 vypíše 10, 9, …, 1 (program N2 ve widgetu).',
        '<b>Př. 3</b> – tolik hvězdiček, kolik je rozdíl čísel: načti a, b; když a &lt; b, prohoď je (nebo d = |a − b|); i = 0; dokud i &lt; a − b: piš *, i = i + 1.'
      ] },
      { t: 'flow', title: 'Př. 4 – vypiš čísla sousedící s nulou, konec po dvou nulách', steps: [
        { h: 'p = 1, c = načti, n = načti', x: 'p = předchozí (umělá nenula), c = aktuální, n = následující' },
        { h: 'dokud not (c == 0 and n == 0)', x: 'konec nastane, když aktuální i následující číslo jsou nuly' },
        { h: 'když p == 0 or n == 0: piš c', x: 'c sousedí s nulou; díky jedné podmínce se vypíše jen jednou' },
        { h: 'p = c, c = n, n = načti', x: 'posun o jedno číslo' },
        { h: 'za cyklem: piš c', x: 'první ze dvou koncových nul sousedí s druhou' }
      ] },
      { t: 'ex', x: 'Řada 5, 1, 0, 7, 2, 3, 3, 0, 1, 0, 4, 0, 0 → <b>1, 7, 3, 1, 4, 0</b> (shoduje se s výsledkem v zadání; jednička mezi dvěma nulami se vypíše jen jednou).' },
      { t: 'ex', x: '<b>Př. 5 – NSD Euklidovým algoritmem (rekurze):</b> NSD(a, b) = a, když b = 0; jinak NSD(b, a mod b). NSD(48, 18) → NSD(18, 12) → NSD(12, 6) → NSD(6, 0) = <b>6</b>.' }
    ] }
  ],
  mistakes: [
    'Zapomenout po posledním průchodu otestovat podmínku cyklu – a započítat průchod navíc.',
    'Plést F(x) + 1 a F(x + 1).',
    'U Ř3 vypisovat každé číslo – vypisuje se jen to načtené uprostřed těla.',
    'Ve vnořených cyklech zapomenout, že vnitřní proměnná (b = 10) se nastavuje znovu při každém průchodu vnějšího cyklu.'
  ],
  qa: [
    { q: 'Kolikrát vypíše hvězdičku Ř1 (a = 1, b = 10; dokud a &lt; b: a += 2, b −= 1, piš *)?', a: '3× – stavy (3, 9), (5, 8), (7, 7).' },
    { q: 'Co vypíše Ř2 (b = 20 − 2a, a &gt; b → X, jinak O, a = 1…10)?', a: 'OOOOOOXXXX.' },
    { q: 'Jaký je výstup Ř3 pro vstup 3, 7, 1, 0, 4, 2, 5, 6, 6, 0, 3, 0, 5, 2, 0, 8, 4?', a: '7, 0, 2, 6, 0, 0, 2.' },
    { q: 'Kolik znaků vypíše Ř4 a jakou skupinou končí?', a: '36 znaků (1 + 2 + … + 8), končí osmi A (pro a = 2).' },
    { q: 'Jaký je výstup Ř5 pro vstup 3, 1, 7, 6, 8, 4, 2, 5, 0?', a: '2, 2, 8, 1, 1, 5.' },
    { q: 'Co doplnit místo ???, aby cyklus a = 1…10 vypsal 10 až 1?', a: '11 − a.' },
    { q: 'Kolik hvězdiček vypíše neřešený Př. 1 (a = 1, b = 3, když a == 2 pak b = b + 1)?', a: '3.' },
    { q: 'Jak zní Euklidův algoritmus rekurzivně?', a: 'NSD(a, 0) = a; jinak NSD(a, b) = NSD(b, a mod b).' }
  ]
});
