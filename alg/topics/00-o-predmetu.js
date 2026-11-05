registerTopic({
  id: 'o-predmetu', order: 0, icon: 'ℹ️', title: 'O předmětu, zápočtu a zkoušce', src: 'podklady', lec: [1], where: 'Přednáška 1 – úvod do předmětu',
  summary: 'Co se dělá na cvičeních a přednáškách, jak se získá zápočet (testíky v Moodle, 6 z 10 bodů), jak vypadá ústní zkouška a na co předmět navazuje.',
  vocab: [
    { w: 'Snap!', x: 'grafický programovací jazyk, ve kterém se na cvičeních implementují algoritmy' },
    { w: 'Moodle', x: 'systém, ve kterém se píší týdenní testíky k zápočtu' },
    { w: 'formální zápis', x: 'přesný zápis algoritmu – textový popis, pseudokód, vývojový diagram, strukturogram' }
  ],
  key: [
    '<b>Zápočet:</b> od 2. přednášky každý týden testík v Moodle za 1 bod, k zápočtu <b>aspoň 6 z 10</b> bodů.',
    '<b>Opravný termín:</b> jeden, v lednu, jako komplexní test.',
    '<b>Zkouška:</b> ústní, ve skupinách – diskuze nad zadaným algoritmem / programem.',
    '<b>Návaznost:</b> Programování (letní semestr, C#), Komponentová tvorba SW.'
  ],
  sections: [
    { title: 'Přednášky a cvičení', blocks: [
      { t: 'ul', items: [
        'Na cvičeních se prakticky řeší algoritmické úlohy, ověřuje se správnost řešení a řešení se implementuje v grafickém prostředí <b>Snap!</b>.',
        'Cvičení je málo, proto se praktické úlohy (vhodné k zápočtu i ke zkoušce) řeší i na přednášce.',
        'Účast je <b>nepovinná</b>, ale předmět se nedá naučit „přes noc“.',
        'Budoucím programátorům se doporučuje naučit se formální zápis algoritmů.'
      ] },
      { t: 'icons', title: 'Co se předpokládá', items: [
        { i: '➗', h: 'Matematika', x: 'základní matematické schopnosti' },
        { i: '🧩', h: 'Hledání řešení', x: 'umět najít postup řešení problému' },
        { i: '⚙️', h: 'Optimalizace', x: 'umět řešení zlepšit (méně kroků, méně porovnání)' }
      ] }
    ] },
    { title: 'Zápočet', blocks: [
      { t: 'nums', title: 'Zápočet v číslech', items: [
        { n: '10', u: 'testíků', x: 'každý týden od 2. přednášky, v termínu přednášky, v Moodle' },
        { n: '1', u: 'bod za testík', x: 'malý test, jedna úloha' },
        { n: '6', u: 'bodů k zápočtu', x: 'alespoň 6 z deseti' },
        { n: '1', u: 'opravný termín', x: 'v lednu, komplexní test' }
      ] },
      { t: 'ul', items: [
        'Oblasti zápočtového testu: <b>matematická logika</b>, <b>čtení strukturogramů</b>, <b>tvorba strukturogramů</b> (definice podmínek), <b>rekurze</b>, <b>volání funkcí</b>, <b>logické hádanky</b>.'
      ] },
      { t: 'warn', x: 'K rekurzi a logickým hádankám zatím nejsou podklady – tato skripta je pokrývají jen okrajově (rekurze se objevuje v úloze na Euklidův algoritmus).' }
    ] },
    { title: 'Zkouška a návaznosti', blocks: [
      { t: 'ul', items: [
        '<b>Ústní zkouška</b> ve skupinách: diskuze nad zadaným algoritmem / programem.',
        'Podle zapojení studentů se navrhne <b>individuální hodnocení</b>.',
        'Navazuje předmět <b>Programování</b> v letním semestru – implementace úloh z algoritmizace v jazyce <b>C#</b>; dále <b>Komponentová tvorba SW</b>.'
      ] },
      { t: 'grid', head: ['Zdroj', 'Látka', 'Téma zde'], rows: [
        ['P1', 'Úvod, vlastnosti algoritmů, formální zápis, úlohy k procvičení', '1–3'],
        ['P2', 'Strukturogramy – přechod z vývojových diagramů, pravidla, čtení, přepis do kódu', '4–5'],
        ['P3', 'Matematická logika v podmínkách (and, or, xor, intervaly, oblasti)', '6'],
        ['P5', 'Funkce – dekompozice, volání, zásobník', '7'],
        ['Cvičení', 'Algoritmy, Strukturogramy, Snap!', '3, 5, 8, 9']
      ] }
    ] }
  ],
  mistakes: [
    'Myslet si, že nepovinná účast znamená, že se předmět dá naučit za noc před testem.',
    'Vynechat testíky – zápočet je jen ze součtu týdenních bodů (6 z 10), opravný termín je jediný.'
  ],
  qa: [
    { q: 'Kolik bodů je třeba k zápočtu?', a: 'Aspoň <b>6 z 10</b> bodů z týdenních testíků v Moodle (od 2. přednášky, 1 bod každý).' },
    { q: 'Jaké oblasti pokrývá zápočtový test?', a: 'Matematická logika, čtení strukturogramů, tvorba strukturogramů (definice podmínek), rekurze, volání funkcí, logické hádanky.' },
    { q: 'Jak probíhá zkouška?', a: 'Ústně ve skupinách – diskuze nad zadaným algoritmem nebo programem; hodnocení podle zapojení.' },
    { q: 'Na který předmět Algoritmizace navazuje a v jakém jazyce?', a: 'Programování v letním semestru, úlohy se implementují v C#; dále Komponentová tvorba SW.' }
  ]
});
