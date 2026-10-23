// Společný engine: předmět = window.SUBJECT, témata se registrují přes registerTopic() z topics/*.js
const T = [], $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
window.registerTopic = t => T.push(t);
const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
const reEsc = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const store = { get: (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d } catch { return d } }, set: (k, v) => localStorage.setItem(k, JSON.stringify(v)) };
const KEY = 'skripta-' + SUBJECT.id, done = new Set(store.get(KEY + '-done', []));
let topics = [], spy;
// nedodělaná témata (bez podkladů) jsou zamčená; vypnutí: SUBJECT.lockDraft = false
const locked = t => SUBJECT.lockDraft && t.src === 'doplneno';
const num = i => String(i).padStart(2, '0');

const setTheme = t => { document.documentElement.dataset.theme = t; store.set('theme', t); $('#theme').textContent = t === 'dark' ? '☀ Světlý' : '☾ Tmavý' };
const setRecall = on => { document.body.classList.toggle('recall', on); store.set('recall', on); $('#recall').classList.toggle('on', on); };

// interaktivní bloky: { t: 'widget', name, title, x } – kód widgetu je v <předmět>/*.js a registruje se do window.WIDGETS[name] = (element, blok) => …
const WGB = [];
const LBL = { tip: 'Zapamatuj si', warn: 'Pozor', ex: 'Příklad' };
function block(b) {
  switch (b.t) {
    case 'p': return `<p>${b.x}</p>`;
    case 'ul': case 'ol': return `<${b.t}>${b.items.map(i => `<li>${i}</li>`).join('')}</${b.t}>`;
    case 'table': return table(b);
    case 'flow': return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="flow">${b.steps.map((s, k) => `<div class="fs"><span class="no">${num(k + 1)}</span><b>${s.h}</b>${s.x ? `<p>${s.x}</p>` : ''}</div>`).join('')}</div></div>`;
    case 'pyramid': { const n = b.levels.length; return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="pyr">${b.levels.map((l, k) => `<div class="pl" style="width:${n > 1 ? 48 + 52 * k / (n - 1) : 100}%;--a:${(1 - k / (n + 1)).toFixed(2)}"><b>${l.h}</b>${l.x ? `<span>${l.x}</span>` : ''}</div>`).join('')}</div></div>`; }
    case 'tree': { const nd = (x, d) => `<div class="tn d${Math.min(d, 3)}"><b>${x.h}</b>${x.x ? `<span>${x.x}</span>` : ''}</div>${x.kids?.length ? `<div class="tk">${x.kids.map(c => `<div class="tc">${nd(c, d + 1)}</div>`).join('')}</div>` : ''}`; return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="tree">${nd(b.root, 0)}</div></div>`; }
    case 'timeline': return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="tl">${b.items.map(i => `<div class="ti"><div class="w">${i.when}</div><b>${i.h}</b>${i.x ? `<p>${i.x}</p>` : ''}</div>`).join('')}</div></div>`;
    case 'nums': return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="nums">${b.items.map(i => `<div class="nm"><b>${i.n}</b>${i.u ? `<em>${i.u}</em>` : ''}<span>${i.x}</span></div>`).join('')}</div></div>`;
    case 'icons': return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="icons">${b.items.map(i => `<div class="ic"><div class="ico">${i.i}</div><b>${i.h}</b>${i.x ? `<span>${i.x}</span>` : ''}</div>`).join('')}</div></div>`;
    case 'versus': return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="vsb" style="--n:${b.cols.length}">${b.cols.map((c, k) => `<div class="vcol c${k}"><div class="vh">${c.h}</div><ul>${c.items.map(i => `<li>${i}</li>`).join('')}</ul></div>`).join('')}${b.cols.length === 2 ? '<div class="x">×</div>' : ''}</div>${b.x ? `<div class="vx"><span class="lb">Srozumitelně</span>${b.x}</div>` : ''}</div>`;
    case 'grid': return `<div class="tbl"><table><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`;
    case 'svg': return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="dg">${b.x}</div>${b.cap ? `<p class="cap">${b.cap}</p>` : ''}</div>`;
    case 'widget': WGB.push(b); return `<div class="vz">${b.title ? `<div class="vt">${b.title}</div>` : ''}<div class="wg" data-wi="${WGB.length - 1}"></div>${b.cap ? `<p class="cap">${b.cap}</p>` : ''}</div>`;
    case 'def': return `<div class="box def"><span class="lb">${b.term}</span>${b.x}</div>`;
    case 'law': return `<div class="box law"><span class="lb">${b.ref}</span>${b.x}</div>`;
    default: return `<div class="box ${b.t}"><span class="lb">${LBL[b.t] || b.t}</span>${b.x}</div>`;
  }
}
// tabulky se podle tvaru vykreslí jako: srovnání vedle sebe / glosář / karty / řádky s popisky
function table({ head: h, rows: r }) {
  const f = (c, k) => c ? `<div class="f"><span>${h[k]}</span>${c}</div>` : '';
  if (h.length >= 3 && /^(|hledisko|kritérium|znak)$/i.test(h[0].trim()) && h.length <= 4)
    return `<div class="vs" style="--n:${h.length - 1}">${h.slice(1).map((x, k) => `<div class="vh c${k}">${x}</div>`).join('')}${r.map(row => `<div class="vk">${row[0]}</div>${row.slice(1).map((c, k) => `<div class="vc c${k}">${c}</div>`).join('')}`).join('')}</div>`;
  if (h.length === 2) return `<div class="gl">${r.map(row => `<div class="gr"><div class="gt">${row[0]}</div><div>${row[1]}</div></div>`).join('')}</div>`;
  if (h.length <= 4 && r.length <= 6) return `<div class="cards">${r.map(row => `<div class="cd"><div class="ct">${row[0]}</div>${row.slice(1).map((c, k) => f(c, k + 1)).join('')}</div>`).join('')}</div>`;
  return `<div class="rl">${r.map(row => `<div class="rr"><div class="ct">${row[0]}</div><div class="rf">${row.slice(1).map((c, k) => f(c, k + 1)).join('')}</div></div>`).join('')}</div>`;
}
const sid = (t, i) => `${t.id}-s${i}`;
function topicHTML(t, i) {
  const src = t.src === 'doplneno' ? '<span class="badge sup" title="K tématu nebyly podklady – ověř v zákoně">Doplněno mimo podklady</span>' : '<span class="badge src">Z podkladů</span>';
  const prev = topics.slice(0, i).reverse().find(x => !locked(x)), next = topics.slice(i + 1).find(x => !locked(x));
  return `<article>
  <div class="crumb"><a href="#/">${SUBJECT.name}</a> / ${num(i)}</div>
  <header class="hero"><div class="tile"><span>${t.icon || '§'}</span><i>${num(i)}</i></div><div><h2>${t.title}</h2><p>${t.summary || ''}</p>
    <div class="meta">${src}${t.where ? `<span class="badge">${t.where}</span>` : ''}<span class="badge">${t.sections.length} sekcí</span><span class="badge">${(t.qa || []).length} otázek</span></div></div></header>
  ${t.vocab?.length ? `<details class="vocab" id="${t.id}-vocab" open><summary>Než začneš: slovníček (${t.vocab.length})</summary><dl>${t.vocab.map(v => `<div><dt>${v.w}</dt><dd>${v.x}</dd></div>`).join('')}</dl></details>` : ''}
  ${t.sections.map((s, k) => `<section id="${sid(t, k)}"><h3><span class="sn">${num(k + 1)}</span>${s.title}</h3>${s.blocks.map(block).join('')}</section>`).join('')}
  ${t.mistakes?.length ? `<div class="mist"><h3>Časté chyby</h3><ul>${t.mistakes.map(m => `<li>${m}</li>`).join('')}</ul></div>` : ''}
  <div class="qa-card" id="${t.id}-qa"><h3><span class="sn">?</span>Otázky k procvičení</h3>
    <div class="row"><button data-fc="start" class="on">▶ Zkoušení (kartičky)</button><button data-qa="open">Zobrazit odpovědi</button><button data-qa="close">Skrýt</button></div>
    <div id="fc"></div>
    ${(t.qa || []).map(q => `<details class="qa"><summary>${q.q}</summary><div class="a">${q.a}</div></details>`).join('')}</div>
  <div class="pager">${prev ? `<a class="btn" href="#/${prev.id}">← ${prev.title}</a>` : '<span></span>'}${next ? `<a class="btn" href="#/${next.id}">${next.title} →</a>` : ''}</div>
  </article>
  <aside class="info">
    ${t.key?.length ? `<div class="ibox"><div class="ih">Rychlý přehled</div><ul>${t.key.map(k => `<li>${k}</li>`).join('')}</ul></div>` : ''}
    <div class="ibox"><div class="ih">Na stránce</div><div class="toc">${t.vocab?.length ? `<a href="#" data-go="${t.id}-vocab"><span>Aa</span>Slovníček</a>` : ''}${t.sections.map((s, k) => `<a href="#" data-go="${sid(t, k)}"><span>${num(k + 1)}</span>${s.title}</a>`).join('')}<a href="#" data-go="${t.id}-qa"><span>?</span>Otázky</a></div>
      <div class="pad"><button id="done" class="${done.has(t.id) ? 'on' : ''}">${done.has(t.id) ? '✔ Naučeno' : 'Označit jako naučené'}</button></div></div>
  </aside>`;
}
const lecPills = (t, long) => (t.lec || []).map(n => `<span class="lec" title="Přednáška ${n}" style="--lc:hsl(${n * 137.5 % 360} 65% 55%)">${long ? 'Přednáška ' : 'P'}${n}</span>`).join('');
function home() {
  const ok = topics.filter(t => !locked(t)), wip = topics.filter(locked), nd = ok.filter(t => done.has(t.id)).length;
  const card = t => { const i = topics.indexOf(t), l = locked(t);
    return `<${l ? 'div' : 'a href="#/' + t.id + '"'} class="tcard${l ? ' lock' : ''}${done.has(t.id) ? ' done' : ''}"><div class="n">${num(i)}</div>${l || !t.lec ? '' : `<div class="lecs">${lecPills(t, 1)}</div>`}<b>${t.title}</b>
    <span class="s">${t.summary || ''}</span>${l ? '<span class="wip">Nedodělané – chybí podklady</span>' : `<div class="f"><span>${t.sections.length} sekcí</span><span>${(t.qa || []).length} otázek</span>${done.has(t.id) ? '<span style="color:var(--ok)">✔ naučeno</span>' : ''}</div>`}</${l ? 'div' : 'a'}>`; };
  return `<div class="crumb">${SUBJECT.code || ''}</div><header class="hero"><div><h2>${SUBJECT.name}</h2><p>${SUBJECT.desc || ''}</p></div></header>
  <div class="stats"><div><b>${ok.length}</b><span>témat k učení</span></div><div><b>${ok.reduce((a, t) => a + (t.qa || []).length, 0)}</b><span>otázek</span></div><div><b>${nd}/${ok.length}</b><span>naučeno</span></div></div>
  <div class="gh">Hotová témata</div><div class="grid">${ok.map(card).join('')}</div>
  ${wip.length ? `<div class="gh">Nedodělané (${wip.length})</div><div class="notice">K těmto tématům nebyly dodány podklady, proto jsou zatím zamčená. Po dodání materiálů se odemknou.</div><div class="grid" style="margin-top:12px">${wip.map(card).join('')}</div>` : ''}`;
}
// myšlenková mapa (#/mapa): widget 'mapa' z <předmět>/map.js – kostra předmětu + sekce a pojmy z témat
const mapHTML = () => `<div class="crumb"><a href="#/">${SUBJECT.name}</a> / Mapa</div><header class="hero"><div><h2>Myšlenková mapa</h2><p>Klikni na uzel – rozbalí se a vpravo dole uvidíš vysvětlení a odkaz do kapitoly. Najetím myší se ukáže krátký popis.</p></div></header>${block({ t: 'widget', name: 'mapa' })}`;
function search(q) {
  const re = new RegExp(reEsc(q), 'i'), strip = x => x.replace(/<[^>]+>/g, ' ');
  const hits = topics.filter(t => !locked(t)).map(t => ({ t, parts: [...t.sections.flatMap(s => s.blocks.map(b => [s.title, strip(Object.values(b).flat(2).join(' '))])), ...(t.vocab || []).map(v => ['Slovníček', strip(v.w + ' ' + v.x)]), ...(t.qa || []).map(x => ['Otázky', strip(x.q + ' ' + x.a)])].filter(([, x]) => re.test(x)) })).filter(h => h.parts.length);
  return `<h2 style="margin-top:0">Hledání: „${esc(q)}“</h2>` + (hits.map(({ t, parts }) => `<div class="card"><a href="#/${t.id}"><b>${t.title}</b></a>${parts.slice(0, 3).map(([s, x]) => { const m = x.search(re); return `<div class="hit"><b>${s}</b>: …${esc(x.slice(Math.max(0, m - 50), m + 90)).replace(new RegExp(reEsc(esc(q)), 'ig'), '<mark>$&</mark>')}…</div>`; }).join('')}</div>`).join('') || '<p>Nic nenalezeno.</p>');
}
function nav() {
  const nd = topics.filter(t => !locked(t));
  $('#side').innerHTML = `<input id="q" type="search" placeholder="Hledat v celém skriptu…" value="${esc(window._q || '')}">
  <div class="prog"><i style="width:${nd.length ? nd.filter(t => done.has(t.id)).length / nd.length * 100 : 0}%"></i></div>
  <a href="#/" class="${!location.hash.slice(2) ? 'cur' : ''}"><span class="n">⌂</span>Přehled</a>${window.WIDGETS?.mapa ? `<a href="#/mapa" class="${location.hash === '#/mapa' ? 'cur' : ''}"><span class="n">🗺</span>Myšlenková mapa</a>` : ''}<div class="grp">Témata</div>
  ${topics.map((t, i) => locked(t) ? `<a class="lock" title="Nedodělané – chybí podklady"><span class="n">${num(i)}</span>${t.title}</a>` : `<a href="#/${t.id}" class="${location.hash === '#/' + t.id ? 'cur' : ''}"><span class="n">${num(i)}</span>${t.title}${lecPills(t)}${done.has(t.id) ? '<span class="ok">✔</span>' : ''}</a>`).join('')}`;
  $('#q').oninput = e => { window._q = e.target.value.trim(); location.hash = window._q.length > 1 ? '#/?q=' + encodeURIComponent(window._q) : '#/'; };
}
// kartičky: náhodné pořadí, sebehodnocení Vím / Nevím, na konci opakování nezvládnutých
let fc;
function fcRender() {
  const box = $('#fc'); if (!box) return;
  if (!fc) return void (box.innerHTML = '');
  if (fc.i >= fc.order.length) {
    box.innerHTML = `<div class="fc"><div class="q">Hotovo: ${fc.ok} / ${fc.order.length}</div>${fc.bad.length ? `<p>Nezvládnuté: ${fc.bad.length}</p><button data-fc="redo" class="on">Zopakovat nezvládnuté</button> ` : '<p>Všechno správně 🎉</p>'}<button data-fc="stop">Zavřít</button></div>`; return;
  }
  const q = fc.t.qa[fc.order[fc.i]];
  box.innerHTML = `<div class="fc"><div class="cnt"><span>${fc.i + 1} / ${fc.order.length}</span><span>✔ ${fc.ok} · ✘ ${fc.bad.length}</span></div><div class="q">${q.q}</div>
  ${fc.show ? `<div class="a">${q.a}</div><button class="yes" data-fc="yes">✔ Věděl(a) jsem</button> <button class="no" data-fc="no">✘ Nevěděl(a) jsem</button>` : '<button data-fc="show" class="on">Ukázat odpověď</button>'} <button data-fc="stop">Konec</button></div>`;
}
function fcAct(a) {
  const t = topics.find(x => '#/' + x.id === location.hash);
  if (a === 'start') { fc = { t, order: t.qa.map((_, i) => i).sort(() => Math.random() - .5), i: 0, ok: 0, bad: [], show: false }; }
  else if (a === 'redo') fc = { ...fc, order: fc.bad, i: 0, ok: 0, bad: [], show: false };
  else if (a === 'stop') fc = null;
  else if (a === 'show') fc.show = true;
  else { a === 'yes' ? fc.ok++ : fc.bad.push(fc.order[fc.i]); fc.i++; fc.show = false; }
  fcRender();
}
// kvíz (#/kviz): window.QUIZZES = [{ id, title, desc, items }] z <předmět>/quiz.js (výběr na #/kviz, kvíz na #/kviz/<id>); otázka je „zapamatovaná“ po QZ_N správných odpovědích v řadě, špatná odpověď streak nuluje a otázku vrátí na konec kola
const QZ_N = 2, qzKey = u => KEY + '-quiz-' + u.id, shuffle = a => a.map(x => [Math.random(), x]).sort((x, y) => x[0] - y[0]).map(x => x[1]);
let qz;
function qzList() {
  $('#main').innerHTML = `<div class="crumb">${SUBJECT.name} / Kvízy</div><header class="hero"><div><h2>Kvízy</h2><p>Vyber kvíz. Otázky i odpovědi se míchají a kvíz se opakuje, dokud ho nemáš zapamatovaný.</p></div></header>
  <div class="grid">${QUIZZES.map((u, i) => { const P = store.get(qzKey(u), {}), m = u.items.filter(x => (P[x.q] || 0) >= QZ_N).length;
    return `<a href="#/kviz/${u.id}" class="tcard${m === u.items.length ? ' done' : ''}"><div class="n">${num(i + 1)}</div><b>${u.title}</b><span class="s">${u.desc || ''}</span><div class="f"><span>${u.items.length} otázek</span><span>${m === u.items.length ? '<span style="color:var(--ok)">✔ zapamatováno</span>' : `zapamatováno ${m}/${u.items.length}`}</span></div></a>`; }).join('')}</div>`;
}
function qzRender() {
  const QUIZ = qz.qu, P = store.get(qzKey(QUIZ), {}), n = QUIZ.items.length, left = QUIZ.items.filter(x => (P[x.q] || 0) < QZ_N);
  if (!qz.cur && left.length) {
    if (!qz.queue.length) qz.queue = shuffle(left);
    qz.cur = qz.queue.shift(); qz.pick = null; qz.opts = shuffle(qz.cur.a.map((t, i) => ({ t, ok: !i })));
  }
  const body = !left.length && qz.pick == null ?`<div class="fc"><div class="q">Všech ${n} otázek máš zapamatovaných 🎉</div><button data-qz="reset" class="on">Začít znovu od nuly</button></div>`
    : `<div class="fc"><div class="cnt"><span>Zbývá naučit: ${left.length} z ${n}</span><span>zapamatování = ${QZ_N}× správně za sebou</span></div><div class="q">${qz.cur.q}</div>
    <div class="qz-opts">${qz.opts.map((o, k) => `<button class="qz-o${qz.pick == null ? '' : o.ok ? ' ok' : k === qz.pick ? ' bad' : ''}" data-qz="pick" data-k="${k}"${qz.pick == null ? '' : ' disabled'}><b>${'ABCD'[k]}</b>${o.t}</button>`).join('')}</div>
    ${qz.pick == null ? '' : `<p>${qz.opts[qz.pick].ok ? '✔ Správně' : '✘ Špatně – správná odpověď je zvýrazněná.'} (${P[qz.cur.q] || 0}/${QZ_N})</p><button data-qz="next" class="on">Další →</button>`}</div>`;
  $('#main').innerHTML = `<div class="crumb"><a href="#/kviz">Kvízy</a> / ${SUBJECT.name}</div><header class="hero"><div><h2>${QUIZ.title}</h2><p>Otázky i odpovědi se míchají; kvíz se opakuje, dokud nemáš všechno zapamatované.</p></div></header>
  <div class="stats"><div><b>${n - left.length}/${n}</b><span>zapamatováno</span></div></div>${body}${left.length && n > left.length ? '<p><button data-qz="reset">Resetovat pokrok</button></p>' : ''}`;
}
function qzAct(a, k) {
  const P = store.get(qzKey(qz.qu), {});
  if (a === 'pick' && qz.pick == null) {
    qz.pick = +k; const ok = qz.opts[qz.pick].ok;
    P[qz.cur.q] = ok ? (P[qz.cur.q] || 0) + 1 : 0; store.set(qzKey(qz.qu), P);
    if (!ok) qz.queue.push(qz.cur);
  } else if (a === 'next') qz.cur = qz.pick = null;
  else if (a === 'reset') { store.set(qzKey(qz.qu), {}); qz = { qu: qz.qu, queue: [] }; }
  qzRender();
}
function route() {
  const h = decodeURIComponent(location.hash.slice(2)), m = $('#main');
  document.body.classList.remove('nav'); spy?.disconnect(); fc = null;
  let i = topics.findIndex(t => t.id === h);
  if (i >= 0 && locked(topics[i])) { location.hash = '#/'; return; }
  const q = h.startsWith('?q='), isQz = /^kviz(\/|$)/.test(h) && window.QUIZZES, qu = isQz && QUIZZES.find(u => 'kviz/' + u.id === h);
  m.className = i >= 0 ? 'topic' : '';
  if (isQz) { qu ? (qz = { qu, queue: [] }, qzRender()) : qzList(); } else
  m.innerHTML = q ? search(h.slice(3)) : i >= 0 ? topicHTML(topics[i], i) : h === 'mapa' && window.WIDGETS?.mapa ? mapHTML() : home();
  if (window.QUIZZES) $('#quizbtn').textContent = isQz ? '📖 Skripta' : '📝 Kvízy';
  $$('.wg').forEach(el => { const b = WGB[+el.dataset.wi]; window.WIDGETS?.[b.name]?.(el, b); });
  document.title = (i >= 0 ? topics[i].title + ' – ' : '') + SUBJECT.name;
  if (!q) window._q = '';
  nav(); if (q) { $('#q').value = window._q = h.slice(3); $('#q').focus(); }
  scrollTo(0, 0);
  if (i >= 0) { // zvýraznění aktuální sekce v obsahu
    const links = $$('.toc a');
    spy = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && links.forEach(a => a.classList.toggle('act', a.dataset.go === e.target.id))), { rootMargin: '-60px 0px -70% 0px' });
    $$('article section, .qa-card, .vocab').forEach(s => spy.observe(s));
  }
}
document.addEventListener('click', e => {
  const g = e.target.closest('[data-go]'), qa = e.target.dataset.qa, f = e.target.dataset.fc;
  if (g) { e.preventDefault(); document.getElementById(g.dataset.go)?.scrollIntoView(); }
  if (qa) $$('details.qa').forEach(d => d.open = qa === 'open');
  if (f) fcAct(f);
  const z = e.target.closest('[data-qz]'); if (z) qzAct(z.dataset.qz, z.dataset.k);
  const h3 = e.target.closest('article section>h3'); if (h3) h3.parentElement.classList.toggle('fold');
  const bx = e.target.closest('.recall .box'); if (bx) bx.classList.toggle('shown');
  if (e.target.id === 'done') { const id = topics.find(t => '#/' + t.id === location.hash).id; done.has(id) ? done.delete(id) : done.add(id); store.set(KEY + '-done', [...done]); const y = scrollY; route(); scrollTo(0, y); }
});
addEventListener('DOMContentLoaded', () => {
  topics = T.sort((a, b) => a.order - b.order);
  $('#theme').onclick = () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  $('#recall').onclick = () => setRecall(!document.body.classList.contains('recall'));
  if (window.QUIZZES) { const b = document.createElement('button'); b.id = 'quizbtn'; b.onclick = () => location.hash = location.hash.startsWith('#/kviz') ? '#/' : '#/kviz'; $('#recall').before(b); }
  $('#burger').onclick = () => document.body.classList.toggle('nav');
  setTheme(store.get('theme', 'dark')); setRecall(store.get('recall', false)); route();
});
addEventListener('hashchange', route);
