// Scénáře videí B-UPP – spouští se přes: node tools/video.mjs upp [filtr]
import { loadDiagrams, title, list, diagram, reveal, big, tt, sp } from './video-lib.mjs';

export const CODE = 'B-UPP';
const UPP = loadDiagrams('upp', 'UPP');
const bin = (x, n = 8) => (x & (2 ** n - 1)).toString(2).padStart(n, '0');
const nib = s => s.replace(/(.{4})(?=.)/g, '$1 ');

// --- výpočty pro příklady (snímky se generují z nich, takže čísla ve videu sedí) ---
// doplněk 53: negace + 1
const neg = { x: nib(bin(53)), n: nib(bin(~53)), d: nib(bin(-53)) };
// sčítání v n-bitovém doplňkovém kódu s přenosy c0…cn a validací v = cn ⊕ cn−1
function add(a, b, n = 4) {
  const A = a & (2 ** n - 1), B = b & (2 ** n - 1), c = [0], s = [];
  for (let i = 0; i < n; i++) { const t = ((A >> i) & 1) + ((B >> i) & 1) + c[i]; s[i] = t & 1; c[i + 1] = t >> 1; }
  return { A: bin(A, n), B: bin(B, n), S: s.reverse().join(''), c, v: c[n] ^ c[n - 1] };
}
const addSlide = (a, b, say) => {
  const r = add(a, b), sg = x => (x > 0 ? '+' : '') + x;
  return { say, h: `<h2>(${sg(a)}) + (${sg(b)}) ve 4 bitech</h2>${tt(['', 'c₄', '3', '2', '1', '0'], [['přenos', ...[...r.c].reverse()], ['A', '', ...r.A], ['B', '', ...r.B], ['S', '', ...r.S]])}<p class="sub" style="text-align:center">v = c₄ ⊕ c₃ = ${r.c[4]} ⊕ ${r.c[3]} = <b>${r.v}</b> → ${r.v ? '<span class="ac">přetečení</span>' : `<span class="df">platí: ${sg(a + b)}</span>`}</p>` };
};
const sh = { x: bin(-20), q: bin(-20 >> 2) };
const ieee = x => { const d = new DataView(new ArrayBuffer(4)); d.setFloat32(0, x); return d.getUint32(0).toString(16).toUpperCase().padStart(8, '0'); };
const hd = (x, y) => [...x].filter((c, i) => c !== y[i]).length;
// Hammingův kód (7,4) se sudou paritou; pozice 1, 2, 4 jsou paritní
const hamCheck = w => [1, 2, 4].reduce((s, p) => s + p * [1, 2, 3, 4, 5, 6, 7].filter(i => i & p).reduce((x, i) => x ^ +w[i - 1], 0), 0);
const ham = (() => {
  const w = [0, 0, 0, 1, 0, 0, 1, 1]; // index = pozice; data 1011 na pozicích 3, 5, 6, 7
  for (const p of [1, 2, 4]) w[p] = [3, 5, 6, 7].filter(i => i & p).reduce((x, i) => x ^ w[i], 0);
  const code = w.slice(1).join(''), bad = code.slice(0, 4) + (1 - +code[4]) + code.slice(5);
  return { w: code, bad, syn: hamCheck(bad) };
})();
const MEM = { 100: 102, 101: 40, 102: 101 };
const ADR = { imm: 100, dir: MEM[100], ind: MEM[MEM[100]], off: MEM[100 + 1] };
const LOG = (() => { const A = 0b10010010, B = 0b01110110; return { A: bin(A), B: bin(B), AND: bin(A & B), OR: bin(A | B), XOR: bin(A ^ B) }; })();
// self-check proti hodnotám ve skriptu
const eq = (a, b, m) => { if (String(a) !== String(b)) throw new Error(`${m}: ${a} ≠ ${b}`); };
eq(neg.d, '1100 1011', 'doplněk 53'); eq(add(5, -4).S + add(5, -4).v, '00010', '5 + (−4)'); eq(add(5, 4).S + add(5, 4).v, '10011', '5 + 4');
eq(sh.q, '11111011', '−20 div 4'); eq(ieee(-6.5), 'C0D00000', 'IEEE −6,5'); eq(hd('0110', '1100'), 2, 'Hamming d');
eq(ham.w, '0110011', 'Hamming 1011'); eq(ham.syn, 5, 'syndrom'); eq(hamCheck(ham.w), 0, 'syndrom bez chyby');
eq([ADR.imm, ADR.dir, ADR.ind, ADR.off], [100, 102, 101, 40], 'adresace'); eq([LOG.AND, LOG.OR, LOG.XOR], ['00010010', '11110110', '11100100'], 'AND/OR/XOR');

// spojky pro video 03-2: [značka, výsledky pro (a,b) = 00, 01, 10, 11, komentář]
const CONN = [
        ['∧', [0, 0, 0, 1], 'Konjunkce je pravdivá jen tehdy, když jsou oba výroky pravdivé.'],
        ['∨', [0, 1, 1, 1], 'Disjunkce je nepravdivá jen tehdy, když jsou oba výroky nepravdivé.'],
        ['→', [1, 1, 0, 1], 'Implikace je nepravdivá jen v jediném případě: když a je pravda a bé nepravda. Z nepravdy plyne cokoli.'],
        ['↔', [1, 0, 0, 1], 'Ekvivalence je pravdivá, když mají oba výroky stejnou hodnotu.'],
        ['⊕', [0, 1, 1, 0], 'Vylučovací nebo je pravdivé, když se hodnoty liší. Pozor, jedna nebo jedna je jedna, ale jedna xor jedna je nula.']
];

// ===== výpočty pro témata 11–18 (snímky se generují z nich, čísla ve videu proto sedí) =====
const vec = a => '[' + a.join(' ') + ']';
// algoritmus bankéře (téma 11)
const BANK = (() => {
  const avail = [3, 3, 2], max = { P1: [7, 5, 3], P2: [3, 2, 2], P3: [8, 1, 2] }, alloc = { P1: [0, 1, 0], P2: [2, 0, 0], P3: [3, 1, 2] };
  const need = Object.fromEntries(Object.keys(max).map(p => [p, max[p].map((m, i) => m - alloc[p][i])]));
  let work = [...avail]; const order = [], steps = [];
  while (order.length < 3) {
    const p = Object.keys(need).find(q => !order.includes(q) && need[q].every((x, i) => x <= work[i]));
    if (!p) throw new Error('nebezpečný stav');
    const before = [...work]; work = work.map((w, i) => w + alloc[p][i]); order.push(p); steps.push({ p, before, after: [...work] });
  }
  return { avail, max, alloc, need, order, steps, total: work };
})();
// testovací tabulka cyklu (téma 12): x := 8; y := x div 2; z := y · 5; pro i od 1 do 4 { x − 1; y + 2; z div 2 }
const TRACE = (() => {
  let x = 8, y = x >> 1, z = y * 5; const rows = [];
  for (let i = 1; i <= 4; i++) { x -= 1; y += 2; z = Math.floor(z / 2); rows.push([i, x, y, z]); }
  return rows;
})();
// MOD odečítáním (téma 12)
const MODTR = (A, B) => { const t = [A]; let m = A; while (m >= B) { m -= B; t.push(m); } return t; };
// MIN a MAX z klávesnice, konec = 0 (téma 12)
const MINMAX = (data) => { let mx = data[0], mn = data[0]; const rows = [[data[0], mx, mn]]; for (const x of data.slice(1)) { if (x === 0) break; if (x > mx) mx = x; if (x < mn) mn = x; rows.push([x, mx, mn]); } return { rows, mx, mn }; };
// množina 1…8 jako bity (téma 14)
const SETB = s => [...Array(8)].map((_, i) => (s.includes(i + 1) ? 1 : 0)).join('');
const SETA = [2, 3, 5], SETC = [3, 5, 8];
// zásobník (téma 16)
const STACK = (() => { const z = [], log = []; for (const op of [['PUSH', 5], ['PUSH', 8], ['PUSH', 3], ['POP'], ['POP']]) { const v = op[0] === 'PUSH' ? (z.push(op[1]), op[1]) : z.pop(); log.push([op[0] === 'PUSH' ? 'PUSH ' + op[1] : 'POP', op[0] === 'POP' ? v : '', [...z].join(', ') || '–']); } return log; })();
// cyklická fronta max = 5 (téma 16)
const CQ = (() => { const max = 5, df = (kf, zf) => (kf - zf + max + 1) % max; return [[1, 3], [2, 3], [2, 0]].map(([zf, kf]) => ({ zf, kf, df: df(kf, zf) })); })();
// hash (téma 16)
const hashK = k => [...k].reduce((a, c) => a + c.charCodeAt(0) - 64, 0) % 7;
// HDD z cvičení (téma 17)
const HDD = (() => {
  const strany = 4, cyl = 20480, sekt = 128, sz = 2048, rpm = 5400;
  const cap = strany * cyl * sekt * sz, rot = 60 / rpm, lat = rot / 2, sektT = rot / sekt, vystav = 0.010;
  const prum = vystav + lat + sektT, mbs = sekt * sz * rpm / 60 / 1048576, all = 0.01 + cyl * (1 / 180 + 1 / 90) + (cyl - 1) * 1e-3;
  return { cap, gib: cap / 2 ** 30, prum, mbs, all, min: all / 60 };
})();
const fixed = (x, d = 1) => x.toFixed(d).replace('.', ',');
// self-check témat 11–18
eq(BANK.order.join(''), 'P2P3P1', 'bankéř: pořadí'); eq(vec(BANK.total), '[8 5 4]', 'bankéř: součet'); eq(vec(BANK.need.P1) + vec(BANK.need.P2) + vec(BANK.need.P3), '[7 4 3][1 2 2][5 0 0]', 'bankéř: POTŘ');
eq(JSON.stringify(TRACE), '[[1,7,6,10],[2,6,8,5],[3,5,10,2],[4,4,12,1]]', 'testovací tabulka');
eq(MODTR(17, 5).join(), '17,12,7,2', 'MOD'); eq(MINMAX([4, 9, -2, 7, 0]).mx + ',' + MINMAX([4, 9, -2, 7, 0]).mn, '9,-2', 'MIN MAX');
eq(SETB(SETA) + ' ' + SETB(SETC), '01101000 00101001', 'množiny'); eq(bin(parseInt(SETB(SETA), 2) | parseInt(SETB(SETC), 2)), '01101001', 'sjednocení'); eq(bin(parseInt(SETB(SETA), 2) & parseInt(SETB(SETC), 2)), '00101000', 'průnik'); eq(bin(parseInt(SETB(SETA), 2) & ~parseInt(SETB(SETC), 2)), '01000000', 'rozdíl');
eq(STACK.map(r => r[1]).join(), ',,,3,8', 'zásobník'); eq(CQ.map(c => c.df).join(), '3,2,4', 'cyklická fronta');
eq(['NOVAK', 'KRAL', 'SVOBODA'].map(hashK).join(), '0,0,1', 'hash');
eq(HDD.cap, 21474836480, 'HDD kapacita'); eq(HDD.gib, 20, 'HDD GiB'); eq(fixed(HDD.mbs), '22,5', 'HDD MB/s'); eq(fixed(HDD.prum * 1000), '15,6', 'HDD přístup'); eq(fixed(HDD.all), '361,8', 'HDD celý disk');
eq(2e9 / (4 * 1e6) + ',' + 3e9 / (3 * 1e6), '500,1000', 'MIPS'); eq([6 * 5, 6 + 4, 3 + 4].join(), '30,10,7', 'pipeline'); eq(12 + 4 + 2048 + 288, 2352, 'sektor CD');
eq(2 ** 24, 16777216, 'barvy 24 bitů'); eq(1920 * 1080 * 3, 6220800, 'Full HD'); eq(Math.round(0.8 * 255).toString(16) + Math.round(0.2 * 255).toString(16), 'cc33', 'RGB 80 80 20');
eq(Math.round(Math.sqrt(60)) + ',' + Math.round(Math.log2(60)), '8,6', 'růst rozsahu'); eq(9 - 3 + 1, 7, 'for cyklus'); eq(Array.from({ length: 6 }, (_, n) => n <= 1 ? 1 : [...Array(n)].reduce((a, _, i) => a * (i + 1), 1)).join(), '1,1,2,6,24,120', 'faktoriál');
eq([...Array(20)].map((_, i) => i + 1).flatMap(I => [...Array(20)].map((_, j) => [I, j + 1])).filter(([I, J]) => I > J).length, 190, 'pod hlavní diagonálou');

