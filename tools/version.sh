#!/bin/sh
# Zapíše assets/version.js: pořadí připravovaného commitu, hash rodiče a čas (spouští hook pre-commit).
cd "$(dirname "$0")/.." || exit 1
n=$(( $(git rev-list --count HEAD 2>/dev/null || echo 0) + 1 ))
h=$(git rev-parse --short HEAD 2>/dev/null)
cat > assets/version.js <<JS
// Generuje tools/version.sh při každém commitu – neupravovat ručně.
(() => {
  const V = { n: $n, h: '$h', t: $(date +%s) };
  const d = new Date(V.t * 1000).toLocaleString('cs-CZ', { dateStyle: 'medium', timeStyle: 'short' });
  const el = Object.assign(document.createElement('span'), { className: 'ver', textContent: \`v\${V.n} · \${d}\`, title: \`Commit č. \${V.n} (po \${V.h}), \${d}\` });
  document.querySelector('.top #theme').before(el);
})();
JS
