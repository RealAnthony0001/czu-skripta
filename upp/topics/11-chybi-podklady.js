// Témata ze sylabu předmětu, k nimž zatím nejsou podklady – zamčená (SUBJECT.lockDraft), po dodání materiálů je stačí zpracovat a změnit src na 'podklady'.
[
  ['operacni-system', 'Operační systém a procesy', 'Role a rozhraní OS, procesy a spolupráce procesů.'],
  ['algoritmy', 'Algoritmy a strukturovaný návrh programů', 'Principy strukturovaného návrhu algoritmů – součást písemné zkoušky (1× algoritmus).'],
  ['datove-struktury', 'Datové struktury', 'Pole, záznam, objekt, ukazatel, spojový seznam, binární strom.'],
  ['technicke-vybaveni', 'Technické vybavení počítače', 'Procesor, paměti, periferní zařízení.']
].forEach(([id, title, summary], i) => registerTopic({ id, order: 11 + i, icon: '🔒', title, summary, src: 'doplneno', sections: [], qa: [] }));
