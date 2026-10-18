registerTopic({
  id: 'pravni-vztahy', order: 4, icon: '🔗', title: 'Právní vztahy, subjekty a objekty', src: 'podklady', where: 'Přednáška 2 + Cvičení 2 (zpn_sem2, Dodamgoda A2)',
  summary: 'Pojem právního vztahu, jeho předpoklady a prvky (subjekt, objekt, obsah), členění právních skutečností, fyzické a právnické osoby, zastoupení a věci v právním smyslu.',
  vocab: [
    { w: 'Věřitel × dlužník', x: 'Věřitel má právo (pohledávku) žádat plnění; dlužník má povinnost (dluh) plnit.' },
    { w: 'Smlouva', x: 'Dohoda dvou či více stran, kterou vznikají práva a povinnosti (kupní, nájemní smlouva…).' },
    { w: 'Vlastnictví', x: 'Nejsilnější právo k věci: vlastník ji smí držet, užívat, nakládat s ní a vyloučit ostatní.' },
    { w: 'Katastr nemovitostí', x: 'Veřejný seznam pozemků a staveb s údaji o vlastnících; vlastnictví nemovitosti se nabývá zápisem do něj.' },
    { w: 'Veřejný rejstřík', x: 'Veřejně přístupný seznam firem, spolků a nadací (např. obchodní rejstřík); právnická osoba vzniká zápisem.' },
    { w: 'Zmocnitel × zmocněnec', x: 'Zmocnitel dává plnou moc; zmocněnec (zástupce) jedná jeho jménem.' },
    { w: 'Dobrá víra', x: 'Přesvědčení, že jednám správně a bez vědomí o vadě (zákonem je dobrá víra chráněna).' },
    { w: 'Třetí osoba', x: 'Ten, kdo není stranou právního vztahu nebo smlouvy, ale může se jí dotknout.' }
  ],
  key: [
    '<b>Právní vztah = společenský vztah upravený právní normou.</b> Předpoklady: <b>právní norma + právní skutečnost</b>. Prvky: <b>subjekt, objekt, obsah</b>.',
    '<b>4 druhy právních skutečností:</b> právní jednání, protiprávní jednání (závislé na vůli) × právní událost, protiprávní stav (nezávislé na vůli). K tomu <b>konstitutivní rozhodnutí</b> orgánu.',
    '<b>Právní osobnost</b> (§ 15) = od narození do smrti, nelze se jí vzdát. <b>Svéprávnost</b> = způsobilost právně jednat; plná od <b>18 let</b> (dříve přiznáním soudem od 16 let nebo sňatkem). <b>Omezit</b> ji lze jen soudem, nejdéle na 3 roky; úplně zbavit nelze.',
    '<b>Nezvěstnost</b> (§ 66) → <b>domněnka smrti</b> (§ 67): prohlášení za mrtvého nejdříve 5 let od konce roku prohlášení za nezvěstného, resp. 7 let od poslední zprávy.',
    '<b>Právnická osoba</b> vzniká zápisem do veřejného rejstříku; typy: <b>korporace, fundace, ústavy</b>. Za PO jedná statutární orgán.',
    '<b>Zastoupení:</b> smluvní (plná moc, <b>prokura</b> – jen podnikatel, nikdy PO), zákonné (rodiče, poručník) a opatrovnictví (jmenuje soud).',
    '<b>Věc (§ 489)</b> = vše, co je rozdílné od osoby a slouží potřebě lidí. <b>Živé zvíře a lidské tělo nejsou věc.</b> Součást věci ≠ příslušenství.',
    'Obsah právního vztahu = práva a povinnosti (dát, konat, zdržet se, strpět); jsou vzájemně podmíněné.'
  ],
  sections: [
    { title: 'Právní vztah, předpoklady a prvky', blocks: [
      { t: 'def', term: 'Právní vztah', x: 'Společenský vztah mezi nejméně dvěma konkrétně určenými subjekty, upravený právní normou, v němž jsou účastníci nositeli vzájemně spjatých subjektivních práv a povinností. Veškeré vztahy mezi subjekty jsou společenské; teprve regulace právní normou z nich dělá právní.' },
      { t: 'tree', title: 'Předpoklady a prvky právního vztahu', root: { h: 'Právní vztah', kids: [
        { h: '2 předpoklady', kids: [
          { h: 'Právní norma', x: 'platná a účinná, vztah upravuje (např. OZ – převod nemovitosti)' },
          { h: 'Právní skutečnost', x: 'norma s ní spojuje vznik, změnu nebo zánik konkrétního vztahu' }
        ] },
        { h: '3 prvky (SOO)', kids: [
          { h: 'Subjekt', x: 'účastníci – fyzické a právnické osoby' },
          { h: 'Objekt', x: 'k čemu práva a povinnosti směřují – věci, práva, vynálezy, ochrana osobnosti' },
          { h: 'Obsah', x: 'práva a povinnosti (vzájemně podmíněné)' }
        ] }
      ] } },
      { t: 'svg', title: 'Právní vztah na příkladu převodu nemovitosti', x: ZPN.relationDiagram() },
      { t: 'icons', title: 'Obsah vztahu: právo (oprávnění) + povinnost', items: [
        { i: '🎁', h: 'Dát' },
        { i: '🔨', h: 'Konat' },
        { i: '🚫', h: 'Zdržet se' },
        { i: '🤝', h: 'Strpět' }
      ] },
      { t: 'tip', x: 'Zapamatuj si: <b>SOO</b> = Subjekt, Objekt, Obsah. Předpoklady jsou dva: norma + skutečnost. Právu jedné strany odpovídá povinnost druhé.' },
      { t: 'ex', x: 'Převod nemovitosti: norma = občanský zákoník, skutečnost = uzavření kupní smlouvy (a zápis do katastru), subjekty = prodávající a kupující, objekt = nemovitost, obsah = povinnost předat a převést vlastnictví × povinnost zaplatit cenu.' }
    ] },
    { title: 'Právní skutečnosti a jejich členění', blocks: [
      { t: 'def', term: 'Právní skutečnost', x: 'Okolnost právně významná – právní norma s ní spojuje vznik, změnu nebo zánik právního vztahu (tj. subjektivních práv a právních povinností).' },
      { t: 'svg', title: 'Právní skutečnosti: vůle × soulad s právem', x: ZPN.factsDiagram() },
      { t: 'tree', title: 'Čtyři druhy + konstitutivní rozhodnutí', root: { h: 'Právní skutečnosti', kids: [
        { h: 'Závislé na vůli (subjektivní)', kids: [
          { h: 'Právní jednání', x: 'projev vůle v souladu s právem + individuální právní akty; smlouva, výpověď, závěť, odvolání' },
          { h: 'Protiprávní jednání', x: 'v rozporu s právem, sankcionováno; trestný čin, přestupek, porušení smlouvy' },
          { h: 'Konstitutivní rozhodnutí', x: 'soudu či jiného orgánu zakládá, mění, ruší vztah; přikázání pohledávky, omezení svéprávnosti' }
        ] },
        { h: 'Nezávislé na vůli (objektivní)', kids: [
          { h: 'Právní událost', x: 'mimovolní, v souladu s právem; narození, smrt, čas (nárok na starobní důchod)' },
          { h: 'Protiprávní stav', x: 'mimovolní, v rozporu s právem, často objektivní odpovědnost; živelní pohroma, nemoc, pracovní úraz, havárie vodovodu' }
        ] }
      ] } },
      { t: 'ul', items: [
        '<b>Protiprávní jednání</b> může být konání i <b>opomenutí</b>; zaviněné (úmysl přímý/nepřímý, nedbalost) × nezaviněné.',
        'Právní události: <b>přirozené</b> (vichřice, narození) × <b>společenské</b> (hyperinflace); <b>předvídatelné</b> (zletilost) × <b>nepředvídatelné</b> (úder blesku). Zvláštní případy: <b>náhoda a vyšší moc</b>.',
        'Právní událost může být příčinou protiprávního stavu (prasklé potrubí → vytopené byty).',
        'Protiprávnost vylučuje <b>nutná obrana</b> a <b>krajní nouze</b>.',
        'Uplynutí času je právní událostí, jen pokud s ním norma spojuje následky (promlčení, prekluze, vydržení, dosažení věku).'
      ] },
      { t: 'warn', x: 'Záměna: <b>protiprávní jednání</b> (projev vůle, vědomé chování) × <b>protiprávní stav</b> (nezávislý na vůli). Smrt a narození jsou <b>právní události</b>, ne právní jednání. Rozhodnutí soudu je samostatný druh (konstitutivní), ne právní jednání účastníků.' }
    ] },
    { title: 'Fyzické osoby (subjekt)', blocks: [
      { t: 'versus', title: 'Způsobilosti fyzické osoby', x: 'Tři způsobilosti odpovídají na tři různé otázky. Právní osobnost: může člověk vůbec mít práva a povinnosti? Ano, každý od narození do smrti – i novorozenec může být vlastníkem nebo dědicem. Svéprávnost: může je sám vlastním jednáním získávat a zavazovat se? Plně až od 18 let; nezletilý jedná sám jen v záležitostech přiměřených svému věku, jinak za něj jednají rodiče. Deliktní způsobilost: odpovídá za škodu nebo protiprávní čin, který způsobil? U škody rozhoduje, zda byl schopen ovládnout své jednání a posoudit jeho následky. Novorozenec tak má právní osobnost, ale není svéprávný ani deliktně způsobilý.', cols: [
        { h: 'Právní osobnost (§ 15 odst. 1)', items: ['způsobilost mít práva a povinnosti', 'od narození do smrti', 'nelze omezit, odejmout ani se jí vzdát', 'počaté dítě = narozené, vyhovuje-li to jeho zájmům a narodí-li se živé (§ 23)'] },
        { h: 'Svéprávnost (§ 15 odst. 2)', items: ['způsobilost nabývat práva a zavazovat se vlastním právním jednáním', 'plná od 18 let (zletilost)', 'dříve: přiznání soudem od 16 let (§ 37: schopen se sám živit, souhlas zák. zástupce) nebo uzavření manželství', 'nezletilý svéprávný k jednáním přiměřeným rozumové a volní vyspělosti'] },
        { h: 'Deliktní způsobilost', items: ['způsobilost nést odpovědnost za protiprávní jednání (škodu, delikt)', 'u škody rozhoduje schopnost ovládat jednání a posoudit následky', 'slajdy uvádějí „15 let“ – to je věk trestní odpovědnosti, ne obecná občanskoprávní hranice'] }
      ] },
      { t: 'nums', title: 'Věky a lhůty u fyzických osob', items: [
        { n: '18', u: 'let', x: 'plná svéprávnost (zletilost)' },
        { n: '16', u: 'let', x: 'dříve přiznání svéprávnosti soudem (§ 37)' },
        { n: '15', u: 'let', x: 'trestní odpovědnost – ne občanskoprávní hranice' },
        { n: '3', u: 'roky', x: 'nejdéle omezení svéprávnosti' },
        { n: '5', u: 'let', x: 'za mrtvého po prohlášení za nezvěstného (od konce roku)' },
        { n: '7', u: 'let', x: 'za mrtvého od konce roku poslední zprávy o životě' },
        { n: '25', u: 'let', x: 'zmizel před 18. rokem: ne před koncem roku, kdy by mu bylo 25' }
      ] },
      { t: 'ul', items: [
        'Právní osobnosti ani svéprávnosti se nikdo nemůže vzdát (ani zčásti) – takové vzdání se neplatí.',
        'Práva může mít a vykonávat jen osoba (fyzická nebo právnická); povinnost lze uložit jen osobě.',
        '<b>Osoba blízká</b> (§ 22): příbuzný v řadě přímé, sourozenec, manžel nebo registrovaný partner; jiné osoby v poměru rodinném či obdobném, pokud by újmu druhého důvodně pociťovaly jako vlastní.',
        '<b>Změna pohlaví</b> (chirurgický zákrok s ukončením reprodukční funkce): nemění osobní stav ani majetkové poměry; manželství či registrované partnerství zaniká.'
      ] },
      { t: 'flow', title: 'Omezení svéprávnosti (§ 55 an.) – podmínky', steps: [
        { h: 'Vážná duševní porucha', x: 'ne jen přechodná; obtíže s dorozumíváním samy nestačí' },
        { h: 'Hrozí závažná újma', x: 'a nestačí mírnější opatření (nápomoc při rozhodování)' },
        { h: 'Rozhodne soud', x: 'člověka zhlédne a vymezí rozsah omezení' },
        { h: 'Nejdéle 3 roky', x: 'nebo doba nutná pro určitou záležitost' }
      ] },
      { t: 'law', ref: 'Omezení svéprávnosti (§ 55 an.)', x: 'Po uplynutí doby účinky zanikají – při zahájeném řízení o prodloužení trvají do nového rozhodnutí, nejdéle 1 rok. Při změně okolností soud rozhodnutí změní či zruší i bez návrhu. <b>Úplné zbavení svéprávnosti už neexistuje.</b>' },
      { t: 'ul', items: [
        '<b>Mírnější instituty:</b> nápomoc při rozhodování (§ 45 – asistent nejedná za člověka, jen mu pomáhá), zastoupení členem domácnosti, předběžné prohlášení, opatrovník.',
        'Opatrovníka soud jmenuje a vymezí mu rozsah práv a povinností (kdo je opatrovanec, viz zastoupení).'
      ] },
      { t: 'timeline', title: 'Nezvěstnost a domněnka smrti (§ 66, § 67 an.)', items: [
        { when: 'Zmizení', h: 'Nezvěstný', x: 'svéprávný člověk opustil bydliště, nepodal zprávu a není známo, kde je' },
        { when: 'Rozhodnutí soudu', h: 'Prohlášení za nezvěstného', x: 'soud uvede den účinků; navrátí-li se, prohlášení pozbývá účinků' },
        { when: '+5 let od konce roku prohlášení', h: 'Lze prohlásit za mrtvého', x: 'nezvěstného po prohlášení' },
        { when: '+7 let od konce roku poslední zprávy', h: 'Lze prohlásit za mrtvého', x: 'neprohlášeného; kdo zmizel před 18. rokem – ne před koncem roku, kdy by mu bylo 25' }
      ] },
      { t: 'law', ref: 'Prohlášení za mrtvého', x: 'Na návrh osoby s právním zájmem; soud určí den, který se pokládá za den smrti.' },
      { t: 'icons', title: 'Osobnostní práva', items: [
        { i: '🛡️', h: 'Ochrana osobnosti (§ 81 an.)', x: 'chráněn život, důstojnost, zdraví, vážnost, čest, soukromí, projevy osobní povahy, příznivé ŽP; nárok na upuštění od zásahu a odstranění následků; přednost omluva, nestačí-li, peněžité zadostiučinění; po smrti osoby blízké' },
        { i: '📷', h: 'Podoba a soukromí', x: 'zachytit a šířit podobu jen se svolením; bez svolení nelze narušit soukromé prostory, sledovat život, pořizovat či šířit záznamy; svolení netřeba k výkonu a ochraně jiných práv' },
        { i: '🩺', h: 'Integrita (§ 91 an.)', x: 'zásah jen s informovaným souhlasem (povaha, následky, alternativy); písemně u odnětí neobnovitelné části těla, pokusu a zákroku nevyžadovaného zdravotním stavem (výjimka: kosmetické bez trvalých následků); souhlas se závažnou újmou se nepřihlíží, ledaže jde o záchranu života' },
        { i: '⚰️', h: 'Části těla a tělo po smrti', x: 'odňatá část nesmí být naložena nedůstojně, lze ji použít k zdravotnickým, výzkumným, vědeckým účelům se souhlasem; vlasy a obnovitelné části i za odměnu (věc movitá); o těle a pohřbu rozhoduje člověk, jinak manžel, děti, rodiče, sourozenci…, nakonec obec' },
        { i: '🏥', h: 'Zadržení ve zdravotnickém zařízení (§ 104–109)', x: 'zvláštní práva zadrženého – zásah do svobody, proto úprava v OZ' }
      ] }
    ] },
    { title: 'Právnické osoby (subjekt)', blocks: [
      { t: 'def', term: 'Právnická osoba (§ 20)', x: 'Organizovaná jednotka, o níž zákon stanoví, že má právní osobnost (nebo jejíž právní osobnost uznává). Umělý útvar vytvořený právem, aby sloužil zájmům lidí – soukromým (běžná banka) nebo veřejným (ČNB). Právnickou osobou je i <b>stát</b> (§ 21). PO veřejného práva se řídí hlavně zvláštními zákony (obce, ČNB, veřejné vysoké školy).' },
      { t: 'tree', title: 'Typy právnických osob', root: { h: 'Právnická osoba', kids: [
        { h: 'Korporace (§ 210 an.)', x: 'základ = osobní složka, členové (corpus)', kids: [
          { h: 'Spolky' }, { h: 'Obchodní společnosti', x: 'a.s., s.r.o., k.s., v.o.s.' }, { h: 'Družstva' }, { h: 'Obce, kraje, komory' }
        ] },
        { h: 'Fundace (§ 303 an.)', x: 'základ = majetek k účelu (fundus), bez členů', kids: [
          { h: 'Nadace' }, { h: 'Nadační fondy' }
        ] },
        { h: 'Ústav (§ 402 an.)', x: 'osobní + majetková složka; bez členů, má zaměstnance; majetek méně chráněn než u fundace', kids: [
          { h: 'Veřejnoprávní ústavy' }, { h: 'Dřívější o.p.s.' }
        ] }
      ] } },
      { t: 'tip', x: 'Korporace = lidé (corpus), fundace = peníze/majetek (fundus), ústav = oboje propojené, ale bez členů.' },
      { t: 'flow', title: 'Životní cyklus právnické osoby', steps: [
        { h: 'Ustavení', x: 'zakladatelské jednání (písemně), zákon, rozhodnutí OVM' },
        { h: 'Vznik', x: 'zápis do veřejného rejstříku (některé ze zákona)' },
        { h: 'Činnost', x: 'jedná statutární orgán' },
        { h: 'Zrušení', x: 'zpravidla likvidace' },
        { h: 'Zánik', x: 'výmaz z rejstříku' }
      ] },
      { t: 'ul', items: [
        '<b>Ustavení:</b> zakladatelským právním jednáním, zákonem, rozhodnutím orgánu veřejné moci nebo jiným způsobem podle zákona. Zakladatelské jednání (<b>písemná forma</b>) určí alespoň název, sídlo, předmět činnosti, statutární orgán a jeho první členy. Více zakladatelů: stanovy nebo smlouva.',
        '<b>Vznik:</b> dnem <b>zápisu do veřejného rejstříku</b> (pojem veřejné rejstříky – § 120). Některé vznikají přímo ze zákona (obce, kraje, Česká televize).',
        '<b>Jednání před vznikem</b> jménem PO: jednající je zavázán a oprávněn sám (více osob společně a nerozdílně); PO může účinky do <b>3 měsíců od vzniku</b> převzít.',
        '<b>Jednání:</b> statutární orgán má veškerou působnost, kterou nesvěří jinému orgánu (§ 163); člen může zastupovat PO ve všech záležitostech (§ 164). Kolektivní orgán – neurčí-li zakladatelské jednání jinak, zastupuje <b>každý člen samostatně</b>. Podpis: k názvu PO se připojí podpis a funkce.',
        '<b>Ochrana třetích osob</b> (§ 166): rozhoduje, jak se věc jeví veřejnosti; omezení vnitřním předpisem působí vůči třetí osobě jen tehdy, musela-li o něm vědět.',
        '<b>Zrušení:</b> právním jednáním, uplynutím doby, rozhodnutím orgánu veřejné moci, dosažením účelu, ze zákonných důvodů. Zpravidla následuje <b>likvidace</b> (ledaže celé jmění přechází na právního nástupce); neplyne-li z rozhodnutí, jak se ruší, platí, že <b>s likvidací</b>. Zánik vymazáním z rejstříku.'
      ] }
    ] },
    { title: 'Zastoupení a opatrovnictví', blocks: [
      { t: 'def', term: 'Zastoupení', x: 'Kdo je oprávněn právně jednat jménem jiného, je jeho zástupcem; práva a povinnosti z jednání vznikají <b>přímo zastoupenému</b>. Zastoupit nemůže ten, jehož zájmy jsou v rozporu se zájmy zastoupeného (u smluvního jen pokud zastoupený o rozporu věděl či musel vědět).' },
      { t: 'icons', title: 'Druhy zastoupení', items: [
        { i: '📝', h: 'Smluvní (plná moc)', x: 'strany se ujednají; zmocnitel vymezí rozsah' },
        { i: '🏢', h: 'Prokura', x: 'zvláštní smluvní zmocnění podnikatele' },
        { i: '👨‍👩‍👧', h: 'Zákonné', x: 'rodiče, poručník, opatrovník' },
        { i: '⚖️', h: 'Opatrovnictví', x: 'opatrovníka jmenuje soud' }
      ] },
      { t: 'versus', title: 'Plná moc × prokura', x: 'Obojí je smluvní zastoupení, liší se rozsahem a tím, kdo ho může udělit. Plnou moc může udělit kterákoli osoba a sama v ní vymezí, k čemu zástupce zmocňuje – třeba jen k podpisu jedné smlouvy. Prokuru smí udělit jen podnikatel zapsaný v obchodním rejstříku a jen fyzické osobě; její rozsah stanoví zákon a je velmi široký – prokurista smí činit všechna jednání při provozu závodu, jen nemovitost smí zcizit nebo zatížit, pokud je to výslovně uvedeno. Plná moc se tedy šije na míru, prokura je obecné zmocnění pro běžný chod firmy.', cols: [
        { h: 'Plná moc (smluvní)', items: ['uděluje zmocnitel; rozsah vymezí v plné moci', 'netýká-li se jen určitého jednání – písemně', 'zmocnitel se nemůže vzdát práva odvolat', 'zanikne vykonáním jednání, odvoláním, výpovědí, smrtí (zánikem) zmocnitele či zmocněnce, ledaže ujednáno jinak', 'zmocnění PO – působnost statutárního orgánu'] },
        { h: 'Prokura (§ 450 an.)', items: ['uděluje podnikatel zapsaný v obchodním rejstříku prokuristovi', 'jednání při provozu závodu či pobočky (i ta, pro něž se jinak žádá zvláštní plná moc)', 'musí být výslovně označena jako prokura; nelze ji udělit právnické osobě, přenést ani udělit další prokuru', 'zcizit či zatížit nemovitost jen výslovně', 'podpis: firma + podpis + dodatek „prokura“; zaniká převodem či pachtem závodu, smrtí podnikatele nezaniká'] }
      ] },
      { t: 'ul', items: [
        '<b>Zákonné zastoupení:</b> rodiče, poručník, opatrovník. Zástupce nemůže jednat o vzniku a zániku manželství, výkonu rodičovských práv, pořízení pro případ smrti a vydědění. Při <b>střetu zájmů</b> jmenuje soud <b>kolizního opatrovníka</b>. Běžná správa jmění náleží zástupci, ostatní záležitosti schvaluje soud. Odměnu za zastoupení nelze požadovat (za správu jmění ji soud může přiznat).',
        '<b>Opatrovnictví:</b> opatrovníka jmenuje <b>soud</b> a vymezí jeho práva (omezený ve svéprávnosti, nezvěstný, neznámý účastník jednání, osoba s obtížemi při správě jmění). Soud jmenuje osobu navrženou opatrovancem, jinak příbuzného/blízkého, jinak jinou vhodnou osobu či veřejného opatrovníka. Opatrovník dbá o zdraví, názory a přání opatrovance. Opatrovnictví PO – soud jmenuje, má-li PO obtíže (obnova činnosti statutárního orgánu).'
      ] },
      { t: 'flow', title: 'Překročení zástupčího oprávnění', steps: [
        { h: 'Zástupce jedná nad rámec', x: 'bez oprávnění nebo za jeho hranicí' },
        { h: 'Schválení bez zbytečného odkladu?', x: 'rozhoduje zastoupený' },
        { h: 'ANO: zavazuje zastoupeného', x: 'jednání se považuje za platné' },
        { h: 'NE: zavázán sám zástupce', x: 'třetí osoba v dobré víře: splnění nebo náhrada škody' }
      ] },
      { t: 'ul', items: [
        'Více zástupců pro tutéž věc: má se za to, že každý jedná samostatně. Dalšího zástupce lze pověřit jen ujednáním nebo při nutné potřebě (odpovědnost za výběr).',
        'Kdo vlastní vinou vyvolá u třetí osoby domněnku o udělení plné moci, nemůže se dovolat nedostatku zmocnění (ochrana dobré víry).'
      ] }
    ] },
    { title: 'Objekt právního vztahu – věci', blocks: [
      { t: 'def', term: 'Věc v právním smyslu (§ 489)', x: 'Vše, co je rozdílné od osoby a slouží potřebě lidí.' },
      { t: 'versus', title: 'Věc × není věc', x: 'Občanský zákoník chápe věc velmi široce: věcí je vše, co je odlišné od člověka a slouží potřebě lidí – nejen hmotné předměty, ale i práva. Aby byla něco věcí, musí to být užitečné, ovladatelné a existovat samostatně ve vnějším světě. Zákon však výslovně vyjímá lidské tělo a jeho části a živé zvíře, které je smysly nadanou živou bytostí. Na zvířata se pravidla o věcech použijí jen obdobně a jen tehdy, pokud to jejich povaha připouští – psa tedy koupit lze, ale zacházet s ním jako s předmětem ne.', cols: [
        { h: 'Věc – znaky', items: ['odlišnost od osoby', 'užitečnost', 'ovladatelnost', 'autonomní existence ve vnějším světě'] },
        { h: 'Věcí není', items: ['<b>lidské tělo a jeho části</b> (ani po oddělení, § 493)', '<b>živé zvíře</b> (§ 494) – smysly nadaná živá bytost; ustanovení o věcech se užijí obdobně, připouští-li to povaha', 'objektem vztahu mohou být i práva, vynálezy, ochrana osobnosti, nehmotné statky'] }
      ] },
      { t: 'tree', title: 'Členění věcí', root: { h: 'Věci', kids: [
        { h: 'Hmotné × nehmotné', kids: [
          { h: 'Hmotná', x: 'ovladatelná část vnějšího světa jako samostatný předmět (židle, pozemek)' },
          { h: 'Nehmotná', x: 'práva (věcná i obligační), zaknihované cenné papíry, investiční nástroje, obchodní tajemství' }
        ] },
        { h: 'Nemovité (§ 498)', kids: [
          { h: 'Pozemky' }, { h: 'Podzemní stavby se samostatným účelovým určením', x: 'tubus metra, vinný sklep, hrobka' }, { h: 'Věcná práva k nim', x: 'věcné břemeno, zástavní právo' }, { h: 'Práva prohlášená zákonem za nemovitá', x: 'právo stavby, jednotka' }
        ] },
        { h: 'Movité', x: 'všechno ostatní' }
      ] } },
      { t: 'p', x: 'Nemovité jsou dále věci, které podle jiného zákona nejsou součástí pozemku, a stavby, které se zatím součástí pozemku nestaly (přechodná ustanovení).' },
      { t: 'versus', title: 'Součást věci × příslušenství', x: 'Obojí souvisí s hlavní věcí, ale jinak pevně. Součást k věci patří natolik, že ji nelze oddělit, aniž by se věc znehodnotila – jako okno domu. Sama o sobě věcí není, nelze s ní samostatně nakládat a vždy sdílí osud celku. Příslušenství je samostatná věc, kterou vlastník určil k tomu, aby se s věcí hlavní trvale užívala – ovladač k televizi nebo technický průkaz k autu. Zákon předpokládá, že při prodeji hlavní věci jde příslušenství s ní, ale jde jen o vyvratitelnou domněnku, takže se strany mohou dohodnout jinak.', cols: [
        { h: 'Součást věci (§ 505)', items: ['vše, co k věci podle povahy náleží a nelze oddělit bez hospodářského, estetického či jiného znehodnocení', 'není samostatnou věcí', 'nelze s ní samostatně nakládat', 'příklad: okno domu'] },
        { h: 'Příslušenství (§ 510)', items: ['samostatná vedlejší věc vlastníka u věci hlavní, užívaná trvale společně s ní (funkční vazba + vůle vlastníka)', 'vyvratitelná domněnka, že sdílí právní osud věci hlavní', 'dočasné odnětí povahu neruší', 'příklad: ovladač k televizi, technický průkaz'] }
      ] },
      { t: 'versus', title: 'Plody × užitky', x: 'Plody i užitky jsou to, co věc „vynáší“, liší se původem. Plody věc dává ze své přirozené povahy – strom ovoce, zvíře mládě, pole úrodu. Užitky věc poskytuje pravidelně ze své právní povahy – úroky z peněz nebo dividendy z akcií. Plody zpravidla patří vlastníkovi věci, která je přinesla.', cols: [
        { h: 'Plody', items: ['co věc poskytuje ze své přirozené povahy', 'ovoce, mláďata, úroda'] },
        { h: 'Užitky', items: ['co věc pravidelně poskytuje ze své právní povahy', 'úroky, dividenda'] }
      ] },
      { t: 'p', x: 'Vlastník plodonosné věci je zpravidla vlastníkem plodů.' },
      { t: 'law', ref: 'Součást pozemku (§ 506–509)', x: 'Součástí pozemku je prostor nad i pod povrchem, stavba zřízená na pozemku (obnovena zásada <b>superficies solo cedit</b> – „stavba následuje pozemek“), rostlinstvo, objekty zapuštěné do pozemku. <b>Výjimky:</b> dočasná stavba (§ 506 odst. 1), stroj podle výhrady vlastnictví zapsané v katastru (§ 508), inženýrské sítě (§ 509).' },
      { t: 'warn', x: 'Podle OZ je <b>stavba zpravidla součástí pozemku</b> a není samostatnou nemovitostí (na rozdíl od staré úpravy). Samostatná nemovitost je až právo stavby nebo jednotka.' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>právní osobnost</b> (od narození, nelze omezit) a <b>svéprávnost</b> (od 18 let, lze omezit soudem). Svéprávnosti se nelze zbavit – jen ji omezit, nejdéle na 3 roky.',
    'Tvrdit, že 15 let je deliktní způsobilost podle občanského práva – 15 let je věková hranice trestní odpovědnosti; v občanském právu rozhoduje rozumová a volní vyspělost.',
    'Zaměnit <b>protiprávní jednání</b> (projev vůle) a <b>protiprávní stav</b> (živelní pohroma, pracovní úraz – bez vůle).',
    'Tvrdit, že prokuru lze udělit právnické osobě – <b>nelze</b>; uděluje ji jen podnikatel zapsaný v obchodním rejstříku a musí být výslovně označena.',
    'Považovat zvíře za věc – živé zvíře věcí <b>není</b> (§ 494), jen se na ně obdobně užijí ustanovení o věcech; lidské tělo a jeho části také ne.',
    'Zaměnit <b>součást věci</b> (není samostatná věc, nelze s ní nakládat zvlášť) a <b>příslušenství</b> (samostatná věc, sdílí osud věci hlavní jen jako domněnka).',
    'Zaměnit korporaci a fundaci: korporace = členové (spolek, s.r.o.), fundace = majetek (nadace).',
    'Zapomenout, že PO vzniká až <b>zápisem do veřejného rejstříku</b> (ne podpisem zakladatelské listiny); jednající před vznikem odpovídá sám.'
  ],
  qa: [
    { q: 'Co je právní vztah a jaké jsou jeho předpoklady a prvky?', a: 'Společenský vztah upravený právní normou. Předpoklady: <b>právní norma</b> a <b>právní skutečnost</b>, s níž se spojuje vznik, změna nebo zánik vztahu. Prvky: <b>subjekt</b> (osoby), <b>objekt</b> (věci, práva…), <b>obsah</b> (práva a povinnosti – dát, konat, zdržet se, strpět).' },
    { q: 'Rozdělte právní skutečnosti a uveďte příklady.', a: 'Závislé na vůli: <b>právní jednání</b> (smlouva, výpověď, závěť), <b>protiprávní jednání</b> (trestný čin, porušení smlouvy), konstitutivní rozhodnutí (přikázání pohledávky). Nezávislé na vůli: <b>právní událost</b> (narození, smrt, čas), <b>protiprávní stav</b> (živelní pohroma, pracovní úraz).' },
    { q: 'Jaký je rozdíl mezi právní osobností a svéprávností?', a: '<b>Právní osobnost</b> je způsobilost mít práva a povinnosti – od narození do smrti, nelze ji omezit ani se jí vzdát. <b>Svéprávnost</b> je způsobilost právně jednat – plná od 18 let (dříve přiznáním soudem od 16 let či sňatkem); lze ji omezit rozhodnutím soudu.' },
    { q: 'Za jakých podmínek lze omezit svéprávnost?', a: 'Jen rozhodnutím <b>soudu</b>, v zájmu člověka, po jeho zhlédnutí, při vážné nepřechodné duševní poruše, hrozí-li závažná újma a nestačí mírnější opatření (např. nápomoc při rozhodování). Rozsah soud vymezí; doba nejdéle <b>3 roky</b> (lze prodloužit). Úplné zbavení svéprávnosti není možné.' },
    { q: 'Kdy lze prohlásit člověka za mrtvého?', a: 'Soud na návrh osoby s právním zájmem a určí den smrti. Po prohlášení za nezvěstného nejdříve po <b>5 letech</b> od konce roku prohlášení; bez prohlášení za nezvěstného nejdříve po <b>7 letech</b> od konce roku poslední zprávy o životě; u osoby nezvěstné před 18. rokem ne před koncem roku, v němž by dovršila 25 let.' },
    { q: 'Jak vzniká právnická osoba a kdo za ni jedná?', a: 'Ustavením zakladatelským právním jednáním (písemně), zákonem nebo rozhodnutím orgánu veřejné moci; vzniká dnem <b>zápisu do veřejného rejstříku</b> (některé přímo ze zákona). Jedná <b>statutární orgán</b>; u kolektivního orgánu každý člen samostatně, neurčí-li zakladatelské jednání jinak. Při podpisu se k názvu PO připojí podpis a funkce.' },
    { q: 'Rozlište korporaci, fundaci a ústav.', a: '<b>Korporace</b> – základem členové (spolek, obchodní společnost, družstvo). <b>Fundace</b> – základem majetek určený k účelu (nadace, nadační fond). <b>Ústav</b> – spojení osobní a majetkové složky, nemá členy, ale zaměstnance.' },
    { q: 'Co je prokura a komu ji lze udělit?', a: 'Zvláštní druh zmocnění: <b>podnikatel zapsaný v obchodním rejstříku</b> zmocní prokuristu k jednáním při provozu závodu či pobočky (i k těm, pro něž je jinak třeba zvláštní plná moc). Musí být výslovně označena jako prokura; nelze ji udělit právnické osobě, přenést ani substituovat; zcizení či zatížení nemovitosti jen je-li výslovně uvedeno.' },
    { q: 'Pepa, zástupce bez plné moci pro koupi auta, koupil auto za firmu Novák. Zavazuje to Nováka?', a: 'Pepa překročil (resp. neměl) zástupčí oprávnění. Zastoupeného jednání zavazuje, jen pokud je <b>bez zbytečného odkladu schválí</b>. Jinak je zavázán sám Pepa; třetí osoba v dobré víře může požadovat splnění či náhradu škody. Pozor také na domněnku zmocnění, vyvolal-li Novák vlastní vinou u třetí osoby dojem, že Pepu zmocnil.' },
    { q: 'Co je věc v právním smyslu a co věcí není?', a: 'Vše, co je rozdílné od osoby a slouží potřebě lidí (§ 489). Věcí není <b>lidské tělo a jeho části</b> (§ 493) ani <b>živé zvíře</b> (§ 494 – obdobně se použijí ustanovení o věcech, připouští-li to povaha).' },
    { q: 'Rozlište součást věci a příslušenství. Uveďte příklady.', a: '<b>Součást</b> (§ 505): vše, co k věci patří a nelze to oddělit bez znehodnocení – <b>není samostatnou věcí</b> (okno domu). <b>Příslušenství</b> (§ 510): samostatná vedlejší věc, kterou vlastník trvale užívá společně s hlavní věcí (ovladač k televizi, technický průkaz); vyvratitelná domněnka, že sdílí osud věci hlavní; dočasné odnětí povahu neruší.' },
    { q: 'Jaké věci jsou podle OZ nemovité? Je stavba samostatnou nemovitostí?', a: 'Pozemky, podzemní stavby se samostatným účelovým určením, věcná práva k nim, práva prohlášená zákonem za nemovitá (právo stavby, jednotka) a výjimečně věci, které nejsou součástí pozemku. Obecně je <b>stavba součástí pozemku</b> (superficies solo cedit), výjimky: dočasné stavby, inženýrské sítě, stroje s výhradou vlastnictví zapsané v katastru.' },
    { q: 'Pepa vyfotil na ulici Aničku a fotku zveřejnil na webu bez jejího souhlasu. Je to v pořádku?', a: 'Ne. Zachytit podobu člověka tak, že je možné určit totožnost, i ji rozšiřovat, lze jen s jeho <b>svolením</b> (ochrana osobnosti, podoby a soukromí). Anička se může domáhat upuštění od zásahu a odstranění následků, případně zadostiučinění (omluva, popř. peněžité). Výjimkou je zákonný důvod nebo výkon a ochrana jiných práv.' }
  ]
});
