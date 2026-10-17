registerTopic({
  id: 'rodinne-pravo', order: 10, icon: '👨‍👩‍👧', title: 'Rodinné právo a podnikání, SJM', src: 'doplneno', where: 'Přednáška 7',
  summary: 'Manželství, registrované partnerství, rodičovská odpovědnost a vyživovací povinnost; společné jmění manželů (SJM) a jeho vliv na podnikání; formy podnikání (OSVČ, s.r.o., a.s., v.o.s., k.s.), veřejný rejstřík, rodinný podnik a evropský rámec.',
  vocab: [
    {w:'FO a PO',x:'Fyzická osoba je člověk, právnická osoba (PO) je firma či jiná organizace s vlastní právní osobností.'},
    {w:'Ručení',x:'Odpovědnost za dluh vlastním majetkem; „neomezené“ ručení znamená, že věřitel může sáhnout na vše, co ručitel vlastní.'},
    {w:'Veřejná listina (notářský zápis)',x:'Úřední dokument sepsaný notářem; zákon ho vyžaduje u zásadních úkonů, např. změny SJM nebo založení s.r.o.'},
    {w:'Matrika',x:'Úřad (u obce), který eviduje narození, sňatky a úmrtí a vydává o nich doklady.'},
    {w:'Zletilost a nezletilé dítě',x:'Zletilý je člověk od 18 let; nezletilý je mladší a rodiče ho zastupují.'},
    {w:'Společník × akcionář',x:'Společník vlastní podíl ve společnosti (v.o.s., s.r.o.); akcionář vlastní akcie v akciové společnosti.'},
    {w:'Statutární orgán',x:'Osoba nebo skupina (jednatel, představenstvo), která jedná jménem právnické osoby navenek.'},
    {w:'Základní kapitál a vklad',x:'Vklad je to, co společník do společnosti vloží (peníze, věc); součet vkladů tvoří základní kapitál.'}
  ],
  key: [
    '<b>Manželství</b> (§ 655 an.): trvalý svazek muže a ženy; vzniká <b>souhlasným prohlášením</b> před oprávněným orgánem (matrika/obec, církev), zaniká <b>smrtí</b>, <b>prohlášením za mrtvého</b>, <b>rozvodem</b>.',
    '<b>SJM</b> (§ 708 an.) vzniká <b>sňatkem</b>; tvoří je <b>vše, čeho manželé nabyli za trvání manželství</b> (výdělek, zisk z podnikání), s výjimkou majetku výslovně vyloučeného (dar, dědictví, osobní věci…).',
    '<b>Správa SJM</b>: každý manžel může činit <b>běžné záležitosti</b> sám; k právnímu jednání o <b>podstatné věci</b> (zejm. nemovitost, rodinný dům, podíl) je třeba <b>souhlas druhého manžela</b> (§ 714).',
    '<b>Zúžení, rozšíření i zrušení SJM</b> lze smluvit jen <b>notářským zápisem</b> (smlouva) nebo rozhodne <b>soud</b> (významné důvody); SJM zaniká i rozvodem, smrtí.',
    '<b>Rodičovská odpovědnost</b> (péče, výchova, zastupování, správa jmění dítěte) × <b>vyživovací povinnost</b> (rodiče ↔ děti, manželé) – zákonná, nelze se jí vzdát.',
    '<b>Podnikatel</b> (§ 420 NOZ): samostatná výdělečná činnost, soustavně, vlastním jménem, na vlastní odpovědnost, za účelem zisku. <b>OSVČ ručí celým majetkem</b> (včetně SJM).',
    '<b>Obchodní korporace</b> (zák. 90/2012 Sb.): v.o.s., k.s., s.r.o., a.s. (+ družstvo, evropské formy); vznikají <b>zápisem do obchodního rejstříku</b> (zák. 304/2013 Sb.), jsou PO.',
    '<b>Rodinný podnik</b> nemá samostatnou právní formu – je to podnik vlastněný a řízený rodinou (typicky OSVČ, s.r.o., v.o.s.); řeší se nástupnictví, SJM a pracovněprávní vztah rodiny k podniku.'
  ],
  sections: [
    { title: 'Manželství a registrované partnerství', blocks: [
      { t: 'table', head: ['', 'Manželství (§ 655 an.)', 'Registrované partnerství (zák. 115/2006 Sb.)'], rows: [
        ['Podstata', 'trvalý svazek muže a ženy', 'trvalé společenství dvou osob <b>stejného pohlaví</b>'],
        ['Vznik', 'souhlasné prohlášení snoubenců před <b>úřadem</b> (matrika, obecní úřad) nebo církví; za přítomnosti dvou svědků; veřejně', 'prohlášení před matričním úřadem; zápis do evidence'],
        ['Věk', '<b>18 let</b>; mladší 18, nejméně 16 jen se souhlasem soudu', '18 let'],
        ['Překážky', 'dosavadní manželství/partnerství, <b>příbuzenství v přímé linii a sourozenci</b>, osoba s omezenou svéprávností (jen se souhlasem soudu)', 'obdobně'],
        ['Majetek', '<b>SJM</b> (zákonné společné jmění manželů)', 'bez SJM – majetek odděleně (vlastní podíl), úprava smlouvou'],
        ['Zánik', 'smrt, prohlášení za mrtvého, <b>rozvod soudem</b>, neplatnost manželství', 'smrt, rozhodnutí soudu o zrušení partnerství'],
        ['Děti', 'společné osvojení lze; společná rodičovská odpovědnost', 'úprava osvojení a rodičovství se v poslední době mění – ověřit aktuální znění zák. 115/2006 Sb.']
      ] },
      { t: 'p', x: '<b>Rozvod</b> provádí <b>soud</b>. Dva typy: (1) <b>dohodou</b> manželů (§ 755) – manželství trvá alespoň 1 rok, manželé spolu nejméně 6 měsíců nežijí, mají dohodu o výživě, úpravě bydlení, vypořádání SJM a o dětech; (2) <b>sporem</b> – manželství je hluboce a trvale rozvráceno, soud zkoumá důvody. Soud vždy upraví poměry nezletilých dětí.' },
      { t: 'p', x: '<b>Neplatnost manželství</b> (absolutní/relativní): např. manželství uzavřené s osobou již v manželství, s příbuzným, z donucení (omyl, lest). Prohlásit ho za neplatné může jen soud.' },
      { t: 'tip', x: 'Manželství vzniká <b>souhlasným prohlášením</b> před oprávněným orgánem (matrika, obec, registrovaná církev). Občanský i církevní sňatek mají stejné právní účinky; soukromý obřad bez oprávněného orgánu manželství nezakládá.' },
      { t: 'ex', x: 'Pepa a Marie jsou svoji 8 měsíců, žijí odděleně 7 měsíců a mají dohodu o všem. Mohou se rozvést dohodou? Ne – manželství muselo trvat alespoň 1 rok. Zbývá rozvod sporem, který soud povolí, jen je-li manželství hluboce rozvráceno.' }
    ] },
    { title: 'Rodičovská odpovědnost a vyživovací povinnost', blocks: [
      { t: 'def', term: 'Rodičovská odpovědnost (§ 865 an.)', x: 'Souhrn práv a povinností rodičů k nezletilému dítěti: <b>péče o dítě</b> (zdraví, výchova, vzdělání), <b>zastupování</b> dítěte, <b>správa jmění</b> dítěte. Vzniká narozením dítěte (rodičům), končí zletilostí (18 let) nebo uzavřením manželství. Vykonávají ji <b>oba rodiče</b>; i po rozvodu zůstává společná, ale soud určí, komu bude dítě svěřeno (do péče jednoho / střídavá péče).' },
      { t: 'table', head: ['Složka', 'Obsah'], rows: [
        ['Péče o dítě', 'zdraví, tělesný a duševní vývoj, výchova, vzdělání, bydlení'],
        ['Zastupování', 'právní jednání jménem dítěte; významné věci (nemovitost) – souhlas soudu'],
        ['Správa jmění', 'jmění dítěte spravuje rodič s péčí řádného hospodáře; k významným úkonům souhlas soudu'],
        ['Střídavá péče', 'po rozvodu soud může svěřit do střídavé péče, pokud je to v zájmu dítěte']
      ] },
      { t: 'table', head: ['Vyživovací povinnost', 'Obsah'], rows: [
        ['Mezi příbuznými v pořadí', 'rodiče → děti (do doby, než jsou schopné se samy živit); děti → rodiče (potřebují-li); další předci / potomci subsidiárně'],
        ['Mezi manžely (§ 687)', 'oba přispívají na potřeby rodiny úměrně; po rozvodu jen výjimečně: při nedostatku prostředků příspěvek na výživu bývalému manželovi, zpravidla nejdéle 3 roky od rozvodu'],
        ['Výše', 'podle <b>odůvodněných potřeb oprávněného</b> a <b>schopností, možností a majetkových poměrů povinného</b>; v zájmu dítěte (životní úroveň rodičů)'],
        ['Forma', 'zpravidla peněžitě, pravidelně; práva na výživné se nelze předem vzdát'],
        ['Trest', 'neplacení výživného = trestný čin zanedbání povinné výživy (§ 196 TZ)']
      ] },
      { t: 'warn', x: 'Vyživovací povinnost rodičů vůči dětem <b>trvá i po zletilosti</b>, dokud se dítě nedokáže živit samo (studium, soustavná příprava na povolání). Zrušit ji dohodou ani se jí předem vzdát nelze. Děti studující na VŠ mají zpravidla nárok na výživné po dobu soustavné přípravy na povolání.' },
      { t: 'ex', x: 'Rodiče se rozvedli, dítě je svěřeno matce. Otec platí výživné podle svých příjmů a potřeb dítěte (např. 5 000 Kč). Ztráta zaměstnání otce neznamená zánik povinnosti – soud výši může snížit.' }
    ] },
    { title: 'Společné jmění manželů (SJM)', blocks: [
      { t: 'def', term: 'SJM (§ 708 an.)', x: 'Zákonný majetkový režim manželů: do SJM patří <b>vše, čeho nabyl kterýkoli z manželů za trvání manželství</b>, s výjimkami stanovenými zákonem; zahrnuje i dluhy. <b>Vzniká dnem uzavření manželství, zaniká zánikem manželství</b> (rozvod, smrt) – nebo dřív smlouvou, rozhodnutím soudu.' },
      { t: 'table', head: ['Patří do SJM', 'Nepatří do SJM (výlučný majetek)'], rows: [
        ['výdělek (mzda, odměna)', 'majetek <b>nabytý před sňatkem</b>'],
        ['<b>zisk z podnikání</b> kteréhokoli z manželů', 'věc nabytá <b>darem nebo děděním</b> (pokud dárce/zůstavitel nestanoví jinak)'],
        ['nemovitost koupená za trvání manželství (i na jméno jednoho)', 'věci sloužící <b>osobní potřebě</b> jen jednoho (oblečení, hudební nástroj)'],
        ['výnosy (nájemné, úroky) z majetku, z vlastního majetku', 'věci vydané v <b>restituci</b> původnímu vlastníku (nebo jeho dědici)'],
        ['společně nabytý podíl v obchodní korporaci', 'věci získané <b>náhradou za škodu na zdraví</b> nebo za nemajetkovou újmu'],
        ['společné dluhy (hypotéka, úvěr)', 'věci vzniklé <b>z výlučného majetku</b> (prodej výlučné věci → výnos je výlučný); věci nabyté <b>právním jednáním týkajícím se výlučného majetku</b> (nahrazující věc)']
      ] },
      { t: 'warn', x: 'Nepleť si: SJM × podílové spoluvlastnictví. V SJM nemá žádný z manželů <b>vyměřený podíl</b> (ideální) – je to <b>bezpodílové</b> společenství. Podíly se určují teprve při vypořádání. Manžel nemůže „prodat polovinu“ věci z SJM.' },
      { t: 'table', head: ['Správa SJM', 'Pravidlo'], rows: [
        ['<b>Běžné záležitosti</b>', 'každý z manželů samostatně; i druhý manžel je jejich jednáním vázán'],
        ['<b>Podstatné věci</b> (§ 714)', 'právní jednání týkající se např. <b>nemovitosti</b>, rodinného bydlení, podniku, <b>hodnotného majetku</b> vyžaduje <b>souhlas druhého manžela</b>'],
        ['Chybí-li souhlas', 'jednání je <b>relativně neplatné</b> – dovolat se může jen manžel, který nesouhlasil, a to v zákonné lhůtě; zkoumá se i dobrá víra třetí osoby'],
        ['Zastoupení', 'manžel může druhého zastoupit, je-li zmocněn nebo druhý nemůže jednat']
      ] },
      { t: 'table', head: ['Změna SJM', 'Kdo / jak', 'Poznámka'], rows: [
        ['<b>Zúžení</b> rozsahu (část majetku mimo SJM)', '<b>smlouva manželů</b> – veřejná listina (notářský zápis)', 'např. vyloučení podniku jednoho z manželů'],
        ['<b>Rozšíření</b> (např. i majetek nabytý před sňatkem)', 'smlouva – veřejná listina', 'manželé mohou i zvláštní režim (oddělené jmění)'],
        ['<b>Zrušení</b> SJM za trvání manželství', 'smlouva (notářský zápis) <b>nebo soud</b> (§ 724) ze závažných důvodů', 'důvod: ohrožení zájmů rodiny, dluhy, nadměrné podnikání'],
        ['<b>Zánik</b> SJM', 'zánikem manželství – rozvodem (právní mocí), smrtí; zrušením', 'následuje <b>vypořádání</b>']
      ] },
      { t: 'p', x: '<b>Vypořádání SJM</b> (po zániku): dohodou (písemně; u nemovitosti formu listiny a vklad do katastru) nebo soudem. <b>Zásada rovných podílů</b>, ale soud přihlédne k potřebám nezletilých dětí a k tomu, <b>jak se který z manželů staral o rodinu a přispěl k nabytí majetku</b> (§ 742). Lhůta: pokud se manželé nevypořádají do <b>3 let</b> od zániku SJM, zákon předpokládá, že každý zůstává při tom, co užíval (§ 740) – ostatní se vypořádává jako podílové spoluvlastnictví.' },
      { t: 'ex', x: 'Pepa koupil za trvání manželství pozemek za svůj plat. Patří do SJM (nabyl jej za trvání manželství z výdělku). Pokud by pozemek zdědil, patří jen jemu (výlučný majetek). Pokud ho chce prodat za 3 mil. Kč, potřebuje souhlas manželky (§ 714); bez něj může být prodej neplatný.' }
    ] },
    { title: 'Formy podnikání, veřejný rejstřík', blocks: [
      { t: 'def', term: 'Podnikatel (§ 420 NOZ)', x: 'Ten, kdo <b>samostatně</b> vykonává na <b>vlastní účet a odpovědnost</b> výdělečnou činnost <b>živností nebo obdobným způsobem</b> <b>se záměrem činit tak soustavně</b> za účelem dosažení zisku. Zápis do obchodního rejstříku není pro podnikatele-fyzickou osobu povinný (jen živnostenský rejstřík).' },
      { t: 'table', head: ['Forma', 'Právní osobnost', 'Vznik', 'Základní kapitál / vklad', 'Ručení', 'Orgány'], rows: [
        ['<b>OSVČ</b> (živnostník, FO)', 'FO (bez PO)', 'ohlášením / koncesí – Živnostenský úřad (zák. 455/1991 Sb.): věk 18, svéprávnost, bezúhonnost, odborná způsobilost', 'žádný', '<b>neomezeně celým majetkem</b> (včetně SJM)', '—'],
        ['<b>Veřejná obchodní společnost</b> (v.o.s.)', 'PO', 'zápis do OR (min. 2 společníci)', 'žádný', 'společníci <b>neomezeně, společně a nerozdílně</b>', 'všichni společníci (statutární orgán)'],
        ['<b>Komanditní společnost</b> (k.s.)', 'PO', 'zápis do OR', 'komanditisté vklad (min. není)', '<b>komplementář</b> neomezeně; <b>komanditista</b> do výše nesplaceného vkladu zapsaného v OR', 'komplementáři; dozorčí rada nepovinná'],
        ['<b>Společnost s ručením omezeným</b> (s.r.o.)', 'PO', 'zakladatelská listina (notářský zápis), zápis do OR', 'min. vklad 1 Kč; zákonný minimální kapitál neexistuje', 'společníci ručí do výše <b>nesplacených vkladů</b> podle OR; za dluhy společnosti jinak neručí', 'valná hromada, jednatel(é), dozorčí rada (nepovinná)'],
        ['<b>Akciová společnost</b> (a.s.)', 'PO', 'stanovy / zakladatelská listina, zápis do OR', '<b>min. 2 000 000 Kč</b> (nebo 80 000 EUR)', 'akcionáři neručí; ztrácejí vloženou hodnotu', 'valná hromada, představenstvo, dozorčí rada (dualistický); nebo správní rada + statutární ředitel (monistický)'],
        ['<b>Družstvo</b>', 'PO', 'zápis do OR; min. 3 členové', 'základní členský vklad', 'člen neručí (nebo omezeně)', 'členská schůze, představenstvo, kontrolní komise']
      ] },
      { t: 'tip', x: 'V.o.s. ručí všichni <b>neomezeně</b> – k.s. ručí <b>komplementář neomezeně</b>, komanditista do vkladu – s.r.o. ručí do <b>nesplacených vkladů</b> – a.s. <b>neručí</b> akcionář vůbec. Čím větší omezení ručení, tím vyšší nároky (kapitál).' },
      { t: 'p', x: '<b>Veřejný rejstřík</b> (zák. 304/2013 Sb.): obchodní, spolkový, nadační rejstřík, rejstřík ústavů, společenství vlastníků. Vede jej <b>rejstříkový soud</b> (krajský soud). Zásady: <b>formální publicita</b> (kdokoliv nahlédne), <b>materiální publicita</b> – kdo jedná v dobré víře, může se spolehnout na zapsané údaje; zapisují se údaje o společnosti, statutárním orgánu, společnících, vkladech. PO vzniká dnem zápisu.' },
      { t: 'table', head: ['', 'Podnikání FO (OSVČ)', 'Podnikání PO (obchodní korporace)'], rows: [
        ['Osobnost', 'podnikatel je člověk', 'samostatný subjekt práv'],
        ['Ručení', 'celým majetkem', 'obvykle jen majetkem společnosti (s.r.o., a.s.)'],
        ['Zdanění', 'daň z příjmů FO (15 %, vyšší příjmy 23 %), sociální a zdravotní pojištění', 'daň z příjmů PO 21 % + zdanění dividend (srážka 15 %)'],
        ['Zakladatelské náklady', 'nízké (ohlášení)', 'vyšší (notář, kapitál, zápis)'],
        ['Rejstřík', 'živnostenský rejstřík (nikoli OR)', 'obchodní rejstřík'],
        ['Vliv SJM', 'zisk podnikání jde do SJM; druhý manžel nemusí podnikat, ale dluhy dopadají na SJM', 'podíl v PO patří do SJM, hlasovací práva vykonává společník']
      ] }
    ] },
    { title: 'Podnikání a SJM, rodinný podnik, evropský rámec', blocks: [
      { t: 'table', head: ['Situace', 'Důsledek'], rows: [
        ['Manžel podniká jako OSVČ', 'zisk i majetek podnikání patří do <b>SJM</b>; k právním jednáním týkajícím se <b>podstatné věci SJM</b> (nemovitost, podnik) potřebuje souhlas druhého manžela; <b>věřitel se může uspokojit z celého SJM</b> (dluh vznikl za trvání manželství)'],
        ['Manžel zadluží firmu', 'za dluh z podnikání odpovídá i SJM; druhý manžel nese riziko, i když v podnikání nevystupuje'],
        ['Ochrana majetku rodiny', '<b>zúžení SJM</b> (smlouva – notářský zápis), případně <b>soudní zrušení SJM</b> při ohrožení rodiny; vlastní majetek / odpovědnost jen s.r.o.'],
        ['Manžel – společník v s.r.o.', 'podíl v s.r.o. nabytý za trvání manželství je <b>v SJM</b>; práva (hlas, dividendy) vykonává <b>společník</b>; nakládání s podílem vyšší hodnoty může vyžadovat souhlas druhého manžela (§ 714)'],
        ['Podnikání bez souhlasu', 'za podnikání jednoho odpovídá SJM, ledaže smlouva o zúžení / soud rozhodl jinak'],
        ['Manžel pomáhá v podniku', 'jako <b>zaměstnanec</b> (pracovní poměr / DPP), jako spolupracovník, nebo společník; nelze mlčky předpokládat zdarma']
      ] },
      { t: 'def', term: 'Rodinný podnik', x: 'Podnik, ve kterém <b>rozhodující vliv (kapitál, řízení) drží rodina</b>. České právo pro něj nezná zvláštní právní formu; využívá se OSVČ, v.o.s., s.r.o. i a.s. Typické otázky: <b>nástupnictví</b> (převod na děti, dědictví), <b>spolupráce rodinných příslušníků</b> (pracovní smlouva / dohoda / společník), <b>majetkové vyrovnání</b> (SJM, dědické podíly), <b>ochrana majetku rodiny</b> (zúžení SJM, svěřenský fond, podíly).' },
      { t: 'table', head: ['Výhody rodinného podniku', 'Rizika'], rows: [
        ['dlouhodobá orientace, důvěra, rychlé rozhodování, flexibilita', 'smíšení rodinných a firemních záležitostí (spory)'],
        ['nízké náklady (pracovní síla v rodině)', 'problém nástupnictví a dědických sporů'],
        ['rodinná identita, kontinuita', 'závislost na jednotlivcích, nedostatek odborného řízení'],
        ['daňová optimalizace (rodinné příslušníky zapojit legálně)', 'rozdíl rozvodu / vypořádání SJM → ohrožení podniku']
      ] },
      { t: 'warn', x: 'Při <b>rozvodu</b> se do vypořádání SJM započte i podnik a podíl v obchodní korporaci. Manžel bez podílu v podniku má nárok na <b>vypořádání</b> (finanční); proto se doporučuje zúžení SJM před zahájením podnikání (předmanželská smlouva / dohoda).' },
      { t: 'p', x: '<b>Evropský rámec</b>: EU zaručuje <b>svobodu usazování</b> (čl. 49 SFEU) a volný pohyb služeb, zboží, kapitálu, osob. Pro podnikání na jednotném trhu existují <b>evropské formy</b>: evropská společnost (SE, nařízení 2157/2001), evropské družstvo (SCE), evropské hospodářské zájmové sdružení (EHZS). Směrnice o právu obchodních společností sjednocují zveřejňování (jednotné rejstříky – BRIS), ochranu věřitelů. Pro <b>rodinné podniky</b> EU nemá zvláštní úpravu, ale existují doporučení (definice rodinného podniku Evropské komise) a podpora předávání podniků.' },
      { t: 'ex', x: 'Pepa s manželkou Marií podnikají v rodinné s.r.o. (obě podíly 50 %). Pepa chce prodat firmu cizí osobě. Potřebuje souhlas Marie jako společnice i manželky. Převod podílu patřícího do SJM bez souhlasu manželky by mohl být napadnutelný. Doporučení: smlouva o převodu s doložkou souhlasu, případně zúžení SJM.' }
    ] }
  ],
  mistakes: [
    'Domněnka, že do SJM patří i majetek <b>nabytý před sňatkem</b> nebo <b>darem a děděním</b> – nepatří (leda smlouvou). Naopak: majetek koupený za trvání manželství patří do SJM, i když je na jméno jednoho.',
    'Záměna <b>bezpodílového</b> SJM a podílového spoluvlastnictví – v SJM nelze „prodat svou polovinu“.',
    'Zapomíná se na <b>souhlas druhého manžela</b> u podstatné věci (§ 714) – jednání bez něj může být neplatné.',
    'SJM se <b>nezmění samo</b> – zúžení, rozšíření, zrušení vyžaduje smlouvu ve formě veřejné listiny nebo soud.',
    'OSVČ ručí celým majetkem vč. SJM; ručení v s.r.o. je omezeno jen do výše nesplacených vkladů.',
    'Nepleť minimální kapitál: a.s. 2 mil. Kč (80 000 EUR); s.r.o. už od 1 Kč; v.o.s. a k.s. nemají minimální kapitál.',
    'Rozvod dohodou předpokládá manželství trvající min. 1 rok, odloučení alespoň 6 měsíců a dohodu o dětech i majetku.',
    'Registrované partnerství ≠ manželství: bez SJM, jiné právní důsledky.'
  ],
  qa: [
    { q: 'Jak vzniká manželství a kdy zaniká?', a: 'Vzniká <b>souhlasným prohlášením</b> snoubenců před oprávněným orgánem (matrika, obec, církev) za účasti dvou svědků. Zaniká smrtí, prohlášením za mrtvého, <b>rozvodem</b> (soud). Neplatné manželství rozhodne soud.' },
    { q: 'Podmínky rozvodu dohodou.', a: 'Manželství trvalo alespoň 1 rok, manželé spolu nežijí alespoň 6 měsíců, mají dohodu o úpravě poměrů dětí, výživě, bydlení a majetku. Jinak rozvod sporem (hluboký a trvalý rozvrat).' },
    { q: 'Co tvoří SJM a co do SJM nepatří?', a: 'Patří: vše, co manželé nabyli za trvání manželství (výdělek, podnikání, nemovitost, výnosy), včetně dluhů. Nepatří: majetek před sňatkem, dar, dědictví, osobní věci, restituce, náhrada škody na zdraví.' },
    { q: 'Jak se spravuje SJM?', a: 'Běžné záležitosti každý z manželů sám. K podstatným věcem (nemovitost, významný majetek, podnik) <b>souhlas druhého manžela</b> (§ 714); bez něj je jednání neplatné na dovolání druhého manžela.' },
    { q: 'Kdy a jak lze zúžit nebo zrušit SJM?', a: 'Smlouvou manželů formou veřejné listiny (notářský zápis), nebo rozhodnutím soudu při závažných důvodech (např. ohrožení rodiny podnikáním). Zaniká též rozvodem a smrtí – následuje vypořádání.' },
    { q: 'Jak probíhá vypořádání SJM?', a: 'Dohodou nebo soudem; zásadně rovné podíly, ale se zohledněním péče o rodinu, potřeb dětí a přispění k majetku. Nevypořádá-li se do 3 let od zániku, vzniká domněnka, že každý má, co užívá (§ 740).' },
    { q: 'Rozlište rodičovskou odpovědnost a vyživovací povinnost.', a: 'Rodičovská odpovědnost = péče, výchova, zastupování, správa jmění dítěte (do 18 let). Vyživovací povinnost = povinnost zajistit živobytí (peníze); trvá, dokud se dítě není schopno samo živit, i po zletilosti.' },
    { q: 'Jak se liší ručení společníků ve v.o.s., k.s., s.r.o. a a.s.?', a: 'V.o.s.: všichni neomezeně společně a nerozdílně. K.s.: komplementář neomezeně, komanditista do výše vkladu. S.r.o.: do výše nesplacených vkladů podle OR. A.s.: akcionář neručí (riskuje vložený kapitál).' },
    { q: 'Jaký je minimální základní kapitál a.s. a s.r.o.?', a: 'A.s.: 2 000 000 Kč (nebo 80 000 EUR). S.r.o.: žádný zákonný minimální kapitál – vklad min. 1 Kč na společníka (od NOZ 2014).' },
    { q: 'Co je veřejný rejstřík a jaký má význam?', a: 'Veřejný seznam právních faktů (obchodní, spolkový, nadační…), vede ho rejstříkový soud (zák. 304/2013 Sb.). Zásada formální a materiální publicity – kdo jedná v dobré víře, může se na zapsané údaje spolehnout. PO vzniká zápisem.' },
    { q: 'Pepa podniká jako OSVČ a vzal si úvěr 500 000 Kč, nesplácí. Z čeho se bude věřitel uspokojovat? Co s manželkou?', a: 'Z celého majetku Pepy, a protože dluh vznikl za trvání manželství a týká se podnikání, i ze SJM. Manželka sice sama neručí, ale ztratí majetek v SJM. Řešením mohla být smlouva o zúžení SJM nebo vedení podnikání v s.r.o.' },
    { q: 'Manžel chce bez vědomí manželky prodat dům ze SJM. Je prodej platný?', a: 'Ne bez souhlasu manželky – dům je podstatná věc (§ 714), jednání bez souhlasu je neplatné, pokud se manželka neplatnosti dovolá v zákonné lhůtě. Při sporu se zkoumá i dobrá víra kupujícího.' },
    { q: 'Co je rodinný podnik a jaké právní formy se pro něj používají?', a: 'Podnik, ve kterém má rodina rozhodující vliv. Zvláštní právní forma neexistuje – OSVČ, s.r.o., v.o.s., a.s. Řeší se nástupnictví, SJM, odměňování rodinných příslušníků a ochrana majetku.' },
    { q: 'Jaký je rozdíl mezi podnikáním FO a PO z hlediska ručení a vzniku?', a: 'FO: vzniká živnostenským oprávněním, ručí celým majetkem (vč. SJM). PO: vzniká zápisem do OR (s.r.o., a.s.), ručení omezené podle formy; osobní majetek společníků je chráněn.' }
  ]
});
