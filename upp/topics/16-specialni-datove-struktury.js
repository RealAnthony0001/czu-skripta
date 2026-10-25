registerTopic({
  id: 'specialni-datove-struktury', order: 16, icon: '📚', title: 'Zásobník, fronta, tabulka, soubor a databáze', src: 'podklady', lec: [9],
  where: 'Přednáška 9 + Cvičení 6',
  summary: 'Speciální datové struktury: zásobník (LIFO, PUSH, POP), fronta (FIFO, cyklická fronta), tabulka (klíč, hash tabulky, kolize), soubor (sekvenční a s přímým přístupem, operace) a přechod od souborů k databázovým systémům (SŘBD, DDL, DML, DCL, DQL).',
  vocab: [
    { w: 'LIFO / FIFO', x: 'Last In First Out (zásobník) / First In First Out (fronta).' },
    { w: 'SP (stack pointer)', x: 'Vrchol zásobníku – ukazuje na první volnou položku.' },
    { w: 'Klíč (k)', x: 'Hodnota, která záznam jednoznačně identifikuje; A<sub>k</sub> je jeho adresa (index záznamu).' },
    { w: 'Hash funkce h(k)', x: 'Rozptylovací funkce, která klíči přiřadí pozici v tabulce: A<sub>k</sub> = h(k).' },
    { w: 'Kolize', x: 'Různé klíče k<sub>1</sub> ≠ k<sub>2</sub> mají stejnou hodnotu hash funkce (synonymické položky).' },
    { w: 'SŘBD', x: 'Systém řízení báze dat – programový aparát pro popis a manipulaci s uloženými daty.' },
    { w: 'Redundance · konzistence · integrita', x: 'Opakovaný výskyt informace · stejná hodnota opakovaných údajů · shoda dat se skutečností.' }
  ],
  key: [
    '<b>Zásobník</b> = LIFO; vložení <b>PUSH</b> na pozici SP a SP + 1; vyjmutí <b>POP</b> z pozice SP − 1. Prázdný zásobník: SP = 1.',
    '<b>Fronta</b> = FIFO; vkládá se na konec, vyjímá ze začátku; <b>cyklická fronta</b>: ZF = (ZF + 1) % max, KF = (KF + 1) % max, DF = (KF − ZF + max + 1) % max.',
    '<b>Tabulka</b>: záznamy identifikované klíčem; přímý přístup × vyhledávací × <b>hash tabulka</b> (N ≫ p, kolize).',
    '<b>Soubor</b>: sekvenční (OPEN, READ, WRITE, CLOSE) × s přímým přístupem (adresovaný f(k), indexovaný); nad celým souborem konverze, řazení (Merge-sort), slučování, aktualizace.',
    '<b>Databáze</b> řeší redundanci, konzistenci, integritu, dosažitelnost, souběžný přístup a ochranu dat; jazyky <b>DDL, DML, DCL, DQL</b> (SQL).'
  ],
  sections: [
    { title: 'Zásobník (LIFO)', blocks: [
      { t: 'def', term: 'Zásobník', x: 'Datová struktura Z, do které se objekty vkládají a vybírají podle strategie <b>LIFO (Last In First Out)</b>.', items: ['<b>vrchol zásobníku (SP – stack pointer)</b> ukazuje na <b>první volnou položku</b>', '<b>dno</b> obsahuje první vloženou položku, která podle LIFO opustí zásobník jako poslední'] },
      { t: 'svg', title: 'Zásobník a fronta', x: UPP.stackQueueDiagram(), cap: 'Zásobník se plní i vyprazdňuje na jednom konci (vrchol SP); fronta se plní na konci a vyprazdňuje na začátku.' },
      { t: 'p', x: '<b>Implementace:</b> pole pevné nebo proměnné délky, nebo spojový seznam. Deklarace: <code>typ_polozky Zasobnik[MAX]; int SP;</code> a na začátku, je-li zásobník prázdný, <code>SP = 1</code>. Položkou může být jakákoli hodnota (celé číslo, reálné číslo, záznam …); MAX udává maximální rozsah.' },
      { t: 'versus', cols: [
        { h: 'Vložení PUSH', items: ['vloží položku Px na vrchol, tj. na pozici SP', 'pak se SP zvýší o 1 (nebo se posune ukazatel na volnou pozici)', 'patří mezi základní instrukce strojového kódu'] },
        { h: 'Vyjmutí POP', items: ['vyjme položku z vrcholu, tj. z pozice SP − 1', 'SP se sníží o 1 (nebo se posune ukazatel)', 'patří mezi základní instrukce strojového kódu'] }
      ] },
      { t: 'ex', x: '<b>Sled operací</b> (prázdný zásobník, SP = 1): PUSH 5 → Z[1] = 5, SP = 2; PUSH 8 → Z[2] = 8, SP = 3; PUSH 3 → Z[3] = 3, SP = 4; POP → 3 (SP = 3); POP → 8 (SP = 2). Vybrané položky přišly v opačném pořadí, než byly vloženy.' },
      { t: 'widget', name: 'zasobnik', how: ['PUSH vloží položku na vrchol (pozice SP) a SP zvýší, POP sníží SP a vyjme položku.', 'Vybírá se vždy poslední vložená položka (LIFO).', 'Zásobník má pro přehlednost šest míst.'], title: 'Zásobník: PUSH a POP' },
      { t: 'p', x: '<b>Příkazy C# (cvičení):</b> <code>Stack st = new Stack();</code> <code>st.Push(element)</code> · <code>st.Pop()</code> · <code>st.Count</code> (počet prvků) · <code>st.Contains(element)</code>.' }
    ] },
    { title: 'Fronta (FIFO)', blocks: [
      { t: 'def', term: 'Fronta', x: 'Datová struktura F, do které se objekty vkládají a vybírají podle strategie <b>FIFO (First In First Out)</b>.', items: ['vkládá se na <b>konec</b>, vyjímá ze <b>začátku</b>', 'implementuje se polem pevné nebo proměnné délky, nebo spojovým seznamem'] },
      { t: 'p', x: '<b>Deklarace:</b> <code>typ_polozky Fronta[MAX]; int ZF, KF, DF;</code> – ZF začátek, KF konec a DF délka fronty. Vložení vloží položku na konec; při vyjmutí se vyjme položka ze začátku a <b>všechny ostatní se přesunou o jednu pozici</b> k začátku, nebo se jen posune ukazatel.' },
      { t: 'def', term: 'Cyklická fronta', x: 'Aby nebylo nutné při každém vyjmutí všechny položky přesouvat, pole se „zacyklí“:', items: ['posun začátku při vyjmutí: <b>ZF = (ZF + 1) % max</b>', 'posun konce při vložení: <b>KF = (KF + 1) % max</b> (% = zbytek po celočíselném dělení)', 'délka: <b>DF = (KF − ZF + max + 1) % max</b>'] },
      { t: 'ex', x: '<b>max = 5</b>, ZF = 1, KF = 0 (prázdná fronta). Vložím A, B, C: KF = 1, 2, 3 → DF = (3 − 1 + 5 + 1) % 5 = <b>3</b>. Vyjmu A: ZF = 2 → DF = (3 − 2 + 6) % 5 = <b>2</b>. Vložím D, E: KF = 4 a potom KF = (4 + 1) % 5 = <b>0</b> (zalomení na začátek pole) → DF = (0 − 2 + 6) % 5 = <b>4</b> (B, C, D, E na pozicích 2, 3, 4, 0).' },
      { t: 'widget', fig: UPP.circQueueDiagram(), figcap: 'Konec KF se po čtvrtém vložení zalomí na začátek pole (KF = (4 + 1) % 5 = 0).', name: 'fronta', how: ['Tlačítky vkládáš na konec (KF) a vyjímáš ze začátku (ZF); pole má pět míst (0–4).', 'Modrá šipka ukazuje ZF, oranžová KF; konec se po čtvrtém místě zalomí na začátek pole.', 'Pod obrázkem je vzorec pro délku DF a samostatná proměnná DF.'], title: 'Cyklická fronta (max = 5): vkládání a vyjímání' },
      { t: 'warn', x: 'Slajdy uvádějí počáteční hodnoty prázdné fronty ZF = 1, KF = 1 (v textu „ZP“), DF = 0. Vzorec DF = (KF − ZF + max + 1) % max ale dává pro ZF = KF = 1 délku 1, ne 0 – vzorec předpokládá, že KF je index <b>posledního uloženého</b> prvku, takže prázdná fronta má KF = ZF − 1 (ve výpočtu výše KF = 0). Proto se délka drží i v samostatné proměnné DF – samotným vzorcem se plná fronta (max prvků) nedá odlišit od prázdné.' },
      { t: 'p', x: '<b>Příkazy C# (cvičení):</b> <code>Queue qt = new Queue();</code> <code>qt.Enqueue(element)</code> (přidání) · <code>qt.Dequeue()</code> (odebrání) · <code>qt.Count</code> · <code>qt.Contains(element)</code>. Program z cvičení vloží 1, 2, 3, vypíše 1, 2, 3 (<code>foreach</code>), pak „The number of elements in the Queue 3“ a „Does the Queue contain True“ (<code>Contains(3)</code>).' }
    ] },
    { title: 'Tabulka', blocks: [
      { t: 'def', term: 'Tabulka', x: 'Posloupnost (pole) <b>záznamů (řádků)</b> identifikovatelných hodnotou <b>přístupového (identifikačního) klíče</b> (key, ID).', items: ['<b>ve vodorovném směru</b> je záznam heterogenní (různé datové typy údajů)', '<b>ve svislém směru</b> je to homogenní pole záznamů identifikovatelných klíčem'] },
      { t: 'p', x: 'Značení: <b>k</b> = identifikační klíč (klíčová hodnota jednoznačně určující záznam), <b>A<sub>k</sub></b> = adresa klíče, tj. adresa záznamu s hodnotou klíče k – ve většině případů <b>index (pořadí) záznamu v tabulce</b>. Klíč může být libovolného typu, obvykle celé číslo (int) nebo řetězec (string).' },
      { t: 'table', head: ['Dělení', 'Druhy'], rows: [
        ['podle počtu záznamů', '<b>pevně definované (LUT – Look Up Table)</b>: konstantní počet záznamů, předem vypočtené výsledky pro omezený rozsah vstupů; nahrazuje složitý výpočet vyhledáním hodnoty · <b>s proměnným počtem záznamů</b>: klasická (hlavní) datová tabulka'],
        ['podle způsobu hledání', '<b>s uspořádanými záznamy</b>: primární klíč – podle něj je tabulka uspořádána, sekundární klíče – všechny ostatní · <b>s neuspořádanými (rozptýlenými) záznamy</b>: řádek je výsledkem hash funkce nad klíčem'],
        ['podle organizace', '<b>s přímým přístupem</b>: k → A<sub>k</sub> je prosté zobrazení, klíč obvykle totožný s číslem řádku (degenerované tabulky) · <b>obyčejné vyhledávací</b>: procházejí se záznamy a porovnávají klíče, obvyklé pro relační databáze · <b>s rozptýlenými položkami (hash tabulky)</b>: k → A<sub>k</sub> je rozptylovací funkce s požadavkem minimalizace kolizí']
      ] },
      { t: 'def', term: 'Hash tabulka (tabulka s rozptýlenými položkami)', x: 'Používá se, pokud <b>N (rozsah klíče) ≫ p (rozsah tabulky)</b>.', items: ['pozici záznamu s klíčem k určuje <b>rozptylovací (hash) funkce A<sub>k</sub> = h(k)</b>', 'pro různé klíče k<sub>1</sub> ≠ k<sub>2</sub> může platit h(k<sub>1</sub>) = h(k<sub>2</sub>) – vznikají <b>synonymické položky</b> a říkáme, že nastala <b>kolize</b>'] },
      { t: 'ex', x: 'Tabulka pro nejvýše <b>p = 1000 zaměstnanců</b> identifikovaných podle příjmení o max. 10 velkých písmenech: možných klíčů je N = 26<sup>10</sup> = 141 167 095 653 376 (≈ 1,4 · 10<sup>14</sup>) ≫ 1000. Přímý přístup by vyžadoval tabulku o 10<sup>14</sup> řádcích, proto se použije hash funkce a řeší se kolize.' },
      { t: 'widget', fig: UPP.hashDiagram(), figcap: 'Rozptylovací funkce zobrazí velký rozsah klíčů do malé tabulky; různé klíče se stejným h(k) jsou synonyma a vzniká kolize.', name: 'hash', how: ['Do pole napiš klíče (písmena A–Z) oddělené čárkou; vyber počet řádků tabulky.', 'První tabulka počítá h(k) = (součet pořadí písmen) mod počet řádků; druhá ukazuje, kde který klíč leží.', 'Červeně jsou <b>kolize</b> – různé klíče se stejným h(k).'], sol: 'NOVAK (63 mod 7 = 0), SVOBODA (78 mod 7 = 1), KRAL (42 mod 7 = 0), HORAK (53 mod 7 = 4), BLAHA (24 mod 7 = 3), NEMEC (40 mod 7 = 5) → <b>NOVAK a KRAL mají h = 0: kolize</b> (synonymické položky).', title: 'Hash tabulka a kolize (zkus vlastní klíče)' },
    ] },
    { title: 'Soubor', blocks: [
      { t: 'ul', items: [
        '<b>Soubor</b> – množina dat (záznamů) kompletních k určitému zpracování, popisujících vybrané vlastnosti reálných objektů.',
        '<b>Záznam</b> – popisuje vybrané vlastnosti jediného objektu.',
        '<b>Položka (atribut)</b> záznamu – určitá vlastnost objektu.',
        '<b>Klíč záznamu</b> – položka, která je pro každý záznam jedinečná (unikátní).'
      ] },
      { t: 'p', x: 'Operace nad souborem dělíme podle pohledu: <b>na úrovni záznamu</b> (s jednotlivými položkami) a <b>na úrovni souboru</b> (se záznamy jako celky). Podle přístupu k záznamům rozlišujeme <b>sekvenční soubor</b> (přístupný je pouze aktuální záznam podle pořadí zpracování od prvního) a <b>soubor s náhodným přístupem</b> (záznamy přístupné podle klíče).' },
      { t: 'versus', title: 'Implementace souborů', cols: [
        { h: 'Sekvenční soubory', items: ['posloupnost <b>bloků</b> s jedním nebo více záznamy', 'předchází blok s <b>návěštím souboru (PNS)</b> a <b>značkou souboru (ZS)</b>', 'ukončen <b>blokem konce souboru (KS)</b>, případně koncovým návěštím (KNS)'] },
        { h: 'Soubory s přímým přístupem', items: ['záznamy identifikovány <b>klíčem</b>, který je jejich součástí; záznam je adresovatelný (1 blok)', '<b>adresované:</b> funkce f(k) přiřadí klíči adresu adr = f(k) z intervalu adres souboru', '<b>indexované:</b> přiřazení adres je v tabulce indexů – každému klíči je přiřazen adresní klíč, tj. adresa uložení záznamu'] }
      ] },
      { t: 'svg', title: 'Sekvenční soubor a soubor s přímým přístupem', x: UPP.fileDiagram(), cap: 'Nahoře sekvenční soubor: k bloku 4 se dostaneš jen přes bloky 1–3. Dole soubor s přímým přístupem: z klíče k se funkcí f(k) (nebo tabulkou indexů) určí adresa bloku.' },
      { t: 'table', head: ['Operace', 'Sekvenční soubor (C++)', 'Soubor s přímým přístupem'], rows: [
        ['<b>OPEN</b>', 'jako vstupní (čtení) nebo výstupní (zápis): <code>ifstream fileIn; ofstream fileOut; fileIn.open("vstupni_soubor.kon");</code>', 'jen pro čtení, jen pro zápis, nebo pro čtení i zápis'],
        ['<b>READ</b>', 'přečtení aktuálního záznamu (k dispozici do čtení dalšího): <code>fileIn &gt;&gt; promenna;</code>, <code>get(…)</code>, <code>getline(…)</code>', 'přečtení záznamu s daným klíčem'],
        ['<b>WRITE</b>', 'zápis záznamu: <code>fileOut &lt;&lt; promenna;</code>, <code>fileOut.write(…)</code>', 'zápis záznamu do souboru'],
        ['<b>REWRITE</b>', '–', 'zápis nové hodnoty záznamu s daným klíčem'],
        ['<b>DELETE</b>', '–', 'zrušení záznamu s daným klíčem'],
        ['<b>CLOSE</b>', 'nutné pro správné uložení i čtení: <code>fileIn.close(); fileOut.close();</code>', 'uzavření souboru']
      ] },
      { t: 'table', head: ['Operace nad celým souborem', 'Co dělá'], rows: [
        ['konverze', 'kopírování s drobnými úpravami spojenými s jinou vnitřní reprezentací (pro různá vnější zařízení, komprimace, expanze)'],
        ['řazení', 'seřazení záznamů podle hodnoty klíče; metodami se sekvenčním přístupem, nejčastěji <b>Merge-sort</b>'],
        ['slučování', 'sloučení dvou seřazených souborů do jediného souboru'],
        ['aktualizace', 'promítnutí změn do všech nebo vybraných záznamů; vygeneruje se nový soubor, nebo se záznam zapíše na původní místo']
      ] }
    ] },
    { title: 'Od souborů k databázím', blocks: [
      { t: 'p', x: 'Soubory dat se navrhují podle potřeb konkrétních programů, což přináší problémy:' },
      { t: 'table', head: ['Problém', 'Podstata'], rows: [
        ['<b>redundance</b>', 'opakovaný (nadbytečný) výskyt informace ve více souborech'],
        ['<b>konzistence</b>', 'opakovaně uložený údaj musí mít stejnou hodnotu (popisuje vlastnost jediného objektu)'],
        ['<b>integrita</b>', 'data v souborech musí odpovídat vlastnostem popisovaných objektů reálného světa'],
        ['obtížná dosažitelnost dat', 'odpovědi na dotazy řeší specializované programy; je nutné předem znát kostru dotazu'],
        ['souběžný přístup více uživatelů', 'systémy ho potřebují nebo umožňují'],
        ['ochrana dat proti zneužití', 'ne každý smí provádět s daty jakékoli operace nebo vidět všechny informace']
      ] },
      { t: 'versus', title: 'Báze dat', cols: [
        { h: 'Tradiční pohled', items: ['báze dat = samostatné soubory', 'aplikace k nim přistupují <b>přímo</b>'] },
        { h: 'Databázový pohled', items: ['vzájemně <b>integrované soubory</b> přístupné přes <b>SŘBD</b>', 'databáze = množina vzájemně souvisejících dat k určité problematice; SŘBD = programový aparát pro popis a manipulaci s daty'] }
      ] },
      { t: 'svg', title: 'Soubory × databáze', x: UPP.dbmsDiagram(), cap: 'Vlevo má každá aplikace vlastní soubor (redundance, hrozí nekonzistence); vpravo aplikace sdílejí jednu integrovanou databázi přes SŘBD.' },
      { t: 'ul', items: [
        '<b>Vlastnosti databázových systémů:</b> oddělené struktury aplikačních programů a datových souborů; přístup k datům jen prostřednictvím programů databázového systému; dotazy nejsou pevné; souběžný přístup více uživatelů; ochrana dat – přístupová práva.',
        '<b>DDL</b> (Data Definition Language) – popis dat · <b>DML</b> (Data Manipulation Language) – popis algoritmu práce s daty · <b>DCL</b> (Data Control Language) – ochrana přístupu k datům · <b>DQL</b> (Data Query Language) – uživatelské dotazy: <b>SQL</b> (Structured Query Language), <b>QBE</b> (Query By Example).'
      ] },
      { t: 'table', head: ['Typ databáze', 'Příklady'], rows: [
        ['<b>relační</b> – data v provázaných tabulkách', 'MySQL, MSSQL'],
        ['<b>objektově relační</b> – relační uložení, jedním z typů dat je objekt', 'Oracle, Informix, DB2'],
        ['<b>objektové</b> – plné využití objektového přístupu', 'Jasmina Object Database, Cache, db4object'],
        ['<b>XML</b> – základní jednotkou je dokument XML', 'NeoCore XMS XML database']
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit LIFO (zásobník) a FIFO (fronta) nebo vyjímat z jiného konce, než strategie vyžaduje.',
    'U zásobníku pracovat se SP jako s „posledním obsazeným“ – SP ukazuje na <b>první volnou</b> položku, vyjímá se z SP − 1.',
    'U cyklické fronty zapomenout na zalomení pomocí <b>% max</b>.',
    'Zaměnit kolizi hash tabulky (dva různé klíče, jedna adresa) s duplicitním klíčem – klíč je podle definice jedinečný.',
    'Zaměnit redundanci (nadbytečný výskyt), konzistenci (shodná hodnota opakovaného údaje) a integritu (shoda se skutečností).'
  ],
  qa: [
    { q: 'Co je zásobník, jak funguje a kde ukazuje SP?', a: 'Struktura LIFO: vkládá se i vybírá na vrcholu. SP (stack pointer) ukazuje na první volnou položku; prázdný zásobník má SP = 1.' },
    { q: 'Popište operace PUSH a POP.', a: 'PUSH vloží položku na pozici SP a SP se zvýší o 1. POP vyjme položku z pozice SP − 1 a SP se sníží o 1. Obě patří mezi základní instrukce strojového kódu.' },
    { q: 'Jak lze implementovat zásobník a frontu?', a: 'Polem pevné nebo proměnné délky, nebo spojovým seznamem.' },
    { q: 'Co je fronta a jak se liší od zásobníku?', a: 'Fronta je FIFO: vkládá se na konec, vyjímá ze začátku. Zásobník je LIFO: vše na jednom konci (vrcholu).' },
    { q: 'Jak funguje cyklická fronta? Napište vzorce.', a: 'Pole se zacyklí, aby se po vyjmutí nemuselo přesouvat: ZF = (ZF + 1) % max, KF = (KF + 1) % max, DF = (KF − ZF + max + 1) % max.' },
    { q: 'Cyklická fronta max = 5, ZF = 2, KF = 0 (po zalomení). Jaká je délka?', a: 'DF = (0 − 2 + 5 + 1) % 5 = 4 % 5 = 4.' },
    { q: 'Co je tabulka a klíč? Jak se tabulky dělí?', a: 'Pole záznamů identifikovatelných klíčem. Podle počtu záznamů pevné (LUT) a proměnné; podle hledání uspořádané a neuspořádané; podle organizace s přímým přístupem, vyhledávací a hash tabulky.' },
    { q: 'Co je hash tabulka a kolize?', a: 'Tabulka s rozptýlenými položkami pro N ≫ p; pozici určuje hash funkce A<sub>k</sub> = h(k). Kolize nastane, když pro různé klíče k<sub>1</sub> ≠ k<sub>2</sub> platí h(k<sub>1</sub>) = h(k<sub>2</sub>) (synonymické položky).' },
    { q: 'Čím se liší sekvenční soubor a soubor s přímým přístupem?', a: 'Sekvenční: přístupný je jen aktuální záznam podle pořadí od prvního. S přímým přístupem: záznamy podle klíče (adresované f(k) nebo indexované tabulkou indexů).' },
    { q: 'Jaké operace se provádějí nad sekvenčním souborem a nad celým souborem?', a: 'Sekvenční soubor: OPEN, READ, WRITE, CLOSE. Nad celým souborem: konverze, řazení (Merge-sort), slučování, aktualizace.' },
    { q: 'Jaké problémy souborů řeší databáze?', a: 'Redundanci a konzistenci dat, integritu, obtížnou dosažitelnost (pevné dotazy), souběžný přístup více uživatelů a ochranu dat proti zneužití.' },
    { q: 'Co je SŘBD a jaké jazyky databázový systém zahrnuje?', a: 'Systém řízení báze dat – programový aparát pro popis a manipulaci s daty. Jazyky: DDL (popis dat), DML (manipulace), DCL (ochrana přístupu), DQL (dotazy – SQL, QBE).' },
    { q: 'Jaké typy databázových systémů znáte?', a: 'Relační (MySQL, MSSQL), objektově relační (Oracle, Informix, DB2), objektové (db4object, Cache) a XML databáze.' }
  ]
});
