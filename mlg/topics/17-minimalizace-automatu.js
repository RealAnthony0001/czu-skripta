registerTopic({
  id: 'minimalizace-automatu', order: 17, icon: '🗜️', title: 'Dosažitelnost a minimalizace automatů', src: 'podklady', lec: [12],
  where: 'Přednáška Konečné automaty – Minimalizace automatů (Hora) + Cvičení 6 (úlohy 8–9)',
  summary: 'Jak z automatu vyhodit nedosažitelné stavy, sloučit ekvivalentní stavy (maximální faktorizace) a dostat minimální automat; kdy jsou dva automaty ekvivalentní a co je Myhillova–Nerodova ekvivalence.',
  vocab: [
    { w: 'dosažitelný stav', x: 'stav, do kterého skončí výpočet nad nějakým slovem (vede do něj cesta z počátečního stavu)' },
    { w: 'ekvivalentní automaty', x: 'automaty přijímající stejný jazyk' },
    { w: 'ekvivalentní stavy q₁ ∼ q₂', x: 'automat startující v q₁ přijímá stejný jazyk jako automat startující v q₂' },
    { w: 'maximální faktorizace A/∼', x: 'automat, jehož stavy jsou třídy ekvivalentních stavů' },
    { w: 'redukovaný automat', x: 'dosažitelný automat, který už nejde faktorizací zmenšit' },
    { w: 'pravý kontext u\\L', x: 'množina slov v, pro která uv ∈ L – „čím je ještě potřeba u doplnit“' }
  ],
  key: [
    'Minimalizace = <b>1. odstranit nedosažitelné stavy</b>, <b>2. sloučit ekvivalentní stavy</b>.',
    'Startovní rozdělení: přijímající × nepřijímající; pak dělíš podle toho, <b>do kterých tříd</b> stavy přecházejí, dokud se rozdělení mění.',
    'Maximální faktorizace dosažitelného automatu je <b>minimální automat</b> (co do počtu stavů).',
    'Dva redukované automaty se stejným jazykem jsou <b>stejné až na přejmenování stavů</b>.',
    'Automaty jsou ekvivalentní ⇔ faktorizace jejich dosažitelných částí jsou shodné až na přejmenování.'
  ],
  sections: [
    { title: 'Dosažitelné stavy', blocks: [
      { t: 'def', term: 'Dosažitelnost', x: 'stav q je <b>dosažitelný</b>, existuje-li slovo w, nad kterým výpočet skončí v q. Automat je dosažitelný, jsou-li dosažitelné všechny jeho stavy. Nedosažitelné stavy („hospody, do kterých nevede cesta“) jazyk neovlivní a lze je vyškrtnout.' },
      { t: 'flow', title: 'Hledání dosažitelné části', steps: [
        { h: 'Začni počátečním stavem', x: 'označ ho' },
        { h: 'Přidávej stavy, kam vedou přechody z označených', x: 'projdi řádky tabulky označených stavů' },
        { h: 'Skonči, když nic nového nepřibude', x: 'neoznačené stavy škrtni' }
      ] },
      { t: 'ex', x: '<b>Přednáška:</b> →1: 5, 5 · ←2: 2, 7 · 3: 4, 6 · 4: 6, 1 · 5: 1, 3 · 6: 5, 4 · 7: 8, 1 · ←8: 2, 5 (sloupce a, b). Z 1 se dostaneme do 5, z 5 do 3, ze 3 do 4 a 6. Dosažitelné jsou <b>1, 3, 4, 5, 6</b> – žádný z nich není přijímající, automat tedy přijímá <b>prázdný jazyk ∅</b>.' },
      { t: 'grid', head: ['Cvičení 6, úloha 8', 'Dosažitelné stavy', 'Jazyk'], rows: [
        ['(a)', '1, 3, 6, 7', 'slova končící na 111'],
        ['(b)', '1, 2, 3, 6, 9', 'slova se sudým počtem nul, který je aspoň čtyři']
      ] }
    ] },
    { title: 'Ekvivalentní stavy a minimální automat', blocks: [
      { t: 'def', term: 'Maximální faktorizace', x: 'stavy q₁, q₂ jsou ekvivalentní (q₁ ∼ q₂), přijímají-li automaty (Q, Σ, δ, q₁, F) a (Q, Σ, δ, q₂, F) stejný jazyk. Automat A/∼ = (Q/∼, Σ, δ/∼, [q₀]∼, F/∼) je <b>maximální faktorizace</b> A.' },
      { t: 'law', ref: 'Věty', x: 'Maximální faktorizace přijímá stejný jazyk jako A; je-li A dosažitelný, je to <b>minimální automat</b> pro L(A). Dva redukované automaty přijímající stejný jazyk jsou stejné až na přejmenování stavů. Dva automaty jsou ekvivalentní, právě když jsou maximální faktorizace jejich dosažitelných částí shodné až na přejmenování.' },
      { t: 'flow', title: 'Algoritmus (postupné zjemňování)', steps: [
        { h: 'Rozděl stavy na přijímající a nepřijímající', x: 'stavy z různých skupin ekvivalentní být nemohou (ε je odliší)' },
        { h: 'Ke každému stavu zapiš, do kterých skupin vedou jeho přechody', x: 'pro každý znak číslo skupiny cílového stavu' },
        { h: 'Rozděl skupiny podle těchto zápisů', x: 've skupině zůstanou jen stavy se stejným „podpisem“' },
        { h: 'Opakuj, dokud se rozdělení mění', x: 'výsledné skupiny jsou nové stavy; přechody převezmi z libovolného zástupce' }
      ] },
      { t: 'ex', x: '<b>Přednáška:</b> →1: 1, 3 · 2: 1, 3 · ←3: 6, 5 · 4: 1, 5 · 5: 2, 4 · ←6: 6, 2 (sloupce a, b), všechny stavy jsou dosažitelné.<br>Krok 0: {1, 2, 4, 5} | {3, 6}.<br>Krok 1: 1 a 2 jdou (N, F), 4 a 5 jdou (N, N) ⇒ {1, 2} | {4, 5} | {3, 6}.<br>Krok 2: 3 jde b → 5 ∈ {4, 5}, ale 6 jde b → 2 ∈ {1, 2} ⇒ rozdělit: {1, 2} | {4, 5} | {3} | {6}.<br>Krok 3: nic se nemění. Minimální automat má <b>4 stavy</b>.' },
      { t: 'svg', title: 'Minimální automat po faktorizaci', x: MLG.automatMin(), cap: 'Stavy 1 a 2 se chovají stejně, stejně tak 4 a 5; přijímající jsou 3 a 6.' },
      { t: 'grid', head: ['Cvičení 6, úloha 9', 'Stavů po minimalizaci', 'Jazyk'], rows: [
        ['(a)', '3', 'slova s počtem znaků dělitelným třemi'],
        ['(b)', '4', 'dvouznaková slova'],
        ['(c)', '4', 'slova tvaru B*AA*B(AⁿB)* (n ≥ 1)'],
        ['(d)', '3', 'slova začínající A nebo obsahující AA'],
        ['(e)', '5', 'slova obsahující BABA']
      ] },
      { t: 'tip', x: 'Před faktorizací vždy nejdřív odstraň nedosažitelné stavy – úloha 9(a) má 8 stavů, ale dosažitelných je jen 5 (1, 3, 4, 6, 8) a po sloučení zbudou 3.' }
    ] },
    { title: 'Myhillova–Nerodova ekvivalence', blocks: [
      { t: 'def', term: 'Pravý kontext a M–N ekvivalence', x: 'pro jazyk L a slovo u je <b>pravý kontext</b> u\\L = {v ∈ Σ* | uv ∈ L}. Myhillova–Nerodova ekvivalence ∼<sub>L</sub> slučuje slova se stejným pravým kontextem: u ∼<sub>L</sub> v ⇔ u\\L = v\\L.' },
      { t: 'p', x: 'Třídy této ekvivalence odpovídají stavům minimálního automatu: dvě slova jsou „ve stejném stavu“, když je musíme doplnit úplně stejnými konci, aby patřila do L.' },
      { t: 'ex', x: '<b>L = {111, 1011} (otázka z přednášky):</b> třídy podle pravého kontextu:<br>ε → {111, 1011} · 1 → {11, 011} · 10 → {11} · 11 a 101 → {1} · 111 a 1011 → {ε} · všechna ostatní slova (0, 00, 110, 1111, …) → ∅.<br>Vychází <b>6 tříd</b>, minimální automat pro L má tedy 6 stavů (včetně pasti pro ∅).' }
    ] }
  ],
  mistakes: [
    'Slučovat stavy dřív, než odstraníš nedosažitelné.',
    'Začít faktorizaci jednou skupinou místo rozdělení přijímající × nepřijímající.',
    'Skončit po prvním kole – rozdělení se může měnit i v dalších krocích.',
    'U nového automatu zapomenout vyznačit počáteční třídu ([q₀]) a přijímající třídy.',
    'Myslet si, že ekvivalentní automaty musí mít stejný počet stavů – stejné jsou až jejich minimální (redukované) verze.'
  ],
  qa: [
    { q: 'Jaké dva kroky má minimalizace automatu?', a: 'Odstranění nedosažitelných stavů a sloučení ekvivalentních stavů (maximální faktorizace).' },
    { q: 'Jak začíná rozdělování stavů při faktorizaci?', a: 'Na přijímající a nepřijímající stavy.' },
    { q: 'Kdy jsou dva automaty ekvivalentní?', a: 'Když přijímají stejný jazyk; ekvivalentně, když mají jejich dosažitelné části shodnou maximální faktorizaci až na přejmenování.' },
    { q: 'Co je pravý kontext slova u vzhledem k L?', a: 'Množina slov v, pro která uv ∈ L.' },
    { q: 'Kolik stavů má minimální automat pro L = {111, 1011}?', a: '6.' }
  ]
});
