registerTopic({
  id: 'jak-vypada-zakon', order: 3, icon: '📖', title: 'Jak vypadá zákon (stavba a citace)', src: 'podklady', lec: [1], where: 'Cvičení 1 (Sbírka zákonů) + § 605–607 OZ; stavba zákona (doplněno)',
  summary: 'Reálný zákon (občanský zákoník) od hlavičky po účinnost: členění na části, paragrafy, odstavce a písmena, správná citace, závěrečná ustanovení a novela.',
  vocab: [
    { w: 'Sbírka zákonů', x: 'Úřední sbírka, ve které se předpisy vyhlašují; vede se elektronicky (zák. č. 222/2016 Sb.).' },
    { w: 'Paragraf (§)', x: 'Základní číslovaná jednotka zákona; dělí se na odstavce.' },
    { w: 'Odstavec (odst.)', x: 'Číslovaná část paragrafu, zapisuje se v závorce: (1), (2) …' },
    { w: 'Písmeno (písm.)', x: 'Výčet uvnitř odstavce: a), b), c) …' },
    { w: 'Čl.', x: 'Článek – tak se člení Ústava a Listina (nikoli paragrafy).' },
    { w: 'Novela', x: 'Předpis, který mění nebo doplňuje starší předpis; úplné znění je jeho přehledné znění po změnách.' }
  ],
  key: [
    '<b>Citace zákona</b>: číslo / rok vyhlášení, Sb., název – <i>zákon č. 89/2012 Sb., občanský zákoník</i>.',
    '<b>Členění obsahu</b>: číslované <b>paragrafy</b> → <b>odstavce</b> → <b>písmena</b>. Ustanovení se cituje odspodu: <i>§ 5 odst. 1 písm. d) zákona č. 252/1997 Sb.</i>',
    'Rozsáhlé zákony mají nad paragrafy ještě <b>části, hlavy, díly, oddíly</b> (doplněno); občanský zákoník má 5 částí a 3081 paragrafů.',
    'Na <b>konci</b> bývá přechodné ustanovení, zrušovací ustanovení a <b>účinnost</b> (OZ: 1. 1. 2014); není-li určena, nastává 15. den po vyhlášení.',
    '<b>Novela</b> je samostatný předpis ve Sbírce, který mění text jiného zákona; aktuální podobu čti v <b>úplném znění</b>.'
  ],
  sections: [
    { title: 'Zákon od hlavičky po podpisy (doplněno)', blocks: [
      { t: 'p', x: 'Každý zákon se vyhlásí ve Sbírce zákonů a vypadá stejně: nahoře označení, pak text rozdělený do paragrafů, dole závěrečná ustanovení. Jako vzor slouží <b>občanský zákoník</b> (zák. č. 89/2012 Sb.) a jeho § 605–607 o počítání lhůt, které už znáš z tématu o času.' },
      { t: 'svg', title: 'Stránka zákona s popisky', x: ZPN.lawPage(), cap: 'Vlevo zjednodušená podoba občanského zákoníku (názvy částí a hlav jsou nahrazeny zástupným [názvem], zvýrazněn je § 605–608), vpravo co která část znamená. Čti shora dolů: označení → úvodní věta → členění → paragrafy → účinnost → podpisy.' },
      { t: 'ul', items: [
        '<b>Označení</b> = číslo / rok + Sb. + název. Číslo je pořadí předpisu v daném roce, proto se při citaci uvádí vždy i rok.',
        '<b>Paragrafy se číslují průběžně</b> od § 1 do konce zákona (OZ až § 3081), nezačínají znovu v každé části.',
        'Paragraf bez odstavců je jedno souvislé ustanovení (např. <b>§ 607</b>); víc myšlenek se dělí na odstavce (<b>§ 605</b> má dva).',
        'Výčet uvnitř odstavce se dělí na <b>písmena</b> a-b-c; u rozsáhlejších výčtů i na body 1., 2.'
      ] }
    ] },
    { title: 'Členění: od zákona k písmenu', blocks: [
      { t: 'pyramid', title: 'Úrovně zákona (shora dolů)', levels: [
        { h: 'Zákon', x: 'celý předpis, např. 89/2012 Sb. (podklady)' },
        { h: 'Část', x: 'ČÁST PRVNÍ … PÁTÁ – jen u velkých zákonů (doplněno)' },
        { h: 'Hlava', x: 'HLAVA I, II … – téma uvnitř části (doplněno)' },
        { h: 'Díl, oddíl', x: 'jemnější členění hlavy; podle rozsahu zákona se úrovně vynechávají (doplněno)' },
        { h: 'Paragraf (§)', x: 'číslovaná jednotka, základ citace (podklady)' },
        { h: 'Odstavec (odst.)', x: '(1), (2) … uvnitř paragrafu (podklady)' },
        { h: 'Písmeno (písm.)', x: 'a), b), c) … uvnitř odstavce (podklady)' }
      ] },
      { t: 'def', term: 'Občanský zákoník jako příklad', x: 'Největší zákon soukromého práva, který ukazuje všechny úrovně členění najednou.', items: [
        '5 částí: obecná (§ 1–654), rodinné právo (§ 655–975), absolutní majetková práva (§ 976–1720), relativní majetková práva (§ 1721–3014), společná, přechodná a závěrečná ustanovení (§ 3015–3081)',
        'celkem <b>3081 paragrafů</b>, účinnost <b>1. 1. 2014</b>',
        'nahradil starý občanský zákoník č. 40/1964 Sb.'
      ] },
      { t: 'tip', x: 'Ústava a Listina se nečlení na paragrafy, ale na <b>články</b> (<b>čl.</b> 2 odst. 3 Ústavy). Paragraf = zákon, článek = ústavní dokument.' }
    ] },
    { title: 'Jak se zákon cituje', blocks: [
      { t: 'svg', title: 'Anatomie citace', x: ZPN.citation(), cap: 'Citace jde od nejmenší jednotky (paragraf) k předpisu, v němž leží. Barvy odlišují úroveň; šipka ukazuje směr čtení.' },
      { t: 'grid', head: ['Citace', 'Jak ji číst'], rows: [
        ['zákon č. 89/2012 Sb., občanský zákoník', 'číslo 89 vyhlášené v roce 2012 ve Sbírce, název občanský zákoník'],
        ['§ 5 odst. 1 písm. d) zákona č. 252/1997 Sb., o zemědělství', 'paragraf 5, odstavec 1, písmeno d) zákona o zemědělství (příklad z podkladů)'],
        ['§ 605 odst. 2 OZ', 'paragraf 605, druhý odstavec; OZ je zkratka občanského zákoníku'],
        ['§ 607 OZ', 'paragraf 607 bez odstavců – celé ustanovení o víkendovém konci lhůty']
      ] },
      { t: 'warn', x: 'Nepleť <b>část zákona</b> (ČÁST PRVNÍ) s <b>částkou Sbírky</b> (číslovaný „sešit“, ve kterém se předpisy vyhlašují). Částky se číslují chronologicky v každém roce a předpis nelze přečíslovat, jen zrušit a nahradit.' }
    ] },
    { title: 'Příklad: rozbor § 605–607 OZ', blocks: [
      { t: 'law', ref: '§ 607', x: 'Připadne-li poslední den lhůty na sobotu, neděli nebo svátek, je posledním dnem lhůty nejblíže následující pracovní den.' },
      { t: 'ex', x: 'Rozbor jednoho paragrafu: <b>§ 607</b> nemá odstavce ani písmena, je to jedna věta.', items: ['<b>Hypotéza</b>: připadne-li poslední den lhůty na sobotu, neděli nebo svátek', '<b>Dispozice</b>: posledním dnem lhůty je nejblíže následující pracovní den', '<b>Sankce</b>: v ustanovení není – je to pomocné pravidlo, jak lhůtu spočítat; následek (zmeškání lhůty) plyne z jiných norem', '<b>§ 605</b> má dva odstavce: (1) začátek lhůty ve dnech, (2) konec lhůty v týdnech, měsících a letech; cituje se <i>§ 605 odst. 2 OZ</i>'] },
      { t: 'tip', x: 'Stavba normy z tématu o právních normách (hypotéza – dispozice – sankce) se v zákoně nehledá po částech zákona, ale po <b>větách</b> jednoho nebo několika paragrafů.' }
    ] },
    { title: 'Konec zákona a novela (doplněno)', blocks: [
      { t: 'ul', items: [
        '<b>Přechodná ustanovení</b>: jak postupovat u vztahů vzniklých před účinností (u OZ společná, přechodná a závěrečná část § 3015–3081).',
        '<b>Zrušovací ustanovení</b>: které starší předpisy se rušejí (OZ nahradil zákon č. 40/1964 Sb.).',
        '<b>Účinnost</b>: od kdy se zákon uplatňuje (OZ: § 3081, 1. 1. 2014); není-li určena, nastává 15. den po vyhlášení.',
        '<b>Podpisy</b>: prezident, předseda Poslanecké sněmovny a předseda vlády.'
      ] },
      { t: 'flow', title: 'Jak vypadá novela (měnící zákon)', steps: [
        { h: 'Čl. I', x: 'vlastní změny cizího zákona v číslovaných bodech, např. „V § 5 se odstavec 2 zrušuje.“ (ilustrační znění)' },
        { h: 'Čl. II', x: 'přechodná ustanovení k novele' },
        { h: 'Čl. III', x: 'účinnost novely' }
      ] },
      { t: 'p', x: 'Novela není pro čtenáře souvislý text zákona: obsahuje jen pokyny „v tomto místě změň to a to“. Proto se vyhledává <b>úplné znění</b> zákona nebo jeho aktuální znění v elektronické Sbírce a hlídá se, <b>ke kterému dni</b> znění platí (časová působnost).' },
      { t: 'versus', title: 'Zákon × novela × úplné znění', x: 'Zákon je původní předpis, který zavádí pravidla jako celek. Novela je samostatný zákon, který sám nic nového nekodifikuje, jen zasahuje do textu jiného zákona (mění slova, ruší nebo vkládá paragrafy). Úplné znění není nový předpis: je to přehled, ve kterém jsou všechny novely už zapracovány do jednoho čitelného textu. Když v praxi potřebuješ vědět, co dnes platí, nečteš originál z roku vyhlášení ani jednotlivé novely, ale úplné znění platné ke dni události.', cols: [
        { h: 'Zákon', items: ['původní předpis', 'vlastní číslo / rok Sb.', 'obsahuje pravidla'] },
        { h: 'Novela', items: ['mění jiný předpis', 'vlastní číslo / rok Sb.', 'jen pokyny ke změnám'] },
        { h: 'Úplné znění', items: ['není nový předpis', 'slučuje zákon i novely', 'pomůcka pro čtenáře'] }
      ] }
    ] }
  ],
  mistakes: [
    'Citovat bez roku nebo bez „Sb.“ – číslo 89 se opakuje každý rok, jednoznačné je až 89/2012 Sb.',
    'Řadit citaci shora (zákon → § → odst.) – správně se cituje odspodu: <i>§ 5 odst. 1 písm. d) zákona č. 252/1997 Sb.</i>',
    'Zaměnit § (zákon) a čl. (Ústava, Listina, články novely).',
    'Splést část zákona s částkou Sbírky.',
    'Číst jeden odstavec izolovaně – souvisí s ostatními odstavci, nadpisy a definicemi v zákoně.',
    'Číst originální znění z roku vyhlášení místo úplného znění platného ke dni události.'
  ],
  qa: [
    { q: 'Z čeho se skládá zákon a jak se člení?', a: 'Z označení (číslo / rok Sb., název), úvodní věty, vlastního textu rozděleného do číslovaných <b>paragrafů</b> (ty na <b>odstavce</b> a <b>písmena</b>) a závěrečných ustanovení s účinností. Rozsáhlé zákony mají navíc <b>části, hlavy, díly, oddíly</b>. Občanský zákoník má 5 částí a 3081 paragrafů.' },
    { q: 'Jak se správně cituje zákon a jeho ustanovení?', a: 'Zákon: číslo / rok vyhlášení, Sb., název – <i>zákon č. 89/2012 Sb., občanský zákoník</i>. Ustanovení odspodu: <i>§ 5 odst. 1 písm. d) zákona č. 252/1997 Sb., o zemědělství</i>.' },
    { q: 'Rozdíl mezi § a čl.?', a: '§ (paragraf) člení zákony, <b>čl.</b> (článek) Ústavu a Listinu (a články novelizačního zákona). Příklad: čl. 2 odst. 3 Ústavy × § 607 OZ.' },
    { q: 'Co typicky obsahuje konec zákona?', a: 'Přechodná a zrušovací ustanovení, <b>účinnost</b> (nebo se použije 15. den po vyhlášení) a podpisy prezidenta, předsedy Poslanecké sněmovny a předsedy vlády. U OZ je závěr v části 5 (§ 3015–3081), účinnost od 1. 1. 2014.' },
    { q: 'Rozeberte § 607 OZ.', a: 'Jedna věta bez odstavců. Hypotéza: poslední den lhůty připadne na sobotu, neděli nebo svátek. Dispozice: posledním dnem lhůty je nejblíže následující pracovní den. Sankce v ustanovení není, jde o pomocné pravidlo počítání lhůty.' },
    { q: 'Jak se liší zákon, novela a úplné znění?', a: 'Zákon je původní předpis; novela je samostatný předpis, který mění nebo doplňuje jiný; úplné znění je přehledné znění zákona po zapracování všech novel (není to nový předpis). K zjištění aktuálního stavu se používá úplné znění.' }
  ]
});
