registerTopic({
  id: 'strukturogramy', order: 4, icon: '🧱', title: 'Strukturogramy', src: 'podklady', lec: [2], where: 'Přednáška 2 – strukturogramy',
  summary: 'Jak se sekvence, selekce a oba typy cyklů přepíší z vývojového diagramu do strukturogramu, proč některé diagramy přepsat nejde, jak strukturogram číst a jak z něj vznikne kód (if, while, do-while).',
  vocab: [
    { w: 'strukturogram', x: 'zápis algoritmu do sebe vnořenými obdélníky (Nassi–Shneiderman); čte se shora dolů, bez šipek a skoků' },
    { w: 'cyklus s podmínkou na začátku', x: 'while – podmínka se testuje před tělem; tělo se nemusí provést ani jednou' },
    { w: 'cyklus s podmínkou na konci', x: 'do-while – tělo se provede, pak se testuje podmínka; tělo proběhne aspoň jednou' },
    { w: 'tělo cyklu', x: 'odsazené bloky vpravo od svislého pruhu cyklu' }
  ],
  key: [
    'Sekvence = bloky pod sebou; selekce = hlavička s trojúhelníkem a dva sloupce (+ / −).',
    'While: řádek s podmínkou <b>nahoře</b>, tělo odsazené. Do-while: tělo odsazené, podmínka <b>dole</b>.',
    'Strukturogram nemá šipky – každý blok má jeden vstup (nahoře) a jeden výstup (dole). Skok doprostřed jiného bloku nakreslit nejde.',
    'Přepis do kódu: selekce → <span class="mo">if (…) { } else { }</span>, cyklus nahoře → <span class="mo">while (…) { }</span>, dole → <span class="mo">do { } while (…)</span>.'
  ],
  sections: [
    { title: 'Od vývojových diagramů ke strukturogramům', blocks: [
      { t: 'svg', title: 'Sekvence, selekce a dva typy cyklů', x: ALG.prechody(), cap: 'Čtyři základní tvary. Sekvence = obdélníky pod sebou. Selekce = hlavička s podmínkou, z níž diagonály vymezí sloupec „+“ (podmínka platí) a „−“ (neplatí). U cyklů ukazuje svislý pruh vlevo, co se opakuje: podmínka v řádku nad tělem = test před tělem (while), podmínka pod tělem = test po těle (do-while).' },
      { t: 'versus', title: 'Cyklus s podmínkou na začátku × na konci', cols: [
        { h: 'Na začátku (while)', items: ['nejdřív test, pak tělo', 'tělo se nemusí provést ani jednou', 've strukturogramu: podmínka nahoře', 'kód: <span class="mo">while (podmínka) { … }</span>'] },
        { h: 'Na konci (do-while)', items: ['nejdřív tělo, pak test', 'tělo se provede aspoň jednou', 've strukturogramu: podmínka dole', 'kód: <span class="mo">do { … } while (podmínka);</span>'] }
      ], x: 'Oba cykly opakují tělo, dokud podmínka platí; liší se jen tím, kdy se podmínka poprvé zkontroluje. While se nejdřív „podívá“ a teprve pak jedná, takže při neplatné podmínce tělo úplně přeskočí. Do-while nejdřív jedná a pak se rozhodne, zda pokračovat. Typický příklad: načítání čísel od uživatele – aspoň jedno číslo se načíst musí, proto se hodí do-while; procházení řady, která může být prázdná, je naopak úloha pro while.' },
      { t: 'warn', x: 'Slajd se sekvencí má ve vývojovém diagramu dvakrát „Příkaz 2“ – třetí obdélník má být „Příkaz 3“, jak ukazuje strukturogram vedle.' },
      { t: 'warn', x: 'Pozor na stranu „+“: na slajdech přednášky je ve strukturogramu „+“ <b>vlevo</b>, v úlohách ze cvičení je „−“ vlevo a „+“ vpravo. Vždy čti znaménko, ne stranu.' }
    ] },
    { title: 'Problematické přechody', blocks: [
      { t: 'p', x: 'Vývojový diagram dovolí šipkou skočit kamkoli. Na slajdu se po splnění podmínky provede příkaz 2 a skočí se zpět <b>před příkaz 1</b> – smyčka tedy nezačíná podmínkou ani nekončí podmínkou. Takový diagram nejde přímo nakreslit strukturogramem (na slajdu otazník).' },
      { t: 'svg', title: 'Jak takový diagram přepsat (doplněno)', x: ALG.problem(), cap: 'Vlevo diagram ze slajdu – podmínka je uprostřed smyčky. Vpravo strukturogram se stejným chováním: příkaz 1 se provede před cyklem a pak znovu na konci každého průchodu, takže podmínka může být v hlavičce cyklu while.' }
    ] },
    { title: 'Pravidla a přepis do kódu', blocks: [
      { t: 'svg', title: 'Složený strukturogram ze slajdu a jeho kód', x: ALG.pravidla(), cap: 'Vlevo strukturogram ze slajdů 8 a 12, vpravo stejný algoritmus v kódu (zápis jako v C#). Každý obdélník je jeden příkaz zakončený středníkem, větve selekce a těla cyklů jsou v blocích { }. Větev „+“ obsahuje příkaz 3 a cyklus s příkazem 7, větev „−“ vnořenou selekci; za selekcí je příkaz 8 a nakonec cyklus do-while s příkazem 9.' },
      { t: 'ol', items: [
        'Čte se <b>shora dolů</b>; po dokončení bloku se pokračuje blokem pod ním.',
        'U selekce se provede <b>jen jeden sloupec</b> (podle podmínky) a pak se pokračuje pod celou selekcí.',
        'U cyklu s podmínkou nahoře: platí → provede se tělo a vrátí se k podmínce; neplatí → pokračuje se pod cyklem.',
        'U cyklu s podmínkou dole: provede se tělo, pak test; platí → znovu tělo, neplatí → ven.',
        'Bloky se mohou libovolně vnořovat (selekce v selekci, cyklus ve větvi…), ale nikdy se nepřekrývají.'
      ] }
    ] }
  ],
  mistakes: [
    'Číst sloupce selekce podle strany místo podle znaménka + / −.',
    'Myslet si, že while proběhne aspoň jednou – to platí jen pro do-while.',
    'Po skončení těla cyklu pokračovat dolů místo návratu k podmínce.',
    'Kreslit do strukturogramu šipky nebo skoky – strukturogram je bez skoků.'
  ],
  qa: [
    { q: 'Jak se ve strukturogramu kreslí selekce?', a: 'Hlavička s podmínkou, diagonály ji dělí na stranu „+“ a „−“; pod ní dva sloupce s příkazy obou větví.' },
    { q: 'Čím se ve strukturogramu liší while od do-while?', a: 'While má podmínku v řádku nad odsazeným tělem, do-while pod tělem.' },
    { q: 'Který cyklus proběhne aspoň jednou?', a: 'Cyklus s podmínkou na konci (do-while).' },
    { q: 'Proč nejde každý vývojový diagram přímo nakreslit strukturogramem?', a: 'Diagram dovolí skok kamkoli (např. zpět před příkaz nad podmínkou), strukturogram jen vnořené bloky s jedním vstupem a výstupem; takový diagram je nutné přepracovat (např. zdvojit příkaz).' },
    { q: 'Jak se přepíše selekce do kódu?', a: 'if (podmínka) { větev + } else { větev − }.' },
    { q: 'Jak se přepíše cyklus s podmínkou na konci?', a: 'do { tělo } while (podmínka);' },
    { q: 'Kolik sloupců selekce se při jednom průchodu provede?', a: 'Právě jeden.' }
  ]
});
