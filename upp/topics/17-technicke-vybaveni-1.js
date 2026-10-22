registerTopic({
  id: 'technicke-vybaveni-1', order: 17, icon: '🔧', title: 'Technické vybavení I: základní deska, procesor a paměti', src: 'podklady', lec: [10],
  where: 'Přednáška 10 + Cvičení 6',
  summary: 'Komponenty osobního počítače, základní deska (čipset, BIOS, sběrnice), výkon a taktování procesoru, CISC × RISC, fázové a proudové zpracování instrukcí (pipelining, superskalární a hyperskalární architektura, Core), paměti (RAM, cache, pevný disk, optická média, flash, SSD) a výpočet parametrů disku.',
  vocab: [
    { w: 'Základní deska', x: 'Propojuje všechny komponenty PC; nese patici procesoru, čipovou sadu, paměť ROM s BIOSem, paměťové sloty, sběrnice a konektory.' },
    { w: 'Čipset', x: 'Čipová sada: severní můstek (procesor, paměť, grafika) a jižní můstek (PCI, disky, USB a další periferie).' },
    { w: 'BIOS', x: 'Basic Input Output System – základní software (firmware) uložený v ROM: zavedení OS, nastavení periferií, rutiny pro základní periferie.' },
    { w: 'Sběrnice', x: 'Skupina vodičů, po které se přenášejí data mezi součástmi desky.' },
    { w: 'MIPS', x: 'Milion instrukcí za sekundu – míra výkonu procesoru.' },
    { w: 'Pipelining', x: 'Proudové zpracování – více instrukcí je rozpracováno současně v různých fázích.' },
    { w: 'SRAM / DRAM', x: 'Statická (rychlá, drahá, klopné obvody) / dynamická (pomalejší, levná, kondenzátory s refreshem) paměť RAM.' }
  ],
  key: [
    '<b>Základní deska</b>: patice CPU, čipset (severní + jižní můstek), ROM s <b>BIOS</b>, paměťové sloty, sběrnice, regulátor napětí, baterie, konektory.',
    '<b>Výkon:</b> MIPS = f / (n · 10<sup>6</sup>) = 1 / (n · T · 10<sup>6</sup>) (f frekvence, T perioda, n průměrný počet cyklů na instrukci).',
    '<b>Fáze instrukce:</b> výběr → dekódování 1 → dekódování 2 → provedení → uložení výsledku. Pipelining: <b>n instrukcí za n + 4 cyklů</b> místo 5n.',
    '<b>CISC:</b> mikroprogramový řadič, složité instrukce · <b>RISC:</b> hardwarový řadič, jednoduché rychlé instrukce, nižší spotřeba.',
    '<b>Paměti:</b> registry → cache (SRAM) → operační paměť (DRAM) → vnější (HDD, optická, flash, SSD). Hlavní paměť = DRAM, mezipaměť = SRAM.'
  ],
  sections: [
    { title: 'Komponenty osobního počítače', blocks: [
      { t: 'icons', title: 'Základní komponenty (podle obrázku ze slajdu)', items: [
        { i: '🖥️', h: 'Monitor, klávesnice, myš', x: 'vstupní a výstupní zařízení' },
        { i: '🧷', h: 'Základní deska', x: 'propojuje všechny komponenty; nese procesor, paměťové sloty a rozšiřující sloty' },
        { i: '🧠', h: 'Procesor (CPU)', x: 'vykonává instrukce' },
        { i: '⚡', h: 'Napájecí zdroj', x: 'napájí komponenty' },
        { i: '💽', h: 'Pevný disk, CD / DVD mechanika', x: 'vnější paměti, připojené konektory pro HDD' },
        { i: '🔌', h: 'Rozšiřující sloty', x: 'např. grafická karta (VRAM), síťová karta' }
      ] }
    ] },
    { title: 'Základní deska, čipset, BIOS a sběrnice', blocks: [
      { t: 'p', x: 'Základní deska (motherboard) <b>propojuje všechny komponenty PC</b>. Většina soudobých desek obsahuje: patici či konektor pro procesor, <b>čipovou sadu</b>, ROM paměť s <b>BIOS</b>, patice pro paměťové moduly, komunikační sběrnice, regulátor napětí pro procesor, baterii a konektory pro přídavná zařízení. Na některých deskách jsou integrované videokarty, zvukové a síťové karty.' },
      { t: 'versus', title: 'Čipová sada (čipset) – dvě části propojené sběrnicí', cols: [
        { h: 'Severní můstek (North Bridge)', items: ['komunikace s <b>procesorem</b> – prostředník při komunikaci se zbytkem počítače', 'přístup k <b>pamětem</b> (paměťový řadič) a ke <b>grafické kartě</b> (řadič AGP)'] },
        { h: 'Jižní můstek (South Bridge)', items: ['zařízení na sběrnici <b>PCI</b>', 'data na <b>pevných discích</b>, optických a disketových mechanikách', 'externí zařízení: řadiče <b>USB, FireWire</b>, sériových, paralelních a PS/2 portů, zvukové a síťové karty, modem'] }
      ] },
      { t: 'def', term: 'BIOS (Basic Input Output System)', x: 'Základní software (někdy nazývaný <b>firmware</b>) počítače, uložený v ROM. Obsahuje <b>kód nutný pro zavedení operačního systému</b>, software pro nastavování vestavěných periferií (HDD, FDD, sériové a paralelní porty), často podporu power-managementu (snížení příkonu při nízké zátěži) a rutiny pro obsluhu základních periferií.' },
      { t: 'svg', title: 'Sběrnicová architektura osobního počítače', x: UPP.busDiagram(), cap: 'Procesor je nejrychlejší, jižní můstek obsluhuje pomalejší periferie. Bližší k procesoru = rychlejší sběrnice.' },
      { t: 'table', head: ['Sběrnice', 'K čemu slouží'], rows: [
        ['<b>procesorová</b>', 'nejrychlejší sběrnice systému: načítání a ukládání do cache paměti a komunikace s čipovou sadou'],
        ['<b>paměťová</b>', 'přenos dat mezi procesorem a operační pamětí'],
        ['<b>grafická AGP</b>', 'navržena speciálně pro grafické karty'],
        ['<b>PCI</b>', 'další přídavné karty'],
        ['<b>PCI Express</b>', 'sběrnice s vyšší propustností dat'],
        ['<b>ISA</b>', 'připojování pomalých či starších periferií']
      ] },
      { t: 'p', x: '<b>Sběrnice (bus)</b> je jakákoli skupina vodičů, po které se data v systému přenášejí z jedné součásti desky do druhé.' }
    ] },
    { title: 'Výkon počítače a procesoru', blocks: [
      { t: 'p', x: 'Veškerá činnost počítače není spontánní, ale je <b>synchronizována taktovacími (hodinovými) pulsy</b> (CP – Clock Pulse) z generátoru taktovacích pulsů. Rychlost hodin se udává jako <b>frekvence</b> – počet cyklů (taktů) za sekundu v Hz (1 Hz = 1 cyklus za sekundu).' },
      { t: 'p', x: '<b>Nejmenší časovou jednotkou</b> z hlediska procesoru je <b>jeden cyklus</b>: každá akce vyžaduje aspoň jeden cyklus, většina běžných operací více cyklů. Výhodnějším vyjádřením výkonu je <b>počet instrukcí za sekundu</b>:' },
      { t: 'def', term: 'Výkon v MIPS', x: '<b>MIPS = 1 / (n · T · 10<sup>6</sup>) = f / (n · 10<sup>6</sup>)</b>, kde <b>f</b> je frekvence v Hz, <b>T</b> perioda v sekundách (T = 1 / f) a <b>n</b> průměrný počet cyklů nutný k vykonání jedné instrukce.' },
      { t: 'ex', x: '<b>Procesor 2 GHz, průměrně 4 cykly na instrukci:</b> MIPS = 2 · 10<sup>9</sup> / (4 · 10<sup>6</sup>) = <b>500 MIPS</b>. <b>Procesor 3 GHz, n = 3:</b> 3 · 10<sup>9</sup> / (3 · 10<sup>6</sup>) = <b>1000 MIPS</b>. Perioda při 2 GHz: T = 1 / (2 · 10<sup>9</sup>) = 0,5 ns.' }
    ] },
    { title: 'Centrální výkonná jednotka (CPU), CISC a RISC', blocks: [
      { t: 'def', term: 'CPU (Central Processing Unit)', x: 'Základní součást počítače, která <b>vykonává strojové instrukce</b> zapsané v programu. Zahrnuje procesor (jedno nebo více jader), interní vyrovnávací paměti (L1 cache), systémovou sběrnici (propojení procesoru s hlavní pamětí) a někdy i hlavní paměť.' },
      { t: 'versus', cols: [
        { h: 'CISC (Complex Instruction Set Computer)', items: ['<b>mikroprogramový řadič</b> – úplná sada instrukcí včetně složitých operací', 'potřebuje <b>více času</b> na zpracování instrukce; interpretace rozsáhlého kódu mikroprogramem snížila výkonnost', 'současné procesory nedostatky obcházejí tím, že <b>vnitřně používají architekturu RISC</b>'] },
        { h: 'RISC (Reduced Instruction Set Computer)', items: ['<b>hardwarově realizovaný řadič</b> – jen rychlé a jednoduché instrukce (omezená sada)', '<b>větší spotřeba paměti pro program</b> (složitá instrukce se rozloží na jednodušší)', 'úspěšné v mobilních telefonech a superpočítačích; jednodušší architektura = <b>nižší spotřeba energie</b>'] }
      ], x: 'CISC je jako kuchař s knihou, ve které je jeden recept „připrav svíčkovou“ – jedna instrukce udělá hodně práce, ale kuchař musí recept složitě číst. RISC je kuchař, který zná jen jednoduché kroky (nakrájej, osol, zamíchej) a dělá je bleskově; svíčková zabere víc řádků (kratší instrukce, ale delší program), zato je kuchyně jednodušší, levnější na provoz a méně se přehřívá. Dnešní procesory si složité instrukce uvnitř rozloží na jednoduché, takže spojují obě výhody.' }
    ] },
    { title: 'Fázové a proudové zpracování instrukcí', blocks: [
      { t: 'flow', title: 'Pět fází zpracování strojové instrukce', steps: [
        { h: 'Výběr (fetch)', x: 'instrukce se načte z vyrovnávací nebo vnější paměti do vstupního bufru' },
        { h: 'Dekódování 1', x: 'dekóduje se operační kód a způsob adresace' },
        { h: 'Dekódování 2', x: 'nastaví se řídicí signály pro ALU; u složitější adresace se vypočte adresa' },
        { h: 'Provedení (execute)', x: 'ALU provede operaci; operandy z cache nebo registrů, je-li operand v hlavní paměti, vkládají se prázdné cykly' },
        { h: 'Uložení výsledku (write back)', x: 'zápis výsledku do registru nebo paměti' }
      ] },
      { t: 'svg', title: 'Klasické, proudové a superskalární zpracování 6 instrukcí', x: UPP.pipelineDiagram(), cap: 'Každá instrukce potřebuje 5 cyklů. Klasicky: 6 · 5 = 30 cyklů; v pipeline: 6 + 4 = 10 cyklů; superskalárně (2 instrukce najednou): 3 + 4 = 7 cyklů.' },
      { t: 'versus', cols: [
        { h: 'Klasické (naivní)', items: ['každá fáze trvá 1 cyklus', 'další instrukce začne až po skončení předchozí', '<b>n instrukcí = 5n cyklů</b>'] },
        { h: 'Proudové (pipelining)', items: ['<b>skalární architektura</b> – procesor z více samostatně pracujících funkčních bloků', 'zpracovává se více instrukcí najednou (pipeline = datovod)', 'jedna instrukce dokončena <b>každý cyklus</b> (po naplnění): n instrukcí = n + 4 cyklů'] }
      ] },
      { t: 'ul', items: [
        '<b>Predikce skoků:</b> skoky (podmíněné i nepodmíněné) přerušují proud instrukcí a snižují výkon; jednotka predikce <b>odhadne, zda se skok provede</b>, a podle toho začne do proudu vkládat instrukce za skokem, nebo v jeho cíli.',
        '<b>Superskalární architektura:</b> více prováděcích jednotek (ALU) v jednom jádře, schopných paralelního zřetězení; <b>v jednom taktu se dokončí více instrukcí</b>, pokud jedna nečeká na výsledek druhé. Řadič musí rozhodovat, které instrukce lze párovat – složitější konstrukce.',
        '<b>Hyperskalární architektura:</b> až <b>20 rozpracovaných instrukcí</b> v jednom instrukčním proudu; zpracování mimo pořadí (<b>Out-of-Order</b>) – řadič je seřadí do optimálního pořadí; <b>Rapid Execution Engine</b>: tři ALU, dvě z nich (jednoduché operace) pracují na dvojnásobné frekvenci jádra, až 4 instrukce za strojový cyklus.',
        '<b>HyperThreading:</b> jeden „fyzický“ procesor pracuje jako dva „logické“ (dvě vlákna) – zdvojí se jednotky držící stav výpočtu (registry), ostatní prostředky (ALU, cache) jsou sdílené.',
        '<b>Architektura Core:</b> v pouzdře více výpočetních jader – paralelní řešení úloh nebo rozložení jedné úlohy na více jader; paměťový řadič (a část severního můstku) integrován přímo do procesoru, vysokorychlostní procesorová sběrnice, HyperThreading, někdy i grafické jádro (GPU).'
      ] },
      { t: 'timeline', title: 'Vývoj výkonnosti CPU (Intel)', items: [
        { when: '1971–1989', h: 'Skalární architektura', x: '4004 (1971), 8080 (1974), 80286 (1982), 80386 (1985), 80486 (1989); multitasking, pipelining, koprocesor x87 (FPU)' },
        { when: '1993–1997', h: 'Superskalární architektura', x: 'Pentium (1993), Pentium Pro (1995), Pentium II, Celeron (1997); zdvojení ALU' },
        { when: '1999–2000', h: 'Hyperskalární architektura', x: 'Pentium III (1999), Pentium 4 (2000, NetBurst); Out-of-Order' },
        { when: '2006+', h: 'Architektura Core', x: 'Core 2 Duo / Quad (2006), Core i3, i5, i7 (2008+), Atom (2008); více jader, Hyper-threading, integrace GPU' }
      ] }
    ] },
    { title: 'Paměti počítače a operační paměť', blocks: [
      { t: 'p', x: 'Veškerá data se převádějí do dvojkové soustavy a zpracovávají jako binární řetězce. Paměť je rozdělena na očíslované „přihrádky“; při ukládání i čtení je třeba znát <b>adresu</b> přihrádky.' },
      { t: 'pyramid', title: 'Tři základní skupiny pamětí (nahoře nejrychlejší)', levels: [
        { h: 'Registry', x: 'paměťová místa na čipu procesoru; krátkodobé uchování právě zpracovávaných informací' },
        { h: 'Vnitřní (interní) paměti', x: 'polovodičové, většinou uvnitř základní jednotky; zavádějí se do nich právě spouštěné programy a jejich data – cache (SRAM) a operační paměť (DRAM)' },
        { h: 'Vnější (externí) paměti', x: 'výměnná média – disky, magnetické pásky; magnetický nebo optický záznam; dlouhodobé uchování a zálohování' }
      ] },
      { t: 'def', term: 'Organizace vnitřní paměti', x: 'Paměť se skládá z jednobitových míst – <b>binárních buněk</b>; určitý počet binárních buněk tvoří <b>paměťovou buňku</b>, nejmenší samostatně adresovatelnou jednotku. Paměťové buňky jsou lineárně uspořádány, jejich pořadové číslo je <b>adresa</b>. Je-li buňka m bitů a paměť má n adres, tvoří binární buňky matici <b>n × m</b>.' },
      { t: 'ex', x: '<b>(Vlastní příklad.)</b> Adresní sběrnice s 10 vodiči rozliší 2<sup>10</sup> = 1 024 adres; při buňce o m = 8 bitech je paměť matice 1 024 × 8 = 8 192 bitů = 1 KiB. S 16 vodiči je to 2<sup>16</sup> = 65 536 adres.' },
      { t: 'versus', title: 'RAM (přesněji RWM): čtení i zápis', cols: [
        { h: 'SRAM – statická', items: ['binární buňka tvořena <b>klopným obvodem</b> (S-R nebo D)', 'nízká přístupová doba → <b>rychlá</b>', 'vyšší složitost → menší kapacita, vyšší cena'] },
        { h: 'DRAM – dynamická', items: ['binární buňka tvořena <b>kondenzátorem</b> (ne)udržujícím náboj; nutná periodická obnova obsahu (<b>refresh</b>)', 'delší přístupová doba → pomalejší', 'jednoduchá buňka → větší kapacita, nižší cena; současné verze <b>DDRx</b> mají přístupovou dobu srovnatelnou s SRAM'] }
      ] },
      { t: 'tip', x: '<b>Hlavní (operační) paměť</b> je tvořena čipy <b>DRAM</b>. <b>Mezipaměť (cache)</b> je velmi rychlý paměťový zásobník typu <b>SRAM</b> pro dočasné ukládání dat, která procesor potřebuje nebo bude potřebovat (L1, L2, L3 cache).' }
    ] },
    { title: 'Vnější paměti: pevný disk', blocks: [
      { t: 'def', term: 'Pevný disk (HDD)', x: 'Obsahuje otáčející se pevné <b>plotny</b> (většinou 2–5), každá má <b>dvě strany</b> pro data. Nad plotnami se pohybují <b>hlavy</b>, které čtou a zapisují do <b>soustředných prstenců (stop)</b> rozdělených na <b>sektory</b> (velikost 512 B). Shodně umístěné stopy na obou stranách všech ploten tvoří <b>cylindr</b>. Kapacita se pohybuje v desítkách až stovkách GB. Zápis i čtení probíhá záznamovou / čtecí hlavou nad elementárními magnety: při zápisu se mění orientace magnetického pole, při čtení se podle pole mění směr proudu.' },
      { t: 'svg', title: 'Plotna, stopa, sektor a cylindr', x: UPP.hddDiagram(), cap: 'Cylindr tvoří shodně umístěné stopy na všech površích všech ploten; hlavy se k němu přesouvají společně na jednom rameni.' },
      { t: 'ul', items: [
        '<b>Průměrná doba vyhledávání (seek)</b> – průměrný čas přesunu hlav z jednoho cylindru na náhodně vybraný (ms).',
        '<b>Latence</b> – průměrná doba, než se hlavy po nastavení na správnou stopu dostanou nad požadovaný sektor (ms).',
        '<b>Průměrná doba přístupu</b> = průměrná doba vyhledávání + latence.',
        '<b>Max. přenosová rychlost</b> (MB/s) = počet sektorů ve stopě · velikost sektoru · otáčky za minutu / 60 s / 1 048 576 B.'
      ] },
      { t: 'ex', x: '<b>Příklad ze cvičení</b> (řešení části C je ze cvičení, A a B jsou dopočítané): HDD má 2 plotny a 20 480 cylindrů, na každé stopě 128 sektorů po 2 048 B, otáčky 5 400 ot/min, vystavení mezi sousedními stopami 1 ms, průměrné vystavení 10 ms.<br><b>A) Kapacita</b> (2 plotny = 4 strany): 4 · 20 480 · 128 · 2 048 B = 21 474 836 480 B = <b>20 GiB</b>.<br><b>B) Průměrná doba přenosu 2 048 B</b> (jeden sektor): vystavení 10 ms + latence (půlotáčka 1/180 s ≈ 5,56 ms) + čtení sektoru (1/(128 · 90) s ≈ 0,087 ms) ≈ <b>15,6 ms</b>. (Jedna otáčka trvá 1/90 s; max. přenosová rychlost 128 · 2 048 · 5 400 / 60 / 1 048 576 = <b>22,5 MB/s</b>.)<br><b>C) Přečtení celého disku:</b> 10<sup>−2</sup> + 20 480 · (1/180 + 1/90) + 20 479 · 10<sup>−3</sup> ≈ <b>361,8 s ≈ 6,03 min</b> (první přesun 10 ms; pro každý cylindr půlotáčka na nalezení sektoru + celá otáčka čtení stopy; 20 479 přesunů mezi sousedními cylindry po 1 ms).' },
      { t: 'warn', x: 'Řešení ze cvičení ve skutečnosti čte jen <b>jednu stopu na cylindr</b>; při čtení všech čtyř stop každého cylindru (2 plotny × 2 strany) by samotné čtení trvalo zhruba čtyřikrát déle. Ve slajdu je také uvedeno „doba čtení 1 stopy = 1/120 s“, ale správně je 128 · 1/(128 · 90) = <b>1/90 s</b> (jedna otáčka) – s tou hodnotou je počítán konečný výsledek.' }
    ] },
    { title: 'Vnější paměti: optická média, flash a SSD', blocks: [
      { t: 'p', x: 'Zkratkou <b>CD-ROM</b> se označují nejen optická média, ale i mechaniky. Existují <b>CD-R</b> (zapisovatelné) a <b>CD-RW</b> (přepisovatelné), <b>DVD</b> (zhuštěný záznam) a <b>BD (Blu-ray)</b> – ještě hustší záznam, modré světlo laseru. CD mechaniky se podobají přehrávačům zvukových CD; hlavním rozdílem jsou obvody pro dodatečnou kontrolu a opravu chyb.' },
      { t: 'ul', items: [
        'Disk má průměr <b>12 cm</b>, tloušťku 1,2 mm a otvor o průměru 15 mm; je z polykarbonátu a pokrytý kovovým filmem (odrazová vrstva).',
        'Čtení je založeno na <b>rozdílném odrážení laserového paprsku</b> od jamek a pevnin; senzor zachytí odraz. Při přechodu laseru z pevniny na jamku nebo naopak zaznamená <b>změnu odraženého světla = 1</b>, v oblasti beze změn = <b>0</b>.',
        'Jamky jsou vyraženy do jediné <b>spirálovité stopy dlouhé 5,77 km</b>; stopa je rozdělena na <b>sektory o velikosti 2 352 B</b>: synchronizace 12 B + adresa sektoru 4 B + data 2 048 B + ECC / EDC 288 B (= 2 352 B).',
        'Kapacita CD je <b>700 MB</b> (DVD až 17,1 GB).'
      ] },
      { t: 'svg', title: 'Čtení optického disku', x: UPP.opticalDiagram() },
      { t: 'warn', x: 'Slajd uvádí „pevnina (pit) se odráží, jamka (land) se neodráží“ – názvy jsou prohozené: <b>jamka = pit</b> (světlo se téměř neodráží), <b>pevnina = land</b> (odráží se zpět).' },
      { t: 'versus', cols: [
        { h: 'Flash paměť (EEPROM)', items: ['energeticky nezávislá, lze ji naprogramovat a znovu vymazat <b>elektrickým polem</b>', 'data v poli tranzistorů – buněk; princip <b>tunelování náboje</b> na přechod dvou vrstev tranzistoru', 'přeprogramování lze provést přímo v počítači'] },
        { h: 'SSD disk (Solid-State Drive)', items: ['náhrada magnetických disků: <b>bez pohyblivých částí</b> (nehlučný), nižší spotřeba, vyšší přenosové rychlosti', 'princip uložení stejný jako Flash', '<b>omezená životnost</b> – max. 100 000 zápisů do buněk'] }
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit severní můstek (procesor, paměť, grafika) a jižní můstek (PCI, disky, USB a další pomalejší periferie).',
    'Zapomenout vynásobit 10<sup>6</sup> a n u výpočtu MIPS, nebo dosadit T místo f.',
    'U pipeline počítat 5n cyklů – správně n + 4 (po naplnění se dokončuje jedna instrukce za cyklus).',
    'Zaměnit SRAM (rychlá, drahá, cache) a DRAM (pomalejší, levná, hlavní paměť, potřebuje refresh).',
    'U kapacity disku zapomenout, že každá plotna má dvě strany (stopy na obou stranách tvoří cylindr).'
  ],
  qa: [
    { q: 'Co obsahuje základní deska?', a: 'Patici procesoru, čipovou sadu, ROM s BIOSem, paměťové sloty, komunikační sběrnice, regulátor napětí, baterii a konektory; někdy integrované grafické, zvukové a síťové karty.' },
    { q: 'Jaké jsou funkce severního a jižního můstku?', a: 'Severní: procesor, paměťový řadič, grafická karta (AGP). Jižní: PCI, disky a optické mechaniky, USB, FireWire, sériové a paralelní porty, PS/2, zvukové a síťové karty, modem.' },
    { q: 'Co je BIOS?', a: 'Základní software (firmware) v ROM: kód pro zavedení operačního systému, nastavení vestavěných periferií, power-management a rutiny pro obsluhu základních periferií.' },
    { q: 'Vyjmenujte základní sběrnice PC.', a: 'Procesorová, paměťová, grafická AGP, PCI, PCI Express a ISA.' },
    { q: 'Jak se počítá výkon procesoru v MIPS?', a: 'MIPS = f / (n · 10<sup>6</sup>) = 1 / (n · T · 10<sup>6</sup>); f frekvence (Hz), T perioda (s), n průměrný počet cyklů na instrukci. Např. 2 GHz a n = 4 → 500 MIPS.' },
    { q: 'Porovnejte CISC a RISC.', a: 'CISC: mikroprogramový řadič, úplná sada včetně složitých instrukcí, více času na instrukci. RISC: hardwarový řadič, jednoduché rychlé instrukce, více paměti pro program, nižší spotřeba (mobily, superpočítače).' },
    { q: 'Popište fáze zpracování strojové instrukce.', a: 'Výběr (fetch), dekódování 1 (operační kód a adresace), dekódování 2 (řídicí signály ALU, výpočet adresy), provedení (ALU), uložení výsledku (write back).' },
    { q: 'Kolik cyklů zabere 8 instrukcí klasicky a v pipeline? A superskalárně se 2 instrukcemi najednou?', a: 'Klasicky 8 · 5 = 40 cyklů; pipeline 8 + 4 = 12; superskalárně 4 + 4 = 8.' },
    { q: 'Co je predikce skoků a proč se používá?', a: 'Skoky přerušují proud instrukcí v pipeline a snižují výkon; jednotka predikce odhadne, zda se skok provede, a podle toho vkládá do proudu instrukce za skokem, nebo v jeho cíli.' },
    { q: 'Co je superskalární a hyperskalární architektura, HyperThreading a Core?', a: 'Superskalární: více ALU v jednom jádře, více instrukcí dokončeno v jednom taktu. Hyperskalární: až 20 rozpracovaných instrukcí, Out-of-Order, Rapid Execution Engine. HyperThreading: jeden fyzický procesor = dva logické (zdvojené registry). Core: více jader v pouzdře, integrovaný paměťový řadič, někdy GPU.' },
    { q: 'Čím se liší SRAM a DRAM a kde se používají?', a: 'SRAM: klopný obvod, rychlá, složitá, dražší, menší kapacita – cache. DRAM: kondenzátor, nutný refresh, pomalejší, levnější, větší kapacita – hlavní paměť (DDRx).' },
    { q: 'Popište fyzickou strukturu pevného disku.', a: 'Plotny (2–5, dvě strany) s hlavami čtoucími a zapisujícími do stop rozdělených na sektory (512 B); shodné stopy na všech stranách ploten tvoří cylindr.' },
    { q: 'Jaká je průměrná doba přístupu k disku?', a: 'Součet průměrné doby vyhledávání (přesun hlav na cylindr) a latence (dosažení sektoru ve stopě).' },
    { q: 'Jak se zapisují a čtou data na CD?', a: 'Laserový paprsek se odráží od odrazové vrstvy; senzor zaznamená změnu odraženého světla při přechodu mezi jamkou a pevninou jako 1, bez změny 0. Jediná spirálová stopa (5,77 km), sektor 2 352 B (12 + 4 + 2 048 + 288), kapacita CD 700 MB.' },
    { q: 'Čím se liší SSD od klasického disku?', a: 'SSD nemá pohyblivé mechanické části (tichý, nižší spotřeba, vyšší rychlost), data ukládá do Flash buněk s omezenou životností (max. 100 000 zápisů).' }
  ]
});
