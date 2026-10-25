registerTopic({
  id: 'orientovane-grafy', order: 13, icon: '➡️', title: 'Orientované grafy, kořenové stromy a notace výrazů', src: 'podklady', lec: [8],
  where: 'Přednáška Orientované grafy (Hora) + Cvičení 5 (úlohy 1–6)',
  summary: 'Hrany se směrem: vstupní a výstupní stupeň, silná a slabá souvislost, Eulerovský tah s jednosměrkami, kořenové a binární stromy a prefixový, infixový a postfixový zápis výrazů.',
  vocab: [
    { w: 'orientovaný graf', x: 'G = (V, E, p), kde p přiřazuje každé hraně <b>uspořádanou</b> dvojici (a, b): a je počáteční, b koncový vrchol' },
    { w: 'deg⁺(a), deg⁻(a)', x: 'počet hran, které v a <b>začínají</b> (výstupní stupeň) a které v a <b>končí</b> (vstupní stupeň)' },
    { w: 'silně souvislý', x: 'z každého vrcholu vede orientovaná cesta do všech ostatních' },
    { w: 'slabě souvislý', x: 'souvislý, když se na směr hran nebere ohled' },
    { w: 'kořen', x: 'vrchol, ze kterého vede orientovaná cesta do všech ostatních' },
    { w: 'binární strom', x: 'kořenový strom, kde má každý vrchol levého a pravého následníka (nebo je list)' },
    { w: 'preorder / inorder / postorder', x: 'pořadí zápisu při procházení stromu: uzel–levý–pravý / levý–uzel–pravý / levý–pravý–uzel' }
  ],
  key: [
    'Orientovaný graf (bez násobných hran) = <b>libovolná relace</b> na V; stupeň vrcholu se píše jako dvojice (deg⁺, deg⁻).',
    '<b>Uzavřený</b> Eulerovský tah ⇔ slabě souvislý a všude deg⁺ = deg⁻.',
    '<b>Otevřený</b> Eulerovský tah ⇔ právě jeden vrchol s deg⁺ = deg⁻ + 1 (start), právě jeden s deg⁺ = deg⁻ − 1 (cíl), jinde rovnost.',
    'Kořenový strom: z kořene vede do každého vrcholu <b>právě jedna</b> cesta; do každého vrcholu kromě kořene vede právě jedna hrana.',
    'Prefix i postfix jsou jednoznačné <b>bez závorek</b>, infix závorky potřebuje.'
  ],
  sections: [
    { title: 'Orientovaný graf a stupně', blocks: [
      { t: 'def', term: 'Orientovaný graf', x: 'Trojice G = (V, E, p), kde:', items: ['V je neprázdná konečná množina vrcholů, E konečná množina hran', 'p: E → {(a, b) | a, b ∈ V} přiřazuje hraně uspořádanou dvojici', 'bez vícenásobných hran je orientovaný graf totéž co <b>relace E na V</b>', 'bez smyček navíc antireflexivní relace'] },
      { t: 'ex', x: '<b>Přednáška:</b> V = {a, b, c, d, e}, p(e₁) = (a, b), p(e₂) = (c, c) – smyčka, p(e₃) = (e, d), p(e₄) = (b, c), p(e₅) = (b, d), p(e₆) = (d, e). Vrchol b má stupeň (deg⁺, deg⁻) = (2, 1).' },
      { t: 'p', x: 'Izomorfismus funguje stejně jako u neorientovaných grafů, jen musí zachovat i směr: (a, b) je hrana G₁ ⇔ (I(a), I(b)) je hrana G₂. Sled, tah, cesta a kružnice se definují stejně, ale hranami se smí jít jen <b>po směru</b>.' }
    ] },
    { title: 'Silná a slabá souvislost', blocks: [
      { t: 'versus', title: 'Silně × slabě souvislý', cols: [
        { h: 'Silně souvislý', items: ['z <b>každého</b> vrcholu do <b>každého</b> po směru šipek', 'např. orientovaná kružnice', 'jednosměrky, po kterých se dá všude dojet i zpátky'] },
        { h: 'Slabě souvislý', items: ['souvislý, když šipky „zapomeneme“', 'např. a → b ← c', 'silnice existují, ale jednosměrky mohou bránit návratu'] }
      ], x: 'Silná souvislost je přísnější: každý silně souvislý graf je i slabě souvislý, opačně to neplatí. Graf a → b ← c je slabě souvislý (jako obyčejný graf je to cesta), ale silně ne – z b se nedostaneš nikam. V dopravě odpovídá silná souvislost městu, kde se po jednosměrkách dostaneš odkudkoli kamkoli; slabá jen tomu, že silnice tvoří jeden celek.' }
    ] },
    { title: 'Eulerovský tah v orientovaném grafu', blocks: [
      { t: 'law', ref: 'Věty (problém popeláře s jednosměrkami)', x: 'Slabě souvislý orientovaný graf má <b>uzavřený</b> Eulerovský tah, právě když pro každý vrchol platí deg⁻(a) = deg⁺(a). Má <b>otevřený</b> Eulerovský tah, právě když existuje právě jeden vrchol z s deg⁺(z) = deg⁻(z) + 1, právě jeden vrchol k s deg⁺(k) = deg⁻(k) − 1 a pro ostatní platí rovnost. Tah pak začíná v z a končí v k.' },
      { t: 'tip', x: 'Do každého vrcholu, kterým tah „projde“, musí vést stejně hran dovnitř jako ven. Jen start má o jednu výstupní hranu víc a cíl o jednu vstupní.' },
      { t: 'p', x: 'Eulerovský orientovaný graf bez vrcholů stupně (0, 0) musí být slabě souvislý (Cvičení 5, úloha 2: grafy a) a c) jedním tahem nakreslit jdou, b) ne).' }
    ] },
    { title: 'Kořenové a binární stromy', blocks: [
      { t: 'def', term: 'Kořenový strom', x: 'Orientovaný graf s vrcholem v (kořenem), pro který platí:', items: ['z v vede orientovaná cesta do všech ostatních vrcholů', 'do v nekončí žádná hrana', 'do každého vrcholu a ≠ v vede z v <b>právě jedna</b> orientovaná cesta'] },
      { t: 'ul', items: [
        'Kořenový strom má <b>právě jeden kořen</b>; bez šipek je to obyčejný strom.',
        'Do každého vrcholu kromě kořene končí <b>právě jedna</b> hrana.',
        'Pro hranu (a, b) je a <b>otec</b> (předchůdce) a b <b>syn</b> (následník); vrcholy, ze kterých nevede hrana, jsou <b>listy</b>.',
        '<b>Podstrom</b> určený vrcholem v tvoří všechny vrcholy dosažitelné z v.',
        '<b>Binární strom:</b> každý vrchol má levého a pravého následníka; podstromy značíme L(x) a R(x).'
      ] }
    ] },
    { title: 'Procházení stromu a notace výrazů', blocks: [
      { t: 'grid', head: ['Pořadí', 'Zápis', 'Notace výrazu'], rows: [
        ['inorder', 'L(x) x R(x)', 'infixová – běžný zápis, potřebuje závorky'],
        ['preorder', 'x L(x) R(x)', 'prefixová (polská) – operátor před operandy'],
        ['postorder', 'L(x) R(x) x', 'postfixová – operátor za operandy']
      ] },
      { t: 'widget', fig: MLG.vyrazStrom(), figcap: 'Kořen je operace, která se provádí poslední; listy jsou čísla a proměnné.', name: 'pruchod', how: ['Vyber pořadí průchodu: preorder (uzel, levý, pravý), inorder (levý, uzel, pravý), postorder (levý, pravý, uzel).', 'Strom výrazu: kořen je operace provedená naposled, listy jsou čísla a proměnné.', 'Šipkami ◀ ▶ (nebo klávesami ← →) procházíš kroky; pod obrázkem je vždy <b>co se děje, proč a co se změnilo</b>.', 'Vpravo se postupně píše výstup – prefixový, infixový nebo postfixový zápis.'], sol: 'Výraz x · (x + 2) + (x − 3) : 5: <b>prefix</b> (preorder) + · x + x 2 : − x 3 5, <b>postfix</b> (postorder) x x 2 + · x 3 − 5 : +; <b>infix</b> (inorder) potřebuje závorky.', title: 'Průchod stromem výrazu x · (x + 2) + (x − 3) : 5 (Cvičení 5, úloha 4a)' },
      { t: 'ex', x: '<b>Úloha 5(a): (3x + 2) · (5 − x).</b> Kořen ·, vlevo + (s podstromem 3·x a 2), vpravo − (5 a x).<br>Prefix: <b>· + · 3 x 2 − 5 x</b> · Postfix: <b>3 x · 2 + 5 x − ·</b>' },
      { t: 'ex', x: '<b>Vyhodnocení prefixu (úloha 6a): · + 6 : 8 4 − · 2 5 + 3 6</b> (jednociferná čísla).<br>Operátor bere dva následující celé výrazy: · ( + 6 (8 : 4) ) ( − (2 · 5) (3 + 6) ) = (6 + 2) · (10 − 9) = <b>8</b>.' },
      { t: 'grid', head: ['Úloha 6', 'Výsledek'], rows: [
        ['(a) · + 6 : 8 4 − · 2 5 + 3 6', '8'],
        ['(b) : + · 2 − 3 1 + 1 5 − · 3 3 − 8 4', '2'],
        ['(c) − · + 3 7 − 9 · 7 1 · 8 + 6 − 2 5', '−4'],
        ['(d) + − · 8 4 ^ 5 2 · : 8 2 − + 2 3 1', '23'],
        ['(e) + − · 2 5 6 + 3 1 : + 8 4 2', 'nelze – na konci zbudou symboly, výraz není správně utvořený']
      ] },
      { t: 'tip', x: 'Postfix se vyhodnocuje zásobníkem: čísla ukládáš, operátor vezme dvě horní čísla a vrátí výsledek. Prefix stejně, jen čteš zprava doleva. Proto kalkulačky a překladače závorky nepotřebují.' }
    ] }
  ],
  mistakes: [
    'V orientovaném grafu jít po hraně proti směru šipky.',
    'U Eulerova tahu sčítat deg⁺ + deg⁻ jako u neorientovaného grafu – rozhoduje rozdíl, ne součet.',
    'Plést silnou a slabou souvislost.',
    'V prefixu zapsat operátor až za levý podstrom (to je infix).',
    'U infixu vynechat závorky, které mění pořadí operací.'
  ],
  qa: [
    { q: 'Kdy má slabě souvislý orientovaný graf uzavřený Eulerovský tah?', a: 'Když má každý vrchol stejný vstupní a výstupní stupeň.' },
    { q: 'Co je kořen orientovaného grafu?', a: 'Vrchol, ze kterého vede orientovaná cesta do všech ostatních.' },
    { q: 'Jaký je postfixový zápis (3x + 2) · (5 − x)?', a: '3 x · 2 + 5 x − ·' },
    { q: 'Které notace nepotřebují závorky?', a: 'Prefixová a postfixová.' },
    { q: 'Kolik hran končí v kořeni kořenového stromu?', a: 'Žádná.' },
    { q: 'Je graf a → b ← c silně souvislý?', a: 'Ne, jen slabě – z b se nedostaneš do a ani do c.' }
  ]
});
