registerTopic({
  id: 'snap-ulohy', order: 9, icon: '✏️', title: 'Snap! – úlohy: obrazce, vstupy a výpočty', src: 'podklady', where: 'Cvičení 3 – řešené a neřešené příklady',
  summary: 'Čtverec sekvencí a cyklem, šestiúhelník, kružnice a soustředné kružnice, mřížka z čtverců s omezeným počtem bloků, domeček a trojúhelník s kružnicemi, dělení dvou čísel, kalkulačka a násobky tří.',
  vocab: [
    { w: 'posuň (move)', x: 'želva udělá zadaný počet kroků ve směru, kam se dívá' },
    { w: 'otoč (turn)', x: 'želva se otočí o zadaný počet stupňů' },
    { w: 'vnější úhel', x: 'o kolik se želva otočí v rohu pravidelného n-úhelníku: 360° / n' },
    { w: 'opakuj n (repeat)', x: 'cyklus s pevným počtem opakování' }
  ],
  key: [
    'Pravidelný n-úhelník: <b>opakuj n: posuň s, otoč 360/n</b> (čtverec 90°, šestiúhelník 60°, trojúhelník 120°).',
    'Kružnice: <b>opakuj 360: posuň s, otoč 1</b> – obvod 360 · s, poloměr ≈ 57,3 · s.',
    'Cyklus místo opakovaných bloků: kratší skript a velikost hrany se mění na jednom místě.',
    'Dělení: před výpočtem kontrola <b>dělitel = 0</b>.'
  ],
  sections: [
    { title: 'Řešené příklady', blocks: [
      { t: 'svg', title: 'Obrazce želvy', x: ALG.zelva(), cap: 'Vlevo čtverec, uprostřed šestiúhelník, vpravo čtyři čtverce kolem jednoho bodu. Červený trojúhelník je želva v místě, kde začíná. Pod obrazcem je skript: v každém rohu se želva otočí o stejný úhel a za celý obrazec dohromady o 360°.' },
      { t: 'ex', x: '<b>Př. 1 – čtverec s hranou 100 kroků.</b> a) Jen posuň a otoč: 4 × (posuň 100, otoč 90°) = 8 bloků pod sebou. b) S cyklem: opakuj 4 × (posuň 100, otoč 90°) – kratší a hrana se mění na jednom místě. c) Totéž s cyklem for i = 1 až 4.' },
      { t: 'ex', x: '<b>Př. 2 – šestiúhelník a kružnice:</b> šestiúhelník = opakuj 6 × (posuň s, otoč 60°); kružnice = opakuj 360 × (posuň s, otoč 1°). Hranu zvol tak, aby se obrazec vešel na scénu; při kružnici zapni turbo mód.' },
      { t: 'ex', x: '<b>Př. 3a – dvě kružnice, první s polovičním obvodem</b> (doplněno): velká = opakuj 360 × (posuň 1, otoč 1) → obvod 360; malá = opakuj 360 × (posuň 0,5, otoč 1) → obvod 180. Obě začínají ve stejném bodě, a proto se v něm dotýkají.' },
      { t: 'ex', x: '<b>Př. 3b – soustředné kružnice</b> (doplněno): střed leží ve vzdálenosti poloměru r = obvod / 2π od místa, kde želva začíná, kolmo na směr pohybu. Velká má r ≈ 57,3, malá r ≈ 28,6, takže před kreslením malé kružnice se želva posune o 57,3 − 28,6 ≈ 28,6 kroku směrem ke středu.' },
      { t: 'ex', x: '<b>Př. 4 – čtyři čtverce (2 cykly, 2 × otoč, 1 × posuň):</b> opakuj 4 × [ opakuj 4 × (posuň s, otoč 90°), otoč 90° ]. Vnitřní cyklus nakreslí čtverec, vnější otočení posune další čtverec o čtvrt otáčky kolem výchozího bodu.' },
      { t: 'flow', title: 'Př. 5 – podíl dvou čísel', steps: [
        { h: 'zeptej se „Zadej dělenec“', x: 'odpověď ulož do proměnné a' },
        { h: 'zeptej se „Zadej dělitel“', x: 'odpověď ulož do proměnné b' },
        { h: 'když b = 0', x: 'řekni „Nulou nelze dělit“' },
        { h: 'jinak', x: 'řekni a / b' }
      ] }
    ] },
    { title: 'Neřešené příklady (nápovědy doplněny)', blocks: [
      { t: 'ul', items: [
        '<b>Domeček</b>: čtverec (opakuj 4 × posuň, otoč 90°) a na něm rovnostranný trojúhelník jako střecha (otočení o 120°); okno a dveře jako menší obdélníky – přesun bez kreslení (pero nahoru).',
        '<b>Rovnostranný trojúhelník s vepsanou a opsanou kružnicí</b>: opakuj 3 × (posuň a, otoč 120°). Poloměr vepsané kružnice je a / (2√3), opsané a / √3; pro a = 100 asi 28,9 a 57,7 kroku.',
        '<b>Šestnáct čtverců (3 cykly, 4 × otoč, 2 × posuň)</b>: mřížka 4 × 4 složená z malých čtverců – rozšíření Př. 4 o další úroveň cyklu.',
        '<b>Kalkulačka +/−</b>: zeptej se na první číslo, druhé číslo a operátor; když operátor = „+“, řekni „Výsledek je 2 + 3 je 5“, když „−“, řekni „Výsledek je 2 − 3 je −1“, jinak řekni „Chybný operátor: /“.',
        '<b>Násobky čísla 3 od 3 do 30</b>: for i = 1 až 10: řekni 3 · i (a chvíli počkej), nebo cyklus s krokem 3 od 3 do 30.'
      ] },
      { t: 'grid', head: ['Obrazec', 'Opakování', 'Otočení'], rows: [['trojúhelník', '3', '120°'], ['čtverec', '4', '90°'], ['šestiúhelník', '6', '60°'], ['kružnice (přibližně)', '360', '1°']] }
    ] }
  ],
  mistakes: [
    'Otáčet o vnitřní úhel (u trojúhelníku 60°) místo vnějšího (120°).',
    'Kreslit kružnici bez turbo módu – trvá dlouho.',
    'Nekontrolovat dělení nulou.',
    'Přesouvat želvu s položeným perem – kreslí čáry navíc.'
  ],
  qa: [
    { q: 'Jak nakreslit čtverec cyklem?', a: 'Opakuj 4 × (posuň 100, otoč 90°).' },
    { q: 'V čem je řešení s cyklem lepší než osm bloků pod sebou?', a: 'Je kratší a velikost hrany i úhel se mění na jediném místě.' },
    { q: 'O kolik stupňů se otáčí želva u šestiúhelníku?', a: '60° (360 / 6).' },
    { q: 'Jak nakreslit kružnici a jaký má obvod?', a: 'Opakuj 360 × (posuň s, otoč 1°); obvod je 360 · s.' },
    { q: 'Jak nakreslit čtyři čtverce kolem bodu dvěma cykly?', a: 'Opakuj 4 × [opakuj 4 × (posuň s, otoč 90°), otoč 90°].' },
    { q: 'Jak se v Snap! zeptat uživatele na číslo?', a: 'Blokem zeptej se (ask); zadaná hodnota je v bloku odpověď (answer).' },
    { q: 'Co ošetřit u dělení dvou čísel?', a: 'Dělitel 0 – nulou nelze dělit.' }
  ]
});
