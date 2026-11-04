registerTopic({
  id: 'odpovednost', order: 9, icon: '⚖️', title: 'Odpovědnost za újmu a bezdůvodné obohacení', src: 'podklady', lec: [5], where: 'Přednáška 5 (30. 10. 2024) – Odpovědnost v občanském právu: škoda, nemajetková újma, bezdůvodné obohacení (§ 2894–3005)',
  summary: 'Soukromoprávní odpovědnost za újmu dle NOZ (předpoklady, škoda × nemajetková újma, liberace, odpovědnost za jiného, zvláštní případy), bezdůvodné obohacení a základy veřejnoprávní odpovědnosti (přestupky, správní delikty, odpovědnost státu).',
  vocab: [
    {w:'Škůdce × poškozený',x:'Škůdce je ten, kdo újmu způsobil, poškozený ten, kdo ji utrpěl a má nárok na náhradu.'},
    {w:'FO a PO',x:'Fyzická osoba je člověk, právnická osoba je firma či jiná organizace s vlastní právní osobností.'},
    {w:'Presumpce (domněnka)',x:'Zákon něco považuje za dané, dokud se neprokáže opak; např. nedbalost škůdce se předpokládá.'},
    {w:'Důkazní břemeno',x:'Povinnost tvrzenou skutečnost prokázat; kdo ji neunese, spor prohrává.'},
    {w:'Promlčení',x:'Po uplynutí lhůty nelze právo u soudu vynutit, pokud se dlužník promlčení dovolá; právo samotné nezaniká.'},
    {w:'Regres',x:'Právo toho, kdo za jiného zaplatil, žádat zaplacené zpět po osobě, která měla platit nebo škodu způsobila.'},
    {w:'Solidární závazek',x:'Více dlužníků ručí společně a nerozdílně: věřitel může chtít celý dluh po kterémkoli z nich.'},
    {w:'Sankce',x:'Nepříznivý následek porušení povinnosti (náhrada škody, pokuta, trest).'}
  ],
  key: [
    '<b>Čtyři předpoklady</b> odpovědnosti za škodu: <b>protiprávní jednání (porušení povinnosti)</b>, <b>škoda/újma</b>, <b>příčinná souvislost</b>, <b>zavinění</b> (u subjektivní odpovědnosti).',
    '<b>Subjektivní</b> odpovědnost = za zavinění (obecné pravidlo; nedbalost se presumuje); <b>objektivní</b> = bez ohledu na zavinění (zvláštní případy – provoz, vada výrobku, zvíře…), zprostit se lze jen <b>liberací</b>.',
    '<b>Škoda</b> = majetková újma (skutečná škoda + ušlý zisk); <b>nemajetková újma</b> = zásah do osobnostních práv, bolest, ztížení společenského uplatnění.',
    '<b>Způsob náhrady</b>: primárně <b>naturální</b> (uvedení do předešlého stavu), jinak <b>v penězích</b> (§ 2951).',
    'Odpovědnost <b>smluvní</b> (porušení závazku ze smlouvy) × <b>mimosmluvní</b> (porušení obecné povinnosti, absolutního práva, dobrých mravů).',
    '<b>Bezdůvodné obohacení</b> (§ 2991 an.): kdo se na úkor jiného obohatí bez právního důvodu, musí obohacení <b>vydat</b>; nejde o náhradu škody, nepotřebuje zavinění.',
    '<b>Veřejnoprávní odpovědnost</b>: přestupky, jiné správní delikty, trestné činy – ukládá orgán veřejné moci (sankce), × odpovědnost státu za újmu při výkonu veřejné moci (zák. 82/1998 Sb., objektivní).',
    'Nezletilý a osoba stižená duševní poruchou odpovídají, jen pokud byli <b>způsobilí ovládnout své jednání a posoudit následky</b>; společně a nerozdílně s nimi odpovídá ten, kdo nad nimi zanedbal dohled.'
  ],
  sections: [
    { title: 'Pojem a druhy odpovědnosti', blocks: [
      { t: 'def', term: 'Právní odpovědnost', x: 'Povinnost strpět <b>nepříznivý následek (sankci)</b> za porušení právní povinnosti.', items: ['<b>reparační</b> podoba: náhrada, napravení stavu (soukromé právo)', '<b>represivní</b> podoba: trest, pokuta (veřejné právo)'] },
      { t: 'table', head: ['Hledisko', 'Soukromoprávní', 'Veřejnoprávní'], rows: [
        ['Hlavní předpis', 'občanský zákoník 89/2012 Sb. (§ 2894 an.), zákoník práce', 'přestupkový zákon 250/2016 Sb., trestní zákoník 40/2009 Sb., zvláštní zákony (správní delikty)'],
        ['Účel', 'reparace – odčinění újmy poškozeného', 'represe a prevence – trest za porušení veřejného pořádku'],
        ['Kdo uplatňuje', 'poškozený (žaloba u soudu, na návrh)', 'stát – správní orgán / soud z moci úřední'],
        ['Postavení stran', 'rovnost (škůdce × poškozený)', 'nadřízenost (orgán × pachatel)'],
        ['Výsledek', 'náhrada škody / vydání obohacení', 'pokuta, zákaz činnosti, trest, napomenutí'],
        ['Zavinění', 'obecně ano (presumované), někdy objektivní', 'u přestupků FO ano; u PO u přestupků zásadně objektivní s liberací']
      ] },
      { t: 'table', head: ['Dělení', 'Varianty'], rows: [
        ['Podle zdroje povinnosti', '<b>smluvní</b> (porušení smlouvy) × <b>mimosmluvní / deliktní</b> (porušení zákona, absolutního práva, dobrých mravů)'],
        ['Podle zavinění', '<b>subjektivní</b> (za zavinění) × <b>objektivní</b> (za výsledek, bez ohledu na zavinění)'],
        ['Podle počtu odpovědných', 'samostatná × <b>solidární</b> (společná a nerozdílná) × dílčí'],
        ['Podle osoby', 'za <b>vlastní</b> jednání × za <b>jiného</b> (pomocník, dohled nad nezletilým, zaměstnavatel)']
      ] },
      { t: 'tip', x: 'Reparační = „vrať to, co jsi způsobil“ (soukromé právo). Represivní = „zaplať státu / buď potrestán“ (veřejné právo). Oboje se může sejít u téhož skutku (řidič způsobí nehodu: přestupek/trestný čin + náhrada škody).' }
    ] },
    { title: 'Předpoklady vzniku povinnosti k náhradě škody', blocks: [
      { t: 'table', head: ['Předpoklad', 'Obsah', 'Poznámka'], rows: [
        ['1. Protiprávní jednání', 'jednání (konání i opomenutí), které porušuje právní povinnost – zákonnou, smluvní, obecnou prevenční, nebo dobré mravy', 'obecně: § 2910; úmyslné jednání proti dobrým mravům: § 2909'],
        ['2. Škoda / újma', 'skutečná majetková nebo nemajetková újma', 'bez újmy není co nahrazovat'],
        ['3. Příčinná souvislost (kauzální nexus)', 'újma je <b>následkem</b> protiprávního jednání', 'test „conditio sine qua non“ (bez jednání by škoda nevznikla)'],
        ['4. Zavinění', 'psychický vztah škůdce k jednání a následku – <b>úmysl</b> (přímý/nepřímý) nebo <b>nedbalost</b> (vědomá/nevědomá)', 'u objektivní odpovědnosti se nezkoumá']
      ] },
      { t: 'p', x: '<b>Obecná prevenční povinnost</b> (§ 2900): vyžadují-li to okolnosti nebo poměry, je každý povinen počínat si tak, aby nedocházelo ke škodě na svobodě, životě, zdraví, majetku a přírodě. Kdo ji poruší, je odpovědný, i když nejde o porušení konkrétní smlouvy.' },
      { t: 'p', x: '<b>Zavinění</b>: u subjektivní odpovědnosti se <b>nedbalost předpokládá</b> (presumpce) – škůdce se musí sám zprostit důkazem, že jednal s potřebnou péčí. Úmysl se však musí prokázat. Míra péče se posuzuje podle <b>průměrného rozumného člověka</b>, u odborníků podle odborné péče.' },
      { t: 'table', head: ['Forma zavinění', 'Vědomost', 'Volní složka'], rows: [
        ['Přímý úmysl', 'ví, že způsobí újmu', 'chce ji způsobit'],
        ['Nepřímý úmysl (eventuální)', 'ví, že újmu může způsobit', 'je s tím srozuměn'],
        ['Vědomá nedbalost', 'ví, že újmu může způsobit', 'bez přiměřených důvodů spoléhá, že nenastane'],
        ['Nevědomá nedbalost', 'neví, ač vědět měl a mohl', 'nechtěl, nebyl srozuměn']
      ] },
      { t: 'warn', x: 'Příčinná souvislost musí být <b>přímá a adekvátní</b>. Stav, kdy by škoda vznikla i bez jednání škůdce, příčinnou souvislost nezakládá. Zaviní-li škodu <b>částečně i poškozený</b>, nese ji poměrně (podíl se krátí).' },
      { t: 'p', x: 'Splnění předpokladů 1–3 (protiprávnost, újma, příčinná souvislost) = <b>objektivní odpovědnost</b>; splnění všech čtyř (včetně zavinění) = <b>subjektivní odpovědnost</b>. Situace, která povinnost nahradit újmu vylučuje, je <b>okolnost vylučující protiprávnost</b>.' },
      { t: 'p', x: '<b>Protiprávnost</b> je jednání škůdce v rozporu se zákonem (<b>deliktní</b> odpovědnost), se smlouvou (<b>kontraktní</b>) nebo s předpokladem uvedeným v zákoně, se kterým je spojena povinnost nahradit újmu, aniž došlo k porušení povinnosti (<b>mimoodpovědnostní</b> náhrada škody).' },
      { t: 'ex', x: 'Pepa nechal puštěnou vodu v bytě a vytopil souseda. Protiprávní jednání (porušení prevenční povinnosti), škoda (zničená podlaha), příčinná souvislost (voda z jeho bytu), nedbalost (zapomněl) → odpovídá. Pojistka domácnosti kryje jeho odpovědnost.' }
    ] },
    { title: 'Okolnosti vylučující protiprávnost a prevence', blocks: [
      { t: 'p', x: 'Někdy osoba škodu prokazatelně způsobí, ale po ní by bylo nevhodné náhradu požadovat. Jde o <b>okolnosti vylučující protiprávnost</b>.' },
      { t: 'table', head: ['Okolnost', 'Podmínky a příklad'], rows: [
        ['<b>Nutná obrana</b> (§ 2905)', 'odvracení protiprávního trvajícího útoku (aktivní konání fyzické osoby); obrana nesmí být zcela zjevně nepřiměřená. Příklad: napadený v přiměřené obraně rozbije útočníkovi hodinky – útočník nemá právo na náhradu'],
        ['<b>Krajní nouze</b>', 'stav hrozícího nebezpečí, které ohrožená osoba sama nevyvolala; způsobený následek není shodné intenzity ani vážnější než hrozící. Příklad: při hašení požáru v bytě je vytopen soused – zpravidla se nehradí'],
        ['Vyloučení krajní nouze', 'osoba nebezpečí sama vyvolala, šlo ho odvrátit jinak, nebo je způsobený následek vážnější či stejně závažný než hrozící']
      ] },
      { t: 'warn', x: 'Slajd uvádí u nutné obrany i podmínku „újma poškozeného je nepatrná“ – bez vysvětlení to nedává smysl. Ověř přesné znění podmínek v § 2905 OZ; pro zkoušku si pamatuj: útok musí být protiprávní a obrana nesmí být zcela zjevně nepřiměřená.' },
      { t: 'def', term: 'Prevenční povinnost', x: 'Každý je povinen počínat si při svém jednání tak, aby nedocházelo k nedůvodným újmám.', items: ['základ deliktní odpovědnosti i bez porušení konkrétního zákazu', 'viz též obecná prevenční povinnost v předpokladech odpovědnosti'] }
    ] },
    { title: 'Škoda, újma a způsob náhrady', blocks: [
      { t: 'table', head: ['Pojem', 'Význam', 'Příklad'], rows: [
        ['Újma (obecně)', 'zastřešující pojem – majetková i nemajetková', '–'],
        ['Škoda (majetková újma)', 'újma objektivně vyčíslitelná v penězích', 'rozbité auto, ztráta příjmu'],
        ['Skutečná škoda', 'zmenšení majetku poškozeného', 'náklady na opravu, hodnota zničené věci'],
        ['Ušlý zisk (§ 2952)', 'to, oč se majetek nezvětšil, ač by se při obvyklém běhu věcí zvětšil', 'nevyrobená produkce, ušlá tržba'],
        ['Nemajetková újma', 'zásah do přirozeného práva člověka (život, zdraví, důstojnost, soukromí, čest)', 'bolest, ztížení společenského uplatnění, zásah do cti'],
        ['Škoda na zdraví (§ 2958)', 'náhrada <b>bolestného</b> a <b>ztížení společenského uplatnění</b>, náklady léčení, ztráta na výdělku', 'úraz po srážce'],
        ['Smrt (§ 2959)', 'pozůstalí – <b>osoby blízké</b> dostanou peněžitou náhradu duševních útrap', 'úmrtí rodiče či dítěte']
      ] },
      { t: 'table', head: ['Způsob náhrady', 'Pravidlo', 'Poznámka'], rows: [
        ['Naturální (restituce)', 'uvedení do předešlého stavu (oprava, výměna, dodání jiné věci stejného druhu)', 'primární způsob (§ 2951)'],
        ['Peněžitá', 'je-li uvedení do původního stavu nemožné/neúčelné, nebo si to poškozený přeje', 'v penězích se platí i nemajetková újma (zadostiučinění) – může být i omluva'],
        ['Rozsah', 'plná náhrada: skutečná škoda + ušlý zisk', 'moderační právo soudu – snížení náhrady (u škodníka z nedbalosti, s ohledem na majetkové poměry)']
      ] },
      { t: 'tip', x: 'Mnemotechnika: <b>škoda = skutečná škoda + ušlý zisk</b>. Nemajetková újma se nahrazuje <b>jen v případech stanovených zákonem</b> (zásah do přirozených práv – § 2956), vždy v přiměřené výši.' },
      { t: 'warn', x: 'Škoda <b>musí být prokázána a vyčíslena</b> poškozeným (ten nese důkazní břemeno). Hypotetická, zcela nejistá ztráta (např. ušlý zisk bez dokladů) nestačí. <b>Promlčení</b> práva na náhradu: obecně 3 roky od vědomosti o škodě a škůdci, nejdéle 10 let od vzniku (u úmyslně způsobené škody 15 let).' }
    ] },
    { title: 'Náhrada při újmě na zdraví, usmrcení a peněžité dávky', blocks: [
      { t: 'ul', items: [
        '<b>Újma na přirozených právech člověka:</b> vznikne-li povinnost nahradit újmu na přirozených právech (ochrana osobnosti), nahradí škůdce škodu i nemajetkovou újmu, kterou tím způsobil.',
        '<b>Ublížení na zdraví</b> (zlomenina, amputace, ochrnutí…): škůdce odčiní újmu peněžitou náhradou, která plně vyvažuje vytrpěné bolesti a další nemajetkové újmy; je-li překážkou lepší budoucnosti, nahradí i <b>ztížení společenského uplatnění</b>.',
        '<b>Usmrcení nebo zvlášť závažné ublížení na zdraví:</b> škůdce odčiní duševní útrapy manželu, rodiči, dítěti nebo jiné osobě blízké peněžitou náhradou vyvažující plně jejich utrpení; nelze-li výši určit, stanoví se podle zásad slušnosti. Zákon umožňuje přizpůsobit výši okolnostem (talentovaný sportovec × vědec; manželé, kteří spolu patnáct let nežili × blízký celoživotní vztah).',
        '<b>Náklady:</b> škůdce hradí účelně vynaložené náklady spojené s péčí o zdraví poškozeného, jeho osobu nebo domácnost tomu, kdo je vynaložil; přiměřené náklady <b>pohřbu</b>, pokud je nehradí veřejná dávka.'
      ] },
      { t: 'table', head: ['Peněžitá dávka', 'Obsah'], rows: [
        ['Ztráta na výdělku po dobu pracovní neschopnosti', 'peněžitý důchod ve výši rozdílu mezi průměrným výdělkem před újmou a tím, co poškozený dostal podle jiného předpisu při nemoci či úrazu'],
        ['Po skončení neschopnosti, příp. při invaliditě', 'náhrada za ztrátu na výdělku, později na důchodu'],
        ['Žák nebo student', 'náhrada ztráty na výdělku ode dne, kdy měla skončit povinná školní docházka, studium či příprava na povolání, po dobu, o niž se prodloužily následkem újmy na zdraví, nebo po dobu zdravotního postižení, které brání (úplně či zčásti) zapojení do výdělečné činnosti']
      ] }
    ] },
    { title: 'Objektivní × subjektivní odpovědnost, liberace, odpovědnost za jiného', blocks: [
      { t: 'table', head: ['', 'Subjektivní', 'Objektivní'], rows: [
        ['Podmínka', 'zavinění (úmysl nebo nedbalost)', 'výsledek – vznik škody; zavinění se nezkoumá'],
        ['Zproštění', 'škůdce prokáže, že jednal s péčí (nezavinil)', 'jen <b>liberací</b> – zákonné důvody (např. vyšší moc, jednání poškozeného)'],
        ['Kdy', 'obecné pravidlo (§ 2910 an.)', 'jen tam, kde to zákon stanoví'],
        ['Příklady', 'špatný šachový tah, dopravní nehoda z nepozornosti', 'zvlášť nebezpečný provoz, vada výrobku, zvíře, vada věci při úplatném plnění']
      ] },
      { t: 'def', term: 'Liberace (zproštění odpovědnosti)', x: 'Možnost odpovědné osoby <b>zprostit se</b> povinnosti k náhradě prokázáním zákonných okolností.', items: ['<b>liberační důvody</b> se liší podle skutkové podstaty', 'u smluvní odpovědnosti (§ 2913) zprostí škůdce <b>mimořádná, nepředvídatelná a nepřekonatelná překážka vzniklá nezávisle na vůli</b>', 'příklad vyšší moci: povodeň, válka'] },
      { t: 'table', head: ['Další případy (doplněno)', 'Odpovědná osoba', 'Typ / zproštění'], rows: [
        ['<b>Vada výrobku</b>', 'výrobce (též dovozce a označený výrobce)', 'objektivní; zprostí se např. nedostatkem poznatků v době uvedení do oběhu'],
        ['<b>Pomocník</b> při plnění závazku', 'dlužník – odpovídá, jako by plnil sám', 'jinak by se věřitel nemohl domoci náhrady'],
        ['<b>Zaměstnanec</b> při výkonu práce', 'zaměstnavatel (zákoník práce)', 'objektivní; regres po zaměstnanci omezen']
      ] },
      { t: 'p', x: 'Zvláštní případy odpovědnosti (škoda způsobená tím, kdo nemůže posoudit následky, osobou nebezpečných vlastností, z provozní činnosti, provozem zvlášť nebezpečným, dopravou, zvířetem, na vnesené věci) jsou samostatně v další sekci.' },
      { t: 'warn', x: '<b>Nezletilý a nesvéprávný</b>: odpovídá jen tehdy, je-li schopen ovládat své jednání a posoudit jeho následky. Bylo-li dítě zjevně nevyspělé, odpovídá dohlížející osoba; pokud dohled neselhal (osoba prokáže, že dohlížela s péčí), může se zprostit. Rodiče neručí za své děti automaticky.' },
      { t: 'ex', x: 'Šestiletý Tomáš rozbije míčem sousedovo okno. Nese odpovědnost sám? Nejspíš ne (není způsobilý posoudit následky). Škodu hradí ten, kdo nad ním zanedbal dohled, tedy rodiče, jestliže neprokáží řádný dohled. Rodiče pak mohou použít pojištění odpovědnosti.' },
      { t: 'p', x: '<b>Solidarita</b>: způsobí-li škodu více osob společně, odpovídají společně a nerozdílně; poškozenému stačí žalovat kteréhokoli, ten se pak domáhá <b>regresu</b> (vyrovnání) po ostatních.' }
    ] },
    { title: 'Zvláštní případy odpovědnosti za škodu', blocks: [
      { t: 'p', x: 'Zvláštní případy jsou skutkově užší okruhy (podle toho, <b>kým</b> nebo <b>čím</b> byla škoda způsobena, popř. <b>na čem</b>). Zákon je upravil proto, že se v praxi vyskytují nejčastěji (doprava), nebo vzbuzují aplikační potíže (škoda způsobená několika osobami).' },
      { t: 'table', head: ['Případ', 'Pravidlo', 'Zproštění'], rows: [
        ['<b>Škoda způsobená tím, kdo nemůže posoudit následky</b> (nezletilý, duševní porucha)', 'nahradí ji, byl-li způsobilý ovládnout jednání a posoudit následky; jinak má poškozený právo na náhradu, je-li to spravedlivé s ohledem na majetkové poměry. Společně a nerozdílně nahradí ten, kdo nad ním zanedbal dohled (je-li škůdce zproštěn, hradí jen dohlížející). Kdo se sám uvede do takového stavu, škodu nahradí', '–'],
        ['<b>Osoba s nebezpečnými vlastnostmi</b>', 'kdo se jí vědomě ujme (poskytne útulek nebo svěří činnost bez nutné potřeby), nahradí škodu společně a nerozdílně s ní', '–'],
        ['<b>Provozní činnost</b>', 'provozovatel závodu či zařízení sloužícího k výdělečné činnosti hradí škodu z provozu (vlastní činností, věcí, vlivem na okolí)', 'prokáže, že vynaložil veškerou péči, kterou lze rozumně požadovat'],
        ['<b>Provoz zvlášť nebezpečný</b>', 'provoz, u něhož nelze předem rozumně vyloučit možnost závažné škody ani při řádné péči (zpravidla továrním způsobem, s výbušnou či obdobně nebezpečnou látkou); zdroj zvýšeného nebezpečí', 'vyšší moc, vlastní jednání poškozeného nebo neodvratitelné jednání třetí osoby'],
        ['<b>Provoz dopravních prostředků</b>', 'kdo provozuje dopravu, hradí škodu z její zvláštní povahy; i provozovatel vozidla, plavidla, letadla (ne poháněných lidskou silou). Kdo dopravní prostředek použije bez vědomí či proti vůli provozovatele, hradí místo něj; provozovatel společně s ním, umožnil-li užití z nedbalosti', 'nezprostí se u škody z okolností, které mají původ v provozu; jinak když prokáže, že škodě nemohl zabránit ani při veškerém úsilí'],
        ['<b>Škoda způsobená zvířetem</b>', 'nahradí ji vlastník (i když zvíře bylo pod dohledem jiného, zatoulalo se nebo uprchlo); společně a nerozdílně s ním ten, komu bylo svěřeno nebo kdo je chová či používá', 'jen u zvířete sloužícího k povolání, výdělku, obživě nebo jako pomocník osoby se zdravotním postižením: prokáže potřebnou pečlivost při dozoru'],
        ['<b>Škoda na vnesené věci</b>', 'ubytovatel nahradí škodu na věci, kterou ubytovaný vnesl do prostor vyhrazených k ubytování či uložení; hradí se do výše <b>stonásobku ceny ubytování za den</b>; bez omezení při převzetí do úschovy, nezákonném odmítnutí úschovy nebo zavinění ubytovatelem či pracovníkem', 'prokáže, že by škoda vznikla i jinak, nebo ji způsobil ubytovaný či osoba, která ho z jeho vůle provází']
      ] },
      { t: 'ex', x: 'Pepa se ubytuje v hotelu za 2 000 Kč na noc a z pokoje mu zmizí fotoaparát za 50 000 Kč. Hotel hradí škodu jen do <b>200 000 Kč</b> (stonásobek 2 000 Kč) – to pokryje celou škodu. Při škodě 300 000 Kč by hradil max. 200 000 Kč, ledaže Pepa věc dal do úschovy nebo škodu zavinil hotel či jeho pracovník.' }
    ] },
    { title: 'Smluvní × mimosmluvní odpovědnost, předpisy', blocks: [
      { t: 'table', head: ['', 'Smluvní', 'Mimosmluvní (deliktní)'], rows: [
        ['Povinnost', 'vzniklá ze smlouvy', 'vyplývá ze zákona, z absolutního práva, z prevence nebo dobrých mravů'],
        ['Vztah', 'strany se znají (věřitel × dlužník)', 'cizí osoby (poškozený × škůdce)'],
        ['Hlavní ustanovení', '§ 2913 an. (povinnost nahradit škodu z porušení smlouvy)', '§ 2910 (porušení zákonné povinnosti), § 2909 (dobré mravy)'],
        ['Zproštění', 'vyšší moc (§ 2913 odst. 2) či ujednání (dohodnout odpovědnost lze, ale ne vyloučit úmysl/hrubou nedbalost)', 'liberační důvody u konkrétních skutkových podstat'],
        ['Rozsah', 'škoda, kterou strana při uzavření smlouvy mohla předvídat jako možný následek porušení (§ 2913 odst. 2 – předvídatelnost)', 'plná náhrada skutečné škody a ušlého zisku']
      ] },
      { t: 'warn', x: '<b>Vyloučení odpovědnosti předem</b> je možné jen v omezené míře: nelze vyloučit odpovědnost za újmu <b>úmyslnou nebo z hrubé nedbalosti</b>, ani za újmu na přirozených právech člověka (život, zdraví). Takové ujednání je neplatné.' },
      { t: 'table', head: ['Přehled předpisů', 'Obsah'], rows: [
        ['NOZ 89/2012 Sb.', 'obecná občanskoprávní odpovědnost (§ 2894–2971), bezdůvodné obohacení (§ 2991–3005), jednatelství bez příkazu'],
        ['Zákoník práce 262/2006 Sb.', 'odpovědnost zaměstnavatele a zaměstnance za škodu (§ 248 an.)'],
        ['Zákon 82/1998 Sb.', 'odpovědnost státu za újmu při výkonu veřejné moci'],
        ['Zákon 250/2016 Sb.', 'přestupky a řízení o nich'],
        ['Trestní zákoník 40/2009 Sb.', 'trestní odpovědnost (fyzické i právnické osoby – zák. 418/2011 Sb.)']
      ] }
    ] },
    { title: 'Bezdůvodné obohacení (§ 2991 an.)', blocks: [
      { t: 'def', term: 'Bezdůvodné obohacení', x: 'Kdo se <b>obohatí</b> majetkovým prospěchem <b>na úkor jiného</b> bez spravedlivého důvodu, musí obohacení vydat (§ 2991 odst. 1).', items: ['věřitelem je ochuzený', 'dlužníkem je obohacený'] },
      { t: 'p', x: 'Podle přednášky jde o: plnění bez právního důvodu, plnění z právního důvodu, který odpadl, protiprávní užití cizí hodnoty, plnění za někoho, kdo měl plnit sám, a plnění jiného bez platného závazku. Obohacení nemusí vzniknout protiprávním jednáním (na rozdíl od odpovědnosti za škodu). Které případy vydání nepodléhají, stanoví § 2992. Promlčení: subjektivní 3letá a objektivní 10letá lhůta. Další typy <i>(doplněno)</i>:' },
      { t: 'table', head: ['Případ', 'Význam', 'Příklad'], rows: [
        ['Plnění <b>bez právního důvodu</b>', 'plnil bez dluhu', 'zaplatil fakturu dvakrát; omylem poslal peníze na jiný účet'],
        ['Za něho bylo plněno, co měl plnit sám', 'třetí osoba splnila cizí dluh bez pověření', 'cizí plátce uhradí dluh jiného, který tím je obohacen'],
        ['Plnění jiného bez platného závazku', 'plnění bez závazku, který by k tomu zavazoval', 'zaplacení dluhu, který neexistuje'],
        ['<i>(doplněno)</i> Z <b>neplatného právního jednání</b>', 'smlouva byla neplatná (od počátku)', 'platba kupní ceny z neplatné kupní smlouvy → vrací se vzájemně'],
        ['Z právního důvodu, který <b>odpadl</b>', 'smlouva zanikla (např. odstoupením)', 'po odstoupení od smlouvy se vrací zaplacená cena'],
        ['<i>(doplněno)</i> Z <b>nedosažení účelu</b>', 'plnění za účelem, který se nedostavil', 'záloha na plánovanou koupi, která se nekonala'],
        ['<b>Protiprávní užití cizí hodnoty</b>', 'bez právního důvodu (zneužití cizí věci)', 'neoprávněný odběr elektřiny, vody; užívání cizího bytu bez nájemní smlouvy'],
        ['<i>(doplněno)</i> Z <b>nepoctivých zdrojů</b>', 'zisk z protiprávního jednání nebo ze zakázané činnosti', 'zisk z prodeje cizí věci']
      ] },
      { t: 'table', head: ['Hledisko', 'Poctivý (dobrá víra)', 'Nepoctivý'], rows: [
        ['Vydání', 'jen to, co ještě má / o co je obohacen', 'vše + užitky a vynaložené náklady; vrací, co by mohl získat'],
        ['Úrok z obohacení', 'zpravidla ne', 'ano, od okamžiku obohacení'],
        ['Obohacení již nemá', 'nemusí vydat (už není obohacen)', 'musí poskytnout peněžitou náhradu (hodnotu)']
      ] },
      { t: 'warn', x: 'Bezdůvodné obohacení × náhrada škody: u obohacení se zkoumá <b>zisk obohaceného</b> (nikoli újma poškozeného) a <b>nepotřebuje se zavinění</b>. Vydat se má plnění „v naturální podobě“, nelze-li, v penězích. Nevrací se plnění poskytnuté <b>vědomě</b> na cizí/neexistující dluh nebo na dluh promlčený.' },
      { t: 'ex', x: 'Anna zaplatí kupní cenu za auto, avšak smlouva se ukáže jako neplatná pro nedostatek formy. Nárok na vrácení: ze smlouvy žádný (smlouva neplatná), ale z bezdůvodného obohacení ano; kupující vrací auto, prodávající peníze. Pozor – obecná promlčecí lhůta běží i pro nárok z obohacení.' }
    ] },
    { title: 'Veřejnoprávní odpovědnost (doplněno)', blocks: [
      { t: 'table', head: ['Druh', 'Kdo odpovídá', 'Základ', 'Sankce'], rows: [
        ['<b>Trestný čin</b>', 'FO od 15 let; PO (zák. 418/2011 Sb.)', 'trestní zákoník 40/2009 Sb.', 'odnětí svobody, peněžitý trest, zákaz činnosti, propadnutí věci, zrušení PO'],
        ['<b>Přestupek</b>', 'FO od 15 let; PO; podnikající FO', 'zák. 250/2016 Sb. + zvláštní zákony', 'napomenutí, pokuta, zákaz činnosti, propadnutí věci, zveřejnění rozhodnutí'],
        ['<b>Jiný správní delikt</b>', 'PO a podnikající FO', 'zvláštní zákony (např. stavební, o ochraně ŽP, finanční trhy)', 'pokuta (vysoká), zákaz činnosti'],
        ['<b>Disciplinární / kárný delikt</b>', 'členové profesí (komory), soudci, studenti VŠ', 'profesní/vnitřní předpisy', 'důtka, pokuta, vyloučení, vyškrtnutí'],
        ['<b>Odpovědnost státu</b> (82/1998 Sb.)', 'stát, územní samospráva', 'výkon veřejné moci', 'náhrada škody a nemajetkové újmy poškozenému (objektivní)']
      ] },
      { t: 'def', term: 'Přestupek', x: '<b>Společensky škodlivý protiprávní čin</b>, který je v zákoně výslovně označen za přestupek a který vykazuje znaky stanovené zákonem (zák. 250/2016 Sb.).', items: ['projednává ho zpravidla <b>správní orgán</b> (obec, úřad), nikoli soud', 'trestný čin by projednával soud'] },
      { t: 'table', head: ['Hledisko', 'Trestný čin', 'Přestupek'], rows: [
        ['Společenská škodlivost', 'vyšší (musí jít o čin „společensky škodlivý“ + subsidiarita trestní represe)', 'nižší'],
        ['Orgán', 'policie – státní zástupce – soud', 'správní orgán (obecní úřad, policie – blokově)'],
        ['Rejstřík', 'rejstřík trestů', 'evidence přestupků'],
        ['Věk odpovědnosti', '15 let', '15 let'],
        ['Zánik', 'promlčení, amnestie, rehabilitace', 'promlčení (obecně 1 rok, u přestupků s vyšší sazbou 3 roky), zánik deliktní způsobilosti']
      ] },
      { t: 'p', x: '<b>Odpovědnost státu za újmu (82/1998 Sb.)</b>: stát odpovídá <b>objektivně</b> (bez zavinění úředníka) za újmu způsobenou (a) <b>nezákonným rozhodnutím</b> (zrušeným pro nezákonnost) nebo (b) <b>nesprávným úředním postupem</b> (typicky průtahy v řízení, nedodržení lhůt). Nárok se musí <b>předběžně uplatnit</b> u příslušného ministerstva/ústředního úřadu; teprve po uplynutí lhůty (6 měsíců) lze žalovat u soudu. Stát má právo na regres po úředníkovi jen zřídka (úmysl).' },
      { t: 'warn', x: 'Nezaměňuj <b>správní delikt</b> (trestání porušení povinností ve správním právu) a <b>správní žalobu</b> (soudní kontrola správního rozhodnutí). A také: odpovědnost státu za újmu nespadá do trestního práva – je to <b>soukromoprávní nárok z veřejnoprávní činnosti</b>.' },
      { t: 'ex', x: 'Radek jel autem 20 km/h nad povolenou rychlost. Řidič spáchal přestupek (pokuta). Zároveň se srazil s jiným autem a způsobil škodu 100 000 Kč – tady odpovídá civilně (NOZ), škodu hradí z povinného ručení. Tentýž skutek: dvě odpovědnosti, nevylučují se.' }
    ] }
  ],
  mistakes: [
    'Zaměňování pojmů <b>škoda</b> (majetková) × <b>újma</b> (zastřešující, i nemajetková).',
    'Zapomenutí, že <b>nedbalost se presumuje</b> – škůdce se musí sám vyvinit; poškozený prokazuje škodu, protiprávnost a příčinnou souvislost, ne nedbalost.',
    'Mylné tvrzení, že objektivní odpovědnost = „vždy zaplatí“. Liberace existuje (vyšší moc, jednání poškozeného, nedostatek poznatků u výrobku…).',
    'Míchání <b>bezdůvodného obohacení</b> a <b>náhrady škody</b>: u BO se nehledí na újmu ani zavinění, ale na to, o kolik se obohacený obohatil.',
    'Domněnka, že rodiče vždy odpovídají za škodu dětí – odpovídá nejprve dítě s rozumovou a volní vyspělostí, rodiče jen za chybný dohled.',
    'Zaměňování <b>smluvní</b> a <b>mimosmluvní</b> odpovědnosti – u smlouvy se řeší porušení závazku, nikoli „obecný delikt“.',
    'Tvrzení, že přestupek je projednáván soudem (obecně ho řeší správní orgán; soud jen v přezkumu).',
    'Zapomínání na promlčení: 3 roky subjektivní / 10 let objektivní.'
  ],
  qa: [
    { q: 'Jaké jsou předpoklady vzniku odpovědnosti za škodu podle NOZ?', a: 'Čtyři: (1) <b>protiprávní jednání</b> (porušení povinnosti), (2) <b>škoda/újma</b>, (3) <b>příčinná souvislost</b>, (4) <b>zavinění</b> (u subjektivní odpovědnosti; nedbalost se presumuje). U objektivní odpovědnosti zavinění odpadá.' },
    { q: 'Rozlište skutečnou škodu a ušlý zisk.', a: '<b>Skutečná škoda</b> = zmenšení majetku poškozeného (oprava, ztráta věci). <b>Ušlý zisk</b> = to, oč se majetek neprávem nezvětšil, ač by se při obvyklém běhu věcí zvětšil (např. ušlá tržba). Nahrazují se obojí (§ 2952).' },
    { q: 'Co je nemajetková újma a kdy se hradí?', a: 'Zásah do přirozených práv člověka (život, zdraví, důstojnost, čest, soukromí) – hradí se v případech stanovených zákonem, v přiměřené výši. U zdraví bolestné a ztížení společenského uplatnění (§ 2958), u smrti peněžitá náhrada osobám blízkým (§ 2959).' },
    { q: 'Jaký je způsob náhrady škody?', a: 'Primárně <b>naturální</b> (uvedení do předešlého stavu), jinak <b>peněžitá</b>; v penězích také na žádost poškozeného (§ 2951). Nemajetková újma zpravidla v penězích či jiným způsobem (omluva).' },
    { q: 'Co je liberace a kdy se uplatní?', a: 'Možnost <b>zprostit se odpovědnosti</b> prokázáním zákonných důvodů. Při objektivní odpovědnosti jedině tímto způsobem, např. vyšší moc či zavinění poškozeného. Ve smluvní odpovědnosti: mimořádná, nepředvídatelná a nepřekonatelná překážka (§ 2913 odst. 2).' },
    { q: 'Čím se liší objektivní a subjektivní odpovědnost? Uveď příklady.', a: 'Subjektivní = zavinění je podmínkou (obecné pravidlo, nedbalost se předpokládá). Objektivní = zavinění se neposuzuje, jen výsledek; zákonné případy: zvlášť nebezpečný provoz, vada výrobku, zvíře, vada věci při úplatném plnění, odpovědnost zaměstnavatele.' },
    { q: 'Šestiletý Tomáš rozbil míčem okno sousedovi. Kdo odpovídá?', a: 'Škůdce sám jen tehdy, byl-li způsobilý ovládnout své jednání a posoudit následky; šestileté dítě zpravidla nikoli. Společně a nerozdílně s ním (nebo místo něj, není-li povinen) hradí škodu <b>ten, kdo nad ním zanedbal dohled</b> (rodiče, škola). Nebyl-li schopen, může soud přiznat náhradu, je-li to spravedlivé s ohledem na majetkové poměry.' },
    { q: 'Co je obecná prevenční povinnost?', a: '§ 2900: povinnost počínat si tak, aby nedocházelo ke škodě na svobodě, životě, zdraví, majetku a přírodě, vyžadují-li to okolnosti nebo poměry. Slouží jako základ deliktní odpovědnosti i bez konkrétního zákazu.' },
    { q: 'Smluvní × mimosmluvní odpovědnost – rozdíl a příklad.', a: 'Smluvní: porušení smluvní povinnosti (zhotovitel dodá vadné dílo). Mimosmluvní: porušení zákonné povinnosti nebo absolutního práva, kde mezi stranami smlouva není (nehoda dvou řidičů). Liší se i zproštěním a předvídatelností škody.' },
    { q: 'Co je bezdůvodné obohacení a jaké jsou jeho typy?', a: 'Majetkový prospěch získaný <b>na úkor jiného bez právního důvodu</b>; vydání obohacení (§ 2991). Typy: plnění <b>bez právního důvodu</b>, z <b>neplatného úkonu</b>, z právního důvodu, který <b>odpadl</b>, z <b>nedosažení účelu</b>, z <b>protiprávního odběru</b>, z nepoctivých zdrojů.' },
    { q: 'Eva omylem poslala 20 000 Kč Honzovi, kterého si spletla s jiným příjemcem. Co může dělat?', a: 'Honza se bezdůvodně obohatil (plnění bez právního důvodu); Eva má nárok na <b>vydání obohacení</b>, tj. 20 000 Kč zpět. Honza je poctivý (nevěděl), proto vrací, o co je obohacen; po výzvě se z něj stává nepoctivý a platí i úrok. Nárok se promlčuje v obecné lhůtě 3 let.' },
    { q: 'Rozdíl mezi přestupkem a trestným činem.', a: 'Trestný čin je společensky škodlivější, projednává ho soud (po přípravném řízení policie a státního zástupce) a ukládá se trest; přestupek řeší správní orgán a ukládá správní sankci (pokuta, zákaz činnosti…). Odpovědnost od 15 let u obou.' },
    { q: 'Jak odpovídá stát za újmu způsobenou při výkonu veřejné moci?', a: 'Dle zák. 82/1998 Sb. <b>objektivně</b>: za nezákonné rozhodnutí (zrušené pro nezákonnost) a nesprávný úřední postup (např. průtahy). Nárok se nejdříve uplatní u příslušného úřadu (předběžné projednání); soud po 6 měsících.' },
    { q: 'Pepa najal firmu na obklad koupelny, firma obkládala špatně a vytopila sousedy. Kdo odpovídá?', a: 'Sousedům odpovídá primárně <b>firma jako škůdce</b> (mimosmluvní odpovědnost, ona porušila povinnost; za své zaměstnance odpovídá objektivně). Pepa odpovídá jen tehdy, porušil-li sám prevenční povinnost (samotná volba firmy zpravidla nestačí). Vůči firmě má Pepa nároky z vadného plnění díla (smluvní odpovědnost).' }
  ]
});
