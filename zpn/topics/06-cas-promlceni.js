registerTopic({
  id: 'cas-promlceni', order: 6, icon: '⏳', title: 'Čas, lhůty, promlčení a prekluze', src: 'podklady', lec: [2], where: 'Cvičení 2 + Přednáška 2 (§ 605–608, § 609 an. OZ)',
  summary: 'Čas jako právní událost, doba a lhůta, počítání lhůt podle § 605–608 s příklady, právní domněnky a fikce, promlčení (3 / 10 let, námitka, naturální obligace, stavění a neklid) a prekluze včetně srovnávací tabulky.',
  vocab: [
    { w: 'Věřitel × dlužník', x: 'Věřitel má právo žádat plnění (pohledávku); dlužník je povinen dluh splnit.' },
    { w: 'Nárok', x: 'Právo požadovat po někom určité plnění (zaplatit, vydat věc, nahradit škodu).' },
    { w: 'Splatnost', x: 'Den, od kterého lze po dlužníkovi plnění požadovat a od kterého zpravidla běží promlčecí doba.' },
    { w: 'Žaloba', x: 'Písemný návrh k soudu, kterým se věřitel domáhá svého práva.' },
    { w: 'Pravomocné rozhodnutí', x: 'Rozhodnutí soudu, které už nelze řádným opravným prostředkem (odvoláním) napadnout.' },
    { w: 'Bezdůvodné obohacení', x: 'Získání prospěchu bez právního důvodu; příjemce ho musí vrátit.' },
    { w: 'Ujednání', x: 'Dohoda stran ve smlouvě (např. o delší či kratší promlčecí době).' },
    { w: 'Vydržení', x: 'Nabytí vlastnictví dlouhodobou poctivou držbou cizí věci.' }
  ],
  key: [
    '<b>Doba</b> = časový úsek, jehož uplynutím právo/povinnost zaniká samo. <b>Lhůta</b> = časový úsek k uplatnění práva (pořádková, promlčecí, prekluzivní).',
    '<b>§ 605:</b> lhůta ve dnech počíná dnem <b>následujícím</b> po rozhodné skutečnosti; konec lhůty v týdnech/měsících/letech připadá na den <b>stejného označení</b>; není-li ho, na poslední den měsíce.',
    '<b>§ 606:</b> polovina měsíce = 15 dnů, střed měsíce = 15. den; část měsíce se počítá naposled. <b>§ 607:</b> konec v So/Ne/svátek → nejbližší pracovní den. <b>§ 608:</b> lhůta v hodinách od okamžiku do okamžiku.',
    '<b>Promlčení</b>: právo nezaniká, jen ho dlužník může odepřít splnit – <b>soud k němu přihlédne jen na námitku dlužníka</b>; zbývá <b>naturální obligace</b>; dobrovolné plnění není bezdůvodným obohacením.',
    '<b>Obecná promlčecí doba 3 roky</b> (subjektivní); <b>objektivní 10 let</b>. Ujednat lze nejméně 1 rok, nejvíce 15 let. Nepromlčuje se vlastnické právo, výživné (jednotlivé splátky ano) ad.',
    '<b>Prekluze</b>: zaniká samo právo; soud přihlíží <b>z úřední povinnosti</b>; plnění z prekludovaného práva je bezdůvodné obohacení – musí se vrátit.',
    '<b>Domněnka</b> („má se za to“) je vyvratitelná, nevyvratitelná domněnka („platí“); <b>fikce</b> („hledí se“, „považuje se“) – víme, že skutečnost není, ale tváříme se, že je.'
  ],
  sections: [
    { title: 'Čas jako právní událost', blocks: [
      { t: 'p', x: 'Čas je <b>právní událost</b> nezávislá na lidské vůli. Plynutí času nebo dosažení časové hranice je právně významné, jen pokud s ním norma spojuje následky: promlčení, prekluze, vydržení, dosažení věku (zletilost, důchodový věk).' },
      { t: 'versus', title: 'Doba × lhůta', x: 'Doba i lhůta jsou časové úseky, rozdíl je v tom, zda musíš něco udělat. Doba prostě uplyne a s jejím koncem zanikne právo nebo povinnost samo od sebe, bez dalšího jednání – nájem sjednaný na dobu určitou skončí uplynutím této doby. Lhůta je čas, během něhož musíš sám aktivně něco udělat u druhé strany, soudu nebo úřadu, například podat odvolání, žalobu nebo reklamaci. Když lhůtu nevyužiješ, nese to následky podle jejího druhu – u pořádkové lhůty malé, u promlčecí ztratíš vymahatelnost, u prekluzivní celé právo.', cols: [
        { h: 'Doba', items: ['časový úsek, jehož uplynutím zaniká právo nebo povinnost bez dalšího, bez projevu vůle', 'Nájem na dobu určitou skončí uplynutím doby.'] },
        { h: 'Lhůta', items: ['časový úsek stanovený k uplatnění práva u druhé strany, u soudu či jiného orgánu', 'Lhůta k podání žaloby, k odvolání, k reklamaci.'] }
      ] },
      { t: 'tree', title: 'Druhy lhůt', root: { h: 'Lhůta', kids: [
        { h: 'Pořádková', x: 'zmeškání není fatální' },
        { h: 'Promlčecí', x: 'právo trvá, ztrácí vymahatelnost' },
        { h: 'Prekluzivní', x: 'právo zaniká' }
      ] } },
      { t: 'ul', items: [
        'Práva a povinnosti zanikají <b>počátkem</b> nebo <b>koncem</b> určeného dne; zánik jednoho a vznik jiného práva ve vzájemné návaznosti nastane v týž okamžik, a to koncem dne, nejde-li o jiné ujednání.',
        'Práva se vykonávají a povinnosti plní v <b>obvyklou denní dobu</b>, neplyne-li z okolností něco jiného.',
        'Časem se rozumí: určitý okamžik, plynutí času (doba, lhůta), dovršení určitého času.',
        'Čas se rozlišuje: od kterého následky počínají (počíná den následující) a kterým končí (poslední den lhůty – o půlnoci).'
      ] }
    ] },
    { title: 'Počítání času a lhůt (§ 605–608 OZ)', blocks: [
      { t: 'flow', title: 'Postup při počítání lhůty', steps: [
        { h: '1. Rozhodná skutečnost', x: 'najdi událost, od které se počítá' },
        { h: '2. Začátek', x: 'lhůta začne dnem následujícím' },
        { h: '3. Konec', x: 'stejné číslo dne / týdne / měsíce' },
        { h: '4. Neexistující den', x: 'poslední den měsíce' },
        { h: '5. So / Ne / svátek', x: 'nejbližší pracovní den' }
      ] },
      { t: 'law', ref: '§ 605', x: '(1) Lhůta nebo doba určená podle dnů počíná dnem, který následuje po skutečnosti rozhodné pro její počátek. (2) Konec lhůty nebo doby určené podle týdnů, měsíců nebo let připadá na den, který se pojmenováním nebo číslem shoduje se dnem, na který připadá rozhodná skutečnost. Není-li takový den v posledním měsíci, připadne konec na <b>poslední den měsíce</b>.' },
      { t: 'law', ref: '§ 606', x: '(1) Polovinou měsíce se rozumí <b>15 dnů</b>, středem měsíce jeho <b>15. den</b>. (2) Je-li lhůta určena na jeden či více měsíců a část měsíce, počítá se <b>část měsíce naposled</b>.' },
      { t: 'law', ref: '§ 607', x: 'Připadne-li poslední den lhůty na sobotu, neděli nebo svátek, je posledním dnem lhůty <b>nejblíže následující pracovní den</b>.' },
      { t: 'law', ref: '§ 608', x: 'Lhůta nebo doba určená v kratších jednotkách než dny (hodiny) se počítá <b>od okamžiku, kdy začne, do okamžiku, kdy skončí</b>. Lhůta 48 hodin tedy není lhůtou dvou dnů.' },
      { t: 'nums', title: 'Pravidla v číslech', items: [
        { n: '1', u: 'den po', x: 'lhůta ve dnech počíná dnem následujícím (§ 605)' },
        { n: '15', u: 'dnů', x: 'polovina měsíce; střed měsíce = 15. den (§ 606)' },
        { n: '48', u: 'hodin', x: 'od okamžiku do okamžiku, ne 2 dny (§ 608)' }
      ] },
      { t: 'warn', x: 'Rozlišuj <b>lhůtu</b> (posun na pracovní den podle § 607) a <b>konkrétně určený den</b> plnění (termín) – tam se plnění musí stihnout právě v tento den. Pozor na zavádějící zjednodušení „lhůta končí v neděli = pondělí“: platí jen u lhůt, ne u data výslovně stanoveného ve smlouvě.' },
      { t: 'svg', title: 'Příklad 1 (cvičení): lhůta 8 dnů, 1. den 21. 10. 2024', x: ZPN.calendarDiagram() },
      { t: 'ex', x: '<b>Poznámky k příkladu 1:</b> Počítá-li se 21. 10. jako rozhodná skutečnost, lhůta začne 22. 10. a skončí 29. 10. – stejný výsledek. Verze 2021: 21. 10. 2021 čtvrtek, 28. 10. svátek → pátek 29. 10. 2021.' },
      { t: 'timeline', title: 'Příklad 2 (cvičení): doba 13 měsíců od 31. 1. 2024', items: [
        { when: '31. 1. 2024', h: 'Rozhodná skutečnost' },
        { when: '31. 2. 2025', h: 'Vypočtený konec', x: 'takový den není (§ 605 odst. 2)' },
        { when: 'Pá 28. 2. 2025', h: 'Skutečný konec', x: 'poslední den měsíce' }
      ] },
      { t: 'ex', x: '<b>Poznámka k příkladu 2:</b> Verze 2021: konec 28. 2. 2022 (pondělí).' },
      { t: 'ex', x: '<b>Další příklady:</b> a) Lhůta 1 měsíc od 31. 3. → konec 30. 4. (v dubnu není 31.). b) Lhůta 1 a půl měsíce od 10. 1. → 1 měsíc končí 10. 2., poté 15 dnů (část měsíce naposled) → konec 25. 2. c) Lhůta 2 týdny od úterý 5. 3. → úterý 19. 3. d) Doba 48 hodin začala 5. 3. ve 14:30 → skončí 7. 3. ve 14:30 (§ 608).' },
      { t: 'ul', items: [
        '<b>Procesní lhůty (správní právo procesní):</b> rozlišují se lhůty stanovené zákonem a lhůty stanovené orgánem; do běhu lhůty se nezapočítává den události.',
        'Lhůty podle týdnů/měsíců/let končí uplynutím dne shodného označení; padne-li konec na So/Ne/svátek, je posledním dnem nejbližší příští pracovní den.',
        'Lhůta je zachována, je-li poslední den podání u příslušného orgánu, předáno <b>poště</b> (poštovní doručovatel) nebo učiněno u nadřízeného orgánu, který je bezodkladně postoupí příslušnému.'
      ] }
    ] },
    { title: 'Právní domněnky a fikce', blocks: [
      { t: 'p', x: 'Zákonem stanovené domněnky a fikce zavazují soud, aby (bez)podmínečně předpokládal existenci něčeho, o čem není jisté, že je, nebo dokonce je jisté, že není. Mají úzký vztah k právním skutečnostem.' },
      { t: 'versus', title: 'Domněnka × fikce', x: 'Domněnky i fikce zákon používá tam, kde by bylo obtížné nebo zbytečné všechno dokazovat. Vyvratitelná domněnka („má se za to“) vychází z toho, co obvykle bývá pravda – manžel matky je otcem dítěte –, ale kdo tvrdí opak, může ho dokázat. Nevyvratitelná domněnka („platí, že“) také vychází z pravděpodobného stavu, důkaz opaku však zákon nepřipouští. Fikce („hledí se“, „považuje se“) jde ještě dál: zákon vědomě pracuje s něčím, o čem ví, že tak není, protože je to prakticky užitečné – kdo nemá bydliště, tomu se za bydliště považuje místo, kde žije.', cols: [
        { h: 'Vyvratitelná domněnka', items: ['signál: „má se za to“', 'přípustný důkaz opaku; skutečnost bývá obvykle taková', 'domněnka otcovství (manžel matky); příslušenství sdílí osud věci hlavní'] },
        { h: 'Nevyvratitelná domněnka', items: ['signál: „platí, že“', 'důkaz opaku není přípustný', 'po 3 letech od zániku určitých vztahů platí, že podíly spoluvlastníků jsou stejné'] },
        { h: 'Právní fikce', items: ['signál: „hledí se“, „považuje se“', 'skutečnost neexistuje, přesto se z praktických důvodů přihlíží, jako by existovala', '§ 80 odst. 2: nemá-li člověk bydliště, považuje se za ně místo, kde žije'] }
      ] }
    ] },
    { title: 'Promlčení (§ 609 an.)', blocks: [
      { t: 'def', term: 'Promlčení', x: 'Doba, po kterou lze právo úspěšně uplatnit u soudu. Uplynutím promlčecí doby <b>právo nezaniká</b>, jen se oslabuje jeho vymahatelnost – dlužník může odepřít plnění. Zbývá tzv. <b>naturální obligace</b> (dluh existuje, ale nelze jej vynutit).' },
      { t: 'ol', items: [
        '<b>Námitka dlužníka:</b> soud k promlčení přihlédne <b>jen na námitku</b> osoby, které se týká (zpravidla žalovaný). Nenamítne-li, soud právo žalobci přizná (a právo přiznané rozhodnutím se pak promlčuje 10 let).',
        '<b>Plnění z promlčeného dluhu</b> není bezdůvodným obohacením – kdo dobrovolně plnil, nemůže plnění požadovat zpět.',
        'Promlčují se <b>všechna majetková práva</b>, nestanoví-li zákon jinak; jiná práva jen tehdy, stanoví-li to zákon.'
      ] },
      { t: 'nums', title: 'Promlčecí doby', items: [
        { n: '3', u: 'roky', x: 'subjektivní (obecná) doba, § 629; od okamžiku, kdy se právo mohlo poprvé uplatnit (a oprávněný se mohl dozvědět)' },
        { n: '10', u: 'let', x: 'objektivní doba od okamžiku, kdy se právo mohlo uplatnit poprvé; brání promlčení se konat dlouho' },
        { n: '15', u: 'let', x: 'objektivní doba u úmyslně způsobené újmy; zároveň nejdelší ujednatelná doba' },
        { n: '1', u: 'rok', x: 'nejkratší ujednatelná doba' },
        { n: '10', u: 'let', x: 'právo přiznané pravomocným rozhodnutím' }
      ] },
      { t: 'icons', title: 'Nepromlčují se (demonstrativně)', items: [
        { i: '🏠', h: 'Právo vlastnické' },
        { i: '👶', h: 'Právo na výživné', x: 'jednotlivé splátky ano' },
        { i: '✂️', h: 'Rozdělení společné věci' },
        { i: '🛤️', h: 'Zřízení nezbytné cesty' },
        { i: '🔓', h: 'Vykoupení reálného břemene' }
      ] },
      { t: 'versus', title: 'Stavění × neklid', x: 'Obojí ovlivňuje běh promlčecí doby, ale jinak. Stavění je pauza: dokud trvá překážka, například když strany jednají o mimosoudním vyřešení, doba neběží, a po jejím odpadnutí běží dál jen zbytek. Neklid (dříve přerušení) nastává, když věřitel své právo uplatní u soudu nebo dlužník dluh uzná: dosavadní běh se zastaví a po skončení řízení či od uznání začne běžet nová promlčecí doba. Stavění tedy dobu jen prodlouží o trvání překážky, neklid začíná počítat znovu.', cols: [
        { h: 'Stavění', items: ['po zákonem stanovenou dobu promlčecí doba neběží', 'např. právo nelze uplatnit u soudu, doba jednání o vyrovnání / mediace', 'po skončení překážky se připočte zbytek'] },
        { h: 'Neklid (dříve přerušení)', items: ['uplatnění práva u soudu, uznání dluhu apod.', 'běh doby se zastaví', 'po skončení řízení / uznání počíná nová doba'] }
      ] },
      { t: 'timeline', title: 'Příklad: půjčka splatná 15. 5. 2022', items: [
        { when: '15. 5. 2022', h: 'Splatnost dluhu', x: 'začíná běžet 3letá doba' },
        { when: 'Čt 15. 5. 2025', h: 'Konec promlčecí doby', x: '§ 605 odst. 2' },
        { when: '20. 5. 2025', h: 'Žaloba věřitele', x: 'dlužník namítne promlčení → žaloba zamítnuta; nenamítne → soud vyhoví' },
        { when: 'Po zaplacení', h: 'Dobrovolné plnění', x: 'dlužník nemůže peníze požadovat zpět' }
      ] },
      { t: 'ex', x: '<b>Příklad:</b> Strany ve smlouvě ujednaly promlčecí dobu 6 měsíců. Nepřihlíží se k ní, protože ujednaná doba nesmí být kratší než 1 rok – platí obecná 3letá.' },
      { t: 'warn', x: 'Slajd uvádí, že po nenamítnutí promlčení je nárok „vymahatelný dalších 10 let“ – přesněji: právo přiznané pravomocným rozhodnutím soudu se promlčuje v 10leté době. Dále: slajd mluví o „promlčení do 3 let od seznámení se s důvodem neplatnosti“ u relativní neplatnosti – jde o promlčecí dobu uplatnění tohoto práva (viz téma Právní jednání).' }
    ] },
    { title: 'Prekluze', blocks: [
      { t: 'def', term: 'Prekluze (propadná lhůta)', x: 'V soukromém právu znamená nejen zánik nároku, ale <b>úplný zánik samotného práva</b> uplynutím lhůty. Označuje se jako propadná lhůta.' },
      { t: 'ul', items: [
        'K prekluzi soud přihlíží <b>z úřední povinnosti</b> (bez námitky).',
        'Plnění z prekludovaného nároku je <b>bezdůvodným obohacením</b> a musí se vrátit.',
        'Příklady: lhůta pro uplatnění práv z vadného plnění u kupní smlouvy (24 měsíců od převzetí), lhůty pro některé žaloby (např. odpůrčí žaloba), zánik práva z neuplatnění v zákonné propadné době.'
      ] },
      { t: 'timeline', title: 'Příklad: reklamace notebooku', items: [
        { when: '10. 3. 2024', h: 'Koupě a převzetí', x: 'začíná 24měsíční prekluzivní lhůta' },
        { when: '10. 3. 2026', h: 'Konec lhůty', x: 'právo z vadného plnění zaniká' },
        { when: 'Květen 2026', h: 'Reklamace po 26 měsících', x: 'práva už není; soud by k prekluzi přihlédl sám' }
      ] },
      { t: 'ex', x: 'Pepa koupil 10. 3. 2024 notebook a po 26 měsících (v květnu 2026) uplatní reklamaci vady, která existovala při převzetí. Lhůta pro uplatnění práva z vadného plnění (24 měsíců) je <b>prekluzivní</b> – právo zaniklo. Prodejce nemusí reklamaci řešit (soud by k prekluzi přihlédl sám). Pokud by mu ale prodejce přesto „uznal“ a vyplatil kompenzaci, jde o plnění bez právního důvodu – bezdůvodné obohacení.' }
    ] },
    { title: 'Promlčení × prekluze', blocks: [
      { t: 'svg', title: 'Co zbude po uplynutí doby', x: ZPN.promlceniDiagram() },
      { t: 'versus', title: 'Promlčení × prekluze', x: 'Obě instituce dopadají na toho, kdo své právo dlouho neuplatňuje, ale s různou přísností. Promlčením právo nezanikne, jen se oslabí: dlužník může odmítnout plnit, pokud promlčení u soudu namítne; když nenamítne, soud věřiteli vyhoví, a když dlužník promlčený dluh dobrovolně zaplatí, nemůže peníze chtít zpět. Prekluzí právo zanikne úplně: soud k tomu přihlédne sám, i když to nikdo nenamítá, a co bylo plněno po prekluzi, je bezdůvodné obohacení, které se musí vrátit. Promlčení tedy dává dlužníkovi možnost bránit se, prekluze rychle a definitivně uzavírá právní stav.', cols: [
        { h: 'Promlčení', items: ['Právo trvá, ztrácí vymahatelnost (naturální obligace).', 'Soud přihlíží jen na námitku dlužníka.', 'Plnění po uplynutí není bezdůvodné obohacení – nelze vrátit.', 'Obecně 3 roky / 10 let objektivně; lze ujednat 1–15 let.', 'Stavění a neklid ano – běh se může obnovit.', 'Cíl: ochrana dlužníka a právní jistoty; věřitel nesmí být pasivní.'] },
        { h: 'Prekluze', items: ['Právo zaniká úplně.', 'Soud přihlíží z úřední povinnosti.', 'Plnění po uplynutí je bezdůvodné obohacení – musí se vrátit.', 'Délka stanovena zákonem (konkrétní propadné lhůty); zpravidla nelze prodlužovat dohodou.', 'Stavění a neklid u prekluzivních lhůt ne (nebo jen výjimečně).', 'Cíl: rychlé a definitivní vyjasnění právního stavu.'] }
      ] },
      { t: 'tip', x: 'Promlčení = dlužník „mlčí → platíš“; prekluze = právo je pryč. Promlčení musí někdo namítnout, prekluzi soud vidí sám.' }
    ] }
  ],
  mistakes: [
    'Říkat, že promlčením právo zaniká – <b>nezaniká</b>, jen se stává nevymahatelným (naturální obligace). Zaniká až při prekluzi.',
    'Myslet si, že soud promlčení zohlední sám – <b>jen na námitku dlužníka</b>; prekluzi naopak z úřední povinnosti.',
    'Chybně počítat lhůtu od dne události – lhůta ve dnech začíná <b>dnem následujícím</b> (§ 605 odst. 1).',
    'Zapomenout posunout konec lhůty na pracovní den (§ 607) – a také si všimnout státních svátků (28. 10.!).',
    'Zaměnit 15 dnů (polovina měsíce) a 14 dnů, nebo zapomenout, že část měsíce se počítá <b>naposled</b>.',
    'Tvrdit, že lhůta 48 hodin = 2 dny. Podle § 608 se počítá od okamžiku do okamžiku.',
    'Zaměnit subjektivní (3 roky) a objektivní (10 let) promlčecí dobu; zapomenout, že lze ujednat 1–15 let a že vlastnické právo se nepromlčuje.',
    'Zaměnit vyvratitelnou domněnku („má se za to“), nevyvratitelnou („platí“) a fikci („hledí se“).'
  ],
  qa: [
    { q: 'Co je doba a co lhůta?', a: '<b>Doba</b> – časový úsek, jehož uplynutím právo nebo povinnost zaniká bez dalšího. <b>Lhůta</b> – časový úsek k uplatnění práva u druhé strany, u soudu či jiného orgánu; pořádková, promlčecí, prekluzivní.' },
    { q: 'Jak se podle OZ počítá lhůta určená podle dnů a podle měsíců?', a: 'Ve dnech počíná dnem následujícím po rozhodné skutečnosti (§ 605 odst. 1). U týdnů, měsíců a let připadá konec na den, který se pojmenováním nebo číslem shoduje se dnem rozhodné skutečnosti; není-li takový den v posledním měsíci, na poslední den měsíce (§ 605 odst. 2). Konec na sobotu, neděli či svátek se posouvá na nejbližší následující pracovní den (§ 607).' },
    { q: 'Lhůta 8 dnů, prvním dnem je 21. 10. 2024. Kdy končí?', a: 'Dny 21.–28. 10. 2024 – konec by byl pondělí 28. 10., ale to je státní svátek, proto podle § 607 končí lhůta v <b>úterý 29. 10. 2024</b>.' },
    { q: 'Doba 13 měsíců začala 31. 1. 2024. Kdy uplyne?', a: 'Konec by připadl na 31. 2. 2025, takový den není → poslední den měsíce, tedy <b>28. 2. 2025</b> (pátek).' },
    { q: 'Co znamená polovina a střed měsíce? A lhůta „2 měsíce a polovina měsíce“?', a: 'Polovina měsíce = 15 dnů, střed měsíce = 15. den (§ 606 odst. 1). Při kombinaci měsíců a části měsíce se část měsíce počítá naposled (odst. 2): nejprve 2 celé měsíce, pak 15 dnů.' },
    { q: 'Jak se počítá lhůta 48 hodin?', a: 'Podle § 608 od okamžiku, kdy začne, do okamžiku, kdy skončí; nejde o lhůtu dvou dnů (nezkracuje se na půlnoc).' },
    { q: 'Rozlište vyvratitelnou domněnku, nevyvratitelnou domněnku a fikci.', a: 'Vyvratitelná („má se za to“) – lze důkazem opaku vyvrátit. Nevyvratitelná („platí“) – opak nelze dokazovat. Fikce („hledí se“, „považuje se“) – víme, že skutečnost neexistuje, přesto se jí z praktických důvodů přiznávají účinky (např. bydliště tam, kde člověk žije, nemá-li bydliště).' },
    { q: 'Co je promlčení a jaké má účinky?', a: 'Doba, po jejímž uplynutí dlužník může odepřít plnění. Právo nezaniká, ale stává se nevymahatelným (naturální obligace). Soud přihlédne jen na námitku dlužníka; dobrovolné plnění z promlčeného dluhu není bezdůvodné obohacení.' },
    { q: 'Jak dlouhá je promlčecí doba a lze ji změnit?', a: 'Subjektivní (obecná) 3 roky, objektivní 10 let. Smlouvou lze ujednat kratší (nejméně 1 rok) i delší (nejvýše 15 let).' },
    { q: 'Které právo se nepromlčuje?', a: 'Např. právo vlastnické, právo na výživné (splátky ano), právo domáhat se rozdělení společné věci, právo požadovat zřízení nezbytné cesty, právo na vykoupení reálného břemene.' },
    { q: 'Čím se liší promlčení od prekluze?', a: 'Promlčení: právo trvá, ztrácí vymahatelnost, soud přihlíží jen k námitce, plnění nelze vracet. Prekluze: právo zaniká, soud přihlíží z úřední povinnosti, plnění z prekludovaného nároku je bezdůvodné obohacení a vrací se.' },
    { q: 'Pepa dluží Frantovi 10 000 Kč splatných 1. 3. 2021. Franta podal žalobu až 10. 5. 2025. Pepa promlčení nenamítl. Rozhodne soud ve prospěch Franty?', a: 'Ano. Obecná 3letá promlčecí doba skončila v březnu 2024, ale soud k promlčení přihlédne <b>jen na námitku dlužníka</b>; ta nebyla vznesena, proto soud žalobě vyhoví. Kdyby Pepa promlčení namítl, žaloba by byla zamítnuta.' },
    { q: 'Pepa po promlčení dobrovolně zaplatil dluh. Může peníze požadovat zpět?', a: 'Ne. Plnění z promlčeného dluhu není bezdůvodným obohacením (naturální obligace). Jinak by tomu bylo u prekluze – tam by šlo o bezdůvodné obohacení a muselo by se vrátit.' }
  ]
});
