registerTopic({
  id: 'organizacni-system', order: 4, icon: '🏭', title: 'Organizační systém a subsystémy 1. řádu', src: 'podklady', lec: [4],
  where: 'Přednáška 4 + Cvičení 2–3',
  summary: 'Podnik jako organizační systém: prvky, vazby, devět subsystémů 1. řádu, hlavní diagonála, oblasti a procesy a rozklad do vyšších rozlišovacích úrovní.',
  vocab: [
    { w: 'OS', x: 'Organizační systém = systémové pojetí podniku (organizace): množina hmotných prvků a lidí propojených vazbami za účelem sledování výsledného chování.' },
    { w: 'L / HP / SP', x: 'Lidé / hmotné prvky (stroje, budovy, PC) / smíšené prvky (L + HP, nelze oddělit).' },
    { w: 'HE / I / SV', x: 'Hmotně-energetické vazby / informační vazby / smíšené vazby (HE + I).' },
    { w: 'Subsystém 1. řádu', x: 'Subsystém na 2. rozlišovací úrovni; OS jich má devět.' },
    { w: 'PTO / OEO / OŘO', x: 'Produkčně-technická / organizačně-ekonomická / obchodně-řídící oblast.' },
    { w: 'Hlavní diagonála', x: 'Subsystémy PS1, OSS a ŘSS.' }
  ],
  key: [
    '<b>OS = [HP, SP, L], [HE, SV, I]</b> – tři typy prvků a tři typy vazeb.',
    '<b>Devět subsystémů 1. řádu:</b> PS1, TS1, TS2, EES, OSS, EIS, PS2, MOS, ŘSS.',
    '<b>Hlavní diagonála:</b> PS1 – OSS – ŘSS (PS1 určuje OSS, OSS určuje ŘSS, ŘSS určuje PS1).',
    '<b>Oblasti:</b> PTO (hmotné prvky), OEO (smíšené), OŘO (lidské); <b>procesy:</b> realizační, organizační, informační a rozhodovací.',
    'Úrovně: 1. = podnik, 2. = subsystémy 1. řádu, 3. = 2. řádu, 4. = 3. řádu, 5. = jednotky (např. JOP).'
  ],
  sections: [
    { title: 'Definice organizačního systému', blocks: [
      { t: 'def', term: 'Organizační systém', x: 'Definovaná množina <b>hmotných prvků a lidí</b> (prvky OS) propojených <b>hmotně-energetickými, informačními a smíšenými vazbami</b> za účelem zkoumání výsledného chování.', items: ['podnik je jeho systémovým pojetím', 'zápis: <b>OS = [HP, SP, L], [HE, SV, I]</b>'] },
      { t: 'table', head: ['Prvky', 'Vazby'], rows: [
        ['<b>L</b> – lidé (rozhodující činitel)', '<b>HE</b> – hmotně-energetické (materiál, energie pro výrobu)'],
        ['<b>HP</b> – hmotné prvky (stroje, budovy, PC a komunikační nástroje)', '<b>I</b> – informační (informace nutné pro fungování a řízení)'],
        ['<b>SP</b> – smíšené prvky (L + HP, když je nemá smysl oddělovat)', '<b>SV</b> – smíšené vazby (HE + I, když je nemá smysl oddělovat)']
      ] },
      { t: 'ul', items: [
        '<b>Vstupy do OS:</b> hmotně-energetické (HE), informační (I). <b>Výstupy:</b> HE, I. Podnik v nejvyšším stupni agregace tak transformuje vstupy na výstupy.',
        'OS definujeme ve <b>třech rozměrech</b>: prvky, vazby a rozlišovací úroveň.',
        'Podle rozlišovací úrovně rozlišujeme subsystémy <b>1., 2., 3. a 4. řádu</b>. Cílový stav subsystémů se vymezuje ve fázi plánování.'
      ] },
      { t: 'ex', x: 'Příklad pro firmu na zpracování krmiv: <b>L</b> – dělníci, technologové; <b>HP</b> – stroje, budovy, počítače; <b>HE vstupy</b> – obilí, energie; <b>I vstupy</b> – objednávky, informace o trhu; <b>HE výstupy</b> – krmivo; <b>I výstupy</b> – faktury, reklama. (Příklad doplněn jako ilustrace.)' }
    ] },
    { title: 'Subsystémy 1. řádu (2. rozlišovací úroveň)', blocks: [
      { t: 'svg', title: 'Devět subsystémů 1. řádu', x: TROS.subsystemy(), cap: 'Zápis na 2. rozlišovací úrovni: OS = { [PS1, TS1, TS2, EES, OSS, EIS, PS2, MOS, ŘSS], [HE, SV, I] }. Červeně hlavní diagonála, oranžově podpůrné nad ní (převaha L), modře pod ní (převaha HP).' },
      { t: 'table', head: ['Subsystém', 'Hlavní náplň', 'Z čeho se skládá (vyšší rozlišovací úroveň)'], rows: [
        ['<b>PS1</b> Produkční', 'realizace produkce (hmotné i nehmotné)', 'subsystémy produktů P<sub>1–n</sub>; jejich hmotné prvky (stroje, budovy, materiál, energie)'],
        ['<b>TS1</b> Technologický', 'technologie a technologické postupy', 'subsystémy technologií T<sub>1–n</sub>; hmotné prvky a smíšené vazby (technologický postup: množství, lhůty, teplota, návaznosti)'],
        ['<b>TS2</b> Technický', 'technické prostředky podle požadavků technologie', 'požadavky technologií PT<sub>1–n</sub>; parametry hmotných prvků'],
        ['<b>EES</b> Ekologicko-ergonomický', 'ochrana prostředí a pracovních podmínek', 'ekologický EKS (opatření na pracovištích a pro životní prostředí), ergonomický ERS (opatření na pracovištích technologií)'],
        ['<b>OSS</b> Organizační', 'přiřazení zdrojů, vznik OJ, jejich umístění v čase a prostoru', 'organizační stupně OS<sub>1–n</sub> → organizační jednotky OJ → JOP'],
        ['<b>EIS</b> Ekonomicko-informační', 'informace pro rozhodování, ekonomika a finance', 'informační ISS (skupiny řídících informací: trh, vědecko-technické), ekonomický ESS (ceny, ukazatele, výsledky), finanční FSS (vlastní a externí zdroje, investice, cash flow, cenné papíry)'],
        ['<b>PS2</b> Pracovní', 'lidé při fyzické práci a jejich spolupráce', 'pracoviště technologií pT<sub>1–n</sub> → fyzická spolupráce FSpT'],
        ['<b>MOS</b> Marketingově-obchodní', 'trh: marketing, obchod, servis, služby', 'marketingový MS (marketingové případy), obchodní OBS (obchodní případy), servisní SS1 (servisní případy), služeb SS2'],
        ['<b>ŘSS</b> Řídící', 'řízení celého OS', 'majetkový MJS (majitelé), řídících orgánů SŘO (valná hromada, představenstvo, dozorčí rada), přímého řízení SPŘ (řídící stupně, ŘP), sociální SSS3 (sociální skupiny, zaměstnanci)']
      ] },
      { t: 'tip', x: 'PS2 a TS2 jsou „vzdálené“ podpůrné subsystémy (leží v rozích matice nejdál od hlavní diagonály).' }
    ] },
    { title: 'Subsystémy a fáze procesu řízení', blocks: [
      { t: 'svg', title: 'Fáze procesu řízení a podílející se subsystémy', x: TROS.fazeSub(), cap: 'Vybarvená pole ukazují, který subsystém se kterou fází účastní a čím.' },
      { t: 'p', x: '<b>Plánování</b> (informační záležitost) stanoví cílové chování a dává podklady pro varianty plánu. <b>Organizování</b> vytváří faktické podmínky pro splnění cílů: ŘSS jako koordinátor schvaluje organizační jednotky, vedoucí, zdroje, termíny a technologie. <b>Operativní řízení</b> (vedení lidí) porovnává skutečnost s požadavkem a odstraňuje odchylky – dříve = snadněji.' }
    ] },
    { title: 'Hlavní a podpůrné subsystémy', blocks: [
      { t: 'versus', cols: [
        { h: 'Hlavní diagonála', items: ['<b>PS1, OSS, ŘSS</b>', 'rozhodující vliv na řízení OS', 'působí jako transformátor vstupů na výstupy', 'vztah <b>přímý</b>, vzájemně se silně ovlivňují'] },
        { h: 'Podpůrné subsystémy', items: ['<b>Nad diagonálou (převaha L):</b> EES, MOS přímo; PS2 nepřímo', '<b>Pod diagonálou (převaha HP):</b> TS1, EIS přímo; TS2 nepřímo', 'nejsilněji ovlivňují diagonálu a sousedé'] }
      ], x: 'Hlavní diagonála je „motor“ podniku a tvoří uzavřený cyklus: v řídícím subsystému se rozhodne o produkci (<b>ŘSS určuje PS1</b>), produkce vyžaduje organizaci, vznikají organizační jednotky (<b>PS1 určuje OSS</b>), jejich vedoucí jsou součástí řídící struktury (<b>OSS určuje ŘSS</b>). Řídící subsystém může „kdykoliv a jakkoliv“ produkci změnit, tím se cyklus uzavírá. Podpůrné subsystémy tomuto cyklu pomáhají – lidé (EES, MOS, PS2) zlepšují nebo zhoršují jeho efektivnost, technika a informace (TS1, EIS, TS2) vytvářejí technické zázemí. Subsystémy, které spolu nesousedí, se ovlivňují jen nepřímo.' },
      { t: 'warn', x: 'Poloha „nad / pod diagonálou“ platí pro matici, v níž jsou dole hmotné prvky (PS1 vlevo dole) a nahoře lidské prvky (ŘSS vpravo nahoře) – jak je kreslena na přednášce. V jiném pořadí řádků by se „nad“ a „pod“ prohodilo. Důležité je zapamatovat si skupiny: <b>L: EES, MOS, PS2</b> a <b>HP: TS1, EIS, TS2</b>.' }
    ] },
    { title: 'Oblasti a procesy OS', blocks: [
      { t: 'svg', title: 'Oblasti (řádky) a procesy (sloupce)', x: TROS.oblasti(), cap: 'Devět subsystémů 1. řádu v mřížce: řádky tvoří oblasti (obchodně-řídící, organizačně-ekonomická, produkčně-technická), sloupce procesy (realizační, organizační, informační a rozhodovací).' },
      { t: 'table', head: ['Oblast (stejné prvky)', 'Subsystémy', 'Proces řízení v oblasti'], rows: [
        ['<b>Produkčně-technická (PTO)</b> – hmotné prvky', 'PS1, TS1, TS2', '<b>proces produkčního řízení</b> – řízení produkce a technologických procesů; vysoce stabilní, téměř deterministický (automatizované systémy řízení)'],
        ['<b>Organizačně-ekonomická (OEO)</b> – smíšené prvky (skripta též „organizačně-informační“)', 'EES, OSS, EIS', '<b>proces nepřímého řízení</b> – realizuje plánování a organizování: vytvoření OJ a stupňů, přiřazení zdrojů, ekonomický systém (samofinancování, cash flow), motivační systém, systém komunikace'],
        ['<b>Obchodně-řídící (OŘO)</b> – lidské prvky', 'PS2, MOS, ŘSS', '<b>proces přímého řízení</b> – operativní řízení a vedení lidí: úkolování, kontrola, delegování, přímá motivace, hodnocení, porady']
      ] },
      { t: 'table', head: ['Proces (stejné vazby)', 'Subsystémy', 'Podstata'], rows: [
        ['<b>Realizační</b>', 'PS1, EES, PS2', 'vlastní realizace produkce (hmotně-energetické vazby)'],
        ['<b>Organizační</b>', 'TS1, OSS, MOS', 'přiřazování zdrojů a vytváření podmínek (smíšené vazby)'],
        ['<b>Informační a rozhodovací</b>', 'TS2, EIS, ŘSS', 'propojení informačních zdrojů; rozhodování probíhá v ŘSS (informační vazby)']
      ] },
      { t: 'tip', x: 'Oblasti mají <b>stejné prvky, jiné vazby</b> (řádky matice); procesy mají <b>stejné vazby, jiné prvky</b> (sloupce). Proto jsou subsystémy nezastupitelné.' }
    ] },
    { title: 'Rozlišovací úrovně a organizační stupně', blocks: [
      { t: 'svg', title: 'Rozlišovací úrovně jako vnořené celky', x: TROS.uroveni(), cap: 'Čím hlubší úroveň, tím podrobnější pohled na tentýž systém.' },
      { t: 'p', x: 'Zvyšování rozlišovací úrovně (desagregace) umožňuje <b>přesnější analýzu problému a odstranění skutečných příčin odchylek</b> – nehledáme následek, ale příčinu.' },
      { t: 'tip', x: 'Organizační stupně: <b>OS1 podnik → OS2 divize → OS3 závod → OS4 provoz</b>; pod provozem leží JOP. Podrobně v tématu Struktury.' }
    ] },
    { title: 'Centralizace × decentralizace (doplněk ze skript)', blocks: [
      { t: 'versus', cols: [
        { h: 'Centralizované řízení', items: ['sdružení financí → velké investice', 'sdílení zkušeností, velké obchodní případy', 'jednání s bankami, vize a strategie, zastupování navenek', 'ale: bere motivaci a aktivitu nižším ŘP'] },
        { h: 'Decentralizované řízení', items: ['problémy se řeší tam, kde vznikají', 'vyšší aktivita a motivace ŘP', 'ale: horší koordinace a předávání zkušeností'] }
      ], x: 'Moderní informační systémy umožňují centrále znát všechno potřebné, takže se rozhodnutí přesouvají nahoru („centrála to udělá nejlépe“). Ředitel závodu, který odpovídá za výsledky, ale nesmí rozhodnout o stroji ani o novém vedoucím provozu, ztrácí motivaci. Proto je potřeba najít správnou míru: strategii a velké investice centrálně, běžné provozní problémy tam, kde vznikají.' }
    ] }
  ],
  mistakes: [
    'Vyjmenovat jen 8 subsystémů – správně je <b>9</b> (PS1, TS1, TS2, EES, OSS, EIS, PS2, MOS, ŘSS).',
    'Zaměnit oblasti a procesy (oblast = řádek se stejnými prvky, proces = sloupec se stejnými vazbami).',
    'Říkat, že ŘSS je nejstabilnější – je <b>nejméně stabilní</b> a nejvýše v hierarchii.',
    'Zapomenout, že hlavní diagonála je <b>PS1, OSS, ŘSS</b>, ne PS1, TS1, TS2.'
  ],
  qa: [
    { q: 'Definujte organizační systém a zapište ho symbolicky.', a: 'Množina hmotných prvků a lidí propojená hmotně-energetickými, informačními a smíšenými vazbami za účelem sledování výsledného chování; systémové pojetí podniku. OS = [HP, SP, L], [HE, SV, I].' },
    { q: 'Vyjmenujte subsystémy 1. řádu a zapište OS na 2. rozlišovací úrovni.', a: 'PS1 produkční, TS1 technologický, TS2 technický, EES ekologicko-ergonomický, OSS organizační, EIS ekonomicko-informační, PS2 pracovní, MOS marketingově-obchodní, ŘSS řídící. OS = {[PS1, TS1, TS2, EES, OSS, EIS, PS2, MOS, ŘSS], [HE, SV, I]}.' },
    { q: 'Charakterizujte hlavní diagonálu a podpůrné subsystémy.', a: 'Diagonála PS1–OSS–ŘSS (cyklus: ŘSS určuje PS1, PS1 určuje OSS, OSS určuje ŘSS). Podpůrné s převahou L: EES, MOS (přímo), PS2 (nepřímo). Podpůrné s převahou HP: TS1, EIS (přímo), TS2 (nepřímo).' },
    { q: 'Které subsystémy se podílejí na jednotlivých fázích řízení?', a: 'Plánování: ŘSS (subjekt), EIS, TS2 (informace). Organizování: ŘSS, OSS, PS1. Operativní řízení: ŘSS, MOS, PS2.' },
    { q: 'Co jsou oblasti a procesy OS?', a: 'Oblasti (stejné prvky): PTO (PS1, TS1, TS2 – hmotné), OEO (EES, OSS, EIS – smíšené), OŘO (PS2, MOS, ŘSS – lidské). Procesy (stejné vazby): realizační (PS1, EES, PS2), organizační (TS1, OSS, MOS), informační a rozhodovací (TS2, EIS, ŘSS). Procesy řízení v oblastech: produkční, nepřímé a přímé řízení.' },
    { q: 'Z čeho se skládá ŘSS ve vyšší rozlišovací úrovni?', a: 'Majetkový subsystém (majitelé), subsystém řídících orgánů (valná hromada, představenstvo, dozorčí rada), subsystém přímého řízení (řídící stupně, ŘP) a sociální subsystém (sociální skupiny, zaměstnanci).' },
    { q: 'Co umožňuje zvyšování rozlišovací úrovně?', a: 'Přesnější analýzu a odstranění skutečných příčin odchylek od cílového chování; problémy se řeší tam, kde vznikají.' }
  ]
});
