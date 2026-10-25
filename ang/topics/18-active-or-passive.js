registerTopic({
  id: 'active-or-passive', group: 'gram', order: 18, icon: '⚖️', title: 'Active or passive', src: 'podklady', where: 'Lekce 9 (s. 90–91) + Grammar reference (s. 170)',
  summary: 'Jak vybrat mezi činným a trpným rodem: psaný × mluvený jazyk, neznámý původce, formální × neformální styl.',
  vocab: [
    { w: 'formal', x: 'formální – styl e-mailů, zpráv, výzkumných prací, novinových článků a návodů' },
    { w: 'informal', x: 'neformální – styl e-mailů a dopisů, textových zpráv, poznámek, reklam, příběhů' },
    { w: 'responsible', x: 'zodpovědný – ten, kdo děj způsobil' },
    { w: 'manual', x: 'příručka, návod' }
  ],
  key: [
    'Trpný rod používáme častěji <b>v psaném</b> než v mluveném jazyce, ale někdy jsou možné <b>oba</b> tvary.',
    'Trpný rod, když <b>nevíme</b> (nebo nechceme říct), kdo je zodpovědný.',
    'Trpný rod zní <b>formálněji</b> (e-maily, zprávy, výzkumné práce, noviny, návody).',
    'Činný rod zní <b>neformálněji</b> (e-maily a dopisy, textovky, poznámky, reklamy, příběhy).'
  ],
  sections: [
    { title: 'Kdy činný, kdy trpný', blocks: [
      { t: 'svg', title: 'Volba mezi činným a trpným rodem', x: ANG.activePassive(), cap: 'Trpný rod volíme, když nás zajímá děj, ne původce, nebo ho neznáme (formální a psaný styl); činný rod je přirozenější a osobnější (neformální styl). Často jde použít obojí.' },
      { t: 'ol', items: [
        'Trpný rod používáme častěji <b>při psaní než při mluvení</b>. Někdy jsou ale možné oba tvary: <i>This new technology <b>is being adopted</b> by many companies.</i> (passive) × <i>Many companies <b>are adopting</b> this new technology.</i> (active)',
        'Obvykle používáme <b>trpný rod</b>, když <b>nevíme nebo nechceme říct, kdo je za děj zodpovědný</b>: <i>Use of social networking technologies at work <b>needs to be controlled</b>.</i>',
        'Trpný rod můžeme použít, abychom <b>zněli formálněji</b> v e-mailech, zprávách, výzkumných pracích, novinových článcích a návodech: <i>Privacy <b>is threatened</b>.</i> (formální) × <i>Social networking sites <b>threaten</b> our privacy.</i> (méně formální)',
        'Obvykle používáme <b>činný rod</b>, když chceme <b>znít neformálněji</b> v e-mailech a dopisech, textových zprávách, poznámkách, reklamách, příbězích a novinových článcích: <i>Anyone <b>could use</b> this private information without permission.</i> (méně formální) × <i>Private information <b>could be used</b> without permission.</i> (formální)'
      ] },
      { t: 'versus', title: 'Stejná informace, jiný styl', cols: [
        { h: 'formální – trpný rod', items: ['Privacy <b>is threatened</b>.', 'Private information <b>could be used</b> without permission.'] },
        { h: 'méně formální – činný rod', items: ['Social networking sites <b>threaten</b> our privacy.', 'Anyone <b>could use</b> this private information without permission.'] }
      ], x: 'Trpný rod „schová“ původce a věta zní neosobně a odborně – hodí se do zpráv, nařízení nebo návodů. Činný rod je přímější a osobnější, proto zní přirozeněji v běžné komunikaci. Stejnou informaci tak můžeš říct oběma způsoby; vybereš podle toho, komu píšeš a jaký tón chceš.' },
      { t: 'tip', x: 'Otázku, který tvar zní lépe, si v učebnici (cvičení 5) kladeš u každé dvojice vět: někdy dává smysl <b>obojí</b>, jindy je jasně lepší jen jeden tvar – třeba když původce neznáme (<i>the file has been accidentally deleted</i>).' }
    ] },
    { title: 'Příklady z učebnice', blocks: [
      { t: 'grid', head: ['Činný rod', 'Trpný rod'], rows: [
        ['Researchers in Tokyo have developed Saya, the robotic receptionist.', 'Saya, the robotic receptionist, has been developed by researchers in Tokyo.'],
        ['A rescue team rescued two backpackers in the Italian Alps yesterday.', 'Two backpackers were rescued in the Italian Alps yesterday.'],
        ['Mix well until the mixture drops easily off the spoon.', 'The mixture is stirred well until it easily drops off the spoon.'],
        ['I’m afraid one of our employees has accidentally deleted the file.', 'I’m afraid the file has been accidentally deleted.'],
        ['A hacker infected the official website of the singer with a virus.', 'The official website of the singer was infected with a virus.'],
        ['Someone has trained our employees to use the latest new technologies.', 'Our employees have been trained to use the latest new technologies.'],
        ['Then repeat step 2 of the process.', 'Step 2 of the process is then repeated.']
      ] },
      { t: 'widget', name: 'prepinac', how: ['Žlutě zvýrazněná slova jsou v činné větě a v trpné se změní nebo zmizí; modře slova, která přibyla.', 'Zapni „zkusit si nejdřív sám“, větu si přeformuluj a teprve potom odkryj druhou.', 'Šipkami ◀ ▶ přepínáš dvojice.'], sol: 'Činný → trpný rod: <b>předmět</b> činné věty se stane <b>podmětem</b> trpné, sloveso má tvar <b>be + past participle</b> a původce děje se vynechá nebo přesune za <i>by</i> (…rescued <i>by</i> a rescue team).', title: 'Činný → trpný rod: co se změnilo', labels: ['Činný rod', 'Trpný rod'], pairs: [
        ['Researchers in Tokyo have developed Saya, the robotic receptionist.', 'Saya, the robotic receptionist, has been developed by researchers in Tokyo.'],
        ['A rescue team rescued two backpackers in the Italian Alps yesterday.', 'Two backpackers were rescued in the Italian Alps yesterday.', 'Původce děje (rescue team) se vynechal.'],
        ['I’m afraid one of our employees has accidentally deleted the file.', 'I’m afraid the file has been accidentally deleted.'],
        ['A hacker infected the official website of the singer with a virus.', 'The official website of the singer was infected with a virus.'],
        ['Someone has trained our employees to use the latest new technologies.', 'Our employees have been trained to use the latest new technologies.'],
        ['Then repeat step 2 of the process.', 'Step 2 of the process is then repeated.']
      ] },
    ] }
  ],
  mistakes: [
    'Používat trpný rod všude – v neformálním rozhovoru zní nepřirozeně.',
    'Psát neformální e-mail trpným rodem: činný rod zní osobněji.',
    'Zapomenout, že trpný rod je vhodný, když původce neznáme nebo nechceme uvést.',
    'Používat činný rod ve formálních zprávách a návodech, kde se obvykle očekává trpný rod.'
  ],
  qa: [
    { q: 'Kdy se používá trpný rod častěji?', a: 'V <b>psaném</b> jazyce a ve <b>formálním</b> stylu (e-maily, zprávy, výzkumné práce, noviny, návody).' },
    { q: 'Kdy se používá činný rod?', a: 'V <b>neformálním</b> stylu: e-maily a dopisy, textovky, poznámky, reklamy, příběhy.' },
    { q: 'Co použiješ, když nevíš, kdo děj udělal?', a: '<b>Trpný rod</b>.' },
    { q: 'Jak se liší <i>Privacy is threatened</i> a <i>Social networking sites threaten our privacy</i>?', a: 'První je <b>formální</b> (trpný rod), druhé <b>méně formální</b> (činný rod).' }
  ]
});
