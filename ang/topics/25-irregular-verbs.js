// Seznam nepravidelných sloves z Grammar reference (s. 176); skupiny podle vzorce se počítají ze seznamu
const IRR = (() => {
  const L = `be|was / were|been
beat|beat|beaten
become|became|become
begin|began|begun
bend|bent|bent
break|broke|broken
bring|brought|brought
build|built|built
buy|bought|bought
burn|burnt / burned|burnt / burned
burst|burst|burst
catch|caught|caught
choose|chose|chosen
come|came|come
cost|cost|cost
cut|cut|cut
deal|dealt|dealt
do|did|done
draw|drew|drawn
dream|dreamt / dreamed|dreamt / dreamed
drink|drank|drunk
drive|drove|driven
eat|ate|eaten
fall|fell|fallen
feel|felt|felt
fight|fought|fought
find|found|found
fly|flew|flown
forget|forgot|forgotten
freeze|froze|frozen
get|got|got (BrE) / gotten (AmE)
give|gave|given
go|went|gone / been
grow|grew|grown
have|had|had
hear|heard|heard
hide|hid|hidden
hit|hit|hit
hold|held|held
hurt|hurt|hurt
keep|kept|kept
know|knew|known
lay|laid|laid
lead|led|led
learn|learnt / learned|learnt / learned
leave|left|left
lend|lent|lent
let|let|let
lie|lay|lain
light|lit|lit
lose|lost|lost
make|made|made
mean|meant|meant
meet|met|met
pay|paid|paid
put|put|put
quit|quit|quit
read|read|read
ride|rode|ridden
ring|rang|rung
rise|rose|risen
run|ran|run
say|said|said
see|saw|seen
sell|sold|sold
send|sent|sent
set|set|set
shoot|shot|shot
show|showed|shown
shut|shut|shut
sit|sat|sat
sink|sank|sunk
sleep|slept|slept
speak|spoke|spoken
spend|spent|spent
spill|spilt / spilled|spilt / spilled
spoil|spoilt|spoilt
spread|spread|spread
stand|stood|stood
steal|stole|stolen
stick|stuck|stuck
swim|swam|swum
take|took|taken
teach|taught|taught
tell|told|told
think|thought|thought
throw|threw|thrown
understand|understood|understood
wake|woke|woken
wear|wore|worn
win|won|won
write|wrote|written`.split('\n').map(r => r.split('|'));
  const first = s => s.split(/ \/ | \(/)[0];
  const row = r => [`<b>${r[0]}</b>`, r[1], r[2]];
  const rest = [...L], take = f => { const g = rest.filter(f); g.forEach(r => rest.splice(rest.indexOf(r), 1)); return g; };
  const same = take(r => r[0] === first(r[1]) && r[0] === first(r[2]));      // A – A – A
  const pp = take(r => first(r[1]) === first(r[2]));                          // A – B – B
  const vpp = take(r => r[0] === first(r[2]));                                // A – B – A
  const aab = take(r => r[0] === first(r[1]));                                // A – A – B
  const diff = rest;                                                          // A – B – C
  return { L, same, pp, vpp, aab, diff, row };
})();

registerTopic({
  id: 'irregular-verbs', group: 'gram', order: 25, icon: '📋', title: 'Irregular verb list (nepravidelná slovesa)', src: 'podklady', where: 'Grammar reference – Irregular verb list (s. 176)',
  summary: `Úplný seznam ${IRR.L.length} nepravidelných sloves z učebnice (základní tvar – past simple – past participle) a jejich rozdělení podle vzorce, který usnadní učení.`,
  vocab: [
    { w: 'irregular verb', x: 'nepravidelné sloveso – past simple a příčestí se netvoří koncovkou <i>-ed</i>' },
    { w: 'past simple', x: 'druhý tvar – použije se v minulém čase prostém (<i>went</i>)' },
    { w: 'past participle', x: 'třetí tvar – použije se v present perfect, past perfect a trpném rodě (<i>gone</i>)' },
    { w: 'BrE / AmE', x: 'britská / americká angličtina (<i>got</i> × <i>gotten</i>)' }
  ],
  key: [
    'Seznam má <b>tři sloupce</b>: základní tvar · <b>past simple</b> · <b>past participle</b>.',
    'Past simple se používá v minulém čase (<i>I went</i>); past participle v <b>present perfect</b> (<i>I’ve gone</i>), <b>past perfect</b> a <b>trpném rodě</b> (<i>was written</i>).',
    'Seznam se dá rozdělit podle vzorce: <b>tři stejné tvary</b> · <b>druhý a třetí stejný</b> · <b>první a třetí stejný</b> · <b>první a druhý stejný</b> · <b>všechny různé</b>.',
    'U <i>get</i> je v britské angličtině příčestí <i>got</i>, v americké <i>gotten</i>; u <i>burn, dream, learn, spill</i> jsou možné dva tvary (<i>-t</i> i <i>-ed</i>).',
    'Výslovnost: <i>read</i> /riːd/ – <i>read</i> /red/ – <i>read</i> /red/; <i>hear</i> /hɪər/ – <i>heard</i> /hɜːrd/ – <i>heard</i> /hɜːrd/.'
  ],
  sections: [
    { title: 'Podle vzorce', blocks: [
      { t: 'p', x: 'Seznam má smysl se učit po skupinách. Skupiny jsou odvozené z tabulky z učebnice a jejich členy najdeš v úplném seznamu níže.' },
      { t: 'widget', name: 'sloveso', how: ['Vyber skupinu podle vzorce (např. A–B–B) nebo všechna slovesa; kartičky jsou zamíchané.', 'Řekni si past simple a past participle nahlas, pak je odkryj a označ, zda jsi je znal.', 'Na konci se vypíše, která slovesa si zopakovat.'], sol: 'Skupiny podle vzorce: <b>A–A–A</b> (put – put – put), <b>A–B–B</b> (bring – brought – brought), <b>A–B–A</b> (come – came – come), <b>A–A–B</b> (beat – beat – beaten), <b>A–B–C</b> (go – went – gone).', title: 'Kartičky: nepravidelná slovesa' },
      { t: 'grid', head: ['Vzorec', 'Počet', 'Slovesa'], rows: [
        ['<b>všechny tři tvary stejné</b> (A – A – A)', String(IRR.same.length), IRR.same.map(r => r[0]).join(', ')],
        ['<b>past simple = past participle</b> (A – B – B)', String(IRR.pp.length), IRR.pp.map(r => r[0]).join(', ')],
        ['<b>základní tvar = past participle</b> (A – B – A)', String(IRR.vpp.length), IRR.vpp.map(r => r[0]).join(', ')],
        ['<b>základní tvar = past simple</b> (A – A – B)', String(IRR.aab.length), IRR.aab.map(r => r[0]).join(', ')],
        ['<b>všechny tři tvary různé</b> (A – B – C)', String(IRR.diff.length), IRR.diff.map(r => r[0]).join(', ')]
      ] },
      { t: 'tip', x: 'U skupiny A – A – A se tvar nemění, takže tam stačí vědět, že sloveso je nepravidelné. Nejvíc paměti si vyžaduje skupina A – B – C. Výslovnost <b>read</b> se mění: základní tvar /riːd/, past simple a past participle /red/.' }
    ] },
    { title: 'Seznam sloves A–K', blocks: [
      { t: 'grid', head: ['Verb', 'Past simple', 'Past participle'], rows: IRR.L.filter(r => r[0] < 'l').map(IRR.row) }
    ] },
    { title: 'Seznam sloves L–W', blocks: [
      { t: 'grid', head: ['Verb', 'Past simple', 'Past participle'], rows: IRR.L.filter(r => r[0] >= 'l').map(IRR.row) },
      { t: 'warn', x: 'Příčestí <b>gone × been</b> u slovesa <i>go</i>: <i>gone</i> znamená, že tam člověk je nebo odešel, <i>been</i> že tam byl a vrátil se (<i>Have you ever been to Paris?</i>).' }
    ] }
  ],
  mistakes: [
    'Říkat <i>buyed, goed, eated</i> – nepravidelná slovesa nemají koncovku <i>-ed</i>.',
    'Zaměnit past simple a past participle: <i>I saw</i> (past simple), ale <i>I have seen</i> (past participle).',
    'Použít past simple místo příčestí v present perfect: ✗ I have went → ✓ I have <b>gone</b>.',
    'Vyslovit <i>read</i> jako /riːd/ v minulosti: <i>read</i> v past simple i příčestí se čte /red/.',
    'Zaměnit <i>got</i> a <i>gotten</i> bez ohledu na variantu: BrE používá <i>got</i>, AmE <i>gotten</i>.'
  ],
  qa: [
    { q: 'Jaké jsou tři tvary nepravidelného slovesa <i>go</i>?', a: '<i>go – went – gone / been</i>.' },
    { q: 'Jaké jsou tvary slovesa <i>be</i>?', a: '<i>be – was / were – been</i>.' },
    { q: 'Které sloveso má v americké angličtině příčestí <i>gotten</i>?', a: '<i>get</i>: BrE <i>got</i>, AmE <i>gotten</i>.' },
    { q: 'Jak se vyslovuje <i>read</i> v past simple a v příčestí?', a: '/red/ (základní tvar /riːd/).' },
    { q: 'Které tvary mají <i>cut, hit, let, put, set, shut</i>?', a: 'Všechny tři tvary jsou stejné (<i>cut – cut – cut</i>).' },
    { q: 'Jaká jsou slovesa se vzorcem „základní tvar = příčestí“?', a: IRR.vpp.map(r => `<i>${r[0]} – ${r[1]} – ${r[2]}</i>`).join(', ') }
  ]
});
