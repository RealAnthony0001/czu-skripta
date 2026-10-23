registerTopic({
  id: 'o-predmetu', order: 0, icon: 'ℹ️', title: 'O předmětu, zápočtu a zkoušce', src: 'podklady', where: 'Zápočty + Zkoušky + Literatura (Moodle)',
  summary: 'Jak se získá zápočet (dva testy v testovacím centru, 42 z 76 bodů), jak vypadá písemná zkouška (6 úloh, 60 bodů, 75 minut) a z čeho se učit.',
  vocab: [
    { w: 'testovací centrum', x: 'místo, kde se píší zápočtové testy; termín si student musí sám zarezervovat' },
    { w: 'dodatečný test', x: 'třetí test ve zkouškovém období pro ty, kdo na zápočet během semestru nenabrali body' }
  ],
  key: [
    '<b>Zápočet:</b> 2 testy po 38 bodech, dohromady aspoň <b>42 z 76</b>; každý test má 2 pokusy, počítá se <b>poslední absolvovaný</b>.',
    '<b>Zkouška:</b> písemná, <b>75 minut</b>, 6 úloh po 10 bodech = <b>60 bodů</b>, bez pomůcek (jen psací potřeby a čisté papíry).',
    '<b>Známky:</b> 0–30 nevyhověl · 31–40 dobře · 41–50 velmi dobře · 51–60 výborně.',
    'Zápočty z předchozích let se <b>neuznávají</b>.'
  ],
  sections: [
    { title: 'Zápočet', blocks: [
      { t: 'nums', title: 'Zápočet v číslech', items: [
        { n: '2', u: 'testy', x: 'výroková logika + teorie množin; teorie grafů – oba v testovacím centru' },
        { n: '38', u: 'bodů za test', x: 'dohromady 76 bodů' },
        { n: '42', u: 'bodů k zápočtu', x: 'součet obou testů (z 76)' },
        { n: '2', u: 'pokusy na test', x: 'počítá se vždy skóre z <b>posledního</b> absolvovaného pokusu' }
      ] },
      { t: 'versus', title: 'Prezenční × kombinovaní studenti', cols: [
        { h: 'Prezenční', items: [
          'Docházka: 5 ze 6 cvičení (při odpadnutí cvičení kvůli svátku 4 z 5); omluvu je nutné doložit.',
          'Docházka <b>není povinná</b> ve 2. a 3. ročníku; pro opakující studenty v 1. ročníku povinná je.',
          'Test z výrokové logiky a teorie množin: předběžně 9.–22. 11.',
          'Test z teorie grafů: předběžně 3.–16. 12.'
        ] },
        { h: 'Kombinovaní', items: [
          'Žádná docházka – podmínkou jsou jen testy.',
          'Oba testy (výroková logika + množiny; grafy) v okně předběžně 30. 10.–13. 12.',
          'Body a pokusy stejné jako u prezenčních: 42 z 76, dva pokusy na test.'
        ] }
      ], x: 'Obě formy studia mají stejnou laťku – 42 bodů ze 76 ze dvou testů. Rozdíl je jen v tom, že prezenční studenti (zejména v prvním ročníku) navíc musí chodit na cvičení a testy mají v užších termínech, kdežto kombinovaní si oba testy rozloží do jednoho dlouhého okna.' },
      { t: 'flow', title: 'Když zápočet nevyjde během semestru', steps: [
        { h: 'Dodatečný test', x: 've zkouškovém období (předběžně 4.–15. 1.), opět za 38 bodů a se dvěma pokusy' },
        { h: 'Obsah', x: 'konečné automaty a hlavně neprocvičená témata z výrokové logiky, množin a grafů' },
        { h: 'Nový limit', x: 'ze <b>všech tří</b> testů dohromady aspoň <b>54 bodů</b> (ze 114)' },
        { h: 'Zápis', x: 'zápočty ze zkouškového se zapisují do systému jednou týdně' }
      ] },
      { t: 'tip', x: 'Zápis se v podkladech liší: u prezenčních studentů je limit „54 z 114“, u kombinovaných jen „aspoň 54 bodů“. Je to stejný limit – tři testy po 38 bodech dávají 114 bodů celkem.' }
    ] },
    { title: 'Zkouška', blocks: [
      { t: 'ul', items: [
        'Přihlásit se může jen student, který má <b>zapsaný zápočet</b>. V zimním období jsou vypsány aspoň 4 termíny, jeden v letním období a jeden na přelomu srpna a září 2027; <b>další termíny se nevypisují</b>.',
        'Kdo se k přihlášenému termínu nedostaví, má „nevyhověl“. Při vstupu průkaz studenta + doklad totožnosti s fotografií (fyzický, ne v telefonu).',
        'Zkouška je písemná, vyučující může při pochybnostech přezkoušet ústně.',
        'Doporučuje se přinést si vytištěné záhlaví testu (je v sekci Úvod na Moodle).'
      ] },
      { t: 'grid', head: ['Okruh', 'Počet úloh'], rows: [
        ['Výroková logika', '1–2'],
        ['Teorie množin', '1'],
        ['Teorie grafů', '2–3'],
        ['Teorie konečných automatů', '1–2']
      ] },
      { t: 'ul', items: [
        'Celkem <b>6 úloh</b>, každá za 10 bodů = 60 bodů. U některých úloh je teoretická otázka; dohromady jsou za ně <b>6 bodů</b>.',
        'Hodnotí se hlavně <b>správný postup a mezivýsledky</b>, až potom výsledek. Cílem je přesvědčit zkoušejícího, že postupu rozumíš.',
        'Ke každé úloze jen <b>jedno řešení</b>; další škrtni. Při více postupech si zkoušející vybere sám, který ohodnotí.',
        'Chybně opsané zadání = nejvýše polovina bodů úlohy.',
        'Odpoledne v den zkoušky nahlédnutí do opravené práce; známka v systému do tří pracovních dní.'
      ] },
      { t: 'tip', x: 'Při výpočtech piš každý krok (tabulku, mezivýsledky, použité zákony). Správný konečný výsledek bez postupu nemusí získat plný počet bodů.' }
    ] },
    { title: 'Literatura a zdroje', blocks: [
      { t: 'ul', items: [
        'Přednášky a cvičení, Moodle (<i>moodle.czu.cz</i>).',
        'Skripta <i>Diskrétní matematika pro informatiky</i> (sekretariát Katedry matematiky a fyziky nebo e-shop ČZU).',
        'Internet (Wikipedie). Kontakt: horaj@tf.czu.cz.',
        'Tyto stránky vycházejí z přednášek J. Hory a J. Čermáka a z cvičení 1–6 s doplňky (logika, množiny, neorientované a orientované grafy, konečné automaty).'
      ] },
      { t: 'grid', head: ['Přednáška', 'Látka', 'Cvičení'], rows: [
        ['P1', 'Výroková logika – výroky, spojky, tabulky, ekvivalence a důsledek', '1'],
        ['P2', 'Logické zákony, normální tvary, negace', '2'],
        ['P3', 'Minimalizace – Quine–McCluskey', '2'],
        ['P4', 'Množiny, Vennovy diagramy, číselné obory', '3'],
        ['P5', 'Relace a zobrazení, mohutnost', '3'],
        ['P6', 'Neorientované grafy, stromy a kostry', '4'],
        ['P7', 'Ohodnocené grafy – minimální kostra, Dijkstra', '4'],
        ['P8', 'Orientované grafy, kořenové stromy, notace výrazů', '5'],
        ['P9', 'Rovinné grafy a barvení', '4 (doplněk)'],
        ['P10', 'Sítě, toky a projekty', '5'],
        ['P11', 'Konečné automaty a regulární jazyky', '6'],
        ['P12', 'Minimalizace automatů', '6']
      ] },
      { t: 'warn', x: 'Podklady přednášky nečíslují. Čísla P1–P12 jsou <b>odvozená z pořadí látky</b> (návaznost handoutů a slajdů, číslování cvičení 1–6 a termíny testů: logika + množiny v listopadu, grafy v prosinci, automaty až v dodatečném testu). Pokud se rozvrh liší, oprav pole <code>lec</code> v tématech.' }
    ] }
  ],
  mistakes: [
    'Spoléhat na zápočet z minulých let – neuznává se.',
    'Zapomenout si rezervovat termín v testovacím centru.',
    'Napsat ke zkouškové úloze dvě různá řešení – zkoušející si vybere, které ohodnotí.',
    'Chybně opsat zadání – maximálně polovina bodů.'
  ],
  qa: [
    { q: 'Kolik bodů je třeba k zápočtu a z kolika?', a: '<b>42 z 76</b> bodů (dva testy po 38).' },
    { q: 'Který pokus se počítá, když test píšeš dvakrát?', a: 'Vždy skóre z <b>posledního absolvovaného</b> pokusu (ne to lepší).' },
    { q: 'Kolik úloh a bodů má zkouška a jak dlouho trvá?', a: '6 úloh po 10 bodech = 60 bodů, 75 minut.' },
    { q: 'Hranice známek u zkoušky?', a: '0–30 nevyhověl, 31–40 dobře, 41–50 velmi dobře, 51–60 výborně.' },
    { q: 'Co když na zápočet během semestru nenabereš body?', a: 'Dodatečný test ve zkouškovém období (konečné automaty + neprocvičená témata); ze všech tří testů dohromady aspoň 54 bodů ze 114.' }
  ]
});
