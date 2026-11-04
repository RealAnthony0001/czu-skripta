registerTopic({
  id: 'vybrane-smlouvy', order: 11, icon: '📝', title: 'Vybrané smlouvy: kupní, o dílo, nájem, darování, směna', src: 'podklady', lec: [6], where: 'Cvičení 3 (3. seminář 4. 11. 2024, III. seminář) + přednáška Mgr. Reichert (vlastnictví, smlouvy, katastr) + vzorové smlouvy a formulář návrhu na vklad',
  summary: 'Nominátní smlouvy z NOZ: kupní (vady, vedlejší ujednání, koupě nemovitosti a vklad do katastru), o dílo, nájem (obecný, bytu, prostoru sloužícího podnikání), pacht, darování, směna, půjčka a výpůjčka. Doplněno vzorovými smlouvami a návrhem na vklad.',
  vocab: [
    {w:'Prodávající × kupující',x:'Prodávající odevzdá věc a umožní nabýt vlastnictví; kupující věc převezme a zaplatí cenu.'},
    {w:'Vada věci',x:'Věc nemá ujednané nebo zákonem stanovené vlastnosti (jakost, množství, provedení) nebo byla dodána jiná věc.'},
    {w:'Záruka za jakost',x:'Prodávající se zaváže, že věc bude po určitou dobu způsobilá k použití nebo si zachová vlastnosti; stačí uvedení doby použitelnosti na obalu.'},
    {w:'Zhotovitel × objednatel',x:'Zhotovitel provede dílo na svůj náklad a nebezpečí; objednatel dílo převezme a zaplatí cenu.'},
    {w:'Pronajímatel × nájemce',x:'Pronajímatel přenechá věc k dočasnému užívání; nájemce platí nájemné. Pacht navíc zahrnuje požívání (výnosy) věci.'},
    {w:'Podnájem',x:'Nájemce dá byt nebo jeho část do užívání třetí osobě, obvykle se souhlasem pronajímatele.'},
    {w:'Dárce × obdarovaný',x:'Dárce bezúplatně převádí dar; obdarovaný není vázán k protiplnění.'},
    {w:'Vklad do katastru',x:'Zápis práva k nemovitosti do katastru nemovitostí na základě návrhu; vlastnictví nemovitosti vzniká až vkladem.'}
  ],
  key: [
    '<b>Kupní smlouva</b> (§ 2079–2183): odevzdat věc a umožnit nabýt vlastnictví × převzít a zaplatit cenu; nebezpečí škody přechází <b>současně s nabytím vlastnictví</b>; u nemovitosti písemně + vklad do katastru.',
    '<b>Práva z vad</b>: podstatné porušení – výměna, oprava, sleva, odstoupení (výběr); nepodstatné – odstranění nebo sleva, později sleva či odstoupení. U spotřebního zboží 24 měsíců.',
    '<b>Vedlejší ujednání</b> (§ 2132–2157): výhrada vlastnictví, zpětná koupě a zpětný prodej, předkupní právo, koupě na zkoušku, výhrada lepšího kupce, cenová doložka.',
    '<b>Smlouva o dílo</b> (§ 2586 an.): zhotovitel na svůj náklad a nebezpečí × objednatel převezme a zaplatí; dílo je provedeno, je-li <b>dokončeno a předáno</b>; skryté vady stavby 5 let.',
    '<b>Nájem</b> (§ 2201 an.): dočasné užívání za nájemné; výpověď nájmu na dobu neurčitou 1 měsíc (movitá) / 3 měsíce (nemovitá); <b>byt</b> § 2235–2301 (písemně, faktický nájem po 3 letech), <b>nebytový prostor</b> § 2302–2315.',
    '<b>Pacht</b> (§ 2332 an.): užívání i požívání věci; výpověď pachtu na dobu neurčitou 6 měsíců, konec pachtovního roku.',
    '<b>Darování</b> (§ 2055 an.): bezúplatně; písemně u věcí zapsaných ve veřejném seznamu; odvolání pro hrubý nevděk (1 rok) a nezaviněnou nouzi dárce.',
    '<b>Koupě nemovitosti</b>: prověřit list vlastnictví → písemná smlouva s ověřenými podpisy → úschova ceny → návrh na vklad (2 000 Kč) → vlastnictví zpětně ke dni podání návrhu.'
  ],
  sections: [
    { title: 'Kupní smlouva: základ', blocks: [
      { t: 'def', term: 'Kupní smlouva (§ 2079)', x: '<b>Prodávající</b> odevzdá kupujícímu věc a umožní mu nabýt vlastnické právo, <b>kupující</b> věc převezme a zaplatí kupní cenu.', items: ['neplyne-li ze smlouvy nebo zvyklostí něco jiného, plní strany současně', 'předmětem je <b>věc</b> (vlastnické právo k věci), ne činnost – úplatná činnost je smlouva příkazního typu, pracovní apod.', 'jedna úprava pro podnikatele i nepodnikatele (§ 2079–2183)'] },
      { t: 'ul', items: [
        '<b>Rozsah úpravy:</b> obecná ustanovení o koupi; koupě movité věci; koupě nemovité věci; vedlejší ujednání; zvláštní ustanovení o prodeji zboží v obchodě; zvláštní ustanovení o koupi závodu.',
        '<b>Podstatné náležitosti:</b> označení stran, dostatečně určité označení předmětu a vůle prodávajícího předmět odevzdat a převést vlastnictví × vůle kupujícího převzít a zaplatit dohodnutou cenu.'
      ] },
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['Kupní cena', 'nemusí být ujednána předem – stačí <b>způsob jejího určení</b> (znalecký posudek, cena obvyklá); nebyla-li určena, platí cena, za niž se týž nebo srovnatelný předmět obvykle prodává (§ 2085 an.)'],
        ['Jakost, množství, provedení', 'dle ujednání; jinak vhodné pro účel patrný ze smlouvy, jinak pro účel obvyklý; podle smluveného vzorku; přibližné množství – odchylka nejvýše 5 %'],
        ['Náklady', 'odevzdání v místě plnění nese prodávající, převzetí kupující'],
        ['Doba plnění', 'běží ode dne účinnosti smlouvy; dodá-li prodávající větší množství, smlouva je uzavřena i na přebytek, ledaže ho kupující bez zbytečného odkladu odmítl'],
        ['Povinnosti prodávajícího', 'odevzdat věc s doklady a umožnit nabytí vlastnictví; povinnost splní, umožní-li kupujícímu nakládat s věcí v místě plnění a včas mu to oznámí; upozorní na vady, o nichž ví'],
        ['Povinnosti kupujícího', 'zaplatit cenu a převzít věc; nemusí platit, dokud si nemohl věc prohlédnout (ledaže předání prohlídku vylučuje)'],
        ['Prodlení kupujícího', 'prodávající musí věc uchovat a má právo ji zadržet, dokud kupující neuhradí účelně vynaložené náklady'],
        ['<b>Nebezpečí škody</b>', 'přechází na kupujícího <b>současně s nabytím vlastnického práva</b>; nabude-li vlastnictví před odevzdáním, má prodávající do odevzdání práva a povinnosti schovatele'],
        ['Koupě movité věci (§ 2085)', 'každá koupě, jejímž předmětem není nemovitá věc; koupě součásti nemovité věci k oddělení (plody, materiál); dodání spotřebního zboží, které je nutné sestavit nebo vytvořit; dodání věci, která se teprve vyrobí'],
        ['Přechod vlastnictví', 'věc určená jednotlivě – účinností smlouvy; určená druhově – dostatečným odlišením od jiných věcí téhož druhu; zapsaná do veřejného seznamu – zápisem'],
        ['Forma', 'movité věci i ústně (písemně je vhodné pro jistotu); <b>nemovitost</b> vždy písemně, podpisy všech stran na téže listině, písemně i změna a zrušení smlouvy']
      ] },
      { t: 'p', x: '<b>Koupě nemovité věci:</b> nemá-li pozemek výměru určenou ve smlouvě, má kupující právo na přiměřenou slevu (není-li výměra zapsána ve veřejném seznamu, jen bylo-li to ujednáno). Neoznámí-li kupující skrytou vadu stavby spojené se zemí pevným základem do <b>pěti let</b> od nabytí, soud mu právo z vad nepřizná, namítne-li to prodávající.' },
      { t: 'p', x: '<b>Prodej zboží v obchodě:</b> dodá-li prodávající věc na místo určené kupujícím, převezme ji kupující při dodání, jinak při prodeji; převzetím nabývá vlastnictví. Při samoobslužném prodeji nabývá vlastnictví <b>zaplacením</b>; do té doby může věc vrátit na místo.' }
    ] },
    { title: 'Vady, záruka a vedlejší ujednání', blocks: [
      { t: 'ul', items: [
        '<b>Vada:</b> věc nemá vlastnosti stanovené v § 2095, 2096 (jakost, množství, provedení); vadou je i dodání jiné věci. Chybějící věci, o kterých plyne z prohlášení prodávajícího či dokladu o předání, že jich bylo dodáno méně, se vadou neřeší.',
        'Právo z vadného plnění zakládá vada, kterou má věc <b>při přechodu nebezpečí škody</b>, i když se projeví později. Projeví-li se vada do <b>6 měsíců</b>, má se za to, že existovala už při převzetí.',
        'Prodávající odpovídá, že věc při převzetí: má ujednané (jinak očekávané či deklarované) vlastnosti; hodí se k účelu, který prodávající uvádí nebo který je obvyklý; odpovídá vzorku; je v odpovídajícím množství, míře či hmotnosti.',
        '<b>Spotřební zboží:</b> kupující může uplatnit právo z vady, která se vyskytne do <b>24 měsíců</b> od převzetí. Je-li na věci, obalu, návodu nebo v reklamě uvedena doba použitelnosti, použijí se ustanovení o <b>záruce za jakost</b>.',
        'Věc s vadou, která nebrání užívání, lze prodat jen za nižší cenu a prodávající na vadu upozorní.'
      ] },
      { t: 'versus', title: 'Podstatné × nepodstatné porušení smlouvy', x: 'Zákon rozlišuje, jak závažná vada je, protože podle toho se liší nároky kupujícího. Při podstatném porušení smlouvy je vada tak závažná, že by kupující věc nekoupil, a proto si může vybrat z celé nabídky práv včetně odstoupení od smlouvy. U nepodstatného porušení musí nejdřív dát prodávajícímu šanci vadu odstranit nebo se spokojit se slevou; odstoupit může až tehdy, když prodávající nápravu nezjedná. Důležité je, že jednou zvolené právo kupující nemůže bez souhlasu prodávajícího měnit. Například u notebooku, který se po týdnu nezapne, jde o podstatné porušení; u škrábance na krytu, který nebrání užívání, o nepodstatné.', cols: [
        { h: 'Podstatné porušení', items: ['výměna věci', 'oprava věci', 'přiměřená sleva z ceny', 'odstoupení od smlouvy', 'volbu sdělí kupující při oznámení vady nebo bez zbytečného odkladu po něm'] },
        { h: 'Nepodstatné porušení', items: ['odstranění vady nebo přiměřená sleva', 'když prodávající vadu včas neodstraní či odmítne: sleva nebo odstoupení', 'jednou provedenou volbu nelze bez souhlasu měnit', 'do odstranění vady nemusí kupující platit část ceny odpovídající odhadem slevě'] }
      ] },
      { t: 'p', x: '<b>Nároky u spotřebitele</b> (vady koupené věci): dodání nové věci bez vad, ledaže je to nepřiměřené; je-li to neúměrné, bezplatné odstranění vady. Právo na novou věc či výměnu součásti má kupující i při opakované vadě po opravě nebo při větším počtu vad, a může odstoupit. Přiměřenou slevu může požadovat, neodstoupí-li a neuplatní-li právo na novou věc, opravu apod., nebo když prodávající nápravu nezjedná v přiměřené době.' },
      { t: 'warn', x: 'Slajdy uvádějí domněnku existence vady při převzetí <b>6 měsíců</b>. <b>(doplněno)</b> U spotřebního zboží se od roku 2023 uvádí prodloužení na 12 měsíců – ověř v § 2161 a v zákoně o ochraně spotřebitele, než se číslo naučíš.' },
      { t: 'table', head: ['Vedlejší ujednání (§ 2132–2157)', 'Obsah'], rows: [
        ['<b>Výhrada vlastnického práva</b> (§ 2132–2134)', 'kupující se stane vlastníkem až <b>úplným zaplacením ceny</b>; nebezpečí škody přechází už převzetím. Proti věřitelům kupujícího působí, jen je-li ujednání veřejnou listinou nebo je písemné s úředně ověřenými podpisy (od ověření); u věci ve veřejném seznamu jen po zápisu'],
        ['<b>Zpětná koupě</b> (§ 2135–2138)', 'kupující je povinen věc na požádání za úplatu převést zpět, v nezhoršeném stavu; prodávající vrátí cenu. Není-li lhůta, platí u movité věci 3 roky, u nemovité 10 let; zavazuje dědice'],
        ['<b>Zpětný prodej</b> (§ 2139)', 'obdobně podle zpětné koupě'],
        ['<b>Předkupní právo</b> (§ 2140–2149)', 'chce-li dlužník věc prodat koupěchtivému, musí ji nabídnout předkupníkovi; předkupník zaplatí v ujednané lhůtě, jinak do 8 dnů (movitá) / 3 měsíců (nemovitá) po nabídce, jinak právo zaniká. Nabídka u nemovitosti písemně; zavazuje dědice; lze sjednat jako právo věcné'],
        ['<b>Koupě na zkoušku</b> (§ 2150–2151)', 'kupuje se s podmínkou, že věc ve zkušební lhůtě kupující schválí; lhůta 3 dny (movitá) / 1 rok (nemovitá). Změny vyvolané zkoušením se nezohledňují'],
        ['<b>Výhrada lepšího kupce</b> (§ 2152–2153)', 'prodávající může dát přednost lepšímu kupci, který se přihlásí v lhůtě 3 dny (movitá) / 1 rok (nemovitá); zda je lepší, rozhoduje prodávající (i při nižší ceně)'],
        ['<b>Cenová doložka</b> (§ 2154–2156)', 'cena se určí dodatečně s přihlédnutím k výrobním nákladům; práva zaniknou, neuplatní-li je oprávněná strana bez zbytečného odkladu po dodání věci']
      ] }
    ] },
    { title: 'Koupě nemovitosti: katastr a vklad', blocks: [
      { t: 'svg', title: 'Koupě nemovitosti krok za krokem', x: ZPN.koupeNemovitosti(), cap: 'Šest kroků od prověření nemovitosti po vlastnictví kupujícího. Žlutě je smlouva, růžově úschova ceny, červeně řízení v katastru, modře výsledek. Peníze se uvolní až podle podmínek smlouvy – nikoli hned po podpisu.' },
      { t: 'def', term: 'Katastr nemovitostí', x: 'Veřejný seznam k evidenci nemovitých věcí na území ČR a právních vztahů k nim.', items: ['eviduje soupis, popis, geometrické zobrazení a polohu nemovitostí podle katastrálních území', 'vedou ho správní orgány: ČÚZK (ústřední správní úřad), zeměměřický úřad, zeměměřické a katastrální inspektoráty a katastrální úřady', 'zákon č. 256/2013 Sb. o katastru nemovitostí a prováděcí vyhlášky (357/2013, 358/2013; vzor formuláře návrhu: 359/2013 Sb.)'] },
      { t: 'table', head: ['Zásada katastru', 'Obsah'], rows: [
        ['Materiální publicita', 'kdo je zapsán, je vlastník (dobrá víra); věcné právo k nemovitosti se musí zapsat; obrana: poznámka spornosti'],
        ['Intabulační', 'právo vzniká až <b>vkladem</b> (zápisem); poplatek 2 000 Kč; záznamy jsou omezené'],
        ['Priority', 'rozhoduje pořadí zápisů – právní účinky vkladu nastávají ke dni podání návrhu (nově se poznamenává hodina a minuta)'],
        ['Dispoziční (návrhová)', 'řízení nelze zahájit bez návrhu; návrh lze podat i datovou schránkou'],
        ['Legality', 'katastr neprošetřuje nad rámec katastrálního zákona'],
        ['Formální publicity', 'co je zapsáno, je veřejně přístupné (nově i ceny nemovitostí)']
      ] },
      { t: 'ul', items: [
        '<b>Nabytí vlastnictví nemovitosti:</b> převod (kupní nebo darovací smlouva) = vklad, poplatek 2 000 Kč; přechod (dědění, příklep v dražbě, rozhodnutí orgánu) = záznam, zdarma.',
        '<b>Nezapisují se</b> např. podzemní a dočasné stavby (vinné sklepy); budova je nadzemní stavba prostorově soustředěná, navenek převážně uzavřená obvodovými stěnami a střešní konstrukcí.',
        'Zásada <b>superficies solo cedit</b> (§ 506): stavba je součástí pozemku, kromě dočasných staveb; stroj (montážní linka) není součástí pozemku.'
      ] },
      { t: 'p', x: '<b>Vzorová kupní smlouva k nemovitosti – části:</b>' },
      { t: 'ul', items: [
        'hlavička: označení smluvních stran',
        'I. Předmět převodu – definice předmětu koupě a označení nemovitých věcí podle katastrálního zákona',
        'II. Prohlášení k předmětu převodu (jeden vlastník × více, SJM, rozestavěná budova, věcná břemena…)',
        'III. Kupní cena – výše a způsob zaplacení',
        'IV. Převzetí nemovité věci',
        'V. Další prohlášení a závazky stran (vůči závazkům, břemenům, dluhům, bydlišti)',
        'VI. Vklad do katastru – prohlášení k podmínkám podání návrhu',
        'VII. Trvání smlouvy, odstoupení, smluvní pokuty',
        'VIII. Závěrečná ustanovení'
      ] },
      { t: 'table', head: ['Část formuláře návrhu na vklad (§ 14 zák. 256/2013 Sb.)', 'Co obsahuje'], rows: [
        ['I. Účastníci řízení', 'fyzické osoby (jméno, rodné číslo, adresy, zástupce, podpis) a právnické osoby (název, IČO, sídlo, ID datové schránky, jednající osoba)'],
        ['II. Označení práv', 'II.A práva ke stavbám a pozemkům; II.B jednotky podle zákona o vlastnictví bytů; II.C jednotky podle občanského zákoníku'],
        ['III. Sdělení pro katastrální úřad', 'volitelné kontaktní údaje (i pro informaci o zaplombování); žádost o zápis poznámek (např. výhrada přednostního pořadí, závazek nezajistit zástavním právem v lepším pořadí)'],
        ['IV. Listy formuláře', 'počet samostatných listů jednotlivých částí'],
        ['V. Přílohy', 'stručný název a počet příloh (smlouva, plná moc…)']
      ] },
      { t: 'ex', x: '<b>Modelové řešení – koupě bytu za 6,5 mil. Kč</b> (zadání III. semináře): prodávající chce zaplatit hned na svůj účet, je ženatý, na LV je zástavní právo banky a byt užívá nájemce.', items: [
        '<b>Prověření:</b> list vlastnictví v nahlížení do katastru (vlastník, zástavy, plomby, věcná břemena). Zápis do katastru není „formalita“ – vlastníkem se kupující stane až vkladem.',
        '<b>Smlouva:</b> písemná, podpisy na téže listině, úředně ověřené pro katastr; nemovitost přesně označená podle katastru (parcela, LV, katastrální území).',
        '<b>Cena:</b> neplatit předem na účet prodávajícího, ale do <b>úschovy</b> (advokátní, notářské, bankovní) s uvolněním podle podmínek smlouvy, tj. po podání návrhu a vkladu. Část ceny se použije na výmaz zástavy banky – vzor smlouvy dává kupujícímu právo odstoupit, pokud zástava není vymazána do 60 dnů.',
        '<b>Rizika:</b> manželství prodávajícího (SJM – nutný souhlas manžela <b>(doplněno)</b>), zástavní právo banky (výmaz, přípis banky o zůstatku úvěru), nájem (při změně vlastníka přechází práva a povinnosti z nájmu na nového vlastníka; prohlášení o nájemních vztazích do smlouvy).',
        '<b>Vklad:</b> návrh se podepisuje současně se smlouvou; poplatek 2 000 Kč; účinky zpětně ke dni podání.',
        '<b>Závěr:</b> pokud prodávající odmítne úschovu a trvá na platbě před podáním návrhu, smlouvu <b>nepodepsat</b> – bezpečnější je úschova nebo platba po podání návrhu.'
      ] },
      { t: 'ex', x: '<b>Navazující úkol – darování bytu rodičů dceři</b> s doživotním bydlením a ochranou před prodejem:', items: [
        'darovací smlouva písemně (věc zapsaná ve veřejném seznamu, § 2057), vklad do katastru',
        'rodiče zůstanou chráněni <b>služebností bytu</b> (doživotní užívání) a ujednáním o <b>zákazu zcizení a zatížení</b>; obojí lze zapsat do katastru, jinak nepůsobí vůči třetím osobám',
        'daňové souvislosti ze zadání jsou mimo podklady <b>(doplněno)</b> – ověř v zákoně o daních z příjmů'
      ] }
    ] },
    { title: 'Smlouva o dílo', blocks: [
      { t: 'def', term: 'Smlouva o dílo (§ 2586)', x: '<b>Zhotovitel</b> provede na svůj náklad a nebezpečí pro objednatele dílo, <b>objednatel</b> dílo převezme a zaplatí cenu.', items: ['dílem je zhotovení určité věci (nespadá-li pod kupní smlouvu), údržba, oprava nebo úprava věci, nebo činnost s jiným výsledkem (§ 2587); vždy i zhotovení, údržba, oprava nebo úprava stavby', 'písemná forma se nevyžaduje', 'zhotovitel je nově oprávněn zhotovenou věc prodat, jestliže ji objednatel včas nepřevezme'] },
      { t: 'ul', items: [
        '<b>Podstatné náležitosti:</b> označení stran, vymezení díla, závazek provést dílo na vlastní náklad a nebezpečí, závazek objednatele dílo převzít a zaplatit cenu.',
        '<b>Cena</b> se určí pevnou částkou, odkazem na rozpočet nebo odhadem (§ 2586 odst. 2). Při pevné ceně či rozpočtu nelze žádat změnu ceny proto, že dílo vyžádalo jiné úsilí nebo náklady (§ 2620 odst. 1). Nastane-li zcela mimořádná nepředvídatelná okolnost, která dokončení podstatně ztěžuje, může soud rozhodnout o spravedlivém zvýšení ceny nebo o zrušení smlouvy (§ 2620 odst. 2).',
        'Požaduje-li zhotovitel zvýšení ceny o více než <b>10 %</b> oproti rozpočtu, může objednatel bez zbytečného odkladu odstoupit a nahradí zhotoviteli část ceny odpovídající částečnému provedení (§ 2622 odst. 3).'
      ] },
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['Provádění', 'zhotovitel příkazům objednatele nepodléhá, objednatel má právo <b>kontroly</b> provádění díla'],
        ['Provedení a převzetí', 'dílo je provedeno, je-li <b>dokončeno a předáno</b> (§ 2604); dokončeno je, je-li předvedena jeho způsobilost sloužit účelu. Objednatel převezme dokončené dílo s výhradami nebo bez (§ 2605) – musí je převzít'],
        ['Vlastnictví a nebezpečí', 'převzetím nabývá objednatel vlastnictví a přechází na něj nebezpečí škody, nestalo-li se tak dříve'],
        ['Vady díla', 'dílo má vadu, neodpovídá-li smlouvě (§ 2615); práva objednatele z vad se řídí obdobně kupní smlouvou, objednatel však nemůže žádat náhradní dílo, jestliže předmět nelze vrátit nebo předat'],
        ['Stavba', 'objednatel nemůže odmítnout převzetí pro ojedinělé drobné vady, které nebrání užívání ani ho podstatně neomezují (§ 2628); skryté vady lze namítat <b>5 let</b> po převzetí stavby, stejně vady projektové dokumentace (§ 2629); zhotovitel se zprostí, způsobila-li vadu jen chyba v dokumentaci od osoby zvolené objednatelem (§ 2630 odst. 2)']
      ] },
      { t: 'table', head: ['Kupní smlouva', 'Smlouva o dílo'], rows: [
        ['předmět je věc (převod vlastnictví)', 'předmět je výsledek činnosti (zhotovení, oprava, úprava)'],
        ['nebezpečí škody přechází s nabytím vlastnictví', 'nebezpečí škody přechází převzetím díla'],
        ['kupní cena', 'cena určená pevně, rozpočtem nebo odhadem'],
        ['spotřební zboží k sestavení se považuje za koupi', 'zhotovení věci, pokud nespadá pod kupní smlouvu']
      ] },
      { t: 'tip', x: 'Hotovou věc koupím → kupní smlouva. Věc nechám zhotovit, opravit nebo upravit → smlouva o dílo. Opravím auto = dílo; koupím auto = koupě.' },
      { t: 'ex', x: '<b>Vzorová smlouva o dílo</b> (dřevostavba): objednatel předá stavební povolení a staveniště; cena podle rozpočtu s fakturací zálohou, měsíčními soupisy a konečnou fakturou; záruka za jakost 60 měsíců od předání; smluvní pokuta objednatele 0,5 % z dlužné částky za den prodlení, zhotovitele 500 Kč za den prodlení s dokončením; vyšší moc posouvá termín nejdéle o 30 dní. Jde o příklad ujednání, ne o zákonné hodnoty.' }
    ] },
    { title: 'Nájem a pacht', blocks: [
      { t: 'def', term: 'Nájemní smlouva (§ 2201)', x: '<b>Pronajímatel</b> přenechá nájemci věc k dočasnému užívání, <b>nájemce</b> za to platí nájemné.', items: ['lze pronajmout věc nemovitou, nezuživatelnou věc movitou, část nemovité věci i věc, která teprve vznikne, lze-li ji dostatečně určit (§ 2202)', 'je-li věc zapsána ve veřejném seznamu, zapíše se i nájemní právo, navrhne-li to vlastník nebo s jeho souhlasem nájemce (§ 2203)', 'neujednají-li strany dobu, jde o nájem na <b>dobu neurčitou</b>; nájem na dobu delší než 50 let se považuje za neurčitý (první půlstoletí lze vypovědět jen z ujednaných důvodů)'] },
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['Povinnosti pronajímatele', 'přenechat věc k ujednanému nebo obvyklému účelu; udržovat ji ve stavu k užívání; zajistit nerušené užívání. Odevzdá věc v ujednané době, jinak den po vyzvání, se vším potřebným'],
        ['Údržba', 'běžnou údržbu provádí nájemce, ostatní údržbu a nezbytné opravy pronajímatel (ledaže se zavázal jinak)'],
        ['Povinnosti nájemce', 'užívat věc jako řádný hospodář k ujednanému či obvyklému účelu, platit nájemné, oznámit vadu hned po zjištění'],
        ['Užívací právo třetí osoby', 'se souhlasem pronajímatele (při písemné smlouvě písemně); bez souhlasu hrubé porušení; jen na dobu nájmu; nájemce odpovídá za třetí osobu jako za sebe'],
        ['Změna vlastníka', 'práva a povinnosti z nájmu přejdou na nového vlastníka; strana nemůže vypovědět nájem jen kvůli změně vlastníka (§ 2222)'],
        ['Výpověď nájmu na dobu neurčitou', 'výpovědní doba <b>1 měsíc</b> (movitá věc) / <b>3 měsíce</b> (nemovitá); výpověď nemusí být odůvodněna; vypovídající poskytne druhé straně přiměřené odstupné'],
        ['Výpověď bez výpovědní doby', 'zvlášť závažné porušení povinností, které působí značnou újmu (§ 2232); zaniká-li věc zčásti nebo je nepoužitelná (nájemce)'],
        ['Konec nájmu', 'nájemce odevzdá věc tam, kde ji převzal, ve stavu při převzetí (s obvyklým opotřebením); vezme si, co vložil; nemovitost vyklizenou. Užívá-li dál a pronajímatel ho do 1 měsíce nevyzve k odevzdání, nájem se obnoví (nejvýše na 1 rok)']
      ] },
      { t: 'p', x: '<b>Nejvyšší soud</b> (28 Cdo 2747/2004): nájem ujednaný na dobu přesahující průměrný lidský život (100 let) se považuje za nájem na dobu neurčitou – zásah do autonomie vůle.' },
      { t: 'table', head: ['Nájem bytu (§ 2235–2301)', 'Pravidlo'], rows: [
        ['Byt', 'místnost nebo soubor místností, které jsou částí domu, tvoří obytný prostor a jsou určeny a užívány k bydlení (§ 2236); platný je i pronájem bytu vhodného a zdravotně způsobilého, který nemá rozhodnutí stavebního úřadu. Lze pronajmout i celý dům, houseboat či obytný vůz; na krátkodobé ubytování se úprava nevztahuje'],
        ['Forma', 'písemná; pronajímatel však <b>nemůže namítat neplatnost</b> pro nedostatek formy (§ 2237)'],
        ['<b>Faktický nájem</b> (§ 2238)', 'užívá-li nájemce byt 3 roky v dobré víře, že nájem je po právu, považuje se smlouva za řádně uzavřenou'],
        ['Nájemné', 'pevnou částkou, za měsíc; neujednáno-li, v místě obvyklé; platí se předem, nejpozději do 5. dne období; strany mohou ujednat roční zvyšování (§ 2248). Nezbytné služby: voda, odvod odpadních vod, teplo, odpad, osvětlení a úklid společných částí, příjem TV a rozhlasu, komíny, výtah'],
        ['Úpravy bytu', 'nájemce strpí jen úpravy, které nesníží hodnotu bydlení, nebo je nařídil orgán, nebo hrozí závažná újma; jinak souhlas. Vyžaduje-li to vyklizení, pronajímatel sdělí povahu prací nejméně 3 měsíce předem a zaplatí přiměřenou zálohu'],
        ['Smluvní pokuta', 'k ujednání o smluvní pokutě nájemci a k zjevně nepřiměřeným povinnostem se nepřihlíží'],
        ['<b>Podnájem</b>', 'nájemce, který v bytě sám trvale nebydlí, potřebuje souhlas pronajímatele (§ 2275 odst. 1); žádost i souhlas písemně, souhlas je dán, nevyjádří-li se pronajímatel do 1 měsíce. Bydlí-li tam nájemce sám trvale, souhlas není třeba (§ 2274)'],
        ['Nový člen domácnosti', 'nájemce to oznámí pronajímateli nejpozději do 2 měsíců; neoznámení může být důvodem výpovědi (§ 2288 odst. 1 písm. d)'],
        ['Zvíře', 'souhlas pronajímatele s domácím zvířetem nájemce se nevyžaduje'],
        ['<b>Přechod nájmu</b>', 'smrtí nájemce přejde nájem na člena domácnosti, který v bytě žil a nemá vlastní byt; jde-li o jinou osobu než manžela, partnera, rodiče, sourozence, zetě, snachu, dítě nebo vnuka, jen s (písemným) souhlasem pronajímatele. Skončí nejpozději za 2 roky od přechodu – to neplatí, bylo-li osobě 70 let; je-li mladší 18 let, skončí nejpozději dosažením 20 let. Splňuje-li víc osob, přejde nájem na všechny společně a nerozdílně'],
        ['Odevzdání bytu', 'v den konce nájmu; odevzdán je, obdrží-li pronajímatel klíče a nic mu nebrání v užívání. Opustí-li nájemce byt zjevně definitivně, je byt odevzdán ihned'],
        ['<b>Zánik</b>', 'uplynutím doby, odstoupením, výpovědí. Pokračuje-li nájemce 3 měsíce po konci nájmu a pronajímatel ho písemně nevyzve k opuštění, nájem se obnoví na stejnou dobu, nejvýše na 2 roky']
      ] },
      { t: 'flow', title: 'Výpověď nájmu bytu pronajímatelem', steps: [
        { h: 'Zvolit důvod', x: 'jen zákonný důvod (viz níže)' },
        { h: 'Písemná výpověď', x: 'musí dojít druhé straně; výpovědní doba běží od 1. dne následujícího měsíce' },
        { h: 'Poučení', x: 'o právu vznést námitky a navrhnout přezkoumání soudem – jinak je výpověď neplatná' },
        { h: 'Výpovědní doba 3 měsíce', x: 'nájemce odevzdá byt (u zvlášť závažného porušení bez výpovědní doby)' }
      ] },
      { t: 'ul', items: [
        '<b>Důvody výpovědi s 3měsíční dobou (nájem na dobu určitou i neurčitou, § 2288 odst. 1):</b> hrubé porušení povinností nájemce; odsouzení nájemce pro úmyslný trestný čin spáchaný na pronajímateli, členu jeho domácnosti, osobě bydlící v domě nebo proti cizímu majetku v domě; byt má být vyklizen z důvodu veřejného zájmu, protože s domem je nutné naložit tak, že ho nebude možné užívat; jiný obdobně závažný důvod; neoznámení nového člena domácnosti.',
        '<b>Navíc u nájmu na dobu neurčitou (§ 2288 odst. 2):</b> byt má užívat pronajímatel nebo jeho manžel, který hodlá opustit rodinnou domácnost (návrh na rozvod nebo rozvedeno); pronajímatel potřebuje byt pro svého příbuzného nebo příbuzného manžela v přímé linii či vedlejší linii ve druhém stupni.',
        '<b>Bez výpovědní doby (§ 2291):</b> zvlášť závažné porušení – nezaplacení nájemného a služeb za alespoň 3 měsíce, závažné či nenapravitelné poškozování bytu nebo domu, závažné obtíže pronajímateli či sousedům, neoprávněné užívání bytu k jinému účelu. Pronajímatel ve výpovědi uvede, v čem porušení spatřuje, a před doručením vyzve nájemce k nápravě – jinak se k výpovědi nepřihlíží. Byt nájemce odevzdá bez zbytečného odkladu, nejpozději do 1 měsíce od konce nájmu.',
        '<b>Nájemce</b> může nájem na dobu určitou vypovědět, změní-li se okolnosti, z nichž strany vycházely, tak, že nelze rozumně žádat pokračování.',
        '<b>(doplněno)</b> Jistota (kauce) při nájmu bytu: nejvýše trojnásobek měsíčního nájemného (§ 2254) – ověř v zákoně.'
      ] },
      { t: 'table', head: ['Nájem prostoru sloužícího k podnikání (§ 2302–2315)', 'Pravidlo'], rows: [
        ['Pojem', 'prostor, jehož účelem a převážným využitím je podnikání (bez ohledu na vyjádření v smlouvě); jinak obecná ustanovení o nájmu'],
        ['Předčasná výpověď nájemcem (doba určitá)', 'ztratí způsobilost k činnosti; prostor přestane být objektivně způsobilý a pronajímatel nezajistí náhradní; pronajímatel hrubě porušuje povinnosti'],
        ['Předčasná výpověď pronajímatelem (doba určitá)', 'budova má být odstraněna či přestavěna a nešlo to předvídat; nájemce hrubě porušuje povinnosti (např. štíty bez souhlasu, prodlení s nájmem či službami déle než 1 měsíc)'],
        ['Výpověď', 'musí obsahovat důvod, jinak je neplatná; výpovědní doba 3 měsíce']
      ] },
      { t: 'def', term: 'Pacht (§ 2332)', x: '<b>Propachtovatel</b> přenechá pachtýři věc k dočasnému užívání <b>a požívání</b>, pachtýř platí pachtovné nebo poskytne poměrnou část výnosu.', items: ['pachtýř (na rozdíl od nájemce) má právo požívací; předmětem je plodonosná věc (např. pozemek, les)', 'při smlouvě o více věcech se posoudí podle povahy hlavní věci', 'je-li věc ve veřejném seznamu, zapíše se i pachtovní právo', 'bez souhlasu propachtování, přenechání užívání nebo změna hospodářského určení umožňuje výpověď bez výpovědní doby', 'pacht na dobu neurčitou lze vypovědět v 6měsíční výpovědní době tak, aby skončil koncem pachtovního roku (zemědělský 1. 10.–30. 9., jinak kalendářní)', 'pacht na ≥ 3 roky: strana může nejméně 6 měsíců před koncem vyzvat k potvrzení pokračování; souhlas do 3 měsíců prodlouží pacht o původní dobu'] }
    ] },
    { title: 'Darování, směna a další smlouvy', blocks: [
      { t: 'def', term: 'Darovací smlouva (§ 2055)', x: 'Dárce projevuje štědrost, <b>bezúplatně</b> převádí dar na obdarovaného, který není vázán k protiplnění.', items: ['lze darovat i veškerý současný majetek; budoucího majetku jen polovinu (§ 2058 odst. 1)', 'darování věci, kterou dárce ještě nemá, vyžaduje závazek, že ji nabude (§ 2058 odst. 2)', 'plnění ze společenské úsluhy není darování (§ 2055 odst. 2) – nechybí úmysl právně se zavázat', 'pouhý ústní slib daru nelze vymáhat', 'dárce se může vyvázat z nesplněného slibu při nepředvídatelné změně poměrů (§ 2059)'] },
      { t: 'ul', items: [
        '<b>Forma:</b> písemná u věci zapsané ve veřejném seznamu (§ 2057 odst. 1), tj. zpravidla u nemovitostí; také když nedojde k odevzdání věci zároveň s projevem vůle (§ 2057 odst. 2).',
        '<b>Darování podpory</b> (§ 2062): dárce se zaváže pravidelně obdarovaného podporovat; právo i povinnost mohou přejít na dědice, bylo-li to výslovně ujednáno.',
        '<b>Odvolání daru</b>: pro <b>hrubý nevděk</b> (lhůta 1 rok; za podmínek i dědici dárce) a pro <b>nezaviněnou nouzi dárce</b>, který nemá na nutnou výživu svou ani vyživovaných osob (osobní právo dárce, jeho smrtí zaniká).',
        '<b>Darování pro případ smrti</b> (§ 2063): závisí-li na tom, že obdarovaný dárce přežije, posuzuje se zpravidla jako odkaz; odkaz je odvolatelný, darování pro případ smrti nikoli.'
      ] },
      { t: 'ex', x: '<b>Vzorová darovací smlouva (nemovitost):</b> dárkyně prohlašuje, že vlastní pozemky, převádí je bezplatně do výlučného vlastnictví obdarovaného; na předmětu neváznou dluhy, zástavy, břemena ani nájmy; obdarovaný nabude vlastnictví <b>vkladem</b> do katastru (účinky zpětně ke dni doručení návrhu); správní poplatky hradí na základě dohody obdarovaný; podpisy ověřené, jedno vyhotovení pro katastr.' },
      { t: 'p', x: '<b>Směnná smlouva</b> (§ 2184 an.): každá strana převádí na druhou vlastnictví své věci. Vzor (výměna dvou pozemků) obsahuje definici věcí (parcela, LV, katastrální území), prohlášení každé strany, že je výlučným vlastníkem a věc je bez právních vad (zástavy, břemena, nájmy, exekuce, plomby), převod vlastnictví a odevzdání, konstatování, že ceny věcí jsou stejné (strany jsou vyrovnány) a že si vystaví daňové doklady, a přechod nebezpečí škody <b>převzetím</b> věci.' },
      { t: 'table', head: ['Smlouva', 'Podstata'], rows: [
        ['<b>Smlouva o úvěru</b>', 'věřitel na požádání poskytne dlužníkovi peněžní prostředky do určité částky, dlužník je vrátí a zaplatí úroky; je uzavřena už dohodou, ne až poskytnutím peněz'],
        ['<b>Smlouva o zápůjčce</b>', 'zapůjčitel přenechá vydlužiteli zastupitelnou věc (peníze i jiné věci), ta se po čase vrátí věc stejného druhu; vzniká až přenecháním věci'],
        ['<b>Výpůjčka</b>', 'bezplatné dočasné užívání <b>nezuživatelné</b> věci; vrací se tatáž věc'],
        ['<b>Výprosa</b>', 'bezplatné přenechání věci k užívání, aniž je ujednána doba nebo účel'],
        ['<b>Inominátní smlouvy</b>', 'výčet smluvních typů je demonstrativní – např. leasingová smlouva'],
        ['Pojistná, příkazní, komise, přeprava <i>(doplněno)</i>', 'pojistitel poskytne plnění při pojistné události; příkazník obstará záležitost pro příkazce; komisionář jedná vlastním jménem na účet komitenta; dopravce přepraví osobu či věc']
      ] }
    ] }
  ],
  mistakes: [
    'Nebezpečí škody u koupě nepřechází převzetím, ale <b>současně s nabytím vlastnického práva</b>; u výhrady vlastnictví však už převzetím.',
    'U nemovitosti nestačí podpis smlouvy – vlastnictví vzniká <b>vkladem</b> do katastru (účinky zpětně ke dni podání návrhu). Zápis je podle zákona konstitutivní, ne „formalita“.',
    'Podpisy všech stran musí být u smlouvy o nemovitosti na téže listině; pro katastr jsou nutné úředně ověřené podpisy.',
    'Záměna podstatného a nepodstatného porušení: při nepodstatném porušení nelze hned odstoupit, nejprve se vada odstraňuje nebo se žádá sleva.',
    'Jednou zvolené právo z vad (oprava, sleva…) nelze bez souhlasu prodávajícího měnit.',
    'Kupní smlouva × smlouva o dílo: u díla se výsledek vytváří na zakázku; vlastnictví a nebezpečí škody přechází <b>převzetím díla</b>.',
    'Nájem bytu: nedostatek písemné formy nemůže namítat pronajímatel; po 3 letech v dobré víře je smlouva řádně uzavřena (faktický nájem).',
    'Výpověď nájmu bytu pronajímatelem bez poučení o námitkách (přezkum soudem) je neplatná; u zvlášť závažného porušení musí nájemce předtím dostat výzvu k nápravě.',
    'Ústní slib daru nelze vymáhat; darování věci ve veřejném seznamu (nemovitost) vyžaduje písemnou formu.'
  ],
  qa: [
    { q: 'Jaké jsou podstatné náležitosti kupní smlouvy a kdy přechází vlastnictví a nebezpečí škody?', a: 'Označení stran, dostatečně určený předmět, vůle odevzdat a převést vlastnictví × převzít a zaplatit cenu. Vlastnictví: u jednotlivě určené věci účinností smlouvy, u nemovitosti vkladem do katastru. Nebezpečí škody přechází <b>současně s nabytím vlastnictví</b>.' },
    { q: 'Jakou formu musí mít kupní smlouva k nemovitosti?', a: 'Písemnou, podpisy všech stran na téže listině; písemně i změna a zrušení. Pro vklad do katastru musí být podpisy úředně ověřené.' },
    { q: 'Jaká práva má kupující při vadě věci?', a: 'Při podstatném porušení výměnu, opravu, přiměřenou slevu nebo odstoupení (volbu nelze bez souhlasu měnit). Při nepodstatném nejprve odstranění vady nebo slevu; nezjedná-li prodávající nápravu, slevu nebo odstoupení.' },
    { q: 'Jak dlouho se uplatňují práva z vad u spotřebního zboží?', a: 'Vady, které se vyskytnou do 24 měsíců od převzetí. Je-li uvedena doba použitelnosti (na obalu, v reklamě), použijí se ustanovení o záruce za jakost. Projeví-li se vada do 6 měsíců, má se za to, že existovala při převzetí (viz upozornění o 12 měsících).' },
    { q: 'Vyjmenujte vedlejší ujednání ke kupní smlouvě.', a: 'Výhrada vlastnického práva, zpětná koupě, zpětný prodej, předkupní právo, koupě na zkoušku, výhrada lepšího kupce, cenová doložka (§ 2132–2157).' },
    { q: 'Jak funguje výhrada vlastnického práva?', a: 'Kupující se stane vlastníkem až úplným zaplacením ceny; nebezpečí škody přechází už převzetím. Proti věřitelům kupujícího působí při veřejné listině či ověřených podpisech; u věci ve veřejném seznamu po zápisu.' },
    { q: 'Jaké jsou lhůty u předkupního práva, koupě na zkoušku a výhrady lepšího kupce?', a: 'Předkupník platí do 8 dnů (movitá) / 3 měsíců (nemovitá) po nabídce. Zkušební lhůta i lhůta lepšího kupce: 3 dny (movitá) / 1 rok (nemovitá).' },
    { q: 'Čím se liší smlouva o dílo od kupní smlouvy?', a: 'Kupní: předmětem je věc a převod vlastnictví za cenu. Dílo: zhotovitel na svůj náklad a nebezpečí provede výsledek (zhotovení, oprava, úprava); vlastnictví a nebezpečí škody přecházejí převzetím díla.' },
    { q: 'Kdy je dílo provedeno a jak je to s vadami u stavby?', a: 'Dílo je provedeno, je-li dokončeno (předvedena způsobilost sloužit účelu) a předáno. Skryté vady stavby se uplatňují 5 let po převzetí; ojedinělé drobné vady nejsou důvodem odmítnout převzetí stavby.' },
    { q: 'Za jakých podmínek lze změnit cenu díla?', a: 'Při pevné ceně nebo rozpočtu nelze žádat změnu ceny proto, že dílo vyžádalo jiné úsilí; při zcela mimořádné nepředvídatelné okolnosti může soud cenu spravedlivě zvýšit či smlouvu zrušit. Při zvýšení o více než 10 % oproti rozpočtu může objednatel odstoupit.' },
    { q: 'Jaké jsou výpovědní doby u nájmu na dobu neurčitou?', a: 'U nájmu věci movité 1 měsíc, nemovité 3 měsíce; výpověď nemusí být odůvodněna. U bytu pronajímatel jen ze zákonných důvodů, písemně a s poučením o námitkách; u nebytového prostoru s uvedením důvodu.' },
    { q: 'Kdy může pronajímatel vypovědět nájem bytu bez výpovědní doby?', a: 'Při zvlášť závažném porušení, např. nezaplacení nájemného a služeb za alespoň 3 měsíce, závažné poškozování bytu nebo domu, závažné obtíže sousedům. Před výpovědí musí nájemce vyzvat k nápravě a ve výpovědi uvést důvod.' },
    { q: 'Je pro podnájem bytu potřeba souhlas pronajímatele?', a: 'Pokud v bytě nájemce sám trvale nebydlí, ano (písemně; mlčení do 1 měsíce = souhlas, § 2275). Bydlí-li tam sám trvale, souhlas není třeba (§ 2274).' },
    { q: 'Co je faktický nájem a co přechod nájmu?', a: 'Faktický nájem: po 3 letech užívání v dobré víře se smlouva považuje za řádně uzavřenou (§ 2238). Přechod: po smrti nájemce na člena domácnosti bez vlastního bytu (cizího jen se souhlasem pronajímatele), obvykle nejdéle na 2 roky.' },
    { q: 'Rozdíl mezi nájmem a pachtem.', a: 'Nájemce věc jen užívá, pachtýř ji i požívá (bere výnosy, proto plodonosná věc); platí pachtovné nebo poměrnou část výnosu. Pacht na dobu neurčitou: 6 měsíců, konec pachtovního roku.' },
    { q: 'Kdy lze odvolat dar?', a: 'Pro hrubý nevděk (do 1 roku) a při nezaviněné nouzi dárce, který nemá na nutnou výživu. Ústní slib daru nelze vymáhat; darování nemovitosti vyžaduje písemnou smlouvu a vklad.' },
    { q: 'Rozdíl mezi úvěrem, zápůjčkou, výpůjčkou a výprosou.', a: 'Úvěr: peníze do určité částky, smlouva vzniká dohodou. Zápůjčka: zastupitelná věc se vrací stejného druhu. Výpůjčka: bezplatné užívání nezuživatelné věci. Výprosa: bezplatné užívání bez ujednané doby a účelu.' },
    { q: 'Kupujete byt za 6,5 mil. Kč, prodávající chce platit hned na svůj účet. Co uděláte?', a: 'Neplatit předem: ověřit list vlastnictví (zástava, břemena, plomby), zajistit výmaz zástavy a souhlas manžela, ošetřit nájemce, cenu uložit do úschovy a podepsat smlouvu s ověřenými podpisy a návrh na vklad (2 000 Kč). Vlastníkem se stanu vkladem, účinky ke dni podání návrhu.' }
  ]
});
