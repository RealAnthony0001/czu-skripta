registerTopic({
  id: 'struktury', order: 6, icon: '🏢', title: 'Organizační a řídící struktury, řídící kapacita', src: 'podklady', lec: [5],
  where: 'Přednáška 5 + Cvičení 4–5 + skripta TŘOS kap. 6–8',
  summary: 'Organizační stupně, jednotky a JOP, typy organizačních struktur, řídící struktura (americký a německý model, liniová, funkcionální, divizionální, projektová, procesní) a výpočet řídící kapacity.',
  vocab: [
    { w: 'Organizační jednotka (OJ)', x: 'Skupina pracovníků s hmotnými prvky, která realizuje výrobní proces nebo jeho část; v čele stojí jediný přímý vedoucí.' },
    { w: 'Organizační stupeň', x: 'OJ stejného typu, přibližně stejné velikosti a významu na stejné rozlišovací úrovni (podnik, divize, závod, provoz).' },
    { w: 'JOP', x: 'Jednotka organizace práce – dále nedělitelná OJ; netvoří samostatný organizační stupeň.' },
    { w: 'Řídící struktura', x: 'Řídící pracovníci s informačními vazbami (pravomoc, kompetence, nadřízenost a podřízenost, spolupráce).' },
    { w: 'Řídící kapacita (rozpětí řízení)', x: 'Počet přímo podřízených pracovníků jednomu řídícímu pracovníkovi.' },
    { w: 'SOJ / SBU', x: 'Samofinancující se organizační jednotka – ekonomicky samostatná, právně nikoli.' }
  ],
  key: [
    '<b>Organizační stupně:</b> OS1 podnik → OS2 divize → OS3 závod → OS4 provoz; pod nimi JOP (ne stupeň).',
    'Řídící struktura má <b>stejný počet stupňů</b> jako organizační struktura.',
    'Typy org. struktur: podle <b>činnosti, výrobků, území</b>, kombinovaná, <b>pružné (maticová, procesní)</b>; Améba.',
    'Řídící struktury: <b>liniová × štábní, funkcionální, divizionální, projektová, procesní</b>; americký × německý model.',
    '<b>Řídící kapacita: q = ⁿ√(a₀ / (ρ·a<sub>v</sub>))</b>; sq = tq ideál, sq &gt; tq přetížení, sq &lt; tq nadbytek ŘP.'
  ],
  sections: [
    { title: 'Organizační struktura', blocks: [
      { t: 'svg', title: 'Organizační stupně velkého podniku', x: TROS.orgStupne() },
      { t: 'def', term: 'Organizační stupeň', x: 'OJ stejného typu, přibližně stejné velikosti a stejného významu na stejné rozlišovací úrovni; relativně materiálně, energeticky, organizačně a ekonomicky samostatný druh OJ: <b>podnik, divize, závod, provoz</b>.' },
      { t: 'def', term: 'Organizační jednotka a JOP', x: 'OJ je dána určitým počtem výkonných (manuálních) pracovníků s určitým množstvím výrobních prostředků, realizuje výrobní proces nebo jeho část a vede ji jediný přímý vedoucí. <b>JOP</b> = dále nedělitelná OJ (jednotka organizace práce, např. směna).' },
      { t: 'p', x: '<b>Faktory ovlivňující tvorbu nebo změnu organizační struktury</b>' },
      { t: 'ul', items: [
        'velikost firmy a její struktura',
        'používaná technika a technologie',
        'vliv prostředí',
        'právní forma firmy',
        'úroveň komunikačních a informačních prostředků',
        'strategie a cíle firmy',
        'firemní kultura'
      ] },
      { t: 'table', head: ['Počet stupňů', 'Kdy', 'Spolehlivost (při 0,90 na stupeň)'], rows: [
        ['1 stupeň (podnik → JOP)', 'malý, začínající podnik řízený z centra (majitel); malá ztráta informací, vysoká aktivita lidí, vysoká spolehlivost', '0,90'],
        ['2 stupně (podnik → provoz → JOP)', 'menší podnik', '0,81'],
        ['3 stupně (podnik → závod → provoz)', 'střední a velké podniky – optimum', '0,73'],
        ['4 stupně (podnik → divize → závod → provoz)', 'velké podniky', '0,66']
      ] },
      { t: 'p', x: 'Každý další stupeň <b>snižuje spolehlivost</b> (sériové spojení – násobí se) a <b>vlastní aktivitu</b> pracovníků: čím dál od vzniku nápadu a pokynů, tím víc je člověku lhostejno (ve skriptech klesá aktivita při k = 0,10 z 1,00 přes 0,90 a 0,70 na 0,40 na 4. stupni = nepřijatelné). Optimum středních a velkých podniků je proto <b>třístupňová struktura</b>.' },
      { t: 'tip', x: 'U velkých podniků se sériové spojení stupňů částečně přerušuje <b>samofinancováním</b>: divize nebo závod jsou ekonomicky samostatné (SOJ/SBU), cíle se zadávají v ekonomických ukazatelích, takže se neztrácí informace a aktivita. Nemají právní samostatnost; provoz je na to zpravidla příliš malý.' }
    ] },
    { title: 'Typy organizačních struktur', blocks: [
      { t: 'table', head: ['Typ (podle)', 'Princip', 'Výhody', 'Nevýhody'], rows: [
        ['<b>Podnikových funkcí</b> (výroba, obchod, služby, účtárna, štáb)', 'jednotky podle činnosti; vhodné pro menší a střední podniky', 'obchod prodává veškerou produkci, účtárna zpracuje všechno z jednoho místa', 'nehodí se při složité výrobě a specialistech v obchodě'],
        ['<b>Výrobků (produktová)</b>', 'OJ podle produktů (např. SW pro účetnictví, bankovnictví, docházku) + servis', 'jednoznačná odpovědnost a pravomoci, jednoduchá řídící struktura', 'uzavřenost jednotek, zkušenosti se nepřenášejí → nový stupeň „vývoj“'],
        ['<b>Území</b> (územní)', 'OJ podle lokality, typické pro zemědělské podniky (region → oblast → farma); často SOJ', 'decentralizace, aktivita a motivace, výchova ŘP generalistů', 'uzavřenost, horší horizontální spolupráce'],
        ['<b>Odvětvová / druh výroby</b>', 'podle druhu výroby, odvětví', '', ''],
        ['<b>Kombinovaná</b>', 'kombinace předchozích podle potřeb podniku', '', '']
      ] },
      { t: 'versus', title: 'Pružné organizační struktury', cols: [
        { h: 'Maticová (projektová)', items: ['vertikální liniová struktura + dočasné horizontální projektové týmy', 'tým tvoří lidé z vývoje, výroby, servisu, obchodu; vedoucí projektu', '+ spolupráce, přenos zkušeností, rychlá zpětná vazba', '− <b>dvojí podřízenost</b> členů týmu, slabé pravomoci vedoucího projektu'] },
        { h: 'Procesní', items: ['vychází z podnikových procesů (napříč jednotkami a stupni)', 'procesní týmy vedle klasických OJ', '+ měřitelnost procesů, jasný začátek a konec, IT podpora', '− odpor starších ŘP, nutnost vzdělávání, nevychovává generalisty; hrozí chaos'] }
      ], x: 'Maticová struktura využívá lidi z trvalých oddělení pro dočasný projekt: člen týmu má dva šéfy – kmenového vedoucího a vedoucího projektu, a to je hlavní zdroj konfliktů. Procesní struktura se dívá na podnik jako na toky činností od potřeby zákazníka po dodání produktu; zrychluje je a odstraňuje duplicity, ale vyžaduje velkou změnu myšlení.' },
      { t: 'ul', items: [
        '<b>Améba:</b> OJ nemají stálý počet zaměstnanců ani stálé technické vybavení; zařízení se pronajímá a lidé získávají na určitou dobu. Když améba nefunguje, zaniká – zaměstnanci jsou bez práce i bez mzdy a pokud si je nevybere jiná améba, odcházejí z podniku.',
        'Další formy obchodních sítí: pobočková a franšízová síť.',
        '<b>Neexistuje ideální, ale optimální organizační struktura</b> – existuje konečná množina správných řešení (Hron, Drucker: neexistuje „jediná správná organizace“).'
      ] },
      { t: 'ex', x: '<b>Cvičení – návrh struktury velkého výrobního podniku</b> (návrh doplněn; podle zadání): <b>Divize 1 – strojírenská</b> (závody zemědělské techniky, vysokozdvižných vozíků, bezpečnostních pásů), <b>Divize 2 – agrochemie a krmiva</b> (závody krmiv, biotechnologický, hnojiv), <b>Divize 3 – stavební činnost</b>, <b>Divize 4 – zemědělská prvovýroba a zpracování</b> (závody RV a ŽV). Pod závody provozy podle produktů (např. u vozíků: podvozky, elektromotory, hydraulika, kompletace). Pak se podle tohoto schématu odvodí řídící struktura. Platí PS1 → určuje OSS → určuje ŘSS (SPŘ).' }
    ] },
    { title: 'Řídící struktura', blocks: [
      { t: 'def', term: 'Řídící struktura', x: 'Tvoří ji <b>řídící pracovníci</b>, kteří mají mezi sebou informační vazby: vztahy pravomoci, kompetencí, nadřízenosti a podřízenosti a spolupráce. Řídící jednotka = řídící pracovník s podřízenými. Řídící struktura má stejný počet stupňů jako organizační struktura.' },
      { t: 'table', head: ['Hledisko', 'Organizační struktura', 'Řídící struktura'], rows: [
        ['Prvky', 'organizační jednotky (smíšené prvky L + HP)', 'řídící pracovníci (lidé)'],
        ['Vazby', 'smíšené (HE + I)', 'informační (pravomoc, nadřízenost, spolupráce)'],
        ['Subsystém', 'OSS', 'ŘSS (především subsystém přímého řízení SPŘ)'],
        ['Stupně', 'podnik – divize – závod – provoz', 'GŘ (předseda představenstva) – ředitel divize – ředitel závodu – vedoucí provozu']
      ] },
      { t: 'tip', x: 'Vztah stupňů: OS1 podnik ↔ generální ředitel / předseda představenstva; OS2 divize ↔ ředitel divize (náměstek GŘ); OS3 závod ↔ ředitel závodu; OS4 provoz ↔ vedoucí provozu; pod ním JOP.' },
      { t: 'versus', title: 'Americký × německý model vrcholového řízení', cols: [
        { h: 'Americký (jednostupňový)', items: ['majitelé na valné hromadě volí <b>představenstvo a dozorčí radu</b>', 'představenstvo volí svého předsedu a <b>jmenuje generálního ředitele</b>', 'GŘ jmenuje ředitele závodů', 'předseda představenstva ≠ GŘ (oddělení)'] },
        { h: 'Německý (dvoustupňový)', items: ['valná hromada volí členy <b>dozorčí rady</b>', '<b>dozorčí rada jmenuje představenstvo</b> (výkonný orgán), předseda DR je volen DR', 'předseda představenstva je zpravidla i GŘ', 'ředitele závodů a vedoucí provozu jmenuje předseda/GŘ (vedoucí provozů na návrh ŘZ)'] }
      ], x: 'Rozdíl je v tom, kdo koho kontroluje. V německém modelu stojí dozorčí rada nad představenstvem a jmenuje ho, takže kontrola je silná; v americkém modelu představenstvo (které volí valná hromada) jmenuje generálního ředitele a dozorčí rada vedle něj plní kontrolní roli. V obou modelech majitelé (držitelé akcií, podílů) rozhodují na valné hromadě.' }
    ] },
    { title: 'Typy řídících struktur', blocks: [
      { t: 'table', head: ['Typ', 'Charakteristika'], rows: [
        ['<b>Liniové × štábní ŘP</b> (podle vztahu k transformačním procesům)', 'linie GŘ → ředitel závodu → vedoucí provozu řídí výkonné pracovníky a transformační proces; štábní útvary (právní oddělení, IT, sekretariát) radí a podporují vedení, bez přímé pravomoci nad linií'],
        ['<b>Funkcionální</b> (útvarová)', 'vedení podniku → ředitelé funkcí (výroba, ekonomika, obchod) → vedoucí oddělení; každá funkce má svou liniovou strukturu (2–3 stupně)'],
        ['<b>Divizionální</b> (věcná)', 'ředitelé divizí; každá divize má vlastní výrobu, prodej, finance (plánovač, ekonom, právník); liniové uspořádání'],
        ['<b>Projektová</b> (pružná)', 'vedení podniku (představenstvo, GŘ, štáb) + ředitelé vývoje, výroby, servisu, obchodu; pro projekty vedoucí projektů P1…Pn s pracovníky z jednotlivých útvarů'],
        ['<b>Procesní</b>', 'rozšíření procesu řízení: <b>sponzor procesu</b> (vedení), <b>koordinátor procesu</b> a <b>vlastníci</b> podprocesů; vedle ředitelů výroby, vývoje, servisu, obchodu']
      ] },
      { t: 'versus', title: 'Strmá × plochá řídící struktura', cols: [
        { h: 'Strmá', items: ['mnoho stupňů, nízká řídící kapacita', '+ těsné vedení a kontrola, rychlá komunikace s podřízenými', '− zásahy do práce nižších stupňů, ztráta informací, mnoho úrovní'] },
        { h: 'Plochá', items: ['málo stupňů, vysoká řídící kapacita', '+ vyžaduje delegování, jasná strategie, samostatnost podřízených', '− přetížení ŘP, ztráta přehledu (slabší přímá motivace), nároky na kvalitu ŘP'] }
      ], x: 'Strmá struktura znamená mnoho „šéfů nad šéfy“, kteří mají jen pár podřízených: dobře je kontrolují, ale informace se při průchodu stupni zkreslují a podřízení nemají volnost. Plochá struktura má málo stupňů a každý šéf mnoho podřízených: lidé mají volnost a zodpovědnost, ale šéf nestíhá a musí hodně delegovat.' }
    ] },
    { title: 'Řídící kapacita', blocks: [
      { t: 'def', term: 'Řídící kapacita (rozpětí řízení)', x: '<b>q</b> = počet přímo podřízených pracovníků jednomu řídícímu pracovníkovi. <b>Skutečná</b> řídící kapacita <b>sq</b> je skutečný počet podřízených (určuje ji organizační struktura); <b>teoretická</b> <b>tq</b> je počet, který ŘP může efektivně uřídit.' },
      { t: 'ul', items: [
        'Teoretickou kapacitu ovlivňují: prostorové rozmístění podřízených, úroveň delegování, osobní vlastnosti, charakter práce (složitost, podobnost), motivační mechanismus, charakter OJ, úroveň organizačních norem, <b>styl řízení</b> (q roste od autokratického k týmovému stylu).'
      ] },
      { t: 'table', head: ['Stav', 'Význam'], rows: [
        ['sq = tq', 'ideální (cílový, ale ojedinělý) stav'],
        ['sq &gt; tq', 'řídících pracovníků je nedostatek – přetížení ŘP (častá situace)'],
        ['sq &lt; tq', 'ŘP je nadbytek – vysoké režijní náklady']
      ] },
      { t: 'law', ref: 'Průměrná (orientační teoretická) řídící kapacita', x: '<b>q = ⁿ√( a₀ / (ρ · a<sub>v</sub>) )</b>, kde <b>n</b> = počet stupňů řízení, <b>a₀</b> = počet výkonných (manuálních) pracovníků bez rozhodovací pravomoci, <b>a<sub>v</sub></b> = počet vedoucích na nejvyšším stupni liniového řízení, <b>ρ</b> = koeficient rozšířené řídící kapacity na nejnižším stupni. Předpokládá stejnou kapacitu q na všech vyšších a středních stupních a <b>rozšířenou</b> (ρ·q) na nejnižším stupni.' },
      { t: 'ul', items: [
        'Počet stupňů: <b>n = (log a₀ − log a<sub>v</sub> − log ρ) / log q</b>.',
        'Celkový počet řídících pracovníků: <b>a<sub>r</sub> = (1 − qⁿ) / (1 − q)</b> (součet geometrické řady 1 + q + … + qⁿ⁻¹; při více vrcholových pracovnících násobeno a<sub>v</sub>). Např. q = 6, n = 3: 1 + 6 + 36 = 43.',
        'Vztah: a₀ = a<sub>v</sub> · ρ · qⁿ.'
      ] },
      { t: 'ex', x: '<b>Zadání ze slajdu:</b> 468 manuálních pracovníků, 3 stupně řízení, průměrná JOP 12,8, ředitel řídí přímo 5 podřízených. Dosadíme a₀ = 468, n = 3, a<sub>v</sub> = 5. Koeficient ρ zadán není; z podmínky <b>velikost JOP = ρ·q</b> (tabulka skript: q = 6 → JOP 12 → ρ = 2) vyplývá ρ = 12,8 / q. Pak q³ = 468 / (5 · 12,8 / q) → q² = 468 / 64 = 7,3125 → <b>q ≈ 2,70</b>, ρ ≈ 4,73. Kontrola: 5 · 4,73 · 2,70³ ≈ 468. Počet řídících pracovníků na nejnižším stupni = 468 / 12,8 ≈ 36,6.' },
      { t: 'warn', x: 'Slajd neuvádí řešení ani hodnotu ρ. Výše je odvozeno z definice ρ ve skriptech; pokud cvičící počítá s pevným ρ = 2 (q = ³√(468/10) ≈ 3,60), ověř si, jak to zadání chce. Skripta navíc zdůrazňují, že průměrná/orientační q je jen hrubá informace – přesnější je sledovat q po jednotlivých stupních.' },
      { t: 'table', head: ['Kritérium obtížnosti (stupně a–e)', 'Body', 'Ředitel závodu', 'Generální ředitel'], rows: [
        ['1. Podobnost funkcí podřízených jednotek (shodné → zásadně odlišné)', '1–5', '4', '6'],
        ['2. Rozmístění podřízených (pohromadě → velký územní rozptyl)', '1–5', '3', '4'],
        ['3. Složitost a náročnost činností (jednoduché → velmi složité, rozdílné)', '2–10', '6', '8'],
        ['4. Plánování (minimální → velmi náročné)', '2–10', '6', '8'],
        ['5. Organizování (minimum vazeb → složité, neopakovatelné)', '2–10', '8', '10'],
        ['6. Vedení (minimální dohled → stálý dohled)', '2–10', '6', '2'],
        ['7. Kompetence/motivace podřízených', '2–10', '4', '4'],
        ['<b>Součet</b>', '', '<b>37 → tq = 6</b>', '<b>42 → tq = 6</b>']
      ] },
      { t: 'warn', x: 'Skripta u 1. kritéria uvádějí stupnici 1–5, ale generální ředitel je ohodnocen 6 – pravděpodobně překlep; součty 37 a 42 sedí právě s hodnotou 6. Převod bodů na tq: 55–60 → 3; 49–54 → 4; 43–48 → 5; <b>37–42 → 6</b>; 31–36 → 7; 25–30 → 8; 19–24 → 9; 12–18 → 10 (na nejnižším stupni 2× víc: 6, 8, 10, 12, 14, 16, 18, 20).' }
    ] }
  ],
  mistakes: [
    'Považovat JOP za organizační stupeň – je to nejmenší OJ, ale samostatný stupeň netvoří.',
    'Zaměnit organizační a řídící strukturu (OJ vs. řídící pracovníci); obě mají stejný počet stupňů, ale jiné prvky.',
    'Zaměnit americký a německý model: v německém <b>dozorčí rada jmenuje představenstvo</b>.',
    'Tvrdit, že sq &gt; tq znamená nadbytek ŘP – je to nedostatek a přetížení.'
  ],
  qa: [
    { q: 'Co je organizační stupeň, organizační jednotka a JOP?', a: 'Stupeň = OJ stejného typu, velikosti a významu na stejné rozlišovací úrovni (podnik, divize, závod, provoz). OJ = skupina pracovníků s výrobními prostředky pod jedním přímým vedoucím. JOP = dále nedělitelná OJ, netvoří samostatný stupeň.' },
    { q: 'Jaké faktory ovlivňují tvorbu organizační struktury?', a: 'Velikost a struktura firmy, technika a technologie, vliv prostředí, právní forma, úroveň komunikačních a informačních prostředků, strategie a cíle, firemní kultura.' },
    { q: 'Vyjmenujte typy organizačních struktur.', a: 'Podle počtu stupňů, podle činnosti (funkcí), podle výrobků, podle území, odvětvová, kombinovaná, pružné (maticová, procesní), améba, pobočková a franšízová síť.' },
    { q: 'Proč je optimum třístupňová organizační struktura?', a: 'S každým stupněm klesá spolehlivost (0,90 → 0,81 → 0,73 → 0,66) a vlastní aktivita pracovníků (4. stupeň je nepřijatelný); velké podniky ztrátu mírní samofinancováním divizí/závodů.' },
    { q: 'Jaký je rozdíl mezi organizační a řídící strukturou?', a: 'Organizační struktura tvoří organizační jednotky (smíšené prvky), řídící struktura řídící pracovníky s informačními vazbami pravomoci a podřízenosti. Mají stejný počet stupňů. Podnik → GŘ, divize → ředitel divize, závod → ředitel závodu, provoz → vedoucí provozu.' },
    { q: 'Porovnejte americký a německý model řídící struktury.', a: 'Americký: valná hromada volí představenstvo a dozorčí radu, představenstvo jmenuje GŘ. Německý: valná hromada volí dozorčí radu, ta jmenuje představenstvo (výkonný orgán), předseda představenstva je většinou GŘ.' },
    { q: 'Vyjmenujte typy řídících struktur.', a: 'Liniové a štábní, funkcionální, divizionální, projektová, procesní (sponzor, koordinátor, vlastníci procesů); dále strmá a plochá podle řídící kapacity.' },
    { q: 'Co je řídící kapacita a jak se počítá?', a: 'Počet přímo podřízených. Průměrná/orientační q = ⁿ√(a₀ / (ρ·a<sub>v</sub>)); skutečná sq vs. teoretická tq (bodová metoda: sečtou se body 7 kritérií a podle tabulky se určí tq). sq = tq ideál; sq &gt; tq přetížení; sq &lt; tq nadbytek ŘP.' },
    { q: 'Jaké jsou výhody a nevýhody strmé a ploché struktury?', a: 'Strmá: těsné vedení a kontrola, rychlá komunikace × zásahy do práce podřízených, ztráta informací. Plochá: samostatnost a delegování, jasná strategie × přetížení, ztráta přehledu, vysoké nároky na ŘP.' }
  ]
});
