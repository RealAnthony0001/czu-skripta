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
      { t: 'svg', title: 'Části strojové instrukce', x: UPP.instrFormat(), cap: 'Operační kód říká, co dělat; adresy říkají, s čím, kam a co dál.' },
      { t: 'p', x: '<b>Operační kód</b> určuje, jaká instrukce se bude vykonávat. <b>Adresa vstupního operandu(ů)</b> identifikuje operand(y), se kterým(i) instrukce pracuje, <b>adresa výstupního operandu(ů)</b> říká, kam se po provedení uloží výsledek. <b>Adresa následující instrukce</b> určuje, jakou instrukci provést jako další; není-li uvedena, provede se bezprostředně následující.' },
      { t: 'p', x: 'Operand (vstupní i výstupní) může být umístěn v <b>hlavní paměti</b> (určen adresou) nebo v <b>registru procesoru</b>.' }
    ] },
    { title: 'Činnost procesoru: dvě fáze', blocks: [
      { t: 'p', x: 'Po spuštění programu procesor postupně zpracovává instrukce; adresa zpracovávané instrukce je v čítači instrukcí (IP). Každá instrukce prochází dvěma fázemi:' },
      { t: 'svg', title: 'Instrukční cyklus', x: UPP.cycleDiagram(), cap: 'Dvě fáze: výběrová (adresa z IP → paměť → instrukce do RI, IP = IP + 1) a prováděcí (dekódování, případně přičtení IND, čtení operandů, výpočet v ALU, uložení výsledku); pak se vezme další instrukce na adrese v IP.' },
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
      { t: 'widget', fig: UPP.addrDiagram(), figcap: 'Paměť: adresa 100 → 102, 101 → 40, 102 → 101. Zvýrazněné buňky se čtou, v pořadí šipek.', name: 'adresace', how: ['Vyber způsob adresace; paměť je stejná jako ve zdrojové tabulce (100 → 102, 101 → 40, 102 → 101).', 'Oranžově je buňka, ze které se právě čte; počet kroků odpovídá počtu čtení z paměti.', 'U adresace s posuvem můžeš měnit hodnotu indexregistru IND.'], title: 'Adresace krok po kroku (stejná paměť)' },
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
      { t: 'def', term: 'Vykonání logické instrukce OP A, B', x: 'Operace OP se provede na <b>souhlasných bitech</b> obsahů operandů A a B (b<sub>i</sub> = a<sub>i</sub> OP b<sub>i</sub>).', items: ['výsledek se uloží do <b>druhého operandu B</b>: B = ⟨A⟩ OP ⟨B⟩', 'vždy se berou původní hodnoty A i B'] },
      { t: 'grid', head: ['', 'bity'], rows: [
        ['A', '1 0 0 1 0 0 1 0'],
        ['B', '0 1 1 1 0 1 1 0'],
        ['AND A,B → B', '0 0 0 1 0 0 1 0'],
        ['OR A,B → B', '1 1 1 1 0 1 1 0'],
        ['XOR A,B → B', '1 1 1 0 0 1 0 0']
      ] },
      { t: 'tip', x: 'Typické využití: <b>AND</b> s maskou vynuluje vybrané bity, <b>OR</b> je nastaví na 1, <b>XOR</b> je přepne. Posuvy a rotace patří do téže rodiny „bitových“ instrukcí.' }
    ] },
    { title: 'Masky: nulování, nastavení a negace bitů (cvičení)', blocks: [
      { t: 'p', x: 'Logická instrukce <b>OP A, B</b> ukládá výsledek do B, a proto se registr R upravuje <b>maskou M</b> instrukcí <b>OP M, R</b> (výsledek zůstane v R). Podle toho, co s bity chceme udělat, volíme operaci a masku. Bity se číslují <b>zleva počínaje nulou</b>.' },
      { t: 'table', head: ['Cíl', 'Operace', 'Maska M', 'Proč'], rows: [
        ['<b>vynulovat</b> vybrané bity', 'AND', '0 na vybraných pozicích, jinde 1', 'x ∧ 0 = 0, x ∧ 1 = x'],
        ['<b>nastavit na 1</b> vybrané bity', 'OR', '1 na vybraných pozicích, jinde 0', 'x ∨ 1 = 1, x ∨ 0 = x'],
        ['<b>negovat</b> vybrané bity', 'XOR', '1 na vybraných pozicích, jinde 0', 'x ⊕ 1 = ¬x, x ⊕ 0 = x']
      ] },
      { t: 'svg', title: 'Tři masky po sobě na osmibitovém registru A', x: UPP.maskDiagram(), cap: 'Cíl: bity 0 a 1 na 1, bity 2 a 3 na 0, bity 4–7 znegovat. Nastavení 1, nastavení 0 a negace vyžadují tři různé operace, tedy tři různé masky; každý krok navazuje na výsledek předchozího.' },
      { t: 'widget', name: 'masky', how: ['Klikáním přepínáš bity registru R a masky M; vyber operaci AND / OR / XOR.', 'Třetí řádek je výsledek instrukce <b>OP M, R → R</b>; změněné bity jsou zvýrazněné.', 'Tlačítko „výsledek jako nové R“ umožní řetězit několik instrukcí za sebou. Předvolby jsou příklady z textu.'], title: 'Zkus si masky: OP M, R' },
      { t: 'ex', x: '<b>Vynulovat bity 0, 2 a 5:</b> A = 1011 0111, M = 0101 1011 → AND M,A = <b>0001 0011</b>.<br><b>Nastavit bity 1 a 4 na 1:</b> A = 0001 0011, M = 0100 1000 → OR M,A = <b>0101 1011</b>.<br><b>Kombinace</b> na A = 0101 0101: OR M, A s M = 1100 0000 → 1101 0101; AND N, A s N = 1100 1111 → 1100 0101; XOR O, A s O = 0000 1111 → <b>1100 1010</b>.' },
      { t: 'ex', x: '<b>Záměna obsahu A a B bez pomocného registru</b> – třikrát XOR, vždy s předchozím výsledkem: A = 0101 1010, B = 1100 1100.<br>XOR A,B → B = 1001 0110 · XOR B,A → A = 1100 1100 · XOR A,B → B = <b>0101 1010</b>. Registry si vyměnily hodnoty (a ⊕ b ⊕ a = b).' },
      { t: 'ex', x: '<b>Nahradit první bajt (bity 0–7) registru A prvním bajtem B</b> (původní hodnoty není třeba zachovat): masky M = 00FF a N = FF00 → AND M,A (A = A ∧ 00FF) · AND N,B (B = B ∧ FF00) · OR B,A (A = B ∨ A). Např. A = 6F3A, B = C149 → A = 003A, B = C100 → A = <b>C13A</b>.' },
      { t: 'ex', x: '<b>Cvičení 3:</b> v 16bitovém A vynulovat bity 8–15 → AND s maskou <b>FF00</b>. V B nastavit liché bity (1, 3, 5 …) na 1 a sudé (0, 2, 4 …) znegovat → OR s maskou <b>5555</b> a XOR s maskou <b>AAAA</b> (každá maska zasahuje jiné bity, pořadí je libovolné).' }
    ] },
    { title: 'Posloupnosti logických instrukcí – vyřešené příklady (cvičení)', blocks: [
      { t: 'p', x: 'U posloupnosti instrukcí stačí vždy dosadit <b>aktuální</b> hodnoty obou registrů a výsledek zapsat do druhého. Zde jsou výsledky ověřené výpočtem (hexadecimálně, bity po čtveřicích).' },
      { t: 'grid', head: ['Zadání (počáteční stav)', 'Instrukce', 'Průběh', 'Výsledek'], rows: [
        ['A = 6F, B = 3A, C = 49', 'XOR C,B · OR B,A · XOR A,B', 'B = 73 · A = 7F · B = 0C', '<b>A = 7F, B = 0C, C = 49</b>'],
        ['A = 6F, B = 3A, C = 49', 'AND A,C · OR A,B · AND C,B', 'C = 49 · B = 7F · B = 49', '<b>A = 6F, B = 49, C = 49</b>'],
        ['A = AC, B = 5B, C = DE, D = 94', 'AND A,D · XOR D,C · OR C,B · XOR B,A', 'D = 84 · C = 5A · B = 5B · A = F7', '<b>A = F7, B = 5B, C = 5A, D = 84</b>'],
        ['A = AC, B = 5B, C = DE, D = 94', 'OR C,B · AND C,A · AND A,D · XOR D,C', 'B = DF · A = 8C · D = 84 · C = 5A', '<b>A = 8C, B = DF, C = 5A, D = 84</b>']
      ] },
      { t: 'p', x: '<b>Zapsat operaci jako posloupnost instrukcí</b> (12bitové registry A = A8C, B = 53B, C = DE8, D = 94F):' },
      { t: 'grid', head: ['Výraz', 'Instrukce', 'Výsledek'], rows: [
        ['(C ∧ B) ⊕ (C ∨ D)', 'AND C,B · OR C,D · XOR B,D', 'v D: <b>8C7</b> (B = 528)'],
        ['A ∧ (B ∨ C)', 'OR B,C · AND A,C', 'v C: <b>888</b>'],
        ['((D ⊕ A) ∧ C) ∨ B', 'XOR D,A · AND A,C · OR C,B', 'v B: <b>5FB</b> (A = 3C3, C = 1C0)'],
        ['(B ⊕ D) ∧ (A ∨ C)', 'XOR B,D · OR A,C · AND D,C', 'v C: <b>C64</b> (D = C74)']
      ] },
      { t: 'grid', head: ['Zadání (16 bitů, bity zleva od 0)', 'Registr', 'Instrukce a masky'], rows: [
        ['vynulovat bity 2, 8, 10, 13', 'A', 'AND M,A; M = <b>DF5B</b> (1101 1111 0101 1011)'],
        ['bity 1, 4, 6, 8 na 1; bity 9–13 znegovat', 'B', 'OR M,B; M = <b>4A80</b> · XOR N,B; N = <b>007C</b>'],
        ['bity 1, 3, 9, 15 na 1', 'A', 'OR M,A; M = <b>5041</b>'],
        ['bity 2, 3, 5, 10 na 0; bity 11–15 znegovat', 'B', 'AND M,B; M = <b>CBDF</b> · XOR N,B; N = <b>001F</b>'],
        ['vynulovat bity 2, 8, 11, 14', 'A', 'AND M,A; M = <b>DF6D</b>'],
        ['bity 0, 4, 12 na 1; bity 7, 8, 13, 15 znegovat', 'B', 'OR M,B; M = <b>8808</b> · XOR N,B; N = <b>0185</b>']
      ] },
      { t: 'warn', x: 'Ve slajdu cvičení (příklad 10a) je u registru A = 1100 1010 1010 1110 uveden výsledek AND s maskou M = 1101 1111 0101 1011 jako 1101 1011 0110 1010 – správně je <b>1100 1010 0000 1010</b> (CA0A). U registru B je jako maska pro negaci použito N = 0000 0000 0111 1111 (bity 9–15), ale zadání žádá znegovat jen <b>bity 9–13</b> → N = 0000 0000 0111 1100; správný výsledek je 0110 1111 1011 <b>0011</b> (slajd: …1011 0000).' }
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
    { q: 'Vypočtěte AND, OR a XOR pro A = 10010010, B = 01110110.', a: 'AND = 00010010, OR = 11110110, XOR = 11100100; výsledek se ukládá do B.' },
    { q: 'Jak vynulujete, nastavíte na 1 a znegujete vybrané bity registru?', a: 'Vynulování: AND s maskou, která má 0 na vybraných pozicích a jinde 1. Nastavení na 1: OR s maskou s 1 na vybraných pozicích a jinde 0. Negace: XOR s maskou s 1 na vybraných pozicích a jinde 0.' },
    { q: 'Jak zaměníte obsah registrů A a B bez pomocného registru?', a: 'Třikrát XOR: XOR A,B; XOR B,A; XOR A,B (vždy s předchozím výsledkem).' },
    { q: 'A = 6F, B = 3A, C = 49. Určete obsah po XOR C,B; OR B,A; XOR A,B.', a: 'XOR C,B → B = 73; OR B,A → A = 7F; XOR A,B → B = 0C. Výsledek A = 7F, B = 0C, C = 49.' },
    { q: 'Navrhněte masku, která v 16bitovém registru vynuluje bity 2, 8, 10 a 13 (číslováno zleva od 0).', a: 'AND s maskou 1101 1111 0101 1011 = DF5B.' }
  ]
});
