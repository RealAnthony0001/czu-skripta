registerTopic({
  id: 'lekce-4-learning-curve', group: 'slov', order: 29, icon: '🎓', title: 'Lekce 4 – Learning curve: vlastnosti, rozvíjení nápadů, Interaction', src: 'podklady', where: 'Lekce 4 (s. 38–45) + Audio scripts (s. 147–148)',
  summary: 'Personal characteristics (Word Focus), Building on ideas (Communication strategies) a Training solutions (Interaction): jak popsat své schopnosti, jak na cizí nápad navázat technikou „Yes…, and…“ a jak vyjednat školení.',
  vocab: [
    { w: 'soft skills', x: 'měkké dovednosti – komunikace, spolupráce, organizace (hledají je zaměstnavatelé u všech zaměstnanců)' },
    { w: 'job × work', x: '<i>job</i> je zpravidla podstatné jméno (<i>What’s your job?</i>); <i>work</i> může být sloveso i nepočitatelné podstatné jméno (<i>all that work</i>)' },
    { w: 'improvise', x: 'dělat něco bez přípravy, vymýšlet za pochodu' },
    { w: 'go along with', x: 'souhlasit s něčím a přijmout to' },
    { w: 'build on an idea', x: 'rozvíjet cizí nápad, přidat k němu něco' },
    { w: 'assertiveness', x: 'schopnost otevřeně a pozitivně vyjádřit své potřeby' },
    { w: 'relocate', x: 'přestěhovat se na jiné místo kvůli práci' },
    { w: 'self-taught', x: 'samouk' }
  ],
  key: [
    '<b>Měkké dovednosti:</b> komunikace, vycházení s lidmi, organizace, vyhledávání informací, analytické myšlení, profesní růst.',
    '<b>Vlastnosti:</b> analytical, self-sufficient, organized, sensible, computer literate, efficient, persuasive, numerate.',
    '<b>Záporné rysy:</b> unreliable, messy, bossy, unpunctual.',
    '<b>„Yes…, and…“</b> = přijmu nápad a přidám k němu další; <b>ne „Yes, but…“</b>, které nápad odmítá.',
    '<b>Reakce na nápad:</b> <i>Yes, I’ll go along with that, and… · Great idea! And we could… · Sounds good to me. And…</i>',
    '<b>Vyjednávání:</b> <i>The thing is… · What I’m saying is… · One option is… · Another possibility is…</i>'
  ],
  sections: [
    { title: 'Word Focus: Personal characteristics (s. 38–39)', blocks: [
      { t: 'p', x: 'Úvodní věty o tom, co potřebuješ ve své práci: <i>You need to be able to… · You should be capable of… · You have to be… · It’s important to be good at… · You want to know how to…</i> Rozhovor s personalistkou ukazuje, že zaměstnavatelé hledají kromě odborných i tzv. <b>soft skills</b>:' },
      { t: 'grid', head: ['Dovednost', 'Co zaměstnavatel chce'], rows: [
        ['<b>communication</b>', 'umět vyjádřit myšlenky mluveně i písemně a umět naslouchat'],
        ['<b>interpersonal skills</b>', 'vycházet s různými osobnostmi a pracovat v týmu'],
        ['<b>organizational skills</b>', 'být organizovaný, udržovat pořádek na pracovišti – to ukazuje efektivní práci a řízení času'],
        ['<b>research</b>', 'umět zjistit informace o firmě a najít data či odpovědi; být <i>self-sufficient</i>'],
        ['<b>analytical skills</b>', 'logické myšlení; rutinní problémy řešit se zdravým rozumem (<i>common sense</i>)'],
        ['<b>career growth</b>', 'ochota se profesně zlepšovat a učit se nové věci (školení)']
      ] },
      { t: 'warn', x: '<b>Job</b> je zpravidla podstatné jméno: <i>I’m a software engineer. Have you finished all those jobs?</i> <b>Work</b> může být sloveso nebo nepočitatelné podstatné jméno: <i>She works for a software company. Have you finished all that work?</i> ✗ <i>all those works</i>.' },
      { t: 'grid', head: ['Pokud jsi…', 'Umíš…'], rows: [
        ['<b>analytical</b>', 'zkoumat věci velmi pečlivě a logicky'], ['<b>self-sufficient</b>', 'dělat věci sám, bez cizí pomoci'],
        ['<b>organized</b>', 'pečlivě plánovat a udržovat pořádek'], ['<b>sensible</b>', 'být praktický a mít dobrý úsudek'],
        ['<b>computer literate</b>', 'znát práci s počítači'], ['<b>efficient</b>', 'pracovat rychle a účinně'],
        ['<b>persuasive</b>', 'přesvědčit ostatní, aby něco udělali'], ['<b>numerate</b>', 'zvládat základní matematiku']
      ] },
      { t: 'versus', title: 'Pozitivní × negativní vlastnosti', cols: [
        { h: 'Pozitivní', items: ['responsible, hard-working, resourceful, self-confident', 'flexible, conscientious, motivated, friendly'] },
        { h: 'Negativní (řešení doplněno)', items: ['unreliable (nespolehlivý)', 'messy (nepořádný)', 'bossy (panovačný)', 'unpunctual (nedochvilný)'] }
      ], x: 'Pozitivní vlastnosti (spolehlivost, pracovitost, flexibilita) zaměstnavatel oceňuje; <i>unreliable</i> je opak <i>reliable</i>, <i>unpunctual</i> opak <i>punctual</i>. Slova <i>messy</i> a <i>bossy</i> mají záporný nádech sama o sobě: nepořádek a přehnané rozkazování. Učebnice doporučuje ověřit význam ve slovníku.' },
      { t: 'svg', title: 'Pracovní dovednosti a sloveso, které k nim patří', x: ANG.l4Skills(), cap: 'Rozdělení spojení z cvičení 6 (řešení doplněno).' },
      { t: 'ex', x: '<b>J. C. Penney</b>, zakladatel americké obchodní sítě, zval kandidáty na snídani v 6 ráno. Když si někdo osolil a opepřil jídlo dřív, než ochutnal, pohovor skončil: takový člověk se podle něj rozhoduje, aniž by měl všechny informace. Další otázky z učebnice: <i>Can you describe yourself in three words? What is your biggest weakness? How would your previous boss describe you? What’s the biggest career mistake you’ve made?</i>' }
    ] },
    { title: 'Communication strategies: Building on ideas (s. 42–43)', blocks: [
      { t: 'p', x: 'Kviz „plánovač × improvizátor“ nabízí typické věty: <i>Why don’t we make things up as we go along? · What we could do is change a couple of ingredients. · What if we use a plastic bag? · Let’s wait and see.</i> Článek <i>The skill of improvisation</i> vysvětluje, že improvizace není jen přirozený talent, ale dá se naučit; učí ji komici z improvizačního divadla.' },
      { t: 'versus', title: '„Yes, but…“ × „Yes…, and…“', cols: [
        { h: 'Yes, but… (odmítá)', items: ['Poslouchám nápad, hned hledám námitku.', '<i>Yes, but it will cost too much.</i>', 'Nápady se zastaví.'] },
        { h: 'Yes…, and… (rozvíjí)', items: ['„Yes“ = <i>I’ll go along with that</i>.', '„and“ = přidám další nápad.', '<i>Sounds great to me. And we could…</i>'] }
      ], x: 'Techniku „Yes…, and…“ používají komici i firmy. První část znamená přijmout nápad, druhá na něj navázat. Skupina tak rychle vyprodukuje víc nápadů, protože se nic nezavře. Podle učebnice je to dobrý způsob, jak budovat týmy a vést lidi k tomu, aby ve firmě podstupovali riziko.' },
      { t: 'svg', title: 'Návrh a navázání', x: ANG.l4Build(), cap: 'Návrhy vlevo, odpovědi vpravo.' },
      { t: 'ul', items: [
        '<b>Když se ti nápad líbí:</b> <i>Yes, I’ll go along with that, and… · Great idea! And we could… · Sounds good to me. And… · Fantastic! And what we could do is…</i>',
        '<b>Když se ti nelíbí:</b> <i>Yes, but…</i> – a tím nápad zastavíš.',
        '<b>Cvičení:</b> nejdřív konverzace „Yes, but…“ (odmítáš nápady partnera), potom „Yes…, and…“. Porovnej, v které padlo víc nápadů a kterou bylo snazší vést.'
      ] }
    ] },
    { title: 'Interaction: Training solutions (s. 44–45)', blocks: [
      { t: 'def', term: 'Reminder (Grammar reference s. 167 a 172)', x: 'U dovedností používáme <i>can / could</i>, ale <b>be able to</b> v základním tvaru: <i>I’d like to be able to give good presentations. I won’t be able to do a course on Saturdays.</i> Porovnáváme komparativem a superlativem: <i>This course will be more interesting than that one. It’s the best course for me.</i>' },
      { t: 'p', x: 'Firma a&k (Stockholm) vyrábí elektronické karty a bezpečnostní systémy. Školitel Oskar mluví se třemi zaměstnanci:' },
      { t: 'grid', head: ['Zaměstnanec', 'Potřeba školení'], rows: [
        ['<b>Karen Barnes</b> (26, výzkumná asistentka)', 'je stydlivá a chybí jí sebevědomí; potřebuje zlepšit komunikaci, na poradách je nervózní; šéfka jí doporučuje <i>Assertiveness</i>'],
        ['<b>Ricardo Sanchez</b> (30, technik IT)', 'samouk bez formálního vzdělání, práce ho nudí; zvažuje vysokou školu, ale má rád lyžování a golf'],
        ['<b>Nadia Hudak</b> (46, produktová manažerka)', 'mluví plynně švédsky, rusky, německy, potřebuje zlepšit prezentace v angličtině; firma ji posílá na 6 měsíců do Číny']
      ] },
      { t: 'grid', head: ['Kurz TTS', 'Obsah'], rows: [
        ['<b>Assertiveness</b>', 'komunikovat své potřeby, ale brát ohled na ostatní; budovat sebevědomí'],
        ['<b>Advocacy and Mediation</b>', 'umění přesvědčování; dvoudenní seminář'],
        ['<b>Presentations Across Cultures</b>', 'prezentace v mezikulturním kontextu: obsah, hlas, řeč těla'],
        ['<b>Ex-pat Relocation</b>', 'zmírnění kulturního šoku při přestěhování, zvyklosti a etiketa v práci'],
        ['<b>Playing Golf with NLP</b>', 'techniky NLP pro lepší výkon při golfu']
      ] },
      { t: 'tip', x: 'Kurzy trvají jeden nebo dva dny (pondělí–sobota): jednodenní stojí 349 € + DPH, dvoudenní 549 € + DPH za osobu.' },
      { t: 'ex', x: '<b>Rozhovor Karen × Oskar:</b> Karen chce <i>Assertiveness</i> i <i>Presentations Across Cultures</i>. Oskar vysvětlí, že firma letos zaplatí jen jeden kurz na zaměstnance (<i>The thing is… I’m afraid we won’t be able to pay for both</i>). Karen navrhne, že druhý zaplatí sama (<i>Maybe I could pay for the course myself?</i>) a argumentuje, že to prospěje i firmě. Oskar potvrdí domluvu: <i>we’ve agreed that you’ll sign up for both courses, and we’ll pay for one of them.</i> Rozhodnutí potvrdí HR ředitel. Oskarův e-mail pak Karen gratuluje k povýšení a potvrzuje, že firma platí jeden kurz, ačkoli navštíví dva.' },
      { t: 'ul', items: [
        '<b>Role „Persuading the boss“:</b> zaměstnanec vyjednává u školitele o víc kurzech. Zvaž motivaci, přínos pro firmu, cenu (zaměstnanec je ochoten zaplatit až 20 %), délku a čas (práce na směny).',
        '<b>Užitečné fráze:</b> <i>The thing is… · What I’m saying is… · One option is… · Another possibility is…</i>'
      ] }
    ] }
  ],
  mistakes: [
    'Říct <i>works</i> v množném čísle (<i>all those works</i>) – <i>work</i> je nepočitatelné.',
    'Reagovat na nápad „Yes, but…“, když ho chceš rozvíjet – použij „Yes…, and…“.',
    'Použít <i>can</i> ve všech tvarech: po <i>to</i>, <i>will</i> a <i>would like to</i> je správně <i>be able to</i>.',
    'Zaměnit <i>self-sufficient</i> (soběstačný) a <i>self-confident</i> (sebevědomý).',
    'Brát <i>numerate</i> jako „umí číst“ – znamená, že zvládá základní matematiku (čtenářská gramotnost je <i>literate</i>).'
  ],
  qa: [
    { q: 'Jaké měkké dovednosti hledají zaměstnavatelé?', a: 'Komunikaci, vycházení s lidmi (<i>interpersonal skills</i>), organizaci, vyhledávání informací, analytické myšlení a ochotu se dál učit.' },
    { q: 'Jaký je rozdíl mezi <i>job</i> a <i>work</i>?', a: '<i>Job</i> je zpravidla podstatné jméno (počitatelné: <i>jobs</i>); <i>work</i> může být sloveso nebo nepočitatelné podstatné jméno.' },
    { q: 'Co znamená „Yes…, and…“?', a: 'Přijmout nápad druhého (<i>I’ll go along with that</i>) a přidat k němu další (<i>and we could…</i>).' },
    { q: 'Jak reaguješ, když se ti nápad líbí?', a: '<i>Great idea! And we could… · Sounds good to me. And… · Fantastic! And what we could do is…</i>' },
    { q: 'Proč Karen nemohla mít oba kurzy zaplacené?', a: 'Firma letos snížila rozpočet na školení a platí jen jeden kurz na zaměstnance; druhý si Karen může zaplatit sama.' },
    { q: 'Co znamená <i>self-taught</i>?', a: 'Samouk – člověk, který se naučil sám bez formálního vzdělání.' }
  ]
});
