// Aktuální týden semestru v liště. Týden 1 začíná v pondělí 28. 9. 2026 (5. týden = 26. 10.); semestr má 12 týdnů.
(() => {
  const START = new Date(2026, 8, 28), WEEKS = 12;
  const now = new Date(), w = Math.floor((new Date(now.getFullYear(), now.getMonth(), now.getDate()) - START) / 6048e5) + 1;
  if (w < 1 || w > WEEKS) return;
  const el = Object.assign(document.createElement('span'), { className: 'week', textContent: `Týden ${w}/${WEEKS} · ${w % 2 ? 'lichý' : 'sudý'}`, title: 'Aktuální týden semestru' });
  const t = document.querySelector('.top #theme'); t.before(el);
})();
