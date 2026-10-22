registerTopic({
  id: 'o-ucebnici', order: 0, icon: 'ℹ️', title: 'O učebnici a těchto skriptech', src: 'podklady', where: 'Lifestyle Intermediate Coursebook – Contents (s. 2–3), Grammar reference (s. 160–176)',
  summary: 'Jak je učebnice postavená (12 lekcí po pěti částech), kde je v ní gramatika a jak jsou témata gramatiky očíslovaná v těchto skriptech.',
  vocab: [
    { w: 'Grammar', x: 'gramatika – část lekce, kde se probírá nový jev; odkazuje na Grammar reference' },
    { w: 'Word Focus', x: 'slovní zásoba k tématu lekce' },
    { w: 'Communication strategies', x: 'užitečné fráze pro konkrétní komunikační situace (návrh, souhlas, omluva…)' },
    { w: 'Interaction', x: 'závěrečná praktická úloha nebo hraní rolí v lekci' },
    { w: 'Grammar reference', x: 'přehled gramatiky na s. 160–176: pro každý jev <i>Use</i> (použití) a <i>Form</i> (tvoření)' }
  ],
  key: [
    'Učebnice má <b>12 lekcí</b>, každá má Grammar (dvě části), Word Focus, Communication strategies a Interaction; po třech lekcích je <b>Review</b>.',
    'Každé gramatické téma má v těchto skriptech stejnou stavbu: <b>Použití → Tvoření → Schéma → Časté chyby → Otázky</b>.',
    'Čísla témat 1–24 odpovídají pořadí gramatiky v učebnici; téma <b>25</b> je seznam nepravidelných sloves.',
    'Strany v hlavičce témat jsou <b>tištěné</b> strany učebnice (ne čísla stránek PDF).'
  ],
  sections: [
    { title: 'Stavba učebnice', blocks: [
      { t: 'p', x: 'Lekce 1–12 mají každá přibližně deset stran. Gramatika je v každé lekci rozdělena na dvě části (A a B), které odpovídají dvěma tématům v následující tabulce.' },
      { t: 'grid', head: ['Lekce', 'Název', 'Gramatika', 'Téma č.'], rows: [
        ['1', 'Quality time', 'Tense review · Present tense question forms', '1 · 2'],
        ['2', 'Globetrotters', '<i>will</i> and <i>going to</i> · Present continuous for future plans', '3 · 4'],
        ['3', 'Be my guest', 'Base form with <i>to</i> or <i>-ing</i> form · Quantifiers', '5 · 6'],
        ['4', 'Learning curve', '<i>can, could</i> and <i>be able to</i> · Comparatives and superlatives', '7 · 8'],
        ['5', 'Getting on', 'Present perfect and past simple · <i>used to</i>', '9 · 10'],
        ['6', 'Rule of thumb', '<i>can, have to, must, need to</i> and <i>should</i> · Obligation in the past', '11 · 12'],
        ['7', 'Tell us a story', 'Past continuous · Past tenses', '13 · 14'],
        ['8', 'Green chic', 'Zero and first conditionals · Second conditional', '15 · 16'],
        ['9', 'IT generation', 'Passive forms · Active or passive', '17 · 18'],
        ['10', 'Right and wrong', 'Third conditional · <i>should have</i>', '19 · 20'],
        ['11', 'Working together', 'Relative pronouns · Present perfect continuous', '21 · 22'],
        ['12', 'Trial and error', 'Reported speech · Embedded questions', '23 · 24']
      ] },
      { t: 'tip', x: 'Po lekcích 3, 6, 9 a 12 následuje <b>Review</b> – souhrnné opakování předchozích tří lekcí.' }
    ] },
    { title: 'Grammar reference (s. 160–176)', blocks: [
      { t: 'p', x: 'Přehled gramatiky na konci učebnice je hlavním zdrojem těchto skript. Pro každý jev uvádí <b>Use</b> (kdy se jev používá) a <b>Form</b> (jak se tvoří – kladná věta, záporná věta, otázka, krátká odpověď).' },
      { t: 'ul', items: [
        '<b>Present tenses</b> (s. 160–162): present simple, frequency adverbs, present continuous, otázky, present perfect simple a continuous.',
        '<b>Past tenses</b> (s. 163–165): past simple, past simple × present perfect, <i>used to</i>, past continuous, past perfect.',
        '<b>Future forms and modal verbs</b> (s. 166–168): <i>will</i>, <i>going to</i>, present continuous, modály možnosti, schopnosti, povinnosti a povolení.',
        '<b>Conditional sentences</b> a <b>passives</b> (s. 169–170).',
        '<b>Nouns and adjectives</b> (s. 171–172): složená podstatná jména, kvantifikátory, <i>-ing</i> tvary, stupňování.',
        '<b>Verbs + to / -ing</b>, vztažná zájmena, nepřímá řeč, nepřímé otázky (s. 173–175) a seznam <b>nepravidelných sloves</b> (s. 176).'
      ] },
      { t: 'warn', x: 'Skripta zatím zpracovávají jen <b>gramatiku</b>. Slovní zásoba (Word Focus), komunikační strategie a Interaction z jednotlivých lekcí zde nejsou; složená podstatná jména (<i>compound nouns</i>) patří v učebnici do Word Focus lekce 2.' }
    ] }
  ],
  mistakes: [
    'Učit se z věty „kdy se to používá“ bez tvoření – u každého tématu je potřeba znát obojí (Use i Form).',
    'Učit se pravidlo bez příkladové věty. Příklady z učebnice jsou v textech tučně a dají se použít jako vzor.',
    'Mylně brát číslo strany z těchto skript jako číslo stránky v PDF – jsou to tištěná čísla učebnice.'
  ],
  qa: [
    { q: 'Kolik lekcí má učebnice a z jakých částí se lekce skládá?', a: '<b>12 lekcí</b>; každá má Grammar (dvě části), Word Focus, Communication strategies a Interaction. Po každých třech lekcích je Review.' },
    { q: 'Kde najdeš souhrn gramatiky?', a: 'V <b>Grammar reference</b> na s. 160–176 – každý jev má <i>Use</i> a <i>Form</i>.' },
    { q: 'Co znamená <i>Use</i> a <i>Form</i> v Grammar reference?', a: '<i>Use</i> = kdy a proč jev používáme; <i>Form</i> = jak se tvoří (kladná věta, záporná, otázka, krátká odpověď).' }
  ]
});
