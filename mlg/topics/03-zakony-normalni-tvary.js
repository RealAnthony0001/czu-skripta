registerTopic({
  id: 'zakony-normalni-tvary', order: 3, icon: '🔧', title: 'Logické zákony a normální tvary (DNT, KNT, ÚDNT)', src: 'podklady', lec: [2], where: 'Přednáška Logické zákony, normální tvary + Ekvivalence (tabulka zákonů) + Cvičení 2',
  summary: 'Tabulka ekvivalentních formulí a jak z ní převádět formule do disjunktivního (DNT), konjunktivního (KNT) a úplného disjunktivního tvaru (ÚDNT), včetně sestavení formule z pravdivostní tabulky.',
  vocab: [
    { w: 'literál', x: 'výroková proměnná nebo její negace (A, ¬A)' },
    { w: 'DNT (DNF)', x: 'disjunktivní normální tvar – <b>disjunkce konjunkcí</b> literálů, např. (A∧¬B) ∨ C' },
    { w: 'KNT (KNF)', x: 'konjunktivní normální tvar – <b>konjunkce disjunkcí</b> literálů, např. (A∨¬B) ∧ C' },
    { w: 'ÚDNT (ÚDNF)', x: 'úplný DNT – každá konjunkce obsahuje <b>všechny</b> proměnné (každou právě jednou, přímo nebo negovanou)' },
    { w: 'ÚKNT (ÚKNF)', x: 'úplný KNT – každá disjunkce obsahuje všechny proměnné' }
  ],
  key: [
    '<b>Převod do DNT:</b> (1) odstraň ⇒, ⇔ · (2) zatáhni negace dovnitř (De Morgan) · (3) roznásob ∧ přes ∨ (distributivita) · (4) zjednoduš (A∧¬A ≡ 0, A∨A ≡ A).',
    'Základ: <b>A⇒B ≡ ¬A∨B</b>, <b>A⇔B ≡ (A∧B)∨(¬A∧¬B)</b>, <b>¬(A∨B) ≡ ¬A∧¬B</b>, <b>¬(A∧B) ≡ ¬A∨¬B</b>, <b>¬(A⇒B) ≡ A∧¬B</b>.',
    '<b>ÚDNT z tabulky:</b> každý řádek s 1 → konjunkce <i>všech</i> proměnných (1 → A, 0 → ¬A); ty spoj disjunkcí.',
    'Tvar = forma: KNT = KNF, DNT = DNF. Na závorkách uvnitř ∧ a ∨ řetězců nezáleží (asociativita).',
    'DNT/KNT není určen jednoznačně; ÚDNT dané formule je až na pořadí <b>jednoznačný</b>.'
  ],
  sections: [
    { title: 'Tabulka logických zákonů', blocks: [
      { t: 'p', x: 'Dvojice ekvivalentních formulí (≡), které stačí k převodu do DNT, KNT i ÚDNT. Ověřit je lze pravdivostní tabulkou.' },
      { t: 'grid', head: ['Zákon', 'Ekvivalence'], rows: [
        ['dvojitá negace', '¬(¬A) ≡ A'],
        ['idempotence', 'A ∨ A ≡ A,  A ∧ A ≡ A'],
        ['komutativita', 'A ∨ B ≡ B ∨ A,  A ∧ B ≡ B ∧ A'],
        ['asociativita', '(A∨B)∨C ≡ A∨(B∨C) ≡ A∨B∨C,  (A∧B)∧C ≡ A∧(B∧C) ≡ A∧B∧C'],
        ['distributivita', 'A ∧ (B ∨ C) ≡ (A∧B) ∨ (A∧C),  A ∨ (B ∧ C) ≡ (A∨B) ∧ (A∨C)'],
        ['De Morgan', '¬(A ∨ B) ≡ ¬A ∧ ¬B,  ¬(A ∧ B) ≡ ¬A ∨ ¬B'],
        ['negace implikace', '¬(A ⇒ B) ≡ A ∧ ¬B'],
        ['negace ekvivalence', '¬(A ⇔ B) ≡ (A ∧ ¬B) ∨ (¬A ∧ B)  ≡ ¬A ⇔ B ≡ A ⇔ ¬B'],
        ['implikace → disjunkce', 'A ⇒ B ≡ ¬A ∨ B'],
        ['kontrapozice', 'A ⇒ B ≡ ¬B ⇒ ¬A'],
        ['ekvivalence → ∧, ∨', 'A ⇔ B ≡ (A∧B) ∨ (¬A∧¬B) ≡ (A∨¬B) ∧ (¬A∨B)'],
        ['ekvivalence → implikace', 'A ⇔ B ≡ (A⇒B) ∧ (B⇒A) ≡ (A⇒B) ∧ (¬A⇒¬B) ≡ ¬A ⇔ ¬B'],
        ['vyloučený třetí / spor', 'A ∨ ¬A ≡ 1,  A ∧ ¬A ≡ 0'],
        ['konstanty v disjunkci', 'A ∨ 1 ≡ 1,  A ∨ 0 ≡ A'],
        ['konstanty v konjunkci', 'A ∧ 1 ≡ A,  A ∧ 0 ≡ 0']
      ] },
      { t: 'tip', x: 'Nejčastěji budeš potřebovat jen čtyři: <b>A⇒B ≡ ¬A∨B</b>, <b>A⇔B ≡ (A∧B)∨(¬A∧¬B)</b>, <b>De Morgan</b> a <b>distributivitu</b>. Zbytek je zjednodušování.' },
      { t: 'warn', x: 'V negaci ekvivalence se nemění jen jedna strana: ¬(A⇔B) je <i>ne</i> (¬A⇔¬B) (ta je ekvivalentní A⇔B), ale ¬A⇔B. Totéž pro implikaci: negace A⇒B <i>není</i> ¬A⇒¬B, nýbrž A∧¬B.' }
    ] },
    { title: 'Normální tvary – definice', blocks: [
      { t: 'def', term: 'Literál', x: 'výroková proměnná a její negace se souhrnně nazývají literály.' },
      { t: 'versus', title: 'Disjunktivní × konjunktivní tvar', cols: [
        { h: 'DNT: disjunkce konjunkcí', items: ['(A ∧ ¬B) ∨ (¬A ∧ C) ∨ B', 'ÚDNT: každá konjunkce obsahuje všechny proměnné', 'čte se jako „aspoň jedna z možností platí“'] },
        { h: 'KNT: konjunkce disjunkcí', items: ['(A ∨ ¬B) ∧ (¬A ∨ C) ∧ B', 'ÚKNT: každá disjunkce obsahuje všechny proměnné', 'čte se jako „platí všechny podmínky najednou“'] }
      ], x: 'DNT je seznam alternativních „scénářů“: formule platí, když nastane aspoň jeden z nich, a každý scénář je souvislé spojení literálů. KNT je naopak seznam podmínek, které musí platit všechny najednou, a každá podmínka je volnější („jedno z…“). Například „(A∧B) ∨ (¬A∧C)“ říká „buď A a B, nebo ne-A a C“, kdežto „(A∨¬A)∧(B∨C)“ je výčet dvou podmínek.' },
      { t: 'warn', x: 'Úplnost znamená, že <b>každá</b> konjunkce (disjunkce) má <b>každou</b> proměnnou právě jednou. Pro proměnné A, B, C je A∧B∧¬C úplná konjunkce, ale A∧B (chybí C) ani A∧A∧C (A dvakrát, chybí B) úplné nejsou.' }
    ] },
    { title: 'Převod do DNT a KNT', blocks: [
      { t: 'svg', title: 'Čtyři kroky převodu', x: MLG.dntPostup() },
      { t: 'ex', x: '<b>Do DNT:</b> (1) A′ ∧ (B′ ∨ A) ≡ (A′∧B′) ∨ (A′∧A) ≡ (A′∧B′) ∨ 0 ≡ <b>A′ ∧ B′</b>' },
      { t: 'ex', x: '(2) (A′ ⇒ (B ∧ C′))′ ≡ A′ ∧ (B ∧ C′)′ ≡ A′ ∧ (B′ ∨ C) ≡ <b>(A′∧B′) ∨ (A′∧C)</b>' },
      { t: 'ex', x: '(3) A′ ⇔ (B ∨ C′) ≡ (A′ ∧ (B ∨ C′)) ∨ (A ∧ (B ∨ C′)′) ≡ <b>(A′∧B) ∨ (A′∧C′) ∨ (A∧B′∧C)</b>' },
      { t: 'ex', x: '<b>Do KNT:</b> (1) A ∨ (A′ ∧ B′)′ ≡ A ∨ (A ∨ B) ≡ <b>A ∨ B</b>' },
      { t: 'ex', x: '(2) (A′ ⇒ (B ∧ C′))′ ≡ <b>A′ ∧ (B′ ∨ C)</b> – už je to KNT (konjunkce literálu A′ a disjunkce B′∨C).' },
      { t: 'ex', x: '(3) A′ ⇔ B ≡ (A′⇒B) ∧ (B⇒A′) ≡ <b>(A ∨ B) ∧ (B′ ∨ A′)</b>' },
      { t: 'tip', x: 'Jedna formule může mít <b>více různých</b> DNT (i KNT) – např. A′∧B′ i (A′∧B′)∨(A′∧B′∧C) jsou DNT téže formule. Kritérium pro minimalizaci pak řeší Quine–McCluskeyho algoritmus (viz téma o něm).' }
    ] },
    { title: 'Úplný disjunktivní tvar (ÚDNT)', blocks: [
      { t: 'p', x: 'ÚDNT je „zapsaná pravdivostní tabulka“: každý řádek, kde je formule pravdivá, je jedna úplná konjunkce. Proto je jednoznačný až na pořadí.' },
      { t: 'flow', title: 'Dva způsoby, jak ÚDNT získat', steps: [
        { h: 'Z tabulky', x: 'řádek s výsledkem 1 → konjunkce všech proměnných: 1 → A, 0 → A′; konjunkce spoj ∨' },
        { h: 'Algebraicky', x: 'převeď do DNT, pak do každé konjunkce, které chybí proměnná X, doplň X∨X′ ≡ 1 a roznásob; duplicitní členy vynech (A∨A ≡ A)' }
      ] },
      { t: 'svg', title: 'Od tabulky k ÚDNT', x: MLG.tabulkaUdnt(), cap: 'Příklad: A B ϕ s hodnotami 11→1, 10→1, 01→0, 00→1.' },
      { t: 'ex', x: '<b>1)</b> A ∨ (A′ ∧ B). Tabulka (A,B): 11→1, 10→1, 01→1, 00→0. ÚDNT: <b>(A∧B) ∨ (A∧B′) ∨ (A′∧B)</b>. (Platí A ∨ (A′∧B) ≡ A ∨ B.)' },
      { t: 'ex', x: '<b>2)</b> (A ∧ B) ∨ (B ∧ C′). Algebraicky: A∧B ≡ (A∧B∧C) ∨ (A∧B∧C′), B∧C′ ≡ (A∧B∧C′) ∨ (A′∧B∧C′). Po vypuštění duplicitního A∧B∧C′: <b>(A∧B∧C) ∨ (A∧B∧C′) ∨ (A′∧B∧C′)</b>.' },
      { t: 'ex', x: '<b>3)</b> (A′ ⇒ B′) ∨ (B ∧ C′) ≡ A ∨ B′ ∨ (B∧C′). Formule je nepravdivá jen pro A = 0, B = 1, C = 1, takže ÚDNT má 7 z 8 možných konjunkcí: <b>ABC ∨ ABC′ ∨ AB′C ∨ AB′C′ ∨ A′BC′ ∨ A′B′C ∨ A′B′C′</b> (A′ = ¬A).' },
      { t: 'ex', x: '<b>Od tabulky k formuli:</b> A B ϕ: 11→1, 10→1, 01→0, 00→1. Řádky s 1: <b>(A∧B) ∨ (A∧B′) ∨ (A′∧B′)</b>. Zjednodušení: A∧(B∨B′) ∨ (A′∧B′) ≡ A ∨ (A′∧B′) ≡ <b>A ∨ B′</b>. Úloha říká „napište jakoukoli formuli“ – stačí kterákoli z nich.' },
      { t: 'tip', x: 'U ÚDNT s n proměnnými je maximum <b>2ⁿ</b> členů (tautologie má všechny, kontradikce žádný). Formule bez jediné konjunkce = kontradikce (0).' }
    ] },
    { title: 'Úplný konjunktivní tvar z tabulky (doplněno)', blocks: [
      { t: 'p', x: 'Definice ÚKNT je v podkladech, postup z tabulky ale ne – je to symetrický opak ÚDNT: bere se <b>každý řádek s 0</b> a z něj disjunkce literálů, které jsou na tom řádku <i>nepravdivé</i> (1 → ¬A, 0 → A). Disjunkce se spojí konjunkcí.' },
      { t: 'ex', x: 'A⇒B je nepravdivá jen v řádku A = 1, B = 0 → ÚKNT: <b>(¬A ∨ B)</b>. (Což je přímo „A⇒B ≡ ¬A∨B“.)' }
    ] },
    { title: 'Výsledky ke cvičení 2 (převody)', blocks: [
      { t: 'grid', head: ['Úloha', 'Zadání', 'Výsledek'], rows: [
        ['1a', 'A ⇒ (B ⇔ C′) jen s ¬, ∧, ∨', 'A′ ∨ (B∧C′) ∨ (B′∧C)'],
        ['1b', '(A′⇒B) ⇒ (B⇔A)′', '(A′∧B′) ∨ (B∧A′) ∨ (B′∧A)'],
        ['2a', '((A∨B)′ ∧ (A⇒B))′', 'A ∨ B ∨ (A∧B′)'],
        ['2b', '((A⇒B)′ ⇒ C)′', 'A ∧ B′ ∧ C′'],
        ['2d', '(((A∧B)′⇒C)′ ∨ (A′⇒C))′', '((A∧B)∨C) ∧ (A′∧C′) – kontradikce'],
        ['3a', 'A ⇔ B′', '(A∧B′) ∨ (A′∧B)'],
        ['3b', '(A∧B) ∨ (A′∧B)', 'B  (ÚDNT: (A∧B) ∨ (A′∧B))'],
        ['3c', '(A∨B) ∧ A′', 'A′ ∧ B'],
        ['3d', '(A⇒B′) ∨ (A∧B)', 'tautologie (ÚDNT: všechny 4 členy)'],
        ['3e', '(A⇒B) ∧ (B∨C′)', 'B ∨ (A′∧C′)  (ÚDNT: ABC ∨ ABC′ ∨ A′BC ∨ A′BC′ ∨ A′B′C′)'],
        ['3f', '(A′∨C) ⇔ (B⇒C′)', '(B′∧C) ∨ (A′∧C′)  (ÚDNT: AB′C ∨ A′BC′ ∨ A′B′C ∨ A′B′C′)']
      ] },
      { t: 'p', x: 'Všechny výsledky jsou ověřené pravdivostní tabulkou (klíč uvádí 3e v nezjednodušené podobě s členem B∧B, který je podle idempotence jen B).' }
    ] }
  ],
  mistakes: [
    'Chybně negovat implikaci: ¬(A⇒B) je A∧¬B, ne ¬A⇒¬B.',
    'V De Morganovi zapomenout změnit ∧ na ∨ (a naopak): ¬(A∧B) ≡ ¬A ∨ ¬B.',
    'Zapomenout vypustit členy typu A∧¬A (jsou 0), a tak nezjednodušit výsledek.',
    'V ÚDNT nechat konjunkci, které chybí proměnná, nebo ji tam mít dvakrát.',
    'Roznásobit špatně: A ∨ (B∧C) ≡ (A∨B)∧(A∨C), ne (A∨B)∧C.',
    'Zaměnit DNT a KNT – DNT je ∨ z ∧, KNT je ∧ z ∨.'
  ],
  qa: [
    { q: 'Jak vypadá disjunktivní normální tvar?', a: '<b>Disjunkce konjunkcí literálů</b>, např. (A∧¬B) ∨ C.' },
    { q: 'Čím se liší ÚDNT od DNT?', a: 'V ÚDNT obsahuje <b>každá</b> konjunkce <b>všechny</b> proměnné (každou právě jednou, přímo nebo negovanou).' },
    { q: 'Jak sestavíš formuli z pravdivostní tabulky?', a: 'Z každého řádku s hodnotou 1 vytvoř konjunkci všech proměnných (1 → A, 0 → A′) a konjunkce spoj disjunkcí – dostaneš ÚDNT.' },
    { q: 'Čemu je ekvivalentní ¬(A⇒B)?', a: 'A ∧ ¬B.' },
    { q: 'Čemu je ekvivalentní A⇒B (jen s ¬ a ∨)?', a: '¬A ∨ B.' },
    { q: 'Jak vypadají De Morganova pravidla?', a: '¬(A∨B) ≡ ¬A∧¬B,  ¬(A∧B) ≡ ¬A∨¬B.' }
  ]
});
