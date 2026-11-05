registerTopic({
  id: 'snap-prostredi', order: 8, icon: '🐢', title: 'Snap! – prostředí, bloky a proměnné', src: 'podklady', where: 'Cvičení 3 – studijní opora + prezentace Snap! (M. Stočes)',
  summary: 'Želví grafika a jazyk Logo, z čeho Snap! vychází, rozložení okna, kategorie a typy bloků, skládání skriptů, proměnné, selekce a cykly z knihovny „Iteration, composition“, nastavení a ukládání projektů.',
  vocab: [
    { w: 'želví grafika', x: 'kreslení pohybem „želvy“ (kurzoru) po ploše – posuň, otoč; princip z jazyka Logo (1967)' },
    { w: 'sprite (skřítek, objekt)', x: 'objekt na scéně; má vlastní skripty, kostýmy a zvuky' },
    { w: 'scéna (Stage)', x: 'plocha, kde se objekty zobrazují; je to speciální objekt s vlastními skripty, pozadím a zvuky' },
    { w: 'BYOB', x: 'Build Your Own Blocks – dřívější název Snap!' },
    { w: 'turbo mód', x: 'zrychlí běh programu; vhodné pro kreslení obrazců (kružnice)' }
  ],
  key: [
    'Snap! = vizuální drag-and-drop jazyk v prohlížeči, vychází ze <b>Scratch</b>e, dříve <b>BYOB</b>.',
    'Okno: <b>Palette</b> (bloky), <b>Scripting Area</b> (skripty), <b>Stage</b> (scéna), <b>Sprite Corral</b> (objekty).',
    'Typy bloků: <b>příkaz</b> (nevrací hodnotu), <b>funkce</b> (vrací hodnotu), <b>podmínka</b> (pravda / nepravda).',
    'Cykly while a for se importují z knihovny <b>„Iteration, composition“</b>.',
    'Proměnné: <b>globální</b> (ve všech skriptech) × <b>lokální</b> (v bloku / skriptu / funkci).'
  ],
  sections: [
    { title: 'Želví grafika a původ Snap!', blocks: [
      { t: 'timeline', title: 'Od Loga ke Snap!', items: [
        { when: '1967', h: 'Logo', x: 'princip želví grafiky; návrh Wally Feurzeig, Seymour Papert, Cynthia Solomon (MIT), vyvinuto v Bolt, Beranek and Newman, Cambridge (Massachusetts)' },
        { when: '80. léta', h: 'Apple Logo', x: 'implementace na Apple II Plus a Apple IIe' },
        { when: 'další', h: 'Karel, Baltík', x: 'podobné výukové prostředí (Karel podle Čapkova robota)' },
        { when: 'dnes', h: 'Snap!', x: 'vychází z projektu Scratch, dříve BYOB; běží ve webovém prohlížeči (HTML, CSS, JavaScript), snap.berkeley.edu' }
      ] },
      { t: 'ul', items: [
        'Želva (turtle / ghost / sprite / cursor / robot) se pohybuje v <b>kartézské soustavě souřadnic</b> a zaznamenává svůj pohyb (kreslí).',
        'Snap! umí i <b>funkce, rekurzi, objektový přístup, try-catch, seznamy</b>, MQTT, mapy …'
      ] }
    ] },
    { title: 'Prostředí', blocks: [
      { t: 'svg', title: 'Rozložení okna Snap!', x: ALG.snapOkno(), cap: 'Nahoře lišta s menu, nastavením a tlačítky Start / Pauza / Stop. Vlevo paleta bloků, uprostřed plocha, kam se bloky skládají do skriptů, vpravo nahoře scéna, kde objekty kreslí, a pod ní ohrada se všemi objekty a scénou.' },
      { t: 'p', x: 'Skripty jsou vázané na objekty. Objekty se zobrazují na scéně, vzhled se mění kostýmy (karta Kostýmy) a mají i zvuky. Objekty lze také klonovat.' },
      { t: 'table', head: ['Kategorie', 'Co obsahuje'], rows: [
        ['Pohyb (Motion)', 'pohyby a otáčení objektů po scéně'],
        ['Vzhled (Looks)', 'viditelnost, kostýmy, výstup (řekni / mysli)'],
        ['Zvuk (Sound)', 'přehrávání zvukových souborů a programovatelný zvuk'],
        ['Pero (Pen)', 'psaní, kreslení, razítkování na scénu'],
        ['Ovládání (Control)', 'selekce, události, iterátory, scény'],
        ['Vnímání (Sensing)', 'detekce zásahů objektu a uživatelský vstup (myš, klávesnice, zeptej se)'],
        ['Operátory (Operators)', 'matematické, textové a logické operátory; lambda'],
        ['Proměnné (Variables)', 'proměnné a seznamy (i seznamy seznamů, seznamy bloků)']
      ] }
    ] },
    { title: 'Bloky a skripty', blocks: [
      { t: 'svg', title: 'Tři tvary bloků', x: ALG.typyBloku(), cap: 'Tvar bloku prozrazuje jeho roli. Příkaz má výstupky a zapadá do skriptu jako dílek puzzle; funkce je zaoblená a vkládá se do políček jiných bloků; podmínka má špičaté konce a patří do selekce (když) nebo do cyklu while.' },
      { t: 'ul', items: [
        'Skripty se skládají z bloků, které do sebe zapadají jako <b>puzzle</b>; bloky jsou rozdělené do kategorií.',
        'Skript začíná <b>hlavovým blokem</b> (head block) ze skupiny Ovládání – „po kliknutí na zelenou vlajku“, „po stisku klávesy“, „když na mě kliknou“, „po přijetí zprávy“. Nad něj nelze nic připojit. <b>Cap block</b> skript ukončuje.',
        'Pravým tlačítkem nad blokem: nápověda, zaměnit blok, kopírovat, smazat, obrázek skriptu, obalit.',
        'Spuštění: Start / Pauza / Stop, nebo kliknutím přímo na blok či skript.'
      ] }
    ] },
    { title: 'Proměnné, selekce a cykly', blocks: [
      { t: 'versus', title: 'Globální × lokální proměnná', cols: [
        { h: 'Globální', items: ['platí ve všech skriptech', 'vytvoří se tlačítkem „Vytvoř proměnnou“ pro všechny objekty'] },
        { h: 'Lokální', items: ['platí jen v bloku / skriptu / funkci', 'mimo něj neexistuje'] }
      ], x: 'Rozdíl je v tom, kde je proměnná „vidět“. Globální proměnnou sdílejí všechny skripty, takže změna v jednom skriptu se projeví všude – hodí se pro skóre hry. Lokální proměnná žije jen uvnitř svého bloku nebo funkce; dva skripty mohou mít lokální proměnnou stejného jména a navzájem se neovlivní, typicky počitadlo cyklu.' },
      { t: 'warn', x: '<b>Proměnná × text:</b> <span class="mo">PIŠ cislo</span> vypíše hodnotu proměnné (např. 11), <span class="mo">PIŠ "cislo"</span> vypíše slovo „cislo“. V Snap! je proto nutné proměnnou do bloku <b>přetáhnout</b> z palety, ne ji napsat do políčka – napsaný název je jen text.' },
      { t: 'ul', items: [
        '<b>Selekce:</b> když, když-jinak (if, if-else, else-if).',
        '<b>Iterace:</b> while, do-while, for – importují se z knihovny <b>„Iteration, composition“</b> (Soubor → Knihovny…).',
        'Slajd porovnává while a do-while, které oba vypíšou 1, 2, …, 9 – pro tyto počáteční hodnoty jsou výstupy stejné; lišit by se začaly, kdyby podmínka neplatila hned na začátku (do-while proběhne aspoň jednou).',
        'Vstup a výstup: blok <b>zeptej se</b> (ask) uloží odpověď uživatele do bloku <b>odpověď</b> (answer); výstup bloky <b>řekni</b> / <b>mysli</b>.'
      ] }
    ] },
    { title: 'Nastavení a ukládání', blocks: [
      { t: 'ul', items: [
        '<b>Nastavení</b> (ozubené kolo): volba jazyka, <b>turbo mód</b>, velikost bloků.',
        '<b>Knihovny</b>: Soubor → Knihovny… (např. „Iteration, composition“; u přepisu strukturogramů pomůže „APL primitives“).',
        '<b>Ukládání</b>: do prohlížeče (na učebnách se po odhlášení vymaže!), export do <b>XML</b>, cloud, nebo skript jako obrázek (pravé tlačítko → obrázek skriptu).'
      ] },
      { t: 'tip', x: 'Na učebně ukládej export do XML nebo do cloudu – uložení „do prohlížeče“ po odhlášení zmizí.' }
    ] }
  ],
  mistakes: [
    'Napsat název proměnné do políčka místo přetažení bloku proměnné – vypíše se text, ne hodnota.',
    'Hledat while a for v základní paletě – je nutné importovat knihovnu „Iteration, composition“.',
    'Uložit projekt na učebně jen do prohlížeče.',
    'Kreslit složité obrazce bez turbo módu – běží pomalu.'
  ],
  qa: [
    { q: 'Z jakého projektu vychází Snap! a jak se dříve jmenoval?', a: 'Ze Scratch; dříve BYOB (Build Your Own Blocks).' },
    { q: 'Kdy a v jakém jazyce vznikl princip želví grafiky?', a: 'V roce 1967 v jazyce Logo (Feurzeig, Papert, Solomon).' },
    { q: 'Jaké jsou čtyři části okna Snap!?', a: 'Palette (bloky), Scripting Area (skripty), Stage (scéna), Sprite Corral (objekty).' },
    { q: 'Jaké tři typy bloků rozlišuje studijní opora?', a: 'Příkaz (nevrací hodnotu), funkce (vrací hodnotu), podmínka (vrací pravda / nepravda).' },
    { q: 'Odkud se berou cykly while a for?', a: 'Z knihovny „Iteration, composition“.' },
    { q: 'Čím se liší globální a lokální proměnná?', a: 'Globální platí ve všech skriptech, lokální jen v bloku / skriptu / funkci.' },
    { q: 'Co vypíše PIŠ cislo a co PIŠ "cislo"?', a: 'Hodnotu proměnné × slovo „cislo“.' },
    { q: 'K čemu je turbo mód?', a: 'Zrychlí běh programu, hodí se pro kreslení obrazců.' },
    { q: 'Jak lze uložit projekt?', a: 'Do prohlížeče, export do XML, do cloudu, nebo skript jako obrázek.' },
    { q: 'Jakými bloky se získá vstup od uživatele?', a: 'zeptej se (ask) a odpověď (answer).' }
  ]
});
