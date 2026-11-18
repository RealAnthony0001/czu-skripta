// Generuje tools/version.sh při každém commitu – neupravovat ručně.
(() => {
  const V = { n: 46, h: 'd4f0dea', t: 1795001182 };
  const d = new Date(V.t * 1000).toLocaleString('cs-CZ', { dateStyle: 'medium', timeStyle: 'short' });
  const el = Object.assign(document.createElement('span'), { className: 'ver', textContent: `v${V.n} · ${d}`, title: `Commit č. ${V.n} (po ${V.h}), ${d}` });
  document.querySelector('.top #theme').before(el);
})();
