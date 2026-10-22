registerTopic({
  id: 'modals-obligation', order: 11, icon: '🚦', title: 'can, have to, must, need to and should', src: 'podklady', where: 'Lekce 6 (s. 56–57) + Grammar reference (s. 167–168)',
  summary: 'Modální slovesa povolení, povinnosti a rady: <i>can / can’t</i>, <i>must</i>, <i>have to</i>, <i>need to</i>, <i>should</i> a důležitý rozdíl mezi <i>mustn’t</i> (zákaz) a <i>don’t have to</i> (není nutné).',
  vocab: [
    { w: 'obligation', x: 'povinnost – něco je nutné udělat' },
    { w: 'permission', x: 'povolení – něco je dovolené' },
    { w: 'modal verb', x: 'modální sloveso (<i>can, must, should</i>): bez -s ve 3. osobě, za ním základní tvar, otázka změnou pořadí slov' },
    { w: 'semi-modal', x: 'polomodální sloveso (<i>have to, need to</i>): chová se jako běžné sloveso, má <i>-s</i> a používá <i>do / does</i>' },
    { w: 'forbidden', x: 'zakázáno (<i>mustn’t</i>)' }
  ],
  key: [
    '<b>can / can’t</b> = je dovoleno / není dovoleno.',
    '<b>must, have to, need to</b> = je to nutné; <b>must</b> je nejsilnější, <b>have to</b> a <b>need to</b> jsou častější.',
    '<b>mustn’t</b> = zákaz · <b>don’t have to / don’t need to / needn’t</b> = není to nutné. <b>To není totéž!</b>',
    '<b>should / shouldn’t</b> = slabší než <i>must</i>: rada, doporučení („je to dobrý nápad“).',
    '<b>can, must, should</b> nemají v 3. osobě <i>-s</i>; <b>have to, need to</b> ano (<i>he has to, she needs to</i>).'
  ],
  sections: [
    { title: 'Použití (Use)', blocks: [
      { t: 'ol', items: [
        '<b>can / can’t</b> – když něco je nebo není dovoleno: <i>You can’t park here during the daytime.</i> · <i>You can park here after six o’clock at night.</i>',
        '<b>must, have to, need to</b> – když je něco nutné nebo povinné: <i>We must / have to / need to turn left here.</i>',
        '<b>mustn’t, don’t have to, don’t need to</b> – kladné tvary mají podobný význam, záporné se liší (viz níže).',
        '<b>should / shouldn’t</b> – slabší než <i>must / mustn’t</i>: <i>You should read the documents.</i> (je to dobrý nápad) · <i>You shouldn’t tell anyone your password.</i> (není to dobrý nápad)'
      ] },
      { t: 'svg', title: 'Síla povinnosti a její záporný protějšek', x: ANG.obligationMatrix(), cap: 'Nahoře kladné tvary od nejsilnějšího po radu, dole jejich záporné protějšky. Sloupce nejsou „opaky“ – <i>mustn’t</i> a <i>don’t have to</i> znamenají něco úplně jiného.' },
      { t: 'p', x: '<b>Must</b> je nejsilnější sloveso. Vzácně ho používáme k rozkazům jiným lidem, ale můžeme ho použít:' },
      { t: 'ul', items: [
        'k tomu, abychom řekli, co <b>sám sobě</b> ukládám (ne někomu jinému): <i>I really must phone the suppliers today.</i>',
        'k tomu, abychom řekli, že je něco <b>pravidlo, předpis nebo zákon</b>: <i>Fire exits must be kept clear.</i>',
        'k <b>doporučení</b>, o němž si myslíme, že se druhému bude líbit: <i>You must visit the Prado Museum. It’s wonderful!</i>'
      ] },
      { t: 'p', x: '<b>Have to</b> a <b>need to</b> jsou běžnější způsoby, jak vyjádřit nutnost: <i>I have to log on to the computer system.</i> · <i>You need to give me a password.</i> V mluvené angličtině lidé při instrukcích používají i <i>want to</i>: <i>Don’t tell anyone your password. You want to keep it secret.</i>' }
    ] },
    { title: 'mustn’t × don’t have to', blocks: [
      { t: 'versus', title: 'Zákaz × není nutné', cols: [
        { h: 'mustn’t = zákaz', items: ['Employees <b>must not</b> accept valuable gifts from clients.', '(nesmí – je to zakázáno)'] },
        { h: 'don’t have to / don’t need to / needn’t = není nutné', items: ['It’s only a small gift. You <b>don’t need to</b> report it.', 'We have plenty of time. You <b>don’t have to</b> hurry.', 'It’s OK. You <b>needn’t</b> tell anyone.'] }
      ], x: 'Tady je největší past. České „nemusíš“ a „nesmíš“ jsou dva různé významy – a anglicky se vyjadřují různými slovy. <b>Mustn’t</b> říká, že je to <b>zakázáno</b> (nesmíš to udělat), kdežto <b>don’t have to</b> říká jen to, že to <b>není nutné</b> (můžeš to udělat, ale nemusíš). Zaměníš-li je, řekneš pravý opak toho, co chceš.' },
      { t: 'warn', x: 'Američtí mluvčí používají <i>must</i> méně často než britští a nepoužívají stažený tvar <i>mustn’t</i>. Místo <i>must</i> řeknou <i>have to</i> nebo <i>required to</i>, místo <i>mustn’t</i> řeknou <i>not allowed to</i>: <i>We have to meet the targets.</i> · <i>We’re required to meet the targets.</i> · <i>We’re not allowed to tell anyone our password.</i>' }
    ] },
    { title: 'should a shouldn’t – rada', blocks: [
      { t: 'p', x: '<i>Should</i> a <i>shouldn’t</i> jsou slabší formy <i>must</i> a <i>mustn’t</i>. Často je používáme s <i>think</i>, když si vyměňujeme názory:' },
      { t: 'ul', items: [
        'I think we <b>should</b> stick to the agenda in meetings.',
        'I don’t think people <b>should</b> take mobile phone calls in meetings.',
        'Do you think we <b>should</b> hold meetings standing up? – Yes, I do. / No, I don’t.'
      ] }
    ] },
    { title: 'Tvoření (Form)', blocks: [
      { t: 'grid', head: ['Typ věty', 'Modální: can, must, should', 'Polomodální: have to, need to'], rows: [
        ['Kladná', '<b>can / must / should</b> + základní tvar; žádný zvláštní tvar pro 3. osobu<br><i>You can park here for as long as you want. · I must remember to switch off the lights. · She should agree to that.</i>', 'přidáme <b>-s</b> v 3. osobě<br><i>He has to tell his customers about it right away. · She needs to ask her boss if it’s OK.</i>'],
        ['Záporná', 'přidáme <b>not</b><br><i>We cannot agree to that. · I mustn’t forget. · We shouldn’t worry about it.</i>', '<b>don’t / doesn’t</b><br><i>You don’t have to report it. · He doesn’t need to report it.</i>'],
        ['Otázka', 'změníme pořadí slov<br><i>Can I wear jeans? · Must I report this? · Should I wear a suit and tie?</i>', '<b>do / does</b><br><i>Do I have to attend the meeting?</i>']
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit <i>mustn’t</i> a <i>don’t have to</i>: <i>mustn’t</i> = zákaz, <i>don’t have to</i> = není nutné.',
    'Přidat <i>to</i> za <i>can / must / should</i>: ✗ I must to go → ✓ I must go.',
    'Přidat <i>-s</i> k modálním slovesům: ✗ He cans, he musts → ✓ He can, he must; ale <i>he has to</i>.',
    'Tvořit otázku s <i>have to</i> bez <i>do</i>: ✗ Have I to attend? → ✓ Do I have to attend?',
    'Brát <i>should</i> jako rozkaz – je to rada, ne povinnost.'
  ],
  qa: [
    { q: 'Co znamená <i>can’t</i> v pravidlech?', a: 'Že něco <b>není dovoleno</b>: <i>You can’t park here during the daytime.</i>' },
    { q: 'Které sloveso je nejsilnější ve vyjádření nutnosti?', a: '<b>Must</b>; běžnější jsou <i>have to</i> a <i>need to</i>.' },
    { q: 'Jaký je rozdíl mezi <i>mustn’t</i> a <i>don’t have to</i>?', a: '<i>Mustn’t</i> = zákaz (nesmíš); <i>don’t have to</i> = není nutné (nemusíš).' },
    { q: 'Co znamená <i>should</i>?', a: 'Rada, doporučení – slabší než <i>must</i>. <i>You should read the documents.</i>' },
    { q: 'Jak se tvoří otázka s <i>have to</i>?', a: 'S <b>do / does</b>: <i>Do I have to attend the meeting?</i>' },
    { q: 'Jak americká angličtina vyjadřuje <i>must</i> a <i>mustn’t</i>?', a: '<i>Have to / required to</i> a <i>not allowed to</i>.' }
  ]
});
