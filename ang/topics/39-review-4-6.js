registerTopic({
  id: 'review-4-6', group: 'rev', order: 39, icon: '🔁', title: 'Review 4–6: opakování lekcí 4–6', src: 'podklady', where: 'Review 4–6 (s. 66–67)',
  summary: 'Souhrnné opakování lekcí 4–6: <i>can / be able to</i>, stupňování, <i>used to</i>, past simple × present perfect, povinnost, rady a slovní zásoba vzdělávání. Řešení cvičení jsou doplněna.',
  vocab: [
    { w: 'can × be able to', x: '<i>be able to</i> se používá tam, kde <i>can</i> chybí tvar (po <i>to</i>, <i>will</i>, <i>have</i>)' },
    { w: 'used to', x: 'zvyk či stav v minulosti, který už neplatí' },
    { w: 'e-learner', x: 'student, který se učí přes internet, ne osobně' },
    { w: 'word stress', x: 'přízvuk ve slově' }
  ],
  key: [
    '<b>can / be able to:</b> <i>She would like to be able to speak… · How will you be able to…? · Have you been able to…?</i>',
    '<b>Past simple × present perfect:</b> dokončený minulý čas × souvislost se současností (<i>since, already, just, yet</i>).',
    '<b>Povinnost:</b> <i>have to, need to, must, should, don’t have to, mustn’t</i>.',
    '<b>Rady:</b> <i>You might want to… · It’d be better to… · Maybe you could… · I think you should…</i>'
  ],
  sections: [
    { title: 'Co se opakuje', blocks: [
      { t: 'grid', head: ['Lekce', 'Téma', 'Klíčový obsah'], rows: [
        ['4 Learning curve', '<i>can, could, be able to</i> · Comparatives and superlatives · Building on ideas', 'schopnosti, srovnávání, „Yes…, and…“'],
        ['5 Getting on', 'Present perfect × past simple · <i>used to</i> · Socializing', 'časy, small talk, komplimenty'],
        ['6 Rule of thumb', 'Modály povinnosti · Obligation in the past · Giving advice', 'povinnost, zákaz, rady']
      ] },
      { t: 'svg', title: 'Tři lekce v kostce', x: ANG.rev46(), cap: 'Klíčové fráze lekcí 4–6.' }
    ] },
    { title: 'Řešení cvičení z učebnice (doplněno)', blocks: [
      { t: 'p', x: '<b>1 can / be able to:</b> 1 can · 2 couldn’t · 3 able to · 4 to be able to · 5 weren’t able · 6 could / can’t · 7 be able to · 8 been able. <b>2 Slovní zásoba:</b> education · course · degree · online · attend · skill · trainer · career · e-learner · needs.' },
      { t: 'grid', head: ['3 Dialog', 'Správná volba'], rows: [
        ['1–5', 'used · more · better · use · cheaper'], ['6–10', 'bigger · worse · longer · the same · than'],
        ['11–15', 'much more · as · let · since · have to']
      ] },
      { t: 'p', x: '<b>4 Past simple / present perfect:</b> 1 has played / was · 2 retired · 3 Did you learn / were · 4 has just won · 5 Have you seen · 6 has already published · 7 has lived / wasn’t born · 8 started / has starred.' },
      { t: 'grid', head: ['5 Small talk', 'Odpověď'], rows: [
        ['I haven’t seen you for ages!', 'Yes, it’s been a long time, hasn’t it?'], ['What did you think of the new TV series last night?', 'Great, wasn’t it?'],
        ['How’s the new job going?', 'Fine, thanks. It’s really interesting.'], ['I love your shoes!', 'Thanks. I bought them in the sales.'],
        ['You’re pretty good at presentations, aren’t you?', 'Thanks. I’ve just done a course.'], ['Do you mind if I join you?', 'Not at all. Please do.'],
        ['What are you up to these days?', 'Oh, not much. How about you?'], ['Great to see you again!', 'Good to see you, too! How are the kids?']
      ] },
      { t: 'p', x: '<b>6 Správné věty:</b> 1 a, b · 2 b, c · 3 a · 4 a, c · 5 a, b · 6 a, c. <b>7 Témata rozhovoru:</b> Cinema – movie, leading actor, director, screen, role · Sport – Grand Slam, champion, sportsman, medal, match · Books – novel, author, bestseller, literature, translate · Weather – boiling, changeable, flood, storm, freezing · Politics – politician, government, vote, local council, mayor.' },
      { t: 'p', x: '<b>8 Rady (pořadí slov):</b> <i>Don’t let trainers choose their staff. · I think you should do an online degree. · You might want to think about learning a new skill. · It’d be better to let everyone choose their courses. · Maybe you could let me know when you’ve passed.</i>' }
    ] }
  ],
  mistakes: [
    'Použít <i>can</i> po <i>will</i> (správně <i>will be able to</i>).',
    'Použít past simple s <i>since</i> (správně <i>She has played tennis since she was four.</i>).',
    'Zaměnit <i>mustn’t</i> (zákaz) a <i>don’t have to</i> (není nutné).',
    'Radit příliš důrazně kolegům; použij <i>Maybe you could… / You might want to…</i>.'
  ],
  qa: [
    { q: 'Kdy se místo <i>can</i> používá <i>be able to</i>?', a: 'Po <i>to</i>, <i>will</i>, <i>would like</i> a v perfektu: <i>I’d like to be able to…, Have you been able to…?</i>' },
    { q: 'Jaký je rozdíl mezi <i>don’t have to</i> a <i>mustn’t</i>?', a: '<i>Don’t have to</i> = není nutné; <i>mustn’t</i> = je zakázáno.' },
    { q: 'Jak zní správná odpověď na „I love your shoes!“?', a: '<i>Thanks. I bought them in the sales.</i>' }
  ]
});
