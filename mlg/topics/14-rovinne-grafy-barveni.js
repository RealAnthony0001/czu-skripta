registerTopic({
  id: 'rovinne-grafy-barveni', order: 14, icon: '🎨', title: 'Rovinné grafy, Eulerova formule a barvení grafů', src: 'podklady', lec: [9],
  where: 'Přednáška Rovinné grafy a barvení grafů (Hora) + Doplněk ke cvičení z neorientovaných grafů',
  summary: 'Kdy jde graf nakreslit bez křížení (K₅ a K₃,₃), vztah v + s = e + k + 1, pět pravidelných map (mnohostěnů) a barvení vrcholů – chromatické číslo a úloha o pokojích.',
  vocab: [
    { w: 'rovinný graf', x: 'graf, který má diagram v rovině bez protínajících se hran' },
    { w: 'zcelení / dělení hrany', x: 'zcelení: vrchol stupně 2 vypustíme a jeho dvě hrany nahradíme jednou; dělení je opak' },
    { w: 'homeomorfní grafy', x: 'grafy, které lze na sebe převést zcelováním a dělením hran' },
    { w: 'stát', x: 'část roviny ohraničená hranami rovinného diagramu (počítá se i vnější)' },
    { w: 'k-obarvení', x: 'přiřazení barev 1…k vrcholům tak, aby sousední vrcholy měly různé barvy' },
    { w: 'chromatické číslo χ(G)', x: 'nejmenší k, pro které existuje k-obarvení' }
  ],
  key: [
    '<b>K₅</b> a <b>K₃,₃</b> nejsou rovinné; graf je rovinný, právě když neobsahuje podgraf homeomorfní s K₅ ani s K₃,₃ (Kuratowski).',
    'Pro rovinný graf: <b>v + s = e + k + 1</b> (vrcholy + státy = hrany + komponenty + 1); pro souvislý v + s = e + 2.',
    'Existuje <b>přesně pět pravidelných map</b> – odpovídají pěti pravidelným mnohostěnům.',
    'χ(Dₙ) = 1, χ(Kₙ) = n, χ(sudé kružnice) = 2, χ(liché kružnice) = 3, χ(strom s hranou) = 2.',
    'Každý rovinný graf má <b>χ ≤ 4</b> (věta o čtyřech barvách).'
  ],
  sections: [
    { title: 'Rovinné a nerovinné grafy', blocks: [
      { t: 'def', term: 'Rovinný graf', x: 'graf, pro který existuje diagram v rovině, ve kterém se hrany neprotínají (kromě společných vrcholů). Rovinnost je vlastnost grafu, ne konkrétního obrázku – K₄ nakreslený jako čtverec s úhlopříčkami se kříží, ale jde překreslit bez křížení.' },
      { t: 'svg', title: 'K₄ je rovinný, K₅ a K₃,₃ ne', x: MLG.rovinne() },
      { t: 'law', ref: 'Kuratowského věta', x: 'Graf je rovinný, právě když neobsahuje žádný podgraf homeomorfní s K₅ ani s K₃,₃. (Homeomorfní = převoditelné zcelováním a dělením hran, tedy „stejné až na vrcholy stupně 2 vložené do hran“.)' },
      { t: 'tip', x: 'K₃,₃ je známá hádanka „tři domy a tři zdroje (voda, plyn, elektřina)“ – nejde je propojit bez křížení. Dva zakázané grafy stačí: každý nerovinný graf v sobě některý z nich „ukrývá“.' }
    ] },
    { title: 'Eulerova formule a mapy', blocks: [
      { t: 'law', ref: 'Eulerova formule', x: 'Pro rovinný diagram grafu platí <b>v + s = e + k + 1</b>, kde v je počet vrcholů, s počet států (včetně vnějšího), e počet hran a k počet komponent. Pro souvislý graf (k = 1) tedy v + s = e + 2.' },
      { t: 'def', term: 'Mapa', x: 'diagram souvislého rovinného grafu, kde (1) žádný vrchol nemá stupeň menší než 3, (2) každý stát má hranici aspoň ze tří hran, (3) každá hrana odděluje dva státy, (4) dva státy mají nejvýš jednu společnou hranu. Mapa je <b>pravidelná</b>, mají-li všechny vrcholy stejný stupeň k a všechny státy hranici ze stejného počtu n hran.' },
      { t: 'grid', head: ['Pravidelná mapa', 'k (stupeň)', 'n (hran státu)', 'v', 'e', 's'], rows: [
        ['čtyřstěn', '3', '3', '4', '6', '4'],
        ['krychle', '3', '4', '8', '12', '6'],
        ['osmistěn', '4', '3', '6', '12', '8'],
        ['dvanáctistěn', '3', '5', '20', '30', '12'],
        ['dvacetistěn', '5', '3', '12', '30', '20']
      ] },
      { t: 'ex', x: '<b>Kolik hran má fotbalový míč?</b> Má 12 pětiúhelníků a 20 šestiúhelníků. Každá hrana leží mezi dvěma státy: e = (12 · 5 + 20 · 6) / 2 = <b>90</b>. Ve vrcholech se stýkají 3 hrany, takže v = 2e / 3 = <b>60</b>. Kontrola: v + s = 60 + 32 = 92 = e + 2.' },
      { t: 'tip', x: 'Ověř si tabulku Eulerovou formulí: u krychle 8 + 6 = 12 + 2, u dvacetistěnu 12 + 20 = 30 + 2. Navíc k·v = 2e (součet stupňů) a n·s = 2e (každá hrana patří dvěma státům).' }
    ] },
    { title: 'Barvení grafu', blocks: [
      { t: 'def', term: 'k-obarvení a chromatické číslo', x: 'k-obarvení grafu G = (V, E, p) je zobrazení c: V → {1, …, k}, které vrcholům spojeným hranou přiřadí různé hodnoty. <b>χ(G)</b> je nejmenší k, pro které k-obarvení existuje.' },
      { t: 'grid', head: ['Graf', 'χ', 'Proč'], rows: [
        ['Dₙ (bez hran)', '1', 'nic se nedotýká'],
        ['Kₙ', 'n', 'každý se s každým'],
        ['C₅ (lichá kružnice)', '3', 'dvě barvy by se musely střídat, liché kolo nesedne'],
        ['C₆ (sudá kružnice)', '2', 'barvy se pravidelně střídají'],
        ['strom T (aspoň jedna hrana)', '2', 'barvíme po vrstvách od libovolného vrcholu'],
        ['rovinný graf', '≤ 4', 'věta o čtyřech barvách']
      ] },
      { t: 'p', x: 'Barvení řeší úlohy „kdo nesmí být spolu“: rozdělení lidí do pokojů, rozvrh (předměty se společnými studenty nesmí být ve stejný čas), fáze semaforů na křižovatce. Vrcholy jsou objekty, hrany konflikty a barvy skupiny.' },
      { t: 'ex', x: '<b>Jedenáct chlapečků (přednáška):</b> vrcholy = chlapci, hrana = „nechtějí spolu bydlet“. Adam, Bořík a Fanoušek se navzájem nesnášejí (trojúhelník), proto χ ≥ 3. Tři pokoje stačí: <b>{Adam, Cyril, Karlík, Viktor}</b>, <b>{Bořík, Lukášek, Martínek, Zdeněk}</b>, <b>{Davídek, Fanoušek, Pavlík}</b>. Instruktoři potřebují <b>3 pokoje</b>.' },
      { t: 'tip', x: 'Dolní odhad χ dává největší úplný podgraf (trojúhelník ⇒ aspoň 3) nebo lichá kružnice; horní odhad dá libovolné konkrétní obarvení. Když se rovnají, máš výsledek.' }
    ] }
  ],
  mistakes: [
    'Prohlásit graf za nerovinný jen proto, že ho máš nakreslený s křížením.',
    'V Eulerově formuli zapomenout započítat vnější stát.',
    'Zaměnit k (stupeň vrcholu) a n (počet hran státu) u pravidelných map.',
    'Udat chromatické číslo jen podle obarvení, bez dolního odhadu (proč to nejde méně barvami).',
    'Myslet si, že každá kružnice jde obarvit dvěma barvami – liché ne.'
  ],
  qa: [
    { q: 'Které dva grafy jsou „zakázané“ v Kuratowského větě?', a: 'K₅ a K₃,₃.' },
    { q: 'Jak zní Eulerova formule pro souvislý rovinný graf?', a: 'v + s = e + 2.' },
    { q: 'Kolik existuje pravidelných map?', a: 'Pět (čtyřstěn, krychle, osmistěn, dvanáctistěn, dvacetistěn).' },
    { q: 'Jaké je chromatické číslo C₅?', a: '3.' },
    { q: 'Kolik barev stačí na každý rovinný graf?', a: 'Čtyři.' },
    { q: 'Kolik hran má fotbalový míč z 12 pětiúhelníků a 20 šestiúhelníků?', a: '90.' }
  ]
});
