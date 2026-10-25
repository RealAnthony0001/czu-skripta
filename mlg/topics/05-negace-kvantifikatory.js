registerTopic({
  id: 'negace-kvantifikatory', order: 5, icon: '🔄', title: 'Negace vět a výroků s kvantifikátory', src: 'podklady', lec: [2], where: 'Doplněk ke cvičení z logiky 2',
  summary: 'Jak správně znegovat větu v češtině i matematický výrok s kvantifikátory ∀ a ∃: prohodit ∧↔∨, ∀↔∃ a znegovat to, co zbývá.',
  vocab: [
    { w: 'kvantifikátor ∀ (obecný)', x: '„pro všechna“, „každý“, „vždy“' },
    { w: 'kvantifikátor ∃ (existenční)', x: '„existuje“, „aspoň jeden“, „nějaký“' },
    { w: 'negace věty', x: 'věta, která je pravdivá právě tehdy, když původní věta pravdivá není' }
  ],
  key: [
    '<b>¬(A∧B) ≡ ¬A∨¬B</b>,  <b>¬(A∨B) ≡ ¬A∧¬B</b>,  <b>¬(A⇒B) ≡ A∧¬B</b>.',
    '<b>¬(∀x)φ ≡ (∃x)¬φ</b>,  <b>¬(∃x)φ ≡ (∀x)¬φ</b> – kvantifikátor se obrátí, negace padne dovnitř.',
    'Při negaci výroku s více kvantifikátory se <b>střídavě obrací všechny</b> a znegovat se musí až samotné tvrzení na konci.',
    'Negace relací: > → ≤, < → ≥, = → ≠, ≥ → <, ≤ → >.',
    'Negace „každý je …“ není „nikdo není …“, ale „<b>aspoň jeden není</b> …“.'
  ],
  sections: [
    { title: 'Pravidla negace', blocks: [
      { t: 'grid', head: ['Původní výrok', 'Negace'], rows: [
        ['A ∧ B', '¬A ∨ ¬B'],
        ['A ∨ B', '¬A ∧ ¬B'],
        ['A ⇒ B', 'A ∧ ¬B'],
        ['A ⇔ B', '(A ∧ ¬B) ∨ (¬A ∧ B)'],
        ['(∀x) φ(x)', '(∃x) ¬φ(x)'],
        ['(∃x) φ(x)', '(∀x) ¬φ(x)'],
        ['x > y,  x < y,  x = y', 'x ≤ y,  x ≥ y,  x ≠ y']
      ] },
      { t: 'svg', title: 'Přehled pravidel negace', x: MLG.negace(), cap: 'Zleva doprava ekvivalence: ¬(A ∧ B) ≡ ¬A ∨ ¬B, ¬(A ∨ B) ≡ ¬A ∧ ¬B, ¬(A ⇒ B) ≡ A ∧ ¬B, ¬(∀x)φ ≡ (∃x)¬φ, ¬(∃x)φ ≡ (∀x)¬φ.' },
      { t: 'flow', title: 'Postup negace kvantifikovaného výroku', steps: [
        { h: 'Obrať všechny kvantifikátory', x: 'každé ∀ → ∃ a každé ∃ → ∀ (počet i pořadí zůstane)' },
        { h: 'Znegovat samotné tvrzení na konci', x: 'implikace → konjunkce předpokladu a negovaného závěru; ∧ ↔ ∨; relace obrať' },
        { h: 'Ověř smysl', x: 'původní výrok a jeho negace nesmí být oba pravdivé ani oba nepravdivé' }
      ] },
      { t: 'warn', x: 'Negace implikace (A⇒B) je <b>A∧¬B</b>, ne ¬A⇒¬B. Proto se v negaci výroku „(∀x)(předpoklad ⇒ závěr)“ objeví „(∃x)(předpoklad ∧ ¬závěr)“, tedy <b>existuje prvek, který předpoklad splňuje, ale závěr ne</b>.' }
    ] },
    { title: 'Negace vět (výrokové spojky)', blocks: [
      { t: 'p', x: 'Klíč uvádí vždy jednu z možných formulací; negace téže věty lze vyjádřit více způsoby.' },
      { t: 'grid', head: ['Původní věta', 'Formálně', 'Negace'], rows: [
        ['(a) Nebude-li pršet, nezmoknem.', '¬P ⇒ ¬Z', 'Nebude pršet a zmoknem.   (¬P ∧ Z)'],
        ['(b) Můj počítač je starý nebo zavirovaný.', 'S ∨ V', 'Můj počítač je nový a nezavirovaný.   (¬S ∧ ¬V)'],
        ['(c) Když sním polévku nebo hlavní jídlo, budu si moct dát dortík.', '(P ∨ H) ⇒ D', 'Sním polévku nebo hlavní jídlo a nebudu si moct dát dortík.   ((P ∨ H) ∧ ¬D)'],
        ['(d) Liška je chytrá a opatrná.', 'C ∧ O', 'Liška je hloupá nebo neopatrná.   (¬C ∨ ¬O)']
      ] },
      { t: 'tip', x: 'Negace věty „Kdyby A, tak B“ je „<b>A a přitom ne B</b>“. Negace věty s „nebo“ je věta s „a“ a naopak – a tvrzení uvnitř se samo znegují (starý → nový).' }
    ] },
    { title: 'Negace matematických výroků s kvantifikátory', blocks: [
      { t: 'grid', head: ['', 'Výrok', 'Negace'], rows: [
        ['(a)', '(∀x∈R)(x² > 0)', '(∃x∈R)(x² ≤ 0)'],
        ['(b)', '(∀x,y∈R)((x > y) ⇒ (x² > y²))', '(∃x,y∈R)((x > y) ∧ (x² ≤ y²))'],
        ['(c)', '(∀p prvočíslo)(∃k∈N)(p = 2k+1)', '(∃p prvočíslo)(∀k∈N)(p ≠ 2k+1)'],
        ['(d)', '(∃n∈N)(∀m∈N)(n·m = n)', '(∀n∈N)(∃m∈N)(n·m ≠ n)'],
        ['(e)', '(∀k∈N)(∃m,n∈N)((m ≠ n) ∧ (m·n = k))', '(∃k∈N)(∀m,n∈N)((m = n) ∨ (m·n ≠ k))'],
        ['(f)', '(∀n∈N)(((∃k∈N)(n = 2k+1)) ⇒ (∃a,b∈N)(a²+b² = n))', '(∃n∈N)(((∃k∈N)(n = 2k+1)) ∧ (∀a,b∈N)(a²+b² ≠ n))'],
        ['(g)', '(∀ε>0)(∃δ>0)(∀x∈R)((|x−a| < δ) ⇒ (|f(x)−f(a)| < ε))', '(∃ε>0)(∀δ>0)(∃x∈R)((|x−a| < δ) ∧ (|f(x)−f(a)| ≥ ε))']
      ] },
      { t: 'ex', x: '<b>Rozbor (a):</b> výrok „každé reálné číslo má kladnou druhou mocninu“ je nepravdivý; negace „existuje reálné x s x² ≤ 0“ je pravdivá (x = 0). Opačně u (c): výrok „každé prvočíslo je liché“ je nepravdivý (protipříklad p = 2), negace „existuje prvočíslo, které není liché“ je pravdivá.' },
      { t: 'ex', x: '<b>Rozbor (g)</b> je definice spojitosti funkce f v bodě a: „ke každému ε existuje δ tak, že…“. Negace (funkce <b>není</b> spojitá v a): „existuje ε, ke kterému pro <b>každé</b> δ najdeme x, které je od a blíž než δ, ale hodnota f(x) se od f(a) liší aspoň o ε“.' }
    ] },
    { title: 'Negace vět o světě', blocks: [
      { t: 'grid', head: ['Původní věta', 'Negace'], rows: [
        ['(a) Každý programátor uvažuje logicky.', 'Existuje programátor, který neuvažuje logicky.'],
        ['(b) Aspoň jeden student PEF nemá rád matematiku.', 'Všichni studenti PEF mají rádi matematiku.'],
        ['(c) Program je chybný nebo nefunguje počítač.', 'Program není chybný a počítač funguje.'],
        ['(d) Je-li logika užitečná, tak je snadná a pochopitelná.', 'Logika je užitečná, a přitom není snadná nebo není pochopitelná.'],
        ['(e) Pokud ji miluješ, není co řešit.', 'Miluješ ji a je co řešit.'],
        ['(f) Pokud má pacient vysoký tlak a potíže s dýcháním, popřípadě pokud má vysokou teplotu, pak je nemocen.', 'I když má pacient vysoký tlak a potíže s dýcháním nebo má vysokou teplotu, přesto není nemocen.'],
        ['(g) Nemám žádnou sestru.', 'Mám aspoň jednu sestru.'],
        ['(h) V peněžence mám jen bankovky menší než tisíc korun.', 'V peněžence mám nejméně jednu bankovku, která má hodnotu aspoň tisíc korun.'],
        ['(i) Nejpozději do tří dnů zlevníme všechny naše výrobky alespoň o 20 %.', 'Nějaký náš výrobek zlevníme o méně než 20 % nebo později než za tři dny.']
      ] },
      { t: 'tip', x: 'Kvantifikátory v běžné řeči rozpoznáš podle slov: <b>každý, všichni, žádný, vždy, jen</b> (∀) a <b>existuje, aspoň jeden, nějaký, někdy</b> (∃). „Žádný“ znamená „pro všechny ne“, proto je jeho negace „aspoň jeden ano“ (g). „Nejpozději“ a „alespoň“ jsou relace (≤, ≥), které se při negaci obrátí („později“, „méně než“).' }
    ] }
  ],
  mistakes: [
    'Negovat „každý je …“ jako „nikdo není …“ – správně „aspoň jeden není …“.',
    'Znegovat jen kvantifikátor, ale zapomenout znegovat tvrzení na konci (nebo naopak).',
    'Negovat implikaci jako implikaci: ¬(A⇒B) není ¬A⇒¬B.',
    'Zapomenout obrátit relaci (> → ≤, = → ≠).',
    'Při negaci „a“ zůstat u „a“ (a „nebo“ u „nebo“) – De Morgan je zamění.',
    'U vět s „nejpozději“, „alespoň“, „jen“ zapomenout, co přesně se popírá.'
  ],
  qa: [
    { q: 'Čemu je ekvivalentní ¬(∀x)φ(x)?', a: '(∃x)¬φ(x) – existuje x, pro které φ neplatí.' },
    { q: 'Čemu je ekvivalentní ¬(A ⇒ B)?', a: 'A ∧ ¬B.' },
    { q: 'Jaká je negace „Každý programátor uvažuje logicky“?', a: 'Existuje programátor, který neuvažuje logicky.' },
    { q: 'Jak vypadá negace „(∀x)(∃y)(x < y)“?', a: '(∃x)(∀y)(x ≥ y) – kvantifikátory se obrátí, relace se znegují.' },
    { q: 'Jaká je negace „Nemám žádnou sestru“?', a: 'Mám aspoň jednu sestru.' }
  ]
});
