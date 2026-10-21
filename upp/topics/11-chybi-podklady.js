// Témata ze sylabu předmětu, k nimž zatím nejsou podklady – zamčená (SUBJECT.lockDraft), po dodání materiálů je stačí zpracovat a změnit src na 'podklady'.
[
  ['operacni-system', 'Operační systém a procesy', 'Role a rozhraní OS, procesy a spolupráce procesů.', [4]],
  ['algoritmy', 'Algoritmy a strukturovaný návrh programů', 'Principy strukturovaného návrhu algoritmů – součást písemné zkoušky (1× algoritmus).', [5]],
  ['datove-struktury', 'Datové struktury', 'Pole, záznam, objekt, ukazatel, spojový seznam, binární strom.', [7, 8, 9]],
  ['technicke-vybaveni', 'Technické vybavení počítače', 'Procesor, paměti, periferní zařízení.', [10, 11]]
].forEach(([id, title, summary, lec], i) => registerTopic({ id, order: 11 + i, icon: '🔒', title, summary, lec, src: 'doplneno', sections: [], qa: [] }));
