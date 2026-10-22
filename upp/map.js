// Myšlenková mapa Úvodu do principu počítačů: kostra podle pořadí přednášek, zbytek řeší assets/map.js
MINDMAP({ h: 'Principy počítačů', c: 'var(--accent)', x: 'Jak počítač reprezentuje <b>data</b>, jak je zpracovává <b>hardware</b> řízený <b>programem</b> a jak se programy píšou a organizují data v paměti.', kids: [
  { h: 'Data a jejich kódování', c: 'var(--warn)', x: 'Vše v počítači jsou <b>bity</b>: čísla, text i logické hodnoty se musí zakódovat do binární podoby (a případně zabezpečit proti chybám).', kids: ['ciselne-soustavy', 'data-a-kodovani', 'text-a-logicke-hodnoty', 'cela-cisla', 'ieee754', 'binarni-kody'] },
  { h: 'Výroková logika', c: 'var(--def)', x: 'Základ logických obvodů a podmínek v programech: spojky, pravdivostní tabulky, ekvivalence a logický důsledek.', kids: ['vyrokovy-pocet', 'ekvivalence-dusledek'] },
  { h: 'Hardware', c: 'var(--ex)', x: 'Architektura von Neumannova typu, procesor se strojovým kódem a technické vybavení počítače.', kids: ['von-neumann', 'strojovy-kod', 'technicke-vybaveni-1', 'technicke-vybaveni-2'] },
  { h: 'Software a algoritmy', c: 'var(--accent)', x: 'Operační systém spravuje zdroje; algoritmy a programovací jazyky popisují, co má počítač udělat.', kids: ['operacni-system', 'algoritmy', 'programovani-vyvoj-sw'] },
  { h: 'Datové struktury', c: 'var(--warn)', x: 'Jak se data v programu organizují: statické (pole, záznam), dynamické (seznam, strom) a speciální (zásobník, fronta, tabulka, soubor).', kids: ['staticke-datove-struktury', 'dynamicke-datove-struktury', 'specialni-datove-struktury'] }
] });
