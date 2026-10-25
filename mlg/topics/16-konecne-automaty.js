registerTopic({
  id: 'konecne-automaty', order: 16, icon: '🤖', title: 'Konečné automaty a regulární jazyky', src: 'podklady', lec: [11],
  where: 'Přednáška Konečné automaty (Hora) + Cvičení 6 (úlohy 1–7)',
  summary: 'Abeceda, slovo a jazyk; konečný automat jako pětice (Q, Σ, δ, q₀, F), jeho tabulka a graf, návrh automatu pro zadaný jazyk a operace s regulárními jazyky (doplněk, průnik, sjednocení, iterace).',
  vocab: [
    { w: 'abeceda Σ', x: 'konečná množina symbolů (znaků)' },
    { w: 'slovo', x: 'konečná posloupnost znaků abecedy; |w| je délka, ε prázdné slovo (|ε| = 0)' },
    { w: 'Σ*', x: 'množina všech slov nad Σ' },
    { w: 'jazyk', x: 'libovolná podmnožina Σ*' },
    { w: 'konečný automat', x: 'pětice (Q, Σ, δ, q₀, F): stavy, abeceda, přechodová funkce δ: Q × Σ → Q, počáteční stav a množina přijímajících stavů' },
    { w: 'regulární jazyk', x: 'jazyk, který přijímá nějaký konečný automat' }
  ],
  key: [
    'Automat čte slovo znak po znaku a podle δ mění stav; slovo <b>přijme</b>, skončí-li v přijímajícím stavu.',
    'V tabulce: <b>→</b> počáteční stav, <b>←</b> přijímající stav; každý stav má pro každý znak <b>právě jeden</b> přechod.',
    'Stav = „co si potřebuji pamatovat“ o dosud přečtené části slova; „past“ je stav, ze kterého už nejde do přijímajícího.',
    'Regulární jazyky jsou uzavřené na <b>doplněk, průnik, sjednocení i iteraci</b>; každý konečný jazyk je regulární.',
    '{aⁿbⁿ} <b>regulární není</b> – automat by si musel pamatovat neomezené číslo.'
  ],
  sections: [
    { title: 'Abeceda, slovo a jazyk', blocks: [
      { t: 'def', term: 'Abeceda, slovo, jazyk', x: 'Základní pojmy formálních jazyků:', items: ['<b>abeceda Σ</b> je konečná množina znaků', '<b>slovo</b> nad Σ je konečná posloupnost znaků, |w| jeho délka a <b>ε</b> prázdné slovo', 'Σ* je množina všech slov nad Σ', '<b>jazyk</b> je jakákoli podmnožina Σ*'] },
      { t: 'ex', x: 'Nad Σ = {0, 1} jsou slovy ε, 0, 1, 00, 01, 10, 11, 000, … Jazykem je např. {slova s počtem jedniček dělitelným třemi} nebo konečný jazyk {100}.' }
    ] },
    { title: 'Konečný automat', blocks: [
      { t: 'def', term: 'Konečný automat', x: 'Uspořádaná pětice (Q, Σ, δ, q₀, F):', items: ['Q je konečná množina stavů, Σ vstupní abeceda', 'δ: Q × Σ → Q je přechodová funkce', 'q₀ ∈ Q je počáteční (iniciální) stav, F ⊆ Q jsou přijímající stavy', '<b>výpočet</b> nad slovem x₁…xₙ je posloupnost stavů r₀ = q₀, …, rₙ s δ(rᵢ₋₁, xᵢ) = rᵢ', 'slovo je <b>přijato</b>, když rₙ ∈ F; jazyk automatu L(A) = množina přijímaných slov'] },
      { t: 'widget', fig: MLG.automatLiche(), figcap: 'Tabulka: →1: a→2, b→3 · ←2: a→1, b→3 · 3: a→3, b→3.', name: 'aut', how: ['Vyber automat a zadej slovo (nebo klikni na příklad).', 'Červený stav je ten, ve kterém se automat právě nachází; oranžová hrana je použitý přechod; čtverečky nahoře ukazují přečtené znaky.', 'Na konci se podle toho, zda je stav <b>přijímající</b> (dvojitý kruh), slovo přijme nebo ne.'], sol: 'Automat b): <b>aaa</b>: 1 →a 2 →a 1 →a 2, končí v přijímajícím stavu 2 → <b>přijato</b>; <b>aa</b> končí ve stavu 1 → nepřijato; <b>ab</b> spadne do pasti 3 → nepřijato. Automat a) přijímá jen slovo <b>100</b> (A → B → C → D).', a: 'p2', title: 'Simulátor automatu: zadej slovo a sleduj výpočet' },
      { t: 'grid', head: ['Automat (přednáška)', '0 / a', '1 / b', 'Jazyk'], rows: [
        ['a) →A', 'E', 'B', 'přijímá jen slovo <b>100</b>'],
        ['B', 'C', 'E', 'A –1→ B –0→ C –0→ D'],
        ['C', 'D', 'E', 'cokoli jiného spadne do pasti E'],
        ['←D', 'E', 'E', ''],
        ['E', 'E', 'E', ''],
        ['b) →1', '2', '3', 'slova <b>a, aaa, aaaaa, …</b> – lichý počet a, žádné b'],
        ['←2', '1', '3', ''],
        ['3', '3', '3', '']
      ] },
      { t: 'grid', head: ['Cvičení 6', 'Výsledek'], rows: [
        ['1a – přijímající start 1, vše ostatní do pasti 2', 'jazyk {ε}'],
        ['1b, 1c', 'nejsou konečné automaty (přechody netvoří funkci δ – u některého stavu a znaku chybí nebo je víc přechodů)'],
        ['1d', '{ABⁿ; n ≥ 1}'],
        ['1e', '∅ (žádný přijímající stav)'],
        ['2a', 'slova složená z lichého počtu nul'],
        ['2b', 'slova obsahující lichý počet nul'],
        ['2c', 'jen jednoznakové slovo 1']
      ] },
      { t: 'warn', x: 'Úplný konečný automat musí mít z <b>každého</b> stavu pro <b>každý</b> znak právě jeden přechod. Graf, kde nějaký přechod chybí nebo jsou dva se stejným znakem, konečný automat v tomto smyslu není.' }
    ] },
    { title: 'Návrh automatu pro zadaný jazyk', blocks: [
      { t: 'flow', title: 'Jak navrhnout automat', steps: [
        { h: 'Co si musím pamatovat?', x: 'počet znaků modulo k, kolik z hledaného vzoru už mám, první znak…' },
        { h: 'Každá „paměť“ = jeden stav', x: 'počáteční stav = nic jsem ještě nečetl' },
        { h: 'Doplň přechody pro všechny znaky', x: 'když slovo už nemůže vyhovět, pošli ho do pasti' },
        { h: 'Vyznač přijímající stavy a vyzkoušej', x: 'projdi pár slov, která mají a nemají být přijata' }
      ] },
      { t: 'ex', x: '<b>Počet jedniček dělitelný třemi</b> (Σ = {0, 1}): stavy 0, 1, 2 = počet jedniček modulo 3. Nula stav nemění, jednička posune o jedna dál (2 → 0). Počáteční i jediný přijímající stav je 0.' },
      { t: 'ex', x: '<b>Obsahuje BABA</b> (Σ = {A, B}): stavy I – nic, II – „B“, III – „BA“, IV – „BAB“, V – „BABA“ nalezeno (past, přijímající). Pozor na návraty: ve stavu III („BA“) a znaku A se vzor rozpadne a začínáme znovu (I); ve stavu IV („BAB“) a znaku B zůstává konec „B“ (II). Tabulka: →I: A→I, B→II · II: A→III, B→II · III: A→I, B→IV · IV: A→V, B→II · ←V: A→V, B→V.' },
      { t: 'ex', x: '<b>Čísla dělitelná pěti (Cvičení 6, úloha 4a, Σ = číslice):</b> stačí sledovat poslední číslici – přijímá se, když je 0 nebo 5, a slovo nezačíná nulou (kromě samotné 0).' },
      { t: 'tip', x: 'U jazyků „začíná na …“ stačí jednou ověřit začátek a pak zůstat v přijímací pasti; u „končí na …“ si automat musí pamatovat, kolik z konce vzoru má právě přečteno, a umět se správně vracet.' }
    ] },
    { title: 'Regulární jazyky a operace s nimi', blocks: [
      { t: 'def', term: 'Regulární jazyk', x: 'jazyk L, ke kterému existuje konečný automat A s L = L(A).' },
      { t: 'grid', head: ['Operace', 'Výsledek', 'Konstrukce / příklad z přednášky'], rows: [
        ['doplněk L′ = Σ* ∖ L', 'regulární', 'prohoď přijímající a nepřijímající stavy (slova neobsahující 001)'],
        ['průnik L₁ ∩ L₂', 'regulární', 'automat sleduje oba najednou – stavy jsou dvojice (končí na 1 a obsahuje 110)'],
        ['sjednocení L₁ ∪ L₂', 'regulární', 'stejné dvojice stavů, přijímá, když přijímá aspoň jeden (končí na 1 nebo obsahuje 110)'],
        ['iterace L*', 'regulární', 'zřetězení libovolně mnoha slov z L včetně žádného (L = {00, 111})'],
        ['konečný jazyk', 'regulární', 'sjednocení konečně mnoha jednoslovných jazyků']
      ] },
      { t: 'p', x: 'Iterace L* = {v₁v₂…vₙ | n ∈ ℕ, vᵢ ∈ L}. Protože n může být 0, obsahuje <b>každá iterace prázdné slovo</b>.' },
      { t: 'warn', x: '<b>Neřešitelný příklad:</b> {ε, ab, aabb, aaabbb, …} = {aⁿbⁿ | n ∈ ℕ} regulární není. Automat by si musel pamatovat, kolik a přečetl, a to může být libovolně mnoho – konečně mnoho stavů na to nestačí.' }
    ] }
  ],
  mistakes: [
    'Zapomenout na přechody do pasti – každý stav musí mít přechod pro každý znak.',
    'U doplňku jazyka prohodit stavy v automatu, který není úplný.',
    'Zapomenout, že ε patří do L*.',
    'U „obsahuje vzor“ se po neúspěchu vracet vždy na začátek – část vzoru už může být přečtená.',
    'Tvrdit, že {aⁿbⁿ} je regulární.'
  ],
  qa: [
    { q: 'Z čeho se skládá konečný automat?', a: 'Z pětice (Q, Σ, δ, q₀, F): stavy, abeceda, přechodová funkce, počáteční stav, přijímající stavy.' },
    { q: 'Kdy automat slovo přijme?', a: 'Když výpočet nad slovem skončí v přijímajícím stavu.' },
    { q: 'Jaký jazyk přijímá automat →1: a→2, b→3; ←2: a→1, b→3; 3: a,b→3?', a: 'Slova složená z lichého počtu a.' },
    { q: 'Je průnik dvou regulárních jazyků regulární?', a: 'Ano (i sjednocení, doplněk a iterace).' },
    { q: 'Proč {aⁿbⁿ} není regulární?', a: 'Automat by si musel pamatovat neomezený počet a, ale má jen konečně mnoho stavů.' },
    { q: 'Obsahuje iterace jazyka prázdné slovo?', a: 'Ano, vždy (n = 0).' }
  ]
});
