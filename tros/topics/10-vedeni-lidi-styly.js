registerTopic({
  id: 'vedeni-lidi', order: 10, icon: '🧑‍💼', title: 'Vedení lidí, stupně řízení a styly řízení', src: 'podklady',
  where: 'Přednáška 9 + Přednáška 6 (styly řízení) + Cvičení 6 + Dovednosti v řízení kap. 6 + TŘOS kap. 9 + Test manažerských stylů',
  summary: 'Vedení lidí a pracovní skupina, nejnižší, střední a nejvyšší stupeň řízení, osm stylů řízení, dotazník manažerských stylů a kvalifikace a kompetence řídících pracovníků.',
  vocab: [
    { w: 'Vedení lidí', x: 'Využívání a způsob uplatňování pravomocí ŘP vůči podřízeným; prostupuje všemi fázemi řízení, dominuje v operativním řízení.' },
    { w: 'Styl řízení', x: 'Obvyklé chování a jednání ŘP při vedení lidí a řešení řídících problémů.' },
    { w: 'Neformální vůdce', x: 'Člen skupiny s největším vlivem a přijetím; s ním musí ŘP spolupracovat.' },
    { w: 'Kvalifikace', x: 'Teoretický předpoklad (vzdělání + praxe) vykonávat řídící funkci.' },
    { w: 'Kompetence ŘP', x: 'Skutečná schopnost funkci zvládat (kvalifikace + osobnost + pravomoc + motivace).' },
    { w: 'Strategické × operativní řízení', x: 'Směřování firmy a rozvoj × zabezpečení výroby/služeb a běžného obchodu.' }
  ],
  key: [
    'Vedení lidí je <b>komplexní dovednost</b> závislá na osobnosti ŘP, kolektivu, vztazích, pravomocích, úkolech, stupni řízení a ekonomické situaci.',
    'Stupně řízení: <b>nižší</b> (odbornost, přímé vedení, vysoké q), <b>střední</b> (taktické řízení, realizace strategie), <b>nejvyšší</b> (vize, strategie, generalizace, nízké q).',
    'Styl = <b>orientace na úkol (výkon) × orientace na lidi</b> (+ ekonomická efektivnost).',
    '<b>Autokratický · benevolentně autokratický · demokratický/kompromisní · týmový · liberální/rozvojový · sousedský · byrokratický · lhostejný.</b>',
    '<b>Kompetence = skutečná kvalifikace s pravomocí</b>; dílčí kompetence jednotlivých stupňů dávají součet 1.'
  ],
  sections: [
    { title: 'Vedení lidí', blocks: [
      { t: 'def', term: 'Vedení lidí', x: 'Využívání a způsob uplatňování pravomocí ŘP ve vztahu k podřízeným. <b>Není samostatnou fází procesu řízení</b>, prostupuje všemi fázemi, nejvíc se uplatní v operativním řízení. Špatně řídit a vést lidi umí skoro každý, dobře málokdo – je to jedna z nejdůležitějších dovedností ŘP.' },
      { t: 'ul', items: [
        'Závisí na <b>osobnosti ŘP</b> (způsob myšlení, schopnosti, dovednosti, charakter, temperament), na <b>kolektivu</b> (tvůrčí × manuální pracovníci) a jeho <b>vztazích</b>, na udělených <b>pravomocích</b>, na <b>úkolech</b> (složité × jednoduché), na <b>stupni řízení</b> a na <b>ekonomické situaci</b> podniku.',
        'Bez pravomocí ŘP nemůže <b>rozhodovat, motivovat, delegovat, řešit konflikty</b> ani smysluplně komunikovat – nebyl by opravdovým vedoucím.',
        'Vedení lidí se projevuje <b>stylem řízení</b>.'
      ] },
      { t: 'versus', title: 'Formální × neformální struktura pracovní skupiny', cols: [
        { h: 'Formální', items: ['lidé + formální vazby (nadřízenost, podřízenost)', 'formální normy chování: stanovy, vnitropodnikové předpisy, pracovní postupy'] },
        { h: 'Neformální', items: ['lidé + neformální vazby', 'vznikají z blízkosti, společných zájmů, vztahu k cílům skupiny, příbuznosti hodnot a názorů, vlivu, sympatií a antipatií'] }
      ], x: 'Každá pracovní skupina má obě struktury najednou: formálně ji řídí vedoucí, neformálně v ní má největší vliv člověk, kterého ostatní následují. Dobrý ŘP s neformálním vůdcem spolupracuje (konzultace před rozhodnutím), protože jeho podpora rozhodnutí skupině „ověří“.' },
      { t: 'ul', items: [
        'Pozice člena skupiny: <b>psychologické členství</b> (přitahován i uznáván), <b>psychologické nečlenství</b>, <b>sociopreferenční vztah</b> (skupina přitahuje, ale není uznáván), <b>marginální vztah</b> (skupina ho uznává, ale nepřitahuje ho).',
        '<b>Sociometrie</b> zkoumá vztahy v malé skupině pomocí kladných (výběr) a záporných (odmítnutí) voleb vzhledem k cíli/úkolu; výsledky se zapisují maticí, orientovaným grafem nebo hierarchickým sociogramem; neformální vůdce má nejvíc výběrů (a málo odmítnutí).',
        'Při sestavování týmu ŘP rozhoduje <b>odbornost, mezilidské vztahy a motivace</b>.'
      ] }
    ] },
    { title: 'Úrovně a stupně řízení', blocks: [
      { t: 'versus', title: 'Zájmy majitele × zaměstnance', cols: [
        { h: 'Majitel podniku', items: ['vysoký zisk, vysoké výnosy (tržby)', 'nízké náklady, nízké mzdy', 'hodně práce'] },
        { h: 'Zaměstnanec (výkonný)', items: ['vysoká mzda a odměny', 'nenáročná práce, málo práce, hodně volna', 'pěkné pracovní prostředí'] }
      ], x: 'Zájmy jsou protichůdné a řídící pracovníci stojí uprostřed: vyšší stupně řízení se víc přiklánějí k zájmům majitele (výsledky), nižší k zájmům zaměstnanců. Úkolem ŘP je oba zájmy sladit – proto je důležitý motivační systém a spravedlnost.' },
      { t: 'table', head: ['Hledisko', 'Nejnižší stupeň', 'Střední stupeň', 'Nejvyšší stupeň'], rows: [
        ['Úloha', 'zabezpečení výroby/služeb, přímé vedení skupiny výkonných pracovníků; <b>operativní řízení</b>', '<b>taktické řízení</b>: realizuje strategii vyššího stupně, plánuje a koordinuje nižší OJ', '<b>strategické řízení</b>: formuluje vizi a strategii, řídí střední stupeň'],
        ['Řídící kapacita q', 'vyšší (práce jednoduchá, podobná, nižší odpovědnost)', 'snižuje se (práce složitější, rozdílná, vyšší odpovědnost)', 'nízká (složitá, rozdílná, vysoká odpovědnost)'],
        ['Odbornost', 'rozumí problematice, praktické dovednosti (zednické, strojní), rozpočet, norma práce', 'více teorie, klesá význam praktických dovedností; rozpočty, znalost trhu, nové projekty, reálné termíny', 'jen teorie, praktické dovednosti nerozhodují; generalizace; schvalování rozpočtů a nových nápadů'],
        ['Vedení lidí', 'srozumitelné zadání, motivace k výkonu, zastání před vedením, pravidelné hodnocení, odbornost = vzor; spolupráce s neformálním vůdcem', 'přímo řídí nižší ŘP, nepřímo výkonné pracovníky; delegování, sdílená odpovědnost; získává zdroje pro odměny', 'seznamuje s vizí a strategií, vytváří „ducha firmy“, motivuje a hodnotí přímé podřízené, vytváří ekonomický a motivační systém, jedná s majiteli'],
        ['Plánování a organizování', 'rozdělení práce, materiál, technika, pořádek, pracovní postupy', 'obchodní jednání, plnění úkolů shora (termíny, kvalita, ukazatele), příprava na porady vyššího stupně', 'zastupuje firmu navenek (konkurence, banky), vede důležitá obchodní jednání'],
        ['Kontrola', 'kontroluje práci skupiny, rychlá reakce na změny', 'neustálá rychlá reakce na změny', 'kontrola výsledku (HV, rozvoj, trh)']
      ] },
      { t: 'table', head: ['Dovednosti a vlastnosti', 'Nejnižší stupeň', 'Střední', 'Nejvyšší'], rows: [
        ['Dovednosti', 'odbornost, komunikace, řešení konfliktů, motivování, organizování', 'navíc obchodování, tvořivost (nápady)', 'odbornost nahrazena generalizací; konflikty vlastní i pracovní; motivování přímé i nepřímé; organizování = schvalování a rozhodování; největší obchodní případy'],
        ['Vlastnosti', 'rozhodnost, vytrvalost, pružnost, charakter', 'rozhodnost, vytrvalost, pružnost, charakter', 'rozhodnost jako ochota nést odpovědnost, vytrvalost, sebedůvěra, charakter a <b>charisma</b>']
      ] }
    ] },
    { title: 'Styl řízení', blocks: [
      { t: 'def', term: 'Styl řízení', x: 'Obvyklé chování a jednání ŘP při vedení lidí, rozhodování a komunikaci s podřízenými a při řešení řídících problémů. Ovlivňuje pracovní atmosféru, motivaci, efektivitu týmu i výkon organizace. Je výsledkem osobnostních vlastností (charakter, charisma, schopnosti, dovednosti, zkušenosti, zaměření, temperament), vlivu okolí a cílů a úkolů (stupeň řízení, ekonomická situace, vedený kolektiv, vlivy okolí).' },
      { t: 'versus', title: 'Vnitřní a vnější stránka stylu, přirozený × vynucený', cols: [
        { h: 'Přirozený (vnitřní stránka)', items: ['dán osobností ŘP, jeho přirozenou převahou zaměření na úkol nebo lidi', 'autorita a sebevědomí vyplývající z dovedností a zkušeností'] },
        { h: 'Vynucený (vnější stránka)', items: ['okolnosti: úkoly nadřízeného stupně × požadavky kolektivu', 'stupeň řízení, ekonomická situace, vedený kolektiv'] }
      ], x: 'ŘP se přizpůsobuje tlaku z obou stran: nadřízený chce splnění úkolů (orientace na úkol), podřízení chtějí zdroje, peníze a lidi (orientace na lidi). Proto se styl vždy trochu odchyluje od osobní povahy. Vyšší stupně řízení se obecně přiklánějí k orientaci na úkol, nižší k orientaci na lidi.' },
      { t: 'svg', title: 'Styly řízení v souřadnicích úkol × lidé', x: TROS.stylyGrid() },
      { t: 'table', head: ['Styl (L = lidé, V = výkon/úkol, E = efektivnost)', 'Charakteristika', 'Uplatnění'], rows: [
        ['<b>Lhostejný</b> (L−, V−, E−)', 'nezájem o lidi i úkol, jen předstírá; nežádoucí', 'jen v neefektivním (státním) podniku'],
        ['<b>Byrokratický</b> (L−, V−, E+)', 'jen předává příkazy nadřízených a kontroluje plnění; sám nemá iniciativu ani ji nevyžaduje', 'úřad (úředník)'],
        ['<b>Sousedský</b> (L+, V−, E−)', 'lidé důležitější než úkol; chce být kamarád, nerad rozhoduje a přitvrdit; dobrá atmosféra, ale žádný respekt; závislost na skupině', 'kolektiv na vysoké úrovni, vnitřně motivovaný'],
        ['<b>Liberální / rozvojový</b> (L+, V−, E+)', 'liberální z přesvědčení, ne z donucení; lidé si volí cíle i postupy, ale ŘP zůstává šéfem a rozhoduje', 'tvořivé profese: výzkum, vývoj, VŠ'],
        ['<b>Autokratický</b> (L−, V+, E−)', 'zájem jen o úkol; jednosměrná komunikace, příkazy, disciplína; lidem nevěří, přísná kontrola, motivace „cukr a bič“; rozhoduje sám a rád', 'krize (krizový manažer), rozjezd firmy nebo nové produkce, nezainteresovaní vykonavatelé'],
        ['<b>Benevolentně autokratický</b> (L−, V+, E+)', 'mírnější autokrat: připouští jinou než jednosměrnou komunikaci, předstírá či má zájem o lidi, někdy přizve k rozhodování; dominuje úkol', 'majitel malé začínající firmy; po konsolidaci podniku'],
        ['<b>Demokratický / kompromisní</b> (L+, V+, E−)', 'zájem o lidi i úkol; vícesměrná komunikace, ohled na názory, ale udržuje vedoucí postavení; konzultuje výsledky; motivuje příkladem a spravedlivě; oblíbený, má autoritu a loajalitu', 'konsolidované podmínky, skupina se společným zájmem; jinak hrozí zneužití důvěry'],
        ['<b>Týmový</b> (L+, V+, E+)', 'jako demokratický, ale důraz na tým („tým nade vše“): členové jsou spolupracovníci, koordinuje a přesvědčuje, koučuje a deleguje, mediátor konfliktů, usiluje o zmocnění', 'náročný úkol pro více skupin, projekty, vývoj, marketing, obchod']
      ] },
      { t: 'tip', x: 'Za <b>ideální</b> se považuje demokratický / týmový styl, <b>nejhorší</b> je lhostejný. Žádný styl není správný vždy a všude: autokratický se hodí v krizi, týmový při vývoji, byrokratický v úřadu. V efektivním podnikovém prostředí se sousedský styl mění na rozvojový (liberální), autokratický na benevolentně autokratický a lhostejný na byrokratický (musí aspoň předstírat zájem).' },
      { t: 'warn', x: 'Řídící kapacita roste od autokratického k týmovému stylu: autokrat nesvěří rozhodování nikomu, tým zvládne víc lidí. Autokratický ŘP: výhoda rychlé rozhodování, „slovo platí“; nevýhoda brzdí iniciativu, „všechno ví nejlíp“, nepřizná chybu.' }
    ] },
    { title: 'Dotazník manažerských stylů', blocks: [
      { t: 'p', x: 'Dotazník má <b>30 tvrzení</b>; ke každému přidělíte body <b>vždy 4, často 3, občas 2, zřídka 1, nikdy 0</b> (podle toho, jak často daný postup jako manažer používáte; cílem není získat co nejvíc bodů). Pak se body sečtou:' },
      { t: 'table', head: ['Skóre', 'Tvrzení', 'Měří'], rows: [
        ['<b>X</b>', 'sudá: 2, 4, 6, …, 30 (15 tvrzení; max. 60 bodů)', 'orientaci na <b>úkol</b> / výkon (osa X)'],
        ['<b>Y</b>', 'lichá: 1, 3, 5, …, 29 (15 tvrzení; max. 60 bodů)', 'orientaci na <b>lidi</b> (osa Y)']
      ] },
      { t: 'ul', items: [
        'Hodnoty X a Y se vynesou do grafu 6–60 na obou osách. Kvadranty: <b>A</b> – nízká orientace na úkol, vysoká na lidi (<i>spolek zahrádkářů</i>); <b>B</b> – nízká na úkol i lidi (<i>nezájem</i>); <b>C</b> – vysoká na úkol, nízká na lidi (<i>armáda</i>); <b>D</b> – vysoká na úkol i lidi (<i>kooperující</i>); uprostřed <b>kompromisní styl</b>.',
        'Příklady tvrzení pro X: „stanovuji důležité úkoly sám“, „přijímám rozhodnutí bez porady“, „kontroluji dodržování postupů“, „dávám jasně najevo, že jsem šéf“. Pro Y: „osobně navštěvuji podřízené“, „naslouchám“, „podněcuji k iniciativě“, „věnuji pozornost spokojenosti“.'
      ] },
      { t: 'tip', x: 'Přesná hranice kvadrantů není v podkladu uvedena; rozumně odpovídá středu osy (kolem 30 bodů z 60) – kvadrant D = oba skóre výrazně nad středem, B = oba pod ním.' }
    ] },
    { title: 'Kvalifikace a kompetence řídících pracovníků', blocks: [
      { t: 'versus', cols: [
        { h: 'Kvalifikace', items: ['teoretický předpoklad: vzdělání a praxe', 'stanovuje se předem podle funkce', 'hodnotí se body: VŠ 9 b, ÚSO 4 b, SO 2 b; praxe 1–5 let po 1 b, 10 let 7 b, 15 let 8 b, 20 let 9 b'] },
        { h: 'Kompetence', items: ['skutečná schopnost funkci zvládat', 'lze určit až po jejím výkonu', 'výslednice vzdělání, praxe, schopností, motivace a pravomoci', 'předpoklady: kvalifikační, osobnostní, řídící (pravomoc a sféra působnosti) + chtít'] }
      ], x: 'Dva absolventi stejné školy a se stejnou praxí mohou dopadnout rozdílně: jeden je výborným ředitelem podniku, druhý jen průměrným ředitelem závodu (a skvělým vedoucím provozu). Kvalifikace to nevysvětlí – rozhodují osobní vlastnosti a motivace. „Kompetentní“ znamená jak že umí, tak že smí rozhodnout – a chce.' },
      { t: 'table', head: ['Řídící stupeň', 'Kvalifikační požadavek', 'Body'], rows: [
        ['Generální ředitel (předseda představenstva)', 'VŠ + 10 let praxe', '9 + 7 = 16'],
        ['Ředitel divize', 'VŠ + 10 let praxe', '16'],
        ['Ředitel závodu', 'VŠ + 5 let praxe', '9 + 5 = 14'],
        ['Vedoucí provozu', 'ÚSO + 5 let praxe', '4 + 5 = 9']
      ] },
      { t: 'p', x: 'Kvalifikační koeficient <b>K = D<sub>S</sub> / D<sub>N</sub></b> (skutečná / požadovaná doba přípravy a přepočtená praxe): K = 1 odpovídá, K &gt; 1 kvalifikace převažuje (nadhodnocený), K &lt; 1 neodpovídá (podhodnocený).' },
      { t: 'table', head: ['Stupeň', 'Dílčí kompetence: vize a strategie', 'obchod a ekonomika', 'motivace', 'produkce', 'Hodnotí'], rows: [
        ['1. GŘ / PP', '0,5', '0,4', '0,1', '0', 'představenstvo, valná hromada (ročně)'],
        ['2. ředitel divize', '0,4', '0,3', '0,2', '0,1', 'GŘ (půlročně; dílčí čtvrtletně)'],
        ['3. ředitel závodu', '0,1', '0,2', '0,3', '0,4', 'ředitel divize (čtvrtletně)'],
        ['4. vedoucí provozu', '0', '0,1', '0,4', '0,5', 'ředitel závodu (průběžně, čtvrtletně)']
      ] },
      { t: 'tip', x: 'Součet dílčích kompetencí na každém stupni = 1. S rostoucím stupněm roste podíl vize a strategie, klesá podíl produkce; motivace je nejdůležitější na středním a nižším stupni (přímá motivace podřízených). Kompetenci nejvyššího ŘP hodnotíme podle HV, hodnoty majetku, rozvoje, podílu na trhu a diverzifikace.' }
    ] }
  ],
  mistakes: [
    'Mluvit o vedení lidí jako o samostatné fázi procesu řízení.',
    'Zaměnit demokratický (kompromisní) a týmový styl – týmový klade ještě větší důraz na tým a vyšší efektivnost.',
    'Považovat autokratický styl za vždy špatný (vhodný v krizi či při rozjezdu) a sousedský za dobrý (chybí respekt).',
    'Zaměnit kvalifikaci a kompetenci – kvalifikace je jen předpoklad, kompetence skutečná schopnost s pravomocí.',
    'Na středním stupni řízení klást důraz jen na praktické dovednosti – klesá jejich význam, roste teorie a taktické řízení.'
  ],
  qa: [
    { q: 'Co je vedení lidí a na čem závisí?', a: 'Využívání pravomocí ŘP vůči podřízeným, prostupuje všemi fázemi řízení (hlavně operativní řízení). Závisí na osobnosti ŘP, kolektivu a jeho vztazích, pravomocích, úkolech, stupni řízení a ekonomické situaci.' },
    { q: 'Porovnejte nejnižší, střední a nejvyšší stupeň řízení.', a: 'Nejnižší: odbornost a praktické dovednosti, přímé vedení, operativní řízení, vysoké q. Střední: taktické řízení, realizace strategie, více teorie, nepřímé řízení výkonných, q klesá. Nejvyšší: vize a strategie, generalizace, zastupování firmy navenek, ekonomický a motivační systém, nízké q.' },
    { q: 'Co je styl řízení a co ho ovlivňuje?', a: 'Obvyklé chování ŘP při vedení lidí a řešení problémů. Ovlivňuje ho osobnost (charakter, charisma, schopnosti, zkušenosti, temperament) a okolnosti: stupeň řízení, ekonomická situace, kolektiv, úkoly a cíle, vlivy okolí. Přirozený × vynucený styl.' },
    { q: 'Vyjmenujte a charakterizujte styly řízení.', a: 'Autokratický (úkol, příkazy), benevolentně autokratický (mírnější, někdy předstíraný zájem o lidi), demokratický/kompromisní (zájem o úkol i lidi, rozhoduje po poradě), týmový (tým nade vše), liberální/rozvojový (volnost, tvořivé profese), sousedský (lidé před úkolem), byrokratický (předává příkazy), lhostejný (nezájem).' },
    { q: 'Kdy je vhodný autokratický a kdy týmový styl?', a: 'Autokratický: krize, rozjezd firmy nebo nové produkce, podřízení bez zájmu a jen vykonavatelé. Týmový: náročný úkol pro více skupin, projekty, vývoj, marketing, obchod.' },
    { q: 'Jak se vyhodnocuje dotazník manažerských stylů?', a: 'Sečtou se body sudých tvrzení (skóre X, orientace na úkol) a lichých (skóre Y, orientace na lidi); hodnoty se vynesou do grafu: A spolek zahrádkářů, B nezájem, C armáda, D kooperující, střed kompromisní styl.' },
    { q: 'Jaký je rozdíl mezi kvalifikací a kompetencí řídícího pracovníka?', a: 'Kvalifikace = teoretický předpoklad (vzdělání a praxe, body, kvalifikační koeficient K = D_S/D_N). Kompetence = skutečná schopnost vykonávat funkci (kvalifikace, osobnost, pravomoc, motivace), zjistí se až po výkonu funkce.' },
    { q: 'Jak se liší dílčí kompetence jednotlivých řídících stupňů?', a: 'GŘ: vize a strategie 0,5, obchod a ekonomika 0,4, motivace 0,1, produkce 0. Ředitel divize 0,4/0,3/0,2/0,1. Ředitel závodu 0,1/0,2/0,3/0,4. Vedoucí provozu 0/0,1/0,4/0,5.' }
  ]
});
