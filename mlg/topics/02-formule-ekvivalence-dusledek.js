registerTopic({
  id: 'formule-ekvivalence-dusledek', order: 2, icon: '📋', title: 'Pravdivostní tabulky, tautologie, ekvivalence a logický důsledek', src: 'podklady', lec: [1], where: 'Přednáška Výroková logika + Cvičení 1',
  summary: 'Jak sestavit pravdivostní tabulku, poznat tautologii, kontradikci a splnitelnou formuli, rozhodnout ekvivalenci a logický důsledek a převést slovní úlohu na formule.',
  vocab: [
    { w: 'ohodnocení', x: 'přiřazení hodnoty 1 nebo 0 každé proměnné ve formuli a dopočtení pravdivosti všech podformulí' },
    { w: 'pravdivostní tabulka', x: 'soupis všech možných ohodnocení formule; pro n proměnných má 2ⁿ řádků' },
    { w: 'tautologie', x: 'formule pravdivá při každém ohodnocení (ve sloupci samé jedničky)' },
    { w: 'kontradikce (spor)', x: 'formule nepravdivá při každém ohodnocení (samé nuly)' },
    { w: 'splnitelná formule', x: 'formule, která je pravdivá aspoň při jednom ohodnocení' },
    { w: 'logická ekvivalence ≡', x: 'dvě formule mají při každém ohodnocení stejnou hodnotu (stejnou tabulku)' },
    { w: 'logický důsledek ⊨', x: 'ψ je důsledkem ϕ, je-li ψ pravdivá všude, kde je pravdivá ϕ' }
  ],
  key: [
    '<b>Tabulka:</b> n proměnných → 2ⁿ řádků; řádky piš systematicky (1…1 až 0…0), po jednotlivých podformulích.',
    '<b>Tautologie</b> = samé 1 · <b>kontradikce</b> = samé 0 · <b>splnitelná</b> = aspoň jedna 1 (tautologie je splnitelná, kontradikce ne).',
    '<b>ϕ ≡ ψ</b> ⇔ ϕ⇔ψ je tautologie ⇔ (ϕ ⊨ ψ a zároveň ψ ⊨ ϕ).',
    '<b>ϕ ⊨ ψ</b> ⇔ ϕ⇒ψ je tautologie. Kontradikce má za důsledek <b>cokoli</b>; tautologie je důsledkem <b>čehokoli</b>.',
    'Důsledek z více předpokladů Γ ⊨ ψ: ψ platí všude, kde platí <b>všechny</b> formule z Γ současně.'
  ],
  sections: [
    { title: 'Pravdivostní tabulka formule', blocks: [
      { t: 'flow', title: 'Postup', steps: [
        { h: 'Vypiš proměnné', x: 'spočítej, kolik jich je (n) – tabulka bude mít 2ⁿ řádků' },
        { h: 'Rozepiš řádky', x: 'systematicky od samých jedniček k samým nulám (binárně dolů): 11, 10, 01, 00 resp. 111, 110, … 000' },
        { h: 'Přidej sloupce pro podformule', x: 'od nejvnitřnějších závorek ven; každou negaci a každou spojku zvlášť' },
        { h: 'Přečti poslední sloupec', x: 'všechny 1 → tautologie · všechny 0 → kontradikce · aspoň jedna 1 → splnitelná' }
      ] },
      { t: 'ex', x: '<b>A ⇒ (¬B ⇒ A)</b> – dvě proměnné, čtyři řádky.' },
      { t: 'grid', head: ['A', 'B', '¬B', '¬B⇒A', 'A⇒(¬B⇒A)'], rows: [
        ['1', '1', '0', '1', '1'],
        ['1', '0', '1', '1', '1'],
        ['0', '1', '0', '1', '1'],
        ['0', '0', '1', '0', '1']
      ] },
      { t: 'p', x: 'Poslední sloupec jsou samé jedničky → formule je <b>tautologie</b>. (Důvod: je-li A = 1, je závěr ¬B⇒A pravdivý, a tedy i celá implikace; je-li A = 0, platí implikace „zadarmo“ – předpoklad je nepravdivý.)' },
      { t: 'widget', name: 'tt', how: ['Do pole ϕ napiš formuli (proměnné A–E, spojky ¬ ∧ ∨ ⇒ ⇔ ⊕ ↑ ↓ – dají se vkládat tlačítky pod polem).', 'Tabulka má sloupec pro každou podformuli; <b>poslední (červeně) je výsledek celé formule</b>.', 'Pod tabulkou je určení formule (tautologie / kontradikce / splnitelná) a její ÚDNT a ÚKNT.', 'Do pole ψ napiš druhou formuli – widget rozhodne o ekvivalenci a logickém důsledku a při neplatnosti ukáže protipříklad.'], sol: '<b>A ⇒ (¬B ⇒ A)</b> má v posledním sloupci samé jedničky (viz tabulka výše) → <b>tautologie</b>. Druhá ukázka: ϕ = A ∧ B, ψ = A ∨ B → ψ je logickým důsledkem ϕ (kdykoli platí A ∧ B, platí A ∨ B), ale ne naopak.', f: 'A ⇒ (¬B ⇒ A)', title: 'Pravdivostní tabulka libovolné formule (a ověření ekvivalence a důsledku)', cap: 'Do druhého pole ψ napiš další formuli a widget rozhodne, zda jsou ϕ a ψ ekvivalentní a zda ψ plyne z ϕ (i s protipříkladem).' },
      { t: 'ex', x: '<b>(¬A ⇔ B) ∧ ¬(¬B ∨ C)</b> – tři proměnné, osm řádků.' },
      { t: 'grid', head: ['A', 'B', 'C', '¬A⇔B', '¬(¬B∨C)', 'celá formule'], rows: [
        ['1', '1', '1', '0', '0', '0'],
        ['1', '1', '0', '0', '1', '0'],
        ['1', '0', '1', '1', '0', '0'],
        ['1', '0', '0', '1', '0', '0'],
        ['0', '1', '1', '1', '0', '0'],
        ['0', '1', '0', '1', '1', '1'],
        ['0', '0', '1', '0', '0', '0'],
        ['0', '0', '0', '0', '0', '0']
      ] },
      { t: 'p', x: 'Jediná jednička je v řádku A = 0, B = 1, C = 0 → formule je <b>splnitelná</b>, ale není tautologie ani kontradikce.' },
      { t: 'tip', x: 'Hodnotu „1“ ve sloupci ¬(¬B∨C) dostaneš jen tehdy, když je ¬B∨C nepravdivé, tj. ¬B = 0 a C = 0 (B = 1, C = 0). Takovou zkratkou si ušetříš čas při počítání.' }
    ] },
    { title: 'Tautologie, kontradikce a splnitelnost', blocks: [
      { t: 'def', term: 'Tautologie · kontradikce · splnitelná formule', x: 'Formule se dělí podle pravdivosti při různých ohodnoceních:', items: ['<b>tautologie</b> je pravdivá při každém ohodnocení', '<b>kontradikce</b> je nepravdivá při každém ohodnocení', '<b>splnitelná</b> je pravdivá aspoň při jednom ohodnocení', 'tautologii / kontradikci někdy značíme jen symbolem 1 / 0'] },
      { t: 'svg', title: 'Jak spolu souvisejí druhy formulí', x: MLG.vennFormule(), cap: 'Splnitelné formule mají aspoň jednu 1; tautologie (samé 1) je jejich zvláštní případ, kontradikce (samé 0) splnitelná není. Příklady: A ∧ B, A ∨ ¬A, A ∧ ¬A.' },
      { t: 'ex', x: '<b>(A ∨ ¬B ∨ ¬C) ⇒ (A ∧ B)</b> – jak se tabulka čte.' },
      { t: 'grid', head: ['A', 'B', 'C', 'A∨¬B∨¬C', 'A∧B', 'výsledek'], rows: [
        ['1', '1', '1', '1', '1', '1'],
        ['1', '1', '0', '1', '1', '1'],
        ['1', '0', '1', '1', '0', '0'],
        ['1', '0', '0', '1', '0', '0'],
        ['0', '1', '1', '0', '0', '1'],
        ['0', '1', '0', '1', '0', '0'],
        ['0', '0', '1', '1', '0', '0'],
        ['0', '0', '0', '1', '0', '0']
      ] },
      { t: 'p', x: 'Ve výsledku jsou jedničky i nuly → <b>není</b> tautologie, <b>není</b> kontradikce, ale je <b>splnitelná</b>.' },
      { t: 'grid', head: ['Cvičení 1, úloha 2', 'Formule', 'Výsledek'], rows: [
        ['(a)', '(¬A ⇒ (A ∨ ¬B))′', 'splnitelná (tabulka: 0, 0, 1, 0), ne tautologie'],
        ['(b)', 'A ⇒ (B ⇒ A)', 'tautologie'],
        ['(c)', '(A ∨ B) ⇒ (¬A ∨ C)', 'splnitelná, ne tautologie'],
        ['(d)', '(A ∨ B) ⇔ (¬A ⇒ B)', 'tautologie'],
        ['(e)', '(A ∧ B) ⇔ (A ⇒ ¬B)', 'kontradikce'],
        ['(f)', '(A ⇒ B) ∨ (A ∧ ¬B)', 'tautologie']
      ] },
      { t: 'p', x: 'Tabulku pro (a) vyjde (řádky 11, 10, 01, 00): <b>0, 0, 1, 0</b>. Protože ¬A⇒(A∨¬B) je nepravdivé jen pro A = 0, B = 1, vnější negace dává jedinou jedničku právě tam.' },
      { t: 'grid', head: ['Cvičení 1, úloha 3', 'Formule', 'Splnitelná?'], rows: [
        ['(a)', '(A ∧ B) ⇔ (¬B ∧ ¬C)', 'ano'],
        ['(b)', '(((A⇒B)⇒C)⇒D)⇒E', 'ano, např. je-li E pravda'],
        ['(c)', '(¬A ⇒ (B ∧ ¬C)) ⇔ ((B⇒C) ∧ ¬A)', 'ne – je to kontradikce'],
        ['(d)', '¬A ∧ ((B ⇒ A) ∧ B)', 'ne – kontradikce (B ⇒ A s B = 1 vynutí A = 1, ale ¬A požaduje A = 0)']
      ] },
      { t: 'tip', x: 'U <b>splnitelnosti</b> nemusíš sestavovat celou tabulku – stačí najít <b>jedno</b> ohodnocení, které formuli učiní pravdivou (u (b) např. E = 1: pak je celá implikace pravdivá). Naopak <b>nesplnitelnost</b> (kontradikci) je nutné ukázat pro všechna ohodnocení nebo úvahou jako u (d).' }
    ] },
    { title: 'Logická ekvivalence', blocks: [
      { t: 'def', term: 'Logická ekvivalence ϕ ≡ ψ', x: 'Formule ϕ a ψ jsou logicky ekvivalentní právě tehdy, když nabývají stejných pravdivostních hodnot při každém ohodnocení.', items: ['mají stejnou pravdivostní tabulku', '<b>věta:</b> ϕ a ψ jsou ekvivalentní právě tehdy, když je formule <b>ϕ ⇔ ψ</b> tautologií'] },
      { t: 'warn', x: 'Nezaměňuj <b>⇔</b> (spojka uvnitř formule, vytváří novou formuli) a <b>≡</b> (tvrzení o dvou formulích „mají stejnou tabulku“). Vztah: ϕ ≡ ψ platí, právě když ϕ ⇔ ψ je tautologie.' },
      { t: 'grid', head: ['Dvojice (přednáška)', 'Ekvivalentní?', 'Poznámka'], rows: [
        ['¬(¬A) a A', 'ano', 'zákon dvojité negace'],
        ['A ∧ (B ∨ C) a (A∧B) ∨ (A∧C)', 'ano', 'distributivita'],
        ['A ⇒ (B ⇒ (C ⇒ (D ⇒ E))) a A∨B∨C∨D∨E', 'ne', 'správně by bylo ¬A ∨ ¬B ∨ ¬C ∨ ¬D ∨ E'],
        ['(A∨B)′ a A′ ∧ B′', 'ano', 'De Morganovo pravidlo']
      ] },
      { t: 'p', x: 'Třetí dvojici vyvrátí třeba ohodnocení A = B = C = D = 0, E = 0: levá strana (A⇒…) je pravdivá, protože A = 0, ale pravá A∨B∨C∨D∨E je nepravdivá. <b>Stačí protipříklad</b> – jedno ohodnocení s různými hodnotami.' },
      { t: 'grid', head: ['Cvičení 1, úloha 4', 'Dvojice formulí', 'Ekvivalentní?'], rows: [
        ['(a)', 'A ∨ (B ∧ C) a (A ∨ B) ∧ (A ∨ C)', 'ano'],
        ['(b)', '(A⇒B) ∧ (B⇒C) a A⇒C', 'ne'],
        ['(c)', '(¬A ∨ B) ∧ (A ∨ ¬B) a A⇔B', 'ano'],
        ['(d)', 'A⇔B a ((A⇒B) ⇒ (B⇒A)′)′', 'ano'],
        ['(e)', '(A⇒B) ⇒ (A⇒C) a (B⇒A) ⇒ (B⇒C)', 'ano'],
        ['(f)', '(A⇒B) ⇒ C a (A⇒C) ⇔ (B ∧ ¬C)′', 'ne']
      ] },
      { t: 'tip', x: 'U (b): A⇒C je jen <i>důsledek</i> formule (A⇒B)∧(B⇒C) (tranzitivita implikace), ne její ekvivalent. Protipříklad: A = 1, B = 0, C = 1 → A⇒C = 1, ale (A⇒B)∧(B⇒C) = 0∧1 = 0.' }
    ] },
    { title: 'Logický důsledek', blocks: [
      { t: 'def', term: 'Logický důsledek ϕ ⊨ ψ', x: 'Formule ψ je logickým důsledkem formule ϕ, pokud je ψ pravdivá při každém ohodnocení, při kterém je pravdivá ϕ.', items: [] },
      { t: 'def', term: 'Důsledek množiny formulí Γ ⊨ ψ', x: 'ψ je pravdivá při každém ohodnocení, při kterém jsou pravdivé <b>všechny</b> formule z množiny Γ.' },
      { t: 'law', ref: 'Věty', x: 'ϕ ⊨ ψ ⇔ formule <b>ϕ ⇒ ψ</b> je tautologie. ϕ ≡ ψ ⇔ (ϕ ⊨ ψ a zároveň ψ ⊨ ϕ).' },
      { t: 'tip', x: '<b>Pozorování:</b> jakákoli formule je důsledkem <b>kontradikce</b> (kontradikce nikdy není pravdivá, takže není co ověřovat); <b>tautologie</b> je důsledkem jakékoli formule (je pravdivá všude).' },
      { t: 'svg', title: 'Logický důsledek jako inkluze', x: MLG.dusledek(), cap: 'Ohodnocení, kde platí ϕ, leží celá uvnitř ohodnocení, kde platí ψ: ϕ ⊨ ψ. Neexistuje řádek tabulky, kde by ϕ = 1 a ψ = 0.' },
      { t: 'flow', title: 'Jak rozhodnout, že ϕ ⊨ ψ', steps: [
        { h: 'Sestav tabulku', x: 'sloupce pro ϕ i ψ nad stejnými řádky' },
        { h: 'Najdi řádky, kde je ϕ = 1', x: 'jen ty se testují' },
        { h: 'Zkontroluj ψ na těchto řádcích', x: 'je-li všude 1 → ψ je důsledkem; stačí jediné ψ = 0 → není' }
      ] },
      { t: 'grid', head: ['ϕ', 'ψ', 'ψ je důsledkem?', 'Zdůvodnění'], rows: [
        ['A ∨ B', 'A ⇒ B', 'ne', 'A = 1, B = 0: ϕ je pravdivá, ψ nepravdivá'],
        ['A ∧ ¬A', ' ¬A ⇔ B', 'ano', 'ϕ je kontradikce → důsledkem je cokoli']
      ] },
      { t: 'grid', head: ['Cvičení 1', 'Zadání', 'Výsledek'], rows: [
        ['Úl. 5', 'Která z C, A⇒B, A∧¬C je důsledkem (A⇔¬B) ∨ C?', 'žádná'],
        ['Úl. 6', 'Která z A∨¬C, A⇒A, A∧B∧¬C je důsledkem A ∧ ¬B ∧ C?', 'A ∨ ¬C a A⇒A'],
        ['Úl. 7a', 'ϕ = (A⇒B)′ ∧ B, ψ = C', 'ano (ϕ je kontradikce)'],
        ['Úl. 7b', 'ϕ = (A⇔B) ∧ C, ψ = (¬A ∧ C) ∨ B', 'ano'],
        ['Úl. 7c', 'ϕ = (¬A ∧ B) ⇒ C, ψ = A ⇒ (B ∨ C)', 'ne']
      ] },
      { t: 'p', x: 'Úl. 7a: ϕ = ¬(A⇒B) ∧ B = (A∧¬B) ∧ B je vždy nepravdivá (požaduje B = 0 i B = 1), tedy kontradikce → ψ = C je důsledkem. U 7c je protipříklad A = 1, B = 0, C = 0: ϕ = (0 ⇒ 0) = 1, ale ψ = 1 ⇒ (0∨0) = 0, takže ψ není důsledkem.' },
      { t: 'ex', x: '<b>Dám si moučník? (přednáška)</b> „Polévku nebo hlavní jídlo si určitě dám, ovšem jestliže si dám hlavní jídlo, nedám si rozhodně polévku i moučník.“ Proměnné P – polévka, H – hlavní jídlo, M – moučník. Předpoklad: (P∨H) ∧ (H ⇒ ¬(P∧M)). Řádky P H M, kde předpoklad platí: <b>110, 101, 100, 011, 010</b>.' },
      { t: 'grid', head: ['Tvrzení', 'Je důsledkem?', 'Protipříklad'], rows: [
        ['Dám si polévku (P)', 'ne', 'P = 0, H = 1 (řádky 011, 010)'],
        ['Dám si hlavní jídlo (H)', 'ne', 'H = 0, P = 1 (řádky 101, 100)'],
        ['(H ∧ M) ⇒ ¬P', 'ano', 'na všech pěti řádcích platí']
      ] },
      { t: 'p', x: 'Třetí tvrzení je důsledkem: platí-li H i M, plyne z předpokladu H ⇒ ¬(P∧M), že nesmí platit P (jinak by P∧M platilo).' }
    ] },
    { title: 'Slovní úlohy (převod na formule)', blocks: [
      { t: 'flow', title: 'Postup', steps: [
        { h: 'Zaveď proměnné', x: 'každé jednoduché tvrzení (pozvu tetu, jdu do bazénu…) dostane jedno písmeno' },
        { h: 'Přepiš věty na formule', x: 'každá podmínka z textu = jedna formule; předpoklady spoj konjunkcí' },
        { h: 'Najdi modely', x: 'sestav tabulku a vypiš řádky, kde jsou pravdivé všechny předpoklady' },
        { h: 'Ověř tvrzení', x: 'tvrzení je důsledkem, jen když platí ve <b>všech</b> těchto řádcích' }
      ] },
      { t: 'ex', x: '<b>Makléř</b> (A – výtah, B – dvě koupelny, C – světlý byt). Makléř tvrdí: (1) A ⇒ ¬B („s výtahem nemůžete mít dvě koupelny“), (2) ¬(¬A ∧ ¬B ∧ ¬C) („nenabídnu tmavý bez výtahu s jednou koupelnou“), (3) C ⇒ (A ∧ B) („všechny světlé mají dvě koupelny a výtah“).' },
      { t: 'grid', head: ['A', 'B', 'C', '(1)', '(2)', '(3)', 'všechny platí?'], rows: [
        ['1', '1', '1', '0', '1', '1', 'ne'],
        ['1', '1', '0', '0', '1', '1', 'ne'],
        ['1', '0', '1', '1', '1', '0', 'ne'],
        ['1', '0', '0', '1', '1', '1', '<b>ano</b>'],
        ['0', '1', '1', '1', '1', '0', 'ne'],
        ['0', '1', '0', '1', '1', '1', '<b>ano</b>'],
        ['0', '0', '1', '1', '1', '0', 'ne'],
        ['0', '0', '0', '1', '0', '1', 'ne']
      ] },
      { t: 'p', x: 'Platí-li všechna makléřova tvrzení současně, je vždy <b>C = 0</b>: byt nesmí být světlý. V nabídce tedy není žádný světlý byt, tedy ani světlý byt s výtahem a dvěma koupelnami, jak chtěl zákazník. Zbývají jen tmavé byty: buď s výtahem a jednou koupelnou, nebo bez výtahu se dvěma koupelnami.' },
      { t: 'ex', x: '<b>Svatba (cvičení 1, úl. 8).</b> T – teta Máňa, F – děda František, K – bratranec Karel. Podmínky: (F∧K) ⇒ T; T ∨ F ∨ K (aspoň jeden z nich); ¬F ⇒ ¬T (bez dědy nepozvou tetu).' },
      { t: 'grid', head: ['T', 'F', 'K', 'Splňuje všechny podmínky'], rows: [
        ['1', '1', '1', 'ano'],
        ['1', '1', '0', 'ano'],
        ['0', '1', '0', 'ano'],
        ['0', '0', '1', 'ano'],
        ['ostatních 4 řádků', '', '', 'ne']
      ] },
      { t: 'grid', head: ['Tvrzení', 'Je důsledkem?', 'Protipříklad'], rows: [
        ['(a) Pozvou dědu Františka.', 'ne', 'pozvou jen Karla (T=0, F=0, K=1)'],
        ['(b) Teta Máňa právě tehdy, když Karel', 'ne', 'pozvou tetu a dědu, ale ne Karla (T=1, F=1, K=0)'],
        ['(c) Děda nebo Karel', 'ano', 'v každém modelu je F = 1 nebo K = 1']
      ] },
      { t: 'ex', x: '<b>Starosta (úl. 9).</b> Š – postaví se škola, K – kanalizace, S – nové silnice (= nový asfalt). Podmínky: ¬(Š∧K∧S) („na všechny tři nebudou peníze“); Š ⇒ K (škola nesmí být kolaudována před kanalizací); K ⇒ S (kopání kanalizace vynutí nový asfalt).' },
      { t: 'p', x: 'Je-li Š = 1, pak K = 1 a z K ⇒ S je S = 1; to ale porušuje ¬(Š∧K∧S). Proto musí být <b>Š = 0</b>: škola se nepostaví – starosta to „květnatě vyjádřil“.' },
      { t: 'ex', x: '<b>Odpoledne (úl. 10).</b> P – bazén, F – fitness, C – cukrárna, K – kadeřník. Podmínky: aspoň dvě akce; ¬(P∧K); C ⇒ (P∨F); (P∧F) ⇒ C; K ⇒ (právě dvě akce celkem); (K∧F) ⇒ P.' },
      { t: 'grid', head: ['P', 'F', 'C', 'K', 'Program'], rows: [
        ['1', '1', '1', '0', 'bazén + fitness + cukrárna'],
        ['1', '0', '1', '0', 'bazén + cukrárna'],
        ['0', '1', '1', '0', 'fitness + cukrárna']
      ] },
      { t: 'warn', x: 'Klíč ke cvičení uvádí jen první dvě možnosti (fitness + bazén + cukrárna, nebo bazén + cukrárna). Podle zadání v podkladech ale splňuje všechny podmínky i <b>fitness + cukrárna</b> (do cukrárny se jde po fitku, kadeřník ani bazén nejsou, počet akcí je 2). Pokud to chceš vyloučit, musí zadání uvádět další omezení – ověř si to u cvičícího.' }
    ] }
  ],
  mistakes: [
    'U implikace u kontrapříkladu pozor na pořadí: protipříklad k A⇒B je A = 1, B = 0, ne opačně.',
    'Zaměnit ϕ ⊨ ψ s ϕ ≡ ψ – důsledek jde jedním směrem, ekvivalence oběma.',
    'U důsledku testovat všechny řádky; správně se testují jen řádky, kde je ϕ pravdivá.',
    'Tvrdit, že tautologie není splnitelná – tautologie je splnitelná (pravdivá všude).',
    'Zapomenout, že důsledek z více předpokladů vyžaduje platnost <b>všech</b> předpokladů současně.',
    'Ve slovních úlohách vynechat podmínku z textu (např. „aspoň jeden z nich“) – modelů je pak příliš mnoho.'
  ],
  qa: [
    { q: 'Kolik řádků má pravdivostní tabulka formule se čtyřmi proměnnými?', a: '2⁴ = <b>16</b> řádků.' },
    { q: 'Jak poznáš tautologii a kontradikci z tabulky?', a: 'Tautologie má ve výsledném sloupci samé jedničky, kontradikce samé nuly.' },
    { q: 'Jak rozhodneš, že dvě formule jsou ekvivalentní?', a: 'Mají stejnou tabulku; nebo je formule ϕ⇔ψ tautologií.' },
    { q: 'Jak ověříš, že ψ je logickým důsledkem ϕ?', a: 'Na všech řádcích, kde je ϕ = 1, musí být i ψ = 1; nebo je ϕ⇒ψ tautologie.' },
    { q: 'Co je důsledkem kontradikce?', a: 'Jakákoli formule.' },
    { q: 'Je splnitelná formule vždy tautologie?', a: 'Ne – splnitelná potřebuje aspoň jednu 1, tautologie samé jedničky.' }
  ]
});
