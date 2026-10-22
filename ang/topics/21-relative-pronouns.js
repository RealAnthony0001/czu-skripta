registerTopic({
  id: 'relative-pronouns', order: 21, icon: '🔗', title: 'Relative pronouns', src: 'podklady', where: 'Lekce 11 (s. 110–111) + Grammar reference (s. 173)',
  summary: 'Vztažná zájmena <i>who, which, that, where, when, whose</i>: vymezující (defining) a doplňující (non-defining) vztažné věty, čárky, vynechání zájmena a rozdíl <i>whose</i> × <i>who’s</i>.',
  vocab: [
    { w: 'relative pronoun', x: 'vztažné zájmeno: <i>who, which, that, where, when, whose</i>' },
    { w: 'defining relative clause', x: 'vymezující vztažná věta – říká, o kterého člověka / kterou věc jde; bez čárek' },
    { w: 'non-defining relative clause', x: 'doplňující vztažná věta – jen přidává informaci; v čárkách' },
    { w: 'whose', x: 'jehož, jejíž (přivlastnění: „of who / of which“)' },
    { w: 'clause', x: 'věta (část souvětí) s vlastním slovesem' }
  ],
  key: [
    '<b>who / that</b> = lidé · <b>which / that</b> = věci · <b>where</b> = místa · <b>when</b> = čas · <b>whose</b> = přivlastnění.',
    '<b>Defining</b> (vymezující) – <b>bez čárek</b>, lze <i>that</i>, často lze zájmeno vynechat.',
    '<b>Non-defining</b> (doplňující) – <b>s čárkami</b>, <b>nelze <i>that</i></b>.',
    'Vztažné zájmeno můžeme vynechat, když má vztažná věta <b>jiný podmět</b> než hlavní věta.',
    '<b>whose</b> (jehož) × <b>who’s</b> (= who is / who has) – nezaměňovat.'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'svg', title: 'Přehled vztažných zájmen', x: ANG.relPron(), cap: '' },
      { t: 'ol', items: [
        'Vztažná zájmena (<i>who/that, which/that, where, when, whose</i>) používáme k <b>vymezení</b> lidí, míst a věcí: <i>That’s the woman <b>who/that</b> took the photographs at my wedding.</i> · <i>This is the café <b>where</b> we first met.</i> · <i>It’s a kind of team-building activity <b>which/that</b> you do with ropes.</i> · <i>Trust is <b>when</b> you believe in the goodness of other people.</i>',
        'Vztažná zájmena používáme také k <b>doplnění informace</b> o lidech, místech nebo věcech: <i>David, <b>who</b> I’ve known since I was a kid, is a close friend of mine.</i> · <i>The hotel, <b>which</b> has fantastic views of the beach, is ideal for a weekend break.</i>',
        'Vztažná zájmena používáme ke <b>spojení dvou kratších vět</b> nebo myšlenek: <i>My company always organizes an away day. It isn’t doing anything this year.</i> → <i>My company, <b>which</b> always organizes an away day, isn’t doing anything this year.</i>',
        '<b>Whose</b> používáme, když chceme říct „of which“ nebo „of who“: <i>My wife, <b>whose</b> parents come from Poland, was born in Germany.</i> · <i>Do you know that French car manufacturer <b>whose</b> CEO is a woman?</i>'
      ] },
      { t: 'warn', x: '<b>Whose × who’s:</b> <i>That’s the man <b>whose</b> wife is a multi-millionaire.</i> (přivlastnění) × <i><b>Who’s</b> been drinking coffee at my desk? It’s very messy.</i> (<i>who has</i>)' }
    ] },
    { title: 'Defining × non-defining', blocks: [
      { t: 'versus', title: 'Čárky ve vztažných větách', cols: [
        { h: 'defining – bez čárek', items: ['That’s the house <b>where</b> I grew up.', 'lze <i>that</i> (<i>who</i> / <i>which</i> → <i>that</i>)', 'bez čárek, ani před <i>that</i>'] },
        { h: 'non-defining – s čárkami', items: ['Abseiling, <b>which</b> is a kind of adventure sport, is only for people who are fit.', '<b>nelze</b> <i>that</i>: ✗ Sandra, that is as old as me', 'čárky před a za vedlejší větou'] }
      ], x: 'Vymezující věta <b>odpovídá na otázku „který?“</b> – bez ní by věta nedávala smysl („To je ten dům“ – který?), proto se nijak neodděluje. Doplňující věta jen <b>dodává informaci</b>; kdybys ji vypustil, hlavní věta by dávala smysl dál („Abseiling je jen pro lidi, kteří jsou fit.“), a proto je v čárkách. V doplňující větě nelze <i>that</i>; musí tam být <i>who</i> nebo <i>which</i>.' },
      { t: 'ul', items: [
        'V <b>defining</b> relative clauses nepoužíváme čárky (ani před <i>that</i>): <i>That’s the house where I grew up.</i>',
        'V <b>non-defining</b> relative clauses používáme čárky, když dodáváme informaci navíc o někom nebo o něčem: <i>Abseiling, which is a kind of adventure sport, is only for people who are fit.</i>',
        'V defining clauses můžeme použít <i>that</i> místo <i>who</i> nebo <i>which</i>, v non-defining <b>ne</b>: <i>Sandra, <b>who</b> is as old as me, is having a birthday party on Saturday.</i> (ne: that who) · <i>New Zealand, <b>which</b> has spectacular scenery, is great for outdoor sports.</i> (ne: that which)'
      ] }
    ] },
    { title: 'Vynechání vztažného zájmena', blocks: [
      { t: 'p', x: 'V defining relative clauses, kde mají hlavní věta a vztažná věta <b>různé podměty</b>, můžeme <i>who / which / that</i> <b>vynechat</b>: <i>That’s the man (who/that) I’ve been talking about.</i>' },
      { t: 'grid', head: ['Zájmeno se vynechá (jiný podmět)', 'Zájmeno se nevynechá'], rows: [
        ['That’s the girl <b>they’ve</b> just recruited.', 'That’s the girl <b>whose</b> motorbike was stolen.'],
        ['It’s a national dish <b>we</b> only eat on special occasions.', 'It’s a national dish <b>that</b> is made with seafood and rice.']
      ] },
      { t: 'tip', x: 'V praxi: když po zájmenu následuje <b>nový podmět</b> (<i>they, we, I</i>), jde zájmeno vynechat. Když po něm následuje <b>sloveso</b> (<i>that is made…</i>), zájmeno je podmětem vztažné věty a musí zůstat.' }
    ] }
  ],
  mistakes: [
    'Zapomenout čárky u doplňující věty: ✗ Abseiling which is a kind of adventure sport is only for people who are fit → ✓ čárky před a za <i>which</i>-větou.',
    'Použít <i>that</i> v doplňující větě: ✗ Sandra, that is as old as me → ✓ Sandra, <b>who</b> is as old as me.',
    'Dát čárku před vymezující větu: ✗ That’s the house, where I grew up.',
    'Zaměnit <i>whose</i> a <i>who’s</i>.',
    'Vynechat zájmeno, když je samo podmětem vztažné věty: ✗ a dish is made with seafood → ✓ a dish <b>that</b> is made with seafood.'
  ],
  qa: [
    { q: 'Která vztažná zájmena se používají pro lidi, věci, místa a čas?', a: 'Lidé: <b>who / that</b>; věci: <b>which / that</b>; místa: <b>where</b>; čas: <b>when</b>; přivlastnění: <b>whose</b>.' },
    { q: 'Jaký je rozdíl mezi defining a non-defining relative clause?', a: 'Defining <b>vymezuje</b> (který?), píše se <b>bez čárek</b>. Non-defining jen <b>doplňuje</b> informaci, píše se <b>s čárkami</b>.' },
    { q: 'Lze v non-defining větě použít <i>that</i>?', a: '<b>Ne</b>: <i>Sandra, who is as old as me, …</i> (ne <i>that who</i>).' },
    { q: 'Kdy lze vztažné zájmeno vynechat?', a: 'Ve vymezující větě, když má vztažná věta <b>jiný podmět</b> než hlavní: <i>That’s the man I’ve been talking about.</i>' },
    { q: 'Jaký je rozdíl mezi <i>whose</i> a <i>who’s</i>?', a: '<i>Whose</i> = přivlastnění (jehož); <i>who’s</i> = <i>who is / who has</i>.' }
  ]
});
