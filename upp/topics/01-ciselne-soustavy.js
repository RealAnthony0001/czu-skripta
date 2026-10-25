registerTopic({
  id: 'ciselne-soustavy', order: 1, icon: '🔢', title: 'Číselné soustavy a převody', src: 'podklady',
  summary: 'Poziční soustavy se základem Z (2, 8, 10, 16), rozvoj čísla, převody do desítkové a z desítkové soustavy, převody 2 ↔ 8 ↔ 16 po skupinách bitů a převod desetinných čísel – s vypočtenými příklady.',
  vocab: [
    { w: 'Základ soustavy Z', x: 'Počet cifer soustavy; v desítkové Z = 10, ve dvojkové Z = 2.' },
    { w: 'Cifra (koeficient k)', x: 'Jedna číslice zápisu; vždy z množiny {0, 1, …, Z−1}.' },
    { w: 'Váha pozice', x: 'Mocnina základu Z<sup>e</sup>, kterou se cifra na dané pozici násobí.' },
    { w: 'Dekadická / binární / oktalová / hexadecimální', x: 'Desítková / dvojková / osmičková / šestnáctková soustava.' },
    { w: 'Řádová čárka', x: 'Oddělovač celé a desetinné části (desetinná / binární čárka).' }
  ],
  key: [
    '<b>Č<sub>10</sub> = Σ k<sub>e</sub>·Z<sup>e</sup></b> – rozvoj čísla; cifry jsou z {0 … Z−1}.',
    '<b>Do desítkové:</b> sečti cifra × mocnina základu. <b>Z desítkové:</b> postupně odečítej největší mocniny základu.',
    '<b>2 ↔ 16:</b> 1 hex cifra = <b>4 bity</b>. <b>2 ↔ 8:</b> 1 oktalová cifra = <b>3 bity</b> (dělit zprava!).',
    '<b>8 ↔ 16</b> nemá přímý převod – jde se přes dvojkovou soustavu.',
    'Desetinná část se převádí <b>násobením dvěma</b>: celá část výsledku je další bit.'
  ],
  sections: [
    { title: 'Soustava se základem Z', blocks: [
      { t: 'def', term: 'Rozvoj čísla', x: 'Č<sub>10</sub> = k<sub>n</sub>Z<sup>n</sup> + … + k<sub>1</sub>Z<sup>1</sup> + k<sub>0</sub>Z<sup>0</sup> + k<sub>−1</sub>Z<sup>−1</sup> + … + k<sub>−m</sub>Z<sup>−m</sup>, kde k ∈ {0, 1, …, Z−1} je cifra a Z základ soustavy.' },
      { t: 'p', x: 'Počítače pracují ve <b>dvojkové soustavě</b>, protože je mnohem snazší (a spolehlivější) rozlišit dva stavy (proud teče / neteče) než deset. Dlouhé binární zápisy se pro člověka zkracují v <b>osmičkové</b> a <b>šestnáctkové</b> soustavě; převod mezi nimi je snadný a jednoznačný (konečné číslo zůstane konečné).' },
      { t: 'svg', title: 'Mapa převodů', x: UPP.soustavyMap(), cap: 'Mezi osmičkovou a šestnáctkovou soustavou není přímý převod – vždy přes dvojkovou.' },
      { t: 'table', head: ['Soustava', 'Základ', 'Cifry'], rows: [
        ['Dvojková (binární)', '2', '0, 1'],
        ['Osmičková (oktalová)', '8', '0–7'],
        ['Desítková (dekadická)', '10', '0–9'],
        ['Šestnáctková (hexadecimální)', '16', '0–9, A=10, B=11, C=12, D=13, E=14, F=15']
      ] },
      { t: 'grid', head: ['Základ', 'Mocniny (od nejvyšší)'], rows: [
        ['2', '2<sup>12</sup>=4096 · 2<sup>11</sup>=2048 · 2<sup>10</sup>=1024 · 512 · 256 · 128 · 64 · 32 · 16 · 8 · 4 · 2 · 1'],
        ['8', '8<sup>6</sup>=262 144 · 32 768 · 4096 · 512 · 64 · 8 · 1'],
        ['16', '16<sup>6</sup>=16 777 216 · 1 048 576 · 65 536 · 4096 · 256 · 16 · 1'],
        ['2<sup>−k</sup>', '0,5 · 0,25 · 0,125 · 0,0625 · 0,03125']
      ] },
      { t: 'tip', x: 'Mocniny dvojky do 2<sup>12</sup> a záporné mocniny do 2<sup>−5</sup> se naučit zpaměti – ušetří čas v písemce.' }
    ] },
    { title: 'Z libovolné soustavy do desítkové', blocks: [
      { t: 'p', x: 'Zapíšeme rozvoj čísla a sečteme. Použijeme mocniny základu <b>té soustavy, ze které převádíme</b>.' },
      { t: 'grid', head: ['Zadání', 'Rozvoj', 'Výsledek'], rows: [
        ['(5713)<sub>8</sub>', '5·8³ + 7·8² + 1·8¹ + 3·8⁰ = 2560 + 448 + 8 + 3', '<b>(3019)<sub>10</sub></b>'],
        ['(1010111,0011)<sub>2</sub>', '64 + 16 + 4 + 2 + 1 + 0,125 + 0,0625', '<b>(87,1875)<sub>10</sub></b>'],
        ['(3E68)<sub>16</sub>', '3·4096 + 14·256 + 6·16 + 8', '<b>(15976)<sub>10</sub></b>'],
        ['(375,4)<sub>8</sub>', '3·8² + 7·8¹ + 5·8⁰ + 4·8⁻¹ = 192 + 56 + 5 + 0,5', '<b>(253,5)<sub>10</sub></b>']
      ] }
    ] },
    { title: 'Z desítkové do soustavy Z (celá čísla)', blocks: [
      { t: 'flow', title: 'Postup odečítáním mocnin', steps: [
        { h: 'Najdi nejvyšší mocninu', x: 'největší Z<sup>i</sup>, která se do čísla vejde' },
        { h: 'Zapiš k<sub>i</sub>', x: 'kolikrát se vejde (1 … Z−1)' },
        { h: 'Odečti k<sub>i</sub>·Z<sup>i</sup>', x: 'zbytek pokračuje dál' },
        { h: 'Opakuj', x: 'až do nulového zbytku; nepoužité mocniny = 0' }
      ] },
      { t: 'widget', name: 'soustavy', how: ['Do pole napiš číslo, vyber základ zdrojové a cílové soustavy (nebo klikni na příklad).', 'Kroky ukazují: <b>rozvoj</b> do desítkové soustavy, převod z desítkové <b>odečítáním mocnin</b> a u 2 ↔ 8 / 16 <b>zkratku přes skupiny bitů</b>.', 'Poslední krok je výsledek; ⇄ prohodí zdrojovou a cílovou soustavu.'], sol: '<b>FF₁₆</b> = 15 · 16 + 15 = 255₁₀ = 11111111₂ (každá hexadecimální cifra = 4 bity, F = 1111). <b>110010101₂ → 195₁₆</b>: od pravé strany po čtyřech bitech 0001 | 1001 | 0101 → 1 | 9 | 5.', title: 'Převodník soustav s postupem – zkus si vlastní čísla' },
      { t: 'ex', x: '<b>(213)<sub>10</sub> → osmičková:</b> 213 = 3·64 + 21 → 21 = 2·8 + 5 → <b>(325)<sub>8</sub></b>. <b>Šestnáctková:</b> 213 = 13·16 + 5 → <b>(D5)<sub>16</sub></b>. <b>Dvojková:</b> D5 → 1101 0101 → <b>(11010101)<sub>2</sub></b>.' },
      { t: 'ex', x: '<b>(38)<sub>10</sub> → dvojková:</b> 38 = 32 + 4 + 2 → <b>(100110)<sub>2</sub></b>. <b>(715)<sub>10</sub></b> = 512 + 128 + 64 + 8 + 2 + 1 = <b>(1011001011)<sub>2</sub></b>.' },
      { t: 'tip', x: 'Alternativa: <b>dělení základem se zbytkem</b> – zbytky čtené odzdola nahoru dávají cifry zprava doleva (213 : 2 …). Výsledek je stejný.' }
    ] },
    { title: 'Převody 2 ↔ 16 a 2 ↔ 8', blocks: [
      { t: 'grid', head: ['Hex', 'Bin', 'Hex', 'Bin'], rows: [
        ['0', '0000', '8', '1000'], ['1', '0001', '9', '1001'], ['2', '0010', 'A', '1010'], ['3', '0011', 'B', '1011'],
        ['4', '0100', 'C', '1100'], ['5', '0101', 'D', '1101'], ['6', '0110', 'E', '1110'], ['7', '0111', 'F', '1111']
      ] },
      { t: 'versus', title: 'Skupiny bitů', cols: [
        { h: 'Šestnáctková ↔ dvojková', items: ['1 hex cifra = <b>čtveřice</b> bitů', 'dvojkové → hex: dělit na čtveřice <b>zprava</b>, vlevo doplnit nuly', '(3E68)<sub>16</sub> = 0011 1110 0110 1000'] },
        { h: 'Osmičková ↔ dvojková', items: ['1 oktalová cifra = <b>trojice</b> bitů', 'dvojkové → osmičkové: dělit na trojice <b>zprava</b>, vlevo doplnit nuly', '(3764)<sub>8</sub> = 011 111 110 100'] }
      ] },
      { t: 'svg', title: 'Skupiny bitů od pravé strany – (110010101)₂', x: UPP.groupingDiagram(), cap: 'Čárkovaně jsou nuly doplněné zleva; každá skupina je jedna cifra výsledku.' },
      { t: 'ex', x: '<b>(110010101)<sub>2</sub> → hex:</b> 1 1001 0101 → 0001 1001 0101 → <b>(195)<sub>16</sub></b>. <b>→ oktalová:</b> 110 010 101 → <b>(625)<sub>8</sub></b>.' },
      { t: 'ex', x: '<b>8 ↔ 16 přes dvojkovou:</b> (1AC37F)<sub>16</sub> = 0001 1010 1100 0011 0111 1111 = 000 110 101 100 001 101 111 111 = <b>(6541577)<sub>8</sub></b>. Naopak (357231)<sub>8</sub> = 011 101 111 010 011 001 → 1 1101 1110 1001 1001 = <b>(1DE99)<sub>16</sub></b>.' },
      { t: 'warn', x: 'Skupiny se tvoří <b>od binární čárky doprava/doleva</b>, u celých čísel zprava. Dělení „zleva“ dává špatný výsledek, když počet bitů není násobkem 3 / 4.' }
    ] },
    { title: 'Desetinná čísla do dvojkové soustavy', blocks: [
      { t: 'p', x: 'Celou a desetinnou část převádíme zvlášť. Celou část jako výše. <b>Desetinnou část</b> dvěma způsoby:' },
      { t: 'versus', cols: [
        { h: 'Způsob I – odečítání', items: ['odečítej záporné mocniny dvojky 0,5; 0,25; 0,125; 0,0625 …', 'u každé mocniny zapiš 1 (vejde se) nebo 0', 'skonči při nulovém zbytku nebo požadované přesnosti'] },
        { h: 'Způsob II – násobení 2', items: ['desetinnou část vynásob 2', 'celá část výsledku (0 nebo 1) je další bit za čárkou', 'pokračuj se zbytkem (odečti 1, pokud byla); stop při 0 / požadované přesnosti'] }
      ] },
      { t: 'ex', x: '<b>(27,125)<sub>10</sub>:</b> 27 = 11011; 0,125 = 0,001 → <b>(11011,001)<sub>2</sub></b>.' },
      { t: 'ex', x: '<b>(0,853)<sub>10</sub>, způsob II:</b> 0,853·2 = 1,706 → 1 (zbytek 0,706); 0,706·2 = 1,412 → 1 (0,412); 0,412·2 = 0,824 → 0; 0,824·2 = 1,648 → 1 (0,648); 0,648·2 = 1,296 → 1 (0,296); 0,296·2 = 0,592 → 0 … ⇒ <b>(0,110110…)<sub>2</sub></b>.' },
      { t: 'tip', x: 'Většina desetinných čísel (např. 0,1) má ve dvojkové soustavě <b>nekonečný periodický rozvoj</b> – proto se zadává „přesnost na 4 místa za binární čárkou“ a výsledek se zkrátí.' }
    ] },
    { title: 'Řešené příklady ze cvičebnice', blocks: [
      { t: 'p', x: '<b>Př. 1 – desítková → osmičková / šestnáctková / dvojková</b>' },
      { t: 'grid', head: ['Dek.', 'Osm.', 'Hex.', 'Bin.'], rows: [
        ['86', '126', '56', '1010110'], ['360', '550', '168', '101101000'], ['240', '360', 'F0', '11110000'],
        ['880', '1560', '370', '1101110000'], ['3641', '7071', 'E39', '111000111001'], ['4116', '10024', '1014', '1000000010100'],
        ['56983', '157227', 'DE97', '1101111010010111']
      ] },
      { t: 'p', x: '<b>Př. 2 – desetinná čísla do dvojkové (4 místa za čárkou, zkrácením)</b>' },
      { t: 'grid', head: ['Dek.', 'Bin.'], rows: [
        ['275,125', '100010011,0010'], ['534,487', '1000010110,0111'], ['1266,7', '10011110010,1011'], ['6895,624', '1101011101111,1001']
      ] },
      { t: 'p', x: '<b>Př. 3 – do desítkové soustavy</b>' },
      { t: 'grid', head: ['Zadání', 'Dek.'], rows: [
        ['(BF2A)<sub>16</sub>', '48938'], ['(2D8C)<sub>16</sub>', '11660'], ['(1001011)<sub>2</sub>', '75'],
        ['(101010111,1101)<sub>2</sub>', '343,8125'], ['(7256)<sub>8</sub>', '3758'], ['(52337)<sub>8</sub>', '21727']
      ] },
      { t: 'p', x: '<b>Př. 4 – osmičková → dvojková / desítková / šestnáctková</b>' },
      { t: 'grid', head: ['Osm.', 'Bin.', 'Dek.', 'Hex.'], rows: [
        ['276', '10111110', '190', 'BE'], ['544', '101100100', '356', '164'], ['2136', '10001011110', '1118', '45E'],
        ['36547', '11110101100111', '15719', '3D67'], ['316057', '11001110000101111', '105519', '19C2F'], ['4305', '100011000101', '2245', '8C5']
      ] },
      { t: 'p', x: '<b>Př. 5 – šestnáctková → dvojková / desítková / osmičková</b>' },
      { t: 'grid', head: ['Hex.', 'Bin.', 'Dek.', 'Osm.'], rows: [
        ['21FF', '10000111111111', '8703', '20777'], ['A6BB', '1010011010111011', '42683', '123273'], ['836D5', '10000011011011010101', '538325', '2033325'],
        ['1AC37F', '110101100001101111111', '1753983', '6541577'], ['FFE2AA', '111111111110001010101010', '16769706', '77761252'], ['3E8D61', '1111101000110101100001', '4099425', '17506541']
      ] },
      { t: 'tip', x: 'Zkus si příklady nejdřív spočítat sám a pak porovnat s tabulkou – výsledky jsou ověřené programem.' }
    ] }
  ],
  mistakes: [
    'Při převodu 2 → 16 / 8 dělit na skupiny <b>zleva</b> místo zprava a zapomenout doplnit nuly.',
    'Použít mocniny cílové soustavy při převodu <i>do</i> desítkové (správně jsou to mocniny soustavy, <b>ze které</b> převádíš).',
    'Převádět 8 ↔ 16 „přímo“ – žádný přímý převod není, jde se přes dvojkovou soustavu.',
    'Zapomenout psát nuly u nevyužitých mocnin (213 → 11010101, ne 1101101).',
    'Zaměnit zbytky při dělení – čtou se <b>odzdola nahoru</b>.'
  ],
  qa: [
    { q: 'Proč počítače používají dvojkovou soustavu?', a: 'Je technicky snadné a spolehlivé rozlišit dva stavy (napětí, proud, magnetizace, odraz světla), zatímco rozlišit deset stavů je obtížné.' },
    { q: 'Proč se používá i osmičková a šestnáctková soustava?', a: 'Zkracují dlouhé binární zápisy, převod z/do dvojkové je jednoduchý (skupiny 3 / 4 bitů) a jednoznačný (konečné číslo zůstane konečné).' },
    { q: 'Převeďte (213)<sub>10</sub> do soustavy osmičkové, šestnáctkové a dvojkové.', a: '(325)<sub>8</sub>, (D5)<sub>16</sub>, (11010101)<sub>2</sub>.' },
    { q: 'Převeďte (A2F9)<sub>16</sub> do dvojkové soustavy.', a: 'A=1010, 2=0010, F=1111, 9=1001 → (1010 0010 1111 1001)<sub>2</sub>.' },
    { q: 'Převeďte (9B6)<sub>16</sub> do dvojkové soustavy.', a: '9=1001, B=1011, 6=0110 → (1001 1011 0110)<sub>2</sub> = (100110110110)<sub>2</sub>.' },
    { q: 'Převeďte (101010111,1101)<sub>2</sub> do desítkové soustavy.', a: '256 + 64 + 16 + 4 + 2 + 1 + 0,5 + 0,25 + 0,0625 = 343,8125.' },
    { q: 'Převeďte (1AC37F)<sub>16</sub> do osmičkové soustavy.', a: 'Přes dvojkovou: 0001 1010 1100 0011 0111 1111 → po trojicích 000 110 101 100 001 101 111 111 = (6541577)<sub>8</sub>.' },
    { q: 'Převeďte (27,125)<sub>10</sub> do dvojkové soustavy.', a: '27 = 11011; 0,125 = 2<sup>−3</sup> → 0,001. Výsledek (11011,001)<sub>2</sub>.' },
    { q: 'Jak se převádí desetinná část čísla do dvojkové soustavy?', a: 'Opakovaným násobením dvěma: celá část výsledku (0/1) je další bit za čárkou, zbytek se násobí dál; končí se nulovým zbytkem nebo požadovaným počtem míst.' }
  ]
});
