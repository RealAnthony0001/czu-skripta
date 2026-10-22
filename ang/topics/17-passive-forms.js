registerTopic({
  id: 'passive-forms', order: 17, icon: '🔁', title: 'Passive forms', src: 'podklady', where: 'Lekce 9 (s. 88–89) + Grammar reference (s. 170)',
  summary: 'Trpný rod (<i>be</i> + past participle): kdy ho použít, jak ho tvořit v různých časech, s modálními slovesy a jak uvést původce děje (<i>by</i>).',
  vocab: [
    { w: 'passive', x: 'trpný rod – zajímá nás děj nebo ten, kdo je jeho předmětem, ne původce' },
    { w: 'active', x: 'činný rod – podmět děj provádí' },
    { w: 'agent', x: 'původce děje – ten, kdo děj dělá (uvádí se s <i>by</i>)' },
    { w: 'past participle', x: 'příčestí minulé (3. tvar slovesa): <i>made, sent, written</i>' },
    { w: 'modal passive', x: 'trpný rod s modálním slovesem: <i>can be stolen, must be informed</i>' }
  ],
  key: [
    '<b>Passive = be + past participle</b>: <i>A billion text messages <b>are sent</b> each day.</i>',
    'Používáme ho, když nás zajímá <b>děj</b>, ne kdo ho dělá, nebo když <b>nevíme</b>, kdo ho udělal.',
    'Chceme-li uvést původce, použijeme <b>by</b>: <i>The book was written by Jhumpa Lahiri.</i>',
    '<b>Čas</b> určuje sloveso <i>be</i> (<i>is / was / has been / will be…</i>), příčestí zůstává.',
    'S modálními slovesy: <b>modální + be + past participle</b>: <i>It cannot be done in two weeks.</i>'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        'Trpný rod používáme, když nás zajímá <b>děj, ne ten, kdo ho dělá</b>: <i>Mobile novels <b>are read</b> by many people on the metro.</i> (zajímají nás mobilní romány, ne lidé, kteří je čtou)',
        'Často ho používáme, když <b>nevíme, kdo děj udělal</b>: <i>Japan’s first Pocket Films Festival <b>has recently been launched</b> in Yokohama.</i> · <i>The novel <b>was written</b> by an Italian I think.</i>',
        'Když chceme říct, <b>kdo</b> děj udělal, použijeme předložku <b>by</b>: <i>The first cellphone call <b>was made by</b> Dr Martin Cooper in 1973.</i>',
        'V trpném rodě lze použít různá <b>modální slovesa</b>: <i>Professional information <b>can be stolen</b> on the web.</i> (možnost) · <i>Your manager <b>must be informed</b> of any incidences.</i> (povinnost) · <i>Employees <b>should be encouraged</b> to use web tools.</i> (doporučení)'
      ] },
      { t: 'tip', x: 'Trpný rod je častější <b>v psané než v mluvené angličtině</b> a také ve <b>formálním stylu</b> (více v tématu 18).' },
      { t: 'svg', title: 'Z činného do trpného rodu', x: ANG.passiveTransform(), cap: 'Předmět činné věty se stane podmětem trpné věty; původce se přidá s <i>by</i> nebo úplně vynechá.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>be</b> + past participle', 'A billion text messages <b>are sent</b> each day. · The book <b>was written</b> by Jhumpa Lahiri.'],
        ['Záporná', '<b>be + not</b> + past participle', 'It <b>isn’t made</b> of gold. · The goods <b>weren’t delivered</b> on time.'],
        ['Otázka', 'změň pořadí slov', '<b>Are</b> everybody’s seat belts <b>fastened</b>? · Where <b>was</b> the movie <b>shot</b>?'],
        ['Krátká odpověď', '<b>was / were / wasn’t / weren’t</b> (podle času)', 'Was it made in China? Yes, it was. / No, it wasn’t.']
      ] },
      { t: 'grid', head: ['Čas', 'Příklad trpného rodu'], rows: [
        ['Present simple', 'Using mobile phones <b>is forbidden</b> on this train.'],
        ['Present continuous', 'The book <b>is being made</b> into a film.'],
        ['Past simple', 'The first ring tones <b>were sold</b> in Finland.'],
        ['Past continuous', 'Her novel <b>was being promoted</b> in August.'],
        ['Present perfect', 'Her new film <b>has been released</b>.'],
        ['Future', 'The film <b>will be shown</b> all over the country.'],
        ['Modální slovesa', 'It <b>cannot be done</b> in two weeks. · We <b>should be allowed</b> to send personal emails.']
      ] },
      { t: 'versus', title: 'Činný × trpný rod', cols: [
        { h: 'active (činný)', items: ['Many people <b>read</b> mobile novels on the metro.', 'podmět provádí děj'] },
        { h: 'passive (trpný)', items: ['Mobile novels <b>are read</b> by many people on the metro.', 'podmětem je to, co děj „prožívá“'] }
      ], x: 'Obě věty říkají totéž, liší se jen zaměřením. V činné větě začínáme tím, <b>kdo něco dělá</b> (lidé). V trpné větě začínáme tím, <b>co se s něčím děje</b> (romány se čtou). Trpný rod volíme, když je důležitější předmět děje nebo děj sám. Pokud původce nevíme, nemusíme ho vůbec zmiňovat.' },
      { t: 'tip', x: 'Stavba trpného rodu = <b>sloveso <i>be</i> ve správném čase + past participle</b>. Změna času se vždy odehrává na slovese <i>be</i> (<i>is, was, has been, will be</i>) – příčestí zůstává stejné.' }
    ] }
  ],
  mistakes: [
    'Zapomenout sloveso <i>be</i>: ✗ The book written by… → ✓ The book <b>was</b> written by…',
    'Použít základní tvar místo příčestí: ✗ The goods weren’t deliver → ✓ The goods weren’t <b>delivered</b>.',
    'Uvádět původce, i když je zřejmý nebo neznámý – <i>by</i> použij jen když chceš říct, kdo to udělal.',
    'Zaměnit předložku: původce je <b>by</b>, materiál <b>of</b> (<i>made of gold</i>).',
    'Špatný čas slovesa <i>be</i>: čas se řídí tím, kdy děj proběhl (<i>was made</i> × <i>is being made</i>).'
  ],
  qa: [
    { q: 'Jak se tvoří trpný rod?', a: '<b>be + past participle</b> (sloveso <i>be</i> v příslušném čase).' },
    { q: 'Kdy použiješ trpný rod?', a: 'Když nás zajímá <b>děj</b>, ne původce, nebo když <b>nevíme</b>, kdo děj udělal.' },
    { q: 'Jak uvedeš původce děje?', a: 'Předložkou <b>by</b>: <i>The first cellphone call was made by Dr Martin Cooper in 1973.</i>' },
    { q: 'Jak se tvoří trpný rod s modálním slovesem?', a: '<b>modální + be + past participle</b>: <i>It cannot be done in two weeks.</i>' },
    { q: 'Jak se tvoří záporná věta v trpném rodě?', a: '<b>be + not + past participle</b>: <i>The goods weren’t delivered on time.</i>' },
    { q: 'Jak vypadá present perfect v trpném rodě?', a: '<i>has / have been + past participle</i>: <i>Her new film has been released.</i>' }
  ]
});
