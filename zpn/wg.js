// Widget ZPN (blok { t: 'widget', name: 'lhuty' }): počítání lhůt podle § 605–608 občanského zákoníku krok za krokem.
(() => {
  const DN = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
  const U = (y, m, d) => new Date(Date.UTC(y, m, d));
  const fmt = d => `${d.getUTCDate()}. ${d.getUTCMonth() + 1}. ${d.getUTCFullYear()} (${DN[d.getUTCDay()]})`;
  const add = (d, n) => U(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate() + n);
  const same = (a, b) => a.getTime() === b.getTime();
  // doplněno mimo podklady: státní svátky ČR (pevné + Velký pátek a Velikonoční pondělí podle výpočtu Velikonoc)
  const easter = y => { const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25), g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4, l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451), mo = Math.floor((h + l - 7 * m + 114) / 31), da = ((h + l - 7 * m + 114) % 31) + 1; return U(y, mo - 1, da); };
  const FIX = [[1, 1, 'Nový rok'], [5, 1, 'Svátek práce'], [5, 8, 'Den vítězství'], [7, 5, 'Cyril a Metoděj'], [7, 6, 'Jan Hus'], [9, 28, 'Den české státnosti'], [10, 28, 'Vznik Československa'], [11, 17, 'Den boje za svobodu'], [12, 24, 'Štědrý den'], [12, 25, '1. svátek vánoční'], [12, 26, '2. svátek vánoční']];
  const holiday = d => { const y = d.getUTCFullYear(), e = easter(y); const f = FIX.find(([m, dd]) => d.getUTCMonth() + 1 === m && d.getUTCDate() === dd); return f ? f[2] : same(d, add(e, 1)) ? 'Velikonoční pondělí' : same(d, add(e, -2)) ? 'Velký pátek' : null; };
  const off = d => d.getUTCDay() === 0 || d.getUTCDay() === 6 || !!holiday(d);
  const why = d => (d.getUTCDay() === 6 ? 'sobota' : d.getUTCDay() === 0 ? 'neděle' : 'svátek – ' + holiday(d));
  const addMonths = (d, n) => { const y = d.getUTCFullYear(), m = d.getUTCMonth() + n, last = U(y, m + 1, 0).getUTCDate(), day = d.getUTCDate(); return { date: U(y, m, Math.min(day, last)), clamped: day > last }; };

  WG.reg('lhuty', root => WG.app(root, {
    state: { d: '2024-10-21', n: 8, u: 'd', half: false, hrs: false, t: '14:30' },
    top: ui => `${WG.lbl('Rozhodná skutečnost:')}<input type="date" data-in="d" class="qw-in" value="${ui.d}">${WG.lbl('lhůta')}${WG.num('n', ui.n, 1, 999)}${WG.sel('u', [['d', 'dnů'], ['w', 'týdnů'], ['m', 'měsíců'], ['y', 'let'], ['h', 'hodin']], ui.u)}${ui.u === 'm' ? `<label style="font-size:13px"><input type="checkbox" data-in="half" ${ui.half ? 'checked' : ''}> + polovina měsíce (15 dnů)</label>` : ''}${ui.u === 'h' ? WG.lbl('od času:') + WG.txt('t', ui.t, '14:30', 6) : ''}
      <div class="qw-row" style="width:100%">${WG.lbl('Příklady ze skript:')}${[['21. 10. 2024 + 8 dnů', '2024-10-21', 8, 'd'], ['31. 1. 2024 + 13 měsíců', '2024-01-31', 13, 'm'], ['31. 3. 2024 + 1 měsíc', '2024-03-31', 1, 'm'], ['5. 3. 2024 + 2 týdny', '2024-03-05', 2, 'w'], ['5. 3. 2024 14:30 + 48 hodin', '2024-03-05', 48, 'h']].map(([l, d, n, u]) => WG.btn('pre', l, false, `data-d="${d}" data-n="${n}" data-u="${u}"`)).join('')}</div>`,
    act: (ui, a, d) => { if (a === 'pre') { ui.d = d.d; ui.n = +d.n; ui.u = d.u; ui.half = false; ui.step = 0; } },
    input: ui => { ui.step = 0; },
    steps: ui => {
      const m = /^(\d{4})-(\d\d)-(\d\d)$/.exec(ui.d || ''), n = Math.trunc(ui.n);
      if (!m || !(n >= 1)) return [{ title: '', view: WG.note('Zadej platné datum a kladný počet.', 'bad') }];
      const D = U(+m[1], +m[2] - 1, +m[3]);
      const S = [{ title: 'Rozhodná skutečnost', what: `Událost, od které se lhůta počítá, nastala ${fmt(D)}.`, why: 'Každý výpočet začíná tím, že najdeme rozhodnou skutečnost (podání, doručení, vznik pohledávky).', change: `Začátek počítání: ${fmt(D)}`, view: `<div class="qw-big">${fmt(D)}</div>` }];
      if (ui.u === 'h') {
        const t = /^(\d{1,2}):(\d\d)$/.exec(ui.t.trim()); if (!t) return [{ title: '', view: WG.note('Zadej čas ve tvaru 14:30.', 'bad') }];
        const st = Date.UTC(+m[1], +m[2] - 1, +m[3], +t[1], +t[2]), en = new Date(st + n * 3600000), p = x => String(x).padStart(2, '0');
        S.push({ title: '§ 608: lhůta v hodinách', what: `Lhůta určená v hodinách se počítá <b>od okamžiku, kdy začne, do okamžiku, kdy skončí</b>: ${n} hodin od ${fmt(D)} ${ui.t}.`, why: 'Lhůta 48 hodin tedy není lhůtou dvou dnů a neposouvá se na začátek dalšího dne.', change: `Konec: ${en.getUTCDate()}. ${en.getUTCMonth() + 1}. ${en.getUTCFullYear()} v ${p(en.getUTCHours())}:${p(en.getUTCMinutes())}`, view: `<div class="qw-big">${n} h → ${en.getUTCDate()}. ${en.getUTCMonth() + 1}. ${en.getUTCFullYear()} ${p(en.getUTCHours())}:${p(en.getUTCMinutes())}</div>` });
        return S;
      }
      const first = add(D, 1);
      S.push({ title: '§ 605 odst. 1: začátek lhůty', what: `Lhůta počíná dnem, který následuje po rozhodné skutečnosti: ${fmt(first)}.`, why: 'Den události se do lhůty nezapočítává.', change: `První den lhůty: ${fmt(first)}`, view: `<div class="qw-big">${fmt(first)}</div>` });
      let end, expl, clamp = false;
      if (ui.u === 'd') { end = add(D, n); expl = `Lhůta ${n} ${n === 1 ? 'den' : n < 5 ? 'dny' : 'dnů'} začala ${fmt(first)}, ${n}. den lhůty je ${fmt(end)}.`; }
      else if (ui.u === 'w') { end = add(D, 7 * n); expl = `Konec lhůty podle týdnů připadá na den, který se pojmenováním shoduje s dnem rozhodné skutečnosti (${DN[D.getUTCDay()]}): ${n} × 7 dní později.`; }
      else if (ui.u === 'y') { const r = addMonths(D, 12 * n); end = r.date; clamp = r.clamped; expl = `Konec lhůty podle let připadá na den shodného čísla a měsíce.${clamp ? ' Takový den v měsíci není (29. 2.), připadne konec na poslední den měsíce.' : ''}`; }
      else { const r = addMonths(D, n); end = r.date; clamp = r.clamped; expl = `Konec lhůty podle měsíců připadá na den shodného čísla (${D.getUTCDate()}.) o ${n} měsíc(e/ů) později.${clamp ? ' Takový den v posledním měsíci není, proto připadne konec na <b>poslední den měsíce</b> (§ 605 odst. 2).' : ''}`;
        if (ui.half) { end = add(end, 15); expl += ` Polovinou měsíce se rozumí 15 dnů a část měsíce se počítá <b>naposled</b> (§ 606): ${fmt(end)}.`; } }
      S.push({ title: ui.u === 'd' ? 'Konec lhůty ve dnech' : 'Konec lhůty podle jednotky', what: expl, why: ui.u === 'd' ? 'Lhůta ve dnech: první den je den po události, poslední den je N-tý den.' : 'Konec připadá na den shodný s rozhodnou skutečností, nikoli na „nejbližší stejné číslo“.', change: `Vypočtený konec: ${fmt(end)}`, view: `<div class="qw-big">${fmt(end)}</div>` });
      let fin = end; const path = [];
      while (off(fin)) { path.push(`${fmt(fin)} – ${why(fin)}`); fin = add(fin, 1); }
      S.push({ title: path.length ? '§ 607: konec lhůty vychází na volný den' : '§ 607: konec lhůty je pracovní den', what: path.length ? `Konec ${fmt(end)} je ${why(end)}. Posledním dnem lhůty je nejblíže následující pracovní den.` : `${fmt(end)} je pracovní den, nic se neposouvá.`, why: 'Neplatí pro konkrétně určený termín plnění, jen pro lhůty.', change: path.length ? `Posun: ${path.join(' → ')} → <b>${fmt(fin)}</b>` : 'Bez posunu.', view: `<div class="qw-big">${fmt(fin)}</div><p class="mu" style="font-size:13px">Svátky (doplněno mimo podklady): pevné státní svátky ČR a Velký pátek a Velikonoční pondělí.</p>` });
      S.push({ title: 'Výsledek', what: `Lhůta ${n} ${{ d: 'dnů', w: 'týdnů', m: 'měsíců', y: 'let' }[ui.u]}${ui.half ? ' a půl měsíce' : ''} od ${fmt(D)} končí <b>${fmt(fin)}</b>.`, why: 'Kontrola postupu: rozhodná skutečnost → začátek dnem následujícím → konec shodného čísla → posun na pracovní den.', change: `Poslední den lhůty: ${fmt(fin)}`, view: `<div class="qw-big">${fmt(fin)}</div>` });
      return S;
    }
  }));
})();
