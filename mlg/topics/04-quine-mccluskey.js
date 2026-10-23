registerTopic({
  id: 'quine-mccluskey', order: 4, icon: '✂️', title: 'Minimalizace formulí – Quine–McCluskeyho algoritmus', src: 'podklady', lec: [3], where: 'Handout Minimalizace + Příklady na Quine–McCluskeyho algoritmus (Hora)',
  summary: 'Jak najít nejkratší disjunktivní tvar formule: zakódovat konjunkce, slučovat dvojice lišící se v jedné proměnné a z tabulky pokrytí vybrat nejmenší možnou sadu.',
  vocab: [
    { w: 'minimální DNT', x: 'formule v disjunktivním tvaru s <b>nejmenším počtem literálů</b> mezi všemi ekvivalentními DNT' },
    { w: 'zakódování', x: 'konjunkce zapsaná jako řetězec: proměnná = 1, negovaná = 0, vynechaná (nezáleží) = −' },
    { w: 'sloučení', x: 'dvě kódy lišící se přesně v jedné pozici se spojí; na pozici, kde se liší, dá se pomlčka (na té proměnné nezáleží)' },
    { w: 'prvočlen (prime implicant)', x: 'kód, který už nejde dál sloučit' },
    { w: 'tabulka pokrytí', x: 'řádky = prvočleny, sloupce = původní konjunkce z ÚDNT; značí, které prvočleny pokrývají které konjunkce' }
  ],
  key: [
    'Dvě konjunkce lze sloučit, když se liší <b>právě v jedné proměnné</b>: (A∧B∧C) ∨ (A∧B∧¬C) ≡ A∧B.',
    'Zakódování: <b>1</b> = proměnná, <b>0</b> = její negace, <b>−</b> = proměnná vypadla. (V přednášce se negace píše jako −1 a vypuštěná proměnná jako ∗.)',
    'Slučuj dokola, dokud to jde; co se už nesloučí, jsou <b>prvočleny</b>.',
    'Z tabulky pokrytí vyber <b>nejmenší</b> počet prvočlenů, které pokryjí všechny původní konjunkce. Řešení může být <b>více</b> stejně dobrých.',
    'Minimální DNT = disjunkce vybraných prvočlenů.'
  ],
  sections: [
    { title: 'Interaktivní průvodce – proklikej si algoritmus', blocks: [
      { t: 'p', x: 'Vyber příklad (nebo si v „✎ Vlastní zadání“ zaklikej vlastní pravdivostní tabulku až o pěti proměnných) a procházej algoritmus tlačítky <b>Další ▶</b> / <b>◀ Zpět</b>, šipkami na klávesnici nebo kliknutím na kolečka. U každého kroku je napsáno <b>co se děje</b>, <b>proč</b> a <b>co se změnilo</b>. Barvy: <span style="color:var(--def)">modrá</span> = první kód, <span style="color:var(--ex)">růžová</span> = druhý, <span style="color:var(--accent)">červená</span> = výsledek sloučení, <span style="color:var(--law)">žlutá</span> = prvočlen.' },
      { t: 'widget', name: 'qm', title: 'Quine–McCluskey krok za krokem', x: 'interaktivní příklad minimalizace formule krok za krokem' }
    ] }
  ],
  mistakes: [
    'Slučovat kódy, které se liší ve <b>dvou</b> pozicích – sloučit lze jen ty s jedním rozdílem.',
    'Slučovat kód s pomlčkou s kódem, který pomlčku nemá na stejném místě – pomlčky musí být ve stejných pozicích.',
    'Nechat v seznamu duplicitní konjunkce (první úkon: odstranit duplikáty).',
    'Označit za prvočlen kód, který šel ještě sloučit.',
    'Vybrat zbytečně mnoho prvočlenů – hledá se <b>nejmenší</b> pokrytí (nejméně literálů).',
    'Zapomenout, že minimální tvar nemusí být jediný – uveď všechny nalezené stejně dobré varianty.'
  ],
  qa: [
    { q: 'Kdy lze dvě konjunkce v algoritmu sloučit?', a: 'Když se liší <b>právě v jedné proměnné</b> (jedna je negovaná, druhá ne); na té proměnné pak nezáleží a v kódu dostane pomlčku.' },
    { q: 'Co je prvočlen?', a: 'Kód (konjunkce), který už nejde s žádným dalším sloučit.' },
    { q: 'Jak vybereš výsledek z tabulky pokrytí?', a: 'Nejmenší množinu prvočlenů, která pokryje všechny původní konjunkce; začni nezbytnými (jediný křížek ve sloupci). Výsledek = jejich disjunkce.' },
    { q: 'Má formule vždy jediný minimální DNT?', a: 'Ne – může jich být více stejně dlouhých (např. Příklad 2 v průvodci: (B′C′)∨(A′B)∨(AC) nebo (A′C′)∨(AB′)∨(BC)).' },
    { q: 'Kolik literálů má minimální tvar z Příkladu 1 v průvodci a jaký to je?', a: '3 literály: (A′ ∧ B) ∨ C.' }
  ]
});
