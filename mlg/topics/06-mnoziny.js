registerTopic({
  id: 'mnoziny', order: 6, icon: '🫧', title: 'Množiny, množinové operace a Vennovy diagramy', src: 'podklady', lec: [4],
  where: 'Přednáška Množiny (Čermák, Hora) + Cvičení 3 (úlohy 1–4)',
  summary: 'Naivní teorie množin: co je množina a jak ji zapsat, podmnožina a rovnost, průnik, sjednocení, rozdíl, doplněk, potenční množina a slovní úlohy řešené Vennovým diagramem.',
  vocab: [
    { w: 'množina', x: 'souhrn přesně specifikovaných a navzájem rozlišitelných objektů – <b>prvků</b>; x ∈ M = x leží v M, x ∉ M = neleží' },
    { w: 'universum U', x: 'množina všech prvků, o kterých v dané úloze mluvíme; doplněk se bere vzhledem k ní' },
    { w: 'podmnožina A ⊆ B', x: 'každý prvek A leží i v B (množinová inkluze)' },
    { w: 'potenční množina P(A)', x: 'množina <b>všech podmnožin</b> množiny A (včetně ∅ a A samotné)' },
    { w: 'disjunktní množiny', x: 'množiny s prázdným průnikem' },
    { w: 'Vennův diagram', x: 'obrázek množin jako uzavřených křivek v obdélníku U; každá oblast = jedna kombinace „patří / nepatří“' }
  ],
  key: [
    'Prvky množiny <b>nemají pořadí</b> ani násobnost: {a, b, a} = {b, a}. Množina je určena jen svými prvky.',
    '<b>A ∩ B</b> = v A <b>a</b> v B · <b>A ∪ B</b> = v A <b>nebo</b> v B · <b>A ∖ B</b> = v A a ne v B · <b>A′</b> = v U a ne v A.',
    'Má-li A n prvků, má P(A) <b>2ⁿ</b> prvků.',
    'Pozor na úroveň: Real ∈ Liga, ale Ronaldo ∉ Liga – prvky ligy jsou týmy, ne hráči.',
    'Vennovy úlohy se řeší <b>zevnitř ven</b>: nejdřív průnik všech tří, pak dvojice, pak „jen jedna“, nakonec „žádná“.'
  ],
  sections: [
    { title: 'Co je množina', blocks: [
      { t: 'def', term: 'Množina (pseudodefinice)', x: 'souhrn přesně specifikovaných a navzájem rozlišitelných objektů, kterým říkáme <b>prvky</b>. Zápis x ∈ M znamená, že x leží v M; x ∉ M, že neleží.' },
      { t: 'p', x: 'Teorie množin je samostatná matematická disciplína; v předmětu zůstáváme u tzv. <b>naivní teorie množin</b>, která stačí pro praktickou práci. Množiny se hodí všude, kde pracujeme se soubory objektů: dotaz do databáze vybírá množinu záznamů, datový typ je množina hodnot proměnné, jev v pravděpodobnosti je množina výsledků.' },
      { t: 'ul', items: [
        '<b>Výčtem prvků:</b> A = {1, 2, 3, 4, 5}.',
        '<b>Vlastností prvků:</b> B = {x ∈ ℕ | x je sudé} – „všechna x z ℕ taková, že…“.',
        'Prvky <b>nemají pořadí</b> a nemají násobnost – prvek v množině buď je, nebo není.',
        'Množina je <b>jednoznačně určena svými prvky</b>: A = B, právě když mají stejné prvky.',
        'Množiny mohou být <b>konečné</b> i <b>nekonečné</b>.'
      ] },
      { t: 'ex', x: 'P = {a, b, c, d, e, f}, B = {krtek, lama, emu, beruška, lemur, krajta}.<br>S = {x ∈ P | x je samohláska} = <b>{a, e}</b>; V = {x ∈ B | x snáší vajíčka} = <b>{emu, beruška, krajta}</b>.' },
      { t: 'grid', head: ['Zápis', 'Čteme'], rows: [
        ['∀x ∈ A', 'pro každé x z množiny A'],
        ['∃x ∈ A', 'existuje x z množiny A'],
        ['∃!x ∈ A', 'existuje <b>právě jedno</b> x z množiny A'],
        ['∅ nebo {}', 'prázdná množina – neobsahuje žádný prvek (lze ji zapsat i jako {x | x ≠ x})']
      ] }
    ] },
    { title: 'Množinové vztahy a operace', blocks: [
      { t: 'def', term: 'Podmnožina, rovnost, vlastní podmnožina', x: '<b>A ⊆ B</b> ⇔ (∀x ∈ U)(x ∈ A ⇒ x ∈ B); <b>A = B</b> ⇔ (∀x ∈ U)(x ∈ A ⇔ x ∈ B); <b>A ⊊ B</b> ⇔ (A ⊆ B) ∧ (A ≠ B). Vztah ⊆ se nazývá množinová inkluze.' },
      { t: 'grid', head: ['Operace', 'Definice', 'Slovy'], rows: [
        ['průnik A ∩ B', '{x ∈ U | x ∈ A ∧ x ∈ B}', 'prvky, které jsou v obou'],
        ['sjednocení A ∪ B', '{x ∈ U | x ∈ A ∨ x ∈ B}', 'prvky aspoň v jedné z nich'],
        ['rozdíl A ∖ B', '{x ∈ U | x ∈ A ∧ x ∉ B}', 'prvky A, které nejsou v B'],
        ['doplněk A′', '{x ∈ U | x ∉ A}', 'vše z universa kromě A'],
        ['doplněk A′<sub>B</sub> (pro A ⊆ B)', '{x ∈ U | x ∈ B ∧ x ∉ A}', 'doplněk jen „uvnitř“ B'],
        ['kartézský součin A × B', '{(a, b) | a ∈ A ∧ b ∈ B}', 'všechny uspořádané dvojice'],
        ['potenční množina P(A)', '{X | X ⊆ A}', 'všechny podmnožiny A']
      ] },
      { t: 'svg', title: 'Čtyři základní operace ve Vennově diagramu', x: MLG.mnozinoveOperace(), cap: 'Vybarvená oblast je výsledek operace; obdélník je universum U.' },
      { t: 'ex', x: '<b>Příklad z přednášky:</b> A = {k, o, s, t, e, l}, B = {s, t, á, n, e, k}.<br>A ∩ B = <b>{k, s, t, e}</b>, A ∪ B = <b>{k, o, s, t, e, l, á, n}</b>, A ∖ B = <b>{o, l}</b>, B ∖ A = <b>{á, n}</b>.' },
      { t: 'ex', x: '<b>Doplněk a potenční množina:</b> C = {k, a, l}, D = {v, l, a, k, v, e, d, o, u, c, í} (písmeno v je v D jen jednou – prvky se neopakují).<br>C′<sub>D</sub> = D ∖ C = <b>{v, e, d, o, u, c, í}</b>;<br>P(C) = <b>{∅, {k}, {a}, {l}, {k, a}, {k, l}, {a, l}, {k, a, l}}</b> – 2³ = 8 podmnožin.' },
      { t: 'tip', x: 'Potenční množinu většího A sestavíš z menší: P({1, 2, 3, 4}) = všechny prvky P({1, 2, 3}) a k tomu tytéž množiny s přidanou 4. Proto se počet podmnožin s každým novým prvkem <b>zdvojnásobí</b> (2ⁿ).' },
      { t: 'warn', x: '<b>Množiny množin:</b> prvkem množiny může být zase množina. Liga = {Barcelona, Real} = {{Xavi, Messi, …}, {Ronaldo, …}}. Platí Real ∈ Liga, ale <b>Ronaldo ∉ Liga</b>. Podobně {1, 2} ∈ {{1, 2}, {3}}, ale 1 ∉ {{1, 2}, {3}}.' },
      { t: 'p', x: 'Uspořádaná dvojice (a, b) není prvkem U, ale universa U × U. Na rozdíl od množiny u ní <b>záleží na pořadí</b>: obecně (a, b) ≠ (b, a).' }
    ] },
    { title: 'Souvislost s výrokovou logikou', blocks: [
      { t: 'p', x: 'V definicích operací se objevují logické spojky – a není to náhoda. Místo pravdivosti výroku se ptáme na <b>příslušnost prvku</b> do množiny, takže mnohé logické zákony platí ve stejném duchu i pro množiny.' },
      { t: 'grid', head: ['Logika', 'Množiny', 'Název'], rows: [
        ['A ∧ B', 'A ∩ B', 'průnik'],
        ['A ∨ B', 'A ∪ B', 'sjednocení'],
        ['¬A', 'A′', 'doplněk'],
        ['A ⇒ B', 'A ⊆ B', 'podmnožina'],
        ['A ⇔ B', 'A = B', 'rovnost']
      ] },
      { t: 'tip', x: 'Například De Morganův zákon ¬(A ∨ B) ≡ ¬A ∧ ¬B má množinovou podobu <b>(A ∪ B)′ = A′ ∩ B′</b> – co není v žádné z množin, leží v doplňku obou.' }
    ] },
    { title: 'Vennovy diagramy a slovní úlohy', blocks: [
      { t: 'p', x: 'Ve Vennově diagramu odpovídá každá oblast jedné kombinaci „patří / nepatří“ do jednotlivých množin. Oblasti se nepřekrývají (jsou disjunktní), proto se počty prvků v nich dají <b>sčítat</b>. Pro tři množiny stačí tři kružnice (8 oblastí včetně vnějšku), pro čtyři už kružnice nestačí, ale všech 16 oblastí sestrojit jde.' },
      { t: 'flow', title: 'Postup u slovní úlohy', steps: [
        { h: 'Nakresli tři kružnice v obdélníku', x: 'pojmenuj je podle úlohy, obdélník = všichni' },
        { h: 'Rozliš „i“ a „jen“', x: '„hada i potkana“ = celý průnik dvou kružnic (včetně trojprůniku); „pouze polévku“ = jediná oblast' },
        { h: 'Vyplňuj zevnitř ven', x: 'trojprůnik → dvojice bez třetí → jen jedna → mimo všechny; neznámé označ x a sestav rovnici' },
        { h: 'Zkontroluj součet', x: 'všech 8 oblastí musí dát celkový počet' }
      ] },
      { t: 'svg', title: 'Restaurace u silnice E31 (Cvičení 3, úloha 2)', x: MLG.venn3(), cap: 'Výsledek úlohy: počty turistů v jednotlivých oblastech; dohromady 28.' },
      { t: 'ex', x: '<b>Restaurace (28 turistů):</b> hlavní jídlo 22; polévka + jídlo bez zákusku <b>4</b>; jen jednu věc 9; jídlo bez zákusku 9; zákusek bez polévky 4; polévka + zákusek bez jídla <b>0</b>; jen polévka <b>3</b>.<br>Jídlo bez zákusku = jen jídlo + (polévka a jídlo) ⇒ jen jídlo = 9 − 4 = <b>5</b>. Jen jedna věc: 3 + 5 + jen zákusek = 9 ⇒ jen zákusek = <b>1</b>. Zákusek bez polévky: 1 + (jídlo a zákusek) = 4 ⇒ <b>3</b>. Hlavní jídlo: 5 + 4 + 3 + vše = 22 ⇒ vše = <b>10</b>.<br>(a) polévka = 3 + 4 + 0 + 10 = <b>17</b>, (b) zákusek = 1 + 0 + 3 + 10 = <b>14</b>, (c) nic = 28 − 26 = <b>2</b>.' },
      { t: 'ex', x: '<b>Sportovní soustředění:</b> fotbal 21, plavání 15, posilovna 8, všechny tři 2, plavání + fotbal 3, plavání + posilovna 6 (počty včetně trojice); vyhranění fotbalisté o 14 víc než posilující neplavající fotbalisté.<br>Jen plavání + fotbal = 1, jen plavání + posilovna = 4. Označ x = fotbal + posilovna bez plavání. Jen fotbal = 21 − 1 − 2 − x = 18 − x a zároveň 14 + x ⇒ <b>x = 2</b>, jen fotbal 16. Jen plavání = 15 − 1 − 4 − 2 = 8, jen posilovna = 8 − 2 − 4 − 2 = 0.<br>Celkem 16 + 8 + 0 + 1 + 4 + 2 + 2 = <b>33</b> studentů, více než jeden sport <b>9</b>.' },
      { t: 'ex', x: '<b>Hypermarket (38 zákazníků):</b> pivo 11, jogurty 24, rohlíky 29; dieta (ani pivo, ani rohlíky) = jen jogurty <b>6</b>; jediný výrobek má 15; (pivo ∧ rohlíky) = 2 · (pivo ∧ jogurty).<br>Ve dvou či třech kategoriích je 38 − 15 = 23 lidí. Z jogurtů: 6 + (jen P+J) + (jen J+R) + vše = 24. Odtud jen P+R = 23 − 18 = 5. Z podmínky 5 + vše = 2 · (jen P+J + vše) a z počtů piva a rohlíků vyjde vše = 3, <b>jen pivo + jogurty = 1</b>.' },
      { t: 'ex', x: '<b>Octavia (přednáška):</b> kombi i sedan po 50 %; klimatizace 80 %, CD 72 %; kombi s klimou i CD 20 %, sedan s klimou 45 %, kombi bez CD 20 %, sedan s CD bez klimy 0 %.<br>Kombi: 20 + (klima bez CD) + (CD bez klimy) + (nic) = 50; kombi bez CD: (klima bez CD) + (nic) = 20 ⇒ kombi s CD bez klimy = 10. Klimatizace: 20 + (kombi klima bez CD) + 45 = 80 ⇒ 15, takže kombi bez obojího 5. Sedan: 45 + 0 + (nic) = 50 ⇒ <b>sedany bez CD i klimy = 5 %</b>; <b>klimatizaci má 45/50 = 90 % sedanů</b>. Kolik aut se vyrobilo, ze zadání <b>určit nelze</b> – všechny údaje jsou v procentech.' },
      { t: 'ex', x: '<b>Zvířata (3. B, 30 žáků):</b> had + potkan 7, had + pavouk 5, potkan + pavouk 8 (včetně těch, kdo mají všechna tři), aspoň dvě zvířata 14, žádné 4.<br>Ve třech dvojicích se trojice započítá třikrát: (7 + 5 + 8) − 2t = 14 ⇒ <b>t = 3</b> žáci mají všechna tři. Právě jedno zvíře: 30 − 4 − 14 = <b>12</b>. Kolik žáků má <b>pouze hada</b>, ze zadání jednoznačně <b>určit nelze</b> – chybí, kolik žáků chová hada celkem (víme jen, že dohromady „jen had + jen potkan + jen pavouk“ = 12).' },
      { t: 'warn', x: 'Nejčastější chyba: číslo „hada i potkana chová 7“ zapsat do oblasti „jen had a potkan“. Takové údaje zahrnují i trojprůnik – nejdřív je potřeba trojprůnik odečíst.' }
    ] }
  ],
  mistakes: [
    'Psát prvky dvakrát nebo řešit pořadí – {a, b} = {b, a} = {a, a, b}.',
    'Plést ∈ a ⊆: 1 ∈ {1, 2}, ale {1} ⊆ {1, 2}.',
    'Zapomenout na ∅ a na celou množinu v P(A).',
    'Zaměnit A ∖ B a B ∖ A – rozdíl není symetrický.',
    'U Vennových úloh dosadit údaj „X i Y“ přímo do oblasti „jen X a Y“ bez odečtení trojprůniku.',
    'Tvrdit výsledek, který ze zadání nelze určit (počet Octavií, „pouze had“).'
  ],
  qa: [
    { q: 'Kolik prvků má P(A), má-li A čtyři prvky?', a: '2⁴ = 16.' },
    { q: 'Jaký je rozdíl mezi ∈ a ⊆?', a: '∈ říká, že něco je <b>prvkem</b> množiny; ⊆, že celá množina je <b>podmnožinou</b> jiné.' },
    { q: 'A = {k, o, s, t, e, l}, B = {s, t, á, n, e, k}. Čemu se rovná A ∖ B?', a: '{o, l}.' },
    { q: 'Jaké logické spojce odpovídá průnik a jaké sjednocení?', a: 'Průnik konjunkci (∧), sjednocení disjunkci (∨).' },
    { q: 'Co jsou disjunktní množiny?', a: 'Množiny s prázdným průnikem.' },
    { q: 'Proč lze ve Vennově diagramu sčítat počty v oblastech?', a: 'Oblasti se nepřekrývají – každý prvek leží právě v jedné oblasti.' }
  ]
});
