registerTopic({
  id: 'motivace', order: 7, icon: '🔥', title: 'Motivace pracovníků', src: 'podklady',
  where: 'Přednáška 6 + Cvičení 5 + Dovednosti v řízení kap. 5.3 + test Pracovní motivace',
  summary: 'Vnitřní a vnější motivace, Maslow, stimuly hmotné, sociální a morální, přímá a nepřímá motivace, osm motivačních pravidel, motivační teorie a test pracovní motivace.',
  vocab: [
    { w: 'Motivace', x: 'Vnitřní hnací síla, která usměrňuje lidské chování; touha dosáhnout žádoucího cíle, uspokojovat nenaplněné potřeby. Jedním slovem: „CHTÍT“.' },
    { w: 'Motiv', x: 'Specifická vnitřní podmínka, která vzbuzuje a udržuje aktivitu a orientuje ji k cíli (potřeby, city, zájmy, ideály, hodnoty, postoje…).' },
    { w: 'Motivování', x: 'Úsilí jednoho člověka vytvořit u jiného motivaci pro požadované chování.' },
    { w: 'Stimul', x: 'Vnější podnět (nezávislá proměnná), jímž ŘP motivuje: hmotný, sociální, morální.' },
    { w: 'HZI', x: 'Hmotná zainteresovanost (mzda, prémie, odměna).' },
    { w: 'Fluktuace', x: 'Odchody zaměstnanců z podniku – důsledek špatné motivace k setrvání, zvyšuje náklady.' }
  ],
  key: [
    '<b>Vnitřní motivace je silnější a trvalejší než vnější</b> (stimuly).',
    'Stimuly: <b>hmotné</b> (mzda, prémie, odměna), <b>sociální</b> (status, volná doba, auto), <b>morální</b> (pochvala, kritika, soutěž).',
    '<b>Přímo</b> lze motivovat jen přímo podřízené („kam dohlédnu“), ostatní <b>nepřímo</b> přes motivační systém.',
    'Dva cíle motivace: <b>k pracovnímu výkonu</b> a <b>k setrvání v podniku</b>.',
    'Herzberg: <b>hygienické faktory</b> (jejich absence vadí, přítomnost nemotivuje) × <b>motivační faktory</b> (motivují k výkonu).'
  ],
  sections: [
    { title: 'Co je motivace', blocks: [
      { t: 'def', term: 'Motivace', x: 'Soubor činitelů – vnitřních hnacích sil, které usměrňují lidské chování a prožívání. Představuje touhu člověka dosáhnout žádoucího cíle; je to proces, který ovlivňuje chování v různých situacích. <b>Vnitřní motivace je silnější a trvalejší než vnější.</b>' },
      { t: 'p', x: 'Pracovní motivace je v podstatě <b>umění vedoucího vzbudit u spolupracovníků zájem, ochotu a chuť aktivně se účastnit plnění všech činností směřujících ke stanovenému cíli</b>. „Zapalovat může jen ten, kdo sám hoří“ – motivující ŘP musí být sám motivován.' },
      { t: 'pyramid', title: 'Maslowova hierarchie potřeb (dnešní pojetí, shora dolů)', levels: [
        { h: 'Sebetranscendence', x: 'něco, co přesahuje jedince' },
        { h: 'Seberealizace' },
        { h: 'Estetické potřeby' },
        { h: 'Poznávací potřeby', x: 'znalosti, smysl, sebeuvědomění' },
        { h: 'Potřeby úcty a uznání', x: 'sebeúcta, nezávislost, prestiž' },
        { h: 'Sociální potřeby', x: 'příslušnost ke skupině, láska' },
        { h: 'Potřeby jistoty a bezpečí', x: 'pořádek, zákon, bezpečí' },
        { h: 'Biologické a fyziologické potřeby', x: 'jídlo, spánek, pití' }
      ] },
      { t: 'tip', x: 'Skripta pracují s klasickou pětistupňovou verzí: dolní tři jsou <b>D-potřeby</b> (deficiency – nedostatkové: fyziologické, bezpečí, sounáležitost), horní dvě <b>B-potřeby</b> (being – úcta/uznání, seberealizace). Hladový člověk velké pracovní výsledky nepodá. Pro motivování pracovníků jsou nejdůležitější potřeby uznání, úcty a seberealizace.' },
      { t: 'p', x: 'Uspokojená potřeba motivační potenciál rychle ztrácí, nenaplněná motivuje silně. Motivátor má využívat především ty potřeby, které podřízený nemá naplněny (mladý pracovník s hypotékou ocení spíš peníze, starší kolega spíš pochvalu a zajímavý úkol).' }
    ] },
    { title: 'Motivace a organizační systém', blocks: [
      { t: 'p', x: 'Nejdůležitější momenty řízení: <b>1. vědět, co máme dělat, 2. motivovat lidi, aby to s námi chtěli dělat, 3. správně rozhodovat</b>. Správně motivovaný řídící subsystém je jednou z hlavních podmínek úspěšnosti podniku.' },
      { t: 'table', head: ['Subsystém', 'Jak motivace působí'], rows: [
        ['OSS', 'špatná organizace demotivuje'],
        ['PS1', 'nekvalitní, neprodejná produkce demotivuje'],
        ['TS1', 'špatně zvolená technologie demotivuje'],
        ['EIS', 'nepřímé řízení: samofinancování, motivační systém (silné stimuly); součástí je motivační subsystém MSS (stimuly, hodnocení pracovníků)'],
        ['MOS', 'úspěch na trhu je velmi silný stimul'],
        ['Procesy', 'procesy <b>přímého řízení → přímá motivace</b>; procesy <b>nepřímého řízení → motivační systém</b>']
      ] },
      { t: 'table', head: ['Subsystém ŘSS', 'Co je motivací'], rows: [
        ['Majetkový', 'rozvoj podniku, dividenda, zhodnocení vkladu při prodeji, touha po majetku; chování majitelů ovlivňuje motivaci zaměstnanců (extrém: „tunelování“)'],
        ['Řídících orgánů', 'valná hromada – správný poměr dividenda × rozvoj; představenstvo – realizace závěrů VH, vlastní motivace (problém: větší angažovanost jinde)'],
        ['Přímého řízení', 'motivace ŘP a jimi výkonných pracovníků: k pracovnímu výkonu i k setrvání ve firmě'],
        ['Sociální', 'ŘP i výkonní pracovníci: zvyšování výkonu a setrvání (nepříznivý jev: <b>fluktuace</b>)']
      ] },
      { t: 'versus', title: 'Dva cíle motivace', cols: [
        { h: 'K pracovnímu výkonu', items: ['zvyšuje množství a kvalitu práce', 'více pomáhají prémie, odměny, pochvala, zajímavé úkoly'] },
        { h: 'K setrvání v podniku', items: ['snižuje fluktuaci a náklady', 'více pomáhá základní mzda a benefity (stravenky, příspěvky, 13. plat)'] }
      ], x: 'Dobrý zaměstnanec může být výkonný, ale přesto odejde (vadí mu šéf, nízká základní mzda); jiný zůstane, ale pracuje „na půl plynu“. Řídící pracovník proto potřebuje nástroje na obojí: na výkon spíš stimuly vázané na výsledky, na setrvání jistotu a atmosféru. Benefity (stravenky, 13. plat) výkon skoro nezvyšují, ale tvoří spokojenost a drží lidi ve firmě.' }
    ] },
    { title: 'Stimuly: hmotné, sociální, morální', blocks: [
      { t: 'svg', title: 'Motivační proces', x: TROS.motivace(), cap: 'Stimuly (nezávislé proměnné) působí na determinanty chování motivované osobnosti; působení zesiluje nebo zeslabuje osobnost ŘP, situace (trh, podnik, pracovník) a prostředí (skupina, podnik, společnost).' },
      { t: 'table', head: ['Typ stimulu', 'Příklady', 'Zásady'], rows: [
        ['<b>Hmotné (HZI)</b>', '<b>základní mzda</b> (smluvní, motivuje k setrvání), <b>prémie</b> (pohyblivá, za delší období, např. čtvrtletí, % ze mzdy), <b>odměna</b> (jednorázová za mimořádný počin); benefity', 'vázat na to, co může pracovník ovlivnit; jednoduchá pravidla; včasnost; spravedlnost; automatické stejné prémie ztrácejí účinek'],
        ['<b>Sociální</b>', 'volná pracovní doba, home office, služební auto, mobil s neomezeným tarifem, internet, parkovací místo, velikost kanceláře, veřejné čtvrtletní hodnocení', 'vyjadřují status a postavení v pracovní skupině; „nikdo nechce být poslední“'],
        ['<b>Morální</b>', 'pochvala (veřejná má větší účinek), kritika (výtka), zpětná vazba bezprostředně po činnosti, soutěž s průběžným hodnocením, článek ve firemních novinách, gratulace', '<b>chválit veřejně, kritizovat v soukromí</b>; vázáno přímo na vztah motivátora a motivovaného']
      ] },
      { t: 'ul', items: [
        '<b>Pozitivní motivace</b> (zvýšení mzdy, prémií, odměna, pochvala) × <b>negativní</b> (snížení mzdy, nevyplacení prémií, pokuta, kritika, poslední místo v pořadí).',
        '<b>Přímá</b> motivace = přímý vztah motivátora a motivovaného (ŘP motivuje jen přímé podřízené, „kam dohlédnu“). <b>Nepřímá</b> = přímý vztah nahrazuje motivační systém (pravidla samofinancování, provizní systém, úroveň organizace, kvalita produktů).',
        '<b>Osobnost ŘP (motivátor):</b> vlastní motivace, charakter (dodrží slíbené), odbornost (jeho slovo má váhu); sociální a morální stimuly od člověka, kterého si podřízený váží, mají obrovský účinek.',
        '<b>Situace:</b> příznivý/nepříznivý trh a stav podniku (za dobré situace lze víc hmotných stimulů); <b>prostředí:</b> klima v podniku, právo na omyl podporuje tvořivost.'
      ] },
      { t: 'warn', x: 'Zásadní chyba: o odměnách rozhoduje vyšší stupeň řízení bez znalosti, jak práce probíhala. Při přechodu z malého na střední podnik si majitelé často ponechávají přímé určování odměn, ačkoli už nemohou posoudit množství a kvalitu práce.' }
    ] },
    { title: 'Motivační systém: 8 pravidel', blocks: [
      { t: 'p', x: 'Motivační systém = soubor <b>motivačních pravidel</b>, podle nichž ŘP používají stimuly. Stanovuje je vyšší stupeň řízení. Úkolem je vytvořit systém pro <b>přímou motivaci k setrvání</b> a <b>nepřímou motivaci ke zvýšení výkonu</b> (jak uvádí slajd).' },
      { t: 'ol', items: [
        'Motivaci vázat jen na takové činnosti, které podřízení <b>mohou ovlivnit</b> (vedoucího výroby hodnotit podle produkce, vedoucího obchodu podle tržeb a smluv).',
        'Přímo motivovat jen toho, kdo je vedoucímu <b>přímo podřízen</b> („kam dohlédnu“).',
        'Vyhlášené stimuly se <b>nesmí v průběhu hodnoceného období měnit</b>.',
        'Slíbené stimuly se <b>musí splnit</b>.',
        'Hodnotící období pro prémie je <b>čtvrt roku</b>; jednorázová odměna se vyplatí při nejbližším výplatním termínu.',
        'Pokud lze, zavést <b>samofinancování OJ</b> (rozdělení prostředků v kompetenci vedoucího OJ).',
        'Nejlépe hodnocení pracovníci několikrát po sobě <b>postoupí v hierarchii výš</b> (kariéra = silná vnitřní motivace).',
        'Vedoucí používají <b>hmotné stimuly v kombinaci s nehmotnými</b>.'
      ] }
    ] },
    { title: 'Motivační teorie', blocks: [
      { t: 'table', head: ['Teorie', 'Podstata'], rows: [
        ['<b>Adamsova teorie spravedlnosti</b>', 'motivaci zvyšuje pocit spravedlnosti: odměna je adekvátní výkonu a adekvátní vůči kolegům'],
        ['<b>Alderferova ERG</b>', 'rozšíření Maslowa na tři stupně: <b>E</b>xistence (mzda, jistota), <b>R</b>elatedness (vztahy, uznání), <b>G</b>rowth (seberealizace, růst); neuspokojení růstových potřeb zvyšuje význam vztahových a existenčních'],
        ['<b>Herzbergova dvoufaktorová</b>', '<b>hygienické</b> faktory (nenaplnění → nespokojenost, naplnění nemotivuje: např. pravidelné prémie) × <b>motivační</b> faktory (naplnění motivuje k vyššímu výkonu dlouhodobě, nenaplnění nutně nevyvolá nespokojenost: pochvala)'],
        ['<b>Maslowova pyramida</b>', 'hierarchie potřeb; nejdřív se odstraňují D-potřeby, pak B-potřeby'],
        ['<b>McClellandova teorie získaných potřeb</b>', 'tři potřeby: <b>dosažení úspěchu</b>, <b>moci</b>, <b>sounáležitosti</b>; každý má všechny, převládá jedna – motivátor má znát dominantní'],
        ['<b>McGregorova teorie X a Y</b>', 'X: člověk je od přírody líný, vyhýbá se odpovědnosti, nutná kontrola a vnější stimuly; Y: je aktivní, vyhledává odpovědnost, sebekázeň, tvořivost. Úkolem ŘP je, aby převládlo Y'],
        ['<b>Skinnerova teorie zesílení</b>', 'chování řídí důsledky: odměna posiluje pozitivní chování, trest oslabuje negativní, bez odměny/trestu chování vyhasíná; odměnu co nejdřív'],
        ['<b>Vroomova teorie očekávání</b>', 'úsilí závisí na: atraktivnosti cíle (valence), přesvědčení o dosažitelnosti odměny (instrumentalita), přesvědčení o reálnosti dosažení cíle (expectancy)'],
        ['<b>Teorie psychologického zmocnění</b>', 'spoluúčast na řízení a rozhodování: větší samostatnost, pravomoc a odpovědnost OJ/skupině/jednotlivci, s ekonomickou samostatností (samofinancující OJ). Podmínka: kvalita OJ a důvěra v ni']
      ] },
      { t: 'versus', title: 'Herzberg: hygienické × motivační faktory', cols: [
        { h: 'Hygienické', items: ['nenaplnění → pracovní nespokojenost', 'naplnění pocit spokojenosti nevyvolá – pracovník je bere jako samozřejmé, účinek rychle vyprchá', 'příklad: nevyplacené pravidelné prémie rozzlobí, vyplácené ve stejné výši nemotivují'] },
        { h: 'Motivační', items: ['naplnění je podmínkou motivace k vyšším výkonům', 'účinek je dlouhodobý', 'nenaplnění nutně nevyvolá nespokojenost', 'příklad: udělená pochvala'] }
      ], x: 'Hygiena: když v práci chybí teplá voda, všichni se zlobí, ale teplá voda sama nikoho k výkonu nepohání. Naopak pochvala za dobrý nápad motivuje, i když by se bez ní nic nestalo. Řídící pracovník má nejdřív zajistit hygienické faktory a pak je doplnit motivačními.' },
      { t: 'p', x: '<b>Výhody zmocnění</b>' },
      { t: 'ul', items: [
        'zmocnění pracovníci se učí rozhodovat a profesně se rozvíjejí;',
        'vedoucí si uvolní ruce a ponechá si jen zásadní rozhodnutí;',
        'zmocnění motivuje – větší volnost obohacuje práci;',
        'rozhodovací hierarchie je flexibilnější; rozhodnutí jsou rychlejší, na místě a se znalostí věci (problémy se mají řešit tam, kde vznikají).'
      ] },
      { t: 'tip', x: 'Teorie jsou základ – ŘP musí lidi skutečně motivovat. V praxi je vhodnější slovo <b>spoluúčast</b> (na rozhodování, odpovědnosti, výsledku).' }
    ] },
    { title: 'Test pracovní motivace', blocks: [
      { t: 'p', x: 'Test má <b>28 dvojic tvrzení</b>; u každé dvojice rozdělíte <b>5 bodů</b> (5–0, 4–1, 3–2, …; bez půlbodů) podle důležitosti. Pod každým tvrzením je písmeno kategorie. Body sečtete po sloupcích (písmenech) – <b>celkem musí vyjít 140</b>. Vyplňuje se rychle a spontánně.' },
      { t: 'table', head: ['Písmeno', 'Oblast motivace'], rows: [
        ['A', 'Finanční motivace'], ['B', 'Uznání a pochvala'], ['C', 'Zodpovědnost'], ['D', 'Vztahy se svým vedoucím'],
        ['E', 'Pracovní postup (povýšení)'], ['F', 'Úspěch v práci'], ['H', 'Pracovní náplň (zajímavá práce)'], ['I', 'Spolupráce s jinými (kolegy)']
      ] },
      { t: 'tip', x: 'Výsledek lze znázornit i jako kruhový graf, kde 100 % = 140 bodů. Čím vyšší hodnota, tím silněji vás daná oblast motivuje. Písmeno G se v testu nepoužívá – kategorií je osm.' }
    ] }
  ],
  mistakes: [
    'Tvrdit, že hmotné stimuly jsou nejsilnější a stačí – vnitřní motivace je silnější a trvalejší.',
    'Zaměnit <b>sociální</b> stimuly (status ve skupině: auto, kancelář) a <b>morální</b> (pochvala, kritika; vztah s vedoucím).',
    'Zaměnit u Herzberga hygienické a motivační faktory.',
    'Motivovat přímo podřízené svých podřízených – přímo lze jen toho, „kam dohlédnu“.',
    'Měnit stimuly v průběhu hodnoceného období nebo slíbené nesplnit.'
  ],
  qa: [
    { q: 'Co je motivace a motiv?', a: 'Motivace je soubor vnitřních hnacích sil usměrňujících chování, touha dosáhnout žádoucího cíle („chtít“). Motivy jsou specifické vnitřní podmínky (potřeby, city, zájmy, hodnoty, postoje), které vzbuzují a udržují aktivitu k cíli. Vnitřní motivace je silnější a trvalejší než vnější.' },
    { q: 'Popište Maslowovu pyramidu potřeb.', a: 'Od základu: biologické/fyziologické, jistota a bezpečí, sociální (sounáležitost), úcta a uznání, poznávací, estetické, seberealizace a nově sebetranscendence. Dolní jsou D-potřeby (nedostatkové), horní B-potřeby; nejdřív se uspokojují nižší. Pro motivování pracovníků jsou nejdůležitější úcta, uznání a seberealizace.' },
    { q: 'Jaké stimuly ŘP používá a jak se liší?', a: 'Hmotné (mzda: základní, prémie, odměna; benefity), sociální (status ve skupině: volná doba, auto, parkování, kancelář) a morální (pochvala, kritika, soutěž, zpětná vazba). Chválit veřejně, kritizovat v soukromí.' },
    { q: 'Rozdíl mezi přímou a nepřímou motivací?', a: 'Přímá: motivátor a motivovaný jsou v přímém vztahu, ŘP motivuje jen přímo podřízené. Nepřímá: přímý vztah nahrazuje motivační systém – pravidla (samofinancování, prémie, provize, kariérní postup).' },
    { q: 'Vyjmenujte motivační pravidla.', a: '1 vázat na ovlivnitelné činnosti; 2 přímo jen přímé podřízené; 3 stimuly se v období neměnit; 4 slíbené splnit; 5 hodnotící období čtvrt roku, odměny rychle; 6 samofinancování OJ; 7 nejlepší postupují výš; 8 hmotné stimuly kombinovat s nehmotnými.' },
    { q: 'Vysvětlete Herzbergovu teorii dvou faktorů.', a: 'Hygienické faktory: jejich nenaplnění vyvolá nespokojenost, ale naplnění nemotivuje (např. pravidelné prémie). Motivační faktory: jejich naplnění motivuje k vyššímu výkonu dlouhodobě, nenaplnění nutně nevyvolá nespokojenost (pochvala).' },
    { q: 'Jaký je rozdíl mezi motivací k výkonu a k setrvání v podniku?', a: 'K výkonu: stimuly vázané na výsledky (prémie, odměny, pochvala, zajímavé úkoly). K setrvání: jistota, základní mzda, benefity, atmosféra; jejich selhání vede k fluktuaci, která zvyšuje náklady.' },
    { q: 'Charakterizujte teorii X a Y, Vroomovu teorii a teorii zmocnění.', a: 'X: člověk je líný, nutná kontrola a vnější stimuly; Y: aktivní, hledá odpovědnost. Vroom: motivace = atraktivita cíle × vnímaná dosažitelnost × jistota odměny. Zmocnění: větší pravomoc a odpovědnost OJ/jednotlivci, spoluúčast na rozhodování; výhody: rozvoj, rychlost, motivace.' },
    { q: 'Co je cílem testu pracovní motivace?', a: 'Analyzovat, které oblasti vás nejvíc motivují: finance, uznání, zodpovědnost, vztahy s vedoucím, postup, úspěch, pracovní náplň, spolupráce. 28 dvojic × 5 bodů = 140 bodů celkem.' }
  ]
});
