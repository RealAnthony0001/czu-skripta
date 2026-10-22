// Společný engine myšlenkové mapy (stránka #/mapa, widget { t: 'widget', name: 'mapa' }, viz app.js)
// Předmět v <předmět>/map.js zavolá MINDMAP(kostra): kostra je ručně (kořen, větve, id témat), pod tématy se sekce a pojmy berou přímo z dat témat (slovníček, definice, srovnání, stromy, dlaždice…).
window.MINDMAP = SKEL => {
  const strip = s => String(s ?? '').replace(/<[^>]+>/g, '');
  const norm = s => strip(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const it = (i, h = i.h) => ({ h, x: i.x });
  const group = (title, kids) => title ? [{ h: title, kids }] : kids;
  const tnode = n => ({ h: n.h, x: n.x, kids: n.kids?.map(tnode) });
  // pojmy z jednoho bloku tématu
  function concepts(b) {
    switch (b.t) {
      case 'def': return [{ h: b.term, x: b.x }];
      case 'law': return [{ h: b.ref, x: b.x }];
      case 'versus': return [{ h: b.title, x: b.x, kids: b.cols.map(c => ({ h: c.h, x: c.items.join(' · ') })) }];
      case 'tree': return [tnode(b.root)];
      case 'icons': case 'flow': case 'timeline': return group(b.title, (b.items || b.steps).map(i => it(i, i.when ? `${i.when}: ${i.h}` : i.h)));
      case 'pyramid': return group(b.title, b.levels.map(i => it(i)));
      case 'nums': return group(b.title, b.items.map(i => ({ h: `${i.n} ${i.u || ''}`, x: i.x })));
      case 'table': return b.rows.map(r => ({ h: r[0], x: r.slice(1).map((c, k) => b.head.length > 2 && b.head[k + 1] ? `<b>${b.head[k + 1]}:</b> ${c}` : c).filter(Boolean).join('<br>') }));
      default: return [];
    }
  }
  function topicNode(t) {
    if (locked(t)) return { h: `${t.icon || '§'} ${t.title}`, x: 'Nedodělané – k tématu chybí podklady, proto je zamčené.', lock: true };
    const go = (n, id) => (n.go = id, n.kids?.forEach(k => go(k, id)), n);
    const kids = [
      ...(t.vocab?.length ? [go({ h: '📖 Slovníček', kids: t.vocab.map(v => ({ h: v.w, x: v.x })) }, t.id + '-vocab')] : []),
      ...t.sections.map((s, k) => go({ h: s.title, kids: s.blocks.flatMap(concepts).flatMap(n => !n.x && n.kids && strip(n.h) === strip(s.title) ? n.kids : [n]) }, `${t.id}-s${k}`))
    ];
    return { h: `${t.icon || '§'} ${t.title}`, x: t.summary, tid: t.id, kids };
  }

  // plátno: kořen uprostřed, větve na obě strany; uzly jdou přetáhnout (posun se dědí na podstrom), pozadí posouvá, kolečko zoomuje
  const HG = 70, VG = 12; // vodorovná mezera mezi úrovněmi, svislá mezi sourozenci (px)
  window.WIDGETS = window.WIDGETS || {};
  window.WIDGETS.mapa = el => {
    const byId = Object.fromEntries(topics.map(t => [t.id, t]));
    const used = new Set(SKEL.kids.flatMap(g => g.kids));
    const rest = topics.filter(t => t.order > 0 && !used.has(t.id)); // nové téma bez místa v kostře se neztratí
    const root = { ...SKEL, kids: [...SKEL.kids, ...(rest.length ? [{ h: 'Ostatní', kids: rest.map(t => t.id) }] : [])].map(g => ({ ...g, kids: g.kids.filter(id => byId[id]).map(id => ({ ...topicNode(byId[id]), tid: id })) })) };
    const N = [], count = n => (n.kids || []).reduce((s, k) => s + 1 + count(k), 0);
    const add = (n, d, p, c) => {
      const i = N.push({ ...n, d, p, c: n.c || c, s: norm(n.h + ' ' + (n.x || '')), n: count(n), k: [], open: d < 2, ox: 0, oy: 0, cx: 0, cy: 0, gx: 0, gy: 0, side: 1 }) - 1;
      if (p >= 0) N[p].k.push(i);
      n.kids?.forEach(k => add(k, d + 1, i, n.c || c));
    };
    add(root, 0, -1, 'var(--accent)');
    el.innerHTML = `<div class="mm-top"><input type="search" placeholder="Hledat pojem v mapě…"><button data-mm="fit">⌖ Vycentrovat</button><button data-mm="all">Rozbalit vše</button><button data-mm="none">Sbalit</button><button data-mm="fs">⛶ Celá obrazovka</button><span class="mm-cnt">${N.length} uzlů</span></div>
      <div class="mm-cv"><div class="mm-w"><svg class="mm-e">${N.map((n, i) => i ? `<path style="--c:${n.c}"/><path class="s" style="--c:${n.c}"/>` : '').join('')}</svg>
      ${N.map((n, i) => `<div class="mm-n d${Math.min(n.d, 4)}${n.lock ? ' lock' : ''}" data-i="${i}" style="--c:${n.c};--r:${((i * 7919) % 5 - 2) * .6}deg" title="${strip(n.cx).replace(/"/g, '&quot;')}">${n.lock ? '🔒 ' : ''}${n.h}${n.n ? `<i>${n.n}</i>` : ''}</div>`).join('')}</div>
      <div class="mm-hint">táhni pozadí = posun · kolečko = zoom · uzel jde přetáhnout · klik = rozbalit</div></div><div class="mm-d" hidden></div>`;
    const cv = el.querySelector('.mm-cv'), W = el.querySelector('.mm-w'), D = el.querySelector('.mm-d'), C = el.querySelector('.mm-cnt');
    const E = [...el.querySelectorAll('.mm-e path')], B = [...el.querySelectorAll('.mm-n')];
    let view = { x: 0, y: 0, k: 1 }, anchor = null, raf = 0, q = '';
    const vis = i => { for (let j = N[i].p; j >= 0; j = N[j].p) if (!N[j].open) return false; return true; };
    const off = i => { let x = 0, y = 0; for (let j = i; j >= 0; j = N[j].p) { x += N[j].ox; y += N[j].oy; } return [x, y]; };
    // rozložení jako klasická myšlenková mapa: kořen uprostřed, větve napravo i nalevo, podstromy pod sebou bez překryvu
    let S = [];
    function layout() {
      N.forEach((n, i) => B[i].hidden = !vis(i));
      S = B.map(b => b.hidden ? [0, 0] : [b.offsetWidth, b.offsetHeight]);
      const H = [], h = i => H[i] ??= N[i].open && N[i].k.length ? Math.max(S[i][1], N[i].k.reduce((s, k) => s + h(k), 0) + VG * (N[i].k.length - 1)) : S[i][1];
      const place = (i, side) => {
        const n = N[i]; if (!n.open) return;
        let y = n.gy - (n.k.reduce((s, k) => s + h(k), 0) + VG * (n.k.length - 1)) / 2;
        n.k.forEach(k => { const m = N[k]; m.side = side; m.gx = n.gx + side * (S[i][0] / 2 + HG + S[k][0] / 2) + m.ox; m.gy = y + h(k) / 2 + m.oy; y += h(k) + VG; place(k, side); });
      };
      const r = N[0], all = r.k.reduce((s, k) => s + h(k), 0); r.gx = r.ox; r.gy = r.oy;
      let acc = 0; const sides = { 1: [], [-1]: [] };
      r.k.forEach(k => { sides[acc < all / 2 ? 1 : -1].push(k); acc += h(k); }); // první polovina větví vpravo, zbytek vlevo
      [1, -1].forEach(side => {
        const ks = side < 0 ? sides[-1].reverse() : sides[1]; // vlevo odspodu nahoru, ať větve jdou kolem dokola
        let y = r.gy - (ks.reduce((s, k) => s + h(k), 0) + VG * 3 * (ks.length - 1)) / 2;
        ks.forEach(k => { const m = N[k]; m.side = side; m.gx = r.gx + side * (S[0][0] / 2 + HG * 1.6 + S[k][0] / 2) + m.ox; m.gy = y + h(k) / 2 + m.oy; y += h(k) + VG * 3; place(k, side); });
      });
      N.forEach((n, i) => { const v = !B[i].hidden; if (v && !n.seen) { const p = N[Math.max(n.p, 0)]; n.cx = p.cx; n.cy = p.cy; } n.seen = v; if (i) E[2 * i - 2].style.display = E[2 * i - 1].style.display = v ? '' : 'none'; B[i].classList.toggle('open', n.open && n.k.length > 0); });
      kick();
    }
    const setView = () => { W.style.transform = `translate(${view.x}px,${view.y}px) scale(${view.k})`; cv.style.backgroundPosition = `${view.x}px ${view.y}px`; cv.style.backgroundSize = `${24 * view.k}px ${24 * view.k}px`; };
    function frame() {
      let moving = false;
      N.forEach((n, i) => {
        if (B[i].hidden) return;
        const dx = n.gx - n.cx, dy = n.gy - n.cy; if (Math.abs(dx) + Math.abs(dy) > .5) { n.cx += dx * .22; n.cy += dy * .22; moving = true; } else { n.cx = n.gx; n.cy = n.gy; }
        B[i].style.left = n.cx + 'px'; B[i].style.top = n.cy + 'px';
        if (i) {
          const p = N[n.p], x0 = p.cx + n.side * S[n.p][0] / 2, x1 = n.cx - n.side * S[i][0] / 2, mx = (x0 + x1) / 2;
          const d = `M${x0},${p.cy} C${mx},${p.cy} ${mx},${n.cy} ${x1},${n.cy}`;
          E[2 * i - 2].setAttribute('d', d); E[2 * i - 1].setAttribute('d', d);
        }
      });
      if (anchor) { const n = N[anchor.i]; view.x = anchor.sx - n.cx * view.k; view.y = anchor.sy - n.cy * view.k; }
      setView();
      raf = moving ? requestAnimationFrame(frame) : 0;
    }
    const kick = () => raf || (raf = requestAnimationFrame(frame));
    function fit(only) {
      const ids = N.map((_, i) => i).filter(i => !B[i].hidden && (!only || only.has(i)));
      const xs = ids.map(i => N[i].gx), ys = ids.map(i => N[i].gy), w = cv.clientWidth, h = cv.clientHeight;
      const x0 = Math.min(...xs) - 120, x1 = Math.max(...xs) + 120, y0 = Math.min(...ys) - 60, y1 = Math.max(...ys) + 60;
      view.k = Math.min(1.1, w / (x1 - x0), h / (y1 - y0)); view.x = w / 2 - (x0 + x1) / 2 * view.k; view.y = h / 2 - (y0 + y1) / 2 * view.k;
      anchor = null; setView();
    }
    const path = i => { const a = []; for (let j = N[i].p; j > 0; j = N[j].p) a.unshift(N[j].h); return a; };
    const topicOf = i => { for (let j = i; j >= 0; j = N[j].p) if (N[j].tid) return N[j].tid; };
    function show(i) {
      const n = N[i], tid = topicOf(i);
      B.forEach(b => b.classList.remove('sel')); B[i].classList.add('sel');
      D.hidden = false; D.style.setProperty('--c', n.c);
      D.innerHTML = `<button class="mm-x" data-mm="close">✕</button><div class="mm-p">${path(i).join(' › ')}</div><h4>${n.h}</h4>${n.x ? `<div>${n.x}</div>` : ''}
        ${tid && !n.lock ? `<a class="btn" href="#/${tid}" data-go2="${n.go || ''}">Otevřít v kapitole →</a>` : ''}`;
    }
    // ukazatel: uzel = přetažení nebo klik (pohyb < 4 px), pozadí = posun plátna
    let drag = null;
    cv.onpointerdown = e => {
      const b = e.target.closest('.mm-n'); cv.setPointerCapture(e.pointerId);
      drag = { i: b ? +b.dataset.i : -1, x: e.clientX, y: e.clientY, moved: false }; anchor = null;
    };
    cv.onpointermove = e => {
      if (!drag) return;
      const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      if (!drag.moved && Math.abs(dx) + Math.abs(dy) < 4) return;
      drag.moved = true; drag.x = e.clientX; drag.y = e.clientY; cv.classList.add('grab');
      if (drag.i < 0) { view.x += dx; view.y += dy; setView(); return; }
      const n = N[drag.i]; n.ox += dx / view.k; n.oy += dy / view.k;
      N.forEach((m, j) => { for (let a = j; a >= 0; a = N[a].p) if (a === drag.i) { m.gx += dx / view.k; m.gy += dy / view.k; m.cx = m.gx; m.cy = m.gy; break; } });
      kick();
    };
    cv.onpointerup = e => {
      const d = drag; drag = null; cv.classList.remove('grab');
      if (!d || d.moved || d.i < 0) return;
      const n = N[d.i];
      show(d.i);
      if (n.k.length && !n.lock) { n.open = !n.open; anchor = { i: d.i, sx: view.x + n.cx * view.k, sy: view.y + n.cy * view.k }; layout(); }
    };
    cv.onwheel = e => {
      e.preventDefault(); anchor = null;
      const r = cv.getBoundingClientRect(), mx = e.clientX - r.left, my = e.clientY - r.top, k = Math.min(2.5, Math.max(.05, view.k * Math.exp(-e.deltaY * .0015)));
      view.x = mx - (mx - view.x) * k / view.k; view.y = my - (my - view.y) * k / view.k; view.k = k; setView();
    };
    el.onclick = e => {
      const a = e.target.closest('[data-mm]')?.dataset.mm, g = e.target.closest('[data-go2]');
      if (a === 'close') D.hidden = true;
      if (a === 'fit') fit();
      if (a === 'all' || a === 'none') { N.forEach(n => n.open = a === 'all' || n.d < 2); layout(); fit(); }
      if (a === 'fs') document.fullscreenElement ? document.exitFullscreen() : el.requestFullscreen?.().then(() => setTimeout(fit, 100));
      if (g?.dataset.go2) addEventListener('hashchange', () => document.getElementById(g.dataset.go2)?.scrollIntoView(), { once: true });
    };
    el.querySelector('input').oninput = e => {
      q = norm(e.target.value.trim()); const on = q.length > 1, hit = new Set(), path = new Set();
      if (on) N.forEach((n, i) => { if (n.s.includes(q)) { hit.add(i); for (let j = n.p; j >= 0; j = N[j].p) path.add(j); } });
      N.forEach((n, i) => { n.open = on ? path.has(i) : n.d < 2; B[i].classList.toggle('hit', hit.has(i)); B[i].classList.toggle('path', path.has(i)); });
      el.classList.toggle('mm-q', on);
      C.textContent = on ? `${hit.size} nalezeno` : `${N.length} uzlů`;
      layout(); fit(on && hit.size ? new Set([...hit, ...path]) : null);
    };
    layout(); N.forEach(n => { n.cx = n.gx; n.cy = n.gy; }); fit();
  };
};
