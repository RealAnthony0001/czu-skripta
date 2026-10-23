registerTopic({
  id: 'lekce-1-quality-time', order: 26, icon: '⏱️', title: 'Lekce 1 – Quality time: slovní zásoba, návrhy, Interaction', src: 'podklady', where: 'Lekce 1 (s. 8–13) + Audio scripts (s. 143–144)',
  summary: 'Free-time activities (Word Focus), Making suggestions (Communication strategies) a Life coaching (Interaction): jak mluvit o koníčcích, jak navrhovat a zdvořile odmítat návrhy.',
  vocab: [
    { w: 'free-time activities', x: 'činnosti ve volném čase (<i>cycling, yoga, gardening, birdwatching…</i>)' },
    { w: 'be into / be keen on', x: 'mít něco rád, zajímat se o to (<i>I’m into skiing. She’s keen on photography.</i>)' },
    { w: 'gerund', x: 'tvar <i>-ing</i> použitý jako podstatné jméno (<i>Watching television is mentioned by 19 %.</i>)' },
    { w: 'deadline', x: 'termín, do kdy je třeba něco dokončit' },
    { w: 'behind schedule', x: 'pozadu oproti plánu' },
    { w: 'launch', x: 'spuštění nového produktu nebo služby' },
    { w: 'time stealers', x: '„zloděje času“ – běžné věci, které v práci plýtvají časem (přerušování, schůzky, odkládání…)' },
    { w: 'procrastination', x: 'odkládání úkolů; <i>lack of</i> = nedostatek čeho' }
  ],
  key: [
    '<b>Word Focus:</b> tři použití <i>-ing</i> tvarů – část průběhového tvaru, přídavné jméno, gerundium (podstatné jméno).',
    '<b>Koníčky:</b> <i>I’m into… / I’m keen on… / I enjoy… -ing / I spend a lot of time… -ing</i>.',
    '<b>Návrhy:</b> <i>What about / How about + -ing</i> · <i>Let’s / We could + základní tvar</i> · <i>Why don’t we + základní tvar</i>.',
    '<b>Formální × mluvené:</b> <i>propose, recommend, suggest</i> jsou spíš psané; v řeči se používají tvary výše.',
    '<b>Odmítnutí zdvořile:</b> <i>Well, it’s an interesting idea. · Um, I don’t know. · Let’s look at some other options first.</i>',
    '<b>Interaction:</b> life coach telefonuje s klienty, ptá se (present simple a continuous) a navrhuje změny.'
  ],
  sections: [
    { title: 'Word Focus: Free-time activities (s. 8–9)', blocks: [
      { t: 'p', x: 'Lekce začíná inzeráty z webu <i>Activity Superstore</i> („A Dream Come True“): zážitky jako dárek. Čtyři nabídky jsou k zapamatování i kvůli slovní zásobě.' },
      { t: 'grid', head: ['Aktivita', 'Co to je', 'Cena'], rows: [
        ['<b>aqua sphering</b>', 'extrémní aktivita: sjezd z kopce v obří plastové kouli s 30 litry vody; až 50 km/h', '€73'],
        ['<b>spy academy</b>', 'výcvik „tajného agenta“: špionážní <i>gadgets</i> (skryté kamery, odposlechy), vozidla z filmů o Bondovi, rady jak uniknout nepříteli; bez zbraní', '€112'],
        ['<b>fashion shoot</b>', 'rozhovor se stylistou, líčení, účes a módní focení', '€157'],
        ['<b>flying lessons</b>', 'létání: lekce s řízením, vyhlídkový let balonem nebo <i>flight simulator</i>', '€123–€337']
      ] },
      { t: 'def', term: 'Slovní zásoba z inzerátů', x: '<b>gadgets</b> = malé užitečné stroje nebo nástroje · <b>devices</b> = stroje či nástroje se zvláštním úkolem · <b>thrill</b> = vzrušení · <b>flight simulator</b> = stroj, který napodobuje létání (k výcviku pilotů).' },
      { t: 'p', x: 'Statistika z textu <i>Young Europeans are still reading books</i> (mladí Evropané 15–30 let):' },
      { t: 'grid', head: ['Volnočasová činnost', 'Podíl'], rows: [
        ['taking exercise (procházka, kolo, sport)', '45 %'], ['meeting friends (jídlo, tanec, posezení)', '40 %'],
        ['using the internet / playing video games', '21 %'], ['watching television', '19 %'], ['listening to music', '17 %'],
        ['cinema, theatre, concerts', '16 %'], ['reading a book', 'každý čtvrtý']
      ] },
      { t: 'versus', title: 'Tři použití tvarů na -ing', cols: [
        { h: 'Část průběhového tvaru', items: ['<i>Young Europeans are still <b>reading</b> books.</i>'] },
        { h: 'Přídavné jméno', items: ['<i>Perhaps it’s <b>surprising</b> these days…</i>'] },
        { h: 'Podstatné jméno (gerund)', items: ['<i><b>Watching</b> television is mentioned by 19 %.</i>'] }
      ], x: 'Tvar <i>-ing</i> není jedna věc. Po <i>to be</i> a děje probíhající teď je to průběhový tvar, před podstatným jménem nebo po <i>is</i> popisuje vlastnost (<i>surprising, exciting</i>) a ve větě jako podmět se chová jako podstatné jméno – tomu se říká gerundium. Podrobně viz téma „Base form with to or -ing form“ a Grammar reference s. 172.' },
      { t: 'ul', items: [
        '<b>Jak mluvit o koníčcích:</b> <i>One of my free-time interests is… · I’m into… · I like / enjoy… -ing · I’m keen on… · I spend a lot of time… -ing</i>.',
        '<b>Činnosti z učebnice:</b> running, playing chess, skiing, cycling, swimming, yoga, playing computer games, climbing, making jewellery, singing, doing puzzles, visiting museums / art galleries, gardening, diving, photography, shopping, birdwatching, going for a walk, doing up old cars (opravovat staré auto).'
      ] },
      { t: 'svg', title: 'Jak povědět, že mě něco baví', x: ANG.l1Interests(), cap: 'Výrazy ze Speaking: Choosing an activity a tři způsoby použití -ing.' }
    ] },
    { title: 'Communication strategies: Making suggestions (s. 10–11)', blocks: [
      { t: 'p', x: 'Situace: Jay píše Valerii, že projekt nového webu je o dva týdny pozadu a navrhuje odložit spuštění o měsíc. Valerie se mu snaží zdvořile nevyhovět. Z rozhovoru (Audio scripts s. 143) pochází celá tabulka.' },
      { t: 'grid', head: ['Návrh', 'Za slovem následuje'], rows: [
        ['<b>What about</b> delaying the launch date by a month?', '-ing'],
        ['<b>Let’s</b> add adverts to the site.', 'základní tvar'],
        ['We <b>could</b> get a contractor to do the work.', 'základní tvar'],
        ['<b>How about</b> meeting after lunch?', '-ing'],
        ['<b>Why don’t we</b> look at some more options?', 'základní tvar']
      ] },
      { t: 'svg', title: 'Návrhy: tvar slovesa', x: ANG.suggestForms(), cap: 'Po What about / How about následuje -ing, po ostatních základní tvar.' },
      { t: 'tip', x: 'V rozhovoru zazněly také <b>Is there any way we can…?</b> (je nějaká možnost, jak…), <b>How about asking someone to help us?</b>, <b>Why don’t we ask him?</b> a <b>I could talk to him today if you like.</b> (nabídka).' },
      { t: 'versus', title: 'Psaný × mluvený návrh', cols: [
        { h: 'Psaná (formální) angličtina', items: ['<i>I <b>propose</b> we delay the site launch by another month.</i>', '<i>Tom <b>recommended</b> adding staff photos.</i>', '<i>Juan <b>suggested</b> we work late.</i>'] },
        { h: 'Mluvená angličtina', items: ['<i><b>What about</b> delaying the launch by another month?</i>', '<i><b>How about</b> adding staff photos to the site?</i>', '<i><b>Why don’t we</b> work late to finish in time?</i>'] }
      ], x: 'Slovesa <i>propose, recommend, suggest</i> znějí v hovoru strojeně, proto je najdeš hlavně v e-mailech a zprávách. Při schůzce kolegové řeknou totéž kratšími větami typu „What about…?“ nebo „Why don’t we…?“. Stejný obsah, jiný styl: ve zprávě je návrh popsán, v rozhovoru je položen jako otázka.' },
      { t: 'grid', head: ['Co Valerie myslí', 'Co říká'], rows: [
        ['Ten nápad se mi nelíbí.', '<i>Well, it’s an interesting idea.</i>'],
        ['Nechci platit externího dodavatele.', '<i>Um, I don’t know. It sounds expensive.</i>'],
        ['Nechci, aby Jay volal bratrovi.', '<i>Let’s look at some other options first.</i>']
      ] },
      { t: 'ex', x: '<b>Přepis psaných návrhů do řeči</b> (řešení doplněno): Sally proposed we introduce a blog → <i>Why don’t we introduce a blog?</i> · Tom recommended adding staff photos → <i>How about adding staff photos?</i> · Juan suggested we work late → <i>Let’s work late.</i> · Anna recommended web training → <i>What about web training for the whole department?</i> · Jean-Philippe proposed ending the meeting earlier → <i>How about ending the meeting earlier?</i> · Gudrun suggested we cancel next week’s meeting → <i>Why don’t we cancel next week’s meeting?</i>' }
    ] },
    { title: 'Interaction: Life coaching (s. 12–13)', blocks: [
      { t: 'p', x: 'Nancy Bailey je <i>life coach</i>. Koučink je podle ní podobný sportovnímu koučinku: pomáhá lidem jasně určit, co od života chtějí, a provést změny, které potřebují.' },
      { t: 'grid', head: ['Tvrzení', 'Pravda?', 'Podle rozhovoru'], rows: [
        ['Life coaches pomáhají lidem určit životní oblasti, které chtějí změnit.', 'T', 'Ano, ujasní, co od života chtějí.'],
        ['Klienti jsou hlavně vedoucí pracovníci firem.', 'F', 'Kdysi ano, dnes je to „prakticky kdokoli“: majitelé malých firem, lidé měnící kariéru, před důchodem, manažeři hledající rovnováhu.'],
        ['Můžeme lidem pomoct s volbou kariéry.', 'T', 'Ano (měnící kariéru).'],
        ['Sejdeme se s klientem na hodinu každý týden.', 'F', 'Telefonuje se jednou týdně 30–40 minut + e-mail.'],
        ['Klient musí být ve stejné zemi jako kouč.', 'F', 'Klient může být kdekoli na světě.'],
        ['Výsledky se dostaví asi za rok.', 'F', 'Většina vidí výsledky za tři až šest měsíců.']
      ] },
      { t: 'ul', items: [
        '<b>Joe</b> (Sales Manager, tým 30 lidí): zvládá <i>time stealers</i>, méně se nechává přerušovat a učí se zdvořile říkat „no“ na práci, která nemá prioritu.',
        '<b>Kim</b> (asistentka ve firmě na export/import): zjišťuje informace o školách – chce být interiérovou designérkou a nezůstat navždy v rodinném podniku.',
        '<b>Vikram</b> (catering): chce rozšířit firmu a víc času s rodinou, dlouho dojíždí. Najal asistentku, ale ta nemá jeho osobní přístup k lidem.',
        '<b>Ruth</b> (administrativní asistentka v reklamní agentuře): chce kreativnější práci. Promluvila s šéfem a dostala ještě víc administrativy.'
      ] },
      { t: 'def', term: 'Time stealers (12 položek)', x: 'Přerušování (telefon, e-mail, návštěvy) · schůzky · úkoly, které je třeba delegovat · odkládání a nerozhodnost · práce s členy týmu · krizový management · nedostatek informací či odborných znalostí · nejasná komunikace, cíle a priority · špatné plánování · stres a únava · neschopnost říct „No“ · nepořádek na stole a osobní neorganizovanost.' },
      { t: 'tip', x: 'Cíl úlohy: ve dvojici hrajete telefonát kouče s klientem (Vikram, Ruth). Ptáte se přítomným a průběhovým časem (<i>Does it take long to commute? Are you doing anything to change the way you work?</i>) a navrhujete změny frázemi ze strategie výše.' }
    ] }
  ],
  mistakes: [
    'Po <i>What about / How about</i> dát základní tvar: ✗ What about delay… → ✓ What about delaying…',
    'Po <i>Let’s / Why don’t we / We could</i> dát <i>-ing</i>: ✗ Let’s adding… → ✓ Let’s add…',
    'V rozhovoru používat strojené <i>I propose / I recommend</i> – je to spíš psaný styl.',
    'Odmítnout návrh příliš přímo (<i>No, I don’t like it</i>) – zdvořilejší je <i>Well, it’s an interesting idea, but…</i>.',
    'Zaměnit <i>-ing</i> jako přídavné jméno a gerundium – ptej se, jestli stojí před podstatným jménem / po <i>is</i>, nebo jestli je podmětem.'
  ],
  qa: [
    { q: 'Jaké tvary slovesa následují po <i>What about</i>, <i>Let’s</i> a <i>Why don’t we</i>?', a: 'Po <i>What about / How about</i> je <b>-ing</b>; po <i>Let’s</i>, <i>We could</i> a <i>Why don’t we</i> je <b>základní tvar</b>.' },
    { q: 'Jak zdvořile odmítneš návrh?', a: '<i>Well, it’s an interesting idea. · Um, I don’t know. · Let’s look at some other options first.</i>' },
    { q: 'Které tři funkce má tvar na -ing?', a: 'Část průběhového tvaru (<i>are reading</i>), přídavné jméno (<i>surprising</i>) a gerundium – podstatné jméno (<i>Watching television…</i>).' },
    { q: 'Jak říct, že ho něco baví?', a: '<i>I’m into… · I’m keen on… · I enjoy… -ing · I spend a lot of time… -ing</i>.' },
    { q: 'Co je život coaching a jak dlouho trvá?', a: 'Kouč pomáhá ujasnit si, co člověk chce, a provést změny; telefonuje se jednou týdně 30–40 minut, výsledky obvykle za 3–6 měsíců.' },
    { q: 'Co jsou „time stealers“?', a: 'Běžné věci, které v práci plýtvají časem (přerušování, schůzky, odkládání, nepořádek, nejasná komunikace…).' }
  ]
});
