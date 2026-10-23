registerTopic({
  id: 'to-ing-forms', group: 'gram', order: 5, icon: '🔀', title: 'Base form with to or -ing form', src: 'podklady', where: 'Lekce 3 (s. 24–25) + Grammar reference (s. 172–173)',
  summary: 'Kdy po slovesu následuje <i>to</i> + základní tvar a kdy tvar na <i>-ing</i>; slovesa s oběma tvary, slovesa se změnou významu (<i>stop, try, remember</i>) a použití <i>-ing</i> tvarů.',
  vocab: [
    { w: 'base form', x: 'základní tvar slovesa (infinitiv bez <i>to</i>): <i>go, have, eat</i>' },
    { w: 'to + base form', x: 'infinitiv s <i>to</i>: <i>to go, to have, to eat</i>' },
    { w: '-ing form', x: 'tvar slovesa s koncovkou -ing: <i>going, having, eating</i>; může fungovat i jako podstatné jméno' },
    { w: 'preposition', x: 'předložka (by, after, for…); za předložkou následuje <i>-ing</i> tvar' },
    { w: 'purpose', x: 'účel – odpověď na otázku „proč?“; vyjadřuje se <i>to</i> + základní tvar' }
  ],
  key: [
    'Po <b>modálním slovese</b> následuje základní tvar <b>bez <i>to</i></b>: <i>You should try…</i>',
    '<b>would like, want, plan, need, hope, offer</b> + <b>to</b> + základní tvar.',
    '<b>enjoy, mind, suggest, insist on</b> + tvar <b>-ing</b>.',
    '<b>begin, start, like, love, prefer</b> – obě možnosti, význam stejný.',
    '<b>stop, try, remember</b> – obě možnosti, ale <b>význam se mění</b>.',
    '<b>-ing</b> po <b>předložce</b> a když je sloveso <b>podmětem</b>; <b>to</b> + základní tvar pro <b>účel</b> a po <b>It is + adjektivum</b>.'
  ],
  sections: [
    { title: 'Přehled pravidel', blocks: [
      { t: 'svg', title: 'Který tvar po kterém slovesu?', x: ANG.patternsToIng(), cap: 'Nahoře čtyři skupiny sloves, dole pět dalších pravidel.' },
      { t: 'grid', head: ['Situace', 'Pravidlo', 'Příklad'], rows: [
        ['It + adjektivum', '<b>to</b> + základní tvar', 'It’s polite <b>to compliment</b> the cooking and your host. · It’s important <b>to give</b> people gifts in my country.'],
        ['modální sloveso', 'základní tvar <b>bez to</b>', 'You should <b>try</b> some of this. It’s delicious. · I’m sorry. I really must <b>go</b> now.'],
        ['would like, want, plan, need, hope, offer…', '<b>to</b> + základní tvar', 'Would you like <b>to have</b> a coffee break now? · I didn’t want <b>to eat</b> the bird’s nest soup, but I tried a little.'],
        ['begin, start, like, love, prefer…', '<b>to</b> + základ, nebo <b>-ing</b>', 'Do you prefer <b>having</b> / like <b>to have</b> lunch at 1 or 2 p.m.? · I don’t like <b>going</b> / <b>to go</b> out on my own late at night.'],
        ['sloveso je podmětem věty', '<b>-ing</b>', '<b>Understanding</b> different cultures can positively influence your business. · <b>Asking</b> for more food is a compliment.'],
        ['po předložce', '<b>-ing</b>', 'We honour our guests by <b>serving</b> them local specialities. · They had a coffee after <b>finishing</b> their meal.'],
        ['enjoy, mind, suggest, insist on…', '<b>-ing</b>', 'Do you mind <b>picking</b> me up from the airport? · Our host insisted on <b>paying</b> for everything.'],
        ['účel, vysvětlení proč', '<b>to</b> + základní tvar', 'We’re eating out tonight <b>to celebrate</b> my birthday. · They wanted to book an expensive restaurant <b>to entertain</b> their Mexican guests.']
      ] },
      { t: 'tip', x: 'Zapamatuj si: <b>po předložce vždy -ing</b> (<i>by serving, after finishing, insist <u>on</u> paying</i>). Slovo <i>to</i> v <i>to celebrate</i> je jiné <i>to</i> – vyjadřuje účel, ne předložku.' }
    ] },
    { title: 'Slovesa se změnou významu: stop, try, remember', blocks: [
      { t: 'p', x: 'Některá slovesa mohou následovat <i>to</i> + základní tvar i <i>-ing</i>, ale <b>význam se změní</b>.' },
      { t: 'versus', title: 'Se změnou významu: to × -ing', cols: [
        { h: 'sloveso + <i>to</i> + základní tvar', items: ['We <b>stopped to have</b> lunch. (přerušili jsme činnost, abychom něco jiného udělali)', '<b>Try to be</b> on time for the meeting. (snaž se)', '<b>Remember to take</b> your toothbrush! (nezapomeň to udělat)'] },
        { h: 'sloveso + <i>-ing</i>', items: ['Could you please <b>stop sending</b> me joke emails? (nepokračovat)', '<b>Try eating</b> with your hand. It’s much easier. (vyzkoušej)', 'Do you <b>remember visiting</b> Shanghai? (máš vzpomínku na to, co jsi udělal)'] }
      ], x: 'U těchto tří sloves rozhoduje tvar o tom, <b>co se stalo nebo stane</b>. <i>Stop to have lunch</i> = přestanu dělat něco jiného a dám si oběd; <i>stop sending</i> = přestanu s tím, co jsem dělal. <i>Try to be</i> = vynaložím úsilí; <i>try eating</i> = zkusím jako pokus. <i>Remember to take</i> = nezapomenu to udělat; <i>remember visiting</i> = pamatuji si, že jsem to udělal.' }
    ] },
    { title: '-ing tvary (Use)', blocks: [
      { t: 'ol', items: [
        '<b>Tvoří část průběhových časů:</b> <i>Young Europeans are still reading books.</i> · <i>She was waiting for 20 minutes before her coffee arrived.</i>',
        '<b>Některá přídavná jména končí na -ing:</b> <i>It’s surprising, isn’t it?</i>',
        '<b>Mohou fungovat jako podstatná jména</b>, když je podmětem věty činnost: <i>Thanking your host is considered to be polite.</i>'
      ] },
      { t: 'versus', title: 'Přídavná jména -ed × -ing', cols: [
        { h: '-ed: jak se člověk cítí', items: ['I was <b>interested</b> to hear his talk.', '(<i>interested</i> popisuje reakci na přednášku)'] },
        { h: '-ing: co ten pocit způsobuje', items: ['He gave a very <b>interesting</b> talk.', '(<i>interesting</i> popisuje přednášku)'] }
      ], x: 'Koncovka <b>-ed</b> říká, <b>jaký pocit mám</b> (zaujatý), koncovka <b>-ing</b> říká, <b>jaká je věc, která ten pocit vyvolává</b> (zajímavá). Přednáška je <i>interesting</i>, já jsem <i>interested</i>.' }
    ] }
  ],
  mistakes: [
    'Použít <i>to</i> po modálním slovese: ✗ I must to go → ✓ I must go.',
    'Použít základní tvar po předložce: ✗ after to finish → ✓ after finishing.',
    'Zaměnit <i>stop to do</i> a <i>stop doing</i>: <i>stop sending</i> (nepokračovat) × <i>stop to send</i> (zastavit se, abych odeslal).',
    'Zaměnit <i>interested</i> a <i>interesting</i>: <i>I was interested</i> (reakce) × <i>an interesting talk</i> (vlastnost přednášky).',
    'Nechat sloveso jako podmět bez <i>-ing</i>: ✗ Ask for more food is a compliment → ✓ Asking for more food is a compliment.'
  ],
  qa: [
    { q: 'Co následuje po modálním slovese?', a: 'Základní tvar slovesa <b>bez <i>to</i></b>: <i>You should try some. I must go.</i>' },
    { q: 'Které tvary následují po <i>would like, want, plan, need, hope, offer</i>?', a: '<b>to</b> + základní tvar: <i>Would you like to have a coffee break?</i>' },
    { q: 'Které tvary následují po <i>enjoy, mind, suggest, insist on</i>?', a: 'Tvar na <b>-ing</b>: <i>Do you mind picking me up?</i>' },
    { q: 'Který tvar následuje po předložce?', a: 'Vždy <b>-ing</b>: <i>by serving, after finishing</i>.' },
    { q: 'Jak vyjádříš účel?', a: '<b>to</b> + základní tvar: <i>We’re eating out tonight to celebrate my birthday.</i>' },
    { q: 'Jaký je rozdíl mezi <i>stop to have lunch</i> a <i>stop sending emails</i>?', a: '<i>Stop to have</i> = přerušit činnost, abych udělal něco jiného; <i>stop sending</i> = přestat s činností.' },
    { q: 'Jaký je rozdíl mezi <i>remember to take</i> a <i>remember visiting</i>?', a: '<i>Remember to take</i> = nezapomenout to udělat; <i>remember visiting</i> = pamatovat si, že jsem tam byl.' },
    { q: 'Jaký je rozdíl mezi <i>interested</i> a <i>interesting</i>?', a: '<i>-ed</i> = jak se člověk cítí; <i>-ing</i> = co ten pocit vyvolává.' }
  ]
});
