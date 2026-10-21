registerTopic({
  id: 'strojovy-kod', order: 10, icon: '⚙️', title: 'Strojový kód, instrukce a adresace', src: 'podklady', lec: [3],
  summary: 'Strojový kód a assembler, formát instrukce, dvě fáze zpracování (výběrová a prováděcí), způsoby adresace operandu (bezprostřední, přímá, nepřímá, s posuvem), typy instrukcí a logické instrukce AND / OR / XOR.',
  vocab: [
    { w: 'Strojový kód', x: 'Program jako posloupnost instrukcí procesoru (bajtů, resp. bitů); přímo proveditelný, pro člověka nesrozumitelný.' },
    { w: 'Assembler', x: 'Jazyk symbolických instrukcí – čitelná podoba strojového kódu.' },
    { w: 'Operand', x: 'Údaj, se kterým instrukce pracuje (vstupní / výstupní).' },
    { w: 'Operační kód', x: 'Část instrukce, která určuje, jaká operace se provede.' },
    { w: 'Adresace', x: 'Způsob, jakým procesor z obsahu instrukce určí, kde operand je.' }
  ],
  key: [
    '<b>Instrukce</b> = operační kód + adresa vstupního operandu(ů) + adresa výstupního operandu(ů) + (adresa následující instrukce).',
    '<b>Dvě fáze:</b> výběrová (IP → adresa, instrukce do RI, IP + 1) a prováděcí (dekódování, operandy, ALU, uložení výsledku).',
    '<b>Adresace:</b> bezprostřední X → S · přímá ⟨X⟩ → S · nepřímá ⟨⟨X⟩⟩ → S · s posuvem ⟨X + ⟨R⟩⟩ → S.',
    '<b>Typy instrukcí:</b> aritmetické a logické · přenos dat · řídicí (skoky, podprogram, HALT).',
    '<b>Logická instrukce OP A, B:</b> operace po bitech, výsledek se uloží do B (druhého operandu): B = ⟨A⟩ OP ⟨B⟩.'
  ],
  sections: [
    { title: 'Strojový kód', blocks: [
      { t: 'p', x: 'Veškeré programy se nakonec převedou do <b>strojového kódu</b> – sekvence strojových instrukcí. Z hlediska uživatele je nesrozumitelný, z hlediska systému přímo proveditelný. Kódování závisí na <b>typu procesoru</b>; strojový kód procesoru je množina všech instrukcí, které procesor umí vykonat.' },
      { t: 'tip', x: 'Čitelná symbolická podoba strojového kódu se nazývá <b>assembler</b> (jazyk symbolických instrukcí).' }
    ] },
    { title: 'Formát strojové instrukce', blocks: [
      { t: 'table', head: ['Část instrukce', 'Význam'], rows: [
        ['operační kód', 'určuje, jaká instrukce se bude vykonávat'],
        ['adresa vstupního operandu(ů)', 'identifikuje operand(y), se kterým(i) instrukce pracuje'],
        ['adresa výstupního operandu(ů)', 'kam se po provedení uloží výsledek'],
        ['adresa následující instrukce', 'jakou instrukci provést jako další; není-li uvedena, provede se bezprostředně následující']
      ] },
      { t: 'p', x: 'Operand (vstupní i výstupní) může být umístěn v <b>hlavní paměti</b> (určen adresou) nebo v <b>registru procesoru</b>.' }
    ] },
    { title: 'Činnost procesoru: dvě fáze', blocks: [
      { t: 'p', x: 'Po spuštění programu procesor postupně zpracovává instrukce; adresa zpracovávané instrukce je v čítači instrukcí (IP). Každá instrukce prochází dvěma fázemi:' },
      { t: 'svg', title: 'Instrukční cyklus', x: UPP.cycleDiagram() },
      { t: 'versus', cols: [
        { h: 'Výběrová fáze', items: ['řadič přenese obsah <b>IP</b> na adresní sběrnici a vydá příkaz ke čtení z HP', 'paměť pošle obsah buňky na datovou sběrnici', 'řadič uloží instrukci do <b>RI</b>', 'obsah IP se zvýší o 1'] },
        { h: 'Prováděcí fáze', items: ['instrukce v RI se <b>dekóduje</b>', 'je-li příznak modifikace, přičte se obsah <b>IND</b> k operandu', 'řadič naadresuje HP a přečte vstupní operandy', 'ALU provede instrukci, výsledek do <b>střadače</b>', 'řadič přenese výsledek ze střadače na adresu výstupního operandu'] }
      ] }
    ] },
    { title: 'Způsoby adresace operandu', blocks: [
      { t: 'p', x: 'Symboly: <b>X</b> operand (hodnota v poli operandu), <b>S</b> střadač, <b>⟨…⟩</b> obsah (operandu, adresy). Příklad s pamětí: adresa 100 → obsah 102, adresa 101 → obsah 40, adresa 102 → obsah 101.' },
      { t: 'grid', head: ['Adresace', 'Zápis', 'Co se použije', 'Příklad: X = 100 → S'], rows: [
        ['bezprostřední', 'X → S', 'přímo hodnota v instrukci; žádné další čtení', '<b>100</b>'],
        ['přímá', '⟨X⟩ → S', 'X je adresa v paměti, použije se její obsah', '⟨100⟩ = <b>102</b>'],
        ['nepřímá', '⟨⟨X⟩⟩ → S', 'na adrese X je teprve adresa operandu', '⟨⟨100⟩⟩ = ⟨102⟩ = <b>101</b>'],
        ['s posuvem', '⟨X + ⟨R⟩⟩ → S', 'k obsahu R se přičte X, použije se obsah výsledné adresy', 'X = 100, IND = 1: ⟨101⟩ = <b>40</b>']
      ] },
      { t: 'svg', title: 'Adresace nad stejnou pamětí', x: UPP.addrDiagram(), cap: 'Paměť: adresa 100 → 102, 101 → 40, 102 → 101. Zvýrazněné buňky se čtou, v pořadí šipek.' },
      { t: 'table', head: ['Adresace s posuvem', 'R', 'X'], rows: [
        ['relativní', 'čítač instrukcí', 'posuv (±)'],
        ['bázová (segmentová)', 'základní adresa v HP (báze, segment)', 'kladný posuv'],
        ['indexová', 'kladný posuv (IND)', 'určitá adresa v HP']
      ] },
      { t: 'tip', x: 'Pamatuj si podle „počtu čtení z paměti“: bezprostřední 0, přímá 1, nepřímá 2.' }
    ] },
    { title: 'Typy strojových instrukcí', blocks: [
      { t: 'icons', items: [
        { i: '🧮', h: 'Aritmetické a logické', x: 'sčítání, odčítání, násobení, dělení; AND, OR, NON, XOR; posuvy a rotace' },
        { i: '↔️', h: 'Přenos dat', x: 'čtení z paměti, zápis do paměti, přesun mezi registry, vstup / výstup (I/O)' },
        { i: '🚦', h: 'Řídicí', x: 'nepodmíněné a podmíněné skoky, volání a návrat z podprogramu, HALT' }
      ] },
      { t: 'ul', items: [
        '<b>Podmíněný skok:</b> řízení se přenese jen při splnění podmínky (např. výsledek byl nulový / záporný).',
        '<b>Volání podprogramu:</b> uloží se adresa návratu a skočí se na začátek podprogramu; <b>návrat</b> ji načte zpět.',
        '<b>HALT:</b> zastaví vykonávání programu, procesor přejde do klidového stavu.'
      ] }
    ] },
    { title: 'Logické instrukce', blocks: [
      { t: 'grid', head: ['Instrukce', 'Operace', 'Značky'], rows: [
        ['AND', 'logický součin (konjunkce)', '∧, ·, &'],
        ['OR', 'logický součet (disjunkce)', '∨, +, |'],
        ['EQ', 'ekvivalence (stejnost)', '↔, ≡'],
        ['XOR', 'nestejnost (výlučné nebo)', '⊕'],
        ['NON', 'negace', '¬, ‾']
      ] },
      { t: 'def', term: 'Vykonání logické instrukce OP A, B', x: 'Operace OP se provede na <b>souhlasných bitech</b> obsahů operandů A a B (b<sub>i</sub> = a<sub>i</sub> OP b<sub>i</sub>) a výsledek se uloží do <b>druhého operandu B</b>: B = ⟨A⟩ OP ⟨B⟩. Vždy se berou původní hodnoty A i B.' },
      { t: 'grid', head: ['', 'bity'], rows: [
        ['A', '1 0 0 1 0 0 1 0'],
        ['B', '0 1 1 1 0 1 1 0'],
        ['AND A,B → B', '0 0 0 1 0 0 1 0'],
        ['OR A,B → B', '1 1 1 1 0 1 1 0'],
        ['XOR A,B → B', '1 1 1 0 0 1 0 0']
      ] },
      { t: 'tip', x: 'Typické využití: <b>AND</b> s maskou vynuluje vybrané bity, <b>OR</b> je nastaví na 1, <b>XOR</b> je přepne. Posuvy a rotace patří do téže rodiny „bitových“ instrukcí.' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>přímou</b> adresaci (obsah adresy X) s <b>bezprostřední</b> (X je rovnou hodnota).',
    'Vynechat zvýšení IP během výběrové fáze, nebo zaměnit pořadí fází.',
    'U logické instrukce OP A, B uložit výsledek do A – správně se ukládá do <b>B</b>.',
    'U nepřímé adresace se zastavit po prvním čtení – obsah je teprve <i>adresa</i> operandu.'
  ],
  qa: [
    { q: 'Co je strojový kód a assembler?', a: 'Strojový kód je program jako posloupnost instrukcí procesoru (bajtů), přímo proveditelný; závisí na typu procesoru. Assembler (jazyk symbolických instrukcí) je jeho čitelný zápis.' },
    { q: 'Z čeho se skládá strojová instrukce?', a: 'Operační kód, adresa vstupního operandu(ů), adresa výstupního operandu(ů) a případně adresa následující instrukce (není-li uvedena, provede se následující v paměti).' },
    { q: 'Popište dvě fáze zpracování instrukce.', a: 'Výběrová: obsah IP na adresní sběrnici, čtení z paměti, instrukce do RI, IP se zvýší o 1. Prováděcí: dekódování v RI, případně přičtení IND, načtení operandů, provedení v ALU, výsledek do střadače a na adresu výstupního operandu.' },
    { q: 'Vyjmenujte způsoby adresace operandu.', a: 'Bezprostřední (X → S), přímá (⟨X⟩ → S), nepřímá (⟨⟨X⟩⟩ → S) a s posuvem (⟨X + ⟨R⟩⟩ → S) – relativní, bázová, indexová.' },
    { q: 'Paměť: 100→102, 101→40, 102→101. Co se uloží do S při X = 100 u bezprostřední, přímé a nepřímé adresace?', a: 'Bezprostřední: 100. Přímá: ⟨100⟩ = 102. Nepřímá: ⟨⟨100⟩⟩ = ⟨102⟩ = 101.' },
    { q: 'Stejná paměť, indexová adresace X = 100, IND = 1. Co je v S?', a: '⟨100 + 1⟩ = ⟨101⟩ = 40.' },
    { q: 'Jaké jsou typy strojových instrukcí?', a: 'Aritmetické a logické (včetně posuvů a rotací), instrukce pro přenos dat (čtení, zápis, mezi registry, I/O) a řídicí (skoky, podprogramy, HALT).' },
    { q: 'Vypočtěte AND, OR a XOR pro A = 10010010, B = 01110110.', a: 'AND = 00010010, OR = 11110110, XOR = 11100100; výsledek se ukládá do B.' }
  ]
});
