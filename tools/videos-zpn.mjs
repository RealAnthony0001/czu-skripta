// Scénáře videí Základy právních nauk – spouští se přes: node tools/video.mjs zpn [filtr]
// Fakta jen z textu témat (zpn/topics); kde téma opravuje slajdy, platí oprava.
import { loadDiagrams, title, list, diagram, reveal, tt } from './video-lib.mjs';

export const CODE = 'ZPN';
const ZPN = loadDiagrams('zpn', 'ZPN');

// self-check data v kalendářových příkladech (getDay: 0 = neděle)
const day = (y, m, d) => new Date(y, m - 1, d).getDay();
if (day(2024, 10, 28) !== 1 || day(2024, 10, 29) !== 2 || day(2025, 2, 28) !== 5 || day(2025, 5, 15) !== 4) throw new Error('kalendář v příkladech nesedí');

export const VIDEOS = {
  'pravo-system': [
    { file: '01-1-pravni-systemy', at: 'Právní systémy', title: 'Právní systémy a prameny práva', steps: [
      { h: title('Právní systémy a prameny práva', 'Odkud se bere právo'), say: 'Právní systémy a prameny práva. Odkud se bere právo.' },
      ...reveal('Velké právní kultury', [
        ['<b>Kontinentální</b> – psané právo, pramen = <b>právní předpis</b>', 'Kontinentální systém stojí na recepci římského práva. Hlavním pramenem je psaný právní předpis a soudy normy aplikují.'],
        ['<b>Angloamerický</b> (common law) – pramen = <b>soudní precedent</b>', 'V angloamerickém systému právo nalézají soudy. Pramenem je precedent a soudy právo neustále dotvářejí.'],
        ['<b>Islámské</b> (šaría) · <b>tradiční a náboženská</b> práva', 'Dále existuje islámské právo, šaría, a tradiční a náboženská práva.'],
        ['ČR = <b>kontinentální</b> typ', 'Česká republika patří ke kontinentálnímu typu.']
      ]),
      ...reveal('Čtyři prameny práva', [
        ['<b>Normativní právní akt</b> – v ČR zcela převažuje', 'U nás zcela převažuje normativní právní akt, tedy předpis vydaný orgánem veřejné moci.'],
        ['<b>Soudní precedent</b> – v ČR formálně není pramenem', 'Soudní precedent u nás formálně pramenem není. Judikatura praxi ovlivňuje, ale nezavazuje.'],
        ['<b>Normativní smlouva</b> – kolektivní a mezinárodní smlouvy', 'Normativní smlouvou jsou u nás jen kolektivní smlouvy a mezinárodní smlouvy převzaté do našeho práva.'],
        ['<b>Právní obyčej</b> – historicky nejstarší, v ČR výjimečně', 'Právní obyčej je historicky nejstarší pramen. U nás se uplatní jen výjimečně, například obchodní zvyklosti.']
      ]),
      { h: list('Pomůcka', ['kontinent = <b>kodex</b> · ostrov = <b>případ</b> · islám = <b>šaría</b>'], 1, false), say: 'Pomůcka: kontinent znamená kodex, ostrov případ a islám šaría.' }
    ] },
    { file: '01-2-dualismus', at: 'Dualismus práva', title: 'Dualismus práva', steps: [
      { h: title('Dualismus práva', 'Pět dvojic, jak se dívat na právo'), say: 'Dualismus práva. Pět dvojic, jak se dívat na právo.' },
      ...reveal('Pět dvojic', [
        ['přirozené × pozitivní', 'První dvojice: přirozené právo, které vychází z přirozených práv člověka, a pozitivní právo, které vydává nebo uznává stát.'],
        ['objektivní × subjektivní – <b>co je právo</b> × <b>co smím já</b>', 'Objektivní právo je souhrn platných norem, tedy právní řád. Subjektivní právo je oprávnění jednotlivce, které z něj plyne.'],
        ['hmotné × procesní – <b>co?</b> × <b>jak?</b>', 'Hmotné právo říká co, například občanský zákoník. Procesní právo říká jak, například občanský soudní řád.'],
        ['soukromé × veřejné – rovnost × nadřízenost', 'Dále soukromé a veřejné právo'],
        ['absolutní × relativní – vůči všem × vůči někomu', 'a absolutní a relativní právo. Na tyto dvě dvojice se podíváme blíž.']
      ]),
      { h: diagram('Soukromé × veřejné právo', ZPN.publicPrivate()), say: 'V soukromém právu stojí osoby vedle sebe jako rovné. Vztah vzniká jejich vůlí, typicky smlouvou, a platí, co není zakázáno, je dovoleno. Ve veřejném právu stojí orgán veřejné moci nad osobou a smí jen to, co mu dovoluje zákon.' },
      { h: diagram('Absolutní × relativní právo', ZPN.absRel()), say: 'Absolutní právo, třeba vlastnické, působí vůči všem. Kdokoli musí vlastníka nechat na pokoji. Relativní právo působí jen mezi stranami: věřitel může něco požadovat jen po konkrétním dlužníkovi.' }
    ] },
    { file: '01-3-hierarchie', at: 'Právní řád ČR', title: 'Hierarchie právních předpisů', steps: [
      { h: title('Hierarchie předpisů', 'Který předpis má přednost'), say: 'Hierarchie právních předpisů. Který předpis má přednost.' },
      ...reveal('Od nejvyšší síly', [
        ['<b>Ústavní pořádek</b> – Ústava, Listina, ústavní zákony', 'Nahoře je ústavní pořádek: Ústava, Listina základních práv a svobod a ústavní zákony.'],
        ['<b>Mezinárodní smlouvy</b> se souhlasem Parlamentu', 'Pod ním vyhlášené mezinárodní smlouvy, ke kterým dal souhlas Parlament. Při rozporu se zákonem se použije smlouva.'],
        ['<b>Zákony</b> a zákonná opatření Senátu', 'Pak zákony a zákonná opatření Senátu.'],
        ['<b>Nařízení vlády</b> · <b>vyhlášky</b> ministerstev a ČNB', 'Dále nařízení vlády a vyhlášky ministerstev a České národní banky. Vyhláška smí vzniknout jen na základě výslovného zmocnění v zákoně.'],
        ['<b>Předpisy územní samosprávy</b> – obce a kraje', 'Nejníže stojí předpisy obcí a krajů.']
      ]),
      ...reveal('Když si předpisy odporují', [
        ['<i>lex superior</i> – vyšší síla má přednost', 'Když si předpisy odporují, má přednost předpis vyšší právní síly,'],
        ['<i>lex specialis</i> – zvláštní před obecným', 'zvláštní úprava před obecnou'],
        ['<i>lex posterior</i> – pozdější před dřívějším', 'a pozdější předpis před dřívějším.']
      ]),
      { h: list('Pozor', ['zákon ≠ právní předpis – předpis je <b>širší pojem</b>'], 1, false), say: 'Pozor: zákon není totéž co právní předpis. Právní předpis je širší pojem a zákon je jen jeden jeho druh.' }
    ] }
  ],
  'pravni-normy': [
    { file: '02-1-struktura-normy', at: 'Struktura právní normy', title: 'Struktura právní normy', steps: [
      { h: title('Struktura právní normy', 'Hypotéza, dispozice, sankce'), say: 'Struktura právní normy.' },
      ...reveal('Trojčlenná struktura', [
        ['<b>Hypotéza</b> – JESTLIŽE: adresát a podmínky', 'Právní norma má tradičně tři části. Hypotéza určuje, na koho a za jakých podmínek norma dopadá.'],
        ['<b>Dispozice</b> – PAK: příkaz, zákaz, dovolení', 'Dispozice stanoví samotné pravidlo chování. Ta nemůže chybět, bez ní by norma ztratila smysl.'],
        ['<b>Sankce</b> – NEBUDE-LI: následek porušení', 'Sankce určuje, co nastane při porušení. Často je v jiném ustanovení, nebo i v jiném předpisu.']
      ]),
      { h: diagram('Příklad: nález věci', ZPN.normDiagram()), say: 'Příklad: kdo najde ztracenou věc, to je hypotéza. Je povinen ji vydat vlastníkovi, to je dispozice, konkrétně příkaz. Sankce v ustanovení není, plyne z jiných norem, třeba o náhradě újmy.' },
      ...reveal('Kogentní × dispozitivní', [
        ['<b>kogentní</b> – nelze se odchýlit · veřejné a procesní právo', 'Podle závaznosti jsou normy kogentní, od kterých se nelze odchýlit. Typické jsou pro veřejné a procesní právo.'],
        ['<b>dispozitivní</b> – lze se dohodnout jinak · soukromé právo', 'A dispozitivní, kde se strany mohou dohodnout jinak a zákon nastoupí jen podpůrně. Typické jsou pro soukromé právo.']
      ])
    ] },
    { file: '02-2-platnost-ucinnost', at: 'Platnost, účinnost', title: 'Platnost a účinnost', steps: [
      { h: title('Platnost a účinnost', 'Od kdy se předpisem musíme řídit'), say: 'Platnost a účinnost. Od kdy se předpisem musíme řídit.' },
      { h: diagram('Platnost a účinnost', ZPN.validityTimeline()), say: 'Předpis je platný dnem vyhlášení ve Sbírce. Je součástí právního řádu, ale ještě se jím nemusíme řídit. Závazný a vynutitelný je až od účinnosti.' },
      ...reveal('Pravidla', [
        ['platnost = den <b>vyhlášení</b>', 'Platnost nastává dnem vyhlášení.'],
        ['účinnost = den v předpisu, jinak <b>15. den</b> po vyhlášení', 'Účinnost nastává dnem uvedeným v předpisu. Když ho předpis neuvádí, je to patnáctý den po vyhlášení.'],
        ['platnost a účinnost mohou <b>splynout</b>', 'Platnost a účinnost mohou nastat i ve stejný den.'],
        ['zrušení předpisu = <b>derogace</b>', 'Vyřazení předpisu z právního řádu se nazývá derogace.']
      ]),
      ...reveal('Kde se publikuje', [
        ['<b>Sbírka zákonů a mezinárodních smluv</b> – jen elektronicky, od 1. 1. 2024', 'Zákony a další celostátní předpisy vycházejí ve Sbírce zákonů a mezinárodních smluv. Od roku dva tisíce dvacet čtyři je jedna a vede se jen elektronicky.'],
        ['<b>Sbírka právních předpisů ÚSC</b> – vyhlášky obcí a krajů', 'Vyhlášky a nařízení obcí a krajů vycházejí ve Sbírce právních předpisů územních samosprávných celků.'],
        ['<b>Úřední věstník EU</b> – nařízení, směrnice', 'A předpisy Evropské unie v Úředním věstníku Evropské unie.']
      ])
    ] },
    { file: '02-3-analogie-vyklad', at: 'Aplikace, analogie', title: 'Analogie a výklad', steps: [
      { h: title('Analogie a výklad', 'Co dělat, když zákon mlčí'), say: 'Analogie a výklad. Co dělat, když zákon mlčí.' },
      ...reveal('Analogie', [
        ['soud <b>nesmí odmítnout</b> věc rozhodnout', 'Zákonodárce nepředvídá všechno, ale soud nesmí odmítnout věc rozhodnout.'],
        ['<b>analogie legis</b> – norma pro nejbližší případ', 'Analogie legis: případ upraven není, a tak se použije norma pro případ nejbližší.'],
        ['<b>analogie iuris</b> – obecné principy právního řádu', 'Analogie iuris: neexistuje ani podobná norma, a tak se rozhodne podle obecných principů práva.'],
        ['<b>vyloučena</b> v trestním, finančním a správním právu', 'Pozor, v trestním, finančním a správním právu je analogie vyloučena. Co je trestný čin, musí stanovit zákon.']
      ]),
      ...reveal('Logické argumenty', [
        ['<b>a contrario</b> – zákaz vstupu psů → kočky mohou', 'Výklad opakem: když je zakázán vstup psům, kočky mohou.'],
        ['<b>a fortiori</b> – zákaz kouření → tím spíš zákaz ohně', 'Výklad silnějším důvodem: když je zakázáno kouřit, tím spíš je zakázáno rozdělat v místnosti oheň.'],
        ['<b>ad absurdum</b> – zákaz vozidel v parku ≠ zákaz kočárků', 'Výklad sporem: zákaz vozidel v parku nevykládáme jako zákaz kočárků nebo sanitky, protože by to bylo absurdní.']
      ])
    ] }
  ],
  'ustavni-pravo': [
    { file: '03-1-ustava-delba-moci', at: 'Ústavní právo a Ústava ČR', title: 'Ústava a dělba moci', steps: [
      { h: title('Ústava a dělba moci', 'Jak je poskládaný stát'), say: 'Ústava a dělba státní moci.' },
      ...reveal('Ústava ČR', [
        ['<b>1/1993 Sb.</b> · preambule + 8 hlav · 113 článků', 'Ústava České republiky je ústavní zákon číslo jedna z roku tisíc devět set devadesát tři. Má preambuli, osm hlav a sto třináct článků.'],
        ['<b>ústavní pořádek</b> = Ústava + Listina + ústavní zákony', 'Spolu s Listinou a dalšími ústavními zákony tvoří ústavní pořádek.'],
        ['<b>rigidní</b>: změna jen ústavním zákonem (3/5 + 3/5)', 'Ústava je rigidní. Změnit ji lze jen ústavním zákonem, se souhlasem tří pětin všech poslanců a tří pětin přítomných senátorů.']
      ]),
      { h: diagram('Dělba státní moci', ZPN.powersDiagram()), say: 'Státní moc vykonává lid prostřednictvím moci zákonodárné, výkonné a soudní. Moci se navzájem kontrolují: vláda odpovídá Poslanecké sněmovně, prezident může Sněmovnu rozpustit, soudce Ústavního soudu jmenuje prezident se souhlasem Senátu a Ústavní soud ruší zákony, které odporují ústavnímu pořádku.' }
    ] },
    { file: '03-2-parlament-prezident', at: 'Moc zákonodárná', title: 'Parlament a prezident', steps: [
      { h: title('Parlament a prezident', 'Čísla, která se ptají u zkoušky'), say: 'Parlament a prezident.' },
      { h: `<h2>Dvě komory Parlamentu</h2>${tt(['', 'Poslanecká sněmovna', 'Senát'], [['členů', '200', '81'], ['období', '4 roky', '6 let (1/3 á 2 roky)'], ['volba', 'poměrná', 'většinová'], ['kandidovat od', '21 let', '40 let'], ['rozpuštění', 'lze', 'nelze']])}`, say: 'Poslanecká sněmovna má dvě stě poslanců volených na čtyři roky poměrným systémem a kandidovat lze od dvaceti jedna let. Senát má osmdesát jedna senátorů na šest let, každé dva roky se volí třetina, většinovým systémem a kandidovat lze od čtyřiceti let. Volit lze do obou komor od osmnácti let. Sněmovnu lze rozpustit, Senát ne.' },
      ...reveal('Většiny', [
        ['usnášeníschopnost: přítomna <b>1/3</b> členů', 'Komora je usnášeníschopná, když je přítomna aspoň třetina členů.'],
        ['usnesení: <b>nadpoloviční většina přítomných</b>', 'Usnesení přijme nadpoloviční většina přítomných.'],
        ['ústavní zákon: <b>3/5 všech poslanců + 3/5 přítomných senátorů</b>', 'Ústavní zákon potřebuje tři pětiny všech poslanců a tři pětiny přítomných senátorů.']
      ]),
      ...reveal('Prezident', [
        ['volen <b>přímo</b> na <b>5 let</b>, nejvýše 2 období po sobě, od 40 let', 'Prezident je volen přímo na pět let, nejvýše dvakrát po sobě. Kandidovat může od čtyřiceti let.'],
        ['slib do rukou <b>předsedy Senátu</b>', 'Slib skládá do rukou předsedy Senátu.'],
        ['velezrada → <b>ústavní žaloba</b> Senátu se souhlasem Sněmovny', 'Po dobu funkce ho nelze trestně stíhat. Pro velezradu nebo hrubé porušení ústavního pořádku podá Senát se souhlasem Sněmovny ústavní žalobu k Ústavnímu soudu.']
      ])
    ] },
    { file: '03-3-listina', at: 'Listina základních práv', title: 'Listina základních práv a svobod', steps: [
      { h: title('Listina základních práv a svobod', 'Práva, která má každý'), say: 'Listina základních práv a svobod.' },
      ...reveal('Listina', [
        ['ústavní zákon <b>2/1993 Sb.</b> · preambule + <b>6 hlav</b>', 'Listina je součástí ústavního pořádku. Má preambuli a šest hlav.'],
        ['práva jsou <b>nezadatelná, nezcizitelná, nepromlčitelná, nezrušitelná</b>', 'Základní práva jsou přirozená: nezadatelná, nezcizitelná, nepromlčitelná a nezrušitelná.'],
        ['zaručena <b>každému</b> – jen některá jen občanům', 'Zaručují se každému, nejen občanům. Jen některá, třeba volební právo nebo zakládání politických stran, mají jen občané.']
      ]),
      ...reveal('Skupiny práv', [
        ['<b>občanská</b> – život, osobní svoboda, vlastnictví, soukromí', 'Historicky nejstarší jsou občanská práva: právo na život, osobní svobodu, vlastnictví a soukromí.'],
        ['<b>politická</b> – projev, petice, shromažďování, volby', 'Politická práva: svoboda projevu, petiční, shromažďovací a volební právo.'],
        ['<b>hospodářská, sociální a kulturní</b> – práce, vzdělání, zdraví', 'Hospodářská, sociální a kulturní práva, třeba právo na vzdělání nebo na ochranu zdraví.'],
        ['<b>soudní ochrana</b> – spravedlivý proces, presumpce neviny', 'A právo na soudní ochranu: spravedlivý proces, zákonný soudce a presumpce neviny.']
      ]),
      ...reveal('Osobní svoboda (čl. 8)', [
        ['zadržení policií nejdéle <b>48 hodin</b>', 'Zadržet člověka smí policie nejdéle na čtyřicet osm hodin.'],
        ['zatčený se odevzdá soudu do <b>24 hodin</b>', 'Zatčený musí být do dvaceti čtyř hodin odevzdán soudu.']
      ])
    ] }
  ],
  'pravni-vztahy': [
    { file: '04-1-pravni-vztah', at: 'Právní vztah, předpoklady', title: 'Právní vztah', steps: [
      { h: title('Právní vztah', 'Dva předpoklady a tři prvky'), say: 'Právní vztah. Dva předpoklady a tři prvky.' },
      ...reveal('Pojem', [
        ['vztah <b>nejméně dvou</b> určených subjektů, upravený normou', 'Právní vztah je společenský vztah nejméně dvou konkrétních subjektů, který upravuje právní norma.'],
        ['předpoklady: <b>norma</b> + <b>právní skutečnost</b>', 'Vzniká, když existuje právní norma a nastane právní skutečnost, se kterou norma vznik vztahu spojuje.'],
        ['prvky <b>SOO</b>: subjekt, objekt, obsah', 'Má tři prvky: subjekt, objekt a obsah. Pomůcka: SOO.']
      ]),
      { h: diagram('Převod nemovitosti', ZPN.relationDiagram()), say: 'Příklad převodu nemovitosti. Normou je občanský zákoník, skutečností kupní smlouva. Subjekty jsou prodávající a kupující, objektem nemovitost. Obsahem jsou práva a povinnosti: převést vlastnictví a zaplatit kupní cenu.' },
      { h: list('Obsah vztahu', ['povinnost <b>dát, konat, zdržet se, strpět</b>', 'právu jedné strany odpovídá <b>povinnost</b> druhé'], 2, false), say: 'Povinnost může spočívat v tom něco dát, konat, zdržet se nebo strpět. Právu jedné strany vždy odpovídá povinnost druhé.' }
    ] },
    { file: '04-2-pravni-skutecnosti', at: 'Právní skutečnosti', title: 'Právní skutečnosti', steps: [
      { h: title('Právní skutečnosti', 'Co zakládá, mění a ruší právní vztahy'), say: 'Právní skutečnosti. Co zakládá, mění a ruší právní vztahy.' },
      { h: diagram('Dvě hlediska, čtyři druhy', ZPN.factsDiagram()), say: 'Právní skutečnosti třídíme podle dvou hledisek: jestli závisí na vůli a jestli jsou v souladu s právem. Tak vzniknou čtyři druhy.' },
      ...reveal('Čtyři druhy', [
        ['<b>právní jednání</b> – smlouva, výpověď, závěť', 'Právní jednání je projev vůle v souladu s právem, například smlouva nebo závěť.'],
        ['<b>protiprávní jednání</b> – trestný čin, porušení smlouvy', 'Protiprávní jednání je vědomé chování v rozporu s právem, třeba přestupek nebo porušení smlouvy.'],
        ['<b>právní událost</b> – narození, smrt, uplynutí času', 'Právní událost na vůli nezávisí: narození, smrt nebo uplynutí času.'],
        ['<b>protiprávní stav</b> – živelní pohroma, pracovní úraz', 'Protiprávní stav také nezávisí na vůli, ale je v rozporu s právem, třeba pracovní úraz.'],
        ['+ <b>konstitutivní rozhodnutí</b> soudu či úřadu', 'Samostatně stojí konstitutivní rozhodnutí soudu nebo úřadu, které vztah zakládá, mění nebo ruší.']
      ]),
      { h: list('Pozor', ['narození a smrt jsou <b>události</b>, ne jednání'], 1, false), say: 'Pozor na záměnu: narození a smrt jsou právní události, ne právní jednání.' }
    ] },
    { file: '04-3-svepravnost', at: 'Fyzické osoby', title: 'Právní osobnost a svéprávnost', steps: [
      { h: title('Právní osobnost a svéprávnost', 'Kdo může mít práva a kdo za sebe jedná'), say: 'Právní osobnost a svéprávnost fyzické osoby.' },
      ...reveal('Způsobilosti fyzické osoby', [
        ['<b>právní osobnost</b> – mít práva a povinnosti, od narození do smrti', 'Právní osobnost je způsobilost mít práva a povinnosti. Má ji každý člověk od narození do smrti a nelze se jí vzdát.'],
        ['počaté dítě = narozené, je-li to v jeho zájmu a narodí-li se živé', 'Počaté dítě se považuje za narozené, pokud to odpovídá jeho zájmům a narodí se živé.'],
        ['<b>svéprávnost</b> – vlastním jednáním nabývat práv a zavazovat se', 'Svéprávnost je způsobilost vlastním jednáním nabývat práva a zavazovat se.'],
        ['plná od <b>18 let</b> · dříve soudem od 16 let nebo sňatkem', 'Plné svéprávnosti se nabývá v osmnácti letech. Dříve ji lze získat přiznáním soudem od šestnácti let nebo uzavřením manželství.']
      ]),
      ...reveal('Omezení svéprávnosti', [
        ['jen pro <b>vážnou duševní poruchu</b> a hrozbu závažné újmy', 'Svéprávnost může soud omezit jen kvůli vážné duševní poruše, když hrozí závažná újma a mírnější opatření nestačí.'],
        ['soud člověka <b>zhlédne</b> · nejdéle na <b>3 roky</b>', 'Soud musí člověka vidět a omezit ho může nejdéle na tři roky.'],
        ['úplné zbavení svéprávnosti <b>už neexistuje</b>', 'Úplné zbavení svéprávnosti dnes už neexistuje.']
      ])
    ] }
  ],
  'pravni-jednani': [
    { file: '05-1-nalezitosti', at: 'Pojem, náležitosti', title: 'Náležitosti právního jednání', steps: [
      { h: title('Právní jednání', 'Co musí mít, aby platilo'), say: 'Právní jednání a jeho náležitosti.' },
      ...reveal('Náležitosti', [
        ['<b>subjekt</b> – právní osobnost a svéprávnost', 'Právní jednání je vědomý projev vůle. Jednající musí mít právní osobnost a dostatečnou svéprávnost.'],
        ['<b>vůle</b> – svobodná, vážná, bez omylu, ne v tísni', 'Vůle musí být svobodná a vážná, prostá omylu a ne v tísni.'],
        ['<b>projev</b> – určitý, srozumitelný, v předepsané formě', 'Projev vůle musí být určitý, srozumitelný a v předepsané formě.'],
        ['<b>předmět</b> – dovolený a možný', 'A předmět musí být dovolený a možný. Nelze třeba prodat lidské orgány.']
      ]),
      ...reveal('Jak lze jednat', [
        ['<b>konáním</b> i <b>opomenutím</b>', 'Jednat lze konáním i opomenutím,'],
        ['<b>výslovně</b> – ústně, písemně', 'výslovně, tedy ústně nebo písemně,'],
        ['<b>konkludentně</b> – kývnutí, nástup do tramvaje', 'nebo konkludentně, mlčky, třeba kývnutím hlavy nebo nástupem do tramvaje.']
      ]),
      { h: list('Forma', ['formu si zpravidla <b>volíme sami</b>', 'písemně vždy <b>věcná práva k nemovitostem</b>', 'písemná forma vyžaduje <b>podpis</b>'], 3, false), say: 'Formu si zpravidla volíme sami. Písemně ale musí být například zřízení nebo převod věcného práva k nemovitosti. A písemná forma vyžaduje podpis jednajícího.' }
    ] },
    { file: '05-2-neplatnost', at: 'Neplatnost: absolutní', title: 'Zdánlivé a neplatné jednání', steps: [
      { h: title('Zdánlivost a neplatnost', 'Jak vážná je vada'), say: 'Zdánlivé a neplatné právní jednání.' },
      { h: diagram('Zdánlivé, neplatné, nebo platné?', ZPN.defectsDiagram()), say: 'Nejdřív se ptáme, jestli jednání vůbec vzniklo. Když chybí vůle, vážnost nebo určitost, je jednání jen zdánlivé a nepřihlíží se k němu. Pokud vzniklo, ptáme se, jestli má vadu, a zákon dává přednost platnosti. Vada, která zjevně odporuje dobrým mravům nebo veřejnému pořádku, způsobí absolutní neplatnost. Ostatní vady vedou k neplatnosti relativní.' },
      { h: `<h2>Absolutní × relativní</h2>${tt(['', 'Absolutní', 'Relativní'], [['kdo namítne', 'kdokoli, soud sám', 'jen chráněná osoba'], ['lhůta', 'žádná', 'promlčecí doba'], ['nikdo nenamítne', 'neplatí', 'platí']])}`, say: 'Absolutní neplatnosti si soud všimne sám a namítnout ji může kdokoli, bez lhůty. Relativní neplatnosti se musí dovolat chráněná osoba, a to v promlčecí době. Když to neudělá, jednání platí.' },
      { h: list('Pozor', ['po dovolání je jednání neplatné <b>od počátku</b> (ex tunc)', 'zdánlivé ≠ absolutně neplatné – zdánlivé <b>vůbec nevzniklo</b>'], 2, false), say: 'Pozor: když se chráněná osoba neplatnosti dovolá, je jednání neplatné od počátku. A zdánlivé jednání není totéž co absolutně neplatné. Zdánlivé jednání vůbec nevzniklo.' }
    ] },
    { file: '05-3-konverze-odpurci-zaloba', at: 'Následky neplatnosti', title: 'Konverze, konvalidace a odpůrčí žaloba', steps: [
      { h: title('Záchrana a obrana', 'Konverze, konvalidace, ratihabice a odpůrčí žaloba'), say: 'Jak se dá vadné jednání zachránit a jak se věřitel brání proti dlužníkovi.' },
      ...reveal('Záchrana jednání', [
        ['<b>konverze</b> – platí jako jiné jednání, jehož náležitosti má', 'Konverze: neplatné jednání, které má náležitosti jiného platného jednání, platí jako toto jiné jednání.'],
        ['<b>konvalidace</b> – důvod neplatnosti odpadne', 'Konvalidace: důvod neplatnosti dodatečně odpadne a jednání je platné.'],
        ['<b>ratihabice</b> – dodatečné schválení', 'Ratihabice: jednání dodatečně schválí ten, koho se týká, třeba když zástupce překročil oprávnění.']
      ]),
      ...reveal('Odpůrčí žaloba', [
        ['Karel dluží Evě 500 000 Kč a <b>daruje majetek bratrovi</b>', 'Příklad: Karel dluží Evě pět set tisíc korun. Aby unikl exekuci, daruje majetek bratrovi.'],
        ['darování je mezi nimi <b>platné</b>', 'Darování je mezi Karlem a bratrem platné.'],
        ['Eva podá <b>odpůrčí žalobu</b> → vůči ní je jednání <b>neúčinné</b>', 'Eva ale může podat odpůrčí žalobu. Soud určí, že darování je vůči ní neúčinné, a Eva se může z daného majetku uspokojit.']
      ])
    ] }
  ],
  'cas-promlceni': [
    { file: '06-1-pocitani-lhut', at: 'Počítání času', title: 'Počítání lhůt', steps: [
      { h: title('Počítání lhůt', 'Paragrafy 605 až 608 občanského zákoníku'), say: 'Jak počítat lhůty podle občanského zákoníku.' },
      ...reveal('Pravidla', [
        ['lhůta ve dnech začíná <b>dnem následujícím</b>', 'Lhůta určená ve dnech začíná dnem, který následuje po rozhodné události.'],
        ['týdny, měsíce, roky: konec ve <b>stejně označený den</b>', 'Lhůta v týdnech, měsících nebo letech končí dnem, který se shoduje pojmenováním nebo číslem.'],
        ['takový den není → <b>poslední den měsíce</b>', 'Když takový den v měsíci není, připadne konec na poslední den měsíce.'],
        ['sobota, neděle, svátek → <b>nejbližší pracovní den</b>', 'A když konec připadne na sobotu, neděli nebo svátek, posune se na nejbližší následující pracovní den.']
      ]),
      { h: diagram('Příklad ze cvičení', ZPN.calendarDiagram()), say: 'Příklad ze cvičení: lhůta osm dnů, jejíž první den je dvacátého prvního října dva tisíce dvacet čtyři. Osmý den je dvacátého osmého října, a to je státní svátek. Lhůta proto končí v úterý dvacátého devátého října.' },
      ...reveal('Další příklady', [
        ['1 měsíc od 31. 3. → <b>30. 4.</b>', 'Lhůta jeden měsíc od třicátého prvního března skončí třicátého dubna, protože duben třicátý první den nemá.'],
        ['13 měsíců od 31. 1. 2024 → <b>pátek 28. 2. 2025</b>', 'Doba třináct měsíců od třicátého prvního ledna dva tisíce dvacet čtyři skončí dvacátého osmého února dva tisíce dvacet pět.'],
        ['48 hodin od 5. 3. 14:30 → <b>7. 3. 14:30</b>', 'Lhůta v hodinách běží od okamžiku do okamžiku. Čtyřicet osm hodin od pátého března ve čtrnáct třicet skončí sedmého března ve čtrnáct třicet.']
      ])
    ] },
    { file: '06-2-promlceni-prekluze', at: 'Promlčení (§ 609', title: 'Promlčení a prekluze', steps: [
      { h: title('Promlčení a prekluze', 'Co se stane, když s uplatněním práva otálíš'), say: 'Promlčení a prekluze.' },
      ...reveal('Promlčení', [
        ['právo <b>nezaniká</b> – jen ho nelze vymoci, když dlužník namítne', 'Uplynutím promlčecí doby právo nezaniká. Jen ho nelze vymoci, pokud dlužník promlčení namítne.'],
        ['obecně <b>3 roky</b> · objektivně <b>10 let</b>', 'Obecná promlčecí doba je tři roky, objektivní doba deset let.'],
        ['ujednat lze <b>1 až 15 let</b>', 'Strany si mohou ujednat dobu od jednoho do patnácti let.'],
        ['nepromlčuje se např. <b>vlastnické právo</b>', 'Nepromlčuje se například vlastnické právo.']
      ]),
      { h: diagram('Promlčení × prekluze', ZPN.promlceniDiagram()), say: 'U promlčení právo trvá jako naturální obligace a soud k promlčení přihlédne jen na námitku. Prekluzí právo úplně zanikne a soud k tomu přihlédne sám. Co dlužník zaplatí po promlčení, nemůže chtít zpět. Plnění po prekluzi je bezdůvodné obohacení a vrací se.' },
      ...reveal('Příklad', [
        ['půjčka splatná <b>15. 5. 2022</b>', 'Příklad: půjčka byla splatná patnáctého května dva tisíce dvacet dva.'],
        ['promlčecí doba končí <b>čtvrtek 15. 5. 2025</b>', 'Tříletá promlčecí doba skončí patnáctého května dva tisíce dvacet pět.'],
        ['žaloba 20. 5. 2025 + námitka dlužníka → <b>zamítnuto</b>', 'Když věřitel žaluje až dvacátého května a dlužník promlčení namítne, soud žalobu zamítne. Když nenamítne, soud věřiteli vyhoví.']
      ])
    ] }
  ],
  'obcanske-pravo': [
    { file: '07-1-noz', at: 'Cíle, struktura', title: 'Nový občanský zákoník', steps: [
      { h: title('Občanský zákoník', 'Struktura a rekodifikace'), say: 'Nový občanský zákoník.' },
      ...reveal('NOZ', [
        ['zákon <b>89/2012 Sb.</b>, účinný od <b>1. 1. 2014</b>', 'Nový občanský zákoník je zákon číslo osmdesát devět z roku dva tisíce dvanáct. Účinný je od prvního ledna dva tisíce čtrnáct.'],
        ['sjednotil občanské, rodinné i obchodní právo', 'Sjednotil soukromé právo, tedy občanské, rodinné i obchodní právo, do jednoho kodexu.'],
        ['spolu s ním <b>90/2012</b> (obchodní korporace) a <b>91/2012</b> (mezinárodní právo soukromé)', 'Současně byl přijat zákon o obchodních korporacích a zákon o mezinárodním právu soukromém.']
      ]),
      { h: diagram('Pět částí NOZ', ZPN.nozBar()), say: 'Zákoník má tři tisíce osmdesát jedna paragrafů v pěti částech: obecnou část, rodinné právo, absolutní majetková práva, tedy věcná a dědická, relativní majetková práva, tedy závazky, a nakonec ustanovení společná, přechodná a závěrečná.' },
      { h: list('Pozor', ['<b>dědické právo</b> patří do 3. části – absolutní majetková práva'], 1, false), say: 'Pozor: dědické právo patří do třetí části mezi absolutní majetková práva, ne mezi relativní.' }
    ] },
    { file: '07-2-zasady', at: 'Zásady soukromého práva', title: 'Zásady soukromého práva', steps: [
      { h: title('Zásady soukromého práva', 'Paragrafy 1 až 9 občanského zákoníku'), say: 'Zásady soukromého práva.' },
      ...reveal('Zásady', [
        ['<b>autonomie vůle</b> – lze se odchýlit, nezakazuje-li to zákon', 'Základem je autonomie vůle. Strany si mohou ujednat práva a povinnosti odchylně od zákona, pokud to zákon výslovně nezakazuje.'],
        ['nesmí porušit <b>dobré mravy, veřejný pořádek, postavení osob</b>', 'Nesmí ale porušit dobré mravy, veřejný pořádek a právo týkající se postavení osob.'],
        ['<b>poctivost a dobrá víra</b> · zákaz zneužití práva', 'Dále platí poctivost, dobrá víra, která se předpokládá, a zákaz zneužití práva.'],
        ['<b>ochrana slabší strany</b> · <b>pacta sunt servanda</b>', 'Zákon chrání slabší stranu, třeba spotřebitele, a smlouvy se mají dodržovat.']
      ]),
      { h: diagram('Pořadí pravidel', ZPN.rulesOrder()), say: 'Pořadí pravidel: nejdřív platí dohoda stran. Pokud chybí, použije se dispozitivní ustanovení zákona. Kogentní normy a dobré mravy platí vždy.' },
      ...reveal('Měřítka', [
        ['§ 4: <b>průměrný člověk</b> – běžná péče a opatrnost', 'Každého svéprávného člověka posuzujeme podle rozumu průměrného člověka.'],
        ['§ 5: <b>odborník</b> – znalost a pečlivost povolání', 'Kdo se hlásí k odbornému výkonu, musí jednat se znalostí a pečlivostí, které jeho povolání vyžaduje.']
      ])
    ] },
    { file: '07-3-vlastnictvi', at: 'Vlastnictví a jeho nabytí', title: 'Vlastnictví a jeho ochrana', steps: [
      { h: title('Vlastnictví', 'Co smí vlastník, jak se vlastnictví nabývá a chrání'), say: 'Vlastnické právo.' },
      ...reveal('Vlastník smí', [
        ['<b>držet</b> a <b>užívat</b> věc', 'Vlastnické právo je nejširší věcné právo. Vlastník smí věc držet a užívat,'],
        ['<b>požívat</b> plody a užitky', 'brát z ní plody a užitky,'],
        ['<b>nakládat</b> s ní – prodat, darovat, zatížit', 'nakládat s ní, tedy prodat, darovat nebo zatížit,'],
        ['<b>vyloučit</b> kohokoli jiného', 'a vyloučit kohokoli jiného. Vlastnické právo se nepromlčuje.']
      ]),
      ...reveal('Nabytí', [
        ['<b>originární</b> – přivlastnění, nález, vydržení…', 'Vlastnictví lze nabýt původně, třeba přivlastněním nebo vydržením.'],
        ['vydržení: movitá věc <b>3 roky</b>, nemovitá <b>10 let</b>', 'Movitou věc lze vydržet za tři roky, nemovitou za deset let.'],
        ['<b>odvozené</b> – smlouva + předání, u nemovitosti <b>zápis do katastru</b>', 'Odvozeně se nabývá například smlouvou. Movitá věc přechází předáním, nemovitá zápisem do katastru.']
      ]),
      ...reveal('Ochrana', [
        ['věc neprávem zadržena → <b>vlastnická (vindikační) žaloba</b>', 'Když ti někdo věc neprávem zadržuje, podáš vlastnickou, takzvanou vindikační žalobu na vydání věci.'],
        ['jiné rušení → <b>negatorní žaloba</b>', 'Když tě ruší jinak, třeba parkuje na tvém pozemku, bráníš se negatorní žalobou.']
      ])
    ] }
  ]
};
