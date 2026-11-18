// Generuje tools/version.sh při každém commitu – neupravovat ručně.
(() => {
  const V = { n: 47, h: '5cb1211', t: 1795001292 };
  const d = new Date(V.t * 1000).toLocaleString('cs-CZ', { dateStyle: 'medium', timeStyle: 'short' });
  const el = Object.assign(document.createElement('span'), { className: 'ver', textContent: `v${V.n} · ${d}`, title: `Commit č. ${V.n} (po ${V.h}), ${d}` });
  document.querySelector('.top #theme').before(el);
})();
