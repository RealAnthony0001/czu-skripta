registerTopic({
  id: 'neorientovane-grafy', order: 10, icon: '🕸️', title: 'Neorientované grafy: skóre, izomorfismus, Eulerovské a Hamiltonovské grafy', src: 'podklady', lec: [6],
  where: 'Přednáška Neorientované grafy (Čermák, Hora) + Cvičení 4 (úlohy 1–7) + Doplněk ke cvičení z neorientovaných grafů',
  summary: 'Graf jako vrcholy a hrany, stupeň vrcholu a skóre, kdy jsou dva grafy „stejné“ (izomorfní), jak poznat, zda graf s daným skóre existuje, sled/tah/cesta, souvislost a kreslení jedním tahem.',
  vocab: [
    { w: 'neorientovaný graf', x: 'G = (V, E, p): neprázdná konečná množina vrcholů V, konečná množina hran E a zobrazení p, které každé hraně přiřadí jedno- nebo dvouprvkovou množinu vrcholů' },
    { w: 'smyčka, multigraf', x: 'smyčka začíná i končí ve stejném vrcholu; multigraf má vícenásobné hrany' },
    { w: 'prostý graf', x: 'graf bez smyček a vícenásobných hran (dál uvažujeme jen ty)' },
    { w: 'Dₙ, Kₙ', x: 'diskrétní graf (n vrcholů, žádná hrana) a úplný graf (každé dva vrcholy spojené)' },
    { w: 'deg(a)', x: 'stupeň vrcholu = počet hran, které z něj vycházejí' },
    { w: 'skóre', x: 'posloupnost stupňů všech vrcholů, obvykle zapsaná nerostoucí' },
    { w: 'izomorfní grafy', x: 'grafy, mezi jejichž vrcholy existuje bijekce zachovávající hrany – „stejné až na pojmenování a nakreslení“' },
    { w: 'Eulerovský graf', x: 'graf s tahem, který projde <b>každou hranou</b> právě jednou (kreslení jedním tahem)' },
    { w: 'Hamiltonovský graf', x: 'graf s kružnicí, která projde <b>každým vrcholem</b> právě jednou' }
  ],
  key: [
    '<b>Součet stupňů = 2 × počet hran</b>, je tedy vždy sudý (každá hrana má dva konce).',
    'Izomorfní grafy mají stejný počet vrcholů, hran i stejné skóre – <b>stejné skóre ale izomorfismus nezaručí</b>.',
    'Existenci grafu se skóre ověříš redukcí: odeber největší d₁ a od dalších d₁ čísel odečti 1; opakuj až k samým nulám (existuje) nebo ke spornému stavu.',
    '<b>Sled</b> (cokoli) ⊇ <b>tah</b> (neopakují se hrany) ⊇ <b>cesta</b> (neopakují se vrcholy); uzavřená cesta = kružnice.',
    'Souvislý graf jde nakreslit jedním <b>uzavřeným</b> tahem ⇔ všechny stupně sudé; <b>otevřeným</b> ⇔ právě dva liché vrcholy (začátek a konec).'
  ],
  sections: [
    { title: 'Graf, diagram a prostý graf', blocks: [
      { t: 'def', term: 'Neorientovaný graf', x: 'Trojice G = (V, E, p), kde:', items: ['V je neprázdná konečná množina <b>vrcholů</b>', 'E je konečná množina <b>hran</b>', 'p: E → {{a, b} | a, b ∈ V} určuje, které vrcholy hrana spojuje', 'konkrétní obrázek grafu na papíře je <b>diagram</b> grafu – jeden graf má mnoho diagramů'] },
      { t: 'p', x: 'Grafy popisují úlohy typu „body a spojnice“: města a silnice, lidé a známosti, počítače a kabely. Podstatné je jen to, <b>co je s čím spojené</b>, ne délka nebo tvar čar.' },
      { t: 'ul', items: [
        '<b>Smyčka</b> – hrana, kde p(e) je jednoprvková množina (začíná i končí ve stejném vrcholu).',
        '<b>Multigraf</b> – existují různé hrany e₁, e₂ s p(e₁) = p(e₂).',
        '<b>Prostý graf</b> – bez smyček a vícenásobných hran; dál pracujeme jen s nimi.',
        'Prostý graf je totéž co <b>symetrická antireflexivní relace</b> na V (antireflexivní: žádné x není v relaci samo se sebou).',
        '<b>Diskrétní</b> graf Dₙ nemá žádnou hranu, <b>úplný</b> graf Kₙ má hranu mezi každými dvěma různými vrcholy.'
      ] },
      { t: 'tip', x: 'V Kₙ má každý vrchol stupeň n − 1; ze součtu stupňů tedy plyne, že Kₙ má n(n − 1)/2 hran (K₄ má 6, K₅ 10).' }
    ] },
    { title: 'Stupeň vrcholu, skóre a izomorfismus', blocks: [
      { t: 'def', term: 'Stupeň a skóre', x: 'deg(a) = |{e ∈ E | a ∈ p(e)}| – počet hran, které vrchol obsahují.', items: ['skóre grafu je posloupnost (deg(v₁), …, deg(vₙ))', 'dvě skóre jsou shodná, liší-li se jen pořadím, proto se píše nerostoucí'] },
      { t: 'law', ref: 'Věta (princip sudosti)', x: 'Součet stupňů všech vrcholů libovolného grafu je sudý – každá hrana přispěje ke dvěma vrcholům, součet je tedy 2·|E|.' },
      { t: 'def', term: 'Izomorfismus', x: 'Grafy G₁ a G₂ jsou izomorfní, existuje-li bijekce I: V₁ → V₂ taková, že:', items: ['{a, b} je hranou G₁ ⇔ {I(a), I(b)} je hranou G₂'] },
      { t: 'ul', items: [
        'Izomorfní grafy mají <b>stejný počet vrcholů</b>, <b>stejný počet hran</b> a <b>stejné skóre</b>.',
        'Při hledání neizomorfních grafů proto nejdřív porovnej tyto tři údaje – liší-li se, izomorfní nejsou.',
        'Shodují-li se, hledej přiřazení vrcholů: vrchol stupně 3 musí jít na vrchol stupně 3, jeho sousedé na sousedy atd.'
      ] },
      { t: 'warn', x: 'Stejné skóre je jen <b>nutná</b> podmínka. Například kružnice C₆ a dva oddělené trojúhelníky mají obě skóre (2, 2, 2, 2, 2, 2), ale první je souvislá a druhý ne – izomorfní nejsou.' }
    ] },
    { title: 'Existence grafu s daným skóre', blocks: [
      { t: 'law', ref: 'Věta o skóre', x: 'Prostý graf s nerostoucím skóre (d₁, d₂, …, dₙ) existuje, právě když existuje graf se skóre (d′₂, …, d′ₙ), kde d′ᵢ = dᵢ − 1 pro i ≤ d₁ + 1 a d′ᵢ = dᵢ jinak.' },
      { t: 'widget', fig: MLG.skoreRedukce(), figcap: 'Vrchol s největším stupněm spojíme s d₁ dalšími největšími vrcholy – ty tím ztratí jednu potřebnou hranu.', name: 'skore', how: ['Zadej skóre čísly oddělenými mezerou, nebo klikni na příklad (existuje / neexistuje).', 'Každý krok odebere největší stupeň d₁ a od dalších d₁ největších stupňů odečte 1; vlevo jsou čísla, vpravo se staví samotný graf.', '<b>Samé nuly</b> = graf existuje; <b>záporný stupeň</b> nebo málo zbývajících vrcholů = graf neexistuje.', 'Šipkami ◀ ▶ (nebo klávesami ← →) procházíš kroky; pod obrázkem je vždy <b>co se děje, proč a co se změnilo</b>.'], title: 'Redukce skóre krok za krokem (zadej vlastní skóre)' },
      { t: 'flow', title: 'Postup', steps: [
        { h: 'Seřaď nerostoucí', x: 'a zkontroluj sudý součet (lichý = konec, graf neexistuje)' },
        { h: 'Odeber první číslo d₁', x: 'a od následujících d₁ čísel odečti 1' },
        { h: 'Znovu seřaď a opakuj', x: 'záporné číslo nebo d₁ větší než počet zbylých vrcholů = graf neexistuje' },
        { h: 'Samé nuly', x: 'graf existuje; nakreslíš ho zpětně (přidáváš vrcholy a hrany pozpátku)' }
      ] },
      { t: 'grid', head: ['Cvičení 4, úloha 5', 'Existuje?'], rows: [
        ['(a) (5, 4, 3, 3, 3, 2)', 'ano'],
        ['(b) (7, 6, 6, 5, 3, 3, 2, 2)', '<b>ne</b>'],
        ['(c) (6, 4, 4, 3, 3, 2, 2)', 'ano'],
        ['(d) (4, 4, 4, 3, 3, 3)', '<b>ne</b> (součet 21 je lichý)'],
        ['(e) (7, 5, 5, 4, 4, 2, 2, 1)', 'ano'],
        ['(f) (7, 7, 5, 4, 3, 2, 2, 2)', '<b>ne</b>'],
        ['(g) (5, 5, 4, 4, 4, 3, 3, 2)', 'ano']
      ] },
      { t: 'ex', x: '<b>Vizitky (Cvičení 4, úloha 6):</b> 9 obchodníků, stupně 8, 7, 6, 5, 4, 3, 2, 1 a neznámé z (Zbyšek). Ze sudosti součtu (36 + z) je z sudé; redukce skóre projde jen pro <b>z = 4</b>. Zbyšek ztratil <b>4 vizitky</b> – řešení je jediné.' },
      { t: 'ex', x: '<b>Radkova oslava (přednáška):</b> stupně hostů 9 (Martin zná všechny), 4 (jeho přítelkyně), 8 (Pavel), 6, 6 (Karel, Mojmír), 7 (Filip), 3 (Magda), 2, 2 (Lenka, Monika) a neznámé r (Radek). Součet hostů je 47, takže r musí být liché. Z lichých hodnot 1, 3, 5, 7, 9 projde redukce skóre jen pro r = 5 – Radek tedy zná <b>5 hostů</b>, víc (ani méně) jich znát nemůže.' }
    ] },
    { title: 'Sled, tah, cesta a souvislost', blocks: [
      { t: 'def', term: 'Sled, tah, cesta, kružnice', x: 'Postupně přísnější druhy procházení grafem:', items: ['<b>sled</b> je posloupnost (v₀, e₁, v₁, …, eₙ, vₙ), kde hrana eᵢ spojuje vᵢ₋₁ a vᵢ; délka sledu je n', '<b>tah</b> = sled bez opakování hran (uzavřený, je-li v₀ = vₙ)', '<b>cesta</b> = sled bez opakování vrcholů (kromě případně prvního a posledního)', 'uzavřená cesta je <b>kružnice</b>'] },
      { t: 'svg', title: 'Sled, tah a cesta v jednom grafu (příklad z přednášky)', x: MLG.sledTahCesta(), cap: 'Tři procházky týmž grafem: sled smí opakovat hrany i vrcholy, tah neopakuje hrany (vrcholy ano), cesta neopakuje vrcholy.' },
      { t: 'def', term: 'Souvislost', x: 'Graf je <b>souvislý</b>, vede-li mezi každými dvěma vrcholy cesta.', items: ['maximální souvislé části nesouvislého grafu jsou <b>komponenty</b>'] }
    ] },
    { title: 'Eulerovské grafy (jedním tahem)', blocks: [
      { t: 'def', term: 'Eulerovský graf', x: 'Graf, ve kterém existuje (uzavřený či otevřený) tah obsahující každou hranu právě jednou – <b>Eulerovský tah</b>.', items: ['Eulerovský graf bez vrcholů stupně 0 musí být souvislý'] },
      { t: 'law', ref: 'Věta', x: 'Souvislý graf má <b>uzavřený</b> Eulerovský tah, právě když jsou <b>všechny stupně sudé</b> (tah pak končí tam, kde začal). Souvislý graf má <b>otevřený</b> Eulerovský tah, právě když mají <b>právě dva vrcholy lichý stupeň</b>; ty jsou začátkem a koncem každého takového tahu.' },
      { t: 'svg', title: 'Domeček s křížem jedním tahem', x: MLG.eulerDomecek(), cap: 'Liché stupně mají jen dolní rohy A a B, proto tah musí začít v jednom a skončit v druhém. Čísla na hranách ukazují jedno možné pořadí.' },
      { t: 'tip', x: 'Úlohu „nakresli jedním tahem“ (problém popeláře) vyřešíš bez kreslení: spočítej liché vrcholy. 0 → jde a vrátíš se na start; 2 → jde, začni v lichém; 4 a více → nejde.' }
    ] },
    { title: 'Hamiltonovské grafy', blocks: [
      { t: 'def', term: 'Hamiltonovský graf', x: 'Graf, ve kterém existuje kružnice obsahující každý vrchol právě jednou (první a poslední vrchol splývají) – <b>Hamiltonovská kružnice</b>.', items: ['úloha je příbuzná problému obchodního cestujícího'] },
      { t: 'law', ref: 'Postačující podmínky (Hora)', x: 'Má-li graf s n vrcholy (n ≥ 3) každý vrchol stupně aspoň n/2, je Hamiltonovský. Obecněji: platí-li pro každé dva <b>nesousední</b> vrcholy u, v, že deg(u) + deg(v) ≥ n, je graf Hamiltonovský.' },
      { t: 'warn', x: 'Obě podmínky jsou jen <b>postačující</b>: kružnice C₆ má všechny stupně 2 &lt; 3, a přesto je Hamiltonovská. Pro Hamiltonovské grafy neexistuje jednoduché „počítání stupňů“ jako u Eulerovských – nehamiltonovskost se dokazuje úvahou (např. vrchol, přes který by kružnice musela projít dvakrát).' },
      { t: 'versus', title: 'Eulerovský × Hamiltonovský', cols: [
        { h: 'Eulerovský', items: ['každou <b>hranou</b> právě jednou', 'stačí spočítat liché stupně', 'popelář projíždí všechny ulice'] },
        { h: 'Hamiltonovský', items: ['každým <b>vrcholem</b> právě jednou', 'jednoduché kritérium neexistuje', 'obchodní cestující navštíví všechna města'] }
      ], x: 'Oba pojmy popisují „obejití celého grafu“, ale každý hlídá něco jiného. Eulerovský tah musí využít všechny hrany, vrcholy se přitom opakovat smějí – jako popelář, který musí projet každou ulicí, i když křižovatkou projede víckrát. Hamiltonovská kružnice naopak musí navštívit každý vrchol jednou, ale spoustu hran vůbec nepoužije – jako obchodní cestující, kterého zajímají jen města. Pro Eulera stačí spočítat stupně, u Hamiltona se musí hledat.' }
    ] }
  ],
  mistakes: [
    'Považovat dva grafy se stejným skóre automaticky za izomorfní.',
    'Při redukci skóre zapomenout znovu seřadit posloupnost.',
    'Zaměnit tah (neopakují se hrany) a cestu (neopakují se vrcholy).',
    'Začít otevřený Eulerovský tah v sudém vrcholu.',
    'Plést Eulerovský (hrany) a Hamiltonovský (vrcholy) graf.',
    'Brát podmínku deg ≥ n/2 jako nutnou pro Hamiltonovskost.'
  ],
  qa: [
    { q: 'Proč je součet stupňů vždy sudý?', a: 'Každá hrana přispěje do stupňů dvou vrcholů, součet je 2·|E|.' },
    { q: 'Existuje graf se skóre (4, 4, 4, 3, 3, 3)?', a: 'Ne, součet 21 je lichý.' },
    { q: 'Kdy jde souvislý graf nakreslit jedním otevřeným tahem?', a: 'Když má právě dva vrcholy lichého stupně – v nich tah začíná a končí.' },
    { q: 'Jaký je rozdíl mezi tahem a cestou?', a: 'V tahu se neopakují hrany, v cestě se neopakují ani vrcholy.' },
    { q: 'Kolik vizitek ztratil pan Zbyšek?', a: '4 – jiná hodnota nevede na existující graf.' },
    { q: 'Které tři údaje musí izomorfní grafy sdílet?', a: 'Počet vrcholů, počet hran a skóre.' }
  ]
});
