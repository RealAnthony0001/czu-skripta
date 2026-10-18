// SVG helpery pro diagramy (blok { t: 'svg', title, x, cap }); třídy se styly viz style.css (.dg)
const DG = {
  svg: (w, h, body, max = 720) => `<svg viewBox="0 0 ${w} ${h}" style="max-width:${max}px" role="img"><defs><marker id="ar" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0L8,4L0,8z"/></marker></defs>${body}</svg>`,
  text: (x, y, s, cls = '') => `<text x="${x}" y="${y}" class="${cls}">${s}</text>`,
  rect: (x, y, w, h, cls = 'b') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" class="${cls}"/>`,
  // arrow: '' | 'end' | 'both'
  line: (x1, y1, x2, y2, cls = 'ln', arrow = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="${cls}"${arrow ? ' marker-end="url(#ar)"' : ''}${arrow === 'both' ? ' marker-start="url(#ar)"' : ''}/>`,
  path: (d, cls = 'ln', arrow = '') => `<path d="${d}" class="${cls}"${arrow ? ' marker-end="url(#ar)"' : ''}${arrow === 'both' ? ' marker-start="url(#ar)"' : ''}/>`,
  // obdélník s popiskem (a volitelným druhým řádkem) uprostřed
  box(x, y, w, h, cls, label, sub = '') {
    const m = x + w / 2, c = y + h / 2;
    return DG.rect(x, y, w, h, cls) + (sub ? DG.text(m, c - 2, label, 'c bd') + DG.text(m, c + 14, sub, 'c sm mu') : DG.text(m, c + 5, label, 'c bd'));
  },
  // řada buněk s jedním znakem (bity); cls = pole tříd po buňkách
  cells(x, y, bits, cls = [], w = 30, h = 34) {
    return [...bits].map((b, i) => DG.rect(x + i * w, y, w, h, cls[i] || 'b') + DG.text(x + i * w + w / 2, y + h / 2 + 5, b, 'c mo')).join('');
  }
};
