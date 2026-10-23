registerTopic({
  id: 'will-going-to', group: 'gram', order: 3, icon: '🔮', title: 'will and going to (budoucnost)', src: 'podklady', where: 'Lekce 2 (s. 14–15) + Grammar reference (s. 166–167)',
  summary: 'Jak vyjádřit budoucnost: <i>will</i> pro předpovědi, spontánní rozhodnutí a nabídky, <i>going to</i> pro záměry a jisté předpovědi a <i>may / might / could</i> pro možnosti.',
  vocab: [
    { w: 'will', x: 'modální sloveso budoucnosti; zkráceně <i>’ll</i>, záporně <i>won’t</i>' },
    { w: 'going to', x: 'vazba <i>be going to + základní tvar</i> pro záměry a plány' },
    { w: 'intention', x: 'záměr – chci něco udělat a už jsem se rozhodl(a)' },
    { w: 'prediction', x: 'předpověď – tvrzení o tom, co se stane' },
    { w: 'future possibility', x: 'budoucí možnost – něco se může stát, ale není to jisté (<i>may, might, could</i>)' }
  ],
  key: [
    '<b>will</b> = předpověď · rozhodnutí <b>teď</b> · nabídka / slib · věta s <i>if</i>.',
    '<b>going to</b> = záměr / plán, o kterém jsem se už <b>rozhodl</b>; také když z toho, co vidíme teď, <b>je jasné</b>, že se něco stane.',
    '<b>may / might / could</b> = možnost, <b>není to jisté</b>. Záporně spíš <i>might not</i>.',
    'Po <i>will</i> a po <i>may / might / could</i> následuje <b>základní tvar</b>; žádná koncovka -s ve 3. osobě.',
    '<i>going to</i> se obvykle nepoužívá se slovesem <i>go</i> – místo toho present continuous nebo <i>will</i>.'
  ],
  sections: [
    { title: 'Jak vybrat budoucí formu', blocks: [
      { t: 'p', x: 'Existuje mnoho způsobů, jak mluvit o budoucnosti. Forma, kterou zvolíme, závisí na situaci a na tom, <b>jak jsme si jisti</b>. Někdy je význam stejný, jindy forma ukazuje rozdíl.' },
      { t: 'svg', title: 'Míra jistoty a rozhodnutosti', x: ANG.futureScale(), cap: 'Příklad z učebnice: stejná věta o schůzce, jiná forma – jiný stupeň jistoty.' },
      { t: 'versus', title: 'Stejná věta, jiný význam', cols: [
        { h: 'forma bez rozdílu v významu', items: ['I’m going to be forty next year.', 'I’ll be forty next year.'] },
        { h: 'forma, která mění význam', items: ['Er… OK, <b>I’ll</b> come to the meeting. (rozhoduji se teď)', 'I’m <b>going to</b> come. (už jsem se rozhodl)', 'I’m <b>coming</b> to the meeting. (je to jisté)', 'I <b>might</b> come. / I <b>may</b> come. (není to jisté)'] }
      ], x: 'U některých vět je jedno, jestli použiješ <i>will</i>, nebo <i>going to</i> – třeba věk příští rok. Rozdíl vznikne tam, kde záleží na tom, <b>kdy ses rozhodl</b> a jak moc je to jisté. Rozhodnutí v okamžiku mluvení je <i>will</i>, předem hotový záměr je <i>going to</i>, pevná domluva je present continuous a nejistota je <i>might / may</i>.' }
    ] },
    { title: 'The modal verb will', blocks: [
      { t: 'p', x: '<i>Will</i> používáme:' },
      { t: 'ol', items: [
        '<b>při předpovědích:</b> <i>In the future, people will retire at seventy.</i> · <i>Chinese will become an important language for business.</i>',
        '<b>při rozhodnutí v okamžiku mluvení:</b> A: <i>It’s raining.</i> B: <i>Then <b>I’ll take</b> an umbrella.</i> · <i>I think I’ll get some perfume in the duty free shop.</i>',
        '<b>při nabídkách a slibech:</b> <i>I’ll do it for you.</i> · <i>We’ll give you a lift.</i>',
        '<b>ve větách s <i>if</i></b> (první kondicionál): <i>If you walk more, you’ll feel refreshed.</i>'
      ] },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>will</b> (nebo <b>’ll</b>) + základní tvar; žádná zvláštní forma pro 3. osobu', 'I’ll see you on Friday. · She’ll take questions at the end of her speech.'],
        ['Záporná', '<b>won’t</b> (will not)', 'He won’t be here for at least half an hour.'],
        ['Otázka', 'změň pořadí slov', 'What time will he get here?'],
        ['Krátká odpověď', '<b>will / won’t</b>', 'Will it work? Yes, it will. / No, it won’t.']
      ] }
    ] },
    { title: 'going to', blocks: [
      { t: 'ol', items: [
        '<b>záměry a plány:</b> <i>I’m going to visit my sister tomorrow.</i> (koupil jsem si letenku a čeká mě) · <i>They’re going to open a new office in Shanghai.</i> (už se rozhodli)',
        '<b>předpověď podle toho, co teď vidíme:</b> <i>There are black clouds. It’s going to rain.</i> · <i>The train’s delayed. We’re going to be late.</i>'
      ] },
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>be going to</b> + základní tvar', 'They’re going to reorganize the office. · I’m only going to stay there for a week.'],
        ['Záporná', 'záporný tvar slovesa <i>be</i>', 'We’re not going to clean up. · He isn’t going to arrive in time.'],
        ['Otázka', 'změň pořadí slovesa <i>be</i>', 'Are you going to employ an assistant? · What’s he going to do?'],
        ['Krátká odpověď', 'sloveso <i>be</i>', 'Is he going to come? Yes, he is. / No, he isn’t.']
      ] },
      { t: 'warn', x: 'Se slovesem <i>go</i> obvykle nepoužíváme <i>going to</i>. Místo toho zvolíme jinou budoucí formu, např. present continuous nebo <i>will</i>: <b>I’m going to Paris.</b> / <b>I’ll go to Paris.</b> (ne: I’m going to go to Paris).' },
      { t: 'ex', x: 'V rozhovoru na letišti: <i>I’m <b>going to</b> meet the sales and marketing managers.</i> (pevný plán) · <i>I’ll probably check my email.</i> · <i>I think <b>I’ll</b> get a head and shoulder massage.</i> (rozhodnutí právě teď)' }
    ] },
    { title: 'Budoucí možnost: may, might, could', blocks: [
      { t: 'ol', items: [
        '<i>May, might</i> a <i>could</i> říkají, že je děj v budoucnu <b>možný, ale nejistý</b>: <i>I may be late. / I might be late. / I could be late.</i>',
        '<i>Could</i> často znamená i <b>návrh</b>: <i>We could call his mobile and see if he answers.</i>',
        'V záporu obvykle používáme <i>might</i>: <i>She might not get here on time.</i> · <i>What problems might we have?</i>'
      ] },
      { t: 'grid', head: ['Modální sloveso', 'Tvoření', 'Příklad'], rows: [
        ['<i>may / might / could</i>', 'bez zvláštní formy pro 3. osobu; základní tvar slovesa', 'I may need some help. · She might not get here in time. · We could ask Sally if she’s free.']
      ] }
    ] }
  ],
  mistakes: [
    'Použít <i>will</i> pro záměr, který už je rozhodnutý – tam patří <i>going to</i> (nebo present continuous pro domluvený plán).',
    'Přidat <i>-s</i> po <i>will</i>: ✗ He wills come → ✓ He <b>will</b> come.',
    'Říkat <i>I’m going to go</i>: lepší je <i>I’m going to Paris</i> nebo <i>I’ll go</i>.',
    'Zapomenout <i>be</i> u <i>going to</i>: ✗ I going to visit → ✓ I’m going to visit.',
    'Brát <i>might / may / could</i> jako jistotu: znamenají jen možnost.'
  ],
  qa: [
    { q: 'Kdy použiješ <i>will</i>?', a: 'Při <b>předpovědích</b>, <b>rozhodnutích v okamžiku mluvení</b>, <b>nabídkách a slibech</b> a ve větách s <i>if</i>.' },
    { q: 'Kdy použiješ <i>going to</i>?', a: 'Při <b>záměrech a plánech</b> (už jsem se rozhodl) a při předpovědi podle toho, co <b>vidíme teď</b> (<i>black clouds → it’s going to rain</i>).' },
    { q: 'Jaký je rozdíl mezi <i>I’ll come</i> a <i>I’m going to come</i>?', a: '<i>I’ll come</i> – rozhoduji se právě teď. <i>I’m going to come</i> – už jsem se rozhodl dřív.' },
    { q: 'Jak se tvoří záporná věta s <i>will</i>?', a: '<b>won’t</b> + základní tvar: <i>He won’t be here for at least half an hour.</i>' },
    { q: 'Co vyjadřují <i>may, might, could</i> v budoucnosti?', a: '<b>Možnost</b>, která není jistá: <i>I may be late.</i> <i>Could</i> také <b>návrh</b>.' },
    { q: 'Jaký tvar má záporná možnost?', a: 'Obvykle <i>might not</i>: <i>She might not get here on time.</i>' },
    { q: 'Proč nepíšeme <i>I’m going to go to Paris</i>?', a: 'Se slovesem <i>go</i> se <i>going to</i> obvykle nepoužívá; stačí <i>I’m going to Paris</i> nebo <i>I’ll go to Paris</i>.' }
  ]
});
