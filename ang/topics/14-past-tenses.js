registerTopic({
  id: 'past-tenses', group: 'gram', order: 14, icon: '🕰️', title: 'Past tenses – past simple, past continuous, past perfect', src: 'podklady', where: 'Lekce 7 (s. 70–71) + Grammar reference (s. 163, 165)',
  summary: 'Tři minulé časy pro vyprávění příběhu: past simple (hlavní události), past continuous (pozadí) a past perfect (děj dřívější než jiný děj v minulosti); výslovnost koncovky -ed.',
  vocab: [
    { w: 'past simple', x: 'minulý čas prostý: ukončené děje a situace v minulosti; <i>worked, went</i>' },
    { w: 'past perfect', x: 'předminulý čas: <i>had + past participle</i>; děj dřívější než jiný minulý děj' },
    { w: 'irregular verb', x: 'nepravidelné sloveso – má zvláštní tvar minulého času a příčestí (téma 25)' },
    { w: 'voiced / unvoiced sound', x: 'znělá / neznělá hláska – rozhoduje o výslovnosti koncovky <i>-ed</i>' },
    { w: 'by the time / by the age of', x: 'do té doby / do věku – výrazy, které často stojí u past perfect' }
  ],
  key: [
    '<b>Past simple</b> = ukončené děje v minulosti; základ <b>vyprávění</b> příběhu.',
    '<b>Past continuous</b> = děje <b>v průběhu</b> a <b>pozadí</b> příběhu.',
    '<b>Past perfect</b> = <b>had + past participle</b>; děj <b>dřívější</b> než jiný minulý děj; také zkušenost před určitým bodem v minulosti.',
    'Past simple se tvoří koncovkou <b>-ed</b> (pravidelná) nebo zvláštním tvarem (nepravidelná). Záporná věta a otázka: <b>did</b> + základní tvar.',
    'Koncovka <b>-ed</b> se čte /d/, /t/ nebo /ɪd/ – podle posledního zvuku slovesa.'
  ],
  sections: [
    { title: 'Past simple', blocks: [
      { t: 'def', term: 'Použití', x: 'Past simple používáme o <b>ukončených dějích a situacích v minulosti</b>.', items: ['mohly se stát nedávno i dávno', 'častým použitím je <b>vyprávění příběhů</b>'] },
      { t: 'ex', x: 'I <b>saw</b> the film a few days ago.<br>The first modern Olympic Games <b>were</b> in April 1896.<br>I <b>went</b> to a conference last month and <b>met</b> an old colleague.<br>A funny thing <b>happened</b> to me on my commute to work yesterday.' },
      { t: 'svg', title: 'Stavba vět v past simple', x: ANG.pastSimpleForm(), cap: 'Sloveso be má vlastní tvary was / were bez pomocného did.' },
      { t: 'ex', x: '<b>Příklady z učebnice:</b><br><b>Kladná</b>: I/You/He/She/It/We/They <b>worked</b> in a jazz club. · He <b>became</b> a professional player in 2001. · She <b>began</b> her career 30 years ago. · He/She/It <b>was</b> in Hong Kong last year. · We/You/They <b>were</b> in Australia in March.<br><b>Záporná</b>: We <b>didn’t understand</b> the question. · He <b>wasn’t</b> good at sports at school. · They <b>weren’t</b> happy about their team’s result. · I <b>could</b> understand French but I <b>couldn’t</b> speak it.<br><b>Otázka</b>: <b>Did</b> you get my email? · When <b>did</b> he win a gold medal? · <b>Was</b> he good at sports at school?<br><b>Krátká odpověď</b>: Did you get my email? Yes, I did. / No, I didn’t. · Was he an author? Yes, he was. / No, he wasn’t. · Were they late? Yes, they were. / No, they weren’t.' },
      { t: 'tip', x: 'Po <b>did</b> a <b>didn’t</b> už je sloveso vždy v základním tvaru: <i>Did you <b>get</b>…?</i> · <i>We didn’t <b>understand</b>…</i> – minulý čas nese pomocné sloveso, ne významové.' }
    ] },
    { title: 'Výslovnost pravidelných sloves (-ed)', blocks: [
      { t: 'p', x: 'Výslovnost koncovky <i>-ed</i> závisí na tom, zda slovesný kořen končí <b>znělou</b>, nebo <b>neznělou</b> hláskou. Neznělé hlásky: <i>f, k, p, t, sh</i>. Znělé: <i>b, d, g, v, n</i>.' },
      { t: 'grid', head: ['Sloveso končí', 'Výslovnost -ed', 'Příklady'], rows: [
        ['znělou hláskou', '/d/ (cleaned)', 'cleaned, retired, planned, earned, received, changed, discovered, happened, trained, opened'],
        ['neznělou hláskou', '/t/ (washed)', 'washed, asked, focused, talked, worked, based, placed, looked, stopped, missed, promised'],
        ['hláskou /d/ nebo /t/', 'přibývá slabika /ɪd/ (wanted)', 'wanted, needed, created, exceeded, depended, decided, visited, contacted, mended']
      ] },
      { t: 'warn', x: 'U sloves končících na /t/ nebo /d/ se vyslovuje <b>extra slabika /ɪd/</b>, ne /ed/. <i>want</i> (jedna slabika) × <i>wanted</i> (dvě slabiky) · <i>need</i> (jedna) × <i>needed</i> (dvě).' }
    ] },
    { title: 'Past continuous v příběhu', blocks: [
      { t: 'p', x: 'Past continuous (<i>was / were + -ing</i>) popisuje <b>děje v průběhu</b> a <b>pozadí</b> příběhu – viz podrobně téma 13. V učebnici: <i>We <b>were joking around</b> when we came up with the plan.</i>' }
    ] },
    { title: 'Past perfect', blocks: [
      { t: 'ol', items: [
        '<b>Dřívější děj.</b> Past perfect používáme o dějích nebo událostech, které se staly <b>před jiným dějem v minulosti</b>. Můžeme ho použít i o něčem, co trvalo do určitého bodu v minulosti nebo skončilo krátce předtím. Často je spolu s past simple: <i>Steve <b>had turned</b> 30 when he <b>got fired</b>.</i> · <i>Ben didn’t know he <b>had bought</b> a girl’s mountain bike when he <b>went</b> cycling.</i>',
        '<b>Zkušenost před určitým bodem v minulosti.</b> Často s příslovci <i>ever, never, already, yet, just</i>: <i>It was the best thing that <b>had ever happened</b> to me.</i> · <i>The film <b>had already started</b> when we arrived.</i>',
        '<b>Vyprávění o událostech v minulosti</b> s časovými výrazy <i>by (the age of), by the time</i>: <i>She <b>had set up</b> her own company by the age of 19.</i>'
      ] },
      { t: 'svg', title: 'Který děj byl dřív? Past perfect × past simple × past continuous', x: ANG.pastTime(), cap: 'Past perfect označuje to, co se stalo dřív; past simple a past continuous popisují hlavní příběh.' },
      { t: 'svg', title: 'Stavba vět v past perfect', x: ANG.pastPerfectForm(), cap: 'Past perfect = had + past participle, pro všechny osoby stejně.' },
      { t: 'ex', x: '<b>Příklady z učebnice:</b><br><b>Kladná</b>: In ten years it <b>had grown</b> into a $2 billion company.<br><b>Záporná</b>: She <b>hadn’t worked</b> as a waitress before. · Ben <b>hadn’t seen</b> the tree because it was dark.<br><b>Otázka</b>: <b>Had</b> you ever been to Paris before? · <b>Had</b> the film already started?<br><b>Krátká odpověď</b>: Had she recognized him from TV? Yes, she had. / No, she hadn’t.' },
      { t: 'tip', x: 'Ve mluvené angličtině se <i>had</i> často stahuje na <b>’d</b>: <i>It was the first time she’<b>d</b> visited the US.</i>' },
      { t: 'svg', title: 'Stavba minulých časů', x: ANG.pastForms(), cap: 'Past simple (verb + -ed nebo nepravidelné; záporně didn’t + základní tvar), past continuous (was / were + -ing) a past perfect (had + past participle) vedle sebe, každý s příkladem.' },
      { t: 'p', x: 'V učebnici si pak všechny tři časy procvičuješ na článku „A Fun-and-Games Strategy“. Při psaní vlastního příběhu je dobré používat spojovací výrazy <i>when, while, by the age of …, then, after (that), as a result</i>.' }
    ] }
  ],
  mistakes: [
    'Zapomenout <i>did</i> v otázce: ✗ When he win? → ✓ When <b>did</b> he win?',
    'Dát <i>-ed</i> i za <i>did</i>: ✗ Did you got / didn’t understood → ✓ Did you <b>get</b> / didn’t <b>understand</b>.',
    'Zaměnit pořadí dějů: dřívější děj dostane <i>past perfect</i> (<i>had turned 30</i>), pozdější <i>past simple</i> (<i>got fired</i>).',
    'Vyslovit <i>wanted</i> jako /wɒnt/ nebo /wɒnted/: správně /ˈwɒntɪd/ (dvě slabiky).',
    'Použít past perfect pro každý minulý děj – je potřeba jen tam, kde záleží na tom, který děj byl dřív.'
  ],
  qa: [
    { q: 'Jak se tvoří past simple pravidelných sloves?', a: 'Základní tvar + <b>-ed</b>: <i>worked</i>. Nepravidelná slovesa mají zvláštní tvar.' },
    { q: 'Jak se tvoří záporná věta a otázka v past simple?', a: '<b>didn’t / did</b> + základní tvar: <i>We didn’t understand the question. Did you get my email?</i>' },
    { q: 'Kdy se používá past perfect?', a: 'O ději, který se stal <b>dřív než jiný děj v minulosti</b>: <i>Steve had turned 30 when he got fired.</i>' },
    { q: 'Jak se tvoří past perfect?', a: '<b>had + past participle</b>; záporně <i>hadn’t</i> + past participle.' },
    { q: 'Jak se vyslovuje koncovka <i>-ed</i> v <i>cleaned</i>, <i>washed</i>, <i>wanted</i>?', a: '<i>cleaned</i> /d/ (znělá hláska), <i>washed</i> /t/ (neznělá), <i>wanted</i> /ɪd/ (extra slabika po /t/ a /d/).' },
    { q: 'Které časy tvoří pozadí a které hlavní děj příběhu?', a: 'Past continuous = pozadí a děj v průběhu; past simple = hlavní události; past perfect = dřívější děj.' }
  ]
});
