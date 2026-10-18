registerTopic({
  id: 'pravo-system', order: 1, icon: '⚖️', title: 'Právo, právní systémy a prameny práva', src: 'podklady', where: 'Přednáška 1',
  summary: 'Pojem a historie práva, velké právní systémy, dualismus práva (objektivní × subjektivní, hmotné × procesní, soukromé × veřejné, absolutní × relativní), prameny práva, hierarchie předpisů v ČR a právo EU.',
  vocab: [
    { w: 'Sb. (Sbírka zákonů)', x: 'Oficiální sbírka, kde se vyhlašují zákony; „zákon č. 89/2012 Sb.“ = zákon číslo 89 z roku 2012.' },
    { w: 'Právní norma', x: 'Pravidlo chování závazné pro všechny adresáty, jehož dodržení vynucuje stát; skládá se z ustanovení předpisů.' },
    { w: 'Subjekt práva', x: 'Ten, kdo může mít práva a povinnosti – člověk nebo právnická osoba.' },
    { w: 'Fyzická (FO) × právnická osoba (PO)', x: 'FO = konkrétní člověk; PO = organizace s vlastní právní subjektivitou (firma, obec, spolek).' },
    { w: 'Sankce', x: 'Nepříjemný následek porušení povinnosti (trest, pokuta, náhrada škody, úrok z prodlení).' },
    { w: 'Kogentní × dispozitivní norma', x: 'Od kogentní normy se nelze odchýlit; od dispozitivní lze dohodou (platí, jen když si strany nedohodnou jinak).' },
    { w: 'Judikatura', x: 'Souhrn rozhodnutí soudů; ukazuje, jak se zákony v praxi vykládají.' },
    { w: 'Parlament (Poslanecká sněmovna a Senát)', x: 'Zákonodárný sbor se dvěma komorami, který schvaluje zákony.' }
  ],
  key: [
    '<b>Objektivní právo</b> = souhrn platných právních norem (právní řád státu); <b>subjektivní právo</b> = oprávnění konkrétního subjektu vyplývající z objektivního práva.',
    '<b>Tři velké právní systémy</b>: kontinentální (psané právo, pramen = předpis), angloamerické (precedent, soudy právo dotvářejí), islámské (šaría). ČR = kontinentální.',
    '<b>Soukromé právo</b> = rovnost a autonomie vůle, převážně dispozitivní normy („co není zakázáno, je dovoleno“); <b>veřejné právo</b> = nadřazenost veřejné moci, převážně kogentní normy („státní orgán jen to, co zákon dovolí“).',
    '<b>Absolutní právo</b> působí <i>erga omnes</i> (vůči všem – vlastnictví), <b>relativní</b> <i>inter partes</i> (jen mezi stranami – pohledávka ze smlouvy).',
    '<b>Čtyři základní prameny práva</b>: normativní právní akty, soudní precedenty, normativní smlouvy, právní obyčeje. V ČR převažují normativní právní akty.',
    '<b>Hierarchie</b>: ústavní pořádek &gt; mezinárodní smlouvy (čl. 10 Ústavy) &gt; zákon (a zákonné opatření Senátu) &gt; nařízení vlády &gt; vyhlášky ministerstev a ČNB &gt; předpisy samosprávy. Norma nižší síly nesmí odporovat vyšší; měnit/rušit ji může jen norma stejné nebo vyšší síly.',
    'Absolutně závazné prameny v ČR: normativní právní akty, normativní smlouvy (vč. mezinárodních) a nálezy Ústavního soudu.',
    'Právo EU: primární (zakládací smlouvy) a sekundární (nařízení, směrnice, rozhodnutí); vyhlašuje se v Úředním věstníku EU.'
  ],
  sections: [
    { title: 'Pojem a historie práva', blocks: [
      { t: 'ul', items: [
        'Právo vzniklo jako <b>historický fenomén</b>, když se společnost začala organizovat a potřebovala vnitřní řád.',
        'Pravidla byla původně <b>nepsaná a zvyková</b>, postupně se z nich staly závazné a státem vynutitelné <b>právní normy</b>; dnes má právo psanou formu.',
        'Právo je <b>multidimenzionální fenomén</b> – musí se zkoumat ve více rovinách.'
      ] },
      { t: 'timeline', title: 'Vývoj práva', items: [
        { when: 'Předstátní', h: 'Zvykové právo', x: 'právní systémy existovaly už před vznikem států' },
        { when: '1800–1700 př. n. l.', h: 'Chamurappiho zákoník', x: 'nejstarší právní památka, Babylonie' },
        { when: 'Starověký Řím', h: 'Největší rozkvět práva', x: 'základ moderních (kontinentálních) systémů' },
        { when: 'Novověk', h: 'Kodifikace', x: 'nepsané obyčeje → psané zákony vydávané státem' }
      ] },
      { t: 'versus', title: 'Latinské dvojice z římského práva', x: 'Už římští právníci třídili právo podle toho, čeho se týká. Prvním dělením bylo <i>ius civile</i>, tedy světské civilní právo, a <i>ius canonicum</i>, právo církevní. Pro dnešek je důležitější druhé dělení: <i>ius privatum</i> upravuje vztahy mezi soukromými osobami, <i>ius publicum</i> vztahy, ve kterých vystupuje stát a veřejná moc. Z římského práva vycházejí kontinentální právní systémy včetně českého, a proto se s dělením na soukromé a veřejné právo potkáš v celém předmětu.', cols: [
        { h: 'Členění podle', items: ['<i>ius civile</i> (civilní) × <i>ius canonicum</i> (církevní)', '<i>ius privatum</i> (soukromé) × <i>ius publicum</i> (veřejné)'] },
        { h: 'Význam', items: ['Římské právo = základ moderních kontinentálních systémů', 'Právě odtud pochází členění na soukromé a veřejné právo'] }
      ] },
      { t: 'def', term: 'Přirozené právo', x: 'Soubor principů vycházejících z přirozených práv člověka (nezávislých na vůli státu) – filozofická rovina.' },
      { t: 'def', term: 'Pozitivní (platné) právo', x: 'Soubor norem vydaných nebo uznaných státem, jejichž dodržování stát vynucuje – praktická rovina.' },
      { t: 'tip', x: 'Vývoj: morální a zvykové normy → státem vynutitelná pravidla. Právní normy se od morálky liší tím, že je <b>vynucuje stát</b> (sankce).' }
    ] },
    { title: 'Právní systémy (právní kultury)', blocks: [
      { t: 'p', x: 'Právní systém většiny zemí světa je založen na jednom ze tří velkých typů právní kultury (nebo na jejich kombinaci).' },
      { t: 'icons', title: 'Typy právních kultur', items: [
        { i: '📚', h: 'Kontinentální (evropské)', x: 'recepce římského práva, psané právo' },
        { i: '🏝️', h: 'Angloamerické (common law)', x: 'nalézání práva soudy, precedent' },
        { i: '🕌', h: 'Islámské', x: 'neměnné právo boží – šaría; Blízký a Střední východ, část Afriky' },
        { i: '🌍', h: 'Tradiční a náboženská', x: 'obyčeje a náboženská pravidla, zejm. Afrika' }
      ] },
      { t: 'versus', title: 'Kontinentální × angloamerický systém', x: 'Oba systémy chtějí předvídatelná pravidla, liší se ale tím, kde je hledají. V kontinentální Evropě, a tedy i u nás, píše pravidla zákonodárce do zákonů a soudce je při rozhodování aplikuje – řešení případu proto začíná v předpisu. V angloamerickém světě vzniká velká část práva v soudních síních: když soud poprvé rozhodne nový typ případu, jeho rozhodnutí (precedent) zavazuje soudy v budoucích stejných případech, takže soudy právo průběžně dotvářejí. Pro Česko z toho plyne, že rozsudky vyšších soudů sice praxi silně ovlivňují, formálně ale pramenem práva nejsou.', cols: [
        { h: 'Kontinentální', items: ['Základ: recepce římského práva, psané právo', 'Pramen: <b>právní předpis</b> (zákon)', 'Soudy normy <b>aplikují</b>'] },
        { h: 'Angloamerický', items: ['Základ: nalézání práva soudy', 'Pramen: <b>soudní precedent</b>', 'Soudy právo <b>neustále dotvářejí</b>'] }
      ] },
      { t: 'ul', items: [
        '<b>Islámské právo</b>: upravuje hlavně právo rodinné, dědické, darovací; závazkové právo se zpravidla řídí převzatým právem (kontinentálním nebo angloamerickým).',
        '<b>Tradiční a náboženská práva</b> existují vedle systémů zavedených bývalými koloniálními mocnostmi; dnes význam hlavně pro osobní statut osob daného vyznání (Indie, některé arabské země, Izrael).'
      ] },
      { t: 'ex', x: 'ČR patří ke <b>kontinentálnímu</b> typu: právní řád je založen na psaném právu (zákony a další předpisy), vyhlášených mezinárodních smlouvách, k nimž dal souhlas Parlament, a nálezech Ústavního soudu, jimiž byl zrušen zákon či jiný předpis.' },
      { t: 'tip', x: 'Mnemotechnika: kontinent = <b>kodex</b> (předpis), ostrov = <b>případ</b> (precedent), islám = <b>šaría</b>.' }
    ] },
    { title: 'Dualismus práva', blocks: [
      { t: 'tree', title: 'Dualismus = „dvojí pohled na právo“', root: { h: 'Dualismus práva', kids: [
        { h: 'Přirozené × pozitivní' },
        { h: 'Objektivní × subjektivní', x: 'co je právo × co smím já' },
        { h: 'Hmotné × procesní', x: 'co? × jak?' },
        { h: 'Soukromé × veřejné', x: 'rovnost × nadřazenost' },
        { h: 'Absolutní × relativní', x: 'vůči všem × vůči někomu' }
      ] } },
      { t: 'versus', title: 'Objektivní × subjektivní právo', x: 'Jde o dva pohledy na totéž slovo „právo“. Objektivní právo je celý soubor platných norem – právní řád státu, tedy to, co najdeš ve Sbírce zákonů. Subjektivní právo je konkrétní oprávnění, které z těchto norem plyne určité osobě. Občanský zákoník (objektivní právo) stanoví, že vlastník smí se svou věcí nakládat; ty jako vlastník kola proto máš subjektivní právo kolo prodat. Zjednodušeně: objektivní právo říká, co platí pro všechny, subjektivní právo říká, co můžeš ty.', cols: [
        { h: 'Objektivní právo', items: ['Souhrn nebo systém platných právních norem', 'Plnění vynutitelné státní mocí', 'Totožné s <b>právním řádem</b> státu (všechny normy platné v daném období na území státu)'] },
        { h: 'Subjektivní právo', items: ['Oprávnění jednotlivce vyplývající z objektivního práva', 'Zákonem garantovaná míra možného chování subjektu (člověk, právnická osoba)', 'To, co adresát <b>může</b> učinit, protože mu to objektivní právo dovoluje'] }
      ] },
      { t: 'versus', title: 'Hmotné × procesní právo', x: 'Hmotné právo odpovídá na otázku „co komu náleží“ – stanoví samotná práva a povinnosti, například že prodávající musí předat věc a kupující zaplatit cenu. Procesní právo odpovídá na otázku „jak se toho domoci“ – popisuje postup před soudem nebo úřadem: kdo podává žalobu, v jaké lhůtě, jak se dokazuje a jak se rozhoduje. Procesní právo tedy hmotnému slouží; bez něj by práva zůstala jen na papíře. Typickou dvojicí je občanský zákoník (hmotné právo) a občanský soudní řád (procesní právo).', cols: [
        { h: 'Hmotné – otázka „co?“', items: ['Upravuje vztahy po stránce věcné', 'Přiznává subjektivní práva a povinnosti směřující přímo k účelu úpravy', 'Např. občanský zákoník'] },
        { h: 'Procesní – otázka „jak?“', items: ['Stanoví postupy v řízeních před státními orgány', 'Zprostředkovaně slouží hmotnému právu (jak se domoci práv, realizovat povinnosti)', 'Např. občanský soudní řád, trestní řád, správní řád'] }
      ] },
      { t: 'versus', title: 'Soukromé × veřejné právo', x: 'Rozhodující je postavení stran. V soukromém právu proti sobě stojí rovnocenné osoby a vztah vzniká jejich vlastní vůlí, typicky smlouvou; nikdo nemůže druhému nic jednostranně nařídit a dovoleno je vše, co zákon nezakazuje. Proto jsou tu normy většinou dispozitivní – strany si mohou dohodnout něco jiného. Ve veřejném právu vystupuje orgán veřejné moci (soud, úřad), který může osobě uložit povinnost i proti její vůli; sám ale smí jednat jen tehdy a tak, jak mu to dovoluje zákon. Proto tu převažují kogentní normy. Kupní smlouva mezi dvěma lidmi patří do soukromého práva, pokuta od úřadu do veřejného.', cols: [
        { h: 'Soukromé právo', items: ['Vztahy FO a PO na principu <b>rovnosti a nezávislosti</b>', 'Vznik z projevu vůle – <b>smluvní princip</b> (autonomie vůle)', '<b>„Co není zakázáno, je dovoleno“</b>; nemusím činit, co zákon neukládá', 'Převážně <b>dispozitivní</b> normy'] },
        { h: 'Veřejné právo', items: ['Státní orgán (soud, správní orgán) <b>vnucuje svou vůli</b> na základě svrchovanosti veřejné moci', 'Subordinace (nadřazenost – podřízenost)', '<b>Zásada legality</b> – státní moc jen v případech, mezích a způsoby stanovenými zákonem', 'Převážně <b>kogentní</b> normy'] }
      ] },
      { t: 'svg', title: 'Soukromé × veřejné právo v obrázku', x: ZPN.publicPrivate() },
      { t: 'warn', x: 'Ve studijním textu (dodamgoda1) jsou definice veřejného a soukromého práva <b>zaměněné</b> (veřejné je tam popsáno jako vztahy rovných subjektů). Správně: <b>soukromé = rovnost, autonomie vůle, dispozitivní normy; veřejné = subordinace, nositel veřejné moci, kogentní normy</b>.' },
      { t: 'versus', title: 'Absolutní × relativní právo', x: 'Rozdíl je v tom, vůči komu právo působí. Absolutní právo, typicky vlastnictví, působí vůči všem: nikdo konkrétní ti nic dlužit nemusí, ale všichni ostatní musí tvé vlastnictví respektovat a nezasahovat do něj. Relativní právo vzniká jen mezi určitými osobami, nejčastěji ze smlouvy: pronajímatel může nájemné chtít jen po svém nájemci, ne po sousedovi. Absolutní právo tedy může porušit kdokoli, relativní jen ten, kdo je zavázán.', cols: [
        { h: 'Absolutní', items: ['Působí <i>erga omnes</i> – vůči všem', 'Neurčený počet subjektů má povinnost <b>nerušit</b> oprávněného (zdržet se zásahu)', 'Vlastnické právo, osobnostní práva, práva k duševnímu vlastnictví'] },
        { h: 'Relativní', items: ['Působí <i>inter partes</i> – mezi stranami', 'Konkrétní povinnost jednoho nebo více <b>individuálně určených</b> subjektů (něco dát, konat, strpět)', 'Pohledávka ze smlouvy (kupní cena, nájemné), nárok na náhradu škody'] }
      ] },
      { t: 'svg', title: 'Absolutní × relativní právo', x: ZPN.absRel() }
    ] },
    { title: 'Prameny práva', blocks: [
      { t: 'def', term: 'Pramen práva', x: 'Forma objektivního práva, která obsahuje právní normy. Liší se podle právního systému a kultury; každý stát má unikátní kombinaci pramenů.' },
      { t: 'tree', title: 'Čtyři základní prameny', root: { h: 'Prameny práva', kids: [
        { h: 'Normativní právní akty', x: 'soubory norem vydané orgánem veřejné moci v náležité formě; výsledek legislativního procesu' },
        { h: 'Soudní precedent', x: 'rozhodnutí, které je prvním řešením dosud neupravené situace a zavazuje pro budoucí stejné případy' },
        { h: 'Normativní smlouva', x: 'dvoustranné/vícestranné jednání regulující skupinu případů stejného druhu' },
        { h: 'Právní obyčej', x: 'pravidlo vzniklé spontánně dlouhodobou tradicí a všeobecnou akceptací; historicky nejstarší' }
      ] } },
      { t: 'icons', title: 'Role jednotlivých pramenů v ČR', items: [
        { i: '📄', h: 'Normativní akty', x: 'základní a zcela převažující pramen; k platnosti musí být vyhlášen předepsaným způsobem' },
        { i: '🔨', h: 'Precedent', x: 'typický pro angloamerické a mezinárodní právo; v ČR formálně není pramenem (judikatura ovlivňuje praxi, nezavazuje)' },
        { i: '🤝', h: 'Smlouva', x: 'pramenem jen kolektivní smlouvy (zaměstnavatelé × odbory) a mezinárodní smlouvy převzaté do vnitrostátního práva' },
        { i: '📜', h: 'Obyčej', x: 'pramen jen když je státem uznán, aplikován orgány a porušení následuje sankce; v ČR výjimečně (obchodní zvyklosti)' }
      ] },
      { t: 'def', term: 'Nález Ústavního soudu', x: 'Rozhodnutí nejvyššího orgánu ochrany ústavnosti; dotváří formální soustavu pramenů (např. zruší zákon nebo jeho ustanovení v rozporu s ústavním pořádkem ke dni určenému v nálezu).' },
      { t: 'icons', title: 'Znaky normativního právního aktu', items: [
        { i: '🖋️', h: 'Forma', x: 'záměrná činnost orgánu s legislativní pravomocí, legislativní procedura zakončená publikací; jen takový akt je platný a účinný' },
        { i: '📏', h: 'Normativita', x: 'obsahuje pravidla chování' },
        { i: '🔭', h: 'Abstraktnost', x: 'obecná pravidla pro typově určené situace, ne práva a povinnosti konkrétních osob' },
        { i: '👥', h: 'Obecná závaznost', x: 'zavazuje všechny osoby v působnosti orgánu, který akt vydal' }
      ] },
      { t: 'tip', x: 'Normativní právní akty, normativní smlouvy (vč. mezinárodních) a nálezy Ústavního soudu patří mezi <b>absolutně závazné prameny práva</b> v ČR.' }
    ] },
    { title: 'Právní řád ČR a hierarchie předpisů', blocks: [
      { t: 'def', term: 'Právní řád ČR', x: 'Souhrn všech platných a účinných pramenů práva na území státu; tvoří ho všechny právní předpisy ČR a v nich obsažené právní normy. Právní předpis = soubor norem vydaný státem uznanou formou.' },
      { t: 'p', x: 'Předpisy se liší podle <b>stupně právní síly</b>, <b>orgánu, který je vydal</b>, a <b>formy</b>.' },
      { t: 'pyramid', title: 'Hierarchie předpisů (nahoře nejvyšší síla)', levels: [
        { h: 'Ústavní pořádek', x: 'Ústava, Listina, ústavní zákony – Parlament, kvalifikovaná většina' },
        { h: 'Mezinárodní smlouvy', x: 'vyhlášené, souhlas Parlamentu; při rozporu se zákonem se použije smlouva (čl. 10 Ústavy)' },
        { h: 'Zákony', x: 'a zákonná opatření Senátu (když PS nevykonává pravomoci) – schvaluje PS' },
        { h: 'Nařízení vlády', x: 'k provedení zákona, generální zmocnění v Ústavě' },
        { h: 'Vyhlášky ministerstev a ČNB', x: 'jen na základě výslovného zákonného zmocnění' },
        { h: 'Předpisy územní samosprávy', x: 'OZV (samostatná působnost = původní); nařízení obcí a krajů (přenesená = odvozená)' }
      ] },
      { t: 'versus', title: 'Původní × odvozené akty', x: 'Původní (primární) předpisy vydávají orgány, které mají normotvornou pravomoc přímo z Ústavy a mohou věc upravit samy od sebe – Parlament zákonem nebo zastupitelstvo obce obecně závaznou vyhláškou. Odvozené (sekundární) předpisy vydávají orgány výkonné moci a státní správy proto, aby podrobněji provedly předpis vyšší síly – například nařízení vlády k provedení zákona nebo vyhláška ministerstva na základě zmocnění v zákoně. Odvozený předpis proto nesmí jít nad rámec ani proti předpisu, ze kterého vychází.', cols: [
        { h: 'Původní (primární)', items: ['Ústava a ústavní zákony, zákony, zákonná opatření Senátu, OZV obcí a krajů', 'Vydávají orgány s původní normotvornou pravomocí (Parlament, zastupitelstva)', 'Nejvyšší stupeň síly ve své oblasti'] },
        { h: 'Odvozené (sekundární)', items: ['Akty výkonných orgánů a státní správy', 'Nižší síla, nesmí odporovat aktům, z nichž jsou odvozeny', 'Podrobněji upravují to, co v zásadě upravují primární akty'] }
      ] },
      { t: 'p', x: 'Podle síly se normy dělí na <b>ústavní, zákonné a podzákonné</b>.' },
      { t: 'law', ref: 'Zásady právní síly', x: 'Norma nižší právní síly nesmí odporovat normě vyšší síly. Normu lze měnit nebo rušit jen normou stejné nebo vyšší síly. Kolize: <i>lex superior</i> (vyšší síla má přednost), <i>lex specialis</i> (zvláštní před obecnou), <i>lex posterior</i> (pozdější před dřívější).' },
      { t: 'warn', x: 'Pozor: zákon <b>není</b> totéž co právní předpis. Právní předpis je širší pojem (zákony, nařízení, vyhlášky…). Zákon je jen jeden z druhů předpisů.' }
    ] },
    { title: 'Mezinárodní právo a právo EU', blocks: [
      { t: 'icons', title: 'Mezinárodní právo a EU', items: [
        { i: '🌐', h: 'Mezinárodní právo veřejné', x: 'vztahy mezi státy a mezinárodními organizacemi' },
        { i: '🧳', h: 'Mezinárodní právo soukromé', x: 'mezinárodní vztahy soukromých osob – které právo se použije a který soud je příslušný' },
        { i: '🇪🇺', h: 'Právo EU', x: 'rámcová pravidla; členské státy sladí svůj právní řád, aby vztahy probíhaly za relativně stejných podmínek' }
      ] },
      { t: 'tree', title: 'Členění práva EU', root: { h: 'Právo EU', kids: [
        { h: 'Primární', x: 'zakládací smlouvy (SEU, SFEU), Listina základních práv EU, obecné právní zásady' },
        { h: 'Sekundární', x: 'akty vydané na základě smluv', kids: [
          { h: 'Nařízení', x: 'obecně závazné, přímo použitelné ve všech státech' },
          { h: 'Směrnice', x: 'závazná co do cíle; státy ji musí transponovat do vnitrostátního práva' },
          { h: 'Rozhodnutí', x: 'závazné pro adresáty' },
          { h: 'Doporučení a stanoviska', x: 'nezávazná' }
        ] }
      ] } },
      { t: 'ex', x: 'Vyhlašování: právo EU (nařízení, směrnice, rozhodnutí) se vyhlašuje v <b>Úředním věstníku Evropské unie</b> (eur-lex.europa.eu). Mezinárodní smlouva sjednaná současně EU a ČR se ve Sbírce vyhlašuje odkazem na částku Úředního věstníku.' },
      { t: 'tip', x: 'Přednost: právo EU má při kolizi aplikační přednost před vnitrostátním právem; ČR se na EU podílí přenosem některých pravomocí podle čl. 10a Ústavy (souhlas 3/5 všech poslanců a 3/5 přítomných senátorů).' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>objektivní</b> právo (soubor norem) a <b>subjektivní</b> právo (oprávnění konkrétního subjektu).',
    'Zaměnit veřejné a soukromé právo – soukromé = rovnost + dispozitivní normy; veřejné = nadřazenost moci + kogentní normy (pozor na prohozenou definici ve studijním textu).',
    'Tvrdit, že v ČR jsou závazným pramenem soudní precedenty. Pramenem je <b>předpis</b>; judikatura jen ovlivňuje praxi (závazný je nález ÚS a rozhodnutí v konkrétní věci).',
    'Tvrdit, že každá smlouva je pramenem práva. Pramenem jsou jen <b>normativní</b> smlouvy (kolektivní smlouvy, mezinárodní smlouvy) – běžná kupní smlouva je jen individuální právní jednání.',
    'Zaměnit absolutní/relativní: <i>erga omnes</i> = absolutní (vlastnictví), <i>inter partes</i> = relativní (pohledávka).',
    'Zaměnit hmotné × procesní právo – občanský zákoník je hmotné, občanský soudní řád procesní.',
    'Zaměnit nařízení vlády (odvozený akt k zákonu) a nařízení EU (přímo použitelný akt EU) nebo obecně závaznou vyhlášku obce (původní akt) a nařízení obce (přenesená působnost).',
    'Zaměnit právní řád (souhrn platných norem státu) a právní systém (typ právní kultury – kontinentální, angloamerický, islámský).'
  ],
  qa: [
    { q: 'Vymezte objektivní a subjektivní právo.', a: '<b>Objektivní právo</b> je souhrn (systém) platných právních norem vynutitelných státní mocí, totožný s právním řádem státu. <b>Subjektivní právo</b> je oprávnění adresáta normy vyplývající z objektivního práva – zákonem garantovaná míra možného chování (to, co subjekt může učinit).' },
    { q: 'Jaké jsou velké právní systémy světa a čím se liší?', a: 'Kontinentální (základ v římském právu, pramen = psaný předpis, soudy normy aplikují), angloamerický (pramen = soudní precedent, soudy právo dotvářejí) a islámský (šaría, neměnné právo boží, hlavně rodinné a dědické věci); k tomu tradiční a náboženská práva zejm. v Africe. ČR patří ke kontinentálnímu.' },
    { q: 'Čím se liší soukromé a veřejné právo?', a: 'Soukromé právo upravuje vztahy rovných a nezávislých subjektů, vznikají zpravidla z projevu vůle (smlouva), platí „co není zakázáno, je dovoleno“, převažují dispozitivní normy. Ve veřejném právu stojí na jedné straně nositel veřejné moci, který vnucuje svou vůli (subordinace), je vázán zákonem a normy jsou převážně kogentní.' },
    { q: 'Čím se liší hmotné a procesní právo? Uveďte příklady.', a: 'Hmotné právo upravuje obsah práv a povinností (co), např. občanský zákoník. Procesní právo upravuje postup před státními orgány (jak se práv domoci), např. občanský soudní řád, trestní řád, správní řád.' },
    { q: 'Vysvětlete absolutní a relativní právo. Kazuistika: Pepa je vlastníkem kola a zároveň věřitelem Járy z půjčky. Které jeho právo je absolutní a které relativní?', a: 'Vlastnické právo ke kolu je <b>absolutní</b> (<i>erga omnes</i> – všichni mají povinnost ho nerušit). Pohledávka vůči Járovi je <b>relativní</b> (<i>inter partes</i> – povinen je jen Jára).' },
    { q: 'Jaké jsou základní prameny práva?', a: 'Normativní právní akty (právní předpisy), soudní precedenty, normativní smlouvy a právní obyčeje. V ČR převažují normativní právní akty; doplňují je normativní smlouvy (kolektivní, mezinárodní) a nálezy Ústavního soudu; obyčej jen výjimečně (obchodní zvyklosti).' },
    { q: 'Co je soudní precedent a má v ČR význam jako pramen práva?', a: 'Je to rozhodnutí soudu, které poprvé řeší dosud neupravenou situaci a stává se závazným pro budoucí stejné případy. Typické pro angloamerické právo a mezinárodní právo. V ČR formálně není pramenem práva; ustálená judikatura ovlivňuje rozhodování, ale zavazuje jen v konkrétní věci (výjimkou jsou závazné nálezy Ústavního soudu).' },
    { q: 'Které smlouvy jsou pramenem práva?', a: 'Jen normativní smlouvy, tj. takové, které regulují skupinu případů stejného druhu: kolektivní smlouvy uzavřené mezi zaměstnavateli a odbory a mezinárodní smlouvy převzaté do vnitrostátního práva.' },
    { q: 'Vyjmenujte předpisy v hierarchii od nejvyšší právní síly.', a: 'Ústavní pořádek (Ústava, Listina, ústavní zákony) → mezinárodní smlouvy podle čl. 10 Ústavy → zákony a zákonná opatření Senátu → nařízení vlády → vyhlášky ministerstev a ČNB → předpisy územní samosprávy (OZV, nařízení obcí a krajů). Nižší norma nesmí odporovat vyšší.' },
    { q: 'Kazuistika: Obec vydala obecně závaznou vyhlášku, která odporuje zákonu. Jak se to posoudí?', a: 'Vyhláška má nižší právní sílu než zákon, proto mu nesmí odporovat. Rozporný předpis nelze použít; o jeho zrušení může rozhodnout Ústavní soud (zákony a jiné předpisy v rozporu s Ústavou nebo zákonem) a stát nad obcemi vykonává dozor.' },
    { q: 'Rozdíl mezi primárními a sekundárními (odvozenými) normativními akty?', a: 'Primární (původní) vydávají orgány s původní normotvornou pravomocí (Parlament, zastupitelstva samosprávy) – Ústava, ústavní zákony, zákony, zákonná opatření Senátu, OZV. Sekundární (odvozené) vydávají výkonné orgány a státní správa (nařízení vlády, vyhlášky ministerstev a ČNB, nařízení obcí a krajů v přenesené působnosti) na základě zákona a v jeho mezích, mají nižší sílu.' },
    { q: 'Co je právní obyčej a kdy je pramenem práva?', a: 'Pravidlo chování vzniklé dlouhodobou tradicí a všeobecnou akceptací, historicky nejstarší pramen. Pramenem práva je, jen když ho stát uzná, státní orgány ho aplikují na konkrétní případy a porušení následuje sankce. V ČR se uplatňuje výjimečně (obchodní zvyklosti).' },
    { q: 'Jaké je právo EU a jak se člení?', a: 'EU stanoví rámcová pravidla a členské státy musí svůj právní řád sladit s normami EU. Primární právo = zakládací smlouvy; sekundární = nařízení (přímo použitelné), směrnice (závazné co do cíle, transpozice), rozhodnutí. Vyhlašuje se v Úředním věstníku EU.' }
  ]
});
