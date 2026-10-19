// Scénáře videí MLG – spouští se přes: node tools/video.mjs mlg [filtr]
import { loadDiagrams, title, list, diagram, reveal, big, tt, sp } from './video-lib.mjs';

export const CODE = 'MLG';
const MLG = loadDiagrams('mlg', 'MLG');

// --- logika pro příklady (tabulky ve snímcích se počítají, takže hodnoty sedí) ---
const imp = (a, b) => !a || b, iff = (a, b) => a === b, n = x => !x;
const rows = k => Array.from({ length: 2 ** k }, (_, i) => Array.from({ length: k }, (_, j) => !((i >> (k - 1 - j)) & 1))); // od samých jedniček
const N = x => (x ? 1 : 0);
// tabulka z funkcí: proměnné + sloupce [název, funkce]; z = zvýrazní nuly
const table = (vars, cols, upto = cols.length, hi = [upto + vars.length - 1]) =>
  tt([...vars, ...cols.slice(0, upto).map(c => c[0])], rows(vars.length).map(r => [...r.map(N), ...cols.slice(0, upto).map(c => N(c[1](...r)))]), hi);
const col = (k, f) => rows(k).map(r => N(f(...r)));
const eq = (a, b, m) => { if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`${m}: ${JSON.stringify(a)} ≠ ${JSON.stringify(b)}`); };

// Quine–McCluskey (kontrola příkladů): vrací prvočleny a všechna minimální pokrytí (podle počtu literálů)
function qm(nv, minterms) {
  let cur = new Set(minterms.map(m => m.toString(2).padStart(nv, '0'))), primes = [];
  while (cur.size) {
    const arr = [...cur], used = new Set(), next = new Set();
    for (let i = 0; i < arr.length; i++) for (let j = i + 1; j < arr.length; j++) {
      const d = [...arr[i]].map((c, k) => (c !== arr[j][k] ? k : -1)).filter(k => k >= 0);
      if (d.length === 1 && arr[i][d[0]] !== '-' && arr[j][d[0]] !== '-') { used.add(arr[i]); used.add(arr[j]); next.add(arr[i].slice(0, d[0]) + '-' + arr[i].slice(d[0] + 1)); }
    }
    primes.push(...arr.filter(a => !used.has(a))); cur = next;
  }
  const covers = (p, m) => [...p].every((c, k) => c === '-' || c === m.toString(2).padStart(nv, '0')[k]), lits = p => [...p].filter(c => c !== '-').length;
  let best = [], bl = 1e9;
  for (let mask = 0; mask < 1 << primes.length; mask++) {
    const ch = primes.filter((_, i) => (mask >> i) & 1);
    if (!minterms.every(m => ch.some(p => covers(p, m)))) continue;
    const l = ch.reduce((s, p) => s + lits(p), 0);
    if (l < bl) { bl = l; best = [ch]; } else if (l === bl) best.push(ch);
  }
  return { primes, best, bl };
}
{
  const a = qm(3, [1, 2, 3, 5, 7]); eq(a.primes.sort(), ['--1', '01-'], 'QM 1 prvočleny'); eq(a.bl, 3, 'QM 1 literály');
  const b = qm(3, [0, 4, 2, 3, 5, 7]); eq(b.primes.length, 6, 'QM 2 prvočleny'); eq(b.best.length, 2, 'QM 2 počet řešení'); eq(b.bl, 6, 'QM 2 literály');
}

// ÚDNT z funkce: seznam řádků (kódy) kde je formule pravdivá
const models = (k, f) => rows(k).filter(r => f(...r)).map(r => r.map(N).join(''));

