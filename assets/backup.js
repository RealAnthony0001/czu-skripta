// Záloha postupu (hotová témata, kvízy, motiv) do souboru a zpět. localStorage je vázaný na adresu stránky (file:// vs. localhost:port), proto se mezi nimi "ztrácí".
(() => {
  const mine = k => k.startsWith('skripta-') || k === 'theme' || k === 'recall';
  const b = Object.assign(document.createElement('button'), { textContent: '💾', title: 'Zálohovat postup do souboru (Shift+klik = nahrát ze zálohy)' });
  const inp = Object.assign(document.createElement('input'), { type: 'file', accept: '.json' });
  b.onclick = e => {
    if (e.shiftKey) return inp.click();
    const d = Object.fromEntries(Object.keys(localStorage).filter(mine).map(k => [k, localStorage.getItem(k)]));
    const a = Object.assign(document.createElement('a'), { href: URL.createObjectURL(new Blob([JSON.stringify(d, null, 1)], { type: 'application/json' })), download: 'skripta-zaloha.json' });
    a.click();
  };
  inp.onchange = async () => {
    try {
      const d = JSON.parse(await inp.files[0].text());
      Object.entries(d).filter(([k]) => mine(k)).forEach(([k, v]) => localStorage.setItem(k, v));
      location.reload();
    } catch { alert('Soubor se nepodařilo načíst.'); }
  };
  document.querySelector('.top #theme').before(b);
})();
