registerTopic({
  id: 'vyrokovy-pocet', order: 3, icon: '🧮', title: 'Výrokový počet a pravdivostní tabulky', src: 'podklady',
  summary: 'Výrok, logické spojky (∧ ∨ ¬ → ↔ ⊕ ↑ ↓), pravdivostní funkce a tabulky, vyhodnocování formulí, tautologie, kontradikce a splnitelnost – s vyřešenými příklady ze cvičení.',
  vocab: [
    { w: 'Výrok', x: 'Oznamovací věta, o které lze rozhodnout, zda je pravdivá, nebo nepravdivá („Prší.“). Otázka ani přání výrokem není.' },
    { w: 'Elementární výrok', x: 'Dále nedělitelný, značí se malými písmeny p, q, r …' },
    { w: 'Složený výrok (formule)', x: 'Elementární výroky spojené spojkami a závorkami, značí se velkými písmeny A, B …' },
    { w: 'Pravdivostní hodnota', x: '1 (pravda, true) a 0 (nepravda, false).' },
    { w: 'Ohodnocení', x: 'Přiřazení hodnoty 0/1 každé proměnné; formule o n proměnných má 2<sup>n</sup> ohodnocení.' }
  ],
  key: [
    '<b>Výrok</b> je věta, o které lze říct pravda / nepravda. „Kéž by pršelo!“ ani „Kolik je hodin?“ výroky nejsou.',
    '<b>Implikace a → b je nepravdivá jen tehdy, když a = 1 a b = 0</b>. <b>Nonekvivalence (⊕, XOR)</b> je 1, když se hodnoty liší.',
    '<b>Tautologie</b> = vždy 1, <b>kontradikce</b> = vždy 0, <b>splnitelná</b> = aspoň jednou 1.',
    'Tautologie je i splnitelná; kontradikce není splnitelná.',
    'Pořadí vyhodnocení: od vnitřních závorek ven; unární spojky (¬) mají přednost před binárními.'
  ],
  sections: [
    { title: 'Výrok a logické spojky', blocks: [
      { t: 'def', term: 'Výrokový počet', x: 'Studuje, jak pravdivostní hodnota složeného výroku závisí na způsobu spojení a na pravdivostních hodnotách jednotlivých výroků. Matematická logika neřeší, zda jsou předpoklady pravdivé, ale jen zda <b>závěr z předpokladů vyplývá</b>.' },
      { t: 'table', head: ['Spojka', 'Význam', 'Značka', 'Příklad'], rows: [
        ['negace', '„není pravda, že“', '¬', 'Neprší.'],
        ['konjunkce', '„a (zároveň)“', '∧', 'Prší a svítí slunce.'],
        ['disjunkce', '„nebo“', '∨', 'Prší nebo svítí slunce.'],
        ['implikace', '„jestliže …, pak“', '→', 'Jestliže prší, vezmu si deštník.'],
        ['ekvivalence', '„právě tehdy, když“', '↔', 'Prší právě tehdy, když si vezmu deštník.'],
        ['nonekvivalence', '„buď … nebo“ (vylučující, XOR)', '⊕', 'Buď prší, nebo svítí slunce.'],
        ['Shefferův operátor', '„není pravda, že … a …“ (NAND)', '↑', 'Neprší nebo nesvítí slunce.'],
        ['Piercova šipka', '„není pravda, že … nebo …“ (NOR)', '↓', 'Neprší a ani nesvítí slunce.']
      ] },
      { t: 'p', x: 'V Booleově algebře odpovídají: logický součet (+) = ∨ (OR), logický součin (·) = ∧ (AND), doplněk (¬) = negace (NON).' }
    ] },
    { title: 'Pravdivostní funkce', blocks: [
      { t: 'def', term: 'Pravdivostní funkce', x: 'f(p<sub>1</sub>, …, p<sub>n</sub>) je zobrazení {0,1}<sup>n</sup> → {0,1}: pro každou kombinaci n dvouhodnotových proměnných dává výstup 0 nebo 1. Každá formule generuje pravdivostní funkci; zapisuje se <b>pravdivostní tabulkou</b>.' },
      { t: 'grid', head: ['a', 'b', 'a ∧ b', 'a ∨ b', 'a → b', 'a ↔ b', 'a ⊕ b', 'a ↑ b', 'a ↓ b'], rows: [
        ['0', '0', '0', '0', '1', '1', '0', '1', '1'],
        ['0', '1', '0', '1', '1', '0', '1', '1', '0'],
        ['1', '0', '0', '1', '0', '0', '1', '1', '0'],
        ['1', '1', '1', '1', '1', '1', '0', '0', '0']
      ] },
      { t: 'p', x: 'Negace: ¬0 = 1, ¬1 = 0.' },
      { t: 'tip', x: '<b>Jak si pamatovat:</b> ∧ je 1 jen při 1,1 · ∨ je 0 jen při 0,0 · → je 0 jen při 1,0 · ↔ je 1, když jsou hodnoty stejné · ⊕ je 1, když se liší · ↑ je opak ∧ · ↓ je opak ∨.' },
      { t: 'warn', x: 'Implikace <b>není symetrická</b>: a → b ≠ b → a. Z nepravdy (a = 0) plyne cokoli, implikace je pak pravdivá.' }
    ] },
    { title: 'Tautologie, kontradikce, splnitelnost', blocks: [
      { t: 'versus', cols: [
        { h: 'Tautologie (T, 1)', items: ['pravdivá pro <b>všechna</b> ohodnocení', 'např. p ∨ ¬p (zákon vyloučeného třetího)'] },
        { h: 'Kontradikce (F, 0)', items: ['nepravdivá pro <b>všechna</b> ohodnocení', 'např. p ∧ ¬p'] },
        { h: 'Splnitelná', items: ['aspoň <b>jedno</b> ohodnocení dává 1', 'tautologie je splnitelná, kontradikce ne'] }
      ] },
      { t: 'svg', title: 'Jak spolu souvisejí druhy formulí', x: UPP.setsDiagram() },
      { t: 'flow', title: 'Postup řešení', steps: [
        { h: 'Vypiš ohodnocení', x: '2<sup>n</sup> řádků' },
        { h: 'Vyhodnocuj zevnitř', x: 'vnitřní závorky → vnější; ¬ před binárními' },
        { h: 'Zapiš výsledný sloupec', x: 'jen 1 → tautologie, jen 0 → kontradikce, jinak splnitelná' }
      ] },
      { t: 'ex', x: '<b>Příklad:</b> (p → q) → p. Pro (p,q) = 00: (1) → 0 = 0; 01: (1) → 0 = 0; 10: (0) → 1 = 1; 11: (1) → 1 = 1. Výsledek <b>0011</b> → <b>splnitelná</b> (není tautologie ani kontradikce).' }
    ] },
    { title: 'Řešené příklady ze cvičení 2', blocks: [
      { t: 'p', x: 'Pořadí ohodnocení: dvojice (p,q) = 00, 01, 10, 11; trojice (p,q,r) = 000, 001, …, 111. Výsledný sloupec je uveden za šipkou.' },
      { t: 'grid', head: ['Formule', 'Výsledný sloupec', 'Závěr'], rows: [
        ['a) (p → q) → p', '0011', '<b>splnitelná</b>'],
        ['b) ¬¬¬p → ¬p', '11', '<b>tautologie</b> (¬¬¬p ≡ ¬p)'],
        ['c) (p ∨ q) → (p ↓ q)', '1000', '<b>splnitelná</b>'],
        ['d) ((p ⊕ q) ∧ ¬r) ↑ (p ∧ (q ∨ r))', '11111111', '<b>tautologie</b>'],
        ['e) (p → q) ⊕ (p ∨ q)', '1010', '<b>splnitelná</b>'],
        ['f) ((p → q) ↔ (¬p ∧ q)) ∨ ¬q', '1110', '<b>splnitelná</b>'],
        ['g) (p ⊕ (p ∨ q)) → q', '1111', '<b>tautologie</b>'],
        ['h) ((p ↓ r) ∨ (q ↑ r)) → (p ⊕ q)', '00111101', '<b>splnitelná</b>']
      ] },
      { t: 'tip', x: 'Na zkoušce ukaž mezivýsledky v tabulce (sloupec pro každou podformuli) a očísluj pořadí vyhodnocování – hodnotí se postup.' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>inkluzivní</b> „nebo“ (∨) a <b>vylučovací</b> „buď – nebo“ (⊕).',
    'Považovat implikaci za symetrickou nebo ji vyhodnotit jako 0 při a = 0.',
    'Vyhodnocovat zleva doprava bez ohledu na závorky; ¬ se váže nejtěsněji.',
    'Říct, že tautologie není splnitelná – tautologie splnitelná <b>je</b>.',
    'Zapomenout na řádky: pro n proměnných musí být 2<sup>n</sup> řádků.'
  ],
  qa: [
    { q: 'Co je výrok? Uveďte příklad a protipříklad.', a: 'Oznamovací věta, o které lze rozhodnout, zda je pravdivá. Příklad: „Číslo 8 je liché.“ (nepravdivý výrok). Výrokem není „Kéž by pršelo!“ ani „Kolik je hodin?“.' },
    { q: 'Kdy je implikace a → b nepravdivá?', a: 'Pouze pro a = 1 a b = 0.' },
    { q: 'Jak se liší disjunkce (∨) a nonekvivalence (⊕)?', a: 'Disjunkce je pravdivá i když platí oba výroky (1 ∨ 1 = 1); nonekvivalence je pravdivá, jen když se hodnoty liší (1 ⊕ 1 = 0).' },
    { q: 'Definujte tautologii, kontradikci a splnitelnou formuli.', a: 'Tautologie: vždy 1. Kontradikce: vždy 0. Splnitelná: existuje ohodnocení, pro které je 1 (tautologie je tedy splnitelná).' },
    { q: 'Jak se vyhodnocuje logická formule?', a: 'Sestaví se pravdivostní tabulka; pořadí vyhodnocení určují závorky (od vnitřních k vnějším) a priorita spojek – unární (¬) má vyšší prioritu než binární.' },
    { q: 'Je formule (p → q) → p tautologie, kontradikce, nebo splnitelná?', a: 'Pravdivostní funkce 0011 (pro 00, 01, 10, 11) → splnitelná, není tautologie ani kontradikce.' },
    { q: 'Je ((p ⊕ q) ∧ ¬r) ↑ (p ∧ (q ∨ r)) tautologie?', a: 'Ano – výsledný sloupec je samé 1: konjunkce obou stran nikdy nenastane najednou, proto je NAND vždy pravdivý.' },
    { q: 'Co je pravdivostní funkce?', a: 'Zobrazení {0,1}<sup>n</sup> → {0,1}, které každé kombinaci hodnot n proměnných přiřadí 0 nebo 1; zapisuje se pravdivostní tabulkou.' }
  ]
});