// --- ověření čísel použitých v komentářích ---
const f3 = (A, B, C) => imp(A || n(B) || n(C), A && B);
eq(col(3, f3), [1, 1, 0, 0, 1, 0, 0, 0], 'tabulka (A∨¬B∨¬C)⇒(A∧B)');
eq(col(2, (A, B) => imp(A, imp(n(B), A))), [1, 1, 1, 1], 'A⇒(¬B⇒A) tautologie');
eq(col(2, (A, B) => iff(n(A || B), n(A) && n(B))), [1, 1, 1, 1], 'De Morgan');
eq([imp(false, imp(false, imp(false, imp(false, false)))), false || false || false || false || false], [true, false], 'protipříklad řetězec implikací');
eq(models(3, (A, B, C) => (A && B) || (B && n(C))), ['111', '110', '010'], 'ÚDNT (A∧B)∨(B∧¬C)');
eq(models(3, (T, F, K) => imp(F && K, T) && (T || F || K) && imp(n(F), n(T))), ['111', '110', '010', '001'], 'svatba');
const moucnik = (P, H, M) => (P || H) && imp(H, n(P && M));
eq(models(3, moucnik), ['110', '101', '100', '011', '010'], 'moučník – modely');
eq(rows(3).filter(r => moucnik(...r)).every(([P, H, M]) => imp(H && M, n(P))), true, 'moučník – důsledek');
eq(rows(3).filter(r => moucnik(...r)).every(([P]) => P), false, 'moučník – polévka není důsledek');
eq(rows(3).filter(r => moucnik(...r)).every(([, H]) => H), false, 'moučník – hlavní jídlo není důsledek');
eq(models(2, (A, B) => A || n(B)), ['11', '10', '00'], 'ÚDNT z tabulky');
eq(col(2, (A, B) => A || n(B)), [1, 1, 0, 1], 'tabulka A ∨ ¬B');
const Z = c => `<span class="z">${c}</span>`;