// --- scénáře (komentář psaný tak, aby ho syntéza řeči přečetla správně: cifry odděleně, bez symbolů) ---
export const VIDEOS = {
  'ciselne-soustavy': [
    { file: '01-1-pozicni-soustavy', at: 'Soustava se základem Z', title: 'Poziční soustavy a rozvoj čísla', steps: [
      { h: title('Poziční soustavy', 'Základ Z, cifry a převod do desítkové soustavy'), say: 'Číselné soustavy. Jak funguje poziční soustava a jak z ní převést číslo do desítkové.' },
      ...reveal('Soustava se základem Z', [
        ['Cifry jsou z množiny <b>{0, 1, …, Z−1}</b>', 'Každá soustava má základ zet. Cifry jsou nula až zet minus jedna.'],
        ['Dvojková Z = 2 · osmičková Z = 8 · šestnáctková Z = 16 (A–F = 10–15)', 'Dvojková má cifry nula a jedna, osmičková nula až sedm a šestnáctková navíc písmena A až F pro hodnoty deset až patnáct.'],
        ['Počítač: <b>dva stavy</b> se rozliší snadno a spolehlivě', 'Počítač používá dvojkovou soustavu, protože dva stavy, proud teče nebo neteče, se rozliší snadno a spolehlivě.'],
        ['Osmičková a šestnáctková jen <b>zkracují</b> dlouhé binární zápisy', 'Osmičková a šestnáctková soustava slouží lidem ke zkrácení dlouhých binárních zápisů.']
      ]),
      { h: `<h2>Rozvoj čísla</h2><div class="big">Č<sub>10</sub> = Σ k<sub>e</sub> · Z<sup>e</sup></div><p class="sub" style="text-align:center">každou cifru vynásob mocninou základu podle její pozice a sečti</p>`, say: 'Hodnota čísla je součet cifer vynásobených mocninami základu. Pozice zcela vpravo má mocninu nula.' },
      { h: `<h2>Příklad: (5713)<sub>8</sub> → desítková</h2><div class="big">5·8³ + 7·8² + 1·8¹ + 3·8⁰<br><span class="mu">= 2560 + 448 + 8 + 3</span><br><span class="ac">= (3019)<sub>10</sub></span></div>`, say: 'Příklad: číslo pět, sedm, jedna, tři v osmičkové soustavě. Pět krát osm na třetí je dva tisíce pět set šedesát, sedm krát šedesát čtyři je čtyři sta čtyřicet osm, plus osm a plus tři. Výsledek je tři tisíce devatenáct.' },
      { h: list('Pozor', ['Používej mocniny soustavy, <b>ze které</b> převádíš', 'Mocniny dvojky do 2<sup>12</sup> = 4096 se nauč zpaměti'], 2, false), say: 'Pozor, používáme mocniny soustavy, ze které převádíme. A mocniny dvojky až do čtyř tisíc devadesáti šesti se vyplatí znát zpaměti.' }
    ] },
    { file: '01-2-z-desitkove', at: 'Z desítkové do soustavy Z', title: 'Z desítkové do jiné soustavy', steps: [
      { h: title('Z desítkové soustavy', 'Postupné odečítání nejvyšších mocnin základu'), say: 'Převod z desítkové soustavy do jiné soustavy. Postupně odečítáme nejvyšší mocniny základu.' },
      ...reveal('Postup', [
        ['① Najdi <b>nejvyšší mocninu</b> Z, která se do čísla vejde', 'Nejdřív najdi nejvyšší mocninu základu, která se do čísla vejde.'],
        ['② Zapiš, <b>kolikrát</b> se vejde – to je cifra', 'Kolikrát se vejde, to je cifra na této pozici.'],
        ['③ Odečti a pokračuj se <b>zbytkem</b>', 'Odečti ji a pokračuj se zbytkem.'],
        ['④ Nepoužité mocniny = <b>0</b>', 'Mocniny, které se nevešly, mají cifru nula. Nuly nevynechávej.']
      ]),
      ...reveal('Příklad: (213)<sub>10</sub>', [
        ['Osmičková: 213 = <b>3</b>·64 + 21 → 21 = <b>2</b>·8 + <b>5</b> → <span class="ac">(325)<sub>8</sub></span>', 'Do osmičkové: šedesát čtyři se do dvou set třinácti vejde třikrát, zbývá dvacet jedna. Osm se do dvaceti jedna vejde dvakrát, zbývá pět. Výsledek je tři, dva, pět.'],
        ['Šestnáctková: 213 = <b>13</b>·16 + <b>5</b> → <span class="ac">(D5)<sub>16</sub></span>', 'Do šestnáctkové: šestnáct se vejde třináctkrát, třináct je písmeno dé, zbývá pět. Výsledek je dé pět.'],
        ['Dvojková: 128 + 64 + 16 + 4 + 1 → <span class="ac">(11010101)<sub>2</sub></span>', 'Do dvojkové: sto dvacet osm plus šedesát čtyři plus šestnáct plus čtyři plus jedna. Výsledek je jedna jedna nula jedna nula jedna nula jedna.']
      ]),
      { h: list('Alternativa', ['Dělení základem se zbytkem – zbytky čti <b>odzdola nahoru</b>'], 1, false), say: 'Jiný způsob je dělení základem se zbytkem. Zbytky se pak čtou odzdola nahoru. Výsledek je stejný.' }
    ] },
    { file: '01-3-skupiny-bitu', at: 'Převody 2 ↔ 16', title: 'Převody 2 ↔ 8 ↔ 16 po skupinách bitů', steps: [
      { h: title('Převody 2 ↔ 8 ↔ 16', 'Rychlý převod po skupinách bitů'), say: 'Mezi dvojkovou, osmičkovou a šestnáctkovou soustavou se převádí po skupinách bitů.' },
      ...reveal('Pravidla', [
        ['1 šestnáctková cifra = <b>4 bity</b>', 'Jedna šestnáctková cifra odpovídá čtyřem bitům.'],
        ['1 osmičková cifra = <b>3 bity</b>', 'Jedna osmičková cifra odpovídá třem bitům.'],
        ['Skupiny se dělí <b>zprava</b>, vlevo se doplní nuly', 'Skupiny se vždy tvoří zprava a vlevo se doplní nuly.']
      ]),
      { h: diagram('(110010101)<sub>2</sub>', UPP.groupingDiagram()), say: 'Příklad: devět bitů jedna jedna nula nula jedna nula jedna nula jedna. Po čtveřicích zprava dostaneme jedna, devět, pět v šestnáctkové. Po trojicích zprava šest, dva, pět v osmičkové.' },
      { h: list('8 ↔ 16 jen přes dvojkovou', ['(1AC37F)<sub>16</sub> = 0001 1010 1100 0011 0111 1111', '= 000 110 101 100 001 101 111 111', '= <span class="ac">(6541577)<sub>8</sub></span>'], 3, false), say: 'Mezi osmičkovou a šestnáctkovou soustavou přímý převod není. Číslo nejdřív rozepíšeme na bity po čtveřicích, pak je přeskupíme po trojicích zprava a přečteme osmičkové cifry.' }
    ] },
    { file: '01-4-desetinna-cisla', at: 'Desetinná čísla', title: 'Desetinná čísla do dvojkové', steps: [
      { h: title('Desetinná čísla', 'Desetinnou část převádíme násobením dvěma'), say: 'Jak převést desetinné číslo do dvojkové soustavy. Celou a desetinnou část převádíme zvlášť.' },
      ...reveal('(0,853)<sub>10</sub> – násobení dvěma', [
        ['0,853 · 2 = <b>1</b>,706', 'Desetinnou část násobíme dvěma. Nula celá osm set padesát tři krát dva je jedna celá sedm set šest. Celá část, jednička, je první bit za čárkou.'],
        ['0,706 · 2 = <b>1</b>,412', 'Jedničku odečteme a pokračujeme. Další bit je jedna.'],
        ['0,412 · 2 = <b>0</b>,824', 'Nula celá osm set dvacet čtyři. Bit je nula.'],
        ['0,824 · 2 = <b>1</b>,648 · 0,648 · 2 = <b>1</b>,296 · 0,296 · 2 = <b>0</b>,592', 'Další bity jsou jedna, jedna a nula.'],
        ['→ <span class="ac">(0,110110…)<sub>2</sub></span>', 'Bity čteme shora dolů: nula celá jedna jedna nula jedna jedna nula. Končíme při nulovém zbytku nebo při požadované přesnosti.']
      ]),
      { h: `<h2>Příklad: (27,125)<sub>10</sub></h2><div class="big">27 = 11011 · 0,125 = 2<sup>−3</sup> = 0,001<br><span class="ac">= (11011,001)<sub>2</sub></span></div>`, say: 'Ještě jeden příklad. Dvacet sedm je jedna jedna nula jedna jedna. Nula celá sto dvacet pět je dva na minus třetí, tedy nula celá nula nula jedna.' },
      { h: list('Pozor', ['Většina desetinných čísel (třeba 0,1) má ve dvojkové soustavě <b>nekonečný rozvoj</b>'], 1, false), say: 'Pozor, většina desetinných čísel, třeba nula celá jedna, má ve dvojkové soustavě nekonečný rozvoj. Proto se zadává přesnost a výsledek se zkrátí.' }
    ] }
  ],
  'data-a-kodovani': [
    { file: '02-1-data-a-informace', at: 'Informace versus data', title: 'Data, informace a kód', steps: [
      { h: title('Data, informace a kód', 'Proč samotné jedničky a nuly nic neznamenají'), say: 'Data, informace a kód.' },
      ...reveal('Data × informace', [
        ['<b>Data</b> – zaznamenané údaje, v počítači binární řetězce', 'Data jsou zaznamenané údaje. V počítači jsou to řetězce nul a jedniček, které lze přenášet, uchovávat a zpracovávat.'],
        ['<b>Informace</b> – sdělení, které má pro příjemce význam', 'Informace je sdělení, které má pro příjemce význam a pomáhá mu rozhodovat.'],
        ['Informaci z dat získáme <b>interpretací</b> – musíme znát kód', 'Informaci z dat získáme až interpretací. Morseovku tři tečky, tři čárky, tři tečky pochopí jen ten, kdo zná kód.']
      ]),
      { h: `<h2>Jedno slovo, různé významy</h2><div class="big">01000001<br><span class="mu">číslo →</span> <span class="ac">65</span> &nbsp; <span class="mu">ASCII →</span> <span class="df">„A“</span></div>`, say: 'Stejné kódové slovo nula jedna nula nula nula nula nula jedna je jako číslo šedesát pět, ale jako znak v kódu ASCII je to velké písmeno A. Bez znalosti kódu nelze dekódovat.' },
      ...reveal('Kód', [
        ['<b>Prosté</b> zobrazení objektů na kódová slova', 'Kód je prosté zobrazení objektů na kódová slova. Dva různé objekty nesmí mít stejné slovo.'],
        ['n bitů → <b>2<sup>n</sup></b> kódových slov (8 bitů → 256)', 'Z n bitů lze vytvořit dva na entou různých kódových slov. Z osmi bitů tedy dvě stě padesát šest.']
      ])
    ] },
    { file: '02-2-bit-a-byte', at: 'Jednotky: bit', title: 'Bit, byte a jejich násobky', steps: [
      { h: title('Bit, byte a násobky', 'Jednotky dat v počítači'), say: 'Jednotky dat: bit, byte a jejich násobky.' },
      { h: diagram('Bit → půlbyte → byte', UPP.byteDiagram()), say: 'Bit je jedna nula nebo jednička. Čtyři bity tvoří půlbyte, tedy jednu šestnáctkovou cifru. Osm bitů je jeden byte se dvěma sty padesáti šesti stavy.' },
      ...reveal('Zapamatuj si', [
        ['bit = malé <b>b</b> · byte = velké <b>B</b> · 1 B = 8 b', 'Bit se značí malým bé, byte velkým bé. Jeden byte je osm bitů.'],
        ['Rychlost sítě v <b>b/s</b>, velikost souboru v <b>B</b>', 'Rychlost sítě se uvádí v bitech za sekundu, velikost souboru v bytech.'],
        ['kilo = 2<sup>10</sup> = <b>1024</b> · mega = 2<sup>20</sup> · giga = 2<sup>30</sup>', 'V informatice je kilo dva na desátou, tedy tisíc dvacet čtyři. Mega je dva na dvacátou a giga dva na třicátou.'],
        ['mili-, mikro- se <b>nepoužívají</b> – půl bitu nedává smysl', 'Zlomkové předpony jako mili nebo mikro se nepoužívají. Půl bitu nedává smysl.']
      ])
    ] }
  ],
  'vyrokovy-pocet': [
    { file: '03-1-vyroky-a-spojky', at: 'Výrok a logické spojky', title: 'Výroky a logické spojky', steps: [
      { h: title('Výroky a logické spojky', 'Co je výrok a jak se výroky spojují'), say: 'Výrokový počet. Co je výrok a jak výroky spojujeme.' },
      ...reveal('Výrok', [
        ['Věta, o které lze říct <b>pravda / nepravda</b> – „Prší.“', 'Výrok je oznamovací věta, o které lze rozhodnout, zda je pravdivá. Například: prší.'],
        ['Výrokem <b>není</b> otázka ani přání – „Kolik je hodin?“', 'Otázka ani přání výrokem nejsou.'],
        ['Hodnoty: <b>1</b> = pravda, <b>0</b> = nepravda', 'Pravda se značí jedničkou, nepravda nulou.']
      ]),
      ...reveal('Spojky', [
        ['¬ negace · ∧ konjunkce „a“ · ∨ disjunkce „nebo“', 'Základní spojky jsou negace, konjunkce, tedy a zároveň, a disjunkce, tedy nebo.'],
        ['→ implikace „jestliže…, pak“ · ↔ ekvivalence „právě když“', 'Dále implikace, jestliže, pak, a ekvivalence, právě tehdy, když.'],
        ['⊕ XOR „buď…, nebo“ · ↑ NAND · ↓ NOR', 'A nakonec vylučovací nebo, Shefferův operátor, což je negovaná konjunkce, a Piercova šipka, negovaná disjunkce.']
      ])
    ] },
    { file: '03-2-pravdivostni-tabulka', at: 'Pravdivostní funkce', title: 'Pravdivostní tabulka spojek', steps: [
      { h: title('Pravdivostní tabulka', 'Kdy je která spojka pravdivá'), say: 'Pravdivostní tabulka základních spojek.' },
      ...CONN.map(([op, col, say], j, all) => ({ say, h: `<h2>a ${op} b</h2><table class="tt"><tr><th>a</th><th>b</th>${all.map((x, i) => `<th>${i <= j ? 'a ' + x[0] + ' b' : ''}</th>`).join('')}</tr>${[[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b], r) => `<tr><td>${a}</td><td>${b}</td>${all.map((x, i) => `<td class="${i === j ? (x[1][r] ? 'hi' : 'z') : ''}">${i <= j ? x[1][r] : ''}</td>`).join('')}</tr>`).join('')}</table>` })),
      { h: list('Shrnutí', ['∧ je 1 jen při 1,1 · ∨ je 0 jen při 0,0', '→ je 0 jen při 1,0', '↑ je opak ∧ · ↓ je opak ∨'], 3, false), say: 'Shrnutí: konjunkce je jedna jen při dvou jedničkách, disjunkce nula jen při dvou nulách, implikace nula jen při jedna, nula. A NAND a NOR jsou jejich negace.' }
    ] },
    { file: '03-3-tautologie', at: 'Tautologie, kontradikce', title: 'Tautologie, kontradikce, splnitelnost', steps: [
      { h: title('Tautologie, nebo ne?', 'Rozhodování pomocí pravdivostní tabulky'), say: 'Jak rozhodnout, jestli je formule tautologie, kontradikce, nebo jen splnitelná.' },
      ...reveal('Druhy formulí', [
        ['<b>Tautologie</b> – vždy 1 (p ∨ ¬p)', 'Tautologie je pravdivá pro všechna ohodnocení, například pé nebo ne pé.'],
        ['<b>Kontradikce</b> – vždy 0 (p ∧ ¬p)', 'Kontradikce je vždy nepravdivá, například pé a zároveň ne pé.'],
        ['<b>Splnitelná</b> – aspoň jednou 1 (tautologie je také splnitelná)', 'Splnitelná formule je pravdivá aspoň pro jedno ohodnocení. Tautologie je tedy také splnitelná.']
      ]),
      ...[1, 2, 3].map(k => {
        const rows = [[0, 0, 1, 0], [0, 1, 1, 0], [1, 0, 0, 1], [1, 1, 1, 1]];
        return { say: ['Příklad: pé implikuje q, celé implikuje pé. Dvě proměnné, tedy čtyři řádky.', 'Nejdřív vnitřní závorka: pé implikuje q. Nula je jen v řádku jedna, nula.', 'Potom celá formule. Výsledný sloupec je nula, nula, jedna, jedna. Není to tautologie ani kontradikce, formule je splnitelná.'][k - 1],
          h: `<h2>(p → q) → p</h2><table class="tt"><tr><th>p</th><th>q</th><th>${k > 1 ? 'p → q' : ''}</th><th>${k > 2 ? '(p → q) → p' : ''}</th></tr>${rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td class="${k === 2 ? (r[2] ? 'hi' : 'z') : ''}">${k > 1 ? r[2] : ''}</td><td class="${k === 3 ? (r[3] ? 'hi' : 'z') : ''}">${k > 2 ? r[3] : ''}</td></tr>`).join('')}</table>${k === 3 ? '<p class="sub" style="text-align:center">0011 → <span class="ac">splnitelná</span></p>' : ''}` };
      }),
      { h: list('Postup na zkoušce', ['Vypiš všech <b>2<sup>n</sup></b> ohodnocení', 'Vyhodnocuj od vnitřních závorek, ¬ má přednost', 'Pro každou podformuli vlastní sloupec'], 3, false), say: 'Na zkoušce vypiš všechna ohodnocení, vyhodnocuj od vnitřních závorek a pro každou podformuli si udělej vlastní sloupec. Hodnotí se postup.' }
    ] }
  ],
  'ekvivalence-dusledek': [
    { file: '04-1-ekvivalence', at: 'Tautologická ekvivalence', title: 'Tautologická ekvivalence a zákony', steps: [
      { h: title('Ekvivalence formulí', 'Kdy dvě různé formule znamenají totéž'), say: 'Tautologická ekvivalence. Kdy dvě různé formule znamenají totéž.' },
      ...reveal('Definice', [
        ['A ≡ B, když mají <b>stejný výsledný sloupec</b> tabulky', 'Formule A a B jsou ekvivalentní, když mají v pravdivostní tabulce stejný výsledný sloupec.'],
        ['Totéž: formule <b>A ↔ B je tautologie</b>', 'Jinak řečeno, formule A ekvivalence B je tautologie.']
      ]),
      { h: `<h2>x → y ≡ ¬x ∨ y</h2>${tt(['x', 'y', '¬x', 'x → y', '¬x ∨ y'], [[0, 0], [0, 1], [1, 0], [1, 1]].map(([x, y]) => [x, y, 1 - x, +(!x || y), (1 - x) | y]), [3, 4])}<p class="sub" style="text-align:center">sloupce jsou shodné → <span class="ac">ekvivalentní</span></p>`, say: 'Příklad: x implikuje y a ne x nebo y. Obě formule dávají jedna, jedna, nula, jedna. Sloupce jsou stejné, formule jsou ekvivalentní. Implikaci tak můžeme vždy přepsat na disjunkci.' },
      ...reveal('Nejdůležitější zákony', [
        ['Dvojí negace: <b>¬¬a ≡ a</b>', 'Dvojí negace se ruší.'],
        ['De Morgan: <b>¬(a ∧ b) ≡ ¬a ∨ ¬b</b>', 'De Morganův zákon: negace konjunkce je disjunkce negací.'],
        ['De Morgan: <b>¬(a ∨ b) ≡ ¬a ∧ ¬b</b>', 'A negace disjunkce je konjunkce negací.'],
        ['Implikace: <b>a → b ≡ ¬a ∨ b</b>', 'Implikace a, bé je totéž co ne a nebo bé.'],
        ['Pozor: a → b <b>≢</b> b → a', 'Pozor, implikace není komutativní. Prohodit její strany nesmíme.']
      ])
    ] },
    { file: '04-2-logicky-dusledek', at: 'Logický důsledek', title: 'Logický důsledek a ověření úsudku', steps: [
      { h: title('Logický důsledek', 'Plyne závěr z předpokladů?'), say: 'Logický důsledek. Jak ověřit, jestli závěr plyne z předpokladů.' },
      ...reveal('Definice', [
        ['Z premis v<sub>1</sub> … v<sub>n</sub> plyne d, když <b>v každém řádku, kde jsou všechny premisy 1, je i d = 1</b>', 'Ze všech premis plyne závěr dé, když v každém řádku tabulky, kde jsou všechny premisy pravdivé, je pravdivý i závěr.'],
        ['Ekvivalentně: (v<sub>1</sub> ∧ … ∧ v<sub>n</sub>) → d je <b>tautologie</b>', 'Ekvivalentně: konjunkce premis implikuje závěr je tautologie.']
      ]),
      { h: diagram('Důsledek jako inkluze', UPP.consequenceDiagram()), say: 'Řádky, ve kterých platí všechny premisy, musí ležet celé uvnitř řádků, kde platí závěr. Stačí jediný řádek s pravdivými premisami a nepravdivým závěrem a úsudek neplatí.' },
      ...reveal('Příklad', [
        ['Prší a vezmu si deštník → nezmoknu. Vezmu si deštník. ⇒ <b>Nezmoknu?</b>', 'Příklad. Jestliže prší a vezmu si deštník, nezmoknu. Vezmu si deštník. Plyne z toho, že nezmoknu?'],
        ['p: prší · q: deštník · r: zmoknu', 'Označíme pé prší, q deštník a r zmoknu.'],
        ['v<sub>1</sub>: (p ∧ q) → ¬r · v<sub>2</sub>: q · d: ¬r', 'První premisa je pé a q implikuje ne r, druhá premisa je q a závěr je ne r.'],
        ['p = 0, q = 1, r = 1: v<sub>1</sub> = 1, v<sub>2</sub> = 1, ale <b>d = 0</b>', 'Když neprší, vezmu si deštník a přesto zmoknu, jsou obě premisy pravdivé, ale závěr ne.'],
        ['→ <span class="ac">závěr neplyne</span>', 'Závěr tedy neplyne. Logika zkoumá jen vztah premis a závěru, ne to, jestli jsou pravdivé ve skutečnosti.']
      ])
    ] }
  ],
  'text-a-logicke-hodnoty': [
    { file: '05-1-text-a-ascii', at: 'Reprezentace prostého textu', title: 'Jak se ukládá text – ASCII', steps: [
      { h: title('Jak se ukládá text', 'Znak → číslo → bity'), say: 'Jak počítač ukládá text.' },
      ...reveal('Postup', [
        ['① Text rozdělíme na <b>znaky</b>', 'Text nejdřív rozdělíme na jednotlivé znaky.'],
        ['② Každému znaku přiřadíme <b>číslo</b> z tabulky (kód)', 'Každému znaku přiřadíme číslo podle převodní tabulky, tedy kódu.'],
        ['③ Číslo uložíme <b>binárně</b>', 'A číslo uložíme ve dvojkové soustavě.']
      ]),
      { h: diagram('„AHOJ“ v paměti', UPP.textDiagram()), say: 'Slovo AHOJ: A je šedesát pět, H sedmdesát dva, O sedmdesát devět a J sedmdesát čtyři. Čtyři znaky zaberou čtyři bajty.' },
      ...reveal('ASCII', [
        ['7bitový ASCII (1973): <b>128 znaků</b>, bez diakritiky', 'Sedmibitový ASCII z roku tisíc devět set sedmdesát tři má sto dvacet osm znaků, bez diakritiky.'],
        ['řídicí znaky <b>0–31 a 127</b> · mezera = <b>32</b>', 'Kódy nula až třicet jedna a sto dvacet sedm jsou řídicí znaky. Mezera má kód třicet dva.'],
        ['A = 65 · a = 97 → liší se o <b>32</b>', 'Velké A je šedesát pět, malé a devadesát sedm. Liší se o třicet dva.'],
        ['číslice „0“ = <b>48</b>, ne 0', 'A pozor, znak nula má kód čtyřicet osm, ne nulu.']
      ])
    ] },
    { file: '05-2-kodove-stranky-unicode', at: 'Kódové stránky', title: 'Kódové stránky a Unicode', steps: [
      { h: title('Kódové stránky a Unicode', 'Odkud se bere rozsypaná diakritika'), say: 'Kódové stránky a Unicode.' },
      ...reveal('8bitové kódové stránky', [
        ['8 bitů = <b>256</b> znaků; dolních 128 = ASCII', 'Osmibitové kódy mají dvě stě padesát šest znaků. Dolních sto dvacet osm je stejných jako ASCII.'],
        ['horních 128 podle jazyka – čeština: <b>ISO 8859-2</b>, <b>Windows-1250</b>', 'Horní polovina se liší podle jazyka. Češtinu pokrývají ISO osm osm pět devět pomlčka dva a Windows dvanáct padesát.'],
        ['v jednom textu <b>jen jedna</b> stránka · špatná volba = rozsypaná diakritika', 'V jednom textu může být jen jedna kódová stránka. Když soubor otevřeme se špatnou stránkou, diakritika se rozsype.']
      ]),
      ...reveal('Unicode (1991)', [
        ['znaky <b>všech jazyků</b> v jedné tabulce (přes 100 000)', 'Unicode z roku tisíc devět set devadesát jedna obsahuje znaky všech jazyků, přes sto tisíc.'],
        ['UTF-8: <b>1–4 B</b> · UTF-16: <b>2 nebo 4 B</b> · UTF-32: <b>vždy 4 B</b>', 'Číslo znaku se ukládá metodami UTF. UTF osm používá jeden až čtyři bajty, UTF šestnáct dva nebo čtyři a UTF třicet dva vždy čtyři bajty.']
      ]),
      { h: diagram('Kolik bajtů zabere znak', UPP.utfDiagram()), say: 'V UTF osm zabere písmeno A jeden bajt, č dva bajty, znak eura tři a emoji čtyři bajty. UTF osm je dnes nejrozšířenější, používá ho web.' }
    ] }
  ],
  'cela-cisla': [
    { file: '06-1-doplnkovy-kod', at: 'Doplňkový kód', title: 'Doplňkový kód', steps: [
      { h: title('Doplňkový kód', 'Jak počítač ukládá záporná čísla'), say: 'Doplňkový kód. Jak počítač ukládá záporná celá čísla.' },
      ...reveal('Pravidlo (n bitů)', [
        ['X ≥ 0: <b>X′ = X</b>', 'Nezáporné číslo se uloží tak, jak je.'],
        ['X &lt; 0: <b>X′ = X + 2<sup>n</sup></b>', 'K zápornému číslu přičteme dva na entou.'],
        ['první bit zleva: <b>0</b> = nezáporné, <b>1</b> = záporné', 'První bit zleva pak určuje znaménko. Nula znamená nezáporné, jednička záporné číslo.'],
        ['rozsah: −2<sup>n−1</sup> … 2<sup>n−1</sup> − 1 · 8 bitů: <b>−128 … 127</b>', 'Rozsah je od minus dva na en minus první do dva na en minus první minus jedna. Pro osm bitů od minus sto dvaceti osmi do sto dvaceti sedmi.']
      ]),
      { h: diagram('4bitový kód na kruhu', UPP.wheelDiagram()), say: 'Ve čtyřech bitech si kód představ jako kruh. Přičtení jedničky je krok po směru hodinových ručiček. Ze sedmičky, nula jedna jedna jedna, se dostaneme na minus osm, jedna nula nula nula. To je přetečení.' }
    ] },
    { file: '06-2-doplnek', at: 'Doplněk čísla', title: 'Doplněk: změna znaménka', steps: [
      { h: title('Doplněk čísla', 'Změna znaménka ve dvou krocích'), say: 'Jak změnit znaménko čísla v doplňkovém kódu.' },
      ...reveal('Postup', [
        ['① <b>zneguj</b> všechny bity (0 ↔ 1)', 'Nejdřív zaměníme všechny nuly za jedničky a jedničky za nuly.'],
        ['② <b>přičti 1</b>', 'Pak binárně přičteme jedničku.']
      ]),
      ...reveal('Příklad: −53', [
        [`53 = ${neg.x}`, `Padesát tři je ${sp(neg.x)}.`],
        [`negace: ${neg.n}`, `Po negaci dostaneme ${sp(neg.n)}.`],
        [`+1: <span class="ac">${neg.d}</span> = −53`, `Po přičtení jedničky ${sp(neg.d)}. To je minus padesát tři.`],
        [`kontrola: ${neg.d} = ${parseInt(neg.d.replace(' ', ''), 2)} = 256 − 53 ✓`, 'Kontrola: jako číslo bez znaménka je to dvě stě tři, tedy dvě stě padesát šest minus padesát tři.']
      ]),
      { h: list('Čtení záporného čísla', ['1111 1100 → negace 0000 0011 → +1 = 0000 0100 = 4 → <span class="ac">−4</span>'], 1, false), say: 'Záporné číslo přečteme stejně: znegujeme, přičteme jedničku a výsledek označíme minus. Jedna jedna jedna jedna jedna jedna nula nula je minus čtyři.' }
    ] },
    { file: '06-3-scitani-preteceni', at: 'Sčítání v doplňkovém kódu', title: 'Sčítání a přetečení', steps: [
      { h: title('Sčítání a přetečení', 'Kdy výsledek platí a kdy ne'), say: 'Sčítání v doplňkovém kódu a jak poznat přetečení.' },
      ...reveal('Pravidla', [
        ['sčítá se po bitech <b>zprava</b> s přenosy, c<sub>0</sub> = 0', 'Sčítáme po bitech zprava a přenášíme do vyššího řádu.'],
        ['přenos c<sub>i+1</sub> = 1, když jsou aspoň <b>dvě</b> z a<sub>i</sub>, b<sub>i</sub>, c<sub>i</sub> jedničky', 'Přenos vznikne, když jsou aspoň dvě ze tří sčítaných hodnot jedničky.'],
        ['validace: <b>v = c<sub>n</sub> ⊕ c<sub>n−1</sub></b> · v = 1 → přetečení', 'Na konci porovnáme dva nejvyšší přenosy. Když se liší, došlo k přetečení a výsledek neplatí.']
      ]),
      addSlide(5, -4, 'Plus pět plus minus čtyři ve čtyřech bitech. Dva nejvyšší přenosy jsou jedna a jedna, jsou stejné. Výsledek nula nula nula jedna, tedy plus jedna, platí. Přenos z nejvyššího řádu zahodíme.'),
      addSlide(5, 4, 'Plus pět plus plus čtyři. Výsledek jedna nula nula jedna by byl minus sedm. Nejvyšší přenosy jsou nula a jedna, liší se, takže došlo k přetečení. Devítka se do rozsahu minus osm až sedm nevejde.'),
      { h: list('Zapamatuj si', ['Přetéct mohou jen čísla se <b>stejným znaménkem</b>'], 1, false), say: 'Přetéct může jen součet dvou čísel se stejným znaménkem. Čísla s opačnými znaménky nikdy nepřetečou.' }
    ] },
    { file: '06-4-posuvy', at: 'Násobení a dělení', title: 'Násobení a dělení posuvem', steps: [
      { h: title('Násobení a dělení 2<sup>k</sup>', 'Stačí posunout bity'), say: 'Násobení a dělení mocninou dvojky. Stačí posunout bity.' },
      ...reveal('Pravidla', [
        ['× 2<sup>k</sup>: posun o k míst <b>vlevo</b>, zprava nuly', 'Násobení dva na kátou je posun o k míst vlevo. Zprava doplníme nuly.'],
        ['div 2<sup>k</sup>: posun o k míst <b>vpravo</b>, zleva <b>kopie znaménkového bitu</b>', 'Dělení je posun vpravo. Zleva doplníme kopii znaménkového bitu, aby záporné číslo zůstalo záporné.'],
        ['odsunuté bity = <b>zbytek</b> (mod)', 'Bity, které vypadnou vpravo, tvoří zbytek.']
      ]),
      { h: diagram('−20 div 4', UPP.shiftDiagram()), say: `Minus dvacet je ${sp(sh.x)}. Posuneme o dvě místa vpravo a zleva doplníme jedničky. Dostaneme ${sp(sh.q)}, tedy minus pět. Odsunuté bity nula nula dávají zbytek nula.` }
    ] }
  ],
  'ieee754': [
    { file: '07-1-ieee754', at: 'Formát čísla IEEE 754', title: 'Zakódování čísla do IEEE 754', steps: [
      { h: title('IEEE 754', 'Reálné číslo ve 32 bitech'), say: 'Reálná čísla ve formátu IEEE sedm pět čtyři, jednoduchá přesnost.' },
      ...reveal('Formát single', [
        ['x = <b>± 1,m · 2<sup>e</sup></b>', 'Číslo zapíšeme jako plus minus jedna celá mantisa krát dva na exponent.'],
        ['<b>1</b> bit znaménko · <b>8</b> bitů exponent · <b>23</b> bitů mantisa', 'Třicet dva bitů tvoří jeden bit znaménka, osm bitů exponentu a dvacet tři bitů mantisy.'],
        ['exponent s posunem: <b>e′ = e + 127</b>', 'K exponentu přičteme sto dvacet sedm, takže se ukládá bez znaménka.'],
        ['úvodní „1,“ se <b>neukládá</b>', 'Úvodní jednička před čárkou se neukládá, je tam vždy.']
      ]),
      { h: diagram('Rozložení 32 bitů', UPP.ieeeDiagram()), say: 'Bit třicet jedna je znaménko, bity třicet až dvacet tři exponent a zbytek mantisa.' },
      ...reveal('Příklad: −6,5', [
        ['6,5 = 110,1<sub>2</sub>', 'Příklad: minus šest celých pět. Šest celých pět je ve dvojkové soustavě jedna jedna nula celá jedna.'],
        ['normalizace: <b>1,101 · 2<sup>2</sup></b>', 'Čárku posuneme o dvě místa doleva: jedna celá jedna nula jedna krát dva na druhou.'],
        ['znaménko <b>1</b> · e′ = 2 + 127 = 129 = <b>10000001</b>', 'Znaménko je jedna. Exponent je dva plus sto dvacet sedm, tedy sto dvacet devět, binárně jedna a šest nul a jedna.'],
        ['mantisa: <b>101</b> 0000 … 0', 'Mantisa jsou bity za čárkou, jedna nula jedna, doplněné nulami.'],
        [`→ 1 | 10000001 | 1010000… = <span class="ac">${ieee(-6.5)}<sub>16</sub></span>`, 'Výsledek v šestnáctkové soustavě je cé nula dé nula nula nula nula nula.']
      ])
    ] },
    { file: '07-2-specialni-hodnoty', at: 'Speciální hodnoty', title: 'Speciální hodnoty a přesnost', steps: [
      { h: title('Speciální hodnoty', 'Nula, nekonečno, NaN'), say: 'Speciální hodnoty ve formátu IEEE sedm pět čtyři.' },
      ...reveal('Exponent samé 0 nebo samé 1', [
        ['<b>nula:</b> exponent samé 0, mantisa 0', 'Nula má exponent i mantisu ze samých nul.'],
        ['<b>denormalizované:</b> exponent samé 0, mantisa ≠ 0 → ±0,m · 2<sup>e</sup>', 'Když je exponent nulový, ale mantisa ne, jde o denormalizované číslo. Vyplňuje mezeru mezi nulou a nejmenším normálním číslem.'],
        ['<b>nekonečno:</b> exponent samé 1, mantisa 0', 'Exponent ze samých jedniček a nulová mantisa znamená nekonečno.'],
        ['<b>NaN:</b> exponent samé 1, mantisa ≠ 0', 'Exponent ze samých jedniček a nenulová mantisa je NaN, tedy nedefinovaná hodnota, třeba nula děleno nulou.']
      ]),
      ...reveal('Přesnost', [
        ['single: 1 + 8 + 23 = <b>32</b> bitů', 'Jednoduchá přesnost má třicet dva bitů.'],
        ['double: 1 + 11 + 52 = <b>64</b> bitů', 'Dvojitá přesnost má šedesát čtyři bitů: jedenáct bitů exponentu a padesát dva bitů mantisy.'],
        ['víc mantisy = <b>přesnost</b> · víc exponentu = <b>rozsah</b>', 'Více bitů mantisy znamená větší přesnost, více bitů exponentu větší rozsah.']
      ])
    ] }
  ],
  'binarni-kody': [
    { file: '08-1-hammingova-vzdalenost', at: 'Hammingova vzdálenost', title: 'Hammingova vzdálenost', steps: [
      { h: title('Hammingova vzdálenost', 'Jak daleko jsou od sebe dvě kódová slova'), say: 'Hammingova vzdálenost.' },
      ...reveal('Definice', [
        ['d(X, Y) = <b>počet bitů</b>, ve kterých se X a Y liší', 'Hammingova vzdálenost dvou slov je počet bitů, ve kterých se liší.'],
        [`X = 0110, Y = 1100 → d = <b>${hd('0110', '1100')}</b>`, 'Slova nula jedna jedna nula a jedna jedna nula nula se liší v prvním a třetím bitu. Vzdálenost je dva.'],
        ['d<sub>min</sub> = nejmenší vzdálenost mezi <b>různými</b> slovy kódu', 'Minimální kódová vzdálenost je nejmenší vzdálenost mezi dvěma různými slovy kódu.']
      ]),
      { h: diagram('3bitová slova jako vrcholy krychle', UPP.cubeDiagram()), say: 'Tříbitová slova si můžeme představit jako vrcholy krychle. Vzdálenost je počet hran mezi nimi. Slova se sudou paritou nikdy nesousedí, proto je jejich minimální vzdálenost dva.' },
      ...reveal('Co kód zvládne', [
        ['d<sub>min</sub> ≥ 2: <b>detekuje</b> d<sub>min</sub> − 1 chyb', 'Kód s minimální vzdáleností aspoň dva je zabezpečující. Odhalí o jednu chybu méně, než je minimální vzdálenost.'],
        ['d<sub>min</sub> ≥ 3: <b>opraví</b> (d<sub>min</sub> − 1) div 2 chyb', 'Od vzdálenosti tři je kód samoopravný. Opraví polovinu z minimální vzdálenosti minus jedna.']
      ])
    ] },
    { file: '08-2-paritni-bit', at: 'Paritní bit', title: 'Paritní bit', steps: [
      { h: title('Paritní bit', 'Nejjednodušší zabezpečení dat'), say: 'Paritní bit. Nejjednodušší způsob, jak odhalit chybu.' },
      ...reveal('Parita', [
        ['<b>sudá</b> parita: počet jedniček včetně p je sudý', 'Při sudé paritě doplníme bit tak, aby byl počet jedniček sudý.'],
        ['<b>lichá</b> parita: počet jedniček je lichý', 'Při liché paritě tak, aby byl lichý.'],
        ['1011001 (4 jedničky): sudá → <b>p = 0</b>, lichá → <b>p = 1</b>', 'Data jedna nula jedna jedna nula nula jedna mají čtyři jedničky. Sudá parita přidá nulu, lichá jedničku.']
      ]),
      ...reveal('Co parita umí', [
        ['odhalí <b>lichý</b> počet chyb', 'Paritní bit odhalí chybu v lichém počtu bitů.'],
        ['<b>neopraví</b> – nevíme, který bit je špatně', 'Opravit ji ale neumí, protože nevíme, který bit je špatně.'],
        ['dvě chyby se „vyruší“ a zůstanou <b>nepoznány</b>', 'Dvě chyby se navzájem vyruší a zůstanou nepoznány.']
      ])
    ] },
    { file: '08-3-hamminguv-kod', at: 'Samoopravný kód', title: 'Hammingův kód: oprava chyby', steps: [
      { h: title('Hammingův kód', 'Kód, který chybu sám najde a opraví'), say: 'Hammingův kód. Kód, který jednu chybu sám najde a opraví.' },
      ...reveal('Konstrukce', [
        ['paritní bity na pozicích <b>1, 2, 4, 8 …</b>', 'Paritní bity dáme na pozice, které jsou mocninou dvojky: jedna, dva, čtyři, osm.'],
        ['podmínka <b>m + k + 1 ≤ 2<sup>k</sup></b> → pro 4 datové bity k = 3', 'Počet paritních bitů k musí splnit podmínku: m plus k plus jedna je nejvýš dva na kátou. Pro čtyři datové bity stačí tři paritní.'],
        ['parita na pozici 2<sup>i</sup> kontroluje pozice s <b>jedničkou v bitu i</b>', 'Paritní bit na pozici dva na itou kontroluje všechny pozice, které mají v binárním zápisu jedničku v bitu i.']
      ]),
      { h: diagram('Co který paritní bit kontroluje', UPP.hammingGrid()), say: 'První paritní bit kontroluje liché pozice, druhý pozice dva, tři, šest a sedm, třetí pozice čtyři až sedm.' },
      { h: `<h2>Data 1011 → kódové slovo</h2>${tt(['pozice', ...'1234567'], [['bit', 'p₁', 'p₂', 'd₁', 'p₃', 'd₂', 'd₃', 'd₄'], ['hodnota', ...ham.w]])}<p class="sub" style="text-align:center">p₁ = poz. 3, 5, 7 · p₂ = poz. 3, 6, 7 · p₃ = poz. 5, 6, 7 → <span class="ac">${ham.w}</span></p>`, say: `Data jedna nula jedna jedna. Spočítáme sudé parity: první paritní bit je nula, druhý jedna, třetí nula. Kódové slovo je ${sp(ham.w)}.` },
      { h: `<h2>Chyba na pozici 5</h2><div class="big">přijato: ${ham.bad}<br><span class="mu">s₃ s₂ s₁ = ${ham.syn.toString(2).padStart(3, '0')}</span><br><span class="ac">= ${ham.syn} → neguj bit 5</span></div>`, say: `Přijmeme slovo s chybou na páté pozici. Znovu spočítáme parity. Výsledky kontrol složené za sebou dají syndrom jedna nula jedna, tedy pět. Bit na pozici pět znegujeme a chyba je opravená.` }
    ] }
  ],
  'von-neumann': [
    { file: '09-1-von-neumann', at: 'Koncepce konstrukce', title: 'Von Neumannovo schéma', steps: [
      { h: title('Von Neumannovo schéma', 'Jak je počítač poskládaný'), say: 'Architektura počítače podle von Neumanna.' },
      ...reveal('Dvě koncepce', [
        ['<b>von Neumann</b> (1945): jedna paměť pro <b>program i data</b>', 'John von Neumann popsal v roce tisíc devět set čtyřicet pět počítač s jednou pamětí pro program i data.'],
        ['<b>Harvard:</b> <b>oddělená</b> paměť pro program a pro data', 'Harvardské schéma má paměť pro program a pro data oddělenou.']
      ]),
      { h: diagram('Von Neumannovo schéma', UPP.vnDiagram()), say: 'Procesor se skládá z řadiče a aritmeticko logické jednotky. Řadič řídí ostatní části a dostává od nich stavová hlášení. Data proudí mezi vstupními zařízeními, pamětí, procesorem a výstupními zařízeními.' },
      ...reveal('Princip činnosti', [
        ['① do paměti se vloží <b>program</b>', 'Nejdřív se do operační paměti vloží program.'],
        ['② stejně se vloží <b>data</b>', 'Stejnou cestou se do paměti vloží data.'],
        ['③ <b>výpočet</b>: ALU řízená řadičem, mezivýsledky v registrech / paměti', 'Proběhne výpočet. Jednotlivé kroky dělá aritmeticko logická jednotka, kterou řídí řadič. Mezivýsledky jdou do registrů nebo do paměti.'],
        ['④ výsledky na <b>výstupní zařízení</b>', 'Nakonec se výsledky pošlou na výstupní zařízení.']
      ])
    ] },
    { file: '09-2-registry', at: 'Procesor a jeho registry', title: 'Registry procesoru', steps: [
      { h: title('Registry procesoru', 'Malé rychlé paměti uvnitř procesoru'), say: 'Registry procesoru.' },
      ...reveal('Registry', [
        ['<b>IP</b> – čítač instrukcí: adresa prováděné instrukce', 'Čítač instrukcí obsahuje adresu instrukce, která se právě provádí.'],
        ['<b>RI</b> – registr instrukcí: načtená instrukce', 'Registr instrukcí drží instrukci načtenou z paměti.'],
        ['<b>Flag</b> – příznaky podle výsledku operace', 'Stavové slovo obsahuje příznaky podle výsledku operace, třeba že výsledek byl nulový.'],
        ['<b>S</b> – střadač: výsledek instrukce', 'Střadač drží výsledek provedené instrukce.'],
        ['<b>IND</b> – indexregistr: posun adresy', 'Indexregistr slouží k modifikaci adresy.']
      ]),
      { h: list('Zapamatuj si', ['IP ukazuje <b>kam</b> · RI drží <b>co</b> · S drží <b>výsledek</b> · Flag říká, <b>jak dopadl</b> · IND <b>posouvá adresu</b>'], 1, false), say: 'Zkráceně: čítač instrukcí ukazuje kam, registr instrukcí drží co, střadač výsledek, příznaky říkají, jak to dopadlo, a indexregistr posouvá adresu.' }
    ] }
  ],
  'strojovy-kod': [
    { file: '10-1-instrukcni-cyklus', at: 'Činnost procesoru', title: 'Instrukční cyklus', steps: [
      { h: title('Instrukční cyklus', 'Výběrová a prováděcí fáze'), say: 'Jak procesor zpracuje jednu instrukci. Každá instrukce prochází dvěma fázemi.' },
      { h: diagram('Instrukční cyklus', UPP.cycleDiagram()), say: 'Ve výběrové fázi se instrukce načte z paměti, v prováděcí fázi se vykoná. Pak se cyklus opakuje s další instrukcí.' },
      ...reveal('Výběrová fáze', [
        ['řadič pošle obsah <b>IP</b> na adresní sběrnici a čte z paměti', 'Řadič pošle adresu z čítače instrukcí na adresní sběrnici a vydá příkaz ke čtení.'],
        ['instrukce se uloží do <b>RI</b>', 'Paměť pošle instrukci a ta se uloží do registru instrukcí.'],
        ['<b>IP + 1</b>', 'Čítač instrukcí se zvýší o jedna.']
      ]),
      ...reveal('Prováděcí fáze', [
        ['instrukce v RI se <b>dekóduje</b>', 'Instrukce se dekóduje.'],
        ['případně se k operandu přičte <b>IND</b>; přečtou se operandy', 'Pokud je třeba, přičte se obsah indexregistru, a z paměti se přečtou operandy.'],
        ['<b>ALU</b> provede operaci → výsledek do <b>střadače</b> → na výstupní adresu', 'Aritmeticko logická jednotka provede operaci, výsledek jde do střadače a odtud na adresu výstupního operandu.']
      ])
    ] },
    { file: '10-2-adresace', at: 'Způsoby adresace', title: 'Způsoby adresace operandu', steps: [
      { h: title('Způsoby adresace', 'Kde instrukce najde svůj operand'), say: 'Způsoby adresace operandu. Kde instrukce najde svůj operand.' },
      { h: `<h2>Paměť pro příklad</h2>${tt(['adresa', 'obsah'], Object.entries(MEM))}<p class="sub" style="text-align:center">v instrukci je X = 100, IND = 1</p>`, say: 'Mějme paměť: na adrese sto je sto dva, na adrese sto jedna je čtyřicet a na adrese sto dva je sto jedna. V instrukci je číslo sto.' },
      ...reveal('X = 100 → do střadače S', [
        [`<b>bezprostřední</b> X → S: <span class="ac">${ADR.imm}</span>`, 'Bezprostřední adresace použije přímo číslo z instrukce, tedy sto. Paměť se nečte.'],
        [`<b>přímá</b> ⟨X⟩ → S: ⟨100⟩ = <span class="ac">${ADR.dir}</span>`, 'Přímá adresace bere číslo jako adresu a použije její obsah. Na adrese sto je sto dva.'],
        [`<b>nepřímá</b> ⟨⟨X⟩⟩ → S: ⟨102⟩ = <span class="ac">${ADR.ind}</span>`, 'Nepřímá adresace najde na adrese sto teprve adresu operandu, sto dva. Na ní je sto jedna.'],
        [`<b>s posuvem</b> ⟨X + ⟨IND⟩⟩ → S: ⟨101⟩ = <span class="ac">${ADR.off}</span>`, 'Adresace s posuvem přičte k číslu obsah registru. Sto plus jedna je sto jedna a na této adrese je čtyřicet.']
      ]),
      { h: list('Zapamatuj si', ['počet čtení z paměti: bezprostřední <b>0</b> · přímá <b>1</b> · nepřímá <b>2</b>'], 1, false), say: 'Pomůcka: bezprostřední adresace nečte paměť vůbec, přímá jednou a nepřímá dvakrát.' }
    ] },
    { file: '10-3-logicke-instrukce', at: 'Logické instrukce', title: 'Logické instrukce AND, OR, XOR', steps: [
      { h: title('Logické instrukce', 'AND, OR a XOR po bitech'), say: 'Logické instrukce AND, OR a XOR.' },
      { h: list('OP A, B', ['operace se provede na <b>souhlasných bitech</b> A a B', 'výsledek se uloží do <b>druhého operandu B</b>'], 2, false), say: 'Logická instrukce pracuje po bitech: vždy s bity na stejné pozici. Výsledek se uloží do druhého operandu.' },
      ...['AND', 'OR', 'XOR'].map((op, k, all) => ({
        h: `<h2>${op} A, B</h2>${tt(['', ...'76543210'], [['A', ...LOG.A], ['B', ...LOG.B], ...all.slice(0, k + 1).map(o => [o + ' → B', ...LOG[o]])], -1)}`,
        say: ['AND dá jedničku jen tam, kde mají jedničku oba operandy.', 'OR dá jedničku tam, kde ji má aspoň jeden operand.', 'XOR dá jedničku tam, kde se bity liší.'][k]
      })),
      { h: list('Využití', ['<b>AND</b> s maskou bity vynuluje', '<b>OR</b> je nastaví na 1', '<b>XOR</b> je přepne'], 3, false), say: 'V praxi se AND s maskou používá k vynulování vybraných bitů, OR k jejich nastavení na jedničku a XOR k jejich přepnutí.' }
    ] }
  ],
  'operacni-system': [
    { file: '11-1-operacni-system', at: 'Operační systém a třívrstvá', title: 'Operační systém a jeho vrstvy', steps: [
      { h: title('Operační systém', 'Mezi aplikacemi a hardwarem'), say: 'Operační systém. K čemu slouží a proč ho počítač potřebuje.' },
      ...reveal('Hlavní úkoly', [
        ['🕹️ <b>Ovládání počítače</b> – spouštění programů, uživatelské rozhraní', 'Operační systém ovládá počítač: spouští programy a poskytuje uživatelské rozhraní.'],
        ['🧩 <b>Abstrakce hardwaru</b> – aplikační rozhraní a ovladače', 'Skrývá detaily hardwaru za jednoduché funkce aplikačního rozhraní a za ovladače zařízení.'],
        ['📦 <b>Správa prostředků</b> – procesor, paměť, disk, vstup a výstup', 'Přiděluje programům procesor, paměť, disk i vstupní a výstupní zařízení.'],
        ['🔐 <b>Bezpečnost</b> – přístupová práva', 'A hlídá bezpečnost, tedy kdo smí s čím pracovat a jak.']
      ]),
      { h: diagram('Vrstvy mezi uživatelem a hardwarem', UPP.osLayersDiagram()), say: 'Mezi uživatelem a hardwarem jsou vrstvy. Uživatel pracuje s aplikací, aplikace volá operační systém a ten komunikuje s hardwarem přes ovladače. Každá vrstva mluví jen se sousední, proto vznikají čtyři rozhraní.' },
      ...reveal('Rozhraní', [
        ['<b>Ovladač</b> se stane součástí OS · <b>firmware</b> je v paměti ROM zařízení', 'Ovladač se nainstaluje a stane se součástí operačního systému. Firmware je naproti tomu program uložený v paměti rom přímo v zařízení.'],
        ['<b>Statická knihovna</b> (.lib, .a) je přímo v programu', 'Statická knihovna se při překladu připojí přímo do spustitelného souboru, takže program obsahuje vše potřebné.'],
        ['<b>Dynamická knihovna</b> (.dll, .so) se připojuje až za běhu', 'U dynamické knihovny jsou v programu jen odkazy na funkce. Pro běh musí být knihovna k dispozici. Přípona dé el el patří Windows, přípona es o Linuxu.']
      ]),
      { h: list('Přenositelnost programů', ['Liší se formát souborů (Windows <b>.exe</b>, Linux <b>ELF</b>) i aplikační rozhraní', '<b>Java</b> vkládá virtuální stroj <b>JVM</b> – program se přeloží do Byte Code'], 2, false), say: 'Programy nejsou mezi operačními systémy přenositelné, protože se liší formát spustitelných souborů i aplikační rozhraní. Java to řeší virtuálním strojem. Program se přeloží do takzvaného Byte Code, který poběží na jakékoli platformě s virtuálním strojem.' }
    ] },
    { file: '11-2-multitasking', at: 'Správa procesoru', title: 'Multitasking', steps: [
      { h: title('Multitasking', 'Jak se programy dělí o procesor'), say: 'Multitasking. Jak se programy dělí o jeden procesor.' },
      ...reveal('Sdílení času', [
        ['Většina PC má <b>jeden procesor</b>, programů běží mnoho', 'Většina osobních počítačů má jen jeden procesor, a přesto běží mnoho programů najednou.'],
        ['Programy se střídají po <b>milisekundách</b> – vzniká iluze souběhu', 'Programy se střídají po velmi krátkých okamžicích, proto to vypadá, že běží současně.']
      ]),
      { h: diagram('Kooperativní × preemptivní', UPP.multitaskDiagram()), say: 'Při kooperativním multitaskingu se procesy vzdávají procesoru samy. Když se jeden zasekne, stojí celý systém. Při preemptivním multitaskingu procesor odebírá operační systém, jakmile uplyne časové kvantum.' },
      { h: list('Příklady', ['<b>Kooperativní</b>: Windows 3.x', '<b>Preemptivní</b>: Windows 95 a novější, Linux'], 2, false), say: 'Kooperativní byly Windows tři tečka x. Preemptivní jsou Windows devadesát pět a novější a také Linux.' },
      { h: list('Skutečná souběžnost', ['<b>Více jader</b> / procesorů → procesy běží opravdu paralelně', '<b>Multithreading</b> – proces se dělí na více vláken'], 2, false), say: 'U víceprocesorových a vícejádrových systémů mohou procesy běžet skutečně souběžně. Proces se navíc může rozdělit na více vláken, která se zpracovávají současně.' }
    ] },
    { file: '11-3-virtualni-pamet', at: 'Správa paměti', title: 'Správa paměti a virtuální paměť', steps: [
      { h: title('Správa paměti', 'Stránky, rámy a virtuální paměť'), say: 'Správa paměti a virtuální paměť.' },
      ...reveal('Správce paměti', [
        ['udržuje informace o <b>využití</b> fyzické paměti', 'Správce paměti eviduje, která část fyzické paměti je využitá.'],
        ['<b>přiděluje</b> paměť procesům a uvolněnou vrací mezi volnou', 'Přiděluje paměť procesům a uvolněnou paměť zase zařadí mezi volnou.'],
        ['pozná proces, který skončil <b>bez uvolnění</b> paměti', 'Pozná i proces, který skončil bez uvolnění paměti, například při násilném ukončení.'],
        ['zajišťuje <b>ochranu paměti</b>', 'A hlídá ochranu paměti: proces nesmí sahat mimo svůj prostor.']
      ]),
      { h: diagram('Stránky a rámy', UPP.virtMemDiagram()), say: 'Každý proces má virtuální paměť rozdělenou na stránky, třeba po čtyřech kilobajtech. Fyzická paměť je rozdělená na rámy stejné velikosti. Operační systém stránkám přiděluje rámy a ty, které se nevejdou, odkládá na pevný disk.' },
      { h: list('Zapamatuj si', ['<b>Stránka</b> = jednotka virtuální paměti programu', '<b>Rám</b> = jednotka fyzické paměti', 'Virtuální paměť může být <b>větší</b> než fyzická'], 3, false), say: 'Stránka je jednotka virtuální paměti, rám je jednotka fyzické paměti. Virtuální paměť přitom může být i násobně větší než fyzická.' }
    ] },
    { file: '11-4-stavy-procesu', at: 'Proces a jeho stavy', title: 'Proces a jeho stavy', steps: [
      { h: title('Proces a jeho stavy', 'Od vzniku po ukončení'), say: 'Proces a jeho stavy.' },
      { h: list('Proces', ['Program <b>spuštěný a zpracovávaný</b> operačním systémem', 'Má vlastní paměť pro instrukce a data, <b>registry</b> a <b>zásobník</b>'], 2, false), say: 'Proces je program, který operační systém spustil a zpracovává. Dostane vlastní paměť pro instrukce a data, vlastní registry a zásobník.' },
      ...reveal('Stavy procesu', [
        ['<b>nový</b> – právě vytvořen, bude zařazen ke zpracování', 'Nový proces je právě vytvořený a bude zařazen ke zpracování.'],
        ['<b>připraven</b> – čeká na procesor', 'Připravený proces by mohl běžet, ale nemá přidělený procesor.'],
        ['<b>probíhající</b> – má procesor', 'Probíhající proces má procesor a vykonává se.'],
        ['<b>čekající</b> – čeká na zdroj nebo událost', 'Čekající proces čeká na splnění podmínky, třeba na uvolnění sdíleného prostředku.'],
        ['<b>zablokován</b> – zmrazen, procesor nedostává', 'Zablokovaný proces je zmrazený a procesor nedostává, dokud ho někdo neprobudí.'],
        ['<b>ukončen</b> – bude uvolněn z paměti', 'Ukončený proces skončil činnost a bude uvolněn z paměti.']
      ]),
      { h: diagram('Přechody mezi stavy', UPP.procStatesDiagram()), say: 'Připravený proces dostane procesor a začne probíhat. Probíhající proces může procesor ztratit a vrátit se mezi připravené, nebo přejde do stavu čekající či zablokovaný. Návrat ke zpracování vede vždy přes stav připraven.' },
      { h: list('Pozor', ['Z čekajícího ani zablokovaného se nejde rovnou do <b>probíhajícího</b>', 'Vždy přes <b>připraven</b>'], 2, false), say: 'Pozor, z čekajícího ani zablokovaného stavu se proces nikdy nedostane rovnou k procesoru. Vždy se nejprve vrátí do stavu připraven.' }
    ] },
    { file: '11-5-uvaznuti', at: 'Uváznutí (deadlock)', title: 'Uváznutí', steps: [
      { h: title('Uváznutí', 'Když všichni čekají na všechny'), say: 'Uváznutí, anglicky deadlock.' },
      { h: diagram('Dva procesy, dva zdroje', UPP.deadlockDiagram()), say: 'První proces drží zdroj A a chce zdroj B. Druhý proces drží zdroj B a chce zdroj A. Oba čekají na událost, která nikdy nenastane, a žádný nepokračuje.' },
      ...reveal('Čtyři přístupy', [
        ['<b>Ignorovat</b> – „pštrosí algoritmus“', 'První přístup je hrozbu ignorovat. Říká se mu pštrosí algoritmus a používá ho mnoho systémů včetně unixových.'],
        ['<b>Prevence</b> – např. číslování zdrojů', 'Prevence zabrání vzniku uváznutí předem. Nejčastěji se používá číslování zdrojů.'],
        ['<b>Vyhýbání se</b> – algoritmus bankéře', 'Vyhýbání se uváznutí zajistí, že zdroj se nepřidělí, pokud není bezpečná cesta k dokončení procesů. To dělá algoritmus bankéře.'],
        ['<b>Detekce a obnova</b> – drahé, nutný restart', 'Při detekci se uváznutí připustí, odhalí a stav se obnoví. To je drahé a často je potřeba restartovat aplikace.']
      ]),
      { h: list('Zapamatuj si', ['V obecném případě je uváznutí <b>efektivně neřešitelné</b>', 'Jde o kompromis mezi cenou řešení a pravděpodobností uváznutí'], 2, false), say: 'Problém uváznutí je v obecném případě efektivně neřešitelný. Vždy jde o kompromis mezi cenou řešení a pravděpodobností, že k uváznutí dojde.' }
    ] },
    { file: '11-6-semafory', at: 'Řízení přístupu: semafory', title: 'Semafory a číslování zdrojů', steps: [
      { h: title('Semafory', 'Řízení přístupu do kritické oblasti'), say: 'Semafory a číslování zdrojů.' },
      { h: list('Kritická oblast', ['Do ní smí <b>nejvýše jeden</b> proces (nebo předem daný počet)', 'Je-li obsazená, proces <b>čeká</b>', 'Každý proces ji musí v konečném čase <b>opustit</b>'], 3, false), say: 'Do kritické oblasti smí současně nejvýše jeden proces, případně předem daný počet. Je-li obsazená, proces čeká. A každý proces ji musí v konečném čase opustit.' },
      { h: diagram('Binární semafor', UPP.semaphoreDiagram()), say: 'Binární semafor je sdílená proměnná se dvěma polohami: jedna otevřeno, nula zavřeno. Proces, který projde, zámek zavře. Ostatní čekají, dokud proces uvnitř nezavolá signal. Test a uzavření musí být jedna nedělitelná instrukce.' },
      ...reveal('Počítaný semafor', [
        ['hodnota <b>0 … N</b>', 'Počítaný semafor je celé číslo od nuly do en.'],
        ['<b>wait(S)</b>: je-li S &gt; 0, sníží S o 1, jinak proces čeká', 'Operace wait sníží hodnotu o jedničku, pokud je kladná. Jinak proces čeká.'],
        ['<b>signal(S)</b>: zvýší S o 1 a probudí čekající', 'Operace signal hodnotu zvýší o jedničku a případně probudí čekající proces.']
      ]),
      ...reveal('Číslování zdrojů: A(1), B(2), C(3)', [
        ['P1 získá A, P2 získá B', 'Zdroje číslujeme a smí se žádat jen ve vzestupném pořadí. První proces získá zdroj A, druhý zdroj B.'],
        ['P1 chce B a čeká – P2 už nesmí chtít A', 'První proces chce B a čeká. Druhý proces by chtěl A, ale to má nižší číslo než B, takže nesmí. Smí jen C.'],
        ['P2 uvolní B → P1 získá B → <b>cyklické čekání nevznikne</b>', 'Druhý proces nakonec B uvolní, první ho získá a uváznutí nevznikne, protože se čeká vždy jen na vyšší číslo.']
      ])
    ] },
    { file: '11-7-algoritmus-bankere', at: 'Algoritmus bankéře', title: 'Algoritmus bankéře', steps: [
      { h: title('Algoritmus bankéře', 'Je přidělení zdroje bezpečné?'), say: 'Algoritmus bankéře od Dijkstry.' },
      { h: list('Myšlenka', ['Zdroj se přidělí, jen když systém zůstane v <b>bezpečném stavu</b>', 'Bezpečný stav: existuje <b>pořadí dokončení</b>, kdy každý proces dostane zbytek a skončí', 'POTŘ = MAX − ALOK'], 3, false), say: 'Bankéř přidělí zdroj, jen když po přidělení zůstane systém v bezpečném stavu. To znamená, že existuje pořadí, ve kterém všechny procesy dostanou zbývající zdroje a skončí. Potřeba je maximum minus už přidělené.' },
      { h: `<h2>Tři procesy, zdroje A B C · volné ${vec(BANK.avail)}</h2>${tt(['', 'MAX', 'ALOK', 'POTŘ'], Object.keys(BANK.max).map(p => [p, vec(BANK.max[p]), vec(BANK.alloc[p]), vec(BANK.need[p])]), 3)}`, say: 'Příklad: tři procesy a tři typy zdrojů. Volné zdroje jsou tři, tři, dva. První proces potřebuje sedm, čtyři, tři. Druhý jedna, dvě, dvě. Třetí pět, nula, nula.' },
      ...BANK.steps.map(({ p, before, after }, i) => ({
        h: `<h2>Krok ${i + 1}: dokončí ${p}</h2>${tt(['volné před', `POTŘ ${p}`, `uvolní ALOK ${p}`, 'volné po'], [[vec(before), vec(BANK.need[p]) + ' ≤ ' + vec(before), vec(BANK.alloc[p]), vec(after)]], 3)}`,
        say: [
          'Druhý proces potřebuje jedna, dvě, dvě, což se vejde do volných tří, tří, dvou. Může skončit a vrátí své přidělené zdroje. Volné jsou pak pět, tři, dva.',
          'Třetí proces potřebuje pět, nula, nula, což se vejde do pěti, tří, dvou. Skončí a volné jsou osm, čtyři, čtyři.',
          'Nakonec první proces potřebuje sedm, čtyři, tři, což se vejde do osmi, čtyř, čtyř. Skončí a volné jsou osm, pět, čtyři.'
        ][i]
      })),
      { h: list('Výsledek', [`Bezpečné pořadí: <b>${BANK.order.join(' → ')}</b>`, `Kontrola: ALOK + volné na začátku = ${vec(BANK.total)}`], 2, false), say: 'Bezpečné pořadí je P dva, P tři, P jedna, takže zdroj lze přidělit. Kontrola výpočtu: na konci musí být volné zdroje rovny součtu všeho, tedy osm, pět, čtyři.' }
    ] }
  ],
  'algoritmy': [
    { file: '12-1-algoritmus', at: 'Algoritmus a jeho vlastnosti', title: 'Algoritmus a jeho vlastnosti', steps: [
      { h: title('Algoritmus', 'Pět vlastností, které musí splnit'), say: 'Algoritmus a jeho vlastnosti.' },
      { h: list('Definice', ['<b>Konečná posloupnost elementárních kroků</b>', 'Po každém kroku je <b>jednoznačně dáno</b>, co bude následovat nebo zda výpočet končí'], 2, false), say: 'Algoritmus je konečná posloupnost elementárních kroků. Po každém kroku je jednoznačně určeno, co následuje, nebo že výpočet končí.' },
      ...reveal('Vlastnosti algoritmu', [
        ['<b>Mechanický</b> – provedení nevyžaduje chápat úlohu', 'Mechanický: při provádění se není nutné vracet k porozumění úloze, provede ho i stroj.'],
        ['<b>Deterministický</b> – vždy je jasné, co dál', 'Deterministický: po každém kroku je jasné, co následuje.'],
        ['<b>Hromadný a univerzální</b> – řeší celou třídu úloh', 'Hromadný a univerzální: neřeší jednu osamocenou úlohu, ale celou třídu podobných úloh.'],
        ['<b>Konečný</b> – pro přípustná data skončí', 'Konečný, neboli rezultativní: pro přípustná data skončí po konečném počtu kroků.'],
        ['<b>Správný</b> – vstup splňuje podmínku → výstup splní výstupní podmínku', 'Správný: když vstupní data splňují podmínku na vstup, výstupní data musí splnit podmínku na výstup.']
      ])
    ] },
    { file: '12-2-testovaci-tabulka', at: 'Ověření (ne)správnosti', title: 'Ověření algoritmu a testovací tabulka', steps: [
      { h: title('Ověření algoritmu', 'Protipříklad a testovací tabulka'), say: 'Jak ověřit algoritmus, testovací tabulka.' },
      { h: list('Test', ['Správnost jde obecně ověřit jen u <b>jednoduchých</b> algoritmů', 'Nesprávnost vyvrátí <b>jediný protipříklad</b>', 'Testovací data: <b>všechny cesty</b>, hodnoty u meze a <b>nepřípustná</b> data'], 3, false), say: 'Správnost jde obecně ověřit jen u velmi jednoduchých algoritmů. Nesprávnost naopak vyvrátí jediný protipříklad. Testovací data volíme tak, aby prošla všechny cesty, aby byla blízko meze přípustnosti a aby zahrnula i nepřípustné hodnoty.' },
      { h: `<h2>Příklad 1</h2><div class="big">x := 9; y := 7; z := x + y<br>jestliže x &lt; y pak x := x + 2 jinak y := y · 3</div>`, say: 'Příklad. X je devět, y je sedm, z je součet, tedy šestnáct. Podmínka x menší než y neplatí, provede se větev jinak.' },
      { h: `<h2>Příklad 1: výsledek</h2><div class="big">x = 9 · y = 7 · 3 = <span class="ac">21</span> · z = 16</div>`, say: 'Y se vynásobí třemi a je dvacet jedna. Výsledek: x je devět, y dvacet jedna, z šestnáct.' },
      { h: `<h2>Příklad 2: cyklus</h2><div class="big" style="font-size:30px">x := 8; y := x div 2; z := y · 5<br>pro i od 1 do 4: x := x − 1; y := y + 2; z := z div 2</div><p class="sub" style="text-align:center">počátek: x = 8, y = 4, z = 20</p>`, say: 'Druhý příklad s cyklem. Na začátku je x osm, y čtyři a z dvacet. Cyklus se čtyřikrát opakuje: x se zmenší o jedna, y se zvětší o dvě a z se celočíselně vydělí dvěma.' },
      ...[1, 2, 3, 4].map(k => ({ h: `<h2>Testovací tabulka</h2>${tt(['i', 'x', 'y', 'z'], TRACE.slice(0, k))}`, say: ['Po prvním průchodu je x sedm, y šest a z deset.', 'Po druhém: šest, osm a pět.', 'Po třetím: pět, deset a dvě, protože pět děleno dvěma celočíselně je dvě.', 'Po čtvrtém: x čtyři, y dvanáct a z jedna. To je výsledek.'][k - 1] }))
    ] },
    { file: '12-3-slozitost', at: 'Prostorová a časová složitost', title: 'Složitost algoritmů', steps: [
      { h: title('Složitost', 'Jak rychle roste práce s rozsahem úlohy'), say: 'Složitost algoritmů.' },
      ...reveal('Dva druhy', [
        ['<b>Časová</b> (operační): počet operací v nejhorším nebo průměrném případě', 'Časová neboli operační složitost je počet nutných operací, obvykle v nejhorším případě.'],
        ['<b>Prostorová</b>: paměť na reprezentaci dat – <b>ne délka programu</b>', 'Prostorová složitost je dána paměťovými nároky na data. Nezávisí na délce programu.']
      ]),
      { h: diagram('Růst počtu operací', UPP.complexityDiagram()), say: 'Sledujeme, jak složitost roste s rozsahem úlohy. Lineární a linearitmická funkce rostou mírně, kvadratická rychleji a exponenciální doslova vystřelí.' },
      { h: `<h2>Pořadí složitostí</h2><div class="big" style="font-size:34px">1 &lt; log n &lt; n &lt; n·log n &lt; n² &lt; n³ &lt; 2<sup>n</sup> &lt; n! &lt; nⁿ</div>`, say: 'Pořadí od nejmenší: konstantní, logaritmická, lineární, linearitmická, kvadratická, kubická, exponenciální a faktoriální.' },
      { h: `<h2>Hodnoty pro n = 10, 20, 50</h2>${tt(['n', 'log₂ n', 'n·log₂ n', 'n²', '2ⁿ'], [10, 20, 50].map(n => [n, fixed(Math.log2(n)), Math.round(n * Math.log2(n)), n * n, n < 30 ? (2 ** n).toLocaleString('cs-CZ') : '≈ 1,1·10¹⁵']))}`, say: 'Pro deset prvků je exponenciální funkce teprve tisíc dvacet čtyři. Pro dvacet je to už přes milion a pro padesát řádově deset na patnáctou.' },
      { h: `<h2>Šedesátkrát víc času</h2>${tt(['složitost', 'rozsah za hodinu'], [['n', '60 · n₁'], ['n²', 'zhruba 8 · n₁'], ['2ⁿ', 'jen n₁ + 6'], ['n!', 'téměř beze změny']])}`, say: 'Co když máme šedesátkrát víc času, tedy hodinu místo minuty? U lineárního algoritmu zvládneme šedesátkrát větší úlohu, u kvadratického jen asi osmkrát větší a u exponenciálního pouhých šest prvků navíc.' },
      { h: list('Závěr', ['Exponenciální a faktoriální algoritmy se ani <b>šedesátkrát rychlejším</b> počítačem prakticky nezlepší'], 1, false), say: 'Exponenciální a faktoriální algoritmy tedy nezachrání ani výrazně rychlejší počítač.' }
    ] },
    { file: '12-4-vyvojovy-diagram', at: 'Zápis a znázornění algoritmu', title: 'Zápis algoritmu a vývojový diagram', steps: [
      { h: title('Zápis algoritmu', 'Text, grafika, pseudokód'), say: 'Jak zapsat algoritmus a vývojový diagram.' },
      ...reveal('Způsoby zápisu', [
        ['<b>Volným textem</b> – kuchařka, manuál', 'Algoritmus lze zapsat volným textem, jako kuchařku nebo manuál.'],
        ['<b>Graficky</b> – vývojový diagram, strukturogramy', 'Graficky vývojovým diagramem, případně stromečkovým nebo plošným strukturogramem.'],
        ['<b>Formálně</b> – pseudokód, program', 'Formálně pseudokódem, tedy přirozeným jazykem s klíčovými slovy, nebo programem.']
      ]),
      { h: list('Vývojový diagram', ['Orientovaný graf, který ukazuje <b>časový postup</b> kroků', 'Jeden <b>počáteční</b> a jeden <b>koncový</b> uzel', 'Dnes: diagram aktivit v UML'], 3, false), say: 'Vývojový diagram znázorňuje časový postup kroků orientovaným grafem s jedním počátečním a jedním koncovým uzlem. V jazyce ú em el mu odpovídá diagram aktivit.' },
      ...reveal('Typy uzlů: vstupy a výstupy', [
        ['<b>Počátek</b> – 0 vstupů, 1 výstup', 'Počátek nemá žádný vstup a jeden výstup.'],
        ['<b>Konec</b> – 1 vstup, 0 výstupů', 'Konec má jeden vstup a žádný výstup.'],
        ['<b>Výkonný</b> – 1 vstup, 1 výstup', 'Výkonný blok má jeden vstup a jeden výstup.'],
        ['<b>Rozhodovací</b> – 1 vstup, 2 výstupy', 'Rozhodovací blok má jeden vstup a dva výstupy podle splnění podmínky.'],
        ['<b>Slučovací</b> – 2 vstupy, 1 výstup', 'Slučovací blok má dva vstupy a jeden výstup.']
      ])
    ] },
    { file: '12-5-strukturovany-navrh', at: 'Základní konstrukce a strukturovaný návrh', title: 'Sekvence, selekce, iterace', steps: [
      { h: title('Strukturovaný návrh', 'Sekvence, selekce a iterace'), say: 'Základní konstrukce a strukturovaný návrh.' },
      { h: diagram('Tři základní konstrukce', UPP.controlDiagram()), say: 'Sekvence jsou výkonné bloky za sebou. Selekce je rozhodovací blok se dvěma větvemi, které se opět sloučí. Iterace čili cyklus je slučovací blok následovaný rozhodovacím, z něhož se jedna šipka vrací zpět.' },
      { h: list('Strukturovaný návrh', ['<b>Rozklad shora dolů</b> na jednodušší úlohy', 'Na každé úrovni jen <b>sekvence, selekce, iterace</b>', 'Jiné způsoby rozkladu nejsou přípustné', 'Tolerovaná výjimka: předčasný výskok z cyklu'], 4, false), say: 'Strukturovaný návrh rozkládá složitou úlohu shora dolů na jednodušší. Na každé úrovni se smějí použít jen sekvence, selekce a iterace. Jiný rozklad, třeba libovolné skoky, není přípustný. Tolerovanou výjimkou je předčasný výskok z cyklu.' },
      ...reveal('Strukturogramy', [
        ['<b>Stromečkový</b> – rozklad úlohy, nelze udělat nestrukturovaný algoritmus', 'Stromečkový strukturogram ukazuje rozklad úlohy, jako obsah knihy. Neumožní nakreslit nestrukturovaný algoritmus.'],
        ['<b>Plošný</b> – názorný, časová následnost shora dolů', 'Plošný strukturogram se čte shora dolů a vnořené obdélníky odpovídají vnořeným cyklům a podmínkám. Hodí se do publikací.']
      ])
    ] },
    { file: '12-6-mod', at: 'Příklady ze cvičení: MOD', title: 'Příklad: zbytek po dělení MOD', steps: [
      { h: title('Zbytek po dělení', 'MOD bez operace mod'), say: 'Příklad ze cvičení: zbytek po dělení bez operace mod.' },
      { h: list('Myšlenka', ['Od A odečítáme B <b>tak dlouho</b>, dokud zbytek není menší než B'], 1, false), say: 'Od čísla a budeme odčítat číslo bé tak dlouho, dokud zbytek není menší než bé.' },
      { h: diagram('Vývojový diagram a strukturogram', UPP.modFlowDiagram()), say: 'Vlevo je vývojový diagram a vpravo plošný strukturogram. Načteme a a bé, nastavíme mod na a, a dokud je mod větší nebo roven bé, odčítáme bé. Nakonec mod vypíšeme.' },
      ...[1, 2, 3, 4].map(k => ({ h: `<h2>A = 17, B = 5</h2><div class="big">MOD: ${MODTR(17, 5).slice(0, k).join(' → ')}</div>${k === 4 ? '<p class="sub" style="text-align:center">2 &lt; 5 → cyklus končí, <span class="ac">17 mod 5 = 2</span></p>' : ''}`, say: ['Test pro a rovno sedmnáct a bé rovno pět. Mod je nejprve sedmnáct.', 'Sedmnáct je alespoň pět, takže odečteme pět a dostaneme dvanáct.', 'Dvanáct je opět alespoň pět, odečteme a máme sedm.', 'Sedm je stále alespoň pět, odečteme a máme dvě. Dvě je méně než pět, cyklus končí. Zbytek je dvě.'][k - 1] })),
      { h: list('Podobně', ['Mocnina X<sup>Y</sup>: MOC := 1; <b>dokud I ≤ Y</b> násob X (3<sup>4</sup> = 81)', 'N-tý člen posloupnosti: <b>dokud I ≤ N − 1</b> násob Q (2 · 3<sup>4</sup> = 162)'], 2, false), say: 'Obdobně funguje obecná mocnina. Výsledek jedna se opakovaně násobí základem, třikrát na čtvrtou je osmdesát jedna. U geometrické posloupnosti se opakuje jen o jedna méně: dva krát tři na čtvrtou je sto šedesát dva.' }
    ] },
    { file: '12-7-min-max', at: 'Příklady ze cvičení: MIN a MAX', title: 'Příklad: minimum a maximum', steps: [
      { h: title('Minimum a maximum', 'Výběr extrémů z posloupnosti čísel'), say: 'Příklad ze cvičení: nalezení maxima a minima.' },
      ...reveal('Algoritmus', [
        ['<b>První prvek</b> = počáteční MAX i MIN', 'Počáteční maximum i minimum je první prvek dat, ne pevná konstanta.'],
        ['V cyklu <b>dvě selekce</b>: je-li větší než MAX / menší než MIN, přepiš', 'V cyklu jsou dvě selekce. Je-li prvek větší než maximum, přepíše se maximum. Je-li menší než minimum, přepíše se minimum.'],
        ['Liší se jen <b>čtení dat</b> a <b>podmínka cyklu</b>: pole · soubor (do EOF) · klávesnice (do 0)', 'Liší se jen zdroj dat a podmínka cyklu. U pole se opakuje pevný počet krát, u souboru do konce souboru a u klávesnice do zadané nuly.']
      ]),
      { h: `<h2>Z klávesnice: 4, 9, −2, 7, 0</h2>${tt(['načteno', 'MAX', 'MIN'], MINMAX([4, 9, -2, 7, 0]).rows.slice(0, 1), [])}`, say: 'Příklad, z klávesnice zadáme čtyři, devět, minus dva, sedm a nulu. První prvek je čtyři, takže maximum i minimum je čtyři.' },
      { h: `<h2>Z klávesnice: 4, 9, −2, 7, 0</h2>${tt(['načteno', 'MAX', 'MIN'], MINMAX([4, 9, -2, 7, 0]).rows.slice(0, 3), [])}`, say: 'Devět je větší než maximum, maximum je tedy devět. Minus dva je menší než minimum, minimum je tedy minus dva.' },
      { h: `<h2>Z klávesnice: 4, 9, −2, 7, 0</h2>${tt(['načteno', 'MAX', 'MIN'], MINMAX([4, 9, -2, 7, 0]).rows, [])}<p class="sub" style="text-align:center">0 cyklus ukončí a <b>nezapočítá se</b> → <span class="ac">MAX = 9, MIN = −2</span></p>`, say: 'Sedm nic nezmění. Nula ukončí cyklus a do výsledku se nezapočítá. Výstup je maximum devět a minimum minus dva.' }
    ] }
  ],
  'programovani-vyvoj-sw': [
    { file: '13-1-program-a-jazyk', at: 'Program a programovací jazyk', title: 'Program, syntaxe a sémantika', steps: [
      { h: title('Program a programovací jazyk', 'Syntaxe a sémantika'), say: 'Program a programovací jazyk.' },
      ...reveal('Základní pojmy', [
        ['<b>Program</b> = zápis algoritmu v programovacím jazyce', 'Program je formální zápis algoritmu ve zvoleném programovacím jazyce.'],
        ['<b>Programovací jazyk</b>: zápis je <b>interpretovatelný počítačem</b>', 'Programovací jazyk je jazyk, ve kterém programátor formuluje řešení a který počítač dokáže zpracovat, obvykle po překladu do strojového kódu.']
      ]),
      { h: `<h2>Syntaxe × sémantika</h2><table class="tt"><tr><th></th><th>Syntaxe</th><th>Sémantika</th></tr><tr><td>popisuje</td><td>vzhled, zápis</td><td>význam</td></tr><tr><td>příklad</td><td>kde musí být středník</td><td>co program skutečně dělá</td></tr><tr><td>hlídá</td><td class="hi">kompilátor</td><td class="hi">programátor testováním</td></tr></table>`, say: 'Syntaxe popisuje vzhled a použití prvků programu, třeba kde musí být středník. Sémantika popisuje jejich význam. Syntaxi hlídá kompilátor, ale sémantiku musí pohlídat programátor testováním.' },
      { h: list('Pozor', ['Program může mít <b>správnou syntaxi</b> a přesto <b>špatnou sémantiku</b>', 'Přeloží se, ale dělá něco jiného, než jsme chtěli'], 2, false), say: 'Program může být syntakticky bez chyby, přeloží se, a přesto dělat něco jiného, než jsme zamýšleli.' }
    ] },
    { file: '13-2-druhy-jazyku', at: 'Druhy programovacích jazyků', title: 'Druhy programovacích jazyků', steps: [
      { h: title('Druhy jazyků', 'Nižší a vyšší, procedurální a neprocedurální'), say: 'Druhy programovacích jazyků.' },
      ...reveal('Dělení', [
        ['<b>Nižší</b> (strojově orientované): assembler', 'Nižší jazyky jsou blízké stroji, typickým zástupcem je assembler.'],
        ['<b>Vyšší</b>: abstraktní příkazy, nutný překlad do strojového kódu', 'Vyšší jazyky mají příkazy bližší lidskému myšlení a je nutné je přeložit do strojového kódu.'],
        ['<b>Neprocedurální</b> (deklarativní): <i>co</i> chci – Lisp, Prolog, SQL', 'Neprocedurální jazyky určují cíl, tedy co chceme. Algoritmus řeší interpret. Patří sem funkcionální Lisp, logický Prolog a dotazovací es kju el.'],
        ['<b>Procedurální</b> (imperativní): <i>jak</i> postupovat – C, Pascal, Java', 'Procedurální jazyky popisují přesný postup, jak problém řešit. Dělí se na strukturované, třeba Pascal a C, a objektově orientované, třeba Java a C plus plus.']
      ]),
      { h: list('Objektově orientované jazyky', ['Základ: <b>objekty</b>, které si pamatují <b>stav</b>', 'Navenek nabízejí <b>metody</b> – komunikace zasíláním zpráv', '<b>Čisté</b>: Smalltalk, Java · <b>hybridní</b>: C++, Python, PHP'], 3, false), say: 'U objektově orientovaných jazyků je základem objekt, který si pamatuje svůj stav a navenek nabízí metody. Čisté jsou Smalltalk a Java, hybridní například C plus plus, Python a pé há pé.' }
    ] },
    { file: '13-3-preklad', at: 'Překlad zdrojového programu', title: 'Kompilátor, interpret a virtuální stroj', steps: [
      { h: title('Překlad programu', 'Kompilátor, interpret, virtuální stroj'), say: 'Jak se zdrojový program dostane do počítače: kompilátor, interpret a virtuální stroj.' },
      { h: diagram('Tři cesty od zdroje ke spuštění', UPP.translateDiagram()), say: 'Kompilátor přeloží celý zdrojový text najednou do spustitelného kódu. Překlad se provede jen jednou, program pak běží bez překladu. Interpret překládá po částech a každou část hned provede, proto je mnohem pomalejší. Virtuální stroj spouští program přeložený do Byte Code na libovolné platformě.' },
      ...reveal('Porovnání', [
        ['<b>Kompilátor</b> – celý text, jednou, rychlý běh', 'Kompilátor je jako překladatel knihy: přeloží ji celou předem a pak ji čteš kolikrát chceš.'],
        ['<b>Interpret</b> – po příkazech, snazší kontrola, pomalejší', 'Interpret je jako tlumočník: překládá větu po větě za běhu, takže hned reaguješ, ale při každém spuštění znovu.'],
        ['<b>Virtuální stroj</b> (JVM, .NET) – jedna verze pro všechny platformy; <b>emulátor</b> – běh programů pro jiný hardware', 'Virtuální stroj umožní, aby aplikace běžela na kterékoli platformě. Emulátor naopak umožní spustit aplikace nebo celý systém na hardwaru, pro který nebyly napsány.']
      ])
    ] },
    { file: '13-4-implementace', at: 'Implementace algoritmu v programu', title: 'Selekce a cykly v pseudokódu a C++', steps: [
      { h: title('Implementace algoritmu', 'Pseudokód a C++'), say: 'Jak se algoritmus zapíše v pseudokódu a v C plus plus.' },
      { h: `<h2>Sekvence a selekce</h2>${tt(['', 'pseudokód', 'C++'], [['sekvence', 'začátek … konec', '{ … }'], ['selekce', 'jestliže … pak … jinak', 'if () { } else { }']], [])}`, say: 'Sekvence se v pseudokódu uzavře mezi začátek a konec, v C plus plus do složených závorek. Selekce jestliže pak jinak odpovídá příkazu if else.' },
      { h: `<h2>Cykly</h2>${tt(['', 'pseudokód', 'C++'], [['podmínka na začátku', 'dokud … opakuj', 'while ()'], ['podmínka na konci', 'opakuj … dokud', 'do { } while ()'], ['pevný počet', 'pro i od … do …', 'for (i = …; …; i++)']], [])}`, say: 'Cyklus s podmínkou na začátku je dokud opakuj, tedy while. Cyklus s podmínkou na konci je opakuj dokud, tedy do while. A cyklus s pevným počtem opakování je for.' },
      { h: `<h2>Kolikrát proběhne for-cyklus?</h2><div class="big">pro i od 3 do 9<br><span class="mu">9 − 3 + 1 =</span> <span class="ac">${9 - 3 + 1}×</span></div><p class="sub" style="text-align:center">(horní mez − dolní mez + 1)</p>`, say: 'Kolikrát proběhne for cyklus od tří do devíti? Horní mez minus dolní mez plus jedna, tedy devět minus tři plus jedna, sedmkrát. Častá chyba je zapomenout na to plus jedna.' },
      { h: `<h2>MOD A, B v C++</h2><div class="big" style="font-size:30px;text-align:left">cin &gt;&gt; A; cin &gt;&gt; B;<br>MOD = A;<br>while (MOD &gt;= B) { MOD = MOD − B; }<br>cout &lt;&lt; MOD;</div>`, say: 'Příklad zbytku po dělení v C plus plus. Čti a piš se změní na cin a cout, zbytek je stejný jako v pseudokódu.' }
    ] },
    { file: '13-5-komponenty-udalosti', at: 'Komponentová architektura', title: 'Komponenty aplikace a události', steps: [
      { h: title('Architektura aplikace', 'Tři komponenty a programy řízené událostmi'), say: 'Komponenty aplikace a programy řízené událostmi.' },
      { h: diagram('Tři komponenty a obsluha události', UPP.tiersDiagram()), say: 'Aplikace se skládá ze tří komponent. Prezentační logika je uživatelské rozhraní, aplikační logika je takzvaná business logika a logika přístupu k datům spravuje datové služby. Komponenty spolu komunikují přes jednotné rozhraní.' },
      ...reveal('Program řízený událostmi', [
        ['Program něco dělá, jen když <b>vznikne událost</b>', 'Program s grafickým rozhraním je řízen událostmi. Něco vykonává, jen když událost vznikne.'],
        ['Click, DoubleClick, MouseMove, klávesa, <b>časovač</b>', 'Událostí je klepnutí, poklepání, pohyb myši, stisk klávesy nebo třeba časovač.'],
        ['K události se připojí <b>obslužný podprogram</b>', 'Aby program na událost reagoval, připojí se k ní obslužný podprogram, ve kterém je zapsána činnost, která se má provést.']
      ])
    ] },
    { file: '13-6-vodopad-agilni', at: 'Vodopád a agilní vývoj', title: 'Vodopádový a agilní vývoj', steps: [
      { h: title('Metody vývoje software', 'Vodopád a agilní vývoj'), say: 'Metody vývoje software: vodopád a agilní vývoj.' },
      { h: diagram('Vodopád × agilní', UPP.lifecycleDiagram()), say: 'Vodopád prochází fáze jednou za sebou: analýza, návrh, implementace, testování a zavedení, provoz a údržba. Agilní vývoj opakuje malý vodopád v každé iteraci.' },
      ...reveal('Agilní vývoj', [
        ['<b>Nultá iterace</b>: základní činnost, předvedení schopný kousek', 'Začíná nultou iterací: krátká analýza a základní činnost aplikace, aby byl hotový kousek, který lze předvést.'],
        ['<b>Analýza změny</b> → <b>implementace</b> → <b>předvedení zákazníkovi</b>', 'Pak se opakuje analýza změny, implementace a předvedení zákazníkovi. Tyto tři body tvoří jednu iteraci neboli sprint.'],
        ['Zákazník vybere, <b>co dál</b>; potom údržba a rozvoj v iteracích', 'Ukazuje se jen skutečně dokončená práce, zákazník vybere, co se bude dělat dál. Po skončení následuje údržba a rozvoj, také v iteracích.']
      ]),
      { h: list('Proč agilně', ['Vodopád řeší <b>rizika pozdě</b> – uživatel poprvé uvidí aplikaci až v testech', 'Agilní vývoj ukazuje <b>hotové kousky průběžně</b>'], 2, false), say: 'Hlavní slabina vodopádu je, že rizika řeší pozdě. Očekávání uživatelů se střetnou s aplikací až v uživatelských testech na konci. Agilní vývoj ukazuje hotovou práci průběžně, takže se chyby odhalí dřív.' }
    ] }
  ],
  'staticke-datove-struktury': [
    { file: '14-1-data-v-pameti', at: 'Data v paměti a statické struktury', title: 'Proměnná, adresa a datový typ', steps: [
      { h: title('Data v paměti', 'Proměnná, adresa, obsah a typ'), say: 'Data v paměti a statické datové struktury.' },
      ...reveal('Čtyři věci o datech', [
        ['<b>Symbolické označení</b> – název proměnné', 'O datech musíme znát čtyři věci. První je symbolické označení, tedy název proměnné.'],
        ['<b>Adresa</b> – kde jsou uložena', 'Druhá je adresa, kde jsou data uložena.'],
        ['<b>Obsah</b> – jaká je hodnota', 'Třetí je obsah, tedy hodnota.'],
        ['<b>Datový typ</b> – jak jsou data kódována', 'A čtvrtá je datový typ, který říká, jak jsou data zakódována.']
      ]),
      { h: `<h2>Proměnná X typu int</h2><div class="big">${nib('01011100')}<sub>2</sub> = 64 + 16 + 8 + 4 = <span class="ac">${parseInt('01011100', 2)}</span></div>`, say: 'Například proměnná x má obsah nula jedna nula jedna, jedna jedna nula nula. Je-li typu celé číslo, je to šedesát čtyři plus šestnáct plus osm plus čtyři, tedy devadesát dva.' },
      { h: list('Statická × dynamická', ['<b>Statická</b>: paměť přidělena <b>před spuštěním</b> programu, nemění se', '<b>Dynamická</b>: přidělena až <b>za běhu</b>, může se měnit'], 2, false), say: 'Statická datová struktura nemění strukturu ani rozsah, paměť je jí přidělena před spuštěním programu. U dynamické se paměť přiděluje až za běhu a může se měnit.' },
      { h: list('Pozor', ['Pascal: přiřazení <b>:=</b>, test <b>=</b>', 'C: přiřazení <b>=</b>, test <b>==</b>'], 2, false), say: 'Pozor na rozdíl mezi přiřazením a testem rovnosti. V Pascalu je přiřazení dvojtečka rovná se a test je rovná se. V céčku je přiřazení jedno rovná se a test dvě rovná se.' }
    ] },
    { file: '14-2-datove-typy', at: 'Jednoduché (základní) datové typy', title: 'Jednoduché datové typy', steps: [
      { h: title('Jednoduché datové typy', 'Jak se kódují základní hodnoty'), say: 'Jednoduché datové typy.' },
      { h: `<h2>Kódování základních typů</h2>${tt(['hodnota', 'kódování'], [['logická', '0 = nepravda, ≠ 0 = pravda'], ['celé číslo', 'doplňkový kód'], ['reálné číslo', 'IEEE 754'], ['znak', 'ASCII, Unicode']], [])}`, say: 'Logická hodnota se kóduje nulou jako nepravda a nenulovou hodnotou jako pravda. Celé číslo doplňkovým kódem, reálné číslo podle normy ajtripl é sedm pět čtyři a znak v ASCII nebo Unicode.' },
      { h: list('Ordinální typ', ['Hodnoty lze očíslovat celými čísly → existuje <b>následník</b> a <b>předchůdce</b>', '<b>Ano</b>: logická hodnota, celé číslo, znak', '<b>Ne</b>: reálné číslo'], 3, false), say: 'Ordinální typ je takový, jehož hodnoty lze očíslovat celými čísly, takže existuje následník a předchůdce. Ordinální jsou logická hodnota, celé číslo a znak. Reálné číslo ordinální není.' },
      { h: `<h2>Typy v C++</h2>${tt(['typ', 'velikost'], [['bool', '1 bit (často 1 byte)'], ['char', '1 byte (ASCII), 2 byty (Unicode)'], ['short', 'nejméně 2 byty'], ['long', 'nejméně 4 byty'], ['float', 'obvykle 4 byty'], ['double', 'obvykle 8 bytů']], [])}`, say: 'V C plus plus má bool stačí jeden bit, často zabírá celý bajt. Char má jeden bajt, v Unicode dva. Short má nejméně dva bajty, long nejméně čtyři, float obvykle čtyři a double obvykle osm bajtů.' }
    ] },
    { file: '14-3-pole-a-mnozina', at: 'Pole, soubor a množina', title: 'Pole, soubor a množina', steps: [
      { h: title('Pole, soubor a množina', 'Homogenní složené struktury'), say: 'Pole, soubor a množina.' },
      { h: diagram('Pole v paměti', UPP.arrayDiagram()), say: 'Pole má položky stejného typu, které se identifikují indexem. K položkám se přistupuje přímo. V C plus plus se indexuje od nuly, v Pascalu od jedné. Adresa položky se spočítá ze základní adresy a indexu.' },
      { h: list('Soubor', ['Počet položek <b>není předem znám</b>', 'Přístup <b>postupně</b> od aktuální pozice', 'Ukončen značkou <b>EOF</b>'], 3, false), say: 'U souboru nemusí být počet položek předem znám a k položkám se nepřistupuje přímo, ale postupným procházením. Soubor je ukončen značkou konce souboru.' },
      { h: list('Množina', ['Prvky <b>ordinálního typu</b>; pro N prvků je <b>2<sup>N</sup></b> podmnožin', '<b>1 bit</b> na prvek: 1 = prvek je v množině'], 2, false), say: 'Množina se skládá z prvků ordinálního typu. Pro en prvků existuje dva na en podmnožin a každý prvek stačí popsat jedním bitem.' },
      { h: `<h2>Množiny jako bity</h2>${tt(['', '1', '2', '3', '4', '5', '6', '7', '8'], [['A = {2, 3, 5}', ...SETB(SETA)], ['B = {3, 5, 8}', ...SETB(SETC)]], [])}`, say: 'Příklad, bázový typ jedna až osm. Množina a je dva, tři, pět, tedy nula jedna jedna nula jedna nula nula nula. Množina bé je tři, pět, osm, tedy nula nula jedna nula jedna nula nula jedna.' },
      { h: diagram('Množinové operace = logické instrukce', UPP.setDiagram()), say: 'Sjednocení je instrukce OR, průnik je AND a rozdíl je AND s negací. Sjednocení je dva, tři, pět, osm, průnik tři, pět a rozdíl a bez bé je jen dvě. Množinové operace jsou přesně logické instrukce po bitech.' }
    ] },
    { file: '14-4-zaznam-objekt', at: 'Záznam a objekt', title: 'Záznam a objekt', steps: [
      { h: title('Záznam a objekt', 'Nehomogenní složené struktury'), say: 'Záznam a objekt.' },
      { h: diagram('Záznam a objekt', UPP.recordDiagram()), say: 'Záznam, anglicky struct, má položky různých datových typů, které se identifikují jmény. Přistupuje se k nim tečkovou notací, například zboží tečka kód zboží. Objekt, neboli třída, je rozšíření záznamu o metody, tedy podprogramy, které umí provádět.' },
      ...reveal('Pojmy', [
        ['<b>Záznam</b> = položky různých typů, přístup <b>tečkou</b>', 'Záznam spojuje různé typy dat do jedné struktury.'],
        ['<b>Objekt (třída)</b> = záznam + <b>metody</b>', 'Třída spojuje datový typ s instrukcemi programu.'],
        ['<b>Instance</b> = konkrétní naplnění hodnotami', 'Konkrétní naplnění hodnotami se nazývá instance třídy neboli objekt.']
      ])
    ] },
    { file: '14-5-matice', at: 'Matice (dvourozměrné pole)', title: 'Matice a diagonály', steps: [
      { h: title('Matice', 'Dvourozměrné pole a diagonály'), say: 'Matice, dvourozměrné pole, a její diagonály.' },
      { h: list('Matice m × n', ['<b>m řádků</b> a <b>n sloupců</b>, prvek a<sub>ij</sub>', 'První index je <b>řádek</b> (I), druhý <b>sloupec</b> (J)', 'C++: <code>int M[21][21]</code> pro čísla <b>1 až 20</b>'], 3, false), say: 'Matice typu em krát en má em řádků a en sloupců. První index prvku je řádek, druhý sloupec. V C plus plus se indexuje od nuly, proto pro čísla jedna až dvacet deklarujeme rozsah jedenadvacet.' },
      { h: diagram('Diagonály matice 5 × 5', UPP.matrixDiagram()), say: 'Červeně je hlavní diagonála, na které se řádek rovná sloupci. Modře je vedlejší diagonála, kde i se rovná en minus j plus jedna. U lichého en se obě protínají v prostředním prvku.' },
      { h: `<h2>Diagonály</h2>${tt(['', 'na', 'nad', 'pod'], [['hlavní', 'I = J', 'I &lt; J', 'I &gt; J'], ['vedlejší', 'I = N − J + 1', 'I &lt; N − J + 1', 'I &gt; N − J + 1']], [])}`, say: 'Pro hlavní diagonálu platí i rovná se j, nad ní i menší než j, pod ní i větší než j. U vedlejší diagonály jsou podmínky s en minus j plus jedna.' },
      { h: `<h2>Kolik prvků?</h2><div class="big">N = 20<br>vedlejší diagonála: <span class="ac">20</span><br>pod hlavní: N(N − 1)/2 = <span class="ac">190</span></div>`, say: 'Pro matici dvacet krát dvacet má vedlejší diagonála dvacet prvků a pod hlavní diagonálou je dvacet krát devatenáct děleno dvěma, tedy sto devadesát prvků.' }
    ] }
  ],
  'dynamicke-datove-struktury': [
    { file: '15-1-ukazatel', at: 'Datový typ ukazatel', title: 'Ukazatel', steps: [
      { h: title('Ukazatel', 'Proměnná, která obsahuje adresu'), say: 'Datový typ ukazatel.' },
      { h: list('Dynamické struktury', ['Proměnlivý <b>počet prvků</b> proměnlivé velikosti', 'Prvky vznikají <b>za běhu</b> a jsou propojeny <b>ukazateli</b>', 'Výhoda: pružnost · nevýhoda: pracnější přístup, paměť na ukazatele'], 3, false), say: 'Dynamické struktury slouží k reprezentaci proměnlivého počtu prvků. Vznikají za běhu programu a jsou propojené ukazateli. Jsou pružné, ale přístup k prvkům je méně pohodlný a ukazatele zabírají paměť.' },
      { h: diagram('Ukazatel U na hodnotu typu int', UPP.pointerDiagram()), say: 'Ukazatel obsahuje adresu, na které je uložena hodnota bázového typu. Ukazatel u obsahuje adresu sto dva a na ní je uložena hodnota minus třicet tři. U je tedy adresa a hvězdička u je hodnota na této adrese.' },
      ...reveal('Operace v C++', [
        ['<code>int * ukazatel</code> – deklarace', 'Deklarace ukazatele na celé číslo.'],
        ['<code>ukazatel = new int</code> – <b>alokace</b> paměti', 'Příkaz new vytvoří v paměti prostor pro hodnotu.'],
        ['<code>* ukazatel = …</code> – hodnota na místě, kam ukazuje', 'Hvězdička před ukazatelem přiřadí hodnotu na místo, kam ukazatel ukazuje.'],
        ['<code>delete ukazatel</code> – <b>uvolnění</b> paměti', 'A příkaz delete paměť uvolní. Speciální hodnota null znamená, že ukazatel nikam neukazuje.']
      ])
    ] },
    { file: '15-2-operace-ukazatele', at: 'Operace s ukazateli', title: 'Operace s ukazateli', steps: [
      { h: title('Operace s ukazateli', 'Kopie hodnoty × kopie adresy'), say: 'Operace s ukazateli. Rozdíl mezi kopií hodnoty a kopií adresy.' },
      { h: `<h2>Výchozí stav</h2><div class="big">U → <span class="ac">−33</span><br>V → <span class="df">57</span></div>`, say: 'Ukazatel u ukazuje na buňku s hodnotou minus třicet tři a ukazatel v na buňku s hodnotou padesát sedm.' },
      { h: `<h2>*u = *v</h2><div class="big">U → <span class="ac">57</span><br>V → <span class="df">57</span></div><p class="sub" style="text-align:center">kopíruje se <b>hodnota</b>; ukazatele ukazují na <b>různé</b> buňky</p>`, say: 'Příkaz hvězdička u rovná se hvězdička v zkopíruje hodnotu. Obě buňky obsahují padesát sedm, ale ukazatele ukazují pořád na dvě různé buňky.' },
      { h: `<h2>u = v</h2><div class="big">U → <span class="df">57</span> ← V</div><p class="sub" style="text-align:center">kopíruje se <b>adresa</b>; oba ukazují na <b>stejnou</b> buňku</p>`, say: 'Příkaz u rovná se v zkopíruje adresu. Oba ukazatele teď ukazují na stejnou buňku a změna přes jeden se projeví i u druhého.' },
      { h: list('Pozor', ['<code>*u = v</code> <b>nejde</b>: celé číslo × ukazatel', 'Po <code>u = v</code> zůstane původní buňka bez ukazatele – <b>únik paměti</b>; nejdřív <code>delete</code>'], 2, false), say: 'Přiřadit ukazatel do celého čísla nelze, jsou to různé datové typy. A po kopii adresy zůstane původní buňka nedostupná. Říká se tomu únik paměti, proto je dobré ji předtím uvolnit příkazem delete.' }
    ] },
    { file: '15-3-rekurze', at: 'Rekurze', title: 'Rekurze', steps: [
      { h: title('Rekurze', 'Podprogram, který volá sám sebe'), say: 'Rekurze.' },
      { h: list('Definice', ['Definice objektu nebo procesu <b>pomocí jeho samého</b>', 'V jednom okamžiku je <b>rozpracováno víc exemplářů</b> téhož podprogramu'], 2, false), say: 'Rekurze je definice pomocí sebe sama. V informatice to znamená, že podprogram volá sám sebe a v jednu chvíli je rozpracováno více exemplářů téhož podprogramu.' },
      ...reveal('Druhy rekurze', [
        ['<b>Přímá</b> – A volá A · <b>nepřímá</b> – A volá B a B volá A', 'Přímá rekurze znamená, že podprogram volá sám sebe. U nepřímé se volají nejméně dva podprogramy navzájem.'],
        ['<b>Lineární</b> – jedno volání · <b>stromová</b> – víc volání', 'Lineární rekurze volá sama sebe jen jednou, stromová víckrát.']
      ]),
      ...reveal('Tři pravidla', [
        ['musí být definován <b>konec</b>', 'První pravidlo: musí existovat koncová situace, kdy je problém natolik zjednodušen, že lze určit řešení.'],
        ['každý krok <b>zjednoduší</b> problém', 'Druhé: v každém kroku se problém zjednoduší.'],
        ['nejdřív <b>otestuj konec</b>, potom rekurzivní krok', 'Třetí: nejdřív se prověří konec. Při opačném pořadí by vznikl nekonečný cyklus.']
      ]),
      { h: list('Výhody a nevýhody', ['+ jednodušší zápis, programování shora dolů', '− zbytečné vyhodnocování a <b>vyšší paměťová složitost</b> (nové exempláře dat pro každou hladinu)'], 2, false), say: 'Rekurzivní zápis bývá jednodušší a přehlednější, ale zbytečně se vyhodnocují argumenty a pro každou hladinu se zakládají nové exempláře dat, takže roste paměťová složitost.' }
    ] },
    { file: '15-4-faktorial', at: 'Příklad: faktoriál', title: 'Rekurzivní faktoriál', steps: [
      { h: title('Faktoriál', 'Iterativně a rekurzivně'), say: 'Příklad: faktoriál iterativně a rekurzivně.' },
      { h: `<h2>Rekurzivní definice</h2><div class="big">0! = 1<br>n! = n · (n − 1)!</div>`, say: 'Nula faktoriál je jedna a en faktoriál je en krát en minus jedna faktoriál.' },
      { h: diagram('R_Faktorial(4)', UPP.recursionDiagram()), say: 'Volání jde dolů, dokud en není nula. Pak se z hloubky vrací: jedna, jedna, dvě, šest a nakonec čtyřiadvacet. Násobení se tedy vyhodnocuje při návratu.' },
      { h: `<h2>Hodnoty 0! až 5!</h2>${tt(['n', ...[0, 1, 2, 3, 4, 5]], [['n!', 1, 1, 2, 6, 24, 120]], [])}`, say: 'Hodnoty od nuly do pěti faktoriál jsou jedna, jedna, dvě, šest, čtyřiadvacet a sto dvacet.' },
      { h: list('Výpis před × po rekurzi', ['Výpis <b>před</b> rekurzí zachová pořadí: A, B, C', 'Výpis <b>po</b> rekurzi ho <b>obrátí</b>: C, B, A'], 2, false), say: 'Zadáme znaky a, bé, cé. Vypíšeme-li znak před rekurzivním voláním, vypíšou se v zadaném pořadí. Vypíšeme-li ho po rekurzi, vypíšou se obráceně, protože poslední volání skončí jako první. Právě tak funguje zásobník.' }
    ] },
    { file: '15-5-seznam', at: 'Jednosměrný lineární seznam', title: 'Jednosměrný seznam', steps: [
      { h: title('Jednosměrný seznam', 'Položky propojené ukazateli'), say: 'Jednosměrný lineární seznam.' },
      { h: list('Seznam', ['Každá položka: <b>Info</b> + ukazatel <b>Dalsi</b>', 'Hlavní ukazatel <b>Seznam</b> na první položku', 'Poslední položka: <b>Dalsi = NULL</b>'], 3, false), say: 'Každá položka seznamu nese informaci a ukazatel na následníka. Celý seznam zpřístupňuje hlavní ukazatel na první položku a poslední položka má ukazatel null.' },
      { h: diagram('Vložení za aktuální prvek', UPP.listDiagram()), say: 'Vložení nového prvku za aktuální má dva kroky. Nejdřív nový dostane za následníka toho, kdo byl za aktuálním. Teprve potom aktuální ukáže na nový. Při opačném pořadí by se ztratil zbytek seznamu.' },
      ...reveal('Operace', [
        ['vložení <b>na začátek</b>: <code>Novy→Dalsi = Seznam; Seznam = Novy;</code>', 'Vložení na začátek: nový ukáže na dosavadní první a hlavní ukazatel ukáže na nový.'],
        ['vyřazení na začátku: <code>Vyradit = Seznam; Seznam = Seznam→Dalsi; delete Vyradit;</code>', 'Vyřazení na začátku: zapamatujeme si první, hlavní ukazatel posuneme na druhého a první uvolníme.'],
        ['<b>před</b> aktuální / vyřazení aktuálního: nutné najít <b>předchůdce</b> od začátku', 'Před aktuální vkládáme tak, že nejdřív od začátku najdeme jeho předchůdce, protože jednosměrný seznam nemá odkaz zpět.']
      ])
    ] },
    { file: '15-6-strom-a-graf', at: 'Strom a binární strom', title: 'Strom a graf', steps: [
      { h: title('Strom a graf', 'Dynamické struktury s více větvemi'), say: 'Strom, binární strom a graf.' },
      { h: list('Strom', ['Jeden uzel je <b>kořen</b>, ostatní tvoří podstromy', 'Uzel bez synů = <b>list</b>', 'Z kořene vede do každého uzlu <b>jediná cesta</b> (žádné cykly)'], 3, false), say: 'Strom má jeden uzel označený jako kořen, ostatní uzly tvoří podstromy. Uzly bez synů jsou listy a z kořene vede do každého uzlu jediná cesta, takže strom nemá cykly.' },
      { h: diagram('Binární strom', UPP.treeDiagram()), say: 'V binárním stromě nese každý uzel informaci a dva ukazatele, levý a pravý. Chybějící syn je null. Kořen nemá předchůdce a listy mají oba ukazatele null.' },
      { h: diagram('Graf a jeho reprezentace', UPP.graphDiagram()), say: 'Graf se skládá z uzlů a hran. Hrana může být orientovaná nebo neorientovaná a může být ohodnocená. V paměti je graf seznam uzlů a každý uzel má seznam hran, které z něj vycházejí.' }
    ] }
  ],
  'specialni-datove-struktury': [
    { file: '16-1-zasobnik', at: 'Zásobník (LIFO)', title: 'Zásobník', steps: [
      { h: title('Zásobník', 'LIFO: poslední dovnitř, první ven'), say: 'Zásobník.' },
      { h: diagram('Zásobník a fronta', UPP.stackQueueDiagram()), say: 'Zásobník se plní i vyprazdňuje na jednom konci, u vrcholu. Ukazatel zásobníku ukazuje na první volnou položku. Fronta se naopak plní na konci a vyprazdňuje na začátku.' },
      ...reveal('Operace', [
        ['<b>PUSH</b> – vloží na vrchol, SP se zvýší o 1', 'Operace push vloží položku na vrchol a ukazatel zásobníku se zvýší o jedničku.'],
        ['<b>POP</b> – vyjme z vrcholu, SP se sníží o 1', 'Operace pop vyjme položku z vrcholu a ukazatel se sníží o jedničku. Obě patří mezi základní instrukce strojového kódu.']
      ]),
      ...[1, 2, 3, 4, 5].map(k => ({ h: `<h2>Sled operací</h2>${tt(['operace', 'vybráno', 'zásobník (dno → vrchol)'], STACK.slice(0, k), [])}`, say: ['Vložíme pět.', 'Vložíme osm.', 'Vložíme tři.', 'Pop vybere tři, tedy poslední vloženou položku.', 'Další pop vybere osm. Položky vyšly v opačném pořadí, než byly vloženy.'][k - 1] }))
    ] },
    { file: '16-2-fronta', at: 'Fronta (FIFO)', title: 'Fronta a cyklická fronta', steps: [
      { h: title('Fronta', 'FIFO: první dovnitř, první ven'), say: 'Fronta a cyklická fronta.' },
      { h: list('Fronta', ['Vkládá se na <b>konec</b>, vyjímá ze <b>začátku</b>', 'ZF = začátek, KF = konec, DF = délka'], 2, false), say: 'Do fronty se vkládá na konec a vyjímá se ze začátku. Používáme tři proměnné: začátek, konec a délku fronty.' },
      { h: list('Cyklická fronta', ['Aby se při vyjmutí nemusely položky posouvat, pole se „zacyklí“', 'KF = (KF + 1) % max · ZF = (ZF + 1) % max', 'DF = (KF − ZF + max + 1) % max'], 3, false), say: 'Aby se při každém vyjmutí nemusely všechny položky přesouvat, použije se cyklická fronta. Posun konce i začátku se počítá se zbytkem po dělení velikostí pole, takže se po konci pole vrátíme na začátek.' },
      { h: diagram('Příklad: max = 5', UPP.circQueueDiagram()), say: `Příklad s polem o pěti prvcích. Po vložení a, bé, cé je začátek jedna a konec tři, délka tři. Po vyjmutí a je začátek dva, délka dvě. Po vložení dé a é se konec zalomí na nulu a délka je čtyři.` },
      { h: list('Pozor', ['Vzorec pro délku nerozliší <b>plnou</b> frontu od <b>prázdné</b>', 'Proto se délka drží i v samostatné proměnné DF'], 2, false), say: 'Pozor, samotným vzorcem se plná fronta nedá odlišit od prázdné. Proto se délka drží i v samostatné proměnné.' }
    ] },
    { file: '16-3-tabulka-hash', at: 'Tabulka', title: 'Tabulka a hash', steps: [
      { h: title('Tabulka a hash', 'Rychlé hledání podle klíče'), say: 'Tabulka a rozptylovací funkce.' },
      { h: list('Tabulka', ['Pole <b>záznamů (řádků)</b> identifikovaných <b>klíčem</b>', 'Vodorovně heterogenní, svisle homogenní pole záznamů', 'Adresa klíče = obvykle <b>index</b> záznamu'], 3, false), say: 'Tabulka je pole záznamů, které identifikuje klíč. Ve vodorovném směru je záznam heterogenní, ve svislém je to homogenní pole. Adresa klíče je obvykle index záznamu v tabulce.' },
      { h: `<h2>Proč hash?</h2><div class="big">1000 zaměstnanců, příjmení do 10 písmen<br>26<sup>10</sup> = <span class="ac">${(26 ** 10).toLocaleString('cs-CZ')}</span> klíčů</div>`, say: 'Příklad: tabulka pro tisíc zaměstnanců podle příjmení do deseti velkých písmen. Možných klíčů je dvacet šest na desátou, přes sto čtyřicet bilionů. Tabulka s přímým přístupem by byla naprosto nepraktická.' },
      { h: diagram('Rozptylovací funkce a kolize', UPP.hashDiagram()), say: 'Použije se rozptylovací funkce, která z klíče spočítá pozici v malé tabulce. Může se ale stát, že dva různé klíče dají stejnou pozici. Takové klíče jsou synonyma a říkáme, že nastala kolize.' },
      { h: list('Zapamatuj si', ['Hash tabulka se používá, když <b>rozsah klíče ≫ rozsah tabulky</b>', 'Funkce má <b>minimalizovat kolize</b>'], 2, false), say: 'Hash tabulka se používá, když je rozsah klíče mnohem větší než rozsah tabulky. Dobrá rozptylovací funkce minimalizuje počet kolizí.' }
    ] },
    { file: '16-4-soubor', at: 'Soubor', title: 'Soubory: sekvenční a s přímým přístupem', steps: [
      { h: title('Soubor', 'Sekvenční a přímý přístup'), say: 'Soubory: sekvenční a s přímým přístupem.' },
      ...reveal('Pojmy', [
        ['<b>Soubor</b> = množina záznamů k určitému zpracování', 'Soubor je množina záznamů kompletních pro určité zpracování.'],
        ['<b>Záznam</b> = vlastnosti jednoho objektu · <b>položka</b> = jedna vlastnost', 'Záznam popisuje vlastnosti jednoho objektu a položka jednu jeho vlastnost.'],
        ['<b>Klíč</b> = položka jedinečná pro každý záznam', 'Klíč je položka, která je pro každý záznam jedinečná.']
      ]),
      { h: diagram('Dva typy souborů', UPP.fileDiagram()), say: 'Sekvenční soubor je posloupnost bloků, před kterou je návěští souboru a značka souboru, a končí blokem konce souboru. K čtvrtému bloku se dostaneme jen přes první tři. Soubor s přímým přístupem najde záznam podle klíče, buď funkcí, která spočítá adresu, nebo v tabulce indexů.' },
      { h: `<h2>Operace</h2>${tt(['', 'sekvenční', 'přímý přístup'], [['READ', 'aktuální záznam', 'záznam s daným klíčem'], ['WRITE', 'zápis záznamu', 'zápis záznamu'], ['REWRITE', '–', 'nová hodnota podle klíče'], ['DELETE', '–', 'zrušení podle klíče']], [])}`, say: 'Společné operace jsou open, read, write a close. Soubor s přímým přístupem navíc umí přepsat nebo zrušit záznam podle klíče.' }
    ] },
    { file: '16-5-databaze', at: 'Od souborů k databázím', title: 'Od souborů k databázím', steps: [
      { h: title('Od souborů k databázím', 'Proč nestačí samostatné soubory'), say: 'Od souborů k databázím.' },
      ...reveal('Problémy souborů', [
        ['<b>Redundance</b> – opakovaná informace ve více souborech', 'Redundance je nadbytečný výskyt téže informace ve více souborech.'],
        ['<b>Konzistence</b> – opakovaný údaj musí mít stejnou hodnotu', 'Konzistence znamená, že opakovaně uložený údaj musí mít všude stejnou hodnotu.'],
        ['<b>Integrita</b> – data odpovídají skutečným objektům', 'Integrita znamená, že data odpovídají vlastnostem popisovaných objektů reálného světa.'],
        ['Obtížné dotazy, souběžný přístup, ochrana dat', 'K tomu přistupují obtížné dotazy, souběžný přístup více uživatelů a ochrana dat proti zneužití.']
      ]),
      { h: diagram('Soubory × databáze', UPP.dbmsDiagram()), say: 'V databázovém pohledu jsou soubory vzájemně integrované a aplikace k nim přistupují přes systém řízení báze dat. Ten zajišťuje popis dat, manipulaci s nimi, ochranu a dotazy.' },
      { h: list('Jazyky databází', ['<b>DDL</b> popis dat · <b>DML</b> manipulace · <b>DCL</b> ochrana přístupu', '<b>DQL</b> dotazy: <b>SQL</b>, QBE'], 2, false), say: 'Jazyk pro popis dat je dé dé el, pro manipulaci dé em el, pro ochranu přístupu dé cé el a pro dotazy dé kjů el, například es kju el.' }
    ] }
  ],
  'technicke-vybaveni-1': [
    { file: '17-1-sbernice', at: 'Základní deska, čipset', title: 'Základní deska, čipset a sběrnice', steps: [
      { h: title('Základní deska', 'Čipset, BIOS a sběrnice'), say: 'Základní deska, čipová sada a sběrnice.' },
      { h: list('Základní deska', ['<b>Propojuje</b> všechny komponenty počítače', 'Patice procesoru, <b>čipová sada</b>, ROM s <b>BIOS</b>, paměťové moduly, sběrnice, baterie'], 2, false), say: 'Základní deska propojuje všechny komponenty počítače. Obsahuje patici procesoru, čipovou sadu, paměť rom s biosem, paměťové moduly, sběrnice a konektory.' },
      { h: diagram('Sběrnicová architektura', UPP.busDiagram()), say: 'Procesor je nejrychlejší a komunikuje se severním můstkem. Ten obsluhuje paměť a grafickou kartu. Přes sběrnici mezi můstky je připojený jižní můstek s pomalejšími periferiemi, jako jsou disky, usb nebo zvuková a síťová karta. Čím blíž k procesoru, tím rychlejší sběrnice.' },
      ...reveal('Dvě části čipsetu', [
        ['<b>Severní můstek</b> – procesor, paměti, grafická karta', 'Severní můstek komunikuje s procesorem a zprostředkuje přístup k pamětem a ke grafické kartě.'],
        ['<b>Jižní můstek</b> – PCI, disky, USB, zvuk, síť', 'Jižní můstek obsluhuje sběrnici pé cé í, disky a optické mechaniky a externí zařízení, třeba usb, zvukové a síťové karty.']
      ]),
      { h: list('BIOS', ['Základní software v <b>ROM</b> (firmware)', 'Obsahuje kód <b>pro zavedení operačního systému</b>'], 2, false), say: 'Bios je základní software počítače uložený v paměti rom. Obsahuje kód potřebný k zavedení operačního systému.' }
    ] },
    { file: '17-2-vykon-mips', at: 'Výkon počítače a procesoru', title: 'Výkon procesoru: MIPS', steps: [
      { h: title('Výkon procesoru', 'Takt, frekvence a MIPS'), say: 'Výkon procesoru a jednotka mips.' },
      { h: list('Takt', ['Činnost je synchronizována <b>taktovacími pulsy</b>', 'Frekvence = počet taktů za sekundu (Hz)', 'Nejmenší časová jednotka: <b>jeden cyklus</b>'], 3, false), say: 'Činnost počítače je synchronizována taktovacími pulsy. Frekvence je počet taktů za sekundu v hertzích. Nejmenší časová jednotka procesoru je jeden cyklus.' },
      { h: big('Výkon v MIPS', 'MIPS = f / (n · 10<sup>6</sup>)', 'f frekvence v Hz, n průměrný počet cyklů na instrukci'), say: 'Výkon v mips, tedy v milionech instrukcí za sekundu, je frekvence dělená součinem průměrného počtu cyklů na instrukci a jednoho milionu.' },
      { h: big('Příklad 1', `2 · 10⁹ / (4 · 10⁶) = <span class="ac">${2e9 / (4 * 1e6)} MIPS</span>`, 'procesor 2 GHz, průměrně 4 cykly na instrukci'), say: 'Procesor se dvěma gigahertzi a čtyřmi cykly na instrukci: dvě miliardy děleno čtyřmi miliony je pět set mips.' },
      { h: big('Příklad 2', `3 · 10⁹ / (3 · 10⁶) = <span class="ac">${3e9 / (3 * 1e6)} MIPS</span>`, 'procesor 3 GHz, n = 3'), say: 'Procesor se třemi gigahertzi a třemi cykly na instrukci dosáhne tisíce mips.' },
      { h: big('Perioda', `T = 1 / (2 · 10⁹) = <span class="ac">0,5 ns</span>`, 'při frekvenci 2 GHz'), say: 'Perioda při dvou gigahertzích je jedna děleno dvěma miliardami, tedy půl nanosekundy.' }
    ] },
    { file: '17-3-pipeline', at: 'Fázové a proudové zpracování', title: 'Proudové zpracování instrukcí', steps: [
      { h: title('Proudové zpracování', 'Pipeline a superskalární architektura'), say: 'Fázové a proudové zpracování instrukcí.' },
      ...reveal('Pět fází instrukce', [
        ['<b>Výběr</b> instrukce', 'První fáze je výběr instrukce z paměti.'],
        ['<b>Dekódování 1</b> – operační kód a adresace', 'Dekódování jedna určí operační kód a způsob adresace.'],
        ['<b>Dekódování 2</b> – řídicí signály pro ALU', 'Dekódování dvě nastaví řídicí signály pro aritmeticko logickou jednotku.'],
        ['<b>Provedení</b> v ALU', 'Pak se instrukce provede.'],
        ['<b>Uložení výsledku</b>', 'A výsledek se uloží do registru nebo paměti.']
      ]),
      { h: diagram('Klasicky × pipeline × superskalárně', UPP.pipelineDiagram()), say: 'Klasicky další instrukce začne, až skončí předchozí. U proudového zpracování se fáze překrývají. Superskalární procesor má více prováděcích jednotek a dokončí v jednom taktu více instrukcí.' },
      { h: `<h2>Šest instrukcí po pěti cyklech</h2>${tt(['zpracování', 'cyklů'], [['klasické', '6 · 5 = 30'], ['pipeline', '6 + 4 = 10'], ['superskalární (2 najednou)', '3 + 4 = 7']], 1)}`, say: 'Šest instrukcí po pěti cyklech klasicky trvá třicet cyklů. V pipeline šest plus čtyři, tedy deset cyklů. Superskalárně po dvou instrukcích najednou tři plus čtyři, tedy sedm cyklů.' },
      { h: list('CISC × RISC', ['<b>CISC</b>: mikroprogramový řadič, složité instrukce, pomalejší', '<b>RISC</b>: hardwarový řadič, jen jednoduché rychlé instrukce, nižší spotřeba'], 2, false), say: 'Procesory typu cisc mají mikroprogramový řadič a složité instrukce. Risc má hardwarový řadič s jednoduchými rychlými instrukcemi a nižší spotřebou. Dnešní procesory vnitřně používají architekturu risc.' }
    ] },
    { file: '17-4-pameti', at: 'Paměti počítače a operační paměť', title: 'Paměti počítače', steps: [
      { h: title('Paměti', 'Registry, vnitřní a vnější paměti'), say: 'Paměti počítače.' },
      ...reveal('Tři skupiny', [
        ['<b>Registry</b> – na čipu procesoru, nejrychlejší', 'Registry jsou paměťová místa přímo na čipu procesoru a jsou nejrychlejší.'],
        ['<b>Vnitřní</b> – cache (SRAM) a operační paměť (DRAM)', 'Vnitřní paměti jsou polovodičové: cache typu es ram a operační paměť typu dé ram.'],
        ['<b>Vnější</b> – disky, pásky, optická média', 'Vnější paměti jsou disky, pásky a optická média pro dlouhodobé uložení a zálohování.']
      ]),
      { h: `<h2>Velikost paměti</h2><div class="big">10 vodičů adresní sběrnice<br>2<sup>10</sup> = <span class="ac">${2 ** 10}</span> adres × 8 bitů = <span class="ac">${2 ** 10 * 8}</span> bitů</div><p class="sub" style="text-align:center">= 1 KiB</p>`, say: 'Adresní sběrnice s deseti vodiči rozliší dva na desátou, tedy tisíc dvacet čtyři adres. Při buňce o osmi bitech je paměť velká osm tisíc sto devadesát dva bitů, což je jeden kibibajt.' },
      { h: `<h2>SRAM × DRAM</h2><table class="tt"><tr><th></th><th>SRAM</th><th>DRAM</th></tr><tr><td>buňka</td><td>klopný obvod</td><td>kondenzátor</td></tr><tr><td>rychlost</td><td class="hi">rychlá</td><td>pomalejší</td></tr><tr><td>kapacita, cena</td><td>menší, dražší</td><td class="hi">větší, levnější</td></tr><tr><td>obnova (refresh)</td><td>ne</td><td class="hi">ano</td></tr></table>`, say: 'Statická paměť má buňku tvořenou klopným obvodem, je rychlá, ale dražší a menší. Dynamická má buňku tvořenou kondenzátorem, který se musí pravidelně obnovovat, je pomalejší, ale levnější a větší. Operační paměť je dé ram, cache je es ram.' }
    ] },
    { file: '17-5-hdd', at: 'Vnější paměti: pevný disk', title: 'Pevný disk a výpočet kapacity', steps: [
      { h: title('Pevný disk', 'Stopy, sektory, cylindry a výpočty'), say: 'Pevný disk a jeho parametry.' },
      { h: diagram('Stavba disku', UPP.hddDiagram()), say: 'Disk obsahuje několik ploten, každá má dvě strany. Nad nimi se pohybují hlavy a čtou a zapisují do soustředných stop, které se dělí na sektory po pěti stech dvanácti bajtech. Shodně umístěné stopy na všech površích tvoří cylindr.' },
      { h: list('Parametry', ['<b>Doba vyhledávání</b> (seek) – přesun hlav na jiný cylindr', '<b>Latence</b> – dočkání se sektoru pod hlavou', '<b>Doba přístupu</b> = vyhledávání + latence'], 3, false), say: 'Doba vyhledávání je čas přesunu hlav na jiný cylindr. Latence je čas, než se požadovaný sektor dostane pod hlavu. Doba přístupu je jejich součet.' },
      { h: `<h2>Cvičení: dvě plotny, 20 480 cylindrů</h2><div class="big" style="font-size:28px">128 sektorů × 2 048 B na stopě, 5 400 ot/min<br>kapacita = 4 · 20 480 · 128 · 2 048 B<br>= ${HDD.cap.toLocaleString('cs-CZ')} B = <span class="ac">${HDD.gib} GiB</span></div>`, say: 'Příklad ze cvičení: disk se dvěma ploténkami, tedy čtyřmi stranami, má dvacet tisíc čtyři sta osmdesát cylindrů a na stopě sto dvacet osm sektorů po dvou tisících čtyřiceti osmi bajtech. Kapacita je čtyři krát dvacet tisíc čtyři sta osmdesát krát sto dvacet osm krát dva tisíce čtyřicet osm, tedy dvacet gibibajtů.' },
      { h: `<h2>Přenosová rychlost a přístup</h2><div class="big" style="font-size:28px">max. rychlost = 128 · 2 048 · 5 400 / 60 / 1 048 576 = <span class="ac">${fixed(HDD.mbs)} MB/s</span><br>přístup k sektoru ≈ 10 + 5,56 + 0,09 = <span class="ac">${fixed(HDD.prum * 1000)} ms</span></div>`, say: 'Maximální přenosová rychlost vyjde dvaadvacet celých pět megabajtu za sekundu. Doba přenosu jednoho sektoru je deset milisekund vystavení, plus půlotáčka, plus čtení sektoru, dohromady asi patnáct celých šest milisekundy.' },
      { h: `<h2>Přečtení celého disku</h2><div class="big" style="font-size:28px">10 ms + 20 480 · (1/180 + 1/90) s + 20 479 · 1 ms<br>≈ <span class="ac">${fixed(HDD.all)} s ≈ ${fixed(HDD.min, 2)} min</span></div>`, say: 'Přečtení celého disku po jedné stopě na cylindr trvá zhruba tři sta šedesát jedna celých osm sekundy, tedy asi šest minut.' }
    ] },
    { file: '17-6-opticke-media', at: 'Vnější paměti: optická média', title: 'Optické disky, Flash a SSD', steps: [
      { h: title('Optické disky', 'CD, DVD, Blu-ray, Flash a SSD'), say: 'Optická média, flash paměti a disky ese es dé.' },
      { h: diagram('Čtení optického disku', UPP.opticalDiagram()), say: 'Laser se odráží od povrchu disku. Od pevniny se světlo odráží, jamkou se téměř neodráží. Senzor zaznamená změnu odraženého světla jako jedničku, beze změny je nula.' },
      { h: `<h2>Sektor CD: 2 352 B</h2>${tt(['synchronizace', 'adresa', 'data', 'ECC / EDC'], [['12 B', '4 B', '2 048 B', '288 B']], 2)}<p class="sub" style="text-align:center">12 + 4 + 2 048 + 288 = <b>${12 + 4 + 2048 + 288}</b> B · kapacita CD 700 MB</p>`, say: 'Jamky jsou v jedné spirálové stopě dlouhé pět celých sedmdesát sedm kilometru. Sektor má dvě tisíce tři sta padesát dva bajtů: dvanáct synchronizace, čtyři adresa, dva tisíce čtyřicet osm dat a dvě stě osmdesát osm oprava chyb.' },
      { h: list('Pozor', ['<b>Jamka (pit)</b> se téměř neodráží', '<b>Pevnina (land)</b> se odráží zpět', 'Slajd má názvy prohozené'], 3, false), say: 'Pozor, slajd má názvy prohozené. Jamka se téměř neodráží a pevnina se odráží zpět.' },
      { h: `<h2>Flash a SSD</h2><table class="tt"><tr><th></th><th>Flash</th><th>SSD</th></tr><tr><td>princip</td><td>tunelování náboje</td><td>stejný jako Flash</td></tr><tr><td>vlastnost</td><td>přepis elektrickým polem</td><td>bez pohyblivých částí</td></tr><tr><td>limit</td><td></td><td class="hi">max. 100 000 zápisů</td></tr></table>`, say: 'Flash paměť je energeticky nezávislá a přepisuje se elektrickým polem. Ese es dé disk funguje na stejném principu, nemá pohyblivé části, je tichý a rychlý, ale buňky vydrží jen omezený počet zápisů, nejvýše sto tisíc.' }
    ] }
  ],
  'technicke-vybaveni-2': [
    { file: '18-1-monitory', at: 'Monitory: CRT a LCD', title: 'Monitory CRT a LCD', steps: [
      { h: title('Monitory', 'CRT a LCD'), say: 'Monitory: cé er té a el cé dé.' },
      ...reveal('CRT', [
        ['<b>Vzduchoprázdná elektronka</b>, jako televizní obrazovka', 'Monitor typu cé er té je vzduchoprázdná elektronka, stejně jako starší televizní obrazovky.'],
        ['<b>Katoda</b> vysílá elektrony, <b>cívky</b> paprsek vychylují', 'Zahřátá katoda vysílá proud elektronů, který se zaostřuje a vychyluje cívkami.'],
        ['<b>Fosfor</b> se po zásahu rozsvítí; <b>tři katody</b> RGB', 'Vnitřek obrazovky je pokrytý fosforem, který se po zásahu rozsvítí. Pro barvy slouží tři katody, červená, zelená a modrá.']
      ]),
      { h: diagram('Cesta světla v LCD', UPP.lcdDiagram()), say: 'U monitoru lcd svítí vzadu stálé světlo, obvykle diody led. Prochází prvním polarizačním filtrem, který řídí směr světla, poté tekutými krystaly a druhým filtrem, který mění množství světla. Bod obrazovky tvoří tři buňky: červená, zelená a modrá.' },
      { h: list('Zapamatuj si', ['CRT: obraz „maluje“ <b>elektronový paprsek</b> → tlustý monitor', 'LCD: stálé podsvícení + <b>okénka s nastavitelnou průhledností</b> → plochý'], 2, false), say: 'Zkráceně: u cé er té maluje obraz elektronový paprsek, proto je monitor tlustý. U el cé dé je to stálé podsvícení a každý bod je okénko s nastavitelnou průhledností, proto je monitor plochý.' }
    ] },
    { file: '18-2-rgb', at: 'Barevný model RGB', title: 'Barevný model RGB', steps: [
      { h: title('Barevný model RGB', 'Aditivní míchání světla'), say: 'Barevný model er gé bé.' },
      { h: diagram('RGB × CMY', UPP.colorDiagram()), say: 'Er gé bé je aditivní míchání vyzařovaného světla. Červená plus zelená dá žlutou, zelená plus modrá azurovou, červená plus modrá purpurovou a všechny tři dohromady bílou. Subtraktivní model cé em ý naopak barvy odčítá a všechny tři dohromady dají tmavou.' },
      ...reveal('Intenzity', [
        ['Všechny složky <b>nejnižší</b> = černá · <b>nejvyšší</b> = bílá · <b>stejné</b> = šedá', 'Při nejnižší intenzitě všech složek je výsledek černý, při nejvyšší bílý a při stejné intenzitě šedý.'],
        ['Zápis: <b>procenta</b>, <b>počet bitů</b> (8 bitů: 0–255), nebo <b>hex</b> po dvojicích', 'Intenzitu lze zapsat v procentech, počtem bitů, třeba osm bitů je nula až dvě stě padesát pět, nebo šestnáctkově po dvojicích cifer.']
      ]),
      { h: `<h2>Hex zápis</h2>${tt(['hex', 'R', 'G', 'B', 'barva'], [['FF0000', 255, 0, 0, 'červená'], ['00FF00', 0, 255, 0, 'zelená'], ['0000FF', 0, 0, 255, 'modrá'], ['FFFF00', 255, 255, 0, 'žlutá'], ['808080', 128, 128, 128, 'šedá']])}`, say: 'Například ef ef nula nula nula nula je červená, nula nula ef ef nula nula zelená, modrá je nula nula nula nula ef ef a žlutá ef ef ef ef nula nula.' },
      { h: `<h2>Barevná hloubka</h2><div class="big">n bitů → 2<sup>n</sup> barev<br>24 bitů: 2<sup>24</sup> = <span class="ac">${(2 ** 24).toLocaleString('cs-CZ')}</span></div><p class="sub" style="text-align:center">8 bitů na každou složku → 256 odstínů R, G, B</p>`, say: 'Barevná hloubka n bitů umožní zobrazit dva na en barev. Při čtyřiadvaceti bitech, tedy osmi bitech na složku, je to šestnáct milionů sedm set sedmdesát sedm tisíc dvě stě šestnáct barev.' },
      { h: `<h2>Paměť grafické karty</h2><div class="big" style="font-size:32px">1 920 × 1 080 × 3 B = ${(1920 * 1080 * 3).toLocaleString('cs-CZ')} B<br>≈ <span class="ac">${fixed(1920 * 1080 * 3 / 2 ** 20)} MiB</span></div><p class="sub" style="text-align:center">velikost paměti omezuje rozlišení a počet barev</p>`, say: 'Obraz o rozlišení full hd při čtyřiadvaceti bitech na bod potřebuje šest milionů dvě stě dvacet tisíc osm set bajtů, asi pět celých devět mebibajtu. Proto velikost paměti grafické karty omezuje rozlišení a počet barev.' }
    ] },
    { file: '18-3-tiskarny', at: 'Barevný model CMYK a tiskárny', title: 'CMYK a tiskárny', steps: [
      { h: title('CMYK a tiskárny', 'Subtraktivní model a laserový tisk'), say: 'Barevný model cé em ý ká a tiskárny.' },
      { h: `<h2>RGB × CMYK</h2><table class="tt"><tr><th></th><th>RGB</th><th>CMYK</th></tr><tr><td>míchání</td><td>aditivní (světlo)</td><td>subtraktivní (pigment)</td></tr><tr><td>použití</td><td>monitor, projektor</td><td>tiskárna</td></tr><tr><td>nejnižší intenzita</td><td>černá</td><td class="hi">bílá (papír)</td></tr></table>`, say: 'Monitor je zdroj světla, a proto barvy přidáváme. Papír je bílý a barvy z něj odečítají část odraženého světla. Proto se er gé bé používá pro obrazovky a cé em ý ká pro tisk.' },
      { h: list('CMYK', ['<b>C</b>yan, <b>M</b>agenta, <b>Y</b>ellow a <b>K</b> – černá', 'C + M + Y dá jen tmavě šedou a černá je <b>levnější</b>', 'Rozlišení v <b>DPI</b> – body na palec'], 3, false), say: 'Cé em ý ká znamená azurová, purpurová, žlutá a černá. Smícháním prvních tří vznikne jen tmavě šedá a černá barva je navíc levnější, proto se používá čtvrtá. Hustota bodů se udává v dé pé í, tedy v bodech na palec.' },
      { h: diagram('Laserová tiskárna', UPP.laserDiagram()), say: 'Kódy znaků se převedou na elektrické signály, kterými se moduluje laserový paprsek. Ten vybíjí náboj na válci. Toner ulpí jen na vybitých místech, přenese se na papír a vyhřívací válečky ho zafixují.' },
      { h: `<h2>Druhy tiskáren</h2>${tt(['druh', 'princip'], [['jehličková', 'jehličky tisknou přes pásku'], ['tryskové (inkoustové)', 'trysky vystřelují kapičky inkoustu'], ['termografická', 'vosk z pásky se rozpustí teplem'], ['laserová', 'toner drží na vybitých místech válce']], [])}`, say: 'Jehličkové tiskárny tisknou jehličkami přes barvicí pásku. Inkoustové vystřelují kapičky inkoustu, termografické rozpouštějí vosk z pásky a laserové používají toner.' }
    ] },
    { file: '18-4-sit', at: 'Přenosová média a drátové sítě', title: 'Topologie sítí a switch', steps: [
      { h: title('Drátové sítě', 'Topologie, hub a switch'), say: 'Přenosová média a drátové sítě.' },
      ...reveal('Přenosová média', [
        ['<b>Metalické kabely</b> – koaxiál, kroucená dvojlinka', 'Metalické kabely přenášejí změny napětí: koaxiální kabel a kroucená dvojlinka.'],
        ['<b>Optické kabely</b> – světlo, bez rušení', 'Optické kabely přenášejí světlo, nejsou rušeny elektromagnetickým vlněním a dosáhnou velkých vzdáleností.'],
        ['<b>Rádiové spoje</b> – Wi-Fi, Bluetooth, GSM', 'Rádiové spoje přenášejí vlny vzduchem, třeba wi fi, bluetooth nebo mobilní sítě.']
      ]),
      { h: diagram('Topologie sítí', UPP.topologyDiagram()), say: 'Sběrnicová topologie používá jeden sdílený kabel s terminátory na koncích. Hvězda připojuje všechny uzly k centrálnímu prvku, tedy k hubu nebo switchi. Strom vznikne spojením více hvězd.' },
      { h: `<h2>Ethernet</h2>${tt(['', 'sběrnice', 'hvězda'], [['kabel', 'koaxiální', 'kroucená dvojlinka, RJ-45'], ['rychlost', '10 Mb/s', '10 Mb/s až 1 Gb/s'], ['délka', 'do 185 m', 'do 100 m']], [])}`, say: 'Ethernet na koaxiálním kabelu ve sběrnici má rychlost deset megabitů za sekundu a vzdálenost mezi uzly nejvýše sto osmdesát pět metrů. Hvězda s kroucenou dvojlinkou dosáhne od deseti megabitů do jednoho gigabitu a kabel smí být dlouhý sto metrů.' },
      { h: diagram('Hub a switch', UPP.switchDiagram()), say: 'Hub je jako hlasatel: data z jednoho portu pošle na všechny ostatní. Switch je jako vrátný, který si pamatuje, kdo bydlí kde. Podle tabulky mák adres pošle data jen na port příjemce. Tabulku si zpočátku vytvoří sám tím, že sleduje komunikaci.' },
      { h: list('MAC adresa', ['<b>48 bitů</b> = 6 bajtů, jedinečná z výroby', 'Tvar XX-XX-XX-XX-XX-XX · Windows: <code>ipconfig /all</code>'], 2, false), say: 'Mák adresa je jedinečný šestačtyřicetibitový identifikátor síťové karty, šest bajtů zapsaných jako šest dvojic šestnáctkových cifer. Ve Windows ji zjistíme příkazem ajpí konfig lomeno ejl.' }
    ] },
    { file: '18-5-wifi', at: 'Bezdrátové sítě Wi-Fi', title: 'Wi-Fi', steps: [
      { h: title('Wi-Fi', 'Bezdrátové sítě IEEE 802.11'), say: 'Bezdrátové sítě wi fi.' },
      ...reveal('Základ', [
        ['Rádiové vlny <b>2,4 GHz</b> nebo <b>5 GHz</b>', 'Wi fi využívá rádiové vlny o frekvenci dva celé čtyři gigahertzu nebo pět gigahertzů. Pásmo dva celé čtyři používá řada jiných zařízení, takže se může rušit.'],
        ['<b>SSID</b> – řetězec až 32 ASCII znaků, který rozlišuje sítě', 'Sítě se rozlišují pomocí es es aj dí, což je řetězec nejvýše dvaatřicet znaků.']
      ]),
      { h: `<h2>Normy IEEE 802.11</h2>${tt(['norma', 'rychlost', 'frekvence'], [['a', '54 Mb/s', '5 GHz'], ['b', '11 Mb/s', '2,4 GHz'], ['g', '54 Mb/s', '2,4 GHz'], ['n', '150 Mb/s', '2,4 i 5 GHz']], [])}`, say: 'Norma a má padesát čtyři megabitů za sekundu na pěti gigahertzech. Norma bé jedenáct megabitů na dvou celých čtyřech. Norma gé padesát čtyři na dvou celých čtyřech a norma en sto padesát megabitů na obou pásmech.' },
      { h: diagram('Tři způsoby spojení', UPP.wifiDiagram()), say: 'V režimu ad hoc spolu počítače komunikují přímo. V infrastrukturním režimu komunikují do hvězdy přes přístupový bod, který vysílá es es aj dí a klienti si ho vyberou. Spojení dvou sítí přes dva přístupové body se nazývá dábl jú dé es link.' }
    ] }
  ]
};

// self-check: sloupce tabulky ve videu odpovídají skutečným spojkám
const OPS = { '∧': (a, b) => a & b, '∨': (a, b) => a | b, '→': (a, b) => +(!a || b), '↔': (a, b) => +(a === b), '⊕': (a, b) => a ^ b };
for (const [op, col] of CONN) if (String([[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b]) => OPS[op](a, b))) !== String(col)) throw new Error('špatná tabulka ' + op);
