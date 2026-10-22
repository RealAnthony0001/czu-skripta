registerTopic({
  id: 'dynamicke-datove-struktury', order: 15, icon: '🔗', title: 'Dynamické datové struktury, ukazatele a rekurze', src: 'podklady', lec: [8],
  where: 'Přednáška 8 + Cvičení 5, 6',
  summary: 'Dynamické datové struktury a ukazatele (new, delete, NULL), rekurzivní definice typu, rekurze (pravidla, typy, faktoriál), jednosměrný lineární seznam se všemi operacemi, binární strom a graf – s vyřešenými příklady ze cvičení.',
  vocab: [
    { w: 'Dynamická struktura', x: 'Struktura s proměnným počtem prvků proměnné velikosti; prvky vznikají za běhu a jsou propojeny ukazateli.' },
    { w: 'Ukazatel (pointer)', x: 'Proměnná obsahující adresu hodnoty bázového typu; NULL = nikam neukazuje.' },
    { w: 'new / delete', x: 'Alokace paměti pro hodnotu / uvolnění alokované paměti.' },
    { w: 'Rekurze', x: 'Definice objektu, typu nebo procesu pomocí něj samého; v programu opakované vnořené volání téhož podprogramu.' },
    { w: 'Spojový seznam', x: 'Položky propojené ukazateli do řady; každá nese Info a ukazatel Dalsi na následníka.' },
    { w: 'Strom', x: 'Graf bez cyklů s kořenem; uzly bez synů jsou listy.' },
    { w: 'Binární strom', x: 'Uzel nese Info a dva ukazatele na syny – Levy a Pravy.' }
  ],
  key: [
    '<b>Dynamická struktura:</b> prvky vznikají za běhu, celá struktura je zpřístupněna <b>jediným ukazatelem</b>; definuje se jen typ jednoho prvku.',
    '<b>Ukazatel:</b> <code>int *u = new int;</code> · <code>*u = 5;</code> (hodnota) · <code>u</code> (adresa) · <code>delete u;</code> · <code>NULL</code>. Záznam: <code>(*US).Info</code> ≡ <code>US-&gt;Info</code>.',
    '<b>Rekurze:</b> musí mít <b>konec</b>, v každém kroku <b>zjednodušení</b> a nejdřív se testuje <b>koncová situace</b>.',
    '<b>Seznam:</b> nejjednodušší dynamická struktura; poslední prvek má <code>Dalsi = NULL</code>; hlavní ukazatel <code>Seznam</code> ukazuje na první.',
    '<b>Strom</b> = graf bez cyklů s kořenem; <b>binární strom</b> = Info + Levy + Pravy; <b>graf</b> = seznam uzlů, každý se seznamem hran.'
  ],
  sections: [
    { title: 'Dynamické datové struktury: výhody a nevýhody', blocks: [
      { t: 'p', x: 'Dynamické struktury slouží k reprezentaci <b>proměnlivého počtu prvků proměnlivé velikosti</b>. Může se měnit velikost paměti, kterou struktura potřebuje, i hodnota adresy přidělené proměnné. Skládají se z <b>dynamicky alokovaných prvků navzájem propojených ukazateli</b>; definuje se pouze datový typ jednoho prvku a celá struktura je obvykle reprezentována jedním ukazatelem, na který jsou „pověšeny“ všechny provázané prvky.' },
      { t: 'versus', cols: [
        { h: 'Výhody', items: ['velká pružnost – vznikají za běhu a mění velikost podle potřeby', 'snadná změna vnitřního uspořádání prvků', 'věrně postihnou i složité struktury, které by šly staticky vytvořit jen velmi složitě nebo vůbec'] },
        { h: 'Nevýhody', items: ['méně pohodlný přístup k prvkům – lze vstoupit jen jediným hlavním ukazatelem', 'přístupové operace je nutné zvlášť programovat', 'paměťová režie na propojovací ukazatele'] }
      ] }
    ] },
    { title: 'Datový typ ukazatel', blocks: [
      { t: 'def', term: 'Ukazatel (pointer)', x: 'Vždy ukazuje na jiný datový typ (<b>bázový typ</b>) a <b>obsahuje adresu</b>, na které je uložena hodnota bázového typu. Může obsahovat i speciální hodnotu <b>NULL</b> = nikam neukazuje. Používá se u <b>dynamicky alokovaných proměnných</b>: je třeba vytvořit prostor v paměti pro hodnotu (<b>new</b>) a také ho uvolnit (<b>delete</b>).' },
      { t: 'svg', title: 'Ukazatel U na hodnotu typu int', x: UPP.pointerDiagram(), cap: 'U → 102 → −33, tedy U je adresa (102) a *U je hodnota na této adrese (−33).' },
      { t: 'grid', head: ['C++', 'Význam'], rows: [
        ['<code>int * ukazatel</code>', 'deklarace: ukazatel na hodnotu typu celé číslo'],
        ['<code>ukazatel = new int</code>', 'alokace paměti pro hodnotu typu celé číslo'],
        ['<code>* ukazatel = …</code>', 'přiřazení hodnoty na místo, kam ukazuje'],
        ['<code>delete ukazatel</code>', 'uvolnění alokované paměti']
      ] },
      { t: 'ex', x: '<b>Pascal (cvičení):</b> <code>var U, V: ^integer;</code> → <code>new(U); new(V); U^ := −33; V^ := 57; … dispose(U); dispose(V);</code> (přidělení a uvolnění míst, uložení hodnot na adresy U a V).' }
    ] },
    { title: 'Operace s ukazateli – příklad ze cvičení', blocks: [
      { t: 'p', x: 'Proměnné U a V jsou ukazatele na integer, <code>*U = −33</code>, <code>*V = 57</code>. Co znamenají následující operace?' },
      { t: 'table', head: ['Operace', 'Význam', 'Výsledek (U → −33, V → 57)'], rows: [
        ['<code>U^ := V^</code> (C++ <code>*u = *v</code>)', 'obsah místa, kam ukazuje U (−33), se nahradí <b>obsahem</b> místa, kam ukazuje V (57)', 'ukazatele ukazují dál na <b>různá místa</b>, ale obě mají obsah 57'],
        ['<code>U := V</code> (C++ <code>u = v</code>)', 'adresa v U se nahradí <b>adresou</b> z V', 'oba ukazatele ukazují na <b>totéž místo</b> v paměti s obsahem 57'],
        ['<code>U^ := V</code> (C++ <code>*u = v</code>)', 'na místo typu integer se přiřazuje ukazatel', '<b>nelze</b> – dva odlišné datové typy (U^ je integer, V je ukazatel)']
      ] },
      { t: 'ex', x: '<b>Program odkazy.cpp:</b> <code>int *u = new int(1); int *v = new int(2); *u = −33; *v = 57;</code> Výpis: „Zacatek u −33 v 57“.<br><code>*v = *u;</code> → u −33, v <b>−33</b> (hodnoty se zkopírovaly, ukazatele ukazují dál na různé buňky).<br><code>v = u;</code> → u −33, v −33 (nyní ukazují na <b>stejnou</b> buňku; změna přes <code>*v</code> se projeví i v <code>*u</code>).<br><code>*v = u;</code> je v programu zakomentováno – C++ ho nepřeloží (int × int*).' },
      { t: 'tip', x: '(Doplněno) Po přiřazení <code>v = u</code> už nikdo neukazuje na původní buňku, kterou vytvořilo <code>new int(2)</code> – zůstala alokovaná a nedostupná (únik paměti). Před přepsáním ukazatele je proto vhodné paměť uvolnit příkazem <code>delete</code>.' }
    ] },
    { title: 'Dynamická struktura: ukazatel na záznam', blocks: [
      { t: 'p', x: 'Proměnná <code>US</code> je ukazatel na záznam typu <code>Typ_S</code>:' },
      { t: 'ex', x: '<code>struct Typ_S { int Info; char Znak; };</code><br><code>Typ_S *US; US = new Typ_S;</code><br>Přístup k položkám: <code>(*US).Info</code> je ekvivalentní <code>US-&gt;Info</code>, <code>(*US).Znak</code> ≡ <code>US-&gt;Znak</code>.' },
      { t: 'def', term: 'Rozšíření o ukazatel Dalsi – rekurzivní definice typu', x: 'Přidáním položky <code>Typ_S *Dalsi;</code> do definice <code>Typ_S</code> vznikne <b>rekurzivní definice typu</b> – položka datového typu odkazuje na definici téhož typu, obvykle formou ukazatele. Pak lze řetězit: <code>US = new Typ_S; US-&gt;Dalsi = new Typ_S;</code> – a vzniká seznam.' }
    ] },
    { title: 'Rekurze', blocks: [
      { t: 'def', term: 'Rekurze', x: 'Definice objektu, datového typu nebo procesu <b>pomocí jeho samého</b>. V informatice opakované vnořené volání téhož programu nebo podprogramu – v jednom okamžiku je <b>rozpracován více než jeden exemplář</b> téhož podprogramu.' },
      { t: 'versus', title: 'Podle způsobu volání', cols: [
        { h: 'Přímá rekurze', items: ['podprogram A volá <b>sám sebe</b>', 'jazyk musí umožnit volat tentýž podprogram ještě před jeho dokončením'] },
        { h: 'Nepřímá (vzájemná) rekurze', items: ['účastní se aspoň dva podprogramy', 'A volá B a B zpětně volá A (před dokončením prvního volání A)'] }
      ] },
      { t: 'versus', title: 'Podle počtu rekurzivních volání', cols: [
        { h: 'Lineární rekurze', items: ['podprogram volá sám sebe <b>jen jednou</b>', 'vzniká lineární posloupnost volaných podprogramů'] },
        { h: 'Stromová rekurze', items: ['podprogram volá sám sebe <b>víckrát</b> (n krát) během jednoho zpracování', 'vzniká n-ární strom volaných podprogramů'] }
      ] },
      { t: 'ol', items: [
        'Musí být definován <b>konec</b> – situace, kdy je problém natolik zjednodušen, že lze stanovit jeho řešení.',
        'V každém kroku by mělo dojít ke <b>zjednodušení problému</b> (nebo alespoň zůstat na stejné složitosti).',
        '<b>Nejprve prověřit koncovou situaci</b>, rekurzivní krok až po testu – při opačném pořadí by se vždy uplatnil rekurzivní krok a konec by se nevyhodnotil → <b>nekonečný cyklus</b>.'
      ] },
      { t: 'versus', cols: [
        { h: 'Výhody', items: ['programování „shora dolů“, postupné zjednodušování problému', 'obyčejně jednodušší a přehlednější zápis', 'často nižší operační složitost oproti iterativnímu řešení: lineární (n) → logaritmická (log n), kvadratická (n²) → linearitmická (n · log n)'] },
        { h: 'Nevýhody', items: ['vícenásobné zbytečné vyhodnocování argumentů funkcí – lehce zvyšuje operační složitost', 'pro každou hladinu rekurze se zakládají nové exempláře všech datových objektů – zvyšuje prostorovou složitost'] }
      ] }
    ] },
    { title: 'Příklad: faktoriál a rekurzivní programy ze cvičení', blocks: [
      { t: 'p', x: 'Faktoriál: 0! = 1; n! = n · (n − 1) · … · 2 · 1 pro n &gt; 0, rekurzivně <b>n! = n · (n − 1)!</b>.' },
      { t: 'grid', head: ['Iterativní', 'Rekurzivní'], rows: [
        ['<code>long I_Faktorial(int N) {<br>&nbsp;&nbsp;long Fakt = 1;<br>&nbsp;&nbsp;for (int I = 1; I &lt;= N; I++)<br>&nbsp;&nbsp;&nbsp;&nbsp;{ Fakt = Fakt * I; }<br>&nbsp;&nbsp;return Fakt;<br>}</code>', '<code>long R_Faktorial(int N) {<br>&nbsp;&nbsp;long Fakt;<br>&nbsp;&nbsp;if (N == 0) Fakt = 1;<br>&nbsp;&nbsp;else Fakt = N * R_Faktorial(N − 1);<br>&nbsp;&nbsp;return Fakt;<br>}</code>']
      ] },
      { t: 'ex', x: '<b>R_Faktorial(4):</b> 4 · R(3) = 4 · 3 · R(2) = 4 · 3 · 2 · R(1) = 4 · 3 · 2 · 1 · R(0), R(0) = 1 (konec) → návrat zpět: 1, 1, 2, 6, <b>24</b>. Hodnoty 0! … 5!: 1, 1, 2, 6, 24, 120.' },
      { t: 'p', x: '<b>Co vypíšou programy?</b> Funkce <code>Znak()</code> načte znak Z; pokud není „*“, provede popsané akce. Uživatel zadá postupně A, B, C, *:' },
      { t: 'grid', head: ['Pořadí v těle', 'Kód', 'Výpis'], rows: [
        ['<b>výpis před rekurzí</b>', 'if (Z != \'*\') { cout &lt;&lt; Z &lt;&lt; endl; Znak(); }', 'A, B, C – znaky ve <b>stejném pořadí</b> jako zadané (každý na novém řádku); „*“ se nevypíše'],
        ['<b>výpis po rekurzi, uvnitř if</b>', 'if (Z != \'*\') { Znak(); cout &lt;&lt; Z &lt;&lt; " "; }', 'C B A – v <b>opačném pořadí</b>; „*“ se nevypíše'],
        ['<b>výpis po rekurzi, mimo if</b>', 'if (Z != \'*\') { Znak(); } cout &lt;&lt; Z &lt;&lt; " ";', '* C B A – opačně, včetně ukončujícího „*“ na začátku']
      ] },
      { t: 'tip', x: 'Výpis <b>před</b> rekurzivním voláním zachová pořadí, výpis <b>po</b> něm ho obrátí – znaky se vypisují při návratu z hloubky (poslední volání skončí jako první). Právě tak funguje zásobník.' }
    ] },
    { title: 'Jednosměrný lineární seznam', blocks: [
      { t: 'p', x: 'Nejjednodušší dynamická datová struktura: <b>skupina položek propojených ukazateli do řady</b>. Každá položka nese vlastní informaci (<code>Info</code>) a ukazatel <code>Dalsi</code> na následníka. Celý seznam zpřístupňuje hlavní ukazatel <code>Seznam</code> na první položku; poslední má <code>Dalsi = NULL</code>. Může být definován i aktuální prvek, ukazatel <code>Aktual</code>.' },
      { t: 'svg', title: 'Seznam a vložení prvku za aktuální', x: UPP.listDiagram(), cap: 'Pořadí kroků je důležité: nejdřív Novy→Dalsi = Aktual→Dalsi (1), teprve potom Aktual→Dalsi = Novy (2) – jinak se ztratí zbytek seznamu.' },
      { t: 'ex', x: '<code>struct Polozka { InfoTyp Info; Polozka * Dalsi; };</code> <code>Polozka * Seznam; Polozka * Aktual;</code> Prázdný seznam: <code>Seznam = NULL;</code>' },
      { t: 'table', head: ['Operace', 'Algoritmus (C++ / pseudokód)'], rows: [
        ['<b>vytvoření nového prvku</b>', '<code>Novy = new Typ_prvku;</code> <code>Novy-&gt;Info = hodnota;</code> <code>Novy-&gt;Dalsi = NULL;</code>'],
        ['<b>vložení na začátek</b>', '<code>Novy-&gt;Dalsi = Seznam;</code> <code>Seznam = Novy;</code>'],
        ['<b>vložení za aktuální</b>', '<code>Novy-&gt;Dalsi = Aktual-&gt;Dalsi;</code> <code>Aktual-&gt;Dalsi = Novy;</code>'],
        ['<b>vložení před aktuální</b>', '<code>PredAkt = Seznam;</code> dokud <code>PredAkt-&gt;Dalsi != Aktual</code>: <code>PredAkt = PredAkt-&gt;Dalsi;</code> pak <code>Novy-&gt;Dalsi = PredAkt-&gt;Dalsi;</code> <code>PredAkt-&gt;Dalsi = Novy;</code>'],
        ['<b>vyřazení na začátku</b>', '<code>Vyradit = Seznam;</code> <code>Seznam = Seznam-&gt;Dalsi;</code> <code>delete Vyradit;</code>'],
        ['<b>vyřazení aktuálního</b>', '<code>Pom = Seznam;</code> dokud <code>Pom-&gt;Dalsi != Aktual</code>: <code>Pom = Pom-&gt;Dalsi;</code> pak <code>Pom-&gt;Dalsi = Aktual-&gt;Dalsi;</code> <code>Pom = Aktual;</code> <code>Aktual = Aktual-&gt;Dalsi;</code> uvolni Pom z paměti'],
        ['<b>vypsání</b> (iterativně)', '<code>Pom = Seznam;</code> dokud <code>Pom != NULL</code>: piš <code>Pom-&gt;Info</code>; <code>Pom = Pom-&gt;Dalsi;</code>'],
        ['<b>vypsání</b> (rekurzivně)', '<code>Vypis(Param)</code>: je-li <code>Param != NULL</code> → piš <code>Param-&gt;Info</code>; <code>Vypis(Param-&gt;Dalsi)</code>. První volání <code>Vypis(Seznam)</code>.'],
        ['<b>hledání hodnoty</b> (iterativně)', '<code>Pom = Seznam;</code> dokud <code>Pom != NULL &amp;&amp; Pom-&gt;Info != Hodnota</code>: <code>Pom = Pom-&gt;Dalsi;</code> pak Pom ukazuje na hledaný prvek (nebo NULL, nebyl-li nalezen)'],
        ['<b>hledání hodnoty</b> (rekurzivně)', '<code>Hledej(Param)</code>: je-li <code>Param != NULL &amp;&amp; Param-&gt;Info != Hodnota</code> → <code>Hledej(Param-&gt;Dalsi)</code>, jinak piš Param. Volání <code>Hledej(Seznam)</code>.'],
        ['<b>zrušení seznamu</b> (iterativně)', 'dokud <code>Seznam != NULL</code>: <code>Pom = Seznam;</code> <code>Seznam = Seznam-&gt;Dalsi;</code> uvolni Pom'],
        ['<b>zrušení seznamu</b> (rekurzivně)', '<code>Zrus(Param)</code>: je-li <code>Param-&gt;Dalsi != NULL</code> → <code>Zrus(Param-&gt;Dalsi)</code>; pak uvolni Param. Volání <code>Zrus(Seznam)</code>.']
      ] },
      { t: 'tip', x: 'Vložení / vyřazení <b>před</b> aktuální prvek a vyřazení aktuálního vyžaduje najít předchůdce – jednosměrný seznam nemá odkaz zpět, proto se prochází od začátku (<code>Seznam</code>). Je-li Aktual první prvek, použije se místo toho vložení / vyřazení na začátku.' }
    ] },
    { title: 'Strom a binární strom', blocks: [
      { t: 'def', term: 'Strom', x: 'Strom T je konečná množina jednoho nebo více prvků (uzlů), z nichž <b>jeden je označen jako kořen r (root)</b> a zbývající uzly jsou rozděleny do k ≥ 0 disjunktních podmnožin T<sub>1</sub>, …, T<sub>k</sub>, které jsou také stromy a jejichž kořeny jsou následníky kořene r. Uzly bez synů jsou <b>listy</b>; cesta od kořene k uzlu je <b>větev</b>. Strom je graf, ve kterém existuje <b>jediná cesta z kořene do kteréhokoli uzlu</b> (neobsahuje cykly).' },
      { t: 'def', term: 'Binární strom (dynamická struktura)', x: 'Skládá se z <b>uzlů a hran</b> (hrany jsou ukazatele). Každý uzel nese kromě <code>Info</code> dva ukazatele na své syny – <code>Levy</code> a <code>Pravy</code>. Uzel, kterým se do stromu vstupuje, je <b>Kořen</b> – nemá předchůdce.' },
      { t: 'ex', x: '<code>struct Uzel { TypInfo Info; Uzel * Levy; Uzel * Pravy; };</code> <code>Uzel * Strom;</code> – chybějící syn = <code>NULL</code> (listy mají oba ukazatele NULL).' }
    ] },
    { title: 'Graf', blocks: [
      { t: 'def', term: 'Graf', x: 'Skládá se z konečné množiny <b>uzlů (U)</b> a konečné množiny <b>hran (H)</b>; hrana je spojnicí dvou uzlů.' },
      { t: 'table', head: ['Pojem', 'Význam'], rows: [
        ['neorientovaná hrana', 'spojuje <b>neuspořádanou</b> dvojici uzlů'],
        ['orientovaná hrana', 'spojuje <b>uspořádanou</b> dvojici – rozlišujeme počáteční a koncový uzel'],
        ['neorientovaný / orientovaný graf', 'obsahuje pouze neorientované / pouze orientované hrany'],
        ['souvislý graf', 'pro každé dva uzly existuje konečná množina hran, které je spojují'],
        ['smyčka (cyklus)', 'spojnice (jedna nebo více hran), která spojuje tentýž uzel grafu']
      ] },
      { t: 'p', x: '<b>Graf jako dynamická struktura:</b> uzly a hrany jsou reprezentovány ukazateli. Každý uzel nese <code>Info</code> a ukazatele na jeden nebo více jiných uzlů (hrany). Graf je reprezentován <b>ukazatelem na začátek seznamu uzlů</b>; u orientovaného grafu se do seznamu hran uzlu U<sub>i</sub> zařazují jen hrany, pro které je U<sub>i</sub> počátečním uzlem; u ohodnoceného grafu nese každá hrana i ohodnocení.' },
      { t: 'ex', x: '<code>struct TUzel { InfoTyp Info; THrana * Hrana; TUzel * DalsiU; };</code><br><code>struct THrana { HodTyp Hod; TUzel * Uzel; THrana * DalsiH; };</code> <code>TUzel * Graf;</code> – uzly tvoří seznam (<code>DalsiU</code>), každý uzel má seznam svých hran (<code>Hrana</code>, <code>DalsiH</code>), hrana ukazuje na koncový uzel (<code>Uzel</code>) a nese ohodnocení (<code>Hod</code>).' }
    ] }
  ],
  mistakes: [
    'Zaměnit <code>*V = *U</code> (kopie <b>hodnoty</b>) a <code>V = U</code> (kopie <b>adresy</b> – oba ukazatele pak ukazují na totéž místo).',
    'Vložit prvek za aktuální v opačném pořadí kroků (<code>Aktual-&gt;Dalsi = Novy</code> jako první) – zbytek seznamu se ztratí.',
    'Rekurzi bez koncové podmínky nebo s testem koncové situace až po rekurzivním kroku → nekonečné volání.',
    'Zapomenout po vyřazení prvku uvolnit paměť (<code>delete</code>) nebo použít ukazatel po uvolnění.',
    'Zaměnit lineární a stromovou rekurzi – rozhoduje počet rekurzivních volání v jednom průchodu (1 × n).'
  ],
  qa: [
    { q: 'Jaké jsou výhody a nevýhody dynamických datových struktur?', a: 'Výhody: pružnost (vznikají za běhu, mění velikost), snadná změna uspořádání, vystihnou i složité struktury. Nevýhody: přístup jen jediným ukazatelem, nutnost programovat přístupové operace, paměťová režie na ukazatele.' },
    { q: 'Co je ukazatel a jak se s ním pracuje v C++?', a: 'Proměnná s adresou hodnoty bázového typu (NULL = nikam neukazuje). int *u; u = new int; *u = 5; delete u; – new vytvoří prostor, * přistupuje k hodnotě, delete paměť uvolní.' },
    { q: 'U → 102 → −33. Co je U a co *U?', a: 'U je ukazatel, jehož obsah (adresa) je 102; *U je hodnota na této adrese, tedy −33.' },
    { q: 'Jaký je rozdíl mezi *V = *U a V = U?', a: '*V = *U zkopíruje hodnotu (ukazatele ukazují na různá místa se stejným obsahem). V = U zkopíruje adresu – oba ukazatele ukazují na totéž místo.' },
    { q: 'Proč nelze zapsat *V = U (U, V ukazatele na int)?', a: 'Pracuje se se dvěma odlišnými datovými typy: *V je typu int a U je ukazatel.' },
    { q: 'Jak se přistupuje k položce záznamu přes ukazatel?', a: '(*US).Info je totéž co US->Info.' },
    { q: 'Co je rekurze a jaká pravidla musí splňovat?', a: 'Definice pomocí sebe sama / vnořené volání téhož podprogramu. Musí mít definovaný konec, v každém kroku zjednodušit problém a nejprve testovat koncovou situaci.' },
    { q: 'Jaké jsou typy rekurze?', a: 'Přímá (A volá A) a nepřímá (A volá B, B volá A); lineární (jedno rekurzivní volání) a stromová (víc volání – n-ární strom volání).' },
    { q: 'Napište rekurzivní výpočet faktoriálu a spočtěte 4!.', a: 'N == 0 → 1, jinak N · R_Faktorial(N − 1). 4! = 4 · 3 · 2 · 1 · 1 = 24.' },
    { q: 'Co vypíše funkce, která při Z ≠ „*“ nejdřív zavolá sama sebe a pak vypíše Z (vstup A, B, C, *)?', a: 'C B A – znaky v opačném pořadí; při vypsání před rekurzivním voláním by byl výpis A, B, C.' },
    { q: 'Popište jednosměrný lineární seznam a deklaraci.', a: 'Položky propojené ukazateli; struct Polozka { InfoTyp Info; Polozka * Dalsi; }; hlavní ukazatel Seznam na první, poslední má Dalsi = NULL, ukazatel Aktual na aktuální prvek.' },
    { q: 'Jak vložíte nový prvek Novy do seznamu na začátek a za aktuální prvek?', a: 'Na začátek: Novy->Dalsi = Seznam; Seznam = Novy. Za aktuální: Novy->Dalsi = Aktual->Dalsi; Aktual->Dalsi = Novy (v tomto pořadí).' },
    { q: 'Jak se vyřadí první prvek seznamu?', a: 'Vyradit = Seznam; Seznam = Seznam->Dalsi; delete Vyradit;' },
    { q: 'Co je strom a binární strom? Jak se deklaruje uzel?', a: 'Strom: graf bez cyklů s kořenem, uzly bez synů jsou listy. Binární strom: každý uzel má Info a dva ukazatele – struct Uzel { TypInfo Info; Uzel * Levy; Uzel * Pravy; };' },
    { q: 'Co je graf a jak se reprezentuje dynamicky?', a: 'Množina uzlů a hran (orientovaných či ne). Seznam uzlů (TUzel s Info, Hrana, DalsiU), u každého seznam hran (THrana s Hod, Uzel, DalsiH).' }
  ]
});
