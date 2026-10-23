registerTopic({
  id: 'stromy-kostry', order: 11, icon: '🌳', title: 'Stromy, lesy a kostry grafu', src: 'podklady', lec: [6],
  where: 'Přednáška Neorientované grafy – Kostry (Čermák, Hora) + Cvičení 4 (úloha 8)',
  summary: 'Strom = souvislý graf bez kružnice s n − 1 hranami. Podgraf, faktor a kostra; všechny kostry K₄ a kolikrát lze přestřihnout síť, aniž by se rozpadla.',
  vocab: [
    { w: 'les', x: 'graf bez kružnic (acyklický)' },
    { w: 'strom', x: 'souvislý graf bez kružnic' },
    { w: 'list', x: 'vrchol stupně 1' },
    { w: 'podgraf', x: 'graf vzniklý vybráním některých vrcholů a některých hran mezi nimi' },
    { w: 'faktor', x: 'podgraf, který obsahuje <b>všechny</b> vrcholy původního grafu' },
    { w: 'kostra', x: 'faktor, který je stromem – „minimální síť“ spojující všechny vrcholy' }
  ],
  key: [
    'Strom s n vrcholy má vždy <b>n − 1 hran</b>.',
    'Méně než n − 1 hran ⇒ graf <b>není souvislý</b>; více než n − 1 hran ⇒ graf <b>obsahuje kružnici</b>.',
    'Pro graf s n vrcholy a n − 1 hranami je ekvivalentní: souvislý ⇔ acyklický ⇔ strom.',
    'Strom s aspoň dvěma vrcholy má <b>aspoň dva listy</b>.',
    'Kostra = faktor + strom; K₄ má <b>16 koster</b>, ale jen dva neizomorfní typy (hvězda a cesta).'
  ],
  sections: [
    { title: 'Les, strom a listy', blocks: [
      { t: 'def', term: 'Les a strom', x: 'graf je <b>les</b>, neobsahuje-li žádnou kružnici; <b>strom</b>, je-li navíc souvislý. Vrcholy stupně 1 jsou <b>listy</b>.' },
      { t: 'law', ref: 'Věty o stromech', x: 'Buď G graf s n vrcholy. Má-li méně než n − 1 hran, není souvislý; má-li více než n − 1 hran, obsahuje kružnici. Důsledek: <b>strom s n vrcholy má n − 1 hran</b>. Má-li G právě n − 1 hran, jsou ekvivalentní: G je souvislý ⇔ G je acyklický ⇔ G je strom. Strom s aspoň dvěma vrcholy má aspoň dva listy.' },
      { t: 'tip', x: 'Proč n − 1? Strom postavíš tak, že začneš jedním vrcholem a každý další připojíš jednou hranou. Hrana navíc by spojila dva už propojené vrcholy a vznikla by kružnice; hrana méně by nějaký vrchol odpojila.' }
    ] },
    { title: 'Podgraf, faktor a kostra', blocks: [
      { t: 'grid', head: ['Pojem', 'Definice', 'Příklad'], rows: [
        ['podgraf', 'V′ ⊆ V, E′ ⊆ E a hrany z E′ spojují jen vrcholy z V′', 'vynecháme vrchol e i jeho hrany'],
        ['faktor', 'podgraf se <b>všemi</b> vrcholy', 'všechny vrcholy, jen některé hrany (může mít kružnici nebo být nesouvislý)'],
        ['kostra', 'faktor, který je <b>stromem</b>', 'všechny vrcholy, n − 1 hran, souvislý, bez kružnice']
      ] },
      { t: 'p', x: 'Kostra existuje jen u souvislého grafu. Z jednoho grafu jich obvykle vybereme mnoho – liší se tím, které hrany vynecháme.' }
    ] },
    { title: 'Kostry K₄ a další příklady', blocks: [
      { t: 'svg', title: 'Kostry grafu K₄', x: MLG.kostryK4(), cap: 'Každá kostra má 3 hrany. Hvězdu určuje středový vrchol (4 možnosti), cestu pořadí vrcholů (4!/2 = 12 možností).' },
      { t: 'ex', x: '<b>Všechny kostry K₄ (přednáška):</b> K₄ má 6 hran a kostra 3 z nich. Ze všech 20 trojic hran je kostrou 16 (zbylé 4 trojice tvoří trojúhelník). Neizomorfní jsou jen dva typy: <b>hvězda</b> (4 kostry) a <b>cesta</b> (12 koster).' },
      { t: 'ex', x: '<b>Volejbalová síť 120 × 12 ok (Hora):</b> uzly sítě jsou vrcholy, provázky hrany. Vrcholů je 121 · 13 = 1573, hran 120 · 13 + 121 · 12 = 3012. Síť se nerozpadne, dokud zůstane souvislá, a nejmenší souvislý faktor je kostra s 1573 − 1 = 1572 hranami. Přestřihnout tedy můžeme nejvýš <b>3012 − 1572 = 1440</b> provázků – přesně tolik, kolik má síť ok.' },
      { t: 'grid', head: ['Cvičení 4, úloha 8', 'Výsledek'], rows: [
        ['(a)', '8 koster dvou typů (6 + 2 izomorfních)'],
        ['(b)', '9 koster tří typů (4 + 4 + 1)'],
        ['(c)', '12 koster, žádné dvě izomorfní']
      ] }
    ] }
  ],
  mistakes: [
    'Zapomenout, že kostra musí obsahovat <b>všechny</b> vrcholy.',
    'Počítat jako kostru podgraf s kružnicí nebo nesouvislý faktor.',
    'U počtu hran stromu napsat n místo n − 1.',
    'Při výčtu koster vynechat ty, které vypadají „podobně“ – izomorfní kostry se počítají zvlášť.'
  ],
  qa: [
    { q: 'Kolik hran má strom s 10 vrcholy?', a: '9.' },
    { q: 'Co je kostra grafu?', a: 'Faktor (podgraf se všemi vrcholy), který je stromem.' },
    { q: 'Kolik koster má K₄ a kolik typů?', a: '16 koster, dva neizomorfní typy: 4 hvězdy a 12 cest.' },
    { q: 'Graf má 8 vrcholů a 6 hran. Může být souvislý?', a: 'Ne, souvislý graf s 8 vrcholy potřebuje aspoň 7 hran.' },
    { q: 'Kolik listů má aspoň strom se třemi vrcholy?', a: 'Dva.' }
  ]
});
