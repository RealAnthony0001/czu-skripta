registerTopic({
  id: 'second-conditional', group: 'gram', order: 16, icon: '💭', title: 'The second conditional', src: 'podklady', where: 'Lekce 8 (s. 82–83) + Grammar reference (s. 170)',
  summary: 'Podmínkové věty o imaginárních a nereálných situacích v přítomnosti a budoucnosti: <i>if</i> + past simple, <i>would</i> + základní tvar; srovnání s first conditional.',
  vocab: [
    { w: 'second conditional', x: 'druhý kondicionál: imaginární nebo nereálná situace' },
    { w: 'imaginary / unreal', x: 'představovaný, nereálný – ve skutečnosti to tak není' },
    { w: 'would / wouldn’t', x: 'by / by ne – pomocné sloveso pro představovaný výsledek' },
    { w: 'likely / unlikely', x: 'pravděpodobné / nepravděpodobné' }
  ],
  key: [
    '<b>If + past simple, would / wouldn’t + základní tvar.</b>',
    'Mluví o <b>nereálné nebo imaginární situaci</b>: <i>If I had the time, I’d have a long holiday.</i> (ve skutečnosti ho nemám).',
    'Místo <i>would</i> lze <b>could / might</b> (možnost): <i>If you cycled to work, you might get fit.</i>',
    'Ve formální angličtině je ve všech osobách <b>were</b>: <i>If I were the mayor…</i>',
    'První × druhý kondicionál záleží na tom, jak <b>pravděpodobná</b> je situace podle mluvčího.'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        'Second conditional používáme o <b>imaginárních nebo nereálných situacích</b>: <i>If I <b>had</b> the time, I’<b>d have</b> a long holiday.</i> (nemám čas) · <i>If I <b>were</b> the mayor, I <b>would ban</b> cars in the city centre.</i> (nejsem starosta)',
        'Můžeme použít i jiná modální slovesa, např. <b>could</b> a <b>might</b>, když mluvíme o možnostech: <i>If you wanted to be eco-friendly, you <b>could</b> stop using plastic bags.</i> · <i>If you cycled to work, you <b>might</b> get fit.</i>',
        'Někdy můžeme použít buď <b>first</b>, nebo <b>second</b> conditional, podle toho, jak situaci vnímáme a <b>zda je podle nás pravděpodobná</b>: <i>If we have enough money, we’ll go on a cruise.</i> (pravděpodobné) · <i>If we had enough money, we’d go on a cruise.</i> (nepravděpodobné)'
      ] },
      { t: 'versus', title: 'First × second conditional', cols: [
        { h: 'first conditional – pravděpodobné', items: ['If we <b>have</b> enough money, we<b>’ll go</b> on a cruise.', 'if + present simple, <i>will</i>'] },
        { h: 'second conditional – nepravděpodobné, nereálné', items: ['If we <b>had</b> enough money, we<b>’d go</b> on a cruise.', 'if + past simple, <i>would</i>'] }
      ], x: 'Rozdíl není v tom, <b>kdy</b> se to stane (obě věty mluví o budoucnosti), ale v tom, <b>jak moc tomu věří mluvčí</b>. Pokud je plavba reálná (peníze budou), použije first conditional. Pokud je to spíš sen, který se nejspíš nesplní, přejde do past simple a <i>would</i>. Past simple tu nemá minulý význam – označuje „nereálnost“.' },
      { t: 'ex', x: 'If I <b>were</b> in your situation, I’d resign.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'svg', title: 'Stavba second conditional', x: ANG.cond2(), cap: 'Obě části jsou „posunuté“ do minulosti – past simple v if-clause, <i>would</i> v hlavní větě.' },
      { t: 'grid', head: ['Pravidlo', 'Příklad'], rows: [
        ['<b>if + past simple, would / wouldn’t + základní tvar</b>', 'If we didn’t have a car, we would take the bus. · If I was rich, I wouldn’t work.'],
        ['V mluvené angličtině se <i>would</i> často stahuje na <b>’d</b>', 'If I were in your situation, I’d resign.'],
        ['Ve formální angličtině se používá <b>were</b> místo <i>was</i> ve všech osobách', 'If I were the mayor, I would ban cars in the city centre.']
      ] },
      { t: 'tip', x: 'Zapamatuj si: <b>zero</b> (obecně), <b>first</b> (reálná budoucí možnost), <b>second</b> (nereálné / nepravděpodobné) – a v příštím tématu <b>third</b> (nereálné v minulosti).' }
    ] }
  ],
  mistakes: [
    'Dát <i>would</i> do if-clause: ✗ If I would have time → ✓ If I <b>had</b> time.',
    'Použít present simple místo past simple: ✗ If I have the time, I’d have a holiday → ✓ If I <b>had</b> the time…',
    'Brát past simple v if-clause jako minulost: <i>If I had the time</i> mluví o dnešku a o nereálné situaci.',
    'Zaměnit <i>first</i> a <i>second</i> conditional: záleží na pravděpodobnosti situace.',
    'Zapomenout <i>were</i> ve formální angličtině: <i>If I were you…</i>'
  ],
  qa: [
    { q: 'Jaká je stavba second conditional?', a: '<b>If + past simple, would / wouldn’t + základní tvar.</b>' },
    { q: 'O čem mluví second conditional?', a: 'O <b>imaginárních nebo nereálných situacích</b> (<i>If I were the mayor, I would ban cars</i>).' },
    { q: 'Co můžeš použít místo <i>would</i>?', a: '<b>Could</b> nebo <b>might</b>, když mluvíme o možnostech.' },
    { q: 'Jaký je rozdíl mezi <i>If we have enough money, we’ll go</i> a <i>If we had enough money, we’d go</i>?', a: 'První je <b>pravděpodobné</b> (first conditional), druhé <b>nepravděpodobné</b> (second conditional).' },
    { q: 'Jaký tvar slovesa <i>be</i> je ve formální angličtině?', a: '<b>Were</b> ve všech osobách: <i>If I were the mayor…</i>' }
  ]
});
