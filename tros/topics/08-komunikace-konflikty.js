registerTopic({
  id: 'komunikace', order: 8, icon: '💬', title: 'Komunikace a řešení konfliktů', src: 'podklady', lec: [7],
  where: 'Přednáška 7 + Cvičení 5 + Dovednosti v řízení kap. 5.4–5.5',
  summary: 'Komunikační proces, bariéry a zlozvyky, verbální a neverbální komunikace, směry a formy komunikace v organizaci, porady, typy konfliktů a jejich řešení.',
  vocab: [
    { w: 'Komunikátor / komunikant', x: 'Ten, kdo sdělení vysílá / ten, kdo ho přijímá.' },
    { w: 'Komuniké', x: 'Obsah sdělení.' },
    { w: 'Metakomunikace', x: 'Komunikace o komunikaci: verbální i neverbální projevy, které upřesňují nebo mění význam sdělení.' },
    { w: 'Denotativní × konotativní význam', x: 'Slovníkový × emocionální význam slova.' },
    { w: 'Paralingvistika', x: 'Zvukové prvky řeči mimo slova: tempo, hlasitost, výška, barva, důraz, pauzy.' },
    { w: 'Proxemika', x: 'Vzdálenost mezi komunikujícími (zóny).' },
    { w: 'Konflikt', x: 'Střet navzájem se vylučujících snah, sil, potřeb, zájmů, hodnot nebo aktérů. Není dobrý ani špatný – dobré nebo špatné je jen jeho řešení.' }
  ],
  key: [
    'Komunikace = sdílení informací; <b>kdo, co, komu, čím, jakým médiem, s jakým úmyslem, s jakým účinkem</b>.',
    'Znaky: <b>cílová, kontextuální, oboustranná, symbolická</b>; má stránku <b>věcnou a vztahovou</b>.',
    'Směry: <b>sestupná, vzestupná, horizontální, diagonální</b>; formální × neformální.',
    'Neverbální: <b>mimika, gestika, haptika, proxemika, posturologie, kinezika</b>.',
    'Konflikty: <b>vnitřní, mezilidské, ve skupině, mezi skupinami</b>; mezi lidmi rozhoduje autorita a moc; 50 : 50 spolumajitelé = nejnebezpečnější.'
  ],
  sections: [
    { title: 'Komunikační proces', blocks: [
      { t: 'def', term: 'Komunikace', x: 'Sdílení informací. Ať chceme nebo nechceme, komunikujeme prakticky neustále, verbálně i neverbálně. V řízení jde o <b>předávání zpráv mezi lidmi</b>; řídící působení se realizuje právě komunikací: proces řízení určuje <b>obsah</b> (co má objekt udělat), komunikace hledá <b>formu</b> (jak to zadat, aby to bylo jasné). Špatné nařízení správně sdělené zůstane špatné; dobré nařízení špatně sdělené se pro nepochopení stane nevhodným.' },
      { t: 'svg', title: 'Komunikační proces', x: TROS.komunikace() },
      { t: 'ul', items: [
        '<b>Struktura:</b> kdo (komunikátor) říká co (komuniké) komu (komunikant) čím (druh komunikace, např. slova) prostřednictvím jakého média (např. mluvené řeči) s jakým úmyslem (motivace) s jakým účinkem.',
        '<b>Základní znaky:</b> komunikace má cíl; je kontextuální (záleží na situaci); je oboustranná; je symbolická (slova, gesta jsou symboly).',
        '<b>Věcná stránka</b> = obsah, informace, kterou sdělujeme; <b>vztahová stránka</b> = vztah mezi účastníky a význam, který sdělení přisuzují.',
        '<b>Funkce:</b> informativní, instruktážní, persuazivní (přesvědčovat), zábavní; funkce se mísí (instruktáž či přesvědčování se často tváří jako informování).'
      ] },
      { t: 'table', head: ['Podle počtu účastníků', 'Charakteristika'], rows: [
        ['Intrapersonální', 'vnitřní komunikace jednoho člověka v myšlenkách; typická pro rozhodování'],
        ['Interpersonální', 'mezi dvěma a více lidmi; vedení lidí, obchodní jednání'],
        ['Skupinová', 'specifický případ interpersonální v sociální skupině: porady, týmové řešení; kanálem je i internet'],
        ['Masová', 'jednosměrná k velkému počtu osob (TV, rozhlas, tisk, internet)']
      ] },
      { t: 'tip', x: 'Informace je nehmotná, neenergetická veličina, která <b>snižuje neurčitost (entropii)</b> chování systému; jednotkou je <b>1 bit</b>. Při předávání mezi stupni řízení se informace vždy částečně ztrácí.' }
    ] },
    { title: 'Proč si lidé neporozumí', blocks: [
      { t: 'versus', cols: [
        { h: 'Objektivní důvody', items: ['používání symbolů', 'různost jazyků', 'kulturní rozdíly', 'osobnostní rozdíly', 'rušení komunikace'] },
        { h: 'Individuální důvody', items: ['konzervativismus', 'předsudky', 'podezřívavost', 'neupřímnost, netaktnost', 'agresivita, konfliktnost', 'nerozlišování příčin a následků'] }
      ], x: 'I při poctivé snaze dochází k nedorozumění: slova, kterým příjemce nerozumí, mnohoznačná slova („mnoho“, „složité“), nejasné formulace, nepozornost nebo emoční předsudky. Nejsou to vždy chyby posluchače; vedoucí také nemusí vždy správně komunikovat ani mít pravdu.' },
      { t: 'table', head: ['Komunikační bariéry (překážky)', 'Zlozvyky na straně mluvčího', 'Zlozvyky na straně příjemce'], rows: [
        ['odlišnost postojů, názorů, znalostí a zkušeností; selektivní vnímání; špatné naslouchání; hodnocení a předčasné závěry; sémantické problémy; filtrování; časová tíseň; komunikační přetížení; nezájem; stydlivost, stres', 'dvojná vazba; nejasnost a nekonkrétnost; zobecňování; neupřímnost a skrývání pocitů; přehánění a překrucování; odbíhání od tématu; nekontrolované emoce', 'přerušování a skákání do řeči; neudržování očního kontaktu; nesoustředěnost; neposkytování zpětné vazby; čtení myšlenek']
      ] },
      { t: 'ul', items: [
        '<b>Vnímání</b> je aktivní proces: mozek vybírá podněty, které považuje za důležité; každý vnímá svět jinak podle zkušeností, očekávání a emocí (slyšíme a vidíme spíš interpretaci a filtraci než realitu).',
        '<b>Naslouchání</b> = soubor dovedností: soustředění a pozornost při příjmu signálů, porozumění významu, uložení do paměti, zhodnocení sdělení a reakce v podobě zpětné vazby.'
      ] }
    ] },
    { title: 'Verbální a neverbální komunikace', blocks: [
      { t: 'ul', items: [
        '<b>Formy:</b> verbální (písemná, ústní) a neverbální (řeč těla). Slova mají <b>denotativní</b> (slovníkový) a <b>konotativní</b> (emocionální) význam; technika řeči = dýchání, fonace (tvorba zvuku v hlasivkách), artikulace (vyslovování hlásek); gramatika a rétorika.',
        '<b>Paralingvistika:</b> rychlost, hlasitost, tónová výška, barva hlasu, intonace, přízvuk, důraz, pauzy, chyby v řeči, nefunkční zvuky („ehm“), parazitická slova. Tichá řeč bývá znakem úzkosti, nejistoty a nedostatku sebedůvěry; hlasitost není známkou kvality, spíše přesná artikulace a smysluplné frázování.',
        '<b>Metakomunikace</b> posouvá, popírá nebo doplňuje význam sdělení; význam poznáme z kontextu.'
      ] },
      { t: 'table', head: ['Neverbální oblast', 'Co zkoumá', 'Příklady'], rows: [
        ['<b>Mimika</b>', 'výraz obličeje; primární emoce (štěstí × neštěstí, klid × rozčílení, strach × jistota, zájem × nezájem)', 'bolest: čelo, obočí, víčka; štěstí: dolní část obličeje; strach a smutek: oči; vztek se zrcadlí v celém obličeji'],
        ['<b>Gestika</b>', 'kulturně vázané posunky', 'gesto „OK“ nebo „palec nahoru“ má jiný význam v různých zemích (Francie: nula, Japonsko: peníze, Brazílie: vulgární)'],
        ['<b>Haptika</b>', 'doteková komunikace', 'podání ruky: vzhled, vjem stisku, suchost/vlhkost, síla stisku, délka kontaktu, styl uchopení (6 způsobů)'],
        ['<b>Proxemika</b>', 'vzdálenost', 'intimní zóna do 30–60 cm; osobní do 1,2–2 m; společenská 1,2–3,6 m; veřejná od 3,6 m'],
        ['<b>Posturologie</b>', 'postoje těla', 'stání, sezení, ležení'],
        ['<b>Kinezika</b>', 'pohyby těla v sociální interakci a jejich koordinace', 'rozsah, počet a různorodost pohybů (zvýšený počet = napětí); soulad × nesoulad dvou lidí']
      ] },
      { t: 'p', x: '<b>Řeč těla – ukázky</b>' },
      { t: 'ul', items: [
        'rázná, vzpřímená chůze = odvaha, sebedůvěra; shrbený člověk s rukama v kapsách = sklíčenost; přešlapování = nejistota; ruce v bok = zlost, připravenost jednat; překřížené ruce = malé sebevědomí;',
        'nakloněná hlava = zájem; mírný předklon = soustředěnost; posed na kraji židle a pohledy na hodinky = netrpělivost; otáčení těla pryč = nezájem o komunikaci;',
        'potenciální zákazník: ruka na bradě = zvažuje; tření nosu a doteky kolem očí = pochybnosti, lhaní; uchazeč o práci: otevřené dlaně = upřímnost, ruce sevřené za zády = hněv, frustrace.'
      ] },
      { t: 'warn', x: 'Neverbální signály jsou podmíněny druhově, <b>kulturou</b>, osobností, dobou a prostředím, sociální skupinou – jeden signál nikdy nevykládej izolovaně, vždy v kontextu situace.' }
    ] },
    { title: 'Komunikace v organizaci', blocks: [
      { t: 'p', x: 'Podnik komunikuje se svým okolím: konkurenty, substituenty, dodavateli i potenciálními dodavateli, odběrateli i potenciálními odběrateli, úřady a finančními institucemi. <b>Na konci je vždy nějaký člověk</b> – komunikace mezi dvěma nebo více lidmi.' },
      { t: 'svg', title: 'Směry komunikace v organizaci', x: TROS.smery() },
      { t: 'table', head: ['Směr / status', 'Obsah a nástroje'], rows: [
        ['<b>Sestupná</b> (shora)', 'řídící příkazy, instrukce, delegování; dává zaměstnancům informace o podniku a zpětnou vazbu; podnikové publikace, brožury, bulletiny, vnitropodniková pošta, setkání'],
        ['<b>Vzestupná</b> (zdola)', 'nápady, návrhy, doplňující informace z místa realizace, výsledky kontroly; systém stížností, diskusní kroužky, systémy návrhů, průzkumy názorů'],
        ['<b>Horizontální</b>', 'koordinace OJ, spolupráce vedoucích na stejném stupni; často vyvolána špatnou vertikální komunikací'],
        ['<b>Diagonální</b>', 'horizontální i vertikální zároveň (ředitel závodu × vedoucí provozu jiného závodu); typická pro projektové řízení'],
        ['<b>Formální (oficiální)</b>', 'vertikální mezi nadřízeným a podřízeným: pokyny, doporučení, kontrola'],
        ['<b>Neformální</b>', 'všemi směry v sociálním subsystému; šíří se rychle (nejrychleji špatné zprávy), nemusí být pravdivá']
      ] },
      { t: 'ex', x: '<b>Fáma:</b> podnik ztratil významného odběratele a šíří se zpráva o propouštění → vedení musí při nejbližší poradě reagovat a věc uvést na pravou míru. Fámu, že havaroval šéf (auto stejné značky), vyvracet netřeba – druhý den se prokáže, že to není pravda.' },
      { t: 'ul', items: [
        '<b>Ztráta informace:</b> předávání informace mezi stupni řízení je sériové spojení – každý stupeň ji zkresluje; po třech stupních je třeba sériové uspořádání přerušit (ekonomická nebo právní samostatnost) – závěr stejný jako u organizačních stupňů.',
        'Ředitelé si často budují <b>neoficiální informační kanál</b> „přímo od pramene“.'
      ] }
    ] },
    { title: 'Rady pro sdělování a přijímání informací', blocks: [
      { t: 'versus', cols: [
        { h: 'Když sdělujete (ŘP → podřízený)', items: ['zaujměte vlastní stanovisko a to sdělujte (připravenost)', 'využijte ochotu partnera – jak předejít opakování chyby', 'přizpůsobte sdělení příjemci (inteligence, temperament, znalosti, věk, situace)', 'vhodný rozsah – ani málo, ani moc', 'kombinujte ústní s názorným (nakreslete)', 'počítejte s citovou reakcí', 'ověřte pochopení kontrolní otázkou', 'spisovně, bez hantýrky a nadbytku cizích slov'] },
        { h: 'Když přijímáte', items: ['vytvořte atmosféru důvěry (jednání není zkouška)', 'dejte najevo, že informaci potřebujete', 'reagujte – poskytujte zpětnou vazbu', 'buďte aktivní a snažte se porozumět', 'naučte se ptát a naslouchat (ne vyslýchat) – rozhovor ve skutečnosti řídí ten, kdo se ptá', 'vhodným dotazem ověřte, že jste informaci pochopili, teprve potom zaujměte stanovisko'] }
      ], x: 'Dobrý komunikátor se na sdělení připraví, mluví jazykem posluchače a ověřuje, jestli mu rozuměl; dobrý posluchač se aktivně ptá a dává najevo zájem. Obě role se v průběhu rozhovoru střídají, takže se dobré návyky hodí oběma stranám.' }
    ] },
    { title: 'Porady', blocks: [
      { t: 'table', head: ['Druh porady', 'Charakter a komunikace', 'Pozor'], rows: [
        ['<b>Valná hromada</b>', 'nejvyšší řídící orgán, formální, předepsaná pravidla; sestupná (oznamování, prezentace), zpětná vazba = <b>hlasování</b>', 'program doručen min. měsíc předem; šum = různé zájmy akcionářů; zápis ověřuje notář při volbě orgánů a majetkových účastech'],
        ['<b>Zasedání představenstva</b>', 'kolektivní rozhodování většinou hlasů o strategii; komunikace všemi směry; písemný zápis', 'předseda může mít dva hlasy; šum = prosazování vlastního projektu'],
        ['<b>Porada vedení (závodu, provozu)</b>', 'informační a řídící charakter; sestupná, oficiální, řízená; závěry závazné; standardní struktura (zahájení, organizační změny, ekonomika, obchodní případy, kontrola úkolů, nové úkoly, problémy, ukončení, zápis)', 'jasný začátek a konec; úkol – termín – zodpovědná osoba; zápis odstraňuje šum; navazují porady nižších OJ'],
        ['<b>Porada tvůrčích a realizačních týmů</b>', 'tvůrčí/konstruktivní charakter, výměna názorů, nápady', 'nelze čekat rychlý, jednoznačný závěr'],
        ['<b>Hodnocení pracovníka</b> (např. čtvrtletní)', 'zpětná vazba, motivace', 'viz motivace – chválit veřejně, kritizovat v soukromí']
      ] },
      { t: 'tip', x: 'Cíl porady určuje její charakter: <b>informační</b> (informovanost), <b>řídící</b> (příkazy, odpovědné osoby, termíny, kontrola), <b>konstruktivní</b> (řešení problému a rozhodnutí), <b>tvůrčí</b> (nápady).' }
    ] },
    { title: 'Konflikty a jejich řešení', blocks: [
      { t: 'def', term: 'Konflikt', x: 'Srážka dvou nebo více do určité míry se vylučujících snah, sil, potřeb, zájmů, citů, hodnot nebo aktérů, kteří činí rozhodnutí v rámci stejného systému nebo se musí dělit o společné zdroje. <b>Neexistuje dobrý nebo špatný konflikt, ale jen dobré nebo špatné řešení konfliktu.</b>' },
      { t: 'table', head: ['Typ konfliktu', 'Charakteristika a příklad'], rows: [
        ['<b>Vnitřní (intrapersonální)</b>', 'konflikt pocitů, názorů, motivů; častý u vyšších ŘP: cíl × morálka (zakázka za úplatek). Motivační typy: <b>apetence × apetence</b> (dvě pozitivní varianty), <b>apetence × averze</b>, <b>averze × averze</b> (obě negativní – nejtěžší)'],
        ['<b>Mezilidský (interpersonální)</b>', 'předmět: <b>vztahy</b>, <b>střet zájmů</b>, <b>postojů a hodnot</b>, <b>cílů</b> (rozvoj × dividenda), <b>prostředků</b> k cíli, <b>informací</b> (jiné údaje nebo interpretace), <b>strukturální</b> (nevyvážené pravomoci, kdo za co odpovídá)'],
        ['<b>Ve skupině</b>', 'skupina se nemůže shodnout na řešení nebo prostředcích; vznikají dva tábory'],
        ['<b>Mezi skupinami</b>', 'uvnitř podniku (nárokování zdrojů – peníze, lidi, čas) nebo mimo podnik (obchodníci dvou firem)']
      ] },
      { t: 'versus', title: 'Otevřený × skrytý konflikt', cols: [
        { h: 'Otevřený', items: ['většinou mezilidský, zřejmý', 'příčiny: osobnost, psychický stav, frustrace, nedorozumění, záměr získat převahu', 'výhoda: je vidět → lze řešit'] },
        { h: 'Skrytý', items: ['vnitřní nebo mezilidský latentní („zraje“)', 'projevy: nervozita, zbytečná agresivita, obavy', 'může vyvolat větší stresové napětí než otevřený'] }
      ], x: 'Otevřený konflikt můžeš řešit, protože o něm víš. Skrytý konflikt narůstá potichu a projeví se až v nervozitě či výbuchu. ŘP může pomoci s otevřeným mezilidským konfliktem – odstraní jeho příčinu (pravomoci, zdroje), vystupuje jako mediátor, nebo uplatní pravomoc nadřízeného. Skryté vnitřní konflikty si musí vyřešit každý sám.' },
      { t: 'table', head: ['Situace', 'Co rozhoduje a doporučení'], rows: [
        ['<b>Nadřízený × podřízený</b>', 'moc je vždy na straně nadřízeného; je-li autorita také u něj, snadné; je-li autorita (odbornost) u podřízeného, je rozumné ji uznat – získáte důležitého člověka; opakované konflikty a nevhodné chování šéfa (ironie, výbuchy) vedou k vnitřnímu konfliktu „odejít × neodejít“ (averze × averze) a fluktuaci'],
        ['<b>ŘP × ŘP na stejném stupni</b>', 'stejná moc → rozhoduje váha autority (i při rozhodnutí GŘ)'],
        ['<b>Spolumajitelé</b>', 'nejnebezpečnější pro podnik; rozhoduje kapitálový podíl; <b>50 % : 50 %</b> = neřešitelná situace, až soud'],
        ['<b>Ve skupině</b>', 'rozhodne nadřízený po konzultaci s <b>neformálním vůdcem</b>, aby se skupina s rozhodnutím ztotožnila'],
        ['<b>Mezi skupinami uvnitř podniku</b>', 'rozhodne nadřízený; konzultace s neformálními vůdci obou skupin; ideální kompromis; konflikt neznamená jen negativum – ukazuje aktivitu a konkurenční prostředí'],
        ['<b>Mezi skupinami mimo podnik</b>', 'bez dohody rozhoduje třetí strana: <b>mediátor</b> (kompromis), <b>soud</b> (právní nároky), <b>arbitráž</b> (rozhodčí řízení – bez odvolání)']
      ] },
      { t: 'ul', items: [
        '<b>Fázový model:</b> podmínky konfliktu → manifestace → eskalace → deeskalace → ukončení → důsledky. Konflikt se nikdy nevrací do stavu před vypuknutím.',
        '<b>Strukturální model:</b> předmět sporu, charakteristiky stran, vztahy mezi nimi, sociální kontext, použité prostředky, efekty.',
        '<b>Neřešený významný konflikt eskaluje:</b> např. strukturální spor (špatné pravomoci) → střet zájmů → konflikt vztahů; končí odvoláním vedoucích, přitom na začátku stačilo upravit pravomoc. Marginální konflikt (konflikt informací) „vyšumí“ a ŘP do něj zasahovat nemusí – vede podřízené k samostatnosti.',
        'Význam konfliktu roste se stupněm řízení: konflikty vyšších ŘP ohrožují celý podnik, konflikty majitelů jeho existenci.'
      ] }
    ] }
  ],
  mistakes: [
    'Považovat komunikaci jen za předání informace – je tu i vztahová stránka a zpětná vazba.',
    'Neverbální signál vykládat bez kontextu a kultury (gesto „OK“).',
    'Zasahovat do každého drobného konfliktu – část jich sama „vyšumí“ a podřízení se učí samostatnosti.',
    'Řešit konflikt nadřízený × podřízený čistě mocí, i když autorita je u podřízeného.',
    'Chválit v soukromí a kritizovat na veřejnosti (má to být naopak).'
  ],
  qa: [
    { q: 'Jaká je struktura komunikace a její základní znaky?', a: 'Kdo (komunikátor) říká co (komuniké) komu (komunikant) čím (druh, např. slova) prostřednictvím jakého média s jakým úmyslem a účinkem. Znaky: cíl, kontextuálnost, oboustrannost, symboličnost; věcná a vztahová stránka.' },
    { q: 'Jaké jsou druhy komunikace?', a: 'Podle počtu účastníků: intrapersonální, interpersonální, skupinová, masová. Podle směru: sestupná, vzestupná, horizontální, diagonální. Podle statutu: formální (oficiální) a neformální.' },
    { q: 'Co jsou komunikační bariéry a zlozvyky?', a: 'Bariéry: odlišnost postojů a zkušeností, selektivní vnímání, špatné naslouchání, předčasné závěry, sémantika, filtrování, časová tíseň, přetížení, nezájem, stres. Zlozvyky mluvčího: dvojná vazba, nejasnost, zobecňování, neupřímnost, přehánění, odbíhání. Příjemce: přerušování, chybí oční kontakt, nesoustředěnost, bez zpětné vazby, čtení myšlenek.' },
    { q: 'Vyjmenujte oblasti neverbální komunikace.', a: 'Mimika, gestika, haptika, proxemika (intimní, osobní, společenská a veřejná zóna), posturologie, kinezika; dále pohledy, tón řeči, úprava zevnějšku.' },
    { q: 'Jak probíhá komunikace shora a zdola v organizaci?', a: 'Shora: příkazy, delegování, instrukce, publikace, bulletiny, zprávy a setkání. Zdola: systémy stížností, diskusní kroužky, systémy návrhů, průzkumy názorů. Horizontální koordinuje OJ, diagonální je typická pro projekty.' },
    { q: 'Charakterizujte jednotlivé porady (VH, představenstvo, porada vedení).', a: 'VH: formální, nejvyšší orgán, zpětná vazba hlasováním. Představenstvo: kolektivní strategické rozhodování většinou hlasů, zápis. Porada vedení: informační a řídící, sestupná, standardní struktura, úkol–termín–odpovědná osoba, zápis, navazují porady nižších OJ.' },
    { q: 'Jaké jsou typy konfliktů?', a: 'Vnitřní (apetence/averze), mezilidské (vztahy, zájmy, postoje, cíle, prostředky, informace, struktura), uvnitř skupiny, mezi skupinami (v podniku/mimo podnik); dále otevřené a skryté.' },
    { q: 'Jak se řeší konflikt nadřízený × podřízený a konflikt mezi spolumajiteli?', a: 'Nadřízený × podřízený: mocensky vždy vítězí nadřízený, ale je-li autorita u podřízeného, je moudré ji uznat. Spolumajitelé: rozhoduje kapitálový podíl; při 50 : 50 je situace neřešitelná – až soud.' },
    { q: 'Jak řešit konflikt mezi skupinami?', a: 'V podniku rozhodne nadřízený po konzultaci s neformálními vůdci skupin, ideálně kompromisem. Mimo podnik třetí strana: mediátor (kompromis), soud (právní nároky), arbitráž (bez odvolání).' }
  ]
});
