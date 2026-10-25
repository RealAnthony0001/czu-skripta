// Sdílená kostra interaktivních bloků { t: 'widget', name } – WG.app(root, spec) a drobné pomocníky.
// spec: state (počáteční ui), top(ui) = ovládací prvky, steps(ui) = [{ title, view, what, why, change }] (krokování)
// nebo view(ui) = jen výstup; act(ui, akce, data) při kliku na [data-act]; input(ui, klíč) při změně [data-in].
// Vykreslování je čisté: stav je jen v `ui`, HTML se při každé změně sestaví znovu (psaní do pole proto nepřerušuje překreslení výstupu).
(() => {
  window.WIDGETS = window.WIDGETS || {};
  const WG = window.WG = {
    reg: (name, mount) => { window.WIDGETS[name] = mount; },
    btn: (act, label, on = false, data = '') => `<button data-act="${act}" ${data} class="${on ? 'on' : ''}">${label}</button>`,
    sel: (key, opts, val) => `<select data-in="${key}" class="qw-in">${opts.map(([v, l]) => `<option value="${v}"${String(v) === String(val) ? ' selected' : ''}>${l}</option>`).join('')}</select>`,
    txt: (key, val, ph = '', w = 18) => `<input data-in="${key}" class="qw-in" value="${String(val).replace(/"/g, '&quot;')}" placeholder="${ph}" size="${w}" spellcheck="false" autocomplete="off">`,
    num: (key, val, min, max, step = 1) => `<input data-in="${key}" class="qw-in" type="number" value="${val}" min="${min}" max="${max}" step="${step}">`,
    rng: (key, val, min, max, step = 1) => `<input data-in="${key}" class="qw-rng" type="range" value="${val}" min="${min}" max="${max}" step="${step}">`,
    lbl: s => `<span class="lbl">${s}</span>`,
    // znak v rámečku (bit, číslice): cls = d1 | d0 | dd | df | hd
    c: (ch, cls = '') => `<i class="qw-c ${cls}">${ch}</i>`,
    // řádek může být pole buněk nebo { cls, cells }
    tbl: (head, rows, cls = '') => `<div class="qw-cv ${cls}"><table><tr>${head.map(h => `<th>${h}</th>`).join('')}</tr>${rows.map(r => `<tr class="${r.cls || ''}">${(r.cells || r).map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`,
    note: (s, cls = '') => `<div class="qw-note ${cls}">${s}</div>`,
    svg: s => `<div class="dg qw-dg">${s}</div>`,
    app(root, o) {
      const ui = { step: 0, ...o.state };
      root.classList.add('qw'); root.tabIndex = 0;
      root.innerHTML = '<div class="qw-top"></div><div class="qw-out"></div>';
      const top = root.firstChild, out = root.lastChild;
      let n = 0;
      const drawTop = () => { top.hidden = !o.top; if (o.top) top.innerHTML = o.top(ui); };
      const drawOut = () => {
        const st = o.steps ? o.steps(ui) : null, last = st ? st.length - 1 : 0;
        n = last;
        if (st) ui.step = Math.max(0, Math.min(ui.step, last));
        const s = st?.[ui.step], ex = s && (s.what || s.why || s.change)
          ? `<div class="qw-ex"><div class="qw-st">Krok ${ui.step + 1} / ${st.length}</div><h4>${s.title}</h4>${[['Co se děje', s.what, ''], ['Proč', s.why, ''], ['Co se změnilo', s.change, ' ch']].filter(p => p[1]).map(([l, t, c]) => `<div class="qw-p${c}"><span>${l}</span><p>${t}</p></div>`).join('')}</div>` : '';
        out.innerHTML = (st && last ? `<div class="qw-nav"><button data-act="prev" ${ui.step ? '' : 'disabled'}>◀ Zpět</button><div class="qw-dots">${st.map((x, i) => `<button data-act="go" data-i="${i}" title="${(x.title || '').replace(/"/g, '')}" class="${i === ui.step ? 'cur' : i < ui.step ? 'dn' : ''}"></button>`).join('')}</div><button data-act="next" class="on" ${ui.step < last ? '' : 'disabled'}>Další ▶</button></div>` : '')
          + `<div class="qw-body"><div class="qw-view">${s ? s.view : o.view(ui)}</div>${ex}</div>`;
      };
      const render = () => { drawTop(); drawOut(); };
      const go = i => { ui.step = Math.max(0, Math.min(n, i)); drawOut(); };
      root.addEventListener('keydown', e => {
        if (e.target.matches('input,select')) return;
        if (e.key === 'ArrowRight') { e.preventDefault(); go(ui.step + 1); } else if (e.key === 'ArrowLeft') { e.preventDefault(); go(ui.step - 1); }
      });
      root.addEventListener('click', e => {
        const b = e.target.closest('[data-act]'); if (!b || !root.contains(b)) return;
        const a = b.dataset.act;
        if (a === 'next') return go(ui.step + 1);
        if (a === 'prev') return go(ui.step - 1);
        if (a === 'go') return go(+b.dataset.i);
        o.act?.(ui, a, b.dataset, b); render();
      });
      root.addEventListener('input', e => {
        const el = e.target.closest('[data-in]'); if (!el) return;
        const k = el.dataset.in;
        ui[k] = el.type === 'number' || el.type === 'range' ? +el.value : el.type === 'checkbox' ? el.checked : el.value;
        o.input?.(ui, k);
        if (el.tagName === 'SELECT' || el.type === 'checkbox') render(); else drawOut();
      });
      render();
      return ui;
    }
  };
})();
