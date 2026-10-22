// Myšlenková mapa Matematické logiky a grafů: zatím jen výroková logika (grafy přibudou s podklady), zbytek řeší assets/map.js
MINDMAP({ h: 'Matematická logika', c: 'var(--accent)', x: 'Podklady zatím pokrývají <b>výrokovou logiku</b> a negace s kvantifikátory; množiny, grafy a automaty přibudou s dalšími materiály.', kids: [
  { h: 'Výroková logika – základy', c: 'var(--warn)', x: 'Výroky, spojky a formule; pravdivostní tabulky, tautologie, ekvivalence a logický důsledek.', kids: ['vyroky-spojky', 'formule-ekvivalence-dusledek'] },
  { h: 'Úpravy a minimalizace formulí', c: 'var(--def)', x: 'Převody pomocí logických zákonů do normálních tvarů (DNT, KNT, ÚDNT) a hledání nejkratšího tvaru (Quine–McCluskey).', kids: ['zakony-normalni-tvary', 'quine-mccluskey'] },
  { h: 'Kvantifikátory', c: 'var(--ex)', x: 'Výroky se <b>∀</b> a <b>∃</b>: jak je správně negovat.', kids: ['negace-kvantifikatory'] }
] });
