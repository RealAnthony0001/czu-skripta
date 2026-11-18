registerTopic({
  id: 'rodinne-pravo', order: 12, icon: '👨‍👩‍👧', title: 'Rodinné právo', src: 'podklady', lec: [7], where: 'Přednáška 7 – rodinné právo (OZ § 655–975)',
  summary: 'Předmět, zásady a prameny rodinného práva; manželství (vznik, překážky, neplatnost, práva a povinnosti, zánik a rozvod); společné jmění manželů a jeho vypořádání; rodiče a děti, rodičovská odpovědnost, výchova po rozvodu, vyživovací povinnost; registrované partnerství; rodinný závod a podnikání manželů; novela účinná od 1. 1. 2026.',
  vocab: [
    { w: 'SJM', x: 'Společné jmění manželů – to, co manželům náleží, má majetkovou hodnotu a není vyloučeno z právních poměrů; patří do něj i dluhy.' },
    { w: 'PM (právní moc)', x: 'Okamžik, kdy rozhodnutí soudu nabude konečné závaznosti a nelze ho napadnout řádným opravným prostředkem.' },
    { w: 'Svéprávnost', x: 'Způsobilost vlastním jednáním nabývat práv a zavazovat se; plnou nabývá člověk zletilostí (18 let).' },
    { w: 'Nevyvratitelná domněnka', x: 'Zákonné pravidlo, proti kterému nelze vést důkaz opaku – platí, i kdyby skutečnost byla jiná.' },
    { w: 'Prekluze', x: 'Zánik práva uplynutím lhůty (na rozdíl od promlčení právo zcela zaniká).' },
    { w: 'Rodičovská odpovědnost', x: 'Souhrn práv a povinností rodičů vůči dítěti (péče, výchova, zastupování, správa jmění); vzniká narozením, zaniká svéprávností dítěte.' },
    { w: 'Vyživovací povinnost', x: 'Povinnost přispívat na výživu (rodiče ↔ děti, manželé, příbuzní); není součástí rodičovské odpovědnosti.' },
    { w: 'Insolvenční správce', x: 'Osoba, která v insolvenčním řízení spravuje majetek dlužníka; při konkurzu jedná i o vypořádání SJM.' }
  ],
  key: [
    '<b>Rodinné právo</b>: část druhá OZ (§ 655–975); vztahy mezi manžely, partnery, rodiči a dětmi, jinými příbuznými a v náhradní rodinné výchově.',
    '<b>Manželství</b> = trvalý svazek muže a ženy; vzniká <b>souhlasným a úplným projevem vůle</b> svéprávného muže a ženy při sňatečném obřadu (občanský / církevní) za přítomnosti <b>2 svědků</b>.',
    '<b>Překážky</b>: věk (18, od 16 se přivolením soudu), nedostatek plné svéprávnosti, trvající manželství či partnerství, příbuzenství a adopce, poručenství, pěstounství, svěření do péče.',
    '<b>Zánik manželství</b>: smrt, prohlášení za mrtvého, rozvod. Předpoklad rozvodu: <b>vážný rozvrat</b>. Nesporný rozvod: manželství ≥ 1 rok, odděleně ≥ 6 měsíců, druhý se připojí, dohody o majetku, bydlení a dětech.',
    '<b>SJM</b>: režim zákonný / smluvený / založený rozhodnutím soudu; vzniká sňatkem, končí zánikem manželství. Nepatří do něj osobní věci, dary, dědictví, odkazy a náhrady za výlučný majetek.',
    '<b>Vypořádání SJM</b>: dohodou nebo soudem do <b>3 let</b> od PM rozsudku o rozvodu; pak <b>nevyvratitelná domněnka § 741</b>; při smrti soud v dědickém řízení.',
    '<b>Rodičovská odpovědnost</b> náleží oběma rodičům, vzniká narozením, zaniká svéprávností; <b>vyživovací povinnost</b> není její součástí a na zletilosti nezávisí.',
    '<b>Novela 268/2025 Sb.</b> (od 1. 1. 2026): místo sporného a nesporného rozvodu <b>smluvený rozvod</b>, ruší se podmínka 6 měsíců odděleného soužití, péče o dítě bez kategorií výlučná/společná/střídavá, zákaz tělesných trestů.'
  ],
  sections: [
    { title: 'Předmět, zásady a prameny rodinného práva', blocks: [
      { t: 'def', term: 'Rodinné právo', x: 'Upraveno v části druhé zákona č. 89/2012 Sb., občanského zákoníku (§ 655–975). Předmětem jsou vztahy:', items: ['mezi <b>manžely</b>; mezi <b>partnery</b>', 'mezi <b>rodiči a dětmi</b> a mezi jinými příbuznými', 'mezi účastníky <b>náhradní rodinné výchovy</b> – dětmi a osobami, kterým byly děti svěřeny do náhradní rodinné výchovy podle zákona'] },
      { t: 'icons', title: 'Zásady a principy rodinného práva', items: [
        { i: '💍', h: 'Dobrovolnost', x: 'svobodné rozhodnutí při vstupu do manželství; důraz na citovou stránku' },
        { i: '⚖️', h: 'Rovnost', x: 'rovné postavení muže a ženy, vzájemná vyživovací povinnost, stejná životní úroveň manželů i dětí' },
        { i: '🛡️', h: 'Ochrana rodiny', x: 'vztahy v rodině chrání právní řád' },
        { i: '🧒', h: 'Péče o děti', x: 'rodině náleží péče o duševní, citový a tělesný rozvoj dětí' },
        { i: '🏫', h: 'Péče společnosti', x: 'povinnost pečovat o hmotné a kulturní potřeby dětí' },
        { i: '🤝', h: 'Solidarita', x: 'členové rodiny si pomáhají podle svých možností a schopností' }
      ] },
      { t: 'table', head: ['Pramen', 'Co upravuje'], rows: [
        ['Ústava ČR; Listina základních práv a svobod (zejm. čl. 32)', 'ústavní ochrana rodiny a dětí'],
        ['Zákon č. 89/2012 Sb., občanský zákoník', 'část druhá § 655–975; dále zejm. § 1–80, § 100, § 457 a násl., § 613, § 1918, § 3019–3022, § 3028–3030, § 3035–3040'],
        ['Zákon č. 99/1963 Sb., občanský soudní řád', 'soudní řízení ve věcech rodinněprávních'],
        ['Zákon č. 292/2013 Sb., o zvláštních řízeních soudních', 'nesporná řízení'],
        ['Zákon č. 115/2006 Sb., o registrovaném partnerství', 'partnerství osob stejného pohlaví'],
        ['Zákon č. 301/2000 Sb., o matrikách, jménu a příjmení', 'matriky, jména'],
        ['Zákon č. 218/2003 Sb., o soudnictví ve věcech mládeže', 'odpovědnost mládeže za protiprávní činy'],
        ['Zákon č. 359/1999 Sb., o sociálně-právní ochraně dětí', 'sociálně-právní ochrana dětí']
      ] },
      { t: 'p', x: '<b>Mezinárodní smlouvy</b> jako pramen: Úmluva o právech dítěte; Úmluva o občanskoprávních aspektech mezinárodních únosů dětí; Evropská úmluva o osvojení dětí; Úmluva o ochraně dětí a spolupráci při mezinárodním osvojení.' },
      { t: 'warn', x: 'Slajd uvádí zákon o sociálně-právní ochraně dětí jako „č. 359/199 Sb.“ – jde o překlep, správně <b>č. 359/1999 Sb.</b>' }
    ] },
    { title: 'Manželství: vznik, překážky, neplatnost', blocks: [
      { t: 'def', term: 'Manželství', x: 'Trvalý svazek muže a ženy založený způsobem, který stanoví zákon.', items: ['hlavní účel: <b>založení rodiny, řádná výchova dětí a vzájemná podpora a pomoc</b>'] },
      { t: 'flow', title: 'Podmínky vzniku manželství', steps: [
        { h: 'Projev vůle', x: 'souhlasný a úplný projev vůle <b>svéprávného muže a svéprávné ženy</b>; za jednoho snoubence může projev vůle učinit i <b>zmocněnec</b>' },
        { h: 'Sňatečný obřad', x: 'před orgánem veřejné moci (<b>občanský sňatek</b>) nebo před orgánem církve (<b>církevní sňatek</b>)' },
        { h: 'Svědci', x: 'za přítomnosti <b>dvou svéprávných svědků</b>' }
      ] },
      { t: 'table', head: ['Zákonná překážka', 'Obsah'], rows: [
        ['<b>Nedostatek věku</b>', 'zásadně 18 let; od <b>16 let</b> jen s <b>přivolením soudu</b>'],
        ['<b>Nedostatek plné svéprávnosti</b>', 'snoubenec musí být plně svéprávný'],
        ['<b>Trvající svazek</b>', 'trvající manželství (bigamie), registrované partnerství nebo obdobný svazek uzavřený v zahraničí'],
        ['<b>Příbuzenství, adopce</b>', 'zakázáno manželství mezi sourozenci a mezi předky a potomky bez ohledu na stupeň'],
        ['<b>Poručenství, pěstounství, svěření do péče</b>', 'překážka zaniká zletilostí, emancipací nebo rozhodnutím soudu']
      ] },
      { t: 'def', term: 'Neplatnost manželství', x: 'Manželství, které vzniklo, přestože trpí právní vadou v podobě zákonné překážky.', items: [
        'považuje se za <b>platné, dokud soud nerozhodne</b> o jeho neplatnosti rozsudkem – na návrh každého, kdo osvědčí právní zájem',
        'neplatnost nastává až <b>právní mocí rozsudku</b>',
        '<b>vadné projevy vůle při obřadu</b>: nátlak, omyl v povaze sňatečného jednání (snoubenci neznají následky manželství), omyl v totožnosti snoubence',
        '<b>vady týkající se osoby snoubence</b>: nedostatek věku, omezená svéprávnost',
        '<b>závady ve vztahu snoubenců</b>: příbuzenství, poručenství, pěstounství, svěření do péče'
      ] },
      { t: 'tip', x: 'Přednáška zmiňuje i <b>zdánlivé manželství</b>, ale slajd obsahuje jen nadpis. Rozdíl oproti neplatnému: neplatné manželství vzniklo a platí do rozsudku; zdánlivé vůbec nevzniklo (pojem „zdánlivé právní jednání“ znáš z tématu o právním jednání).' }
    ] },
    { title: 'Práva a povinnosti manželů', blocks: [
      { t: 'p', x: 'Manželé mají <b>rovné povinnosti a rovná práva</b>. Jsou si navzájem povinni <b>úctou</b>, jsou povinni <b>žít spolu, být si věrni</b>, vzájemně respektovat svou důstojnost, podporovat se, udržovat rodinné společenství, vytvářet zdravé rodinné prostředí a společně pečovat o děti.' },
      { t: 'versus', title: 'Osobní × majetková práva a povinnosti manželů', x: 'Uzavřením manželství vznikají manželům dva druhy práv a povinností. Osobní se týkají soužití: žít spolu, být si věrni, vzájemně se respektovat a pomáhat si, dohodnout se o podstatných záležitostech rodiny. Majetkové se týkají peněz a věcí: každý přispívá na potřeby rodiny a domácnosti podle svých osobních a majetkových schopností a poměrů, a manželé mají společné jmění. Když jeden z manželů vydělává a druhý pečuje o malé dítě, oba plní povinnost přispívat – každý podle svých možností.', cols: [
        { h: 'Osobního charakteru', items: ['žít spolu, být si věrni', 'zdravé rodinné prostředí', 'dohodnout se o podstatných záležitostech', 'vzájemná úcta, rovnost, pomoc, informovanost'] },
        { h: 'Majetkového charakteru', items: ['přispívat na potřeby rodiny a domácnosti podle schopností a poměrů', 'výživné mezi manžely', 'obvyklé vybavení rodinné domácnosti (§ 698)', 'provoz rodinného závodu (§ 700 a násl.)'] }
      ] },
      { t: 'ul', items: [
        'O záležitostech rodiny a způsobu života se mají manželé <b>dohodnout</b>; obstarávají je společně, nebo jeden z nich.',
        'Manžel má právo <b>zastupovat</b> manžela jen v jeho <b>běžných záležitostech</b>.',
        'Zákon dále upravuje: uspokojování potřeb rodiny, rozhodování o záležitostech rodiny, vzájemné zastupování, výživné mezi manžely, nakládání s obvyklým vybavením rodinné domácnosti (§ 698) a provoz rodinného závodu (§ 700 a násl.).'
      ] }
    ] },
    { title: 'Zánik manželství a rozvod', blocks: [
      { t: 'ul', items: ['Manželství zaniká: <b>smrtí</b>, <b>prohlášením za mrtvého</b>, <b>rozvodem</b>.', 'Předpokladem rozvodu je <b>vážný rozvrat</b> mezi manžely, který má za následek, že manželství nemůže plnit své základní funkce a společenský účel.'] },
      { t: 'versus', title: 'Nesporný × sporný rozvod (úprava do 31. 12. 2025)', x: 'Rozdíl je v tom, zda se manželé na rozvodu shodnou. Při nesporném rozvodu oba souhlasí a předloží soudu dohody o majetku, bydlení, výživě a dětech; soud pak příčiny rozvratu nezkoumá do hloubky. Při sporném rozvodu jeden z manželů nesouhlasí a soud manželství rozvést nemusí – např. pokud by tomu bránily vážné důvody (nemoc, postižené dítě); žijí-li ale manželé odděleně 3 roky, soud je zpravidla rozvede. Pepa a Marie, kteří jsou svoji dva roky, sedm měsíců žijí odděleně a na všem se dohodli, by se podle této úpravy rozvedli nesporně.', cols: [
        { h: 'Nesporný', items: ['manželství trvalo nejméně <b>1 rok</b>', 'manželé spolu nežijí nejméně <b>6 měsíců</b>', 'druhý manžel se k návrhu připojí', 'dohoda o vypořádání majetku, o bydlení a případné výživě', 'soudem schválená dohoda o poměrech nezletilých dětí'] },
        { h: 'Sporný', items: ['jeden z manželů nesouhlasí', 'soud nemusí rozvést, jsou-li vážné důvody (nemoc, postižené dítě)', 'nežijí-li spolu <b>3 roky</b>, soud je zpravidla rozvede'] }
      ] },
      { t: 'warn', x: 'Dnes (2026) už platí <b>novela 268/2025 Sb.</b> (účinná od 1. 1. 2026): rozlišení nesporného a sporného rozvodu se <b>ruší</b>, zavádí se <b>smluvený rozvod</b> a ruší se podmínka šesti měsíců odděleného soužití. Podrobnosti v sekci o novele na konci tématu.' }
    ] },
    { title: 'Společné jmění manželů (SJM)', blocks: [
      { t: 'def', term: 'Společné jmění manželů', x: 'To, co manželům náleží, má majetkovou hodnotu a není vyloučeno z právních poměrů.', items: ['zákonný režim vzniká <b>uzavřením manželství</b> a končí <b>zánikem manželství</b>'] },
      { t: 'svg', title: 'Režimy SJM', x: ZPN.sjmRezimy(), cap: 'Nahoře SJM, pod ním tři možné režimy: zákonný (platí automaticky od sňatku), smluvený (manželé si ho upraví smlouvou) a založený rozhodnutím soudu (zrušení, zúžení, oddělená jmění). Pod krajními boxy je, co režim obsahuje.' },
      { t: 'versus', title: 'Co do SJM patří × nepatří (zákonný režim)', x: 'Do SJM zásadně patří to, co manželé získají za trvání manželství svou činností nebo co plyne z jejich majetku – mzda, auto koupené ze mzdy, ale i dluhy. Nepatří do něj to, co je osobní nebo co jeden z manželů získal „bez přičinění“ druhého: dar, dědictví, odkaz, věci k osobní potřebě, a také to, co nahrazuje jeho výlučný majetek. Pozor na zisk: výnos z výlučného majetku (např. nájemné z bytu, který jeden z manželů zdědil) do SJM patří, i když byt sám ne. Když Marie zdědí byt, byt je jen její; nájemné, které z něj za trvání manželství plyne, je ale společné.', cols: [
        { h: 'Patří do SJM', items: ['majetek: věci movité a nemovité, pohledávky, jiná majetková práva a penězi ocenitelné hodnoty', '<b>závazky (dluhy)</b>', 'příjmy obou manželů ze závislé či obdobné činnosti', '<b>zisk</b> z toho, co patří do výlučného vlastnictví jednoho z manželů'] },
        { h: 'Nepatří do SJM', items: ['věci k <b>osobní potřebě</b> jednoho z manželů', '<b>dary, dědictví, odkazy</b> nabyté jen jedním z manželů', 'co jeden nabyl právním jednáním v souvislosti se svým výlučným vlastnictvím', 'co jeden nabyl jako <b>náhradu</b> za poškození, zničení nebo ztrátu svého výhradního majetku'] }
      ] },
      { t: 'p', x: '<b>Režim založený rozhodnutím soudu</b>: <b>zrušení</b> SJM, <b>zúžení</b> SJM, <b>režim oddělených jmění</b>. Smluvený režim a SJM při zahájení podnikání uvádí přednáška jen nadpisy (obsah je na obrázcích).' }
    ] },
    { title: 'Vypořádání SJM', blocks: [
      { t: 'p', x: 'K vypořádání dochází, <b>zanikne-li manželství</b>, je-li SJM za trvání manželství <b>zrušeno</b> nebo je-li <b>zúženo</b>.' },
      { t: 'svg', title: 'Jak a kdy se SJM vypořádá', x: ZPN.sjmVyporadani(), cap: 'Časová osa začíná zánikem SJM. V modrém úseku tří let od právní moci rozsudku o rozvodu se manželé vypořádají dohodou (a) nebo soudem (b). Po uplynutí 3 let nastoupí nevyvratitelná domněnka § 741 (c, červený box). Varianta d) platí při smrti manžela.' },
      { t: 'law', ref: '§ 741 OZ – zákonná domněnka', x: 'Pokud nedojde do tří let od rozvodu manželství (od právní moci) k vypořádání společného jmění dohodou manželů ani rozhodnutím soudu, uplatní se <b>nevyvratitelná právní domněnka</b>, že se vypořádali takto: hmotné movité věci zůstávají ve vlastnictví toho z nich, který je po dobu tří let účelně držel a užíval; ostatní hmotné věci movité i nemovité se stávají předmětem jejich <b>společného podílového vlastnictví se stejnými podíly</b>; ostatní majetková práva, stejně jako dluhy a pohledávky, patří oběma společně a stejným dílem.' },
      { t: 'warn', x: 'Lhůta 3 roky se u dohody i u návrhu soudu na slajdu označuje jako <b>promlčení</b>, uplatnění domněnky po 3 letech jako <b>prekluze</b>. Domněnka je <b>nevyvratitelná</b> – nelze proti ní dokazovat, že to bylo jinak.' },
      { t: 'ex', x: 'Pepa a Marie se rozvedli v březnu 2022 (právní moc) a o SJM se nedohodli ani nepodali návrh k soudu. V březnu 2025 nastoupila domněnka: auto, které 3 roky jezdila Marie, je její; byt koupený za manželství mají v podílovém spoluvlastnictví po ½; hypotéku dluží oba stejným dílem.' }
    ] },
    { title: 'Rodiče a děti', blocks: [
      { t: 'versus', title: 'Mateřství × otcovství', x: 'Mateřství je jisté – matkou je žena, která dítě porodila (mater semper certa est). Otcovství jisté není (pater incertus), proto ho zákon určuje pomocí domněnek: otcem je manžel matky; nejde-li o manžela, určí se otcovství souhlasným prohlášením rodičů, a není-li ani to, rozhodne soud. Když se dítě narodí nesezdaným rodičům, otec ho může uznat souhlasným prohlášením s matkou; když otec odmítá, matka se může obrátit na soud.', cols: [
        { h: 'Mateřství', items: ['matkou je žena, která dítě porodila', '„Mater semper certa est.“'] },
        { h: 'Otcovství', items: ['„Pater incertus.“', 'otcem je manžel matky', 'souhlasné prohlášení rodičů', 'určení otcovství soudním rozhodnutím'] }
      ] },
      { t: 'def', term: 'Rodičovská odpovědnost', x: 'Náleží <b>oběma rodičům</b>; soud ji může omezit nebo zrušit. Vzniká <b>narozením</b> dítěte, zaniká jeho <b>svéprávností</b>. Zahrnuje:', items: ['péči o dítě, o jeho zdraví a jeho tělesný, citový, rozumový a mravní vývoj', 'ochranu dítěte a udržování osobního styku s ním', 'zajišťování výchovy a vzdělání, určení místa bydliště', 'zastupování dítěte a spravování jeho jmění'] },
      { t: 'p', x: 'Vzájemná práva a povinnosti rodičů a dětí zahrnují také <b>určení jména a příjmení</b>. <b>Změny</b> rodičovské odpovědnosti: soud ji může <b>pozastavit</b>, <b>omezit</b> nebo rodiče odpovědnosti <b>úplně zbavit</b> (např. dítě v dětském domově) – vyživovací povinnost rodiče i pak trvá.' },
      { t: 'table', head: ['Výchova po rozvodu (úprava do 2025)', 'Kdy'], rows: [
        ['<b>Výchova jednoho z rodičů</b>', 'oba rodiče neprojevují stejnou schopnost zajistit řádnou výchovu, o výchovu nejeví zájem, nebo se tak dohodnou'],
        ['<b>Střídavá výchova</b>', 'dítě je v přesně vymezených obdobích střídavě u jednoho a druhého rodiče; připadá v úvahu, když dítě nemusí měnit obvyklé prostředí (školu, kroužky, přátele)'],
        ['<b>Společná výchova</b>', 'není účelné svěřit dítě jen jednomu rodiči (např. zvláštní péče kvůli nemoci, zavedený režim – jeden rodič škola, druhý koníčky); podmínkou je dohoda obou rodičů i dítěte']
      ] },
      { t: 'warn', x: 'Novela 268/2025 Sb. od 1. 1. 2026 <b>upouští od formálního rozlišení výlučné, společné a střídavé péče</b>; soud rozhoduje o rozsahu péče každého z rodičů podle okolností případu.' }
    ] },
    { title: 'Vyživovací povinnost', blocks: [
      { t: 'tip', x: 'Vyživovací povinnost a právo na výživné <b>nejsou součástí rodičovské odpovědnosti</b>; jejich trvání <b>nezávisí na nabytí zletilosti ani svéprávnosti</b>.' },
      { t: 'table', head: ['Vyživovací povinnost', 'Pravidlo'], rows: [
        ['<b>Rodičů vůči dětem</b>', 'trvá i po zletilosti, dokud se dítě nemůže samo živit'],
        ['<b>Dětí vůči rodičům</b>', 'vzniká soběstačným dětem, když rodiče nejsou schopni se sami živit a dítě může zajistit jejich výživu'],
        ['<b>Mezi ostatními příbuznými</b>', 'především mezi příbuznými v řadě přímé; přihlíží se k majetkovým poměrům a schopnostem všech příbuzných téhož stupně'],
        ['<b>Mezi manžely za trvání manželství</b>', 'vyplývá ze zásady rovnosti a vzájemnosti manželů'],
        ['<b>Mezi rozvedenými manžely</b>', 'přispívat bývalému manželovi, který se z objektivních důvodů nemůže sám živit (zdravotní stav, péče o malé dítě)'],
        ['<b>Příspěvek neprovdané matce</b>', 'na výživu a úhradu některých nákladů; od otce dítěte, jehož otcovství bylo určeno podle zákona']
      ] }
    ] },
    { title: 'Registrované partnerství', blocks: [
      { t: 'def', term: 'Registrované partnerství (zák. č. 115/2006 Sb.)', x: 'Institut, který upravuje soužití dvojic <b>stejného pohlaví</b>.', items: [
        'vzniká souhlasným, svobodným a úplným prohlášením dvou osob stejného pohlaví, že spolu vstupují do partnerství',
        'prohlášení se činí <b>osobně před matričním úřadem</b>',
        'alespoň jedna z osob musí být <b>státním občanem ČR</b>',
        'partneři mají <b>vzájemnou vyživovací povinnost</b>'
      ] },
      { t: 'versus', title: 'Kdo nemůže vstoupit × jak partnerství zaniká', x: 'Překážky partnerství jsou podobné jako u manželství: příbuzenství v přímé linii a mezi sourozenci, nedostatek věku a svéprávnosti a trvající svazek. Rozdíl je ve věku – do partnerství nelze vstoupit před 18. rokem, výjimka od 16 let s přivolením soudu, kterou zná manželství, tu není. Partnerství zaniká smrtí nebo prohlášením za mrtvého, anebo zrušením soudem – obdoba rozvodu.', cols: [
        { h: 'Nemůže vstoupit', items: ['příbuzní v linii přímé a sourozenci', 'osoba mladší 18 let', 'osoba bez svéprávnosti', 'osoba v trvajícím manželství, partnerství nebo obdobném zahraničním svazku'] },
        { h: 'Zánik', items: ['smrt jednoho z partnerů', 'prohlášení partnera za mrtvého', 'zrušení rozhodnutím soudu'] }
      ] }
    ] },
    { title: 'Rodinný závod a podnikání manželů', blocks: [
      { t: 'def', term: 'Rodinný závod (§ 700–707 OZ)', x: 'Soubor obchodního jmění sloužící podnikatelským účelům, který vlastní některý člen rodiny a na jehož provozu se trvalou prací podílejí členové širší rodiny, aniž by byli společníky (obchodní) společnosti nebo měli sjednánu pracovní smlouvu.', items: ['zaveden novým občanským zákoníkem (účinnost 1. 1. 2014)'] },
      { t: 'ul', items: [
        '<b>Členové</b>: společně pracující manželé (nebo alespoň jeden z nich), jejich příbuzní do <b>třetího stupně</b> a osoby s manžely sešvagřené do <b>druhého stupně</b> – pokud pro rodinu nebo rodinný závod <b>trvale pracují</b>.',
        '<b>O rodinný závod nejde</b>, mají-li členové rodiny vztahy upravené smluvně (společenská smlouva, smlouva o tiché společnosti, pracovní smlouva, zakladatelské jednání obchodní společnosti či družstva).',
        'Podílejí-li se na provozu <b>oba manželé</b>, použije se na jejich vztahy <b>manželské majetkové právo</b> (§ 708–750), ne úprava rodinného závodu.',
        '<b>Rozhodování</b>: stěžejní rozhodnutí <b>většinou hlasů</b> zúčastněných členů; nezletilé zastupuje zákonný zástupce, nesvéprávné opatrovník.',
        '<b>Podíl na zisku</b> odpovídá míře, v jaké se člen na zisku podílí (množství a druh práce).',
        'Rozhoduje, <b>kdo se provozu účastní</b>, ne kdo je vlastníkem: všichni pracující členové spolurozhodují o nakládání se závodem, o přírůstcích a úrodě i o přijetí dalšího člena.'
      ] },
      { t: 'p', x: '<b>Podnikání manželů a konkurz</b> (§ 268–276 insolvenčního zákona): prohlášením konkurzu na jednoho z manželů přechází na <b>insolvenčního správce</b> oprávnění uzavřít dohodu o vypořádání SJM nebo navrhnout vypořádání soudem. Dohody o vypořádání SJM uzavřené dlužníkem po prohlášení konkurzu jsou <b>neplatné</b>.' },
      { t: 'ul', items: [
        'Část SJM, kterou dlužník <b>se souhlasem manžela použil k podnikání</b>, spadá při vypořádání vždy do <b>majetkové podstaty</b>.',
        'Dohoda insolvenčního správce o vypořádání SJM je účinná, jakmile ji <b>schválí insolvenční soud</b>; ten ji neschválí, je-li v rozporu s předpisy nebo nesouhlasí-li věřitelský výbor.',
        'Po dobu účinků konkurzu <b>nemůže vzniknout nové SJM</b>; uzavře-li dlužník nové manželství, vznik SJM se odkládá ke dni zániku účinků.'
      ] },
      { t: 'ex', x: 'Pepa podniká jako OSVČ a se souhlasem Marie použil k podnikání peníze ze SJM na nákup dodávky. Na Pepu je prohlášen konkurz. Dohodu o vypořádání SJM už s Marií sám platně uzavřít nemůže – oprávnění má insolvenční správce – a dodávka jako část SJM použitá k podnikání se souhlasem manželky spadne do majetkové podstaty.' }
    ] },
    { title: 'Novela rodinného práva od 1. 1. 2026 (zák. č. 268/2025 Sb.)', blocks: [
      { t: 'table', head: ['Oblast', 'Co se mění'], rows: [
        ['<b>Rozvod</b>', 'ruší se rozlišení sporného a nesporného rozvodu; nový <b>smluvený rozvod</b> – dohodnou-li se manželé na rozvodu a na poměrech nezletilých dětí, soud <b>nezkoumá příčiny rozvratu</b>; řízení o rozvodu a o poměrech k dítěti se spojují do jednoho; ruší se povinné <b>6 měsíců odděleného soužití</b>; při dohodě se nevyžaduje osobní výslech manželů'],
        ['<b>Péče o dítě</b>', 'upouští se od rozlišování výlučné, společné a střídavé péče; soud určí <b>rozsah péče</b> každého rodiče podle okolností případu'],
        ['<b>Rodičovská odpovědnost</b>', 'zpřesněná definice; lze ji omezit či pozastavit i tehdy, ohrožuje-li citový či psychický vývoj dítěte; rozšiřuje se <b>styk</b> s dítětem i na <b>nepřímý styk</b> (elektronická komunikace, právo na informace)'],
        ['<b>Výživné</b>', 'soud více přihlíží k <b>potenciálním příjmům</b> povinného (schopnosti, kvalifikace, pracovní možnosti); umožněno <b>postoupení pohledávky na výživné</b>'],
        ['<b>Procesní změny</b>', 'kratší lhůty, <b>prozatímní rozhodnutí</b> o péči, sjednocení pravidel spojování řízení; možnost omezit rodičovskou odpovědnost při riziku pro dítě (domácí násilí)'],
        ['<b>Výchova</b>', 'výslovný <b>zákaz tělesného trestání</b> a výchovných prostředků, které dítě ponižují nebo mu působí tělesné či duševní utrpení']
      ] },
      { t: 'tip', x: 'Smysl novely: posun k <b>individualizaci rozhodování</b> a k <b>nejlepšímu zájmu dítěte</b> místo rigidních kategorií a formalismu.' }
    ] }
  ],
  mistakes: [
    'Manželství vzniká jen za přítomnosti <b>dvou svědků</b> a souhlasným projevem vůle svéprávného muže a ženy; za snoubence může jednat i zmocněnec.',
    'Neplatné manželství se považuje za platné, <b>dokud soud nerozhodne</b>; neplatnost nastává až právní mocí rozsudku.',
    'Do SJM patří i <b>dluhy</b> a <b>zisk z výlučného majetku</b>; dary, dědictví a odkazy nabyté jedním manželem do SJM nepatří.',
    'Po 3 letech od právní moci rozvodu nastupuje <b>nevyvratitelná</b> domněnka § 741 – movité věci tomu, kdo je užíval, ostatní věci do podílového spoluvlastnictví po ½.',
    'Vyživovací povinnost <b>není součástí</b> rodičovské odpovědnosti a nekončí zletilostí; trvá i u rodiče zbaveného rodičovské odpovědnosti.',
    'Od 1. 1. 2026 už neplatí dělení na sporný a nesporný rozvod ani podmínka 6 měsíců odděleného soužití (novela 268/2025 Sb.).',
    'Do registrovaného partnerství nelze vstoupit před 18. rokem; alespoň jeden partner musí být občanem ČR.',
    'Rodinný závod se nepoužije na manžele, kteří pracují oba – na ně se použije manželské majetkové právo.'
  ],
  qa: [
    { q: 'Co je předmětem rodinného práva a kde je upraveno?', a: 'Vztahy mezi manžely, partnery, rodiči a dětmi, jinými příbuznými a účastníky náhradní rodinné výchovy. Upraveno v části druhé OZ (§ 655–975).' },
    { q: 'Jaké jsou základní zásady rodinného práva?', a: 'Dobrovolnost vstupu do manželství, rovnost subjektů, ochrana vztahů v rodině, péče rodiny o rozvoj dětí, povinnost společnosti pečovat o potřeby dětí a solidarita členů rodiny.' },
    { q: 'Jaké jsou podmínky vzniku manželství?', a: 'Souhlasný a úplný projev vůle svéprávného muže a ženy při sňatečném obřadu – občanském (před orgánem veřejné moci) nebo církevním – za přítomnosti dvou svéprávných svědků. Projev vůle může učinit i zmocněnec.' },
    { q: 'Jaké jsou zákonné překážky manželství?', a: 'Nedostatek věku (18 let, od 16 s přivolením soudu), nedostatek plné svéprávnosti, trvající manželství či partnerství, příbuzenství a adopce, poručenství, pěstounství a svěření do péče.' },
    { q: 'Kdy je manželství neplatné a od kdy?', a: 'Vzniklo-li přes zákonnou překážku (vadný projev vůle – nátlak, omyl; vada osoby – věk, svéprávnost; vztah snoubenců – příbuzenství, poručenství). Je platné, dokud soud rozsudkem nerozhodne; neplatnost nastává právní mocí rozsudku.' },
    { q: 'Jak zaniká manželství a co je předpokladem rozvodu?', a: 'Smrtí, prohlášením za mrtvého a rozvodem. Předpokladem rozvodu je vážný rozvrat, kvůli kterému manželství nemůže plnit své funkce a společenský účel.' },
    { q: 'Jaké byly podmínky nesporného rozvodu?', a: 'Manželství trvalo nejméně rok, manželé spolu nežijí nejméně 6 měsíců, druhý se k návrhu připojí, předloží dohodu o vypořádání majetku, o bydlení a výživě a soudem schválenou dohodu o poměrech nezletilých dětí. Od 1. 1. 2026 nahrazen smluveným rozvodem.' },
    { q: 'Co tvoří SJM a co do něj nepatří?', a: 'Patří: majetek (věci, pohledávky, majetková práva), dluhy, příjmy obou manželů ze závislé činnosti a zisk z výlučného majetku. Nepatří: věci k osobní potřebě, dary, dědictví a odkazy nabyté jen jedním, co nabyl jeden v souvislosti s výlučným vlastnictvím a náhrada za jeho výlučný majetek.' },
    { q: 'Jaké jsou režimy SJM?', a: 'Zákonný (vzniká sňatkem), smluvený a založený rozhodnutím soudu – zrušení SJM, zúžení SJM, režim oddělených jmění.' },
    { q: 'Jak lze vypořádat SJM?', a: 'a) dohodou do 3 let od PM rozsudku o rozvodu; b) rozhodnutím soudu na návrh jednoho z manželů do 3 let; c) po 3 letech uplatněním zákonné domněnky § 741; d) rozhodnutím soudu v dědickém řízení při smrti manžela.' },
    { q: 'Co stanoví domněnka § 741?', a: 'Nevypořádají-li se manželé do 3 let od rozvodu, platí nevyvratitelně: hmotné movité věci má ten, kdo je 3 roky účelně držel a užíval; ostatní hmotné věci jsou v podílovém spoluvlastnictví se stejnými podíly; ostatní majetková práva, dluhy a pohledávky patří oběma stejným dílem.' },
    { q: 'Co zahrnuje rodičovská odpovědnost a kdy vzniká a zaniká?', a: 'Péči o dítě a jeho zdraví a vývoj, ochranu, osobní styk, výchovu a vzdělání, určení bydliště, zastupování a správu jmění. Náleží oběma rodičům, vzniká narozením dítěte a zaniká jeho svéprávností; soud ji může pozastavit, omezit nebo rodiče zbavit.' },
    { q: 'Jaké druhy vyživovací povinnosti znáš?', a: 'Rodičů k dětem, dětí k rodičům, mezi ostatními příbuznými (hlavně v přímé řadě), mezi manžely, mezi rozvedenými manžely a příspěvek neprovdané matce od otce dítěte.' },
    { q: 'Jak vzniká registrované partnerství a kdo do něj nemůže vstoupit?', a: 'Souhlasným prohlášením dvou osob stejného pohlaví osobně před matričním úřadem; aspoň jedna musí být občanem ČR. Nemůže vstoupit příbuzný v přímé linii nebo sourozenec, osoba mladší 18 let, bez svéprávnosti nebo v trvajícím manželství či partnerství.' },
    { q: 'Co je rodinný závod a kdo jsou jeho členové?', a: 'Obchodní jmění sloužící podnikání, které vlastní člen rodiny a na jehož provozu se trvalou prací podílejí členové širší rodiny bez společenské či pracovní smlouvy (§ 700–707). Členy jsou společně pracující manželé (aspoň jeden), příbuzní do 3. stupně a sešvagření do 2. stupně.' },
    { q: 'Co se stane se SJM při konkurzu na jednoho z manželů?', a: 'Oprávnění uzavřít dohodu o vypořádání SJM nebo navrhnout vypořádání soudem přechází na insolvenčního správce; dohody dlužníka po prohlášení konkurzu jsou neplatné. Část SJM použitá se souhlasem manžela k podnikání spadá do majetkové podstaty. Za trvání účinků konkurzu nevznikne nové SJM.' },
    { q: 'Co přinesla novela 268/2025 Sb.?', a: 'Od 1. 1. 2026: smluvený rozvod místo sporného a nesporného (soud nezkoumá příčiny rozvratu, ruší se 6 měsíců odloučení), spojení řízení o rozvodu a o dětech, rozsah péče místo kategorií výlučná/společná/střídavá, nepřímý styk, přihlížení k potenciálním příjmům u výživného, postoupení pohledávky na výživné, prozatímní rozhodnutí a výslovný zákaz tělesných trestů.' }
  ]
});
