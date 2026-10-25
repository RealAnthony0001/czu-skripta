registerTopic({
  id: 'pravni-jednani', order: 5, icon: '✍️', title: 'Právní jednání a jeho vady', src: 'podklady', lec: [2], where: 'Přednáška 2 + Cvičení 2 (§ 545 an. OZ)',
  summary: 'Definice a náležitosti právního jednání, jeho druhy, forma a výklad, zdánlivé právní jednání, absolutní a relativní neplatnost, následky neplatnosti, konverze, konvalidace, ratihabice a relativní neúčinnost.',
  vocab: [
    { w: 'Strana smlouvy, smlouva', x: 'Smlouva je dohoda dvou či více stran (účastníků), např. kupující a prodávající.' },
    { w: 'Dobré mravy', x: 'Nepsaná pravidla slušnosti a poctivosti; jednání, které se jim příčí, je neplatné.' },
    { w: 'Veřejný pořádek', x: 'Základní pravidla, na nichž stojí fungování společnosti; nelze je obejít smlouvou.' },
    { w: 'Ex tunc × ex nunc', x: 'Ex tunc = od počátku, zpětně; ex nunc = až od nynějška, do budoucna.' },
    { w: 'Ex offo', x: 'Z moci úřední – soud jedná sám, bez návrhu účastníka.' },
    { w: 'Žaloba', x: 'Písemný návrh k soudu, kterým se někdo domáhá svého práva.' },
    { w: 'Věřitel × dlužník, pohledávka', x: 'Věřitel má pohledávku (právo na plnění) za dlužníkem, který dluh musí splnit.' },
    { w: 'Bezdůvodné obohacení', x: 'Získání majetkového prospěchu bez právního důvodu; příjemce ho musí vrátit.' }
  ],
  key: [
    '<b>§ 545 OZ:</b> právní jednání vyvolává právní následky v něm vyjádřené + následky plynoucí ze zákona, dobrých mravů, zvyklostí a zavedené praxe stran. Termín „právní úkon“ nahradilo „právní jednání“.',
    'Vůle musí být <b>svobodná, vážná, určitá a srozumitelná</b> (kumulativně); jednat lze <b>konáním i opomenutím</b>, <b>výslovně nebo konkludentně</b> (§ 546).',
    '<b>Výklad (§ 555 an.):</b> posuzuje se podle <b>obsahu, ne názvu</b>; zastřené jednání podle své pravé povahy; pochybnost <b>k tíži toho, kdo výraz použil první</b> (§ 557).',
    '<b>Zdánlivé jednání</b> (§ 551–554) = o právní jednání vůbec nejde, nepřihlíží se k němu – není to totéž co neplatnost.',
    '<b>Zásada favor negotii (§ 574):</b> spíše platné než neplatné. NOZ absolutní neplatnost <b>neruší, ale omezuje</b>: ex offo se přihlíží jen k zjevnému rozporu s dobrými mravy / zjevnému narušení veřejného pořádku (§ 588).',
    '<b>Relativní neplatnost:</b> musí se jí dovolat jen chráněná osoba, a to v promlčecí době (obecně 3 roky); dovolá-li se, je jednání neplatné <b>od počátku</b>; nedovolá-li se, platí.',
    'Konverze (jiné platné jednání) × konvalidace (odpadnutí/zhojení vady) × ratihabice (dodatečné schválení).',
    '<b>Relativní neúčinnost (§ 589 an.):</b> věřitel se odpůrčí žalobou domáhá, aby jednání dlužníka, které zkracuje uspokojení jeho vykonatelné pohledávky, nebylo vůči němu účinné.'
  ],
  sections: [
    { title: 'Pojem, náležitosti a způsoby právního jednání', blocks: [
      { t: 'law', ref: '§ 545 OZ', x: '„Právní jednání vyvolává právní následky, které jsou v něm vyjádřeny, jakož i právní následky plynoucí ze zákona, dobrých mravů, zvyklostí a zavedené praxe stran.“' },
      { t: 'ul', items: [
        'Právní jednání = právní skutečnost: <b>vědomé, volní chování</b> – projev vůle ve vnějším světě (zákon jej přesně nedefinuje). Příklad: i rozhodnutí valné hromady či jediného společníka.',
        'NOZ se vrací k římskoprávnímu <i>negotium</i>, opouští „právní úkon“ (slovakismus z doby unifikace).',
        'NOZ výslovně neobsahuje zásadu rovnosti stran, vychází z <b>autonomie vůle</b> (zákon jako ultima ratio).'
      ] },
      { t: 'icons', title: 'Náležitosti právního jednání', items: [
        { i: '🧑', h: 'Subjekt', x: 'právní osobnost + dostatečná <b>svéprávnost</b> (ne sdružení bez právní subjektivity)' },
        { i: '💭', h: 'Vůle', x: '<b>svobodná, vážná</b>, prostá omylu, ne v tísni' },
        { i: '🗣️', h: 'Projev vůle', x: '<b>určitý, srozumitelný</b>, v požadované <b>formě</b>' },
        { i: '🎯', h: 'Předmět', x: '<b>dovolený a možný</b> (nelze prodat lidské orgány, drogy, vesmírná tělesa)' }
      ] },
      { t: 'tip', x: 'NOZ rozlišuje náležitosti pro <b>vznik</b> (vážná, určitá a srozumitelná vůle – jinak jednání jen zdánlivé) a pro <b>platnost</b> (svéprávnost, forma, bez omylu a nátlaku, dovolený a možný předmět – jinak neplatné).' },
      { t: 'tree', title: 'Způsoby právního jednání', root: { h: 'Právní jednání', x: '§ 546', kids: [
        { h: 'Podle chování', kids: [
          { h: 'Konání (komisivní)', x: '<i>dare</i> (dát), <i>facere</i> (dělat) – koupě věci' },
          { h: 'Opomenutí (omisivní)', x: '<i>pati</i> (strpět), <i>omittere</i> – nesplnění dluhu včas; pouhé mlčení jen tam, kde z něj plyne vůle' }
        ] },
        { h: 'Podle vyjádření', kids: [
          { h: 'Výslovné', x: 'ústně nebo písemně' },
          { h: 'Konkludentní (mlčky)', x: 'kývnutí hlavou, roztržení listiny, nastoupení do tramvaje, koupě z automatu' }
        ] }
      ] } },
      { t: 'law', ref: '§ 546 OZ', x: 'Právně jednat lze konáním nebo opomenutím; výslovně nebo jiným způsobem nevzbuzujícím pochybnost o tom, co jednající osoba chtěla projevit. Vznik, změnu či zánik práv lze vázat na <b>podmínku</b>.' }
    ] },
    { title: 'Druhy právních jednání', blocks: [
      { t: 'tree', title: 'Druhy podle tří hledisek', root: { h: 'Druhy právních jednání', kids: [
        { h: 'Počet stran', x: 'dvou- a vícestranné vznikají <b>konsenzem</b> (smlouva)', kids: [
          { h: 'Jednostranné', x: 'výpověď, závěť, vydědění' },
          { h: 'Dvoustranné', x: 'smlouva' },
          { h: 'Vícestranné', x: 'smlouva' }
        ] },
        { h: 'Doba účinku', kids: [
          { h: 'Inter vivos', x: 'mezi živými – kupní smlouva' },
          { h: 'Mortis causa', x: 'pro případ smrti – závěť' }
        ] },
        { h: 'Úplata', kids: [
          { h: 'Úplatné', x: 'kupní smlouva' },
          { h: 'Bezúplatné', x: 'darování' },
          { h: 'Smíšené', x: 'úplata nižší než obvyklá hodnota (symbolická cena)' }
        ] }
      ] } },
      { t: 'versus', title: 'Další dělení – dvojice protikladů', x: 'Tyto dvojice třídí právní jednání podle různých hledisek a každá stojí samostatně, takže jedno jednání se dá popsat několika z nich najednou. Kupní smlouva na dům je adresovaná (směřuje ke konkrétní druhé straně), synallagmatická (věc za peníze – kdo sám neplní, nemůže plnění chtít), kauzální (důvod plnění je zřejmý), formální (u nemovitosti zákon vyžaduje písemnou formu) a nominátní (zákon ji pojmenovává a upravuje). Naproti tomu veřejný příslib odměny za nalezení psa je neadresovaný. A smlouvu, kterou zákon nezná, si strany mohou vytvořit jako inominátní, pokud neodporuje zákonu a dobrým mravům.', cols: [
        { h: 'Varianta A', items: [
          '<b>Adresované</b> – návrh na uzavření smlouvy',
          '<b>Synallagmatické</b> – plnění se může domáhat jen ten, kdo sám plní nebo je ochoten plnit',
          '<b>Kauzální</b> – důvod je vyjádřen',
          '<b>Formální</b> – zákon předepisuje formu',
          '<b>Nominátní</b> (pojmenované) – kupní, nájemní, o dílo; mají zákonnou úpravu'
        ] },
        { h: 'Varianta B', items: [
          '<b>Neadresované</b> – veřejný příslib',
          '<b>Asynallagmatické</b> – bez vzájemnosti plnění',
          '<b>Abstraktní</b> – důvod není vyjádřen (závazky z cenných papírů)',
          '<b>Neformální</b> – zákon formu nepředepisuje',
          '<b>Inominátní</b> (nepojmenované) – strany je mohou uzavřít (§ 1746 odst. 2), nesmí odporovat zákonu a dobrým mravům'
        ] }
      ] },
      { t: 'tip', x: 'Nominátní = „má jméno“ v zákoně (kupní, nájem, dílo). Inominátní = vymyslí si strany, ale v mezích zákona (§ 1746 odst. 2).' }
    ] },
    { title: 'Forma a výklad právního jednání', blocks: [
      { t: 'law', ref: '§ 559 OZ', x: 'Každý má právo zvolit si libovolnou formu (ústní, písemnou), není-li omezen zákonem nebo ujednáním stran. Zákonná forma je kogentní.' },
      { t: 'icons', title: 'Písemná forma – § 560 až 564', items: [
        { i: '🏠', h: '§ 560', x: 'písemně <b>zřízení, převod, změna i zrušení věcného práva k nemovité věci</b>; projevy všech na téže listině' },
        { i: '✍️', h: '§ 561', x: 'k písemné formě <b>podpis jednajícího</b>' },
        { i: '💻', h: '§ 562', x: 'zachována i elektronicky (obsah lze zachytit, jednající určit); slajdy: <b>uznávaný el. podpis</b>, ne běžný e-mail' },
        { i: '👁️', h: '§ 563', x: 'kdo neumí číst/psát: podpis, nebo vlastní znamení před <b>2 svědky</b>; jinak veřejná listina (§ 568–569)' },
        { i: '🔄', h: '§ 564', x: 'zákonnou formu měnit ve stejné nebo <b>přísnější</b>; u ujednané formy i jinak, nevylučuje-li to ujednání' }
      ] },
      { t: 'ul', items: [
        'Formy: <b>soukromé listiny</b>, <b>veřejné listiny</b> (osvědčují skutečnosti – rozhodnutí soudu), <b>notářský zápis</b> (povinný např. při rozdělení SJM za trvání manželství, založení obchodní společnosti).'
      ] },
      { t: 'warn', x: 'Slajdy tvrdí, že běžný e-mail nestačí. Zákon (§ 562) připouští elektronickou písemnou formu, pokud lze zachytit obsah a určit jednajícího; podpis (§ 561) však u úkonů, kde se vyžaduje, nahrazuje bezpečně až <b>uznávaný elektronický podpis</b>. Pro zkoušku platí závěr ze slajdů: běžný e-mail jako náhrada podpisu nestačí.' },
      { t: 'flow', title: 'Výklad právního jednání (§ 555 an.)', steps: [
        { h: 'Obsah, ne název', x: 'zkoumá se skutečná vůle, ne slova (§ 555)' },
        { h: 'Zastřené jednání', x: 'posoudí se podle pravé povahy (§ 555 odst. 2)' },
        { h: 'Pochybnost', x: 'výraz připouští různý výklad' },
        { h: 'K tíži toho, kdo výraz použil první', x: '<i>contra proferentem</i> (§ 557)' }
      ] },
      { t: 'ul', items: [
        'Stranám nelze vnutit jiný obsah, výjimkou je zastřené jednání. Pravidla výkladu nejsou věcí volné dispozice stran. Důraz je na skutečné vůli před formálním projevem.'
      ] }
    ] },
    { title: 'Zdánlivé právní jednání', blocks: [
      { t: 'def', term: 'Zdánlivé (nicotné) právní jednání (§ 551–554)', x: 'O právní jednání vůbec nejde – chybí náležitost nutná pro jeho vznik.', items: ['hledí se na ně, jako by <b>jednáno nebylo</b>; nepřihlíží se k němu (§ 554)', 'odpovídá dřívější „nicotnosti“'] },
      { t: 'icons', title: 'Kdy je jednání jen zdánlivé', items: [
        { i: '🚫', h: '§ 551', x: 'chybí <b>vůle jednající osoby</b>' },
        { i: '🃏', h: '§ 552', x: 'nebyla <b>zjevně projevena vážná vůle</b>' },
        { i: '❓', h: '§ 553', x: '<b>neurčitost či nesrozumitelnost</b> – obsah nelze zjistit ani výkladem' },
        { i: '📜', h: 'Zákon stanoví', x: 'že se k jednání <b>nepřihlíží</b> (např. § 2898 – předem učiněné vzdání se práva na náhradu újmy)' }
      ] },
      { t: 'law', ref: '§ 553 odst. 2', x: 'Byl-li projev vůle mezi stranami <b>dodatečně vyjasněn</b>, nepřihlíží se k vadě a hledí se, jako by právní jednání bylo platně učiněno <b>od počátku</b> (konvalidace).' },
      { t: 'warn', x: 'Zdánlivé jednání <b>není totéž co absolutní neplatnost</b>, i když slajdy obě věci slučují („nepřihlíží se“ = „absolutní neplatnost“). Zdánlivé jednání vůbec nevzniklo (chybí náležitost pro vznik), neplatné vzniklo, ale trpí vadou. Zdánlivé jednání nelze „namítat“ – prostě neexistuje.' }
    ] },
    { title: 'Neplatnost: absolutní × relativní', blocks: [
      { t: 'law', ref: '§ 574 an. – zásada favor negotii', x: 'Na právní jednání je třeba <b>spíše hledět jako na platné než neplatné</b>.' },
      { t: 'ul', items: [
        'Neplatné jednání s náležitostmi jiného platného jednání platí jako toto jiné (<b>konverze</b>).',
        'Týká-li se důvod neplatnosti jen <b>oddělitelné části</b>, je neplatná jen ta část.',
        'Chyby v psaní a počtech nejsou na újmu, je-li význam nepochybný.',
        'Kdo způsobil neplatnost, nemůže ji namítat ani z ní mít výhodu a nahradí škodu straně, která o ní nevěděla (nikdo nemá těžit z vlastního bezpráví – vztahuje se k relativní neplatnosti).'
      ] },
      { t: 'versus', title: 'Absolutní × relativní neplatnost', x: 'Obě neplatnosti znamenají, že jednání nemá zamýšlené účinky, liší se tím, čí zájem chrání a kdo se jich může dovolat. Absolutní neplatnost chrání veřejný zájem, proto k ní soud přihlédne sám, namítnout ji může kdokoli a čas ji nezhojí – typicky jde o jednání, které se zjevně příčí dobrým mravům nebo narušuje veřejný pořádek, například úplatek. Relativní neplatnost chrání konkrétní osobu, třeba toho, kdo jednal v omylu vyvolaném druhou stranou nebo v tísni. Takové jednání platí, dokud se chráněná osoba neplatnosti v promlčecí době nedovolá; teprve pak je neplatné od počátku. Je jen na ní, zda to udělá, nebo vadu přejde a jednání nechá platit.', cols: [
        { h: 'Absolutní', items: [
          '<b>Podstata:</b> jednání nevyvolává právní následky; chrání se <b>veřejný zájem</b>',
          '<b>Důvody:</b> zjevný rozpor s dobrými mravy; zákon, který zjevně narušuje veřejný pořádek (§ 588) – korupce, prodej orgánů; podle slajdů i nemožný předmět a nedodržení formy',
          '<b>Kdo namítá:</b> <b>kdokoli</b> (účastník, třetí osoba, orgán); soud přihlédne i bez návrhu (<i>ex offo</i>)',
          '<b>Jak:</b> netřeba aktivně uplatňovat; soud z úřední povinnosti (určovací žaloba / námitka)',
          '<b>Účinky:</b> <b>ex tunc</b> – od počátku, jako by jednání nebylo',
          '<b>Lhůta:</b> žádná – čas neplatnost nezhojí (výjimky u formy)',
          '<b>Zhojení:</b> obecně nelze; u nedodržení formy výjimka – § 582'
        ] },
        { h: 'Relativní', items: [
          '<b>Podstata:</b> jednání platí, dokud se oprávněná osoba neplatnosti nedovolá; chrání se <b>zájem konkrétní osoby</b>',
          '<b>Důvody:</b> omyl vyvolaný druhou stranou (§ 583), lest, pohrůžka, <b>tíseň</b> a nápadně nevýhodné podmínky, omezená svéprávnost / duševní porucha (§ 581), rozpor se zákonem, který takové jednání připouští',
          '<b>Kdo namítá:</b> jen <b>chráněná osoba</b> (§ 586); soud sám nepřihlíží',
          '<b>Jak:</b> aktivní <b>dovolání se</b> – žalobou, žalobou na určení nebo námitkou; adresuje se druhé straně',
          '<b>Účinky:</b> po dovolání neplatné <b>od počátku (ex tunc)</b>; bez dovolání platí',
          '<b>Lhůta:</b> <b>promlčecí doba</b> (3 roky, objektivně 10 let); po ní se hledí na jednání jako na platné',
          '<b>Zhojení:</b> oprávněný na neplatnosti netrvá (souhlas, plnění po zjištění vady) nebo uplyne lhůta'
        ] }
      ] },
      { t: 'svg', title: 'Zdánlivé, neplatné, nebo platné?', x: ZPN.defectsDiagram(), cap: 'Zdánlivé jednání vůbec nevzniklo; neplatné vzniklo, ale trpí vadou.' },
      { t: 'nums', title: 'Čísla k neplatnosti', items: [
        { n: '3', u: 'roky', x: 'promlčecí doba pro dovolání se relativní neplatnosti (subjektivní)' },
        { n: '10', u: 'let', x: 'nejzazší promlčecí doba (objektivní)' },
        { n: '§ 574', u: '', x: 'favor negotii – spíše platné než neplatné' },
        { n: '§ 588', u: '', x: 'soud přihlédne i bez návrhu (ex offo)' },
        { n: '§ 586', u: '', x: 'kdo se smí dovolat relativní neplatnosti – chráněná osoba' }
      ] },
      { t: 'timeline', title: 'Osa relativní neplatnosti', items: [
        { when: 'Vznik', h: 'Jednání je platné', x: 'vada (omyl, lest, tíseň…) existuje, ale nikdo ji nenamítá' },
        { when: 'V promlčecí době', h: 'Chráněná osoba se dovolá neplatnosti', x: '3 roky, nejpozději 10 let' },
        { when: 'Po dovolání', h: 'Jednání je neplatné od počátku', x: 'ex tunc, strany vrátí plnění' },
        { when: 'Marné uplynutí', h: 'Jednání zůstává platné', x: 'nebo oprávněný vadu zhojí (souhlas, plnění po zjištění vady)' }
      ] },
      { t: 'warn', x: '<b>Slajdy obsahují nepřesnosti.</b> (1) „Relativní neplatnost působí ex nunc“ – správně po dovolání se neplatnosti je jednání neplatné <b>od počátku (ex tunc)</b>. (2) „Lhůta 3 roky od okamžiku, kdy se osoba dozvěděla“ – správně se lze dovolat jen v <b>promlčecí době</b> (obecně 3 roky, nejpozději 10 let; úprava v § 579 a § 586 an. – přesný odstavec si ověřte v zákoně). (3) „Nová úprava opouští absolutní neplatnost“ – NOZ ji <b>neodstraňuje, ale zužuje</b> (favor negotii, § 574; ex offo jen v případech § 588), většina vad je relativní. (4) Relativní neplatnost není „neplatnost jen vůči jedné osobě“ – je to neplatnost, které se může dovolat jen chráněný.' },
      { t: 'tree', title: 'Hlavní důvody neplatnosti (§ 580–588)', root: { h: 'Důvody neplatnosti', kids: [
        { h: '§ 580 odst. 1', x: 'příčí se dobrým mravům; odporuje zákonu, pokud to smysl a účel zákona vyžaduje' },
        { h: '§ 580 odst. 2', x: 'plnění nemožné' },
        { h: '§ 581', x: 'jednání osoby nezpůsobilé právně jednat (nesvéprávná / duševní porucha)' },
        { h: '§ 582', x: 'nedodržení formy zákonné či ujednané (zhojitelné; u ujednané formy lze namítnout jen, nebylo-li již plněno)' },
        { h: '§ 583', x: 'omyl o rozhodující okolnosti vyvolaný druhou stranou' },
        { h: '§ 584', x: 'vedlejší omyl → platí, nárok na náhradu; omyl vyvolaný lstí → neplatné vždy' },
        { h: '§ 588', x: 'soud přihlédne i bez návrhu: zjevně se příčí dobrým mravům / odporuje zákonu a zjevně narušuje veřejný pořádek' }
      ] } },
      { t: 'pyramid', title: 'Tři stupně nezákonnosti (slajdy)', levels: [
        { h: 'Absolutně neplatné', x: 'nezákonné + příčí se dobrým mravům a narušuje veřejný pořádek (korupce)' },
        { h: 'Relativně neplatné', x: 'nezákonné, ale smysl a účel zákona jednání připouští' },
        { h: 'Platné', x: 'nezákonné, ale silná společná vůle stran a vada je zhojena' }
      ] }
    ] },
    { title: 'Následky neplatnosti, konverze, konvalidace, ratihabice, relativní neúčinnost', blocks: [
      { t: 'flow', title: 'Následky neplatnosti (§ 586 an.)', steps: [
        { h: 'Bez zamýšlených následků', x: 'neplatné jednání je nevyvolává' },
        { h: 'Vrácení plnění', x: 'bezdůvodné obohacení / vydání' },
        { h: 'Náhrada škody', x: 'hradí ten, kdo neplatnost způsobil, straně, která o ní nevěděla' }
      ] },
      { t: 'ul', items: [
        'Nenamítne-li oprávněná osoba relativní neplatnost, hledí se na jednání jako platné.'
      ] },
      { t: 'icons', title: 'Konverze × konvalidace × ratihabice', items: [
        { i: '🔀', h: 'Konverze', x: 'neplatné jednání má náležitosti <b>jiného platného jednání</b> a taková by byla vůle jednajícího → platí toto jiné jednání (slajdy: původní zůstává neplatné)' },
        { i: '✅', h: 'Konvalidace', x: '<b>odpadne důvod neplatnosti</b> → jednání je platné (též dodatečné vyjasnění u zdánlivého, § 553 odst. 2; zhojení formy)' },
        { i: '🤝', h: 'Ratihabice', x: 'dodatečné <b>schválení</b> jednání (zástupce bez oprávnění, osoba bez plné svéprávnosti)' }
      ] },
      { t: 'law', ref: 'Relativní neúčinnost (§ 589 an.)', x: 'Zkracuje-li dlužník svým právním jednáním uspokojení <b>vykonatelné pohledávky věřitele</b>, může se věřitel domáhat, aby soud určil, že jednání dlužníka <b>není vůči věřiteli právně účinné</b>. Právo má věřitel i tehdy, je-li právo třetí osoby vykonatelné nebo již uspokojeno. (Slajdy číslují § 587/589 – správný začátek úpravy je § 589.)' },
      { t: 'flow', title: 'Odpůrčí žaloba', steps: [
        { h: 'Dlužník jedná', x: 'zkracuje uspokojení vykonatelné pohledávky' },
        { h: 'Věřitel podá odpůrčí žalobu', x: 'odporování jednání dlužníka' },
        { h: 'Soud určí neúčinnost', x: 'jednání není vůči věřiteli účinné' },
        { h: 'Jednání zůstává platné', x: 'jen nepůsobí vůči věřiteli' }
      ] },
      { t: 'ex', x: 'Dlužník Karel dluží Evě 500 000 Kč. Aby unikl exekuci, daruje svůj majetek bratrovi. Darování je mezi Karlem a bratrem platné, ale Eva se může odpůrčí žalobou domoci, aby bylo vůči ní neúčinné, a uspokojit se z daného majetku.' },
      { t: 'versus', title: 'Neplatnost × neúčinnost', x: 'Podobně znějící instituty řeší úplně jiný problém. Relativní neplatnost se týká vady samotného jednání, například omylu nebo tísně: když se jí chráněná osoba dovolá, jednání neplatí pro nikoho, a to od počátku. Relativní neúčinnost se týká jednání, které je samo o sobě v pořádku, ale poškozuje věřitele, protože jím dlužník zmenšuje majetek, z něhož by se věřitel uspokojil. Jednání proto mezi stranami platí dál, jen vůči věřiteli, který uspěl s odpůrčí žalobou, nepůsobí – věřitel se tak může uspokojit i z majetku, který dlužník převedl.', cols: [
        { h: 'Relativní neplatnost', items: ['Jednání neplatí vůbec (od počátku)', 'Dovolá se chráněná osoba', 'Důvod: vada projevu vůle (omyl, lest, tíseň…)'] },
        { h: 'Relativní neúčinnost', items: ['Jednání platí', 'Odpůrčí žalobou se domáhá věřitel dlužníka', 'Jednání nepůsobí jen vůči věřiteli'] }
      ] }
    ] },
    { title: 'Jednání fyzické a právnické osoby', blocks: [
      { t: 'nums', title: 'Svéprávnost fyzické osoby', items: [
        { n: '18', u: 'let', x: 'plná svéprávnost' },
        { n: '16', u: 'let', x: 'dříve jen při přiznání soudem' }
      ] },
      { t: 'tree', title: 'Kdo za koho jedná', root: { h: 'Právní jednání osoby', kids: [
        { h: 'Fyzická osoba', kids: [
          { h: 'Nezletilý', x: 'v rozsahu přiměřeném rozumové a volní vyspělosti' },
          { h: 'Omezený ve svéprávnosti', x: 'jen v rozsahu, který soud neomezil' },
          { h: 'Plná moc', x: 'za FO lze jednat zástupcem' }
        ] },
        { h: 'Právnická osoba', kids: [
          { h: 'Statutární orgán', x: 'veškerá působnost, kterou nesvěří jinému orgánu (§ 163); člen zastupuje ve všech záležitostech (§ 164)' },
          { h: 'Kolektivní orgán', x: 'každý člen samostatně, neurčí-li zakladatelské jednání jinak' },
          { h: 'Zaměstnanci', x: 'v rozsahu obvyklém vzhledem k zařazení nebo funkci' }
        ] }
      ] } },
      { t: 'ul', items: [
        '<b>Ochrana třetích osob</b> (§ 166): rozhoduje, jak se věc jeví veřejnosti; omezení vnitřním předpisem působí vůči třetí osobě jen, musela-li o něm vědět.',
        '<b>Odborná péče:</b> kdo se hlásí k odbornému výkonu povolání, dává najevo schopnost jednat s odpovídající znalostí a pečlivostí (§ 5); každý svéprávný se posuzuje podle rozumu průměrného člověka (§ 4).'
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>zdánlivé</b> jednání (nevzniklo) a <b>neplatné</b> jednání (vzniklo, ale vadné). U zdánlivého se nepřihlíží vůbec.',
    'Tvrdit, že NOZ absolutní neplatnost zrušil – <b>omezil ji</b>; platí favor negotii a ex offo se přihlíží jen v případech § 588.',
    'Říkat, že relativní neplatnost působí ex nunc. Po dovolání se oprávněné osoby je jednání neplatné <b>od počátku</b>.',
    'Myslet si, že relativní neplatnost může namítat kdokoli – smí jen <b>chráněná osoba</b> (a v promlčecí době). Absolutní namítá kdokoli a soud přihlédne sám.',
    'Zaměnit <b>konverzi</b> (jiné platné jednání), <b>konvalidaci</b> (zhojení/odpadnutí vady) a <b>ratihabici</b> (dodatečné schválení).',
    'Zaměnit relativní <b>neplatnost</b> a relativní <b>neúčinnost</b>: neplatné jednání neplatí vůbec, relativně neúčinné platí, jen se věřitel může domáhat, aby vůči němu nepůsobilo (odpůrčí žaloba).',
    'Zapomenout, že výklad se řídí <b>obsahem, ne názvem</b>, a že nejasný výraz se vykládá k tíži toho, kdo jej použil první.',
    'Tvrdit, že kupní smlouva o nemovitosti stačí ústně – vlastnické právo vyžaduje písemnou formu (§ 560) a následně zápis do katastru.'
  ],
  qa: [
    { q: 'Definujte právní jednání (§ 545 OZ).', a: 'Právní skutečnost – vědomý a volní projev vůle ve vnějším světě, který vyvolává právní následky v něm vyjádřené a také následky plynoucí ze zákona, dobrých mravů, zvyklostí a zavedené praxe stran. Musí být učiněno svobodně, vážně, určitě a srozumitelně.' },
    { q: 'Jaké náležitosti musí právní jednání mít?', a: 'Subjekt (právní osobnost a svéprávnost), vůle (svobodná, vážná, bez omylu a tísně), projev (určitý, srozumitelný, v požadované formě), předmět (dovolený a možný).' },
    { q: 'Co je konkludentní právní jednání? Uveďte příklad.', a: 'Jednání jiným způsobem než výslovně, které nevzbuzuje pochybnost o vůli – např. kývnutí hlavou, koupě z automatu, nastoupení do tramvaje (smlouva o přepravě), roztržení listiny.' },
    { q: 'Rozlište nominátní a inominátní smlouvy.', a: 'Nominátní jsou pojmenované, v zákoně podrobně upravené (kupní, nájemní, o dílo). Inominátní jsou zákonem neupravené, atypické; strany je mohou uzavřít (§ 1746 odst. 2), ale nesmí odporovat zákonu ani dobrým mravům.' },
    { q: 'Jak se vykládá právní jednání?', a: 'Podle obsahu, nikoli názvu (§ 555); zastřené jednání podle skutečné povahy (§ 555 odst. 2); připouští-li výraz různý výklad, vyloží se v pochybnostech k tíži toho, kdo ho použil jako první (§ 557). Zkoumá se skutečná vůle stran.' },
    { q: 'Kdy jde o zdánlivé právní jednání a jaký je jeho následek?', a: 'Chybí vůle, nebyla zjevně projevena vážná vůle, nebo pro neurčitost či nesrozumitelnost nelze zjistit obsah ani výkladem (§ 551–553); také když zákon stanoví, že se k jednání nepřihlíží. Následek: nepřihlíží se k němu, hledí se, jako by jednáno nebylo (§ 554). Dodatečné vyjasnění vůle však vadu zhojí zpětně (§ 553 odst. 2).' },
    { q: 'Porovnejte absolutní a relativní neplatnost.', a: 'Absolutní: chrání veřejný zájem (zjevný rozpor s dobrými mravy, zjevné narušení veřejného pořádku), soud přihlédne sám, namítat může kdokoli, nelze zhojit, účinky ex tunc. Relativní: chrání zájem konkrétní osoby (omyl, lest, tíseň, omezená svéprávnost), musí se jí dovolat jen chráněná osoba v promlčecí době (obecně 3 roky); dovolá-li se, jednání je neplatné od počátku, jinak platí.' },
    { q: 'Je pravda, že relativní neplatnost působí ex nunc a je třeba ji namítnout do 3 let?', a: 'Ne zcela. Po dovolání se neplatnosti se na jednání hledí jako na neplatné <b>od počátku (ex tunc)</b>. Dovolat se lze v <b>promlčecí době</b> – obecně 3 roky (subjektivní) a nejpozději 10 let (objektivní); po jejím uplynutí se na jednání hledí jako na platné.' },
    { q: 'Jaký je rozdíl mezi konverzí, konvalidací a ratihabicí?', a: 'Konverze – neplatné jednání se posoudí jako jiné platné jednání s podobným cílem. Konvalidace – odpadne důvod neplatnosti, jednání se stane platným. Ratihabice – dodatečné schválení jednání (např. zástupcem překročeného oprávnění).' },
    { q: 'Co je relativní neúčinnost a kdo se jí může domáhat?', a: 'Věřitel s vykonatelnou pohledávkou se může odpůrčí žalobou domáhat, aby soud určil, že právní jednání dlužníka, které zkracuje uspokojení jeho pohledávky, není vůči němu právně účinné (§ 589 an.). Jednání je mezi dlužníkem a třetí osobou platné.' },
    { q: 'Pepa a Franta uzavřeli ústně smlouvu o prodeji pozemku za 1 mil. Kč a Franta zaplatil. Je smlouva platná?', a: 'Ne. Převod vlastnického práva k nemovité věci vyžaduje <b>písemnou formu</b> (§ 560) – projevy vůle obou na téže listině – a podpisy; vlastnictví se navíc nabývá zápisem do katastru. Neplatnost pro nedodržení zákonné formy lze zhojit dodatečným dodržením formy; zaplacená cena se jinak vrací jako bezdůvodné obohacení.' },
    { q: 'Anička uzavřela kupní smlouvu, protože ji prodávající ubezpečil, že auto nebylo havarováno. Auto však havarované bylo. Co s tím?', a: 'Šlo o omyl o rozhodující okolnosti vyvolaný druhou stranou (§ 583) – jednání je <b>relativně neplatné</b>. Anička se musí neplatnosti dovolat (v promlčecí době); soud k ní nepřihlíží sám. Dovolá-li se, je smlouva neplatná od počátku a strany si vrátí plnění. Jednalo-li se jen o vedlejší okolnost, smlouva platí a Anička má nárok na náhradu (§ 584); při lsti je neplatná vždy.' },
    { q: 'Smlouva o prodeji lidských orgánů – o jaký druh neplatnosti jde?', a: 'O <b>absolutní</b> neplatnost: jednání se zjevně příčí dobrým mravům a narušuje veřejný pořádek (§ 580, § 588). Soud k ní přihlédne i bez návrhu, může ji namítat kdokoli a nelze ji zhojit. Navíc je předmět nedovolený.' },
    { q: 'Jak jedná právnická osoba a jak je chráněna třetí osoba?', a: 'Jedná statutární orgán (člen může zastupovat ve všech záležitostech; u kolektivního orgánu každý člen samostatně, nestanoví-li zakladatelské jednání jinak); zaměstnanci v rozsahu obvyklém pro jejich funkci. Omezení vnitřním předpisem působí vůči třetí osobě, jen pokud o něm musela vědět (§ 166).' }
  ]
});