// --- scénáře (komentář psaný tak, aby ho syntéza řeči přečetla správně: písmena á, bé, cé, bez symbolů) ---
export const VIDEOS = {
  'vyroky-spojky': [
    { file: '01-1-vyrok', at: 'Výrok a jeho pravdivost', title: 'Co je výrok', steps: [
      { h: title('Výrok a jeho pravdivost', 'Základní stavební kámen výrokové logiky'), say: 'Výrok a jeho pravdivost. Základní stavební kámen výrokové logiky.' },
      ...reveal('Elementární výrok', [
        ['Oznamovací věta, o které má smysl rozhodovat, zda je <b>pravdivá</b>', 'Elementární výrok je oznamovací věta, o které má smysl rozhodovat, jestli je pravdivá.'],
        ['…a kterou chápeme jako <b>nedělitelný celek</b>', 'A chápeme ji jako nedělitelný celek, tedy nerozkládáme ji na menší výroky.'],
        ['Hodnoty: <b>pravda = 1</b>, <b>nepravda = 0</b>', 'Výrok může mít dvě hodnoty: pravda, kterou značíme jedna, a nepravda, kterou značíme nula.']
      ]),
      { h: `<h2>Je to výrok?</h2><div class="big" style="font-size:34px;font-family:inherit;text-align:left"><span class="df">✔</span> Mám dnes narozeniny.<br><span class="df">✔</span> Na Marsu kdysi existoval život.<br><span class="ac">✘</span> Jdi pryč!<br><span class="ac">✘</span> Půjdeme do kina?<br><span class="ac">✘</span> x² − 2 ≥ 3x + 2</div>`, say: 'Mám dnes narozeniny je výrok. Na Marsu kdysi existoval život je také výrok, i když jeho pravdivost teď neumíme určit. Rozkaz jdi pryč, otázka půjdeme do kina a nerovnice s neznámým x výroky nejsou, protože se jim nedá přiřadit pravda ani nepravda.' },
      { h: list('Zapamatuj si', ['Výrok musí něco <b>tvrdit</b>', 'Pravdivost nemusíme umět určit – stačí, že existuje'], 2, false), say: 'Zapamatuj si: výrok musí něco tvrdit. A pravdivost nemusíme umět určit, stačí, že smysluplně existuje.' }
    ] },
    { file: '01-2-spojky', at: 'Logické spojky', title: 'Logické spojky a jejich tabulky', steps: [
      { h: title('Logické spojky', 'Negace, konjunkce, disjunkce, implikace, ekvivalence'), say: 'Logické spojky. Z jednoduchých výroků skládáme složitější pomocí pěti spojek.' },
      { h: `<h2>Negace ¬A</h2>${table(['A'], [['¬A', A => n(A)]])}<p class="sub" style="text-align:center">„není pravda, že A“ – obrátí hodnotu</p>`, say: 'Negace obrací hodnotu. Není pravda, že á. Z pravdy je nepravda a z nepravdy pravda.' },
      { h: `<h2>Konjunkce A ∧ B</h2>${table(['A', 'B'], [['A∧B', (A, B) => A && B]])}<p class="sub" style="text-align:center">„A a současně B“ – jediná jednička</p>`, say: 'Konjunkce, á a současně bé, je pravdivá jen tehdy, když jsou pravdivé obě části.' },
      { h: `<h2>Disjunkce A ∨ B</h2>${table(['A', 'B'], [['A∨B', (A, B) => A || B]])}<p class="sub" style="text-align:center">„A nebo B“ – jediná nula</p>`, say: 'Disjunkce, á nebo bé, je nepravdivá jen tehdy, když jsou obě části nepravdivé. Je to nevylučující nebo, takže platí i pro obě pravdivé najednou.' },
      { h: `<h2>Implikace A ⇒ B</h2>${table(['A', 'B'], [['A⇒B', imp]])}<p class="sub" style="text-align:center">nepravdivá <b>jen</b> pro A = 1, B = 0</p>`, say: 'Implikace, jestliže á, pak bé, je nepravdivá jediným způsobem: když á je pravda a bé je nepravda.' },
      { h: `<h2>Pozor na implikaci</h2>${table(['A', 'B'], [['A⇒B', imp]])}<p class="sub" style="text-align:center"><span class="ac">Z nepravdy plyne cokoli.</span> Je-li A = 0, je implikace pravdivá vždy.</p>`, say: 'Pozor: z nepravdy plyne cokoli. Je-li předpoklad á nepravdivý, je implikace pravdivá bez ohledu na bé. To je nejčastější místo, kde se dělají chyby.' },
      { h: `<h2>Ekvivalence A ⇔ B</h2>${table(['A', 'B'], [['A⇔B', iff]])}<p class="sub" style="text-align:center">„A právě tehdy, když B“ – stejné hodnoty</p>`, say: 'Ekvivalence, á právě tehdy, když bé, je pravdivá, když mají obě strany stejnou hodnotu.' },
      { h: `<h2>Všech pět najednou</h2>${tt(['A', 'B', '¬A', 'A∧B', 'A∨B', 'A⇒B', 'A⇔B'], rows(2).map(([A, B]) => [N(A), N(B), N(n(A)), N(A && B), N(A || B), N(imp(A, B)), N(iff(A, B))]))}`, say: 'Tady jsou všechny spojky pohromadě. Konjunkce má jedinou jedničku, disjunkce jedinou nulu, implikace jedinou nulu v řádku jedna nula a ekvivalence má jedničky tam, kde jsou hodnoty stejné.' }
    ] }
  ],
  'formule-ekvivalence-dusledek': [
    { file: '02-1-pravdivostni-tabulka', at: 'Pravdivostní tabulka formule', title: 'Jak sestavit pravdivostní tabulku', steps: [
      { h: title('Pravdivostní tabulka', 'Systematicky, po podformulích'), say: 'Jak sestavit pravdivostní tabulku formule.' },
      ...reveal('Postup', [
        ['① Spočítej proměnné – <b>n proměnných = 2ⁿ řádků</b>', 'Nejdřív spočítej proměnné. Pro n proměnných bude tabulka mít dva na n řádků.'],
        ['② Řádky od samých <b>jedniček</b> k samým <b>nulám</b>', 'Řádky piš systematicky od samých jedniček k samým nulám.'],
        ['③ Sloupec pro každou <b>podformuli</b>, zevnitř ven', 'Pro každou podformuli přidej sloupec, od nejvnitřnějších závorek směrem ven.'],
        ['④ Přečti poslední sloupec', 'Nakonec přečti poslední sloupec.']
      ]),
      { h: `<h2>A ⇒ (¬B ⇒ A)</h2>${table(['A', 'B'], [['¬B', (A, B) => n(B)], ['¬B⇒A', (A, B) => imp(n(B), A)], ['A⇒(¬B⇒A)', (A, B) => imp(A, imp(n(B), A))]])}`, say: 'Příklad: á implikuje, že z negace bé plyne á. Dvě proměnné, čtyři řádky. Přidáme sloupec negace bé, pak sloupec z negace bé plyne á a nakonec celou formuli.' },
      { h: list('Výsledek', ['Poslední sloupec: <b>samé jedničky</b>', '→ formule je <span class="ac">tautologie</span>'], 2, false), say: 'Poslední sloupec obsahuje samé jedničky, formule je tedy tautologie. Je-li á pravda, je pravdivý závěr, a je-li á nepravda, implikace platí zadarmo.' }
    ] },
    { file: '02-2-tautologie-kontradikce', at: 'Tautologie, kontradikce', title: 'Tautologie, kontradikce, splnitelnost', steps: [
      { h: title('Tautologie a kontradikce', 'Co můžeme vyčíst z posledního sloupce tabulky'), say: 'Tautologie, kontradikce a splnitelná formule.' },
      { h: diagram('Druhy formulí', MLG.vennFormule()), say: 'Tautologie je pravdivá při každém ohodnocení, v tabulce má samé jedničky. Kontradikce je nepravdivá při každém ohodnocení, má samé nuly. Splnitelná formule má aspoň jednu jedničku. Každá tautologie je tedy i splnitelná, kontradikce ne.' },
      { h: `<h2>(A ∨ ¬B ∨ ¬C) ⇒ (A ∧ B)</h2>${table(['A', 'B', 'C'], [['A∨¬B∨¬C', (A, B, C) => A || n(B) || n(C)], ['A∧B', (A, B) => A && B], ['výsledek', f3]])}`, say: 'Příklad: formule á nebo non bé nebo non cé implikuje á a bé. Tabulka má osm řádků.' },
      { h: list('Závěr', ['Ve výsledku jsou <b>jedničky i nuly</b>', 'Není tautologie, není kontradikce', 'Je <span class="df">splnitelná</span> – např. A = B = C = 1'], 3, false), say: 'Ve výsledném sloupci jsou jedničky i nuly. Formule tedy není tautologie ani kontradikce, ale je splnitelná, například pro á, bé i cé pravdivé.' },
      { h: list('Tip', ['Splnitelnost: stačí najít <b>jedno</b> ohodnocení', 'Kontradikci je nutné ukázat pro <b>všechna</b>'], 2, false), say: 'Tip. U splnitelnosti stačí najít jediné vhodné ohodnocení. Naopak když chceš ukázat, že formule je kontradikce, musíš prověřit všechna ohodnocení, nebo to zdůvodnit úvahou.' }
    ] },
    { file: '02-3-ekvivalence', at: 'Logická ekvivalence', title: 'Logická ekvivalence', steps: [
      { h: title('Logická ekvivalence', 'Kdy mají dvě formule „stejný smysl“'), say: 'Logická ekvivalence. Kdy mají dvě formule stejný smysl.' },
      ...reveal('Definice', [
        ['Formule ϕ, ψ jsou <b>ekvivalentní</b> (ϕ ≡ ψ), mají-li <b>stejnou tabulku</b>', 'Dvě formule jsou logicky ekvivalentní, když mají při každém ohodnocení stejnou hodnotu, tedy stejnou tabulku.'],
        ['ϕ ≡ ψ právě když <b>ϕ ⇔ ψ je tautologie</b>', 'Ekvivalentní jsou právě tehdy, když je jejich ekvivalence tautologie.']
      ]),
      { h: `<h2>De Morgan: ¬(A ∨ B) ≡ ¬A ∧ ¬B</h2>${table(['A', 'B'], [['¬(A∨B)', (A, B) => n(A || B)], ['¬A∧¬B', (A, B) => n(A) && n(B)], ['⇔', (A, B) => iff(n(A || B), n(A) && n(B))]])}`, say: 'Příklad: De Morganovo pravidlo. Negace á nebo bé a negace á a zároveň negace bé mají stejné sloupce, a jejich ekvivalence je proto samé jedničky.' },
      { h: `<h2>Protipříklad stačí</h2><div class="big" style="font-size:34px">A ⇒ (B ⇒ (C ⇒ (D ⇒ E))) <span class="ac">≢</span> A ∨ B ∨ C ∨ D ∨ E</div><p class="sub" style="text-align:center">A = B = C = D = E = 0: levá strana <b>1</b>, pravá strana <b>0</b></p>`, say: 'Opačně, k důkazu, že formule ekvivalentní nejsou, stačí jediný protipříklad. Když jsou všechny proměnné nepravdivé, je levá formule pravdivá, protože začíná nepravdivým předpokladem, ale pravá je nepravdivá.' },
      { h: list('Pozor', ['<b>⇔</b> je spojka uvnitř formule', '<b>≡</b> je tvrzení o dvou formulích'], 2, false), say: 'Pozor na rozdíl mezi spojkou ekvivalence a znakem logické ekvivalence. První tvoří novou formuli, druhý tvrdí, že dvě formule mají stejnou tabulku.' }
    ] },
    { file: '02-4-logicky-dusledek', at: 'Logický důsledek', title: 'Logický důsledek', steps: [
      { h: title('Logický důsledek', 'Z čeho plyne co'), say: 'Logický důsledek. Kdy z jedné formule plyne jiná.' },
      { h: diagram('ϕ ⊨ ψ', MLG.dusledek()), say: 'Formule psí je logickým důsledkem formule fí, pokud je pravdivá při každém ohodnocení, při kterém je pravdivá fí. Je to jako množinová inkluze: všechna ohodnocení, kde platí fí, musí ležet uvnitř ohodnocení, kde platí psí.' },
      ...reveal('Testování', [
        ['① Sestav tabulku s ϕ i ψ', 'Sestav tabulku s oběma formulemi.'],
        ['② Vyber řádky, kde <b>ϕ = 1</b>', 'Vyber jen řádky, kde je fí pravdivé.'],
        ['③ Na nich musí být i <b>ψ = 1</b> – jedna nula stačí k vyvrácení', 'Na těchto řádcích musí být pravdivé i psí. Jediná nula tvrzení vyvrátí.']
      ]),
      { h: `<h2>Dám si moučník?</h2><p class="sub">„Polévku nebo hlavní jídlo si určitě dám, ale jestliže si dám hlavní jídlo, nedám si polévku i moučník.“</p><div class="big" style="font-size:32px">(P ∨ H) ∧ (H ⇒ ¬(P ∧ M))</div>`, say: 'Příklad. Polévku nebo hlavní jídlo si určitě dám, ale jestliže si dám hlavní jídlo, nedám si polévku i moučník. Značíme pé polévka, há hlavní jídlo, em moučník.' },
      { h: `<h2>Řádky, kde předpoklad platí</h2>${tt(['P', 'H', 'M', 'závěr P', 'závěr H', '(H∧M)⇒¬P'], rows(3).filter(r => moucnik(...r)).map(([P, H, M]) => [N(P), N(H), N(M), P ? 1 : Z(0), H ? 1 : Z(0), N(imp(H && M, n(P)))]), 5)}`, say: 'Zbývá pět řádků, kde předpoklad platí. Tvrzení dám si polévku má nulu, takže důsledek není. Tvrzení dám si hlavní jídlo má také nuly. Jenom tvrzení, že když si dám hlavní jídlo i moučník, nedám si polévku, platí na všech pěti řádcích, a je tedy důsledkem.' },
      { h: list('Pozorování', ['Důsledkem <b>kontradikce</b> je cokoli', '<b>Tautologie</b> je důsledkem čehokoli'], 2, false), say: 'A ještě dvě pozorování. Z kontradikce plyne cokoli, protože není žádné ohodnocení, které by se ověřovalo. A tautologie je důsledkem čehokoli, protože platí všude.' }
    ] },
    { file: '02-5-slovni-ulohy', at: 'Slovní úlohy', title: 'Slovní úloha: svatba', steps: [
      { h: title('Slovní úlohy', 'Převod textu na formule'), say: 'Slovní úlohy. Jak převést text na formule a rozhodnout, co z něj plyne.' },
      ...reveal('Postup', [
        ['① Zaveď <b>proměnné</b> pro jednoduchá tvrzení', 'Nejdřív zavedeme proměnné pro jednoduchá tvrzení.'],
        ['② Každou podmínku přepiš na <b>formuli</b>', 'Každou podmínku z textu přepíšeme na formuli.'],
        ['③ Najdi řádky, kde platí <b>všechny</b> předpoklady', 'Najdeme řádky tabulky, kde platí všechny podmínky najednou.'],
        ['④ Tvrzení je důsledek, jen když platí na <b>všech</b> těchto řádcích', 'Tvrzení je důsledkem, jen když platí na všech těchto řádcích.']
      ]),
      { h: list('Svatba: T – teta, F – děda, K – Karel', ['Děda i Karel ⇒ teta: <b>(F ∧ K) ⇒ T</b>', 'Aspoň jeden ze tří: <b>T ∨ F ∨ K</b>', 'Bez dědy nepozvou tetu: <b>¬F ⇒ ¬T</b>'], 3, false), say: 'Příklad se svatbou. Té je teta Máňa, éf děda František, ká bratranec Karel. Pozvou-li dědu i Karla, musí pozvat tetu. Aspoň jednoho ze tří pozvou. A bez dědy nepozvou ani tetu.' },
      { h: `<h2>Řádky T F K, kde platí vše</h2>${tt(['T', 'F', 'K'], models(3, (T, F, K) => imp(F && K, T) && (T || F || K) && imp(n(F), n(T))).map(r => [...r]))}`, say: 'Podmínky splňují čtyři řádky: všichni tři, teta a děda, jen děda a jen Karel.' },
      { h: `<h2>Co z toho plyne?</h2>${tt(['Tvrzení', 'Důsledek?'], [['Pozvou dědu', '<span class="ac">ne</span> – řádek 001'], ['Teta ⇔ Karel', '<span class="ac">ne</span> – řádek 110'], ['Děda ∨ Karel', '<span class="df">ano</span> – vždy']], [])}`, say: 'Tvrzení, že pozvou dědu, není důsledkem, protože v posledním řádku je pozván jen Karel. Tvrzení, že teta právě tehdy, když Karel, také ne, protože v řádku teta a děda Karel nepřijde. Jediné, co platí vždy, je, že pozvou dědu nebo Karla.' }
    ] }
  ],
  'zakony-normalni-tvary': [
    { file: '03-1-zakony', at: 'Tabulka logických zákonů', title: 'Čtyři zákony, které potřebuješ', steps: [
      { h: title('Logické zákony', 'Co si zapamatovat nejdřív'), say: 'Logické zákony. Z celé tabulky stačí zpočátku čtyři.' },
      ...reveal('Základní čtyři', [
        ['<b>A ⇒ B ≡ ¬A ∨ B</b>', 'První: implikace se dá napsat jako negace předpokladu nebo závěr.'],
        ['<b>A ⇔ B ≡ (A ∧ B) ∨ (¬A ∧ ¬B)</b>', 'Druhý: ekvivalence platí, když jsou obě strany pravdivé, nebo obě nepravdivé.'],
        ['<b>¬(A ∨ B) ≡ ¬A ∧ ¬B</b> a <b>¬(A ∧ B) ≡ ¬A ∨ ¬B</b>', 'Třetí: De Morganova pravidla. Při zatahování negace dovnitř se konjunkce mění na disjunkci a naopak.'],
        ['<b>A ∧ (B ∨ C) ≡ (A ∧ B) ∨ (A ∧ C)</b>', 'Čtvrtý: distributivita, tedy roznásobení.']
      ]),
      { h: list('Negace implikace', ['<b>¬(A ⇒ B) ≡ A ∧ ¬B</b>', 'ne ¬A ⇒ ¬B !'], 2, false), say: 'A pozor na negaci implikace. Je to á a zároveň non bé. Nikdy ne implikace negací.' }
    ] },
    { file: '03-2-prevod-do-dnt', at: 'Převod do DNT a KNT', title: 'Převod do disjunktivního tvaru', steps: [
      { h: title('Převod do DNT', 'Disjunkce konjunkcí literálů'), say: 'Převod formule do disjunktivního normálního tvaru. Je to disjunkce konjunkcí literálů.' },
      { h: diagram('Čtyři kroky', MLG.dntPostup()), say: 'Postup má čtyři kroky. Nejdřív odstraníme implikace a ekvivalence. Pak zatáhneme negace dovnitř podle De Morgana. Potom roznásobíme konjunkci přes disjunkci. A nakonec zjednodušíme: člen á a zároveň non á je nula a opakující se členy sloučíme.' },
      ...reveal('(A′ ⇒ (B ∧ C′))′', [
        ['<b>A′ ∧ (B ∧ C′)′</b>', 'Negace implikace je předpoklad a negace závěru. Máme tedy non á a zároveň negaci bé a non cé.'],
        ['<b>A′ ∧ (B′ ∨ C)</b>', 'De Morgan změní konjunkci v závorce na disjunkci: non bé nebo cé.'],
        ['<span class="ac">(A′ ∧ B′) ∨ (A′ ∧ C)</span>', 'Roznásobením dostaneme výsledek: non á a non bé, nebo non á a cé. To je disjunktivní tvar.']
      ]),
      ...reveal('A′ ⇔ (B ∨ C′)', [
        ['(A′ ∧ (B ∨ C′)) ∨ (A ∧ (B ∨ C′)′)', 'Ekvivalenci rozepíšeme: buď platí obě strany, nebo žádná.'],
        ['(A′ ∧ B) ∨ (A′ ∧ C′) ∨ (A ∧ B′ ∧ C)', 'Roznásobíme první závorku a negaci disjunkce v druhé změníme na konjunkci negací.']
      ])
    ] },
    { file: '03-3-udnt', at: 'Úplný disjunktivní tvar', title: 'Úplný disjunktivní tvar (ÚDNT)', steps: [
      { h: title('Úplný disjunktivní tvar', 'Zapsaná pravdivostní tabulka'), say: 'Úplný disjunktivní tvar. Je to vlastně zapsaná pravdivostní tabulka.' },
      { h: list('Úplný = každá konjunkce má všechny proměnné', ['Disjunkce konjunkcí', 'V každé konjunkci <b>každá proměnná právě jednou</b> (přímo nebo negovaně)', 'Je až na pořadí <b>jednoznačný</b>'], 3, false), say: 'Úplný znamená, že každá konjunkce obsahuje všechny proměnné, každou právě jednou, přímo nebo negovanou. Úplný tvar je až na pořadí jednoznačný.' },
      { h: diagram('Od tabulky k formuli', MLG.tabulkaUdnt()), say: 'Z tabulky ho získáme snadno. Každý řádek s jedničkou se stane konjunkcí všech proměnných: jednička znamená proměnnou, nula její negaci. Řádky s nulou vynecháme a konjunkce spojíme disjunkcí.' },
      { h: `<h2>Další příklad</h2><div class="big" style="font-size:36px">(A ∧ B) ∨ (B ∧ C′)</div><p class="sub" style="text-align:center">A ∧ B ≡ ABC ∨ ABC′ &nbsp;·&nbsp; B ∧ C′ ≡ ABC′ ∨ A′BC′</p><div class="big" style="font-size:36px"><span class="ac">ABC ∨ ABC′ ∨ A′BC′</span></div>`, say: 'Algebraicky: chybějící proměnnou doplníme pomocí c nebo non c, což je jedna. Á a bé dává á bé cé nebo á bé non cé. Bé a non cé dává á bé non cé nebo non á bé non cé. Duplicitní člen vynecháme a zbudou tři konjunkce.' },
      { h: `<h2>A ∨ ¬B – zjednodušení</h2><div class="big" style="font-size:34px">AB ∨ AB′ ∨ A′B′ <span class="mu">≡</span> <span class="ac">A ∨ B′</span></div>`, say: 'Úplný tvar se pak dá ještě zkrátit. Například á bé nebo á non bé nebo non á non bé je totéž co á nebo non bé.' }
    ] }
  ],
  'negace-kvantifikatory': [
    { file: '05-1-pravidla-negace', at: 'Pravidla negace', title: 'Pravidla negace', steps: [
      { h: title('Negace vět', 'Spojky a kvantifikátory'), say: 'Negace vět a výroků s kvantifikátory.' },
      { h: diagram('Přehled', MLG.negace()), say: 'Negace konjunkce je disjunkce negací, negace disjunkce je konjunkce negací, a negace implikace je á a zároveň non bé. U kvantifikátorů se obrací obecný na existenční a naopak, a negace padne dovnitř.' },
      ...reveal('Postup u kvantifikovaného výroku', [
        ['① <b>Obrať</b> všechny kvantifikátory (∀ ↔ ∃)', 'Nejdřív obrať všechny kvantifikátory: pro každé se změní na existuje a existuje na pro každé.'],
        ['② Znegovat <b>tvrzení</b> na konci', 'Pak znegujeme samotné tvrzení na konci. Implikace se změní na konjunkci předpokladu a negovaného závěru.'],
        ['③ Relace: > → ≤, = → ≠', 'Relace se obrátí: větší na menší nebo rovno, rovná se na nerovná se.']
      ]),
      { h: list('Pozor', ['Negace „každý je …“ je „<b>aspoň jeden není</b> …“', 'ne „nikdo není …“'], 2, false), say: 'Pozor. Negace tvrzení každý je není nikdo není, ale aspoň jeden není.' }
    ] },
    { file: '05-2-negace-prikladu', at: 'Negace matematických výroků', title: 'Negace: příklady', steps: [
      { h: title('Negace s kvantifikátory', 'Tři příklady'), say: 'Tři příklady negace matematických výroků.' },
      { h: `<h2>Každé prvočíslo je liché</h2><div class="big" style="font-size:32px">(∀p prvočíslo)(∃k∈ℕ)(p = 2k+1)<br><span class="ac">(∃p prvočíslo)(∀k∈ℕ)(p ≠ 2k+1)</span></div>`, say: 'První příklad. Pro každé prvočíslo p existuje k tak, že p je dvě ká plus jedna. Negace: existuje prvočíslo p, takové, že pro každé ká se p nerovná dvě ká plus jedna. Je pravdivá, třeba p rovná se dva.' },
      { h: `<h2>Existuje n, které je neutrální</h2><div class="big" style="font-size:32px">(∃n∈ℕ)(∀m∈ℕ)(n·m = n)<br><span class="ac">(∀n∈ℕ)(∃m∈ℕ)(n·m ≠ n)</span></div>`, say: 'Druhý příklad. Existuje n takové, že pro všechna em platí n krát em rovná se n. Negace: pro každé n existuje em, pro které n krát em se nerovná n. Kvantifikátory se obrátily a rovnost se změnila na nerovnost.' },
      { h: `<h2>Spojitost v bodě a</h2><div class="big" style="font-size:28px">(∀ε>0)(∃δ>0)(∀x)((|x−a|<δ) ⇒ (|f(x)−f(a)|<ε))<br><span class="ac">(∃ε>0)(∀δ>0)(∃x)((|x−a|<δ) ∧ (|f(x)−f(a)|≥ε))</span></div>`, say: 'Třetí příklad je definice spojitosti funkce v bodě á. Negace říká: existuje epsilon, že pro každé delta najdeme x, které je od á blíž než delta, ale hodnota funkce se liší aspoň o epsilon. Implikace se změnila na konjunkci a poslední nerovnost se obrátila.' }
    ] }
  ]
};
