registerTopic({
  id: 'o-predmetu', order: 0, icon: 'ℹ️', title: 'O předmětu a zkoušce', src: 'podklady', where: 'Organizace',
  summary: 'Zápočet, zkouška, sylabus, povinné předpisy a kontakty na vyučující.',
  key: [
    '<b>Zkouška = písemná (elektronicky, testovací centrum PEF, Moodle) + ústní.</b> K ústní části jen při dosažení minimálního počtu bodů v písemné.',
    'Ke zkoušce jen se <b>zápočtem</b>; na termín se nutno přihlásit v <b>UIS</b>, jinak nebudete připuštěni.',
    'Semináře: 5× výuka + 6. seminář = zápočtový test (Moodle). Povolena obvykle <b>1 absence</b>.',
    'Předmět 5 kreditů, 2 h přednáška + 1 h cvičení týdně.'
  ],
  sections: [
    { title: 'Předmět v číslech', blocks: [
      { t: 'nums', title: 'Rozsah předmětu', items: [
        { n: '5', u: 'kreditů', x: 'hodnota předmětu' },
        { n: '2 + 1', u: 'hodiny týdně', x: '2 h přednáška + 1 h cvičení' },
        { n: '12', u: 'přednášek', x: 'poslední je rekapitulace' },
        { n: '6', u: 'seminářů', x: '5× výuka + 6. zápočtový test' }
      ] }
    ] },
    { title: 'Zápočet', blocks: [
      { t: 'tree', title: 'Z čeho se skládá zápočet', root: { h: 'Zápočet', x: 'podmínky plníte kumulativně', kids: [
        { h: 'Docházka', x: 'povolena 1 absence; náhrada v jiném semináři (po domluvě, potvrzení o účasti)' },
        { h: 'Průběžné testy', x: 'Moodle, látka semináře a přednášky; u Reicherta 2 testy (3. a 5. seminář)' },
        { h: 'Aktivita a úkoly', x: 'zadání i odevzdání přes Moodle, zohledňuje se v hodnocení' },
        { h: 'Zápočtový test', x: '6. seminář v Moodlu – vezměte si notebook/mobil' }
      ] } },
      { t: 'nums', title: 'Limity zápočtu', items: [
        { n: '1', u: 'absence', x: 'povolená; při nedostatečné účasti může vyučující uložit seminární práci' },
        { n: '3', u: 'semináře', x: 'méně než 3 absolvované = zápočet nelze udělit (Reichert)' },
        { n: '2', u: 'průběžné testy', x: 'u Reicherta: 3. a 5. seminář' }
      ] },
      { t: 'ul', items: [
        'Nesplníte-li podmínky kumulativně, píšete zápočtový test na posledním semináři.'
      ] },
      { t: 'tip', x: 'Podmínky se mírně liší podle cvičícího (Kellner, Cvik, Dodamgoda, Reichert) – vždy platí to, co řekl váš cvičící na 1. semináři.' }
    ] },
    { title: 'Zkouška', blocks: [
      { t: 'flow', title: 'Cesta ke zkoušce', steps: [
        { h: 'Zápočet', x: 'docházka, testy, aktivita' },
        { h: 'Přihlášení v UIS', x: 'bez něj nepřipuštěni ani zápis známky' },
        { h: 'Písemný test', x: 'elektronicky, Moodle, testovací centrum PEF' },
        { h: 'Ústní zkouška', x: 'jen po dosažení min. počtu bodů' }
      ] },
      { t: 'ul', items: [
        'Termíny vypisuje UIS.',
        'Studijní materiál = přednášky a semináře v Moodlu + příslušné zákony.'
      ] }
    ] },
    { title: 'Sylabus', blocks: [
      { t: 'timeline', title: 'Přednášky 1–12', items: [
        { when: '1', h: 'Úvod do práva', x: 'Právo, dualismus, prameny práva, právní systémy, právní normy' },
        { when: '2', h: 'Právní vztahy', x: 'Právní vztahy, skutečnosti, subjekty, právní jednání, vady' },
        { when: '3', h: 'Ústavní právo', x: 'Ústavní právo, LZPS' },
        { when: '4', h: 'Občanské právo', x: 'Zásady občanského práva, absolutní majetková práva' },
        { when: '5', h: 'Újma', x: 'Odpovědnost za újmu, bezdůvodné obohacení' },
        { when: '6', h: 'Závazky', x: 'Relativní majetková práva, vybrané smlouvy' },
        { when: '7', h: 'Rodinné právo', x: 'Rodinné právo, SJM, podnikání' },
        { when: '8', h: 'Pracovní právo' },
        { when: '9', h: 'Správní právo', x: 'Správní právo, správní řízení' },
        { when: '10', h: 'Civilní proces', x: 'Civilní proces, rozsudek, žaloba' },
        { when: '11', h: 'Trestní právo', x: 'Trestní právo, trestní odpovědnost PO' },
        { when: '12', h: 'Rekapitulace' }
      ] },
      { t: 'timeline', title: 'Cvičení 1–6', items: [
        { when: '1', h: 'Právní normy', x: 'části, platnost, účinnost, publikace, aplikace, interpretace' },
        { when: '2', h: 'Právní skutečnosti', x: 'právní jednání, čas, promlčení, prekluze' },
        { when: '3', h: 'Smlouvy', x: 'Kupní smlouva, smlouva o dílo, nájem' },
        { when: '4', h: 'Podnikání', x: 'Veřejnoprávní úprava podnikání, živnosti' },
        { when: '5', h: 'Dědictví' },
        { when: '6', h: 'Závěrečný test', x: 'zápočet' }
      ] }
    ] },
    { title: 'Předpisy, které je třeba znát', blocks: [
      { t: 'icons', title: 'Ústava a soukromé právo', items: [
        { i: '🏛️', h: '1/1993 Sb.', x: 'Ústava ČR' },
        { i: '📜', h: '2/1993 Sb.', x: 'Listina základních práv a svobod' },
        { i: '📘', h: '89/2012 Sb.', x: 'Občanský zákoník (OZ / NOZ)' },
        { i: '🏢', h: '90/2012 Sb.', x: 'Zákon o obchodních korporacích' },
        { i: '🛠️', h: '455/1991 Sb.', x: 'Živnostenský zákon' }
      ] },
      { t: 'icons', title: 'Práce, správa, proces a trestní právo', items: [
        { i: '👷', h: '262/2006 Sb.', x: 'Zákoník práce' },
        { i: '🗂️', h: '500/2004 Sb.', x: 'Správní řád' },
        { i: '⚖️', h: '99/1963 Sb.', x: 'Občanský soudní řád' },
        { i: '🧾', h: '292/2013 Sb.', x: 'Zákon o zvláštních řízeních soudních' },
        { i: '🚔', h: '40/2009 Sb.', x: 'Trestní zákoník' }
      ] },
      { t: 'tip', x: 'Doporučená literatura: Novotný – <i>Nový občanský zákoník</i> (Principy a základní pojmy; Smluvní právo; Náhrada škody; Vlastnictví a věcná práva), Raban – <i>Relativní majetková práva</i>, komentáře k zákoníku práce.' }
    ] }
  ],
  mistakes: ['Zapomenout se přihlásit na termín v UIS – bez přihlášky vám nezapíšou známku ani vás nepustí na zkoušku.', 'Spoléhat na to, že stačí slajdy – u zkoušky se čekají znalosti z <b>textů zákonů</b> (OZ, Ústava, ZP…).'],
  qa: [
    { q: 'Za jakých podmínek mohu jít ke zkoušce?', a: 'Musím mít zápočet (docházka, průběžné testy, aktivita) a být přihlášen na termín v UIS.' },
    { q: 'Z čeho se skládá zkouška?', a: 'Z písemné elektronické části (Moodle, testovací centrum PEF) a ústní části; k ústní se postupuje po dosažení minimálního počtu bodů v testu.' }
  ]
});
