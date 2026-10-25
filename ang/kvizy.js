// Kvízy k tématům ANG: otázky jsou v kvizy-*.js jako KVIZ['id-tématu'] = [{ q, hint, o, a, why }].
// registerTopic se obalí: téma s kvízem dostane na konec sekci „Otestuj se“; má-li už widget 'kviz', otázky se k němu přidají.
window.KVIZ = {};
(() => {
  const reg = window.registerTopic;
  window.registerTopic = t => {
    const items = KVIZ[t.id];
    if (items) {
      const w = t.sections.flatMap(s => s.blocks).find(b => b.name === 'kviz');
      if (w) w.items.push(...items);
      else t.sections.push({ title: 'Otestuj se', blocks: [{ t: 'widget', name: 'kviz', title: 'Zkus si: kvíz k tématu', how: ['Vyber odpověď – hned se ukáže, zda je správná, a proč.', 'Šipkami ◀ ▶ přecházíš mezi otázkami; poslední stránka ukazuje skóre.', 'Otázky vycházejí z příkladů a pravidel v tomto tématu.'], items }] });
    }
    reg(t);
  };
})();
