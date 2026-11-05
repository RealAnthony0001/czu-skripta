registerTopic({
  id: 'algoritmus', order: 1, icon: '🧠', title: 'Algoritmus – vlastnosti a stavební kameny', src: 'podklady', lec: [1], where: 'Přednáška 1 – základy algoritmizace',
  summary: 'Pět vlastností, které musí mít každý algoritmus, tři stavební kameny (sekvence, selekce, iterace), proměnné jako vnitřní stav a typy algoritmických úloh.',
  vocab: [
    { w: 'algoritmus', x: 'přesný postup řešení úlohy složený z elementárních kroků' },
    { w: 'sekvence', x: 'kroky jdou za sebou, každý se provede jednou' },
    { w: 'selekce', x: 'větvení – podle podmínky se provede jedna z větví (když … pak … jinak)' },
    { w: 'iterace', x: 'opakování (cyklus) – část algoritmu se opakuje, dokud platí podmínka' },
    { w: 'proměnná', x: 'pojmenované místo pro data v průběhu výpočtu; proměnné tvoří vnitřní stav algoritmu' }
  ],
  key: [
    'Vlastnosti: <b>konečnost, zobecnitelnost, determinovanost, elementárnost, resultativnost</b>.',
    'Stavební kameny: <b>sekvence, selekce, iterace</b> – z nich se složí každý algoritmus.',
    'Proměnné <b>uchovávají data</b> během výpočtu a <b>zachycují vnitřní stav</b> algoritmu.',
    'Úlohy: řadicí, vyhledávací, optimalizační, podpora lidské činnosti.'
  ],
  sections: [
    { title: 'Vlastnosti algoritmů', blocks: [
      { t: 'svg', title: 'Pět vlastností algoritmu', x: ALG.vlastnosti(), cap: 'Každý kruh je jedna povinná vlastnost: tučně název, pod ním stručně, co znamená. Postup, kterému kterákoli z nich chybí, není algoritmus.' },
      { t: 'def', term: 'Konečnost', x: 'Algoritmus musí vždy skončit.', items: ['Počet kroků do ukončení není pevný a nemusí být předem známý.', 'Je ale vždy konečný.'] },
      { t: 'def', term: 'Zobecnitelnost', x: 'Algoritmus neřeší úlohu pro jeden konkrétní vstup, ale celou skupinu úloh.', items: ['Např. algoritmus pro násobení čísel nemůže fungovat jen pro čísla 3 a 5.', 'Řešená oblast je dána zadáním algoritmu.'] },
      { t: 'def', term: 'Determinovanost', x: 'V každém kroku se dá podle vnitřního stavu algoritmu rozhodnout, jaký krok bude následovat.', items: ['Následuje vždy <b>právě jeden</b> krok.'] },
      { t: 'def', term: 'Elementárnost', x: 'Algoritmus se skládá z elementárních (nedělitelných) kroků.', items: ['Tyto elementární prvky tvoří <b>jazyk algoritmu</b>.', 'Příklady: <span class="mo">piš "Ahoj"</span>, <span class="mo">Udělej_krok</span>, <span class="mo">Otoč_se</span>.'] },
      { t: 'def', term: 'Resultativnost', x: 'Každý algoritmus vrací výsledek.', items: ['Výsledek = zobrazení na monitoru, uložení do souboru nebo jiné předání uživateli či jinému algoritmu.'] },
      { t: 'ex', x: 'Návod „míchej, dokud to není dobré“ porušuje determinovanost i konečnost – „dobré“ není jednoznačná podmínka a nic nezaručuje, že míchání skončí.' }
    ] },
    { title: 'Stavební kameny a proměnné', blocks: [
      { t: 'svg', title: 'Sekvence, selekce, iterace ve vývojovém diagramu', x: ALG.kameny(), cap: 'Vlevo sekvence (kroky za sebou), uprostřed selekce (kosočtverec rozdělí výpočet na větev „+“ a „−“, které se pak spojí), vpravo iterace (dokud podmínka platí, provádí se příkaz a šipka se vrací zpět na podmínku; při „−“ cyklus končí).' },
      { t: 'ul', items: [
        '<b>Sekvence</b> – příkazy za sebou.',
        '<b>Selekce</b> – větvení podle podmínky (když, když-jinak).',
        '<b>Iterace</b> – opakování (cykly while, do-while, for).'
      ] },
      { t: 'def', term: 'Proměnné', x: 'Slouží k uložení dat v průběhu provádění algoritmu.', items: ['Zachycují <b>vnitřní stav</b> algoritmu.', 'Podle vnitřního stavu se rozhoduje, jaký krok bude následovat (determinovanost).'] }
    ] },
    { title: 'Algoritmické úlohy', blocks: [
      { t: 'icons', title: 'Typy úloh z přednášky', items: [
        { i: '🔢', h: 'Řadicí', x: 'seřadit prvky podle velikosti (např. tři čísla od nejmenšího)' },
        { i: '🔍', h: 'Vyhledávací', x: 'najít prvek (nejmenší číslo, hledaný prvek v řadě)' },
        { i: '📈', h: 'Optimalizační', x: 'najít nejlepší řešení (nejméně mincí a bankovek)' },
        { i: '🧑‍🍳', h: 'Podpora lidské činnosti', x: 'postupy každodenních činností' }
      ] }
    ] }
  ],
  mistakes: [
    'Splést determinovanost s konečností: determinovanost = jednoznačně daný další krok, konečnost = algoritmus skončí.',
    'Napsat algoritmus jen pro konkrétní čísla ze zadání – porušuje zobecnitelnost.',
    'Zapomenout na výsledek (resultativnost) – algoritmus musí něco vrátit nebo vypsat.'
  ],
  qa: [
    { q: 'Vyjmenuj pět vlastností algoritmu.', a: 'Konečnost, zobecnitelnost, determinovanost, elementárnost, resultativnost.' },
    { q: 'Co je konečnost?', a: 'Algoritmus vždy skončí; počet kroků nemusí být pevný ani předem známý, ale je vždy konečný.' },
    { q: 'Co je zobecnitelnost?', a: 'Algoritmus řeší celou skupinu úloh, ne jeden vstup (násobení nesmí fungovat jen pro 3 a 5).' },
    { q: 'Co je determinovanost?', a: 'V každém kroku lze podle vnitřního stavu rozhodnout, který (právě jeden) krok následuje.' },
    { q: 'Co je elementárnost?', a: 'Algoritmus se skládá z nedělitelných kroků; ty tvoří jazyk algoritmu (piš, udělej krok, otoč se).' },
    { q: 'Co je resultativnost?', a: 'Algoritmus vrací výsledek – výpis, soubor, předání uživateli nebo jinému algoritmu.' },
    { q: 'Jaké jsou tři stavební kameny algoritmů?', a: 'Sekvence, selekce, iterace.' },
    { q: 'K čemu slouží proměnné?', a: 'Uchovávají data v průběhu výpočtu a zachycují vnitřní stav algoritmu.' },
    { q: 'Jaké typy algoritmických úloh uvádí přednáška?', a: 'Řadicí, vyhledávací, optimalizační a úlohy pro podporu lidské činnosti.' }
  ]
});
