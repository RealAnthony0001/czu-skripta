registerTopic({
  id: 'operacni-system', order: 11, icon: '🖥️', title: 'Operační systém, procesy a správa zdrojů', src: 'podklady', lec: [4],
  where: 'Přednáška 4',
  summary: 'Role a třívrstvá architektura operačního systému, rozhraní (uživatelské, API, ovladače), správa procesoru, paměti a souborů, procesy a jejich stavy, kritická oblast, uváznutí, semafory a algoritmus bankéře s vypočteným příkladem.',
  vocab: [
    { w: 'Operační systém (OS)', x: 'Souhrn systémových programů – základní programové vybavení, které obsluhuje hardware a poskytuje služby aplikacím.' },
    { w: 'Ovladač (driver)', x: 'Software, který umožňuje OS pracovat s konkrétním zařízením.' },
    { w: 'API', x: 'Aplikační rozhraní – sbírka funkcí OS, které používají programátoři aplikací.' },
    { w: 'Multitasking', x: 'Zdánlivě souběžný běh více programů technikou sdílení času.' },
    { w: 'Proces', x: 'Operačním systémem spuštěný a zpracovávaný program (má vlastní paměť, registry, zásobník).' },
    { w: 'Kritická oblast', x: 'Opakovaně použitelný zdroj, do kterého smí současně nejvýše jeden proces (nebo předem daný počet).' },
    { w: 'Uváznutí (deadlock)', x: 'Všechny procesy čekají na událost (uvolnění zdroje), která nikdy nenastane.' },
    { w: 'Semafor', x: 'Sdílená proměnná řídící vstup do kritické oblasti (binární 0/1, počítaný 0…N).' }
  ],
  key: [
    '<b>OS</b> = základní programové vybavení: ovládání počítače, <b>abstrakce hardwaru</b>, <b>správa zdrojů</b> (procesor, paměť, disk, I/O) a bezpečnost.',
    '<b>Třívrstvá architektura:</b> aplikace → operační systém → hardware (přes ovladače). Aplikace se nestarají o detaily HW a OS se „šéfuje“ o sdílení zdrojů.',
    '<b>Multitasking:</b> kooperativní (procesy se vzdávají samy – Windows 3.x) × <b>preemptivní</b> (přerušuje OS – Windows 95+, Linux).',
    '<b>Virtuální paměť:</b> stránky (např. 4 kB) programu ↔ rámy ve fyzické paměti, případně odkládání na disk.',
    '<b>Stavy procesu:</b> nový, připraven, probíhající, čekající, zablokován, ukončen. <b>Uváznutí:</b> prevence nejčastěji číslováním zdrojů; vyhýbání algoritmem bankéře.'
  ],
  sections: [
    { title: 'Operační systém a třívrstvá architektura', blocks: [
      { t: 'def', term: 'Operační systém', x: 'Souhrn všech systémových programů. Tvoří <b>základní programové vybavení počítače</b>, obsluhuje veškeré technické prostředky a poskytuje systémové služby aplikačním programům. Spouští se obvykle automaticky a kromě uživatelského prostředí je pro uživatele neviditelný.' },
      { t: 'p', x: 'Po zapnutí počítače se nejprve spustí operační systém; až je vše připraveno, lze spouštět aplikační programy. Nejčastější jsou OS řady <b>MS Windows</b> a <b>Linux</b>.' },
      { t: 'svg', title: 'Vrstvy mezi uživatelem a hardwarem', x: UPP.osLayersDiagram(), cap: 'Každá vrstva komunikuje jen se sousední – podle typu komunikace vznikají čtyři rozhraní.' },
      { t: 'ul', items: [
        '<b>Aplikace se nemusí starat o detaily hardwaru</b> – existuje mnoho modelů HW od různých výrobců a s každým se komunikuje trochu jinak.',
        '<b>Komunikace s hardwarem</b> (a jiné společné funkce, např. uživatelské rozhraní) se řeší <b>centrálně v OS</b>, ne v každé aplikaci zvlášť – ulehčuje práci programátorům.',
        '<b>Aplikace se rozumně „podělí“ o HW zdroje</b> (procesor, paměť …). Praxe ukázala, že dobrovolné střídání aplikací nefunguje, je nutný „šéf“ (OS), který o střídání rozhoduje.'
      ] }
    ] },
    { title: 'Hlavní úkoly (služby) operačního systému', blocks: [
      { t: 'icons', items: [
        { i: '🕹️', h: 'Ovládání počítače', x: 'spouštění programů, předávání vstupních dat, výstup výsledků; poskytuje uživatelské rozhraní' },
        { i: '🧩', h: 'Abstrakce hardwaru', x: 'aplikační rozhraní s jednoduchými funkcemi; pro přímé ovládání HW používá ovladače zařízení' },
        { i: '📦', h: 'Správa prostředků', x: 'přiděluje programům operační paměť, procesor, pevný disk a vstupně-výstupní zařízení' },
        { i: '🔐', h: 'Bezpečnost', x: 'nastavení a kontrola přístupových práv: kdo smí s čím pracovat a jak' }
      ] },
      { t: 'table', head: ['Kategorie', 'Příklady'], rows: [
        ['OS pro osobní počítače – Microsoft Windows', 'Windows 95, 98, NT, 2000, XP, Vista, 7, 10, 11 …'],
        ['OS pro osobní počítače – Linux (distribuce)', 'Ubuntu, SuSE, Debian, Mandrake, Fedora, Red Hat, Gentoo …'],
        ['OS pro osobní počítače – Macintosh', 'převážně počítače Apple: System, Mac OS …'],
        ['OS pro mobilní telefony', 'Android, iOS (Apple), Windows Phone (Microsoft)']
      ] },
      { t: 'p', x: 'Operační systémy se liší způsobem realizace poskytovaných služeb, tj. způsobem realizace <b>rozhraní mezi vrstvami</b>.' }
    ] },
    { title: 'Rozhraní: uživatelské, ovladače, API', blocks: [
      { t: 'table', head: ['Rozhraní', 'Mezi kým', 'Co zajišťuje'], rows: [
        ['Uživatelské rozhraní', 'uživatel ↔ aplikace / OS', 'ovládací prvky, okna, správa obrazovky'],
        ['Aplikační rozhraní (API)', 'aplikace ↔ OS', 'funkce OS dostupné programátorům'],
        ['Ovladače zařízení', 'OS ↔ hardware', 'řízení konkrétního zařízení'],
        ['Správa systémových prostředků', 'OS ↔ procesor, paměť, disky', 'přidělování zdrojů programům']
      ] },
      { t: 'p', x: '<b>Správa obrazovky:</b> každý program má své <b>okno</b> (ohraničená obdélníková oblast), do kterého „píše a kreslí“. OS zajistí správné zobrazení, překreslení, překrývání, velikost a pozici oken i jejich ovládací prvky (zavření, maximalizace, minimalizace, záhlaví, posuvníky, rozevírací seznamy, pás karet).' },
      { t: 'versus', title: 'Typy uživatelského rozhraní', cols: [
        { h: 'Příkazový řádek (CLI, Console)', items: ['textové příkazy zadávané klávesnicí', 'výsledky se zobrazují jako text'] },
        { h: 'Grafické rozhraní (GUI)', items: ['text i grafika', 'klávesnice, myš, dotykový displej …'] }
      ] },
      { t: 'versus', title: 'Ovladače zařízení', cols: [
        { h: 'Ovladač (driver)', items: ['ovládací program, který se <b>instaluje a stává se součástí OS</b> (jeho spuštěný program)', 'část je součástí OS, jiné se distribuují s hardwarem (např. na CD-ROM)'] },
        { h: 'Firmware', items: ['ovládací program je v <b>paměti ROM zařízení</b>', 'spouští se přímo ze zařízení'] }
      ] },
      { t: 'p', x: 'Základní vlastností ovladače je <b>stejné nebo podobné rozhraní pro podobná zařízení</b> – s diskem, disketou a CD/DVD mechanikou lze pracovat stejně.' },
      { t: 'def', term: 'Aplikační rozhraní (API)', x: 'Abstrahuje ovládání hardwaru a dalších funkcí do snadno použitelných funkcí – <b>sbírka procedur a funkcí</b>, které programátor využívá při tvorbě aplikací. Umožňuje programům pracovat i se zařízeními, která v době vzniku programu neexistovala (z hlediska programátora není rozdíl mezi otevřením souboru na pevném disku, CD, DVD, flash disku, síťovém disku nebo Blu-ray).' },
      { t: 'versus', title: 'Knihovny funkcí API', cols: [
        { h: 'Statická knihovna (SLL)', items: ['při překladu se volané funkce <b>připojí přímo do spustitelného souboru</b>', 'soubor obsahuje vše potřebné pro svůj běh', 'přípona <b>.lib</b> nebo <b>.a</b>'] },
        { h: 'Dynamická knihovna (DLL)', items: ['k programu se <b>nepřidává</b>; v tabulce symbolů jsou jen odkazy na funkce', 'pro běh musí být dostupná příslušná knihovna', 'přípona <b>.dll</b> (Windows), <b>.so</b> (Linux)'] }
      ], x: 'U statické knihovny je program „samostatný kufr“ – má všechno s sebou, proto je větší, ale funguje i na počítači, kde knihovna není. U dynamické knihovny si program „půjčuje“ funkce za běhu: je menší a víc programů sdílí jednu knihovnu, ale když knihovna chybí (typicky chybová hláška o chybějícím souboru .dll), program se nespustí.' },
      { t: 'warn', x: 'Slajd uvádí u dynamických knihoven v Linuxu příponu „.o nebo .so“. Správně je <b>.so</b> (shared object); soubor .o je pouze přeložený objektový soubor, který se teprve linkuje.' }
    ] },
    { title: 'Platforma a přenositelnost programů', blocks: [
      { t: 'p', x: '<b>Platforma</b> je soustava komponent, které dohromady tvoří počítač („program je napsán pro platformu …“). OS je napsán pro určitou platformu, ale sám je také platformou, protože zprostředkuje používání hardwaru ostatním programům.' },
      { t: 'table', head: ['Dělení podle', 'Platformy'], rows: [
        ['hardwaru', '<b>x86</b> – 32bitové procesory (Intel, AMD) · <b>x86-64 (AMD64)</b> – 64bitové procesory · <b>Macintosh</b> – počítače Apple'],
        ['operačního systému', 'MS Windows (32 / 64 bitů) · Linux · Mac OS']
      ] },
      { t: 'ul', items: [
        'Programy obecně <b>nejsou přenositelné</b> mezi OS: jiný <b>formát spustitelných souborů</b> (Windows <b>.exe</b>, Linux bez přípony – formát <b>ELF</b>) a jiná <b>komunikace s OS</b> (aplikační rozhraní, ve Windows WinAPI).',
        'Je nutné aplikaci <b>přeložit pro danou platformu</b>.',
        '<b>Java:</b> mezi aplikace a OS vkládá <b>virtuální stroj (JVM)</b>; programy se přeloží do virtuálního kódu (Byte Code), který je spustitelný v JVM na libovolné platformě.'
      ] }
    ] },
    { title: 'Správa procesoru – multitasking', blocks: [
      { t: 'p', x: 'Většina osobních počítačů má jeden procesor (více procesorů / jader mají servery, superpočítače, paralelní systémy). Úkolem správy procesoru je zajistit <b>současný běh mnoha aplikačních i systémových programů – multitasking</b>.' },
      { t: 'versus', title: 'Multitasking (sdílení času)', cols: [
        { h: 'Kooperativní', items: ['procesy samy nabízejí přerušení své činnosti', 'např. MS Windows 3.x'] },
        { h: 'Preemptivní', items: ['proces je přerušen <b>operačním systémem</b>, kdykoli nastane událost, která může ovlivnit přidělení prostředků (např. uplynutí časového kvanta)', 'např. Windows 95, 98, 2000, XP, Linux'] }
      ], x: 'Programy se střídají v běhu po krátké době (milisekundy), a proto vzniká iluze, že běží současně. Při kooperativním multitaskingu je to jako schůze, na které si každý slovo předává sám – stačí jeden, kdo nepřestane mluvit, a ostatní čekají (zamrzlý program zablokuje celý systém). U preemptivního multitaskingu je tu moderátor (OS), který řečníkovi po uplynutí času slovo odebere, ať se mu to líbí, nebo ne.' },
      { t: 'svg', title: 'Kooperativní × preemptivní multitasking', x: UPP.multitaskDiagram(), cap: 'Při kooperativním multitaskingu stačí jeden proces, který se nevzdá, a čeká celý systém; při preemptivním OS po každém časovém kvantu procesor odebere.' },
      { t: 'p', x: 'Ve <b>více-jádrových a víceprocesorových</b> systémech mohou procesy běžet <b>skutečně souběžně (paralelně)</b>; jádra mohou mít vlastní, nebo sdílenou paměť. <b>Multithreading</b> je rozdělení procesu na více samostatných <b>vláken (threads)</b>, která se zpracovávají současně. Procesy lze sledovat ve Správci úloh (Ctrl+Alt+Del) ve Windows, v Linuxu příkazem <b>ps</b>.' }
    ] },
    { title: 'Správa paměti', blocks: [
      { t: 'p', x: 'Paměť používají programy pro uložení dat. Skládá se z paměťových míst (obvykle velikosti 1 B), každé je jednoznačně určeno pořadovým číslem – <b>adresou</b>.' },
      { t: 'p', x: '<b>Funkce správce paměti:</b>' },
      { t: 'ul', items: [
        'udržuje informace o využití (fyzické) paměti,',
        'přiděluje paměť procesům; uvolněnou paměť zařadí k volné; je-li třeba, paměť procesům odebírá,',
        'rozpozná případy, kdy proces skončil <b>bez uvolnění paměti</b> (např. při násilném ukončení),',
        'zajišťuje <b>ochranu paměti</b> – nedovolí procesům přístup mimo vymezený prostor.'
      ] },
      { t: 'def', term: 'Virtuální paměť', x: 'Každý proces má svou <b>virtuální paměť rozdělenou na stránky</b> (např. 4 kB); aplikace pracují s virtuální pamětí, která může být násobně větší než fyzická. <b>Fyzická paměť je rozdělena na rámy</b> stejné velikosti jako stránky. OS stránkám programů přiděluje a odebírá odpovídající rámy ve fyzické paměti, případně je <b>odkládá na pevný disk</b>.' },
      { t: 'svg', title: 'Stránky virtuální paměti a rámy fyzické paměti', x: UPP.virtMemDiagram(), cap: 'Stránky procesu se mapují na libovolné rámy ve fyzické paměti; stránka, která se nevejde, se odloží na pevný disk.' }
    ] },
    { title: 'Správa souborů a systém souborů', blocks: [
      { t: 'p', x: 'Správa souborů jako služba OS zahrnuje ukládání a čtení dat na / z pevného disku (paměťových médií), vytváření <b>datové abstrakce ve formě souborů</b> hierarchicky organizovaných do <b>adresářové struktury</b> a vytváření systému souborů.' },
      { t: 'p', x: 'Aplikace řekne: „Ulož data pod názvem koala.jpg“ – OS data <b>rozdělí do „přihrádek“ (bloků)</b> a zapamatuje si, z kolika částí se soubor skládá a kde leží. Při čtení z přihrádek data zase poskládá. Konkrétní podoba závisí na typu systému souborů.' },
      { t: 'def', term: 'Systém souborů (file system)', x: 'Určuje, <b>jak jsou soubory uloženy</b> na záznamovém zařízení. Často má podobu normy, která popisuje, jak zjistit volné místo, jak uložit data souboru (kde začínají a končí; ne vždy platí, že 0 se skutečně uloží jako 0), jak uložit <b>metadata</b> (jméno, časové údaje, atributy, přístupová práva …) a jak uložit adresářovou strukturu.' },
      { t: 'p', x: '<b>Systémy souborů se liší:</b>' },
      { t: 'ul', items: [
        '<b>výkonem</b> – rychlostí výpisu adresáře, ukládání malých / velkých souborů …',
        '<b>omezeními</b> – velikost disku (oddílu) i souboru, povolené znaky a délka jména, přesnost časových údajů …',
        '<b>funkcemi</b> – přístupová práva, atributy a další metadata, šifrování a komprese dat, podpora žurnálování.'
      ] }
    ] },
    { title: 'Proces a jeho stavy', blocks: [
      { t: 'def', term: 'Proces', x: 'Operačním systémem spuštěný a zpracovávaný program. OS mu přidělí paměť pro instrukce, pro data, vlastní registry a zásobník.' },
      { t: 'versus', title: 'Druhy procesů', cols: [
        { h: 'Nezávislé', items: ['nesmí se vzájemně ovlivňovat', 'je nutné je <b>oddělit</b> (data odděluje OS)'] },
        { h: 'Spolupracující', items: ['sdílejí společná data', 'přístup ke společným datům nutno řídit – <b>synchronizace</b>'] }
      ] },
      { t: 'def', term: 'Determinismus', x: 'Požadavek <b>stejného výsledku při spuštění se stejnými daty</b> bez ohledu na konstelaci současně probíhajících procesů. U nezávislých procesů ho zajistí OS oddělením dat.' },
      { t: 'svg', title: 'Stavy procesu', x: UPP.procStatesDiagram(), cap: 'Spuštěné uživatelské procesy: probíhající ↔ připraven, z probíhajícího do čekajícího (na zdroj) nebo zablokovaného, návrat vždy přes „připraven“.' },
      { t: 'table', head: ['Stav', 'Význam'], rows: [
        ['probíhající (running)', 'proces má přidělen procesor a je vykonáván'],
        ['připraven (ready)', 'je připraven ke zpracování, ale nemá přidělen procesor'],
        ['zablokován (blocked)', 'z nějakého důvodu zablokován, procesor nedostává (zcela zastaven – „zmrazen“); do stavu připraven se dostane až po probuzení'],
        ['čekající (waiting)', 'čeká na splnění nějaké podmínky, např. na uvolnění sdíleného prostředku'],
        ['nový (new)', 'proces byl nově vložen; po vytvoření všech systémových struktur bude zařazen ke zpracování'],
        ['ukončen (terminated)', 'proces ukončil činnost a bude uvolněn z paměti']
      ] }
    ] },
    { title: 'Zdroje a kritická oblast', blocks: [
      { t: 'p', x: 'Proces potřebuje ke své činnosti <b>zdroje</b>: hardware (I/O zařízení, paměť) i software (data, programy).' },
      { t: 'table', head: ['Druh zdroje', 'Kdy lze přidělit jinému procesu', 'Příklady'], rows: [
        ['<b>násobně použitelný</b> (sdílitelný, reentrantní)', 'ještě před tím, než je dokončen proces, kterému byl přidělen', 'základní jednotka, disk jako celek, myš, data pro čtení'],
        ['<b>opakovaně použitelný</b> (reusabilní) – tvoří <b>kritickou oblast</b>', 'až poté, co proces, kterému byl přidělen, skončil', 'tiskárna, pracovní oblast v paměti a na disku, většina programů s pracovními položkami'],
        ['<b>na jedno použití</b> (nereusabilní)', 'nelze přidělit znovu', 'papír do tiskárny, špatně vytvořený program (opomenuté nulování střadače)']
      ] },
      { t: 'def', term: 'Kritická oblast (sekce)', x: 'Každý opakovaně použitelný zdroj tvoří kritickou oblast – přístup do ní je v multitaskingovém OS třeba <b>řídit (synchronizovat)</b>.' },
      { t: 'p', x: '<b>Pravidla pro řízení přístupu:</b>' },
      { t: 'ol', items: [
        'V kritické oblasti může být současně <b>nejvýše jeden</b> (nebo předem daný počet) proces.',
        'Je-li oblast obsazena, musí být proces převeden do stavu „čeká na prostředek“, dokud ji stávající proces neopustí.',
        'Každý proces, který vstoupí do kritické oblasti, ji musí <b>v konečném čase opustit</b>.',
        'Každý proces, který čeká na vstup, se musí <b>v konečném čase vstupu dočkat</b> (nesmí dojít k vyhladovění).'
      ] }
    ] },
    { title: 'Uváznutí (deadlock)', blocks: [
      { t: 'def', term: 'Uváznutí', x: 'Také zamrznutí, zaseknutí, smrtelné objetí, smrtelný zámek, dead lock. Stav, kdy <b>všechny spuštěné procesy čekají na zdroj</b>, tj. na událost (uvolnění zdroje), která ale nenastane.' },
      { t: 'svg', title: 'Uváznutí dvou procesů na dvou zdrojích', x: UPP.deadlockDiagram(), cap: 'P1 drží A a čeká na B, P2 drží B a čeká na A – cyklická čekání, žádný proces neskončí.' },
      { t: 'table', head: ['Přístup', 'Podstata'], rows: [
        ['ignorovat hrozbu', '„Pštrosí algoritmus“ – strč hlavu do písku a předstírej, že se nic neděje. Používá mnoho OS včetně mnoha implementací UNIXů.'],
        ['prevence', 'přijmout opatření, aby uváznutí bylo vysoce nepravděpodobné; např. <b>číslování zdrojů</b> (hierarchické pořadí) – v praxi nejčastěji používané řešení'],
        ['vyhýbání se', 'zajistit, že k uváznutí nikdy nedojde: zdroj se nepřidělí, není-li bezpečná cesta k dokončení procesů – <b>algoritmus bankéře</b>'],
        ['detekce a obnova', 'uváznutí se připustí, detekuje se a obnoví se stav před ním; vesměs drahé a nutnost restartovat aplikace']
      ] },
      { t: 'tip', x: 'Problém uváznutí je v obecném případě <b>efektivně neřešitelný</b> – vždy jde o kompromis mezi cenou řešení a pravděpodobností uváznutí.' }
    ] },
    { title: 'Řízení přístupu: semafory a číslování zdrojů', blocks: [
      { t: 'versus', title: 'Semafory', cols: [
        { h: 'Zámek (binární semafor)', items: ['sdílená proměnná S se dvěma polohami: <b>1 = otevřen, 0 = uzavřen</b>', 'před vstupem proces testuje S; je-li otevřen, pokračuje a hned ho uzavře – nutná jediná instrukce <b>TST (test and set)</b>, mezi testem a uzavřením nesmí dojít k přerušení', 'je-li S = 0, proces přejde do stavu „čeká“; po opuštění oblasti S = 1'] },
        { h: 'Počítaný semafor', items: ['sdílená proměnná typu celé číslo, hodnoty 0 … N (S &gt; 0 otevřen, 0 zavřen)', '<b>wait(S)</b>: je-li S &gt; 0, sníží S o 1, jinak proces čeká', '<b>signal(S)</b>: zvýší S o 1, případně probudí čekající proces(y)'] }
      ], x: 'Binární semafor je jako klíč od jediné toalety: kdo ho má, je uvnitř, ostatní čekají, dokud ho nevrátí. Počítaný semafor je jako parkoviště s N místy: wait znamená zabrat místo (nejsou-li volná, čekáš před závorou) a signal místo uvolnit. Instrukce „test and set“ musí být nedělitelná, jinak by mezi „vidím, že je volno“ a „zavřu“ mohl vklouznout jiný proces a dovnitř by se dostali dva.' },
      { t: 'svg', title: 'Binární semafor a kritická oblast', x: UPP.semaphoreDiagram(), cap: 'Kdo projde přes wait(S), zavře zámek S = 0; ostatní procesy čekají, dokud proces uvnitř nezavolá signal(S).' },
      { t: 'ex', x: '<b>Metoda číslování zdrojů:</b> procesy P1, P2, zdroje A(1), B(2), C(3); zdroje se smí žádat jen ve vzestupném pořadí čísel.<br><b>Bez číslování:</b> P1 získá A → P2 získá B → P1 chce B (čeká) → P2 chce A (čeká) → <b>deadlock</b>.<br><b>S číslováním:</b> P1 získá A(1) → P2 získá B(2) → P1 chce B(2) a čeká → P2 už nesmí chtít A(1), smí jen C(3) → P2 uvolní B(2) → P1 získá B(2) → P1 uvolní A(1) i B(2). Cyklické čekání nevznikne.' }
    ] },
    { title: 'Algoritmus bankéře (Dijkstra)', blocks: [
      { t: 'p', x: 'Analogie s bankéřem, který přiděluje peníze klientům a nechce se dostat do situace, kdy nebude mít prostředky pro potenciálně „bezpečné“ klienty. OS se <b>před přidělením zdroje ujistí, že po přidělení bude systém v bezpečném stavu</b>.' },
      { t: 'def', term: 'Bezpečný stav', x: 'Existuje alespoň jedna <b>posloupnost dokončení procesů</b>, při které každý proces může obdržet zbývající zdroje a dokončit práci. Pokud ano, OS zdroj přidělí; pokud ne, zdroj nepřidělí a proces čeká.' },
      { t: 'p', x: '<b>Příklad:</b> tři procesy a tři typy zdrojů A, B, C. MAX = nejvíc, co proces může požadovat; ALOK = už přiděleno; POTŘ = MAX − ALOK. OS má volné zdroje [A B C] = [3 3 2].' },
      { t: 'grid', head: ['Proces', 'MAX [A B C]', 'ALOK [A B C]', 'POTŘ [A B C]'], rows: [
        ['P1', '7 5 3', '0 1 0', '7 4 3'],
        ['P2', '3 2 2', '2 0 0', '1 2 2'],
        ['P3', '8 1 2', '3 1 2', '5 0 0']
      ] },
      { t: 'grid', head: ['Krok', 'Volné před', 'Proces dokončí (POTŘ ≤ volné)', 'Uvolní se ALOK', 'Volné po'], rows: [
        ['1', '[3 3 2]', 'P2: [1 2 2] ≤ [3 3 2]', '[2 0 0]', '<b>[5 3 2]</b>'],
        ['2', '[5 3 2]', 'P3: [5 0 0] ≤ [5 3 2]', '[3 1 2]', '<b>[8 4 4]</b>'],
        ['3', '[8 4 4]', 'P1: [7 4 3] ≤ [8 4 4]', '[0 1 0]', '<b>[8 5 4]</b>']
      ] },
      { t: 'tip', x: 'Bezpečné pořadí je <b>P2 → P3 → P1</b>. Na konci musí být volné zdroje rovny součtu všeho (ALOK + volné na začátku = [5 2 2] + [3 3 2] = [8 5 4]) – dobrá kontrola výpočtu.' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>ovladač</b> (součást OS, načtený do paměti) a <b>firmware</b> (program v ROM zařízení).',
    'Říct, že kooperativní multitasking přerušuje OS – přerušuje <b>preemptivní</b>; u kooperativního se procesy vzdávají samy.',
    'Zaměnit <b>stránku</b> (jednotka virtuální paměti programu) a <b>rám</b> (jednotka fyzické paměti).',
    'Při algoritmu bankéře porovnávat s MAX místo s POTŘ = MAX − ALOK.',
    'Myslet si, že číslování zdrojů uváznutí „opraví“ – zabrání mu tím, že vyloučí cyklická čekání (prevence).'
  ],
  qa: [
    { q: 'Co je operační systém a jaké jsou jeho hlavní úkoly?', a: 'Souhrn systémových programů – základní programové vybavení. Úkoly: ovládání počítače (uživatelské rozhraní), abstrakce hardwaru (API, ovladače), správa prostředků (procesor, paměť, disk, I/O) a bezpečnost (přístupová práva).' },
    { q: 'Jaké výhody má třívrstvá architektura?', a: 'Aplikace se nestarají o detaily hardwaru, komunikace s HW a společné funkce se řeší centrálně v OS a OS rozumně rozdělí HW zdroje mezi více programů („šéf“, který rozhoduje o střídání).' },
    { q: 'Jaké druhy rozhraní OS znáte?', a: 'Uživatelské rozhraní (CLI, GUI), aplikační rozhraní (API), ovladače zařízení a správa systémových prostředků.' },
    { q: 'Čím se liší ovladač a firmware?', a: 'Ovladač (driver) je program instalovaný do OS, stává se jeho součástí. Firmware je ovládací program uložený v paměti ROM zařízení a spouští se přímo z něj.' },
    { q: 'Čím se liší statická a dynamická knihovna?', a: 'Statická (.lib, .a) se při překladu připojí do spustitelného souboru, ten je pak samostatný. Dynamická (.dll, .so) se nepřidává; program obsahuje jen odkazy a pro běh musí být knihovna dostupná.' },
    { q: 'Proč programy nejsou přenositelné mezi operačními systémy a jak to řeší Java?', a: 'Liší se formát spustitelných souborů (.exe × ELF) a komunikace s OS (API, např. WinAPI). Java vkládá virtuální stroj JVM; program se přeloží do Byte Code, který spustí JVM na libovolné platformě.' },
    { q: 'Jaký je rozdíl mezi kooperativním a preemptivním multitaskingem?', a: 'Kooperativní: procesy samy nabízejí přerušení (Windows 3.x). Preemptivní: proces přeruší OS při události, např. uplynutí časového kvanta (Windows 95+, Linux).' },
    { q: 'Co je virtuální paměť?', a: 'Každý proces má virtuální paměť rozdělenou na stránky (např. 4 kB), může být větší než fyzická. Fyzická paměť je rozdělena na rámy stejné velikosti; OS stránkám přiděluje rámy nebo je odkládá na disk.' },
    { q: 'Co určuje systém souborů a čím se systémy liší?', a: 'Jak jsou soubory uloženy (volné místo, data, metadata, adresáře). Liší se výkonem, omezeními (velikost, znaky ve jménech) a funkcemi (práva, šifrování, komprese, žurnálování).' },
    { q: 'Vyjmenujte stavy procesu.', a: 'Nový, připraven, probíhající, čekající (na zdroj), zablokován (zmrazen) a ukončen.' },
    { q: 'Jak se dělí zdroje a co je kritická oblast?', a: 'Násobně použitelné (sdílitelné), opakovaně použitelné a na jedno použití. Opakovaně použitelný zdroj tvoří kritickou oblast, do které smí současně nejvýše jeden (nebo předem daný počet) proces.' },
    { q: 'Co je uváznutí a jak ho lze řešit?', a: 'Všechny procesy čekají na událost, která nenastane. Řešení: ignorovat (pštrosí algoritmus), prevence (číslování zdrojů), vyhýbání (algoritmus bankéře), detekce a obnova.' },
    { q: 'Jak funguje binární a počítaný semafor?', a: 'Binární: S = 1 otevřen, 0 zavřen; test a uzavření jednou nedělitelnou instrukcí TST. Počítaný: wait(S) sníží S o 1 (je-li S &gt; 0, jinak čeká), signal(S) zvýší S o 1 a probudí čekající.' },
    { q: 'Najděte bezpečné pořadí: volné [3 3 2]; POTŘ P1 = [7 4 3], P2 = [1 2 2], P3 = [5 0 0]; ALOK P1 = [0 1 0], P2 = [2 0 0], P3 = [3 1 2].', a: 'P2 (volné → [5 3 2]), pak P3 (→ [8 4 4]), nakonec P1 (→ [8 5 4]); bezpečné pořadí P2, P3, P1.' }
  ]
});
