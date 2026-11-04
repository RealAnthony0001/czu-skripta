registerTopic({
  id: 'obcanske-pravo', order: 8, icon: '📕', title: 'Občanský zákoník: zásady a absolutní majetková práva', src: 'podklady', lec: [2,4], where: 'Přednáška 2 (úvod do NOZ) + Přednáška 4 (absolutní majetková práva, 23. 10. 2024)',
  summary: 'Cíle, struktura a zásady nového občanského zákoníku (89/2012 Sb.), nové termíny, zrušené a nově přijaté předpisy; věcná práva: vlastnictví a jeho omezení, nabytí a zánik, držba, věcná práva k věci cizí a ochrana vlastnictví.',
  vocab: [
    {w:'Sb.',x:'Sbírka zákonů – oficiální věstník, ve kterém se zákony vyhlašují; „89/2012 Sb.“ = zákon č. 89 z roku 2012.'},
    {w:'§ a odst.',x:'Paragraf (§) je základní jednotka zákona, odstavec (odst.) jeho část; „§ 1 odst. 2“ = druhý odstavec prvního paragrafu.'},
    {w:'Kodifikace',x:'Sepsání celé oblasti práva do jednoho ucelného zákona; rekodifikace = jeho nahrazení novým (zde starého OZ novým).'},
    {w:'Platnost × účinnost',x:'Zákon je platný, když je vyhlášen; účinný (závazný) je až od data stanoveného v něm, zde od 1. 1. 2014.'},
    {w:'Fyzická a právnická osoba',x:'Fyzická osoba (FO) je člověk, právnická osoba (PO) je organizace s vlastní právní subjektivitou (firma, spolek, obec).'},
    {w:'Svéprávnost',x:'Způsobilost osoby sama svými úkony nabývat práva a brát na sebe povinnosti; plná od 18 let.'},
    {w:'Věc movitá × nemovitá',x:'Nemovitá je pozemek, stavba a právo stavby (zapisují se do katastru); movitá je vše ostatní (auto, kolo, telefon).'},
    {w:'Dispozitivní × kogentní norma',x:'Dispozitivní pravidlo platí jen tehdy, když se strany nedohodnou jinak; kogentní platí vždy a odchýlit se nelze.'},
    {w:'Erga omnes',x:'„Vůči všem“ – absolutní práva (vlastnictví) musí respektovat každý.'},
    {w:'Vklad × záznam',x:'Vklad je zápis práva do katastru na návrh z vůle vlastníka (poplatek); záznam se provádí u přechodu práva ze zákona či z rozhodnutí.'}
  ],
  key: [
    '<b>NOZ = zákon č. 89/2012 Sb., účinnost 1. 1. 2014</b>, nahradil OZ 40/1964 Sb.; 3081 paragrafů, 5 částí. Současně přijaty <b>90/2012 Sb.</b> (o obchodních korporacích) a <b>91/2012 Sb.</b> (o mezinárodním právu soukromém).',
    '<b>Struktura:</b> 1. obecná část (§ 1–654), 2. rodinné právo (§ 655–975), 3. absolutní majetková práva (§ 976–1720 – věcná práva + dědictví), 4. relativní majetková práva (§ 1721–3014), 5. společná, přechodná a závěrečná (§ 3015–3081).',
    '<b>Zásady:</b> autonomie vůle (§ 1 odst. 2 – dispozitivnost), poctivost a dobrá víra (§ 6–7), zákaz zneužití práva (§ 8), ochrana slabší strany, právní jistota, ochrana osobnosti, pacta sunt servanda, zákaz těžit z vlastního bezpráví.',
    '<b>§ 4:</b> každý svéprávný má rozum <b>průměrného člověka</b> a schopnost jej užívat s běžnou péčí. <b>§ 5:</b> kdo se hlásí k odbornému výkonu, jedná s <b>odbornou péčí</b>.',
    '<b>Nové pojmy:</b> rozhrady, přivlastnění, přestavek, právo stavby, služebnost, beneficient, svěřenský fond, obmyšlený, závdavek (není záloha), výprosa, pacht, výměnek, odvážné smlouvy.',
    '<b>Věcná práva</b> (§ 976 an.) působí proti všem (erga omnes), nepromlčují se a jejich výčet určuje jen zákon. <b>Vlastnictví</b> (§ 1011) je nejsilnější z nich; omezuje ho zákon (sousedská práva, imise, vyvlastnění za náhradu) – <b>vlastnictví zavazuje</b>.',
    '<b>Nabytí</b>: originární × derivativní; <b>převod</b> (z vůle vlastníka, vklad do katastru 2 000 Kč) × <b>přechod</b> (dědění, rozhodnutí, záznam zdarma). <b>Vydržení</b>: movitá 3 roky, nemovitá 10 let (mimořádné 6 / 20); opuštění movité věci 3 roky, nemovité 10.',
    '<b>Věcná práva k věci cizí</b>: právo stavby, věcná břemena (služebnost × reálné břemeno), zástavní právo, zadržovací právo. <b>Držba</b> = faktická moc + vůle vykonávat právo pro sebe (řádná, poctivá, pravá – domněnka).',
    '<b>Ochrana vlastnictví</b>: vlastnická (reivindikační) žaloba o vydání věci (§ 1040), zápůrčí o zdržení se rušení (§ 1042), publiciánská (§ 1044), určovací (§ 80 o. s. ř.).'
  ],
  sections: [
    { title: 'Cíle, struktura a rekodifikace', blocks: [
      { t: 'nums', title: 'NOZ v číslech', items: [
        { n: '89/2012', u: 'Sb.', x: 'zákon č. 89/2012 Sb. – nový občanský zákoník' },
        { n: '1. 1. 2014', u: '', x: 'účinnost (přijat byl už v roce 2012)' },
        { n: '3081', u: 'paragrafů', x: 'rozsah zákona' },
        { n: '5', u: 'částí', x: 'struktura NOZ' },
        { n: '90/2012', u: 'Sb.', x: 'zákon o obchodních korporacích (přijat současně)' },
        { n: '91/2012', u: 'Sb.', x: 'zákon o mezinárodním právu soukromém (přijat současně)' }
      ] },
      { t: 'timeline', title: 'Od starých kodexů k NOZ', items: [
        { when: '1937', h: 'Občanský zákoník z roku 1937', x: 'tradice – zejména terminologie a systematika' },
        { when: '40/1964 Sb.', h: 'Dosavadní občanský zákoník', x: 'nahrazen NOZ' },
        { when: '2012', h: 'Přijetí 89/2012, 90/2012, 91/2012 Sb.', x: 'NOZ + zákon o obchodních korporacích + MPS' },
        { when: '1. 1. 2014', h: 'Účinnost NOZ', x: 'zrušeny OZ, obchodní zákoník, zákon o rodině aj. (§ 3080)' }
      ] },
      { t: 'ul', items: [
        '<b>Cíle:</b> modernizovat, sjednotit a zpřehlednit soukromé právo (občanské, rodinné i obchodní právo v jednom kodexu).',
        'Posílit <b>smluvní autonomii</b> a <b>ochranu slabší strany</b>.',
        'Reflektovat hodnoty (lidská důstojnost, osobnost) a navázat na tradice (OZ 1937).'
      ] },
      { t: 'tree', title: 'Struktura NOZ (5 částí)', root: { h: 'NOZ – 89/2012 Sb.', x: '§ 1–3081', kids: [
        { h: '1. Obecná část', x: '§ 1–654: základní ustanovení, osoby, právní jednání, zastoupení, věci, čas, promlčení' },
        { h: '2. Rodinné právo', x: '§ 655–975: manželství, příbuzenství, rodičovství, poručenství a jiné formy péče' },
        { h: '3. Absolutní majetková práva', x: '§ 976–1720', kids: [
          { h: 'Věcná práva', x: '§ 976–1474: vlastnictví, držba, věcná práva k věci cizí…' },
          { h: 'Dědické právo', x: '§ 1475–1720' }
        ] },
        { h: '4. Relativní majetková práva', x: '§ 1721–3014: závazky ze smluv, z deliktů (náhrada újmy), bezdůvodné obohacení' },
        { h: '5. Společná, přechodná a závěrečná', x: '§ 3015–3081: přechodná úprava, zrušovací ustanovení (§ 3080)' }
      ] } },
      { t: 'svg', title: 'NOZ v poměru počtu paragrafů', x: ZPN.nozBar(), cap: 'Pruhy ukazují rozsah částí NOZ: obecná část § 1–654, rodinné právo § 655–975, absolutní majetková práva § 976–1720, relativní § 1721–3014, společná a závěrečná ustanovení § 3015–3081; celkem 3 081 paragrafů.' },
      { t: 'warn', x: 'Slajdy uvádějí část 1 jako „§ 1–302“ a dědictví řadí do relativních práv – to je nepřesné. Podle zákona je obecná část § 1–654 a <b>dědické právo je součástí třetí části</b> (absolutní majetková práva), nikoli relativních práv. (Ve slajdech také „91/212“ – správně 91/2012 Sb.)' },
      { t: 'ul', items: [
        'Členění: části → hlavy → díly → oddíly. Zásada: <b>jeden paragraf nejvýše dva odstavce, odstavec nejvýše dvě věty</b> (ne vždy dodržena).',
        'Příbuzné instituty od jednodušších ke složitějším a od obecných ke zvláštním (ne podle důležitosti).',
        'Terminologie: návrat k tradiční češtině (svéprávnost, právní jednání, osoba místo účastník, nabídka místo návrhu na uzavření smlouvy; „zapsaný“ místo „registrovaný“, „nakládat“ místo „disponovat“), ale ponechány zdomácnělé termíny (orgán, forma, prekluze, detence).',
        'Převzal řadu pravidel ze zrušených zákonů a doplnil ta, která dosavadní právo neřešilo nebo řešilo stroze.'
      ] },
      { t: 'versus', title: 'Zrušeno × nově přijato', x: 'Rekodifikace z roku 2012 neznamenala jen nový občanský zákoník, ale výměnu celého základu soukromého práva. Místo mnoha samostatných předpisů – starého občanského zákoníku, obchodního zákoníku, zákona o rodině nebo zákona o vlastnictví bytů – vznikl jeden kodex, doplněný zákonem o obchodních korporacích a zákonem o mezinárodním právu soukromém, které byly přijaty současně. Rodinné právo, spolky nebo bytové jednotky proto dnes hledáš přímo v občanském zákoníku. Původní předpisy byly k 1. lednu 2014 zrušeny.', cols: [
        { h: 'Zrušeno (příklady, § 3080)', items: [
          '40/1964 Sb. občanský zákoník',
          '513/1991 Sb. obchodní zákoník',
          '94/1963 Sb. zákon o rodině',
          '116/1990 Sb. o nájmu a podnájmu nebytových prostor',
          '83/1990 Sb. o sdružování občanů',
          '248/1995 Sb. o obecně prospěšných společnostech',
          '591/1992 Sb. o cenných papírech',
          '72/1994 Sb. o vlastnictví bytů'
        ] },
        { h: 'Nově přijato', items: [
          '<b>89/2012 Sb.</b> občanský zákoník',
          '<b>90/2012 Sb.</b> o obchodních korporacích',
          '<b>91/2012 Sb.</b> o mezinárodním právu soukromém',
          '+ doprovodný zákon novelizující desítky předpisů (živnostenský, stavební zákon, zákoník práce, správní řád, autorský zákon, o ochraně spotřebitele, o veřejných zakázkách aj.)'
        ] }
      ] },
      { t: 'warn', x: 'Slajdy uvádějí různé počty zrušených předpisů („238“ i „více než 100“). Počet si nezapamatovávej – důležité je vědět, které klíčové předpisy NOZ nahradil (občanský a obchodní zákoník, zákon o rodině, o vlastnictví bytů, o sdružování občanů, o o.p.s.).' }
    ] },
    { title: 'Zásady soukromého práva (§ 1–9 NOZ)', blocks: [
      { t: 'law', ref: '§ 1 NOZ', x: 'Soukromé právo tvoří ustanovení upravující vzájemná práva a povinnosti osob; jeho uplatňování je nezávislé na uplatňování práva veřejného. <b>Nezakazuje-li to zákon výslovně, mohou si osoby ujednat práva a povinnosti odchylně od zákona.</b> Zakázána jsou ujednání porušující <b>dobré mravy, veřejný pořádek nebo právo týkající se postavení osob</b> (včetně ochrany osobnosti).' },
      { t: 'icons', title: 'Základní zásady NOZ', items: [
        { i: '🤝', h: 'Autonomie vůle', x: 'smluvní svoboda; základ je <b>konsenzus</b>, zákon je <i>ultima ratio</i>; omezení jen zákonem (ochrana slabší strany)' },
        { i: '💎', h: 'Poctivost a dobrá víra', x: '§ 6–7: kdo jedná poctivě, požívá důvěry; dobrá víra se presumuje; <b>zákaz zneužití práva</b> (§ 8)' },
        { i: '⚖️', h: 'Dobré mravy a veřejný pořádek', x: 'jednání jim nesmí odporovat; soud přihlíží i bez návrhu (§ 588)' },
        { i: '🛡️', h: 'Ochrana slabší strany', x: 'spotřebitelé, nájemci, zaměstnanci, nezletilí, osoby s omezenou schopností právně jednat; výklad v jejich prospěch' },
        { i: '🏛️', h: 'Právní jistota', x: 'stabilita právního řádu, předvídatelný výklad' },
        { i: '🧑‍🤝‍🧑', h: 'Ochrana osobnosti', x: 'život, zdraví, svoboda, čest, soukromí, rodinný život' },
        { i: '📃', h: 'Pacta sunt servanda', x: 'smlouvy se mají dodržovat' },
        { i: '🚷', h: 'Nikdo netěží z bezpráví', x: 'kdo způsobí neplatnost, nemůže se jí dovolávat; kdo poruší povinnost, nahradí újmu' }
      ] },
      { t: 'svg', title: 'Pořadí použití pravidel', x: ZPN.rulesOrder(), cap: 'Schody shora dolů: nejdřív to, co platí vždy, pak dohoda, nakonec dispozitivní zákon.' },
      { t: 'tip', x: 'Hierarchie: nejdřív dohoda stran (autonomie), pokud ji není, použije se dispozitivní zákon; kogentní normy a dobré mravy vždy platí. Odborník = vyšší standard péče (§ 5).' },
      { t: 'law', ref: '§ 4 NOZ', x: '<b>Průměrný člověk:</b> každá svéprávná osoba má rozum průměrného člověka i schopnost užívat jej s běžnou péčí a opatrností. Kdo se jeví jako průměrný člověk, může se spolehnout, že i ostatní tak jednají. Posuzování, co osoba měla a mohla vědět, je objektivizováno.' },
      { t: 'law', ref: '§ 5 NOZ', x: '<b>Odborná péče:</b> kdo se veřejně nebo ve styku s jinou osobou přihlásí k odbornému výkonu jako příslušník určitého povolání nebo stavu, dává najevo, že je schopen jednat se znalostí a pečlivostí s povoláním spojenou. Významné hlavně pro <b>náhradu škody</b> (odborná péče se vyžaduje, jakmile se někdo za odborníka vydává).' },
      { t: 'warn', x: 'Slajdy zdůrazňují, že NOZ <b>výslovně neobsahuje zásadu rovnosti stran</b> (dřívější absolutizace rovnosti zastírala přirozenou nerovnost). Zákon vychází z autonomie vůle a ochrany slabší strany.' }
    ] },
    { title: 'Nové pojmy NOZ', blocks: [
      { t: 'icons', title: 'Nemovitosti a sousedství', items: [
        { i: '🧱', h: 'Rozhrady', x: 'ploty, zdi, meze, strouhy na hranici pozemků' },
        { i: '🪹', h: 'Přivlastnění', x: 'nabytí věci, která nikomu nepatří (opuštěná), dovoluje-li to zákon' },
        { i: '🏠', h: 'Přestavek', x: 'stavba přesahuje malou částí na cizí pozemek' },
        { i: '🏗️', h: 'Právo stavby', x: 'právo mít na cizím pozemku stavbu (i postavit); je to nemovitá věc, stavba nemusí existovat při zřízení' },
        { i: '🚪', h: 'Služebnost', x: '(věcné břemeno) vlastník zatížené věci něco strpí nebo se zdrží: okap, pastva, voda, sítě, cesta' }
      ] },
      { t: 'tree', title: 'Svěřenský fond', root: { h: 'Svěřenský fond', x: 'trvale vyčleněný majetek bez vlastníka, spravovaný správcem k určitému účelu', kids: [
        { h: 'Beneficient', x: 'ten, v jehož prospěch je majetek spravován' },
        { h: 'Obmyšlený', x: 'možný příjemce plnění z fondu' }
      ] } },
      { t: 'icons', title: 'Smlouvy a dary', items: [
        { i: '🔐', h: 'Závdavek', x: 'potvrzuje uzavření smlouvy, jistota splnění závazku' },
        { i: '🎁', h: 'Odvolání daru pro nouzi', x: 'dárce v nouzi může žádat vrácení nebo náhradu v penězích' },
        { i: '🙏', h: 'Výprosa', x: 'bezplatné a bezúčelné přenechání věci k užívání na neurčitou dobu' },
        { i: '🌾', h: 'Pacht', x: 'dočasné užívání věci za pachtovné nebo za část výnosu' },
        { i: '👵', h: 'Výměnek', x: 'práva vyhrazená vlastníkem nemovitosti při prodeji (užívání části, péče)' },
        { i: '🎲', h: 'Odvážné smlouvy', x: 'prospěch / neprospěch závisí na nejisté události (pojištění, sázka)' }
      ] },
      { t: 'versus', title: 'Závdavek × záloha', x: 'Obojí je peněžní částka předaná při uzavírání smlouvy, ale s jiným účelem. Záloha je jen dřívější zaplacení části ceny – platba „na účet“ budoucího plnění, která nic nezajišťuje. Závdavek navíc potvrzuje, že smlouva byla uzavřena, a slouží jako jistota jejího splnění: když strana, která závdavek dala, smlouvu nesplní, může si ho druhá strana ponechat. Záloha tedy jen platí, závdavek i motivuje ke splnění.', cols: [
        { h: 'Závdavek', items: ['Potvrzuje uzavření smlouvy', 'Je jistotou, že závazek bude splněn'] },
        { h: 'Záloha', items: ['Předčasné plnění části ceny', 'Platba na účet ceny, není zajištění'] }
      ] },
    ] },
    { title: 'Věcná práva a vlastnické právo', blocks: [
      { t: 'def', term: 'Věcná práva (absolutní majetková práva)', x: 'Práva k věci, která dávají úplné nebo částečné právní panství nad určitou věcí.', items: ['úprava v OZ (§ 976–1720); předmětem je věc (hmotná, nehmotná i věcná práva, pokud to jejich povaha připouští), určená individuálně', 'působí <b>proti všem</b> (erga omnes) – ostatní se musí zdržet zásahu nebo strpět výkon práva', 'které právo k majetku je absolutní, určuje jen zákon (taxativní výčet)', 'nepromlčují se; rozhoduje osud věci, nikoli osoby, která k ní právo má'] },
      { t: 'tree', title: 'Struktura věcných práv v OZ', root: { h: 'Věcná práva', x: '§ 976 an.', kids: [
        { h: 'Obecná ustanovení', x: '§ 976–986' },
        { h: 'Držba', x: '§ 987–1010' },
        { h: 'Vlastnictví', x: '§ 1011–1114' },
        { h: 'Spoluvlastnictví', x: '§ 1115–1157; bytové § 1158–1222; přídatné § 1223–1235' },
        { h: 'Věcná práva k cizím věcem', kids: [
          { h: 'Právo stavby', x: '§ 1240–1256' },
          { h: 'Věcná břemena', x: '§ 1257–1308 (služebnosti, reálná břemena)' },
          { h: 'Zástavní právo', x: '§ 1309–1394' },
          { h: 'Zadržovací právo', x: '§ 1395–1399' }
        ] },
        { h: 'Správa cizího majetku', x: '§ 1400–1474' }
      ] } },
      { t: 'p', x: 'Věc a její třídění (hmotná × nehmotná, movitá × nemovitá, součást × příslušenství) je v tématu <b>Právní vztahy, subjekty a objekty</b>.' },
      { t: 'law', ref: 'Čl. 11 Listiny', x: '„Každý má právo vlastnit majetek. Vlastnické právo všech vlastníků má stejný zákonný obsah a ochranu. Dědění se zaručuje.“ Vyvlastnění nebo nucené omezení vlastnického práva je možné ve veřejném zájmu, na základě zákona a za náhradu. Vlastnictví zavazuje – nesmí být zneužito na újmu práv druhých ani v rozporu se zákonem chráněnými obecnými zájmy.' },
      { t: 'def', term: 'Vlastnické právo (§ 1011)', x: 'Přímé a výlučné právní panství individuálně určené osoby nad konkrétní věcí – nejsilnější a nejrozsáhlejší věcné právo.', items: ['vlastnictvím osoby je vše, co jí patří – věci hmotné i nehmotné, pokud to jejich povaha připouští', 'vlastník může se svým vlastnictvím v mezích právního řádu libovolně nakládat a vyloučit jiné osoby', 'všichni ostatní jsou povinni vlastníka nerušit'] },
      { t: 'table', head: ['Druh', 'Obsah'], rows: [
        ['Výlučné', 'všechna práva vykonává jeden vlastník'],
        ['Podílové spoluvlastnictví', 'více vlastníků, podíl se určuje zlomkem či procentem; správa společné věci se rozhoduje většinou podle velikosti podílů; zrušení dohodou nebo rozhodnutím soudu; předkupní právo mezi spoluvlastníky je značně omezeno; zvláštní úprava bytového spoluvlastnictví a společenství vlastníků jednotek'],
        ['Společné jmění manželů', 'jediné bezpodílové spoluvlastnictví; vzniká uzavřením manželství a končí jeho zánikem']
      ] },
      { t: 'tip', x: 'Vlastnictví = právo k věci (věc ti patří), absolutní. Pohledávka z kupní smlouvy je naopak relativní – působí jen vůči prodávajícímu. Proto se vlastnictví hájí vůči komukoli, pohledávka jen vůči dlužníkovi.' }
    ] },
    { title: 'Omezení vlastnického práva a sousedská práva', blocks: [
      { t: 'ul', items: [
        '<b>Se souhlasem vlastníka:</b> věc přenechá na přechodnou dobu jinému nebo k ní zřídí věcné břemeno.',
        '<b>Ze zákona:</b> jen ve veřejném zájmu, který nelze uspokojit jinak, na nezbytnou dobu a v nezbytné míře, za <b>plnou náhradu</b> odpovídající míře dotčení (zpravidla v penězích, lze i jinak, ujednají-li strany). Ve stavu nouze či naléhavého veřejného zájmu lze vlastníkovu věc použít, nelze-li cíle dosáhnout jinak.',
        '<b>Vlastnictví zavazuje:</b> zákaz zneužití práva, zákaz rozporu se zákonem chráněnými obecnými zájmy, zákaz obtěžování jiného nad míru přiměřenou poměrům a činů, jejichž hlavním účelem je jiného obtěžovat či poškodit (generální klauzule).'
      ] },
      { t: 'table', head: ['Sousedské omezení', 'Pravidlo'], rows: [
        ['<b>Imise</b>', 'vlastník se zdrží všeho, co působí, že odpad, voda, kouř, prach, plyn, pach, světlo, stín, hluk, otřesy (i zvířata) vnikají na sousední pozemek v míře nepřiměřené místním poměrům a podstatně omezují obvyklé užívání. Přímo přivádět imise je zakázáno bez ohledu na míru. U úředně schváleného provozu má soused jen nárok na náhradu újmy v penězích'],
        ['Cizí věc na pozemku', 'vlastník pozemku ji bez zbytečného odkladu vydá vlastníku nebo mu umožní ji vyhledat a odnést; vlastník smí stíhat na cizím pozemku zvíře nebo roj včel; vletí-li roj do cizího obsazeného úlu, nabývá vlastník úlu roj bez náhrady. Škodu způsobenou věcí, zvířetem či rojem může vlastník pozemku požadovat'],
        ['Plody ze sousedního pozemku', 'plody spadlé na zem ze stromů a keřů na sousední pozemek náleží jeho vlastníku (ne na veřejný statek)'],
        ['Ohrožení stavby nebo pozemku', 'nelze zbavit sousedovu stavbu opory zbouráním vlastní zdi ani dělat výkopy vyvolávající sesuv. Soused se může domáhat, aby se vlastník zdržel sázení stromů v těsné blízkosti hranice; není-li jinak, platí vzdálenost <b>3 m</b> u stromů dorůstajících obvykle výšky přes 3 m a <b>1,5 m</b> u ostatních'],
        ['Vstup na pozemek', 'vlastník umožní sousedovi vstup v době, rozsahu a způsobem nezbytným k údržbě nebo hospodaření, nelze-li cíle dosáhnout jinak; soused nahradí újmu'],
        ['Rozhrady', 'ploty, zdi, meze apod. mezi sousedními pozemky se považují za společné; společnou zeď každý užívá na své straně do poloviny tloušťky a nesmí ji ohrozit'],
        ['Nezbytná cesta', 'nemá-li nemovitost dostatečné spojení s veřejnou cestou, může vlastník žádat, aby mu soused za náhradu povolil cestu přes svůj pozemek; soud ji povolí v rozsahu nezbytném s co nejmenším zatížením souseda, i jako služebnost']
      ] }
    ] },
    { title: 'Nabytí a zánik vlastnictví', blocks: [
      { t: 'versus', title: 'Originární × derivativní nabytí', x: 'Rozdíl je v tom, odkud nabyvatel své právo má. Při originárním (původním) nabytí vlastnictví vzniká poprvé nebo nezávisle na předchůdci – třeba když vyrobíte novou věc nebo ji někdo zkonfiskuje, protože nikdo jiný ji dříve nevlastnil. Při derivativním (odvozeném) nabytí své právo odvozujete od předchozího vlastníka: koupíte kolo, zdědíte dům.', cols: [
        { h: 'Originární (původní)', items: ['právo vzniká poprvé nebo nezávisle na předchůdci', 'nově vyrobená věc, zkonfiskovaná věc', 'přivlastnění, přírůstek, vydržení'] },
        { h: 'Derivativní (odvozené)', items: ['nabyvatel odvozuje právo od předchůdce', 'kupní či darovací smlouva, dědění', 'převod × přechod'] }
      ] },
      { t: 'table', head: ['', 'Převod', 'Přechod'], rows: [
        ['Podstata', 'nabytí na základě <b>projevu vůle vlastníka</b>', 'nabytí na základě jiných skutečností (dědění, příklep v dražbě, rozhodnutí orgánu)'],
        ['Příklad', 'kupní či darovací smlouva', 'dědictví, rozhodnutí soudu'],
        ['Nemovitost v katastru', '<b>vklad</b> vlastnického práva, poplatek 2 000 Kč', '<b>záznam</b>, zdarma']
      ] },
      { t: 'tree', title: 'Nabývací tituly (právní skutečnosti, z jejichž účinků se nabývá)', root: { h: 'Nabytí vlastnictví', kids: [
        { h: 'Smlouva', kids: [
          { h: 'Movitá věc', x: 'převzetím věci, účinností smlouvy' },
          { h: 'Nemovitá věc', x: 'účinnost smlouvy + vklad do katastru (účinky zpětně ke dni podání návrhu)' }
        ] },
        { h: 'Dědictví', x: 'okamžikem smrti zůstavitele' },
        { h: 'Rozhodnutí orgánu veřejné moci', x: 'dnem určeným v rozhodnutí, jinak dnem právní moci (nutná právní moc a vykonatelnost)' },
        { h: 'Jiné skutečnosti stanovené zákonem', kids: [
          { h: 'Přivlastnění a nález' }, { h: 'Přírůstek', x: 'přirozený, umělý, smíšený' }, { h: 'Vydržení' }, { h: 'Nabytí od neoprávněného' }
        ] }
      ] } },
      { t: 'p', x: '<b>Přivlastnění a nález:</b> věc, která nikomu nepatří, si může každý přivlastnit (zásada okupační volnosti), nebrání-li tomu zákon nebo právo jiného. Movitá věc opuštěná vlastníkem nikomu nepatří; opuštěná nemovitost připadá státu. Nalezenou věc je třeba vrátit vlastníkovi nebo odevzdat obci; nálezné činí 1/10 ceny.' },
      { t: 'nums', title: 'Opuštění a vydržení', items: [
        { n: '3', u: 'roky', x: 'nevykonává-li vlastník právo k movité věci, má se za to, že ji opustil; vydržení movité věci' },
        { n: '10', u: 'let', x: 'opuštění a vydržení nemovité věci' },
        { n: '6 / 20', u: 'let', x: 'mimořádné vydržení (bez prokázání řádné a poctivé držby) – movitá / nemovitá' },
        { n: '1', u: 'rok', x: 'držba se přeruší, není-li vykonávána' }
      ] },
      { t: 'ul', items: [
        'Movitá věc zjevně nepatrné hodnoty zanechaná na místě přístupném veřejnosti se považuje za opuštěnou bez dalšího.',
        '<b>Vydržení:</b> drží-li poctivý držitel právo nepřetržitě po stanovenou dobu, vydrží je a věc nabude do vlastnictví; do doby se započte i řádná a poctivá držba předchůdce.'
      ] },
      { t: 'tree', title: 'Zánik vlastnictví', root: { h: 'Zánik vlastnického práva', kids: [
        { h: 'Absolutní', x: 'vlastnictví zaniká a nikdo jiný ho nenabývá', kids: [
          { h: 'Z vůle vlastníka', x: 'opuštění věci, spotřebování, zničení' },
          { h: 'Nezávisle na vůli', x: 'zánik věci (povodeň, zemětřesení)' }
        ] },
        { h: 'Relativní', x: 'právo nabývá jiný subjekt', kids: [
          { h: 'Z vůle vlastníka', x: 'smlouva (prodej)' },
          { h: 'Nezávisle na vůli', x: 'smrt (dědění), vydržení, rozhodnutí státního orgánu, ztráta věci' }
        ] }
      ] } }
    ] },
    { title: 'Držba', blocks: [
      { t: 'def', term: 'Držba', x: 'Faktická vláda nad věcí, kterou držitel ovládá a má vůli být jejím vlastníkem.', items: ['dva prvky: faktická moc nad věcí + vůle vykonávat právo pro sebe', 'držitelem je ten, kdo vykonává právo pro sebe', 'objektem je právo, které lze právním jednáním převést a které připouští trvalý nebo opakovaný výkon; osobní právo předmětem držby ani vydržení není'] },
      { t: 'table', head: ['Znak držby', 'Obsah'], rows: [
        ['<b>Řádná</b>', 'zakládá se na platném právním důvodu; kdo se ujme držby bezprostředně bez rušení cizí držby, z vůle předchozího držitele nebo na základě výroku orgánu veřejné moci'],
        ['<b>Poctivá</b>', 'držitel má z přesvědčivého důvodu za to, že mu právo náleží; nepoctivě drží ten, kdo ví nebo musí z okolností zjevně vědět, že mu právo nenáleží'],
        ['<b>Pravá</b>', 'nezískaná svémocně, potají nebo lstí, ani neproměňuje v trvalé právo to, co bylo jen vyprošeno']
      ] },
      { t: 'tip', x: 'Má se za to, že držba je <b>řádná, poctivá a pravá</b> – opak je třeba prokázat.' },
      { t: 'versus', title: 'Poctivý × nepoctivý držitel', x: 'Poctivý držitel věří, že mu věc právem náleží, například když koupil kolo od někoho, kdo se tvářil jako vlastník. Zákon ho chrání: smí věc užívat, brát plody a není nikomu odpovědný, a dokonce má nárok na úhradu nákladů, které na věc účelně vynaložil. Nepoctivý držitel ví (nebo musí vědět), že mu věc nepatří, a proto musí vydat vše, co z držby získal, a nahradit škodu. Nárok na úhradu nutných nákladů potřebných k zachování podstaty věci ale má i on.', cols: [
        { h: 'Poctivý držitel', items: ['smí věc držet, užívat, zničit i jinak s ní nakládat v mezích právního řádu a není nikomu odpovědný', 'náleží mu plody po oddělení a vybrané užitky', 'hradí se mu nutné a účelně vynaložené náklady (do výše přítomné hodnoty); běžné udržovací náklady ne'] },
        { h: 'Nepoctivý držitel', items: ['vydá veškerý užitek z držby a nahradí i ten, který by získala zkrácená osoba', 'nahradí veškerou škodu z držby', 'je mu uhrazena náhrada nutných nákladů na zachování podstaty věci'] }
      ] },
      { t: 'versus', title: 'Vlastnictví × držba × detence (detence doplněno)', x: 'Tři pojmy popisují tři různé vztahy k věci. Vlastnictví je právo: věc ti patří, i když ji právě nemáš u sebe, třeba když jsi kolo půjčil. Držba je faktický stav, kdy někdo vykonává právo pro sebe, jako by mu věc patřila – i ten, kdo kolo koupil od zloděje, je držitel, přestože vlastníkem není; poctivý řádný držitel se může stát vlastníkem vydržením. Detence je držení věci pro někoho jiného: kamarád, kterému jsi kolo půjčil, je detentor – kolo má u sebe, ale ví, že je tvoje, a proto ho nikdy nevydrží.', cols: [
        { h: 'Vlastnictví', items: ['Právo k věci', 'Věc patří vlastníkovi', 'Nejširší věcné právo'] },
        { h: 'Držba', items: ['Skutečný stav – výkon práva pro sebe', 'Držitel drží jako vlastník či jiný oprávněný', 'Řádná a poctivá držba vede k vydržení'] },
        { h: 'Detence', items: ['Držení věci pro někoho jiného', 'Detentor (nájemce, vypůjčitel) nedrží pro sebe', 'Bez vydržení'] }
      ] }
    ] },
    { title: 'Věcná práva k věci cizí', blocks: [
      { t: 'tree', title: 'Čtyři věcná práva k věci cizí', root: { h: 'Věcná práva k věci cizí', kids: [
        { h: 'Právo stavby', x: 'pozemek je zatížen právem stavebníka mít na povrchu nebo pod povrchem stavbu (i dosud nezřízenou); samo je věcí nemovitou; nelze zřídit na pozemku zatíženém právem příčícím se účelu stavby; u zastaveného pozemku jen se souhlasem zástavního věřitele' },
        { h: 'Věcná břemena', x: 'omezují vlastníka nemovité věci ve prospěch oprávněného: něco strpět, něčeho se zdržet, něco vykonat', kids: [
          { h: 'Služebnost', x: 'zatížený vlastník je pasivní – musí něco trpět nebo se zdržet; působí k osobě (in personam)' },
          { h: 'Reálné břemeno', x: 'vyžaduje aktivní chování vlastníka; věc zapsaná ve veřejném seznamu; působí k věci (in rem)' }
        ] },
        { h: 'Zástavní právo', x: 'zajišťuje dluh – věřitel se při neplnění uspokojí z výtěžku zástavy' },
        { h: 'Zadržovací právo', x: 'věřitel zadrží cizí movitou věc k zajištění dluhu' }
      ] } },
      { t: 'p', x: 'Věcná břemena se dělí také podle obsahu: <b>facere</b> (konat), <b>pati</b> (trpět), <b>omittere</b> (zdržet se).' },
      { t: 'table', head: ['Služebnost', 'Pravidlo'], rows: [
        ['Nabytí', 'smlouvou, pořízením pro případ smrti (závěť), vydržením, ze zákona, rozhodnutím orgánu veřejné moci'],
        ['Zánik', 'trvalou změnou (služebná věc už nemůže sloužit), dohodou, uplynutím doby; u osobní služebnosti úmrtím oprávněného'],
        ['Druhy upravené OZ', 'nezbytná cesta (šířka 3 m, geometrický plán, zápis do KN), inženýrské sítě, opora cizí stavby, okapu (svod dešťové vody na sousední pozemek), rozlivu, pastvy, na vodu, průhonu dobytka, stezky (60 cm – kolo, ne vozidla), cesty (3 m)'],
        ['Příklady', 'pozemková služebnost, užívací právo, služebnost bytu']
      ] },
      { t: 'ul', items: [
        '<b>Zástavní právo:</b> nesplní-li dlužník řádně a včas, věřitel se uspokojí z výtěžku zpeněžení zástavy do ujednané výše (jinak do výše pohledávky s příslušenstvím). Zástavou může být každá věc, s níž lze obchodovat, i věc, k níž dlužník vlastnictví teprve nabude.',
        'Zřizuje se <b>zástavní smlouvou</b>; zástava může být určena jednotlivě nebo tak, aby ji šlo určit kdykoli. Zajišťuje dluh a příslušenství, smluvní pokutu jen při zvláštním ujednání. Pokud movitá zástava není odevzdána věřiteli nebo třetí osobě, je potřeba písemná forma. Zástavní právo k nemovitosti je nemovitost a zapisuje se do katastru.',
        '<b>Zánik zástavního práva:</b> zánikem zajištěného dluhu; při trvající pohledávce zánikem zástavy, vzdáním se, vrácením zástavy zástavci, složením ceny zástavy nebo uplynutím doby.',
        '<b>Zadržovací právo:</b> kdo má povinnost vydat cizí movitou věc, kterou má u sebe, může ji zadržet k zajištění splatného (i nesplatného) dluhu; nesmí zadržet ten, kdo ji má neprávem (násilí, lest). Zadržení oznámí dlužníku, při písemné smlouvě písemně; pečuje o věc jako řádný hospodář. Zaniká zánikem dluhu nebo věci, vzdáním se, trvalým odchodem věci z moci věřitele nebo poskytnutím dostatečné jistoty.'
      ] },
      { t: 'p', x: '<b>(doplněno)</b> Předkupní právo může být u nemovitosti sjednáno jako věcné (zapsané v katastru) – viz téma Vybrané smlouvy.' }
    ] },
    { title: 'Ochrana vlastnictví', blocks: [
      { t: 'tree', title: 'Čím se bránit', root: { h: 'Ochrana vlastnického práva', x: '§ 1040–1044; prevence a obecné prostředky ochrany subjektivních práv', kids: [
        { h: 'Věc neprávem zadržena', kids: [
          { h: 'Vlastnická (reivindikační, vindikační) žaloba', x: '§ 1040–1041 – vydání věci, vyklizení bytu; nutná identifikace věci' }
        ] },
        { h: 'Rušení jinak než zadržením', kids: [
          { h: 'Zápůrčí (negatorní) žaloba', x: '§ 1042 – zdržet se protiprávního jednání či obnovit původní stav (zákaz imisí, upuštění od stavby na cizím pozemku)' }
        ] },
        { h: 'Zlepšená pozice držitele', kids: [
          { h: 'Publiciánská žaloba', x: '§ 1044' }
        ] },
        { h: 'Nejistota o právu', kids: [
          { h: 'Žaloba na určení vlastnického práva', x: '§ 80 o. s. ř. – deklaruje existenci nebo neexistenci práva' }
        ] }
      ] } },
      { t: 'ex', x: 'Soused ti na tvém pozemku postavil garáž a navíc ti zadržuje ukradené kolo. Proti garáži a parkování se bráníš <b>zápůrčí žalobou</b> (zdržet se rušení, odstranit stav); kolo vyžaduješ <b>vlastnickou (vindikační) žalobou</b>.' },
      { t: 'p', x: '<b>(doplněno)</b> Svépomoc proti bezprostřední hrozbě zásahu a ochrana držby v krátké lhůtě u soudu jsou v podkladech jen zmíněny jako obecné prostředky – podrobnosti si ověř v zákoně.' }
    ] }
  ],
  mistakes: [
    'Uvést, že NOZ má 5 částí s dědictvím v relativních právech. Správně: <b>dědické právo je součást 3. části</b> (absolutní majetková práva, § 976–1720), relativní práva jsou § 1721–3014.',
    'Zaměnit <b>závdavek</b> (jistota uzavření smlouvy) a <b>zálohu</b> (část ceny předem).',
    'Zaměnit účinnost NOZ (1. 1. 2014) s datem přijetí (zákon 89/2012 Sb. byl přijat v roce 2012).',
    'Tvrdit, že NOZ obsahuje zásadu rovnosti stran – výslovně ji neobsahuje, je postaven na autonomii vůle a ochraně slabší strany.',
    'Zaměnit § 4 (průměrný člověk, běžná péče) a § 5 (odborná péče při výkonu povolání).',
    'Zaměnit <b>držbu</b> a <b>vlastnictví</b>; <b>detentora</b> (drží pro jiného) a držitele (drží pro sebe).',
    'Zaměnit <b>vlastnickou (vindikační)</b> žalobu (vydání věci) a <b>negatorní</b> (zdržení se rušení jinak než zadržením).',
    'Myslet si, že právo stavby = stavba: je to <b>právo</b> mít na cizím pozemku stavbu (a samo je nemovitou věcí).'
  ],
  qa: [
    { q: 'Co je NOZ a kdy nabyl účinnosti?', a: 'Zákon č. 89/2012 Sb., občanský zákoník, účinný od <b>1. 1. 2014</b>; nahradil občanský zákoník 40/1964 Sb. a obchodní zákoník. Sjednotil soukromé právo (občanské, rodinné, obchodní) a navázal na tradici (OZ 1937).' },
    { q: 'Jaké jsou cíle nového občanského zákoníku?', a: 'Kodifikace a sjednocení soukromého práva, posílení smluvní autonomie, ochrana slabší strany (spotřebitelé, nezletilí, osoby se sníženou způsobilostí), ochrana lidské důstojnosti a osobnosti, návrat k tradičním principům a terminologii.' },
    { q: 'Jak je NOZ strukturován?', a: 'Pět částí: obecná (§ 1–654), rodinné právo (§ 655–975), absolutní majetková práva (§ 976–1720, tj. věcná práva a dědictví), relativní majetková práva (§ 1721–3014), společná, přechodná a závěrečná ustanovení (§ 3015–3081). Celkem 3081 paragrafů.' },
    { q: 'Které předpisy byly přijaty současně s NOZ a které zrušeny?', a: 'Přijaty: 89/2012 (NOZ), 90/2012 (zákon o obchodních korporacích), 91/2012 (o mezinárodním právu soukromém). Zrušeny např. občanský zákoník 40/1964, obchodní zákoník 513/1991, zákon o rodině 94/1963, zákon o vlastnictví bytů, o sdružování občanů, o o.p.s.' },
    { q: 'Jaké jsou základní zásady NOZ?', a: 'Autonomie vůle (smluvní svoboda) a dispozitivnost, poctivost a dobrá víra, zákaz zneužití práva, ochrana dobrých mravů a veřejného pořádku, ochrana slabší strany, právní jistota, ochrana osobnosti, pacta sunt servanda, nikdo nesmí těžit z vlastního bezpráví.' },
    { q: 'Co říká § 4 a § 5 NOZ?', a: '§ 4: každá svéprávná osoba má rozum průměrného člověka i schopnost jej užívat s běžnou péčí a opatrností – lze to od ní očekávat. § 5: kdo se přihlásí k odbornému výkonu (profesi), dává najevo, že jedná se znalostí a pečlivostí, která je s povoláním spojena (odborná péče, významné pro náhradu škody).' },
    { q: 'Jaký je rozdíl mezi závdavkem a zálohou?', a: 'Závdavek potvrzuje uzavření smlouvy a je jistotou, že závazek bude splněn (nesplní-li ten, kdo jej dal, ztrácí ho; nesplní-li příjemce, vrací dvojnásobek). Záloha je předem poskytnutá část plnění (ceny) – není to zajištění.' },
    { q: 'Vysvětlete pojmy beneficient a obmyšlený.', a: 'Svěřenský fond: majetek je trvale vyčleněn a spravuje jej správce k určitému účelu. Beneficient je osoba, v jejíž prospěch je majetek spravován; obmyšlený je možný příjemce plnění z fondu.' },
    { q: 'Co je vlastnictví a jak se nabývá?', a: 'Vlastnictví (§ 1011) je přímé a výlučné právní panství nad věcí, nejsilnější věcné právo; vlastník s věcí v mezích práva libovolně nakládá a vylučuje ostatní. Nabytí <b>originární</b> (přivlastnění, nález, přírůstek, vydržení, nová věc) nebo <b>derivativní</b> (smlouva, dědění, rozhodnutí orgánu). U nemovitosti vkladem do katastru (smlouva) nebo záznamem (přechod); u movité převzetím.' },
    { q: 'Vyjmenujte věcná práva k věci cizí a stručně je charakterizujte.', a: 'Právo stavby (stavba na cizím pozemku, je nemovitost), věcná břemena (služebnost – vlastník trpí nebo se zdržuje; reálné břemeno – vlastník aktivně plní), zástavní právo (zajištění dluhu, uspokojení z výtěžku zástavy) a zadržovací právo (zadržení cizí movité věci k zajištění dluhu).' },
    { q: 'Čím se liší držba od vlastnictví a držitel od detentora?', a: 'Držba je faktická vláda nad věcí s vůlí být jejím vlastníkem (faktická moc + vůle vykonávat právo pro sebe); vlastnictví je právo. Má se za to, že držba je řádná, poctivá a pravá. Detentor (nájemce, vypůjčitel) drží věc pro jiného, <i>(doplněno)</i> a proto nevydrží. Řádná poctivá držba po 3 / 10 letech vede k vydržení.' },
    { q: 'Pepovi někdo zadržuje jeho jízdní kolo a Pepovu sousedovi zasahuje do pozemku sousední stavba. Jakou žalobou se budou bránit?', a: 'Při neprávě zadržované věci vlastnickou (reivindikační) žalobou – o vydání kola. Při zásahu stavby, imisí a podobně zápůrčí (negatorní) žalobou – o zdržení se rušení a odstranění následků.' },
    { q: 'Jaké jsou lhůty pro vydržení a opuštění věci?', a: 'Vydržení: nepřetržitá poctivá držba 3 roky (movitá) / 10 let (nemovitá); mimořádné vydržení 6 / 20 let. Držba se přeruší, není-li vykonávána 1 rok. Opuštění: vlastník nevykonává právo k movité věci 3 roky, k nemovité 10 let – má se za to, že ji opustil.' },
    { q: 'Rozdíl mezi převodem a přechodem vlastnického práva.', a: '<b>Převod</b> = nabytí z vůle vlastníka (kupní, darovací smlouva), do katastru se zapisuje vklad (2 000 Kč). <b>Přechod</b> = nabytí na základě jiných skutečností (dědění, příklep v dražbě, rozhodnutí orgánu), do katastru se provede záznam zdarma.' },
    { q: 'Jak lze omezit vlastnické právo a co je imise?', a: 'Se souhlasem vlastníka (přenechání věci, věcné břemeno) nebo ze zákona – ve veřejném zájmu, jen na nezbytnou dobu a v nezbytné míře, za plnou náhradu. Imise jsou odpad, kouř, prach, pach, hluk, otřesy apod. vnikající na sousední pozemek v míře nepřiměřené místním poměrům.' },
    { q: 'Pepa má na pozemku souseda přestavek. Co to znamená a jak se s tím naloží?', a: 'Přestavek je stavba, která malou částí přesahuje na cizí pozemek. Zákon umožňuje stavbu neodstraňovat (ochrana před zbouráním) – rozhoduje se podle dobré víry stavebníka, toho, zda vlastník pozemku včas namítal, a podle přiměřené náhrady vlastníku pozemku. (doplněno; podmínky si ověřte přímo v zákoně)' }
  ]
});
