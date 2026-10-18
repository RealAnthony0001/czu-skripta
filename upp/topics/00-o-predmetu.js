registerTopic({
  id: 'o-predmetu', order: 0, icon: 'ℹ️', title: 'O předmětu a zkoušce', src: 'podklady',
  summary: 'Cíl a náplň předmětu, podmínky zápočtu (3 autotesty), podoba a hodnocení zkoušky, literatura a kontakt na vyučujícího.',
  key: [
    '<b>Zápočet:</b> přiměřená aktivní účast na cvičeních + <b>všechny 3 autotesty v Moodlu na 100 %</b> (neomezený počet pokusů).',
    '<b>Zkouška</b> (jen se zápočtem): písemná část povinná, max. <b>45 minut</b>; ústní část dobrovolná.',
    'Písemka: <b>2× malá teoretická otázka, 1× praktický příklad, 1× algoritmus</b>; teorie : praxe ≈ 1 : 1.',
    '<b>2× dílčí známka 4 → celkově 4</b>; neomluvená neúčast na termínu = 4.'
  ],
  sections: [
    { title: 'Cíl a náplň předmětu', blocks: [
      { t: 'p', x: 'Cílem je podrobně poznat <b>princip činnosti současných počítačů von Neumannova typu</b>. Důraz je na programovém vybavení, strojovém kódu, algoritmizaci a strukturovaném návrhu programů; dále na statických a dynamických datových strukturách.' },
      { t: 'tree', title: 'Témata přednášek', root: { h: 'Úvod do principu počítačů', kids: [
        { h: 'Základy logiky', x: 'binární soustava, výrokový počet, logický důsledek' },
        { h: 'Kódování dat', x: 'binární kódy (zabezpečovací, samoopravný), datové typy' },
        { h: 'Architektura počítače', x: 'von Neumann, strojový kód, logické instrukce' },
        { h: 'Programové vybavení', x: 'operační systém, procesy, algoritmy, datové struktury' },
        { h: 'Technické vybavení', x: 'procesor, paměti, periferie' }
      ] } }
    ] },
    { title: 'Jak skriptem projít od nuly', blocks: [
      { t: 'p', x: 'Témata na sebe navazují – každé používá jen to, co už znáš z předchozích. Doporučené pořadí:' },
      { t: 'timeline', items: [
        { when: '1–2', h: 'Základy: soustavy a data', x: 'Číselné soustavy a převody; bit, byte, kód. Bez dvojkové a šestnáctkové soustavy se nepohneš dál.' },
        { when: '3–4', h: 'Logika', x: 'Výrokový počet, pravdivostní tabulky, ekvivalence a logický důsledek. Potřebuješ ji pro XOR u parity i pro logické instrukce.' },
        { when: '5–7', h: 'Kódování dat', x: 'Text a logické hodnoty, celá čísla (doplňkový kód), reálná čísla (IEEE 754).' },
        { when: '8', h: 'Zabezpečení dat', x: 'Hammingova vzdálenost, parita, Hammingův kód – staví na dvojkové soustavě a XOR.' },
        { when: '9–10', h: 'Počítač', x: 'Architektura von Neumannova typu, pak strojový kód, adresace a logické instrukce – zde se všechno předchozí spojí.' }
      ] },
      { t: 'tip', x: 'U každého tématu nejdřív přečti slovníček a rychlý přehled, pak sekce, nakonec si projdi otázky v režimu kartiček. Příklady počítej na papíře dřív, než se podíváš na výsledek.' }
    ] },
    { title: 'Zápočet', blocks: [
      { t: 'ul', items: [
        'Přiměřená aktivní účast na cvičeních (podle podmínek cvičícího).',
        'Absolvování <b>všech 3 autotestů</b> v systému Moodle ČZU – praktické příklady z probírané látky.',
        'Autotesty lze opakovat bez omezení, ale je třeba získat <b>plný počet bodů (100 %)</b>.'
      ] },
      { t: 'tip', x: 'Autotesty jsou prakticky stejné typy příkladů jako ve cvičení (převody soustav, pravdivostní tabulky, logický důsledek) – procvič si je v tomto skriptu.' }
    ] },
    { title: 'Zkouška a hodnocení', blocks: [
      { t: 'flow', title: 'Průběh zkoušky', steps: [
        { h: 'Zápočet', x: 'podmínka pro připuštění' },
        { h: 'Písemná část', x: 'povinná, max. 45 min' },
        { h: 'Ústní část', x: 'dobrovolná při 1–3, zbytečná při 4' }
      ] },
      { t: 'nums', title: 'Písemná část', items: [
        { n: '2×', u: 'malá teorie', x: 'teoretické otázky' },
        { n: '1×', u: 'praktický příklad', x: 'např. převod soustav, doplňkový kód, logika' },
        { n: '1×', u: 'algoritmus', x: 'strukturovaný návrh algoritmu' },
        { n: '45', u: 'minut', x: 'maximální doba' }
      ] },
      { t: 'ul', items: [
        'Každá dílčí otázka se hodnotí známkou <b>1 až 4</b>; výsledek písemky je „vážený“ průměr – <b>teoretické otázky mají větší váhu</b> než praktické.',
        '<b>Dvě dílčí hodnocení 4 = celkově 4</b>, bez ohledu na zbytek. Bere se v úvahu i celková úroveň odpovědí.',
        'Ústní část (hodnocení 1, 2, 3): může se týkat <b>jakékoli oblasti z přednášek</b>, ne jen té z písemky; známku lze změnit o libovolný počet stupňů oběma směry. Při hodnocení 4 je ústní zbytečná.'
      ] },
      { t: 'warn', x: 'Nedostavíš-li se na zapsaný termín a neomluvíš se <b>nejpozději v den zkoušky</b>, dostaneš <b>4</b>.' }
    ] },
    { title: 'Kontakt a literatura', blocks: [
      { t: 'table', head: ['Položka', 'Údaj'], rows: [
        ['Vyučující', 'Ing. David Buchtela, Ph.D. – KII PEF ČZU, KSI FIT ČVUT'],
        ['Místnost / e-mail', 'PEF 552 (5. patro) · buchtela@pef.czu.cz'],
        ['Konzultace', 'středa 10:30–12:00 (jindy po domluvě)'],
        ['Moodle', 'kurz „Úvod do principů počítačů“; klíč k zápisu odpovídá termínu cvičení']
      ] },
      { t: 'ul', items: [
        'Buchtela, Vynikarová: <i>Cvičebnice z předmětu Výpočetní systémy</i>, PEF ČZU 2013.',
        'Milková, Vobořík: <i>Algoritmy</i>, Alfa 2008.',
        'Pondělíček, Demlová: <i>Matematická logika</i>, FEL ČVUT 1997.',
        'Vaníček a kol.: <i>Teoretické základy informatiky</i>, Kernberg 2007.'
      ] }
    ] }
  ],
  mistakes: ['Spoléhat na zápočet bez 100 % autotestů – bez plného počtu bodů zápočet nebude.', 'Neomluvit se z termínu do dne zkoušky – automaticky 4.', 'Podcenit teorii: má větší váhu než praktický příklad.'],
  qa: [
    { q: 'Jak se získá zápočet z B-UPP?', a: 'Přiměřenou aktivní účastí na cvičeních a absolvováním všech 3 autotestů v Moodlu na plný počet bodů (100 %); pokusů je neomezeně.' },
    { q: 'Jak vypadá písemná část zkoušky?', a: 'Max. 45 minut; 2× malá teoretická otázka, 1× praktický příklad, 1× algoritmus (teorie : praxe ≈ 1 : 1).' },
    { q: 'Jak se hodnotí písemka a co znamenají dvě čtyřky?', a: 'Každá otázka dostane 1–4, výsledek je vážený průměr (teorie váží víc). Dvě dílčí hodnocení 4 znamenají celkově 4 bez ohledu na ostatní.' },
    { q: 'Je ústní část povinná?', a: 'Ne, je dobrovolná (při hodnocení 1–3) a může zasáhnout kteroukoli látku z přednášek; při hodnocení 4 je zbytečná. Známka se může změnit nahoru i dolů.' }
  ]
});
