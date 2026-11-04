registerTopic({
  id: 'smlouvy', order: 10, icon: '🤝', title: 'Relativní majetková práva: závazky a uzavření smlouvy', src: 'podklady', lec: [6], where: 'Přednáška 6 (Relativní majetkové právo – závazkové vztahy) + Cvičení 3 (Závazky v soukromém právu)',
  summary: 'Závazkové právo v NOZ: pojem závazku, zásady smluvního práva, uzavření smlouvy (oferta a akceptace, předsmluvní odpovědnost), změny a zánik závazků, prodlení a zajištění × utvrzení dluhu. Jednotlivé smlouvy (kupní, o dílo, nájem, darování…) jsou v navazujícím tématu.',
  vocab: [
    {w:'Závazek (obligace)',x:'Relativní právní vztah, ve kterém má věřitel právo na plnění (pohledávka) a dlužník povinnost plnit (dluh).'},
    {w:'Oferta × akceptace',x:'Oferta je nabídka k uzavření smlouvy, akceptace její přijetí; smlouva vzniká, jakmile si strany ujednaly obsah (§ 1725).'},
    {w:'Konkludentní jednání',x:'Jednání jinak než slovy nebo písmem, ze kterého je zřejmé, co chtěl jednající projevit (např. plnění podle nabídky, § 546).'},
    {w:'Nominátní × inominátní smlouva',x:'Nominátní (pojmenovaná) je upravená zákonem, inominátní (nepojmenovaná) vznikla ze smluvní volnosti, např. leasing.'},
    {w:'Adhezní smlouva',x:'Smlouva, jejíž základní podmínky určila jedna strana a druhá je nemohla ovlivnit („take it or leave it“).'},
    {w:'Spotřebitel × podnikatel',x:'Spotřebitel jedná mimo své podnikání (§ 419) a má zvláštní ochranu; podnikatel jedná v rámci výdělečné činnosti (§ 420–421).'},
    {w:'Cese',x:'Postoupení pohledávky: věřitel se mění, dluh a dlužník zůstávají.'},
    {w:'Novace × narovnání',x:'Novace nahrazuje původní závazek novým, narovnání odstraňuje nejistotu o právech a povinnostech dohodou.'}
  ],
  key: [
    '<b>Závazek</b> (obligace) = relativní vztah věřitel × dlužník; dlužník musí něco <b>dát, konat, zdržet se nebo strpět</b>. NOZ: čtvrtá část, <b>§ 1721–3014</b>, jedna úprava pro občanské i obchodní závazky.',
    '<b>Vznik závazku</b>: smlouva (nejčastěji), delikt (protiprávní čin), jednostranné právní jednání (veřejný příslib, slib odškodnění), kvazikontrakt (nepřikázané jednatelství), bezdůvodné obohacení.',
    '<b>Zásady</b>: pacta sunt servanda, dobrá víra a poctivost (§ 6–7), autonomie vůle a dispozitivnost (§ 1 odst. 2), bezformálnost (§ 559), favor contractus (§ 574), ochrana slabší strany a spotřebitele.',
    '<b>Smlouva je uzavřena, jakmile si strany ujednaly její obsah</b> (§ 1725): oferta (§ 1732) + akceptace; přijetí s dodatkem je nová nabídka, nepodstatná odchylka smlouvu nebrání.',
    '<b>Předsmluvní odpovědnost</b> (§ 1729): kdo bezdůvodně ukončí jednání, které se jevilo jako vysoce pravděpodobně úspěšné, hradí škodu (omezeně: ztrátu z obdobných případů).',
    '<b>Změna závazku</b>: v subjektech (cese, převzetí dluhu, přistoupení k dluhu, postoupení smlouvy) a v obsahu (novace, narovnání).',
    '<b>Zánik závazku</b>: splnění, dohoda, započtení, odstupné, splynutí, prominutí dluhu, výpověď, odstoupení, nemožnost plnění, smrt (u osobního plnění).',
    '<b>Zajišťovací</b> instituty dávají věřiteli náhradní zdroj (zástava, ručení, jistota, závdavek…); <b>utvrzovací</b> jen zlepšují kvalitu pohledávky (smluvní pokuta, uznání dluhu, úrok z prodlení).'
  ],
  sections: [
    { title: 'Závazkové právo a závazek', blocks: [
      { t: 'def', term: 'Závazek (obligace)', x: 'Relativní právní vztah, ve kterém má <b>věřitel</b> právo na plnění (pohledávka) a <b>dlužník</b> povinnost plnit (dluh).', items: ['předmětem je plnění: dlužník musí něco <b>dát, konat, zdržet se nebo strpět</b>', '§ 1722: plnění musí být <b>majetkové povahy</b> a odpovídat zájmu věřitele, i když tento zájem není jen majetkový', 'věřitel může požadovat plnění jen po dlužníkovi, ne po třetích osobách'] },
      { t: 'table', head: ['', 'Absolutní práva', 'Relativní práva'], rows: [
        ['Účinky', 'vůči <b>každému</b> (erga omnes)', 'jen vůči <b>určité osobě</b> (inter partes)'],
        ['Povinná osoba', 'všichni ostatní – musí se zdržet zásahu', 'dlužník – musí konkrétně plnit'],
        ['Příklady', 'vlastnictví a další věcná práva', 'pohledávky ze smlouvy, z deliktu, z bezdůvodného obohacení'],
        ['Ochrana', 'proti komukoli (např. vlastnická žaloba)', 'jen proti dlužníkovi (žaloba o plnění)'],
        ['Vznik', 'zákon určuje, která práva jsou absolutní (taxativní výčet)', 'smlouva, delikt, jiná právní skutečnost']
      ] },
      { t: 'p', x: '<b>Výjimky z relativní povahy</b> závazku (působí i vůči třetí osobě): smlouva ve prospěch třetího (§ 1767 an.), relativní neúčinnost – odporovatelnost (§ 589 an.), poukázka (§ 1939 an.).' },
      { t: 'tree', title: 'Závazkové právo v NOZ (§ 1721–3014)', root: { h: 'Čtvrtá část NOZ – relativní majetková práva', x: '§ 1721–3014, jednotná úprava pro občanské i obchodní závazky', kids: [
        { h: 'Všeobecná ustanovení o závazcích', x: '§ 1721–2054: vznik, smlouva, obsah závazků, spotřebitelské smlouvy, společné dluhy, změny, zánik, zajištění a utvrzení' },
        { h: 'Závazky z právních jednání', x: '§ 2055–2893: jednotlivé smlouvy (kupní, o dílo, nájem, darování…)' },
        { h: 'Závazky z deliktů', x: '§ 2894–2990: náhrada majetkové a nemajetkové újmy' },
        { h: 'Závazky z jiných právních důvodů', x: '§ 2991–3014: bezdůvodné obohacení, nepřikázané jednatelství, upotřebení cizí věci k prospěchu jiného' }
      ] } },
      { t: 'table', head: ['Vznik závazku', 'Příklad'], rows: [
        ['<b>Smlouva</b> (dvou- a vícestranné právní jednání)', 'nejčastější důvod vzniku závazku: kupní, nájemní, o dílo'],
        ['<b>Delikt</b> (protiprávní čin)', 'porušením povinnosti vzniká nová, sekundární povinnost – např. nahradit škodu'],
        ['<b>Jednostranné právní jednání</b>', 'veřejný příslib, slib odškodnění'],
        ['<b>Kvazikontrakt</b> (podobá se smlouvě, chybí souhlas druhé strany)', 'nepřikázané jednatelství, upotřebení cizí věci k prospěchu jiného'],
        ['<b>Bezdůvodné obohacení</b>', 'plnění bez právního důvodu (viz téma Odpovědnost)']
      ] },
      { t: 'tip', x: 'Absolutní = <b>proti všem</b> (vlastním dům – kdokoli ho musí respektovat). Relativní = <b>proti jednomu</b> (dlužím ti 5 000 Kč – jen já ti musím platit). Pramenem závazkového práva je hlavně OZ; doplňují ho zvláštní zákony (např. o spotřebitelském úvěru, zákoník práce) a podzákonné předpisy (např. nařízení vlády 351/2013 Sb. o úrocích z prodlení).' }
    ] },
    { title: 'Zásady smluvního práva', blocks: [
      { t: 'table', head: ['Zásada', 'Obsah'], rows: [
        ['<b>Pacta sunt servanda</b> (§ 3 odst. 2 písm. d)', 'smlouvy se musí dodržovat – bez toho by uzavírání smluv nemělo smysl'],
        ['<b>Dobrá víra a poctivost</b> (§ 6, 7)', 'povinnost jednat poctivě; nikdo se nemůže dovolávat vlastní nepoctivosti'],
        ['<b>Autonomie vůle</b> (§ 1 odst. 2)', 'ustanovení jsou zásadně dispozitivní; mezí je zákaz, dobré mravy, veřejný pořádek a postavení osob (ochrana osobnosti)'],
        ['<b>Svoboda smlouvy</b>', 'svoboda uzavřít smlouvu (výjimkou jsou smlouvy uzavírané povinně), volby protistrany a obsahu; výčet smluvních typů není uzavřený – lze uzavřít inominátní smlouvu (§ 1746 odst. 2)'],
        ['<b>Bezformálnost</b> (§ 559)', 'libovolná forma, pokud ji neomezuje zákon nebo druhá strana; písemnou smlouvu lze změnit i ústně, pokud si strany pro změny nevyžádaly formu; novace a narovnání vždy písemně, byl-li závazek zřízen písemně nebo jde o promlčené právo'],
        ['<b>Favor contractus</b> (§ 574, in dubio pro validitate)', 'v pochybnostech je právní jednání platné; soud může změnit nezákonně určený rozsah (§ 577), neplatnost lze zhojit (§ 582), dodatečně vyjasněný projev se bere jako platný od počátku (§ 553)'],
        ['<b>Ochrana slabší strany</b>', '§ 433 zákaz zneužití hospodářského postavení podnikatele; § 1793 neúměrné zkrácení, lichva; § 1789 adhezní smlouvy; § 1810 spotřebitel. Slabší je ten, kdo nemůže ovlivnit obsah závazku nebo má méně znalostí (nájemce bytu, zákazník ze zájezdu, zaměstnanec)']
      ] },
      { t: 'ul', items: [
        'Smluvnímu právu se v NOZ věnuje více než 1000 paragrafů; <b>skončila dvojkolejnost</b> občanskoprávních a obchodních závazků (nově je v NOZ i pojistná smlouva, pracovní smlouva zůstala v zákoníku práce).',
        'Úprava smluv je v systematice předřazena úpravě deliktů.'
      ] },
      { t: 'def', term: 'Spotřebitelská smlouva (§ 1810–1867)', x: 'Smlouva mezi podnikatelem a spotřebitelem, kterou NOZ chrání spotřebitele jako slabší stranu.', items: ['spotřebitel (§ 419) × podnikatel (§ 420, 421)', 'podnikatel má široké <b>informační povinnosti</b> (§ 1811) a musí je splnit s dostatečným předstihem před uzavřením smlouvy', 'zákon obsahuje příkladný výčet <b>zakázaných ujednání</b> (významná nerovnováha práv a povinností v neprospěch spotřebitele)', '<b>neobjednané plnění</b> (§ 1838, 1851): spotřebitel zboží nemusí platit ani vracet na své náklady'] },
      { t: 'def', term: 'Adhezní smlouva (§ 1789)', x: 'Smlouva, jejíž základní podmínky určila jedna strana nebo se řídí jejími pokyny a druhá je reálně nemohla ovlivnit.', items: ['typicky formuláře a obchodní podmínky („take it or leave it“)', 'slabší strana je zvláštně chráněna'] }
    ] },
    { title: 'Uzavření smlouvy: oferta a akceptace', blocks: [
      { t: 'svg', title: 'Jak vzniká smlouva', x: ZPN.kontrakt(), cap: 'Zleva doprava: předsmluvní jednání → oferta → akceptace → smlouva. Spodní řada ukazuje, jak může přijetí vypadat; růžově je případ, kdy smlouva zatím nevznikla (nová nabídka). Čísla jsou paragrafy NOZ.' },
      { t: 'table', head: ['Pojem', 'Pravidlo'], rows: [
        ['<b>Smlouva</b> (§ 1724–1725)', 'dvoustranné nebo vícestranné právní jednání, kterým strany zřizují mezi sebou závazek; je uzavřena, jakmile si strany ujednaly její obsah'],
        ['<b>Oferta</b> (§ 1732)', 'musí obsahovat podstatné náležitosti, aby šla jednoduše a nepodmíněně přijmout, a vyjadřovat vůli být vázán; reklama, katalog nebo vystavení zboží s cenou je (vyvratitelně) oferta s výhradou zásob'],
        ['<b>Není ofertou</b> (§ 1733)', 'projev nevyhovující § 1732, veřejný příslib (jen jednání o uzavření), výzva k podání nabídek, jednání, z něhož nelze určit, komu je určeno'],
        ['<b>Akceptace</b> (§ 1734–1735)', 'ofertu přítomné osobě je nutné přijmout bezodkladně, nepřítomné v uvedené lhůtě, jinak v přiměřené (slajd: 7 dnů)'],
        ['Zánik oferty (§ 1739)', 'odmítnutím oferta zaniká'],
        ['Přijetí s <b>odchylkou</b>', 'dodatky, výhrady, omezení a změny = nová nabídka; <b>nepodstatná odchylka</b> je přijetím, pokud ji oferent neodmítne – smlouva je uzavřena v tomto znění'],
        ['<b>Konkludentně</b> (§ 1744, § 546)', 'adresát nabídku přijme také tak, že se podle ní zachová – s přihlédnutím k obsahu nabídky, zavedené praxi mezi stranami a obvyklosti'],
        ['Forma (§ 1756, 1757)', 'smlouvu lze uzavřít konkludentně; písemné potvrzení ústní smlouvy může smlouvu nepodstatně změnit, pokud druhá strana mlčí'],
        ['Mlčení <i>(doplněno)</i>', 'samo o sobě není přijetím nabídky']
      ] },
      { t: 'p', x: '<b>Zvláštní způsoby uzavření</b>: dražba (smlouva je uzavřena příklepem, § 1771), veřejná soutěž (vyhlašovatel vyzve neurčité osoby k podání nejvhodnější nabídky, § 1772), veřejná nabídka (nabídka neurčitým osobám, § 1780).' },
      { t: 'ex', x: 'Eshop vystaví notebook za 20 000 Kč. Zákazník napíše: „Beru ho, ale s dopravou zdarma.“ Jde o akceptaci s dodatkem, tedy o <b>novou nabídku</b> – smlouva zatím nevznikla. Teprve když prodejce souhlasí, je smlouva uzavřena.' }
    ] },
    { title: 'Před uzavřením: jednání, neúplná smlouva, změna okolností', blocks: [
      { t: 'table', head: ['Institut', 'Obsah'], rows: [
        ['<b>Informační povinnost</b> (§ 1728)', 'při dodržení dobré víry může každý vést jednání bez povinnosti smlouvu uzavřít a neodpovídá za její neuzavření; zákaz předstíraného jednání; strany si sdělí všechny skutkové a právní okolnosti'],
        ['<b>Předsmluvní odpovědnost</b> (§ 1729)', 'bezdůvodné ukončení jednání je nepoctivé; nepoctivá strana nahradí škodu. Podmínka: jednání dospělo tak daleko, že se uzavření jevilo jako vysoce pravděpodobné. Výše je omezena ztrátou z obdobných případů (nemusí se prokazovat ztráta z konkrétní smlouvy); nárok na náklady i ušlý zisk'],
        ['<b>Důvěrnost</b> (§ 1730)', 'důvěrné údaje jedné strany musí druhá chránit před zneužitím a prozrazením; porušení zakládá odpovědnost za vlastní obohacení'],
        ['<b>Neúplná smlouva</b> (§ 1726)', 'pokud strany považují smlouvu za uzavřenou, ač neujednaly všechny náležitosti, hledí se na ni jako na uzavřenou, lze-li předpokládat, že by byla uzavřena i bez dohody o ní; přihlíží se k následnému chování. Netýká se podstatných náležitostí. Jedna ze stran může učinit náležitost podmínkou vzniku smlouvy; <b>punktace</b> (zápis o hlavních rysech) nezavazuje'],
        ['<b>Závislé smlouvy</b> (§ 1727)', 'každá smlouva zahrnutá v jedné listině se posuzuje samostatně; u závislých smluv je existence každé podmínkou existence ostatních'],
        ['<b>Smlouva o smlouvě budoucí</b>', 'strana se zavazuje po vyzvání v ujednané lhůtě (jinak do 1 roku) uzavřít budoucí smlouvu, jejíž obsah je ujednán alespoň obecně; nevyzve-li oprávněná strana včas, povinnost zaniká'],
        ['<b>Změna okolností</b> (§ 1764 an.)', 'podstatná změna založí hrubý nepoměr v právech a povinnostech nebo neúměrně zvýší náklady či sníží hodnotu plnění; nešlo ji předpokládat ani ovlivnit → právo domáhat se obnovení jednání o smlouvě. Lze se jí vyhnout doložkou o převzetí nebezpečí změny okolností (§ 1765 odst. 2)'],
        ['<b>Neúměrné zkrácení</b> (§ 1793)', 'zásada ekvivalence plnění: je-li plnění v hrubém nepoměru k protiplnění, může zkrácená strana žádat zrušení smlouvy a navrácení do původního stavu, ledaže druhá strana doplní, oč byla zkrácena (cena obvyklá v době a místě uzavření); neplatí, pokud druhá strana o nepoměru nevěděla ani vědět nemusela']
      ] },
      { t: 'warn', x: 'Slajd 3. semináře uvádí § 1726 jako příklad <b>relativní neplatnosti</b>. Ve skutečnosti § 1726 řeší <b>neúplnou smlouvu</b> (viz tabulka). Příklady <b>absolutní neplatnosti</b> ze stejného slajdu jsou správné: nedodržení povinné (písemné) formy a nedostatek svéprávnosti.' },
      { t: 'table', head: ['Hledisko', 'Varianta'], rows: [
        ['Plnění', 'konání × nekonání; úplatné × bezúplatné'],
        ['Doba trvání', 'na dobu určitou × neurčitou'],
        ['Forma', 'písemná × ústní × konkludentní'],
        ['Smluvní typ', 'pojmenovaná (nominátní) smlouva obsahuje podstatné náležitosti dané zákonem × nepojmenovaná (inominátní), např. leasing'],
        ['Postavení stran', 'obecná smlouva × adhezní × spotřebitelská (podnikatel × spotřebitel)']
      ] }
    ] },
    { title: 'Změny závazku', blocks: [
      { t: 'p', x: 'Závazek nemusí po vzniku zůstat beze změny. Smluvní strany si mohou změnu ujednat podle zásady autonomie vůle; dohodou lze změnit závazek ze smlouvy i z jiné skutečnosti (např. z deliktu).' },
      { t: 'table', head: ['Změna', 'Způsoby'], rows: [
        ['<b>V subjektech – na straně věřitele</b>', 'postoupení pohledávky (<b>cese</b>); postoupení smlouvy'],
        ['<b>V subjektech – na straně dlužníka</b>', 'převzetí dluhu (privativní intercese); přistoupení k dluhu (kumulativní intercese); převzetí plnění; převzetí majetku; postoupení smlouvy'],
        ['<b>V obsahu</b>', 'dohoda o <b>novaci</b> (privativní – původní závazek zaniká a nahrazuje ho nový); dohoda o změně závazku (kumulativní novace); dohoda o <b>narovnání</b>']
      ] },
      { t: 'p', x: '<b>Postoupení smlouvy</b> (§ 1895 an.): jedna strana smlouvy si vymění své postavení s třetí osobou, pokud s tím druhá strana souhlasí a závazek dosud nebyl splněn. Příklad: kupující se po uzavření kupní smlouvy dohodne s kamarádem, že věc koupí místo něj; prodávající souhlasí – kamarád musí zaplatit cenu a může požadovat vydání věci.' },
      { t: 'p', x: '<b>Společné dluhy a pohledávky</b> <i>(doplněno)</i>: u více dlužníků je dluh buď <b>solidární</b> (věřitel může chtít celé plnění po kterémkoli), nebo <b>dílčí</b> (každý jen svůj podíl).' }
    ] },
    { title: 'Zánik závazku a prodlení', blocks: [
      { t: 'table', head: ['Způsob zániku', 'Obsah', 'Příklad'], rows: [
        ['<b>Splnění</b>', 'řádné a včasné splnění dluhu', 'zaplacení kupní ceny'],
        ['<b>Dohoda</b>', 'strany si ujednají zánik, aniž vznikne nový závazek', 'dohoda o zrušení nájmu'],
        ['<b>Započtení</b> (§ 1982–1991)', 'vzájemné pohledávky stejného druhu se vyruší; jednostranným prohlášením nebo dohodou. Jednostranně: započítávající má splatnou pohledávku a jeho dluh je splnitelný (nemusí být splatný). Nelze započíst pohledávku nejistou či neurčitou (§ 1987) ani výživné pro nezletilého, který není plně svéprávný (§ 1988; odchýlit se nelze, § 1991)', 'dlužím 10 000 Kč, ty mně 8 000 Kč → zbývá 2 000 Kč'],
        ['<b>Odstupné</b>', 'zaniká zaplacením odstupného; jen dispozitivní úprava', 'sjednané odstupné za zrušení smlouvy'],
        ['<b>Splynutí</b>', 'právo a povinnost se sejdou v jedné osobě', 'věřitel zdědí po dlužníkovi'],
        ['<b>Prominutí dluhu</b> (§ 1995–1996)', 'písemná forma se nevyžaduje; domněnka, že dlužník souhlasí; u solidárních dlužníků zaniká dluh jen do výše podílu toho, komu byl prominut; potvrzení o splnění (kvitance) má účinky splnění', 'věřitel dluh dlužníkovi odpustí'],
        ['<b>Výpověď</b>', 'závazek lze vypovědět, ujednají-li si to strany nebo to stanoví zákon', 'výpověď nájmu'],
        ['<b>Odstoupení od smlouvy</b>', 'lze, ujednají-li si to strany nebo stanoví-li zákon; použití zejména při podstatném porušení smlouvy', 'odstoupení pro vadu věci'],
        ['<b>Následná nemožnost plnění</b>', 'dluh se po vzniku závazku stane nesplnitelným; není nemožný, lze-li ho splnit za ztížených podmínek, s většími náklady, s pomocí jiné osoby nebo později', 'zničení určité věci'],
        ['<b>Smrt</b>', 'smrtí dlužníka povinnost nezaniká, ledaže plnění měl dlužník provést osobně', 'osobní služba']
      ] },
      { t: 'warn', x: '<b>Odstoupení × výpověď</b> <i>(doplněno)</i>: odstoupení zpravidla ruší smlouvu zpětně (vrací se plnění), výpověď působí jen do budoucna a používá se u smluv na dobu neurčitou.' },
      { t: 'def', term: 'Prodlení', x: '<b>Dlužník</b> je v prodlení, když svůj dluh neplní řádně a včas (a nebrání mu v tom prodlení věřitele).', items: ['věřitel může <b>vymáhat splnění</b>, nebo od smlouvy <b>odstoupit</b> za podmínek ujednaných nebo daných zákonem', 'u peněžitého dluhu může věřitel, který splnil své povinnosti, žádat <b>úrok z prodlení</b> (§ 1970; výši a náklady vymezuje nařízení vlády 351/2013 Sb.; repo sazba ČNB + 8 procentních bodů <i>(doplněno)</i>)', '<b>věřitel</b> je v prodlení, nepřijal-li řádně nabídnuté plnění nebo neposkytl-li potřebnou součinnost'] }
    ] },
    { title: 'Zajištění a utvrzení dluhu', blocks: [
      { t: 'versus', title: 'Zajištění × utvrzení', x: 'Obojí slouží k tomu, aby dlužník dluh raději splnil, ale funguje to různě. Zajišťovací instituty dávají věřiteli při neplnění náhradní zdroj, ze kterého se uspokojí: prodá zástavu, vezme si peníze z jistoty nebo se obrátí na ručitele. Utvrzovací instituty žádný další zdroj nepřidávají, jen zlepšují kvalitu samotné pohledávky: smluvní pokuta zvedne cenu porušení, uznání dluhu odstraní spory o jeho existenci. Proto má smysl ptát se: „Z čeho se věřitel uspokojí, když dlužník nezaplatí?“ Pokud z nového zdroje, jde o zajištění; pokud jen z téhož dlužníkova majetku a s lepší pozicí, jde o utvrzení.', cols: [
        { h: 'Zajišťovací instituty', items: ['jistota (§ 2012–2017)', 'ručení (§ 2018–2028)', 'finanční záruka (§ 2029–2039)', 'zajišťovací převod práva (§ 2040–2044)', 'dohoda o srážkách ze mzdy (§ 2045–2047)', 'zástavní právo (§ 1309–1394)', 'zadržovací právo (§ 1395–1399)', 'závdavek (§ 1808–1809)', 'výhrada vlastnického práva (§ 2132–2134)', 'směnka, finanční zajištění (zvláštní zákony)'] },
        { h: 'Utvrzovací instituty', items: ['smluvní pokuta (§ 2048–2052)', 'uznání dluhu (§ 2053–2054)', 'úrok z prodlení (§ 1970)', 'zákaz zatížení nebo zcizení věcí (§ 1761)'] }
      ] },
      { t: 'def', term: 'Smluvní pokuta (§ 2048–2052)', x: 'Dohodnutá částka, kterou dlužník zaplatí při porušení smluvené povinnosti, bez ohledu na vznik škody.', items: ['nemusí mít povinně písemnou formu a může být ujednána i v naturálním plnění', 'dlužník může u soudu žádat <b>snížení nepřiměřeně vysoké</b> pokuty (§ 2051)', 'zaplacení pokuty dlužníka nezbavuje povinnosti splnit dluh, ledaže je sjednána tzv. <b>nepravá smluvní pokuta</b> (zaplacením povinnost zanikne)', 'je-li pokuta ujednána, věřitel nemá právo na náhradu škody z porušení téže povinnosti'] },
      { t: 'ul', items: [
        '<b>Zajišťovací převod práva:</b> dlužník nebo třetí osoba dočasně převede právo na věřitele; u věcí zapsaných ve veřejném seznamu vzniká zajištění zápisem (zapíše se i dočasná povaha převodu).',
        '<b>Dohoda o srážkách ze mzdy:</b> srážky nejvýše do poloviny mzdy či platu (nebo jiných příjmů); proti zaměstnavateli věřitel nabývá právo na výplatu okamžikem, kdy mu byla dohoda předložena.',
        '<b>Zástavní a zadržovací právo:</b> viz téma Občanský zákoník (věcná práva k věci cizí).'
      ] },
      { t: 'p', x: '<b>Ručení × zástava</b> <i>(doplněno)</i>: ručení je osobní zajištění – ručitel se zaváže uspokojit věřitele, nesplní-li dlužník, a ručí celým svým majetkem. Zástava je věcné zajištění – věřitel se uspokojí z konkrétní věci. Obojí zaniká spolu se zajištěným dluhem.' }
    ] }
  ],
  mistakes: [
    'Zaměňování absolutních a relativních práv: vlastnictví (absolutní) × pohledávka (relativní). Pohledávka se vůči třetím osobám zásadně neprosazuje (výjimky: smlouva ve prospěch třetího, odporovatelnost, poukázka).',
    'Přijetí nabídky <b>s dodatkem nebo výhradou</b> není přijetím, ale novou nabídkou. Jen <b>nepodstatná odchylka</b> smlouvě nebrání, pokud ji oferent neodmítne.',
    'Reklama, katalog a vystavené zboží s cenou jsou ofertou (s výhradou zásob); <b>veřejný příslib</b> a výzva k podání nabídek ofertou nejsou.',
    'Předsmluvní odpovědnost nevznikne ukončením jakéhokoli jednání – jen tehdy, když se uzavření jevilo jako <b>vysoce pravděpodobné</b> a druhá strana ho bezdůvodně zmařila.',
    'Míchání <b>zajištění</b> (náhradní zdroj uspokojení: zástava, ručení, jistota, závdavek) a <b>utvrzení</b> (smluvní pokuta, uznání dluhu, úrok z prodlení).',
    'Smluvní pokuta nenahrazuje splnění dluhu (kromě nepravé pokuty) a při jejím ujednání nelze požadovat navíc náhradu škody; soud může nepřiměřenou pokutu snížit.',
    'Započtení: nelze započíst nejisté či neurčité pohledávky ani výživné pro nezletilého; stačí, že dluh započítávajícího je <b>splnitelný</b> (nemusí být splatný).',
    'Smlouva může být uzavřena i konkludentně (plněním); neplatí ale, že mlčení je souhlas.'
  ],
  qa: [
    { q: 'Rozdíl mezi absolutními a relativními majetkovými právy.', a: '<b>Absolutní</b> působí vůči všem (erga omnes) – vlastnictví a další věcná práva. <b>Relativní</b> působí jen mezi stranami závazku (inter partes) – pohledávka věřitele vůči dlužníkovi, vzniká ze smlouvy, deliktu a jiných skutečností.' },
    { q: 'Co je závazek a jaký je jeho obsah?', a: 'Relativní vztah věřitele a dlužníka (§ 1721 an.). Věřitel má pohledávku, dlužník dluh – musí něco <b>dát, konat, zdržet se nebo strpět</b>. Plnění musí být majetkové povahy a odpovídat zájmu věřitele (§ 1722).' },
    { q: 'Jak se závazkové právo člení v NOZ?', a: 'Všeobecná ustanovení o závazcích (§ 1721–2054), závazky z právních jednání (§ 2055–2893), z deliktů (§ 2894–2990) a z jiných právních důvodů (§ 2991–3014).' },
    { q: 'Vyjmenujte základní zásady smluvního práva.', a: 'Pacta sunt servanda, dobrá víra a poctivost, autonomie vůle (dispozitivnost), svoboda smlouvy, bezformálnost, favor contractus (platnost v pochybnostech) a ochrana slabší strany a spotřebitele.' },
    { q: 'Jak vzniká smlouva? Jak se řeší přijetí návrhu s odchylkou?', a: 'Smlouva je uzavřena, jakmile si strany ujednaly obsah (§ 1725) – typicky ofertou a akceptací. Přijetí s dodatky, výhradami, omezením a změnami je novou nabídkou; nepodstatná odchylka je přijetím, pokud ji oferent neodmítne.' },
    { q: 'Kdy je projev vůle ofertou?', a: 'Obsahuje-li podstatné náležitosti smlouvy tak, aby šla přijmout jednoduše a nepodmíněně, a plyne-li z něj vůle navrhovatele být vázán (§ 1732). Reklama, katalog nebo vystavení zboží s cenou je nabídkou s výhradou zásob; veřejný příslib a výzva k podání nabídek ne.' },
    { q: 'Co je předsmluvní odpovědnost a kdy vznikne?', a: 'Odpovědnost za škodu z bezdůvodného ukončení jednání o smlouvě (§ 1729), pokud se uzavření jevilo jako vysoce pravděpodobné. Výše je omezena ztrátou z obdobných případů; patří sem náklady i ušlý zisk.' },
    { q: 'Co je neúplná smlouva?', a: 'Strany považují smlouvu za uzavřenou, ač neujednaly všechny náležitosti; hledí se na ni jako na uzavřenou, lze-li předpokládat, že by vznikla i bez nich (podle následného chování). Netýká se podstatných náležitostí (§ 1726).' },
    { q: 'Jak lze závazek změnit?', a: 'V subjektech: cese, postoupení smlouvy, převzetí dluhu, přistoupení k dluhu. V obsahu: novace (privativní i kumulativní) a narovnání.' },
    { q: 'Jak zanikne závazek?', a: 'Splněním, dohodou, započtením, zaplacením odstupného, splynutím, prominutím dluhu, výpovědí, odstoupením od smlouvy, následnou nemožností plnění; smrtí jen tam, kde plnění mělo být osobní.' },
    { q: 'Jaké podmínky musí splnit jednostranné započtení?', a: 'Započítávající má splatnou pohledávku vůči druhé straně a jeho dluh je splnitelný (nemusí být splatný). Nelze započítat pohledávky nejisté či neurčité (§ 1987) ani výživné pro nezletilého (§ 1988).' },
    { q: 'Co je prodlení dlužníka a jaké má důsledky?', a: 'Dlužník neplní řádně a včas. Věřitel může vymáhat splnění, nebo odstoupit, a u peněžitého dluhu žádat úrok z prodlení (§ 1970). Dlužník není v prodlení, pokud nemůže plnit kvůli prodlení věřitele.' },
    { q: 'Čím se liší zajišťovací a utvrzovací instituty? Uveďte příklady.', a: '<b>Zajišťovací</b> dávají věřiteli náhradní zdroj uspokojení (zástavní právo, ručení, jistota, závdavek, zajišťovací převod práva). <b>Utvrzovací</b> jen zlepšují kvalitu pohledávky (smluvní pokuta, uznání dluhu, úrok z prodlení, zákaz zatížení či zcizení).' },
    { q: 'Smluvní pokuta: co věřitel nemusí dokazovat a co může dlužník žádat?', a: 'Věřitel nemusí prokazovat vznik škody. Dlužník může u soudu žádat snížení nepřiměřeně vysoké pokuty (§ 2051). Zaplacením pokuty povinnost splnit dluh nezaniká (kromě nepravé pokuty) a nárok na náhradu škody není.' },
    { q: 'Pepa se s Annou dohodl na koupi kola. Anna řekla: „Beru, ale se slevou 10 %.“ Vznikla smlouva?', a: 'Ne. Přijetí s dodatkem je odmítnutím a novou nabídkou. Smlouva vznikne, až Pepa nový návrh přijme (i konkludentně, např. kolo za nižší cenu odevzdá).' }
  ]
});
