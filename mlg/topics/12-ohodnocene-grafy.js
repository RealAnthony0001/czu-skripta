registerTopic({
  id: 'ohodnocene-grafy', order: 12, icon: '🛣️', title: 'Ohodnocené grafy: minimální kostra a Dijkstrův algoritmus', src: 'podklady', lec: [7],
  where: 'Přednáška Ohodnocené neorientované grafy (Čermák, Hora) + Minimální kostra a Dijkstrův algoritmus (Hora) + Cvičení 4 (úlohy 9–13)',
  summary: 'Jak spojit všechna místa nejlevněji (minimální kostra – Kruskal, Jarník) a kudy vede nejkratší cesta z jednoho vrcholu do ostatních (Dijkstrův algoritmus, strom nejkratších cest).',
  vocab: [
    { w: 'ohodnocený graf', x: 'G = (V, E, p, c), kde c: E → ℝ⁺ přiřazuje každé hraně kladné číslo – ohodnocení (km, minuty, koruny)' },
    { w: 'minimální kostra', x: 'kostra souvislého ohodnoceného grafu s nejmenším součtem ohodnocení hran; může jich být víc' },
    { w: 'délka cesty', x: 'součet ohodnocení jejích hran' },
    { w: 'vzdálenost', x: 'délka nejkratší cesty mezi dvěma vrcholy' },
    { w: 'strom nejkratších cest z v', x: 'kostra, ve které je vzdálenost v od všech vrcholů stejná jako v celém grafu' },
    { w: 'relaxace', x: 'vylepšení dosud nejlepšího odhadu vzdálenosti, když se najde kratší cesta' }
  ],
  key: [
    '<b>Kruskal:</b> řaď hrany od nejlehčí a přidávej, pokud nevytvoří kružnici; skonči při n − 1 hranách.',
    '<b>Jarník:</b> začni v libovolném vrcholu a vždy přidej nejlehčí hranu z hotového stromu do nového vrcholu.',
    '<b>Dijkstra:</b> start 0, ostatní ∞; uzavři vrchol s nejmenší hodnotou a relaxuj hrany z něj; opakuj, dokud nejsou uzavřeny všechny.',
    'Předchůdce si zapisuj – z nich vznikne <b>strom nejkratších cest</b> i samotná cesta (čti pozpátku).',
    'Minimální kostra ≠ strom nejkratších cest: kostra minimalizuje <b>součet všech hran</b>, Dijkstra <b>vzdálenosti od startu</b>.'
  ],
  sections: [
    { title: 'Ohodnocený graf a minimální kostra', blocks: [
      { t: 'def', term: 'Minimální kostra', x: 'taková kostra souvislého ohodnoceného grafu, že součet ohodnocení všech jejích hran je minimální mezi všemi kostrami. Minimálních koster může být více, všechny stejně dobré (např. trojúhelník se třemi hranami váhy 1 má tři minimální kostry se součtem 2).' },
      { t: 'p', x: 'Typická úloha: kolik kabelu, potrubí nebo silnic minimálně potřebujeme, aby bylo propojeno všechno se vším (ne nutně napřímo).' }
    ] },
    { title: 'Kruskalův a Jarníkův algoritmus', blocks: [
      { t: 'flow', title: 'Kruskalův algoritmus', steps: [
        { h: 'Začni lesem bez hran', x: 'každý vrchol je zatím samostatná komponenta' },
        { h: 'Seřaď hrany od nejlehčí', x: 'při stejné váze na pořadí nezáleží (může vzniknout jiná, stejně dobrá kostra)' },
        { h: 'Přidej hranu, pokud nevytvoří kružnici', x: 'tj. spojuje dvě různé komponenty; jinak ji přeskoč' },
        { h: 'Skonči při n − 1 hranách', x: 'graf je souvislý na všech vrcholech' }
      ] },
      { t: 'flow', title: 'Jarníkův algoritmus', steps: [
        { h: 'Začni v libovolném vrcholu', x: 'ten tvoří zatím strom' },
        { h: 'Přidej nejlehčí hranu ze stromu ven', x: 'jen hrany do vrcholu, který ve stromu ještě není (jinak by vznikla kružnice)' },
        { h: 'Opakuj, dokud strom nemá všechny vrcholy', x: 'výsledkem je minimální kostra' }
      ] },
      { t: 'svg', title: 'Minimální kostra Kruskalem (graf ze slajdu Dijkstrova algoritmu)', x: MLG.kostraKruskal(), cap: 'Prvních 8 hran podle váhy nevytvoří žádnou kružnici, takže kostra je hotová dřív, než přijde na řadu hrana s–d (5).' },
      { t: 'ex', x: '<b>Vesnice Bingo (Cvičení 4, úloha 10):</b> Kruskal bere Fungo–Wongo 2, Mango–Kango 3, Gingo–Tango 4, Kango–Dingo 4, Gingo–Fungo 4, Dingo–Fungo 4, Bingo–Dingo 5, Mango–Pongo 7, Lungo–Gingo 15 (ostatní hrany by uzavřely kružnici). Celkem <b>48 km</b> kabelu.' },
      { t: 'tip', x: 'Oba algoritmy jsou <b>hladové</b> – v každém kroku berou to nejlevnější, co jde, a nikdy se nevracejí. U minimální kostry to (výjimečně) vede k optimu. Jarník je pohodlnější na obrázku (roste jeden strom), Kruskal se seznamem hran.' }
    ] },
    { title: 'Nejkratší cesty a Dijkstrův algoritmus', blocks: [
      { t: 'def', term: 'Strom nejkratších cest z v', x: 'kostra grafu G, ve které je vzdálenost vrcholu v od všech ostatních vrcholů stejná jako v G. Je to grafické vyjádření nejkratších cest z v do všech vrcholů.' },
      { t: 'flow', title: 'Dijkstrův algoritmus (tabulka)', steps: [
        { h: 'Inicializace', x: 'start 0, ostatní ∞, předchůdci neznámí' },
        { h: 'Uzavři vrchol s nejmenší hodnotou', x: 'z dosud neuzavřených; jeho vzdálenost je už konečná' },
        { h: 'Relaxuj hrany z uzavřeného vrcholu', x: 'jen do neuzavřených vrcholů: je-li hodnota + váha menší než dosavadní, přepiš ji i předchůdce' },
        { h: 'Opakuj', x: 'v každém kroku se uzavře právě jeden vrchol' },
        { h: 'Přečti výsledek', x: 'cesta = zpětně po předchůdcích; strom = hrany „vrchol – předchůdce“' }
      ] },
      { t: 'svg', title: 'Dijkstra ze s (příklad ze slajdu)', x: MLG.dijkstraStrom(), cap: 'Červená čísla u vrcholů jsou vzdálenosti od s, červené hrany tvoří strom nejkratších cest.' },
      { t: 'warn', x: 'Minimální kostra a strom nejkratších cest obecně <b>nevycházejí stejně</b>. V grafu výše náhodou vyjdou stejně, ale příklad z přednášky ukazuje rozdíl: trojúhelník v, a, b s hranami v–a 2, a–b 2, v–b 3. Minimální kostra je {v–a, a–b} se součtem 4, jenže v ní je b od v vzdálené 4. Strom nejkratších cest z v obsahuje {v–a, v–b}, vzdálenosti jsou 2 a 3. Kostra hlídá celkovou cenu sítě, Dijkstra cesty z jednoho konkrétního místa.' },
      { t: 'ex', x: '<b>Praha → Ostrava po železnici (Cvičení 4, úloha 12):</b> uzavírání: Praha 0, Pardubice 104, Hradec Králové 116, Olomouc 250 (přes Pardubice), Brno 255, Přerov 272, Krnov 320, Ostrava 356. Nejkratší cesta <b>Praha – Pardubice – Olomouc – Přerov – Ostrava, 356 km</b>.' },
      { t: 'ex', x: '<b>Velké Meziříčí → Moravská Třebová (úloha 13):</b> nejrychlejší spojení <b>Velké Meziříčí – Nové Město – Svitavy – Moravská Třebová, 37 + 45 + 15 = 97 minut</b>.' },
      { t: 'ex', x: '<b>Londýn → Praha (přednáška):</b> Londýn 0, Amsterdam 360, Brusel 370, Kolín 580 (přes Brusel; přes Amsterdam by to bylo 620), Frankfurt 770, Mnichov 1070, Praha <b>1280 km</b> po trase Londýn – Brusel – Kolín – Frankfurt – Praha.' }
    ] }
  ],
  mistakes: [
    'V Kruskalovi přidat hranu, která uzavře kružnici.',
    'V Jarníkovi vybírat nejlehčí hranu v celém grafu, ne jen hranu vedoucí z hotového stromu.',
    'V Dijkstrovi relaxovat i hrany do už uzavřených vrcholů nebo uzavřít víc vrcholů najednou.',
    'Zapomenout si zapisovat předchůdce – bez nich nejde zpětně přečíst cestu.',
    'Myslet si, že minimální kostra obsahuje nejkratší cesty mezi všemi vrcholy.'
  ],
  qa: [
    { q: 'Kdy Kruskalův algoritmus hranu přeskočí?', a: 'Když by vytvořila kružnici (spojuje vrcholy, které už jsou propojené).' },
    { q: 'Kolik hran má minimální kostra grafu s 9 vrcholy?', a: '8.' },
    { q: 'Co znamená, že je vrchol v Dijkstrově algoritmu uzavřený?', a: 'Je k němu nalezena nejkratší cesta a už se nebude relaxovat.' },
    { q: 'Jak z Dijkstrovy tabulky přečteš nejkratší cestu?', a: 'Od cíle zpětně po předchůdcích až ke startu.' },
    { q: 'Jak dlouhá je nejkratší cesta z Prahy do Ostravy v úloze 12?', a: '356 km přes Pardubice, Olomouc a Přerov.' },
    { q: 'Je minimální kostra totéž co strom nejkratších cest?', a: 'Ne, obecně se liší.' }
  ]
});
