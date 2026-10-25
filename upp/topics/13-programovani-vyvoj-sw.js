registerTopic({
  id: 'programovani-vyvoj-sw', order: 13, icon: '👨‍💻', title: 'Program, programovací jazyky a metody vývoje software', src: 'podklady', lec: [6],
  where: 'Přednáška 6',
  summary: 'Program a programovací jazyk (syntaxe, sémantika), druhy jazyků, zápis sekvence, selekce a cyklů v pseudokódu a C++, kompilátor × interpret, virtuální stroj, komponentová architektura a událostmi řízené aplikace, UML, vodopád a agilní vývoj.',
  vocab: [
    { w: 'Program', x: 'Formální zápis algoritmu v programovacím jazyce – posloupnost příkazů, instrukcí strojového kódu nebo označení hotových úseků a podprogramů.' },
    { w: 'Syntaxe', x: 'Popisuje použití a vzhled prvků programu (kde se smí / musí objevit jaký znak nebo klíčové slovo).' },
    { w: 'Sémantika', x: 'Popisuje význam slov a konstrukcí zapsaných podle pravidel syntaxe.' },
    { w: 'Kompilátor / interpret', x: 'Překlad celého zdrojového textu najednou × překlad a okamžité provedení po částech.' },
    { w: 'Virtuální stroj', x: 'Virtualizované prostředí, ve kterém lze spouštět software na abstraktním stroji (JVM, .NET, emulátor).' },
    { w: 'UML', x: 'Unified Modeling Language – sjednocený modelovací jazyk pro grafický zápis etap vývoje (zejména objektově orientovaných) systémů.' },
    { w: 'Sprint (iterace)', x: 'V agilním vývoji cyklus: analýza změny → implementace → předvedení zákazníkovi.' }
  ],
  key: [
    '<b>Program</b> = zápis algoritmu v programovacím jazyce; <b>syntaxe</b> = jak se píše, <b>sémantika</b> = co to znamená.',
    '<b>Jazyky:</b> nižší (assembler) × vyšší; vyšší dělíme na <b>neprocedurální</b> (funkcionální, logické, dotazovací) a <b>procedurální</b> (strukturované, objektové).',
    '<b>Překlad:</b> kompilátor (celý text, jednou, spustitelný kód) × interpret (po příkazech, hned se provede, pomalejší).',
    'Aplikace má <b>3 komponenty:</b> prezentační logika, aplikační logika, logika přístupu k datům; GUI program je <b>řízený událostmi</b>.',
    '<b>Vodopád:</b> analýza → návrh → implementace → testování a zavedení → provoz a údržba; <b>agilní:</b> krátké iterace (sprinty) s předvedením zákazníkovi.'
  ],
  sections: [
    { title: 'Program a programovací jazyk', blocks: [
      { t: 'def', term: 'Program', x: 'Formální zápis algoritmu ve zvoleném programovacím jazyce.', items: ['posloupnost příkazů programovacího jazyka', 'nebo instrukcí strojového kódu', 'nebo označení již hotových úseků programu či podprogramů'] },
      { t: 'def', term: 'Programovací jazyk', x: 'Speciální jazyk, ve kterém programátor formuluje postup řešení problému (algoritmus).', items: ['zápis je zároveň <b>interpretovatelný počítačem</b> (obvykle po překladu do strojového kódu)'] },
      { t: 'versus', cols: [
        { h: 'Syntaxe', items: ['popisuje použití a <b>vzhled</b> jednotlivých prvků programu (znaků, slov)', 'určuje, kde se může nebo musí objevit speciální znak nebo klíčové slovo'] },
        { h: 'Sémantika', items: ['popisuje <b>význam</b> (obsah) slov a konstrukcí', 'vztahy konstrukcí zapsaných v souladu s pravidly syntaxe'] }
      ], x: 'Syntaxe je gramatika: věta „Kočka pes honí zelená“ je gramaticky špatně, počítač ji nepřeloží. Sémantika je smysl: věta „Bezbarvé zelené myšlenky zuřivě spí“ je gramaticky v pořádku, ale nic neznamená. Program může mít bezchybnou syntaxi (přeloží se) a přesto špatnou sémantiku – dělá něco jiného, než jsme chtěli. Kompilátor hlídá syntaxi, sémantiku si musí pohlídat programátor testováním.' }
    ] },
    { title: 'Druhy programovacích jazyků', blocks: [
      { t: 'tree', title: 'Dělení podle míry abstrakce a stylu', root: { h: 'Programovací jazyky', kids: [
        { h: 'Nižší (strojově orientované)', x: 'přímo strojové instrukce nebo jejich symbolické označení – assembler' },
        { h: 'Vyšší', x: 'abstraktní příkazy bližší lidskému myšlení; nutný překlad do strojového kódu', kids: [
          { h: 'Neprocedurální (deklarativní)', x: 'cíl (co), ne postup (jak) – algoritmus je na interpretu', kids: [
            { h: 'Funkcionální', x: 'APL, Lisp, Scheme' },
            { h: 'Logické', x: 'Prolog' },
            { h: 'Dotazovací', x: 'SQL' }
          ] },
          { h: 'Procedurální (imperativní)', x: 'přesný postup (algoritmus), jak problém řešit', kids: [
            { h: 'Strukturované', x: 'Ada, Algol, Basic, Pascal, C' },
            { h: 'Objektově orientované', x: 'čisté: Smalltalk, Java · hybridní: Object Pascal, C++, Perl, Python, PHP' }
          ] }
        ] }
      ] } },
      { t: 'ul', items: [
        '<b>Funkcionální jazyky:</b> provedení programu je posloupnost vzájemně ekvivalentních výrazů, které se postupně zjednodušují; výsledek je výraz, který nelze dále zjednodušit.',
        '<b>Logické jazyky:</b> založené na matematické logice (výrokový a predikátový počet); programování = definice vlastností a pravidel ve tvaru implikace a řešení cíle <b>dokazovačem vět</b> (obvykle kontradikcí).',
        '<b>Dotazovací jazyky:</b> ovládání databáze příkazy (dotazy) – manipulace s daty, definice datových struktur, řízení dat; představitel SQL (Structured Query Language).',
        '<b>Strukturované jazyky:</b> program se dělí na procedury či funkce a lze použít jen vybrané struktury (sekvence, selekce, iterace); ostatní (např. příkaz skoku) nejsou povoleny nebo nedoporučeny.',
        '<b>Objektově orientované jazyky:</b> základem jsou <b>objekty</b> – prvky modelované reality, které si pamatují svůj stav a navenek poskytují <b>operace (metody)</b> pro komunikaci (zasílání zpráv). Hybridní jazyky rozšiřují strukturované principy o objektový přístup.'
      ] }
    ] },
    { title: 'Implementace algoritmu v programu', blocks: [
      { t: 'flow', title: 'Fáze implementace algoritmu', steps: [
        { h: 'Úprava algoritmu', x: 'doplnění pro konkrétní programovací jazyk' },
        { h: 'Základní struktury', x: 'sekvence, selekce, iterace ve zvoleném jazyce' },
        { h: 'Překlad do kódu počítače', x: 'interpret × kompilátor' }
      ] },
      { t: 'grid', head: ['Konstrukce', 'Pseudokód', 'C / C++'], rows: [
        ['<b>sekvence</b> (složený příkaz)', 'začátek<br>&nbsp;&nbsp;Akce1; Akce2; Akce3;<br>konec', '{ Akce1; Akce2; Akce3; }'],
        ['<b>selekce</b>', 'jestliže Podmínka<br>pak Akce1<br>jinak Akce2;', 'if (Podmínka) { Akce1; }<br>else { Akce2; };'],
        ['<b>iterace s podmínkou na začátku</b>', 'dokud Podmínka<br>opakuj Akce;', 'while (Podmínka) { Akce; };'],
        ['<b>iterace s podmínkou na konci</b>', 'opakuj Akce<br>dokud Podmínka;', 'do { Akce; }<br>while (Podmínka);'],
        ['<b>iterace s pevným počtem</b> (for-cyklus)', 'pro i od dolníMez<br>do horníMez opakuj Akce;', 'for (i = dolníMez; i &lt;= horníMez; i++)<br>{ Akce; };']
      ] },
      { t: 'p', x: 'For-cyklus provede akci právě <b>(horníMez − dolníMez + 1)</b> krát. Např. pro i od 1 do 10 se tělo provede 10 − 1 + 1 = 10×.' },
      { t: 'ex', x: '<b>MOD A, B v C++:</b> cin &gt;&gt; A; cin &gt;&gt; B; MOD = A; while (MOD &gt;= B) { MOD = MOD − B; } cout &lt;&lt; MOD; – stejný algoritmus jako v pseudokódu (čti, piš → cin, cout).' },
      { t: 'warn', x: 'V ukázce kódu MOD ve slajdu je u C++ nadbytečná uzavírací složená závorka za cyklem while (závorky se nepárují) – v programu by to byla syntaktická chyba.' }
    ] },
    { title: 'Překlad zdrojového programu: kompilátor, interpret, virtuální stroj', blocks: [
      { t: 'versus', cols: [
        { h: 'Kompilátor', items: ['překlad <b>celého zdrojového textu najednou</b>, většinou ve více fázích (průchodech)', 'výsledkem je program ve spustitelném kódu počítače', 'překlad se provádí <b>jen jednou</b>, znovu pouze po změně programu'] },
        { h: 'Interpret', items: ['překlad <b>po částech</b> (příkazech, skupinách)', 'přeložená část se <b>ihned provede</b>', 'snazší kontrola sémantiky, ale <b>mnohem vyšší nároky na čas</b>'] }
      ], x: 'Kompilátor je jako překladatel knihy: přeloží celou knihu předem a pak ji čteš v češtině kolikrát chceš, překlad už se neopakuje. Interpret je jako tlumočník na schůzce: překládá větu po větě za běhu, takže hned reaguješ, ale tlumočit musí při každé schůzce znovu, a je to tedy pomalejší.' },
      { t: 'def', term: 'Virtuální stroj', x: 'Vytváří <b>virtualizované prostředí mezi platformou počítače a operačním systémem</b>, ve kterém může koncový uživatel provozovat software na abstraktním stroji.', items: ['<b>aplikační virtuální stroj</b> (Java Virtual Machine, .NET …; používá interpret nebo kompilaci): aplikace psaná pro virtuální stroj může běžet na kterékoli platformě, není třeba oddělených verzí pro každý počítač a OS', '<b>emulátor</b> je program umožňující běh aplikací nebo OS na hardwaru, pro který nebyly napsány'] },
      { t: 'svg', title: 'Kompilátor, interpret a virtuální stroj', x: UPP.translateDiagram(), cap: 'Kompilátor přeloží celý program jednou do spustitelného kódu; interpret překládá a provádí příkaz po příkazu a při každém spuštění znovu; virtuální stroj (JVM) spouští mezikód (Byte Code), který běží na každé platformě.' }
    ] },
    { title: 'Komponentová architektura aplikací a události', blocks: [
      { t: 'icons', title: 'Tři komponenty aplikace (uživatelského software)', items: [
        { i: '🖼️', h: 'Prezentační logika', x: 'uživatelské rozhraní' },
        { i: '⚙️', h: 'Aplikační logika', x: 'business logika, obchodní služby' },
        { i: '🗄️', h: 'Logika přístupu k datům', x: 'datové služby, správa dat' }
      ] },
      { t: 'p', x: 'Komponenty mohou být umístěny různě (na serveru, na klientovi …) a navzájem komunikují – proto je nutné <b>jednotné rozhraní</b>. Uživatelské rozhraní aplikace je <b>textové</b> (Console, příkazový řádek) nebo <b>grafické</b> (okna, formuláře).' },
      { t: 'def', term: 'Program řízený událostmi', x: 'Běh programu s grafickým rozhraním je řízen <b>událostmi</b> – program něco vykonává, jen když událost vznikne.', items: ['klepnutí (Click), poklepání (DoubleClick), přesunutí myši (MouseMove), otočení kolečka', 'stisk či uvolnění klávesy', '<b>časovač</b> (generování impulsů)', 'program sám (reaguje na událost jinou událostí)'] },
      { t: 'tip', x: '<b>Obsluha události:</b> aby program na událost reagoval, připojí se k ní <b>obslužný podprogram</b> – relativně samostatný kus programu, ve kterém je zapsána činnost, která se má provést.' },
      { t: 'svg', title: 'Tři komponenty aplikace a obsluha události', x: UPP.tiersDiagram(), cap: 'Komponenty spolu komunikují přes jednotné rozhraní; GUI program na událost reaguje připojeným obslužným podprogramem.' }
    ] },
    { title: 'Metodika vývoje aplikací a UML', blocks: [
      { t: 'p', x: 'Vývoj by měl být podpořen metodikou. Tvorba aplikací se obvykle člení do tří částí:' },
      { t: 'flow', steps: [
        { h: 'Zadání projektu', x: 'požadavky zákazníka, záměr a konceptuální návrh řešení' },
        { h: 'Projekce', x: 'detailní popis, všechny modely (diagram užití, datový model, stavový diagram …), návrh architektury, popřípadě prototyp' },
        { h: 'Implementace', x: 'aplikace vyrobená přesně podle zadání z projekční fáze' }
      ] },
      { t: 'def', term: 'UML (Unified Modeling Language)', x: 'Sjednocený modelovací jazyk pro grafický zápis různých etap vývoje programových systémů (především objektově orientovaných).', items: ['vymysleli ho <b>Grady Booch, James Rumbaugh a Ivar Jacobson</b>', 'skládá se z grafických prvků, které se kombinují do diagramů'] },
      { t: 'table', head: ['Skupina diagramů UML', 'Vybrané diagramy'], rows: [
        ['<b>Diagramy chování</b> (Behavior)', 'případů užití (Use case) · stavový (State chart) · činností (Activity)'],
        ['<b>Strukturální</b> (Structure)', 'tříd (Class) · objektů · komponent · kombinovaný strukturální · balíčků · nasazení'],
        ['<b>Interakční</b> (Interaction)', 'spolupráce (Collaboration) · komunikací · sekvenční (Sequence) · přehledový diagram interakcí']
      ] }
    ] },
    { title: 'Vodopád a agilní vývoj', blocks: [
      { t: 'svg', title: 'Tradiční (vodopádový) a agilní (iterativní) vývoj', x: UPP.lifecycleDiagram(), cap: 'Vodopád prochází fáze jednou za sebou; agilní vývoj opakuje malý „vodopád“ v každé iteraci (sprintu) a po každé předvede hotový kousek.' },
      { t: 'ol', items: [
        '<b>Analýza</b> – specifikace uživatelských požadavků, konceptuální a procesní model.',
        '<b>Návrh</b> – platformově nezávislý model, návrh modulů, uživatelského rozhraní, rozhraní na další aplikace, fyzické struktury a migrace dat, testovacích případů.',
        '<b>Implementace</b> – platformově specifická realizace, uživatelská a programátorská dokumentace, protokol o výsledcích testů (akceptační, funkční …).',
        '<b>Testování a zavedení do provozu</b> – nasazení vyvinutého a otestovaného systému.',
        '<b>Provoz a údržba</b> – zajištění provozu, údržba a rozvoj podle vývoje potřeb uživatelů.'
      ] },
      { t: 'p', x: '<b>Agilní vývoj</b> začíná <b>nultou iterací</b> (krátká analýza a naprogramování základní činnosti tak, aby byl hotový předvedení schopný kousek aplikace). Pak se opakuje: <b>analýza změny</b> (výběr, co se bude implementovat, návrh změn) → <b>implementace</b> (nejdelší část, manažer kontroluje plnění úkolů a odstraňuje překážky) → <b>předvedení zákazníkovi</b> (ukazuje se jen skutečně dokončená práce, zákazník vybere, co dál). Tyto tři body tvoří jednu <b>iteraci (sprint)</b>, opakují se až do ukončení vývoje (úspěch, odložení projektu, došly peníze, změna priorit klienta …); pak následuje údržba a rozvoj, rovněž v iteracích.' },
      { t: 'versus', cols: [
        { h: 'Tradiční (vodopád)', items: ['nejprve analýza, pak návrh, programování a až po všech programátorských pracích uživatelské testy', 'neorientuje se na včasnou eliminaci rizik – hlavní rizika neúspěchu zůstávají dlouho neřešena, očekávání uživatelů se poprvé střetnou s aplikací až v uživatelských testech'] },
        { h: 'Iterativní (agilní)', items: ['vychází z vodopádu, který se aplikuje na každou iteraci – v projektu proběhne několik „vodopádů“', 'každá iterace: sběr a analýza požadavků, návrh, implementace, ověření kvality a integrace'] }
      ], x: 'Vodopádem se staví dům podle jediného plánu: klient poprvé vejde dovnitř, až když je hotová střecha, a teprve tehdy zjistí, že chtěl jinou dispozici – oprava je drahá. Agilně se staví po místnostech: po každé hotové místnosti ji klient uvidí, řekne, co změnit, a plán se průběžně upraví. Rizika se tak odhalí brzy a po částech.' }
    ] }
  ],
  mistakes: [
    'Zaměnit syntaxi (zápis) a sémantiku (význam): syntakticky správný program může dělat něco jiného, než jsme zamýšleli.',
    'Říct, že interpret přeloží program jednou a pak běží rychleji – to dělá <b>kompilátor</b>; interpret překládá a provádí po částech.',
    'Zaměnit deklarativní jazyky (SQL, Prolog – <i>co</i>) a procedurální (C, Java – <i>jak</i>).',
    'Počítat for-cyklus od dolní do horní meze jako (horní − dolní) opakování – správně je <b>horní − dolní + 1</b>.',
    'Považovat agilní vývoj za „bez analýzy a návrhu“ – každá iterace je malý vodopád (analýza, návrh, implementace, ověření).'
  ],
  qa: [
    { q: 'Co je program a programovací jazyk? Co je syntaxe a sémantika?', a: 'Program je zápis algoritmu v programovacím jazyce. Programovací jazyk je jazyk, jehož zápis je interpretovatelný počítačem (po překladu do strojového kódu). Syntaxe popisuje vzhled a použití prvků programu, sémantika jejich význam.' },
    { q: 'Jak se dělí programovací jazyky?', a: 'Nižší (assembler) a vyšší. Vyšší: neprocedurální (funkcionální – Lisp, logické – Prolog, dotazovací – SQL) a procedurální (strukturované – C, Pascal; objektové – Java, C++).' },
    { q: 'Čím se liší neprocedurální a procedurální jazyky?', a: 'Neprocedurální (deklarativní) specifikují cíl – co se má udělat; algoritmus je na interpretu. Procedurální (imperativní) formulují přesný postup – jak problém řešit.' },
    { q: 'Zapište selekci a cyklus s podmínkou na začátku v C++.', a: 'if (Podmínka) { Akce1; } else { Akce2; }  a  while (Podmínka) { Akce; }.' },
    { q: 'Kolikrát se provede tělo cyklu for (i = 3; i &lt;= 9; i++)?', a: '(horní mez − dolní mez + 1) = 9 − 3 + 1 = 7krát.' },
    { q: 'Porovnejte kompilátor a interpret.', a: 'Kompilátor přeloží celý zdrojový text najednou (v několika průchodech) do spustitelného kódu, překlad se provede jen jednou. Interpret překládá po částech a ihned provádí, má snazší kontrolu sémantiky, ale mnohem vyšší nároky na čas.' },
    { q: 'Co je virtuální stroj a emulátor?', a: 'Virtuální stroj vytváří virtualizované prostředí mezi platformou a OS; aplikace psaná pro něj (Java VM, .NET) běží na kterékoli platformě. Emulátor umožňuje běh aplikací nebo OS na hardwaru, pro který nebyly napsány.' },
    { q: 'Jaké tři komponenty má aplikace?', a: 'Prezentační logiku (uživatelské rozhraní), aplikační logiku (business logika) a logiku přístupu k datům (datové služby). Komunikují přes jednotné rozhraní.' },
    { q: 'Co znamená, že program s GUI je řízen událostmi?', a: 'Program něco vykonává jen při vzniku události (klepnutí, pohyb myši, klávesa, časovač …); k události je připojen obslužný podprogram, který činnost provede.' },
    { q: 'Vyjmenujte fáze vodopádového vývoje.', a: 'Analýza, návrh, implementace, testování a zavedení do provozu, provoz a údržba.' },
    { q: 'Jak probíhá agilní vývoj?', a: 'Nultá iterace (základní předvedený kousek), pak opakovaně: analýza změny → implementace → předvedení klientovi (jeden sprint), dokud vývoj neskončí; pak údržba a rozvoj v iteracích.' },
    { q: 'Jaká je hlavní slabina vodopádového vývoje oproti agilnímu?', a: 'Neřeší včas rizika – očekávání uživatelů se poprvé střetnou s aplikací až v uživatelských testech na konci. Agilní vývoj používá krátké iterace s předvedením hotové práce zákazníkovi.' }
  ]
});
