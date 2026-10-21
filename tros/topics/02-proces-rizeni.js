registerTopic({
  id: 'proces-rizeni', order: 2, icon: '🔄', title: 'Řízení jako činnost a proces', src: 'podklady', lec: [2],
  where: 'Přednáška 2 + Cvičení 1 (úkoly 4–9)',
  summary: 'Co musí řídící pracovník zabezpečit, fáze procesu řízení (časové hledisko), stádia cyklu řízení (věcné hledisko), matice polí 11–33 a faktor času.',
  vocab: [
    { w: 'Proces řízení', x: 'Informační působení realizované v čase; nekončící proces zajišťující dynamickou rovnováhu OS.' },
    { w: 'Fáze procesu řízení', x: 'Časové hledisko: plánování, organizování, operativní řízení (vedení lidí).' },
    { w: 'Stádia cyklu řízení', x: 'Věcné hledisko: informace (I), rozhodování (RO), realizace (RE), kontrola (K).' },
    { w: 'JOP', x: 'Jednotka organizace práce – dále nedělitelná organizační jednotka (směna, skupina).' },
    { w: 'Operativní řízení', x: 'Neustálé porovnávání skutečnosti s požadovaným výsledkem a odstraňování odchylek; úzce spjato s vedením lidí.' }
  ],
  key: [
    '<b>Fáze</b> (čas): <b>plánování → organizování → operativní řízení</b>.',
    '<b>Stádia cyklu</b> (věc): <b>I → RO → RE → K</b>; v <b>každé</b> fázi proběhne celý cyklus.',
    'Pole <b>11–33</b> = fáze × stádium (např. 12 = rozhodování ve fázi plánování, 33 = kontrola v operativním řízení).',
    'Fáze ani stádia <b>nelze oddělit</b>; proces je nikdy nekončící.',
    'Vedení lidí neleží v jedné fázi – <b>prostupuje všemi</b>, dominuje v operativním řízení.'
  ],
  sections: [
    { title: 'Řízení jako činnost', blocks: [
      { t: 'p', x: 'Podnik chápeme jako organizační systém, v němž jsou nejdůležitějšími prvky <b>lidé</b>. Podnik neřídí informační systém – lidé jej jen využívají. Hlavním úkolem je <b>transformace vstupů na výstupy</b> (zboží a služby), které se zhodnotí na trhu.' },
      { t: 'ul', items: [
        '<b>Stanovení cílů</b> – současný a budoucí stav podniku.',
        '<b>Vedení lidí</b> – realizuje vedoucí společně s podřízenými.',
        '<b>Vytváření organizačního systému</b> z množiny prvků: lidí, věcí, prostředků, informací, zájmů, činností.',
        '<b>Získávání informací</b> – nutné k rozhodování.',
        '<b>Udržování kondice</b> – dobrý zdravotní stav a duševní připravenost.',
        '<b>Faktor času</b> – čas je omezující faktor.'
      ] },
      { t: 'table', head: ['Co musí ŘP zabezpečit', 'Konkrétně'], rows: [
        ['Chod podniku', 'transformace vstupů na výstupy; vlastní fungování, hospodářský výsledek (zisk), rozvoj podniku, dividendy majitelům'],
        ['Produkce', 'produkty plní očekávání zákazníků; cena × kvalita (produkce × obchod)'],
        ['Obchod a marketing', 'produkty snadno dostupné (internet × výdejní místa), vhodně nabízené, známé na trhu'],
        ['Následná péče', 'servis a reklamace, školení uživatelů']
      ] },
      { t: 'ul', items: [
        'K tomu musí ŘP <b>určit cíle a strategii</b> (strategické řízení), <b>zabezpečit výrobu</b> (množství, kvalita, termín) a <b>prodej a servis</b> (obchodní strategie, cena, forma prodeje, obchodní síť).',
        'A <b>získat kvalitní zaměstnance</b>: řídící pracovníky (zvyšovat kompetence), obchodníky (výkonnost), specialisty (odbornost), výkonné pracovníky (kvalifikaci).'
      ] },
      { t: 'tip', x: 'Řízení v tomto pojetí = <b>cílově usměrňovaná činnost</b>, respektive <b>koordinace celé řady činností</b>. Řídící pracovník vystupuje jako SŘ i jako OŘ (podle stupně řízení).' },
      { t: 'p', x: 'Slovo „výroba“ se nahrazuje výrazem <b>produkce</b>, protože výroba se pojí jen s hmotnou činností a podnik může produkovat i služby.' }
    ] },
    { title: 'Proces řízení: fáze a stádia', blocks: [
      { t: 'def', term: 'Proces řízení', x: 'Informační působení realizované v čase. Vzhledem k proměnlivému okolí se OS musí měnit, proto je řídící proces <b>nikdy nekončící</b>; jeho úkolem je zajišťovat dynamickou rovnováhu OS. Končí až s koncem OS.' },
      { t: 'versus', title: 'Dvě hlediska procesu řízení', cols: [
        { h: 'Časové: fáze procesu', items: ['<b>Plánování</b> (dlouhodobé cíle, projekt OS)', '<b>Organizování</b> (přiřazení zdrojů, vytvoření OJ)', '<b>Operativní řízení</b> = vedení lidí (realizace chování, odchylky)'] },
        { h: 'Věcné: stádia cyklu', items: ['<b>I</b> – informace (primární)', '<b>RO</b> – rozhodování', '<b>RE</b> – realizace (součástí je ovlivňování)', '<b>K</b> – kontrola (sekundární informace)'] }
      ], x: 'Fáze říkají, <i>kdy</i> co řešíme: nejdřív plánujeme (co chceme), pak organizujeme (čím a kým to zařídíme), pak operativně řídíme (denní realizace). Stádia říkají, <i>co</i> při tom děláme: sbíráme informace, rozhodujeme, uskutečňujeme rozhodnutí a kontrolujeme, zda dopadlo, jak mělo. Proto se v každé ze tří fází projde celý cyklus I–RO–RE–K. Příklad: i při pouhém plánování směny na týden musím mít informace o lidech, rozhodnout o rozpisu, rozpis zrealizovat a ověřit, že funguje.' },
      { t: 'svg', title: 'Cyklus řízení – stádia I → RO → RE → K', x: TROS.cyklus(), cap: 'Kontrola poskytuje sekundární informaci o výsledném chování; je-li odlišné od cílového, koriguje se původní rozhodnutí, nové rozhodnutí se oznámí a cyklus se opakuje (typicky dva cykly pro dosažení cílového chování).' },
      { t: 'tip', x: 'Jednotlivé fáze a stádia <b>nelze oddělit</b>. Každá fáze obsahuje celý cyklus. Systémově: plánování → dlouhodobé cíle a projekt organizačního systému; organizování → organizační normy a vytváření organizačních jednotek; operativní řízení → operativní cíle a realizace chování.' }
    ] },
    { title: 'Matice fází a stádií (pole 11–33)', blocks: [
      { t: 'svg', title: 'Integrace časového a věcného hlediska', x: TROS.matice() },
      { t: 'ul', items: [
        '<b>Plánování (11–13)</b> provádí vyšší stupně řízení, často kolektivním rozhodnutím užšího vedení. Vstup: informace o trhu, konkurenci, kapacitě trhu. Pole 12 = výběr jedné z variant plánu → schválení.',
        '<b>Organizování (21–23)</b> zajišťuje vyšší stupeň se zástupci závodů a provozů, kteří budou produkt realizovat. Výsledkem je plán realizace: finance (vlastní, cizí), technologie a technologický postup, technické vybavení, kvalifikace lidí, počet směn, místo výroby, nákup a prodej, příprava lidí.',
        '<b>Operativní řízení (31–33)</b> je hlavní činností nižších stupňů. Pole 31 = plánování směn a úkolů (JOP) – důležité pro motivační systém (např. samofinancování provozu a hmotná zainteresovanost); 32 = rozhodování při odchylkách od plánu; 33 = kontrola kvality, množství, materiálu, postupů, bezpečnosti práce.'
      ] },
      { t: 'p', x: 'Přípravu (11–23) lze oddělit od realizace (31–33). Do pole 11 vstupují informace o trhu, do 21 informace o zdrojích, do 31 informace o stavu zdrojů a o lidech.' },
      { t: 'warn', x: 'Operativní řízení je spjato s <b>vedením lidí</b>: výběr a hodnocení pracovníků, motivace a odměňování, pracovní podmínky, sociální klima, seberealizace. Samostatnou „čtvrtou fází“ vedení lidí není – prostupuje všemi fázemi (skripta DvR).' }
    ] },
    { title: 'Faktor času v procesu řízení', blocks: [
      { t: 'timeline', title: 'Časová posloupnost přípravy nového projektu', items: [
        { when: 't₀', h: 'Informace', x: 'permanentní analýza trhu – nejen informace, ale i čas (náskok před konkurencí)' },
        { when: 't₂', h: 'Rozhodování ve fázi plánování', x: 'doba závisí na schvalování (zasedá-li představenstvo měsíčně, prodlužuje se)' },
        { when: 't₃', h: 'Kontrola varianty plánu', x: 'informaci o rozhodnutí lze předběžně využít při posuzování zdrojů' },
        { when: 't₄–t₆', h: 'Organizování', x: 'plán organizačního uspořádání, rozhodnutí o zdrojích a případně o změně struktur, kontrola a schválení' },
        { when: 't₇–t₉', h: 'Operativní řízení', x: 'harmonogram, schválení postupu, kontrola reálnosti; operativní řízení trvá po celou dobu projektu' }
      ] },
      { t: 'ul', items: [
        'ŘP často <b>operativně řídí několik projektů zároveň</b> (nový i již rozjeté) – proto je správné zacházení s časem jednou z klíčových dovedností (viz Time management).',
        'Čím je podnik menší a má méně stupňů řízení a specialistů, tím se činnosti kumulují na majiteli → přepracování, <b>krize přímého řízení</b> (Greinerův model).'
      ] }
    ] }
  ],
  mistakes: [
    'Plést <b>fáze</b> (plánování, organizování, operativní řízení) se <b>stádii</b> cyklu (I, RO, RE, K).',
    'Tvrdit, že cyklus I–RO–RE–K se týká jen jedné fáze – probíhá v <b>každé</b> fázi.',
    'Brát vedení lidí jako samostatnou fázi – prostupuje všemi, převládá v operativním řízení.',
    'Zaměnit pole matice: první číslice = fáze (1 plánování, 2 organizování, 3 operativní řízení), druhá = stádium (1 I, 2 RO, 3 RE+K).'
  ],
  qa: [
    { q: 'Co zahrnuje řízení jako činnost?', a: 'Stanovení cílů, vedení lidí, vytváření organizačního systému, získávání informací, udržování kondice a respektování faktoru času.' },
    { q: 'Definujte proces řízení.', a: 'Informační působení realizované v čase; nikdy nekončící proces, který zajišťuje dynamickou rovnováhu OS (končí s koncem OS). Má časové hledisko (fáze) a věcné hledisko (stádia cyklu).' },
    { q: 'Vyjmenujte fáze procesu řízení a stádia cyklu řízení.', a: 'Fáze: plánování, organizování, operativní řízení (vedení lidí). Stádia: informace, rozhodování, realizace, kontrola.' },
    { q: 'Jak se prolínají fáze a stádia?', a: 'V každé fázi probíhá celý cyklus I–RO–RE–K, takže vzniká matice 3 × 3 (pole 11–33). Fáze ani stádia nelze oddělit. Např. 12 = rozhodování ve fázi plánování (výběr varianty plánu), 23 = kontrola ve fázi organizování před zahájením, 33 = kontrola výroby a služeb při operativním řízení.' },
    { q: 'Proč jsou potřeba dva cykly řízení pro zajištění cílového chování?', a: 'Kontrola prvního cyklu zjistí odchylku od cílového chování; nové rozhodnutí (korekce) se oznámí a zrealizuje ve druhém cyklu. Cyklů může být víc, než se cílového chování dosáhne.' },
    { q: 'Co musí ŘP zabezpečit pro chod podniku?', a: 'Transformaci vstupů na výstupy, hospodářský výsledek a rozvoj, produkty splňující očekávání zákazníků, jejich dostupnost, nabízení a známost a následnou péči (servis, školení). K tomu cíle a strategii, produkci, prodej a servis a kvalitní zaměstnance.' },
    { q: 'Proč je důležitý faktor času v procesu řízení?', a: 'Informace se získávají s předstihem (permanentní analýza trhu dává čas i náskok před konkurencí), délka rozhodování závisí na schvalování a ŘP musí souběžně operativně řídit víc projektů; špatné hospodaření s časem vede k přetížení.' }
  ]
});
