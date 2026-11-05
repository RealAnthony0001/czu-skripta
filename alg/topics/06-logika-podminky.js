registerTopic({
  id: 'logika-podminky', order: 6, icon: '∧', title: 'Matematická logika v podmínkách', src: 'podklady', lec: [3], where: 'Přednáška 3 – poznámky z tabule (2024–2026)',
  summary: 'Operátory and, or, xor a not v podmínkách programu: pravdivostní tabulka, Vennovy diagramy, xor po bitech a „šifrování“, zkrácené vyhodnocení, ternární operátor a hlavně zápis podmínek pro intervaly na číselné ose a oblasti v rovině.',
  vocab: [
    { w: 'and', x: 'konjunkce – pravda, jen když platí obě podmínky (průnik)' },
    { w: 'or', x: 'disjunkce – pravda, když platí aspoň jedna (sjednocení)' },
    { w: 'xor', x: 'vylučovací nebo – pravda, když platí právě jedna (sjednocení bez průniku)' },
    { w: 'not', x: 'negace – obrátí pravdivost' },
    { w: '&lt;&gt;', x: 'nerovná se (≠)' },
    { w: 'zkrácené vyhodnocení', x: 'když je výsledek jasný už z první části, druhá se nevyhodnocuje' }
  ],
  key: [
    '<b>and</b> = průnik, <b>or</b> = sjednocení, <b>xor</b> = sjednocení bez průniku.',
    '<b>x xor k xor k = x</b> – stejný klíč použitý dvakrát vrátí původní hodnotu.',
    '<span class="mo">b &lt;&gt; 0 and a / b &gt; 3</span> – při b = 0 se dělení <b>nevyhodnotí</b> (zkrácené vyhodnocení).',
    'Interval ⟨2; 4⟩: <span class="mo">x &gt;= 2 and x &lt;= 4</span>; „mimo“ interval: <span class="mo">x &lt; 2 or x &gt; 4</span>.',
    'Prázdná množina: podmínka, která nikdy neplatí – <span class="mo">x &gt; 5 and x &lt; 3</span>, <span class="mo">x &gt; x</span>, <span class="mo">3 &gt; 5</span>.',
    'Negace: <span class="mo">not (A and B)</span> = <span class="mo">not A or not B</span>.'
  ],
  sections: [
    { title: 'Operátory and, or, xor', blocks: [
      { t: 'grid', head: ['a', 'b', 'a or b', 'a and b', 'a xor b'], rows: [['0', '0', '0', '0', '0'], ['0', '1', '1', '0', '1'], ['1', '0', '1', '0', '1'], ['1', '1', '1', '1', '0']] },
      { t: 'svg', title: 'Vennovy diagramy', x: ALG.venn(), cap: 'Barevně je vyznačeno, kdy je výsledek pravdivý: or = celé obě množiny, and = jen jejich průnik, xor = obě množiny kromě průniku (platí právě jedna podmínka).' },
      { t: 'p', x: 'Na tabuli se or zapisuje i jako „sčítání“ a and jako „násobení“: 0 + 1 = 1, 1 + 0 = 1, 0 + 0 = 0, <b>1 + 1 = 1</b>; 0 · 1 = 0, 1 · 0 = 0, 0 · 0 = 0, 1 · 1 = 1.' },
      { t: 'tip', x: '„Svět se dělí do 10 skupin: na ty, kdo znají dvojkovou soustavu, a na ty, kdo ji neznají.“ (10₂ = 2.) A proč programátoři pletou Halloween s Vánocemi: <b>31 OCT = 25 DEC</b>, protože 3 · 8 + 1 = 25 = 2 · 10 + 5.' }
    ] },
    { title: 'xor po bitech', blocks: [
      { t: 'svg', title: 'Dvojí xor stejným klíčem', x: ALG.xorSifra(), cap: 'Zpráva 100111 se xorem s klíčem 000010 změní na 100101 (převrátí se bit, kde má klíč jedničku). Druhý xor stejným klíčem bit převrátí zpět a vznikne původní 100111. Proto platí: c = a xor b ⇒ c xor b = a.' },
      { t: 'ul', items: [
        '1011 xor 0001 = 1010 a 1010 xor 0001 = 1011 (z tabule 2026).',
        '10110 xor 11100 = 01010 (z tabule 2024).'
      ] }
    ] },
    { title: 'Podmínky v programu', blocks: [
      { t: 'svg', title: 'Zkrácené vyhodnocení', x: ALG.zkraceni(), cap: 'And se vyhodnocuje zleva. Když první část (b &lt;&gt; 0) neplatí, je celý výraz nepravdivý a druhá část – dělení a / b – se už nepočítá. Pořadí podmínek tedy chrání před dělením nulou.' },
      { t: 'ul', items: [
        '<span class="mo">když b &lt;&gt; 0 and a / b &gt; 3</span> – pro a = 3, b = 1 platí (3 &gt; 3? ne → nepravda), pro b = 0 se dělení vůbec neprovede.',
        '<span class="mo">if openFile("…") or die()</span> – když se soubor otevře (pravda), or je jasně pravdivé a <span class="mo">die()</span> se nespustí; jen při neúspěchu program skončí.',
        '<b>Ternární operátor</b>: <span class="mo">a = (b &gt; 10) ? 3 : 4</span> znamená „když b &gt; 10, pak a = 3, jinak a = 4“.',
        '<b>Výsledek porovnání je hodnota</b>: <span class="mo">a = b &gt; 5</span> uloží do a pravdu nebo nepravdu.'
      ] },
      { t: 'ex', x: 'Hledání prvku příznakem: <span class="mo">nalezeno = false</span>, pak pro každý prvek <span class="mo">nalezeno = nalezeno or (prvek = hledany)</span>. Pro řadu 2, 3, 7, 8, 1, 4 a hledaný 7: F, F, <b>T</b> a dál už zůstává T – jednou nalezené se or „nezapomene“.' },
      { t: 'tip', x: 'Při míchání and a or používej závorky (doplněno: and má obvykle přednost před or). <span class="mo">x = 3 and y &gt; 3 or x &lt; 5</span> se čte jako <span class="mo">(x = 3 and y &gt; 3) or x &lt; 5</span>.' }
    ] },
    { title: 'Intervaly na číselné ose', blocks: [
      { t: 'svg', title: 'Úlohy 1–5 z tabule', x: ALG.osa(), cap: 'Každý řádek je jedna podmínka; tlustá čára ukazuje čísla x, pro která platí. Plný kroužek = krajní bod patří do množiny (≥, ≤), čára až k okraji = interval pokračuje do nekonečna.' },
      { t: 'grid', head: ['Úloha', 'Množina', 'Podmínka'], rows: [
        ['1', '⟨3; ∞)', 'x &gt;= 3'],
        ['2', '⟨2; 4⟩', 'x &gt;= 2 and x &lt;= 4'],
        ['3', '(−∞; 3⟩ ∪ ⟨6; ∞)', 'x &lt;= 3 or x &gt;= 6 &nbsp;(xor také: obě části nemohou platit zároveň)'],
        ['4', '⟨1; 3⟩ ∪ ⟨5; ∞)', '(x &gt;= 1 and x &lt;= 3) or x &gt;= 5 &nbsp;· také x &gt;= 1 xor (x &gt; 3 and x &lt; 5)'],
        ['5', '⟨1; 2⟩ ∪ ⟨3; 4⟩ ∪ ⟨5; 6⟩', '(x&gt;=1 and x&lt;=2) or (x&gt;=3 and x&lt;=4) or (x&gt;=5 and x&lt;=6)'],
        ['6', '∅ (prázdná)', 'x &gt; 5 and x &lt; 3 · x &gt; x · 3 &gt; 5 · 7 &lt;&gt; 7']
      ] },
      { t: 'warn', x: 'U úlohy 3 <b>nand</b> nefunguje (na tabuli škrtnuto). Naopak <span class="mo">x &gt;= 3 xor x &lt;= 6</span> nedá interval ⟨3; 6⟩, ale jeho doplněk <span class="mo">x &lt; 3 or x &gt; 6</span> – uvnitř intervalu platí obě části, a xor je pak nepravdivý.' },
      { t: 'p', x: 'Ve variantě z roku 2025 byly krajní body otevřené (a &gt; 3, a &gt; 2 and a &lt; 4 …) – rozhoduje obrázek v zadání: plný bod = ≥ / ≤, prázdný bod = &gt; / &lt;.' }
    ] },
    { title: 'Oblasti v rovině', blocks: [
      { t: 'svg', title: 'Čtyři typy oblastí', x: ALG.rovina(), cap: 'Úsečka (8), kříž bez průsečíku (11), trojúhelník (13) a rámeček s otvorem (14). Prázdné kroužky jsou body, které do množiny nepatří.' },
      { t: 'grid', head: ['Úloha', 'Útvar', 'Podmínka'], rows: [
        ['7', 'svislá přímka (na ose bod)', 'x = 3'],
        ['8', 'úsečka na přímce y = 2', 'x &gt; 2 and x &lt; 6 and y = 2'],
        ['9', 'polopřímka na y = 3', 'x &gt; 2 and y = 3'],
        ['10', 'přímka y = x/2 (body (2,1), (4,2))', 'y = x / 2 &nbsp;(tj. x = 2y)'],
        ['11', 'přímky x = 4 a y = 5 bez průsečíku', 'x = 4 xor y = 5'],
        ['12', 'obdélník', 'x &gt; 2 and x &lt; 7 and y &gt; 5 and y &lt; 7'],
        ['13', 'trojúhelník (1,4), (3,4), (1,8)', 'y &lt; −2x + 10 and y &gt; 4 and x &gt; 1'],
        ['14', 'velký obdélník bez malého', '(x&gt;2 and x&lt;7 and y&gt;1 and y&lt;6) xor (x&gt;4 and x&lt;6 and y&gt;2 and y&lt;5)'],
        ['15', 'dva překrývající se obdélníky bez překryvu', 'obdélník₁ xor obdélník₂']
      ] },
      { t: 'flow', title: 'Úloha 13 – rovnice přímky přes dva body', steps: [
        { h: 'y = kx + q', x: 'obecná rovnice přímky' },
        { h: 'dosaď (3, 4) a (1, 8)', x: '4 = 3k + q, 8 = k + q' },
        { h: 'odečti rovnice', x: '−4 = 2k → <b>k = −2</b>; q = 8 + 2 = <b>10</b>' },
        { h: 'strana přímky', x: 'trojúhelník leží pod přímkou (bod (1,4): 4 &lt; −2 + 10) → y &lt; −2x + 10' }
      ] },
      { t: 'tip', x: 'U trojúhelníku stačí tři podmínky (jedna za každou stranu): y &lt; −2x + 10, y &gt; 4, x &gt; 1. Podmínky „y &lt; 8 and x &lt; 3“ z nich už plynou – na tabuli jsou škrtnuté jako zbytečné.' },
      { t: 'ex', x: '<b>Negace u úlohy 11:</b> <span class="mo">x = 4 xor y = 5</span> = <span class="mo">(x = 4 or y = 5) and not (x = 4 and y = 5)</span> = <span class="mo">(x = 4 or y = 5) and (x &lt;&gt; 4 or y &lt;&gt; 5)</span>. Kontrola v průsečíku (4, 5): první závorka pravda, druhá nepravda → bod nepatří.' }
    ] }
  ],
  mistakes: [
    'Napsat interval jako <span class="mo">2 &lt;= x &lt;= 4</span> – v podmínce programu se musí rozepsat přes and.',
    'Pro „mimo interval“ použít and místo or (x &lt; 2 and x &gt; 4 nikdy neplatí).',
    'Zaměnit or a xor v místě, kde se oblasti překrývají – xor překryv vyřadí.',
    'Dát dělení před kontrolu nuly (a / b &gt; 3 and b &lt;&gt; 0) – zkrácené vyhodnocení pak nechrání.',
    'Při negaci zapomenout prohodit and ↔ or (De Morgan).'
  ],
  qa: [
    { q: 'Kdy je pravdivé a xor b?', a: 'Když platí právě jedno z a, b (01 a 10).' },
    { q: 'Čemu odpovídají and, or, xor ve Vennově diagramu?', a: 'Průnik, sjednocení, sjednocení bez průniku.' },
    { q: 'Kolik je 100111 xor 000010 a co dá další xor stejným klíčem?', a: '100101; druhý xor vrátí 100111.' },
    { q: 'Proč se píše b &lt;&gt; 0 and a / b &gt; 3 právě v tomto pořadí?', a: 'Při b = 0 je první část nepravdivá, celý and je nepravdivý a dělení se díky zkrácenému vyhodnocení neprovede.' },
    { q: 'Co znamená a = (b &gt; 10) ? 3 : 4?', a: 'Když b &gt; 10, a = 3, jinak a = 4.' },
    { q: 'Zapiš podmínku pro x z ⟨2; 4⟩.', a: 'x &gt;= 2 and x &lt;= 4.' },
    { q: 'Zapiš podmínku pro x ≤ 3 nebo x ≥ 6. Funguje i xor?', a: 'x &lt;= 3 or x &gt;= 6; xor také, protože obě části nikdy neplatí zároveň.' },
    { q: 'Uveď podmínku, která nikdy neplatí.', a: 'Např. x &gt; 5 and x &lt; 3, x &gt; x, 3 &gt; 5.' },
    { q: 'Jaká podmínka popisuje kříž přímek x = 4 a y = 5 bez průsečíku?', a: 'x = 4 xor y = 5.' },
    { q: 'Jaká je rovnice přímky přes body (3, 4) a (1, 8)?', a: 'y = −2x + 10.' },
    { q: 'Jak zapsat rámeček (velký obdélník bez malého uvnitř)?', a: 'velký_obdélník xor malý_obdélník (každý jako čtyři nerovnosti spojené and).' },
    { q: 'Jak funguje nalezeno = nalezeno or (prvek = hledany)?', a: 'Na začátku false; jakmile se prvek najde, stane se true a díky or už true zůstane.' }
  ]
});
