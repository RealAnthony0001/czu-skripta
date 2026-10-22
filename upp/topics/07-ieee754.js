registerTopic({
  id: 'ieee754', order: 7, icon: '🔬', title: 'Reálná čísla: pohyblivá řádová čárka (IEEE 754)', src: 'podklady', lec: [2],
  summary: 'Formát IEEE 754 single (32 bitů): znaménko, exponent s posunutou nulou, mantisa; speciální hodnoty (nula, ∞, NaN, denormalizovaná čísla) a varianty přesnosti – s vypočtenými příklady.',
  vocab: [
    { w: 'Pohyblivá řádová čárka', x: 'Zápis reálného čísla jako ±1,m · 2<sup>e</sup> (znaménko, mantisa, exponent).' },
    { w: 'Mantisa (m)', x: 'Desetinná část za úvodní „1,“ (ta se neukládá – skrytá jednička).' },
    { w: 'Exponent (e)', x: 'Mocnina dvojky; ukládá se s posunem: e′ = e + 127.' },
    { w: 'Kód s posunutou nulou', x: 'Exponent bez znaménka: k reálnému exponentu se přičte bias 2<sup>8−1</sup> − 1 = 127.' },
    { w: 'NaN', x: 'Not a Number – nedefinovaná hodnota (např. 0/0).' }
  ],
  key: [
    '<b>x′ = ± 1,m · 2<sup>e</sup></b>; 32 bitů = <b>1 znaménko + 8 exponent + 23 mantisa</b>.',
    'Exponent e ∈ ⟨−126; 127⟩, ukládá se jako <b>e′ = e + 127</b> (bias 127).',
    'Znaménko: <b>0 = nezáporné, 1 = záporné</b>.',
    '<b>Nula:</b> e′ = 0 a m = 0 · <b>∞:</b> e′ = samé 1, m = 0 · <b>NaN:</b> e′ = samé 1, m ≠ 0 · <b>denormalizovaná:</b> e′ = 0, m ≠ 0 (tvar 0,m·2<sup>e</sup>).',
    'Reálná čísla se ukládají <b>přibližně</b> – většina desetinných čísel (0,1) nemá konečný binární rozvoj.'
  ],
  sections: [
    { title: 'Formát čísla IEEE 754 (single)', blocks: [
      { t: 'def', term: 'Kódování', x: '32bitové kódové slovo x′ reprezentuje reálné číslo ve tvaru <b>x = ± 1,m · 2<sup>e</sup></b>, kde mantisa m = Σ<sub>i=1…23</sub> a<sub>23−i</sub> · 2<sup>−i</sup>.' },
      { t: 'grid', head: ['Bit', '31', '30 … 23', '22 … 0'], rows: [
        ['Význam', 'znaménko (±)', 'exponent e′ (8 bitů)', 'mantisa m′ (23 bitů)'],
        ['Hodnota', '0 = +, 1 = −', 'e′ = e + 127', 'bity za „1,“']
      ] },
      { t: 'svg', title: 'Rozložení 32 bitů', x: UPP.ieeeDiagram() },
      { t: 'flow', title: 'Zakódování čísla', steps: [
        { h: 'Převeď do dvojkové', x: 'celá i desetinná část' },
        { h: 'Normalizuj', x: 'posuň čárku na tvar 1,m · 2<sup>e</sup>' },
        { h: 'Exponent', x: 'e′ = e + 127 → 8 bitů' },
        { h: 'Složení', x: 'znaménko | e′ | m (doplň nuly vpravo do 23 bitů)' }
      ] },
      { t: 'ex', x: '<b>−6,5:</b> 6,5 = 110,1<sub>2</sub> = 1,101 · 2<sup>2</sup>. Znaménko 1; e′ = 2 + 127 = 129 = 10000001; m = 101 0000 0000 0000 0000 0000. Výsledek <b>1 | 10000001 | 10100000000000000000000</b> = <b>C0D00000</b><sub>16</sub>.' },
      { t: 'ex', x: '<b>1,0</b> = 1,0 · 2<sup>0</sup> → e′ = 127 = 01111111, m = 0 → <b>0 | 01111111 | 000…0</b> = 3F800000<sub>16</sub>. <b>10,0</b> = 1,01 · 2<sup>3</sup> → e′ = 130 = 10000010 → 41200000<sub>16</sub>.' },
      { t: 'tip', x: 'Dekódování: x = (−1)<sup>s</sup> · (1 + m) · 2<sup>e′ − 127</sup>.' }
    ] },
    { title: 'Speciální hodnoty', blocks: [
      { t: 'table', head: ['Hodnota', 'Znaménko', 'Exponent e′', 'Mantisa m'], rows: [
        ['nula (+0 / −0)', '0 / 1', 'samé nuly', '0'],
        ['nekonečno (±∞)', '0 / 1', 'samé jedničky', '0'],
        ['NaN (nedefinováno)', 'libovolné', 'samé jedničky', 'libovolná <b>nenulová</b>'],
        ['velmi malá čísla (denormalizovaná)', '±', 'samé nuly', 'libovolná <b>nenulová</b> – tvar ±0,m · 2<sup>e</sup>']
      ] },
      { t: 'p', x: 'Denormalizovaná čísla zaplňují mezeru mezi nulou a nejmenším normalizovaným číslem.' }
    ] },
    { title: 'Varianty přesnosti', blocks: [
      { t: 'grid', head: ['Formát (IEEE 754-2008)', 'binary16', 'binary32 (single)', 'binary64 (double)', 'binary128'], rows: [
        ['Šířka slova (bit)', '16', '32', '64', '128'],
        ['Znaménko (bit)', '1', '1', '1', '1'],
        ['Exponent (bit)', '5', '8', '11', '15'],
        ['Mantisa (bit)', '10', '23', '52', '112'],
        ['Max. exponent', '15', '127', '1 023', '16 383']
      ] },
      { t: 'tip', x: 'Součet bitů vždy vychází na šířku slova: 1 + 8 + 23 = 32; 1 + 11 + 52 = 64. Čím víc bitů mantisy, tím větší přesnost; čím víc bitů exponentu, tím větší rozsah.' }
    ] },
    { title: 'Příklady ze cvičení: desetinná část a dekódování', blocks: [
      { t: 'def', term: 'Převod desetinné části do dvojkové soustavy', x: 'Desetinnou část N <b>násobíme základem 2</b>. Je-li výsledek <b>≥ 1</b>, zapíšeme na další pozici cifru <b>1</b> a <b>1 odečteme</b> (zbytek M); je-li výsledek &lt; 1, zapíšeme <b>0</b> a nic neodečítáme. Zbytek opět násobíme 2 a pokračujeme, dokud není zbytek nulový nebo dokud nemáme požadovaný počet míst.' },
      { t: 'ex', x: '<b>Uložte x = −13,625 ve formátu IEEE 754 (32 bitů).</b><br>Celá část: 13 = 1101<sub>2</sub>. Desetinná část 0,625: 0,625 · 2 = 1,25 → <b>1</b> (zbytek 0,25) · 0,25 · 2 = 0,5 → <b>0</b> · 0,5 · 2 = 1,0 → <b>1</b> (zbytek 0) → 0,101<sub>2</sub>. Tedy 13,625 = 1101,101<sub>2</sub> = <b>1,101101 · 2<sup>3</sup></b> = 1,703125 · 2<sup>3</sup>.<br>Znaménko 1 (záporné); e = 3 → e′ = 3 + 127 = 130 = <b>10000010</b>; mantisa m = 0,703125 → 101101 + nuly = <b>10110100000000000000000</b>.<br>Výsledek: <b>1 | 10000010 | 10110100000000000000000</b> = 1100 0001 0101 1010 0000 … = <b>C15A0000</b><sub>16</sub>.' },
      { t: 'ex', x: '<b>Uložte x = 2,5.</b> 2,5 = 10,1<sub>2</sub> = 1,01 · 2<sup>1</sup> = 1,25 · 2<sup>1</sup>. Znaménko 0; e′ = 1 + 127 = 128 = 10000000; m = 0,25 = 01 + nuly → <b>0 | 10000000 | 01000000000000000000000</b> = 0100 0000 0010 0000 … = <b>40200000</b><sub>16</sub>.' },
      { t: 'ex', x: '<b>Jaké číslo je uloženo v bitech 11000000111100000000000000000000?</b><br>Rozdělení: 1 | 10000001 | 11100000000000000000000. Znaménko 1 → záporné. e′ = 10000001 = 129 → e = 129 − 127 = <b>2</b>. Mantisa: a<sub>1</sub> = a<sub>2</sub> = a<sub>3</sub> = 1 → m = 2<sup>−1</sup> + 2<sup>−2</sup> + 2<sup>−3</sup> = 0,5 + 0,25 + 0,125 = <b>0,875</b>.<br>x = −1,875 · 2<sup>2</sup> = <b>−7,5</b> (hexadecimálně C0F00000).' },
      { t: 'tip', x: 'Hledáme exponent tak, aby mantisa 1,m ležela v intervalu <b>⟨1; 2)</b> (normalizovaný tvar): 13,625 = 1,703125 · 2<sup>3</sup> (a ne 6,8125 · 2<sup>1</sup>); 2,5 = 1,25 · 2<sup>1</sup>.' }
    ] }
  ],
  mistakes: [
    'Zapomenout posun exponentu o <b>127</b> (ukládá se e′, ne e).',
    'Do mantisy zapsat i úvodní jedničku – ta je skrytá („1,m“).',
    'Zaměnit nulu (e′ = 0, m = 0) a denormalizované číslo (e′ = 0, m ≠ 0) nebo ∞ a NaN (liší se mantisou).',
    'Myslet si, že reálná čísla se ukládají přesně – 0,1 nemá konečný binární rozvoj.'
  ],
  qa: [
    { q: 'Jaký má formát číslo IEEE 754 (32 bitů)?', a: 'x′ = ±1,m · 2<sup>e</sup>: 1 bit znaménko (0 = +, 1 = −), 8 bitů exponent e′ = e + 127, 23 bitů mantisa.' },
    { q: 'Co je kód s posunutou nulou a proč se používá?', a: 'Exponent se ukládá jako e′ = e + 127, takže jde ukládat jako nezáporné číslo bez znaménka (e ∈ ⟨−126; 127⟩ → e′ ∈ ⟨1; 254⟩).' },
    { q: 'Zakódujte číslo −6,5 do IEEE 754 single.', a: '6,5 = 1,101 · 2<sup>2</sup>; e′ = 129 = 10000001; m = 101 000…; znaménko 1 → 1 10000001 10100000000000000000000 = C0D00000<sub>16</sub>.' },
    { q: 'Jak se kódují speciální hodnoty: nula, nekonečno, NaN?', a: 'Nula: e′ samé nuly a m = 0. Nekonečno: e′ samé jedničky a m = 0. NaN: e′ samé jedničky a m ≠ 0. Znaménko u nuly a nekonečna rozlišuje +/−.' },
    { q: 'Co jsou denormalizovaná čísla?', a: 'Velmi malá čísla blízko nuly: e′ = samé nuly a m ≠ 0; mají tvar ±0,m · 2<sup>e</sup>.' },
    { q: 'Kolik bitů mají exponent a mantisa ve formátu double (binary64)?', a: '11 bitů exponent, 52 bitů mantisa, 1 bit znaménko; max. exponent 1 023.' },
    { q: 'Vyjmenujte varianty přesnosti IEEE 754-2008.', a: 'binary16 (16 b, exp. 5, mant. 10), binary32 / single (32 b, 8, 23), binary64 / double (64 b, 11, 52), binary128 (128 b, 15, 112).' },
    { q: 'Jak se převádí desetinná část čísla do dvojkové soustavy?', a: 'Opakovaným násobením 2: je-li výsledek ≥ 1, další cifra je 1 a odečte se 1, jinak cifra 0; končí se při nulovém zbytku nebo požadovaném počtu míst. 0,625 → 1, 0, 1 → 0,101<sub>2</sub>.' },
    { q: 'Zakódujte −13,625 do IEEE 754 single.', a: '13,625 = 1101,101<sub>2</sub> = 1,101101 · 2<sup>3</sup>; e′ = 130 = 10000010; m = 10110100…0; znaménko 1 → C15A0000<sub>16</sub>.' },
    { q: 'Zakódujte 2,5 a dekódujte 11000000111100000000000000000000.', a: '2,5 = 1,25 · 2<sup>1</sup> → 0 10000000 0100…0 = 40200000<sub>16</sub>. Druhé číslo: znaménko 1, e′ = 129 → e = 2, m = 0,875 → −1,875 · 4 = −7,5.' }
  ]
});
