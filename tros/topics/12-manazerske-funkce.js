registerTopic({
  id: 'manazerske-funkce', order: 12, icon: '📚', title: 'Manažerské funkce a historie managementu', src: 'podklady', lec: [11],
  where: 'Přednáška 11 (Manažerské funkce, s. 225–256) + Dovednosti v řízení kap. 2.2',
  summary: 'Co manažer dělá: Fayolových 5 funkcí a 14 principů (1916), jak koncepci rozvinuli Urwick, Gulick (POSDCORB), Drucker a Koontz s Weihrichem, dnešní sekvenční a paralelní funkce, Mintzbergova kritika (10 rolí) a koncepce 7 S.',
  vocab: [
    { w: 'Manažerské funkce', x: 'Typické, podstatné činnosti, které manažer ve své práci vykonává a musí zvládnout (např. plánování, organizování, kontrola).' },
    { w: 'Henri Fayol', x: 'Francouz (1841–1925), zakladatel koncepce manažerských funkcí; v roce 1916 jich popsal pět („funkce správy“).' },
    { w: 'Sekvenční funkce', x: 'Realizují se postupně, jedna po druhé: plánování → organizování → výběr a rozmístění pracovníků → vedení lidí → kontrola.' },
    { w: 'Paralelní funkce', x: 'Probíhají průběžně v každém kroku: analýza problémů, rozhodování, realizace (implementace) včetně koordinace.' },
    { w: 'POSDCORB', x: 'Gulickova zkratka sedmi funkcí: Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting.' },
    { w: 'Role (Mintzberg)', x: 'Typ chování, který se od manažera čeká – místo seznamu funkcí popisuje, co manažer skutečně dělá (10 rolí ve 3 skupinách).' },
    { w: 'CSF', x: 'Critical Success Factors – kritické faktory úspěchu manažerské práce (koncepce 7 S od McKinsey, koncepce K. H. Chunga).' }
  ],
  key: [
    '<b>Manažerské funkce</b> = typické činnosti manažera. Zakladatel: <b>H. Fayol, 1916</b> – plánování, organizování, přikazování, koordinace, kontrola + <b>14 principů</b>.',
    'Vývoj: <b>Urwick</b> +2 (zkoumání, komunikace) → <b>Gulick</b> POSDCORB (7) → <b>Drucker</b> (plánování, organizování, integrování, měření) → <b>Koontz a Weihrich</b> (nejužívanější, 5).',
    'Dnes: <b>sekvenční</b> (PL → ORG → výběr lidí → vedení → kontrola) × <b>paralelní</b> (analýza, rozhodování, realizace) – dohromady matice 5 × 3.',
    '<b>Mintzberg</b> funkce kritizuje: <b>10 rolí</b> ve 3 skupinách – interpersonální (3), informační (3), rozhodovací (4).',
    '<b>7 S</b> (McKinsey): strategie, struktura, systémy, styl, schopnosti, spolupráce + uprostřed <b>sdílené hodnoty</b> (podniková kultura).'
  ],
  sections: [
    { title: 'Nejdřív v kostce: o čem téma je', blocks: [
      { t: 'def', term: 'Manažerské funkce', x: '<b>Typické činnosti</b>, které manažer ve své práci vykonává, a zároveň <b>podstatné činnosti</b>, které musí zvládnout. Za zakladatele této koncepce se považuje Francouz <b>Henri Fayol</b>, který je v roce <b>1916</b> definoval jako pět „funkcí správy“.' },
      { t: 'p', x: 'Téma odpovídá na jednoduchou otázku: <b>co vlastně manažer celý den dělá?</b> Různí autoři na ni během 20. století odpovídali různými seznamy funkcí. Seznamy se liší počtem a názvy, ale jádro mají společné: <b>naplánovat → zajistit zdroje a lidi → vést je → zkontrolovat výsledek</b>. Kdo pochopí tohle jádro, snadno si zapamatuje i jednotlivé autory.' },
      { t: 'ex', x: '<b>Firma chce zvýšit měsíční výrobu.</b> Manažer nejdřív <b>naplánuje</b>, o kolik a do kdy; pak <b>zorganizuje</b> stroje, materiál a peníze; <b>vybere a rozmístí</b> lidi (např. přidá směnu); <b>vede</b> je – dává úkoly a motivuje; nakonec <b>kontroluje</b>, jestli se plán plní, a případně ho upraví. Přitom celou dobu <b>analyzuje</b> problémy, <b>rozhoduje</b> a <b>koordinuje</b>.' },
      { t: 'table', head: ['Typický manažer', 'Co typicky dělá'], rows: [
        ['Manažer kvality', 'vyhodnocování výsledků kvality, zjišťování příčin nekvality, zajišťování interních auditů'],
        ['Manažer logistiky', 'organizace logistických procesů, komunikace se zákazníky'],
        ['Produktový manažer', 'analýza potřeb zákazníků, návrhy na zvýšení prodejů'],
        ['Projektový manažer', 'sestavení projektového týmu, definování dílčích cílů, určení odpovědností za úkoly'],
        ['Finanční manažer', 'sestavení ročních plánů, rozbor hospodářských výsledků, návrhy daňové optimalizace'],
        ['Výrobní manažer', 'implementace strategie společnosti, rozvoj a hodnocení pracovníků']
      ] },
      { t: 'tip', x: 'Souvislost s tématem <b>Proces řízení</b>: skripta Dovednosti v řízení upozorňují, že „co autor, to jiná definice manažerských funkcí“. Obsah funkcí proto odvozují z <b>fází procesu řízení</b> (plánování, organizování, operativní řízení) a <b>stádií cyklu řízení</b> (informace → rozhodování → realizace → kontrola). Vedení lidí podle nich není samostatná fáze – prostupuje všemi fázemi.' }
    ] },
    { title: 'Henri Fayol – kde to celé začalo (1916)', blocks: [
      { t: 'p', x: '<b>Henri Fayol</b> (1841–1925) patří do první vývojové etapy managementu – <b>technokratického přístupu (klasických škol řízení)</b>, konkrétně do <b>správního řízení</b> (správní teorie). Ta se zaměřila na vědecké zkoumání principů organizace a <b>správních (řídících) činností</b>. Fayol přinesl tři věci: rozdělení činností podniku, pět manažerských funkcí a 14 principů managementu.' },
      { t: 'table', head: ['Fayolova skupina činností podniku', 'Obsah', 'Subsystém OS (dnešní pojetí)'], rows: [
        ['Technické (technologické)', 'výroba, těžba', 'PS1, TS1, TS2'],
        ['Obchodní', 'nákup, prodej, směna', 'MOS'],
        ['Finanční', 'opatřování a efektivní využití kapitálu', 'EIS'],
        ['Ochranné', 'ochrana vlastnictví a osobnosti', 'ŘSS – MJS'],
        ['Účetní', 'výkazy, kalkulace, inventarizace', 'EIS'],
        ['<b>Správní</b> = řízení', 'předvídání, organizování, přikazování, koordinace a kontrola', 'ŘSS, OSS']
      ] },
      { t: 'p', x: 'Z poslední, <b>správní</b> skupiny vzniklo pět manažerských funkcí:' },
      { t: 'flow', title: 'Fayolových 5 funkcí (funkce správy)', steps: [
        { h: 'Plánování (planning)', x: 'stanovení budoucích cílů a postupu, jak jich dosáhnout' },
        { h: 'Organizování (organizing)', x: 'zabezpečení zdrojů (hmotných, finančních, lidských aj.), popř. podmínek pro uskutečnění plánovaných činností' },
        { h: 'Přikazování (directing)', x: 'dávání úkolů a instrukcí podřízeným spolupracovníkům' },
        { h: 'Koordinace (coordinating)', x: 'slaďování činností spolupracovníků' },
        { h: 'Kontrola (controlling)', x: 'ověřování souladu plánu a skutečnosti a přijetí závěrů' }
      ] },
      { t: 'icons', title: 'Fayolovy požadavky na řídícího pracovníka', items: [
        { i: '💪', h: 'Tělesné vlastnosti', x: 'zdraví, fyzická kondice' },
        { i: '🧠', h: 'Duševní vlastnosti', x: 'chápavost, schopnost učit se, soudnost, duševní pružnost' },
        { i: '⚖️', h: 'Mravní vlastnosti', x: 'zásadovost, odvaha, pevnost, odpovědnost, iniciativa, taktnost' },
        { i: '📖', h: 'Všeobecné vzdělání', x: 'obecný základ, který přímo nesouvisí s oborem' },
        { i: '🛠️', h: 'Speciální znalosti a zkušenosti', x: 'znalosti k vykonávané funkci a znalosti získané praxí' }
      ] },
      { t: 'p', x: '<b>14 principů managementu</b> jsou Fayolova pravidla, jak má dobře řízený podnik fungovat. Čísla jsou Fayolova; pro snazší zapamatování jsou principy rozdělené do tří oblastí:' },
      { t: 'versus', title: '14 Fayolových principů podle oblasti', cols: [
        { h: '👑 Kdo komu velí (moc a hierarchie)', items: ['<b>2. Autorita</b> – právo dávat příkazy a moc vyžadovat poslušnost', '<b>4. Jednota přikazování</b> – každý má jen jednoho nadřízeného', '<b>8. Centralizace</b> – rozhodnutí se tvoří shora', '<b>9. Skalární řetěz</b> – formální řetěz příkazů shora dolů jako v armádě'] },
        { h: '📐 Jak je uspořádaná práce (řád)', items: ['<b>1. Specializace pracovníků</b> – podněcuje zlepšování schopností a metod', '<b>3. Disciplína</b> – žádné uvolňování či změkčování pravidel', '<b>5. Jednota vedení</b> – jedna mysl, jeden plán, v němž každý hraje svou roli', '<b>10. Pořádek</b> – materiál i personál má své předepsané místo'] },
        { h: '🤝 Jak zacházet s lidmi', items: ['<b>6. Podřízenost osobních zájmů</b> – v práci jen pracovní zájmy', '<b>7. Odměňování</b> – odpovídající, ne víc, než podnik může postrádat', '<b>11. Rovnost</b> – rovnocenné nakládání', '<b>12. Držení personálu</b> – co nejmenší obměna, doživotní místo pro výborné lidi', '<b>13. Iniciativa</b> – vymyslet plán a udělat vše pro jeho uskutečnění', '<b>14. Morálka kolektivu</b> – harmonie a soudržnost'] }
      ], x: 'Fayolovy principy popisují podnik jako dobře seřízený stroj s jasnou hierarchií, pevným řádem a spravedlivým zacházením s lidmi. První skupina říká, kdo má moc a kudy tečou příkazy – jako v armádě, kde voják poslouchá jen svého velitele a rozkazy jdou shora dolů. Druhá skupina zajišťuje, že každý ví, co a jak dělat a kde co leží. Třetí skupina připomíná, že lidé musí být zaplacení, spravedlivě ohodnocení a mají držet pohromadě – jinak stroj nepojede.' },
      { t: 'tip', x: 'Nejčastěji se pletou: <b>jednota přikazování</b> = jeden <b>šéf</b> × <b>jednota vedení</b> = jeden <b>plán</b>. A <b>skalární řetěz</b> (cesta příkazů shora dolů) × <b>centralizace</b> (kde se rozhoduje – nahoře).' }
    ] },
    { title: 'Jak se koncepce funkcí vyvíjela (Urwick → Koontz a Weihrich)', blocks: [
      { t: 'p', x: 'Po Fayolovi další autoři jeho seznam <b>rozšiřovali, přejmenovávali a slučovali</b>. Časová osa ukazuje, kdo co přidal:' },
      { t: 'timeline', items: [
        { when: '1916', h: 'Henri Fayol – 5 funkcí', x: 'plánování, organizování, přikazování, koordinace, kontrola' },
        { when: 'po Fayolovi', h: 'Lyndal F. Urwick (Angličan) – 7 funkcí', x: 'k Fayolovým pěti přidal <b>6. zkoumání</b> (rozbor, investigating) a <b>7. komunikaci</b> (communicating)' },
        { when: '30. léta', h: 'Luther Gulick – POSDCORB (7 funkcí)', x: '<b>P</b>lanning, <b>O</b>rganizing, <b>S</b>taffing, <b>D</b>irecting, <b>CO</b>ordinating, <b>R</b>eporting, <b>B</b>udgeting = plánování, organizování, výběr a umísťování pracovníků, vedení, koordinování, reportování, rozpočtování' },
        { when: '1909–2005', h: 'Peter F. Drucker – 4 hlavní činnosti', x: 'stanovení cílů a způsobu jejich dosažení (= plánování), organizování, motivace a komunikace (= volba spolupracovníků a vedení lidí), měření (vyhodnocování výsledků); zkráceně <b>plánování, organizování, integrování, měření</b>' },
        { when: 'dnes', h: 'Harold Koontz a Heinz Weihrich – 5 funkcí', x: '<b>nejužívanější klasifikace</b> (učebnice managementu): plánování, organizování, výběr a rozmístění spolupracovníků (personální zajištění), vedení lidí, kontrola' }
      ] },
      { t: 'grid', head: ['Autor', 'Plánování', 'Organizování', 'Práce s lidmi', 'Koordinace / komunikace', 'Kontrola', 'Navíc'], rows: [
        ['<b>Fayol</b> (5)', 'plánování', 'organizování', 'přikazování', 'koordinace', 'kontrola', '–'],
        ['<b>Urwick</b> (7)', 'plánování', 'organizování', 'přikazování', 'koordinace, <b>komunikace</b>', 'kontrola', '<b>zkoumání</b>'],
        ['<b>Gulick</b> (7)', 'planning', 'organizing', 'staffing, directing', 'coordinating', '–', 'reporting, budgeting'],
        ['<b>Drucker</b> (4)', 'plánování', 'organizování', 'integrování (motivace a komunikace)', '–', 'měření', '–'],
        ['<b>Koontz a Weihrich</b> (5)', 'plánování', 'organizování', 'výběr a rozmístění, vedení lidí', '–', 'kontrola', '–']
      ] },
      { t: 'tip', x: 'Ve srovnání je vidět, že <b>plánování a organizování mají úplně všichni</b>. Rozdíly jsou hlavně v tom, jak autor nazve práci s lidmi (přikazování → staffing a directing → integrování → výběr a vedení lidí) a jestli uvede kontrolu (u Druckera „měření“).' }
    ] },
    { title: 'Dnešní pohled: sekvenční a paralelní funkce', blocks: [
      { t: 'p', x: 'Současné pojetí (sekvenční funkce odpovídají klasifikaci Koontze a Weihricha) dělí funkce na dvě skupiny podle toho, <b>kdy</b> probíhají. Jedny jdou <b>za sebou</b> jako kroky postupu, druhé běží <b>souběžně</b> s každým krokem.' },
      { t: 'svg', title: 'Sekvenční a paralelní manažerské funkce', x: TROS.sekvParal(), cap: 'Každou sekvenční funkci provází všechny tři paralelní – vzniká matice 5 × 3 (např. „rozhodování při plánování“, „analýza při kontrole“).' },
      { t: 'versus', cols: [
        { h: 'Sekvenční (realizují se postupně)', items: ['1. plánování', '2. organizování', '3. výběr a rozmístění pracovníků', '4. vedení lidí', '5. kontrola'] },
        { h: 'Paralelní (průběžné)', items: ['analýza problémů (analysis)', 'rozhodování (decision making)', 'realizace – implementace včetně koordinace (implementation, coordination)'] }
      ], x: 'Sekvenční funkce na sebe navazují v čase: firma, která chce zvýšit měsíční produkci, musí nejdřív záměr naplánovat, pak ho zorganizovat, vybrat a vést lidi a nakonec všechny kroky vyhodnotit a případně upravit. Paralelní funkce nejsou další kroky – běží uvnitř každého z nich. Manažeři analyzují plán, potřeby výroby, výkonnost pracovníků i kontrolní mechanismy; rozhodují o podobě plánu, o systému práce i kontroly; a při realizaci výroby koordinují pracovníky a dozor. Sekvenční funkce tedy odpovídají na otázku „co se dělá teď“, paralelní na otázku „jak se při tom přemýšlí a jedná“.' },
      { t: 'grid', head: ['Manažerské funkce', 'Analýza', 'Rozhodování', 'Implementace'], rows: [
        ['Plánování', 'jaké jsou potřeby a možnosti?', 'jaký plán přijmout?', 'spustit plán'],
        ['Organizování', 'jaké zdroje chybí?', 'jak práci uspořádat?', 'zajistit zdroje'],
        ['Výběr a rozmístění pracovníků', 'koho potřebujeme?', 'koho vybrat a kam?', 'přijmout a zařadit'],
        ['Vedení lidí', 'jak lidé pracují?', 'jak je motivovat?', 'úkolovat a koordinovat'],
        ['Kontrola', 'kde jsou odchylky?', 'je kontrolní systém vhodný?', 'provést nápravu']
      ] },
      { t: 'warn', x: 'Slajd „Manažerské funkce – matice“ ukazuje jen prázdnou tabulku 5 × 3. Otázky v buňkách jsou doplněné jako ilustrace, jak matici vyplnit – nejsou ze slajdu.' }
    ] },
    { title: 'Kritika funkcí: Mintzbergových 10 rolí', blocks: [
      { t: 'p', x: 'Ne všichni s koncepcí funkcí souhlasí. Kanaďan <b>Henry Mintzberg</b> (*1939) ji kritizuje v práci <i>The Nature of Management Work</i>: místo „co by manažer měl dělat“ popisuje, <b>jaké role skutečně hraje</b>. Činnosti vedoucích pracovníků shrnuje do <b>10 rolí ve 3 skupinách</b>.' },
      { t: 'svg', title: 'Mintzbergových 10 rolí ve 3 skupinách', x: TROS.mintzberg(), cap: '3 + 3 + 4 = 10. Interpersonální role vycházejí z formální pravomoci, informační z práce s informacemi, rozhodovací z cílevědomé činnosti.' },
      { t: 'p', x: '<b>1. Interpersonální role</b> („mezilidské vztahy“) vyplývají přímo z formální pravomoci a odpovědnosti vedoucího. Jde o udržování a rozvíjení kontaktů s partnery mimo organizaci (zákazníci, dodavatelé, banky, státní správa) i uvnitř ní (nadřízení, podřízení, odbory).' },
      { t: 'table', head: ['Role', 'Charakteristika'], rows: [
        ['Představitel organizace', '<i>figurehead</i> – právní a sociální oblast; na slajdu též „manažer s autoritou“'],
        ['Vůdce', '<i>leader</i> – motivování, vzdělávání, rozvoj'],
        ['Spojovací článek', '<i>liaison</i> – vnější vztahy podniku; na slajdu též „budovatel vztahů“']
      ] },
      { t: 'p', x: '<b>2. Informační role</b> („předávání informací“) spočívají v účasti na vytváření, sběru, přenosu, třídění, filtraci a využití informací.' },
      { t: 'table', head: ['Role', 'Charakteristika'], rows: [
        ['Monitorující příjemce informací', '<i>monitor</i> – organizace prostředí'],
        ['Šiřitel informací', '<i>disseminator</i> – transfer informací uvnitř'],
        ['Mluvčí organizace', '<i>spokesperson</i> – transfer informací vně']
      ] },
      { t: 'p', x: '<b>3. Rozhodovací role</b> („rozhodování“) jsou projevem cílevědomé činnosti k dosažení cílů organizace.' },
      { t: 'table', head: ['Role', 'Charakteristika'], rows: [
        ['Podnikatel', '<i>entrepreneur</i> – příležitosti, změny'],
        ['Řešitel problémů', '<i>disturbance-handler</i> – nápravná opatření; na slajdu též „krizový manažer“'],
        ['Alokátor zdrojů', '<i>resource-allocator</i> – alokování zdrojů organizace'],
        ['Vyjednavač', '<i>negotiator</i> – jednání v zájmu podniku']
      ] },
      { t: 'versus', title: 'Funkce × role', cols: [
        { h: 'Manažerské funkce (Fayol a následovníci)', items: ['popisují, <b>co</b> má manažer udělat', 'kroky postupu: plánuj, organizuj, veď, kontroluj', 'logický, „ideální“ model'] },
        { h: 'Manažerské role (Mintzberg)', items: ['popisují, <b>jak se manažer chová</b> a co od něj okolí čeká', '10 rolí ve 3 skupinách: lidé, informace, rozhodnutí', 'vychází z pozorování skutečné práce'] }
      ], x: 'Funkce jsou jako recept: nejdřív naplánuj, pak zorganizuj, nakonec zkontroluj. Mintzberg si všiml, že skutečný den manažera takhle uspořádaný není – manažer v jednu chvíli zastupuje firmu na veletrhu (představitel), za hodinu předává týmu novinky z porady (šiřitel) a odpoledne řeší porouchanou linku (řešitel problémů). Role proto popisují chování manažera v různých situacích, ne kroky postupu. Obě koncepce se nevylučují: funkce říkají, čeho má manažer dosáhnout, role ukazují, jak u toho jedná.' },
      { t: 'tip', x: 'Zapamatuj <b>3 + 3 + 4 = 10</b>. <b>Lidé</b>: představitel, vůdce, spojka. <b>Informace</b>: monitor (sbírá), šiřitel (dovnitř), mluvčí (ven). <b>Rozhodnutí</b>: podnikatel, řešitel problémů, alokátor zdrojů, vyjednavač.' }
    ] },
    { title: 'Co rozhoduje o úspěchu: koncepce 7 S', blocks: [
      { t: 'p', x: 'Poslední otázka zní: <b>na čem závisí, jestli je manažerská práce úspěšná?</b> Odpovídají koncepce <b>kritických faktorů úspěchu (CSF – Critical Success Factors)</b>. Nejrozšířenější jsou koncepce <b>„7 S“</b> konzultační firmy <b>McKinsey</b> a koncepce kritických faktorů úspěchu <b>K. H. Chunga</b>.' },
      { t: 'svg', title: 'Koncepce 7 S', x: TROS.sedmS(), cap: 'Všech šest S je propojeno navzájem – změna jednoho ovlivní ostatní. Spojuje je sedmé S: sdílené hodnoty (podniková kultura).' },
      { t: 'table', head: ['S', 'Obsah'], rows: [
        ['Strategie', 'vychází z vize a poslání firmy (výroba, služba); dlouhodobá orientace a směřování k cílům; obvykle volné pokyny k dodržování a popisy aktivit nutných k dosažení cílů'],
        ['Struktura', 'organizační a řídící struktura (viz téma Struktury)'],
        ['Systémy', 'především informační systémy'],
        ['Styl', 'styl řízení: autoritativní, demokratický, liberální (viz téma Vedení lidí)'],
        ['Schopnosti', 'adaptace a rozvoj, řídící struktura'],
        ['Spolupráce', 'zvyšování výkonnosti × provozní riziko'],
        ['<b>Sdílené hodnoty</b>', 'střed koncepce – podniková kultura, která drží ostatních šest S pohromadě']
      ] },
      { t: 'ex', x: 'Firma změní <b>strategii</b> z levné masové výroby na prémiové výrobky. Bez změny ostatních S to nefunguje: potřebuje jinou <b>strukturu</b> (vývojové oddělení), jiné <b>systémy</b> (sledování kvality), jiný <b>styl</b> řízení (víc prostoru pro nápady), nové <b>schopnosti</b> lidí a <b>spolupráci</b> napříč odděleními. A hlavně musí lidé kvalitu brát jako <b>sdílenou hodnotu</b>.' }
    ] },
    { title: 'Širší historie managementu (doplněno)', blocks: [
      { t: 'warn', x: 'Tato sekce není v podkladech. Slajdy k přednášce 11 zařazují Fayola do etapy „1. Technokratický přístup – Klasické školy řízení – <b>C.</b> Správní řízení“, ostatní etapy a školy ale neuvádějí. Přehled níže je jen pro orientaci; u zkoušky se drž Fayola a koncepcí funkcí výše.' },
      { t: 'timeline', items: [
        { when: 'kolem 1900', h: 'Klasické školy – vědecké řízení (F. W. Taylor)', x: 'zvyšování produktivity práce dělbou práce, normováním a stimuly' },
        { when: 'kolem 1900', h: 'Klasické školy – byrokratický model (M. Weber)', x: 'pevná pravidla, hierarchie, formální vztahy' },
        { when: '1916', h: 'Klasické školy – správní řízení (H. Fayol)', x: 'funkce a principy managementu (viz výše)' },
        { when: '20.–30. léta', h: 'Škola lidských vztahů (E. Mayo)', x: 'důraz na člověka, skupinu a motivaci (Hawthornské experimenty)' },
        { when: 'od 60. let', h: 'Systémový a situační přístup', x: 'organizace jako systém v okolí – navazuje na téma Systém' }
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit Fayolových 5 funkcí (plánování, organizování, přikazování, koordinace, kontrola) s Gulickovými 7 (POSDCORB) nebo s Urwickovým rozšířením o zkoumání a komunikaci.',
    'Brát paralelní funkce (analýza, rozhodování, realizace) jako další kroky za kontrolou – probíhají souběžně s každou sekvenční funkcí.',
    'Brát Fayolův princip „jednota přikazování“ jako „jednotu vedení“ – první znamená jednoho nadřízeného, druhé jeden plán.',
    'U Mintzberga zapomenout, že rolí je 10 (3 + 3 + 4), nebo že jde o kritiku koncepce funkcí, ne o další seznam funkcí.',
    'U 7 S vynechat sdílené hodnoty – jsou středem koncepce (podniková kultura).'
  ],
  qa: [
    { q: 'Co jsou manažerské funkce a kdo je zakladatelem této koncepce?', a: 'Typické a podstatné činnosti, které manažer vykonává a musí zvládnout. Zakladatelem je Henri Fayol (1841–1925), který v roce 1916 definoval pět funkcí správy.' },
    { q: 'Jak Fayol vymezil manažerské funkce?', a: 'Plánování (cíle a postup), organizování (zdroje a podmínky), přikazování (úkoly a instrukce), koordinace (slaďování činností) a kontrola (ověřování souladu plánu a skutečnosti).' },
    { q: 'Do jaké vývojové etapy managementu Fayol patří?', a: 'Technokratický přístup – klasické školy řízení, konkrétně správní řízení (správní teorie): vědecké zkoumání principů organizace a správních (řídících) činností.' },
    { q: 'Jaké skupiny činností podniku Fayol rozlišil?', a: 'Technické (výroba), obchodní (nákup, prodej), finanční (kapitál), ochranné (vlastnictví a osobnost), účetní (výkazy, kalkulace) a správní (předvídání, organizování, přikazování, koordinace, kontrola).' },
    { q: 'Vyjmenujte aspoň osm z 14 Fayolových principů.', a: 'Specializace, autorita, disciplína, jednota přikazování, jednota vedení, podřízenost osobních zájmů, odměňování, centralizace, skalární řetěz, pořádek, rovnost, držení personálu, iniciativa, morálka kolektivu.' },
    { q: 'Co přidal Urwick a co je POSDCORB?', a: 'Urwick k Fayolovi přidal zkoumání (rozbor) a komunikaci. Gulick ve 30. letech uspořádal funkce do POSDCORB: planning, organizing, staffing, directing, coordinating, reporting, budgeting.' },
    { q: 'Jaké hlavní činnosti manažera uvádí Drucker a Koontz s Weihrichem?', a: 'Drucker: plánování, organizování, integrování (motivace a komunikace) a měření. Koontz a Weihrich (nejužívanější): plánování, organizování, výběr a rozmístění spolupracovníků, vedení lidí, kontrola.' },
    { q: 'Co jsou sekvenční a paralelní manažerské funkce?', a: 'Sekvenční se realizují postupně: plánování, organizování, výběr a rozmístění pracovníků, vedení lidí, kontrola. Paralelní probíhají průběžně v každém kroku: analýza problémů, rozhodování, realizace včetně koordinace.' },
    { q: 'Popište Mintzbergových 10 rolí.', a: 'Interpersonální: představitel, vůdce, spojovací článek. Informační: monitor, šiřitel, mluvčí. Rozhodovací: podnikatel, řešitel problémů, alokátor zdrojů, vyjednavač.' },
    { q: 'Co je koncepce 7 S?', a: 'Koncepce kritických faktorů úspěchu od McKinsey: strategie, struktura, systémy, styl, schopnosti, spolupráce a uprostřed sdílené hodnoty (podniková kultura).' }
  ]
});
