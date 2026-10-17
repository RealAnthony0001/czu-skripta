registerTopic({
  id: 'spravni-pravo', order: 12, icon: '🏛️', title: 'Správní právo a správní řízení', src: 'doplneno', where: 'Sylabus – přednáška 9',
  summary: 'Pojem a členění správního práva, veřejná správa (státní správa × samospráva), správní orgány, zásady a průběh správního řízení dle správního řádu 500/2004 Sb., opravné prostředky, správní akty, soudní přezkum a správní trestání.',
  vocab: [
    {w:'FO a PO',x:'Fyzická osoba (FO) je člověk, právnická osoba (PO) firma či jiná organizace s vlastní právní osobností.'},
    {w:'Pravomoc (kompetence)',x:'Zákonem svěřené oprávnění orgánu rozhodovat o určité věci; bez něj je jeho rozhodnutí vadné.'},
    {w:'Podzákonný předpis',x:'Předpis nižší než zákon, který ho provádí: nařízení vlády, vyhláška ministerstva, vyhláška obce.'},
    {w:'LZPS',x:'Listina základních práv a svobod – součást ústavního pořádku ČR, zaručuje základní práva občanů.'},
    {w:'Subsidiární použití',x:'Obecný předpis (zde správní řád) se použije jen tam, kde zvláštní zákon nemá vlastní úpravu.'},
    {w:'Sankce',x:'Nepříznivý následek porušení povinnosti uložený úřadem nebo soudem (pokuta, zákaz činnosti, trest).'},
    {w:'Exekuce',x:'Nucené vymožení pravomocně uloženého plnění, např. zabavením majetku nebo srážkami ze mzdy.'},
    {w:'Datová schránka',x:'Elektronická úřední schránka pro doručování dokumentů mezi úřady, firmami a občany.'}
  ],
  key: [
    '<b>Správní právo</b> = odvětví <b>veřejného práva</b> upravující organizaci a činnost veřejné správy; vztah <b>nadřízenosti a podřízenosti</b> (orgán × adresát).',
    '<b>Obecná část</b> (správní řád, přestupkový zákon, soudní řád správní) × <b>zvláštní část</b> (stavební, dopravní, životní prostředí, daně, školství…).',
    '<b>Veřejná správa</b> = <b>státní správa</b> (ministerstva, úřady) + <b>samospráva</b> (územní: obce, kraje; zájmová: komory, VŠ).',
    '<b>Správní řád 500/2004 Sb.</b>: zásady (zákonnost, materiální pravda, rovnost, nestrannost, přiměřenost, součinnost, rychlost); řízení se zahajuje <b>na žádost</b> nebo <b>z moci úřední</b>.',
    '<b>Lhůty</b>: rozhodnutí do <b>30 dnů</b> od zahájení (<b>60 dnů</b> u zvlášť složitých případů); <b>odvolání do 15 dnů</b> od oznámení rozhodnutí.',
    '<b>Právní moc</b> = nelze řádně napadnout (odvolání); <b>vykonatelnost</b> = lze vynutit plnění. Mimořádné prostředky: <b>přezkumné řízení, obnova, nové rozhodnutí</b>.',
    '<b>Soudní přezkum</b>: správní žaloba u krajského soudu (<b>2 měsíce</b>) po vyčerpání řádných opravných prostředků; kasační stížnost k NSS (2 týdny).',
    '<b>Správní trestání</b>: <b>přestupky</b> (zák. 250/2016 Sb.; FO, PO, podnikající FO) a <b>jiné správní delikty</b> (PO a podnikající FO); trestné činy jsou věcí soudu (trestní právo).'
  ],
  sections: [
    { title: 'Pojem, členění a prameny správního práva', blocks: [
      { t: 'def', term: 'Správní právo', x: 'Soubor právních norem veřejného práva upravujících <b>organizaci</b> a <b>činnost veřejné správy</b> a <b>vztahy mezi orgány veřejné správy a adresáty</b> (občany, firmami). Pro vztah je typická <b>nadřízenost a podřízenost</b>, zásada <b>legality</b> (orgán smí jen to, co mu zákon dovoluje) a ochrana veřejného zájmu.' },
      { t: 'table', head: ['Část', 'Obsah', 'Příklad předpisů'], rows: [
        ['<b>Obecná</b>', 'společné instituty: organizace, správní řízení, správní akty, trestání, soudní přezkum', 'správní řád 500/2004 Sb., soudní řád správní 150/2002 Sb., přestupkový zákon 250/2016 Sb., zákon o obcích, o krajích'],
        ['<b>Zvláštní</b>', 'úprava jednotlivých oblastí veřejné správy', 'stavební zákon, silniční (dopravní) zákon, zákon o ochraně přírody, živnostenský zákon 455/1991 Sb., zákon o sociálním zabezpečení, školské zákony, daňový řád 280/2009 Sb. (daňové řízení)'],
        ['Procesní × hmotné', 'procesní = jak řízení probíhá; hmotné = jaká práva a povinnosti', 'správní řád (procesní); stavební zákon (hmotné)']
      ] },
      { t: 'table', head: ['', 'Správní právo', 'Soukromé (občanské) právo', 'Trestní právo'], rows: [
        ['Vztah', 'nadřízenost – podřízenost', 'rovnost stran', 'stát × pachatel'],
        ['Ochrana', 'veřejný zájem', 'soukromý zájem', 'společenský zájem'],
        ['Rozhoduje', 'správní orgán (soud jen přezkum)', 'soud', 'soud'],
        ['Zásada', 'co není zákonem dovoleno, je zakázáno (orgán)', 'co není zakázáno, je dovoleno', 'bez zákona není trestu']
      ] },
      { t: 'p', x: '<b>Prameny</b>: Ústava, LZPS, zákony, <b>nařízení vlády</b>, <b>vyhlášky ministerstev</b>, obecně závazné vyhlášky obcí a nařízení krajů, mezinárodní smlouvy, právo EU (nařízení přímo účinná). <b>Judikatura</b> (Nejvyšší správní soud) není formálním pramenem práva, ale sjednocuje výklad.' }
    ] },
    { title: 'Veřejná správa a správní orgány', blocks: [
      { t: 'def', term: 'Veřejná správa', x: 'Činnost vykonávaná <b>veřejnými subjekty</b> (stát, obce, kraje, zájmové korporace) v zájmu společnosti na základě zákona; <b>organizačně</b> i <b>funkčně</b> odlišná od moci zákonodárné a soudní.' },
      { t: 'table', head: ['', 'Státní správa', 'Samospráva'], rows: [
        ['Podstata', 'výkon státní moci orgány státu (nebo přenesený výkon)', 'správa vlastních záležitostí samosprávnými celky, nikoli státem'],
        ['Orgány', '<b>ministerstva</b>, jiné ústřední správní úřady (ČSÚ, ČÚZK), územní orgány (finanční, celní, živnostenské úřady)', '<b>územní</b>: obec, město (zastupitelstvo, rada, starosta), kraj; <b>zájmová</b>: profesní komory (ČLK, ČAK, ČKA), veřejné vysoké školy'],
        ['Řízení', 'hierarchicky: nadřízený orgán řídí podřízený', 'bez řízení státu, jen <b>dozor</b> nad zákonností'],
        ['Financování', 'státní rozpočet', 'vlastní rozpočty, daně, poplatky'],
        ['Působnost', 'výkon státní správy', '<b>samostatná</b> (vlastní věci) a <b>přenesená</b> (stát ji svěřuje samosprávě)']
      ] },
      { t: 'p', x: '<b>Přenesená působnost</b>: obec nebo kraj vykonává státní správu (např. matriky, stavební úřad, sociální dávky) – nadřízený orgán ji řídí a kontroluje i z hlediska věcné správnosti. <b>Samostatná působnost</b>: nad obcí dohlíží kraj / ministerstvo vnitra jen z hlediska zákonnosti.' },
      { t: 'table', head: ['Správní orgán', 'Znaky'], rows: [
        ['<b>Správní orgán</b> (§ 1 odst. 2 správního řádu)', 'orgán moci výkonné, obec nebo jiný subjekt, kterému zákon svěřuje rozhodování o právech a povinnostech v oblasti veřejné správy'],
        ['Vymezení pravomoci', '<b>věcná příslušnost</b> (o čem), <b>místní příslušnost</b> (kde, podle sídla/bydliště), <b>funkční</b> (kdo v instanci)'],
        ['Dvojinstančnost', 'obvykle <b>první stupeň</b> (rozhodnutí) – <b>druhý stupeň</b> (odvolací orgán, zpravidla nadřízený)'],
        ['Podjatost', 'úřední osoba je <b>vyloučena</b>, má-li poměr k věci, účastníku nebo jeho zástupci (§ 14 správního řádu)']
      ] },
      { t: 'ex', x: 'Pepa chce postavit garáž. Žádost podá na stavební úřad obce s rozšířenou působností (přenesená působnost). Proti rozhodnutí stavebního úřadu se může odvolat ke krajskému úřadu (nadřízený), poté správní žalobou ke krajskému soudu.' }
    ] },
    { title: 'Správní řád: zásady a průběh řízení', blocks: [
      { t: 'p', x: '<b>Správní řád (zák. 500/2004 Sb.)</b> upravuje postup <b>správních orgánů</b> při rozhodování a vydávání dalších úkonů. Vztahuje se na ministerstva, kraje, obce v přenesené působnosti, jiné orgány a na komory/korporace při výkonu veřejné moci.' },
      { t: 'table', head: ['Zásada', 'Obsah'], rows: [
        ['<b>Zákonnost</b>', 'orgán postupuje jen v mezích zákona a pravomoci; zákaz zneužití pravomoci'],
        ['<b>Rovnost</b> a <b>nestrannost</b>', 'stejně v obdobných případech; nezávislost a neutralita úředních osob'],
        ['<b>Přiměřenost</b>', 'zásah do práv jen v nezbytné míře'],
        ['<b>Legitimní očekávání</b>, <b>dobrá víra</b>', 'orgán chrání důvěru v postup a rozhodnutí; nelze trestat za řádný postup podle dřívější praxe'],
        ['<b>Materiální pravda</b>', 'zjištění stavu, o kterém nejsou důvodné pochybnosti; orgán dokazování provádí i z úřední povinnosti'],
        ['<b>Součinnost</b> (vstřícnost)', 'orgán poskytuje poučení, pomoc; účastník spolupracuje'],
        ['<b>Rychlost a hospodárnost</b>', 'bez zbytečných průtahů, lhůty; využívat elektronické prostředky'],
        ['<b>Oficialita</b> × <b>dispoziční</b>', 'z moci úřední (orgán zahajuje sám) × na žádost (účastník)'],
        ['<b>Ústnost × písemnost</b>', 'ústní jednání pro vyjádření; základ písemný záznam'],
        ['<b>Volné hodnocení důkazů</b>', 'orgán hodnotí důkazy podle své úvahy, všechny stejně (§ 50)'],
        ['<b>Dvojinstančnost</b>', 'rozhodnutí lze přezkoumat vyšším orgánem']
      ] },
      { t: 'table', head: ['Fáze řízení', 'Obsah'], rows: [
        ['<b>1. Zahájení</b>', '<b>na žádost</b> – dnem doručení podání; <b>z moci úřední</b> – dnem, kdy orgán oznámí zahájení prvnímu účastníkovi (§ 44)'],
        ['<b>2. Účastníci</b> (§ 27)', 'žadatel, <b>adresát</b> (kdo je dotčen), osoby, jejichž práva mohou být dotčena (např. soused ve stavebním řízení); mají práva: nahlížet do spisu, vyjádřit se, navrhovat důkazy, být zastoupen'],
        ['<b>3. Podklady</b>, <b>dokazování</b>', 'listiny, výslech svědků, znalecký posudek, ohledání; účastníci mohou navrhovat důkazy; <b>před rozhodnutím se mohou vyjádřit</b> k podkladům'],
        ['<b>4. Rozhodnutí</b>', 'lhůta <b>30 dnů</b> od zahájení; <b>60 dnů</b> u zvlášť složitých; <b>výrok, odůvodnění, poučení</b> o opravném prostředku'],
        ['<b>5. Oznámení</b>', 'doručením (datová schránka, pošta, osobně, veřejná vyhláška)'],
        ['<b>6. Opravné prostředky</b>', 'odvolání (řádné), mimořádné: přezkumné řízení, obnova, nové rozhodnutí'],
        ['<b>7. Právní moc a vykonatelnost</b>', 'rozhodnutí je <b>pravomocné</b>, nelze-li je napadnout odvoláním; <b>vykonatelné</b>, pokud je lze vymáhat'],
        ['<b>8. Vykonání</b>', 'dobrovolné splnění nebo <b>exekuce</b> (peněžitá i nepeněžitá plnění)']
      ] },
      { t: 'warn', x: 'Nepleť: <b>právní moc</b> (formální: nelze řádně napadnout) a <b>vykonatelnost</b> (lze vynutit). Rozhodnutí zpravidla nabývá obojího, ale odvolání může mít <b>odkladný účinek</b> (pak nabude vykonatelnosti později), naopak může orgán povolit <b>předběžnou vykonatelnost</b> (ve veřejném zájmu).' },
      { t: 'table', head: ['Lhůta', 'Délka'], rows: [
        ['Rozhodnutí v řízení', '30 dnů od zahájení; 60 dnů u zvlášť složitých případů'],
        ['Odvolání', '15 dnů od oznámení rozhodnutí'],
        ['Přezkumné řízení', 'do 1 roku od právní moci (§ 96)'],
        ['Obnova řízení', 'do 3 měsíců od zjištění důvodu (§ 100)'],
        ['Žaloba ve správním soudnictví', '2 měsíce od doručení rozhodnutí'],
        ['Kasační stížnost k NSS', '2 týdny od doručení rozhodnutí']
      ] },
      { t: 'tip', x: 'Odvolání (15 dnů) podáváš u orgánu, který rozhodnutí vydal – ten ho může sám napravit (autoremedura) nebo postoupí odvolacímu orgánu. Nezapomeň: v poučení musí být uvedena lhůta a kde se podává.' }
    ] },
    { title: 'Opravné prostředky, správní akty a soudní přezkum', blocks: [
      { t: 'table', head: ['Prostředek', 'Kdo / Kdy', 'Účel'], rows: [
        ['<b>Odvolání</b> (§ 81)', 'účastník; do 15 dnů od oznámení; odkladný účinek', 'přezkum vyšším orgánem, který rozhodnutí potvrdí, změní nebo zruší'],
        ['<b>Rozklad</b> (§ 152)', 'proti rozhodnutí ministra / vedoucího ústředního úřadu', 'rozhoduje ministr na návrh rozkladové komise'],
        ['<b>Přezkumné řízení</b> (§ 94 an.)', 'z moci úřední nadřízený orgán; do 1 roku od právní moci', 'zrušení nebo změna pravomocného rozhodnutí v rozporu s právními předpisy'],
        ['<b>Obnova řízení</b> (§ 100)', 'účastník, na žádost; do 3 měsíců od zjištění důvodu', 'nové skutečnosti, důkazy, které účastník bez své viny nemohl uplatnit'],
        ['<b>Nové rozhodnutí</b> (§ 101)', 'orgán z moci úřední', 'zrušuje původní rozhodnutí, které záviselo na zrušeném rozhodnutí soudu'],
        ['<b>Opatření proti nečinnosti</b> (§ 80)', 'účastník, když orgán nerozhoduje ve lhůtě', 'nadřízený orgán určí nápravu; následně i žaloba na ochranu před nečinností']
      ] },
      { t: 'def', term: 'Správní akt (rozhodnutí)', x: 'Úkon správního orgánu, kterým <b>jednostranně zakládá, mění nebo ruší práva a povinnosti</b> konkrétního adresáta (rozhodnutí) nebo o nich závazně rozhoduje. Vadné rozhodnutí může být <b>nezákonné</b> (lze zrušit odvoláním, přezkumem nebo soudem) nebo zcela <b>nicotné</b> (od počátku neexistuje – např. vydal ho orgán zcela bez pravomoci).' },
      { t: 'table', head: ['Správní akt', 'Povaha', 'Příklad'], rows: [
        ['<b>Správní rozhodnutí</b>', 'individuální, konkrétní; vydává se ve správním řízení', 'stavební povolení, pokuta, přiznání dávky'],
        ['<b>Opatření obecné povahy</b> (§ 171)', 'konkrétní předmět, obecně vymezený okruh adresátů', 'územní plán, stanovení dopravního značení'],
        ['<b>Normativní správní akt</b>', 'obecně závazný předpis veřejné správy', 'vyhláška obce, nařízení vlády'],
        ['<b>Veřejnoprávní smlouva</b> (§ 159)', 'dohoda dvou subjektů veřejného práva', 'smlouva obce s krajem o výkonu agendy'],
        ['<b>Závazné stanovisko</b> (§ 149)', 'podklad pro rozhodnutí, samostatně nenapadnutelné', 'stanovisko dotčeného orgánu v řízení'],
        ['<b>Osvědčení</b>, <b>sdělení</b>', 'potvrzení skutečností', 'výpis z matriky, ověřená listina']
      ] },
      { t: 'p', x: '<b>Správní soudnictví</b> (soudní řád správní, zák. 150/2002 Sb.): soudy přezkoumávají <b>zákonnost</b> rozhodnutí správních orgánů. <b>Správní žaloba</b> (§ 65 an.) – u krajského soudu do <b>2 měsíců</b> od doručení rozhodnutí; podmínka: vyčerpání řádných opravných prostředků. Soud rozhodnutí potvrdí (žalobu zamítne) nebo <b>zruší</b> a vrátí věc orgánu, nemůže ho vlastním rozhodnutím nahradit (výjimky). <b>Kasační stížnost</b> k Nejvyššímu správnímu soudu (Brno) – do 2 týdnů.' },
      { t: 'ex', x: 'Pepovi úřad uložil pokutu 10 000 Kč. Odvolal se do 15 dnů ke krajskému úřadu – zamítnuto. Může podat správní žalobu ke krajskému soudu do 2 měsíců od doručení druhoinstančního rozhodnutí. Po případném zamítnutí žaloby může podat kasační stížnost (2 týdny) k NSS.' }
    ] },
    { title: 'Správní trestání a vztah k jiným řízením', blocks: [
      { t: 'table', head: ['', 'Přestupek', 'Jiný správní delikt', 'Trestný čin'], rows: [
        ['Předpis', 'zák. 250/2016 Sb. + zvláštní zákony', 'zvláštní zákony (např. o ŽP, stavební)', 'trestní zákoník 40/2009 Sb.'],
        ['Subjekt', 'FO od 15 let, PO, podnikající FO', 'PO a podnikající FO (FO jen výjimečně)', 'FO od 15 let; PO (418/2011 Sb.)'],
        ['Orgán', 'správní orgán (obec, úřad), policie blokově', 'správní orgán', 'soud'],
        ['Sankce', 'napomenutí, pokuta, zákaz činnosti, propadnutí věci, zveřejnění', 'pokuta (někdy vysoká), zákaz činnosti', 'trest odnětí svobody, peněžitý trest atd.'],
        ['Zavinění', 'u FO ano; u PO <b>objektivní</b> (zprostí se, pokud vynaložila veškeré úsilí)', 'objektivní (obvykle)', 'ano (subjektivní)'],
        ['Promlčení', 'zpravidla 1 rok (u sazby nad 100 000 Kč 3 roky), běží od spáchání', 'dle zvláštního zákona', 'dle závažnosti']
      ] },
      { t: 'p', x: '<b>Zásady správního trestání</b>: zákonnost (bez zákona není přestupku), <b>zákaz dvojího postihu</b> (ne bis in idem), presumpce neviny, <b>subsidiarita trestní represe</b> (trestným činem je čin, kde nestačí správní sankce), hrozí-li souběh přestupku a trestného činu, uplatní se trestní právo. <b>Příkaz na místě</b> (pokuta do 10 000 Kč na místě), <b>příkazní řízení</b> (příkaz s pokutou bez nařízení jednání), <b>obecné řízení</b> (ústní jednání).' },
      { t: 'table', head: ['Řízení', 'Charakter', 'Rozdíl oproti správnímu'], rows: [
        ['<b>Občanskoprávní (civilní)</b>', 'spor rovných stran; rozhoduje soud', 'správní: orgán stojí nad stranou, působí z úřední moci'],
        ['<b>Trestní</b>', 'trestní postih; státní zástupce / policie / soud', 'správní trestání má menší závažnost a méně přísné sankce'],
        ['<b>Daňové</b> (zák. 280/2009 Sb.)', 'speciální řízení vedené finančními úřady', 'správní řád se použije jen subsidiárně'],
        ['<b>Ústavní soudnictví</b>', 'ústavní stížnost proti pravomocnému rozhodnutí', 'po vyčerpání všech opravných prostředků']
      ] },
      { t: 'warn', x: 'Správní řád se použije <b>subsidiárně</b> tam, kde zvláštní zákon (daňový řád, stavební zákon, přestupkový zákon) stanoví vlastní procesní pravidla. Správní řízení × <b>přestupkové řízení</b> – ke správnímu trestání se použije <b>přestupkový zákon</b> a správní řád subsidiárně.' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>právní moc</b> (nelze řádně napadnout) a <b>vykonatelnost</b> (lze vynutit).',
    'Lhůty: <b>30 / 60 dnů</b> na rozhodnutí, <b>15 dnů</b> odvolání, <b>2 měsíce</b> správní žaloba, <b>2 týdny</b> kasační stížnost.',
    'Zaměnění <b>státní správy</b> a <b>samosprávy</b>: ve státní správě řídí nadřízený, v samostatné působnosti jen dozor nad zákonností. Přenesená působnost je státní správa vykonávaná obcí / krajem.',
    'Správní soud přezkoumává pouze <b>zákonnost</b> (rozhodnutí zruší, nenahradí), ne věcnou správnost; správní žalobu lze podat až po vyčerpání odvolání.',
    'Odvolání se podává u orgánu, který rozhodnutí vydal (ne přímo u odvolacího orgánu).',
    'Zaměňování přestupku a trestného činu; PO může spáchat přestupek i trestný čin; věková hranice odpovědnosti je u obou 15 let.',
    'Správní řád × zvláštní řízení (daňové, stavební): správní řád se použije jen subsidiárně.',
    'Nepleť <b>opatření obecné povahy</b> (územní plán) s rozhodnutím (individuální) a obecně závaznou vyhláškou (normativní).'
  ],
  qa: [
    { q: 'Co je správní právo a jak se člení?', a: 'Odvětví veřejného práva upravující organizaci a činnost veřejné správy a její vztah k adresátům. Člení se na <b>obecnou část</b> (správní řád, přestupkové právo, soudní řád správní, organizace) a <b>zvláštní část</b> (stavební, dopravní, živnostenské, školské…).' },
    { q: 'Rozdíl mezi státní správou a samosprávou.', a: 'Státní správu vykonávají orgány státu (ministerstva, úřady) nebo pověřené orgány v přenesené působnosti; hierarchicky řízeny. Samospráva: územní (obce, kraje) a zájmová (komory, VŠ) spravují vlastní záležitosti pod dozorem státu nad zákonností.' },
    { q: 'Co je samostatná a přenesená působnost?', a: 'Samostatná: obec / kraj spravuje vlastní záležitosti (rozpočet, místní komunikace), dozor jen nad zákonností. Přenesená: obec / kraj vykonává státní správu (matriky, stavební úřad) a stát ji řídí i kontroluje věcně.' },
    { q: 'Vyjmenuj základní zásady správního řízení.', a: 'Zákonnost, rovnost, nestrannost, přiměřenost, ochrana legitimního očekávání a dobré víry, materiální pravda, součinnost, rychlost a hospodárnost, oficialita, volné hodnocení důkazů, dvojinstančnost.' },
    { q: 'Jak se zahajuje správní řízení?', a: '<b>Na žádost</b> – okamžikem doručení žádosti správnímu orgánu. <b>Z moci úřední</b> – dnem, kdy orgán oznámí zahájení prvnímu známému účastníkovi (§ 44).' },
    { q: 'Jaké jsou lhůty pro vydání rozhodnutí a pro odvolání?', a: 'Rozhodnutí do 30 dnů od zahájení řízení, do 60 dnů ve zvlášť složitých případech. Odvolání do 15 dnů od oznámení rozhodnutí; podává se u orgánu, který rozhodnutí vydal.' },
    { q: 'Co je právní moc a vykonatelnost rozhodnutí?', a: 'Právní moc: rozhodnutí nelze napadnout řádným opravným prostředkem (odvoláním). Vykonatelnost: rozhodnutí lze vynutit (exekuce); obvykle nastává s právní mocí, ale může se oddálit (odkladný účinek) nebo předběžně nastat dříve.' },
    { q: 'Jaké jsou mimořádné opravné prostředky?', a: 'Přezkumné řízení (z moci úřední, do 1 roku od právní moci), obnova řízení (na žádost, nové důkazy, do 3 měsíců od zjištění), nové rozhodnutí (po zrušení závislého rozhodnutí soudem).' },
    { q: 'Rozlišuj rozhodnutí, opatření obecné povahy a vyhlášku obce.', a: 'Rozhodnutí: individuální, konkrétní adresát (stavební povolení). Opatření obecné povahy: konkrétní předmět, obecně vymezený okruh adresátů (územní plán). Vyhláška: obecně závazný předpis (normativní akt).' },
    { q: 'Jak lze napadnout pravomocné rozhodnutí správního orgánu u soudu?', a: 'Správní žalobou k příslušnému krajskému soudu do 2 měsíců od doručení rozhodnutí; až po vyčerpání řádných opravných prostředků. Proti rozsudku kasační stížnost k NSS do 2 týdnů.' },
    { q: 'Rozdíl mezi přestupkem, správním deliktem a trestným činem.', a: 'Přestupek: lehčí protiprávní čin FO, PO, podnikající FO, řeší správní orgán (zák. 250/2016 Sb.). Jiný správní delikt: delikt PO a podnikajících FO podle zvláštních zákonů. Trestný čin: nejzávažnější, řeší soud (trestní zákoník).' },
    { q: 'Pepovi doručili rozhodnutí o pokutě 2. 3., odvolat se chce 20. 3. Stihne to? Komu odvolání podá?', a: 'Lhůta 15 dnů od oznámení (doručení) končí 17. 3.; odvolání 20. 3. je opožděné (zmeškání by šlo prominout jen ze závažných důvodů). Odvolání se podává u orgánu, který rozhodnutí vydal, ne u odvolacího.' },
    { q: 'Obec nevydává povolení již 5 měsíců od žádosti. Co může žadatel dělat?', a: 'Správní orgán musí rozhodnout v 30/60 dnech. Žadatel může podat <b>žádost o opatření proti nečinnosti</b> u nadřízeného orgánu, případně žalobu na ochranu proti nečinnosti u správního soudu; popř. požadovat náhradu škody dle zák. 82/1998 Sb. (nesprávný úřední postup).' },
    { q: 'V jakém poměru je správní řád ke zvláštním procesním předpisům?', a: 'Správní řád je <b>obecným procesním předpisem</b> a použije se subsidiárně tam, kde zvláštní zákon (daňový řád, stavební zákon, přestupkový zákon) nestanoví jinak; podstatné odchylky musí vyplývat z povahy věci.' }
  ]
});
