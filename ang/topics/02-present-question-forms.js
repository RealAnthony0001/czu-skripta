registerTopic({
  id: 'present-question-forms', group: 'gram', order: 2, icon: '❓', title: 'Present tense question forms', src: 'podklady', where: 'Lekce 1 (s. 6–7) + Grammar reference (s. 161)',
  summary: 'Jak se ptát v present simple a present continuous: otázky s tázacím slovem, otázky ano/ne, otázky na podmět a krátké odpovědi.',
  vocab: [
    { w: 'open question', x: 'otevřená otázka s tázacím slovem (What, Where, How often…); chceme víc informací a udržet rozhovor' },
    { w: 'yes/no question', x: 'otázka, na kterou se odpovídá ano / ne' },
    { w: 'question word', x: 'tázací slovo: how often, how long, what, which, where, what kind of…' },
    { w: 'auxiliary verb', x: 'pomocné sloveso: <i>do / does</i> v present simple, <i>am / is / are</i> v present continuous' },
    { w: 'subject question', x: 'otázka, v níž se ptáme na podmět; tázací slovo je podmětem a <i>do / does</i> se nepoužívá' }
  ],
  key: [
    '<b>Open questions</b> začínají tázacím slovem – chceme víc informací a udržet rozhovor.',
    '<b>Present simple:</b> <b>do / does</b> + podmět + základní tvar (Do you have…? Does he work…?).',
    '<b>Present continuous:</b> změníme pořadí – <b>am / is / are</b> + podmět + <b>-ing</b>.',
    '<b>Otázka na podmět:</b> tázací slovo je na prvním místě a slovosled je jako ve větě – bez <i>do / does</i>.',
    '<b>Krátká odpověď</b> opakuje pomocné sloveso: <i>Yes, I am. / No, he doesn’t.</i>'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'p', x: 'Otevřené otázky používáme, když chceme od někoho víc informací nebo udržet rozhovor v chodu. Začínají tázacím slovem (nebo slovy).' },
      { t: 'ul', items: [
        '<b>How often</b> do you cycle to work?',
        '<b>How long</b> does the journey take?',
        '<b>What</b> do you suggest I do?',
        '<b>Which activity</b> do you prefer?',
        '<b>Where</b> are you going now?',
        '<b>What kinds of things</b> do you like doing in your free time?'
      ] },
      { t: 'tip', x: 'Který čas zvolit v odpovědi? <b>Krátkodobé nebo dočasné</b> činnosti → present continuous (<i>What are you doing now?</i>). <b>Dlouhodobé situace</b> → present simple (<i>What do you usually do?</i>).' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'svg', title: 'Stavba otázek', x: ANG.questionForms(), cap: 'Pořadí je „tázací slovo – pomocné sloveso – podmět – významové sloveso“; u otázek na podmět pomocné sloveso chybí.' },
      { t: 'grid', head: ['Typ', 'Pravidlo', 'Příklad'], rows: [
        ['Present simple', 'použij <b>do</b> nebo <b>does</b> a tázací slovo, je-li potřeba', 'Do you have many hobbies? · Does he work long hours? · Where do you live?'],
        ['Present continuous', 'změň pořadí slov a použij tázací slovo, je-li potřeba', 'Are you trying to find a new job? · What is he doing now?'],
        ['Otázky na podmět', 'první slovo je podmět; <b>nepoužívej do ani does</b> a neměň pořadí slov', 'Who likes doing adventure sports? · Which machine isn’t working today?'],
        ['Krátké odpovědi', 'otázky ano/ne v present simple: <b>do / does / don’t / doesn’t</b>; v present continuous: sloveso <b>be</b>', 'Does he know Nancy? <b>No, he doesn’t.</b> · Are you prioritizing your work? <b>Yes, I am.</b>']
      ] },
      { t: 'versus', title: 'Běžná otázka × otázka na podmět', cols: [
        { h: 'běžná otázka (ptáme se na předmět)', items: ['What <b>do</b> you suggest?', 'Which activity <b>does</b> he prefer?', 'pořadí: tázací slovo + <i>do/does</i> + podmět + sloveso'] },
        { h: 'otázka na podmět (ptáme se, kdo / co děj dělá)', items: ['<b>Who likes</b> doing adventure sports?', '<b>Which machine isn’t</b> working today?', 'pořadí stejné jako ve větě, bez <i>do/does</i>'] }
      ], x: 'Když se ptáš na to, <b>kdo</b> nebo <b>co</b> něco dělá, tázací slovo samo je podmětem věty, a proto už nepotřebuješ pomocné sloveso <i>do/does</i>. Věta „Who likes doing adventure sports?“ vlastně zní jako oznamovací věta „Anna likes doing adventure sports“, jen se jméno nahradí slovem <i>who</i>. Zeptáš-li se ale na předmět („Co Anna ráda dělá?“), musíš vytvořit otázku s pomocným slovesem: „What does Anna like doing?“' },
      { t: 'ex', x: 'Otázky z lekce 1 (rozhovor s cestujícími ve vlaku), které obsahují oba časy: <i>What do you usually do while you’re commuting?</i> – <i>usually</i> = present simple, <i>you’re commuting</i> = present continuous.' }
    ] }
  ],
  mistakes: [
    'Zapomenout pomocné sloveso: ✗ Where you live? → ✓ Where <b>do</b> you live?',
    'Použít <i>do/does</i> u otázky na podmět: ✗ Who does like adventure sports? → ✓ Who <b>likes</b> adventure sports?',
    'Dát <i>-s</i> na sloveso po <i>does</i>: ✗ Does he works…? → ✓ Does he <b>work</b>…?',
    'Odpovědět krátkou odpovědí jiným slovesem: na <i>Are you working?</i> odpověz <i>Yes, I am</i>, ne <i>Yes, I work</i>.',
    'Nezměnit pořadí slov v present continuous: ✗ What he is doing? → ✓ What <b>is he</b> doing?'
  ],
  qa: [
    { q: 'Jak se tvoří otázka ano/ne v present simple?', a: '<b>Do / Does</b> + podmět + základní tvar: <i>Do you have many hobbies? Does he work long hours?</i>' },
    { q: 'Jak se tvoří otázka v present continuous?', a: 'Změníme pořadí: <b>am / is / are</b> + podmět + <b>-ing</b>: <i>Are you trying to find a new job?</i>' },
    { q: 'Co je otázka na podmět a jak se tvoří?', a: 'Tázací slovo (<i>who, which machine</i>) je podmětem věty; slovosled je jako v oznamovací větě a nepoužívá se <i>do / does</i>: <i>Who likes doing adventure sports?</i>' },
    { q: 'Jak odpovíš krátce na <i>Does he know Nancy?</i>', a: '<i>Yes, he does. / No, he doesn’t.</i> – použiješ pomocné sloveso z otázky.' },
    { q: 'Jak odpovíš krátce na <i>Are you prioritizing your work?</i>', a: '<i>Yes, I am.</i> – v present continuous se používá sloveso <i>be</i>.' },
    { q: 'Proč používáme otevřené otázky?', a: 'Abychom získali <b>víc informací</b> a udrželi <b>rozhovor v chodu</b>.' }
  ]
});
