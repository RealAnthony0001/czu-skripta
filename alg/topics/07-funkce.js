registerTopic({
  id: 'funkce', order: 7, icon: '🧩', title: 'Funkce a volání funkcí', src: 'podklady', lec: [5], where: 'Přednáška 5 – Funkce (poznámky z tabule)',
  summary: 'Rozklad úlohy na podprogramy (příklad Dovolená), pořadí volání a zásobník návratových adres a trasování programu s funkcemi FA a FB včetně vnořeného volání FA(FB(3)).',
  vocab: [
    { w: 'funkce (podprogram)', x: 'pojmenovaná část algoritmu, kterou lze zavolat; může dostat parametr a vrátit hodnotu' },
    { w: 'parametr', x: 'vstupní hodnota funkce (x ve FA(x))' },
    { w: 'vrať', x: 'ukončí funkci a předá výsledek tam, odkud byla zavolána' },
    { w: 'zásobník volání', x: 'seznam rozběhnutých funkcí; nahoře je ta, která právě běží; po návratu se odebere' },
    { w: 'návratová adresa', x: 'místo, kde se po skončení funkce pokračuje' },
    { w: 'dekompozice', x: 'rozdělení úlohy na menší podúlohy (podprogramy)' }
  ],
  key: [
    'Hlavní program volá funkce, funkce mohou volat další funkce – vzniká <b>strom volání</b>.',
    'Při volání se na zásobník uloží <b>návratová adresa</b> a parametr; po „vrať“ se odebere a pokračuje se tam, odkud se volalo.',
    'Vnořené volání <span class="mo">FA(FB(3))</span> se vyhodnocuje <b>zevnitř</b>: nejdřív FB(3), pak FA s jeho výsledkem.',
    'Výstup příkladu z přednášky: <b>6, 1</b>.'
  ],
  sections: [
    { title: 'Dekompozice: plánování dovolené', blocks: [
      { t: 'svg', title: 'Strom volání podprogramů', x: ALG.dovolena(), cap: 'Hlavní program volá Dovolenou, ta postupně Kam, Jak a Odjezd; Kam volá Termín, Destinaci a Platbu. Červená čísla jsou pořadí, v jakém se podprogramy na tabuli volaly. Každý obdélník je samostatný podprogram, který se dá navrhnout zvlášť.' },
      { t: 'p', x: 'Na tabuli se vedle stromu zapisoval <b>zásobník</b>: při každém zavolání se připsalo číslo místa, kam se vrátit, a po dokončení podprogramu se přeškrtlo (s mezivýsledky jako termín 1. 11.–3. 11., destinace Island, platba 492 EUR).' },
      { t: 'tip', x: 'Proč funkce (doplněno): stejný podprogram (Platba) lze volat z více míst, každou část lze navrhnout a otestovat zvlášť a hlavní program zůstane krátký a čitelný.' }
    ] },
    { title: 'Funkce FA a FB – trasování', blocks: [
      { t: 'widget', name: 'strukt', title: 'Program s funkcemi', p: 'p5', list: ['p5', 'r5'],
        fig: ALG.prog('p5'), figcap: 'Hlavní program dvakrát něco vypíše. FA(x) sečte x + (x−1) + … + 1 (cyklus, dokud x &gt; 0). FB(x) pro x &lt; 4 vrátí FA(x − 2), jinak 5 – zde je „+“ vlevo jako na tabuli.',
        how: ['Program „P5“ je příklad z přednášky, „Ř5“ úloha ze cvičení s funkcí F.', 'Krok = jeden blok hlavního programu; co se při něm spočítalo uvnitř funkcí, ukazuje modrý rámeček vpravo (např. FA(3) = 6).', 'Pořadí v rámečku odpovídá pořadí volání – u FA(FB(3)) je nejdřív vidět FA(1) a FB(3), teprve pak vnější FA(1).'],
        sol: 'piš FA(3): 3 + 2 + 1 = <b>6</b>. piš FA(FB(3)): FB(3) → 3 &lt; 4 → FA(1) = 1, takže FB(3) = 1 a vnější FA(1) = <b>1</b>. Výstup <b>6, 1</b>.' },
      { t: 'grid', head: ['krok FA(3)', 'x', 'vysledek'], rows: [['start', '3', '0'], ['1. průchod', '2', '3'], ['2. průchod', '1', '5'], ['3. průchod', '0', '6'], ['x &gt; 0 neplatí', '0', '6 → vrať 6']] },
      { t: 'svg', title: 'Zásobník volání', x: ALG.zasobnik(), cap: 'Každý sloupec je stav zásobníku v jednom okamžiku; žlutý rámec nahoře právě běží. Při vnořeném volání leží FB(3) na hlavním programu a FA(1) na FB(3). Po každém „vrať“ se horní rámec odebere a výsledek se předá rámci pod ním.' }
    ] }
  ],
  mistakes: [
    'Vyhodnotit FA(FB(3)) jako FA(3) – nejdřív se musí spočítat vnitřní FB(3).',
    'Zapomenout, že po „vrať“ funkce končí – další příkazy funkce se už neprovedou.',
    'Zaměnit parametr a návratovou hodnotu (FB dostane 3, ale vrací 1).',
    'Myslet si, že proměnná x uvnitř FA mění x hlavního programu – parametr je kopie hodnoty (FA(3) nezmění trojku v hlavním programu).'
  ],
  qa: [
    { q: 'Co vrátí FA(3), když FA sečte x + (x−1) + … + 1?', a: '6.' },
    { q: 'Co vrátí FB(3) (x &lt; 4 → FA(x−2), jinak 5)?', a: 'FA(1) = 1.' },
    { q: 'Co vypíše piš FA(FB(3))?', a: '1 – FB(3) = 1, FA(1) = 1.' },
    { q: 'Co vrátí FB(7)?', a: '5 (podmínka 7 &lt; 4 neplatí).' },
    { q: 'V jakém pořadí se vyhodnocuje vnořené volání?', a: 'Zevnitř ven – nejdřív vnitřní funkce, její výsledek je parametrem vnější.' },
    { q: 'K čemu slouží zásobník volání?', a: 'Pamatuje si rozběhnuté funkce a návratové adresy; po skončení funkce se odebere horní záznam a pokračuje se v místě volání.' },
    { q: 'Co je dekompozice?', a: 'Rozdělení úlohy na podúlohy (podprogramy), např. Dovolená → Kam, Jak, Odjezd.' }
  ]
});
