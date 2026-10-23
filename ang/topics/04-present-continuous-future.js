registerTopic({
  id: 'present-continuous-future', group: 'gram', order: 4, icon: '📅', title: 'Present continuous for future plans', src: 'podklady', where: 'Lekce 2 (s. 16–17) + Grammar reference (s. 160, 166)',
  summary: 'Present continuous pro domluvené plány v budoucnu (věci „v diáři“) a jeho rozdíl proti <i>going to</i> a <i>will</i>.',
  vocab: [
    { w: 'arrangement', x: 'domluva, pevně naplánovaná událost (čas, místo, lidé jsou dohodnuti)' },
    { w: 'future plan', x: 'plán do budoucna – něco, co už je rozhodnuto' },
    { w: 'diary', x: 'diář, kalendář – naplánované události jsou „v diáři“' }
  ],
  key: [
    'Present continuous (<b>am / is / are + -ing</b>) vyjadřuje i <b>budoucí plány a domluvy</b>.',
    'Typické jsou časové údaje: <i>on Thursday, at 3.30, tomorrow</i>.',
    'Rozdíl proti <i>going to</i>: <b>going to</b> = záměr; <b>present continuous</b> = domluvený plán, který je jistý.',
    'Tvoření je stejné jako u přítomného průběhového času (viz téma 1).'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'def', term: 'Použití', x: 'Present continuous používáme o <b>budoucích plánech a domluvách</b>. Ať jde o něco, co už je zapsané, naplánované nebo domluvené.' },
      { t: 'ex', x: 'We’re <b>meeting</b> at 3.30 on Thursday. <i>(Máme to v diáři.)</i><br>I’m not <b>seeing</b> him on Friday. <i>(Není to naplánované.)</i><br>What time are you <b>arriving</b>? <i>(Jaký je rozpis?)</i>' },
      { t: 'svg', title: 'Tvoření a použití', x: ANG.presContFutureForm(), cap: 'Tvoření je stejné jako u present continuous – liší se jen to, že mluvíme o budoucím čase (proto je v těchto větách časový údaj).' },
      { t: 'tip', x: 'Pro plán s <b>domluveným časem</b> a <b>lidmi</b> (schůzka, let, návštěva) je present continuous přirozená volba. Pro <b>osobní záměr</b>, kde nic domluveného nemusí být, se používá <i>going to</i>.' }
    ] },
    { title: 'Srovnání s going to a will', blocks: [
      { t: 'versus', title: 'Tři způsoby, jak říct „přijdu na schůzku“', cols: [
        { h: 'going to', items: ['I’m going to come to the meeting on Friday.', '= <b>I intend to be there.</b> (mám v úmyslu)'] },
        { h: 'present continuous', items: ['I’m coming to the meeting on Friday.', '= <b>It’s a planned arrangement.</b> (je to domluvené)'] },
        { h: 'will', items: ['Er… OK, I’ll come to the meeting.', '= <b>I’m deciding now.</b> (rozhoduji se teď)'] }
      ], x: 'Všechny tři věty říkají, že přijdeš, ale liší se tím, <b>odkud ten plán pochází</b>. <i>Will</i> je spontánní rozhodnutí: kolega se zeptá a ty právě teď řekneš ano. <i>Going to</i> vyjadřuje vlastní úmysl, na kterém jsi se rozhodl dřív. Present continuous znamená, že už se o schůzce domluvili i ostatní – je zapsaná v kalendáři.' },
      { t: 'p', x: 'V učebnici (lekce 2) se tyto formy trénují v rozhovoru na letišti v Hongkongu: cestující vyprávějí o svých plánech (<i>Definite plans</i> × <i>Possibilities</i>), takže vedle <i>going to</i> a present continuous se objevuje i <i>might</i> pro nejisté plány.' }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Typ věty', 'Pravidlo', 'Příklad'], rows: [
        ['Kladná', '<b>am / is / are + sloveso-ing</b>', 'We’re meeting at 3.30 on Thursday.'],
        ['Záporná', 'záporný tvar slovesa <i>be</i> + <b>-ing</b>', 'I’m not seeing him on Friday.'],
        ['Otázka', 'změníme pořadí <i>be</i> a podmětu', 'What time are you arriving?']
      ] },
      { t: 'p', x: 'Podrobnosti o tvoření present continuous jsou v tématu 1 (Grammar reference s. 160).' }
    ] }
  ],
  mistakes: [
    'Zapomenout časový údaj nebo kontext: bez něj věta <i>We’re meeting</i> může znít jako děj právě teď.',
    'Použít present continuous, když nic není domluveno: pak je lepší <i>going to</i> (záměr) nebo <i>will</i> (spontánní rozhodnutí).',
    'Použít stavové sloveso v průběhovém tvaru, i když mluvíme o budoucnosti – stavová slovesa (<i>want, need, know</i>) se zde neužívají.'
  ],
  qa: [
    { q: 'Kdy použiješ present continuous pro budoucnost?', a: 'Když mluvíš o <b>plánech a domluvách</b> – něco, co je „v diáři“.' },
    { q: 'Jak se tvoří present continuous pro budoucnost?', a: 'Stejně jako přítomný průběhový čas: <b>am / is / are + sloveso-ing</b> + časový údaj.' },
    { q: 'Jaký je rozdíl mezi <i>I’m going to come</i> a <i>I’m coming</i> na schůzku?', a: '<i>I’m going to come</i> = mám <b>v úmyslu</b> přijít. <i>I’m coming</i> = je to <b>domluvené</b>.' },
    { q: 'Co znamená <i>I’m not seeing him on Friday</i>?', a: 'V pátek se s ním <b>nesejdu – nemáme nic domluveného</b> (není to naplánované).' },
    { q: 'Jak se zeptáš na plán příjezdu?', a: '<i>What time are you arriving?</i> – ptáš se na rozpis / plán.' }
  ]
});
