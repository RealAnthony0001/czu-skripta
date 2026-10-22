registerTopic({
  id: 'tense-review', order: 1, icon: '🕐', title: 'Tense review – present simple a continuous', src: 'podklady', where: 'Lekce 1 (s. 4–5) + Grammar reference (s. 160)',
  summary: 'Přehled osmi časových forem z lekce 1 a podrobně dva přítomné časy: present simple (zvyky, trvalé stavy), present continuous (to, co se děje teď) a příslovce četnosti.',
  vocab: [
    { w: 'present simple', x: 'přítomný čas prostý: pravidelné činnosti, dlouhodobé situace a věci, které platí vždy' },
    { w: 'present continuous', x: 'přítomný čas průběhový: činnosti probíhající teď nebo krátkodobé činnosti' },
    { w: 'base form', x: 'základní tvar slovesa bez koncovky a bez <i>to</i> (work, do, take)' },
    { w: 'frequency adverbs', x: 'příslovce četnosti – často, obvykle (often, usually) – říkají, jak často se děj opakuje' },
    { w: 'state verbs', x: 'slovesa stavů (want, need, believe, know, have = vlastnit), která se obvykle nepoužívají v průběhovém tvaru' }
  ],
  key: [
    'Lekce 1 opakuje <b>osm forem</b>: present simple, present continuous, <i>will</i>, <i>going to</i>, present continuous pro budoucnost, past simple, past continuous a present perfect.',
    '<b>Present simple</b> = pravidelné činnosti, dlouhodobé situace, věci stále pravdivé. V 3. osobě přidáváme <b>-s</b>.',
    '<b>Present continuous</b> = <b>am / is / are + -ing</b>: děje, které probíhají teď nebo jsou krátkodobé.',
    'Příslovce četnosti stojí <b>před významovým slovesem</b>, ale <b>za slovesem <i>be</i></b>.',
    'Slovesa stavů (<i>want, need, believe, know, have</i>) se v průběhovém tvaru zpravidla nepoužívají.'
  ],
  sections: [
    { title: 'Přehled časových forem (Tense review)', blocks: [
      { t: 'p', x: 'V učebnici (s. 5, Grammar: Tense review) je úkol přiřadit k větám osm forem. Každá z nich se v dalších tématech probírá podrobně; tady je přehled i s příkladem z Grammar reference.' },
      { t: 'svg', title: 'Osm forem podle toho, kdy děj probíhá', x: ANG.tenseMap(), cap: 'Present perfect spojuje minulost s přítomností, proto je ve sloupci „minulost“ jen orientačně (viz téma 9).' },
      { t: 'grid', head: ['Forma', 'Příklad', 'K čemu slouží'], rows: [
        ['present simple', 'She <b>works</b> as a life coach.', 'pravidelné činnosti, trvalé situace'],
        ['present continuous', 'She<b>’s talking</b> on the phone at the moment.', 'děj probíhající teď, krátkodobé'],
        ['<i>will</i> future', 'I<b>’ll take</b> an umbrella.', 'předpověď, rozhodnutí v okamžiku mluvení'],
        ['<i>going to</i> future', 'I<b>’m going to visit</b> my sister tomorrow.', 'záměr, plán, už rozhodnuto'],
        ['present continuous for future', 'We<b>’re meeting</b> at 3.30 on Thursday.', 'domluvený plán (je v diáři)'],
        ['past simple', 'I <b>saw</b> the film a few days ago.', 'ukončený děj v minulosti'],
        ['past continuous', 'It <b>was raining</b> so I offered him a lift.', 'děj v průběhu v minulosti, pozadí'],
        ['present perfect', 'I<b>’ve finished</b> the report.', 'minulý děj s výsledkem v přítomnosti']
      ] }
    ] },
    { title: 'Present simple', blocks: [
      { t: 'def', term: 'Použití', x: 'Present simple používáme o <b>pravidelných činnostech</b>, <b>dlouhodobých situacích</b> a <b>věcech, které platí vždy</b>.' },
      { t: 'ex', x: 'I often <b>listen</b> to my mp3 player on my way to work. <i>(Často poslouchám mp3 přehrávač cestou do práce.)</i><br>She <b>works</b> as a life coach. <i>(Pracuje jako životní koučka.)</i>' },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', 'základní tvar slovesa; ve 3. osobě (he / she / it) přidáme <b>-s</b>', 'I/You/We/They <b>work</b> long hours. · He/She/It <b>watches</b> a lot of TV.'],
        ['Záporná', '<b>don’t</b> (do not) + základní tvar; ve 3. osobě <b>doesn’t</b> (does not)', 'You <b>don’t do</b> much exercise. · It <b>doesn’t take</b> long to walk to the office.']
      ] },
      { t: 'svg', title: 'Tvoření přítomných časů', x: ANG.presentForms(), cap: 'Modrá = podmět, červená = pomocné sloveso, oranžová = významové sloveso.' },
      { t: 'tip', x: 'Ve 3. osobě nese koncovku <b>-s</b> buď významové sloveso (kladná věta: <i>he works</i>), nebo pomocné <i>does</i> (záporná věta: <i>he doesn’t work</i>). Nikdy obojí najednou.' }
    ] },
    { title: 'Příslovce četnosti (Frequency adverbs)', blocks: [
      { t: 'ol', items: [
        'Příslovce četnosti obvykle stojí <b>před významovým slovesem</b>: I <b>often</b> work at weekends. · He <b>usually</b> remembers my name.',
        'Příslovce četnosti obvykle stojí <b>za slovesem <i>be</i></b>: She is <b>often</b> out of the office.'
      ] },
      { t: 'versus', title: 'Poloha příslovce: významové sloveso × sloveso be', cols: [
        { h: 'před významovým slovesem', items: ['I <b>often</b> work at weekends.', 'He <b>usually</b> remembers my name.'] },
        { h: 'za slovesem <i>be</i>', items: ['She is <b>often</b> out of the office.', 'Příslovce stojí až za slovesem <i>be</i>.'] }
      ], x: 'Příslovce četnosti patří vždy do „středu“ věty. Pokud je ve větě významové sloveso (work, remember), příslovce se vloží před ně. Sloveso <i>be</i> se chová jinak – příslovce se řadí až za ně. Proto říkáme „I often work“, ale „She is often out“.' }
    ] },
    { title: 'Present continuous', blocks: [
      { t: 'def', term: 'Použití', x: 'Present continuous používáme o <b>současných činnostech</b> nebo <b>krátkodobých činnostech</b>.' },
      { t: 'ex', x: 'She’s <b>talking</b> on the phone at the moment. <i>(Právě telefonuje.)</i><br>I’m <b>taking</b> an MBA course. <i>(Dělám kurz MBA – v tomto období.)</i>' },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>be</b> (am / is / are) + sloveso s koncovkou <b>-ing</b>', 'I <b>am working</b>. · You/We/They <b>are working</b>. · He/She/It <b>is working</b>.'],
        ['Záporná', 'záporný tvar slovesa <i>be</i> + <b>-ing</b>', 'I’<b>m not studying</b> any more today. · You <b>aren’t working</b>. · He <b>isn’t working</b>.']
      ] },
      { t: 'warn', x: 'Slovesa stavů, která popisují <b>stav, ne činnost</b> (<i>want, need, believe, know</i> a <i>have</i> ve významu vlastnit), se obvykle v průběhovém tvaru nepoužívají. Správně: He <b>wants</b> to spend more time with his family. (ne: he is wanting). She <b>has</b> a lot of responsibility at work. (ne: she is having).' },
      { t: 'versus', title: 'Sloveso think: present simple × present continuous', cols: [
        { h: 'present simple', items: ['What do you <b>think</b>?', '= Jaký je tvůj názor?'] },
        { h: 'present continuous', items: ['I’m <b>thinking</b> of hiring an assistant.', '= Rád bych si ho najal, ale je to zatím jen nápad.'] }
      ], x: '<i>Think</i> se může použít v obou časech, ale význam se mění. V present simple se ptáme na názor. V present continuous mluvíme o myšlence, která se právě rodí a není ještě rozhodnutá: „uvažuju o tom, že si najmu asistenta“.' }
    ] }
  ],
  mistakes: [
    'Zapomenout <b>-s</b> ve 3. osobě: ✗ He work long hours → ✓ He works long hours.',
    'Dát <b>-s</b> na obě místa: ✗ He doesn’t works → ✓ He doesn’t work.',
    'Postavit příslovce četnosti za sloveso <i>be</i> špatně: ✗ She often is out → ✓ She is often out.',
    'Použít průběhový tvar u slovesa stavů: ✗ He is wanting → ✓ He wants.',
    'Zaměnit „pravidelně“ a „právě teď“: pravidelné činnosti = present simple, děj probíhající teď = present continuous.'
  ],
  qa: [
    { q: 'Kdy použiješ present simple?', a: 'O <b>pravidelných činnostech</b>, <b>dlouhodobých situacích</b> a <b>věcech, které platí vždy</b>.' },
    { q: 'Kdy použiješ present continuous?', a: 'O <b>současných</b> činnostech nebo <b>krátkodobých</b> činnostech.' },
    { q: 'Jak se tvoří záporná věta v present simple ve 3. osobě?', a: '<b>doesn’t</b> + základní tvar: <i>It doesn’t take long to walk to the office.</i>' },
    { q: 'Jak se tvoří present continuous?', a: '<b>am / is / are + sloveso-ing</b>: <i>I am working. He is working.</i>' },
    { q: 'Kam patří příslovce četnosti ve větě?', a: 'Před významové sloveso (<i>I often work</i>), ale za sloveso <i>be</i> (<i>She is often out</i>).' },
    { q: 'Které slovesa se obvykle nepoužívají v průběhovém tvaru?', a: 'Slovesa stavů: <i>want, need, believe, know, have</i> (ve významu vlastnit).' },
    { q: 'Jaký je rozdíl mezi <i>What do you think?</i> a <i>I’m thinking of hiring an assistant</i>?', a: 'První se ptá na <b>názor</b>, druhé je <b>nápad, který zatím není rozhodnutý</b> („rád bych ho najal“).' }
  ]
});
