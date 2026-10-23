// Myšlenková mapa Matematické logiky a grafů: kostra podle pořadí přednášek, zbytek řeší assets/map.js
MINDMAP({ h: 'Matematická logika a grafy', c: 'var(--accent)', x: 'Jak přesně uvažovat (<b>výroková logika</b>), jak popsat soubory a vztahy (<b>množiny a relace</b>), jak modelovat spojení a sítě (<b>grafy</b>) a jak rozpoznávat slova (<b>automaty</b>).', kids: [
  { h: 'Výroková logika', c: 'var(--warn)', x: 'Výroky, spojky a formule; tabulky, ekvivalence, důsledek, normální tvary, minimalizace a negace s kvantifikátory.', kids: ['vyroky-spojky', 'formule-ekvivalence-dusledek', 'zakony-normalni-tvary', 'quine-mccluskey', 'negace-kvantifikatory'] },
  { h: 'Množiny a relace', c: 'var(--def)', x: 'Množinové operace a Vennovy diagramy, číselné obory, relace (ekvivalence, uspořádání) a zobrazení.', kids: ['mnoziny', 'ciselne-obory', 'relace', 'zobrazeni'] },
  { h: 'Grafy', c: 'var(--ex)', x: 'Neorientované a orientované grafy, stromy a kostry, nejkratší cesty, rovinnost a barvení, toky a kritická cesta.', kids: ['neorientovane-grafy', 'stromy-kostry', 'ohodnocene-grafy', 'orientovane-grafy', 'rovinne-grafy-barveni', 'site-toky-projekty'] },
  { h: 'Konečné automaty', c: 'var(--accent)', x: 'Automat čte slovo znak po znaku; regulární jazyky a jejich operace, minimalizace automatu.', kids: ['konecne-automaty', 'minimalizace-automatu'] }
] });
