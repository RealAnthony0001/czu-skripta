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
  ]
};

// self-check: sloupce tabulky ve videu odpovídají skutečným spojkám
const OPS = { '∧': (a, b) => a & b, '∨': (a, b) => a | b, '→': (a, b) => +(!a || b), '↔': (a, b) => +(a === b), '⊕': (a, b) => a ^ b };
for (const [op, col] of CONN) if (String([[0, 0], [0, 1], [1, 0], [1, 1]].map(([a, b]) => OPS[op](a, b))) !== String(col)) throw new Error('špatná tabulka ' + op);
