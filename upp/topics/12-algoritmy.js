registerTopic({
  id: 'algoritmy', order: 12, icon: '🧠', title: 'Algoritmy a strukturovaný návrh', src: 'podklady', lec: [5],
  where: 'Přednáška 5 + Cvičení 5, 6',
  summary: 'Vlastnosti algoritmu, ověření správnosti, složitost, způsoby zápisu (vývojový diagram, strukturogramy, pseudokód), základní konstrukce sekvence – selekce – iterace a strukturovaný návrh shora dolů; vyřešené příklady ze cvičení (MOD, MIN / MAX, matice, mocnina).',
  vocab: [
    { w: 'Algoritmus', x: 'Konečná posloupnost elementárních kroků, v níž je po každém kroku jednoznačně určeno, co bude následovat nebo zda výpočet končí.' },
    { w: 'Rezultativnost', x: 'Vlastnost „konečný“: pro přípustná data výpočet po konečném počtu kroků vždy skončí.' },
    { w: 'Asymptotická složitost', x: 'Řád růstu počtu operací (nebo paměti) v závislosti na rozsahu úlohy n.' },
    { w: 'Sekvence · selekce · iterace', x: 'Tři základní konstrukce: kroky za sebou · výběr z alternativ · opakování (cyklus).' },
    { w: 'Strukturogram', x: 'Grafický zápis algoritmu vyjadřující rozklad úlohy (stromečkový, plošný).' },
    { w: 'Pseudokód', x: 'Přirozený jazyk doplněný klíčovými slovy (začátek, konec, jestliže … pak … jinak, dokud … opakuj).' }
  ],
  key: [
    '<b>Algoritmus</b> je <b>mechanický, deterministický, hromadný (univerzální), konečný a správný</b>.',
    'Nesprávnost vyvrátí <b>jediný protipříklad</b>; průběh se zapisuje do <b>testovací tabulky</b> (obsahy proměnných po jednotlivých krocích).',
    '<b>Složitost:</b> 1 &lt; log n &lt; n &lt; n·log n &lt; n² &lt; n³ &lt; 2<sup>n</sup> &lt; n! &lt; n<sup>n</sup>.',
    '<b>Strukturovaný návrh</b> = rozklad shora dolů, na každé úrovni jen <b>sekvence, selekce, iterace</b>; jiné způsoby rozkladu nejsou přípustné.',
    'Uzly vývojového diagramu: počátek (0 vstupů, 1 výstup), konec (1, 0), výkonný (1, 1), rozhodovací (1, 2), slučovací (2, 1).'
  ],
  sections: [
    { title: 'Algoritmus a jeho vlastnosti', blocks: [
      { t: 'p', x: 'Předpoklady <b>automatického výpočtu</b>: předem stanovit (rozmyslet) přesný postup a během opakovaného provádění už nepřemýšlet a postupovat mechanicky.' },
      { t: 'def', term: 'Algoritmus', x: 'Konečná posloupnost elementárních kroků (příkazů), organizovaná tak, že po provedení každého kroku je jednoznačně určeno, jaký krok bude následovat nebo zda výpočet končí. Jeho provedení umožní pro každá přípustná data <b>mechanicky a po konečném počtu kroků</b> získat výstupní data.' },
      { t: 'table', head: ['Vlastnost', 'Co znamená'], rows: [
        ['<b>mechanický</b>', 'při provádění se není nutné vracet k porozumění úloze – to je potřeba jen při návrhu; provedení lze svěřit i stroji'],
        ['<b>deterministický</b>', 'po každém kroku je jasné, co následuje, nebo že výpočet končí'],
        ['<b>hromadný a univerzální</b>', 'neřeší jedinou osamocenou úlohu, ale celou třídu podobných úloh'],
        ['<b>konečný (rezultativní)</b>', 'pro přípustná data skončí po konečném počtu kroků'],
        ['<b>správný (korektní)</b>', 'splňují-li vstupní data podmínku na vstup, musí výstupní data spolu se vstupními splňovat výstupní podmínku']
      ] }
    ] },
    { title: 'Ověření (ne)správnosti algoritmu', blocks: [
      { t: 'p', x: 'Obecně ověřit správnost lze jen u velmi jednoduchých algoritmů; u složitějších se testuje <b>parciální (částečná) korektnost</b>. <b>Nesprávnost</b> se vyvrací testovacími daty – stačí <b>jediný protipříklad</b>.' },
      { t: 'ul', items: [
        'Testovací data volit tak, aby se <b>prošly všechny cesty</b> algoritmem aspoň jednou verzí vstupních dat,',
        'brát hodnoty <b>blízké mezi přípustnosti</b> a ověřit reakci na <b>nepřípustná data</b>.'
      ] },
      { t: 'p', x: 'Průběh se zapisuje do <b>testovací tabulky</b>: sloupce jsou proměnné P<sub>1</sub> … P<sub>n</sub> a vyhodnocení podmínek rozhodovacích kroků 1 … m, řádky jsou jednotlivé kroky algoritmu.' },
      { t: 'ex', x: '<b>Určete hodnoty x, y, z po provedení algoritmu</b> (cvičení 5): x := 9; y := 7; z := x + y; jestliže x &lt; y pak x := x + 2 jinak y := y · 3.<br>z = 16; podmínka 9 &lt; 7 neplatí → větev „jinak“: y = 7 · 3 = 21. Výsledek: <b>x = 9, y = 21, z = 16</b>.' },
      { t: 'ex', x: '<b>Cyklus s testovací tabulkou:</b> x := 8; y := x div 2; z := y · 5; pro i od 1 do 4 opakuj { x := x − 1; y := y + 2; z := z div 2 }. Počáteční hodnoty: x = 8, y = 4, z = 20.',  },
      { t: 'grid', head: ['i', '1', '2', '3', '4'], rows: [
        ['x', '7', '6', '5', '4'],
        ['y', '6', '8', '10', '12'],
        ['z', '10', '5', '2', '1']
      ] },
      { t: 'p', x: 'Výsledek: <b>x = 4, y = 12, z = 1</b> (z: 20 → 10 → 5 → 2 → 1, celočíselné dělení zahazuje zbytek).' }
    ] },
    { title: 'Prostorová a časová složitost', blocks: [
      { t: 'p', x: 'Skutečná efektivita programu (čas výpočtu, počet bajtů paměti) závisí na konkrétním HW a SW prostředí, jazyce (překladači), schopnostech programátora a reprezentaci dat. Proto se obvykle sleduje jen to, <b>jak rychle roste složitost</b> s rozsahem úlohy – <b>asymptotická složitost</b>.' },
      { t: 'versus', cols: [
        { h: 'Operační (časová) složitost', items: ['počet nutných operací v <b>nejhorším případě</b> (pesimistický odhad – důležité např. u časově kritických procesů)', 'jindy důležitější <b>průměrná složitost</b> u náročných, často opakovaných výpočtů'] },
        { h: 'Prostorová (paměťová) složitost', items: ['dána paměťovými nároky na reprezentaci zpracovávaných dat – <b>ne délkou programu</b>', 'obvykle asymptotický odhad; každé vyhledávání / řazení potřebuje prostor aspoň pro n prvků, některé metody navíc pomocné prostory'] }
      ] },
      { t: 'table', head: ['Řád f(n)', 'Název složitosti'], rows: [
        ['1 (konstanta k)', 'konstantní (nezávislá na n)'],
        ['log n', 'logaritmická'],
        ['n · log n', 'linearitmická'],
        ['n', 'lineární'],
        ['n²', 'kvadratická'],
        ['n³', 'kubická'],
        ['n<sup>k</sup>', 'obecně polynomická'],
        ['2<sup>n</sup>', 'exponenciální'],
        ['n!, n<sup>n</sup>', 'faktoriální']
      ] },
      { t: 'grid', head: ['n', 'log<sub>2</sub> n', 'n · log<sub>2</sub> n', 'n²', 'n³', '2<sup>n</sup>', 'n!'], rows: [
        ['10', '3,3', '33', '100', '1 000', '1 024', '3 628 800'],
        ['20', '4,3', '86', '400', '8 000', '1 048 576', '≈ 2,4 · 10<sup>18</sup>'],
        ['50', '5,6', '282', '2 500', '125 000', '≈ 1,1 · 10<sup>15</sup>', '≈ 3,0 · 10<sup>64</sup>']
      ] },
      { t: 'p', x: '<b>Jak se změní řešitelný rozsah, když máme 60× víc času</b> (1 minuta → 1 hodina; n<sub>1</sub> je rozsah za minutu):' },
      { t: 'grid', head: ['f(n)', 'rozsah za 1 min', 'rozsah za 1 hod'], rows: [
        ['n', 'n<sub>1</sub>', 'n<sub>2</sub> = 60 · n<sub>1</sub>'],
        ['n · log n', 'n<sub>1</sub>', 'n<sub>2</sub> ≈ 60 · n<sub>1</sub>'],
        ['n²', 'n<sub>1</sub>', 'n<sub>2</sub> ≈ 8 · n<sub>1</sub> (√60 ≈ 7,7)'],
        ['2<sup>n</sup>', 'n<sub>1</sub>', 'n<sub>2</sub> ≈ n<sub>1</sub> + 6 (log<sub>2</sub> 60 ≈ 5,9)'],
        ['n!', 'n<sub>1</sub>', 'n<sub>2</sub> ≈ n<sub>1</sub> + ln 60 / ln (n<sub>1</sub> − 1) – téměř beze změny']
      ] },
      { t: 'tip', x: 'Exponenciální a faktoriální algoritmy se ani šedesátkrát rychlejším počítačem prakticky nezlepší – řešitelný rozsah naroste jen o pár prvků.' },
      { t: 'svg', title: 'Jak rychle roste počet operací', x: UPP.complexityDiagram(), cap: 'Pro n = 10 je 2<sup>n</sup> už přes tisíc, n! přes tři miliony; křivky n · log n a n zůstávají dole.' }
    ] },
    { title: 'Zápis a znázornění algoritmu', blocks: [
      { t: 'ul', items: [
        '<b>volným textem</b> – kuchařka, manuál,',
        '<b>graficky</b> – vývojové diagramy (diagramy aktivit v UML2), stromečkový strukturogram, plošný strukturogram,',
        '<b>formálně</b> – pseudokód (přirozený jazyk + klíčová slova) nebo program ve zvoleném programovacím jazyce (instrukce operačního kódu, příkazy jazyka, hotové úseky kódu či podprogramy).'
      ] },
      { t: 'def', term: 'Vývojový diagram', x: 'Také blokové schéma, graf řízení. Univerzální, ale ne bezproblémový prostředek (dnes jako <b>Diagram aktivit v UML2</b>). Znázorňuje <b>časový postup</b> provádění kroků algoritmu <b>orientovaným grafem</b> s jediným počátečním a jediným koncovým uzlem; uzly (bloky) jsou spojeny šipkami.' },
      { t: 'grid', head: ['Typ uzlu', 'Počet v grafu', 'Vstupy', 'Výstupy', 'Význam'], rows: [
        ['Počátek', '1', '0', '1', 'začátek postupu'],
        ['Konec', '1', '1', '0', 'konec postupu'],
        ['Výkonný', 'n', '1', '1', 'po kroku následuje vždy jednoznačně určený krok'],
        ['Rozhodovací (predikátový)', 'm', '1', '2', 'podle splnění / nesplnění podmínky dva různé následující bloky'],
        ['Slučovací', 'm', '2', '1', 'sloučení dvou bloků do jednoho']
      ] }
    ] },
    { title: 'Základní konstrukce a strukturovaný návrh', blocks: [
      { t: 'svg', title: 'Sekvence, selekce, iterace', x: UPP.controlDiagram(), cap: 'Iterace s podmínkou na začátku: nejdřív slučovací blok, pak rozhodovací; jedna šipka se vrací ke slučování, druhá pokračuje.' },
      { t: 'table', head: ['Konstrukce', 'Obsah'], rows: [
        ['<b>Sekvence</b>', 'jen výkonné bloky seřazené za sebou'],
        ['<b>Selekce</b> (výběr alternativ)', 'rozhodovací blok a dvě výkonné větve ukončené slučovacím bodem'],
        ['<b>Iterace</b> (cyklus)', 'slučovací blok, rozhodovací blok; z něj se jedna šipka vrací ke slučovacímu bloku, druhá pokračuje']
      ] },
      { t: 'def', term: 'Strukturovaný návrh algoritmu', x: '<b>Hierarchický rozklad</b> složité úlohy na jednodušší (postup <b>shora dolů – top-down</b>, případně v mnoha úrovních). Na všech úrovních rozkladu lze použít pouze základní struktury – <b>sekvenci, selekci a iteraci</b>. Jiné způsoby rozkladu nejsou přípustné!' },
      { t: 'p', x: 'Příklad strukturovaného návrhu: <b>selekce vnořená do iterace</b> – v těle cyklu je rozhodovací blok se dvěma větvemi. Nestrukturovaný algoritmus (např. s libovolnými skoky) lze upravit na strukturovaný; <b>tolerovanou výjimkou</b> je předčasný výskok z cyklu.' }
    ] },
    { title: 'Strukturogramy: stromečkové a plošné', blocks: [
      { t: 'versus', cols: [
        { h: 'Stromečkový strukturogram', items: ['výhody: nelze sestavit nestrukturovaný algoritmus, lze postupně zjemňovat návrh, pojmenovávat celky, soustředit se vždy na jednu úroveň, algoritmus lze odvodit ze struktury dat', 'nevýhody: způsob kreslení není normalizován; spojnice nevyjadřují časovou následnost, ale <b>rozklad úlohy</b> (nezvyklé a nenázorné)'] },
        { h: 'Plošný strukturogram', items: ['výhody: názorný publikační nástroj, časová následnost je potlačena méně (stačí sledovat směr shora dolů a „zanořování“), umožňuje jen strukturované konstrukce', 'částečné nevýhody: není kam zapsat názvy celků (menší srozumitelnost); při konstrukci shora dolů bývá obtížné odhadnout velikost ploch'] }
      ], x: 'Stromečkový strukturogram je jako obsah knihy – ukazuje, z čeho se úloha skládá (kapitoly a podkapitoly), ale ne v jakém pořadí se kroky dějí. Plošný strukturogram je jako samotný text: čteš ho shora dolů a vnořené obdélníky odpovídají vnořeným cyklům a podmínkám. Proto je plošný lepší do publikací, stromečkový pro postupné zjemňování návrhu. Oba mají společné to hlavní: nedovolí nakreslit „spaghetti“ algoritmus, protože existují jen tři povolené stavební kameny.' }
    ] },
    { title: 'Příklady ze cvičení: MOD, mocnina, posloupnost', blocks: [
      { t: 'ex', x: '<b>MOD A, B</b> – zbytek po celočíselném dělení A číslem B (A, B celá kladná, načtená ze vstupu). Postup: od A odečítáme B tak dlouho, dokud zbytek není menší než B.' },
      { t: 'svg', title: 'MOD A, B: vývojový diagram a plošný strukturogram', x: UPP.modFlowDiagram(), cap: 'Cyklus je ve vývojovém diagramu slučovací + rozhodovací blok se zpětnou šipkou; ve strukturogramu vnořený obdélník pod „dokud“.' },
      { t: 'grid', head: ['Pseudokód', 'C++'], rows: [
        ['začátek<br>&nbsp;&nbsp;čti(A); čti(B);<br>&nbsp;&nbsp;MOD := A;<br>&nbsp;&nbsp;dokud MOD ≥ B opakuj<br>&nbsp;&nbsp;&nbsp;&nbsp;MOD := MOD − B;<br>&nbsp;&nbsp;piš(MOD);<br>konec.', 'cin &gt;&gt; A; cin &gt;&gt; B;<br>MOD = A;<br>while (MOD &gt;= B)<br>&nbsp;&nbsp;{ MOD = MOD − B; }<br>cout &lt;&lt; MOD;']
      ] },
      { t: 'p', x: 'Testovací tabulka pro A = 17, B = 5: MOD = 17 → 12 → 7 → 2, protože 2 &lt; 5, cyklus končí; výsledek <b>2</b> (17 mod 5 = 2 ✔).' },
      { t: 'ex', x: '<b>Obecná mocnina X<sup>Y</sup></b> bez funkce mocniny (X, Y celá kladná): MOC := 1; I := 1; <b>dokud I ≤ Y</b> opakuj { MOC := MOC · X; I := I + 1 }; piš MOC. Test pro X = 3, Y = 4: MOC = 1 → 3 → 9 → 27 → <b>81</b>.' },
      { t: 'ex', x: '<b>N-tý člen geometrické posloupnosti</b> A<sub>N</sub> = A<sub>1</sub> · Q<sup>N−1</sup>: čti A1, Q, N; AN := A1; I := 1; <b>dokud I ≤ N − 1</b> opakuj { AN := AN · Q; I := I + 1 }; piš AN. Test A<sub>1</sub> = 2, Q = 3, N = 5: 2 · 3<sup>4</sup> = <b>162</b>.' },
      { t: 'warn', x: 'Ve stromečkovém strukturogramu u posloupnosti je u cyklu ponechána podmínka „I ≤ Y“ z předchozího příkladu – správně je <b>I ≤ N − 1</b> (jak je i v plošném strukturogramu a vývojovém diagramu na téže stránce).' }
    ] },
    { title: 'Příklady ze cvičení: MIN a MAX', blocks: [
      { t: 'p', x: 'Úloha: vybrat <b>maximální a minimální prvek</b> z celých čísel. Algoritmus je u všech tří zdrojů dat stejný (první prvek = počáteční MAX i MIN, v cyklu dvě selekce), liší se jen <b>čtení dat</b> a <b>podmínka cyklu</b>:' },
      { t: 'table', head: ['Zdroj čísel', 'Příprava', 'Podmínka cyklu', 'Posun na další prvek'], rows: [
        ['<b>pole P</b> (100 prvků, C++ int P[101])', 'I := 1; MAX := P[1]; MIN := P[1]', 'I ≤ 100', 'I := I + 1; prvek P[I]'],
        ['<b>sekvenční soubor F</b> (neznámý počet prvků)', 'otevři F; čti X z F; MAX := X; MIN := X', 'ne EOF(F)', 'čti X z F'],
        ['<b>klávesnice</b> (konec = 0)', 'čti X; MAX := X; MIN := X', 'X ≠ 0', 'čti X']
      ] },
      { t: 'flow', title: 'Tělo cyklu (pro všechny varianty)', steps: [
        { h: 'Selekce 1', x: 'je-li prvek &gt; MAX, pak MAX := prvek' },
        { h: 'Selekce 2', x: 'je-li prvek &lt; MIN, pak MIN := prvek' },
        { h: 'Posun', x: 'načti / vyber další prvek' }
      ] },
      { t: 'ex', x: 'Z klávesnice 4, 9, −2, 7, 0: MAX = MIN = 4; 9 → MAX = 9; −2 → MIN = −2; 7 beze změny; 0 ukončí cyklus a <b>nezapočítá se</b>. Výstup: <b>MAX = 9, MIN = −2</b>.' },
      { t: 'tip', x: 'Počáteční MAX a MIN musí být <b>skutečný prvek</b> dat (první), ne pevná konstanta – jinak by nefungovaly pro libovolná čísla (např. všechna záporná). Datová struktura určuje strukturu programu: pole → cyklus s pevným počtem opakování, soubor → cyklus do EOF.' }
    ] },
    { title: 'Příklady ze cvičení: matice a diagonály', blocks: [
      { t: 'p', x: 'Matice M velikosti N × N (N = 20), C++ <code>int M[21][21]</code> (číslování od 1, proto rozsah 21); I = řádek, J = sloupec. <b>Hlavní diagonála:</b> I = J, nad ní I &lt; J, pod ní I &gt; J. <b>Vedlejší diagonála:</b> I = N − J + 1, nad ní I &lt; N − J + 1, pod ní I &gt; N − J + 1.' },
      { t: 'ex', x: '<b>Zjisti počet lichých a součet sudých čísel</b> v matici celých kladných čísel (a) na vedlejší diagonále, (b) pod hlavní diagonálou. Dva vnořené cykly (I od 1 do 20, J od 1 do 20); POL := 0; SOS := 0; uvnitř selekce: <b>(a) je-li I = 20 − J + 1</b>, resp. <b>(b) je-li I &gt; J</b> → další selekce <b>je-li M[I][J] mod 2 = 0</b>, pak SOS := SOS + M[I][J], jinak POL := POL + 1. Na konci piš POL, SOS.' },
      { t: 'tip', x: 'Počet prvků: vedlejší diagonála má N = 20 prvků, pod hlavní diagonálou je N(N − 1)/2 = 190 prvků.' }
    ] }
  ],
  mistakes: [
    'Považovat za algoritmus postup, který <b>nemusí skončit</b> nebo v jehož kroku není jednoznačně dáno, co dál (porušení konečnosti / determinismu).',
    'Tvrdit, že správnost algoritmu „ověří“ několik povedených testů – testy mohou správnost jen <b>vyvrátit</b> (protipříklad).',
    'Zaměnit paměťovou složitost s délkou programu – určují ji nároky na <b>reprezentaci dat</b>.',
    'V rozkladu použít jiný způsob než sekvenci, selekci a iteraci (např. libovolný skok).',
    'Nastavit počáteční MIN / MAX na pevnou konstantu místo prvního prvku; u klávesnice započítat ukončující 0.'
  ],
  qa: [
    { q: 'Co je algoritmus a jaké má vlastnosti?', a: 'Konečná posloupnost elementárních kroků, kde je po každém kroku jednoznačně dáno, co dál. Vlastnosti: mechanický, deterministický, hromadný a univerzální, konečný (rezultativní), správný (korektní).' },
    { q: 'Jak se ověřuje správnost algoritmu?', a: 'Obecně jen u velmi jednoduchých; u složitějších se testuje parciální korektnost. Nesprávnost stačí vyvrátit jediným protipříkladem; průběh se zapisuje do testovací tabulky, testovací data pokrývají všechny cesty, hraniční a nepřípustné hodnoty.' },
    { q: 'Čím se liší časová a prostorová složitost?', a: 'Časová (operační) je počet operací v nejhorším nebo průměrném případě; prostorová je dána paměťovými nároky na reprezentaci dat, ne délkou programu. Obě se vyjadřují asymptoticky (řádem růstu).' },
    { q: 'Seřaďte složitosti od nejmenší po největší.', a: '1 &lt; log n &lt; n &lt; n · log n &lt; n² &lt; n³ &lt; 2<sup>n</sup> &lt; n! &lt; n<sup>n</sup> (konstantní, logaritmická, lineární, linearitmická, kvadratická, kubická, exponenciální, faktoriální).' },
    { q: 'Jak se zapisuje algoritmus?', a: 'Volným textem, graficky (vývojový diagram, stromečkový a plošný strukturogram) a formálně (pseudokód, program).' },
    { q: 'Popište typy uzlů vývojového diagramu.', a: 'Počátek (0 vstupů, 1 výstup), konec (1 vstup, 0 výstupů), výkonný (1, 1), rozhodovací (1 vstup, 2 výstupy), slučovací (2 vstupy, 1 výstup).' },
    { q: 'Jaké jsou základní konstrukce strukturovaného návrhu?', a: 'Sekvence (výkonné bloky za sebou), selekce (rozhodovací blok se dvěma větvemi a slučovací bod) a iterace (cyklus). Rozklad se provádí shora dolů a jiné způsoby rozkladu nejsou přípustné.' },
    { q: 'Jaké jsou výhody a nevýhody stromečkových a plošných strukturogramů?', a: 'Stromečkové: nelze sestavit nestrukturovaný algoritmus, zjemňování a pojmenování celků; nevýhoda – nenormalizované, vyjadřují rozklad, ne časovou následnost. Plošné: názorný publikační nástroj, časová následnost zachována; nevýhoda – není kam psát názvy celků a obtížný odhad velikosti ploch.' },
    { q: 'Určete x, y, z: x := 9; y := 7; z := x + y; jestliže x &lt; y pak x := x + 2 jinak y := y · 3.', a: 'z = 16, podmínka 9 &lt; 7 neplatí → y = 21. Výsledek x = 9, y = 21, z = 16.' },
    { q: 'Navrhněte algoritmus pro zbytek po dělení A mod B bez operace mod.', a: 'MOD := A; dokud MOD ≥ B opakuj MOD := MOD − B; výsledek je MOD. Např. 17 mod 5: 17 → 12 → 7 → 2.' },
    { q: 'Jak najít maximum a minimum ze čísel zadávaných z klávesnice, konec je 0?', a: 'Načti X; MAX := MIN := X; dokud X ≠ 0 opakuj: je-li X &gt; MAX, MAX := X; je-li X &lt; MIN, MIN := X; načti X. Nakonec piš MAX, MIN (ukončující 0 se nezapočítá).' },
    { q: 'Jaké podmínky vybírají prvky na vedlejší diagonále a pod hlavní diagonálou matice N × N?', a: 'Vedlejší diagonála: I = N − J + 1 (pro N = 20 je I = 20 − J + 1). Pod hlavní diagonálou: I &gt; J.' }
  ]
});
