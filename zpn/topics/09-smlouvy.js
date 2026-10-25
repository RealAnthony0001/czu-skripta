registerTopic({
  id: 'smlouvy', order: 9, icon: '🤝', title: 'Relativní majetková práva: závazky a smlouvy', src: 'doplneno', lec: [6], where: 'Přednáška 6 + Cvičení 3',
  summary: 'Závazkové právo v NOZ: absolutní × relativní práva, vznik a zánik závazku, uzavření smlouvy, zajištění, prodlení a přehled nominátních smluv (kupní, o dílo, nájem, darování, půjčka, výpůjčka, pojistná, mandátní).',
  vocab: [
    {w:'Právní jednání',x:'Projev vůle, kterým někdo zakládá, mění nebo ruší práva a povinnosti (smlouva, výpověď, odstoupení).'},
    {w:'Spotřebitel × podnikatel',x:'Spotřebitel jedná mimo své podnikání (koupí věc pro sebe) a má zvláštní ochranu; podnikatel jedná v rámci výdělečné činnosti.'},
    {w:'Dispozitivní × kogentní ustanovení',x:'Dispozitivní se lze smlouvou odchýlit, kogentní ne; obsah smlouvy se tedy řídí zákonem jen v mezích kogentních norem.'},
    {w:'Veřejná listina',x:'Úřední dokument vydaný k tomu oprávněnou osobou, např. notářský zápis; zákon ji vyžaduje u významných smluv.'},
    {w:'Katastr nemovitostí a vklad',x:'Veřejný seznam nemovitostí; vlastnictví nemovitosti vzniká až zápisem (vkladem) do katastru.'},
    {w:'Akcesorita',x:'Vedlejší závislost: ručení nebo zástava zanikne či se změní spolu s hlavním dluhem, který zajišťují.'},
    {w:'Ex tunc × ex nunc',x:'Ex tunc = s účinky zpětně od počátku; ex nunc = jen od nynějška do budoucna.'},
    {w:'Moderace',x:'Právo soudu snížit nepřiměřeně vysokou částku (smluvní pokutu, náhradu škody).'}
  ],
  key: [
    '<b>Absolutní práva</b> působí <b>erga omnes</b> (vlastnictví, osobnostní práva) × <b>relativní práva</b> působí jen mezi stranami (<b>inter partes</b>) – pohledávky ze závazků.',
    '<b>Závazek</b> = právní vztah, ve kterém má <b>věřitel</b> právo na plnění a <b>dlužník</b> povinnost plnit; vzniká <b>smlouvou</b>, protiprávním činem, bezdůvodným obohacením, jinou skutečností.',
    '<b>Smlouva</b> vzniká <b>nabídkou (návrhem) a jejím přijetím</b>; přijetí s dodatkem nebo odchylkou = nový návrh; mlčení samo o sobě přijetím není.',
    '<b>Zajištění závazků</b>: zástava, ručení, smluvní pokuta, závdavek, uznání dluhu, zajišťovací převod práva.',
    '<b>Zánik závazku</b>: splnění, dohoda, započtení, odstoupení, výpověď, uplynutí doby, nemožnost plnění, splynutí, smrt (u osobních závazků).',
    '<b>Prodlení</b> dlužníka = nesplnění v době splatnosti → úrok z prodlení (repo sazba ČNB + 8 p. b.); prodlení věřitele = nepřevzetí plnění.',
    '<b>Kupní smlouva</b>: odevzdat věc a převést vlastnictví × zaplatit cenu; vady věci (opravit, vyměnit, sleva, odstoupení); u spotřebitele zákonná záruka 24 měsíců.',
    '<b>Smlouva o dílo</b>: zhotovitel provede dílo na svůj náklad a nebezpečí → objednatel platí cenu; <b>nájem</b>: pronajímatel dává věc k užívání → nájemné; nájem bytu je silně regulován.'
  ],
  sections: [
    { title: 'Relativní práva a závazek', blocks: [
      { t: 'table', head: ['', 'Absolutní práva', 'Relativní práva'], rows: [
        ['Účinky', 'vůči <b>každému</b> (erga omnes)', 'jen vůči <b>určité osobě</b> (inter partes)'],
        ['Povinná osoba', 'všichni ostatní – musí se zdržet zásahu', 'dlužník – musí konkrétně plnit'],
        ['Příklady', 'vlastnictví, osobnostní práva, práva autorská, patentová, rodinná', 'pohledávky ze smlouvy, z deliktu, z bezdůvodného obohacení'],
        ['Typ povinnosti', 'negativní (zdržet se) – i pozitivní', 'zpravidla pozitivní (dát, konat, trpět, zdržet se)'],
        ['Ochrana', 'proti komukoli (vlastnická žaloba)', 'jen proti dlužníkovi (žaloba o plnění)'],
        ['Vznik', 'zákonem, právní skutečností', 'smlouva, delikt, BO, jiná skutečnost']
      ] },
      { t: 'def', term: 'Závazek (obligace)', x: 'Právní vztah, v němž má <b>věřitel</b> právo na plnění (pohledávka) a <b>dlužník</b> povinnost plnit (dluh).', items: ['předmětem je <b>plnění</b> – dát, konat, zdržet se, trpět', 'úprava: NOZ část čtvrtá (§ 1721 an.)'] },
      { t: 'table', head: ['Vznik závazku', 'Příklad'], rows: [
        ['<b>Smlouva</b>', 'kupní, nájemní, o dílo'],
        ['<b>Protiprávní čin</b> (delikt)', 'způsobení škody → povinnost k náhradě'],
        ['<b>Bezdůvodné obohacení</b>', 'omylem poslané peníze'],
        ['<b>Jednostranné právní jednání</b>', 'veřejný příslib, slib odškodnění'],
        ['<b>Jednatelství bez příkazu</b>', 'sousedovi opravím střechu po bouři'],
        ['<b>Jiná právní skutečnost</b>', 'rozhodnutí soudu, událost']
      ] },
      { t: 'p', x: '<b>Subjekty</b>: věřitel × dlužník (může jich být více – <b>solidarita</b>: věřitel může žádat plnění po kterémkoli dlužníkovi; <b>dílčí</b>: každý jen svůj podíl). <b>Obsah</b>: hlavní plnění (primární závazek) × vedlejší práva (úroky, smluvní pokuta). <b>Předmět</b> musí být možný, určitý a dovolený.' },
      { t: 'tip', x: 'Zapamatuj si: absolutní = <b>proti všem</b> (vlastním dům – kdokoli ho musí respektovat). Relativní = <b>proti jednomu</b> (dlužím ti 5000 – jen já ti musím platit).' }
    ] },
    { title: 'Uzavření smlouvy a její obsah', blocks: [
      { t: 'p', x: '<b>Smlouva</b> = vícestranné právní jednání (dvou či více stran), kterým vzniká závazek. Zásady: <b>smluvní svoboda</b> (volba partnera, obsahu, formy – s mezemi kogentních ustanovení), <b>pacta sunt servanda</b> (smlouvy se musí dodržovat), <b>dobrá víra</b> a poctivé jednání (§ 6; povinnost poctivého jednání platí už při vyjednávání).' },
      { t: 'table', head: ['Krok', 'Pravidlo'], rows: [
        ['<b>Návrh (nabídka)</b> § 1731', 'musí být <b>určitý</b> a projev vůle navrhovatele být <b>vázán</b>; adresován určité osobě; obsahuje alespoň podstatné náležitosti; veřejný návrh – neurčitému okruhu'],
        ['<b>Přijetí (akceptace)</b>', 'projev souhlasu s návrhem; musí <b>dojít navrhovateli</b>; v lhůtě danou návrhem či přiměřené'],
        ['Přijetí s <b>odchylkou</b>', 'odmítnutí a <b>nový návrh</b> (protinávrh); jen <b>nepodstatná odchylka</b> nebrání vzniku smlouvy, pokud navrhovatel neodmítl'],
        ['<b>Mlčení</b>', 'samo o sobě <b>nestačí</b> jako přijetí'],
        ['Okamžik vzniku', 'smlouva vzniká, když přijetí dojde navrhovateli'],
        ['<b>Odvolání návrhu</b>', 'lze odvolat, dokud nebyl přijat; neodvolatelný je návrh, ve kterém je stanovena lhůta k přijetí']
      ] },
      { t: 'p', x: '<b>Podstatné náležitosti</b> = to, co strany musí ujednat, aby smlouva vznikla (zákon je určí pro nominátní smlouvy; jinak podle toho, co strany označily za podstatné). Co zákon neurčuje a strany nedohodly, doplní <b>dispozitivní</b> ustanovení nebo zvyklosti.' },
      { t: 'table', head: ['Hledisko', 'Varianta'], rows: [
        ['<b>Forma</b>', 'volná (ústní) × písemná (nemovitosti, ručení, DPP) × veřejná listina (zúžení SJM, převod podílu v s.r.o.)'],
        ['<b>Podle plnění</b>', 'jednostranné × dvoustranné (synallagmatické) × vícestranné'],
        ['<b>Podle úplatnosti</b>', 'úplatné (kupní) × bezúplatné (darování, výpůjčka)'],
        ['<b>Podle regulace</b>', 'nominátní (pojmenované) × inominátní (nepojmenované) × smíšené'],
        ['<b>Adhezní</b> smlouva', 'obsah určuje jedna strana (VOP, formuláře) – silnější ochrana slabší strany (§ 1798)'],
        ['<b>Spotřebitelská</b> smlouva', 'podnikatel × spotřebitel; zvláštní ochrana (14denní odstoupení u distančních smluv, nepřiměřená ujednání)']
      ] },
      { t: 'warn', x: 'Odlišuj <b>smlouvu o smlouvě budoucí</b> (zavazuje k uzavření konkrétní smlouvy – např. smlouva o smlouvě kupní) a <b>předsmluvní odpovědnost</b> (kdo vyjednává nepoctivě a zruší jednání bez spravedlivého důvodu, odpovídá za škodu). Neplatnost smlouvy se řídí obecnou částí NOZ (absolutní × relativní neplatnost).' }
    ] },
    { title: 'Zajištění závazků, prodlení, zánik', blocks: [
      { t: 'table', head: ['Institut', 'Podstata', 'Poznámky'], rows: [
        ['<b>Zástava</b> (§ 1309 an.)', 'věcné právo – věřitel se uspokojí z věci při nesplnění', 'zástavní právo k věci movité (ruční zástava) i nemovité (zápis do katastru); i k pohledávce, podílu'],
        ['<b>Ručení</b> (§ 2018 an.)', 'ručitel se zaváže uspokojit věřitele, nesplní-li dlužník', 'ručitelské prohlášení v písemné formě; ručí <b>celým majetkem</b>; akcesorické'],
        ['<b>Smluvní pokuta</b> (§ 2048 an.)', 'dohodnutá peněžitá částka za porušení povinnosti', 'věřitel nemusí prokazovat škodu; soud může <b>moderovat</b> nepřiměřenou; musí být dohodnuta výslovně; škodu nad pokutu lze žádat jen při dohodě'],
        ['<b>Závdavek</b>', 'záloha při uzavření smlouvy; podle zavinění propadne dávajícímu, nebo ho přijímající vrací (v dvojnásobku)', 'splnění → započte se na cenu'],
        ['<b>Uznání dluhu</b>', 'dlužník písemně uznává dluh', 'přeruší promlčení, domněnka existence dluhu'],
        ['<b>Zajišťovací převod práva</b>', 'věřitel dočasně získá vlastnictví věci', 'po splnění vrácení']
      ] },
      { t: 'table', head: ['Ručení', 'Zástava'], rows: [
        ['osobní zajištění – ručitel ručí <b>celým svým majetkem</b>', 'věcné zajištění – zajištěno je <b>konkrétní věcí</b>'],
        ['proti ručiteli se věřitel domáhá po výzvě dlužníkovi a splatnosti', 'prodej zástavy mimo soud či soudem; přednostní uspokojení'],
        ['zánik s hlavním dluhem (akcesorita)', 'zánik se zajišťovanou pohledávkou']
      ] },
      { t: 'def', term: 'Prodlení dlužníka', x: 'Dlužník <b>neplní včas</b> (po splatnosti), a to není-li jeho vina vyloučena.', items: ['věřitel má nárok na <b>úrok z prodlení</b> (nařízení vlády 351/2013 Sb.: repo sazba ČNB platná na začátku pololetí + 8 procentních bodů)', 'případně náklady spojené s uplatněním pohledávky (paušál 1 200 Kč pro podnikatele u opožděné platby)', 'prodlení <b>věřitele</b> = odmítne přijmout řádné plnění'] },
      { t: 'table', head: ['Způsob zániku', 'Obsah', 'Příklad'], rows: [
        ['<b>Splnění</b>', 'řádné splnění ve smluveném čase, místě a způsobu', 'zaplacení kupní ceny'],
        ['<b>Dohoda</b>', 'smlouva stran o zrušení nebo změně', 'dohoda o zrušení nájmu'],
        ['<b>Započtení</b>', 'vzájemné pohledávky stejného druhu se vzájemně vyruší (právo i jednostranné) – nejlépe splatné, vzájemné, stejný druh', 'dlužím ti 10 000, ty mně 8 000 → zbývá 2 000'],
        ['<b>Odstoupení od smlouvy</b>', 'jednostranné právní jednání, zrušuje smlouvu <b>zpětně</b> (od počátku); při podstatném porušení nebo ze zákona/ujednání', 'odstoupení od kupní smlouvy pro vadu'],
        ['<b>Výpověď</b>', 'jednostranné ukončení smlouvy na dobu neurčitou <b>do budoucna</b>', 'výpověď nájmu, pracovního poměru'],
        ['<b>Uplynutí doby</b>', 'sjednaná doba skončila', 'nájem na 2 roky'],
        ['<b>Nemožnost plnění</b>', 'následná nemožnost, kterou nezavinil dlužník', 'zničení věci'],
        ['<b>Splynutí</b>', 'věřitel a dlužník se stanou jednou osobou', 'dědictví po věřiteli'],
        ['<b>Smrt</b>', 'jen u závazků vázaných na osobu', 'osobní služby']
      ] },
      { t: 'warn', x: '<b>Odstoupení</b> × <b>výpověď</b>: odstoupení působí zpětně (ex tunc) a vrací se plnění; výpověď jen do budoucna (ex nunc). Odstoupit lze, jen je-li to dohodnuto/zákon dovoluje (u podstatného porušení). Výpovědí lze ukončit smlouvu na dobu neurčitou.' },
      { t: 'warn', x: '<b>Promlčení</b>: obecně 3 roky od doby, kdy právo mohlo být uplatněno (objektivní 10 let). Promlčené právo nezaniká – dlužník se může odvolat na promlčení; plní-li, nemůže požadovat zpět. Soud promlčení nezohlední sám.' }
    ] },
    { title: 'Kupní smlouva a smlouva o dílo', blocks: [
      { t: 'def', term: 'Kupní smlouva (§ 2079 an.)', x: 'Prodávající se zavazuje <b>odevzdat kupujícímu věc</b> a umožnit mu nabýt vlastnictví, kupující se zavazuje věc <b>převzít</b> a <b>zaplatit kupní cenu</b>.', items: ['podstatná náležitost: <b>určení věci</b>', 'cena nemusí být přímo ujednána – kupní cena se pak určí (<b>obvyklá cena</b> – § 2085)'] },
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['Forma', 'volná; nemovitosti – písemná + <b>vklad do katastru nemovitostí</b> (vlastnictví vzniká vkladem, s účinky ke dni podání návrhu); movité – převzetím'],
        ['Předmět', 'věc určená individuálně nebo druhově; budoucí věc; věc cizí (nutno prodávajícím zajistit)'],
        ['Povinnosti prodávajícího', 'odevzdat věc, doklady, bez právních vad (třetí osoba nemá práva), <b>bez věcných vad</b>'],
        ['Povinnosti kupujícího', 'převzít věc, <b>zaplatit cenu</b>, prohlédnout věc a včas vytknout vady'],
        ['<b>Nebezpečí škody</b>', 'přechází na kupujícího převzetím věci (nebo okamžikem, kdy mu prodávající umožnil nakládat s věcí a kupující ji nepřevzal)'],
        ['<b>Vlastnictví</b>', 'přechází převzetím (movitá) / vkladem (nemovitá); může se dohodnout výhrada vlastnictví do zaplacení'],
        ['Zvláštní ujednání', 'výhrada vlastnictví, předkupní právo, zpětná koupě, koupě na zkoušku, koupě s právem vrácení']
      ] },
      { t: 'table', head: ['Práva z vadného plnění', 'Kdy'], rows: [
        ['Odstranění vady (oprava) / dodání nové věci', 'primární nároky; u odstranitelné vady'],
        ['<b>Přiměřená sleva</b> z ceny', 'vada nebyla odstraněna včas nebo nemůže být'],
        ['<b>Odstoupení od smlouvy</b>', 'vada podstatná (zásadní porušení)'],
        ['Náhrada škody', 'dle obecných pravidel']
      ] },
      { t: 'p', x: '<b>Záruka</b>: u spotřebitelského prodeje zákonná odpovědnost za vady (<b>24 měsíců</b> od převzetí, u použité věci lze zkrátit na 12 měsíců); vada, která se projeví do 1 roku, se považuje za existující při převzetí. Prodávající musí reklamaci vyřídit bez zbytečného odkladu, nejpozději do <b>30 dnů</b>. Spotřebitelská práva dále upravuje zák. 634/1992 Sb. o ochraně spotřebitele. <b>Smluvní záruka</b> (např. 5 let) je nad rámec zákona a zavazuje prodávajícího.' },
      { t: 'ex', x: 'Pepa koupil v e-shopu notebook za 20 000 Kč; po 8 měsících se rozbila základní deska. Reklamuje v rámci zákonné odpovědnosti za vady (24 měsíců): má nárok na opravu či výměnu, při opakování vady na slevu nebo odstoupení. Jako spotřebitel může od smlouvy uzavřené distančně i odstoupit do 14 dnů od převzetí bez udání důvodu.' },
      { t: 'def', term: 'Smlouva o dílo (§ 2586 an.)', x: 'Zhotovitel se zavazuje <b>provést na svůj náklad a nebezpečí</b> pro objednatele dílo a objednatel se zavazuje dílo převzít a zaplatit cenu.', items: ['dílem se rozumí zhotovení věci, údržba, oprava, úprava věci, nebo jiný výsledek činnosti'] },
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['Strany', '<b>zhotovitel</b> (provádí dílo) × <b>objednatel</b> (platí cenu, spolupůsobí)'],
        ['Podstatná náležitost', 'určení díla (a ceny – nebo způsob určení: nebude-li dohodnuta, platí obvyklá)'],
        ['<b>Nebezpečí škody</b> na zhotovované věci', 'nese <b>zhotovitel</b> do předání'],
        ['Cena', 'pevná, podle rozpočtu (závazný × orientační), podle skutečných nákladů; práce navíc se platí jen s dohodou'],
        ['Provedení', 'zhotovitel dílo provádí <b>osobně nebo podzhotovitelem</b> (odpovídá za něj jako sám); dohled objednatele; objednatel se zavazuje poskytnout součinnost'],
        ['Vady díla', 'práva z vad: oprava, sleva, odstoupení; záruka 24 měsíců (stavby 5 let – § 2629)'],
        ['Odstoupení objednatele', 'může kdykoli do dokončení (zaplatí cenu sníženou o to, co zhotovitel ušetřil)'],
        ['Zvláštní: stavební dílo', 'zhotovitel odpovídá za vady 5 let; zákon 183/2006 Sb. (stavební zákon)']
      ] },
      { t: 'table', head: ['Kupní smlouva', 'Smlouva o dílo'], rows: [
        ['zboží se kupuje, převedení vlastnictví věci', 'zhotovení, oprava, výsledek činnosti na zakázku'],
        ['předmětem je věc existující / hotová', 'předmětem je výsledek, který zhotovitel teprve vytvoří'],
        ['nebezpečí škody nese zpravidla prodávající do převzetí', 'zhotovitel do předání díla'],
        ['kupní cena', 'cena díla']
      ] },
      { t: 'tip', x: 'Odlišení: kupuje-li kupující <b>hotovou</b> věc → kupní smlouva. Nechává-li si věc <b>zhotovit podle svých požadavků</b> → smlouva o dílo. Opravuji auto = smlouva o dílo; koupím auto = kupní smlouva.' }
    ] },
    { title: 'Nájem a další nominátní smlouvy', blocks: [
      { t: 'def', term: 'Nájemní smlouva (§ 2201 an.)', x: '<b>Pronajímatel</b> přenechá <b>nájemci</b> věc k dočasnému užívání nebo k užívání a požívání; nájemce se zavazuje platit <b>nájemné</b>.', items: ['forma je zásadně volná', 'u nemovitostí a bytů je písemná smlouva vždy vhodná (důkaz, katastr u dlouhodobých nájmů)'] },
      { t: 'table', head: ['Nájem bytu (§ 2235 an.)', 'Pravidlo'], rows: [
        ['Strany', 'pronajímatel (vlastník) × nájemce; spolunájemci (manželé)'],
        ['Forma', 'písemná (vhodná – důkazní)'],
        ['<b>Kauce (jistota)</b> § 2254', 'nejvýše <b>trojnásobek měsíčního nájemného</b>; vrací se do 1 měsíce po skončení nájmu (pokud nevznikl dluh)'],
        ['<b>Nájemné</b>', 'platí se předem za měsíc; úpravy zvýšení – v souladu s dohodou/zákonem (zákon omezuje zvýšení)'],
        ['<b>Podnájem</b> § 2274', 'nájemce může byt či jeho část dát do podnájmu <b>se souhlasem pronajímatele</b>; bez souhlasu hrubé porušení → důvod výpovědi'],
        ['<b>Výpověď nájemcem</b>', 'u nájmu na dobu neurčitou bez uvedení důvodu, <b>3 měsíce</b>'],
        ['<b>Výpověď pronajímatelem</b>', 'jen z <b>zákonných důvodů</b> (neplacení nájemného, hrubé porušení, potřeba pro sebe/příbuzné…); musí být písemná, odůvodněná, <b>s poučením</b> o právu navrhnout přezkoumání soudem (do 2 měsíců)'],
        ['Zánik', 'uplynutím doby, dohodou, výpovědí, odstoupením (pro podstatné porušení), smrtí nájemce (přechod na osoby žijící ve společné domácnosti)'],
        ['Zákaz', 'pronajímatel nesmí odpojit služby ani nájemce vystěhovat bez soudu – je to protiprávní']
      ] },
      { t: 'table', head: ['Nominátní smlouva', 'Podstata', 'Paragrafy / zvláštnosti'], rows: [
        ['<b>Darovací</b>', 'dárce <b>bezúplatně</b> převádí vlastnictví daru obdarovanému', '§ 2055 an.; nemovitosti – písemná; <b>odvolání daru pro nevděk</b> (§ 2068)'],
        ['<b>Půjčka</b>', 'věřitel půjčí peníze (nebo zastupitelnou věc), dlužník vrátí stejnou věc stejného druhu', '§ 2390 an.; bezúročná × úročná; <b>úvěr</b> (smlouva o úvěru – banka)'],
        ['<b>Výpůjčka</b>', '<b>bezplatné</b> dočasné přenechání <b>nespotřebovatelné</b> věci k užívání', '§ 2193 an.; vypůjčitel vrací tutéž věc'],
        ['<b>Pojistná</b>', 'pojistitel poskytne pojistné plnění při pojistné události; pojistník platí pojistné', '§ 2758 an.; pojistné riziko, pojistná doba, pojistná hodnota; pojištění škodové × obnosové (životní)'],
        ['<b>Příkazní (mandátní)</b>', 'příkazník obstará pro příkazce záležitost, příkazce platí odměnu', '§ 2430 an.; zastoupení = plná moc (jednání jménem zastoupeného)'],
        ['<b>Komise / Zprostředkování</b>', 'komisionář jedná vlastním jménem na účet komitenta; zprostředkovatel obstará příležitost', 'obchodní zástup, zprostředkování'],
        ['<b>Přeprava</b>', 'dopravce přepraví osobu/věc, odesilatel platí', 'spotřebitelé – jízdenka'],
        ['<b>Smlouva o ubytování</b>, <b>pacht</b>', 'pacht – užívání a požívání věci (zemědělský pozemek, podnik) za pachtovné', '§ 2332 an.']
      ] },
      { t: 'warn', x: 'Darování je <b>bezúplatné</b> – nabývá se převodem vlastnictví (movité předáním, nemovité vkladem). Zákon dovoluje <b>odvolání daru</b> při hrubém nevděku obdarovaného. Dar přijatý jedním z manželů do SJM nepatří (viz rodinné právo).' },
      { t: 'ex', x: 'Pepa pronajal byt Marii bez písemné smlouvy za 15 000 Kč měsíčně; Marie složila kauci 60 000 Kč (4 měsíce). Kauce je nadměrná → nejvýše trojnásobek (45 000 Kč), část 15 000 Kč musí pronajímatel vrátit hned; po skončení nájmu vrací do 1 měsíce.' }
    ] }
  ],
  mistakes: [
    'Zaměňování absolutních a relativních práv: vlastnictví (absolutní) × pohledávka (relativní). Pohledávka se vůči třetím osobám zásadně neprosazuje.',
    'Přijetí nabídky <b>s dodatkem nebo odchylkou</b> není přijetím, ale novým návrhem; mlčení se nepovažuje za souhlas.',
    'Záměna <b>odstoupení</b> (zpětně, jednostranně, jen ze zákona/dohodnutých důvodů) a <b>výpovědi</b> (do budoucna, u smluv na dobu neurčitou).',
    'Smluvní pokuta × náhrada škody: pokuta se platí bez důkazu škody, soud ji může snížit; škodu nad pokutu lze jen při dohodě.',
    'Kupní smlouva × smlouva o dílo: u díla se výsledek teprve vytváří na zakázku a nebezpečí škody nese zhotovitel.',
    'Nebezpečí škody a přechod vlastnictví u kupní smlouvy neplatí zároveň vždy (u nemovitostí vzniká vlastnictví vkladem, nebezpečí škody převzetím).',
    'Kauce u nájmu bytu: max. trojnásobek měsíčního nájemného (§ 2254).',
    'Ručení × zástava: ručitel ručí celým majetkem (osobní zajištění), zástava je věcné zajištění konkrétní věcí.'
  ],
  qa: [
    { q: 'Rozdíl mezi absolutními a relativními majetkovými právy.', a: '<b>Absolutní</b> působí vůči všem (erga omnes) – vlastnictví, věcná práva, osobnostní, duševní vlastnictví. <b>Relativní</b> působí jen mezi stranami závazku (inter partes) – pohledávka věřitele vůči dlužníkovi, vzniká zejména ze smlouvy, deliktu, BO.' },
    { q: 'Jak vzniká smlouva? Jak se řeší přijetí návrhu s odchylkou?', a: 'Přijetím návrhu (nabídky) adresátem; smlouva vzniká, když přijetí dojde navrhovateli. Přijetí s dodatkem nebo odchylkou je odmítnutím a novým návrhem (jen nepodstatná odchylka nebrání vzniku, pokud ji navrhovatel neodmítne). Mlčení samo o sobě přijetím není.' },
    { q: 'Vyjmenuj způsoby zajištění závazku.', a: 'Zástava, ručení, smluvní pokuta, závdavek, uznání dluhu, zajišťovací převod práva, (zadržovací právo). Zajišťují jistotu plnění a prosazení pohledávky.' },
    { q: 'Jak zanikne závazek?', a: 'Splněním, dohodou, započtením, odstoupením od smlouvy, výpovědí, uplynutím doby, nemožností plnění, splynutím, smrtí (u osobních závazků); ve stanovených případech též prominutím dluhu, vzdáním se práva.' },
    { q: 'Co je prodlení dlužníka a jaké má důsledky?', a: 'Dlužník nesplnil dluh včas (ve lhůtě splatnosti). Důsledky: povinnost zaplatit <b>úrok z prodlení</b> (repo + 8 p. b.), nárok na náhradu škody, případně právo věřitele od smlouvy odstoupit při podstatném porušení.' },
    { q: 'Jaké jsou podstatné náležitosti kupní smlouvy a kdy přechází vlastnictví?', a: 'Určení věci (a zpravidla ceny – chybí-li, platí obvyklá). Vlastnictví k movité věci přechází převzetím, k nemovité <b>vkladem do katastru</b>. Nebezpečí škody přechází převzetím.' },
    { q: 'Jaká práva má kupující při vadě věci?', a: 'Odstranění vady (oprava), dodání nové věci, přiměřená sleva, odstoupení od smlouvy (při podstatné vadě), případně náhrada škody. Spotřebitel: zákonná odpovědnost 24 měsíců, vyřízení reklamace do 30 dnů.' },
    { q: 'Pepa koupil telefon, po třech měsících se rozbil displej, prodejce odmítá reklamaci s odůvodněním, že dal pouze „záruku 3 měsíce“. Je to v pořádku?', a: 'Ne. Zákonná odpovědnost za vady u spotřebitele je 24 měsíců od převzetí a nelze ji zkrátit na škodu spotřebitele (jen u použité věci na 12 měsíců). Krátká „záruka“ nemá na zákonná práva spotřebitele vliv.' },
    { q: 'Čím se liší kupní smlouva od smlouvy o dílo?', a: 'Kupní: předmětem je hotová věc, převod vlastnictví za cenu. Dílo: zhotovitel provede na svůj náklad a nebezpečí dílo (výsledek činnosti, zhotovení věci na zakázku, oprava) – zhotovitel nese nebezpečí škody do předání.' },
    { q: 'Kdo nese nebezpečí škody při smlouvě o dílo a kdy může objednatel odstoupit?', a: 'Zhotovitel nese nebezpečí škody na zhotovované věci do předání. Objednatel může do dokončení díla od smlouvy odstoupit, zaplatí však cenu sníženou o to, co zhotovitel ušetřil.' },
    { q: 'Jaká je maximální výše kauce při nájmu bytu a kdy se vrací?', a: 'Trojnásobek měsíčního nájemného (§ 2254). Vrací se do 1 měsíce po skončení nájmu, po odečtení případných dluhů.' },
    { q: 'Může nájemce byt podnajmout? Jak lze vypovědět nájem?', a: 'Podnájem jen se souhlasem pronajímatele (§ 2274); bez něj hrubé porušení. Nájemce vypovídá nájem na dobu neurčitou bez důvodu s 3měsíční výpovědní dobou; pronajímatel jen ze zákonných důvodů, písemně a s poučením o přezkoumání soudem.' },
    { q: 'Rozdíl mezi výpůjčkou, nájmem a půjčkou.', a: '<b>Výpůjčka</b> = bezplatné užívání nespotřebitelné věci (vrací se tatáž věc). <b>Nájem</b> = úplatné dočasné užívání věci. <b>Půjčka</b> = přenechání peněz/zastupitelných věcí do vlastnictví s povinností vrátit stejný druh a množství (úplatně i bezúročně).' },
    { q: 'Anna ručí za dluh Karla. Karel nezaplatil, věřitel se obrátil na Annu. Je to oprávněné?', a: 'Ano, je-li ručitelské prohlášení platné (písemné). Ručitel ručí celým svým majetkem (akcesorické zajištění). Po zaplacení má Anna <b>regres</b> proti Karlovi.' }
  ]
});
