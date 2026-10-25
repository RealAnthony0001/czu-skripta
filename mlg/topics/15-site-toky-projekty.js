registerTopic({
  id: 'site-toky-projekty', order: 15, icon: '🚰', title: 'Sítě, maximální tok a kritická cesta projektu', src: 'podklady', lec: [10],
  where: 'Přednáška Sítě a projekty (Hora) + Maximální tok sítí (Hora) + Cvičení 5 (úlohy 3, 7, 8)',
  summary: 'Síť se zdrojem a stokem, tok splňující Kirchhoffův zákon, řez a věta „maximální tok = minimální řez“, hledání toku zlepšujícími cestami a kritická (nejdelší) cesta projektu.',
  vocab: [
    { w: 'síť', x: 'orientovaný nezáporně ohodnocený souvislý graf bez smyček a násobných hran se zdrojem s (nic do něj nevede) a stokem t (nic z něj nevede)' },
    { w: 'kapacita c(e)', x: 'ohodnocení hrany v síti – kolik jí nejvýš proteče' },
    { w: 'tok f', x: 'ohodnocení hran s 0 ≤ f(e) ≤ c(e), kde v každém vnitřním vrcholu co přiteče, to odteče' },
    { w: 'řez R(A)', x: 'hrany, které začínají v množině vrcholů A a končí mimo ni; odděluje zdroj od stoku, když s ∈ A a t ∉ A' },
    { w: 'projekt', x: 'síť bez orientovaných cyklů, kde každý vrchol leží na nějaké cestě z s do t' },
    { w: 'kritická cesta', x: 'nejdelší orientovaná cesta z s do t; zpoždění na ní zpozdí celý projekt' }
  ],
  key: [
    '<b>Kirchhoffův zákon:</b> v každém vrcholu kromě s a t je součet toků dovnitř = součet toků ven.',
    '<b>|f|</b> = co vyteče ze zdroje = co přiteče do stoku.',
    '<b>Max. tok = kapacita min. řezu</b> oddělujícího zdroj od stoku.',
    'Tok hledej zlepšujícími cestami: najdi cestu s volnou kapacitou, pošli po ní minimum, opakuj; smíš jít i <b>proti</b> již poslanému toku (zpětná hrana).',
    'Kritická cesta = <b>nejdelší</b> cesta (ne nejkratší!); vrcholy na ní jsou kritické.'
  ],
  sections: [
    { title: 'Síť a tok', blocks: [
      { t: 'def', term: 'Síť', x: 'Orientovaný nezáporně ohodnocený souvislý graf bez smyček a násobných hran s určenými vrcholy s ≠ t, pro které deg⁻(s) = deg⁺(t) = 0.', items: ['s je <b>zdroj</b>, t <b>stok</b> (spotřebič)', 'ohodnocení c(e) je <b>kapacita</b>', 'H⁺(v) značí hrany začínající ve v, H⁻(v) hrany ve v končící'] },
      { t: 'def', term: 'Tok', x: 'Ohodnocení hran f takové, že:', items: ['0 ≤ f(e) ≤ c(e) pro každou hranu', 'Σ<sub>e∈H⁻(v)</sub> f(e) = Σ<sub>e∈H⁺(v)</sub> f(e) pro každý vrchol v ≠ s, t (<b>Kirchhoffův zákon</b>)', 'velikost toku |f| = Σ<sub>e∈H⁺(s)</sub> f(e) = Σ<sub>e∈H⁻(t)</sub> f(e)'] },
      { t: 'p', x: 'Představ si potrubí: kapacita je průměr trubky, tok množství vody. Ve spojích se voda neztrácí ani nevzniká, jen ze zdroje vytéká a do stoku přitéká.' }
    ] },
    { title: 'Řezy a maximální tok', blocks: [
      { t: 'def', term: 'Řez', x: 'Pro A ⊆ V je řez R(A) množina hran, které začínají ve vrcholu z A a končí mimo A.', items: ['obsahuje-li A zdroj a ne stok, řez <b>odděluje zdroj od spotřebiče</b>', 'kapacita řezu = součet kapacit jeho hran (hrany vedoucí zpět do A se nepočítají)'] },
      { t: 'law', ref: 'Věta (Ford–Fulkerson)', x: 'Velikost maximálního toku sítí je rovna kapacitě minimálního řezu oddělujícího zdroj od spotřebiče.' },
      { t: 'flow', title: 'Hledání maximálního toku (postup z řešeného příkladu)', steps: [
        { h: 'Začni nulovým tokem', x: 'zbytková kapacita každé hrany = její kapacita' },
        { h: 'Najdi cestu ze S do T s kladnou zbytkovou kapacitou', x: 'smíš použít i zpětnou hranu – „vrátit“ tok, který už teče opačně' },
        { h: 'Pošli po ní minimum zbytkových kapacit', x: 'ubereš kapacitu po směru a přidáš zpětnou hranu' },
        { h: 'Opakuj, dokud cesta existuje', x: 'pak je tok maximální' },
        { h: 'Minimální řez', x: 'A = vrcholy dosažitelné ze S po hranách se zbytkovou kapacitou; jeho hrany jsou plně využité' }
      ] },
      { t: 'ex', x: '<b>Řešený příklad (Hora):</b> S→B 4, S→A 7, B→D 2, B→C 4, A→D 2, A→C 3, D→T 2, C→T 8.<br>1. cesta S B D T, minimum <b>2</b> · 2. S B C T, <b>2</b> · 3. S A C T, <b>3</b> · 4. S A D B C T, <b>2</b> – jde po zpětné hraně D→B, tj. tok z B do D se přesměruje přes C.<br>Celkem |f| = 2 + 2 + 3 + 2 = <b>9</b>.' },
      { t: 'widget', fig: MLG.tokSit(), figcap: 'Červené hrany tvoří řez R({S, A}) s kapacitou 4 + 2 + 3 = 9 – stejně jako velikost toku.', name: 'tok', how: ['Každý krok najde cestu ze zdroje S do stoku T se zbytkovou kapacitou a pošle po ní minimum zbytkových kapacit.', 'Popisek hrany je <b>tok / kapacita</b>; oranžově je právě použitá cesta.', 'Čtvrtá cesta jde po <b>zpětné hraně</b> D → B – vrací tok, který tam už teče.', 'Poslední krok najde vrcholy dosažitelné ze zdroje: hrany z nich ven tvoří <b>minimální řez</b>.'], sol: 'Zvětšující cesty: S B D T (+2), S B C T (+2), S A C T (+3), S A D B C T (+2, po zpětné hraně D→B). Celkem <b>|f| = 2 + 2 + 3 + 2 = 9</b> a kapacita řezu {S, A} je 4 + 2 + 3 = <b>9</b>.', title: 'Maximální tok a minimální řez krok za krokem' },
      { t: 'warn', x: 'Slajd uvádí, že minimální řezy oddělující zdroj od spotřebiče jsou <b>dva</b> – {S, A} a {S, A, B, D}. Kapacitu 9 má ale i řez <b>{S, A, D}</b> (hrany S→B 4, A→C 3, D→T 2), minimální řezy jsou tedy <b>tři</b>. Výsledek „maximální tok 9“ platí beze změny.' },
      { t: 'ex', x: '<b>Cvičení 5, úloha 7a:</b> s→B 5, s→C 7, B→t 6, C→t 5, C→B 2, B→C 3. Maximální tok <b>11</b> (do t vedou hrany s kapacitou 6 + 5), minimální řez je dán vrcholy <b>s, B, C</b>.' }
    ] },
    { title: 'Projekt a kritická cesta', blocks: [
      { t: 'def', term: 'Projekt a kritická cesta', x: 'Síť je <b>projekt</b>, neobsahuje-li orientovaný cyklus a leží-li každý vrchol na nějaké orientované cestě z s do t.', items: ['<b>kritická cesta</b> je každá orientovaná cesta z s do t s maximální délkou', 'vrchol na ní je <b>kritický</b>'] },
      { t: 'p', x: 'Hrany jsou činnosti s dobou trvání, vrcholy události („vše před tím je hotovo“). Činnost může začít, až skončí všechny, které do jejího počátku vedou – proto se bere <b>maximum</b>, a délka kritické cesty je nejkratší možná doba celého projektu.' },
      { t: 'flow', title: 'Hledání kritické cesty', steps: [
        { h: 'Postupuj od s v topologickém pořadí', x: 'vrchol zpracuj, až když znáš hodnoty všech vrcholů, ze kterých do něj vedou hrany' },
        { h: 'Nejdřívější začátek', x: 't(v) = max(t(u) + c(u, v)) přes všechny hrany do v; t(s) = 0' },
        { h: 'Délka projektu', x: 't(t) = délka kritické cesty' },
        { h: 'Zpětně najdi kritické hrany', x: 'hrana (u, v) je kritická, když t(u) + c(u, v) = t(v) a v leží na kritické cestě' }
      ] },
      { t: 'widget', fig: MLG.kritickaCesta(), figcap: 'Červené hrany: dvě kritické cesty S–B–E–F–H–T a S–F–H–T, obě délky 49.', name: 'kc', how: ['Vrcholy se zpracovávají v topologickém pořadí; u každého se bere <b>maximum</b> z t(předchůdce) + délka hrany.', 'Modrý štítek nad vrcholem je nejdřívější začátek t(v).', 'Poslední krok označí červeně <b>kritické hrany</b> – ty, které leží na nejdelší cestě.', 'Šipkami ◀ ▶ (nebo klávesami ← →) procházíš kroky; pod obrázkem je vždy <b>co se děje, proč a co se změnilo</b>.'], title: 'Kritická cesta projektu ze slajdu krok za krokem' },
      { t: 'ex', x: '<b>Projekt ze slajdu:</b> nejdřívější začátky S 0, B 4, C 10, D 11, E 16 (přes B), F 19 (S→F přímo i přes E), G 21, H 31 (přes F), T 49. Kritické cesty jsou <b>S B E F H T</b> (4 + 12 + 3 + 12 + 18) a <b>S F H T</b> (19 + 12 + 18), obě délky <b>49</b>.' },
      { t: 'grid', head: ['Cvičení 5', 'Výsledek'], rows: [
        ['úloha 3 – Dijkstra z A do L', 'A F G J K H L, délka 11'],
        ['úloha 8a – kritické cesty', 'S B C D F E H I T (délka 44)'],
        ['úloha 8b', 'S C E G I L T a S C E F H K M T'],
        ['úloha 8c', 'S B C E H J L M T a S B C E G H J L M T'],
        ['úloha 8d', 'S B C F E H G J K L O T']
      ] }
    ] }
  ],
  mistakes: [
    'Do kapacity řezu započítat i hrany vedoucí zpátky do A.',
    'Při hledání toku nepoužít zpětné hrany – algoritmus pak může skončit pod maximem.',
    'Porušit Kirchhoffův zákon ve vnitřním vrcholu.',
    'U kritické cesty brát minimum (jako u Dijkstry) místo maxima.',
    'Najít jen jednu kritickou cestu, když jich je víc stejně dlouhých.'
  ],
  qa: [
    { q: 'Co říká Kirchhoffův zákon pro tok?', a: 'V každém vrcholu kromě zdroje a stoku je součet toků dovnitř roven součtu toků ven.' },
    { q: 'Čemu se rovná velikost maximálního toku?', a: 'Kapacitě minimálního řezu oddělujícího zdroj od stoku.' },
    { q: 'Proč se při hledání toku používají zpětné hrany?', a: 'Umožní přesměrovat už poslaný tok jinudy a najít lepší řešení.' },
    { q: 'Je kritická cesta nejkratší, nebo nejdelší?', a: 'Nejdelší – určuje minimální dobu trvání projektu.' },
    { q: 'Jak velký je maximální tok v řešeném příkladu S, A, B, C, D, T?', a: '9.' }
  ]
});
