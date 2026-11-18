registerTopic({
  id: 'obchodni-korporace', order: 18, icon: '🏢', title: 'Obchodní korporace a formy podnikání', src: 'podklady', where: 'IV. seminář – veřejnoprávní úprava podnikání (JUDr. Cvik) + 4. seminární cvičení (Dodamgoda) + vzor společenské smlouvy s.r.o. + vzor smlouvy o výkonu funkce jednatelky',
  summary: 'Právní formy podnikání (OSVČ, v.o.s., k.s., s.r.o., a.s., družstvo) a jejich srovnání; zákon o obchodních korporacích a prameny obchodního práva; osobní × kapitálové společnosti; založení × vznik, zrušení × zánik; základní kapitál, vklady, podíl, rezervní fond; společenská smlouva, zakladatelská listina, stanovy; s.r.o. podle vzorové smlouvy; smlouva o výkonu funkce, péče řádného hospodáře, střet zájmů a ručení členů orgánů.',
  vocab: [
    { w: 'ZOK', x: 'Zákon č. 90/2012 Sb., o obchodních společnostech a družstvech (zákon o obchodních korporacích), účinný od 1. 1. 2014.' },
    { w: 'Obchodní korporace', x: 'Právnická osoba založená za účelem podnikání: obchodní společnost nebo družstvo.' },
    { w: 'Společník × akcionář × člen', x: 'Společník má podíl ve v.o.s., k.s. či s.r.o.; akcionář vlastní akcie a.s.; člen je účastníkem družstva.' },
    { w: 'Statutární orgán', x: 'Jedná jménem korporace navenek: jednatel (s.r.o.), představenstvo nebo správní rada (a.s.), komplementář (k.s.).' },
    { w: 'Nejvyšší orgán', x: 'Rozhoduje o zásadních věcech: valná hromada (s.r.o., a.s.), členská schůze (družstvo), společníci (v.o.s., k.s.).' },
    { w: 'Základní kapitál (ZK)', x: 'Peněžní vyjádření souhrnu vkladů všech společníků; zapisuje se do obchodního rejstříku.' },
    { w: 'Veřejná listina (notářský zápis)', x: 'Listina sepsaná notářem; vyžaduje se u společenské smlouvy kapitálové společnosti.' },
    { w: 'Péče řádného hospodáře', x: 'Standard jednání člena orgánu: s potřebnou loajalitou, znalostmi a pečlivostí, informovaně a v obhajitelném zájmu korporace.' }
  ],
  key: [
    '<b>Obchodní korporace</b> (ZOK 90/2012 Sb.): <b>v.o.s., k.s., s.r.o., a.s.</b> a <b>družstvo</b> (+ evropská společnost, EHZS, evropská družstevní společnost).',
    '<b>Osobní společnosti</b> (v.o.s., k.s.): společníci ručí za závazky <b>společně a nerozdílně celým majetkem</b>, nemají ze zákona vkladovou povinnost. <b>Kapitálové</b> (s.r.o., a.s.): společníci zásadně neručí.',
    '<b>Minimální ZK</b>: <b>a.s. 2 000 000 Kč</b> (80 000 EUR) – jediná forma se zákonným minimem; <b>s.r.o.</b> vklad min. <b>1 Kč</b>; v.o.s. ZK nevytváří; k.s. ZK z vkladů komanditistů.',
    '<b>Založení ≠ vznik</b>: založení = společenská smlouva (u kapitálových veřejná listina); <b>vznik = zápis do obchodního rejstříku</b>. Návrh do <b>6 měsíců</b>, jinak účinky jako odstoupení od smlouvy.',
    '<b>Zrušení ≠ zánik</b>: zrušení (dohoda, uplynutí doby, splnění účelu…) s likvidací nebo bez ní; <b>zánik = výmaz z OR</b>.',
    '<b>Vklad</b> (§ 15 ZOK): peněžitý nebo nepeněžitý; vkladem <b>nesmí být práce nebo služba</b> (kromě v.o.s.); vklad nelze za trvání společnosti žádat zpět (§ 16).',
    '<b>Smlouva o výkonu funkce</b>: v kapitálové společnosti písemně, schvaluje <b>nejvyšší orgán</b>; bez odměny sjednané podle ZOK je výkon funkce <b>bezplatný</b>. Odstoupení: funkce končí <b>1 měsíc</b> od doručení.',
    '<b>Člen orgánu</b> jedná s <b>péčí řádného hospodáře</b> (pravidlo podnikatelského úsudku); důkazní břemeno nese on; při úpadku může <b>ručit</b> za dluhy korporace.'
  ],
  sections: [
    { title: 'Právní formy podnikání', blocks: [
      { t: 'svg', title: 'Formy podnikání v ČR', x: ZPN.formyPodnikani(), cap: 'Každý řádek je jedna forma: zda je právnickou osobou, kdo ručí za dluhy a jaký je minimální základní kapitál. Červeně OSVČ a osobní společnosti (ručí se osobně), modře kapitálové společnosti a družstvo (ručí společnost svým majetkem).' },
      { t: 'table', head: ['Forma', 'Statutární orgán', 'Nejvyšší orgán', 'Kontrolní orgán', 'Fakultativní orgány'], rows: [
        ['<b>OSVČ</b> (živnostník)', 'podnikatel', 'podnikatel', 'není', 'nejsou'],
        ['<b>v.o.s.</b>', 'každý společník', 'společníci', 'není', 'lze sjednat ve společenské smlouvě'],
        ['<b>k.s.</b>', 'komplementář(i)', 'společníci', 'není', 'lze sjednat ve společenské smlouvě'],
        ['<b>s.r.o.</b>', 'jednatel(é)', 'valná hromada', 'dozorčí rada (není povinná)', 'dozorčí rada, poradní orgány'],
        ['<b>a.s.</b>', 'představenstvo / správní rada', 'valná hromada', 'dozorčí rada (dualistický systém)', 'auditní výbor a další výbory'],
        ['<b>družstvo</b>', 'představenstvo (příp. předseda)', 'členská schůze', 'kontrolní komise', 'další orgány dle stanov']
      ] },
      { t: 'warn', x: 'Tabulka ze 4. semináře uvádí u k.s. „minimální základní kapitál 5 000 Kč“. To odpovídá dřívějšímu obchodnímu zákoníku (minimální vklad komanditisty); <b>ZOK minimum pro k.s. nestanoví</b> – IV. seminář uvádí, že ZK v k.s. tvoří vklady komanditistů a zákonné minimum ZK má <b>jen a.s.</b>' },
      { t: 'ul', items: [
        '<b>OSVČ</b>: fyzická osoba podnikající na vlastní účet a odpovědnost (živnostník, samostatně výdělečný umělec apod.).',
        '<b>Sdružení podnikatelů</b>: několik OSVČ fakturujících pod jedním jménem, jinak převážně samostatných; zájmové sdružení právnických osob (na úrovni EU <b>evropské hospodářské zájmové sdružení</b>).',
        '<b>v.o.s.</b>: sdružení několika osob vystupujících pod jedním jménem; <b>k.s.</b>: dva druhy společníků – <b>komplementáři</b> a <b>komanditisté</b>; <b>s.r.o.</b>: PO ručící upsanou částkou; <b>a.s.</b>: nejvyšším orgánem valná hromada akcionářů (na úrovni EU evropská společnost).',
        '<b>Družstvo</b>: sdružení fyzických i právnických osob; nejvyšším orgánem členská schůze (na úrovni EU evropská družstevní společnost).',
        '<b>Nadace, neziskové organizace</b>: zvláštní typy subjektů podle zvláštních zákonů, často se sociální a humanitární funkcí. Ne každá PO musí podnikat – může být např. akcionářem nebo členem družstva.'
      ] },
      { t: 'versus', title: 'Osobní × kapitálové společnosti', x: 'Osobní společnosti stojí na osobní účasti společníků na podnikání: společníci nemají ze zákona povinnost vkládat peníze, ale za dluhy společnosti ručí společně a nerozdílně celým svým majetkem. Kapitálové společnosti stojí na kapitálové účasti: společník vloží vklad a za dluhy společnosti zásadně neručí – riskuje jen to, co vložil. Když v.o.s. dvou truhlářů neuhradí dodavateli fakturu, může dodavatel chtít celou částku po kterémkoli z nich; u s.r.o. se obrátí jen na společnost (a na společníky nanejvýš do výše jejich nesplacených vkladů).', cols: [
        { h: 'Osobní (v.o.s., k.s.)', items: ['osobní účast na podnikání', 'bez zákonné vkladové povinnosti', 'ručení <b>společně a nerozdílně celým majetkem</b> (u k.s. komplementáři)'] },
        { h: 'Kapitálové (s.r.o., a.s.)', items: ['kapitálová účast – vklad', 'společníci <b>zásadně neručí</b>', 'povinně ZK a rezervní fond; společenská smlouva ve formě veřejné listiny'] }
      ] }
    ] },
    { title: 'Obchodní právo a zákon o obchodních korporacích', blocks: [
      { t: 'p', x: '<b>Rekodifikace</b>: obchodní zákoník z roku 1991 (inspirovaný zákoníkem mezinárodního obchodu, prvorepublikovou a německou úpravou) byl nesourodý a často novelizovaný. Rekodifikací soukromého práva vznikl <b>občanský zákoník č. 89/2012 Sb.</b> jako středobod soukromého práva (část obchodního zákoníku – obchodní tajemství, firma, některé smluvní typy, zajištění závazků – přešla do něj) a pro obchodní společnosti a družstva zvláštní <b>zákon č. 90/2012 Sb., o obchodních korporacích</b>, účinný od 1. 1. 2014. ZOK není pokračovatelem obchodního zákoníku – upravuje jen korporace.' },
      { t: 'warn', x: 'Slajd uvádí, že občanský zákoník „se stane s účinností od 1. 1. 2013 středobodem soukromého práva“. Správně je občanský zákoník (stejně jako ZOK) účinný od <b>1. 1. 2014</b>.' },
      { t: 'ol', items: [
        '<b>Psané právo</b>: ZOK (90/2012 Sb.), občanský zákoník (89/2012 Sb.)',
        '<b>Speciální předpisy</b>: živnostenský zákon (455/1991 Sb.), zákon o ochraně hospodářské soutěže (143/2001 Sb., nahradil 63/1991 Sb.), zákon o účetnictví (563/1991 Sb.)',
        '<b>Obchodní zvyklosti a dobré mravy hospodářské soutěže</b> – normy vzniklé živelně, nezávisle na státu',
        '<b>Obecné právní zásady</b>',
        '<b>Právo EU</b> – přímo aplikovatelné'
      ] },
      { t: 'tree', title: 'Struktura ZOK', root: { h: 'Zákon o obchodních korporacích', x: '3 části, 8 hlav', kids: [
        { h: '1. Obchodní korporace', x: 'hlava I obecná ustanovení (založení, vklady, ZK, podíly, orgány, koncerny, zrušení a zánik); II v.o.s.; III k.s.; IV s.r.o.; V a.s.; VI družstvo (i bytové a sociální)' },
        { h: '2. Závěrečná a přechodná ustanovení', x: 'hlava I odkaz na předpisy EU; hlava II přechodná ustanovení' },
        { h: '3. Účinnost', x: '' }
      ] } },
      { t: 'p', x: '<b>Úrovně úpravy</b> podle obecnosti: obecná ustanovení OZ o právnických osobách (§ 118–209) a korporacích (§ 210–213) → obecná úprava obchodních korporací v ZOK (§ 1–94) → konkrétní formy (např. s.r.o. § 132–242). ZOK se oproti dřívější úpravě podrobněji věnuje výkonu funkce, odměňování, kontrole rozhodování manažerů a jejich odpovědnosti.' }
    ] },
    { title: 'Založení a vznik, zrušení a zánik', blocks: [
      { t: 'svg', title: 'Založení × vznik obchodní společnosti', x: ZPN.zalozeniVznik(), cap: 'Časová osa: založení (modře) uzavřením společenské smlouvy, oranžový úsek je lhůta 6 měsíců na podání návrhu, vznik (červeně) zápisem do obchodního rejstříku. Pod osou, co platí v každém okamžiku; dole následek zmeškání lhůty a pořadí zrušení a zániku.' },
      { t: 'ul', items: [
        '<b>Založení</b> = uzavření <b>společenské smlouvy</b> (nebo zakladatelské listiny) podle obecných pravidel o smlouvách – konsensus všech společníků; podpisy <b>úředně ověřené</b>. U s.r.o. a a.s. forma <b>notářského zápisu</b>.',
        'Před zápisem je založená společnost jen <b>smluvním závazkovým vztahem</b>, který působí mezi stranami a nemá účinky vůči třetím osobám.',
        '<b>Vznik</b>: dnem zápisu do obchodního rejstříku. Není-li návrh podán do <b>6 měsíců</b> od založení, nastávají <b>tytéž účinky jako při odstoupení od smlouvy</b>.',
        'Úkony týkající se založení, vzniku, změny, zrušení nebo zániku vyžadují písemnou formu s úředně ověřenými podpisy; vyžaduje-li zákon pro založení notářský zápis, vyžaduje ho i pro změny.',
        '<b>Obecně u PO</b> (OZ): lze ji ustavit zakladatelským právním jednáním, zákonem, rozhodnutím orgánu veřejné moci aj.; zakladatelské jednání (písemně) určí alespoň <b>název, sídlo, předmět činnosti, statutární orgán</b> a jeho první členy. Více zakladatelů zakládá PO přijetím stanov nebo uzavřením jiné smlouvy; PO vzniká dnem zápisu do veřejného rejstříku.'
      ] },
      { t: 'versus', title: 'Zrušení × zánik společnosti', x: 'Zrušení a zánik nejsou totéž: zrušení je důvod a začátek konce, zánik je okamžik, kdy společnost přestane existovat. Společnost se zrušuje na základě určité skutečnosti – dohodou společníků, uplynutím doby, na kterou byla založena, splněním účelu – a pak buď proběhne likvidace (majetek se zpeněží a vyrovnají dluhy), nebo, přechází-li jmění na právního nástupce, se likvidace nekoná. Zaniká teprve výmazem z obchodního rejstříku. Když valná hromada rozhodne o zrušení s likvidací, společnost dál existuje, dokud likvidátor nedokončí práci a firmu nevymažou z rejstříku.', cols: [
        { h: 'Zrušení', items: ['dohoda společníků, uplynutí doby, splnění účelu apod.', 's likvidací, nebo bez ní (jmění na právního nástupce)'] },
        { h: 'Zánik', items: ['dnem <b>výmazu z obchodního rejstříku</b>', 'zánik právní osobnosti'] }
      ] }
    ] },
    { title: 'Základní kapitál, vklady, podíl', blocks: [
      { t: 'def', term: 'Základní kapitál (ZK)', x: 'Peněžní vyjádření souhrnu peněžitých i nepeněžitých vkladů všech společníků; vyjadřuje se v české měně.', items: ['povinně se vytváří v <b>k.s., s.r.o. a a.s.</b>; výše se zapisuje do OR, stanoví-li to zákon', 'je součástí <b>vlastního kapitálu</b> (vlastní zdroje financování na straně pasiv: ZK, rezervní fond, fondy ze zisku, zisk a ztráta)'] },
      { t: 'table', head: ['ZK podle ZOK', 'Pravidlo'], rows: [
        ['<b>v.o.s.</b>', 'ze zákona ZK nevytváří'],
        ['<b>k.s.</b>', 'ZK tvoří vkladová povinnost komanditistů'],
        ['<b>s.r.o.</b>', 'minimální vklad společníka <b>1 Kč</b> (§ 142 odst. 1; dříve 200 000 Kč), minimální výše ZK neuvedena; vklady pro jednotlivé podíly mohou být různé'],
        ['<b>a.s.</b>', 'jediná forma, která musí ZK vytvořit ze zákona v minimální výši (<b>2 000 000 Kč / 80 000 EUR</b>)']
      ] },
      { t: 'ul', items: [
        '<b>Funkce ZK</b>: primárně <b>ochrana věřitelů</b> (garance majetku) – fakticky jen účetní položka, protože se aktuální majetek do ZK nepromítá; ukazatel kapitálové účasti společníků; měřítko zisku a ztráty; „startovné“.',
        '<b>Zásada zachování ZK</b>: povinnost tvořit ZK (nově jen a.s.); vkladová povinnost a pravidla splácení, zákaz žádat vrácení vkladu; zákaz vyplácet podíly na zisku na úkor ZK; zákonné postupy zvyšování a snižování ZK.',
        '<b>Zvýšení ZK</b> úpisem vkladů je účinné ke dni určenému valnou hromadou (ne zápisem do OR); <b>snížení</b> je účinné až <b>zápisem do OR</b>.'
      ] },
      { t: 'versus', title: 'Peněžitý × nepeněžitý vklad', x: 'Vklad (§ 15 ZOK) je peněžní vyjádření předmětu vkladu do základního kapitálu. Peněžitý vklad je částka v korunách nebo v cizí měně s korunovým ekvivalentem; ocenit ho je snadné. Nepeněžitý vklad je cokoli jiného ocenitelného – věc, právo užívat věc, nehmotný statek, know-how; u s.r.o. ho ocení znalec ze seznamu znalců. Vkladem ale nesmí být práce nebo služba, protože by šlo snadno o fiktivní vklad (výjimkou je v.o.s., pokud to připouští společenská smlouva a souhlasí všichni). Pozor: vložená směnka, dluhopis nebo pohledávka v nominální hodnotě nejsou peněžitým vkladem, i když se na peníze vztahují.', cols: [
        { h: 'Peněžitý', items: ['peněžitá částka v Kč nebo v cizí měně (s korunovým ekvivalentem)', 'oceněn nominální výší', 'splácí se zpravidla na účet; vázaný účet do vzniku'] },
        { h: 'Nepeněžitý', items: ['převod vlastnictví k věci, právo užívat věc, nehmotné statky, know-how', '<b>nesmí</b> být práce ani služba (§ 17 odst. 3) – kromě v.o.s.', 'musí být vyjádřitelný v Kč; u s.r.o. ocení <b>znalec</b> (náklady hradí společnost)'] }
      ] },
      { t: 'ul', items: [
        'Společník (i akcionář a člen družstva) <b>nemůže po dobu existence korporace žádat vklad zpět</b> ani z něj úroky (§ 16 ZOK). Vkladová povinnost vzniká při <b>vzniku</b> společnosti a při <b>zvyšování ZK</b>.',
        '<b>Splácení</b>: nepeněžité vklady se musí splatit před zápisem do OR jen u kapitálových společností; vlastnické právo přejde na společnost až jejím <b>vznikem</b> (§ 25 odst. 1); u nemovitosti až zápisem do katastru na základě prohlášení (§ 25 odst. 2).',
        'Nepřejde-li vlastnické právo k vkladu, uhradí vkladatel jeho cenu v penězích podle ocenění ve společenské smlouvě a korporace vrátí předmět vkladu (§ 26 odst. 1).',
        'Nemovitost se splácí předáním <b>správci vkladu</b> spolu s písemným prohlášením s úředně ověřeným podpisem; movité věci předáním, nehmotné v dokumentaci či na nosiči.',
        '<b>Správce vkladu</b> (§ 18–24): před vznikem přijímá a spravuje vklady; určuje ho společenská smlouva; může jím být zakladatel, banka i jiná odborně způsobilá osoba (advokát, notář…); jedná podle písemné smlouvy (příkaz), s péčí řádného hospodáře a mlčenlivostí – odpovědnost <b>nelze omezit</b>.'
      ] },
      { t: 'def', term: 'Podíl v obchodní společnosti', x: 'Míra účasti společníka ve společnosti a z ní plynoucí práva a povinnosti.', items: ['<b>kvalitativní stránka</b>: souhrn práv a povinností (i míra, v níž lze s podílem disponovat)', '<b>kvantitativní stránka</b>: <b>výše</b> podílu (rozsah práv a povinností, např. hlasovací právo) a <b>hodnota</b> podílu (mění se s hospodařením a čistým obchodním majetkem)', 'je-li podíl ve spoluvlastnictví, jsou spoluvlastníci <b>společným společníkem</b> a vůči společnosti ho spravuje jen správce společné věci (§ 32 ZOK)'] },
      { t: 'p', x: '<b>Rezervní fond</b> se povinně zřizuje u kapitálových společností; lze ho použít ke krytí ztrát; tvoří se ze zisku běžného období po zdanění nebo z jiných vlastních fondů.' }
    ] },
    { title: 'Společenská smlouva, zakladatelská listina, stanovy', blocks: [
      { t: 'table', head: ['Dokument', 'Kdy a v jaké formě'], rows: [
        ['<b>Společenská smlouva</b>', 'jí zakládají korporaci <b>alespoň dva</b> společníci; písemně s úředně ověřenými podpisy všech zakladatelů; u <b>kapitálové společnosti veřejná listina</b>; u družstva se přijímá na <b>ustavující schůzi</b>; u a.s. jsou její součástí stanovy'],
        ['<b>Zakladatelská listina</b>', 'jediný zakladatel; forma notářského zápisu; stejné podstatné části jako společenská smlouva; v praxi u s.r.o., a.s., v.o.s. či družstva'],
        ['<b>Stanovy</b>', 'vnitřní předpis (statut, organizační řád) – organizace firmy, podrobnější rozvedení společenské smlouvy; často nepovinné. Při rozporu má přednost <b>společenská smlouva</b>. U s.r.o. musí vydání stanov předvídat společenská smlouva; schvaluje je valná hromada (vhodně notářským zápisem)']
      ] }
    ] },
    { title: 'S.r.o. podle vzorové společenské smlouvy', blocks: [
      { t: 'p', x: 'Vzorová smlouva (přijatá podle § 8 odst. 2 a § 146 an. ZOK) ukazuje, co v praxi obsahuje společenská smlouva s.r.o.: <b>založení a vznik</b> (zápis do OR u Městského soudu v Praze, doba neurčitá), <b>obchodní firmu</b>, <b>sídlo</b>, <b>předmět podnikání</b> (zde „Výroba, obchod a služby neuvedené v přílohách 1 až 3 živnostenského zákona“ – tedy volná živnost), <b>společníky</b>, <b>ZK, vklady a podíly</b>, práva a povinnosti společníků, <b>orgány</b> (valná hromada a jednatel), podíl na zisku, zánik účasti, zrušení a zánik společnosti.' },
      { t: 'grid', head: ['Společník', 'Vklad', 'Splaceno', 'Podíl', 'Hlasy (1 hlas / 1 000 Kč)'], rows: [
        ['Společník 1', '34 000 Kč', '34 000 Kč', '⅓ (33,33 %)', '34'],
        ['Společník 2', '34 000 Kč', '34 000 Kč', '⅓ (33,33 %)', '34'],
        ['Společník 3', '34 000 Kč', '34 000 Kč', '⅓ (33,33 %)', '34'],
        ['<b>Celkem</b>', '<b>102 000 Kč</b> = ZK', '100 %', '100 %', '<b>102</b>']
      ] },
      { t: 'table', head: ['Valná hromada (vzor)', 'Pravidlo'], rows: [
        ['Působnost', 'změna společenské smlouvy; změny ZK a připuštění nepeněžitého vkladu; volba a odvolání jednatele a likvidátora; prokura; zrušení s likvidací; schválení účetní závěrky a rozdělení zisku; přeměna; převod či zastavení závodu; tichá společnost; finanční asistence; převzetí jednání před vznikem; vkladové ážio'],
        ['Usnášeníschopnost', 'přítomni společníci s <b>alespoň polovinou všech hlasů</b>'],
        ['Běžné rozhodnutí', '<b>prostá většina hlasů přítomných</b>'],
        ['Kvalifikovaná většina', '<b>⅔ hlasů všech společníků</b>: změna společenské smlouvy, připuštění nepeněžitého vkladu či započtení, zrušení s likvidací; osvědčuje se veřejnou listinou'],
        ['Svolání', 'jednatel aspoň 1× za účetní období (a hned při hrozícím úpadku); pozvánka písemně <b>nejméně 15 dnů</b> předem s návrhem usnesení; kvalifikovaný společník (≥ 10 % ZK) může žádat svolání a po 1 měsíci svolat sám'],
        ['Mimo zasedání', 'rozhodování per rollam (§ 175 an. ZOK) písemně']
      ] },
      { t: 'ex', x: 'Na valnou hromadu podle vzoru přijdou jen společníci 1 a 2 (68 ze 102 hlasů). Usnášeníschopná je (potřeba ≥ 51 hlasů). O běžné věci rozhodne prostá většina přítomných, tedy 35 hlasů. Změna společenské smlouvy ale potřebuje ⅔ hlasů <b>všech</b> společníků: ⅔ × 102 = <b>68</b> – oba přítomní musí hlasovat pro.' },
      { t: 'ul', items: [
        '<b>Převod podílu</b>: podle vzoru bez souhlasu valné hromady na společníka i třetí osobu; vůči společnosti účinný doručením účinné smlouvy s úředně ověřenými podpisy; převodce ručí za dluhy spojené s podílem. <b>Podíl se dědí</b>; u PO přechází na právního nástupce.',
        '<b>SJM</b>: je-li společník v manželství v zákonném režimu, podíl je součástí <b>společného jmění manželů</b> (§ 709 OZ).',
        '<b>Prodlení se splacením vkladu</b>: úrok z prodlení (ve vzoru dvojnásobek zákonné sazby); valná hromada může společníka vyloučit.',
        '<b>Zánik účasti</b>: smrt, zánik společnosti, převod podílu, vystoupení (§ 202), dohoda (§ 203), vyloučení (§ 204), zrušení účasti soudem (§ 205), insolvence či exekuce na podíl.',
        '<b>Jednatel</b>: jmenuje a odvolává valná hromada; jedná samostatně (k firmě připojí podpis); péče řádného hospodáře; obchodní vedení, účetnictví, seznam společníků, svolávání VH, úplné znění smlouvy do sbírky listin; <b>zákaz konkurence</b> (§ 199 ZOK); může požádat VH o pokyn k obchodnímu vedení.',
        '<b>Likvidační zůstatek</b> a podíl na zisku se vyplácejí v penězích v poměru vkladů.'
      ] }
    ] },
    { title: 'Členové orgánů: smlouva o výkonu funkce a odpovědnost', blocks: [
      { t: 'def', term: 'Smlouva o výkonu funkce (kapitálová společnost)', x: 'Smlouva mezi korporací a členem orgánu o právech a povinnostech při výkonu funkce.', items: [
        'sjednává se <b>písemně</b>; ji i její změny <b>schvaluje nejvyšší orgán</b>',
        'není-li odměna sjednána v souladu se ZOK, je výkon funkce <b>bezplatný</b>',
        'je-li smlouva nebo ujednání o odměně neplatné z důvodu na straně korporace, náleží <b>odměna obvyklá</b> v době uzavření',
        'obsahuje údaje o odměňování: všechny složky odměn (i věcné plnění, penzijní připojištění), výši nebo způsob výpočtu, pravidla zvláštních odměn a podílu na zisku, výhody v podobě účastnických cenných papírů'
      ] },
      { t: 'p', x: '<b>Vzorová smlouva o výkonu funkce jednatelky</b> (§ 59 an. ZOK): jednatelka vykonává funkci statutárního orgánu za měsíční odměnu (měnit ji může valná hromada) a paušální náhrady výdajů; je povinna jednat <b>osobně, s péčí řádného hospodáře, s loajalitou, znalostmi a pečlivostí</b> – zajišťovat obchodní vedení, účetnictví a seznam společníků, informovat společníky, ukládat úplné znění společenské smlouvy do sbírky listin a zachovávat <b>mlčenlivost</b> i po skončení funkce. Bez svolení společníků nesmí <b>konkurovat</b> (podnikat v předmětu činnosti společnosti, být ve statutárním orgánu PO s obdobným předmětem, být společníkem s neomezeným ručením či ovládající osobou). Na vztah se přiměřeně použijí ustanovení OZ o <b>příkazu</b>, na náhrady výdajů zákoník práce.' },
      { t: 'law', ref: 'Odstoupení z funkce', x: 'Člen orgánu může z funkce odstoupit, nesmí tak ale učinit v době pro korporaci nevhodné. Neurčuje-li společenská smlouva nebo smlouva o výkonu funkce jinak, oznámí odstoupení orgánu, který jej zvolil, a funkce končí <b>uplynutím jednoho měsíce od doručení</b> oznámení, neschválí-li orgán na jeho žádost jiný okamžik.' },
      { t: 'def', term: 'Péče řádného hospodáře', x: 'Měřítko jednání člena orgánu:', items: [
        '<b>pravidlo podnikatelského úsudku</b>: pečlivě a s potřebnými znalostmi jedná, kdo mohl při podnikatelském rozhodování v dobré víře rozumně předpokládat, že jedná <b>informovaně a v obhajitelném zájmu</b> korporace',
        'přihlédne se k péči, kterou by v obdobné situaci vynaložila jiná rozumně pečlivá osoba v postavení člena obdobného orgánu',
        'v soudním řízení nese <b>důkazní břemeno člen orgánu</b>, ledaže soud rozhodne, že to po něm nelze spravedlivě požadovat',
        'člen statutárního orgánu kapitálové společnosti může požádat nejvyšší orgán o <b>pokyn</b> k obchodnímu vedení'
      ] },
      { t: 'ul', items: [
        '<b>Porušení péče</b>: povinná osoba vydá korporaci <b>prospěch</b>, který tím získala (není-li to možné, v penězích); vzniklou újmu lze vypořádat <b>smlouvou</b> schválenou nejvyšším orgánem – prohlásí-li soud usnesení za neplatné, běží nová promlčecí lhůta.',
        '<b>Střet zájmů</b>: hrozí-li střet zájmu člena orgánu (nebo osob jemu blízkých či jím ovládaných) se zájmem korporace, informuje bez zbytečného odkladu ostatní členy orgánu a kontrolní orgán (jinak nejvyšší orgán). Totéž, chce-li s korporací <b>uzavřít smlouvu</b> – uvede i podmínky.',
        '<b>Úpadek</b>: rozhodne-li soud (na návrh jiného než dlužníka) o úpadku, vydají členové orgánů na výzvu insolvenčního správce prospěch ze smlouvy o výkonu funkce za <b>2 roky</b> zpět, pokud věděli či měli vědět o hrozícím úpadku a neučinili vše potřebné k jeho odvrácení.',
        '<b>Ručení při úpadku</b>: soud může na návrh insolvenčního správce nebo věřitele rozhodnout, že člen či bývalý člen statutárního orgánu <b>ručí</b> za povinnosti korporace v úpadku, pokud o hrozícím úpadku věděl (měl a mohl vědět) a v rozporu s péčí řádného hospodáře neučinil vše potřebné. Neplatí pro člena ustaveného právě k odvrácení úpadku, který jednal s péčí řádného hospodáře.',
        'Dává-li ZOK společníkovi možnost domáhat se práva za korporaci nebo proti ní, nese povinná osoba <b>důkazní břemeno</b>, že se protiprávního jednání nedopustila.'
      ] }
    ] }
  ],
  mistakes: [
    'Minimální ZK ze zákona má <b>jen a.s.</b> (2 mil. Kč / 80 000 EUR); u s.r.o. stačí vklad 1 Kč, v.o.s. ZK nevytváří.',
    '<b>Založení ≠ vznik</b>: společnost vzniká až zápisem do obchodního rejstříku; návrh do 6 měsíců od založení.',
    '<b>Zrušení ≠ zánik</b>: zaniká se až výmazem z OR; zrušení mu předchází (s likvidací nebo bez).',
    'Vkladem do obchodní korporace <b>nesmí být práce nebo služba</b> (výjimka v.o.s. při souhlasu všech).',
    'Společenská smlouva = alespoň 2 zakladatelé; jediný zakladatel = <b>zakladatelská listina</b>; u kapitálových společností vždy veřejná listina.',
    'Bez odměny sjednané ve smlouvě o výkonu funkce v souladu se ZOK je funkce <b>bezplatná</b>; smlouvu schvaluje nejvyšší orgán.',
    'Odstoupivší člen orgánu končí <b>měsíc po doručení</b> oznámení, ne okamžitě.',
    'Prokázat, že jednal s péčí řádného hospodáře, musí <b>člen orgánu</b>, ne žalobce.'
  ],
  qa: [
    { q: 'Které právnické osoby jsou obchodními korporacemi?', a: 'Obchodní společnosti – v.o.s., k.s., s.r.o., a.s. (a evropská společnost a EHZS) – a družstva (i bytové, sociální a evropská družstevní společnost). Upravuje je zákon č. 90/2012 Sb.' },
    { q: 'Jak ručí za dluhy jednotlivé formy podnikání?', a: 'OSVČ celým svým majetkem; v.o.s. všichni společníci neomezeně; k.s. komplementáři neomezeně, komanditisté do výše nesplaceného vkladu; s.r.o. společnost svým majetkem, společníci omezeně; a.s. a družstvo svým majetkem.' },
    { q: 'Jaký je minimální základní kapitál?', a: 'A.s. 2 000 000 Kč nebo 80 000 EUR (jediná forma se zákonným minimem); s.r.o. vklad společníka min. 1 Kč, minimum ZK neuvedeno; v.o.s. ZK nevytváří; v k.s. ZK tvoří vklady komanditistů.' },
    { q: 'Jaké jsou orgány s.r.o. a a.s.?', a: 'S.r.o.: statutární orgán jednatel(é), nejvyšší valná hromada, nepovinně dozorčí rada. A.s.: představenstvo / správní rada, valná hromada, dozorčí rada (dualistický systém), případně auditní výbor.' },
    { q: 'Čím se liší osobní a kapitálové společnosti?', a: 'Osobní (v.o.s., k.s.) stojí na osobní účasti, společníci nemají zákonnou vkladovou povinnost a ručí společně a nerozdílně celým majetkem. Kapitálové (s.r.o., a.s.) stojí na vkladech a společníci zásadně neručí.' },
    { q: 'Jaký je rozdíl mezi založením a vznikem společnosti?', a: 'Založení = uzavření společenské smlouvy (u kapitálových veřejná listina); do zápisu je to jen smluvní vztah mezi zakladateli. Vznik = dnem zápisu do OR. Není-li návrh podán do 6 měsíců, nastávají účinky jako při odstoupení od smlouvy.' },
    { q: 'Jaký je rozdíl mezi zrušením a zánikem?', a: 'Zrušení nastává na základě určité skutečnosti (dohoda, uplynutí doby, splnění účelu) a vede s likvidací nebo bez ní (přechod jmění na nástupce) k zániku. Zánik nastává výmazem z obchodního rejstříku.' },
    { q: 'Co je základní kapitál a jaké má funkce?', a: 'Peněžní vyjádření souhrnu vkladů společníků. Má chránit věřitele (fakticky spíš účetní položka), ukazuje kapitálovou účast společníků, slouží jako měřítko zisku a ztráty a „startovné“.' },
    { q: 'Co může být vkladem?', a: 'Peněžitý vklad (Kč nebo cizí měna s korunovým ekvivalentem) a nepeněžitý – věc, právo užívat věc, nehmotný statek, know-how, vyjádřitelný v Kč. Práce ani služba vkladem být nesmí (kromě v.o.s. se souhlasem všech). Vklad nelze za trvání žádat zpět.' },
    { q: 'Kdy přechází vlastnictví k nepeněžitému vkladu na společnost?', a: 'Až vznikem společnosti (§ 25 odst. 1); u nemovitosti zapsané v katastru až zápisem do katastru na základě prohlášení (§ 25 odst. 2). Nepřejde-li, uhradí vkladatel cenu v penězích.' },
    { q: 'Co je podíl a jaké má stránky?', a: 'Míra účasti společníka a z ní plynoucí práva a povinnosti. Kvalitativní stránka = souhrn práv a povinností; kvantitativní = výše podílu (rozsah práv, hlasování) a hodnota (podle hospodaření).' },
    { q: 'Čím se liší společenská smlouva, zakladatelská listina a stanovy?', a: 'Společenskou smlouvou zakládají korporaci aspoň dva společníci (u kapitálových veřejná listina). Zakladatelská listina je notářský zápis jediného zakladatele. Stanovy jsou vnitřní předpis rozvádějící smlouvu; při rozporu má přednost smlouva.' },
    { q: 'V s.r.o. podle vzoru má každý ze 3 společníků 34 hlasů. Jaká většina je potřeba ke změně společenské smlouvy?', a: 'Dvoutřetinová většina hlasů všech společníků: ⅔ × 102 = 68 hlasů – tedy alespoň dva společníci. Běžná rozhodnutí: prostá většina přítomných při kvóru alespoň poloviny všech hlasů.' },
    { q: 'Co platí o smlouvě o výkonu funkce?', a: 'V kapitálové společnosti písemně, schvaluje ji i její změny nejvyšší orgán. Bez odměny sjednané v souladu se ZOK je funkce bezplatná; při neplatnosti z důvodu na straně korporace náleží odměna obvyklá. Musí obsahovat složky a výši odměny, pravidla zvláštních odměn a výhody v cenných papírech.' },
    { q: 'Jak může člen orgánu odstoupit z funkce?', a: 'Oznámí odstoupení orgánu, který ho zvolil; nesmí v době pro korporaci nevhodné. Funkce končí uplynutím 1 měsíce od doručení, neschválí-li orgán na jeho žádost jiný okamžik.' },
    { q: 'Co je péče řádného hospodáře a kdo ji dokazuje?', a: 'Jednání s potřebnou loajalitou, znalostmi a pečlivostí; pečlivě jedná, kdo mohl v dobré víře rozumně předpokládat, že jedná informovaně a v obhajitelném zájmu korporace. Měřítkem je jiná rozumně pečlivá osoba. Důkazní břemeno nese člen orgánu.' },
    { q: 'Kdy ručí člen statutárního orgánu za dluhy korporace?', a: 'Rozhodne-li soud na návrh insolvenčního správce nebo věřitele, že ručí: korporace je v úpadku a člen věděl (měl a mohl vědět) o hrozícím úpadku a v rozporu s péčí řádného hospodáře neučinil vše potřebné k odvrácení. Neplatí pro člena ustaveného k odvrácení úpadku, který jednal řádně.' }
  ]
});
