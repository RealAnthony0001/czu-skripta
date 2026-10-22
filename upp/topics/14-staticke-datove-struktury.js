registerTopic({
  id: 'staticke-datove-struktury', order: 14, icon: '🧱', title: 'Statické datové struktury', src: 'podklady', lec: [7],
  where: 'Přednáška 7 + Cvičení 5, 6',
  summary: 'Proměnné, konstanty a datové typy (bool, char, int, float), složené struktury – pole, soubor, množina, záznam, objekt, matice (diagonály) a hierarchie složených struktur s příklady deklarací a přístupu k položkám.',
  vocab: [
    { w: 'Datová proměnná', x: 'Symbolické označení paměťového místa; obsah se může měnit.' },
    { w: 'Datová konstanta', x: 'Symbolické označení neměnné hodnoty.' },
    { w: 'Datový typ', x: 'Způsob kódování (interpretace) uložených dat.' },
    { w: 'Ordinální typ', x: 'Jednoduchý typ, jehož hodnoty lze očíslovat celými čísly – existuje následník a předchůdce.' },
    { w: 'Homogenní × nehomogenní struktura', x: 'Položky stejného druhu (pole, množina, soubor) × různých druhů (záznam, objekt).' },
    { w: 'Index', x: 'Pořadové číslo položky pole (v C++ od 0, v Pascalu od 1).' },
    { w: 'Tečková notace', x: 'Přístup k položce záznamu: <code>Zaznam.polozka</code>.' }
  ],
  key: [
    'Statická struktura <b>nemění strukturu ani rozsah</b>; paměť se přidělí před spuštěním programu a přiřazení se nemění.',
    '<b>Jednoduché typy:</b> bool (0 = nepravda), char (ASCII / Unicode), int (doplňkový kód), float (IEEE 754). Ordinální: <b>ano</b> – bool, int, char; <b>ne</b> – reálné číslo.',
    '<b>Homogenní:</b> pole (přímý přístup přes index), množina (1 bit na prvek), soubor (sekvenční přístup, EOF). <b>Nehomogenní:</b> záznam, objekt.',
    '<b>Přiřazení × test:</b> Pascal <code>:=</code> / <code>=</code>, C <code>=</code> / <code>==</code>.',
    '<b>Matice</b> m × n, prvek a<sub>ij</sub> (i = řádek, j = sloupec); hlavní diagonála <b>I = J</b>, vedlejší <b>I = N − J + 1</b>.'
  ],
  sections: [
    { title: 'Data v paměti a statické struktury', blocks: [
      { t: 'p', x: 'Data jsou uložena v paměti počítače, která je rozdělena na paměťová místa jednoznačně určená <b>adresou</b>. Pro práci s daty musíme znát čtyři věci:' },
      { t: 'table', head: ['Co', 'Význam'], rows: [
        ['symbolické označení', 'název proměnné'],
        ['adresa', 'kde jsou data uložena (paměťové místo)'],
        ['obsah', 'jakou mají hodnotu'],
        ['datový typ', 'jaký druh dat je uložen – způsob kódování']
      ] },
      { t: 'ex', x: '<b>Proměnná X</b> s obsahem 0101 1100 a typem int (celé číslo) má hodnotu 92 (0101 1100<sub>2</sub> = 64 + 16 + 8 + 4).' },
      { t: 'def', term: 'Statická datová struktura', x: 'Během provádění programu <b>nemění svou strukturu a rozsah</b>. Paměťový prostor je přidělen <b>před spuštěním programu</b> a během zpracování se nemění – OS přiřadí symbolickému označení (proměnné) konkrétní místo v paměti (adresu) a toto přidělení se nemění.' },
      { t: 'versus', title: 'Datová proměnná', cols: [
        { h: 'Staticky přidělená', items: ['paměťové místo přiděleno <b>před spuštěním programu</b>', 'po celou dobu existence proměnné stále stejné'] },
        { h: 'Dynamicky přidělená', items: ['paměťové místo přiděleno až <b>během vykonávání programu</b>', 'může být během existence proměnné změněno (jiné místo)'] }
      ] },
      { t: 'p', x: '<b>Datová konstanta</b> je symbolické označení hodnoty, která se nemění. Před prvním použitím je třeba <b>deklarovat datový typ</b> (způsob interpretace dat): <code>datový_typ název_proměnné;</code> resp. <code>const datový_typ název_konstanty;</code>.' },
      { t: 'grid', head: ['Jazyk', 'Přiřazovací příkaz', 'Test hodnoty'], rows: [
        ['Pascal', 'PROM := hodnota', 'PROM = hodnota'],
        ['jazyk C', 'PROM = hodnota', 'PROM == hodnota']
      ] },
      { t: 'warn', x: 'Pozor na rozdílnou interpretaci <b>přiřazení hodnoty proměnné</b> a <b>testu</b>, zda je obsah proměnné roven hodnotě. V C zapsat <code>if (x = 5)</code> místo <code>x == 5</code> je klasická chyba.' }
    ] },
    { title: 'Jednoduché (základní) datové typy', blocks: [
      { t: 'p', x: 'Jednoduché typy odpovídají způsobu kódování základních typů dat v počítači. Označení typů dále platí v jazyce C++ a jemu podobných.' },
      { t: 'table', head: ['Hodnota', 'Kódování'], rows: [
        ['logická hodnota', 'nepravda = 0, pravda = hodnota ≠ 0'],
        ['celé číslo (pevná řádová čárka)', 'doplňkový kód'],
        ['reálné číslo (pohyblivá řádová čárka)', 'IEEE 754'],
        ['znaková hodnota (znak)', 'ASCII, Unicode']
      ] },
      { t: 'def', term: 'Ordinální datový typ', x: 'Jednoduchý datový typ, ve kterém lze hodnoty opatřit <b>celými pořadovými (ordinálními) čísly</b>. Pro ordinální typ lze určit <b>následníka</b> (ordinální číslo o 1 větší) a <b>předchůdce</b> (o 1 menší). Ordinální jsou logická hodnota, celé číslo, znak; <b>nikoli</b> reálné číslo.' },
      { t: 'grid', head: ['Typ v C++', 'Co reprezentuje', 'Velikost'], rows: [
        ['<b>bool</b>', 'true / false; nulová hodnota = false, nenulová = true', 'stačí 1 bit, často celé slovo (1 byte)'],
        ['<b>char</b>', 'znak: 256 znaků (8bitový ASCII) nebo cca 65 tisíc (Unicode)', '1 byte (ASCII) · 2 byty (Unicode, <code>wchar_t</code>)'],
        ['<b>short</b>', 'celé číslo', 'nejméně 16 bitů (2 byty)'],
        ['<b>int</b>', 'celé číslo', 'nejméně jako short'],
        ['<b>long</b>', 'celé číslo', 'nejméně 32 bitů (4 byty) a alespoň jako int'],
        ['<b>float</b>', 'desetinné číslo', 'obvykle 32 bitů (4 byty)'],
        ['<b>double</b>', 'desetinné číslo', 'obvykle 64 bitů (8 bytů)'],
        ['<b>long double</b>', 'desetinné číslo', 'obvykle 80, 96 nebo 128 bitů']
      ] },
      { t: 'p', x: 'U celých čísel lze použít upřesnění <b>signed</b> (se znaménkem, kladná i záporná) a <b>unsigned</b> (bez znaménka, jen kladná). V Pascalu (cvičení): <code>boolean</code>, <code>char</code>, <code>integer</code> rozsah ⟨−2<sup>15</sup>, 2<sup>15</sup> − 1⟩, dále <code>long</code> ⟨−2<sup>31</sup>, 2<sup>31</sup> − 1⟩ a <code>byte</code> ⟨0, 255⟩, <code>real</code>.' },
      { t: 'ex', x: '<b>Pascal:</b> <code>var A: boolean; B: char; G, H, I: real;</code> → <code>A := false; B := \'X\'; G := 59.697; H := 3.18E06; I := G;</code> (H = 3,18 · 10<sup>6</sup>).' }
    ] },
    { title: 'Složené datové struktury – přehled', blocks: [
      { t: 'p', x: 'Složené struktury vznikají z jednoduchých typů, ale i ze složených <b>hierarchickým skládáním</b>.' },
      { t: 'tree', root: { h: 'Složené datové struktury', kids: [
        { h: 'Homogenní', x: 'položky stejného druhu', kids: [
          { h: 'S přímým přístupem', x: 'pole (array), množina' },
          { h: 'S postupným přístupem', x: 'soubor (proud, stream)' }
        ] },
        { h: 'Nehomogenní', x: 'položky různých druhů', kids: [
          { h: 'záznam (record)' }, { h: 'objekt (object)' }
        ] }
      ] } }
    ] },
    { title: 'Pole, soubor a množina', blocks: [
      { t: 'def', term: 'Pole (array)', x: 'Položky jsou stejného typu a identifikují se <b>indexem</b>: A<sub>0</sub>, A<sub>1</sub>, …, A<sub>N</sub> nebo A[0], A[1], …, A[N]. K položkám lze přistupovat <b>přímo</b> přes index. Rozsah N je nutné znát předem (nebo nechat rezervu a sledovat, kam až je pole platně naplněno).' },
      { t: 'svg', title: 'Pole v paměti', x: UPP.arrayDiagram() },
      { t: 'p', x: '<b>Deklarace pole</b> určuje datový typ položek, jméno pole a počet prvků. V C++: <code>JménoTypu JménoPole[velikost];</code> – prvky se číslují <b>od 0</b> (v Pascalu <b>od 1</b>). Textový řetězec je pole znaků: <code>char retezec[] = "Nějaký text";</code> (v C++ i třída <code>string</code>).' },
      { t: 'ex', x: '<b>Pascal (cvičení):</b> <code>var A: array[1..500] of integer; B: array[1..100] of integer;</code> A[35] := −69; B[28] := 355; A[12] := B[87];' },
      { t: 'def', term: 'Soubor (file) a seznam', x: 'Položky jsou stejného typu, <b>počet položek nemusí být předem znám</b> a může se měnit. K položkám se nepřistupuje přímo, ale <b>postupným procházením</b> ostatních (čte se z aktuální pozice „čtecí hlavy“). Soubor je ukončen <b>koncovou značkou EOF (End of File)</b> – dnes hodnota funkce, která zjistí, zda pozice není za poslední položkou. Uložení na vnějším médiu (disk) = typ <b>soubor</b>, vztah předchůdce / následovník je dán pořadím uložení.' },
      { t: 'def', term: 'Množina (set)', x: 'Množina prvků některého <b>ordinálního typu</b> (bázový typ). Má-li bázový typ N prvků, existuje <b>2<sup>N</sup> podmnožin</b>; každá je jednoznačně popsána <b>N-ticí nul a jedniček</b> (1 = prvek přítomen, 0 = není). Pro každý prvek bázového typu je třeba <b>1 bit</b>. Definovány jsou sjednocení, průnik, rozdíl, podmnožina, prvek množiny. V C++: <code>set&lt;datový_typ&gt; JménoMnožiny;</code>.' },
      { t: 'ex', x: '<b>Bázový typ 1…8</b> (8 bitů, 2<sup>8</sup> = 256 podmnožin): A = {2, 3, 5} = 01101000, B = {3, 5, 8} = 00101001.<br><b>Sjednocení</b> (OR): 01101001 = {2, 3, 5, 8}. <b>Průnik</b> (AND): 00101000 = {3, 5}. <b>Rozdíl A \\ B</b> (A AND NOT B): 01000000 = {2}. Množinové operace jsou tedy přesně logické instrukce po bitech.' },
      { t: 'svg', title: 'Množina 1…8 jako řetězec osmi bitů', x: UPP.setDiagram(), cap: 'Sjednocení = OR, průnik = AND, rozdíl = AND NOT – tytéž logické instrukce, které se už znají ze strojového kódu.' }
    ] },
    { title: 'Záznam a objekt', blocks: [
      { t: 'def', term: 'Záznam (record, struct)', x: 'Položky <b>různých datových typů</b> (jednoduchých i složených), identifikované <b>jmény</b>. Přístup přes <b>tečkovou notaci</b>: <code>Zaznam.polozka</code> (případně výběrem jednoho záznamu a lokálními odkazy na položky).' },
      { t: 'ex', x: '<code>struct TypZbozi { int KodZbozi; char NazevZbozi[]; float CenaZbozi; bool VcetneDPH; }; TypZbozi Zbozi;</code><br>Přístup: <code>Zbozi.KodZbozi = 1025;</code> (kód – celé číslo, název – textový řetězec, cena – reálné číslo, VcetneDPH – logická hodnota).<br><b>Pascal:</b> <code>var Zbozi: record kod_zbozi: integer; nazev_zbozi: string; cena_zbozi: real; vcetne_DPH: boolean; end;</code> → <code>Zbozi.nazev_zbozi := \'Pocitac\';</code>' },
      { t: 'p', x: 'Vztahy mezi záznamy se zachycují <b>E-R diagramem</b> (Entity Relationship): <b>entita ≈ typ záznam</b>, <b>relation ≈ vztah</b> mezi entitami, <b>atribut ≈ položka záznamu</b>.' },
      { t: 'def', term: 'Objekt (třída)', x: '<b>Rozšíření záznamu</b> – v objektovém návrhu se označuje jako <b>třída (class)</b>. Zahrnuje i <b>podprogramy (funkce) – metody</b>, které dokáže provádět; je to spojení datového typu s instrukcemi programu. Konkrétní naplnění hodnot se nazývá <b>instance (objekt) třídy</b>.' },
      { t: 'ex', x: '<code>struct TypZbozi { float CenaZbozi; float SazbaDPH; float DPH() { return CenaZbozi * SazbaDPH; } }; TypZbozi Zbozi;</code> – přístup <code>Zbozi.CenaZbozi = …</code> i volání metody <code>Zbozi.DPH()</code>. Vztahy mezi třídami (třída = předpis typu, objekt / instance = konkrétní výskyt) zachycuje <b>diagram tříd</b>.' },
      { t: 'svg', title: 'Záznam a objekt', x: UPP.recordDiagram() }
    ] },
    { title: 'Matice (dvourozměrné pole)', blocks: [
      { t: 'def', term: 'Matice typu m × n', x: 'Obdélníkové pole m · n prvků uspořádaných do <b>m řádků a n sloupců</b>. Značí se velkými písmeny, prvky malými se <b>dvěma indexy</b> – první je číslo řádku, druhý číslo sloupce; stručně A = (a<sub>ij</sub>). V C++ jako dvourozměrné pole <code>TypPrvku Matice[řádků][sloupců];</code>, přístup <code>Matice[řádek][sloupec] = …</code>.' },
      { t: 'ex', x: '<code>int M[21][21];</code> – číslování pole je od nuly, proto je rozsah 21, aby šlo číslovat řádky i sloupce <b>1 až 20</b>.' },
      { t: 'svg', title: 'Diagonály čtvercové matice (N = 5)', x: UPP.matrixDiagram(), cap: 'Červeně hlavní diagonála (I = J), modře vedlejší (I = N − J + 1), oranžově jejich průsečík (jen u lichého N).' },
      { t: 'grid', head: ['Diagonála', 'Na diagonále', 'Nad diagonálou', 'Pod diagonálou'], rows: [
        ['<b>hlavní</b>', 'I = J', 'I &lt; J', 'I &gt; J'],
        ['<b>vedlejší</b>', 'I = N − J + 1', 'I &lt; N − J + 1', 'I &gt; N − J + 1']
      ] },
      { t: 'tip', x: 'I = řádek, J = sloupec, N = počet řádků (sloupců). Vedlejší diagonála začíná vpravo nahoře: v prvním řádku (I = 1) je J = N, protože N − N + 1 = 1.' }
    ] },
    { title: 'Hierarchie složených datových struktur', blocks: [
      { t: 'p', x: 'Složené struktury je účelné vytvářet na více (i mnoha) hierarchických úrovních a rozklad znázornit <b>stromem</b>. Pro <b>homogenní rozklad</b> (opakování téhož typu) se používá symbol <b>*</b> s uvedeným rozsahem, pro <b>nehomogenní rozklad</b> struktura <b>sekvence</b>; pro <b>výběr z několika možností</b> se užívá symbol <b>O</b>.' },
      { t: 'versus', title: 'Struktura dat předurčuje strukturu programu', cols: [
        { h: 'Homogenní struktury', items: ['<b>pole</b> → cyklus s pevným počtem opakování, přístup přes číslo (index) položky', '<b>soubor</b> → cyklus do nalezení koncové značky (EOF), porovnání aktuální položky s hledanou'] },
        { h: 'Nehomogenní struktury', items: ['tečková notace, sekvence'] }
      ] },
      { t: 'ex', x: '<b>Studijní kruh (cvičení 5):</b> Studijni_kruh → * Student (1 … 25) → Jmeno (string), Prijmeni (string), Hodnoceni → Zapocet (boolean), Zkouska (1..4).<br><code>type Typ_Hodnoceni = record Zapocet: boolean; Zkouska: 1..4; end;</code><br><code>Typ_Student = record Jmeno: string; Prijmeni: string; Hodnoceni: Typ_Hodnoceni; end;</code><br><code>var Studijni_kruh: array[1..25] of Typ_Student;</code><br>Studentovi č. 13 se vloží: <code>Studijni_kruh[13].Jmeno := \'Franta\'; …Prijmeni := \'Splhoun\'; …Hodnoceni.Zapocet := true; …Hodnoceni.Zkouska := 3;</code>' },
      { t: 'ex', x: '<b>Knihovna (cvičení 5):</b> Knihovna → * Kniha (1 … 100) → Autor, Nazev (string), * Exemplar (1 .. 3) → Pujcen (boolean), Kumu, Kdy (string); Cena (real). Druhý exemplář knihy č. 5: <code>Knihovna[5].Autor := \'Rene Pisalek\'; Knihovna[5].Nazev := \'Moje prvni kniha\'; Knihovna[5].Cena := 199.90; Knihovna[5].Exemplar[2].Pujcen := true; …Kdy := \'dnes\'; …Kumu := \'Jirka Studentik\';</code>' },
      { t: 'ex', x: '<b>Přístup (přednáška):</b> <code>Skola.fakulta[tf].student[37].prospech.bakalar.semestr[4].predmet[8].zkouska.termin[3] = 2</code> – deklarace odspodu: <code>TypZkouska { int termin[4]; }</code> (pro [1]–[3]), <code>TypPredmet { bool zapocet; TypZkouska zkouska; }</code>, <code>TypSemestr { TypPredmet predmet[11]; }</code> (pro [1]–[10]).' }
    ] }
  ],
  mistakes: [
    'Zaměnit přiřazení a test rovnosti (<code>=</code> × <code>==</code> v C, <code>:=</code> × <code>=</code> v Pascalu).',
    'Zapomenout, že v C++ se pole indexují <b>od 0</b> (v Pascalu od 1) – <code>int M[21][21]</code> proto stačí pro čísla 1 až 20.',
    'Počítat reálný typ mezi ordinální – nemá jednoznačného následníka.',
    'U pole použít sekvenční procházení a u souboru přímý přístup – přímý přístup má <b>pole</b>, <b>soubor</b> jen postupný.',
    'Zaměnit hlavní diagonálu (I = J) s vedlejší (I = N − J + 1).'
  ],
  qa: [
    { q: 'Co je statická datová struktura a čím se liší od dynamické?', a: 'Statická nemění během programu strukturu ani rozsah; paměť se přidělí před spuštěním a přidělení se nemění. U dynamické se paměť přiděluje až za běhu a může se měnit.' },
    { q: 'Co musíme o datech v paměti vědět?', a: 'Symbolické označení (název proměnné), adresu paměťového místa, obsah (hodnotu) a datový typ (způsob kódování).' },
    { q: 'Jak se kódují jednoduché datové typy?', a: 'Logická hodnota: 0 = nepravda, nenula = pravda; celé číslo: doplňkový kód; reálné číslo: IEEE 754; znak: ASCII, Unicode.' },
    { q: 'Co je ordinální datový typ? Které jednoduché typy jsou ordinální?', a: 'Typ, jehož hodnoty lze očíslovat celými čísly (existuje následník a předchůdce). Ordinální jsou logická hodnota, celé číslo a znak; reálné číslo ne.' },
    { q: 'Rozdělte složené datové struktury.', a: 'Homogenní: s přímým přístupem pole a množina, s postupným přístupem soubor. Nehomogenní: záznam a objekt.' },
    { q: 'Popište datovou strukturu pole a deklaraci v C++.', a: 'Položky stejného typu přístupné přímo přes index; JménoTypu JménoPole[velikost]; indexy od 0 (v Pascalu od 1). Textový řetězec je pole znaků.' },
    { q: 'Čím se liší pole a soubor?', a: 'Pole: přímý přístup přes index, počet prvků známý předem. Soubor: postupné procházení, počet položek proměnný, ukončen značkou EOF.' },
    { q: 'Jak je reprezentována množina? Jaké má množina 1…8 podmnožiny a jak se spočte průnik?', a: 'Bit na prvek bázového typu (1 = přítomen); pro N prvků je 2<sup>N</sup> podmnožin (pro 8 prvků 256). Průnik = AND bitových řetězců, sjednocení = OR; {2,3,5} ∩ {3,5,8} = 01101000 AND 00101001 = 00101000 = {3,5}.' },
    { q: 'Čím se liší záznam a objekt?', a: 'Záznam má položky různých typů (tečková notace). Objekt (třída) k tomu přidává metody – podprogramy, které umí provádět; konkrétní naplnění je instance třídy.' },
    { q: 'Jak se v matici N × N označí hlavní a vedlejší diagonála a prvky nad a pod nimi?', a: 'Hlavní: I = J, nad I &lt; J, pod I &gt; J. Vedlejší: I = N − J + 1, nad I &lt; N − J + 1, pod I &gt; N − J + 1.' },
    { q: 'Jak zapíšeme přístup do hierarchické struktury Studijni_kruh a nastavíme zkoušku studentovi č. 13 na 3?', a: 'Studijni_kruh[13].Hodnoceni.Zkouska := 3; (pole studentů, záznam Hodnoceni, položka Zkouska).' },
    { q: 'Jaký program předurčuje pole a jaký soubor?', a: 'Pole → cyklus s pevným počtem opakování, přístup přes index. Soubor → cyklus do nalezení EOF, porovnání aktuální položky s hledanou.' }
  ]
});
