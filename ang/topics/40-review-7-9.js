registerTopic({
  id: 'review-7-9', group: 'rev', order: 40, icon: '🔁', title: 'Review 7–9: opakování lekcí 7–9', src: 'podklady', where: 'Review 7–9 (s. 98–99)',
  summary: 'Souhrnné opakování lekcí 7–9: minulé časy, zero a second conditional, trpný rod, slovní zásoba ekologie a techniky, vyprávění a žádosti. Řešení cvičení jsou doplněna.',
  vocab: [
    { w: 'zero conditional', x: 'obecné pravdy: <i>If at first you don’t succeed, try, try again.</i>' },
    { w: 'second conditional', x: 'nereálné situace: <i>If I inherited a lot of money, I would buy a big house.</i>' },
    { w: 'passive', x: 'trpný rod – zajímá nás děj, ne původce' },
    { w: 'anecdote', x: 'krátká zajímavá příhoda' }
  ],
  key: [
    '<b>Minulé časy:</b> past simple, past continuous a past perfect pro vyprávění.',
    '<b>Podmínky:</b> zero (<i>if + present, present</i>), first (<i>if + present, will</i>), second (<i>if + past, would</i>).',
    '<b>Trpný rod:</b> <i>must be kept, has been improved, are being made, are paid, can be left, were asked</i>.',
    '<b>Vyprávění:</b> <i>Did I tell you about the time…? Really? You’re joking! In the end…</i>'
  ],
  sections: [
    { title: 'Co se opakuje', blocks: [
      { t: 'grid', head: ['Lekce', 'Téma', 'Klíčový obsah'], rows: [
        ['7 Tell us a story', 'Past continuous · Past tenses · Humour · Storytelling', 'vyprávění, spojky, vtipy'],
        ['8 Green chic', 'Zero and first conditionals · Second conditional · Problem solving', 'podmínky, ekologické pojmy, řešení problémů'],
        ['9 IT generation', 'Passive forms · Active or passive · Telephoning · Making requests', 'trpný rod, telefonování, žádosti']
      ] },
      { t: 'svg', title: 'Tři lekce v kostce', x: ANG.rev79(), cap: 'Klíčové fráze lekcí 7–9.' }
    ] },
    { title: 'Řešení cvičení z učebnice (doplněno)', blocks: [
      { t: 'grid', head: ['2 Přísloví', 'Dokončení'], rows: [
        ['If at first you don’t succeed,', 'try, try again.'], ['If a thing is worth doing,', 'it’s worth doing well.'], ['If you want a thing done well,', 'do it yourself.'],
        ['When in Rome,', 'do as the Romans do.'], ['When the cat’s away,', 'the mice will play.'], ['When one door shuts,', 'another one opens.'],
        ['If you can’t be good,', 'be careful.'], ['If you can’t stand the heat,', 'get out of the kitchen.']
      ] },
      { t: 'p', x: '<b>3 Přebytečné slovo:</b> 1 <s>will</s> · 2 <s>if</s> · 3 <s>be</s> · 4 <s>don’t</s> · 5 <s>will</s> · 6 <s>unless</s>. <b>4 Second conditional:</b> 1 inherited / would buy · 2 would you change / were · 3 could / would love · 4 would do / had · 5 would buy / didn’t have to · 6 were / wouldn’t worry.' },
      { t: 'p', x: '<b>5 Trpný rod:</b> 1 be kept · 2 has been improved · 3 are being made · 4 are paid · 5 can be left · 6 were asked. <b>6 Odd one out:</b> carton (není spotřebič) · disposable (není eko) · battery (není obal) · bulb (kancelář lze <i>soundproof, renovate, refurbish</i>, ale žárovku ne) · pollute (není součást kanceláře) · charge (není součást auta).' },
      { t: 'p', x: '<b>9 Slovní zásoba:</b> 1 fun · 2 joke · 3 told · 4 so · 5 work out · 6 deal with · 7 come up with. <b>10 Anekdota:</b> told · happened · time · so · Anyway · when · believe · Then · that · Really · end · funny.' },
      { t: 'grid', head: ['11 Žádost', 'Odpověď'], rows: [
        ['Oh dear, I’m having trouble opening this file.', 'Here, let me help you.'], ['Do you mind if I help myself to a biscuit?', 'Sure. Go ahead.'],
        ['Would it be OK to smoke in here?', 'I’m afraid not. The thing is it’s banned.'], ['Do you think you could send me a copy?', 'Certainly, I’ll do that right away.'],
        ['Can I borrow some money?', 'No problem. How much do you need?'], ['Can I have a quick word?', 'Sure, what’s up?'],
        ['How about if we run an anti-virus scan?', 'That’s an idea! I’ll try that.'], ['We’ve got another problem with the car.', 'What if we sell it and buy a new one?']
      ] },
      { t: 'tip', x: 'Cvičení 1 (příběh o hadovi), 7 (výslovnost samohlásek) a křížovka jsou v učebnici bez klíče a zde je neřešíme.' }
    ] }
  ],
  mistakes: [
    'Použít <i>will</i> v podmínkové větě po <i>if / when</i> (<i>Call me if you need anything.</i>).',
    'Zaměnit <i>unless</i> a <i>if … not</i>: <i>unless</i> už obsahuje zápor.',
    'Zaměnit <i>fun</i> a <i>funny</i> a <i>deal with</i> a <i>come up with</i>.',
    'V trpném rodě zapomenout na <i>be</i> + minulé příčestí.'
  ],
  qa: [
    { q: 'Jak se tvoří druhý kondicionál?', a: '<i>If</i> + past simple, <i>would</i> + základní tvar: <i>If I inherited a lot of money, I would buy a big house.</i>' },
    { q: 'Kdy se hodí trpný rod?', a: 'Když zajímá děj, ne původce, nebo když původce neznáme.' },
    { q: 'Jak odmítneš žádost slušně?', a: '<i>I’m afraid not. The thing is…</i>' }
  ]
});
