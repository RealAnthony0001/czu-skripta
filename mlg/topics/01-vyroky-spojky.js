registerTopic({
  id: 'vyroky-spojky', order: 1, icon: '🧩', title: 'Výroky, spojky a výrokové formule', src: 'podklady', lec: [1], where: 'Přednáška Výroková logika (Čermák, Hora) + Cvičení 1',
  summary: 'Co je výrok, pět logických spojek (¬, ∧, ∨, ⇒, ⇔), jejich pravdivostní hodnoty a rekurzivní definice výrokové formule.',
  vocab: [
    { w: 'elementární výrok', x: 'oznamovací věta, o níž má smysl rozhodovat, zda je pravdivá, a kterou chápeme jako nedělitelný celek' },
    { w: 'výroková proměnná', x: 'formální symbol (A, B, C…) zastupující libovolný elementární výrok' },
    { w: 'výroková konstanta', x: 'symbol pro konkrétní hodnotu: 1 = pravda, 0 = nepravda' },
    { w: 'logická spojka', x: 'operace, která z výroků skládá složitější: negace, konjunkce, disjunkce, implikace, ekvivalence' },
    { w: 'formule', x: 'zkráceně výroková formule – správně sestavený výraz z proměnných, konstant a spojek' },
    { w: 'literál', x: 'výroková proměnná nebo její negace (A, ¬A)' }
  ],
  key: [
    'Výrok je <b>pravdivý (1)</b> nebo <b>nepravdivý (0)</b>; pravdivost nemusíme umět v dané chvíli určit („Na Marsu kdysi existoval život“).',
    '<b>¬A</b> „není pravda, že A“ · <b>A∧B</b> „A a současně B“ · <b>A∨B</b> „A nebo B“ · <b>A⇒B</b> „jestliže A, pak B“ · <b>A⇔B</b> „A právě tehdy, když B“.',
    '<b>A⇒B</b> je nepravdivá <b>jediným</b> způsobem: A = 1, B = 0. <b>Z nepravdy plyne cokoli.</b>',
    'Negace se zapisuje <b>¬A</b>, <b>A′</b> nebo A s čárou – to je totéž.'
  ],
  sections: [
    { title: 'Výrok a jeho pravdivost', blocks: [
      { t: 'def', term: 'Elementární výrok', x: 'oznamovací věta, o které má smysl rozhodovat, jestli je pravdivá, a kterou chápeme jako nedělitelný celek.' },
      { t: 'versus', title: 'Elementární výrok × ne-výrok', cols: [
        { h: 'Je elementární výrok', items: ['Mám dnes narozeniny.', '3³ = 9.', 'Ve třídě je přesně 30 studentů.', 'Na Marsu kdysi existoval život.'] },
        { h: 'Není elementární výrok', items: ['Jdi pryč! (rozkaz)', 'x² − 2 ≥ 3x + 2 (závisí na x, nelze rozhodnout)', 'Půjdeme do kina? (otázka)', '„Jestli budou mít švestky, uvařím knedlíky“ (složený výrok, ne elementární)'] }
      ], x: 'Výrok musí jasně tvrdit něco, co buď platí, nebo ne. Rozkaz ani otázka nic netvrdí, takže se jim pravdivost přiřadit nedá. Výraz s volnou proměnnou x je pravdivý jednou ano, jednou ne – záleží, co za x dosadíš – a proto také není výrokem. A věta „jestli budou švestky, uvařím knedlíky“ sice výrok je, ale už složený z dvou jednodušších, ne elementární.' },
      { t: 'p', x: 'Výroky značíme velkými písmeny, buď ze začátku abecedy (A, B, C), nebo tak, aby písmeno vystihovalo výrok. Hodnotu <b>pravda</b> značíme <b>1</b>, <b>nepravda</b> <b>0</b>.' }
    ] },
    { title: 'Logické spojky', blocks: [
      { t: 'p', x: 'Spojky z výroků skládají složitější výroky. Pravdivost složeného výroku definujeme tak, aby odpovídala významu spojek v běžné řeči.' },
      { t: 'grid', head: ['Značka', 'Název', 'Čteme', 'Příklad z přednášky'], rows: [
        ['¬A, A′', 'negace', 'není pravda, že A', 'Pepův králík nemá rád mrkev.'],
        ['A ∧ B', 'konjunkce', 'A a současně B', 'Hrabáč se živí termity i mravenci.'],
        ['A ∨ B', 'disjunkce', 'A nebo B', 'Nový zaměstnanec musí mít vysokou školu nebo praxi.'],
        ['A ⇒ B', 'implikace', 'jestliže A, pak B', 'Jestliže budou mít švestky, uvařím švestkové knedlíky.'],
        ['A ⇔ B', 'ekvivalence', 'A právě tehdy, když B', 'Alice miluje Boba právě tehdy, když Bob miluje Alici.']
      ] },
      { t: 'grid', head: ['A', 'B', '¬A', 'A∧B', 'A∨B', 'A⇒B', 'A⇔B'], rows: [
        ['1', '1', '0', '1', '1', '1', '1'],
        ['1', '0', '0', '0', '1', '0', '0'],
        ['0', '1', '1', '0', '1', '1', '0'],
        ['0', '0', '1', '0', '0', '1', '1']
      ] },
      { t: 'ul', items: [
        '<b>Konjunkce</b> je pravdivá, jen když jsou pravdivé <b>obě</b> části.',
        '<b>Disjunkce</b> je nepravdivá, jen když jsou nepravdivé <b>obě</b> části (nevylučující „nebo“ – platí i pro oboje najednou).',
        '<b>Implikace</b> je nepravdivá, jen když z pravdy vyplývá nepravda (1 ⇒ 0).',
        '<b>Ekvivalence</b> je pravdivá, když mají obě strany <b>stejnou</b> hodnotu.'
      ] },
      { t: 'warn', x: 'Pozor na implikaci: <b>z nepravdy plyne cokoli</b>. Je-li předpoklad A nepravdivý (A = 0), je A⇒B pravdivá bez ohledu na B. „Když Měsíc je ze sýra, tak mám 4 ruce“ je tedy pravdivý výrok.' },
      { t: 'tip', x: 'Tabulku si zapamatuj po sloupcích: <b>∧</b> má jedinou jedničku (1,1), <b>∨</b> jedinou nulu (0,0), <b>⇒</b> jedinou nulu (1,0), <b>⇔</b> jedničky tam, kde jsou hodnoty stejné.' }
    ] },
    { title: 'Výrokové formule', blocks: [
      { t: 'def', term: 'Výroková formule (rekurzivně)', x: 'každá výroková proměnná i každá výroková konstanta je formule; jsou-li E a F formule, jsou formulemi také (¬E), (E∧F), (E∨F), (E⇒F), (E⇔F); jiné formule nejsou.' },
      { t: 'p', x: 'Místo „výroková formule“ říkáme jen <b>formule</b>. „Jiné formule nejsou“ znamená, že zápis, který nejde takto poskládat (chybí operand, špatný symbol), formule není.' },
      { t: 'grid', head: ['Zápis', 'Formule?', 'Proč'], rows: [
        ['A, A′, A′′', 'ano', 'proměnná a její (i dvojitá) negace'],
        ['′A', 'ne', 'čárka (negace) stojí na špatné straně'],
        ['A ⇒ B', 'ano', 'implikace dvou proměnných'],
        ['A ⇐ B', 'ne', 'symbol ⇐ mezi spojky nepatří'],
        ['A ∧ ∨ B', 'ne', 'dvě spojky za sebou, chybí operand'],
        ['(A ∧ B) ∨ A', 'ano', 'disjunkce dvou formulí'],
        ['(A ∧ B)′ A', 'ne', 'za negací následuje další proměnná bez spojky'],
        ['A ⇒ B′', 'ano', 'negace se týká jen proměnné B'],
        ['A ∨ B ∧ C', 'ne', 'bez závorek není jasné, co se čím spojuje'],
        ['(A ⇒ B)′', 'ano', 'negace celé implikace']
      ] },
      { t: 'svg', title: 'Stavba formule jako strom', x: MLG.formuleStrom(), cap: 'Hlavní spojka je v kořeni; hodnotu formule dostaneš tak, že spočítáš spojky od listů nahoru.' },
      { t: 'tip', x: 'Konjunkce i disjunkce jsou asociativní, proto <b>A∧B∧C</b> a <b>A∨B∨C</b> zapisujeme bez závorek. Smíšený zápis A∨B∧C ale bez závorek nepíšeme.' }
    ] }
  ],
  mistakes: [
    'Zaměnit implikaci s ekvivalencí – A⇒B neplatí obráceně, B⇒A je jiná formule.',
    'Myslet si, že implikace s nepravdivým předpokladem je nepravdivá. Je pravdivá.',
    'Brát „nebo“ jako vylučovací – v logice platí A∨B i pro A = B = 1.',
    'Zapsat A∨B∧C bez závorek a čekat, že priorita je jasná.',
    'Označit za výrok rozkaz, otázku nebo výraz s neurčenou proměnnou.'
  ],
  qa: [
    { q: 'Kdy je implikace A⇒B nepravdivá?', a: 'Jedině když je <b>A pravdivé a B nepravdivé</b> (A = 1, B = 0).' },
    { q: 'Kdy je ekvivalence A⇔B pravdivá?', a: 'Když mají A a B <b>stejnou pravdivostní hodnotu</b> (obě 1 nebo obě 0).' },
    { q: 'Je „Půjdeme do kina?“ výrok?', a: 'Ne – otázka nic netvrdí, nelze jí přiřadit pravdivost.' },
    { q: 'Co je literál?', a: 'Výroková proměnná nebo její negace (např. A, ¬A).' },
    { q: 'Jak se čte A⇔B?', a: '„A právě tehdy, když B.“' }
  ]
});
