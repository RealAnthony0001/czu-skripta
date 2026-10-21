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
    { q: 'Spočtěte −20 div 4 v 8 bitech.', a: '−20 = 11101100 → posun o 2 vpravo se znaménkovou 1: 11111011 = −5.' }
  ]
});
