registerTopic({
  id: 'relace', order: 8, icon: '🔗', title: 'Relace, ekvivalence a uspořádání', src: 'podklady', lec: [5],
  where: 'Přednáška Relace a zobrazení (Čermák, Hora) + Cvičení 3 (úlohy 5–10) + Doplněk ke cvičení z teorie množin (úloha 1)',
  summary: 'Relace jako množina uspořádaných dvojic, čtyři vlastnosti (reflexivní, symetrická, antisymetrická, tranzitivní), ekvivalence s třídami, uspořádání s Hasseho diagramem a doplňování relace nejmenším počtem dvojic.',
  vocab: [
    { w: 'kartézský součin A × B', x: 'množina všech uspořádaných dvojic (a, b), a ∈ A, b ∈ B; A × A se píše A²' },
    { w: 'binární relace', x: 'libovolná podmnožina R ⊆ A × B; místo (a, b) ∈ R se píše aRb' },
    { w: 'ekvivalence', x: 'relace reflexivní, symetrická a tranzitivní' },
    { w: 'uspořádání', x: 'relace reflexivní, antisymetrická a tranzitivní (též částečné uspořádání)' },
    { w: 'třída ekvivalence', x: 'skupina prvků, které jsou spolu v relaci; ekvivalence rozdělí množinu na disjunktní třídy' },
    { w: 'Hasseho diagram', x: 'obrázek uspořádání: menší prvky níž, čára jen mezi bezprostředními sousedy' }
  ],
  key: [
    '<b>Reflexivní:</b> každé x je v relaci samo se sebou. <b>Symetrická:</b> xRy ⇒ yRx. <b>Antisymetrická:</b> xRy ∧ yRx ⇒ x = y. <b>Tranzitivní:</b> xRy ∧ yRz ⇒ xRz.',
    '<b>Ekvivalence</b> = R + S + T, <b>uspořádání</b> = R + A + T.',
    'Symetrie a antisymetrie nejsou opaky: relace může mít obě (rovnost, prázdná relace) i žádnou.',
    'Doplnění na ekvivalenci: přidej (x, x), obrácené dvojice a tranzitivní důsledky – opakuj, dokud se nic nemění.',
    'V Hasseho diagramu nekreslíme smyčky ani vztahy, které plynou z tranzitivity.'
  ],
  sections: [
    { title: 'Kartézský součin a relace', blocks: [
      { t: 'def', term: 'Binární relace', x: 'Jakákoli podmnožina R kartézského součinu A × B.', items: ['je-li A = B, mluvíme o relaci <b>na množině A</b>', 'místo (a, b) ∈ R píšeme aRb'] },
      { t: 'p', x: 'Množiny říkají, co kam patří; relace popisují <b>vztahy mezi prvky</b> – uspořádání dat („menší než“), rozdělení do skupin (ekvivalence), funkce (zvláštní relace) nebo hrany orientovaného grafu.' },
      { t: 'ex', x: '<b>Disponent:</b> K = klienti banky, U = běžné účty, k D u ⇔ k je disponentem účtu u. Relace D je podmnožinou K × U.' },
      { t: 'ul', items: [
        '<b>výčtem</b> všech dvojic,',
        '<b>předpisem</b> – kdy dvojice do relace patří,',
        '<b>graficky</b> – šipka z x do y, když xRy (orientovaný graf),',
        '<b>maticí</b> – tabulka s křížkem v řádku x a sloupci y.'
      ] },
      { t: 'ex', x: 'Na A = {1, 2, 3, 4}: xRy ⇔ x ≤ y dává R = {(1,1), (1,2), (1,3), (1,4), (2,2), (2,3), (2,4), (3,3), (3,4), (4,4)}; xSy ⇔ x = y² dává S = {(1,1), (4,2)}.' }
    ] },
    { title: 'Vlastnosti relací', blocks: [
      { t: 'grid', head: ['Vlastnost', 'Definice', 'Jak to poznat v grafu relace'], rows: [
        ['reflexivní', '(∀x ∈ A) xRx', 'u <b>každého</b> prvku smyčka'],
        ['symetrická', 'xRy ⇒ yRx', 'ke každé šipce i šipka zpět'],
        ['antisymetrická', 'xRy ∧ yRx ⇒ x = y', 'mezi dvěma různými prvky nikdy obě šipky'],
        ['tranzitivní', 'xRy ∧ yRz ⇒ xRz', 'ke každé „dvoukrokové“ cestě i přímá šipka'],
        ['antireflexivní', '(∀x ∈ A) ¬xRx', 'žádná smyčka (používá se u grafů)']
      ] },
      { t: 'svg', title: 'Čtyři vlastnosti v obrázku', x: MLG.relaceVlastnosti(), cap: 'U tranzitivní relace červená šipka 1→3 doplňuje cestu 1→2→3.' },
      { t: 'widget', name: 'rel', how: ['Vyber předvolbu nebo klikáním sestav vlastní relaci.', 'Pod tabulkou se přepočítají reflexivita, symetrie, antisymetrie a tranzitivita; u každé ✗ je protipříklad.', 'Ekvivalence = reflexivní + symetrická + tranzitivní, uspořádání = reflexivní + antisymetrická + tranzitivní.'], sol: '<b>x ≤ y</b> na {1, 2, 3, 4}: reflexivní ✓, symetrická ✗ (je (1, 2), ale chybí (2, 1)), antisymetrická ✓, tranzitivní ✓ → je to <b>uspořádání</b>, ne ekvivalence.', k: 'le', title: 'Zkus si: vlastnosti relace s protipříkladem', cap: 'Klikni do tabulky (řádek x, sloupec y = „x R y“) a sleduj, které vlastnosti se rozbijí a proč.' },
      { t: 'warn', x: 'Slajd Čermákovy přednášky píše u tranzitivity kvantifikátor „∀x, y ∈ A“, ale v definici vystupuje i z. Správně <b>(∀x, y, z ∈ A)</b>: (x, y) ∈ R ∧ (y, z) ∈ R ⇒ (x, z) ∈ R.' },
      { t: 'grid', head: ['Relace', 'Vlastnosti (ze cvičení a přednášky)'], rows: [
        ['{(♀,♂), (♂,♀)} na {♀, ♂}', 'symetrická; zobrazení'],
        ['{(♀,♂)}', 'antisymetrická, tranzitivní; zobrazení'],
        ['{} (prázdná)', 'symetrická, antisymetrická, tranzitivní; zobrazení'],
        ['xRy ⇔ x = y² na {1, 2, 3, 4}', 'antisymetrická, tranzitivní'],
        ['xSy ⇔ x² = y² na {−2, …, 2}', 'reflexivní, symetrická, tranzitivní → <b>ekvivalence</b>'],
        ['{(a, b); a + b > 3} na {1, …, 5}', 'pouze symetrická'],
        ['{(a, b); b = 2a − 3} na {1, …, 5}', 'antisymetrická, tranzitivní; zobrazení'],
        ['{(a, b); 2 | (a·b + a)} na {1, …, 5}', 'reflexivní, tranzitivní'],
        ['aRb ⇔ a ≤ b na ℕ', 'reflexivní, antisymetrická, tranzitivní → <b>uspořádání</b>'],
        ['aRb ⇔ a − b je sudé na ℕ', '<b>ekvivalence</b> (třídy: sudá a lichá čísla)'],
        ['aRb ⇔ a je liché nebo b je sudé na ℕ', 'reflexivní, tranzitivní'],
        ['aRb ⇔ a·b = 0 na ℕ', 'symetrická']
      ] },
      { t: 'ex', x: '<b>Dělitelnost na ℤ (přednáška):</b> a | b je reflexivní a tranzitivní, ale <b>není antisymetrická</b> – 2 | −2 i −2 | 2, a přitom 2 ≠ −2. Na ℤ to tedy uspořádání není (na ℕ by bylo). Relace (a | b ∧ b | a) platí, právě když a = ±b, a je to <b>ekvivalence</b>.' }
    ] },
    { title: 'Ekvivalence a třídy ekvivalence', blocks: [
      { t: 'def', term: 'Ekvivalence', x: 'Relace, která je <b>reflexivní, symetrická a tranzitivní</b>.', items: ['rozdělí nosnou množinu na disjunktní části – <b>třídy ekvivalence</b>', 'prvky jedné třídy jsou spolu v relaci všechny navzájem'] },
      { t: 'flow', title: 'Doplnění relace na ekvivalenci nejmenším počtem dvojic', steps: [
        { h: 'Reflexivita', x: 'přidej (x, x) pro každý prvek, který ji ještě nemá' },
        { h: 'Symetrie', x: 'ke každé (x, y) přidej (y, x)' },
        { h: 'Tranzitivita', x: 'když (x, y) a (y, z), přidej (x, z); prakticky: spoj prvky do skupin a uvnitř skupiny dej „všichni se všemi“' },
        { h: 'Opakuj, dokud se nic nemění', x: 'třídy = vzniklé skupiny' }
      ] },
      { t: 'widget', fig: MLG.tridyEkvivalence(), figcap: 'Graf relace na šesti lidech: čára je dvojice v obou směrech (smyčky se nekreslí). Vznikly tři třídy {Dana, Hana}, {Karel, Petra, Radim}, {Vladimír}, které se nepřekrývají a pokrývají celou množinu.', name: 'rel', how: ['Klikáním do tabulky přidáváš a ubíráš dvojice (řádek x, sloupec y = „x R y“) – jen na prvním kroku.', 'Pod tabulkou jsou čtyři vlastnosti; <b>✗ vždy doplňuje protipříklad</b>.', 'Další kroky doplňují relaci na ekvivalenci: reflexivita → symetrie → tranzitivita; modře jsou přidané dvojice.', 'Poslední krok vypíše třídy ekvivalence a počet přidaných dvojic.'], sol: 'Relace R = {(K, R), (D, H), (H, H), (K, P)} na množině {D, K, P, H, R, V}: třídy <b>{K, P, R}</b>, <b>{D, H}</b>, <b>{V}</b>. Přidat je potřeba <b>10 dvojic</b>: (D, D), (K, K), (P, P), (R, R), (V, V), (H, D), (R, K), (P, K), (P, R), (R, P).', k: 'lec', title: 'Doplnění relace na ekvivalenci krok za krokem (příklad z přednášky)' },
      { t: 'ex', x: '<b>Přednáška:</b> A = {Dana, Karel, Petra, Hana, Radim, Vladimír}, R = {(K, R), (D, H), (H, H), (K, P)}.<br>Karel je s Radimem i s Petrou, tedy přes Karla i Petra s Radimem → třída <b>{K, P, R}</b>; dále <b>{D, H}</b> a <b>{V}</b> sám. Přidat je potřeba <b>10 dvojic</b>: (D, D), (K, K), (P, P), (R, R), (V, V), (H, D), (R, K), (P, K), (P, R), (R, P).' },
      { t: 'grid', head: ['Cvičení 3, úloha 9', 'Přidaných dvojic', 'Třídy ekvivalence'], rows: [
        ['R = {(a,b), (e,e), (a,c), (c,c), (f,e), (d,c), (c,a)}', '13', '{a, b, c, d}, {e, f}'],
        ['S = {(a,f), (d,d), (a,c), (d,b), (c,a)}', '9', '{a, c, f}, {b, d}, {e}'],
        ['T = {(a,c), (b,d), (f,a), (d,b), (c,e), (c,f)}', '14', '{a, c, e, f}, {b, d}']
      ] }
    ] },
    { title: 'Uspořádání a Hasseho diagram', blocks: [
      { t: 'def', term: 'Uspořádání', x: 'Relace <b>reflexivní, antisymetrická a tranzitivní</b>.', items: ['také „částečné uspořádání“ – některé dvojice prvků nemusí být srovnatelné'] },
      { t: 'def', term: 'Hasseho diagram', x: 'Pravidla kreslení uspořádání:', items: ['„menší“ prvky kreslíme níže než „větší“', 'čáru mezi a a b dáme právě tehdy, když a ≼ b a mezi nimi neleží žádné jiné c (a ≼ c ≼ b)', 'vynecháváme smyčky (reflexivita je zřejmá)', 'vynecháváme vztahy, které plynou z tranzitivity'] },
      { t: 'svg', title: 'Hasseho diagram – jídla z přednášky', x: MLG.hasseJidla(), cap: 'Čti zdola nahoru: Hrachová kaše ≼ Šišky s mákem ≼ Rajská ≼ Řízek; Segedín ≼ Rajská.' },
      { t: 'ex', x: '<b>Přednáška:</b> S = {(HK, SM), (HK, S), (R, R), (R, RBS), (SM, JK), (S, R), (HK, R), (SM, R)} na šesti jídlech. Doplnění na uspořádání: reflexivní dvojice (HK, HK), (JK, JK), (SM, SM), (S, S), (RBS, RBS) a tranzitivní důsledky <b>(HK, JK), (HK, RBS), (SM, RBS), (S, RBS)</b> – celkem 9 dvojic. Antisymetrie zůstane zachována, takže jde o uspořádání.' },
      { t: 'grid', head: ['Cvičení 3, úloha 10', 'Přidané dvojice'], rows: [
        ['R = {(l,o), (o,k), (p,p), (o,p), (l,n)}', '(k,k), (l,l), (m,m), (n,n), (o,o), (l,k), (l,p)'],
        ['S = {(n,l), (m,p), (o,k), (l,k), (m,m), (l,m), (n,o)}', '(k,k), (l,l), (n,n), (o,o), (p,p), (n,k), (n,p), (n,m), (l,p)'],
        ['T = {(n,m), (l,p), (k,p), (o,k), (m,k), (o,n), (n,l)}', '(k,k), …, (p,p), (o,m), (o,p), (o,l), (n,k), (n,p), (m,p)']
      ] },
      { t: 'versus', title: 'Ekvivalence × uspořádání', cols: [
        { h: 'Ekvivalence', items: ['reflexivní', '<b>symetrická</b>', 'tranzitivní', 'výsledek: rozdělení do tříd', 'příklad: „mít stejnou paritu“'] },
        { h: 'Uspořádání', items: ['reflexivní', '<b>antisymetrická</b>', 'tranzitivní', 'výsledek: Hasseho diagram (pořadí)', 'příklad: ≤, dělitelnost na ℕ'] }
      ], x: 'Obě relace jsou reflexivní a tranzitivní, liší se jedinou vlastností. Ekvivalence je symetrická, takže říká „tyhle prvky patří k sobě“ a množinu rozkrájí na skupiny, ve kterých je každý s každým. Uspořádání je antisymetrické, takže dva různé prvky nikdy nejsou „menší“ jeden než druhý navzájem a vzniká pořadí. Třeba „být ve stejné třídě školy“ je ekvivalence, kdežto „být mladší nebo stejně starý“ (u lidí s různými daty narození) je uspořádání.' }
    ] }
  ],
  mistakes: [
    'Myslet si, že symetrická a antisymetrická se vylučují – prázdná relace i rovnost mají obě vlastnosti.',
    'U reflexivity zkontrolovat jen některé prvky – smyčku musí mít <b>každý</b> prvek množiny.',
    'Při doplňování tranzitivity skončit po jednom kole – nově přidané dvojice mohou vyžadovat další.',
    'V Hasseho diagramu kreslit smyčky nebo čáry, které plynou z tranzitivity.',
    'Považovat dělitelnost na ℤ za uspořádání (2 | −2 i −2 | 2).'
  ],
  qa: [
    { q: 'Které tři vlastnosti má ekvivalence?', a: 'Reflexivitu, symetrii a tranzitivitu.' },
    { q: 'Které tři vlastnosti má uspořádání?', a: 'Reflexivitu, antisymetrii a tranzitivitu.' },
    { q: 'Je relace x² = y² na {−2, …, 2} ekvivalence?', a: 'Ano; třídy jsou {−2, 2}, {−1, 1}, {0}.' },
    { q: 'Proč dělitelnost na ℤ není uspořádání?', a: 'Není antisymetrická: 2 | −2 a −2 | 2, ale 2 ≠ −2.' },
    { q: 'Co se v Hasseho diagramu nekreslí?', a: 'Smyčky a vztahy, které plynou z tranzitivity – jen bezprostřední následnosti.' },
    { q: 'Jaké třídy vzniknou doplněním R = {(K,R), (D,H), (H,H), (K,P)} na ekvivalenci?', a: '{Karel, Petra, Radim}, {Dana, Hana}, {Vladimír}.' }
  ]
});
