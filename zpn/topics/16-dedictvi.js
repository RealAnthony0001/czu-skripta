registerTopic({
  id: 'dedictvi', order: 16, icon: '⚰️', title: 'Dědictví', src: 'doplneno', where: 'Seminář 5 (NOZ § 1475 an.; zákon o zvláštních řízeních soudních 292/2013 Sb.) – psáno ze znalostí, bez podkladů',
  summary: 'Dědické právo podle občanského zákoníku: pojmy, tři dědické tituly (zákon, závěť, dědická smlouva), šest dědických tříd, formy závěti, odkaz, nepominutelný dědic, vydědění, dědická nezpůsobilost, přijetí a odmítnutí dědictví a řízení o pozůstalosti.',
  vocab: [
    { w: 'NOZ / OZ, §', x: 'Nový občanský zákoník (zákon č. 89/2012 Sb., účinný od 2014); § je paragraf, číslovaná jednotka zákona.' },
    { w: 'Právní nástupce', x: 'Osoba, na kterou přejdou práva a povinnosti jiného (zde dědic po zůstaviteli).' },
    { w: 'Notář', x: 'Právnik jmenovaný státem, který sepisuje veřejné listiny a v dědictví působí jako soudní komisař.' },
    { w: 'Veřejná listina', x: 'Dokument vydaný státním orgánem či notářem; má zvýšenou důvěryhodnost a prokazuje to, co je v ní potvrzeno.' },
    { w: 'Majetek, jmění, aktiva a pasiva', x: 'Jmění tvoří aktiva (věci, pohledávky, peníze) a pasiva (dluhy); v dědictví přechází obojí.' },
    { w: 'Příbuzný: potomek × předek × sourozenec', x: 'Potomek je dítě, vnuk…, předek rodič, prarodič…; sourozenci jsou v bočné linii; manžel není příbuzný.' },
    { w: 'Zletilý × nezletilý', x: 'Zletilý je osoba od 18 let, nezletilý je mladší; má význam pro výši nepominutelného podílu.' },
    { w: 'SJM (společné jmění manželů)', x: 'Majetek, který za trvání manželství nabyl kterýkoli z manželů; při smrti se nejprve rozdělí mezi manžele.' }
  ],
  key: [
    '<b>Dědictví</b> (pozůstalost) přechází na dědice <b>smrtí zůstavitele</b> (§ 1475); nepřechází práva a povinnosti vázané na osobu zůstavitele.',
    '<b>Tři dědické tituly:</b> dědická smlouva → závěť → zákon (dědění ze zákona nastupuje, pokud zůstavitel nepořídil nebo nepořídil o všem).',
    '<b>6 zákonných dědických tříd</b> (§ 1635 an.): 1. děti + manžel; 2. manžel, rodiče, osoby ze společné domácnosti; 3. sourozenci a osoby ze společné domácnosti; 4. prarodiče; 5. a 6. vzdálenější příbuzní. Nikdo nedědí → <b>stát</b>.',
    '<b>Formy závěti:</b> vlastnoruční (holografní), listina psaná jinak než rukou se svědky (alografní), <b>notářský zápis</b> (veřejná listina); ústní jen nouzově.',
    '<b>Nepominutelný dědic</b> (§ 1642) = potomek zůstavitele: zletilý má nárok nejméně na <b>¼</b>, nezletilý na <b>¾</b> hodnoty zákonného podílu; <b>vydědění</b> jen ze zákonných důvodů (§ 1646).',
    '<b>Dědická smlouva</b> jen formou <b>notářského zápisu</b>, nejvýše pro ¾ čistého majetku; dědic odpovídá za dluhy zůstavitele <b>jen do výše hodnoty nabytého dědictví</b>.',
    '<b>Řízení o pozůstalosti</b> vede <b>okresní soud</b>, zpravidla prostřednictvím <b>notáře jako soudního komisaře</b>; končí usnesením o dědictví.'
  ],
  sections: [
    { title: 'Základní pojmy a dědické tituly', blocks: [
      { t: 'def', term: 'Dědění', x: 'Přechod majetku (jmění) zemřelého – <b>zůstavitele</b> – na jeho nástupce – <b>dědice</b>.', items: ['smrtí člověka přechází jeho jmění (dědictví, pozůstalost) na dědice (§ 1475)', 'nepřecházejí práva a povinnosti, které jsou vázány na osobu zůstavitele'] },
      { t: 'table', head: ['Pojem', 'Význam'], rows: [
        ['<b>Zůstavitel</b>', 'Zemřelý, po němž se dědí.'],
        ['<b>Dědic</b>', 'Univerzální nástupce – nabývá dědictví jako celek (nebo jeho poměrnou část).'],
        ['<b>Pozůstalost / dědictví</b>', 'Jmění zůstavitele (majetek a dluhy) v době smrti.'],
        ['<b>Odkazovník</b>', 'Osoba, které zůstavitel odkázal jednotlivou věc či právo; není dědicem, má nárok vůči dědicům.'],
        ['<b>Nepominutelný dědic</b>', 'Potomek, kterému zákon zaručuje minimální podíl.'],
        ['<b>Pořízení pro případ smrti</b>', 'Závěť, dědická smlouva, dovětek (zjednodušená forma pro drobnosti).']
      ] },
      { t: 'table', head: ['Titul', 'Poznámka'], rows: [
        ['<b>Dědická smlouva</b>', 'Zůstavitel s dědicem smlouvou sjedná dědické právo; vázanější než závěť.'],
        ['<b>Závěť</b>', 'Jednostranný projev vůle zůstavitele – lze kdykoli odvolat nebo změnit.'],
        ['<b>Zákon</b>', 'Nastupuje, pokud zůstavitel nepořídil, pořízení je neplatné, dědic nedědí, nebo se pořízení týká jen části majetku.']
      ] },
      { t: 'tip', x: 'Pořadí vůle: dědická smlouva a závěť mají přednost před zákonnou posloupností; zákon je záložní.' }
    ] },
    { title: 'Dědění ze zákona – dědické třídy', blocks: [
      { t: 'p', x: 'Dědí se podle <b>šesti dědických tříd</b>. Dědic v dřívější třídě vylučuje dědice v pozdějších třídách; ve třídě dědí zpravidla rovným dílem. <b>Zásada reprezentace:</b> nedědí-li potomek (zemřel před zůstavitelem, odmítl dědictví apod.), nastupují na jeho místo jeho potomci (v 1. třídě).' },
      { t: 'table', head: ['Třída', 'Dědicové', 'Poznámka'], rows: [
        ['<b>1.</b> (§ 1635)', '<b>Děti zůstavitele a manžel</b> – každý rovným dílem', 'Podíl manžela nesmí být menší než <b>¼</b> pozůstalosti.'],
        ['<b>2.</b> (§ 1636)', '<b>Manžel, rodiče zůstavitele a osoby, které s ním žily ve společné domácnosti alespoň 1 rok před smrtí</b> a pečovaly o domácnost nebo byly na zůstaviteli odkázány výživou', 'Manžel dědí zpravidla polovinu (tzn. větší podíl); podrobnosti dělení si ověř v § 1636.'],
        ['<b>3.</b> (§ 1637)', '<b>Sourozenci zůstavitele</b> a osoby ze společné domácnosti (pokud nedědily výše)', 'Za zemřelého sourozence nastupují jeho děti.'],
        ['<b>4.</b> (§ 1638)', '<b>Prarodiče zůstavitele</b>', ''],
        ['<b>5.</b> (§ 1639)', 'Potomci prarodičů (strýcové, tety, bratranci, sestřenice)', 'Vzdálenější příbuzní.'],
        ['<b>6.</b> (§ 1640)', 'Ještě vzdálenější příbuzní zůstavitele (přesné vymezení viz § 1640)', 'Poslední třída; na zkoušku postačí princip.'],
        ['<b>Stát</b>', 'Nedědí-li nikdo z předchozích', 'Stát nabývá dědictví jako poslední dědic.']
      ] },
      { t: 'warn', x: 'Znění 4.–6. třídy a přesné dělení podílů ve 2. třídě si ověř v zákoně. Pro zkoušku se obvykle vyžaduje znát <b>první čtyři třídy</b>, princip „bližší vylučuje vzdálenější“ a pravidlo o čtvrtině pro manžela v 1. třídě.' },
      { t: 'ex', x: 'Zůstavitel zanechal manželku a dvě děti (1. třída). Dědí každý třetinu. Kdyby zanechal manželku a jedno dítě, dědí každý polovinu. Kdyby zanechal manželku a pět dětí, dědila by každé šestinu – ale manželka má nárok na ¼, proto ¼ pro manželku a ¾ se rozdělí mezi děti (3/20 každé).' },
      { t: 'p', x: '<b>Rozvedený manžel nedědí; manžel, který je v řízení o rozvod nebo odloučený, dědí dál</b> (dokud manželství trvá). Dědí i <b>počaté dítě</b> (nasciturus), narodí-li se živé.' }
    ] },
    { title: 'Závěť a odkaz', blocks: [
      { t: 'def', term: 'Závěť', x: 'Jednostranné pořízení pro případ smrti (§ 1494 an.), kterým zůstavitel určí:', items: ['dědice a jejich podíly', 'případně odkazy, podmínky či dodatečná ustanovení', '<b>kdykoli odvolatelná</b>; pozdější závěť ruší dřívější (v rozporu)'] },
      { t: 'table', head: ['Forma', 'Podstata'], rows: [
        ['<b>Vlastnoruční (holografní)</b>', 'Celá <b>vlastnoručně napsaná a podepsaná</b> zůstavitelem; není třeba svědků. Datum a místo se doporučují.'],
        ['<b>Listina psaná jinak (alografní)</b>', 'Psaná strojem / počítačem / cizí rukou, <b>zůstavitel ji podepíše</b> a před <b>dvěma svědky</b> současně přítomnými prohlásí, že je to jeho závěť; svědci se podepíší (svědek nesmí být dědicem ani odkazovníkem).'],
        ['<b>Veřejná listina – notářský zápis</b>', 'Sepíše notář; veřejná listina. Zapisuje se do Seznamu listin o pořízení pro případ smrti (centrální evidence notářské komory).'],
        ['<b>Ústní (nouzová)</b>', 'Jen v mimořádných situacích (ohrožení života, nelze sepsat); platí krátkou dobu po odpadnutí překážky.']
      ] },
      { t: 'ul', items: [
        '<b>Způsobilost pořizovat:</b> závěť může sepsat plně svéprávná osoba (nezletilý bez plné svéprávnosti nikoli); u osoby s omezenou svéprávností záleží na rozsahu omezení a duševním stavu.',
        '<b>Dovětek:</b> zjednodušené pořízení o malé části majetku (např. odkaz věci) bez formy závěti.',
        '<b>Náhradní dědic:</b> nastoupí, pokud dědic nedědí; <b>svěřenské nástupnictví</b> – dědictví po dědici přechází na dalšího určeného dědice.',
        'Zůstavitel může závěť odvolat zničením, novou závětí, nebo prohlášením.',
        'Jednání za zůstavitele zastoupením není přípustné – závěť je <b>osobní úkon</b>.'
      ] },
      { t: 'def', term: 'Odkaz (legát)', x: 'Pořízení, kterým zůstavitel zakládá odkazovníkovi nárok na určitou věc, peněžitou částku nebo jiné plnění.', items: ['odkazovník <b>není dědicem</b>; za odkaz odpovídá dědic (vůči němu má pohledávku)', 'dluhy zůstavitele hradí dědic z celého dědictví; odkazovník nehradí nic', 'dědic nemusí vyplatit odkaz nad hodnotu čistého dědictví'] },
      { t: 'law', ref: 'Dědická smlouva (§ 1582 an.)', x: 'Dvoustranné pořízení pro případ smrti: zůstavitel (svéprávný) s druhou stranou ujedná, že mu zanechá dědictví; druhá strana smlouvu přijme. <b>Forma: veřejná listina (notářský zápis)</b>. Zůstavitel může smlouvou pořídit nejvýše o <b>¾ čisté hodnoty pozůstalosti</b>; zbytek zůstane volný (závěť, zákon). Smlouvu lze zrušit jen dohodou nebo odstoupením z důvodů v zákoně.' }
    ] },
    { title: 'Nepominutelný dědic, vydědění, nezpůsobilost', blocks: [
      { t: 'law', ref: 'Nepominutelný dědic (§ 1642 an.)', x: 'Potomek zůstavitele (zpravidla děti) – bez ohledu na závěť má právo na zákonem zaručenou část. Zůstavitel nesmí nepominutelného dědice zkrátit: <b>zletilý potomek</b> musí dostat nejméně <b>jednu čtvrtinu</b>, <b>nezletilý potomek</b> nejméně <b>tři čtvrtiny</b> hodnoty toho, co by mu připadlo ze zákona. Zkrácený se může domáhat doplnění podílu (v penězích), případně neplatnosti pořízení v rozsahu zkrácení.' },
      { t: 'law', ref: 'Vydědění (§ 1646 an.)', x: 'Zůstavitel může potomka <b>vydědit</b> jen z těchto důvodů: a) neposkytl potřebnou pomoc v nouzi, b) neprojevuje trvale opravdový zájem, jaký by projevoval potomek, c) byl <b>pravomocně odsouzen pro úmyslný trestný čin</b> k nepodmíněnému trestu odnětí svobody nejméně <b>1 roku</b>, d) trvale vede nezřízený život. Vydědění musí být provedeno <b>v pořízení pro případ smrti</b> (v listině) s uvedením důvodu; jinak je neplatné. (Přesné znění důvodů si ověř v § 1646.)' },
      { t: 'table', head: ['Pojem', 'Obsah'], rows: [
        ['<b>Dědická nezpůsobilost</b> (§ 1481)', 'Zákon vylučuje z dědění toho, kdo se dopustil <b>úmyslného trestného činu proti zůstaviteli</b> (jeho předkům, potomkům, manželu), kdo zůstavitele donutil či lstí přiměl k pořízení, kdo zmařil jeho pořízení, kdo zjevně neprojevil zájem. Zůstavitel může <b>odpustit</b>.'],
        ['<b>Vydědění</b>', 'Projev vůle zůstavitele, který vylučuje potomka, jen z důvodů v zákoně.'],
        ['<b>Odmítnutí dědictví</b>', 'Dědic dědictví odmítne – chová se, jako by nebyl; nastupují jeho potomci / další v řadě.'],
        ['<b>Vzdání se dědického práva</b>', 'Dědic se ještě před smrtí smlouvou se zůstavitelem vzdá práva dědit (forma veřejné listiny).']
      ] },
      { t: 'warn', x: 'Nezaměňuj <b>vydědění</b> (činí zůstavitel, jen ze zákonných důvodů, jen u potomků) a <b>dědickou nezpůsobilost</b> (nastává ze zákona, když se dědic provinil). Odmítnutí dědictví činí sám dědic.' }
    ] },
    { title: 'Přijetí a odmítnutí dědictví, dluhy', blocks: [
      { t: 'ul', items: [
        'Dědic nabývá dědictví <b>smrtí zůstavitele</b>; soud nabytí jen potvrdí (usnesením). Nejde o „přijetí“ konstitutivní.',
        '<b>Odmítnutí:</b> dědic se může dědictví odmítnout do <b>1 měsíce od poučení</b> soudem / soudním komisařem. Odmítnout nelze část dědictví ani s podmínkou. Odmítnuté dědictví nabývají další dědici (potomci odmítajícího).',
        '<b>Dluhy zůstavitele:</b> dědic odpovídá za dluhy <b>do výše hodnoty nabytého dědictví</b> (§ 1675). Nedostačuje-li dědictví, věřitelé se uspokojují poměrně; může být nařízena likvidace.',
        '<b>Dědictví bez dědice:</b> nabývá <b>stát</b>.',
        '<b>Spoluvlastnictví a SJM:</b> majetek zůstavitele se nejprve vypořádá se společným jměním manželů (manžel má vlastní polovinu SJM), do pozůstalosti náleží jen podíl zůstavitele.'
      ] }
    ] },
    { title: 'Řízení o pozůstalosti', blocks: [
      { t: 'p', x: 'Upraveno v zákoně o zvláštních řízeních soudních (292/2013 Sb.) – část o dědictví. Příslušný je <b>okresní soud</b> podle posledního bydliště zůstavitele.' },
      { t: 'ol', items: [
        'Řízení se zahajuje <b>z úřední povinnosti</b> po obdržení oznámení o úmrtí od matriky. Soud pověří <b>notáře jako soudního komisaře</b>.',
        'Notář zjistí okruh dědiců, majetek (soupis) a dluhy, vyzve dědice k projevům o dědickém právu (včetně odmítnutí) a provede <b>jednání o pozůstalosti</b>.',
        'Dohoda dědiců o rozdělení dědictví podléhá schválení soudem.',
        'Řízení končí <b>usnesením o dědictví</b> (potvrzení nabytí dědictví, rozdělení majetku). Usnesení je podkladem pro zápis do katastru nemovitostí a evidencí.',
        'Při předluženém dědictví se postupuje podle zvláštních pravidel (likvidace pozůstalosti).'
      ] },
      { t: 'warn', x: 'Soud pověřuje notáře jako soudního komisaře – nejde o notářské řízení; rozhodnutí vydává <b>soud</b> (usnesení). Notář provádí šetření a jednání.' }
    ] }
  ],
  mistakes: [
    'Zaměnit zůstavitele (zemřelý) a dědice (nástupce); odkazovník není dědic.',
    'Myslet si, že dědic „přijímá“ dědictví až po souhlasu – nabývá jej smrtí zůstavitele; soud potvrdí.',
    'Zapomenout, že manžel dědí v 1. i 2. třídě a v 1. třídě nesmí mít menší podíl než ¼.',
    'Tvrdit, že dědická smlouva může být ústní – vyžaduje <b>notářský zápis</b>, a to jen ve výši nejvýše ¾ čistého majetku.',
    'Zaměnit holografní závěť (celá vlastní rukou) a alografní (jinak psaná, dva svědci).',
    'Zaměnit vydědění (zůstavitel) a dědickou nezpůsobilost (ze zákona).',
    'Zaměnit nepominutelný podíl zletilého (¼) a nezletilého (¾).',
    'Myslet si, že dědic odpovídá za dluhy bez omezení – odpovídá do výše hodnoty nabytého dědictví.'
  ],
  qa: [
    { q: 'Co je dědictví a kdy přechází na dědice?', a: 'Dědictví je jmění zemřelého (zůstavitele). Přechází na dědice <b>smrtí zůstavitele</b> (§ 1475); nepřechází práva a povinnosti vázané na osobu zůstavitele.' },
    { q: 'Jaké jsou dědické tituly?', a: 'Dědická smlouva, závěť a zákon. Zákonná posloupnost nastupuje, pokud zůstavitel nepořídil (nebo jen částečně) či pořízení neplatí.' },
    { q: 'Kolik je dědických tříd a kdo dědí v první?', a: 'Šest tříd. V první dědí <b>děti zůstavitele a manžel</b>, rovným dílem; manžel nejméně ¼. Nedědí-li nikdo z tříd, dědí stát.' },
    { q: 'Jaké jsou formy závěti?', a: 'Vlastnoruční (holografní: celá psaná a podepsaná rukou zůstavitele), listina psaná jinak než vlastní rukou se dvěma svědky (alografní), notářský zápis (veřejná listina), v nouzi ústní.' },
    { q: 'Čím se liší závěť a dědická smlouva?', a: 'Závěť je jednostranná a kdykoli odvolatelná. Dědická smlouva je dvoustranná, musí mít formu notářského zápisu a lze jí pořídit nejvýše o ¾ čisté hodnoty pozůstalosti; zrušit ji lze jen dohodou nebo z důvodu v zákoně.' },
    { q: 'Co je odkaz a čím se liší od dědického podílu?', a: 'Odkazem zůstavitel přiřkne konkrétní věc či plnění odkazovníkovi. Odkazovník není dědic, nenese dluhy zůstavitele a má pohledávku vůči dědicům. Dědic nabývá dědictví jako celek (aktiva i dluhy).' },
    { q: 'Kdo je nepominutelný dědic a jaký má nárok?', a: 'Potomek zůstavitele. Zletilý musí dostat nejméně ¼, nezletilý nejméně ¾ hodnoty zákonného podílu. Závěť, která jej zkracuje, je v tomto rozsahu zpochybnitelná; zkrácený se může domáhat doplnění.' },
    { q: 'Jak lze potomka vydědit?', a: 'Jen z důvodů uvedených v zákoně (§ 1646: neposkytnutí pomoci v nouzi, neprojevování zájmu, odsouzení k nepodmíněnému trestu nejméně 1 rok za úmyslný čin, trvalý nezřízený život) a v pořízení pro případ smrti s uvedením důvodu.' },
    { q: 'Kdy je dědic nezpůsobilý dědit?', a: 'Pokud se dopustil úmyslného trestného činu proti zůstaviteli (či jeho blízkým), zmařil nebo vynutil jeho pořízení apod. Nezpůsobilost nastává ze zákona; zůstavitel může odpustit.' },
    { q: 'Jak lze dědictví odmítnout a jaké jsou následky?', a: 'Do 1 měsíce od poučení soudem / soudním komisařem; odmítnutí je bezpodmínečné a týká se celého dědictví. Odmítající se považuje za nikdy nedědícího, nastupují další dědicové (potomci).' },
    { q: 'Pepa zemřel, zanechal manželku, dvě děti a dluh 500 000 Kč. Dědictví má hodnotu 300 000 Kč. Kolik zaplatí dědicové?', a: 'Dědici odpovídají za dluhy zůstavitele jen do výše hodnoty nabytého dědictví – tedy nejvýše 300 000 Kč celkem (poměrně podle podílů). Zbytku dluhu se věřitelé po dědicích nedomohou.' },
    { q: 'Jak probíhá řízení o pozůstalosti?', a: 'Zahajuje je okresní soud z úřední povinnosti po oznámení úmrtí; pověří notáře jako soudního komisaře, který zjistí dědice, majetek a dluhy a provede jednání. Končí usnesením o dědictví (potvrzení nabytí), které vydá soud.' },
    { q: 'Pepa napsal závěť na počítači, vytiskl ji a podepsal, svědky neměl. Platí?', a: 'Nikoli. Nejde o holografní závěť (není celá vlastnoručně psaná) ani o alografní (chybí dva svědci, před nimiž zůstavitel prohlásí, že jde o jeho závěť). Zůstavitel musí zvolit platnou formu (ručně celou, nebo se svědky, nebo notář).' }
  ]
});
