registerTopic({
  id: 'zobrazeni', order: 9, icon: '🎯', title: 'Zobrazení, inverzní relace a mohutnost množin', src: 'podklady', lec: [5],
  where: 'Přednáška Relace a zobrazení (Čermák, Hora) + Cvičení 3 (úloha 11) + Doplněk ke cvičení z teorie množin (úlohy 2–3)',
  summary: 'Kdy je relace zobrazení (funkce), co znamená prosté, „na“ a bijekce, jak najít inverzní funkci a jak se porovnává velikost (mohutnost) nekonečných množin.',
  vocab: [
    { w: 'zobrazení F: A → B', x: 'relace, ve které má každý prvek <b>nejvýš jeden</b> obraz: (x, y) ∈ F ∧ (x, z) ∈ F ⇒ y = z' },
    { w: 'D(F), H(F)', x: 'definiční obor (prvky, které obraz mají) a obor hodnot (všechny obrazy)' },
    { w: 'prosté (injektivní)', x: 'různé prvky mají různé obrazy: F(x) = F(y) ⇒ x = y' },
    { w: '„na“ (surjektivní)', x: 'každý prvek B je obrazem nějakého prvku A' },
    { w: 'bijekce', x: 'zobrazení A do B (D(F) = A), které je prosté i „na“ – vzájemně jednoznačné' },
    { w: 'mohutnost |A|', x: '„velikost“ množiny; u konečné množiny počet prvků' },
    { w: 'spočetná množina', x: 'konečná, nebo v bijekci s ℕ (dá se seřadit do posloupnosti)' }
  ],
  key: [
    'Zobrazení = relace, kde z každého x vede <b>nejvýš jedna</b> šipka. „Zobrazení <b>do</b> B“ navíc vyžaduje D(F) = A.',
    '<b>Prosté:</b> do každého y vede nejvýš jedna šipka. <b>Na:</b> do každého y vede aspoň jedna. <b>Bijekce:</b> přesně jedna.',
    'Inverzní relace F⁻¹ obrací dvojice; je to zobrazení, <b>právě když F je prosté</b>.',
    'Inverzní funkci najdeš tak, že v y = f(x) <b>vyjádříš x</b> a prohodíš role; D a H se prohodí.',
    '|ℕ| = |ℤ| = |ℚ| (spočetné), ale ℝ je <b>nespočetná</b>; pro každou množinu |A| < |P(A)|.'
  ],
  sections: [
    { title: 'Zobrazení', blocks: [
      { t: 'def', term: 'Zobrazení z A do B', x: 'Relace F na množinách A a B taková, že (∀x ∈ A)(∀y, z ∈ B) ((x, y) ∈ F ∧ (x, z) ∈ F ⇒ y = z).', items: ['obraz prvku x značíme F(x)', 'je-li navíc D(F) = A, mluvíme o zobrazení <b>A do B</b> (bez „z“)', 'zobrazení množiny A do ℝ se nazývá (reálná) <b>funkce</b>'] },
      { t: 'svg', title: 'Typy zobrazení', x: MLG.zobrazeniTypy(), cap: 'Čtyři šipkové diagramy A → B: není zobrazení (a má dva obrazy), prosté (ne na), na (ne prosté) a bijekce (prosté i na – páry 1 : 1).' },
      { t: 'ex', x: '<b>Disponent účtu</b> (k D u ⇔ k je disponentem účtu u) <b>není zobrazení</b> – jeden klient může disponovat více účty.' },
      { t: 'grid', head: ['Relace (přednáška)', 'Zobrazení?', 'Proč'], rows: [
        ['{(x, y) | 2y = x} na ℤ', 'ano', 'y = x/2 je nejvýš jedno; obraz mají jen sudá x'],
        ['{(x, y) | x dělí y} na ℤ', 'ne', '2 dělí 2 i 4 – dva obrazy'],
        ['{(x, y) | y = x²} na ℝ', 'ano', 'každé x má právě jedno x²'],
        ['{(x, y) | x = y²} na ℝ', 'ne', 'pro x = 4 je y = 2 i y = −2'],
        ['{(x, y) | x² + y² = 1} na ℝ', 'ne', 'kružnice: x = 0 má y = ±1']
      ] },
      { t: 'tip', x: 'Nakresli si graf relace v rovině: zobrazení to je, když každá svislá přímka protne graf <b>nejvýš jednou</b>.' }
    ] },
    { title: 'Prosté zobrazení, zobrazení „na“ a bijekce', blocks: [
      { t: 'def', term: 'Prosté (injektivní)', x: '(∀x, y ∈ A) F(x) = F(y) ⇒ x = y.' },
      { t: 'def', term: 'Na (surjektivní)', x: '(∀y ∈ B)(∃x ∈ A) F(x) = y.' },
      { t: 'def', term: 'Bijekce (vzájemně jednoznačné)', x: 'D(F) = A, F je prosté a zobrazuje A na B.' },
      { t: 'grid', head: ['Zobrazení ℝ → ℝ (přednáška)', 'Prosté', 'Na', 'Bijekce'], rows: [
        ['y = x²', 'ne (f(−1) = f(1))', 'ne (záporná čísla nejsou obrazem)', 'ne'],
        ['y = x³', 'ano', 'ano', '<b>ano</b>'],
        ['y = log x', 'ano', 'ano (log nabývá všech reálných hodnot)', 'ne – D = (0, ∞) ≠ ℝ']
      ] },
      { t: 'grid', head: ['Relace na ℝ (Doplněk, úloha 2)', 'Výsledek'], rows: [
        ['2x + 3y = 5', 'bijekce; inverze 2y + 3x = 5'],
        ['2x² + 3y² = 5²', 'není zobrazení (elipsa)'],
        ['2x + 3y² = 5', 'není zobrazení (y = ±…)'],
        ['2x + 3y³ = 5', 'bijekce; inverze 2y + 3x³ = 5'],
        ['2x² + 3y = 5', 'zobrazení, není prosté ani na'],
        ['2ˣ + 3ʸ = 5', 'prosté, není na; inverze 2ʸ + 3ˣ = 5']
      ] },
      { t: 'grid', head: ['Cvičení 3, úloha 11 (na {r, s, t, u} a {5, 6, 7})', 'Výsledek'], rows: [
        ['R₁ = {(r,7), (t,5), (u,5), (s,6)}', 'surjektivní zobrazení (5 má dva vzory)'],
        ['R₂ = {(t,6), (r,5), (u,7)}', 'prosté a na; inverze {(6,t), (5,r), (7,u)} je zobrazení'],
        ['R₃ = {(s,6), (t,5), (r,7), (s,7)}', 'není zobrazení (s má dva obrazy)'],
        ['R₄ = {(r,6), (s,5), (u,6)}', 'zobrazení, ani prosté, ani na']
      ] }
    ] },
    { title: 'Inverzní relace a inverzní funkce', blocks: [
      { t: 'def', term: 'Inverzní relace', x: 'R⁻¹ = {(y, x) ∈ B × A | (x, y) ∈ R}, tj. x R⁻¹ y ⇔ y R x.', items: ['<b>věta:</b> inverzní relace k zobrazení F je zobrazení, právě když je F prosté'] },
      { t: 'flow', title: 'Jak najít inverzní funkci', steps: [
        { h: 'Ověř, že f je prostá', x: 'jinak inverzní funkce neexistuje (jen inverzní relace)' },
        { h: 'Z rovnice y = f(x) vyjádři x', x: 'běžné algebraické úpravy, logaritmus místo mocniny apod.' },
        { h: 'Prohoď x a y', x: 'dostaneš f⁻¹(x)' },
        { h: 'Prohoď obory', x: 'D(f⁻¹) = H(f), H(f⁻¹) = D(f)' }
      ] },
      { t: 'ex', x: '<b>y = x / (x + 2):</b> y(x + 2) = x ⇒ x(1 − y) = 2y ⇒ x = 2y / (1 − y). Tedy <b>f⁻¹(x) = 2x / (1 − x)</b>, D(f⁻¹) = ℝ ∖ {1} = H(f), H(f⁻¹) = ℝ ∖ {−2} = D(f).' },
      { t: 'ex', x: '<b>y = 3 + 5·10<sup>x−2</sup></b> (Hora): y − 3 = 5·10<sup>x−2</sup> ⇒ x − 2 = log((y − 3)/5). Tedy <b>f⁻¹(x) = 2 + log((x − 3)/5)</b>, D(f⁻¹) = (3, ∞), H(f⁻¹) = ℝ. Funkce <b>y = x²</b> na ℝ prostá není, inverzní funkci nemá.' },
      { t: 'grid', head: ['Doplněk, úloha 3', 'D(f)', 'H(f)', 'f⁻¹(x)'], rows: [
        ['2x + 4', 'ℝ', 'ℝ', 'x/2 − 2'],
        ['5 − √(x + 1)', '⟨−1, ∞)', '(−∞, 5⟩', 'x² − 10x + 24'],
        ['x² + 10x + 33, x ≥ −5', '⟨−5, ∞)', '⟨8, ∞)', '√(x − 8) − 5'],
        ['−4x² + 24x, x ≤ 3', '(−∞, 3⟩', '(−∞, 36⟩', '3 − √(9 − x/4)'],
        ['(6x + 5) / (4 − 2x)', 'ℝ ∖ {2}', 'ℝ ∖ {−3}', '(4x − 5) / (2x + 6)'],
        ['2 − 3·10ˣ', 'ℝ', '(−∞, 2)', 'log((2 − x)/3)']
      ] },
      { t: 'warn', x: 'U f(x) = 5 − √(x + 1) platí inverze x² − 10x + 24 jen pro x ≤ 5 (na oboru hodnot původní funkce) – mimo něj by nebyla prostá. Vždy uváděj D(f⁻¹) = H(f).' }
    ] },
    { title: 'Mohutnost množin', blocks: [
      { t: 'def', term: 'Mohutnost', x: 'Porovnání velikosti množin pomocí zobrazení:', items: ['|A| ≤ |B|, právě když existuje <b>prosté</b> zobrazení A do B', '|A| = |B|, právě když existuje <b>bijekce</b> A na B', 'mohutnost konečné množiny je počet jejích prvků'] },
      { t: 'def', term: 'Spočetná množina', x: 'Množina je konečná, nebo existuje bijekce f: ℕ → A.', items: ['nekonečné spočetné množiny jsou nejmenší nekonečné množiny', 'dají se seřadit do posloupnosti'] },
      { t: 'ul', items: [
        '|ℕ| = |ℤ| = |ℚ| – celá i racionální čísla jsou spočetná, i když se zdá, že jich je „víc“.',
        '<b>Cantorova věta:</b> pro každou množinu A platí |A| &lt; |P(A)|.',
        '|ℝ| = |P(ℕ)|, proto je <b>ℝ nespočetná</b> – reálná čísla nejde seřadit do posloupnosti.'
      ] },
      { t: 'tip', x: 'Představa z přednášky – <b>Hilbertův hotel</b> s nekonečně mnoha pokoji: i když je plný, nového hosta ubytuješ, když každý posune o pokoj dál (n → n + 1). Proto má „ℕ plus jeden prvek“ stejnou mohutnost jako ℕ.' }
    ] }
  ],
  mistakes: [
    'Plést „prosté“ (nejvýš jedna šipka <b>do</b> y) a „zobrazení“ (nejvýš jedna šipka <b>z</b> x).',
    'Prohlásit y = log x za bijekci ℝ → ℝ – definiční obor není celé ℝ.',
    'Hledat inverzní funkci k neprosté funkci (y = x² na ℝ).',
    'U inverzní funkce zapomenout prohodit definiční obor a obor hodnot.',
    'Myslet si, že ℚ má větší mohutnost než ℕ.'
  ],
  qa: [
    { q: 'Kdy je relace zobrazením?', a: 'Když má každý prvek nejvýš jeden obraz: (x, y) ∈ F ∧ (x, z) ∈ F ⇒ y = z.' },
    { q: 'Je y = x³ bijekce ℝ → ℝ?', a: 'Ano, je prostá i „na“.' },
    { q: 'Kdy je inverzní relace k zobrazení opět zobrazení?', a: 'Právě když je původní zobrazení prosté.' },
    { q: 'Jaká je inverzní funkce k y = 2x + 4?', a: 'f⁻¹(x) = x/2 − 2.' },
    { q: 'Je ℝ spočetná?', a: 'Ne, |ℝ| = |P(ℕ)| > |ℕ|.' },
    { q: 'Je relace x = y² na ℝ zobrazení?', a: 'Ne, x = 4 má obrazy 2 i −2.' }
  ]
});
