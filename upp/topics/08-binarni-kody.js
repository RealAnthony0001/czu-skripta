registerTopic({
  id: 'binarni-kody', order: 8, icon: '🛡️', title: 'Binární kódy, Hammingova vzdálenost a zabezpečení', src: 'podklady', lec: [2],
  summary: 'Hammingova vzdálenost a minimální kódová vzdálenost, rozdělení kódů (zabezpečující, samoopravný), paritní bit a Hammingův kód SEC / SEC DED – s vypočteným příkladem.',
  vocab: [
    { w: 'Hammingova vzdálenost d(X, Y)', x: 'Počet bitů, ve kterých se dvě stejně dlouhá kódová slova liší.' },
    { w: 'd<sub>min</sub>', x: 'Minimální Hammingova vzdálenost přes všechny dvojice <i>různých</i> kódových slov kódu.' },
    { w: 'Paritní bit', x: 'Doplňkový bit, který zajišťuje sudý / lichý počet jedniček ve slově.' },
    { w: 'Syndrom', x: 'Výsledek kontroly parit; číslo pozice chybného bitu (0 = bez chyby).' },
    { w: 'SEC / DED', x: 'Single Error Correcting – oprava 1 chyby / Double Error Detecting – detekce 2 chyb.' }
  ],
  key: [
    '<b>d(X, Y) = Σ |x<sub>i</sub> − y<sub>i</sub>|</b> = počet bitů, ve kterých se X a Y liší.',
    '<b>d<sub>min</sub> ≥ 1</b> kód · <b>≥ 2</b> zabezpečující (detekuje d<sub>min</sub>−1 chyb) · <b>≥ 3</b> samoopravný (opraví (d<sub>min</sub>−1) div 2 chyb).',
    '<b>Paritní bit</b> zvýší d<sub>min</sub> z 1 na 2: sudá parita → počet 1 sudý, lichá → lichý.',
    '<b>Hammingův kód (SEC):</b> d<sub>min</sub> = 3; paritní bity na pozicích 1, 2, 4, 8, …; podmínka <b>m + k + 1 ≤ 2<sup>k</sup></b>.',
    '<b>SEC DED</b> = SEC + bit celkové parity → navíc detekuje chybu ve dvou bitech.'
  ],
  sections: [
    { title: 'Hammingova vzdálenost', blocks: [
      { t: 'p', x: 'Binární kódová slova délky n lze chápat jako body (vrcholy jednotkové krychle) v n-rozměrném prostoru. Vzdálenost bodů = nejmenší počet hran na cestě mezi nimi.' },
      { t: 'def', term: 'Hammingova vzdálenost', x: 'd(X, Y) = Σ<sub>i=1…n</sub> |x<sub>i</sub> − y<sub>i</sub>| – <b>počet bitů, ve kterých se X a Y liší</b>.' },
      { t: 'def', term: 'Minimální kódová vzdálenost', x: 'd<sub>min</sub> = min d(X<sub>i</sub>, X<sub>j</sub>) pro všechny dvojice <b>různých</b> kódových slov kódu K (i ≠ j).' },
      { t: 'svg', title: '3bitová slova jako vrcholy krychle', x: UPP.cubeDiagram(), cap: 'Sudá parita vybere každý druhý vrchol – žádná dvě vybraná slova nejsou sousední, proto d<sub>min</sub> = 2.' },
      { t: 'ex', x: '<b>Příklad:</b> X = 0110, Y = 1100 → liší se na 1. a 3. pozici → d(X, Y) = 2. Kód {000, 011, 101, 110} má d<sub>min</sub> = 2 (liší se vždy v ≥ 2 bitech) – je zabezpečující (sudá parita).' }
    ] },
    { title: 'Rozdělení kódů podle d<sub>min</sub>', blocks: [
      { t: 'table', head: ['Druh kódu', 'd<sub>min</sub>', 'Schopnost'], rows: [
        ['kód (splňuje definici)', '≥ 1', 'žádné zabezpečení'],
        ['zabezpečující kód', '≥ 2', 'detekuje obecně <b>d<sub>min</sub> − 1</b> chyb'],
        ['samoopravný kód', '≥ 3', 'opraví obecně <b>(d<sub>min</sub> − 1) div 2</b> chyb']
      ] },
      { t: 'tip', x: 'Paritní bit: d<sub>min</sub> = 2 → detekce 1 chyby, ale <b>nelze opravit</b> (nevíme kde). Hammingův kód: d<sub>min</sub> = 3 → detekce 2, oprava 1 chyby.' }
    ] },
    { title: 'Paritní bit (zabezpečující kód)', blocks: [
      { t: 'p', x: 'Kódy s d<sub>min</sub> = 1 se rozšíří o <b>paritní bit p</b>: X′ = (x<sub>1</sub>, …, x<sub>n</sub>, p).' },
      { t: 'versus', cols: [
        { h: 'Sudá parita', items: ['počet jedniček v X′ je <b>sudý</b>', 'p = x<sub>1</sub> ⊕ x<sub>2</sub> ⊕ … ⊕ x<sub>n</sub>'] },
        { h: 'Lichá parita', items: ['počet jedniček v X′ je <b>lichý</b>', 'p = ¬(x<sub>1</sub> ⊕ … ⊕ x<sub>n</sub>)'] }
      ] },
      { t: 'ex', x: 'Data 1011001 mají čtyři jedničky. <b>Sudá parita:</b> p = 0 → 10110010. <b>Lichá parita:</b> p = 1 → 10110011. Přijatá slova s opačnou paritou → chyba (liché počty chyb).' },
      { t: 'warn', x: 'Paritní bit odhalí chybu v <b>lichém počtu</b> bitů; dvě chyby se navzájem „vyruší“ a zůstanou nepoznány.' }
    ] },
    { title: 'Samoopravný kód – Hammingův kód SEC', blocks: [
      { t: 'p', x: 'Z m datových bitů (d<sub>1</sub> … d<sub>m</sub>) vytvoříme kód přidáním <b>k paritních bitů</b> (p<sub>1</sub> … p<sub>k</sub>); slova mají délku m + k. Hledáme d<sub>min</sub> = 3 – podmínka:' },
      { t: 'def', term: 'Podmínka počtu paritních bitů', x: 'm + k + 1 ≤ 2<sup>k</sup>. Pro m = 4 vychází k = 3 (4+3+1 = 8 ≤ 8); pro m = 8 vychází k = 4 (8+4+1 = 13 ≤ 16).' },
      { t: 'flow', title: 'Konstrukce Hammingova kódu', steps: [
        { h: 'Očísluj pozice', x: '1, 2, 3, 4, …' },
        { h: 'Parity na mocniny 2', x: 'pozice 1, 2, 4, 8, 16 … jsou paritní bity' },
        { h: 'Zbytek datové bity', x: 'd<sub>1</sub>, d<sub>2</sub>, … postupně na ostatní pozice' },
        { h: 'Spočti parity', x: 'p na pozici 2<sup>i</sup> pokrývá pozice, jejichž binární zápis má bit i jedničkový' }
      ] },
      { t: 'grid', head: ['Pozice', '1', '2', '3', '4', '5', '6', '7', '8'], rows: [
        ['Bit', 'p<sub>1</sub>', 'p<sub>2</sub>', 'd<sub>1</sub>', 'p<sub>3</sub>', 'd<sub>2</sub>', 'd<sub>3</sub>', 'd<sub>4</sub>', 'p<sub>4</sub>']
      ] },
      { t: 'svg', title: 'Co který paritní bit kontroluje (m = 4, k = 3)', x: UPP.hammingGrid(), cap: 'Chybný bit pozná syndrom: jeho číslo je binárně složené z výsledků kontrol p₃ p₂ p₁.' },
      { t: 'ul', items: [
        '<b>p<sub>1</sub></b> (pozice 1): 1 bit použij, 1 vynech → p<sub>1</sub> = d<sub>1</sub> ⊕ d<sub>2</sub> ⊕ d<sub>4</sub> ⊕ d<sub>5</sub> ⊕ d<sub>7</sub> ⊕ d<sub>9</sub> ⊕ …',
        '<b>p<sub>2</sub></b> (pozice 2): 2 bity použij, 2 vynech → p<sub>2</sub> = d<sub>1</sub> ⊕ d<sub>3</sub> ⊕ d<sub>4</sub> ⊕ d<sub>6</sub> ⊕ d<sub>7</sub> ⊕ d<sub>10</sub> ⊕ …',
        '<b>p<sub>3</sub></b> (pozice 4): 4 použij, 4 vynech → p<sub>3</sub> = d<sub>2</sub> ⊕ d<sub>3</sub> ⊕ d<sub>4</sub> ⊕ d<sub>8</sub> ⊕ … (pozice 5–7, 12–15)'
      ] },
      { t: 'ex', x: '<b>Data 1011</b> (d<sub>1</sub>=1, d<sub>2</sub>=0, d<sub>3</sub>=1, d<sub>4</sub>=1): p<sub>1</sub> = 1⊕0⊕1 = <b>0</b>, p<sub>2</sub> = 1⊕1⊕1 = <b>1</b>, p<sub>3</sub> = 0⊕1⊕1 = <b>0</b>. Kódové slovo (pozice 1–7): <b>0110011</b>.<br><b>Oprava:</b> přijato 0110<b>1</b>11 (chyba na pozici 5). Kontrola: s<sub>1</sub> = poz. 1,3,5,7 = 0⊕1⊕1⊕1 = 1; s<sub>2</sub> = poz. 2,3,6,7 = 1⊕1⊕1⊕1 = 0; s<sub>3</sub> = poz. 4,5,6,7 = 0⊕1⊕1⊕1 = 1. Syndrom (s<sub>3</sub>s<sub>2</sub>s<sub>1</sub>) = 101 = <b>5</b> → bit na pozici 5 negujeme.' }
    ] },
    { title: 'Princip zabezpečení pamětí – SEC a SEC DED', blocks: [
      { t: 'flow', title: 'Cesta dat přes zabezpečenou paměť', steps: [
        { h: 'Generátor parity', x: 'z d<sub>1</sub>…d<sub>m</sub> spočte p<sub>1</sub>…p<sub>k</sub>' },
        { h: 'Hlavní paměť', x: 'uloží datové i paritní bity' },
        { h: 'Generátor + komparátor', x: 'znovu spočte parity p′ a porovná je s uloženými → syndromy' },
        { h: 'Korektor', x: 'podle syndromu opraví chybný bit' }
      ] },
      { t: 'warn', x: 'SEC <b>chybu ve dvou bitech opraví špatně</b>. Proto se používá <b>SEC DED</b>: SEC kód rozšířený o bit celkové parity (sudá / lichá) – umí navíc <b>detekovat chybu ve dvou bitech</b>.' }
    ] },
    { title: 'Příklady ze cvičení: vzdálenosti, parita, návrh kódů', blocks: [
      { t: 'p', x: '<b>Hammingovy vzdálenosti a d<sub>min</sub></b> – zapíšeme všechny dvojice a vezmeme nejmenší vzdálenost:' },
      { t: 'grid', head: ['Kód', 'Vzdálenosti', 'd<sub>min</sub>', 'Druh'], rows: [
        ['A 1011, B 0001, C 0110, D 1101', 'AB 2, AC 3, AD 2, BC 3, BD 2, CD 3', '<b>2</b>', 'zabezpečující'],
        ['A 1011, B 0001, C 0110, D 1111 <small>(slajd C03)</small>', 'AB 2, AC 3, AD 1, BC 3, BD 3, CD 2', '<b>1</b>', 'jen kód (A a D se liší v 1 bitu)'],
        ['P 000011, Q 111111, R 001010', 'PQ 4, PR 2, QR 4', '<b>2</b>', 'zabezpečující'],
        ['R 00000, S 11111, T 00011, U 11100', 'RS 5, RT 2, RU 3, ST 3, SU 2, TU 5', '<b>2</b>', 'zabezpečující'],
        ['X 10100, Y 00101, Z 10010', 'XY 2, XZ 2, YZ 4', '<b>2</b>', 'zabezpečující'],
        ['A 100, B 111, C 101', 'AB 2, AC 1, BC 1', '<b>1</b>', 'jen kód']
      ] },
      { t: 'ex', x: '<b>Úprava kódu na samoopravný:</b> X 10100, Y 00101, Z 10010 má d<sub>min</sub> = 2. Změníme X na <b>11100</b>: d(X, Y) = 3, d(X, Z) = 3, d(Y, Z) = 4 → d<sub>min</sub> = <b>3</b> – samoopravný kód (opraví (3 − 1) div 2 = 1 chybu).' },
      { t: 'ex', x: '<b>Paritní bit při přenosu přes RS-232:</b> znak „@“ má v ASCII kód 64 = 0100 0000 (jedna jednička). <b>Lichá parita:</b> počet jedniček už je lichý → p = 0, přenese se 0100 0000 <b>0</b>. <b>Sudá parita:</b> p = 1 → 0100 0000 <b>1</b>.' },
      { t: 'ex', x: '<b>4bitový zabezpečující kód pro 8 objektů A–H:</b> osm objektů potřebuje 3 datové bity (2<sup>3</sup> = 8) a čtvrtý je sudá parita: A 0000, B 0011, C 0101, D 0110, E 1001, F 1010, G 1100, H 1111 (všechna slova mají sudý počet jedniček → d<sub>min</sub> = 2). Řešení ze cvičení používá stejnou množinu slov v jiném pořadí (A 0000, B 0011, C 1100, D 1010, E 0101, F 0110, G 1001, H 1111).' },
      { t: 'ex', x: '<b>Lze pro objekty P, Q, R, S, T realizovat 5bitový a 6bitový samoopravný kód?</b> Podle podmínky m + k + 1 ≤ 2<sup>k</sup> pro 5 bitů vyjde nejvýše m = 2 datové bity (k = 3) → <b>4 kódová slova &lt; 5</b> – 5bitový kód <b>nelze</b>. Pro 6 bitů je m = 3, k = 3 (3 + 3 + 1 = 7 ≤ 8) → až 8 slov – <b>lze</b>. Například P 000000, Q 000111, R 111000, S 011011, T 101101 (všechny vzájemné vzdálenosti ≥ 3).' },
      { t: 'warn', x: 'Ve slajdu cvičení je u 6bitového kódu předvyplněno P 000000, Q 000111, R 111000, T 111111 a S zůstává prázdné. K této čtveřici <b>žádné šesté slovo s d ≥ 3 ke všem čtyřem neexistuje</b> – T musí být zvoleno jinak (např. 101101 jako výše).' }
    ] },
    { title: 'Kolik kódových slov lze vytvořit (cvičení)', blocks: [
      { t: 'p', x: 'Pro délku slova n bitů (kód, zabezpečující kód, samoopravný kód, SEC DED kód):' },
      { t: 'ul', items: [
        '<b>kód (d<sub>min</sub> ≥ 1):</b> všechna slova, tedy <b>2<sup>n</sup></b>,',
        '<b>zabezpečující (d<sub>min</sub> ≥ 2):</b> n − 1 datových bitů + paritní bit → <b>2<sup>n−1</sup></b>,',
        '<b>samoopravný (d<sub>min</sub> ≥ 3):</b> největší m, pro které existuje k = n − m s m + k + 1 ≤ 2<sup>k</sup> → <b>2<sup>m</sup></b>,',
        '<b>SEC DED:</b> SEC kód délky n − 1 (bit celkové parity je navíc) → 2<sup>m</sup> pro m z n − 1 bitů.'
      ] },
      { t: 'grid', head: ['Délka slova n', 'Kód', 'Zabezpečující', 'Samoopravný (m, k)', 'SEC DED (m, k + 1 bit)'], rows: [
        ['8 bitů (1 byte)', '256', '128', '16 (m = 4, k = 4)', '16 (m = 4, k = 3 + 1)'],
        ['9 bitů', '512', '256', '32 (m = 5, k = 4)', '16 (m = 4, k = 4 + 1)'],
        ['11 bitů', '2 048', '1 024', '128 (m = 7, k = 4)', '64 (m = 6, k = 4 + 1)'],
        ['13 bitů', '8 192', '4 096', '512 (m = 9, k = 4)', '256 (m = 8, k = 4 + 1)']
      ] },
      { t: 'tip', x: 'Kontrola pro n = 11: m = 7, k = 4 → 7 + 4 + 1 = 12 ≤ 16 ✔, ale m = 8, k = 3 → 8 + 3 + 1 = 12 &gt; 8 ✘. Počty platí pro <b>Hammingův kód</b> podle podmínky z přednášky.' }
    ] },
    { title: 'Příklad: Hammingův kód pro 8 datových bitů (cvičení)', blocks: [
      { t: 'p', x: '<b>Zadání:</b> data <b>11010110</b> (d<sub>8</sub> … d<sub>1</sub>). Počet paritních bitů: m = 8 → 8 + k + 1 ≤ 2<sup>k</sup>: k = 3 → 12 &gt; 8 ✘; <b>k = 4</b> → 13 ≤ 16 ✔. Kódové slovo má 12 bitů, paritní bity na pozicích 1, 2, 4, 8.' },
      { t: 'grid', head: ['Pozice', '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'], rows: [
        ['binárně', '1100', '1011', '1010', '1001', '1000', '0111', '0110', '0101', '0100', '0011', '0010', '0001'],
        ['bit', 'd<sub>8</sub>', 'd<sub>7</sub>', 'd<sub>6</sub>', 'd<sub>5</sub>', 'p<sub>4</sub>', 'd<sub>4</sub>', 'd<sub>3</sub>', 'd<sub>2</sub>', 'p<sub>3</sub>', 'd<sub>1</sub>', 'p<sub>2</sub>', 'p<sub>1</sub>'],
        ['hodnota', '1', '1', '0', '1', '<b>1</b>', '0', '1', '1', '<b>1</b>', '0', '<b>0</b>', '<b>1</b>']
      ] },
      { t: 'ul', items: [
        'p<sub>1</sub> = d<sub>1</sub> ⊕ d<sub>2</sub> ⊕ d<sub>4</sub> ⊕ d<sub>5</sub> ⊕ d<sub>7</sub> = 0 ⊕ 1 ⊕ 0 ⊕ 1 ⊕ 1 = <b>1</b>',
        'p<sub>2</sub> = d<sub>1</sub> ⊕ d<sub>3</sub> ⊕ d<sub>4</sub> ⊕ d<sub>6</sub> ⊕ d<sub>7</sub> = 0 ⊕ 1 ⊕ 0 ⊕ 0 ⊕ 1 = <b>0</b>',
        'p<sub>3</sub> = d<sub>2</sub> ⊕ d<sub>3</sub> ⊕ d<sub>4</sub> ⊕ d<sub>8</sub> = 1 ⊕ 1 ⊕ 0 ⊕ 1 = <b>1</b>',
        'p<sub>4</sub> = d<sub>5</sub> ⊕ d<sub>6</sub> ⊕ d<sub>7</sub> ⊕ d<sub>8</sub> = 1 ⊕ 0 ⊕ 1 ⊕ 1 = <b>1</b>'
      ] },
      { t: 'p', x: 'Kódové slovo (pozice 12 → 1): <b>1101 1011 1001</b>. Při čtení se parity spočítají znovu (p′) a <b>syndrom</b> s<sub>i</sub> = p<sub>i</sub> ⊕ p<sub>i</sub>′.' },
      { t: 'versus', cols: [
        { h: 'Chyba v datovém bitu', items: ['přijato <b>1001 1011 1001</b> (změněn bit na pozici 11 = d<sub>7</sub>)', 'syndromy s<sub>1</sub> = 1, s<sub>2</sub> = 1, s<sub>3</sub> = 0, s<sub>4</sub> = 1 → s<sub>4</sub>s<sub>3</sub>s<sub>2</sub>s<sub>1</sub> = 1011 = <b>11</b>', '<b>více než jeden syndrom = 1</b> → chyba v datovém bitu na pozici 11 → bit zneguj'] },
        { h: 'Chyba v paritním bitu', items: ['přijato <b>1101 1011 0001</b> (změněn bit na pozici 4 = p<sub>3</sub>)', 'jediný nenulový syndrom s<sub>3</sub> = 1 → s<sub>4</sub>s<sub>3</sub>s<sub>2</sub>s<sub>1</sub> = 0100 = <b>4</b>', '<b>pouze jeden syndrom = 1</b> → chyba v paritním bitu p<sub>3</sub> (data jsou v pořádku)'] }
      ], x: 'Syndrom je „adresa chyby“: když přečtené parity nesedí, jejich součet dá přímo číslo pozice, kde je chybný bit. Chyba v datovém bitu naruší několik paritních kontrol najednou (proto je jich víc), kdežto chyba v paritním bitu naruší jedinou kontrolu – tu, jejíž je sám výsledkem. Opravuje se negací bitu na pozici udané syndromem.' }
    ] }
  ],
  mistakes: [
    'Zaměnit „detekovat“ a „opravit“: d<sub>min</sub> = 2 chybu jen odhalí, opravit umí až d<sub>min</sub> ≥ 3.',
    'Do d<sub>min</sub> započítat i vzdálenost slova od sebe samého (0) – bere se jen i ≠ j.',
    'Paritní bity Hammingova kódu dát na pozice 1, 3, 5 … – správně jsou na pozicích 1, 2, 4, 8 … (mocniny dvou).',
    'Říct, že paritní bit opraví chybu – jen ji detekuje (a jen lichý počet chyb).'
  ],
  qa: [
    { q: 'Co je Hammingova vzdálenost? Určete d(0110, 1100).', a: 'Počet bitů, ve kterých se dvě kódová slova liší. 0110 a 1100 se liší na 1. a 3. pozici → d = 2.' },
    { q: 'Co je minimální kódová vzdálenost a jak rozděluje kódy?', a: 'd<sub>min</sub> = nejmenší vzdálenost mezi dvěma různými kódovými slovy. d<sub>min</sub> ≥ 1 kód, ≥ 2 zabezpečující (detekuje d<sub>min</sub>−1 chyb), ≥ 3 samoopravný (opraví (d<sub>min</sub>−1) div 2 chyb).' },
    { q: 'Kolik chyb detekuje a opraví kód s d<sub>min</sub> = 5?', a: 'Detekuje d<sub>min</sub> − 1 = 4 chyby a opraví (5 − 1) div 2 = 2 chyby.' },
    { q: 'Jak se konstruuje zabezpečující kód pomocí paritního bitu?', a: 'Ke slovu X = (x<sub>1</sub>…x<sub>n</sub>) se přidá bit p tak, aby počet jedniček byl sudý (p = x<sub>1</sub>⊕…⊕x<sub>n</sub>) nebo lichý (p = ¬(x<sub>1</sub>⊕…⊕x<sub>n</sub>)).' },
    { q: 'Doplňte sudý paritní bit k datům 1011001.', a: 'Data mají 4 jedničky (sudý počet) → p = 0, slovo 10110010.' },
    { q: 'Jaká podmínka platí pro počet paritních bitů k samoopravného kódu a kolik jich je třeba pro 8 datových bitů?', a: 'm + k + 1 ≤ 2<sup>k</sup>. Pro m = 8 je k = 4 (13 ≤ 16); pro m = 4 je k = 3.' },
    { q: 'Na jakých pozicích jsou paritní bity v Hammingově kódu?', a: 'Na pozicích rovných mocnině dvou: 1, 2, 4, 8, 16, …; ostatní pozice obsazují datové bity.' },
    { q: 'Zakódujte data 1011 Hammingovým kódem (SEC).', a: 'p<sub>1</sub> = d<sub>1</sub>⊕d<sub>2</sub>⊕d<sub>4</sub> = 0, p<sub>2</sub> = d<sub>1</sub>⊕d<sub>3</sub>⊕d<sub>4</sub> = 1, p<sub>3</sub> = d<sub>2</sub>⊕d<sub>3</sub>⊕d<sub>4</sub> = 0 → 0110011.' },
    { q: 'Čím se liší SEC a SEC DED?', a: 'SEC (d<sub>min</sub> = 3) opraví chybu v jednom bitu, ale dvě chyby opraví špatně. SEC DED přidá bit celkové parity a umí navíc detekovat chybu ve dvou bitech.' },
    { q: 'Určete d<sub>min</sub> kódu A 1011, B 0001, C 0110, D 1101.', a: 'd(A,B) = 2, d(A,C) = 3, d(A,D) = 2, d(B,C) = 3, d(B,D) = 2, d(C,D) = 3 → d<sub>min</sub> = 2 (zabezpečující kód).' },
    { q: 'Jaký paritní bit se přenáší u znaku „@“ (ASCII 64 = 01000000) při liché a sudé paritě?', a: 'Kód má jednu jedničku: lichá parita p = 0 (010000000), sudá parita p = 1 (010000001).' },
    { q: 'Kolik nejvýše kódových slov lze vytvořit při 11 bitech: kód, zabezpečující, samoopravný, SEC DED?', a: 'Kód 2<sup>11</sup> = 2 048; zabezpečující 2<sup>10</sup> = 1 024; samoopravný m = 7 (k = 4) → 2<sup>7</sup> = 128; SEC DED: SEC na 10 bitech m = 6 + celková parita → 2<sup>6</sup> = 64.' },
    { q: 'Je možné vytvořit 5bitový samoopravný kód pro 5 objektů?', a: 'Ne: pro 5 bitů vychází nejvýše m = 2 datové bity (k = 3) → 4 slova. Pro 6 bitů ano (m = 3, k = 3 → až 8 slov).' },
    { q: 'Jak se pozná chyba v datovém a v paritním bitu u Hammingova kódu?', a: 'Syndrom (s<sub>k</sub> … s<sub>1</sub>) dává pozici chyby. Je-li více než jeden syndrom roven 1, je chyba v datovém bitu; je-li roven 1 jen jeden, je chyba v paritním bitu (pozice je mocnina dvou).' }
  ]
});
