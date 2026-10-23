registerTopic({
  id: 'reported-speech', group: 'gram', order: 23, icon: '💬', title: 'Reported speech', src: 'podklady', where: 'Lekce 12 (s. 120–121) + Grammar reference (s. 174)',
  summary: 'Nepřímá řeč: o krok zpět v časech, změny modálních sloves, časových výrazů, zájmen a slov <i>this / here</i>; rozdíl <i>say</i> × <i>tell</i> a oznamování požadavků.',
  vocab: [
    { w: 'direct speech', x: 'přímá řeč – doslovné znění v uvozovkách' },
    { w: 'reported speech', x: 'nepřímá řeč – sdělujeme, co někdo řekl' },
    { w: 'reporting verb', x: 'uvozovací sloveso: <i>say, tell, ask, promise</i>' },
    { w: 'backshift', x: 'posun času o krok zpět (present → past, past → past perfect)' },
    { w: 'time expressions', x: 'časové výrazy (tomorrow, yesterday, next week) – v nepřímé řeči se mění' }
  ],
  key: [
    'Sloveso se v nepřímé řeči obvykle posouvá <b>o jeden čas zpět</b>: <i>‘I’m arriving’</i> → <i>She said she <b>was</b> arriving.</i>',
    '<b>Tense se nemění</b>, mluvíme-li o <b>faktech</b>, o něčem stále pravdivém nebo o něčem právě proběhlém.',
    '<b>will → would, can → could, must / have to → had to</b>; <b>might, would, should</b> se nemění.',
    '<b>Časové výrazy a zájmena se mění</b>: tomorrow → the following day, here → there, this → that, I → he / she…',
    '<b>say</b> bez osoby, <b>tell</b> s osobou: <i>She said she was arriving.</i> × <i>She told me she was arriving.</i>'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        'Nepřímou řeč používáme, abychom řekli, <b>co někdo řekl</b>. Sloveso se obvykle vrací o <b>jeden čas zpět</b>. Přímá řeč: <i>‘I’m arriving in LA on Thursday.’</i> → Nepřímá řeč: <i>She said she <b>was arriving</b> in LA on Thursday.</i>',
        '<b>Tense neměníme</b>, mluvíme-li o <b>faktech</b> nebo o něčem, co <b>stále platí</b>, nebo co se <b>stalo nedávno</b>: <i>‘Hollywood is the home of the stars.’</i> → <i>He says Hollywood <b>is</b> the home of the stars.</i> · <i>‘I phoned this morning.’</i> → <i>He says he <b>phoned</b> this morning.</i> (je to stále dnes ráno) · <i>‘I’ve never been to New York.’</i> → <i>Lauren said she <b>has never been</b> / <b>had never been</b> to New York.</i>',
        '<b>Tell</b> je následováno zájmenem (osobou). <b>Say</b> se zájmenem nepoužíváme: <i>She <b>told me</b> she was arriving in LA on Thursday.</i> → <i>She <b>said</b> she was arriving in LA on Thursday.</i>',
        '<b>Modální slovesa se také mění</b>, ale <i>might, would</i> a <i>should</i> ne: <i>‘I’ll write a letter of complaint.’</i> → <i>The customer said she <b>would write</b> a letter of complaint.</i> · <i>‘You can complete a questionnaire.’</i> → <i>They told me I <b>could complete</b> a questionnaire.</i> · <i>‘You should phone to complain.’</i> → <i>He said I <b>should phone</b> to complain.</i>',
        'Často je potřeba změnit i <b>časové výrazy, zájmena</b> a slova jako <i>this</i> nebo <i>here</i>: <i>‘The builders are coming <b>next week</b>.’</i> → <i>He said the builders were coming <b>the following week</b>.</i> · <i>‘I’ll give <b>you my</b> mobile phone number.’</i> → <i>He said he would give <b>me his</b> mobile phone number.</i> · <i>‘We’ve lived <b>here</b> for nine years.’</i> → <i>They told us they’d lived <b>there</b> for nine years.</i> · <i>‘We want <b>this</b> done by tomorrow.’</i> → <i>They said they wanted <b>it / that</b> done by the following day.</i>',
        'Výpověď můžeme <b>převést doslovně</b>, nebo ji <b>shrnout</b>: <i>‘The manager is busy. Could you phone back later?’</i> → <i>The secretary <b>asked me to phone</b> back later.</i>',
        '<b>That</b> po uvozovacím slovese je volitelné: <i>She told me (that) she was arriving in LA on Thursday.</i> · <i>She promised (that) she would write.</i>'
      ] }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'svg', title: 'Posun časů', x: ANG.reportedTenses(), cap: 'Tabulka z učebnice: vlevo čas v přímé řeči, vpravo čas v nepřímé řeči (někdy jsou možné dvě varianty).' },
      { t: 'grid', head: ['Změna', 'Přímá řeč', 'Nepřímá řeč'], rows: [
        ['Modální slovesa', 'We’ll do it.', 'They said they <b>would</b> do it.'],
        ['', 'I can’t start until Monday.', 'He said he <b>couldn’t</b> start until Monday.'],
        ['', 'I must / have to call them.', 'She said she <b>had to</b> call them.'],
        ['Časové výrazy', 'I’ll fix it tomorrow.', 'She told me she would fix it <b>the following day</b>.'],
        ['', 'I called yesterday.', 'He said he had called twice <b>the day before</b>.'],
        ['', 'We need the order for next week.', 'They said they needed the order for <b>the following week</b>.'],
        ['Zájmena', 'I’m going to complain to your manager.', 'He said <b>he</b> was going to complain to <b>my</b> manager.']
      ] },
      { t: 'svg', title: 'Časové a místní výrazy', x: ANG.reportedTime(), cap: 'Doplněno z příkladů učebnice: <i>last week</i> → <i>the previous week</i> (The technician was meant to come last week → the previous week).' },
      { t: 'warn', x: '<b>Negativní požadavky:</b> sdělujeme je pomocí <b>not to + sloveso</b>: <i>The customer asked me <b>not to call</b> again.</i><br><b>say × tell:</b> po <i>tell</i> uvádíme osobu nebo zájmeno, po <i>say</i> ne: <i>She <b>said</b> she didn’t agree.</i> · <i>She <b>told</b> the teacher / him she didn’t agree.</i>' },
      { t: 'versus', title: 'say × tell', cols: [
        { h: 'say', items: ['She <b>said</b> she was arriving in LA on Thursday.', 'osoba se neuvádí (<i>say to</i> je jiná vazba)'] },
        { h: 'tell', items: ['She <b>told me</b> she was arriving in LA on Thursday.', 'vždy s osobou: <i>told me / him / the teacher</i>'] }
      ], x: 'Obě slovesa uvozují nepřímou řeč, liší se tím, jestli v nich <b>je zmíněn posluchač</b>. Pokud ano, použij <i>tell</i> (řekla <i>mně</i>). Pokud posluchač neuveden není, použij <i>say</i> (řekla, že…).' }
    ] }
  ],
  mistakes: [
    'Neposunout čas: ✗ She said she is arriving → ✓ She said she <b>was</b> arriving (pokud nejde o stále platný fakt).',
    'Nezměnit časový výraz: ✗ He said the builders were coming next week → ✓ …<b>the following week</b>.',
    'Nezměnit zájmena: ✗ He said he would give you his number → ✓ …give <b>me</b> his number (podle toho, kdo mluví).',
    'Použít <i>say</i> se zájmenem: ✗ She said me → ✓ She <b>told</b> me / She <b>said</b>.',
    'Posunout <i>might, would, should</i>: tato modální slovesa se nemění.',
    'Dát <i>that</i> povinně: po uvozovacím slovese je <i>that</i> volitelné.'
  ],
  qa: [
    { q: 'Jak se mění čas v nepřímé řeči?', a: 'Obvykle o <b>jeden čas zpět</b>: present simple → past simple, present continuous → past continuous, past simple → past perfect.' },
    { q: 'Kdy se čas v nepřímé řeči nemění?', a: 'Když jde o <b>fakt</b>, něco <b>stále pravdivého</b> nebo <b>nedávného</b>.' },
    { q: 'Jak se mění modální slovesa <i>will, can, must</i>?', a: '<i>will → would</i>, <i>can → could</i>, <i>must / have to → had to</i>; <i>might, would, should</i> se nemění.' },
    { q: 'Jak se mění <i>tomorrow, yesterday, next week</i>?', a: '<i>the following day, the day before, the following week</i>.' },
    { q: 'Jaký je rozdíl mezi <i>say</i> a <i>tell</i>?', a: '<i>Tell</i> se pojí s osobou (<i>told me</i>), <i>say</i> ne (<i>said she…</i>).' },
    { q: 'Jak vyjádříš negativní požadavek v nepřímé řeči?', a: '<b>not to + sloveso</b>: <i>The customer asked me not to call again.</i>' }
  ]
});
