registerTopic({
  id: 'dedictvi', order: 19, icon: '⚰️', title: 'Dědické právo', src: 'podklady', where: 'Seminář 4 – dědické právo (30. 10. 2024); § 1475 an. OZ',
  summary: 'Pojmy a zásady dědického práva, čtyři předpoklady dědění, dědická nezpůsobilost, dědické tituly (závěť, dědická smlouva, zákon), formy závěti a svědci, šest dědických tříd, vydědění, odmítnutí a odevzdání dědictví a příklady ze semináře.',
  vocab: [
    { w: 'Zůstavitel', x: 'Zemřelý, po kterém se dědí.' },
    { w: 'Pozůstalost × dědictví', x: 'Pozůstalost je celé jmění zůstavitele v době smrti (aktiva i pasiva); dědictví je to, co z ní připadne dědicům.' },
    { w: 'Dědic × odkazovník', x: 'Dědic nabývá pozůstalost nebo její podíl (i s dluhy); odkazovníkovi zůstavitel odkáže jen určitou věc nebo právo.' },
    { w: 'Dědický titul', x: 'Právní důvod, proč někdo dědí: dědická smlouva, závěť, zákon.' },
    { w: 'Odúmrť', x: 'Pozůstalost, po které nedědí nikdo jiný; připadne státu.' },
    { w: 'Neopomenutelný (nepominutelný) dědic', x: 'Potomek zůstavitele; zákon mu zaručuje povinný díl, o který ho zůstavitel nemůže závětí připravit (jen vyděděním).' },
    { w: 'Veřejná listina', x: 'Listina sepsaná úřední osobou, u dědění typicky notářem (notářský zápis).' },
    { w: 'Pořizovací způsobilost', x: 'Způsobilost sepsat platnou závěť; obecně plná svéprávnost.' }
  ],
  key: [
    '<b>Předpoklady dědění</b> (všechny čtyři zároveň): <b>smrt zůstavitele</b>, <b>existence pozůstalosti</b>, <b>způsobilý dědic</b>, <b>dědický titul</b>. Dědické právo vzniká smrtí zůstavitele.',
    '<b>Dědické tituly</b>: <b>dědická smlouva</b> (§ 1582), <b>závěť</b>, <b>zákon</b>. Ze zákona se dědí, nejsou-li dědici ze závěti ani z dědické smlouvy.',
    '<b>Závěť</b> = odvolatelný projev vůle; písemně. Soukromá forma: <b>holografní</b> (celá vlastní rukou), <b>alografní</b> (podpis + 2 současně přítomní svědci). Dále <b>veřejná listina</b> a <b>privilegovaná</b> závěť.',
    '<b>Dědická smlouva</b>: forma <b>veřejné listiny</b>; <b>¼ pozůstalosti musí zůstat volná</b>.',
    '<b>6 dědických tříd</b> (§ 1635–1640), bližší vylučuje vzdálenější: 1. děti + manžel; 2. manžel (vždy ≥ ½), rodiče, spolužijící; 3. sourozenci, spolužijící; 4. prarodiče; 5. prarodiče rodičů; 6. děti dětí sourozenců a děti prarodičů.',
    '<b>Dědická nezpůsobilost</b>: úmyslný trestný čin proti zůstaviteli (jeho předku, potomku, manželu) nebo zavrženíhodný čin proti jeho poslední vůli – ledaže zůstavitel čin výslovně prominul.',
    '<b>Vydědění</b> neopomenutelného dědice jen ze 4 důvodů: nepomohl v nouzi, neprojevuje opravdový zájem, odsouzen za TČ svědčící o zvrhlé povaze, trvale nezřízený život.',
    '<b>Odmítnutí</b> dědictví: výslovně vůči soudu do <b>1 měsíce</b> od vyrozumění (§ 1487); hledí se na dědice, jako by nikdy nedědil. <b>Odevzdání</b>: vzdání se ve prospěch jiného dědice, který souhlasí.'
  ],
  sections: [
    { title: 'Pojmy a zásady dědického práva', blocks: [
      { t: 'p', x: 'Seminář otevírá otázkami: Co je předmětem dědického práva? Z jakých právních důvodů se můžete stát dědicem? Jaký předpis se použije při projednání pozůstalosti? Lze zdědit i dluhy? Odpovědi dávají pojmy a zásady níže: dědí se celé jmění (<b>aktiva i pasiva</b>, tedy i dluhy), důvodem je <b>dědický titul</b> a hmotněprávní úpravu obsahuje občanský zákoník.' },
      { t: 'table', head: ['Pojem', 'Význam'], rows: [
        ['<b>Zůstavitel</b>', 'zemřelý, jehož jmění se dědí'],
        ['<b>Pozůstalost</b>', 'jmění zůstavitele v době smrti – aktiva i pasiva'],
        ['<b>Dědictví</b>', 'to, co z pozůstalosti nabývá dědic'],
        ['<b>Dědic</b>', 'nabývá pozůstalost nebo její podíl na základě dědického titulu'],
        ['<b>Odkazovník</b>', 'osoba, které zůstavitel zanechal odkaz (určitou věc či právo); není dědicem']
      ] },
      { t: 'icons', title: 'Zásady dědického práva', items: [
        { i: '🏛️', h: 'Zachování hodnot', x: 'majetek smrtí nezaniká, přechází dál' },
        { i: '👤', h: 'Přechod na jednotlivce', x: 'majetek přechází na konkrétní osoby' },
        { i: '⚖️', h: 'Rovnost dědiců', x: 'dědici téže třídy zásadně stejným dílem' },
        { i: '🔁', h: 'Univerzální sukcese', x: 'dědic vstupuje do práv i povinností zůstavitele' },
        { i: '✍️', h: 'Volnost zůstavitele', x: 'zůstavitel si dědice volí sám' },
        { i: '🛡️', h: 'Omezení – neopomenutelní dědici', x: 'potomky nelze libovolně pominout' },
        { i: '🙋', h: 'Volnost dědice', x: 'dědictví může přijmout, nebo odmítnout' },
        { i: '🏢', h: 'Ingerence veřejné moci', x: 'nabytí dědictví potvrzuje soud' }
      ] }
    ] },
    { title: 'Předpoklady dědění', blocks: [
      { t: 'svg', title: 'Čtyři předpoklady dědění', x: ZPN.predpokladyDedeni(), cap: 'Horní řada: čtyři předpoklady, které musí platit zároveň; teprve pak dědic dědí. Červený box: dědická nezpůsobilost vyřadí jinak způsobilého dědice (3. předpoklad). Oranžový box: i dědic, který splní všechny předpoklady, může dědictví odmítnout.' },
      { t: 'flow', title: '1) Smrt zůstavitele – co následuje', steps: [
        { h: 'Prohlídka zemřelého', x: 'Lékař prohlédne zemřelého a konstatuje smrt.' },
        { h: 'Oznámení matrice', x: 'Lékař nebo zdravotnické zařízení oznámí smrt obecnímu úřadu pověřenému vedením matrik; vystaví se úmrtní list.' },
        { h: 'Oznámení soudu', x: 'Obecní úřad oznámí smrt pozůstalostnímu soudu.' },
        { h: 'Prohlášení za mrtvého', x: 'Nemůže-li lékař smrt zjistit klasickým způsobem, rozhodne o prohlášení osoby za mrtvou soud.' }
      ] },
      { t: 'ul', items: [
        '<b>2) Existence pozůstalosti</b> – aktiva i pasiva zůstavitele. <b>Soupis pozůstalosti</b> zjistí pozůstalostní jmění a čistou hodnotu majetku v době smrti. Dědic může uplatnit <b>výhradu soupisu</b> – ta slouží k <b>ochraně dědiců</b>.',
        '<b>3) Způsobilý dědic</b> – <b>fyzická osoba</b> (dědí ze závěti, z dědické smlouvy i ze zákona), <b>právnická osoba</b> (jen ze závěti), <b>stát</b> (odúmrť). Způsobilost FO být dědicem vychází z <b>právní osobnosti</b>.',
        '<b>4) Dědický titul</b> – závěť, dědická smlouva (§ 1582 OZ), zákon.'
      ] },
      { t: 'def', term: 'Dědická nezpůsobilost', x: 'Dědit nemůže ten, kdo se dopustil:', items: [
        '<b>úmyslného trestného činu</b> proti zůstaviteli, jeho předku, potomku nebo manželu, nebo',
        '<b>zavrženíhodného činu proti zůstavitelově poslední vůli</b> – zůstavitele k projevu poslední vůle donutil nebo lstivě svedl, projev poslední vůle mu překazil, nebo jeho poslední pořízení zatajil, zfalšoval, podvrhl či úmyslně zničil',
        'výjimka: zůstavitel mu tento čin <b>výslovně prominul</b>'
      ] }
    ] },
    { title: 'Závěť', blocks: [
      { t: 'def', term: 'Závěť', x: 'Odvolatelný projev vůle, kterým zůstavitel pro případ své smrti <b>osobně</b> zůstavuje jedné či více osobám podíl na pozůstalosti, případně i odkaz.', items: [
        'vyžaduje <b>písemnou formu</b>',
        '<b>pořizovací způsobilost</b>: plná svéprávnost (výjimky u veřejné listiny – viz níže)',
        'zůstavitel musí respektovat <b>neopomenutelné dědice</b>',
        'může ustanovit <b>vykonavatele závěti</b> a <b>správce pozůstalosti</b> (správce veřejnou listinou)'
      ] },
      { t: 'warn', x: '<b>Závěť je neplatná</b>, není-li zřejmé, který den, měsíc a rok byla pořízena; pořídil-li zůstavitel více závětí, které si odporují; nebo v případě podstatného omylu zůstavitele (§ 1529 OZ).' },
      { t: 'table', head: ['Forma závěti', 'Jak se pořizuje'], rows: [
        ['<b>Holografní</b> (soukromá, § 1533)', 'celá napsaná <b>vlastní rukou</b> zůstavitele a vlastní rukou podepsaná; <b>beze svědků</b>'],
        ['<b>Alografní obecná</b> (soukromá)', 'napsaná jakkoli, jen ne vlastní rukou; zůstavitel ji <b>vlastní rukou podepíše</b> a před <b>dvěma současně přítomnými svědky</b> prohlásí, že listina obsahuje jeho poslední vůli'],
        ['<b>Alografní zvláštní</b> (§ 1535, 1536)', 'pro osoby se smyslovým postižením; podle postižení se liší způsob zaznamenání vůle, počet a funkce svědků, zapsání či přečtení závěti a podpis'],
        ['<b>Veřejná listina</b>', 'může kdokoli svéprávný; osoba <b>starší 15 let</b> bez plné svéprávnosti i bez souhlasu zákonného zástupce; osoba <b>omezená ve svéprávnosti</b> jen touto formou (v rámci omezení)'],
        ['<b>Privilegovaná</b>', 'bezprostřední ohrožení života; důvodná obava smrti před sepsáním veřejné listiny; vážný důvod při cestě námořním plavidlem pod vlajkou ČR či letadlem z leteckého rejstříku ČR; účast v ozbrojeném konfliktu. Úlevy na formě a svědcích, <b>časově omezená platnost</b>']
      ] },
      { t: 'def', term: 'Svědek závěti', x: 'Osoba, která <b>nemá zájem na obsahu závěti</b>. Svědkem nemůže být:', items: ['dědic', 'odkazovník', 'osoba dědici nebo odkazovníku blízká', 'zaměstnanec dědice nebo odkazovníka'] },
      { t: 'table', head: ['Vedlejší ustanovení v závěti', 'Příklad'], rows: [
        ['<b>Podmínka</b>', 'dědic dostane podíl, bude-li pečovat o zvíře zůstavitele'],
        ['<b>Doložení času</b>', 'právo se nabývá na určitou dobu nebo později než v době smrti zůstavitele'],
        ['<b>Příkaz</b>', 'nakládat s majetkem určitým způsobem']
      ] },
      { t: 'ex', x: 'Pepa napíše závěť na počítači, vytiskne ji a podepíše; svědky nemá. Holografní závěť to není (není celá psaná jeho rukou) a alografní také ne (chybí dva současně přítomní svědci). Kdyby jako svědka přizval syna, kterému závěť něco zanechává, nepomůže to – dědic svědkem být nemůže.' }
    ] },
    { title: 'Dědická smlouva', blocks: [
      { t: 'law', ref: '§ 1582 OZ', x: 'Dědickou smlouvou povolává zůstavitel druhou smluvní stranu nebo třetí osobu za dědice nebo odkazovníka a druhá strana to přijímá.' },
      { t: 'versus', title: 'Závěť × dědická smlouva', x: 'Závěť je jednostranný projev vůle a zůstavitel ji může kdykoli odvolat – nikdo jiný ji „nepřijímá“. Dědická smlouva je dvoustranná: zůstavitel někoho povolá za dědice a ten to přijme, takže zůstavitel ji nemůže sám libovolně zrušit. Proto zákon u smlouvy žádá přísnější formu – veřejnou listinu – a nedovolí jí rozdělit celý majetek: čtvrtina pozůstalosti musí zůstat volná. Babička tedy může závětí odkázat byt komukoli a za rok to změnit; když totéž sjedná dědickou smlouvou s vnukem, který se zaváže o ni pečovat, vnuk se na to může spolehnout.', cols: [
        { h: 'Závěť', items: ['jednostranný projev vůle', 'kdykoli odvolatelná', 'písemná forma (soukromá i veřejná listina)', 'může pořídit o celé pozůstalosti'] },
        { h: 'Dědická smlouva', items: ['dvoustranná – druhá strana přijímá', 'forma <b>veřejné listiny</b>', '<b>¼ pozůstalosti musí zůstat volná</b>', 'povolá dědice nebo odkazovníka'] }
      ] }
    ] },
    { title: 'Dědění ze zákona – šest dědických tříd', blocks: [
      { t: 'p', x: 'Nejsou-li dědici ze závěti ani z dědické smlouvy, nastupují <b>dědici ze zákona</b>. Zákon je řadí do <b>šesti dědických tříd</b> (§ 1635 an.), které se postupně navzájem vylučují: dědí-li někdo v bližší třídě, vzdálenější třídy nedědí.' },
      { t: 'svg', title: 'Dědické třídy I–VI', x: ZPN.dedickeTridy(), cap: 'Každý řádek je jedna třída: vlevo číslo a paragraf, uprostřed kdo dědí, vpravo jak se dělí. Čte se shora: další třída přijde na řadu, jen když v předchozí nedědí nikdo. Hvězdička označuje osoby ze společné domácnosti (podmínky v poznámce dole).' },
      { t: 'law', ref: '§ 1635 OZ – první třída', x: '(1) V první třídě dědiců dědí zůstavitelovy děti a jeho manžel, každý z nich stejným dílem. (2) Nedědí-li některé dítě, nabývají jeho dědický podíl stejným dílem jeho děti; totéž platí o vzdálenějších potomcích téhož předka.' },
      { t: 'law', ref: '§ 1636 OZ – druhá třída', x: '(1) Nedědí-li zůstavitelovi potomci, dědí ve druhé třídě manžel, zůstavitelovi rodiče a dále ti, kteří žili se zůstavitelem nejméně po dobu jednoho roku před jeho smrtí ve společné domácnosti a kteří z tohoto důvodu pečovali o společnou domácnost nebo byli odkázáni výživou na zůstavitele. (2) Dědici druhé třídy dědí stejným dílem, manžel však vždy nejméně polovinu pozůstalosti.' },
      { t: 'law', ref: '§ 1637 OZ – třetí třída', x: '(1) Nedědí-li manžel ani žádný z rodičů, dědí ve třetí třídě stejným dílem zůstavitelovi sourozenci a ti, kteří žili se zůstavitelem nejméně po dobu jednoho roku před jeho smrtí ve společné domácnosti a kteří z tohoto důvodu pečovali o společnou domácnost nebo byli odkázáni výživou na zůstavitele. (2) Nedědí-li některý ze sourozenců zůstavitele, nabývají jeho dědický podíl stejným dílem jeho děti.' },
      { t: 'law', ref: '§ 1638 a 1639 OZ – čtvrtá a pátá třída', x: '§ 1638: Nedědí-li žádný dědic ve třetí třídě, dědí ve čtvrté třídě stejným dílem prarodiče zůstavitele. § 1639: Nedědí-li žádný z dědiců čtvrté třídy, dědí v páté třídě jen prarodiče rodičů zůstavitele. Prarodičům zůstavitelova otce připadá polovina dědictví, prarodičům zůstavitelovy matky druhá polovina; obě dvojice se dělí rovným dílem o polovinu, která na ně připadá. Nedědí-li jednotlivý člen dvojice, připadne uvolněná osmina druhému členu; nedědí-li dvojice, připadne tato čtvrtina druhé dvojici téže strany; nedědí-li ani jedna dvojice téže strany, připadá dědictví dvojicím druhé strany.' },
      { t: 'law', ref: '§ 1640 OZ – šestá třída', x: '(1) Nedědí-li žádný z dědiců páté třídy, dědí v šesté třídě děti dětí sourozenců zůstavitele a děti prarodičů zůstavitele, každý stejným dílem. (2) Nedědí-li některé z dětí prarodičů zůstavitele, dědí jeho děti.' },
      { t: 'warn', x: 'Manžel dědí <b>v první i ve druhé třídě</b>. V první třídě dostane stejný díl jako každé dítě (manžel + 3 děti = po ¼). Pravidlo „nejméně polovina“ platí <b>jen ve druhé třídě</b>. Osoby ze společné domácnosti dědí ve <b>2. a 3. třídě</b>, v první nikdy.' },
      { t: 'widget', name: 'dedeni', title: 'Kalkulačka dědických podílů ze zákona (třídy 1–4)',
        fig: ZPN.podily('Příklad ze semináře: paní E. + oba rodiče zesnulého manžela (2. třída)', [['paní E. (manželka)', 1, 2, 'fD'], ['otec zůstavitele', 1, 4, 'fW'], ['matka zůstavitele', 1, 4, 'fE']]),
        figcap: 'Šířka úseku odpovídá dílu pozůstalosti. Stejné díly by byly po ⅓, manželce však ve 2. třídě náleží vždy nejméně ½; zbylou polovinu si rovným dílem rozdělí rodiče.',
        how: ['Zadej, kdo zůstavitele přežil a dědí; nebo klikni na příklad ze semináře.', 'Kroky: hledá se první třída, ve které někdo dědí → díly stejným dílem → u manžela ve 2. třídě kontrola „nejméně ½“ → výsledné zlomky.', 'Dítě, které nedědí (vyděděno, odmítlo, zemřelo dříve), do počtu dětí nezapočítávej; jeho podíl nabudou jeho děti (§ 1635 odst. 2) – ty zadej zvlášť.'],
        sol: '<b>Paní E.</b>, bezdětné manželství, bez závěti: potomci nejsou, takže dědí <b>2. třída</b> – manželka a rodiče zůstavitele (a spolužijící osoby). Žijí-li oba rodiče: stejné díly by byly ⅓, manželka ale musí mít nejméně ½ → <b>manželka ½, každý z rodičů ¼</b>. Nežije-li žádný z rodičů ani spolužijící, dědí manželka sama. <b>Tři děti, jedno vyděděné</b> (bez vlastních dětí): 1. třída – manželka a dvě děti, <b>každý ⅓</b>; má-li vyděděné dítě děti, nabývají jeho ¼ ony a ostatní mají po ¼. <b>Tetička</b> ze společné domácnosti: při dětech nedědí (1. třída spolužijící nezná); v bezdětném případě dědí ve 2. třídě vedle manželky a rodičů – manželka ½, tetička a oba rodiče každý ⅙.' }
    ] },
    { title: 'Vydědění, odmítnutí a odevzdání dědictví', blocks: [
      { t: 'def', term: 'Vydědění', x: 'Projev vůle zůstavitele, kterým zbaví neopomenutelného dědice jeho práva, v případě, že dědic:', items: ['neposkytl zůstaviteli potřebnou pomoc v nouzi,', 'o zůstavitele neprojevuje opravdový zájem, jaký by projevovat měl,', 'byl odsouzen pro trestný čin spáchaný za okolností svědčících o jeho zvrhlé povaze,', 'vede trvale nezřízený život.'] },
      { t: 'versus', title: 'Vydědění × dědická nezpůsobilost', x: 'Obojí vede k tomu, že určitá osoba nedědí, ale liší se tím, kdo o tom rozhoduje. Vydědění je rozhodnutí samotného zůstavitele – musí ho projevit a zákon mu dovolí vydědit neopomenutelného dědice jen z vyjmenovaných důvodů. Dědická nezpůsobilost nastává sama ze zákona, když se dědic dopustí úmyslného trestného činu proti zůstaviteli nebo jeho blízkým či činu proti jeho poslední vůli; zůstavitel ji naopak může jen výslovně prominout. Syn, který se o otce dlouhodobě nezajímá, bude dědit, dokud ho otec nevydědí; syn, který zfalšuje otcovu závěť, nedědí, i kdyby otec nic neudělal.', cols: [
        { h: 'Vydědění', items: ['projev vůle zůstavitele', 'jen ze 4 zákonných důvodů', 'týká se neopomenutelného dědice'] },
        { h: 'Dědická nezpůsobilost', items: ['nastává ze zákona', 'úmyslný TČ nebo čin proti poslední vůli', 'zůstavitel může výslovně prominout'] }
      ] },
      { t: 'versus', title: 'Odmítnutí × odevzdání dědictví', x: 'Odmítnutím se dědic dědictví zcela zříká: musí to výslovně prohlásit vůči soudu do jednoho měsíce ode dne, kdy ho soud vyrozuměl o jeho dědickém právu, o právu dědictví odmítnout i o následcích. Pak se na něj hledí, jako by nikdy nedědil, a jeho podíl připadne tomu, na koho by připadl, kdyby nebylo jeho (např. jeho dětem). Odevzdáním se dědic dědictví vzdá výslovně před soudem ve prospěch konkrétního jiného dědice, který s tím musí souhlasit. Když dcera nechce zdědit chatu, odmítnutím rozhodne jen o sobě; odevzdáním může zajistit, že její díl dostane právě bratr.', cols: [
        { h: 'Odmítnutí (§ 1487)', items: ['výslovné prohlášení vůči soudu', 'do 1 měsíce od vyrozumění soudem', 'hledí se, jako by dědictví nikdy nenabyl'] },
        { h: 'Odevzdání', items: ['jen dědic, který dědictví neodmítl', 'výslovně před soudem ve prospěch jiného dědice', 'jiný dědic musí souhlasit'] }
      ] }
    ] },
    { title: 'Otázky ze semináře k zamyšlení', blocks: [
      { t: 'ul', items: [
        'Jak uplatníte pohledávku za dlužníkem, který zemřel?',
        'Jaké jsou možnosti převodu nemovitosti na třetí osobu, aniž by vznikl podíl neopominutelnému dědici?',
        'Jak byste využili soupis pozůstalosti? Jaký má tento institut praktický dopad?'
      ] },
      { t: 'tip', x: 'Vodítko z podkladů: pozůstalost zahrnuje i <b>pasiva</b>, takže dluh zůstavitele přechází na dědice – pohledávku tedy uplatníte vůči dědicům (v řízení o pozůstalosti). <b>Soupis pozůstalosti</b> zjistí čistou hodnotu majetku a <b>výhrada soupisu</b> chrání dědice. Co v podkladech není (např. rozsah odpovědnosti za dluhy), najdeš v sekci „doplněno“ níže.' }
    ] },
    { title: 'Povinný díl, odpovědnost za dluhy a řízení o pozůstalosti (doplněno)', blocks: [
      { t: 'ul', items: [
        '<b>Povinný díl</b> neopomenutelného dědice (§ 1643 OZ): <b>nezletilý</b> potomek musí dostat nejméně <b>¾</b>, <b>zletilý</b> nejméně <b>¼</b> svého zákonného dědického podílu.',
        '<b>Dluhy</b>: dědic, který uplatnil <b>výhradu soupisu</b>, hradí dluhy zůstavitele jen do výše ceny nabytého dědictví (§ 1706 OZ); bez výhrady odpovídá za dluhy v plném rozsahu (§ 1704 OZ).',
        '<b>Řízení o pozůstalosti</b> upravuje zákon č. 292/2013 Sb., o zvláštních řízeních soudních. Vede je <b>soud</b>, úkony v něm provádí <b>notář jako soudní komisař</b>; končí rozhodnutím soudu, které potvrdí nabytí dědictví.'
      ] },
      { t: 'warn', x: 'Tato sekce není ze slajdů semináře; čísla a paragrafy si ověř v zákoně nebo u vyučujícího.' }
    ] }
  ],
  mistakes: [
    'Pravidlo „manžel nejméně ½“ platí <b>jen ve 2. třídě</b>; v 1. třídě dědí manžel stejný díl jako každé dítě.',
    'Spolužijící osoby (1 rok ve společné domácnosti) dědí jen ve <b>2. a 3. třídě</b>, nikdy v první.',
    'Právnická osoba může dědit <b>jen ze závěti</b>; ze zákona dědí jen fyzické osoby, a nedědí-li nikdo, stát (odúmrť).',
    'Holografní závěť nepotřebuje svědky, ale musí být <b>celá</b> psaná vlastní rukou; vytištěná a jen podepsaná závěť potřebuje <b>dva současně přítomné svědky</b>.',
    'Svědkem závěti nesmí být dědic, odkazovník, osoba jim blízká ani jejich zaměstnanec.',
    'Dědická smlouva vyžaduje <b>veřejnou listinu</b> a <b>¼ pozůstalosti musí zůstat volná</b>.',
    'Zaměnit vydědění (rozhoduje zůstavitel, jen ze 4 důvodů) a dědickou nezpůsobilost (nastává ze zákona).',
    'Odmítnout dědictví lze jen <b>výslovně vůči soudu do 1 měsíce</b> od vyrozumění; odevzdání je vzdání se ve prospěch konkrétního jiného dědice.'
  ],
  qa: [
    { q: 'Jaké jsou čtyři předpoklady dědění?', a: 'Smrt zůstavitele (nebo prohlášení za mrtvého), existence pozůstalosti, způsobilý dědic a dědický titul.' },
    { q: 'Jaké jsou dědické tituly?', a: 'Závěť, dědická smlouva (§ 1582 OZ) a zákon. Ze zákona se dědí, nejsou-li dědici ze závěti a z dědické smlouvy.' },
    { q: 'Kdo může být dědicem?', a: 'Fyzická osoba (ze závěti, dědické smlouvy i zákona), právnická osoba (jen ze závěti) a stát (odúmrť). Způsobilost FO vychází z právní osobnosti.' },
    { q: 'Kdy je dědic nezpůsobilý?', a: 'Dopustil-li se úmyslného trestného činu proti zůstaviteli, jeho předku, potomku nebo manželu, nebo zavrženíhodného činu proti poslední vůli (donucení, lest, překažení, zatajení, zfalšování, podvržení či zničení pořízení) – ledaže mu to zůstavitel výslovně prominul.' },
    { q: 'Co je závěť a kdy je neplatná?', a: 'Odvolatelný písemný projev vůle, kterým zůstavitel pro případ smrti osobně zůstavuje podíl na pozůstalosti či odkaz. Neplatná je, není-li zřejmé datum (den, měsíc, rok), odporují-li si více závětí, nebo při podstatném omylu zůstavitele (§ 1529).' },
    { q: 'Jaké jsou soukromé formy závěti?', a: 'Holografní – celá vlastní rukou a podepsaná, beze svědků. Alografní obecná – psaná jinak, vlastnoručně podepsaná a před dvěma současně přítomnými svědky prohlášená za poslední vůli. Alografní zvláštní – pro osoby se smyslovým postižením.' },
    { q: 'Kdo může pořídit závěť formou veřejné listiny?', a: 'Kdokoli svéprávný; osoba starší 15 let bez plné svéprávnosti i bez souhlasu zákonného zástupce; osoba omezená ve svéprávnosti jen touto formou, v rámci omezení.' },
    { q: 'Kdy lze pořídit privilegovanou závěť?', a: 'Při bezprostředním ohrožení života, důvodné obavě smrti před sepsáním veřejné listiny, z vážného důvodu na cestě lodí pod vlajkou ČR nebo letadlem z leteckého rejstříku ČR a při účasti v ozbrojeném konfliktu. Má úlevy na formě a svědcích a časově omezenou platnost.' },
    { q: 'Kdo nemůže být svědkem závěti?', a: 'Dědic, odkazovník, osoba jim blízká a zaměstnanec dědice nebo odkazovníka – svědek nesmí mít zájem na obsahu závěti.' },
    { q: 'Jaké náležitosti má dědická smlouva?', a: 'Zůstavitel jí povolává druhou stranu nebo třetí osobu za dědice či odkazovníka a druhá strana to přijímá (§ 1582). Forma veřejné listiny; ¼ pozůstalosti musí zůstat volná.' },
    { q: 'Kdo dědí v první a ve druhé třídě?', a: '1. třída: děti a manžel, každý stejným dílem; za nedědící dítě jeho děti. 2. třída (nejsou-li potomci): manžel, rodiče a osoby žijící se zůstavitelem aspoň rok ve společné domácnosti (pečovaly o ni nebo byly odkázány výživou); stejným dílem, manžel vždy nejméně polovinu.' },
    { q: 'Paní E. zemřel manžel, manželství bylo bezdětné, závěť nebyla. Kdo dědí a v jakém poměru?', a: 'Dědí 2. třída: paní E. a rodiče manžela (a případně osoby ze společné domácnosti). Žijí-li oba rodiče, má paní E. ½ (nejméně polovina) a každý rodič ¼.' },
    { q: 'Jak by se to změnilo, kdyby manželé měli 3 děti a jedno bylo vyděděno?', a: 'Dědí 1. třída: manželka a děti stejným dílem. Vyděděné dítě nedědí; nemá-li vlastní děti, dědí manželka a dvě děti po ⅓. Má-li děti, nabývají jeho podíl ony (§ 1635 odst. 2) a každý „kmen“ má ¼.' },
    { q: 'Změní se něco, když s rodinou žila aspoň rok tetička odkázaná na výživu zůstavitele?', a: 'Při dětech ne – v 1. třídě spolužijící osoby nedědí. V bezdětném případě by tetička dědila ve 2. třídě: manželka ½, tetička a oba rodiče po ⅙.' },
    { q: 'Z jakých důvodů lze vydědit?', a: 'Neopomenutelný dědic neposkytl zůstaviteli potřebnou pomoc v nouzi, neprojevuje o něj opravdový zájem, byl odsouzen pro trestný čin spáchaný za okolností svědčících o zvrhlé povaze, nebo vede trvale nezřízený život.' },
    { q: 'Jak lze dědictví odmítnout a co je odevzdání?', a: 'Odmítnutí: výslovné prohlášení vůči soudu do 1 měsíce od vyrozumění o dědickém právu (§ 1487); hledí se, jako by dědic nikdy nedědil. Odevzdání: dědic, který neodmítl, se výslovně před soudem vzdá dědictví ve prospěch jiného dědice, který souhlasí.' }
  ]
});
