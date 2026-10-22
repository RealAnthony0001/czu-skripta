registerTopic({
  id: 'cela-cisla', order: 6, icon: '➕', title: 'Celá čísla: doplňkový kód a aritmetika', src: 'podklady', lec: [2],
  summary: 'Kódování celých čísel v doplňkovém kódu, výpočet doplňku (negace + 1), sčítání pomocí přenosů a detekce přetečení, násobení a dělení mocninou dvojky posuvem bitů.',
  vocab: [
    { w: 'Číslo s pevnou řádovou čárkou', x: 'Celé číslo (kladné i záporné) uložené v 1–4 bajtech.' },
    { w: 'Doplňkový kód', x: 'Způsob uložení znaménkových celých čísel: záporné X se uloží jako X + 2<sup>n</sup>.' },
    { w: 'Doplněk d(x)', x: 'Číslo, pro které x + d(x) = 0, tedy d(x) = −x.' },
    { w: 'Přenos (Carry)', x: 'Bit c<sub>i</sub>, který se přenáší do vyššího řádu při sčítání.' },
    { w: 'Přeplnění (overflow)', x: 'Výsledek se nevejde do zvoleného počtu bitů.' }
  ],
  key: [
    'Binární čísla v počítači <b>nemají znaménko</b> → záporná čísla se převádějí na nezáporná (doplňkový kód).',
    '<b>n-bitový doplňkový kód:</b> rozsah <b>−2<sup>n−1</sup> … 2<sup>n−1</sup> − 1</b> (8 bitů: −128 … 127; 4 bity: −8 … 7).',
    '<b>Znaménko = první bit zleva:</b> 0 → nezáporné, 1 → záporné.',
    '<b>Doplněk −x:</b> zneguj všechny bity (0↔1) a <b>přičti 1</b>.',
    '<b>Přetečení:</b> v = c<sub>n</sub> ⊕ c<sub>n−1</sub> = 1 → výsledek nelze vyjádřit. <b>Násobení 2<sup>k</sup></b> = posun vlevo (zprava nuly); <b>dělení 2<sup>k</sup></b> = posun vpravo (zleva kopie znaménkového bitu).'
  ],
  sections: [
    { title: 'Doplňkový kód', blocks: [
      { t: 'def', term: 'Doplňkový kód', x: 'Pro celé číslo X a délku kódového slova n platí: je-li X ≥ 0, pak <b>X′ = X</b>; je-li X < 0, pak <b>X′ = X + 2<sup>n</sup></b>. Kódové slovo X′ (desítkové číslo) se převede do dvojkové soustavy.' },
      { t: 'versus', cols: [
        { h: 'Vlastnosti', items: ['nezáporné číslo: první bit zleva <b>0</b>', 'záporné číslo: první bit zleva <b>1</b>', 'vhodný pro aritmetické operace (sčítá se stejně)'] },
        { h: 'Rozsah n bitů', items: ['−2<sup>n−1</sup> … 2<sup>n−1</sup> − 1', '8 b: −128 … +127', '4 b: −8 … +7'] }
      ] },
      { t: 'svg', title: '4bitový doplňkový kód na kruhu', x: UPP.wheelDiagram(), cap: 'Přičítání 1 = krok po směru hodinových ručiček. Přechod ze 7 (0111) na −8 (1000) je přeplnění.' },
      { t: 'grid', head: ['Číslo X', 'Kód X′ (8 bitů)'], rows: [
        ['+53', '0011 0101'], ['−53', '1100 1011'], ['+5', '0000 0101'], ['−4', '1111 1100'], ['−20', '1110 1100'], ['+127', '0111 1111'], ['−128', '1000 0000']
      ] }
    ] },
    { title: 'Doplněk čísla (změna znaménka)', blocks: [
      { t: 'def', term: 'Doplněk d(x)', x: 'x + d(x) = 0, tedy d(x) = −x. V binárním zápisu x <b>zaměníme všechny 0 za 1 a 1 za 0</b> a pak <b>binárně přičteme 1</b>.' },
      { t: 'ex', x: '<b>d(53):</b> 53 = 0011 0101 → negace 1100 1010 → +1 = <b>1100 1011</b> = −53.<br><b>d(−53):</b> 1100 1011 → negace 0011 0100 → +1 = <b>0011 0101</b> = 53. Dvojí doplněk dává původní číslo.' },
      { t: 'tip', x: 'Rychlé čtení záporného čísla: zneguj bity, přičti 1 a výsledek označ minus. 1111 1100 → 0000 0011 + 1 = 0000 0100 = 4 → hodnota <b>−4</b>.' }
    ] },
    { title: 'Sčítání v doplňkovém kódu', blocks: [
      { t: 'p', x: 'Čísla A = (a<sub>n−1</sub> … a<sub>0</sub>) a B = (b<sub>n−1</sub> … b<sub>0</sub>) jsou n-bitová čísla v doplňkovém kódu.' },
      { t: 'flow', title: 'Postup', steps: [
        { h: 'Přenosy C', x: 'c<sub>0</sub> = 0; c<sub>i+1</sub> = 1, pokud alespoň <b>dvě</b> z hodnot a<sub>i</sub>, b<sub>i</sub>, c<sub>i</sub> jsou 1' },
        { h: 'Součet S', x: 's<sub>i</sub> = a<sub>i</sub> ⊕ b<sub>i</sub> ⊕ c<sub>i</sub>' },
        { h: 'Validace', x: 'v = c<sub>n</sub> ⊕ c<sub>n−1</sub>' }
      ] },
      { t: 'def', term: 'Validační kritérium', x: 'Je-li <b>v = 1</b>, došlo k <b>přeplnění</b> – S není součtem A + B a nelze ho v n bitech vyjádřit. Je-li <b>v = 0</b>, S vyjadřuje A + B (přenos z nejvyššího řádu se zahazuje).' },
      { t: 'ex', x: '<b>4 bity: (+5) + (−4):</b> A = 0101, B = 1100. Přenosy: c<sub>0</sub>=0, c<sub>1</sub>=0, c<sub>2</sub>=0, c<sub>3</sub>=1, c<sub>4</sub>=1. S = 0001. v = c<sub>4</sub> ⊕ c<sub>3</sub> = 1 ⊕ 1 = 0 → výsledek platí: <b>+1</b>.' },
      { t: 'ex', x: '<b>4 bity: (+5) + (+4):</b> A = 0101, B = 0100 → S = 1001, přenosy c<sub>3</sub> = 1, c<sub>4</sub> = 0 → v = 1 → <b>přeplnění</b> (správně 9 se do −8…7 nevejde; 1001 by se četlo jako −7).' },
      { t: 'ex', x: '<b>8 bitů: 100 + 50 = 150</b> přeteče (rozsah ≤ 127): 0110 0100 + 0011 0010 = 1001 0110 (−106).' },
      { t: 'tip', x: 'Přetečení nastane jen při sčítání dvou čísel <b>stejného znaménka</b>, které dá opačné znaménko. Čísla opačného znaménka nikdy nepřetečou.' }
    ] },
    { title: 'Násobení a dělení mocninou dvojky', blocks: [
      { t: 'versus', cols: [
        { h: 'Násobení S = X · 2<sup>k</sup>', items: ['binární řetězec X se <b>posune o k míst vlevo</b>', 'zprava se doplní vždy <b>0</b>', 'pozor na přeplnění'] },
        { h: 'Dělení D = X div 2<sup>k</sup>', items: ['řetězec X se <b>posune o k míst vpravo</b>', 'zleva se doplní <b>kopie znaménkového bitu x<sub>n−1</sub></b>', 'M = X mod 2<sup>k</sup> = odsunutých k bitů'] }
      ] },
      { t: 'svg', title: 'Dělení mocninou dvojky = posun vpravo', x: UPP.shiftDiagram() },
      { t: 'ex', x: '<b>−20 div 4:</b> −20 = 1110 1100 → posun o 2 vpravo, zleva 1: 1111 1011 = <b>−5</b>, zbytek (odsunuté bity) 00 = 0.<br><b>−13 div 4:</b> −13 = 1111 0011 → 1111 1100 = <b>−4</b>, zbytek 11 = 3 (−4·4 + 3 = −13).' },
      { t: 'p', x: 'Výsledek podílu nemusí být celé číslo – v doplňkovém kódu proto počítáme jen celočíselné dělení (<b>div</b>) a zbytek (<b>mod</b>); u záporných čísel se zaokrouhluje <b>dolů</b>.' }
    ] },
    { title: 'Přímý kód a kód s posunutou nulou (cvičení)', blocks: [
      { t: 'p', x: 'Kromě doplňkového kódu se pro čísla s pevnou řádovou čárkou probírají ještě dva kódy. <b>Kód s posunutou nulou</b> se používá pro <b>exponent</b> v IEEE 754.' },
      { t: 'versus', cols: [
        { h: 'Přímý kód (n bitů)', items: ['interval <b>⟨−2<sup>n−1</sup> + 1, 2<sup>n−1</sup> − 1⟩</b>', 'x′ = x pro 0 ≤ x ≤ 2<sup>n−1</sup> − 1', 'x′ = <b>2<sup>n−1</sup> − x</b> pro −2<sup>n−1</sup> + 1 ≤ x ≤ 0', 'první bit = znaménko, zbytek = absolutní hodnota; existují <b>dvě nuly</b> – 000…0 kladná, 100…0 záporná'] },
        { h: 'Kód s posunutou nulou (n bitů)', items: ['x′ = <b>x + báze posunutí</b>; pro IEEE 754 je báze <b>2<sup>n−1</sup> − 1</b>', 'interval <b>⟨−2<sup>n−1</sup> + 1, 2<sup>n−1</sup>⟩</b> → ⟨0, 2<sup>n</sup> − 1⟩', 'kladná čísla mají první bit 1, záporná 0'] }
      ] },
      { t: 'grid', head: ['x', 'Přímý kód', 'Doplňkový kód', 'Posunutá nula (báze 7)'], rows: [
        ['8', '—', '—', '1111'],
        ['7', '0111', '0111', '1110'],
        ['6', '0110', '0110', '1101'],
        ['5', '0101', '0101', '1100'],
        ['4', '0100', '0100', '1011'],
        ['3', '0011', '0011', '1010'],
        ['2', '0010', '0010', '1001'],
        ['1', '0001', '0001', '1000'],
        ['0', '0000 (+0), 1000 (−0)', '0000', '0111'],
        ['−1', '1001', '1111', '0110'],
        ['−2', '1010', '1110', '0101'],
        ['−3', '1011', '1101', '0100'],
        ['−4', '1100', '1100', '0011'],
        ['−5', '1101', '1011', '0010'],
        ['−6', '1110', '1010', '0001'],
        ['−7', '1111', '1001', '0000'],
        ['−8', '—', '1000', '—']
      ] },
      { t: 'ex', x: '<b>4bitový přímý kód</b> (interval ⟨−7, 7⟩): 6 → <b>0110</b>; −6 → x′ = 8 − (−6) = 14 → <b>1110</b>; −3 → 8 + 3 = 11 → <b>1011</b>.<br><b>8bitový přímý kód</b> (⟨−127, 127⟩): 57 → <b>0011 1001</b>; −48 → 128 + 48 = 176 → <b>1011 0000</b>; −100 → 228 → <b>1110 0100</b>.' },
      { t: 'ex', x: '<b>4bitový kód s posunutou nulou</b> (báze 2<sup>3</sup> − 1 = 7, interval ⟨−7, 8⟩): 6 → 6 + 7 = 13 → <b>1101</b>; −6 → 1 → <b>0001</b>; −3 → 4 → <b>0100</b>.<br><b>8bitový</b> (báze 127, ⟨−127, 128⟩): 57 → 184 → <b>1011 1000</b>; −48 → 79 → <b>0100 1111</b>; −127 → 0 → <b>0000 0000</b>.' },
      { t: 'warn', x: 'Slajd o kódu s posunutou nulou tvrdí, že „kladná čísla a nula mají první bit 1 a nula je 100…0“. To platí jen pro posun 2<sup>n−1</sup>. Pro posun <b>2<sup>n−1</sup> − 1</b>, který se v příkladech i v IEEE 754 používá, je <b>nula 0111…1</b> a první bit 1 mají až kladná čísla (viz tabulku: 0 → 0111, 1 → 1000). Také v příkladu s 8bitovým přímým kódem je u 57 uvedeno „111001“ – správně 0011 1001 (zkrácené nuly).' }
    ] },
    { title: 'Sčítání a odčítání – další příklady (cvičení)', blocks: [
      { t: 'p', x: '<b>Odčítání:</b> x − y = x + d(y), tedy ke změně znaménka odečítaného se použije doplněk a čísla se sečtou jako dříve. Rozsah <b>n bitů</b> je ⟨−2<sup>n−1</sup>, 2<sup>n−1</sup> − 1⟩.' },
      { t: 'grid', head: ['Příklad', 'Kódy', 'Součet S', 'v = c<sub>n</sub> ⊕ c<sub>n−1</sub>', 'Výsledek'], rows: [
        ['6 bitů (⟨−32, 31⟩): 9 + (−18)', '001001 + 101110', '110111', '0 ⊕ 0 = 0', 'platí: <b>−9</b>'],
        ['6 bitů: 18 + 15', '010010 + 001111', '100001', '0 ⊕ 1 = 1', '<b>přeplnění</b> (33 &gt; 31)'],
        ['6 bitů: 25 − 11 = 25 + (−11)', '011001 + 110101', '001110', '1 ⊕ 1 = 0', 'platí: <b>14</b>'],
        ['6 bitů: −15 − 21', '110001 + 101011', '011100', '1 ⊕ 0 = 1', '<b>přeplnění</b> (−36 &lt; −32)'],
        ['6 bitů: −15 − 11', '110001 + 110101', '100110', '1 ⊕ 1 = 0', 'platí: <b>−26</b>'],
        ['5 bitů (⟨−16, 15⟩): −14 + (−10)', '10010 + 10110', '01000', '1 ⊕ 0 = 1', '<b>přeplnění</b> (−24 &lt; −16; 01000 by se četlo jako +8)']
      ] },
      { t: 'ex', x: '<b>Postup u 5bitového příkladu −14 + (−10):</b> −14: 14 = 01110 → negace 10001 → +1 = 10010. −10: 10 = 01010 → 10101 → +1 = 10110. Přenosy (od c<sub>0</sub>): 0, 0, 1, 1, 0, 1 → c<sub>5</sub> = 1, c<sub>4</sub> = 0 → v = 1.' },
      { t: 'ex', x: '<b>Násobení posunem (8 bitů):</b> 9 = 0000 1001 → ·2 = 0001 0010 (18), ·4 = 0010 0100 (36), ·8 = 0100 1000 (72). −9 = 1111 0111 → ·2 = 1110 1110 (−18), ·4 = 1101 1100 (−36), ·8 = 1011 1000 (−72).<br><b>Dělení posunem (8 bitů):</b> 29 = 0001 1101 → posun o 3 vpravo (zleva 0): 0000 0011 = <b>3</b> (29 div 8), odsunuté bity 101 = <b>5</b> (29 mod 8). −29 = 1110 0011 → posun o 3 vpravo (zleva 1): 1111 1100 = <b>−4</b> (−29 div 8), odsunuté bity 011 = <b>3</b> (−29 mod 8) – ověření: −4 · 8 + 3 = −29.' }
    ] }
  ],
  mistakes: [
    'Zapomenout po negaci bitů <b>přičíst 1</b>.',
    'Nezapsat počet bitů (n): doplňkový kód je určen délkou slova; 1100 je −4 ve 4 bitech, ale 12 v 8 bitech (0000 1100).',
    'Přenos z nejvyššího řádu (c<sub>n</sub>) pokládat za přeplnění – rozhoduje až v = c<sub>n</sub> ⊕ c<sub>n−1</sub>.',
    'Při dělení posunem vpravo doplnit zleva vždy 0 – u záporných čísel se doplňuje znaménkový bit.'
  ],
  qa: [
    { q: 'Jak se ukládají záporná celá čísla v počítači?', a: 'V doplňkovém kódu: záporné X se uloží jako X′ = X + 2<sup>n</sup>, kde n je délka kódového slova, a převede se do dvojkové soustavy. První bit zleva je pak 1.' },
    { q: 'Jaký je rozsah čísel v 8bitovém doplňkovém kódu?', a: '−128 … +127 (obecně −2<sup>n−1</sup> … 2<sup>n−1</sup> − 1).' },
    { q: 'Jak získáme doplněk čísla? Najděte −53 v 8 bitech.', a: 'Zneguj všechny bity a přičti 1. 53 = 00110101 → 11001010 → +1 = 11001011 = −53.' },
    { q: 'Jak funguje sčítání dvou čísel v doplňkovém kódu?', a: 'Spočtou se přenosy c<sub>i+1</sub> (1, pokud aspoň dvě z a<sub>i</sub>, b<sub>i</sub>, c<sub>i</sub> jsou 1; c<sub>0</sub> = 0), součet s<sub>i</sub> = a<sub>i</sub> ⊕ b<sub>i</sub> ⊕ c<sub>i</sub> a ověří se v = c<sub>n</sub> ⊕ c<sub>n−1</sub>.' },
    { q: 'Kdy dojde k přeplnění?', a: 'Když v = c<sub>n</sub> ⊕ c<sub>n−1</sub> = 1; výsledek nelze vyjádřit v n bitech a S není součtem A + B.' },
    { q: 'Sečtěte ve 4bitovém doplňkovém kódu (+5) a (−4).', a: '0101 + 1100 = 0001 (+1). Přenosy c<sub>3</sub> = c<sub>4</sub> = 1 → v = 0, bez přeplnění.' },
    { q: 'Sečtěte ve 4bitovém doplňkovém kódu (+5) a (+4).', a: '0101 + 0100 = 1001; v = 1 → přeplnění (9 se do rozsahu −8…7 nevejde).' },
    { q: 'Jak se násobí a dělí mocninou dvojky v doplňkovém kódu?', a: 'Násobení 2<sup>k</sup>: posun o k míst vlevo, zprava nuly. Dělení 2<sup>k</sup>: posun o k míst vpravo, zleva kopie znaménkového bitu; odsunuté bity tvoří zbytek (mod).' },
    { q: 'Spočtěte −20 div 4 v 8 bitech.', a: '−20 = 11101100 → posun o 2 vpravo se znaménkovou 1: 11111011 = −5.' },
    { q: 'Jak se ukládají čísla v přímém kódu? Uložte −6 ve 4 bitech.', a: 'Interval ⟨−2<sup>n−1</sup> + 1, 2<sup>n−1</sup> − 1⟩; záporné x se uloží jako x′ = 2<sup>n−1</sup> − x. −6: 8 + 6 = 14 = 1110 (první bit znaménko, zbytek absolutní hodnota; existují dvě nuly).' },
    { q: 'Co je kód s posunutou nulou? Uložte −3 ve 4 bitech.', a: 'x′ = x + báze posunutí, báze = 2<sup>n−1</sup> − 1 (IEEE 754). Pro n = 4: báze 7, interval ⟨−7, 8⟩; −3 → 4 = 0100.' },
    { q: 'Jak se odčítá v doplňkovém kódu?', a: 'x − y = x + d(y): odečítané se nahradí svým doplňkem (negace bitů + 1) a čísla se sečtou; platnost se ověří v = c<sub>n</sub> ⊕ c<sub>n−1</sub>.' },
    { q: 'V 6bitovém doplňkovém kódu sečtěte 18 + 15. Je výsledek platný?', a: '010010 + 001111 = 100001, c<sub>6</sub> = 0, c<sub>5</sub> = 1 → v = 1 → přeplnění (33 se do ⟨−32, 31⟩ nevejde).' },
    { q: 'Spočtěte −29 div 8 a −29 mod 8 posunem v 8 bitech.', a: '−29 = 11100011 → posun o 3 vpravo se znaménkovou 1: 11111100 = −4; odsunuté bity 011 = 3 (−4 · 8 + 3 = −29).' }
  ]
});
