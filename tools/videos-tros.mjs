// Scénáře videí Teorie řízení organizačních systémů – spouští se přes: node tools/video.mjs tros [filtr]
// Fakta jen z textu témat (tros/topics); komentář je psán foneticky (bez zkratek a symbolů).
import { loadDiagrams, title, list, diagram, reveal, tt, big } from './video-lib.mjs';

export const CODE = 'TŘOS';
const T = loadDiagrams('tros', 'TROS');

// self-check čísel použitých v komentářích
const near = (a, b) => Math.abs(a - b) < 1e-3;
if (!near(0.95 * 0.90 * 0.85, 0.72675) || !near(1 - 0.08 * 0.13, 0.9896) || !near(0.95 * 0.9896 * 0.9992, 0.9394)) throw new Error('spolehlivost');
if (!near(0.2 + 2 * 0.1 + 0.2 + 2 * 0.1 + 3 * 0.2 / 3, 1)) throw new Error('kompetence');
if (37 !== [4, 3, 6, 6, 8, 6, 4].reduce((a, b) => a + b) || 42 !== [6, 4, 8, 8, 10, 2, 4].reduce((a, b) => a + b)) throw new Error('řídící kapacita');
if (!near(0.9 ** 3, 0.729) || !near(0.9 ** 4, 0.6561) || 14 * 1.5 !== 21 || Math.round(120 / (1 - 1.2 * 0.1)) !== 136) throw new Error('příklady');

