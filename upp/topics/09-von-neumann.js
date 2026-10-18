registerTopic({
  id: 'von-neumann', order: 9, icon: '🏗️', title: 'Architektura počítače von Neumannova typu', src: 'podklady',
  summary: 'Von Neumannovo a harvardské schéma, činnost počítače, procesor a jeho registry, členění programového vybavení (systémový SW, aplikační SW, firmware).',
  vocab: [
    { w: 'ALU', x: 'Aritmeticko-logická jednotka – provádí jednotlivé kroky výpočtu.' },
    { w: 'Řadič', x: 'Řídí ALU a ostatní moduly počítače, dekóduje instrukce.' },
    { w: 'Operační paměť (HP)', x: 'Hlavní paměť; uchovává program i data.' },
    { w: 'Registr', x: 'Rychlé paměťové místo uvnitř procesoru.' },
    { w: 'Firmware', x: 'Programové vybavení, které je součástí hardwaru; uživatel ho (až na výjimky) nemění.' }
  ],
  key: [
    '<b>Von Neumann:</b> jedna paměť pro program <b>i</b> data. <b>Harvard:</b> oddělená paměť pro program a pro data.',
    'Schéma: <b>vstupní zařízení → procesor (řadič + ALU + registry) ↔ operační paměť → výstupní zařízení</b>.',
    'Řadič řídí ALU; mezivýsledky jdou do <b>registrů</b> nebo do operační paměti.',
    'Registry: <b>IP</b> (čítač instrukcí), <b>RI</b> (registr instrukcí), <b>Flag</b> (příznaky), <b>S</b> (střadač), <b>IND</b> (indexregistr).',
    'Koncepce byla publikována roku <b>1945</b> v „First Draft of a Report on the EDVAC“ (John von Neumann, 1903–1957).'
  ],
  sections: [
    { title: 'Koncepce konstrukce počítače', blocks: [
      { t: 'versus', cols: [
        { h: 'Von Neumannovo schéma', items: ['jedna elektronická paměť pro <b>program i data</b>', 'publikováno 1945 (EDVAC)'] },
        { h: 'Harvardské schéma', items: ['<b>oddělená paměť</b> pro data a pro program'] }
      ] },
      { t: 'flow', title: 'Von Neumannovo schéma', steps: [
        { h: 'Vstupní zařízení', x: 'data a program do paměti' },
        { h: 'Operační paměť', x: 'program + data' },
        { h: 'Procesor', x: 'řadič + ALU + registry' },
        { h: 'Výstupní zařízení', x: 'výsledky ven' }
      ] },
      { t: 'p', x: 'Mezi komponenty proudí <b>datový tok</b>, <b>řídicí signály</b> (z řadiče) a <b>stavová hlášení</b> (zpět do řadiče).' }
    ] },
    { title: 'Princip činnosti', blocks: [
      { t: 'ol', items: [
        'Do operační paměti se pomocí vstupních zařízení umístí <b>program</b>.',
        'Stejným způsobem se do paměti umístí <b>data</b>, která program zpracovává.',
        'Proběhne <b>výpočet</b>: jednotlivé kroky provádí <b>ALU</b>, řízená společně s ostatními moduly <b>řadičem</b>. Mezivýsledky se ukládají do registrů nebo operační paměti.',
        'Po skončení se výsledky pošlou na <b>výstupní zařízení</b>.'
      ] }
    ] },
    { title: 'Procesor a jeho registry', blocks: [
      { t: 'table', head: ['Registr', 'Zkratka', 'Obsah / účel'], rows: [
        ['Čítač instrukcí', 'IP (Instruction Pointer)', 'adresa prováděné instrukce v paměti'],
        ['Registr instrukcí', 'RI', 'instrukce načtená z paměti'],
        ['Stavové slovo procesoru', 'Flag Register', 'příznaky nastavené podle výsledku operace (jednotlivé bity)'],
        ['Střadač', 'S', 'výsledek provedené instrukce'],
        ['Indexregistr', 'IND', 'modifikace adresy (přičtení k adrese)']
      ] },
      { t: 'tip', x: 'Zapamatuj si: <b>IP ukazuje kam, RI drží co, S drží výsledek, Flag říká jak dopadl, IND posouvá adresu</b>.' }
    ] },
    { title: 'Programové vybavení počítače', blocks: [
      { t: 'p', x: 'Programové vybavení se skládá z programů; program je posloupnost instrukcí vyššího či nižšího programovacího jazyka, nebo instrukcí procesoru (strojového kódu). Instrukce určuje, co se má se zpracovávanými informacemi udělat.' },
      { t: 'tree', title: 'Členění programového vybavení', root: { h: 'Programové vybavení', kids: [
        { h: 'Systémový software', x: 'úroveň operačního systému a programovacích jazyků' },
        { h: 'Aplikační software', x: 'obecné funkční a aplikační programy' },
        { h: 'Firmware', x: 'součást hardwaru; až na výjimky nemodifikovatelný uživatelem' }
      ] } }
    ] }
  ],
  mistakes: [
    'Plést von Neumannovu (jedna paměť) a harvardskou (dvě paměti) architekturu.',
    'Tvrdit, že řadič provádí výpočty – ty dělá ALU, řadič je pouze řídí.',
    'Zaměnit registr instrukcí (RI = <i>instrukce</i>) a čítač instrukcí (IP = <i>adresa</i> instrukce).'
  ],
  qa: [
    { q: 'Charakterizujte von Neumannovo schéma počítače.', a: 'Používá jednu elektronickou paměť pro program i data; součástmi jsou procesor (řadič, ALU, registry), operační paměť, vstupní a výstupní zařízení. Koncepce publikována 1945 (First Draft of a Report on the EDVAC).' },
    { q: 'V čem se liší von Neumannova a harvardská architektura?', a: 'Von Neumann: společná paměť pro program i data. Harvard: oddělená paměť pro data a pro program.' },
    { q: 'Popište princip činnosti počítače von Neumannova typu.', a: 'Vstupními zařízeními se do operační paměti uloží program a data; ALU řízená řadičem provádí kroky výpočtu, mezivýsledky se ukládají do registrů nebo paměti; výsledky se pošlou na výstupní zařízení.' },
    { q: 'Jaké jsou registry procesoru a k čemu slouží?', a: 'IP – adresa prováděné instrukce; RI – načtená instrukce; Flag – příznaky podle výsledku; S (střadač) – výsledek instrukce; IND – modifikace adresy.' },
    { q: 'Jak se dělí programové vybavení?', a: 'Systémový SW (OS, programovací jazyky), aplikační SW (obecné a aplikační programy) a firmware (součást hardwaru, uživatelem nemodifikovatelný).' },
    { q: 'Co je firmware?', a: 'Programové vybavení, které je součástí technického vybavení a až na naprosté výjimky ho uživatel nemůže měnit.' }
  ]
});
