registerTopic({
  id: 'comparatives-superlatives', group: 'gram', order: 8, icon: '📊', title: 'Comparatives and superlatives', src: 'podklady', where: 'Lekce 4 (s. 40–41) + Grammar reference (s. 172)',
  summary: 'Srovnávání přídavných jmen a příslovcí: komparativ (<i>cheaper, more expensive</i>), superlativ (<i>the cheapest</i>), nepravidelné tvary, <i>less / the least</i>, <i>as … as</i> a rozlišení velkého a malého rozdílu.',
  vocab: [
    { w: 'comparative', x: 'druhý stupeň – srovnáváme <b>dvě</b> věci (<i>larger than</i>)' },
    { w: 'superlative', x: 'třetí stupeň – srovnáváme <b>tři a více</b> věcí (<i>the largest</i>)' },
    { w: 'short adjective', x: 'krátké přídavné jméno: koncovka <i>-er / -est</i>' },
    { w: 'long adjective', x: 'dlouhé přídavné jméno: <i>more / the most</i> nebo <i>less / the least</i>' },
    { w: 'irregular adjective', x: 'nepravidelné přídavné jméno: <i>good – better – best</i>' }
  ],
  key: [
    '<b>Komparativ</b> = dvě věci: <i>Beijing is larger <b>than</b> Moscow.</i> · <b>Superlativ</b> = tři a více: <i>Mexico City is <b>the</b> largest city.</i>',
    '<b>Krátká</b> přídavná jména: <b>-er / the -est</b>. <b>Dlouhá</b>: <b>more / the most</b> nebo <b>less / the least</b>.',
    '<b>Nepravidelná:</b> good – better – best · bad – worse – worst · far – further – furthest · much/many – more – most.',
    '<b>Velký rozdíl:</b> a lot, much, far · <b>malý rozdíl:</b> slightly, a little, a bit.',
    '<b>Stejnost:</b> <i>the same as</i>, <i>as + přídavné jméno + as</i>; záporně <i>not as / so + přídavné jméno + as</i>.'
  ],
  sections: [
    { title: 'Přídavná jména: použití a tvoření', blocks: [
      { t: 'svg', title: 'Srovnání měst z učebnice', x: ANG.compBars(), cap: 'Nahoře náklady na život (cost of living) a velikost měst. Dole tři příklady tvoření stupňů.' },
      { t: 'ol', items: [
        '<b>Komparativ</b> používáme pro srovnání <b>dvou</b> věcí: <i>Beijing is larger than Moscow.</i> · <i>Beijing is more expensive than Mexico City but it is less expensive than Moscow.</i>',
        '<b>Superlativ</b> používáme pro srovnání <b>tří nebo více</b> věcí: <i>Mexico City is the largest city in the world.</i> · <i>Mexico City is the least expensive of the three cities and Moscow is the most expensive.</i>'
      ] },
      { t: 'svg', title: 'Tvoření komparativu a superlativu', x: ANG.compForm(), cap: 'Krátká přídavná jména berou koncovku, dlouhá more / most; nepravidelná se učí zvlášť.' },
      { t: 'ex', x: '<b>Příklady z učebnice:</b><br><b>Krátká</b>: Beijing is <b>cheaper than</b> Moscow, but Mexico City is <b>the cheapest</b>.<br><b>Dlouhá</b>: Beijing is <b>more expensive than</b> Mexico City but Moscow’s <b>the most expensive</b>. · Beijing is <b>less expensive than</b> Moscow, but Mexico City is <b>the least expensive</b>.<br><b>Nepravidelná: <i>good</i></b>: The weather in Beijing is <b>better than</b> the weather in Moscow, but Mexico City has <b>the best</b> weather.<br><b>Nepravidelná: <i>bad</i></b>: The traffic in Beijing is <b>worse than</b> in Moscow, but Mexico City probably has <b>the worst</b> traffic in the world.<br><b>Nepravidelná: <i>far</i></b>: Mexico City is <b>further than</b> Moscow. Beijing is <b>the furthest</b>.<br><b>Nepravidelná: <i>much / many</i></b>: Moscow has many traffic jams but Beijing has <b>more</b>. Mexico City has <b>the most</b> traffic jams.' },
      { t: 'p', x: '<b>Dvouslabičná přídavná jména</b> (zvláštní případy): u mnoha se používá <i>more / most</i>: <i>more / most modern, recent, famous, correct, normal, frequent</i>. U některých jde obojí: <i>more clever / cleverer, more simple / simpler, more quiet / quieter</i> atd.' },
      { t: 'tip', x: 'Před superlativem stojí <b>the</b> (<i>the cheapest, the most expensive</i>); za komparativem následuje <b>than</b> (<i>cheaper than</i>).' }
    ] },
    { title: 'Velký a malý rozdíl; stejnost', blocks: [
      { t: 'ol', items: [
        '<b>Velký rozdíl:</b> <i>a lot, much, far</i> – <i>Studying online is <b>much more flexible</b> than attending full-time classes.</i>',
        '<b>Malý rozdíl:</b> <i>slightly, a little, a bit</i> – <i>It’s also <b>a bit cheaper</b> than a traditional course.</i>',
        '<b>Stejnost:</b> <i>the same as</i> – <i>Doing a course abroad costs <b>the same as</b> staying here this summer.</i>',
        '<b>as + přídavné jméno / příslovce + as:</b> <i>Tokyo can sometimes be <b>as cold as</b> Oslo in winter.</i>',
        '<b>Záporně:</b> <i>not as / so + přídavné jméno + as</i> – <i>Malta is <b>not as expensive as</b> Sardinia.</i>'
      ] },
      { t: 'versus', title: 'Rozdíl velký × malý × žádný', cols: [
        { h: 'velký rozdíl', items: ['a lot / much / far + komparativ', '<i>much more flexible than</i>'] },
        { h: 'malý rozdíl', items: ['slightly / a little / a bit + komparativ', '<i>a bit cheaper than</i>'] },
        { h: 'žádný rozdíl', items: ['the same as · as … as', '<i>as cold as Oslo</i>'] }
      ], x: 'Komparativ můžeš „zesílit“ nebo „zeslabit“. <i>Much</i>, <i>a lot</i> a <i>far</i> říkají, že je rozdíl velký; <i>a bit</i>, <i>a little</i> a <i>slightly</i> že je malý. Pokud jsou dvě věci stejné, použij <i>the same as</i> nebo <i>as … as</i>.' }
    ] },
    { title: 'Příslovce (comparative and superlative adverbs)', blocks: [
      { t: 'ol', items: [
        'Komparativ příslovce používáme pro srovnání <b>dvou činností</b>: <i>I’m progressing more slowly than him.</i>',
        'Superlativ příslovce pro <b>tři a více</b> činností: <i>She tries (the) hardest.</i>'
      ] },
      { t: 'grid', head: ['Typ příslovce', 'Tvoření', 'Příklad'], rows: [
        ['Končí na <b>-ly</b>', 'komparativ <b>more</b>, superlativ <b>the most</b>', 'more slowly · the most carefully'],
        ['Stejný tvar jako přídavné jméno', '<b>-er</b> a <b>-est</b>', 'hard – harder – hardest · fast – faster – fastest'],
        ['Nepravidelná', 'mění se úplně', 'good → <b>well</b>, better, best · bad → <b>badly</b>, worse, worst']
      ] }
    ] }
  ],
  mistakes: [
    'Zapomenout <i>than</i> po komparativu: ✗ Beijing is larger Moscow → ✓ Beijing is larger <b>than</b> Moscow.',
    'Zapomenout <i>the</i> před superlativem: ✗ Mexico City is largest → ✓ Mexico City is <b>the</b> largest.',
    'Dát dvojí stupňování: ✗ more cheaper → ✓ cheaper; ✗ most largest → ✓ the largest.',
    'Zaměnit komparativ a superlativ podle počtu věcí: dvě věci = komparativ, tři a více = superlativ.',
    'Přidat <i>-er</i> k dlouhému přídavnému jménu: ✗ expensiver → ✓ more expensive.'
  ],
  qa: [
    { q: 'Kdy se používá komparativ a kdy superlativ?', a: 'Komparativ při srovnání <b>dvou</b> věcí, superlativ při srovnání <b>tří a více</b> věcí.' },
    { q: 'Jak se tvoří stupně krátkých a dlouhých přídavných jmen?', a: 'Krátká: <b>-er / -est</b> (cheaper, the cheapest). Dlouhá: <b>more / the most</b> nebo <b>less / the least</b> (more expensive, the most expensive).' },
    { q: 'Jaké jsou stupně slov <i>good, bad, far, much/many</i>?', a: 'good – better – best · bad – worse – worst · far – further – furthest · much/many – more – most.' },
    { q: 'Jak vyjádříš velký a malý rozdíl?', a: 'Velký: <i>a lot, much, far</i>. Malý: <i>slightly, a little, a bit</i>.' },
    { q: 'Jak vyjádříš stejnost a její zápor?', a: '<i>the same as</i>, <i>as + přídavné jméno + as</i>; záporně <i>not as / so + přídavné jméno + as</i>.' },
    { q: 'Jak se tvoří komparativ příslovce končícího na <i>-ly</i>?', a: 'S <b>more</b> / <b>most</b>: <i>more slowly</i>, <i>the most carefully</i>.' }
  ]
});
