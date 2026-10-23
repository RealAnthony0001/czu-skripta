registerTopic({
  id: 'embedded-questions', group: 'gram', order: 24, icon: '🪆', title: 'Embedded questions', src: 'podklady', where: 'Lekce 12 (s. 122–123) + Grammar reference (s. 175)',
  summary: 'Nepřímé (vnořené) otázky: <i>Could you tell me…?, Do you know…?</i> – běžný slovosled místo otázkového, <i>if</i> u otázek ano/ne a otázky typu <i>Did you say…?</i>',
  vocab: [
    { w: 'embedded question', x: 'vnořená (nepřímá) otázka – otázka zasazená do úvodní fráze (Could you tell me…?)' },
    { w: 'direct question', x: 'přímá otázka – obrácený slovosled (pomocné sloveso před podmětem)' },
    { w: 'word order', x: 'slovosled – pořadí slov ve větě' },
    { w: 'polite', x: 'zdvořilé – nepřímé otázky zní zdvořileji než přímé' }
  ],
  key: [
    'Nepřímá otázka = <b>úvodní fráze + tázací slovo + běžný slovosled</b>: <i>Could you tell me why he quit the show?</i>',
    '<b>Neobracíme pořadí</b> a nepoužíváme <i>do / does / did</i>.',
    'U otázek <b>bez tázacího slova</b> použijeme <b>if</b>: <i>Do you know if they’re planning to get married?</i>',
    'Po jedné nebo dvou nepřímých otázkách obvykle přejdeme zpět k <b>přímým</b> otázkám.',
    '<i>Did you say…?</i> / <i>Are you saying…?</i> – ověřujeme, že jsme dobře slyšeli nebo rozuměli (a někdy vyjadřujeme překvapení).'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        'Někdy se neptáme přímo, ale začneme frázemi jako <i>Do you know…?, Could you tell me/us…?, I’d like to know…, I’d be interested to know…</i>: <i>What time does the film start?</i> → <i>Do you know what time the film <b>starts</b>?</i> · <i>Could you tell me/us what time the film <b>starts</b>?</i> · <i>What did you think of the film?</i> → <i>I’d like to know what you <b>thought</b> of the film.</i> · <i>I’d be interested to know what you thought of the film.</i>',
        'Po jedné nebo dvou nepřímých otázkách obvykle <b>přejdeme na přímé otázky</b>: <i>Do you know when they’re getting married?</i> (nepřímá) · <i>Could you tell me if it’s going to be a big wedding?</i> (nepřímá) · <i>So, how many guests are coming?</i> (přímá)',
        'Výrazy jako <i>Did you say…?</i> nebo <i>Are you saying…?</i> používáme v nepřímých otázkách i k ověření, že jsme slyšeli a porozuměli, ale také k vyjádření <b>výzvy</b> – např. překvapení, nebo když chceme říct „nevěřím ti“: <i>Did you say 15 or 50?</i> (ověřujeme, co jsme slyšeli) · <i>Are you saying the meeting’s been cancelled?</i> (ověřujeme porozumění) · <i>Are you saying they haven’t separated?</i> (nevěřím ti!)'
      ] },
      { t: 'svg', title: 'Přímá × nepřímá otázka – pořadí slov', x: ANG.embedded(), cap: 'V nepřímé otázce stojí podmět před slovesem jako v oznamovací větě.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Přímá otázka', 'Nepřímá otázka'], rows: [
        ['Změň pořadí slov v přímé otázce:<br><i>Why did he quit the show?</i>', 'Použij výraz + tázací slovo(a) + <b>běžný slovosled</b>:<br><i>Could you tell me why he quit the show?</i>'],
        ['<i>Are they planning to get married?</i>', 'Použij <b>if</b>, když tu není tázací slovo:<br><i>Do you know if they’re planning to get married?</i>']
      ] },
      { t: 'warn', x: 'Pozor na slovosled v otázkách, které začínají <i>Could you tell me…?, Do you know…?</i> apod.: <i>Could you tell me where <b>they live</b>?</i> (ne: ✗ where do they live) · <i>Do you know if <b>the concert has been cancelled</b>?</i> (ne: ✗ if has the concert been cancelled).' },
      { t: 'versus', title: 'Přímá × nepřímá otázka', cols: [
        { h: 'přímá otázka', items: ['<b>Where do they live?</b>', 'pomocné sloveso <i>do</i> před podmětem'] },
        { h: 'nepřímá (vnořená) otázka', items: ['Could you tell me <b>where they live</b>?', 'jako oznamovací věta: podmět + sloveso, bez <i>do</i>'] }
      ], x: 'Nepřímá otázka je vlastně <b>oznamovací věta uvnitř otázky</b>: celá věta se ptá („Could you tell me…?“), ale vnitřní část už je jen informace („where they live“). Proto se vrací k normálnímu pořadí podmět – sloveso a pomocné <i>do / does / did</i> zmizí. Je to také zdvořilejší způsob, jak se zeptat.' }
    ] }
  ],
  mistakes: [
    'Použít otázkový slovosled v nepřímé otázce: ✗ Could you tell me where do they live? → ✓ …where they live?',
    'Použít <i>do / does / did</i> uvnitř nepřímé otázky: ✗ Do you know what time does the film start? → ✓ …what time the film starts?',
    'Zapomenout <i>if</i> u otázek bez tázacího slova: ✗ Do you know are they planning to get married? → ✓ Do you know <b>if</b> they’re planning to get married?',
    'Zapomenout posunout čas slovesa, když je úvodní fráze v minulosti: <i>I’d like to know what you thought of the film.</i>',
    'Pokračovat dlouho nepřímými otázkami – po jedné nebo dvou je přirozené přejít na přímé.'
  ],
  qa: [
    { q: 'Jak se tvoří nepřímá otázka?', a: '<b>Úvodní fráze + tázací slovo + běžný slovosled</b>: <i>Could you tell me why he quit the show?</i>' },
    { q: 'Co použiješ u nepřímé otázky bez tázacího slova?', a: '<b>if</b>: <i>Do you know if they’re planning to get married?</i>' },
    { q: 'Používá se v nepřímé otázce <i>do / does / did</i>?', a: '<b>Ne</b> – slovosled je jako v oznamovací větě.' },
    { q: 'Jaké úvodní fráze se používají?', a: '<i>Do you know…?, Could you tell me/us…?, I’d like to know…, I’d be interested to know…</i>' },
    { q: 'K čemu slouží <i>Did you say…?</i> a <i>Are you saying…?</i>', a: 'K ověření, že jsme slyšeli a rozuměli; někdy i k vyjádření překvapení („nevěřím ti“).' }
  ]
});
