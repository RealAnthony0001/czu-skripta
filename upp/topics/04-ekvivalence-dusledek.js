registerTopic({
  id: 'ekvivalence-dusledek', order: 4, icon: '🔗', title: 'Ekvivalence formulí a logický důsledek', src: 'podklady', lec: [1],
  summary: 'Tautologická ekvivalence a důležité zákony (De Morgan, absorpce, distribuce …), logický důsledek a ověřování úsudků pravdivostní tabulkou, Booleova algebra a fuzzy logika – s řešením všech úsudků ze cvičení 2.',
  vocab: [
    { w: 'Úsudek', x: 'Z předpokladů (premis) vyvozujeme závěr; ověřujeme, zda závěr z předpokladů logicky plyne.' },
    { w: 'Premisa (předpoklad)', x: 'Výrok, který bereme jako daný (v<sub>1</sub>, …, v<sub>n</sub>).' },
    { w: 'Logický důsledek', x: 'Závěr d, který je pravdivý při každém ohodnocení, v němž jsou pravdivé všechny premisy.' },
    { w: 'Booleova algebra', x: 'Algebra na {0,1} s operacemi součet (+), součin (·) a doplněk.' },
    { w: 'Fuzzy logika', x: 'Pravdivost je míra z intervalu ⟨0, 1⟩, ne jen 0 / 1.' }
  ],
  key: [
    '<b>A ≡ B</b> (tautologicky ekvivalentní), právě když generují stejnou pravdivostní funkci ⇔ <b>A ↔ B je tautologie</b>.',
    '<b>{v<sub>1</sub>,…,v<sub>n</sub>} ⊨ d</b> ⇔ <b>(v<sub>1</sub> ∧ … ∧ v<sub>n</sub>) → d je tautologie</b> ⇔ (v<sub>1</sub> ∧ … ∧ v<sub>n</sub> ∧ ¬d) je kontradikce.',
    '<b>De Morgan:</b> ¬(a ∧ b) ≡ ¬a ∨ ¬b; ¬(a ∨ b) ≡ ¬a ∧ ¬b.',
    '<b>a → b ≡ ¬a ∨ b</b>; <b>a ↔ b ≡ (a → b) ∧ (b → a)</b>.',
    '<b>Asociativní</b> jsou ∧, ∨, ↔, ⊕ (ne →, ↑, ↓). <b>Komutativní</b> jsou všechny kromě →.'
  ],
  sections: [
    { title: 'Tautologická ekvivalence', blocks: [
      { t: 'def', term: 'Tautologická ekvivalence', x: 'Formule A a B jsou tautologicky ekvivalentní (A ≡ B), jestliže generují <b>stejnou pravdivostní funkci</b>.', items: ['mají stejný výsledný sloupec v pravdivostní tabulce', 'totéž: formule A ↔ B je tautologie'] },
      { t: 'ex', x: '<b>x → y ≡ ¬x ∨ y:</b> pro (x,y) = 00, 01, 10, 11 dává obě formule 1, 1, 0, 1 → shodná funkce, tedy ekvivalence.' },
      { t: 'grid', head: ['Zákon', 'Zápis'], rows: [
        ['Dvojí negace', '¬¬a ≡ a'],
        ['Vyloučené třetí', 'a ∨ ¬a ≡ 1 · a ∧ ¬a ≡ 0'],
        ['Neutralita 0 a 1', 'a ∨ 0 ≡ a · a ∧ 1 ≡ a'],
        ['Agresivita 0 a 1', 'a ∧ 0 ≡ 0 · a ∨ 1 ≡ 1'],
        ['Idempotence', 'a ∨ a ≡ a · a ∧ a ≡ a'],
        ['Absorpce', 'a ∨ (a ∧ b) ≡ a · a ∧ (a ∨ b) ≡ a'],
        ['Absorpce negace', 'a ∨ (¬a ∧ b) ≡ a ∨ b · a ∧ (¬a ∨ b) ≡ a ∧ b'],
        ['Distributivita', 'a ∧ (b ∨ c) ≡ (a ∧ b) ∨ (a ∧ c) · a ∨ (b ∧ c) ≡ (a ∨ b) ∧ (a ∨ c)'],
        ['De Morganovy zákony', '¬(a ∨ b) ≡ ¬a ∧ ¬b · ¬(a ∧ b) ≡ ¬a ∨ ¬b'],
        ['Komutativita', 'a ∧ b ≡ b ∧ a · a ∨ b ≡ b ∨ a · a ↔ b ≡ b ↔ a · (ale a → b ≢ b → a)'],
        ['Asociativita', '(a ∧ b) ∧ c ≡ a ∧ (b ∧ c) · (a ∨ b) ∨ c ≡ a ∨ (b ∨ c) · (a ↔ b) ↔ c ≡ a ↔ (b ↔ c) · (ale (a → b) → c ≢ a → (b → c))'],
        ['Další', 'a → b ≡ ¬a ∨ b · (a ∨ b) → c ≡ (a → c) ∧ (b → c) · a ↔ b ≡ (a → b) ∧ (b → a) · a ⊕ b ≡ ¬(a ↔ b)']
      ] },
      { t: 'widget', name: 'tt', how: ['Do pole ϕ napiš formuli (proměnné a–e, spojky ¬ ∧ ∨ → ↔ ⊕ ↑ ↓ – dají se vkládat tlačítky pod polem).', 'Tabulka má sloupec pro každou podformuli; <b>poslední (červeně) je výsledek celé formule</b>.', 'Pod tabulkou je určení formule (tautologie / kontradikce / splnitelná) a její ÚDNT a ÚKNT.', 'Do pole ψ napiš druhou formuli – widget rozhodne o ekvivalenci a logickém důsledku.'], sol: 'Formule <b>a → b</b> a <b>¬a ∨ b</b> mají stejný výsledný sloupec (1, 1, 0, 1) → jsou <b>tautologicky ekvivalentní</b>; implikaci lze nahradit disjunkcí s negovaným předpokladem.', sym: 'upp', f: 'a → b', g: '¬a ∨ b', title: 'Ověř zákon: dvě formule vedle sebe', cap: 'Ekvivalence i logický důsledek se ověřují pravdivostní tabulkou; widget při neplatnosti ukáže protipříklad.' },
      { t: 'tip', x: 'Při převodech si nejčastěji vystačíš s trojicí: <b>a → b ≡ ¬a ∨ b</b>, <b>De Morgan</b> a <b>dvojí negace</b>.' }
    ] },
    { title: 'Řešené příklady – ekvivalence (cvičení 2, př. 3)', blocks: [
      { t: 'grid', head: ['Dvojice formulí', 'Ekvivalentní?'], rows: [
        ['a) p ∧ (q ∧ r) a (p ∧ q) ∧ r', '<b>ANO</b> – asociativita ∧'],
        ['b) p ⊕ (q ⊕ r) a (p ⊕ q) ⊕ r', '<b>ANO</b> – asociativita ⊕'],
        ['c) p ↓ (q ↓ r) a (p ↓ q) ↓ r', '<b>NE</b> – ↓ není asociativní (liší se např. pro 001, 011)'],
        ['d) p → (q → r) a (p → q) → r', '<b>NE</b> – implikace není asociativní (liší se např. pro 000, 010)'],
        ['e) p ↔ q a (p ∨ q) ∧ (¬p ∨ ¬q)', '<b>NE</b> – pravá strana je ve skutečnosti p ⊕ q'],
        ['f) p ⊕ q a ¬((p ∨ ¬q) ∧ (¬p ∨ q))', '<b>ANO</b> – (p ∨ ¬q) ∧ (¬p ∨ q) ≡ p ↔ q, jeho negace je p ⊕ q']
      ] },
      { t: 'ex', x: '<b>c) kontrolní řádek (p,q,r) = 001:</b> p ↓ (q ↓ r) = 0 ↓ (0 ↓ 1) = 0 ↓ 0 = 1, ale (p ↓ q) ↓ r = (0 ↓ 0) ↓ 1 = 1 ↓ 1 = 0 → různé.' }
    ] },
    { title: 'Logický důsledek', blocks: [
      { t: 'def', term: 'Logický důsledek', x: 'Z výroků P = {v<sub>1</sub>, …, v<sub>n</sub>} logicky vyplývá výrok d (P ⊨ d), právě když <b>pro všechna ohodnocení, při nichž jsou všechny v<sub>i</sub> pravdivé, je pravdivý i d</b>.', items: ['ekvivalentně: formule (v<sub>1</sub> ∧ … ∧ v<sub>n</sub>) → d je <b>tautologie</b>', 'nebo: formule (v<sub>1</sub> ∧ … ∧ v<sub>n</sub> ∧ ¬d) je <b>kontradikce</b>'] },
      { t: 'svg', title: 'Logický důsledek jako inkluze', x: UPP.consequenceDiagram(), cap: 'Množina ohodnocení, kde platí všechny premisy, leží celá uvnitř množiny ohodnocení, kde platí závěr d – to je P ⊨ d. Bod mimo by byl protipříklad (premisy platí, d ne).' },
      { t: 'flow', title: 'Postup ověření úsudku', steps: [
        { h: 'Pojmenuj výroky', x: 'p: prší, q: vezmu deštník, r: zmoknu …' },
        { h: 'Přelož premisy a závěr', x: 'v<sub>1</sub>, v<sub>2</sub>, … a d' },
        { h: 'Sestav tabulku', x: 'sloupce pro všechny premisy a pro d' },
        { h: 'Posuď řádky', x: 've všech řádcích, kde jsou všechny premisy 1, musí být d = 1' }
      ] },
      { t: 'ex', x: '<b>Prší a vezmu si deštník → nezmoknu. Vezmu si deštník. ⇒ nezmoknu?</b> p: prší, q: deštník, r: zmoknu. v<sub>1</sub>: (p ∧ q) → ¬r, v<sub>2</sub>: q, d: ¬r. Pro p = 0, q = 1, r = 1 jsou obě premisy pravdivé, ale d = 0. <b>Neplyne.</b>' },
      { t: 'warn', x: 'Úsudek může mít pravdivé premisy i závěr a přesto být <b>neplatný</b>. Logika zkoumá jen <b>vztah</b> premis a závěru, ne jejich pravdivost ve skutečnosti.' }
    ] },
    { title: 'Úsudky ze cvičení 2 – řešení', blocks: [
      { t: 'grid', head: ['Úsudek', 'Formalizace', 'Plyne?'], rows: [
        ['a) Buď je examinátor shovívavý, nebo je kurz neužitečný. Examinátor není shovívavý. ⇒ kurz není užitečný?', 'p: shovívavý, q: kurz neužitečný · p ⊕ q, ¬p ⊢ q', '<b>ANO</b>'],
        ['b) Jestliže neprší nebo si vezmu deštník, nezmoknu. Prší. ⇒ nezmoknu?', '(¬p ∨ q) → ¬r, p ⊢ ¬r', '<b>NE</b> (p = 1, q = 0, r = 1)'],
        ['c) Nebude pršet. Spadnu do potoka. Když spadnu do potoka, budu mokrý. ⇒ když nebude pršet, budu mokrý?', '¬p, q, q → r ⊢ ¬p → r', '<b>ANO</b>'],
        ['d) Jestliže sním houby a není mi dobře, vyhledám lékaře. ⇒ jestliže sním houby a je mi dobře, nevyhledám lékaře?', '(p ∧ ¬q) → r ⊢ (p ∧ q) → ¬r', '<b>NE</b> (premisa nic neříká o případu „je mi dobře“)'],
        ['e) Není pravda, že Petr hraje fotbal i hokej. Petr nehraje fotbal. ⇒ hraje hokej?', '¬(p ∧ q), ¬p ⊢ q', '<b>NE</b> (p = 0, q = 0)'],
        ['f) Je doma, nebo ve škole. Je-li doma, hraje hry. ⇒ nehraje-li hry, je ve škole?', 'p ∨ q, p → r ⊢ ¬r → q', '<b>ANO</b> (obměna implikace)'],
        ['g) Jsem-li vzhůru, pracuji; spím-li, jsem v posteli. Buď jsem vzhůru, nebo spím. Pracuji-li, nejsem v posteli; spím-li, nepracuji. ⇒ jsem v posteli?', '(p → q) ∧ (r → s), p ⊕ r, (q → ¬s) ∧ (r → ¬q) ⊢ s', '<b>NE</b> (p = 1, q = 1, r = 0, s = 0 – jsem vzhůru, pracuji, nejsem v posteli)']
      ] },
      { t: 'ex', x: '<b>Samostatný příklad (cvičení 2):</b> P1: Logiku umím právě tehdy, když umím uvažovat (l ↔ u). P2: Nejsem hloupý (¬h). P3: Buď umím uvažovat, nebo jsem hloupý (u ⊕ h). ⇒ Umím logiku (l)? Premisy jsou pravdivé jen pro l = 1, u = 1, h = 0 – a tam je l = 1. <b>Plyne.</b> (Z P2 a P3 plyne u = 1, z P1 pak l = 1.)' }
    ] },
    { title: 'Booleova algebra a fuzzy logika', blocks: [
      { t: 'p', x: 'Booleova algebra pracuje s proměnnými z {0,1} a třemi operacemi: <b>logický součet (+)</b>, <b>součin (·)</b> a <b>doplněk (¬)</b>. Priorita od nejvyšší: doplněk, součin, součet – proto lze místo ((x·y) + z) psát x·y + z. Výrokový počet tvoří Booleovu algebru: 1 = pravdivý výrok, 0 = nepravdivý, + = ∨, · = ∧.' },
      { t: 'def', term: 'Fuzzy logika (Zadeh, 1965)', x: 'Ohodnocení proměnné je <b>míra pravdivosti</b> z intervalu ⟨0, 1⟩.', items: ['příklad: 0 = nepravda, ½ = neznámo, 1 = pravda', 'operace součtu, součinu a doplňku se definují podobně jako v Booleově algebře', 'výsledek je opět z ⟨0, 1⟩'] },
      { t: 'versus', cols: [
        { h: 'Booleova algebra', items: ['hodnoty {0, 1}', 'výrok je buď pravda, nebo nepravda'] },
        { h: 'Fuzzy logika', items: ['hodnoty z intervalu ⟨0, 1⟩', 'postihuje neurčitost, neznámo, „částečnou“ pravdu'] }
      ] }
    ] }
  ],
  mistakes: [
    'Při logickém důsledku kontrolovat <b>všechny řádky</b> – rozhodují jen ty, kde jsou všechny premisy pravdivé.',
    'Hledat důsledek podle toho, zda „dává smysl“ – rozhoduje výhradně pravdivostní tabulka.',
    'Použít asociativitu pro →, ↑, ↓ – neplatí.',
    'Špatně přeložit „buď – nebo“ (⊕) jako obyčejné ∨, nebo „jestliže … pak“ obrátit směrem implikace.'
  ],
  qa: [
    { q: 'Kdy jsou dvě formule tautologicky ekvivalentní?', a: 'Když generují stejnou pravdivostní funkci (mají stejný výsledný sloupec); ekvivalentně když je formule A ↔ B tautologie.' },
    { q: 'Napište De Morganovy zákony.', a: '¬(a ∨ b) ≡ ¬a ∧ ¬b (negace disjunkce je konjunkce negací) a ¬(a ∧ b) ≡ ¬a ∨ ¬b (negace konjunkce je disjunkce negací).' },
    { q: 'Vyjádřete implikaci a ekvivalenci pomocí ¬, ∧, ∨.', a: 'a → b ≡ ¬a ∨ b; a ↔ b ≡ (a → b) ∧ (b → a) ≡ (¬a ∨ b) ∧ (¬b ∨ a).' },
    { q: 'Co je logický důsledek? Jak ho ověříme?', a: 'Z premis v<sub>1</sub>…v<sub>n</sub> plyne d, pokud je d pravdivé při každém ohodnocení, kde jsou všechny premisy pravdivé. Ověříme tabulkou: (v<sub>1</sub> ∧ … ∧ v<sub>n</sub>) → d musí být tautologie (nebo v<sub>1</sub> ∧ … ∧ v<sub>n</sub> ∧ ¬d kontradikce).' },
    { q: 'Plyne z „Jestliže prší, nezmoknu, když si vezmu deštník. Prší. Vezmu si deštník.“ závěr „nezmoknu“?', a: 'Formalizace (p ∧ q) → ¬r, p, q ⊢ ¬r. Jediný řádek s pravdivými premisami je p = 1, q = 1 – a tam musí být ¬r = 1. Plyne.' },
    { q: 'Plyne z „Neprší nebo si vezmu deštník → nezmoknu“ a „Neprší“ závěr „nezmoknu“?', a: 'Ano: z ¬p plyne ¬p ∨ q = 1, tedy ¬r (modus ponens).' },
    { q: 'Plyne z „Není pravda, že Petr hraje fotbal i hokej“ a „Petr nehraje fotbal“ závěr „Petr hraje hokej“?', a: 'Ne. Při p = 0, q = 0 jsou obě premisy pravdivé, ale závěr q je nepravdivý.' },
    { q: 'Plyne z „Je doma nebo ve škole; je-li doma, hraje hry“ závěr „nehraje-li hry, je ve škole“?', a: 'Ano. Nehraje-li hry (¬r), nemůže být doma (p → r), a protože je doma nebo ve škole, je ve škole.' },
    { q: 'Čím se liší fuzzy logika od Booleovy algebry?', a: 'Booleova algebra má hodnoty {0,1}; fuzzy logika připouští libovolnou hodnotu z intervalu ⟨0,1⟩ jako míru pravdivosti (např. „neznámo“ = 0,5).' }
  ]
});
