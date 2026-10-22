registerTopic({
  id: 'technicke-vybaveni-2', order: 18, icon: '🖨️', title: 'Technické vybavení II: monitory, tiskárny a počítačové sítě', src: 'podklady', lec: [11],
  where: 'Přednáška 11',
  summary: 'Zobrazovací zařízení (CRT, LCD / LED), grafická karta, barevné modely RGB a CMYK a barevná hloubka, tiskárny (jehličkové, inkoustové, termografické, laserové) a skenery, připojení do počítačové sítě (síťová karta, MAC, přenosová média, topologie, hub × switch, optické kabely, Wi-Fi).',
  vocab: [
    { w: 'RGB', x: 'Aditivní míchání světla (červená, zelená, modrá) – monitory, projektory.' },
    { w: 'CMYK', x: 'Subtraktivní míchání pigmentů (azurová, purpurová, žlutá, černá) – tiskárny.' },
    { w: 'Barevná hloubka', x: 'Počet bitů popisujících barvu pixelu; n bitů → nejvýše 2<sup>n</sup> barev.' },
    { w: 'DPI', x: 'Dots Per Inch – rozlišení: počet bodů na palec (≈ 2,54 cm).' },
    { w: 'MAC adresa', x: 'Jedinečná 48bitová (6bajtová) fyzická adresa síťové karty z výroby.' },
    { w: 'Topologie sítě', x: 'Způsob propojení uzlů: sběrnicová, hvězdicová, stromová.' },
    { w: 'SSID', x: 'Identifikátor Wi-Fi sítě – řetězec až 32 ASCII znaků.' }
  ],
  key: [
    '<b>CRT</b> (elektronová trubice, katoda, fosfor) × <b>LCD / LED</b> (ploché, světlo přes polarizační filtry s tekutými krystaly).',
    '<b>RGB</b> = aditivní, nejnižší intenzita → černá, nejvyšší → bílá, stejná → šedá. Hex <b>FFFF00</b> = žlutá.',
    '<b>CMYK</b> = subtraktivní, nejnižší intenzita → bílá, nejvyšší → černá; černá (K, key) je přidána, protože C + M + Y dává jen tmavě šedou a černý pigment je levnější.',
    '<b>Tiskárny:</b> jehličkové (mechanické), inkoustové (trysky), termografické, elektrografické (laserové: válec, toner, vyhřívací válečky).',
    '<b>Síť:</b> médium + síťová karta + protokol + OS; <b>MAC 48 bitů</b>; bus (koax, 10 Mbit/s, 185 m) × hvězda (UTP, 100 m, hub / switch); <b>Wi-Fi 802.11</b> (2,4 / 5 GHz, SSID).'
  ],
  sections: [
    { title: 'Monitory: CRT a LCD (LED)', blocks: [
      { t: 'p', x: 'Monitor je důležitá součást <b>rozhraní mezi uživatelem a počítačem</b>.' },
      { t: 'versus', cols: [
        { h: 'CRT (Cathode Ray Tube)', items: ['stejný princip jako televizní obrazovky; <b>vzduchoprázdná elektronka</b>', 'po zahřátí <b>katody</b> se emituje proud elektronů o vysoké rychlosti k druhému konci; paprsek se zaostřuje a vychyluje <b>cívkami</b>', 'obrazovka je uvnitř pokryta <b>fosforem</b> – po zásahu elektrony se bod rozsvítí', 'barvy: <b>tři katody</b> pro zelenou, modrou a červenou (RGB)'] },
        { h: 'LCD (LED)', items: ['monitory jsou <b>ploché</b>; světlo ze zdroje (obvykle diody <b>LED</b>) prochází <b>dvěma polarizačními filtry</b> s tekutými krystaly', 'první filtr řídí <b>směr</b> procházejícího světla, druhý mění <b>množství</b> procházejícího světla', 'bod obrazovky = <b>tři buňky</b> (R, G, B); čím víc světla projde, tím je bod světlejší', 'barvy jako u CRT, tj. prokládáním bodů různých barev'] }
      ], x: 'U CRT „maluje“ obraz elektronový paprsek, který běhá po vnitřku skleněné trubice a rozsvěcuje fosfor – proto je monitor tlustý. U LCD svítí vzadu stálé světlo a každý bod před ním funguje jako okénko s nastavitelnou průhledností: tekuté krystaly se otáčejí podle napětí a podle toho, zda polarizační filtr světlo propustí či zablokuje, bod svítí víc, nebo míň. Barevný bod je tvořen třemi okénky s červeným, zeleným a modrým filtrem.' },
      { t: 'svg', title: 'Cesta světla v LCD', x: UPP.lcdDiagram() }
    ] },
    { title: 'Grafický adaptér (grafická karta)', blocks: [
      { t: 'p', x: 'Grafická karta tvoří <b>rozhraní mezi počítačem a monitorem</b> – odesílá do monitoru signály, na jejichž základě se objeví požadovaný obraz.' },
      { t: 'table', head: ['Součást', 'Funkce'], rows: [
        ['<b>Video BIOS</b>', 'podobný BIOSu systému; základní instrukce tvořící rozhraní mezi hardwarem adaptéru a softwarem v systému'],
        ['<b>Grafický procesor</b>', 'základ adaptéru (čipová sada); určuje podporované funkce a výkon'],
        ['<b>Paměť adaptéru</b>', 'ukládají se do ní obrazy v době zpracování; <b>její velikost určuje maximální rozlišení a počet barev</b>'],
        ['<b>Konvertor digitálního signálu na analogový</b>', 'převádí digitální obraz na analogové signály zobrazitelné na monitoru'],
        ['<b>Konektor pro sběrnici</b>', 'starší typy PCI, novější AGP, PCI Express'],
        ['<b>Ovladač</b>', 'komunikace mezi softwarem a nainstalovaným adaptérem']
      ] }
    ] },
    { title: 'Barevný model RGB a barevná hloubka', blocks: [
      { t: 'def', term: 'RGB (Red Green Blue)', x: '<b>Aditivní</b> míchání vyzařovaného světla, používaný ve všech monitorech a projektorech; nepotřebuje vnější světlo (monitor zobrazuje i v naprosté tmě). Smíchá se červené, zelené a modré světlo různými cestami k reprodukci obsáhlého pole barev.' },
      { t: 'svg', title: 'Aditivní míchání RGB a subtraktivní CMY', x: UPP.colorDiagram(), cap: 'RGB: R + G = žlutá, G + B = azurová, R + B = purpurová, vše dohromady = bílá. CMY: C + M = modrá, M + Y = červená, C + Y = zelená, vše dohromady = (tmavě) černá.' },
      { t: 'ul', items: [
        'Všechny tři základní barvy na <b>nejnižší intenzitě = černá</b>, na <b>nejvyšší = bílá</b>, na <b>stejné intenzitě = šedá</b>.',
        'Mohutnost každé složky se udává <b>v procentech</b> (např. 80 %, 80 %, 20 %), podle barevné hloubky jako <b>počet bitů na složku</b> (8 bitů: 0–255, 16 bitů: 0–65 535), nebo <b>šestnáctkovým řetězcem</b>: dvojice hex cifer pro každou barvu.'
      ] },
      { t: 'grid', head: ['Hex RGB', 'R', 'G', 'B', 'Barva'], rows: [
        ['<code>FF0000</code>', '255', '0', '0', 'červená'],
        ['<code>00FF00</code>', '0', '255', '0', 'zelená'],
        ['<code>0000FF</code>', '0', '0', '255', 'modrá'],
        ['<code>FFFF00</code>', '255 (FF)', '255 (FF)', '0 (00)', '<b>žlutá</b> (příklad ze slajdu)'],
        ['<code>FFFFFF</code> / <code>000000</code>', '255 / 0', '255 / 0', '255 / 0', 'bílá / černá'],
        ['<code>808080</code>', '128', '128', '128', 'šedá (stejná intenzita všech složek)'],
        ['80 %, 80 %, 20 %', '≈ 204 (CC)', '≈ 204 (CC)', '≈ 51 (33)', 'tmavší žlutá (<code>CCCC33</code>)']
      ] },
      { t: 'def', term: 'Barevná hloubka (BH)', x: 'Každý bod (pixel) obrazu je popsán <b>n-bitovým číslem</b> udávajícím barvu – lze zobrazit nejvýše <b>2<sup>n</sup> různých barev</b>. BH je ukazatelem do <b>barevné mapy (palety)</b>, která obsahuje pro každou barvu hodnoty odstínů základních barev RGB. Je-li každá barva popsána <b>m-bitovou</b> hodnotou, připadá 1/3 m bitů na R, 1/3 m na G a 1/3 m na B; takto lze popsat nejvýše <b>2<sup>m</sup> odstínů</b>, tj. <b>2<sup>m/3</sup> odstínů každé základní barvy</b>.' },
      { t: 'ex', x: '<b>Barevná hloubka 8 bitů</b> = 2<sup>8</sup> = 256 barev (z palety). <b>Paleta s m = 24 bity</b>: 8 bitů na složku → 2<sup>8</sup> = 256 odstínů každé základní barvy a 2<sup>24</sup> = <b>16 777 216</b> barev celkem.<br>(Vlastní příklad: obraz Full HD 1 920 × 1 080 pixelů při 24 bitech na pixel potřebuje 1 920 · 1 080 · 3 B = 6 220 800 B ≈ 5,9 MiB paměti grafické karty – proto velikost paměti omezuje rozlišení a počet barev.)' },
      { t: 'p', x: '<b>Barva</b> je směs záření různých vlnových délek – část spektra viditelného záření odraženého předmětem. Závisí na spektrálním složení a směru dopadajícího světla, směru pohledu pozorovatele, vlastnostech povrchu a vlastnostech pozorovatele (kvalita zraku, přizpůsobení okolnímu světlu).' }
    ] },
    { title: 'Barevný model CMYK a tiskárny', blocks: [
      { t: 'versus', cols: [
        { h: 'RGB – aditivní', items: ['míchá se vyzařované světlo', 'monitory, projektory, LCD', 'nejnižší intenzita = <b>černá</b>, nejvyšší = <b>bílá</b>'] },
        { h: 'CMYK – subtraktivní', items: ['mícháním barvy od sebe <b>odčítáme</b> – omezujeme spektrum odražené od povrchu', 'tiskárny (inkoustové, laserové), pigmenty', 'nejnižší intenzita = <b>bílá</b> (papír), nejvyšší = <b>černá</b>'] }
      ], x: 'Monitor je zdroj světla: tmavou obrazovku „rozsvěcíme“ přidáváním barevných světel, až z červeného, zeleného a modrého vznikne bílá. Papír je naopak bílý a světlo jen odráží: každá nanesená barva část světla pohltí (odečte), takže čím víc barev, tím tmavší výsledek. Proto se RGB používá pro obrazovky a CMYK pro tisk – a proto barvy na monitoru a na výtisku nejsou úplně stejné.' },
      { t: 'p', x: 'CMYK má čtyři základní barvy: <b>azurovou (Cyan)</b>, <b>purpurovou (Magenta)</b>, <b>žlutou (Yellow)</b> a <b>černou (blacK, Key)</b>. V ideálním případě by složením C + M + Y vznikla černá, ve skutečnosti vznikne <b>tmavě šedivá</b>; navíc je černá výrazně <b>levnější</b>, proto většina tiskových technik používá čtvrtou černou barvu.' },
      { t: 'p', x: 'Výsledný obraz tiskárny je složen z <b>bodů (dots)</b>; jejich hustotu určuje rozlišení v <b>DPI</b> (Dots Per Inch, počet bodů na palec ≈ 2,54 cm). Podle toho, co umí tisknout, jsou tiskárny <b>znakové</b> (omezená množina znaků, staré typy) a <b>grafické</b> (libovolné geometrické objekty a tedy i znaky).' },
      { t: 'table', head: ['Druh tiskárny', 'Princip', 'Výhody / nevýhody'], rows: [
        ['<b>mechanické</b> (dnes jen jehličkové)', 'body vytvářeny <b>jehličkami</b>, které tisknou úderem přes barvicí pásku', 'vhodné na tisk na diskrétní (mzdové) obálky'],
        ['<b>tryskové (inkoustové)</b>', 'sada trysek vystřeluje kapičky inkoustu, vychylované elektrostatickým polem na místo bodu (DOD thermal: kapku vystřelí topný rezistor)', '+ kvalitní tisk, nízká pořizovací cena · − vyšší provozní náklady, zasychání trysek'],
        ['<b>termografické</b>', 'tělíska v hlavě se elektrickým impulsem zahřejí; vosková vrstva barvicí pásky se rozpustí a barevný vosk se přenese na papír', '+ velmi kvalitní tisk · − nákladný provoz (drahá páska)'],
        ['<b>elektrografické (laserové)</b>', 'viz níže', '+ kvalitní tisk, značná rychlost, přijatelné provozní náklady · − vyšší pořizovací cena']
      ] },
      { t: 'svg', title: 'Princip laserové tiskárny', x: UPP.laserDiagram(), cap: 'Kódy znaků se převedou na elektrické signály, kterými se moduluje laserový paprsek; toner se drží jen tam, kde laser vybil náboj, a pak se přenese na papír a fixuje.' }
    ] },
    { title: 'Skenery', blocks: [
      { t: 'p', x: 'Skener snímá obrazovou grafiku a přenáší její digitalizovanou podobu do paměti PC. Typy: ruční, ploché (stolní), rotační a knižní. <b>Parametry:</b> <b>rozlišení</b> (do jaké podrobnosti lze předlohu skenovat; DPI), <b>interpolace</b> (zda zařízení dokáže znásobit dané rozlišení) a <b>barevná hloubka</b> (kolik barevných odstínů skener rozliší).' },
      { t: 'flow', title: 'Princip plochého skeneru', steps: [
        { h: 'Osvit', x: 'pod skleněnou deskou se pohybuje světelný zdroj; světlo se odráží od předlohy (světlá místa odrážejí víc, tmavá méně)' },
        { h: 'Zrcadla', x: 'odražené světlo je soustavou zrcadel dopraveno na detektory' },
        { h: 'Detektory', x: 'přemění světlo na elektrický proud úměrný množství odraženého světla' },
        { h: 'RGB', x: 'prvky detektorů jsou v řádcích po třech (R, G, B); tři nasnímané obrázky se složí do jednoho obrazu v přirozených barvách' }
      ] }
    ] },
    { title: 'Počítačová síť: předpoklady a síťová karta', blocks: [
      { t: 'def', term: 'Počítačová síť', x: 'Souhrnné označení pro technické prostředky, které realizují <b>spojení a výměnu informací mezi dvěma a více komunikujícími uzly</b>, propojenými komunikačními kanály. Umožňují komunikaci podle určitých pravidel (<b>protokolů</b>) za účelem sdílení společných zdrojů nebo výměny zpráv. Způsob propojení uzlů udává <b>topologie</b> sítě. Uzly jsou počítače a servery, tiskárny, datová úložiště, měřicí a zabezpečovací zařízení.' },
      { t: 'icons', title: 'Předpoklady síťového spojení', items: [
        { i: '🔗', h: 'Přenosové médium', x: 'kabely, vzduch …; konektory, anténa' },
        { i: '🔌', h: 'Síťové rozhraní', x: 'síťová karta (přijímá a vysílá data) · modem pro spojení telefonní sítí' },
        { i: '📜', h: 'Síťový protokol', x: 'stejná, standardy a normami dohodnutá pravidla komunikace' },
        { i: '🖥️', h: 'Operační systém', x: 'podporující síťovou komunikaci' }
      ] },
      { t: 'p', x: '<b>Síťová karta (Network Interface Controller)</b> ve stolních počítačích zasunutá do slotu (ISA, PCI, PCI-e) nebo integrovaná na základní desce; u notebooků převládá integrace a pro externí připojení se používá rozhraní PCMCIA.' },
      { t: 'def', term: 'Fyzická adresa MAC (media access control)', x: 'Každá síťová karta má v paměti <b>jedinečný 48bitový identifikátor</b> daný z výroby – celosvětově jednoznačná <b>šestibajtová adresa</b> ve tvaru XX-XX-XX-XX-XX-XX (6 dvojic hex cifer). Ve Windows ji zjistíme příkazem <code>ipconfig /all</code> v příkazovém řádku. Na základě fyzické adresy příjemce (odesílatele) se v síti posílají data.' }
    ] },
    { title: 'Přenosová média a drátové sítě (IEEE 802.3)', blocks: [
      { t: 'ul', items: [
        '<b>Metalické kabely</b> – změna napětí mezi vodiči: koaxiální kabely, <b>kroucená dvojlinka</b> (telefonní, datová UTP).',
        '<b>Optické kabely</b> – přenos světla.',
        '<b>Rádiové bezdrátové spoje</b> – rádiové vlny vzduchem: bod–mnoho bodů (Wi-Fi, GSM, LTE), bod–bod (mikrovlnná pojítka, Bluetooth).',
        '<b>Vzdušné optické spoje</b> (laser, IRD) a ultrazvukové spoje.'
      ] },
      { t: 'svg', title: 'Topologie počítačových sítí', x: UPP.topologyDiagram(), cap: 'Sběrnice: sdílené médium. Hvězda: všechny uzly k centrálnímu prvku (hub / switch). Strom: propojení více hvězd.' },
      { t: 'versus', cols: [
        { h: 'Sběrnicová topologie (bus)', items: ['norma <b>Ethernet s koaxiálním kabelem</b>; jeden sdílený kabel, který prochází okolo všech počítačů a nerozvětvuje se', 'uzly se připojují odbočkou – konektor <b>BNC-T</b>; identifikace <b>MAC</b> adresami', 'sdílené médium, systém <b>náhodného přístupu (CSMA)</b>', 'rychlost <b>10 Mbit/s</b>, vzdálenost mezi uzly max. <b>185 m</b>, oba konce zakončeny <b>terminátorem</b> (omezuje odraz elektromagnetických vln)'] },
        { h: 'Hvězdicová topologie (star)', items: ['všichni připojeni k <b>centrálnímu aktivnímu prvku</b> – hub (opakovač) nebo switch (přepínač)', 'norma <b>Ethernet s kroucenou dvojlinkou</b>; <b>patch kabely</b> se čtyřmi páry zkroucených vodičů, konektory <b>RJ-45</b>', 'signál = rozdíl potenciálů obou vodičů; rychlost <b>10 Mb/s až 1 Gb/s</b>, délka kabelu max. <b>100 m</b>', '<b>Stromová topologie</b> = propojení více hvězd spojením aktivních prvků – typická struktura lokální (podnikové) sítě'] }
      ] },
      { t: 'p', x: 'Zkroucení párů vodičů (a zkroucení párů mezi sebou) omezuje <b>vyzařování</b> elektromagnetického záření do okolí i <b>příjem</b> z okolí. Koaxiální kabel má vnější válcový vodič (stínění) a vnitřní drátový nebo trubkový (jádro), oddělené nevodivou vrstvou.' },
      { t: 'versus', title: 'Opakovač (hub) × přepínač (switch)', cols: [
        { h: 'Hub (opakovač)', items: ['data přijatá na vstupním portu <b>pošle na všechny ostatní</b> porty'] },
        { h: 'Switch (přepínač)', items: ['posílá data jen na port s příjemcem podle <b>tabulky MAC adres</b> (dvojice MAC adresa – číslo portu)', 'tabulku lze zadat ručně, nebo se vytvoří automaticky: switch zpočátku funguje jako opakovač a z probíhající komunikace se „naučí“, kdo je na kterém portu'] }
      ], x: 'Hub je jako hlasatel, který každou zprávu zakřičí do celé místnosti – slyší ji všichni a jen adresát ji vezme. Switch je jako vrátný, který si pamatuje, kdo bydlí v jakém bytě, a každý dopis donese rovnou ke správným dveřím. Díky tomu v síti se switchem nesdílejí všichni jednu „linku“ a komunikace je rychlejší i soukromější.' },
      { t: 'svg', title: 'Hub a switch', x: UPP.switchDiagram(), cap: 'Hub zopakuje data na všechny porty, switch podle tabulky MAC adres jen na port příjemce.' },
      { t: 'def', term: 'Optické kabely (vlákna)', x: 'Skleněná nebo plastová vlákna, která přenášejí signál <b>světlem</b> (nebo infračerveným zářením) ve směru podélné osy na principu <b>totálního odrazu</b> na rozhraní dvou prostředí s rozdílným indexem lomu (uvnitř <b>jádro</b>, okolo <b>plášť</b> a primární ochrana). Dosahují <b>větších přenosových rychlostí</b>: běžné světlo se skládá z více barev (frekvencí) a každá barva je samostatný datový tok. Přenos <b>není rušen vnějším elektromagnetickým vlněním</b>, data lze přenášet na velké vzdálenosti (stovky až tisíce km).' }
    ] },
    { title: 'Bezdrátové sítě Wi-Fi (IEEE 802.11)', blocks: [
      { t: 'p', x: 'Bezdrátové spoje přenášejí <b>rádiové vlny</b> různých frekvencí vzduchem (patří sem i vzdušné optické spoje laserem, Bluetooth, infračervené záření). Podskupinou je <b>Wi-Fi (Wireless Fidelity)</b>, standard <b>IEEE 802.11</b>: rádiové vlny o frekvenci <b>2,4 GHz</b> nebo <b>5 GHz</b> (pásmo 2,4 GHz používá řada jiných zařízení → možné rušení). Klíčovou roli hraje <b>SSID</b> (Service Set Identifier) – řetězec až <b>32 ASCII znaků</b>, kterým se sítě rozlišují.' },
      { t: 'grid', head: ['Norma IEEE', 'Max. rychlost', 'Frekvence'], rows: [
        ['802.11a', '54 Mb/s', '5 GHz'],
        ['802.11b', '11 Mb/s', '2,4 GHz'],
        ['802.11g', '54 Mb/s', '2,4 GHz'],
        ['802.11n', '150 Mb/s', '2,4 i 5 GHz']
      ] },
      { t: 'table', head: ['Způsob spojení', 'Popis'], rows: [
        ['<b>přímé spojení – ad-hoc mode</b>', '2 nebo více počítačů komunikuje spolu přímo; identifikace pomocí SSID; vzdálenost obvykle několik metrů'],
        ['<b>do hvězdy – infrastructure mode</b>', 'komunikace přes centrální prvek <b>AP (Access Point)</b>; AP vysílá SSID, klienti si vyberou AP'],
        ['<b>spojení dvou sítí – WDS link</b>', 'Wireless Distribution System: spojení „drátových“ nebo „bezdrátových“ sítí pomocí dvou AP']
      ] },
      { t: 'svg', title: 'Tři způsoby spojení Wi-Fi', x: UPP.wifiDiagram() }
    ] }
  ],
  mistakes: [
    'Zaměnit aditivní (RGB, světlo, černá = žádná intenzita) a subtraktivní (CMYK, pigmenty, bílá = žádná intenzita) míchání barev.',
    'Říct, že CMY dává dokonalou černou – vzniká tmavě šedá, proto se přidává K.',
    'Zaměnit hub (posílá všem) a switch (podle tabulky MAC adres jen příjemci).',
    'Zaměnit MAC adresu (48 bitů, výrobní, fyzická) a IP adresu (logická).',
    'U kapacity barevné hloubky zapomenout, že n bitů dává 2<sup>n</sup> barev, ne n barev.'
  ],
  qa: [
    { q: 'Jak vzniká obraz u CRT a LCD (LED) monitoru?', a: 'CRT: zahřátá katoda emituje elektrony, paprsek se vychyluje cívkami a rozsvěcí fosfor; barvy ze tří katod RGB. LCD: světlo (LED) prochází dvěma polarizačními filtry s tekutými krystaly – první řídí směr, druhý množství světla; bod tvoří tři buňky R, G, B.' },
    { q: 'Z čeho se skládá grafická karta?', a: 'Video BIOS, grafický procesor, paměť adaptéru (určuje rozlišení a počet barev), D/A převodník, konektor pro sběrnici (PCI, AGP, PCI Express), ovladač.' },
    { q: 'Co je model RGB a kde se používá?', a: 'Aditivní míchání červeného, zeleného a modrého světla; monitory, projektory. Nejnižší intenzita = černá, nejvyšší = bílá, stejná = šedá.' },
    { q: 'Jakou barvu má hex řetězec FFFF00?', a: 'Červená FF (255), zelená FF (255), modrá 00 (0) → žlutá.' },
    { q: 'Co je barevná hloubka a barevná mapa?', a: 'Počet bitů n popisujících barvu pixelu – nejvýše 2<sup>n</sup> barev; BH je ukazatel do barevné mapy, která pro každou barvu obsahuje odstíny R, G, B (m bitů → 2<sup>m</sup> odstínů, 2<sup>m/3</sup> každé základní barvy).' },
    { q: 'Kolik barev je při 24bitové hloubce, 8 bitů na složku?', a: '2<sup>24</sup> = 16 777 216 barev (256 odstínů každé ze tří barev).' },
    { q: 'Čím se liší CMYK od RGB?', a: 'CMYK je subtraktivní (pigmenty, odečítání spektra), základní barvy cyan, magenta, yellow a černá K; nejnižší intenzita = bílá, nejvyšší = černá. K se přidává, protože C+M+Y dá jen tmavě šedou a černá je levnější.' },
    { q: 'Rozdělte tiskárny podle principu tisku.', a: 'Mechanické (jehličkové), tryskové (inkoustové, kapičky inkoustu), termografické (ohřátý vosk z pásky), elektrografické (laserové – válec, toner, vyhřívací válečky).' },
    { q: 'Popište princip laserové tiskárny.', a: 'Modulovaný laserový paprsek vybíjí náboj na elektricky nabitém válci, toner ulpí na vybitých místech, elektrostaticky se přenese na papír a fixuje vyhřívacími válečky. Výhody: kvalita, rychlost, přijatelné provozní náklady; nevýhoda: vyšší cena.' },
    { q: 'Jaké parametry má skener a jak funguje?', a: 'Rozlišení (DPI), interpolace, barevná hloubka. Světelný zdroj osvítí předlohu, odražené světlo jde zrcadly na detektory (po třech RGB), které ho převedou na elektrický proud.' },
    { q: 'Jaké jsou předpoklady síťového spojení počítačů?', a: 'Přenosové médium, síťové rozhraní (síťová karta, modem), síťový protokol a operační systém podporující síťovou komunikaci.' },
    { q: 'Co je MAC adresa?', a: 'Jedinečný 48bitový (6B) identifikátor síťové karty daný z výroby, XX-XX-XX-XX-XX-XX; podle ní se posílají data v síti. Ve Windows ipconfig /all.' },
    { q: 'Porovnejte sběrnicovou a hvězdicovou topologii.', a: 'Sběrnice: Ethernet na koaxiálním kabelu, sdílené médium, CSMA, 10 Mbit/s, max. 185 m, terminátory, BNC-T. Hvězda: UTP s RJ-45 k hubu / switchi, 10 Mb/s–1 Gb/s, max. 100 m; spojením hvězd vzniká stromová topologie.' },
    { q: 'Čím se liší hub a switch?', a: 'Hub (opakovač) posílá data na všechny porty. Switch (přepínač) má tabulku MAC adres (MAC – port), zprvu funguje jako opakovač a „naučí se“, kdo je na kterém portu; data posílá jen příjemci.' },
    { q: 'Jak přenáší data optické vlákno?', a: 'Světlem nebo infračerveným zářením na principu totálního odrazu na rozhraní jádra a pláště; vyšší rychlosti (více barev = více toků), bez rušení elektromagnetickým polem, velké vzdálenosti.' },
    { q: 'Co je Wi-Fi? Vyjmenujte způsoby spojení a normy.', a: 'IEEE 802.11, rádiové vlny 2,4 / 5 GHz, SSID (až 32 ASCII znaků). Ad-hoc, infrastructure (AP), WDS. Normy a 54 Mb/s 5 GHz, b 11 Mb/s 2,4 GHz, g 54 Mb/s 2,4 GHz, n 150 Mb/s 2,4 i 5 GHz.' }
  ]
});
