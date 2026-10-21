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
    { q: 'Čím se liší SEC a SEC DED?', a: 'SEC (d<sub>min</sub> = 3) opraví chybu v jednom bitu, ale dvě chyby opraví špatně. SEC DED přidá bit celkové parity a umí navíc detekovat chybu ve dvou bitech.' }
  ]
});
