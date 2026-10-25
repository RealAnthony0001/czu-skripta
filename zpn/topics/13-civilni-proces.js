registerTopic({
  id: 'civilni-proces', order: 13, icon: '🧑‍⚖️', title: 'Procesní předpisy, občanské soudní řízení', src: 'doplneno', lec: [10], where: 'Přednáška 10 (sylabus – doplněno ze znalostí)',
  summary: 'Vztah hmotného a procesního práva, soustava soudů, strany a příslušnost, žaloba, průběh sporného řízení, rozsudek a usnesení, právní moc, opravné prostředky a výkon rozhodnutí.',
  vocab: [
    { w: 'Sb. (Sbírka zákonů)', x: 'Úřední věstník, v němž se vyhlašují zákony; „č. 99/1963 Sb.“ = zákon číslo 99 z roku 1963.' },
    { w: 'Soud prvního stupně / odvolací soud', x: 'První stupeň věc projedná poprvé, odvolací (vyšší) soud přezkoumává jeho rozhodnutí.' },
    { w: 'Důkaz', x: 'Cokoli, čím strana prokazuje svá tvrzení před soudem: listina, svědek, znalecký posudek, ohledání.' },
    { w: 'Lhůta', x: 'Zákonem nebo soudem stanovená doba, do které je nutné něco udělat; po jejím zmeškání právo zpravidla zaniká.' },
    { w: 'Věřitel a dlužník', x: 'Věřitel má právo žádat plnění (např. peníze), dlužník je povinen splnit; v řízení jde o žalobce a žalovaného.' },
    { w: 'Doručení', x: 'Formální předání písemnosti adresátovi (datová schránka, pošta); od doručení obvykle běží lhůty.' },
    { w: 'Senát × samosoudce', x: 'Senát je skupina soudců (zpravidla tři), samosoudce rozhoduje sám.' },
    { w: 'Nemo iudex sine actore', x: 'Latinsky „žádný soudce bez žalobce“: soud ve sporu jedná jen na podnět (žalobu) strany.' }
  ],
  key: [
    '<b>Hmotné právo</b> (občanský zákoník) určuje <i>co</i> komu patří; <b>procesní právo</b> (OSŘ) určuje <i>jak</i> se práva domoci před soudem.',
    'Základní předpisy: <b>OSŘ – zákon č. 99/1963 Sb.</b> (sporná řízení) a <b>zákon o zvláštních řízeních soudních – č. 292/2013 Sb.</b> (nesporná řízení: rodinná, osobní stav, pozůstalost, opatrovnická, rejstříková aj.).',
    'Řízení se zahajuje <b>žalobou</b> (návrhem) – zásada dispoziční: <i>nemo iudex sine actore</i>. Strany: žalobce a žalovaný.',
    '<b>Žaloba</b> musí obsahovat označení soudu a účastníků, <b>vylíčení rozhodných skutečností</b>, <b>označení důkazů</b>, <b>žalobní petit</b> (čeho se žalobce domáhá), podpis a datum.',
    '<b>Rozsudek</b> rozhoduje o věci samé; <b>usnesení</b> o ostatním (procesní otázky). Rozhodnutí se vyhlašuje, později písemně doručuje.',
    '<b>Právní moc</b> = nastává, když nelze rozhodnutí napadnout řádným opravným prostředkem (odvoláním). Formální právní moc → <b>vykonatelnost</b> po uplynutí plnící lhůty (zpravidla 3 dny od právní moci).',
    '<b>Odvolání</b> do 15 dnů od doručení rozsudku (řádný opravný prostředek); <b>dovolání</b>, obnova řízení a žaloba pro zmatečnost jsou mimořádné opravné prostředky.',
    'Nesplní-li povinný dobrovolně, nastupuje <b>výkon rozhodnutí</b> (soudní) nebo <b>exekuce</b> (soudní exekutor, zákon č. 120/2001 Sb.).'
  ],
  sections: [
    { title: 'Hmotné a procesní právo, prameny', blocks: [
      { t: 'table', head: ['', 'Hmotné právo', 'Procesní právo'], rows: [
        ['Obsah', 'práva a povinnosti subjektů (co)', 'postup před soudy a jinými orgány (jak)'],
        ['Příklady', 'občanský zákoník, zákoník práce, obchodní korporace', 'občanský soudní řád, trestní řád, správní řád'],
        ['Vzájemný vztah', 'procesní právo slouží k <b>realizaci</b> hmotných práv zprostředkovaně – umožňuje domáhat se jich nebo vynucovat plnění povinností', 'normy jsou převážně kogentní (strany se nemohou odchýlit od zákonného postupu)']
      ] },
      { t: 'p', x: '<b>Základní procesní předpisy civilního procesu</b>:' },
      { t: 'ul', items: [
        '<b>zákon č. 99/1963 Sb., občanský soudní řád</b> (OSŘ) – obecná úprava soudního řízení ve sporných věcech soukromého práva (spor o plnění, určení, změnu právního poměru);',
        '<b>zákon č. 292/2013 Sb., o zvláštních řízeních soudních</b> (ZŘS) – tzv. nesporná řízení: věci rodiny a dětí (např. rozvod, úprava poměrů dítěte), osobní stav a svéprávnost, opatrovnictví, pozůstalostní řízení (dědické; často vede notář jako soudní komisař), soudní řízení o schválení právního jednání aj.; podpůrně se použije OSŘ;',
        '<b>zákon č. 120/2001 Sb., exekuční řád</b> a <b>zákon č. 549/1991 Sb., o soudních poplatcích</b>; dále zákon o soudech a soudcích (č. 6/2002 Sb.); alternativy: rozhodčí řízení (zákon č. 216/1994 Sb.), mediace (zákon č. 202/2012 Sb.).'
      ] },
      { t: 'tip', x: '<b>Sporné řízení</b> (OSŘ): dva subjekty s protichůdnými zájmy, soud rozhoduje o jejich sporu; platí zásada dispoziční a projednací (strany tvrdí a dokazují). <b>Nesporné řízení</b> (ZŘS): často lze zahájit i bez návrhu, soud sám zjišťuje skutkový stav (vyšetřovací zásada) – typicky péče o děti, svéprávnost, dědictví.' }
    ] },
    { title: 'Soustava soudů, účastníci a příslušnost', blocks: [
      { t: 'ul', items: [
        '<b>Soustava soudů</b>: okresní soudy (v Praze obvodní, v Brně Městský soud) – krajské soudy (Městský soud v Praze) – vrchní soudy (Praha, Olomouc) – Nejvyšší soud (Brno). Správní soudnictví: krajské soudy a Nejvyšší správní soud. Ústavní soud mimo soustavu.',
        'Civilní věci rozhodují zpravidla <b>okresní soudy</b> jako soudy prvního stupně; krajský soud je prvoinstančním soudem jen u vybraných věcí vymezených zákonem (např. ochrana osobnosti, nekalá soutěž, autorské právo apod.); odvolacím soudem je zpravidla nadřízený soud.',
        'Soudci jsou nezávislí, jednají jako samosoudce nebo v senátu; ve vybraných věcech se účastní přísedící.'
      ] },
      { t: 'table', head: ['Pojem', 'Obsah'], rows: [
        ['<b>Účastníci řízení</b>', 've sporném řízení <b>žalobce</b> (navrhovatel) a <b>žalovaný</b>; v nesporném navrhovatel a ostatní účastníci. Dále vedlejší účastník (intervenient), společenství účastníků.'],
        ['<b>Způsobilost být účastníkem</b>', 'právní osobnost (fyzická osoba – narozením, právnická osoba – vznikem).'],
        ['<b>Procesní způsobilost</b>', 'způsobilost samostatně jednat před soudem – odpovídá svéprávnosti; jinak za účastníka jedná zákonný zástupce nebo opatrovník. Strana se může nechat zastoupit (např. advokátem – plná moc).'],
        ['<b>Věcná příslušnost</b>', 'který soud (okresní × krajský) rozhoduje jako soud prvního stupně.'],
        ['<b>Místní příslušnost</b>', 'obecný soud žalovaného: u fyzické osoby podle bydliště, u právnické osoby podle sídla; výlučná příslušnost např. u sporů o nemovitosti (soud, v jehož obvodu leží).'],
        ['<b>Funkční příslušnost</b>', 'např. o odvolání rozhoduje odvolací soud.']
      ] },
      { t: 'warn', x: 'Řízení se nemůže konat před soudem, který není věcně, místně nebo funkčně příslušný – soud postoupí věc příslušnému soudu, případně řízení zastaví. Příslušnost soud zkoumá z úřední povinnosti.' }
    ] },
    { title: 'Žaloba a průběh řízení', blocks: [
      { t: 'def', term: 'Žaloba (návrh na zahájení řízení)', x: 'Procesní úkon, kterým se žalobce obrací na soud a domáhá se ochrany svého práva.', items: ['řízení je zahájeno dnem, kdy žaloba došla příslušnému soudu'] },
      { t: 'ul', items: [
        '<b>Obecné náležitosti podání</b>: kdo je činí, které věci se týká a co sleduje; podpis a datum.',
        '<b>Náležitosti žaloby</b> (§ 79 OSŘ): označení soudu, účastníků (jméno, bydliště, rodné číslo nebo datum narození, u PO název, sídlo, IČO), <b>vylíčení rozhodujících skutečností</b> (skutkové tvrzení), <b>označení důkazů</b>, <b>žalobní návrh – petit</b> (čeho se domáhá).',
        '<b>Druhy žalob</b> podle obsahu: <b>na plnění</b> (zaplatit, vydat, konat, zdržet se), <b>určovací</b> (určení práva nebo právního vztahu – vyžaduje naléhavý právní zájem), <b>změnová</b> (konstitutivní – např. zrušení spoluvlastnictví, rozvod).',
        '<b>Soudní poplatek</b>: za žalobu o peněžité plnění obecně 5 % z hodnoty (min. 1 000 Kč) podle zákona o soudních poplatcích; poplatek se platí při podání.'
      ] },
      { t: 'ol', items: [
        '<b>Podání žaloby</b> – soud zkoumá náležitosti (vadu žaloby vyzve odstranit), příslušnost a poplatek.',
        '<b>Doručení žaloby</b> žalovanému a výzva k vyjádření; případně <b>platební rozkaz</b> při peněžitém plnění (odpor do 15 dnů ho zruší).',
        '<b>Nařízení jednání</b> (zpravidla ústní a veřejné) – strany tvrdí skutečnosti a navrhují důkazy.',
        '<b>Dokazování</b> – listiny, výslech svědků, znalecký posudek, ohledání, výslech účastníků; důkazy hodnotí soud podle volného hodnocení (§ 132 OSŘ). Platí: kdo tvrdí, ten dokazuje (<b>břemeno tvrzení a důkazní břemeno</b>).',
        '<b>Rozhodnutí</b> – rozsudek se vyhlašuje veřejně; následuje písemné vyhotovení a doručení.',
        '<b>Opravné prostředky</b>, <b>právní moc</b>, případně <b>výkon rozhodnutí</b>.'
      ] },
      { t: 'p', x: '<b>Zásady civilního procesu</b>: dispoziční (strany disponují předmětem řízení), projednací (shromažďují skutečnosti a důkazy), rovnost účastníků, ústnost, veřejnost, přímost, nestrannost a nezávislost soudu, hospodárnost řízení a právo na spravedlivý proces (čl. 36 Listiny).' },
      { t: 'warn', x: 'Kdo hmotné právo nemá, nemůže žalobou uspět, ale kdo jej má a nic neudělá (nepodá žalobu, nenamítne promlčení), o něj může přijít. <b>Promlčení</b> soud zohlední jen na <b>námitku</b> dlužníka (§ 609 OZ), <b>prekluzi</b> zkoumá z úřední povinnosti.' }
    ] },
    { title: 'Rozhodnutí – rozsudek a usnesení, právní moc', blocks: [
      { t: 'table', head: ['', 'Rozsudek', 'Usnesení'], rows: [
        ['Význam', 'rozhoduje o <b>věci samé</b> (o žalobním návrhu)', 'rozhoduje o ostatních otázkách (procesní vedení, zastavení řízení, náklady, příslušnost…)'],
        ['Podoba', 'výrok, odůvodnění, poučení o opravném prostředku', 'výrok a odůvodnění (někdy se odůvodnění neuvádí)'],
        ['Druhy', 'rozsudek na plnění / určovací / konstitutivní; <b>pro uznání</b> (žalovaný nárok uznal), <b>pro zmeškání</b> (žalovaný se nedostavil), <b>částečný</b>, <b>mezitímní</b>', 'vedle rozsudku a usnesení existují zvláštní druhy rozhodnutí, např. <b>platební rozkaz</b> (zjednodušené rozhodnutí o peněžitém nároku)'],
        ['Vyhlášení', 'vždy veřejně', 'může být doručeno bez vyhlášení']
      ] },
      { t: 'ul', items: [
        '<b>Výrok rozsudku</b>: o věci samé (zamítnutí / vyhovění žalobě), o povinnosti splnit ve lhůtě (zpravidla 3 dny od právní moci), o nákladech řízení (úspěšná strana má právo na náhradu).',
        '<b>Odůvodnění</b>: skutkový stav, hodnocení důkazů, právní posouzení (aplikace normy).',
        '<b>Formální právní moc</b> – rozhodnutí nelze napadnout řádným opravným prostředkem (uplynula lhůta k odvolání nebo bylo rozhodnuto o odvolání). <b>Materiální právní moc</b> – závaznost a nezměnitelnost; o téže věci nelze znovu řízení vést (<i>res iudicata</i>, překážka věci rozsouzené).',
        '<b>Vykonatelnost</b> – rozhodnutí je vykonatelné uplynutím lhůty k plnění; je-li pravomocné a vykonatelné, je <b>exekučním titulem</b>.'
      ] },
      { t: 'tip', x: 'Řetěz pojmů: rozsudek → (odvolání?) → <b>právní moc</b> → <b>vykonatelnost</b> → výkon rozhodnutí / exekuce. Rozsudek bývá závazný pro strany, a pokud jde o osobní stav, i vůči všem.' }
    ] },
    { title: 'Opravné prostředky a výkon rozhodnutí', blocks: [
      { t: 'table', head: ['Prostředek', 'Lhůta / podmínky', 'Kdo rozhoduje'], rows: [
        ['<b>Odvolání</b> (řádný)', '<b>15 dnů</b> od doručení písemného vyhotovení rozsudku; podává se u soudu, který rozhodoval; odkladný účinek na právní moc', 'odvolací (nadřízený) soud'],
        ['<b>Dovolání</b> (mimořádný)', '<b>2 měsíce</b> od doručení rozhodnutí odvolacího soudu; musí být zastoupen advokátem; přípustné jen pro zásadní právní význam; ve věcech peněžitého plnění do 50 000 Kč nepřípustné', 'Nejvyšší soud'],
        ['<b>Obnova řízení</b>', 'nové skutečnosti nebo důkazy, které strana nemohla uplatnit; lhůty 3 měsíce od zjištění důvodu, max. 3 roky', 'soud, který rozhodoval v 1. stupni'],
        ['<b>Žaloba pro zmatečnost</b>', 'vady řízení (např. nepříslušný soud, nezpůsobilost strany)', 'soud, který rozhodoval v 1. stupni'],
        ['<b>Ústavní stížnost</b>', 'po vyčerpání prostředků, 30 dnů; porušení základních práv a svobod', 'Ústavní soud']
      ] },
      { t: 'p', x: '<b>Výkon rozhodnutí a exekuce</b>: nesplní-li povinný dobrovolně vykonatelné rozhodnutí, může oprávněný podat návrh na nařízení výkonu rozhodnutí (soudní výkon podle OSŘ – soud) nebo na pověření <b>soudního exekutora</b> (exekuce podle exekučního řádu). Je potřeba <b>exekuční titul</b> (např. pravomocný a vykonatelný rozsudek).' },
      { t: 'ul', items: [
        '<b>Způsoby výkonu</b>: srážky ze mzdy, přikázání pohledávky (např. z účtu), prodej movitých věcí a nemovitostí, zřízení soudcovského zástavního práva, vyklizení.',
        'Výkon rozhodnutí nelze provést u vybraných věcí a příjmů (existenční minimum, nezabavitelné částky).',
        'Soudní exekutor je nezávislý subjekt pověřený státem; náklady exekuce nese povinný.'
      ] },
      { t: 'ex', x: 'Pepa žaluje Járu o zaplacení 120 000 Kč z kupní smlouvy. Podá <b>žalobu na plnění</b> u soudu Járova bydliště. Soud nařídí jednání, provede důkazy a vydá <b>rozsudek</b>. Jára se do 15 dnů neodvolá → <b>právní moc</b>, 3 dny na plnění → <b>vykonatelnost</b>. Jára neplatí → Pepa podá <b>návrh na exekuci</b> (exekutor) nebo návrh na výkon rozhodnutí.' },
      { t: 'tip', x: 'V pracovněprávních, rodinných a statusových věcech se uplatňují zvláštní pravidla (nesporné řízení, vyšetřovací zásada, ochrana slabší strany).' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>hmotné</b> a <b>procesní</b> právo – OZ říká, kdo má co dát, OSŘ určuje, jak se toho domoci.',
    'Zaměnit <b>rozsudek</b> (o věci samé) a <b>usnesení</b> (procesní rozhodnutí) a lhůty pro odvolání (15 dnů) a dovolání (2 měsíce).',
    'Zaměnit <b>právní moc</b> (už nelze odvolat) a <b>vykonatelnost</b> (po uplynutí lhůty k plnění lze vymáhat); rozsudek může být pravomocný, ale ještě nevykonatelný.',
    'Zaměnit sporné řízení (OSŘ, 99/1963 Sb.) a nesporné/zvláštní (292/2013 Sb.).',
    'Soud k <b>promlčení</b> nepřihlédne bez námitky dlužníka; k <b>prekluzi</b> přihlédne vždy.',
    'Myslet si, že žaloba stačí jen „obecná“ – musí obsahovat skutková tvrzení, důkazy a určitý petit; jinak soud vyzve k odstranění vad.',
    'Zaměnit exekutora (soukromá osoba pověřená státem) a soudní výkon rozhodnutí (provádí soud); oba vychází z exekučního titulu.',
    'Zaměnit místní příslušnost (obecný soud žalovaného) a věcnou příslušnost (okresní × krajský soud).'
  ],
  qa: [
    { q: 'Jaký je vztah hmotného a procesního práva?', a: 'Hmotné právo stanoví práva a povinnosti (co), procesní právo upravuje postup před soudy a orgány při jejich uplatnění a vynucení (jak). Procesní právo slouží k naplnění hmotného zprostředkovaně; příklad: OZ × OSŘ.' },
    { q: 'Které předpisy tvoří základ občanského soudního řízení v ČR?', a: 'Zákon č. 99/1963 Sb., občanský soudní řád (sporná řízení), zákon č. 292/2013 Sb., o zvláštních řízeních soudních (nesporná řízení – rodina, osobní stav, pozůstalost…), dále exekuční řád (120/2001 Sb.) a zákon o soudních poplatcích (549/1991 Sb.).' },
    { q: 'Jaká je soustava obecných soudů ČR?', a: 'Okresní soudy (v Praze obvodní), krajské soudy (v Praze Městský soud), vrchní soudy (Praha, Olomouc) a Nejvyšší soud (Brno); správní soudnictví – krajské soudy a Nejvyšší správní soud. Ústavní soud není součástí soustavy.' },
    { q: 'Co je žaloba a jaké musí mít náležitosti?', a: 'Návrh na zahájení řízení, jímž se žalobce domáhá ochrany práva. Obsahuje označení soudu a účastníků, vylíčení rozhodujících skutečností, označení důkazů, žalobní návrh (petit), podpis a datum. Řízení je zahájeno dnem doručení žaloby soudu.' },
    { q: 'Jaké druhy žalob rozlišujeme?', a: 'Na plnění (zaplatit, vydat, konat, zdržet se), určovací (určení existence práva nebo právního vztahu; nutný naléhavý právní zájem) a změnová/konstitutivní (např. zrušení spoluvlastnictví, rozvod manželství).' },
    { q: 'Kazuistika: Pepa chce žalovat Járu, který bydlí v Brně a dluží mu peníze. Kde podá žalobu?', a: 'U obecného soudu žalovaného, tj. okresního soudu podle Járova bydliště (Brno), neexistuje-li výlučná příslušnost. Žalobu formuluje se skutkovými tvrzeními, důkazy a petitem, zaplatí soudní poplatek (5 % z hodnoty, min. 1 000 Kč).' },
    { q: 'Jak probíhá sporné řízení?', a: 'Podání žaloby → kontrola náležitostí a příslušnosti → doručení a vyjádření žalovaného (příp. platební rozkaz) → jednání (ústní, veřejné) → dokazování (volné hodnocení důkazů) → rozsudek → odvolání → právní moc → vykonatelnost → výkon rozhodnutí / exekuce.' },
    { q: 'Rozdíl mezi rozsudkem a usnesením?', a: 'Rozsudek rozhoduje o věci samé (o žalobním návrhu) a vyhlašuje se vždy veřejně. Usnesení řeší ostatní, zejména procesní otázky (zastavení řízení, nařízení jednání, příslušnost, náklady).' },
    { q: 'Co je právní moc a vykonatelnost?', a: 'Právní moc nastává, když rozhodnutí nelze napadnout řádným opravným prostředkem (formální právní moc) a je závazné i nezměnitelné (materiální právní moc – překážka věci rozsouzené). Vykonatelné je po uplynutí lhůty k plnění (zpravidla 3 dny od právní moci); pak je exekučním titulem.' },
    { q: 'Jaké jsou opravné prostředky v civilním řízení?', a: 'Řádný: odvolání (15 dnů od doručení rozsudku). Mimořádné: dovolání (2 měsíce, Nejvyšší soud, jen se zásadním právním významem, zastoupení advokátem), obnova řízení, žaloba pro zmatečnost. Nad rámec: ústavní stížnost.' },
    { q: 'Kazuistika: Rozsudek byl Járovi doručen 1. března. Odvolání nepodal. Kdy nastane právní moc?', a: 'Lhůta pro odvolání je 15 dnů od doručení (do 16. března). Pokud odvolání nepodal ani druhá strana, rozsudek nabude právní moci uplynutím lhůty. Plnit má Jára zpravidla do 3 dnů od právní moci; poté je rozsudek vykonatelný.' },
    { q: 'Jak lze vymoci splnění pravomocného rozsudku, který povinný nesplnil?', a: 'Návrhem na nařízení výkonu rozhodnutí (soud) nebo exekucí (soudní exekutor, zákon č. 120/2001 Sb.). Způsoby: srážky ze mzdy, přikázání pohledávky z účtu, prodej movitých a nemovitých věcí.' },
    { q: 'Jak se uplatní promlčení v civilním řízení?', a: 'Soud k promlčení přihlédne jen tehdy, namítne-li je dlužník (§ 609 OZ); k prekluzi soud přihlíží z úřední povinnosti. Promlčený nárok zůstává, jen ho nelze úspěšně vymáhat po námitce.' },
    { q: 'Co je to nesporné řízení a kde se upravuje?', a: 'Řízení, v němž nejde o spor s protichůdnými zájmy (např. rodinné věci, osobní stav, svéprávnost, opatrovnictví, pozůstalost). Upravuje je zákon č. 292/2013 Sb., o zvláštních řízeních soudních; podpůrně OSŘ. Řízení lze často zahájit i bez návrhu a platí vyšetřovací zásada.' }
  ]
});
