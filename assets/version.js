// Generuje tools/version.sh při každém commitu – neupravovat ručně.
(() => {
  const V = { n: 38, h: '202abf6', t: 1793872436 };
  const d = new Date(V.t * 1000).toLocaleString('cs-CZ', { dateStyle: 'medium', timeStyle: 'short' });
  const el = Object.assign(document.createElement('span'), { className: 'ver', textContent: `v${V.n} · ${d}`, title: `Commit č. ${V.n} (po ${V.h}), ${d}` });
  document.querySelector('.top #theme').before(el);
})();
