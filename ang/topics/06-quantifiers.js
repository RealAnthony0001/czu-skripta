registerTopic({
  id: 'quantifiers', order: 6, icon: '🥗', title: 'Quantifiers (výrazy množství)', src: 'podklady', where: 'Lekce 3 (s. 28–29) + Grammar reference (s. 171)',
  summary: 'Počitatelná a nepočitatelná podstatná jména a výrazy množství: <i>much, many, a lot of, a little, a few, (very) little / few, too, too much / many, (not) enough, any / no / none</i>.',
  vocab: [
    { w: 'countable noun', x: 'počitatelné podstatné jméno – má jednotné i množné číslo (<i>pizza → pizzas</i>)' },
    { w: 'uncountable noun', x: 'nepočitatelné podstatné jméno – nemá množné číslo (<i>food, salt</i>) a pojí se s jednotným tvarem slovesa' },
    { w: 'quantifier', x: 'výraz množství: <i>much, many, a few, enough…</i>' },
    { w: 'a little / a few', x: 'malé množství – bez záporného podtextu' },
    { w: '(very) little / (very) few', x: 'méně, než bychom chtěli – s nádechem nedostatku' }
  ],
  key: [
    '<b>many</b> + počitatelná (množné číslo) · <b>much</b> + nepočitatelná – hlavně v záporu, otázkách a po <i>too</i>.',
    '<b>a lot of / lots of</b> – počitatelná i nepočitatelná, velké množství.',
    '<b>a few</b> + počitatelná · <b>a little</b> + nepočitatelná – malé množství.',
    '<b>(very) few / (very) little</b> – méně, než bychom chtěli.',
    '<b>too, too much, too many</b> – víc, než potřebujeme; <b>(not) enough</b> – míň, než potřebujeme.',
    '<b>any</b> v záporu · <b>no</b> v kladné větě · <b>none</b> v krátké odpovědi.'
  ],
  sections: [
    { title: 'Počitatelná a nepočitatelná podstatná jména', blocks: [
      { t: 'versus', title: 'Countable × uncountable nouns', cols: [
        { h: 'Countable (počitatelná)', items: ['Mohou být v jednotném i množném čísle: <i>pizza → pizzas, egg → eggs</i>.', 'Pojí se s jednotným i množným tvarem slovesa: <i>Pizza is my favourite fast food. These pizzas don’t contain any meat.</i>'] },
        { h: 'Uncountable (nepočitatelná)', items: ['Nemají množné číslo: <i>food → ✗ foods, salt → ✗ salts</i>.', 'Pojí se jen s jednotným tvarem slovesa: <i>Processed food has a lot of added salt.</i>'] }
      ], x: 'Počitatelné věci můžeš spočítat po kusech (jedna pizza, dvě pizzy), a proto mají množné číslo. Nepočitatelné věci chápeme jako celek nebo hmotu (jídlo, sůl, mléko), a proto nemají množné číslo a sloveso zůstává v jednotném čísle.' },
      { t: 'p', x: 'Některá podstatná jména mají víc významů a v jednom kontextu jsou počitatelná, v jiném ne: <i>There was <b>some chicken</b> in the salad.</i> (maso – nepočitatelné) × <i>We bought <b>a chicken</b> for Sunday lunch.</i> (celé zvíře – počitatelné).' },
      { t: 'svg', title: 'Které výrazy s čím', x: ANG.quantVenn(), cap: 'Uprostřed výrazy, které se pojí s oběma skupinami.' }
    ] },
    { title: 'Přehled quantifiers', blocks: [
      { t: 'grid', head: ['Výraz', 'Použití', 'Příklad'], rows: [
        ['<b>much</b>', 'nepočitatelná; hlavně <b>v záporu, otázkách a po <i>too</i></b>', 'I’ve got too much food. I can’t eat it all. · There isn’t much milk in this tea. · How much salt do you put in that?'],
        ['<b>many</b>', 'počitatelná (množné číslo); hlavně <b>v záporu, otázkách a po <i>too</i></b>', 'I’ve got too many bags. · There aren’t many eggs in the fridge. · How many grams of rice do we need?'],
        ['<b>a lot of / lots of</b>', 'počitatelná i nepočitatelná – velké množství', 'I bought lots of fruit. · We don’t have a lot of time.'],
        ['<b>a little / a few</b>', '<i>a little</i> + nepočitatelná, <i>a few</i> + počitatelná – malé množství', 'I’ve put a little chicken in the salad. · There are a few eggs in the fridge.'],
        ['<b>(very) little / (very) few</b>', 'méně, než bychom chtěli', 'I have little time to cook these days. · There are few healthy dishes in a fast food restaurant.'],
        ['<b>too / too much / too many</b>', 'víc, než potřebujeme nebo chceme; <i>too</i> před přídavným jménem, <i>too much</i> před nepočitatelným, <i>too many</i> před množným číslem', 'This curry is too spicy for me. · I can’t eat all this food. It’s too much. · He ate too many cakes and now he doesn’t feel well.'],
        ['<b>(not) enough</b>', 'míň, než potřebujeme nebo chceme; <i>enough</i> před podstatným jménem a <b>za</b> přídavným jménem', 'There aren’t enough tables in the staff dining room. · Do you think this dish is big enough?'],
        ['<b>any / no / none</b>', '<i>any</i> v záporu; <i>no</i> v kladné větě; <i>none</i> v krátké odpovědi', 'He doesn’t eat any vegetables. = He eats no vegetables. · How much pasta is there? – None.']
      ] },
      { t: 'warn', x: '<b>A lot of</b> je velmi běžné v neformální mluvě. Ve formálnější angličtině dáváme přednost výrazům <b>a great deal of</b> + nepočitatelné a <b>a great many</b> + počitatelné podstatné jméno.' },
      { t: 'tip', x: 'Obě rodiny výrazů se rozlišují jednoduše: <b>počitatelné = many, a few, few, too many</b>; <b>nepočitatelné = much, a little, little, too much</b>. <b>A lot of, enough, any, no, none</b> jdou s oběma.' }
    ] },
    { title: 'Malé množství: a little / a few × (very) little / (very) few', blocks: [
      { t: 'versus', title: 'a few / a little × few / little', cols: [
        { h: 'a few / a little', items: ['There are <b>a few</b> eggs in the fridge.', 'I’ve put <b>a little</b> chicken in the salad.', '= malé množství, s neutrálním významem'] },
        { h: '(very) few / (very) little', items: ['There are <b>few</b> healthy dishes in a fast food restaurant.', 'I have <b>little</b> time to cook these days.', '= málo, méně, než bychom chtěli'] }
      ], x: 'S neurčitým členem <i>a</i> je věta spíš pozitivní: „nějaké vajíčko tam je“. Bez <i>a</i> přibývá nádech nespokojenosti: „skoro žádné zdravé jídlo tam není“. Rozdíl je tedy v postoji mluvčího, ne v počtu.' }
    ] }
  ],
  mistakes: [
    'Použít <i>much</i> s počitatelným: ✗ much eggs → ✓ many eggs.',
    'Dát množné číslo nepočitatelnému: ✗ foods, salts.',
    'Zaměnit <i>too much</i> a <i>too many</i>: <i>too much salt</i>, ale <i>too many cakes</i>.',
    'Zaměnit <i>too</i> a <i>enough</i> v poloze: <i>too spicy</i> (před přídavným jménem), ale <i>big enough</i> (za ním).',
    'Zaměnit <i>a few</i> a <i>few</i>: s <i>a</i> je význam neutrální, bez <i>a</i> znamená „málo“.',
    'Dvojitý zápor: ✗ He doesn’t eat no vegetables → ✓ He doesn’t eat any vegetables. / He eats no vegetables.'
  ],
  qa: [
    { q: 'S jakými podstatnými jmény se používá <i>much</i> a <i>many</i>?', a: '<i>much</i> – nepočitatelná; <i>many</i> – počitatelná (množné číslo). Hlavně v záporu, otázkách a po <i>too</i>.' },
    { q: 'Co znamená <i>a lot of / lots of</i>?', a: 'Velké množství; používá se s počitatelnými i nepočitatelnými podstatnými jmény.' },
    { q: 'Jaký je rozdíl mezi <i>a few</i> a <i>few</i>?', a: '<i>A few</i> = malé množství (neutrálně); <i>few</i> = málo, méně, než bychom chtěli.' },
    { q: 'Kdy použiješ <i>too much</i> a kdy <i>too many</i>?', a: '<i>Too much</i> před nepočitatelným, <i>too many</i> před počitatelným v množném čísle. <i>Too</i> samotné před přídavným jménem.' },
    { q: 'Kam patří <i>enough</i>?', a: 'Před podstatné jméno (<i>enough tables</i>) a <b>za</b> přídavné jméno (<i>big enough</i>).' },
    { q: 'Jak použiješ <i>any, no, none</i>?', a: '<i>Any</i> v záporu (<i>doesn’t eat any vegetables</i>); <i>no</i> v kladné větě (<i>eats no vegetables</i>); <i>none</i> v krátké odpovědi.' },
    { q: 'Kterým výrazem se ve formální angličtině nahrazuje <i>a lot of</i>?', a: '<i>A great deal of</i> + nepočitatelné, <i>a great many</i> + počitatelné.' }
  ]
});
