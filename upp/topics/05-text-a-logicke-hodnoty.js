registerTopic({
  id: 'text-a-logicke-hodnoty', order: 5, icon: '🔤', title: 'Kódování logických hodnot a textu', src: 'podklady',
  summary: 'Uložení logické hodnoty, prostý text a formátování, řídicí a grafické znaky, 7bitový a 8bitový ASCII, kódové stránky (ISO 8859-2, Windows-1250) a Unicode (UTF-8 / UTF-16 / UTF-32).',
  vocab: [
    { w: 'Prostý text', x: 'Samotná posloupnost znaků bez formátování (písmo, barva, podtržení).' },
    { w: 'Řídicí znak', x: 'Netisknutelný znak s významem pro řízení zpracování (nový řádek, konec zprávy).' },
    { w: 'Grafický znak', x: 'Znak s viditelnou podobou – písmeno, číslice, interpunkce, značka.' },
    { w: 'Kódová stránka', x: '8bitová tabulka znaků pro jednu jazykovou oblast.' },
    { w: 'Znakový repertoár', x: 'Množina všech znaků, které kód umí vyjádřit.' }
  ],
  key: [
    '<b>Logická hodnota:</b> teoreticky 1 bit, v praxi <b>1 B</b>; 0000 0000 = nepravda, jakákoli nenulová = pravda.',
    '<b>Text</b> → rozdělit na znaky → každému číslo z tabulky (kód) → číslo binárně. „AHOJ“ = 65, 72, 79, 74.',
    '<b>7bitový ASCII</b> (1973): 128 znaků, bez diakritiky; 0–31 a 127 řídicí; mezera = 32.',
    '<b>8bitové kódové stránky</b> (80.–90. léta): 256 znaků; v jednom textu <b>nelze mít víc stránek</b>. Čeština: ISO 8859-2, Windows-1250.',
    '<b>Unicode</b> (1991): znaky všech jazyků (&gt; 100 000); UTF-8 = 1–4 B, UTF-16 = 2 nebo 4 B, UTF-32 = 4 B.'
  ],
  sections: [
    { title: 'Logické hodnoty', blocks: [
      { t: 'p', x: 'Logická hodnota je rozhodnutí pravda / nepravda. Teoreticky stačí 1 bit, v praxi se ukládá do <b>jednoho bajtu</b>.' },
      { t: 'versus', cols: [
        { h: 'Nepravda (0)', items: ['kódové slovo <b>0000 0000</b>', 'nulová hodnota'] },
        { h: 'Pravda (1)', items: ['např. <b>0000 0001</b>', 'jakákoli <b>nenulová</b> hodnota'] }
      ] }
    ] },
    { title: 'Reprezentace prostého textu', blocks: [
      { t: 'p', x: 'Při ukládání textu se uchovávají dvě skupiny informací: <b>prostý text</b> (jednotlivé znaky) a <b>formátování</b> (velikost, typ písma, barva…). Formátování ukládá každý program jinak, proto se řeší jen prostý text.' },
      { t: 'versus', cols: [
        { h: 'Řídicí znaky', items: ['speciální význam pro řízení zpracování', 'netisknutelné (např. Enter = nový řádek, konec zprávy)'] },
        { h: 'Grafické znaky', items: ['písmena, číslice, interpunkce, značky', 'vnější reprezentace pro monitor a tiskárnu'] }
      ] },
      { t: 'flow', title: 'Uložení textu', steps: [
        { h: 'Rozdělit na znaky', x: '„A“, „H“, „O“, „J“' },
        { h: 'Znak → číslo (kód)', x: 'X → X′ podle převodní tabulky (desítkově)' },
        { h: 'Číslo → binárně', x: 'X′ (dek.) → binární číslo, znaky za sebou' }
      ] },
      { t: 'ex', x: '<b>Text „AHOJ“:</b> A′ = 65, H′ = 72, O′ = 79, J′ = 74 → <b>01000001 01001000 01001111 01001010</b> (4 bajty).' }
    ] },
    { title: 'ASCII (7 a 8 bitů)', blocks: [
      { t: 'versus', cols: [
        { h: '7bitový ASCII (1973)', items: ['American Standard Code for Information Interchange', '128 znaků (kód 0–127)', 'písmena bez diakritiky, číslice, interpunkce, speciální znaky (@, &, #), mezera = 32', 'řídicí znaky 0–31 a 127'] },
        { h: '8bitový ASCII (kódové stránky)', items: ['256 znaků (kód 0–255)', 'dolních 128 = ASCII, dalších 128 podle jazykové oblasti', 'rozšíření nestačí pro všechny jazyky → více kódových stránek'] }
      ] },
      { t: 'grid', head: ['Znak', 'Kód (dek.)', 'Binárně'], rows: [
        ['mezera', '32', '0010 0000'], ['0', '48', '0011 0000'], ['A', '65', '0100 0001'], ['a', '97', '0110 0001']
      ] },
      { t: 'tip', x: 'Velké a malé písmeno se liší o 32 (bit 5): A = 65, a = 97. Číslice „0“ je 48, nikoli 0.' }
    ] },
    { title: 'Kódové stránky', blocks: [
      { t: 'table', head: ['Skupina', 'Označení', 'Použití'], rows: [
        ['ISO 8859', 'ISO 8859-1 až -16 (LATIN1 – LATIN16)', 'např. Linux; ISO 8859-1 západoevropské jazyky, ISO 8859-2 (LATIN2) střední Evropa'],
        ['Windows', 'Windows-1250 až -1258', 'operační systém Windows; často souhrnně „ANSI“ podle jazykové verze']
      ] },
      { t: 'ul', items: [
        'Jedna kódová stránka obsahuje znaky potřebné v jedné geografické / jazykové oblasti.',
        'Češtinu pokrývají <b>ISO 8859-2</b> a <b>Windows-1250</b>.',
        'V jednom textu nelze použít více kódových stránek; význam znaků není ani pro stejné jazyky zcela jednoznačný.'
      ] },
      { t: 'warn', x: 'Špatně zvolená kódová stránka při otevření souboru → „nečitelná“ diakritika (příkladem Poznámkový blok, který používá ANSI = stránku podle jazykové verze Windows).' }
    ] },
    { title: 'Unicode', blocks: [
      { t: 'p', x: 'Tabulka Unicode (1991) obsahuje znaky <b>všech světových jazyků</b> (přes 100 000), v jednom textu lze míchat libovolné jazyky. Číslo znaku se převádí do dvojkové soustavy metodami UTF (Unicode Transformation Format):' },
      { t: 'grid', head: ['Metoda', 'Velikost znaku', 'Poznámka'], rows: [
        ['UTF-8', '1, 2, 3 nebo 4 B (podle znaku)', 'nejrozšířenější; web od 2007; Word .docx; ASCII znaky 1 B, česká diakritika 2 B'],
        ['UTF-16', '2 nebo 4 B', 'pouhé „Unicode“ často znamená UTF-16; Word .doc; názvy souborů ve Windows'],
        ['UTF-32', '4 B (vždy)', 'nejjednodušší, ale nejvíce paměťově náročný']
      ] },
      { t: 'ex', x: 'Znak „A“ = 1 B v UTF-8, „č“ = 2 B (C4 8D), „€“ = 3 B, emoji 😀 = 4 B. V UTF-16 mají „A“, „č“ i „€“ po 2 B, emoji 4 B.' }
    ] }
  ],
  mistakes: [
    'Říkat, že logická hodnota zabere vždy 1 bit – v praxi se ukládá do bajtu.',
    'Myslet, že ASCII obsahuje češtinu – 7bitový ASCII je bez diakritiky; češtinu mají kódové stránky a Unicode.',
    'Míchat v jednom textu dvě kódové stránky – nelze.',
    'Zaměnit Unicode (znakový repertoár) s kódováním UTF-8 / UTF-16 (způsob uložení čísla znaku).'
  ],
  qa: [
    { q: 'Jak se v počítači ukládá logická hodnota?', a: 'Teoreticky stačí 1 bit, prakticky 1 bajt: nepravda = 0000 0000, pravda = libovolná nenulová hodnota (např. 0000 0001).' },
    { q: 'Co všechno se ukládá, když ukládáme text?', a: 'Prostý text (kódy jednotlivých znaků) a informace o formátování (písmo, velikost, barva, podtržení).' },
    { q: 'Popište princip reprezentace prostého textu na příkladu „AHOJ“.', a: 'Text se rozdělí na znaky, každý se podle kódovací tabulky převede na číslo (A=65, H=72, O=79, J=74) a to se uloží binárně: 01000001 01001000 01001111 01001010.' },
    { q: 'Rozlište řídicí a grafické znaky.', a: 'Řídicí znaky mají speciální význam pro zpracování textu a nejsou tisknutelné (Enter, konec zprávy); grafické mají viditelnou podobu (písmena, číslice, interpunkce).' },
    { q: 'Čím se liší 7bitový a 8bitový ASCII?', a: '7bitový má 128 znaků bez diakritiky (0–31 a 127 řídicí); 8bitový má 256 znaků a jeho horní polovinu rozšiřují jazykově specifické kódové stránky.' },
    { q: 'Jaké kódové stránky pokrývají češtinu a kde se používají?', a: 'ISO 8859-2 (LATIN2, např. Linux) a Windows-1250 (Windows). V jednom textu nelze použít více kódových stránek.' },
    { q: 'Co je Unicode a jaké má varianty?', a: 'Tabulka znaků všech jazyků (&gt; 100 000 znaků). Varianty UTF-8 (1–4 B), UTF-16 (2 nebo 4 B), UTF-32 (4 B).' },
    { q: 'Jaké kódování používají weby, Word a Windows pro názvy souborů?', a: 'Weby od 2007 převážně UTF-8 (dříve ASCII); Word .doc UTF-16, .docx UTF-8; názvy souborů ve Windows UTF-16.' }
  ]
});