export const VIDEOS = {
  'o-predmetu': [
    { file: '00-1-zkouska', at: 'Zápočet a zkouška', title: 'Zápočet, zkouška a státnice', steps: [
      { h: title('Zápočet a zkouška', 'Co po vás budou chtít'), say: 'Zápočet a zkouška. Co po vás budou chtít.' },
      ...reveal('Cesta ke zkoušce', [
        ['<b>Zápočet</b> – docházka na cvičení, rozhoduje cvičící', 'Zápočet získáte docházkou na šest cvičení. O zápočtu rozhoduje plně cvičící.'],
        ['<b>Písemný test</b> – řádný a první opravný termín', 'Zkouška je písemný test v řádném a prvním opravném termínu.'],
        ['<b>Ústní dozkoušení</b> – možné po testu', 'Po testu může následovat ústní dozkoušení.'],
        ['<b>Druhý opravný termín</b> – celý ústně', 'Druhý opravný termín se koná celý ústně.']
      ]),
      { h: list('Látka se vrací u státnic', ['komplexní předmět <b>Základy řízení</b>', 'u informatiky <b>Ekonomie a řízení</b>', 'okruhy: proces řízení, organizační systém, struktury, styly, motivace, komunikace'], 3, false), say: 'Látka se vrací u státních závěrečných zkoušek v komplexním předmětu Základy řízení, u informatiky v předmětu Ekonomie a řízení. Okruhy jsou proces řízení, organizační systém, struktury, styly řízení, motivace a komunikace.' }
    ] }
  ],
  rizeni: [
    { file: '01-1-co-je-rizeni', at: 'Co je řízení', title: 'Co je řízení', steps: [
      { h: title('Co je řízení', 'Definice, věda a umění'), say: 'Co je řízení. Definice, věda a umění.' },
      { h: `<h2>Definice</h2><div class="big" style="font-size:38px;font-family:inherit">„Řízení je dosahování cílů<br>prostřednictvím jiných lidí.“</div><p class="sub" style="text-align:center">S. M. Silverstein</p>`, say: 'Řízení je dosahování cílů prostřednictvím jiných lidí. Je to cílevědomá činnost, která je objektivně nutná, protože tam, kde se práce dělí, musí někdo činnosti organizovat, koordinovat a kontrolovat.' },
      ...reveal('Tři podmínky řízení lidí', [
        ['řídící systém je <b>schopen</b> informaci vyslat', 'Aby řízení proběhlo, musí být řídící systém schopen informaci vyslat, tedy srozumitelně zadat úkol.'],
        ['řízený systém je <b>schopen</b> informaci přijmout', 'Řízený systém musí být schopen informaci přijmout, tedy jí rozumět a mít na ni kapacitu.'],
        ['řízený systém je <b>ochoten</b> informaci přijmout', 'A musí být ochoten ji přijmout. Tady vstupuje do hry motivace.']
      ]),
      { h: list('Úspěšně řídit znamená', ['<b>znát</b>', 'mít <b>pravomoc</b>', '<b>chtít</b>', '<b>stačit</b>'], 4, false), say: 'Úspěšně řídit znamená znát, mít pravomoc, chtít a stačit.' },
      ...reveal('Věda a umění', [
        ['<b>Věda</b> – organizované znalosti, teorie řízení', 'Řízení je věda, protože má organizované znalosti a teorii.'],
        ['<b>Umění</b> – praxe, schopnost naučené využít', 'A je to umění, protože podstatou znalosti je podle Konfucia schopnost naučené věci využít.'],
        ['<b>Kybernetika</b> – věda o řízení a sdělování (Wiener)', 'Obecné zákonitosti řízení studuje kybernetika. Je to podle Norberta Wienera věda o řízení a sdělování v živých organismech a strojích.']
      ])
    ] },
    { file: '01-2-informacni-pusobeni', at: 'Řízení jako informační působení', title: 'Ovládání, řízení a regulace', steps: [
      { h: title('Informační působení', 'Ovládání, řízení a regulace'), say: 'Informační působení. Ovládání, řízení a regulace.' },
      { h: diagram('Ovládání', T.ovladani()), say: 'Ovládání je nejjednodušší typ. Subjekt má svůj program, vydá ovládací příkazy a objekt je provede. Výsledek se ale nekontroluje. Příkladem je velitel, který nařídí četě potichu ustoupit.' },
      { h: diagram('Řízení', T.rizeni()), say: 'Řízení přidává kontrolu. Informace o splnění příkazu a o odchylkách se vrací zpět k subjektu řízení. Tomu se říká přímá zpětná vazba. Každý ze dvou systémů má navíc svou vlastní zpětnou vazbu.' },
      { h: diagram('Regulace', T.regulace()), say: 'Při regulaci je mezi subjekt a objekt vložen regulátor. Sleduje odchylky a udržuje požadované stavy. Subjekt kontroluje jen správnost nastavení, tedy provádí kalibraci. Typickým příkladem je termostat v líhni kuřat.' },
      { h: list('Shrnutí', ['ovládání – <b>bez</b> kontroly výsledku', 'řízení – kontrola = <b>přímá zpětná vazba</b>', 'regulace – <b>regulátor</b> mezi subjektem a objektem'], 3, false), say: 'Ovládání nemá kontrolu výsledku, řízení má přímou zpětnou vazbu a regulace využívá regulátor mezi subjektem a objektem.' }
    ] }
  ],
  'proces-rizeni': [
    { file: '02-1-faze-stadia', at: 'Proces řízení: fáze', title: 'Fáze a stádia procesu řízení', steps: [
      { h: title('Proces řízení', 'Fáze a stádia cyklu'), say: 'Proces řízení. Fáze a stádia cyklu.' },
      { h: `<h2>Proces řízení</h2><div class="big" style="font-size:36px;font-family:inherit">informační působení<br>realizované <span class="ac">v čase</span></div><p class="sub" style="text-align:center">nikdy nekončící – zajišťuje dynamickou rovnováhu</p>`, say: 'Proces řízení je informační působení realizované v čase. Protože se okolí podniku neustále mění, je to proces nikdy nekončící. Jeho úkolem je zajišťovat dynamickou rovnováhu organizačního systému.' },
      ...reveal('Časové hledisko: fáze', [
        ['<b>Plánování</b> – dlouhodobé cíle', 'Časové hledisko tvoří tři fáze. Nejdřív plánování, kde stanovujeme cíle.'],
        ['<b>Organizování</b> – přiřazení zdrojů, vznik jednotek', 'Pak organizování, kdy přiřazujeme zdroje a vytváříme organizační jednotky.'],
        ['<b>Operativní řízení</b> – vedení lidí', 'A nakonec operativní řízení, tedy vedení lidí a odstraňování odchylek.']
      ]),
      { h: diagram('Věcné hledisko: stádia cyklu', T.cyklus()), say: 'Věcné hledisko tvoří cyklus se čtyřmi stádii: informace, rozhodování, realizace a kontrola. Kontrola zjistí odchylku, vznikne nová informace a cyklus se opakuje.' },
      { h: list('Klíčová věta', ['v <b>každé</b> fázi proběhne <b>celý</b> cyklus', 'fáze ani stádia nelze oddělit', 'vedení lidí prostupuje všemi fázemi'], 3, false), say: 'V každé fázi proběhne celý cyklus. Fáze ani stádia nelze oddělit. A vedení lidí není samostatná fáze, prostupuje všemi, nejvíc se uplatní v operativním řízení.' }
    ] },
    { file: '02-2-matice', at: 'Matice fází', title: 'Matice jedenáct až třiatřicet', steps: [
      { h: title('Matice polí', 'Fáze krát stádium'), say: 'Matice polí. Fáze krát stádium.' },
      { h: diagram('Integrace časového a věcného hlediska', T.matice()), say: 'Spojením tří fází a tří řádků stádií vznikne matice devíti polí. První číslice je fáze, druhá stádium. Řádky jsou informace, rozhodování a realizace spolu s kontrolou.' },
      ...reveal('Příklad: nový produkt', [
        ['<b>11</b> informace o trhu → varianty plánu', 'Pole jedenáct: získáme informace o trhu a konkurenci a připravíme varianty plánu.'],
        ['<b>12</b> výběr varianty → schválení plánu', 'Pole dvanáct: vybereme a schválíme jednu variantu plánu, často kolektivně.'],
        ['<b>22</b> rozhodnutí o přidělení zdrojů', 'Pole dvacet dva: rozhodneme o přidělení zdrojů.'],
        ['<b>32</b> řešení odchylek od plánu', 'Pole třicet dva: operativně řešíme odchylky od plánu.'],
        ['<b>33</b> kontrola kvality, termínů, množství, nákladů', 'A pole třicet tři: kontrolujeme kvalitu, termíny, množství a náklady. Plánování a organizování dělají vyšší stupně, operativní řízení nižší.']
      ])
    ] }
  ],
  system: [
    { file: '03-1-system', at: 'Pojem systém', title: 'Systém a jeho okolí', steps: [
      { h: title('Systém', 'Prvky, vazby a okolí'), say: 'Systém. Prvky, vazby a okolí.' },
      { h: `<h2>Definice</h2><div class="big" style="font-size:36px;font-family:inherit">S = { A, R }</div><p class="sub" style="text-align:center">A = množina prvků · R = množina vazeb</p>`, say: 'Systém je abstrakce reálného objektu, kterou definujeme vzhledem k cíli pomocí prvků a vazeb mezi nimi. Zapisujeme ho jako s rovná se množina a, er, kde a je množina prvků a er množina vazeb.' },
      { h: diagram('Systém a okolí', T.systemOkoli()), say: 'Okolí působí na vstupech podněty, systém na výstupech reaguje. Užší okolí je vždy podstatné, širší je méně významné. Kalendář určuje časové intervaly, repertoár množinu možných akcí a reakcí.' },
      { h: big('Počet vazeb', 'n − 1 &nbsp;až&nbsp; n²', 'u systému s n prvky'), say: 'Systém s en prvky má minimálně en minus jednu vazbu, aby byl propojený, a maximálně en na druhou.' },
      { h: list('Typy vazeb', ['<b>sériové</b> – přímá a nepřímá', '<b>paralelní</b> – rozvodná a svodná', '<b>zpětné</b> – vlastní a přímá'], 3, false), say: 'Vazby jsou otevřené sériové, přímé a nepřímé, otevřené paralelní, rozvodné a svodné, a uzavřené zpětné, vlastní a přímé.' }
    ] },
    { file: '03-2-typologie', at: 'Typologie systémů', title: 'Agregace a typologie systémů', steps: [
      { h: title('Typologie systémů', 'Agregace, integrace a chování'), say: 'Typologie systémů. Agregace, integrace a chování.' },
      { h: diagram('Agregace × desagregace', T.agregace()), say: 'Agregace je slučování prvků a snižuje rozlišovací úroveň. Desagregace je dělení prvků a rozlišovací úroveň zvyšuje. Nejvyšší stupeň agregace je černá skříňka, kde známe jen vstupy a výstupy.' },
      { h: list('Mezi systémy', ['<b>integrace</b> – spojování systémů (fúze, koupě)', '<b>diferenciace</b> – dělení systémů (podle produkce)'], 2, false), say: 'Mezi celými systémy mluvíme o integraci, což je spojování firem, například fúzí, a o diferenciaci, tedy dělení systému například podle produkce.' },
      ...reveal('Podnik jako systém', [
        ['<b>reálný</b>, relativně izolovaný, <b>redukovaný</b>', 'Podnik je systém reálný, relativně izolovaný od okolí a redukovaný, protože zachycuje jen podstatné prvky.'],
        ['<b>velmi složitý</b>', 'Je velmi složitý.'],
        ['<b>stochastický</b> – reakce jen s pravděpodobností', 'Je stochastický, což znamená, že na tentýž podnět reaguje jen s určitou pravděpodobností. Deterministický systém, třeba termostat, reaguje jednoznačně.'],
        ['<b>adaptivní</b>, s <b>cílovým chováním</b>', 'A je adaptivní, protože se přizpůsobuje změnám, a má cílové chování, protože směřuje k předem stanovenému cíli.']
      ])
    ] }
  ],
  'organizacni-system': [
    { file: '04-1-subsystemy', at: 'Subsystémy 1. řádu', title: 'Devět subsystémů prvního řádu', steps: [
      { h: title('Organizační systém', 'Devět subsystémů prvního řádu'), say: 'Organizační systém. Devět subsystémů prvního řádu.' },
      { h: `<h2>Organizační systém</h2><div class="big" style="font-size:34px">OS = [ HP, SP, L ] , [ HE, SV, I ]</div><p class="sub" style="text-align:center">prvky: hmotné · smíšené · lidé &nbsp;|&nbsp; vazby: hmotně-energetické · smíšené · informační</p>`, say: 'Organizační systém je systémové pojetí podniku. Tvoří ho tři typy prvků: hmotné prvky, smíšené prvky a lidé, a tři typy vazeb: hmotně energetické, smíšené a informační.' },
      { h: diagram('Subsystémy prvního řádu', T.subsystemy()), say: 'Na druhé rozlišovací úrovni má podnik devět subsystémů. Dole jsou hmotné prvky: produkční, technologický a technický subsystém. Uprostřed smíšené: ekologicko ergonomický, organizační a ekonomicko informační. Nahoře lidské: pracovní, marketingově obchodní a řídící subsystém.' },
      ...reveal('Fáze řízení a subsystémy', [
        ['<b>Plánování</b> – řídící, ekonomicko-informační, technický', 'Na plánování se podílí řídící subsystém jako subjekt a ekonomicko informační a technický subsystém jako zdroje informací.'],
        ['<b>Organizování</b> – řídící, organizační, produkční', 'Na organizování se podílí řídící, organizační a produkční subsystém.'],
        ['<b>Operativní řízení</b> – řídící, marketingově-obchodní, pracovní', 'Na operativním řízení řídící, marketingově obchodní a pracovní subsystém.']
      ])
    ] },
    { file: '04-2-diagonala', at: 'Hlavní a podpůrné', title: 'Hlavní diagonála', steps: [
      { h: title('Hlavní diagonála', 'Motor podniku'), say: 'Hlavní diagonála. Motor podniku.' },
      ...reveal('Hlavní subsystémy', [
        ['<b>Řídící</b> určuje <b>produkční</b>', 'Hlavní diagonálu tvoří produkční, organizační a řídící subsystém. Řídící subsystém rozhodne, co se bude vyrábět, tedy určuje produkční subsystém.'],
        ['<b>Produkční</b> určuje <b>organizační</b>', 'Produkce vyžaduje organizaci, vznikají organizační jednotky, takže produkční subsystém určuje organizační.'],
        ['<b>Organizační</b> určuje <b>řídící</b>', 'Vedoucí těchto jednotek jsou součástí řídící struktury, takže organizační subsystém určuje řídící. Cyklus se tím uzavírá.']
      ]),
      { h: list('Podpůrné subsystémy', ['převaha <b>lidí</b>: ekologicko-ergonomický, marketingově-obchodní, pracovní', 'převaha <b>hmotných prvků</b>: technologický, ekonomicko-informační, technický', 'pracovní a technický jsou „vzdálené“'], 3, false), say: 'Podpůrné subsystémy s převahou lidského prvku jsou ekologicko ergonomický, marketingově obchodní a pracovní. S převahou hmotných prvků jsou technologický, ekonomicko informační a technický. Pracovní a technický subsystém jsou vzdálené, působí jen nepřímo.' }
    ] },
    { file: '04-3-oblasti-procesy', at: 'Oblasti a procesy', title: 'Oblasti a procesy organizačního systému', steps: [
      { h: title('Oblasti a procesy', 'Řádky a sloupce matice'), say: 'Oblasti a procesy. Řádky a sloupce matice.' },
      { h: diagram('Oblasti (řádky) a procesy (sloupce)', T.oblasti()), say: 'Řádky matice tvoří oblasti, které mají stejné prvky a jiné vazby. Sloupce tvoří procesy, které mají stejné vazby a jiné prvky.' },
      ...reveal('Oblasti', [
        ['<b>Produkčně-technická</b> – proces produkčního řízení', 'Produkčně technická oblast obsahuje hmotné prvky. Probíhá v ní produkční řízení, které je velmi stabilní a skoro deterministické.'],
        ['<b>Organizačně-ekonomická</b> – proces nepřímého řízení', 'V organizačně ekonomické oblasti probíhá nepřímé řízení: plánování a organizování, přidělování zdrojů, ekonomický a motivační systém.'],
        ['<b>Obchodně-řídící</b> – proces přímého řízení', 'V obchodně řídící oblasti probíhá přímé řízení: úkolování, kontrola, delegování a přímá motivace podřízených.']
      ]),
      { h: list('Procesy', ['<b>realizační</b>: produkční, ekologicko-ergonomický, pracovní', '<b>organizační</b>: technologický, organizační, marketingově-obchodní', '<b>informační a rozhodovací</b>: technický, ekonomicko-informační, řídící'], 3, false), say: 'Realizační proces tvoří produkční, ekologicko ergonomický a pracovní subsystém. Organizační proces technologický, organizační a marketingově obchodní. Informační a rozhodovací proces technický, ekonomicko informační a řídící subsystém.' }
    ] }
  ],
  'vlastnosti-subsystemu': [
    { file: '05-1-proporcionalita-stabilita', at: 'Proporcionalita', title: 'Proporcionalita a stabilita', steps: [
      { h: title('Vlastnosti subsystémů', 'Proporcionalita a stabilita'), say: 'Vlastnosti subsystémů. Proporcionalita a stabilita.' },
      { h: list('Proporcionalita', ['organizační systém funguje při <b>vyváženém rozvoji</b>', 'výsledek odpovídá <b>limitnímu</b> subsystému', 'posilovat jen ten <b>nejslabší</b>'], 3, false), say: 'Organizační systém funguje správně jen při vyváženém rozvoji subsystémů. Výsledné chování odpovídá nejslabšímu, limitnímu subsystému. Proto má smysl posilovat jen ten nejslabší. Posílení jiného subsystému celek nezlepší.' },
      { h: list('Příklad limitu', ['dobrá výroba, ale <b>nezvládnutý obchod</b> → limit = obchod', 'dobrý obchod, ale <b>špatná kvalita</b> → limit = technologie', 'o produkt <b>není zájem</b> → špatný produkční subsystém'], 3, false), say: 'Příklad: výroba je v pořádku, ale obchod nezvládáme, limitem je obchod. Když je obchod dobrý, ale neodpovídá kvalita, limitem je technologie. A když o produkt není zájem, je špatný produkční subsystém, což nedožene ani obchod.' },
      { h: diagram('Stabilita subsystémů', T.stabilita()), say: 'Stabilita klesá s podílem lidského prvku. Nejméně stabilní je řídící subsystém. Má nejvyšší hierarchii, nejmenší investice a nejrychlejší reakci na změny. Střední stabilitu mají marketingově obchodní, organizační a ekonomicko informační subsystém. Nejstabilnější jsou hmotné subsystémy, které ale vyžadují vysoké investice a reagují pomalu.' },
      { h: list('Proč je velký podnik pomalý', ['vysoké investice do hmotných prvků', 'vysoká stabilita = <b>pomalá reakce</b>', 'velký podnik: silný, ale nepružný'], 3, false), say: 'Velký podnik má vysoké investice do hmotných prvků, proto je silný, ale pomalý a nepružný.' }
    ] },
    { file: '05-2-kompetence', at: 'Kompetence subsystémů', title: 'Výpočet kompetencí subsystémů', steps: [
      { h: title('Kompetence subsystémů', 'Výpočet krok za krokem'), say: 'Kompetence subsystémů. Výpočet krok za krokem.' },
      { h: big('Vzorec', 'K = PR × SP', 'pravomoc krát sféra působnosti'), say: 'Kompetence subsystému je pravomoc krát sféra působnosti. Měří se číslem od nuly do jedné a součet všech kompetencí má být jedna.' },
      { h: list('Jak se určí PR a SP', ['<b>PR</b> = 1 / počet úrovní = 1 / 5 = 0,2', '<b>SP</b> = 1 / počet subsystémů na úrovni', 'hierarchie klesá se vzdáleností od <b>řídícího</b> subsystému'], 3, false), say: 'Pravomoc je jedna lomeno počet hierarchických úrovní, tedy při pěti úrovních nula celá dvě desetiny. Sféra působnosti je jedna lomeno počet subsystémů na dané úrovni. Hierarchické postavení klesá se vzdáleností od řídícího subsystému.' },
      { h: diagram('Kompetence subsystémů prvního řádu', T.kompetenceGrid()), say: 'Řídící subsystém má kompetenci nula celá dvě desetiny. Marketingově obchodní a ekonomicko informační po jedné desetině. Organizační subsystém zase dvě desetiny. Ekologicko ergonomický a technologický po jedné desetině. A tři vzdálené subsystémy, pracovní, produkční a technický, po šedesáti sedmi tisícinách.' },
      { h: list('Kontrola a výklad', ['součet = <b>1</b> = kompetence celého systému', 'K<sub>cs</sub> &lt; 1 → <b>hluchá místa</b>', 'K<sub>cs</sub> &gt; 1 → <b>překryv</b> kompetencí', 'nejvyšší: řídící a organizační subsystém'], 4, false), say: 'Součet je jedna. Kdyby vyšel menší než jedna, v systému by byla hluchá místa bez kompetencí. Kdyby vyšel větší než jedna, kompetence by se překrývaly. Nejvyšší kompetenci mají řídící a organizační subsystém, protože v organizačním jsou zastoupeni řídící pracovníci a leží v centru systému.' }
    ] },
    { file: '05-3-spolehlivost', at: 'Spolehlivost organizačního', title: 'Spolehlivost organizačního systému', steps: [
      { h: title('Spolehlivost', 'Série a paralela'), say: 'Spolehlivost. Série a paralela.' },
      { h: list('Pojmy', ['<b>p</b> = pravděpodobnost očekávané reakce', '<b>h = 1 − p</b> = nespolehlivost', 'např. linka p = 0,98 → h = 0,02'], 3, false), say: 'Spolehlivost je pravděpodobnost, že systém zareaguje očekávaně. Nespolehlivost je jedna minus spolehlivost. Linka se spolehlivostí devadesát osm setin má nespolehlivost dvě setiny.' },
      { h: big('Sériové spojení', 'p = p₁ · p₂ · p₃', '0,95 · 0,90 · 0,85 = 0,727'), say: 'U sériového spojení se spolehlivosti násobí. Tři technologie za sebou se spolehlivostí devadesát pět, devadesát a osmdesát pět setin dají dohromady jen asi nula celá sedm set dvacet sedm tisícin. Celek je horší než každá část.' },
      { h: big('Paralelní spojení', 'p = 1 − ∏ (1 − pᵢ)', 'záloha spolehlivost zvyšuje'), say: 'U paralelního spojení se násobí nespolehlivosti. Celek selže, jen když selžou všechny záložní prvky najednou, proto záloha spolehlivost zvyšuje.' },
      { h: diagram('Příklad ze skript', T.spolehlivost()), say: 'V příkladu jsou za sebou tři stupně. První má spolehlivost nula celá devadesát pět. Druhý, dvě paralelní větve, nula celá devět tisíc osm set devadesát šest desetitisícin. Třetí, čtyři větve, skoro jedna. Celková spolehlivost vychází asi devadesát čtyři procent.' },
      { h: list('Druhy záloh', ['<b>nezatížená</b> – agregát, náhradní díly', '<b>zatížená</b> – zástupce, plní i jinou činnost', '<b>částečně zatížená</b> – zastoupí jen některé činnosti'], 3, false), say: 'Záloha může být nezatížená, například záložní agregát, zatížená, například zástupce, který jinak plní vlastní práci, nebo částečně zatížená, která zastoupí jen některé činnosti.' }
    ] },
    { file: '05-4-vykonnost', at: 'Výkonnost organizačního', title: 'Výkonnost: tři E', steps: [
      { h: title('Výkonnost organizačního systému', 'Hospodárnost, efektivnost, účelnost'), say: 'Výkonnost organizačního systému. Hospodárnost, efektivnost, účelnost.' },
      ...reveal('Tři složky výkonnosti', [
        ['<b>Hospodárnost</b> – „dělat věci levně“', 'Hospodárnost znamená dělat věci levně, tedy minimalizovat vynaložené zdroje při odpovídající kvalitě.'],
        ['<b>Efektivnost</b> – „dělat věci správnou cestou“', 'Efektivnost znamená dělat věci správnou cestou, tedy dosáhnout maximálního výstupu z daných zdrojů.'],
        ['<b>Účelnost</b> – „dělat správné věci“', 'Účelnost znamená dělat správné věci, tedy dosahovat cílů a nevyrábět nic zbytečného.']
      ]),
      { h: list('Každý vidí výkonnost jinak', ['<b>akcionáři</b>: zhodnocení kapitálu', '<b>řídící pracovníci</b>: výsledky skupin', '<b>zaměstnanci</b>: včasné platy', '<b>zákazníci</b>: množství, kvalita, čas, cena', '<b>dodavatelé</b>: stabilní odběr a platby'], 5, false), say: 'Výkonnost vnímá každý jinak. Akcionáře zajímá zhodnocení kapitálu, řídící pracovníky výsledky skupin, zaměstnance včasné platy, zákazníky množství, kvalita, čas a cena a dodavatele stabilní odběr a včasné platby. Řídící pracovník musí brát v úvahu všechny pohledy.' },
      { h: big('Řízení zesiluje výsledek', 'e = C · ( a + f · e )', 'a = 100, C = 1,2, f = 0,1 → e ≈ 136'), say: 'A ještě jak řízení ovlivňuje chování. Ze sta jednotek na vstupu vytvoří struktura s koeficientem jedna celá dvě desetiny dvacet procent zisku, tedy sto dvacet. Správné řízení výsledek zesílí na zhruba sto třicet šest, bez zásahu do struktury.' }
    ] }
  ],
  struktury: [
    { file: '06-1-organizacni-struktura', at: 'Organizační struktura', title: 'Organizační stupně a struktura', steps: [
      { h: title('Organizační struktura', 'Stupně, jednotky, JOP'), say: 'Organizační struktura. Stupně, jednotky a jednotky organizace práce.' },
      { h: diagram('Organizační stupně velkého podniku', T.orgStupne()), say: 'Organizační stupně jsou podnik, divize, závod a provoz. Pod provozem leží jednotky organizace práce, které jsou nejmenší organizační jednotkou, ale už netvoří samostatný stupeň.' },
      { h: list('Faktory ovlivňující strukturu', ['velikost firmy', 'technika a technologie', 'vliv prostředí', 'právní forma', 'komunikační a informační prostředky', 'strategie a cíle', 'firemní kultura'], 7, false), say: 'Strukturu ovlivňuje velikost firmy, technika a technologie, vliv prostředí, právní forma, úroveň komunikačních a informačních prostředků, strategie a cíle a firemní kultura.' },
      { h: tt(['Stupňů', 'Spolehlivost'], [['1', '0,900'], ['2', '0,810'], ['3', '0,729'], ['4', '0,656']], [1]), say: 'Každý další stupeň snižuje spolehlivost. Při devadesáti procentech na stupeň klesá celková spolehlivost z devadesáti procent přes jednaosmdesát a třiasedmdesát až na šestašedesát procent u čtyř stupňů. Klesá také vlastní aktivita lidí.' },
      { h: list('Závěr', ['optimum středních a velkých podniků = <b>tři stupně</b>', 'čtyři stupně: přerušit <b>samofinancováním</b>'], 2, false), say: 'Optimem pro střední a velké podniky jsou proto tři stupně. U čtyř stupňů se sériové spojení částečně přeruší samofinancováním divizí nebo závodů.' }
    ] },
    { file: '06-2-typy-struktur', at: 'Typy organizačních', title: 'Typy organizačních a řídících struktur', steps: [
      { h: title('Typy struktur', 'Organizační i řídící'), say: 'Typy struktur. Organizační i řídící.' },
      ...reveal('Typy organizačních struktur', [
        ['podle <b>funkcí</b> – malé a střední podniky', 'Struktura podle funkcí, tedy výroba, obchod, služby a účtárna, se hodí pro malé a střední podniky.'],
        ['podle <b>výrobků</b> – jasná odpovědnost, uzavřenost', 'Struktura podle výrobků dává jasnou odpovědnost, ale jednotky jsou uzavřené.'],
        ['podle <b>území</b> – typická pro zemědělství', 'Územní struktura je typická pro zemědělské podniky a vychovává ředitele generalisty.'],
        ['<b>maticová</b> – dvojí podřízenost týmu', 'Maticová struktura spojuje liniovou strukturu s dočasnými projektovými týmy, jejich nevýhodou je dvojí podřízenost.'],
        ['<b>procesní</b> – podle toků činností', 'Procesní struktura vychází z podnikových procesů.']
      ]),
      ...reveal('Typy řídících struktur', [
        ['<b>liniová</b> a <b>štábní</b>', 'Řídící struktura může být liniová, kde řídí linie od generálního ředitele po vedoucího provozu, a štábní, kde útvary radí.'],
        ['<b>funkcionální</b> a <b>divizionální</b>', 'Dále funkcionální, podle funkcí, a divizionální, kde má každá divize vlastní výrobu, prodej a finance.'],
        ['<b>projektová</b> a <b>procesní</b>', 'A nakonec projektová a procesní struktura se sponzorem, koordinátorem a vlastníky procesů.']
      ]),
      { h: list('Dva modely vrcholového řízení', ['<b>americký</b>: valná hromada → představenstvo + dozorčí rada; představenstvo jmenuje ředitele', '<b>německý</b>: valná hromada → dozorčí rada → <b>jmenuje představenstvo</b>'], 2, false), say: 'V americkém modelu valná hromada volí představenstvo a dozorčí radu a představenstvo jmenuje generálního ředitele. V německém modelu valná hromada volí dozorčí radu a ta jmenuje představenstvo.' }
    ] },
    { file: '06-3-ridici-kapacita', at: 'Řídící kapacita', title: 'Řídící kapacita', steps: [
      { h: title('Řídící kapacita', 'Kolik podřízených zvládne šéf'), say: 'Řídící kapacita. Kolik podřízených zvládne šéf.' },
      { h: list('Pojmy', ['<b>q</b> – počet přímo podřízených', '<b>sq</b> – skutečná řídící kapacita', '<b>tq</b> – teoretická: kolik jich lze efektivně uřídit'], 3, false), say: 'Řídící kapacita je počet přímo podřízených jednoho řídícího pracovníka. Skutečná je skutečný počet, teoretická je počet, který může řídící pracovník efektivně uřídit.' },
      ...reveal('Porovnání skutečné a teoretické', [
        ['sq = tq → <b>ideální stav</b>', 'Když se skutečná rovná teoretické, je to ideální, ale vzácný stav.'],
        ['sq &gt; tq → <b>přetížení</b> řídících', 'Když je skutečná vyšší než teoretická, řídících pracovníků je nedostatek a jsou přetíženi.'],
        ['sq &lt; tq → <b>nadbytek</b>, vysoké režie', 'Když je nižší, je jich nadbytek a podnik má vysoké režijní náklady.']
      ]),
      { h: tt(['Kritérium', 'ŘZ', 'GŘ'], [['podobnost funkcí', '4', '6'], ['rozmístění', '3', '4'], ['složitost', '6', '8'], ['plánování', '6', '8'], ['organizování', '8', '10'], ['vedení', '6', '2'], ['kompetence', '4', '4'], ['<b>součet</b>', '37', '42']], [1, 2]), say: 'Teoretickou kapacitu určuje bodová metoda sedmi kritérií. Pro ředitele závodu vychází sedmatřicet bodů a pro generálního ředitele dvaačtyřicet. Obojí odpovídá teoretické kapacitě šest podřízených.' },
      { h: big('Průměrná kapacita', 'q = ⁿ√( a₀ / (ρ · aᵥ) )', 'a₀ výkonní pracovníci · aᵥ vedoucí nejvyššího stupně · ρ rozšíření'), say: 'Průměrnou řídící kapacitu spočítáme jako n tou odmocninu z podílu počtu výkonných pracovníků a součinu koeficientu ró s počtem vedoucích na nejvyšším stupni. Na nejnižším stupni je kapacita rozšířená.' },
      { h: tt(['', 'Strmá', 'Plochá'], [['stupňů', 'mnoho', 'málo'], ['kapacita', 'nízká', 'vysoká'], ['plus', 'těsná kontrola', 'samostatnost'], ['mínus', 'ztráta informací', 'přetížení']], []), say: 'Strmá struktura má mnoho stupňů a nízkou kapacitu, dává těsnou kontrolu, ale informace se ztrácejí. Plochá má málo stupňů a vysokou kapacitu, podporuje samostatnost, ale přetěžuje řídící pracovníky.' }
    ] }
  ],
  motivace: [
    { file: '07-1-co-je-motivace', at: 'Co je motivace', title: 'Co je motivace', steps: [
      { h: title('Motivace', 'Jedním slovem: chtít'), say: 'Motivace. Jedním slovem: chtít.' },
      { h: list('Motivace a motiv', ['vnitřní <b>hnací síla</b>, která usměrňuje chování', 'touha dosáhnout <b>žádoucího cíle</b>', '<b>vnitřní</b> motivace je silnější a trvalejší než vnější'], 3, false), say: 'Motivace je vnitřní hnací síla, která usměrňuje lidské chování. Je to touha dosáhnout žádoucího cíle. Vnitřní motivace je silnější a trvalejší než vnější motivace, tedy působení stimulů.' },
      { h: `<h2>Maslowova hierarchie potřeb</h2><ul class="l"><li>sebetranscendence, seberealizace</li><li>estetické a poznávací potřeby</li><li>potřeby úcty a uznání</li><li>sociální potřeby</li><li>jistota a bezpečí</li><li>fyziologické potřeby</li></ul>`, say: 'Maslow seřadil potřeby do pyramidy. Od základu fyziologické potřeby, jistota a bezpečí, sociální potřeby, potřeby úcty a uznání, poznávací a estetické potřeby, seberealizace a v dnešním pojetí sebetranscendence. Nejdřív se uspokojují nižší potřeby. Pro motivování pracovníků jsou nejdůležitější úcta, uznání a seberealizace.' },
      { h: list('Dva cíle motivace', ['k <b>pracovnímu výkonu</b>', 'k <b>setrvání v podniku</b> – jinak fluktuace'], 2, false), say: 'Motivujeme ke dvěma cílům: k pracovnímu výkonu a k setrvání v podniku. Špatná motivace k setrvání vede k fluktuaci, která zvyšuje náklady.' }
    ] },
    { file: '07-2-stimuly', at: 'Stimuly: hmotné', title: 'Stimuly: hmotné, sociální a morální', steps: [
      { h: title('Stimuly', 'Hmotné, sociální, morální'), say: 'Stimuly. Hmotné, sociální a morální.' },
      { h: diagram('Motivační proces', T.motivace()), say: 'Stimuly působí na motivovanou osobnost a její determinanty chování. Působení zesiluje nebo zeslabuje osobnost vedoucího, situace a prostředí.' },
      ...reveal('Tři skupiny stimulů', [
        ['<b>Hmotné</b>: základní mzda, prémie, odměna', 'Hmotné stimuly jsou základní mzda, prémie a odměna. Mzda motivuje spíš k setrvání. Prémie se váží na výkon za delší období, odměna na mimořádný počin a má se vyplatit co nejdřív.'],
        ['<b>Sociální</b>: status – auto, volná doba, kancelář', 'Sociální stimuly vyjadřují postavení ve skupině: služební auto, volná pracovní doba, parkovací místo nebo velikost kanceláře.'],
        ['<b>Morální</b>: pochvala, kritika, soutěž', 'Morální stimuly jsou pochvala, kritika, zpětná vazba a soutěž. Platí zásada, že se chválí veřejně a kritizuje v soukromí.']
      ]),
      { h: list('Přímá × nepřímá motivace', ['<b>přímá</b> – jen přímo podřízení, „kam dohlédnu“', '<b>nepřímá</b> – motivační systém s pravidly'], 2, false), say: 'Přímo lze motivovat jen přímo podřízené, protože jen u nich vedoucí vidí, kdo se o co zasloužil. Ostatní se motivují nepřímo, přes motivační systém s pravidly.' }
    ] },
    { file: '07-3-motivacni-teorie', at: 'Motivační teorie', title: 'Pravidla a motivační teorie', steps: [
      { h: title('Motivační systém a teorie', 'Pravidla a Herzberg'), say: 'Motivační systém a teorie. Pravidla a Herzberg.' },
      ...reveal('Osm motivačních pravidel', [
        ['1 · vázat jen na <b>ovlivnitelné</b> činnosti', 'První pravidlo: motivaci vázat jen na činnosti, které podřízení mohou ovlivnit.'],
        ['2 · přímo jen <b>přímé podřízené</b>', 'Druhé: přímo motivovat jen přímo podřízené.'],
        ['3–4 · stimuly se <b>nemění</b> a slíbené se <b>splní</b>', 'Třetí a čtvrté: vyhlášené stimuly se v období nemění a slíbené se musí splnit.'],
        ['5 · prémie za <b>čtvrt roku</b>, odměna rychle', 'Páté: hodnotící období je čtvrt roku a mimořádná odměna se vyplatí při nejbližším termínu.'],
        ['6 · <b>samofinancování</b> jednotek', 'Šesté: pokud lze, zavést samofinancování jednotek.'],
        ['7 · nejlepší <b>postupují výš</b>', 'Sedmé: nejlépe hodnocení pracovníci postupují v hierarchii výš.'],
        ['8 · hmotné stimuly <b>s nehmotnými</b>', 'A osmé: hmotné stimuly se kombinují s nehmotnými.']
      ]),
      { h: `<h2>Herzbergova teorie dvou faktorů</h2><table class="tt" style="font-size:26px"><tr><th>Hygienické</th><th>Motivační</th></tr><tr><td>nenaplnění → nespokojenost</td><td>naplnění → motivace k výkonu</td></tr><tr><td>naplnění nemotivuje</td><td>nenaplnění nemusí vadit</td></tr><tr><td>příklad: pravidelné prémie</td><td>příklad: pochvala</td></tr></table>`, say: 'Herzberg rozlišil hygienické a motivační faktory. Když chybí hygienické faktory, vznikne nespokojenost, ale jejich naplnění nemotivuje, pracovník je bere jako samozřejmost. Typicky pravidelné prémie. Motivační faktory, například pochvala, motivují k vyššímu výkonu dlouhodobě, ale jejich chybění nutně nevyvolá nespokojenost.' },
      { h: list('Další teorie', ['<b>Adams</b> – spravedlnost odměny', '<b>Alderfer</b> – existence, vztahy, růst', '<b>McClelland</b> – úspěch, moc, sounáležitost', '<b>McGregor</b> – teorie X a Y', '<b>Skinner</b> – zesílení · <b>Vroom</b> – očekávání', '<b>zmocnění</b> – spoluúčast na rozhodování'], 6, false), say: 'Dále Adamsova teorie spravedlnosti, Alderferovy tři skupiny potřeb, McClellandovy potřeby úspěchu, moci a sounáležitosti, McGregorova teorie iks a ypsilon, Skinnerovo zesílení, Vroomova teorie očekávání a teorie psychologického zmocnění.' }
    ] }
  ],
  komunikace: [
    { file: '08-1-komunikacni-proces', at: 'Komunikační proces', title: 'Komunikační proces a bariéry', steps: [
      { h: title('Komunikace', 'Proces, bariéry a zlozvyky'), say: 'Komunikace. Proces, bariéry a zlozvyky.' },
      { h: diagram('Komunikační proces', T.komunikace()), say: 'Komunikátor vysílá sdělení, komunikant ho přijímá. Cestou ho rušení a bariéry mohou zkreslit. Proto je důležitá zpětná vazba, kterou ověříme, jak bylo sdělení pochopeno.' },
      { h: list('Struktura komunikace', ['<b>kdo</b> říká <b>co</b> <b>komu</b>', '<b>čím</b> a jakým <b>médiem</b>', 's jakým <b>úmyslem</b> a <b>účinkem</b>'], 3, false), say: 'Struktura komunikace: kdo říká co komu, čím a jakým médiem, s jakým úmyslem a s jakým účinkem. Komunikace má cíl, je kontextuální, oboustranná a symbolická a má stránku věcnou i vztahovou.' },
      ...reveal('Proč si lidé neporozumí', [
        ['<b>bariéry</b>: selektivní vnímání, špatné naslouchání, časová tíseň, stres', 'Překážky jsou třeba selektivní vnímání, špatné naslouchání, časová tíseň nebo stres.'],
        ['<b>zlozvyky mluvčího</b>: nejasnost, zobecňování, odbíhání od tématu', 'Mluvčí často mluví nejasně, zobecňuje a odbíhá od tématu.'],
        ['<b>zlozvyky příjemce</b>: přerušování, nesoustředěnost, žádná zpětná vazba', 'Příjemce přerušuje, není soustředěný a nedává zpětnou vazbu.']
      ])
    ] },
    { file: '08-2-neverbalni', at: 'Verbální a neverbální', title: 'Neverbální komunikace', steps: [
      { h: title('Neverbální komunikace', 'Řeč těla'), say: 'Neverbální komunikace. Řeč těla.' },
      ...reveal('Šest oblastí', [
        ['<b>Mimika</b> – výraz obličeje, primární emoce', 'Mimika je výraz obličeje. Bolest poznáme z čela a obočí, štěstí z dolní části obličeje, strach a smutek z očí.'],
        ['<b>Gestika</b> – kulturně vázané posunky', 'Gestika jsou posunky vázané na kulturu. Gesto „v pořádku“ může v jiné zemi znamenat nulu nebo urážku.'],
        ['<b>Haptika</b> – dotek, podání ruky', 'Haptika je doteková komunikace, třeba podání ruky.'],
        ['<b>Proxemika</b> – vzdálenost, zóny', 'Proxemika zkoumá vzdálenost. Zóna intimní sahá do třiceti až šedesáti centimetrů, osobní do metru dvaceti až dvou metrů, společenská do tří metrů šedesáti a veřejná je dál.'],
        ['<b>Posturologie</b> – stání, sezení, ležení', 'Posturologie sleduje polohu těla: stání, sezení a ležení.'],
        ['<b>Kinezika</b> – pohyby a jejich koordinace', 'Kinezika sleduje pohyby těla a jejich koordinaci, třeba počet a rozsah pohybů. Zvýšený počet pohybů značí napětí.']
      ]),
      { h: list('Pozor na kontext', ['nakloněná hlava = <b>zájem</b>', 'pohledy na hodinky = <b>netrpělivost</b>', 'překřížené ruce = malé sebevědomí', 'signál vždy v <b>kontextu</b> a kultury'], 4, false), say: 'Nakloněná hlava značí zájem, pohledy na hodinky netrpělivost. Žádný signál ale nevykládejte izolovaně, vždy záleží na situaci a kultuře.' }
    ] },
    { file: '08-3-v-organizaci', at: 'Komunikace v organizaci', title: 'Komunikace v organizaci a porady', steps: [
      { h: title('Komunikace v organizaci', 'Směry a porady'), say: 'Komunikace v organizaci. Směry a porady.' },
      { h: diagram('Směry komunikace', T.smery()), say: 'Sestupná komunikace nese příkazy, instrukce a delegování. Vzestupná nápady, informace z místa a výsledky kontroly. Horizontální koordinuje jednotky na stejném stupni a diagonální je typická pro projekty. Neformální komunikace jde všemi směry a nejrychleji se šíří špatné zprávy.' },
      { h: list('Ztráta informace', ['předávání mezi stupni = <b>sériové</b> spojení', 'po <b>třech stupních</b> sériové uspořádání přerušit'], 2, false), say: 'Při předávání informace přes stupně řízení se informace vždy částečně ztrácí. Po třech stupních je proto potřeba sériové uspořádání přerušit.' },
      ...reveal('Druhy porad', [
        ['<b>Valná hromada</b> – formální, zpětná vazba hlasováním', 'Valná hromada je formální, zpětnou vazbou je hlasování.'],
        ['<b>Představenstvo</b> – kolektivní rozhodování většinou hlasů', 'Představenstvo kolektivně rozhoduje většinou hlasů o strategických otázkách.'],
        ['<b>Porada vedení</b> – informační a řídící, úkol–termín–odpovědná osoba, zápis', 'Porada vedení je informační a řídící, má pevnou strukturu a u každého úkolu se určí termín a odpovědná osoba. Podstatný je zápis.']
      ])
    ] },
    { file: '08-4-konflikty', at: 'Konflikty a jejich', title: 'Konflikty a jejich řešení', steps: [
      { h: title('Konflikty', 'Typy a řešení'), say: 'Konflikty. Typy a řešení.' },
      { h: `<h2>Konflikt</h2><div class="big" style="font-size:34px;font-family:inherit">Neexistuje dobrý nebo špatný konflikt,<br>jen <span class="ac">dobré nebo špatné řešení</span>.</div>`, say: 'Konflikt je střet navzájem se vylučujících snah, zájmů, hodnot nebo aktérů. Neexistuje dobrý nebo špatný konflikt, jen dobré nebo špatné řešení konfliktu.' },
      ...reveal('Čtyři typy', [
        ['<b>vnitřní</b> – apetence/averze, cíl × morálka', 'Vnitřní konflikt probíhá uvnitř člověka, nejtěžší je střet dvou nepříjemných možností.'],
        ['<b>mezilidský</b> – vztahy, zájmy, cíle, informace, struktura', 'Mezilidský konflikt může být o vztazích, zájmech, hodnotách, cílech, prostředcích, informacích nebo o pravomocích.'],
        ['<b>ve skupině</b> – dva tábory', 'Konflikt ve skupině vzniká, když se skupina neshodne na řešení.'],
        ['<b>mezi skupinami</b> – nárokování zdrojů', 'Konflikt mezi skupinami je nejčastěji spor o zdroje.']
      ]),
      ...reveal('Jak řešit', [
        ['nadřízený × podřízený: <b>moc</b> u nadřízeného, <b>autorita</b> uznat', 'Mezi nadřízeným a podřízeným rozhoduje moc nadřízeného, ale má-li autoritu podřízený, je moudré ji uznat.'],
        ['skupina: nadřízený po poradě s <b>neformálním vůdcem</b>', 'Ve skupině rozhodne nadřízený po poradě s neformálním vůdcem, aby se skupina s rozhodnutím ztotožnila.'],
        ['spolumajitelé <b>padesát na padesát</b> – až soud', 'Nejnebezpečnější je konflikt dvou majitelů s padesátiprocentními podíly, tam rozhoduje až soud.'],
        ['mimo podnik: <b>mediátor</b>, soud, arbitráž', 'Mimo podnik rozhoduje třetí strana: mediátor, soud nebo arbitráž.']
      ])
    ] }
  ],
  rozhodovani: [
    { file: '09-1-rozhodovaci-proces', at: 'Rozhodovací proces', title: 'Rozhodovací proces', steps: [
      { h: title('Rozhodovací proces', 'Osm kroků'), say: 'Rozhodovací proces. Osm kroků.' },
      { h: `<h2>Rozhodnutí</h2><div class="big" style="font-size:34px;font-family:inherit">výběr ze dvou či více alternativ<br>= řešení <span class="ac">problému</span></div><p class="sub" style="text-align:center">problém = odchylka mezi žádoucím a skutečným stavem</p>`, say: 'Rozhodnutí je výběr ze dvou nebo více alternativ a je podstatou podnikového řízení. Problém je odchylka mezi žádoucím a skutečným stavem.' },
      ...reveal('Osm kroků', [
        ['1 · identifikace problému', 'Prvním krokem je identifikace problému.'],
        ['2 · stanovení kritérií', 'Druhým stanovení kritérií.'],
        ['3 · přiřazení vah kritériím', 'Třetím přiřazení vah kritériím.'],
        ['4 · formulování variant', 'Čtvrtým formulování variant.'],
        ['5 · analýza variant', 'Pátým analýza variant.'],
        ['6 · výběr varianty', 'Šestým výběr varianty.'],
        ['7 · implementace – vysvětlit a získat souhlas', 'Sedmým implementace, při které rozhodnutí vysvětlíme podřízeným a získáme jejich souhlas.'],
        ['8 · monitorování a kontrola', 'A osmým monitorování a kontrola.']
      ]),
      { h: list('Kritéria', ['<b>výnosová</b> – čím více, tím lépe', '<b>nákladová</b> – čím méně, tím lépe', 'stupnice: <b>nominální</b>, <b>ordinální</b>, <b>kardinální</b>'], 3, false), say: 'Kritéria jsou výnosová, kde čím více, tím lépe, a nákladová, kde čím méně, tím lépe. Stupnice měření je nominální, ordinální a kardinální, která může být intervalová nebo poměrová.' },
      { h: list('Heslo ŘP', ['horší rozhodnutí <b>včas</b> je lepší než geniální <b>pozdě</b>'], 1, false), say: 'A pamatujte: horší rozhodnutí včas je lepší než geniální pozdě.' }
    ] },
    { file: '09-2-eisenhower', at: 'Eisenhowerova', title: 'Eisenhowerova matice', steps: [
      { h: title('Eisenhowerova matice', 'Důležité a naléhavé'), say: 'Eisenhowerova matice. Důležité a naléhavé.' },
      { h: diagram('Eisenhowerův princip', T.eisenhower()), say: 'Úkoly třídíme podle dvou kritérií: důležitosti a naléhavosti.' },
      ...reveal('Čtyři kvadranty', [
        ['I · důležité + naléhavé → <b>sám a hned</b>', 'Důležité a naléhavé úkoly, krize, řešíme sami a hned.'],
        ['II · důležité + nenaléhavé → <b>naplánovat</b>', 'Důležité, ale nenaléhavé úkoly, třeba příprava nebo stáž, si naplánujeme. Na ně se soustřeďme, protože předcházejí krizím.'],
        ['III · nedůležité + naléhavé → <b>delegovat</b>', 'Nedůležité, ale naléhavé úkoly, třeba telefonát nebo záskok za kolegu, delegujeme.'],
        ['IV · nedůležité + nenaléhavé → <b>eliminovat</b>', 'Nedůležité a nenaléhavé úkoly eliminujeme. Často jde o prokrastinaci.']
      ])
    ] },
    { file: '09-3-delegovani', at: 'Delegování', title: 'Delegování', steps: [
      { h: title('Delegování', 'Přikazovat, koučovat, delegovat'), say: 'Delegování. Přikazovat, koučovat, delegovat.' },
      { h: list('Delegování', ['přenos <b>povinností</b>, <b>pravomocí</b> a spoluodpovědnosti', 'proces, ne jednorázová akce'], 2, false), say: 'Delegování je přenos povinností a souvisejících pravomocí a odpovědnosti z nadřízeného na podřízeného. Je to proces, ne jednorázová akce.' },
      ...reveal('Tři způsoby vedení', [
        ['<b>Přikazování</b> – ŘP určí vše, rychlé, ale snižuje iniciativu', 'Při přikazování vedoucí určí všechno, co, jak a kdy. Je to rychlé, ale snižuje iniciativu, hodí se v časové tísni.'],
        ['<b>Koučování</b> – otázkami vede podřízeného k řešení', 'Při koučování vedoucí otázkami vede podřízeného, aby sám vypracoval program řešení.'],
        ['<b>Delegování</b> – úkol + pravomoc + zdroje', 'Při delegování předá úkol, pravomoc i zdroje a podřízený si zvolí způsob.']
      ]),
      { h: list('Odpovědnost', ['<b>funkční</b> – zůstává delegujícímu', '<b>sdílená</b> – 50 % + 50 %, dál 25 % + 25 %'], 2, false), say: 'Funkční odpovědnost plyne z funkce a delegující se jí nezbavuje. Sdílená odpovědnost se dělí: delegující padesát procent a delegovaný padesát procent, při dalším delegování po pětadvaceti procentech.' },
      { h: list('Co nedelegovat', ['<b>vizi a strategii</b>', '<b>klíčové zdroje</b> – lidé, peníze, čas', '<b>budování týmu</b>', '<b>organizační kulturu</b>'], 4, false), say: 'Nedelegovat se nemá stanovení a komunikace vize a strategie, rozhodování o klíčových zdrojích, tedy lidech, penězích a čase, budování týmu a pěstování organizační kultury.' }
    ] }
  ],
  'vedeni-lidi': [
    { file: '10-1-stupne-rizeni', at: 'Úrovně a stupně', title: 'Stupně řízení', steps: [
      { h: title('Stupně řízení', 'Nejnižší, střední a nejvyšší'), say: 'Stupně řízení. Nejnižší, střední a nejvyšší.' },
      ...reveal('Tři stupně', [
        ['<b>Nejnižší</b>: operativní řízení, odbornost, přímé vedení, vyšší q', 'Nejnižší stupeň řídí operativně, potřebuje odbornost a praktické dovednosti, vede přímo skupinu výkonných pracovníků a má vyšší řídící kapacitu.'],
        ['<b>Střední</b>: taktické řízení, realizace strategie', 'Střední stupeň realizuje strategii vyššího stupně, plánuje a koordinuje nižší jednotky, má víc teorie a méně praktických dovedností.'],
        ['<b>Nejvyšší</b>: vize a strategie, generalizace, nízké q', 'Nejvyšší stupeň formuluje vizi a strategii, zastupuje firmu navenek, vytváří ekonomický a motivační systém. Odbornost nahrazuje generalizace a řídící kapacita je nízká.']
      ]),
      { h: list('Vlastnosti vrcholu', ['rozhodnost = ochota nést odpovědnost', 'vytrvalost, sebedůvěra', 'charakter a <b>charisma</b>'], 3, false), say: 'Na nejvyšším stupni se od vedoucího čeká rozhodnost jako ochota nést odpovědnost, vytrvalost, sebedůvěra, charakter a charisma.' }
    ] },
    { file: '10-2-styly-rizeni', at: 'Styl řízení', title: 'Styly řízení', steps: [
      { h: title('Styly řízení', 'Úkol nebo lidé?'), say: 'Styly řízení. Úkol, nebo lidé?' },
      { h: list('Styl řízení', ['obvyklé <b>chování</b> ŘP při vedení lidí', 'osobnost + okolnosti', '<b>přirozený</b> × <b>vynucený</b>'], 3, false), say: 'Styl řízení je obvyklé chování řídícího pracovníka při vedení lidí. Vychází z jeho osobnosti a z okolností, proto rozlišujeme přirozený a vynucený styl.' },
      { h: diagram('Orientace na úkol × orientace na lidi', T.stylyGrid()), say: 'Styly se řadí podle orientace na úkol a na lidi. Vysoká orientace na lidi a nízká na úkol je sousedský styl, spolek zahrádkářů. Nízká na obojí je lhostejný nebo byrokratický styl. Vysoká na úkol a nízká na lidi je autokratický styl, armáda. Vysoká na obojí je demokratický nebo týmový styl.' },
      ...reveal('Styly a jejich uplatnění', [
        ['<b>Autokratický</b> – krize, rozjezd firmy', 'Autokratický styl se hodí v krizi a při rozjezdu firmy. Je rychlý, ale brzdí iniciativu.'],
        ['<b>Benevolentně autokratický</b> – mírnější', 'Benevolentně autokratický je mírnější, připouští jinou než jednosměrnou komunikaci.'],
        ['<b>Demokratický</b> – rozhoduje po poradě', 'Demokratický neboli kompromisní styl rozhoduje po poradě a udržuje vedoucí postavení.'],
        ['<b>Týmový</b> – projekty, vývoj', 'Týmový styl klade důraz na tým, hodí se pro projekty a vývoj.'],
        ['<b>Liberální</b> – tvořivé profese', 'Liberální styl, rozvojový, se hodí pro tvořivé profese.'],
        ['<b>Sousedský</b>, <b>byrokratický</b>, <b>lhostejný</b>', 'Sousedský styl upřednostňuje lidi, byrokratický jen předává příkazy a lhostejný je nežádoucí.']
      ])
    ] },
    { file: '10-3-kvalifikace-kompetence', at: 'Kvalifikace a kompetence', title: 'Kvalifikace a kompetence', steps: [
      { h: title('Kvalifikace a kompetence', 'Co umím × co skutečně zvládnu'), say: 'Kvalifikace a kompetence. Co umím a co skutečně zvládnu.' },
      { h: `<h2>Kvalifikace × kompetence</h2><table class="tt" style="font-size:26px"><tr><th>Kvalifikace</th><th>Kompetence</th></tr><tr><td>teoretický předpoklad</td><td>skutečná schopnost</td></tr><tr><td>vzdělání + praxe</td><td>kvalifikace + osobnost + pravomoc + motivace</td></tr><tr><td>stanoví se předem</td><td>zjistí se až při výkonu</td></tr></table>`, say: 'Kvalifikace je teoretický předpoklad, tvoří ji vzdělání a praxe. Kompetence je skutečná schopnost funkci zvládat. Je výslednicí kvalifikace, osobnosti, pravomoci a motivace a zjistí se až při výkonu funkce.' },
      { h: tt(['Stupeň', 'Požadavek', 'Body'], [['generální ředitel', 'vysoká škola + 10 let', '16'], ['ředitel závodu', 'vysoká škola + 5 let', '14'], ['vedoucí provozu', 'střední + 5 let', '9']], [2]), say: 'Příklad kvalifikačních požadavků. Generální ředitel potřebuje vysokou školu a deset let praxe, to je šestnáct bodů. Ředitel závodu vysokou školu a pět let, čtrnáct bodů. Vedoucí provozu střední školu a pět let, devět bodů.' },
      { h: tt(['Stupeň', 'Vize', 'Obchod', 'Motivace', 'Produkce'], [['generální ředitel', '0,5', '0,4', '0,1', '0'], ['ředitel divize', '0,4', '0,3', '0,2', '0,1'], ['ředitel závodu', '0,1', '0,2', '0,3', '0,4'], ['vedoucí provozu', '0', '0,1', '0,4', '0,5']], []), say: 'Dílčí kompetence se podle stupně liší. Generální ředitel má polovinu na vizi a strategii a žádnou na produkci. S klesajícím stupněm vize ubývá a roste podíl produkce, vedoucí provozu má na produkci polovinu. Součet na každém stupni je jedna.' }
    ] }
  ],
  'time-management': [
    { file: '11-1-generace-pareto', at: 'Čtyři generace', title: 'Generace plánování času a Pareto', steps: [
      { h: title('Time management', 'Čtyři generace plánování času'), say: 'Time management. Čtyři generace plánování času.' },
      { h: list('Proč řídit čas', ['čas je <b>omezený</b> zdroj', 'ztrátu peněz nahradíte, <b>času ne</b>', 'kdo neřídí, je <b>řízen</b>'], 3, false), say: 'Čas je omezený zdroj. Ztrátu peněz lze nahradit, ztrátu času ne. Kdo neřídí, je řízen.' },
      ...reveal('Čtyři generace', [
        ['I · poznámky a upomínky', 'První generace jsou poznámky a upomínky. Je to jednoduché, ale chybí strategie.'],
        ['II · kalendáře a diáře', 'Druhá kalendáře a diáře, spíš organizace než priority.'],
        ['III · prioritizace úkolů', 'Třetí generace se zaměřuje na priority, na důležitost a naléhavost.'],
        ['IV · osobní řízení a rovnováha – umění říkat NE', 'Čtvrtá generace hledá rovnováhu mezi prací a osobním životem a učí umění říkat ne.']
      ]),
      { h: big('Paretovo pravidlo', '20 % → 80 %', 'asi dvacet procent činností přináší osmdesát procent výsledků'), say: 'Paretovo pravidlo říká, že asi dvacet procent činností přináší osmdesát procent výsledků. Proto je důležité stanovit si priority a neztrácet čas nepodstatnými problémy.' }
    ] },
    { file: '11-2-zasady', at: 'Deset hlavních', title: 'Deset zásad time managementu', steps: [
      { h: title('Deset zásad', 'Jak řídit čas'), say: 'Deset zásad. Jak řídit čas.' },
      ...reveal('Zásady 1 až 5', [
        ['1 · stanovit <b>priority</b> a řídit se jimi', 'První: stanovit si priority a řídit se jimi, aby urgentní věc nevytěsnila důležitou.'],
        ['2 · <b>delegovat</b> a nestát se nepostradatelným', 'Druhá: delegovat a nestát se nepostradatelným.'],
        ['3 · efektivní <b>nástroje</b>', 'Třetí: efektivně využívat nástroje, techniku a informační systémy.'],
        ['4 · systematické <b>plánování</b>, termín je svatá věc', 'Čtvrtá: systematicky plánovat, diář, přehled, termín je svatá věc.'],
        ['5 · umět říci <b>NE</b> nabídce, ne člověku', 'Pátá: umět říci ne. Odmítá se nabídka, ne člověk.']
      ]),
      ...reveal('Zásady 6 až 10', [
        ['6 · úkoly zpracovat <b>bleskově</b>', 'Šestá: zpracovat úkoly bleskově, co neumím nebo nenávidím, ať dělá někdo jiný.'],
        ['7 · <b>informovanost</b> včasná a úplná', 'Sedmá: včasná a úplná informovanost.'],
        ['8 · odstranit <b>rušivé vlivy</b>', 'Osmá: odstranit rušivé vlivy, před důležitým jednáním vypnout telefon.'],
        ['9 · <b>časová rezerva</b> – plánovat asi šedesát procent', 'Devátá: časová rezerva. Plánovat jen asi šedesát procent času, čtyřicet procent nechat jako mezeru.'],
        ['10 · uspořádat <b>pracovní místo</b>', 'A desátá: uspořádat pracovní místo, omezit hledání a zálohovat.']
      ])
    ] },
    { file: '11-3-omyly', at: 'Pět omylů', title: 'Omyly v plánování času', steps: [
      { h: title('Omyly v plánování času', 'Donald Wetmor a planning fallacy'), say: 'Omyly v plánování času. Donald Wetmor a planning fallacy.' },
      ...reveal('Pět omylů', [
        ['1 · začít den bez plánu', 'První omyl: začít den bez jasného plánu.'],
        ['2 · nevyrovnanost v osobním životě', 'Druhý: nevyrovnanost v osobním životě, přepracovanost.'],
        ['3 · smetiště na stole i v počítači', 'Třetí: smetiště na pracovním stole a v počítači.'],
        ['4 · práce na úkor spánku', 'Čtvrtý: práce na úkor spánku.'],
        ['5 · oběd není čas k práci', 'A pátý: přestávka na oběd není čas určený k práci.']
      ]),
      { h: big('Planning fallacy', '34 dnů → 56 dnů', 'studenti odhadli psaní práce na 34 dnů, trvalo 56'), say: 'Planning fallacy je přílišný optimismus v odhadu doby úkolu. Studenti psychologie odhadli psaní závěrečné práce průměrně na čtyřiatřicet dnů, ve skutečnosti jim trvalo šestapadesát. Správně odhadlo jen třicet procent z nich.' },
      { h: list('Jak na to', ['pesimistický odhad vynásobit <b>1,5 až 2</b>', '14 dnů → začít <b>21 dnů</b> předem', '3 dny → vyhradit <b>5 dnů</b>'], 3, false), say: 'Řešením je pesimistický odhad vynásobit jedna a půl až dvěma. Pokud počítáte se čtrnácti dny, začněte jednadvacet dnů předem. Se třemi dny počítejte pět.' }
    ] }
  ],
  'manazerske-funkce': [
    { file: '12-1-fayol', at: 'Henri Fayol', title: 'Fayol a jeho funkce', steps: [
      { h: title('Henri Fayol', 'Pět funkcí a čtrnáct principů'), say: 'Henri Fayol. Pět funkcí a čtrnáct principů.' },
      { h: list('Fayol', ['Francouz, <b>1841 až 1925</b>', 'rok <b>1916</b> – pět funkcí správy', 'klasické školy řízení – <b>správní řízení</b>'], 3, false), say: 'Henri Fayol, Francouz, který žil v letech 1841 až 1925, definoval v roce 1916 pět funkcí správy. Patří ke klasickým školám řízení.' },
      ...reveal('Pět funkcí', [
        ['<b>Plánování</b> – budoucí cíle a postup', 'Plánování je stanovení budoucích cílů a postupu.'],
        ['<b>Organizování</b> – zdroje a podmínky', 'Organizování je zabezpečení zdrojů a podmínek.'],
        ['<b>Přikazování</b> – úkoly a instrukce', 'Přikazování je zadávání úkolů a instrukcí.'],
        ['<b>Koordinace</b> – slaďování činností', 'Koordinace je slaďování činností spolupracovníků.'],
        ['<b>Kontrola</b> – soulad plánu a skutečnosti', 'A kontrola je ověřování souladu plánu a skutečnosti.']
      ]),
      { h: list('Zapamatuj si z čtrnácti principů', ['<b>jednota přikazování</b> – jeden nadřízený', '<b>jednota vedení</b> – jeden plán', '<b>skalární řetěz</b> – formální řetěz příkazů', '<b>centralizace</b>'], 4, false), say: 'Z čtrnácti principů se nejsnáze pletou jednota přikazování, kdy má zaměstnanec jen jednoho nadřízeného, a jednota vedení, kdy existuje jeden plán. Dále skalární řetěz, formální řetěz příkazů shora dolů, a centralizace.' }
    ] },
    { file: '12-2-sekvencni-paralelni', at: 'Sekvenční a paralelní', title: 'Sekvenční a paralelní funkce', steps: [
      { h: title('Manažerské funkce', 'Sekvenční a paralelní'), say: 'Manažerské funkce. Sekvenční a paralelní.' },
      ...reveal('Sekvenční funkce – postupně', [
        ['1 · plánování', 'Sekvenční funkce se realizují postupně. Nejdřív plánování,'],
        ['2 · organizování', 'pak organizování,'],
        ['3 · výběr a rozmístění pracovníků', 'výběr a rozmístění pracovníků,'],
        ['4 · vedení lidí', 'vedení lidí'],
        ['5 · kontrola', 'a kontrola.']
      ]),
      { h: list('Paralelní funkce – průběžně', ['<b>analýza</b> problémů', '<b>rozhodování</b>', '<b>realizace</b> včetně koordinace'], 3, false), say: 'Paralelní funkce probíhají průběžně ve všech krocích: analýza problémů, rozhodování a realizace včetně koordinace.' },
      { h: list('Další autoři', ['<b>Urwick</b> – navíc zkoumání a komunikace', '<b>Gulick</b> – POSDCORB, sedm funkcí', '<b>Drucker</b> – plánování, organizování, integrování, měření', '<b>Koontz a Weihrich</b> – pět funkcí'], 4, false), say: 'Urwick přidal k Fayolovi zkoumání a komunikaci. Gulick sestavil sedm funkcí do zkratky pe o es de ce o er be. Drucker mluví o plánování, organizování, integrování a měření. Koontz a Weihrich uvádějí plánování, organizování, výběr a rozmístění spolupracovníků, vedení lidí a kontrolu.' }
    ] },
    { file: '12-3-mintzberg', at: 'Mintzbergových', title: 'Mintzbergových deset rolí', steps: [
      { h: title('Mintzberg', 'Deset rolí ve třech skupinách'), say: 'Mintzberg. Deset rolí ve třech skupinách.' },
      { h: `<h2>Tři skupiny rolí</h2><div class="big" style="font-size:44px">3 + 3 + 4 = 10</div>`, say: 'Henry Mintzberg kritizuje koncept funkcí a činnosti manažera shrnuje do deseti rolí ve třech skupinách: tři plus tři plus čtyři.' },
      ...reveal('Role', [
        ['<b>Interpersonální</b>: představitel organizace, vůdce, spojovací článek', 'Interpersonální role vyplývají z formální pravomoci: představitel organizace, vůdce a spojovací článek.'],
        ['<b>Informační</b>: monitor, šiřitel, mluvčí', 'Informační role: monitor, který informace sbírá, šiřitel, který je předává uvnitř, a mluvčí, který je předává navenek.'],
        ['<b>Rozhodovací</b>: podnikatel, řešitel problémů, alokátor zdrojů, vyjednavač', 'Rozhodovací role: podnikatel, řešitel problémů, alokátor zdrojů a vyjednavač.']
      ]),
      { h: list('Koncepce sedm S', ['strategie · struktura · systémy', 'styl · schopnosti · spolupráce', 'uprostřed <b>sdílené hodnoty</b> – podniková kultura'], 3, false), say: 'A ještě koncepce sedm es od firmy McKinsey. Strategie, struktura, systémy, styl, schopnosti a spolupráce, a uprostřed sdílené hodnoty, tedy podniková kultura.' }
    ] }
  ]
};
