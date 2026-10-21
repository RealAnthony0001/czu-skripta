registerTopic({
  id: 'obcanske-pravo', order: 7, icon: '📕', title: 'Občanský zákoník: zásady a absolutní majetková práva', src: 'podklady', lec: [2,4], where: 'Přednáška 2 (úvod do NOZ) + sylabus přednášky 4 (doplněno)',
  summary: 'Cíle, struktura a zásady nového občanského zákoníku (89/2012 Sb.), nové termíny, zrušené a nově přijaté předpisy; doplňkově vlastnictví, věcná práva, držba a ochrana vlastnictví.',
  vocab: [
    {w:'Sb.',x:'Sbírka zákonů – oficiální věstník, ve kterém se zákony vyhlašují; „89/2012 Sb.“ = zákon č. 89 z roku 2012.'},
    {w:'§ a odst.',x:'Paragraf (§) je základní jednotka zákona, odstavec (odst.) jeho část; „§ 1 odst. 2“ = druhý odstavec prvního paragrafu.'},
    {w:'Kodifikace',x:'Sepsání celé oblasti práva do jednoho ucelného zákona; rekodifikace = jeho nahrazení novým (zde starého OZ novým).'},
    {w:'Platnost × účinnost',x:'Zákon je platný, když je vyhlášen; účinný (závazný) je až od data stanoveného v něm, zde od 1. 1. 2014.'},
    {w:'Fyzická a právnická osoba',x:'Fyzická osoba (FO) je člověk, právnická osoba (PO) je organizace s vlastní právní subjektivitou (firma, spolek, obec).'},
    {w:'Svéprávnost',x:'Způsobilost osoby sama svými úkony nabývat práva a brát na sebe povinnosti; plná od 18 let.'},
    {w:'Věc movitá × nemovitá',x:'Nemovitá je pozemek, stavba a právo stavby (zapisují se do katastru); movitá je vše ostatní (auto, kolo, telefon).'},
    {w:'Dispozitivní × kogentní norma',x:'Dispozitivní pravidlo platí jen tehdy, když se strany nedohodnou jinak; kogentní platí vždy a odchýlit se nelze.'}
  ],
  key: [
    '<b>NOZ = zákon č. 89/2012 Sb., účinnost 1. 1. 2014</b>, nahradil OZ 40/1964 Sb.; 3081 paragrafů, 5 částí. Současně přijaty <b>90/2012 Sb.</b> (o obchodních korporacích) a <b>91/2012 Sb.</b> (o mezinárodním právu soukromém).',
    '<b>Struktura:</b> 1. obecná část (§ 1–654), 2. rodinné právo (§ 655–975), 3. absolutní majetková práva (§ 976–1720 – věcná práva + dědictví), 4. relativní majetková práva (§ 1721–3014), 5. společná, přechodná a závěrečná (§ 3015–3081).',
    '<b>Zásady:</b> autonomie vůle (§ 1 odst. 2 – dispozitivnost), poctivost a dobrá víra (§ 6–7), zákaz zneužití práva (§ 8), ochrana slabší strany, právní jistota, ochrana osobnosti, pacta sunt servanda, zákaz těžit z vlastního bezpráví.',
    '<b>§ 4:</b> každý svéprávný má rozum <b>průměrného člověka</b> a schopnost jej užívat s běžnou péčí. <b>§ 5:</b> kdo se hlásí k odbornému výkonu, jedná s <b>odbornou péčí</b>.',
    '<b>Nové pojmy:</b> rozhrady, přivlastnění, přestavek, právo stavby, služebnost, beneficient, svěřenský fond, obmyšlený, závdavek (není záloha), výprosa, pacht, výměnek, odvážné smlouvy.',
    '<b>Vlastnictví</b> (doplněno): nabývá se originárně (vydržení, přivlastnění) či odvozeně; k nemovitosti zápisem do katastru. <b>Věcná práva:</b> zástavní, věcné břemeno, předkupní právo, právo stavby. <b>Držba</b> ≠ vlastnictví.',
    '<b>Ochrana vlastnictví</b> (doplněno): <b>vlastnická (vindikační) žaloba</b> – o vydání věci; <b>negatorní</b> – o zdržení se rušení jiným způsobem než odnětím.'
  ],
  sections: [
    { title: 'Cíle, struktura a rekodifikace', blocks: [
      { t: 'nums', title: 'NOZ v číslech', items: [
        { n: '89/2012', u: 'Sb.', x: 'zákon č. 89/2012 Sb. – nový občanský zákoník' },
        { n: '1. 1. 2014', u: '', x: 'účinnost (přijat byl už v roce 2012)' },
        { n: '3081', u: 'paragrafů', x: 'rozsah zákona' },
        { n: '5', u: 'částí', x: 'struktura NOZ' },
        { n: '90/2012', u: 'Sb.', x: 'zákon o obchodních korporacích (přijat současně)' },
        { n: '91/2012', u: 'Sb.', x: 'zákon o mezinárodním právu soukromém (přijat současně)' }
      ] },
      { t: 'timeline', title: 'Od starých kodexů k NOZ', items: [
        { when: '1937', h: 'Občanský zákoník z roku 1937', x: 'tradice – zejména terminologie a systematika' },
        { when: '40/1964 Sb.', h: 'Dosavadní občanský zákoník', x: 'nahrazen NOZ' },
        { when: '2012', h: 'Přijetí 89/2012, 90/2012, 91/2012 Sb.', x: 'NOZ + zákon o obchodních korporacích + MPS' },
        { when: '1. 1. 2014', h: 'Účinnost NOZ', x: 'zrušeny OZ, obchodní zákoník, zákon o rodině aj. (§ 3080)' }
      ] },
      { t: 'ul', items: [
        '<b>Cíle:</b> modernizovat, sjednotit a zpřehlednit soukromé právo (občanské, rodinné i obchodní právo v jednom kodexu).',
        'Posílit <b>smluvní autonomii</b> a <b>ochranu slabší strany</b>.',
        'Reflektovat hodnoty (lidská důstojnost, osobnost) a navázat na tradice (OZ 1937).'
      ] },
      { t: 'tree', title: 'Struktura NOZ (5 částí)', root: { h: 'NOZ – 89/2012 Sb.', x: '§ 1–3081', kids: [
        { h: '1. Obecná část', x: '§ 1–654: základní ustanovení, osoby, právní jednání, zastoupení, věci, čas, promlčení' },
        { h: '2. Rodinné právo', x: '§ 655–975: manželství, příbuzenství, rodičovství, poručenství a jiné formy péče' },
        { h: '3. Absolutní majetková práva', x: '§ 976–1720', kids: [
          { h: 'Věcná práva', x: '§ 976–1474: vlastnictví, držba, věcná práva k věci cizí…' },
          { h: 'Dědické právo', x: '§ 1475–1720' }
        ] },
        { h: '4. Relativní majetková práva', x: '§ 1721–3014: závazky ze smluv, z deliktů (náhrada újmy), bezdůvodné obohacení' },
        { h: '5. Společná, přechodná a závěrečná', x: '§ 3015–3081: přechodná úprava, zrušovací ustanovení (§ 3080)' }
      ] } },
      { t: 'svg', title: 'NOZ v poměru počtu paragrafů', x: ZPN.nozBar() },
      { t: 'warn', x: 'Slajdy uvádějí část 1 jako „§ 1–302“ a dědictví řadí do relativních práv – to je nepřesné. Podle zákona je obecná část § 1–654 a <b>dědické právo je součástí třetí části</b> (absolutní majetková práva), nikoli relativních práv. (Ve slajdech také „91/212“ – správně 91/2012 Sb.)' },
      { t: 'ul', items: [
        'Členění: části → hlavy → díly → oddíly. Zásada: <b>jeden paragraf nejvýše dva odstavce, odstavec nejvýše dvě věty</b> (ne vždy dodržena).',
        'Příbuzné instituty od jednodušších ke složitějším a od obecných ke zvláštním (ne podle důležitosti).',
        'Terminologie: návrat k tradiční češtině (svéprávnost, právní jednání, osoba místo účastník, nabídka místo návrhu na uzavření smlouvy; „zapsaný“ místo „registrovaný“, „nakládat“ místo „disponovat“), ale ponechány zdomácnělé termíny (orgán, forma, prekluze, detence).',
        'Převzal řadu pravidel ze zrušených zákonů a doplnil ta, která dosavadní právo neřešilo nebo řešilo stroze.'
      ] },
      { t: 'versus', title: 'Zrušeno × nově přijato', x: 'Rekodifikace z roku 2012 neznamenala jen nový občanský zákoník, ale výměnu celého základu soukromého práva. Místo mnoha samostatných předpisů – starého občanského zákoníku, obchodního zákoníku, zákona o rodině nebo zákona o vlastnictví bytů – vznikl jeden kodex, doplněný zákonem o obchodních korporacích a zákonem o mezinárodním právu soukromém, které byly přijaty současně. Rodinné právo, spolky nebo bytové jednotky proto dnes hledáš přímo v občanském zákoníku. Původní předpisy byly k 1. lednu 2014 zrušeny.', cols: [
        { h: 'Zrušeno (příklady, § 3080)', items: [
          '40/1964 Sb. občanský zákoník',
          '513/1991 Sb. obchodní zákoník',
          '94/1963 Sb. zákon o rodině',
          '116/1990 Sb. o nájmu a podnájmu nebytových prostor',
          '83/1990 Sb. o sdružování občanů',
          '248/1995 Sb. o obecně prospěšných společnostech',
          '591/1992 Sb. o cenných papírech',
          '72/1994 Sb. o vlastnictví bytů'
        ] },
        { h: 'Nově přijato', items: [
          '<b>89/2012 Sb.</b> občanský zákoník',
          '<b>90/2012 Sb.</b> o obchodních korporacích',
          '<b>91/2012 Sb.</b> o mezinárodním právu soukromém',
          '+ doprovodný zákon novelizující desítky předpisů (živnostenský, stavební zákon, zákoník práce, správní řád, autorský zákon, o ochraně spotřebitele, o veřejných zakázkách aj.)'
        ] }
      ] },
      { t: 'warn', x: 'Slajdy uvádějí různé počty zrušených předpisů („238“ i „více než 100“). Počet si nezapamatovávej – důležité je vědět, které klíčové předpisy NOZ nahradil (občanský a obchodní zákoník, zákon o rodině, o vlastnictví bytů, o sdružování občanů, o o.p.s.).' }
    ] },
    { title: 'Zásady soukromého práva (§ 1–9 NOZ)', blocks: [
      { t: 'law', ref: '§ 1 NOZ', x: 'Soukromé právo tvoří ustanovení upravující vzájemná práva a povinnosti osob; jeho uplatňování je nezávislé na uplatňování práva veřejného. <b>Nezakazuje-li to zákon výslovně, mohou si osoby ujednat práva a povinnosti odchylně od zákona.</b> Zakázána jsou ujednání porušující <b>dobré mravy, veřejný pořádek nebo právo týkající se postavení osob</b> (včetně ochrany osobnosti).' },
      { t: 'icons', title: 'Základní zásady NOZ', items: [
        { i: '🤝', h: 'Autonomie vůle', x: 'smluvní svoboda; základ je <b>konsenzus</b>, zákon je <i>ultima ratio</i>; omezení jen zákonem (ochrana slabší strany)' },
        { i: '💎', h: 'Poctivost a dobrá víra', x: '§ 6–7: kdo jedná poctivě, požívá důvěry; dobrá víra se presumuje; <b>zákaz zneužití práva</b> (§ 8)' },
        { i: '⚖️', h: 'Dobré mravy a veřejný pořádek', x: 'jednání jim nesmí odporovat; soud přihlíží i bez návrhu (§ 588)' },
        { i: '🛡️', h: 'Ochrana slabší strany', x: 'spotřebitelé, nájemci, zaměstnanci, nezletilí, osoby s omezenou schopností právně jednat; výklad v jejich prospěch' },
        { i: '🏛️', h: 'Právní jistota', x: 'stabilita právního řádu, předvídatelný výklad' },
        { i: '🧑‍🤝‍🧑', h: 'Ochrana osobnosti', x: 'život, zdraví, svoboda, čest, soukromí, rodinný život' },
        { i: '📃', h: 'Pacta sunt servanda', x: 'smlouvy se mají dodržovat' },
        { i: '🚷', h: 'Nikdo netěží z bezpráví', x: 'kdo způsobí neplatnost, nemůže se jí dovolávat; kdo poruší povinnost, nahradí újmu' }
      ] },
      { t: 'svg', title: 'Pořadí použití pravidel', x: ZPN.rulesOrder() },
      { t: 'tip', x: 'Hierarchie: nejdřív dohoda stran (autonomie), pokud ji není, použije se dispozitivní zákon; kogentní normy a dobré mravy vždy platí. Odborník = vyšší standard péče (§ 5).' },
      { t: 'law', ref: '§ 4 NOZ', x: '<b>Průměrný člověk:</b> každá svéprávná osoba má rozum průměrného člověka i schopnost užívat jej s běžnou péčí a opatrností. Kdo se jeví jako průměrný člověk, může se spolehnout, že i ostatní tak jednají. Posuzování, co osoba měla a mohla vědět, je objektivizováno.' },
      { t: 'law', ref: '§ 5 NOZ', x: '<b>Odborná péče:</b> kdo se veřejně nebo ve styku s jinou osobou přihlásí k odbornému výkonu jako příslušník určitého povolání nebo stavu, dává najevo, že je schopen jednat se znalostí a pečlivostí s povoláním spojenou. Významné hlavně pro <b>náhradu škody</b> (odborná péče se vyžaduje, jakmile se někdo za odborníka vydává).' },
      { t: 'warn', x: 'Slajdy zdůrazňují, že NOZ <b>výslovně neobsahuje zásadu rovnosti stran</b> (dřívější absolutizace rovnosti zastírala přirozenou nerovnost). Zákon vychází z autonomie vůle a ochrany slabší strany.' }
    ] },
    { title: 'Nové pojmy NOZ', blocks: [
      { t: 'icons', title: 'Nemovitosti a sousedství', items: [
        { i: '🧱', h: 'Rozhrady', x: 'ploty, zdi, meze, strouhy na hranici pozemků' },
        { i: '🪹', h: 'Přivlastnění', x: 'nabytí věci, která nikomu nepatří (opuštěná), dovoluje-li to zákon' },
        { i: '🏠', h: 'Přestavek', x: 'stavba přesahuje malou částí na cizí pozemek' },
        { i: '🏗️', h: 'Právo stavby', x: 'právo mít na cizím pozemku stavbu (i postavit); je to nemovitá věc, stavba nemusí existovat při zřízení' },
        { i: '🚪', h: 'Služebnost', x: '(věcné břemeno) vlastník zatížené věci něco strpí nebo se zdrží: okap, pastva, voda, sítě, cesta' }
      ] },
      { t: 'tree', title: 'Svěřenský fond', root: { h: 'Svěřenský fond', x: 'trvale vyčleněný majetek bez vlastníka, spravovaný správcem k určitému účelu', kids: [
        { h: 'Beneficient', x: 'ten, v jehož prospěch je majetek spravován' },
        { h: 'Obmyšlený', x: 'možný příjemce plnění z fondu' }
      ] } },
      { t: 'icons', title: 'Smlouvy a dary', items: [
        { i: '🔐', h: 'Závdavek', x: 'potvrzuje uzavření smlouvy, jistota splnění závazku' },
        { i: '🎁', h: 'Odvolání daru pro nouzi', x: 'dárce v nouzi může žádat vrácení nebo náhradu v penězích' },
        { i: '🙏', h: 'Výprosa', x: 'bezplatné a bezúčelné přenechání věci k užívání na neurčitou dobu' },
        { i: '🌾', h: 'Pacht', x: 'dočasné užívání věci za pachtovné nebo za část výnosu' },
        { i: '👵', h: 'Výměnek', x: 'práva vyhrazená vlastníkem nemovitosti při prodeji (užívání části, péče)' },
        { i: '🎲', h: 'Odvážné smlouvy', x: 'prospěch / neprospěch závisí na nejisté události (pojištění, sázka)' }
      ] },
      { t: 'versus', title: 'Závdavek × záloha', x: 'Obojí je peněžní částka předaná při uzavírání smlouvy, ale s jiným účelem. Záloha je jen dřívější zaplacení části ceny – platba „na účet“ budoucího plnění, která nic nezajišťuje. Závdavek navíc potvrzuje, že smlouva byla uzavřena, a slouží jako jistota jejího splnění: když strana, která závdavek dala, smlouvu nesplní, může si ho druhá strana ponechat. Záloha tedy jen platí, závdavek i motivuje ke splnění.', cols: [
        { h: 'Závdavek', items: ['Potvrzuje uzavření smlouvy', 'Je jistotou, že závazek bude splněn'] },
        { h: 'Záloha', items: ['Předčasné plnění části ceny', 'Platba na účet ceny, není zajištění'] }
      ] },
      { t: 'tip', x: 'Závdavek ≠ záloha. Závdavek je jistota, záloha je platba na účet ceny.' }
    ] },
    { title: 'Vlastnictví a jeho nabytí (doplněno)', blocks: [
      { t: 'p', x: '<b>(doplněno)</b> Třetí část NOZ (věcná práva, § 976 an.) upravuje <b>absolutní majetková práva</b>: působí <b>vůči všem</b> (erga omnes). Relativní práva (závazky) působí jen mezi stranami.' },
      { t: 'def', term: 'Vlastnické právo (doplněno)', x: 'Nejširší věcné právo k věci. Vlastník je oprávněn věc držet, užívat, požívat plody a užitky, nakládat s ní a vyloučit kohokoli jiného – vše v mezích zákona. Právo trvalé a nepromlčitelné; předmětem je věc (i nehmotná); lze spoluvlastnictví (podílové, SJM) a vlastnictví bytových jednotek.' },
      { t: 'icons', title: 'Co smí vlastník', items: [
        { i: '✋', h: 'Držet', x: 'mít věc ve své moci' },
        { i: '🔧', h: 'Užívat', x: 'využívat věc' },
        { i: '🍎', h: 'Požívat plody a užitky', x: 'brát výnosy věci' },
        { i: '✍️', h: 'Nakládat', x: 'disponovat – prodat, darovat, zatížit' },
        { i: '⛔', h: 'Vylučovat ostatní', x: 'kohokoli jiného z těchto oprávnění' }
      ] },
      { t: 'tree', title: 'Nabytí vlastnictví', root: { h: 'Nabytí vlastnictví', kids: [
        { h: 'Originární (původní)', kids: [
          { h: 'Přivlastnění', x: 'věc nikoho' },
          { h: 'Nález', x: '' },
          { h: 'Zhotovení nové věci', x: '' },
          { h: 'Vydržení', x: 'řádný držitel v dobré víře' },
          { h: 'Přírůstek', x: '' }
        ] },
        { h: 'Odvozené (derivativní)', x: 'právní důvod (smlouva kupní, darovací, směna) + způsob nabytí', kids: [
          { h: 'Movitá věc', x: 'předání / převzetí' },
          { h: 'Nemovitá věc', x: 'zápis do katastru (účinky zpětně ke dni podání návrhu)' },
          { h: 'Dědění, rozhodnutí OVM', x: '' }
        ] }
      ] } },
      { t: 'nums', title: 'Vydržení (doplněno)', items: [
        { n: '3', u: 'roky', x: 'movitá věc' },
        { n: '10', u: 'let', x: 'nemovitá věc' }
      ] },
      { t: 'ul', items: [
        '<b>Sousedská práva:</b> vlastník se musí zdržet imisí (hluk, prach, kouř, pach, stín, světlo…), které nad míru přiměřenou poměrům ruší sousední pozemek; přestavek, rozhrady.',
        '<b>Superficies solo cedit:</b> stavba je zpravidla součástí pozemku (viz téma Právní vztahy).'
      ] },
      { t: 'warn', x: 'Čísla paragrafů v části „doplněno“ jsou orientační (např. § 976 an. věcná práva); u zkoušky se ptají hlavně na pojmy a rozlišení, ne na přesná čísla.' }
    ] },
    { title: 'Věcná práva k věci cizí a držba (doplněno)', blocks: [
      { t: 'tree', title: 'Věcná práva k věci cizí', root: { h: 'Věcná práva k věci cizí', kids: [
        { h: 'Zástavní právo', x: 'zajišťuje pohledávku; věřitel se uspokojí z hodnoty zástavy. Zastavit lze movitou i nemovitou věc, pohledávku, právo. Vzniká smlouvou + zápisem (katastr / Rejstřík zástav) nebo předáním' },
        { h: 'Věcné břemeno', x: 'zřizuje se smlouvou, rozhodnutím nebo vydržením; u nemovitosti zápisem', kids: [
          { h: 'Služebnost', x: 'zatížený vlastník něco strpí či se zdrží (cesta, vodovod)' },
          { h: 'Reálné břemeno', x: 'povinnost pravidelně něco plnit (naturálie)' }
        ] },
        { h: 'Předkupní právo', x: 'přednostně koupit prodávanou věc; u nemovitosti může být <b>věcně působící</b> (zapsáno v katastru)' },
        { h: 'Právo stavby', x: 'stavba na cizím pozemku; nemovitá věc; zřizuje se smlouvou, zapisuje do katastru' },
        { h: 'Zadržovací právo', x: 'věřitel zadrží cizí věc, dokud mu dlužník nezaplatí' }
      ] } },
      { t: 'versus', title: 'Vlastnictví × držba × detence', x: 'Tři pojmy popisují tři různé vztahy k věci. Vlastnictví je právo: věc ti patří, i když ji právě nemáš u sebe, třeba když jsi kolo půjčil. Držba je faktický stav, kdy někdo vykonává právo pro sebe, jako by mu věc patřila – i ten, kdo kolo koupil od zloděje, je držitel, přestože vlastníkem není; poctivý řádný držitel se může stát vlastníkem vydržením. Detence je držení věci pro někoho jiného: kamarád, kterému jsi kolo půjčil, je detentor – kolo má u sebe, ale ví, že je tvoje, a proto ho nikdy nevydrží.', cols: [
        { h: 'Vlastnictví', items: ['Právo k věci', 'Věc patří vlastníkovi', 'Nejširší věcné právo'] },
        { h: 'Držba', items: ['Skutečný stav – výkon práva pro sebe', 'Držitel drží jako vlastník či jiný oprávněný', 'Řádná držba vede k vydržení'] },
        { h: 'Detence', items: ['Držení věci pro někoho jiného', 'Detentor (nájemce, vypůjčitel) nedrží pro sebe', 'Bez vydržení'] }
      ] },
      { t: 'ul', items: [
        '<b>Držba (doplněno):</b> oprávněná × neoprávněná; poctivá (v dobré víře) × nepoctivá; <b>řádná držba</b> = předpoklad vydržení.',
        'Ochrana držby: svépomoc proti svémocnému zásahu, držebná žaloba v krátké prekluzivní lhůtě; platí vyvratitelná domněnka, že držitel je oprávněný (vlastník).'
      ] }
    ] },
    { title: 'Ochrana vlastnictví (doplněno)', blocks: [
      { t: 'tree', title: 'Čím se bránit', root: { h: 'Zásah do vlastnictví', kids: [
        { h: 'Věc neprávem zadržena', x: 'neoprávněný držitel / detentor', kids: [
          { h: 'Vlastnická (vindikační) žaloba', x: '§ 1040 – vydání věci' }
        ] },
        { h: 'Rušení jinak než zadržením', x: 'imise, přístup přes pozemek, stavba', kids: [
          { h: 'Negatorní žaloba', x: '§ 1042 – zdržení se rušení, odstranění následků' }
        ] },
        { h: 'Bezprostřední hrozba zásahu', kids: [
          { h: 'Svépomoc', x: 'přiměřeně a bezodkladně; zastavení zásahu' }
        ] },
        { h: 'Svémocné rušení / odnětí držby', kids: [
          { h: 'Ochrana držby', x: 'navrácení původního stavu u soudu v krátké lhůtě' }
        ] }
      ] } },
      { t: 'ex', x: 'Soused Pepa si na tvém pozemku nechal postavit garáž (přestavek je velký) a dlouhodobě na tvém pozemku parkuje. Proti parkování a zásahu bráníš negatorní žalobou. Pokud by ti navíc zadržoval ukradené kolo, žádáš jeho vydání vlastnickou (vindikační) žalobou.' }
    ] }
  ],
  mistakes: [
    'Uvést, že NOZ má 5 částí s dědictvím v relativních právech. Správně: <b>dědické právo je součást 3. části</b> (absolutní majetková práva, § 976–1720), relativní práva jsou § 1721–3014.',
    'Zaměnit <b>závdavek</b> (jistota uzavření smlouvy) a <b>zálohu</b> (část ceny předem).',
    'Zaměnit účinnost NOZ (1. 1. 2014) s datem přijetí (zákon 89/2012 Sb. byl přijat v roce 2012).',
    'Tvrdit, že NOZ obsahuje zásadu rovnosti stran – výslovně ji neobsahuje, je postaven na autonomii vůle a ochraně slabší strany.',
    'Zaměnit § 4 (průměrný člověk, běžná péče) a § 5 (odborná péče při výkonu povolání).',
    'Zaměnit <b>držbu</b> a <b>vlastnictví</b>; <b>detentora</b> (drží pro jiného) a držitele (drží pro sebe).',
    'Zaměnit <b>vlastnickou (vindikační)</b> žalobu (vydání věci) a <b>negatorní</b> (zdržení se rušení jinak než zadržením).',
    'Myslet si, že právo stavby = stavba: je to <b>právo</b> mít na cizím pozemku stavbu (a samo je nemovitou věcí).'
  ],
  qa: [
    { q: 'Co je NOZ a kdy nabyl účinnosti?', a: 'Zákon č. 89/2012 Sb., občanský zákoník, účinný od <b>1. 1. 2014</b>; nahradil občanský zákoník 40/1964 Sb. a obchodní zákoník. Sjednotil soukromé právo (občanské, rodinné, obchodní) a navázal na tradici (OZ 1937).' },
    { q: 'Jaké jsou cíle nového občanského zákoníku?', a: 'Kodifikace a sjednocení soukromého práva, posílení smluvní autonomie, ochrana slabší strany (spotřebitelé, nezletilí, osoby se sníženou způsobilostí), ochrana lidské důstojnosti a osobnosti, návrat k tradičním principům a terminologii.' },
    { q: 'Jak je NOZ strukturován?', a: 'Pět částí: obecná (§ 1–654), rodinné právo (§ 655–975), absolutní majetková práva (§ 976–1720, tj. věcná práva a dědictví), relativní majetková práva (§ 1721–3014), společná, přechodná a závěrečná ustanovení (§ 3015–3081). Celkem 3081 paragrafů.' },
    { q: 'Které předpisy byly přijaty současně s NOZ a které zrušeny?', a: 'Přijaty: 89/2012 (NOZ), 90/2012 (zákon o obchodních korporacích), 91/2012 (o mezinárodním právu soukromém). Zrušeny např. občanský zákoník 40/1964, obchodní zákoník 513/1991, zákon o rodině 94/1963, zákon o vlastnictví bytů, o sdružování občanů, o o.p.s.' },
    { q: 'Jaké jsou základní zásady NOZ?', a: 'Autonomie vůle (smluvní svoboda) a dispozitivnost, poctivost a dobrá víra, zákaz zneužití práva, ochrana dobrých mravů a veřejného pořádku, ochrana slabší strany, právní jistota, ochrana osobnosti, pacta sunt servanda, nikdo nesmí těžit z vlastního bezpráví.' },
    { q: 'Co říká § 4 a § 5 NOZ?', a: '§ 4: každá svéprávná osoba má rozum průměrného člověka i schopnost jej užívat s běžnou péčí a opatrností – lze to od ní očekávat. § 5: kdo se přihlásí k odbornému výkonu (profesi), dává najevo, že jedná se znalostí a pečlivostí, která je s povoláním spojena (odborná péče, významné pro náhradu škody).' },
    { q: 'Jaký je rozdíl mezi závdavkem a zálohou?', a: 'Závdavek potvrzuje uzavření smlouvy a je jistotou, že závazek bude splněn (nesplní-li ten, kdo jej dal, ztrácí ho; nesplní-li příjemce, vrací dvojnásobek). Záloha je předem poskytnutá část plnění (ceny) – není to zajištění.' },
    { q: 'Vysvětlete pojmy beneficient a obmyšlený.', a: 'Svěřenský fond: majetek je trvale vyčleněn a spravuje jej správce k určitému účelu. Beneficient je osoba, v jejíž prospěch je majetek spravován; obmyšlený je možný příjemce plnění z fondu.' },
    { q: 'Co je vlastnictví a jak se nabývá? (doplněno)', a: 'Vlastník může věc držet, užívat, požívat plody a užitky a nakládat s ní a vylučovat ostatní. Nabytí originární (přivlastnění, nález, vydržení, zhotovení) nebo odvozené (smlouva, dědění, rozhodnutí). U nemovitosti zápisem do katastru nemovitostí; u movité převzetím věci.' },
    { q: 'Vyjmenujte věcná práva k věci cizí a stručně je charakterizujte. (doplněno)', a: 'Zástavní právo (zajištění pohledávky), věcné břemeno (služebnost – strpět/zdržet se; reálné břemeno – opakované plnění), právo stavby (stavba na cizím pozemku), předkupní právo (věcně působící u nemovitosti), zadržovací právo.' },
    { q: 'Čím se liší držba od vlastnictví a držitel od detentora? (doplněno)', a: 'Držba je skutečný stav – výkon práva pro sebe; vlastnictví je právo. Držitel drží věc jako vlastník či jiný oprávněný; detentor (nájemce, vypůjčitel) drží věc pro jiného. Dlouhodobá řádná držba může vést k vydržení.' },
    { q: 'Pepovi někdo zadržuje jeho jízdní kolo a jinému Pepovu sousedovi zasahuje do pozemku sousední stavba. Jakou žalobou se budou bránit? (doplněno)', a: 'Při neprávě zadržované věci vlastnickou (vindikační) žalobou – o vydání kola. Při zásahu stavby, imisí a podobně negatorní žalobou – o zdržení se rušení a odstranění následků.' },
    { q: 'Pepa má na pozemku souseda přestavek. Co to znamená a jak se s tím naloží?', a: 'Přestavek je stavba, která malou částí přesahuje na cizí pozemek. Zákon umožňuje stavbu neodstraňovat (ochrana před zbouráním) – rozhoduje se podle dobré víry stavebníka, toho, zda vlastník pozemku včas namítal, a podle přiměřené náhrady vlastníku pozemku. (doplněno; podmínky si ověřte přímo v zákoně)' }
  ]
});
