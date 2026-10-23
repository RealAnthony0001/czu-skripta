registerTopic({
  id: 'ciselne-obory', order: 7, icon: '🔢', title: 'Číselné obory, intervaly a komplexní čísla', src: 'podklady', lec: [4],
  where: 'Přednáška Množiny – Číselné obory + Cvičení 3 (úloha 1) + Doplněk ke cvičení z teorie množin (úlohy 4–6)',
  summary: 'ℕ ⊊ ℤ ⊊ ℚ ⊊ ℝ ⊊ ℂ, množinové operace s intervaly a počítání s komplexními čísly: sčítání, násobení, dělení, absolutní hodnota, kvadratická rovnice a goniometrický tvar.',
  vocab: [
    { w: 'ℕ, ℤ, ℚ, ℝ, ℂ', x: 'přirozená (zde <b>včetně 0</b>), celá, racionální, reálná a komplexní čísla' },
    { w: 'iracionální čísla 𝕀', x: 'ℝ ∖ ℚ – reálná čísla, která nejdou zapsat zlomkem (√2, π)' },
    { w: 'interval ⟨a, b)', x: 'všechna reálná x s a ≤ x < b; lomená závorka = krajní bod patří, kulatá = nepatří' },
    { w: 'imaginární jednotka i', x: 'číslo s vlastností i² = −1' },
    { w: 'komplexně sdružené číslo', x: 'k a + bi je to a − bi; používá se při dělení' },
    { w: 'goniometrický tvar', x: 'z = |z|(cos φ + i sin φ), kde |z| je vzdálenost od 0 a φ úhel od kladné reálné osy' }
  ],
  key: [
    '<b>ℕ ⊊ ℤ ⊊ ℚ ⊊ ℝ ⊊ ℂ</b>; v tomto předmětu ℕ = {0, 1, 2, …}.',
    'S intervaly počítej na <b>číselné ose</b>: průnik = kde se překrývají, rozdíl = co z A zbude po vyříznutí B (pozor na krajní body).',
    '<b>(a + bi)(c + di) = (ac − bd) + (ad + bc)i</b>; dělení: rozšiř zlomek <b>komplexně sdruženým</b> jmenovatelem.',
    '<b>|a + bi| = √(a² + b²)</b>; kvadratická rovnice se záporným diskriminantem má kořeny <b>(−b ± i√|D|) / 2a</b>.',
    'Goniometrický tvar: r = |z|, úhel φ podle kvadrantu, z = r(cos φ + i sin φ).'
  ],
  sections: [
    { title: 'Číselné obory', blocks: [
      { t: 'grid', head: ['Obor', 'Popis', 'Příklady'], rows: [
        ['ℕ přirozená', '{0, 1, 2, 3, …}', '0, 7, 100'],
        ['ℤ celá', '{…, −2, −1, 0, 1, 2, …}', '−3, 0, 5'],
        ['ℚ racionální', 'a/b, kde a, b ∈ ℤ, b ≠ 0', '½, −0,25, 3'],
        ['ℝ reálná', 'odpovídají bodům číselné osy', '√2, π, −1,5'],
        ['𝕀 iracionální', 'ℝ ∖ ℚ', '√2, π, e'],
        ['ℂ komplexní', '{a + b·i | a, b ∈ ℝ, i² = −1}', 'i, 2 − 3i']
      ] },
      { t: 'svg', title: 'Číselné obory jsou do sebe vnořené', x: MLG.ciselneObory() },
      { t: 'warn', x: 'Nula patří v tomto předmětu do ℕ (ℕ = {0, 1, 2, …}). V jiných předmětech se ℕ někdy začíná jedničkou – vždy se drž definice z přednášky.' }
    ] },
    { title: 'Intervaly a operace s nimi', blocks: [
      { t: 'p', x: 'Interval je množina reálných čísel, takže na něj fungují všechny množinové operace. Lomená závorka ⟨ ⟩ znamená, že krajní bod do intervalu patří, kulatá ( ), že nepatří; u ∞ je závorka vždy kulatá.' },
      { t: 'ex', x: '<b>Příklad z přednášky:</b> A = (−∞, −1) ∪ ⟨2, 5⟩, B = ⟨−3, 0) ∪ (2, ∞).<br>A ∪ B = <b>(−∞, 0) ∪ ⟨2, ∞)</b> · A ∩ B = <b>⟨−3, −1) ∪ (2, 5⟩</b> · A ∖ B = <b>(−∞, −3) ∪ {2}</b> – bod 2 v B není (B začíná až za dvojkou), proto v rozdílu zůstane osamocený.' },
      { t: 'grid', head: ['Cvičení 3, úloha 1', 'A ∪ B', 'A ∩ B', 'A ∖ B'], rows: [
        ['(c) A = (−∞, −5⟩ ∪ (2, ∞), B = ⟨−7, 1)', '(−∞, 1) ∪ (2, ∞)', '⟨−7, −5⟩', '(−∞, −7) ∪ (2, ∞)'],
        ['(d) A = ⟨−5, 1) ∪ ⟨3, 8), B = (−∞, −3⟩ ∪ (3, ∞)', '(−∞, 1) ∪ ⟨3, ∞)', '⟨−5, −3⟩ ∪ (3, 8)', '(−3, 1) ∪ {3}'],
        ['(e) A = (−4, 0) ∪ ⟨2, 6⟩, B = (−∞, −3) ∪ {−1} ∪ {1}', '(−∞, 0) ∪ {1} ∪ ⟨2, 6⟩', '(−4, −3) ∪ {−1}', '⟨−3, −1) ∪ (−1, 0) ∪ ⟨2, 6⟩'],
        ['(g) A = sudá celá, B = {x ∈ ℤ; x > 17}', '{…, 14, 16} ∪ {18, 19, 20, …}', '{18, 20, 22, …}', '{…, 12, 14, 16}']
      ] },
      { t: 'ex', x: '<b>Dělitelnost:</b> A = {x ∈ ℤ | 12 dělí x}, B = {x ∈ ℤ | 9 dělí x}. Číslo je v obou, právě když je dělitelné nejmenším společným násobkem 12 a 9, tedy <b>A ∩ B = {x ∈ ℤ | 36 dělí x}</b>.' },
      { t: 'tip', x: 'Nakresli si obě množiny nad sebe na číselnou osu a krajní body vyznač plným (patří) nebo prázdným (nepatří) kolečkem. Výsledek pak jen opíšeš.' }
    ] },
    { title: 'Komplexní čísla', blocks: [
      { t: 'def', term: 'Komplexní číslo', x: 'z = a + b·i, kde a, b ∈ ℝ a <b>i² = −1</b>. a je reálná část, b imaginární část; komplexní číslo odpovídá bodu (a, b) v Gaussově rovině.' },
      { t: 'grid', head: ['Operace', 'Pravidlo', '18 − i a 3 + 2i (přednáška)'], rows: [
        ['součet', 'sečti reálné a imaginární části zvlášť', '21 + i'],
        ['rozdíl', 'odečti části zvlášť', '15 − 3i'],
        ['součin', 'roznásob a nahraď i² = −1', '54 + 36i − 3i − 2i² = <b>56 + 33i</b>'],
        ['podíl', 'rozšiř komplexně sdruženým jmenovatelem (3 − 2i)', '(52 − 39i) / 13 = <b>4 − 3i</b>']
      ] },
      { t: 'svg', title: 'Komplexní číslo v Gaussově rovině', x: MLG.komplexniRovina(), cap: '|4 − 3i| = √(16 + 9) = 5; w = 3√3 + 3i má velikost √(27 + 9) = 6 a úhel π/6.' },
      { t: 'ex', x: '<b>Absolutní hodnota:</b> |−5| = <b>5</b>, |4 − 3i| = √(4² + 3²) = <b>5</b>, |1 + i| = <b>√2</b>.' },
      { t: 'ex', x: '<b>Kvadratická rovnice x² + 6x + 25 = 0:</b> D = 36 − 100 = −64, √D = 8i, x = (−6 ± 8i) / 2 = <b>−3 ± 4i</b>.' },
      { t: 'ex', x: '<b>Goniometrický tvar:</b> 3√3 + 3i má |z| = √(27 + 9) = 6, cos φ = 3√3/6 = √3/2, sin φ = ½ ⇒ φ = π/6, tedy <b>6(cos π/6 + i sin π/6)</b>. Naopak √2(cos 3π/4 + i sin 3π/4) = √2(−√2/2 + i√2/2) = <b>−1 + i</b>.' },
      { t: 'ex', x: '<b>Průnik množin komplexních čísel:</b> A = {a + ib | a² + b² = 1} (jednotková kružnice), B = {a + ib | a = 0} (imaginární osa). A ∩ B = <b>{i, −i}</b>.' },
      { t: 'grid', head: ['Doplněk, úloha', 'Zadání', 'Výsledek'], rows: [
        ['4c', '(2 − i)·(−3 + 4i)', '−2 + 11i'],
        ['4d', '(3 + 3i)·(−1 − 4i)', '9 − 15i'],
        ['4e', '(6 + i) : (−2 + 3i)', '−9/13 − 20/13 i'],
        ['4f', '(−2 − 7i) : (1 − i)', '5/2 − 9/2 i'],
        ['5a–d', '−3i;  −1 + i;  √3 − i;  −2 + √12 i', '3(cos 3π/2 + i sin 3π/2);  √2(cos 3π/4 + i sin 3π/4);  2(cos 11π/6 + i sin 11π/6);  4(cos 2π/3 + i sin 2π/3)'],
        ['6a–d', 'x²+2x+2;  x²−6x+13;  x²−10x+50;  −x²−8x−25', '−1 ± i;  3 ± 2i;  5 ± 5i;  −4 ± 3i'],
        ['6e', '−3x² + 6x − 15 = 0', '<b>1 ± 2i</b>'],
        ['6f', '4x² + 12x + 10 = 0', '−3/2 ± ½ i']
      ] },
      { t: 'warn', x: 'Klíč k Doplňku uvádí u úlohy 6(e) výsledek −1 ± 2i, <b>správně je 1 ± 2i</b>: po vydělení −3 vyjde x² − 2x + 5 = 0, D = 4 − 20 = −16, x = (2 ± 4i)/2 = 1 ± 2i. Zkouška: (1 + 2i)² = −3 + 4i, −3(−3 + 4i) + 6(1 + 2i) − 15 = 9 − 12i + 6 + 12i − 15 = 0.' },
      { t: 'tip', x: 'Úhel pro goniometrický tvar urči podle kvadrantu: nejdřív spočítej r = |z|, pak najdi φ, pro které cos φ = a/r a sin φ = b/r. Číslo −1 + i leží ve 2. kvadrantu, proto 3π/4, ne π/4.' }
    ] }
  ],
  mistakes: [
    'Zapomenout, že 0 ∈ ℕ (v tomto předmětu).',
    'U intervalů ztratit osamocený bod (A ∖ B = (−∞, −3) ∪ {2}).',
    'Při násobení komplexních čísel zapomenout, že i² = −1.',
    'Dělit komplexní čísla „po složkách“ místo rozšíření komplexně sdruženým číslem.',
    'U goniometrického tvaru vzít úhel z kalkulačky bez ohledu na kvadrant.'
  ],
  qa: [
    { q: 'Jaký vztah platí mezi číselnými obory?', a: 'ℕ ⊊ ℤ ⊊ ℚ ⊊ ℝ ⊊ ℂ; iracionální čísla jsou ℝ ∖ ℚ.' },
    { q: 'Kolik je (18 − i) : (3 + 2i)?', a: '4 − 3i (rozšíříme 3 − 2i: (52 − 39i)/13).' },
    { q: 'Jaká je absolutní hodnota 4 − 3i?', a: '√(16 + 9) = 5.' },
    { q: 'Jaké kořeny má x² + 6x + 25 = 0?', a: '−3 ± 4i.' },
    { q: 'Čemu se rovná A ∩ B pro A = násobky 12 a B = násobky 9 v ℤ?', a: 'Násobky 36.' }
  ]
});
