registerTopic({
  id: 'rozhodovani', order: 9, icon: '⚖️', title: 'Rozhodování a delegování', src: 'podklady', lec: [8,9],
  where: 'Přednáška 8–9 + Cvičení 6 + Dovednosti v řízení kap. 5.1–5.2',
  summary: 'Rozhodovací proces o osmi krocích, kritéria a váhy, druhy rozhodování, rozhodování podle stupně řízení, bariéry, Eisenhowerova matice a delegování (přikazování – koučování – delegování, odpovědnost).',
  vocab: [
    { w: 'Rozhodnutí', x: 'Výběr ze dvou nebo více alternativ; řešení problému; podstata podnikového řízení.' },
    { w: 'Problém', x: 'Odchylka mezi žádoucím a skutečným stavem – reálný (naléhavý) nebo potenciální (hrozby a příležitosti).' },
    { w: 'Kritérium', x: 'Hledisko pro posouzení výhodnosti variant: výnosové („čím více, tím lépe“) × nákladové („čím méně, tím lépe“).' },
    { w: 'Delegování', x: 'Sdílení či přenos povinností a s nimi souvisejících pravomocí a (spolu)odpovědnosti z nadřízeného na podřízeného.' },
    { w: 'Pravomoc', x: 'Právo rozhodovat a vyžadovat; je dělitelná – delegováním ji ŘP předává.' },
    { w: 'Funkční × sdílená odpovědnost', x: 'Odpovědnost plynoucí z funkce ŘP (nedělitelná) × odpovědnost toho, kdo úkol přijal.' }
  ],
  key: [
    'Rozhodování je <b>paralelní manažerská funkce</b>; rozhodnutí = výběr z alternativ.',
    'Rozhodovací proces: <b>identifikace problému → kritéria → váhy → varianty → analýza → výběr → implementace → kontrola</b>.',
    'Rozhodovací situace: za <b>jistoty</b> (deterministické), <b>rizika</b>, <b>nejistoty/neurčitosti</b> (stochastické).',
    '<b>Eisenhower:</b> důležité + naléhavé = sám a hned; důležité + nenaléhavé = naplánovat; nedůležité + naléhavé = <b>delegovat</b>; nedůležité + nenaléhavé = <b>eliminovat</b>.',
    '<b>Přikazování → koučování → delegování.</b> Nedelegovat: vizi a strategii, klíčové zdroje, budování týmu, organizační kulturu.'
  ],
  sections: [
    { title: 'Podstata rozhodování', blocks: [
      { t: 'def', term: 'Rozhodování', x: 'Jedna z paralelních (průběžných) manažerských funkcí; kvalita rozhodovacích procesů zásadně ovlivňuje fungování organizace. <b>Rozhodnutí = řešení problému = podstata podnikového řízení</b>: výběr ze dvou či více alternativ na všech řídících stupních a ve všech oblastech.' },
      { t: 'p', x: 'Rozhodovací proces řeší rozhodovací problémy (s více variantami řešení): posuzování variant a výběr optimální. <b>Problém</b> je odchylka mezi žádoucím a skutečným stavem – může být <b>reálný</b> (různý stupeň naléhavosti) nebo <b>potenciální</b> (reakce na hrozby a příležitosti, prevence).' },
      { t: 'versus', title: 'Tři varianty rozhodnutí', cols: [
        { h: 'R1: obě varianty příznivé', items: ['musíte vybrat jednu (dvě nabídky práce, výrobní program)', 'těžší'] },
        { h: 'R2: jedna příznivá, druhá ne', items: ['volba je snadná', 'moře × hory, kdo má rád moře'] },
        { h: 'R3: obě nepříznivé', items: ['nejnepříjemnější (propustit jednoho ze dvou dobrých pracovníků)', 'konflikt averze × averze'] }
      ], x: 'Nejsnadnější je rozhodnutí R2, protože jen vybereme výhodnější možnost. U R1 je těžké „vzdát se“ jedné dobré varianty, u R3 vybíráme menší zlo. V praxi se navíc musí nejdřív zjistit, která varianta je pro subjekt výhodnější – to je součástí rozhodovacího procesu.' },
      { t: 'warn', x: 'ŘP musí zvládnout: <b>formulovat problém, posoudit a vybrat nejvhodnější variantu, rozhodnout a převzít odpovědnost za realizaci</b>. <b>Faktor času:</b> horší rozhodnutí včas je lepší než geniální pozdě! Ve snaze zjistit skutečný důvod odchodu pracovníka je „ušlechtilý důvod“ obvykle uváděn na prvním místě, ale zřídka bývá ten pravý.' }
    ] },
    { title: 'Rozhodovací proces: 8 kroků', blocks: [
      { t: 'flow', title: 'Etapy rozhodovacího procesu', steps: [
        { h: 'Identifikace problému', x: 'definovat problém, sebrat a vyhodnotit informace (nový problém × odchylka od cílového chování); zjišťujeme příčiny' },
        { h: 'Stanovení kritérií', x: 'co je důležité pro posouzení variant (výnosová, nákladová, kvantitativní, kvalitativní)' },
        { h: 'Přiřazení vah kritériím', x: 'např. 10 bodů nejdůležitější, 1 bod nejméně (vážený průměr), pořadí, párové srovnání' },
        { h: 'Formulování variant', x: 'seznam možných alternativ a omezení jejich počtu' },
        { h: 'Analýza variant', x: 'silné a slabé stránky, důsledky z hlediska kritérií' },
        { h: 'Výběr varianty', x: 'optimální nebo preferenční pořadí podle kritérií a vah, ekonomické zhodnocení' },
        { h: 'Implementace', x: 'seznámit podřízené s rozhodnutím, vysvětlit, získat souhlas – nejlépe zapojit je do rozhodování' },
        { h: 'Monitorování a kontrola', x: 'odchylky od cílů, nápravná opatření, korekce nerealistických cílů; hodnocení dopadu ekonomického, sociálního, organizačního' }
      ] },
      { t: 'warn', x: 'Na slajdech je číslování kroků 2–4 zmatené (dvě „2.“ a pořadí 7–8–6–5). Správná posloupnost podle skript: 1 identifikace, 2 kritéria, 3 váhy, 4 varianty, 5 analýza, 6 výběr, 7 implementace, 8 hodnocení/kontrola. Proces obsahuje všechna stádia cyklu řízení (I → RO → RE → K).' },
      { t: 'tip', x: 'Správnost rozhodnutí poznáš až v realizaci. V přírodních a technických oborech lze experimentovat, v ekonomice, organizaci, obchodu a řízení ne (příliš proměnných, málo konstant; nelze podmínky opakovat).' }
    ] },
    { title: 'Kritéria, váhy a příklad', blocks: [
      { t: 'versus', title: 'Typy kritérií a stupnice', cols: [
        { h: 'Typy kritérií', items: ['<b>výnosová</b> – „čím více, tím lépe“ (výnosy, zisk)', '<b>nákladová</b> – „čím méně, tím lépe“ (náklady, ztráta)', '<b>kvantitativní</b> – měřitelná, jednoznačná', '<b>kvalitativní</b> – agregovanější, širší obsah'] },
        { h: 'Stupnice měření', items: ['<b>nominální</b> (jmenná): třídy rovnocenné, např. barva aut', '<b>ordinální</b> (pořadová): pořadí, nevíme o kolik', '<b>kardinální</b>: <b>intervalová</b> (o kolik) a <b>poměrová</b> (kolikrát)'] }
      ], x: 'Nominální stupnice jen rozlišuje („červené × modré“), ordinální řadí („první, druhý“), intervalová umí odečítat („o 5 stupňů teplejší“) a poměrová i dělit („dvakrát víc“, např. tržby). Čím vyšší stupnice, tím přesnější výpočty můžeme dělat.' },
      { t: 'ex', x: '<b>Skripta – nákup výrobního zařízení</b> (3 varianty, cena výrobku 2 000 Kč, zisk 400 Kč/ks, 3 směny, nepřetržitě): roční zisk V1 = 100 ks × 365 × 3 × 400 = 43,8 mil. Kč; V2 = 120 ks → 52,56 mil.; V3 = 43,8 mil. <b>Návratnost</b> = cena / roční zisk: V1 200/43,8 = <b>4,57 roku</b>; V2 260/52,56 = <b>4,95</b>; V3 180/43,8 = <b>4,11</b>. Podle návratnosti samotné by vyšla V3.' },
      { t: 'warn', x: 'Skripta uvádějí návratnost V1 jako 4,5 roku; přesně je 200/43,8 = 4,566 ≈ 4,6. V rozsahu bodování spolehlivosti skripta počítají s minimem 97 %, ačkoli V3 má 96 % – dostává tedy nejnižší hodnocení (1 b).' },
      { t: 'table', head: ['Varianta', 'K1 návratnost', 'K2 spolehlivost', 'K3 servis', 'Součet bodů', 'Vážený součet (váhy 2/6, 3/6, 1/6)'], rows: [
        ['V1', '4,57 roku → 3 b', '98 % → 3 b', '5/24 → 3 b', '9', '3,00'],
        ['V2', '4,95 roku → 1 b', '99 % → 5 b', '7/24 → 5 b', '11', '<b>3,67</b>'],
        ['V3', '4,11 roku → 5 b', '96 % → 1 b', '5/12 → 2 b', '8', '2,50']
      ] },
      { t: 'p', x: 'Bodová stupnice se získá vzorcem: rozsah pro 1 bod <b>RZB = (H<sub>max</sub> − H<sub>min</sub>) / n</b>; k-tý bod má rozsah <b>R<sub>k</sub> = H<sub>min</sub> + k · RZB</b>. Pro návratnost 4,1–5,0 a n = 5 je RZB = 0,18 (u nákladového kritéria dostává nejnižší hodnota 5 bodů). Obě metody (bodovací i pořadí) dávají stejné pořadí: <b>V2</b>. Váhy metodou pořadí: nejdůležitější spolehlivost (3/6), pak návratnost (2/6), pak servis (1/6).' },
      { t: 'tip', x: 'Pořadí závisí víc na správném zadání (kritéria, váhy) než na zvolené metodě. Úkolem ŘP je zadání a konečné rozhodnutí; metodu může aplikovat štábní pracovník. Slabinou metod je, že pracují s minulostí a přítomností (budoucnost zkoumají simulační modely). Znak racionálního rozhodování: obhajitelné postupy; vyhnout se tautologii, kontradikci a porušení tranzitivity (A &gt; B, B &gt; C, ale C &gt; A).' }
    ] },
    { title: 'Druhy rozhodování', blocks: [
      { t: 'table', head: ['Členění', 'Typy'], rows: [
        ['Podle situace', '<b>jistota</b> (dokonale informován; deterministické, optimalizační metody; hlavně produkčně-technická oblast, operativní řízení), <b>riziko</b> (známe pravděpodobnosti), <b>nejistota</b> (statistické odhady), <b>neurčitost</b> (nelze ani pravděpodobnostně)'],
        ['Podle otevřenosti', '<b>uzavřený model</b> (známe objekt, důsledky, kritérium; střední stupeň, produkce) × <b>otevřený</b> (prvky a kritéria se vyvíjejí; vyšší stupeň, organizačně-ekonomická a obchodně-řídící oblast)'],
        ['Podle dynamiky', '<b>statické</b> (bez faktoru času; nižší stupně) × <b>dynamické</b> (důsledky v čase, etapy; vyšší stupně, rozvoj společnosti)'],
        ['Podle subjektu', '<b>individuální</b> (rychlé, jednoznačná odpovědnost; operativní řízení nižších a středních stupňů; kdo rozhoduje, nese odpovědnost: ředitel, vedoucí OJ) × <b>kolektivní</b> (valná hromada, představenstvo, dozorčí rada, vedení, tvůrčí týmy; pomalejší, ale „více hlav víc ví“; vhodné pro strategii a výběrová řízení)'],
        ['Podle programu', '<b>programové</b> (známý postup, opakující se rutina; nižší stupně) × <b>neprogramové</b> (nové problémy, tvořivost; vyšší stupeň, strategie)']
      ] },
      { t: 'tip', x: 'Rozhodování za nejistoty využívá rozhodovací matice a kritéria: <b>Laplaceovo</b> (maximalizace středního zisku – průměr; pro toho, kdo si riziko může dovolit), <b>Mini-Max</b> (minimalizace dopadu nejhorší situace – vybrat nejlepší z nejhorších; averze k riziku), <b>Hurwitzovo</b> a <b>Savageovo</b> (matice ztrát). Pro stochastické jevy dále teorie her, kombinatorika.' },
      { t: 'table', head: ['Charakteristika informací', 'Strategická úroveň (TOP)', 'Taktická (střední)', 'Operativní (nižší)'], rows: [
        ['Zdroj', 'externí', 'externí i interní', 'interní'],
        ['Rozsah', 'velmi široký, nespecifikovaný', 'průměrný', 'úzce specifikovaný'],
        ['Podrobnost', 'integrované veličiny', 'částečně integrované', 'podrobné údaje'],
        ['Časovost', 'budoucnost', 'budoucnost, minulost, současnost', 'současnost, minulost'],
        ['Včasnost', 'nejsou urgentní', 'neurgentní i urgentní', 'urgentní'],
        ['Četnost', 'málo četné (rok)', 'pravidelné (měsíc)', 'četné (denně)'],
        ['Přesnost', 'nízká, aproximace, kvalitativní', 'přesnější, kvalitativní i kvantitativní', 'přesné, kvantitativní']
      ] },
      { t: 'versus', title: 'Bariéry rozhodování', cols: [
        { h: 'Subjektivní', items: ['omezená schopnost zpracovávat informace a omezený rozsah poznání', 'omezená schopnost formulovat a řešit složité problémy', 'omezená internalizace systému hodnot', 'opakování neefektivních řešení (záchrana ztrátové firmy)'] },
        { h: 'Objektivní', items: ['nedostatečná kvalita informační základny (hlavně pro vrchol)', 'nepružnost organizační struktury (obtížné dočasné týmy)', 'velký počet stupňů řízení', 'nepřesné vymezení rozhodovacích pravomocí'] }
      ], x: 'Subjektivní bariéry jsou v hlavě rozhodovatele (omezené schopnosti a zvyky), objektivní v podniku (špatné informace, příliš mnoho stupňů, nejasné pravomoci). Zvyšování kvality rozhodovacích procesů bariéry oslabuje.' }
    ] },
    { title: 'Eisenhowerova matice a rozhodnutí „kdo to udělá“', blocks: [
      { t: 'p', x: 'Technika určování priorit z oblasti <b>sebeřízení</b>. Každý úkol posoudíme podle dvou kritérií: <b>důležitosti</b> (následky, cíle, souvislosti) a <b>naléhavosti</b> (jak rychle musí být vyřešen).' },
      { t: 'svg', title: 'Eisenhowerův princip', x: TROS.eisenhower() },
      { t: 'table', head: ['Kvadrant', 'Příklady', 'Postup'], rows: [
        ['I. Důležité a naléhavé', 'seminárka do 5 hodin, zapomenutý test, rozbitý počítač', 'řeš sám a hned; krize'],
        ['II. Důležité, nenaléhavé', 'příprava na přednášky, výběr vedoucího BP, stáž, životopis', 'řeš sám později – naplánuj; prevence krizí; realizace vize'],
        ['III. Nedůležité, naléhavé', 'záskok za kolegu, nutné nákupy, příchozí telefonát', 'deleguj'],
        ['IV. Nedůležité a nenaléhavé', 'úklid pokoje, nádobí po spolubydlících, zásilka na poště, prokrastinace', 'eliminuj – odmítni, vyhoď']
      ] },
      { t: 'warn', x: 'Platí zásada: v „I.“ trávit co nejméně času (krize), soustředit se na „II.“. Mnoho lidí dělá úkoly „III.“ v domnění, že jde o „I.“ – a tím zanedbává „II.“.' }
    ] },
    { title: 'Delegování', blocks: [
      { t: 'def', term: 'Delegování', x: 'Sdílení či přenos <b>povinností a souvisejících pravomocí a odpovědností</b> z nadřízeného, který má právo delegovat, na podřízeného. Není to jednorázová akce, ale proces mezi delegujícím a delegovaným za účelem splnění cíle. Delegovaný dočasně přechází z objektu na subjekt řízení.' },
      { t: 'table', head: ['', 'Přikazování', 'Koučování', 'Delegování'], rows: [
        ['Podstata', 'ŘP přesně určí, co, jak, kdy a s kým', 'úkol bez podrobného zadání; ŘP kladením otázek vede podřízeného k vlastnímu programu', 'ŘP předá úkol, pravomoc a zdroje; podřízený má vlastní program'],
        ['Posloupnost', 'úkol → vše rozhodnuto → „nediskutuj a splň“ → kontrola', 'úkol → otázka → odpověď → odsouhlasené řešení → realizace → kontrola', 'úkol → zadání → pravomoc a zdroje → vlastní program → realizace → kontrola'],
        ['Výhody', 'jednoduchost, rychlost, jednoduchá kontrola', 'spoluúčast zvyšuje motivaci; poznání schopností; učení nového pracovníka', 'více času na strategii; výchova podřízeného; samostatnost; učí nést odpovědnost'],
        ['Nevýhody', 'snižuje iniciativu a motivaci, neučí odpovědnosti', 'časová náročnost; bez následného delegování ztráta motivace', 'riziko výběru špatného delegovaného, zneužití pravomoci'],
        ['Kdy', 'vypjatá situace, časová tíseň', 'zaučování, vyšší způsob vedení', 'standardní situace s kvalitním podřízeným']
      ] },
      { t: 'ex', x: '<b>Příklad z přednášky – ubytování zahraniční návštěvy.</b> <i>Příkaz:</i> „Přistání v 17:00, čekejte v 16:45 s cedulí; ubytujte je v Hotelu Praha, zamluvte 2 pokoje do 4 000 Kč, informujte mě; večer večeře do 4 000 Kč; 29. 12. v 10:30 je přivezte do firmy.“ <i>Delegování:</i> „Zodpovídáte za program návštěvy partnerů. Přiletí 28. 12. v 17:00, očekávám je u nás 29. 12. v 10:30. K dispozici máte 10 000 Kč. Kontakt: telefon, e-mail.“ – určen cíl, termín a limit zdrojů, způsob si volí delegovaný.' },
      { t: 'versus', title: 'Tři varianty provedení delegování', cols: [
        { h: '1. Špatné', items: ['podřízený je postaven do nefér podmínek', 'vytvořeny podmínky pro neúspěch (někdy záměr)'] },
        { h: '2. Neúplné', items: ['delegována jen část pravomocí', 'nebo pravomoc bez dostatečných zdrojů'] },
        { h: '3. Správné', items: ['předány všechny potřebné pravomoci i zdroje', 'pak lze vyžadovat spoluúčast na odpovědnosti'] }
      ], x: 'Delegovat lze cokoliv, k čemu byly vytvořeny podmínky: pravomoc a odpovídající zdroje (lidé, peníze, čas). Když vedoucí zadá úkol, ale nedá pravomoc rozhodovat ani rozpočet, nejde o delegování, ale o příkaz s odpovědností navíc.' },
      { t: 'table', head: ['Odpovědnost', 'Charakter', 'Velikost (podíl)'], rows: [
        ['<b>Funkční</b>', 'plyne z funkce ŘP (GŘ, ředitel, vedoucí provozu); delegováním se jí ŘP nezbavuje', 'FO = 1 (plná) na každém stupni'],
        ['<b>Sdílená</b>', 'odpovědnost toho, kdo úkol přijal; „pravomoc je dělitelná, odpovědnost nedělitelná“, ale delegovaný přebírá spoluúčast', 'rozdělení: delegující 50 % + delegovaný 50 %; při dalším delegování 25 % + 25 % atd.']
      ] },
      { t: 'ul', items: [
        '<b>Prvotní delegování</b> vzniká při růstu podniku: majitel pověří schopného pracovníka (vznik funkce vedoucího výroby, obchodního ředitele s prokurou, outsourcing účetnictví) – vzniká řídící struktura. Další úkolování <i>už není delegování</i>, ale plnění povinností dané funkce.',
        'Delegování vychází z <b>pravidel</b>: vymezit pravomoci, požadovat spoluúčast na odpovědnosti, důvěřovat (není pravda, že vše umím nejlépe), nestát se nepostradatelným.'
      ] },
      { t: 'warn', x: '<b>Co nedelegovat:</b> 1) stanovení a zásadní komunikaci <b>vize a strategie</b> (kdo ji komunikuje, je v očích lidí vůdcem), 2) rozhodování o <b>alokaci klíčových zdrojů</b> (lidé, peníze, čas), 3) <b>budování a rozvoj týmu</b>, 4) <b>pěstování organizační kultury</b> („správná OJ je taková, jaký je její šéf“).' }
    ] }
  ],
  mistakes: [
    'Zaměnit pořadí kroků rozhodovacího procesu – nejdřív kritéria a jejich váhy, až pak varianty.',
    'Rozhodovat „na poslední chvíli“ – faktor času: horší rozhodnutí včas je lepší než geniální pozdě.',
    'V Eisenhowerově matici zaměnit III. (delegovat) a IV. (eliminovat).',
    'Říkat, že delegováním ŘP přenáší i celou odpovědnost – funkční odpovědnost zůstává; delegovaný přebírá <b>sdílenou</b>.',
    'Delegovat bez pravomocí a zdrojů nebo delegovat vizi a strategii.'
  ],
  qa: [
    { q: 'Co je rozhodování a rozhodovací proces?', a: 'Rozhodování je jedna z paralelních manažerských funkcí, výběr z alternativ, podstata řízení. Rozhodovací proces řeší problém (odchylku žádoucího a skutečného stavu) posuzováním variant a výběrem optimální.' },
    { q: 'Vyjmenujte kroky rozhodovacího procesu.', a: 'Identifikace problému, kritéria, váhy kritérií, formulace variant, analýza variant, výběr varianty, implementace, monitorování a kontrola (hodnocení efektivnosti).' },
    { q: 'Jaká jsou kritéria rozhodování a stupnice měření?', a: 'Výnosová (čím více, tím lépe) a nákladová; kvantitativní a kvalitativní. Stupnice: nominální, ordinální, kardinální (intervalová, poměrová).' },
    { q: 'Jaké rozhodování rozlišujeme?', a: 'Za jistoty, rizika, nejistoty a neurčitosti; uzavřené × otevřené; statické × dynamické; individuální × kolektivní; programové × neprogramové; podle stupně řízení strategické, taktické, operativní.' },
    { q: 'Jaké jsou bariéry rozhodování?', a: 'Subjektivní: omezená schopnost zpracovat informace a řešit složité problémy, omezené poznání, opakování neefektivních řešení. Objektivní: špatná informační základna, nepružná struktura, mnoho stupňů řízení, nejasné pravomoci.' },
    { q: 'Vysvětlete Eisenhowerovu matici.', a: 'Úkoly třídíme podle důležitosti a naléhavosti: I důležité+naléhavé – sám a hned; II důležité+nenaléhavé – sám později, naplánovat; III nedůležité+naléhavé – delegovat; IV nedůležité+nenaléhavé – eliminovat (prokrastinace).' },
    { q: 'Jaký je rozdíl mezi přikazováním, koučováním a delegováním?', a: 'Přikazování: ŘP určí vše (rychlé, ale snižuje iniciativu). Koučování: ŘP otázkami vede podřízeného k vlastnímu řešení. Delegování: předání úkolu s pravomocí a zdroji, podřízený rozhoduje o způsobu a přebírá spoluodpovědnost.' },
    { q: 'Co nelze delegovat a proč?', a: 'Stanovení a komunikaci vize a strategie, rozhodování o klíčových zdrojích (lidé, peníze, čas), budování a rozvoj týmu, pěstování organizační kultury – kdo je dělá, stává se v očích lidí vůdcem.' },
    { q: 'Vysvětlete funkční a sdílenou odpovědnost.', a: 'Funkční plyne z funkce ŘP a delegováním se jí ŘP nezbavuje (FO = 1). Sdílená je odpovědnost toho, kdo úkol přijal; delegující nese 50 %, delegovaný 50 %, při dalším delegování se podíl dělí (25 % + 25 %).' }
  ]
});
