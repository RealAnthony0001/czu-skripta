registerTopic({
  id: 'system', order: 3, icon: '⚙️', title: 'Systém, struktura a typologie systémů', src: 'podklady', lec: [3],
  where: 'Přednáška 3 + Cvičení 2',
  summary: 'Definice systému S = {A, R}, okolí, struktura a složitost, agregace a desagregace, integrace a diferenciace, typologie systémů a jejich chování.',
  vocab: [
    { w: 'Systém', x: 'Abstrakce reálného objektu definovaná s ohledem na cíl prvky a vazbami mezi nimi: S = { A, R }.' },
    { w: 'Prvek (A)', x: 'Část systému; množina prvků A.' },
    { w: 'Vazba (R)', x: 'Vztah/interakce mezi prvky; množina vazeb R.' },
    { w: 'Rozlišovací úroveň', x: 'Úroveň podrobnosti, s jakou systém zobrazujeme; záleží na účelu pozorovatele.' },
    { w: 'Agregace / desagregace', x: 'Slučování prvků (snižuje rozlišovací úroveň) / dělení prvků (zvyšuje ji).' },
    { w: 'Integrace / diferenciace', x: 'Spojování více systémů do jednoho / dělení systému (mezisystémové operace).' },
    { w: 'Deterministický × stochastický', x: 'Reakce jednoznačně určená podnětem × reakce jen s určitou pravděpodobností.' }
  ],
  key: [
    '<b>S = { A, R }</b> – konečná množina prvků a vazeb podřízená účelové funkci.',
    'Systém lze zavést na <b>jakémkoli objektu</b>; je to <b>abstrakce</b> vždy vzhledem k cíli.',
    'Počet vazeb v systému z <b>n</b> prvků: <b>minimálně n − 1, maximálně n²</b>.',
    '<b>Agregace</b> = slučování prvků (↓ rozlišovací úroveň); <b>desagregace</b> = dělení (↑).',
    'Podnik je systém <b>reálný, relativně izolovaný, redukovaný, velmi složitý, stochastický, adaptivní, s cílovým chováním</b>.'
  ],
  sections: [
    { title: 'Pojem systém', blocks: [
      { t: 'def', term: 'Systém', x: '„Systém je určitou abstrakcí reálného objektu, kterou je možné definovat při respektování vytčeného cíle určitými prvky (vlastnostmi) a vazbami mezi nimi.“ (Hron, 2014) Symbolicky <b>S = { A, R }</b>, kde A je množina prvků a R množina vazeb.' },
      { t: 'ul', items: [
        'konečná množina prvků navzájem propojená konečnou množinou vazeb, spojení je podřízeno určité <b>účelové funkci</b>;',
        '<b>abstrakce</b> reálného objektu – prvky a vazby volíme podle sledovaného cíle;',
        'systém můžeme zavést <b>na jakémkoli objektu</b> (podnik, školní třída, počítač, les).'
      ] },
      { t: 'svg', title: 'Systém a jeho okolí', x: TROS.systemOkoli(), cap: 'Okolí působí na vstupech podněty (akce), systém reaguje na výstupech (reakce); ty zpětně působí na okolí.' },
      { t: 'versus', cols: [
        { h: 'Užší okolí', items: ['vždy podstatné', 'přímo ovlivňuje a je ovlivňováno systémem', 'podnik: zákazníci, dodavatelé, konkurence, banky, úřady'] },
        { h: 'Širší okolí', items: ['nepodstatné (méně významné)', 'působí jen zprostředkovaně'] }
      ], x: 'Okolí rozdělujeme podle významu pro náš cíl. Podstatné okolí (u podniku zákazníci, konkurenti, dodavatelé, finanční instituce, úřady) musíme sledovat neustále, protože určuje, co podnik může dělat. Nepodstatné okolí do systému nezahrnujeme, ale může se časem stát podstatným (např. nový zákon nebo technologie).' },
      { t: 'ul', items: [
        '<b>Kalendář</b> – definované časové intervaly, v nichž působí akce/reakce.',
        '<b>Repertoár</b> – množina možných akcí/reakcí.',
        'Chování podniku je výslednicí <b>jeho cílů, struktury a vlivu okolí</b> (HE a I vstupů).'
      ] }
    ] },
    { title: 'Struktura a složitost systému', blocks: [
      { t: 'p', x: 'Strukturu systému určuje <b>počet prvků</b>, <b>počet vazeb</b>, jejich vzájemný vztah a <b>typ</b> prvků a vazeb.' },
      { t: 'def', term: 'Složitost', x: 'Závisí na vztahu mezi počtem prvků a vazeb. Pro <b>n</b> prvků je počet vazeb v intervalu <b>[n − 1, n²]</b>: minimálně n − 1 (jinak by prvky nebyly propojeny), maximálně n² (každý s každým včetně zpětných vazeb na sebe).' },
      { t: 'table', head: ['Vazba', 'Charakter', 'Poznámka'], rows: [
        ['Přímá (S<sub>ij</sub>)', 'otevřená, sériová', 'prvek A<sub>i</sub> → A<sub>j</sub>'],
        ['Nepřímá (S<sub>ik</sub>)', 'otevřená, sériová', 'přes zprostředkující prvek A<sub>j</sub>'],
        ['Rozvodná (P<sub>ijk</sub>)', 'otevřená, paralelní', 'jeden prvek vysílá do dvou'],
        ['Svodná (P<sub>ijk</sub>)', 'otevřená, paralelní', 'dva prvky vstupují do jednoho'],
        ['Vlastní zpětná (Z<sub>jj</sub>)', 'uzavřená', 'prvek zpětně působí sám na sebe'],
        ['Přímá zpětná (Z<sub>ji</sub>)', 'uzavřená', 'výstup A<sub>j</sub> se vrací na vstup A<sub>i</sub>']
      ] },
      { t: 'tip', x: 'Strukturu zapisujeme <b>blokovým schématem</b> (prvky a šipky) nebo <b>maticí vazeb</b> (řádky a sloupce = prvky, jednička = existující vazba).' }
    ] },
    { title: 'Rozlišovací úroveň, agregace a integrace', blocks: [
      { t: 'def', term: 'Rozlišovací úroveň', x: 'Úroveň podrobnosti zobrazení systému. O počtu rozlišených prvků (subsystémů) rozhoduje <b>účel, který pozorovatel sleduje</b>. Mění se procesem agregace/desagregace.' },
      { t: 'svg', title: 'Agregace × desagregace', x: TROS.agregace() },
      { t: 'versus', title: 'Dvě skupiny operací', cols: [
        { h: 'Uvnitř systému', items: ['<b>agregace</b> – slučování prvků, snižování rozlišovací úrovně', '<b>desagregace</b> – dělení prvků, zvyšování rozlišovací úrovně', 'nejvyšší stupeň agregace = systém jako <b>černá skříňka</b>'] },
        { h: 'Mezi systémy', items: ['<b>integrace</b> – spojování více systémů (fúze, koupě firem)', '<b>diferenciace (desintegrace)</b> – dělení systému (např. firmy podle produkce)'] }
      ], x: 'Agregace je jako zoomování mapy: z plánu města vidíme každou ulici, z mapy státu už jen města. Podnik můžeme ve „vzdálené“ podobě vidět jako jedinou černou skříňku (známe vstupy a výstupy, ne vnitřek) – např. konkurenční podnik. Když potřebujeme najít příčinu problému, desagregujeme a rozlišíme jednotlivé subsystémy. Integrace a diferenciace se naopak týkají celých systémů: koupí konkurenta vznikne jeden větší systém, rozdělením koncernu několik menších.' },
      { t: 'tip', x: 'Zvýšením rozlišovací úrovně se z podniku (1. úroveň) dostaneme k subsystémům 1. řádu (2. úroveň), 2. řádu (3. úroveň) atd. – viz téma Organizační systém.' }
    ] },
    { title: 'Typologie systémů', blocks: [
      { t: 'table', head: ['Hledisko', 'Typy', 'Podnik'], rows: [
        ['Vztah k objektům', 'abstraktní (matematické a ekonomické modely) × <b>reálné</b>', 'reálný'],
        ['Vztah k okolí', 'uzavřené (laboratorní experimenty) × otevřené (plně napojené na okolí) × <b>relativně izolované</b>', 'relativně izolovaný'],
        ['Podrobnost zkoumání', 'absolutní (hypotetické, zachycují všechny vlastnosti – nepoužitelné) × <b>redukované</b> (jen podstatné prvky a vazby)', 'redukovaný'],
        ['Faktor času', '<b>prospektivní</b> (simulační, prognostické modely) × <b>retrospektivní</b> (účetnictví)', 'obojí'],
        ['Složitost', 'jednoduché (termostat) × složité (počítač, mobil) × <b>velmi složité</b> (trh, národní hospodářství)', 'velmi složitý'],
        ['Typ chování', 'deterministické (technologická linka v omezeném čase) × <b>stochastické</b>', 'stochastický'],
        ['Vztah ke změnám', 'neadaptivní (ohrožena existence) × <b>adaptivní</b>', 'adaptivní'],
        ['Vztah k tvorbě cílů', 'bez cílového chování × <b>s cílovým chováním</b>', 's cílovým chováním']
      ] },
      { t: 'warn', x: 'Lektorka na slajdech uvádí podnik jako „relativně izolovaný systém“, skripta (Hron) „relativně uzavřený“ – jde o totéž: nejčastější kombinace otevřeného a uzavřeného systému. Čistě uzavřené i čistě otevřené systémy jsou jen výjimkou.' },
      { t: 'versus', title: 'Deterministický × stochastický systém', cols: [
        { h: 'Deterministický', items: ['<b>y = f(x)</b> – reakce jednoznačně určená podnětem', 'např. termostat, technologická linka (v omezeném čase)'] },
        { h: 'Stochastický', items: ['stejný podnět → různé reakce s pravděpodobností (např. p₁ = 0,8 reakce y, p₂ = 0,2 reakce z)', 'např. házení mincí, zásobování, podnik, národní hospodářství'] }
      ], x: 'Když stisknete vypínač, rozsvítí se světlo prakticky vždy – deterministický systém. Když ale zvýšíte cenu výrobku, reakce trhu není jednoznačná: s určitou pravděpodobností odběratelé zůstanou, s jinou odejdou. Podnik je proto stochastický a řídící pracovník musí počítat s nejistotou.' }
    ] },
    { title: 'Chování systému', blocks: [
      { t: 'def', term: 'Chování systému', x: 'Transformace vektoru podnětů <b>x</b> do vektoru reakcí <b>y</b> působením operátoru transformace <b>T</b>: <b>y = T(x)</b>. Posloupnost změn bývá označována jako <b>trajektorie</b>.' },
      { t: 'ul', items: [
        'Reakce v čase t je většinou reakcí na podnět z dřívějšího času t − n; čím větší a složitější systém, tím větší prodleva n.',
        '<b>Adaptivní systémy</b> reagují na změny stavu systému i okolí způsobem vhodným pro svou existenci (podnik); <b>neadaptivní</b> se nepřizpůsobí a jejich existence je ohrožena.',
        '<b>Systémy s cílovým chováním</b> reagují na podněty tak, aby jejich trajektorie vedla k dosažení předem stanoveného cíle – žádoucího stavu vnitřní struktury nebo chování (podnik).'
      ] },
      { t: 'ex', x: 'Podnik: podnětem je pokles poptávky po produktu (x). Stochasticky se podnik může zachovat různě: s p = 0,8 sníží cenu, s p = 0,2 změní sortiment. Řízením se snaží zvýšit pravděpodobnost žádoucí reakce (cílového chování).' }
    ] }
  ],
  mistakes: [
    'Říct, že systém je „reálný objekt“ – je to jeho <b>abstrakce</b> definovaná vzhledem k cíli.',
    'Zaměnit agregaci a desagregaci (agregace = slučování, snižuje rozlišovací úroveň).',
    'Zaměnit agregaci/desagregaci (uvnitř systému) s integrací/diferenciací (mezi systémy).',
    'Označit podnik za deterministický – je stochastický.'
  ],
  qa: [
    { q: 'Definujte systém a zapište ho symbolicky.', a: 'Abstrakce reálného objektu, kterou lze definovat při respektování cíle prvky a vazbami mezi nimi (Hron). S = { A, R }, A množina prvků, R množina vazeb; konečná množina prvků a vazeb podřízená účelové funkci.' },
    { q: 'Co je okolí systému, kalendář a repertoár?', a: 'Okolí působí na vstupy (akce) a systém na výstupech reaguje (reakce); dělí se na užší (vždy podstatné) a širší. Kalendář = časové intervaly působení akcí/reakcí, repertoár = množina možných akcí/reakcí.' },
    { q: 'Kolik vazeb může mít systém o n prvcích?', a: 'Minimálně n − 1 (aby byl propojený), maximálně n².' },
    { q: 'Vysvětlete agregaci a desagregaci a integraci a diferenciaci.', a: 'Agregace = slučování prvků (nižší rozlišovací úroveň), desagregace = dělení prvků (vyšší úroveň); integrace = spojování více systémů (fúze, koupě firem), diferenciace = dělení systémů (např. podle produkce).' },
    { q: 'Proveďte typologii systému – podnik.', a: 'Reálný, relativně izolovaný (uzavřený), redukovaný, velmi složitý, stochastický, z hlediska času prospektivní i retrospektivní, adaptivní a s cílovým chováním.' },
    { q: 'Jak se liší deterministický a stochastický systém?', a: 'Deterministický: reakce jednoznačně určena podnětem, y = f(x). Stochastický: téže reakci nelze přiřadit podnět jednoznačně, jen s pravděpodobností (např. 0,8 a 0,2).' },
    { q: 'Za jakého stavu je v stochastickém systému nejvyšší míra nejistoty? (doplněno)', a: 'Podle teorie informace tehdy, když jsou možné reakce stejně pravděpodobné (u dvou reakcí p = 0,5 a 0,5) – nelze predikovat, která nastane. V podkladech odpověď uvedena není (jde o úkol 19 cvičení).' },
    { q: 'Co je systém jako černá skříňka?', a: 'Nejvyšší stupeň agregace: známe vstupy a výstupy, neznáme strukturu systému (např. konkurenční podnik).' }
  ]
});
