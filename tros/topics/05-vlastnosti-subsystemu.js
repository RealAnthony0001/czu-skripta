registerTopic({
  id: 'vlastnosti-subsystemu', order: 5, icon: '📊', title: 'Vlastnosti subsystémů, chování, výkonnost a spolehlivost OS', src: 'podklady', lec: [4],
  where: 'Přednáška 4 + Cvičení 4 (úkoly 10–17) + skripta TŘOS kap. 5',
  summary: 'Nezastupitelnost, podmíněnost, proporcionalita, stabilita, hierarchie ŘSS, kompetence (s výpočtem), disjunkce a konjunkce; chování OS, výkonnost (hospodárnost, efektivnost, účelnost) a spolehlivost se vzorci.',
  vocab: [
    { w: 'Limitní subsystém', x: 'Nejslabší subsystém, který omezuje rozvoj a výsledné chování celého OS.' },
    { w: 'Stabilita', x: 'Předvídatelnost chování subsystému; klesá s podílem lidského prvku.' },
    { w: 'Kompetence', x: 'Schopnost/předpoklad zvládnout funkci, úkol, očekávané chování; měří se číslem 0–1.' },
    { w: 'Pravomoc (PR), sféra působnosti (SP)', x: 'PR = 1 / počet úrovní; SP = 1 / počet subsystémů na úrovni; K = PR × SP.' },
    { w: 'Výkonnost', x: 'Hospodárnost + efektivnost + účelnost (tři „E“).' },
    { w: 'Spolehlivost p', x: 'Pravděpodobnost, že systém reaguje na podnět očekávanou reakcí; nespolehlivost h = 1 − p.' }
  ],
  key: [
    '<b>Šest vlastností:</b> nezastupitelnost, podmíněnost, proporcionalita, stabilita (a hierarchie), kompetentnost, disjunkce × konjunkce.',
    '<b>Nejméně stabilní je ŘSS</b> (nejvýš v hierarchii, nízké investice, rychlá reakce); nejstabilnější PS1, TS1, TS2, EES, PS2.',
    '<b>K = PR × SP</b>; součet kompetencí subsystémů je 1 (K<sub>cs</sub> &lt; 1 = hluchá místa, &gt; 1 = překryv).',
    'Výkonnost: <b>hospodárnost</b> (dělat věci levně), <b>efektivnost</b> (správnou cestou), <b>účelnost</b> (správné věci).',
    'Spolehlivost: <b>série p = p₁·p₂·…</b>, <b>paralela p = 1 − ∏(1 − pᵢ)</b>; zálohy ji zvyšují.'
  ],
  sections: [
    { title: 'Přehled vlastností subsystémů 1. řádu', blocks: [
      { t: 'table', head: ['Vlastnost', 'Podstata'], rows: [
        ['Nezastupitelnost', 'všechny subsystémy jsou k plnění cílů stejně důležité; žádný nemůže nahradit jiný – každý má jiné prvky nebo vazby'],
        ['Vzájemná podmíněnost', 'výsledné chování OS závisí na všech subsystémech; jsou nezaměnitelné, ale podmíněné (dynamikou oblastí a hlavní diagonály)'],
        ['Proporcionální rozvoj', 'OS funguje správně jen při vyváženém rozvoji; posílení jiného než nejslabšího subsystému nepomůže'],
        ['Různá stabilita', 'nejméně stabilní je řídící subsystém'],
        ['Různá kompetentnost', 'podle pravomoci a sféry působnosti'],
        ['Disjunkce a konjunkce', 'vztah subsystémů jako logický součet nebo součin']
      ] },
      { t: 'versus', title: 'Nezastupitelnost: oblasti × procesy', cols: [
        { h: 'Oblasti – stejné prvky, jiné vazby', items: ['produkčně-technická', 'organizačně-ekonomická (nepřímé řízení)', 'obchodně-řídící (přímé řízení)'] },
        { h: 'Procesy – stejné vazby, jiné prvky', items: ['informační', 'organizační', 'realizační'] }
      ], x: 'Dva subsystémy se mohou shodovat v prvcích (např. všechny v obchodně-řídící oblasti jsou „lidé“), ale liší se vazbami; jiné se shodují vazbami, ale mají jiné prvky. Proto žádný nemůže práci jiného převzít: obchodník nenahradí technika ani ředitel účetní.' }
    ] },
    { title: 'Proporcionalita a limitní subsystém', blocks: [
      { t: 'p', x: 'Správná funkce OS předpokládá <b>proporcionalitu</b> subsystémů. Výsledné (cílové) chování odpovídá <b>limitnímu subsystému</b>. Proto má smysl posilovat <b>jen ten nejslabší</b>; posílení jiného nevede ke zlepšení celku. Cílem je dynamická rovnováha. Úkolem ŘSS je zjistit, co je limitem rozvoje, a odstranit ho.' },
      { t: 'ol', items: [
        'Produkce, technologie i technika jsou v pořádku, ale nezvládnutá <b>obchodní struktura</b> → limitem je MOS (obchod).',
        'Produkce i obchod správně, ale špatná <b>péče o zákazníky a servis</b> → limitem servis.',
        'Obchod a servis dobré, o produkty by byl zájem, ale neodpovídá <b>kvalita</b> → limitem technologický a technický subsystém (případně PS2).',
        'O produkty není zájem → špatný <b>produkční subsystém</b>, což nedožene ani obchod, ani servis.'
      ] },
      { t: 'tip', x: 'Problém proporcionality bývá typický pro rychle rostoucí mladé podniky. Rozvoj znamená stálé odchylky od rovnováhy, na které musí ŘSS rychle a správně reagovat; pomalá nebo špatná reakce bývá důvodem konce podnikání.' }
    ] },
    { title: 'Stabilita a hierarchie', blocks: [
      { t: 'svg', title: 'Stabilita subsystémů 1. řádu', x: TROS.stabilita(), cap: 'Čím výš je subsystém v hierarchii, tím je méně stabilní: rychle reaguje na změny a vyžaduje minimum investic. Čím níž, tím je stabilnější, ale reaguje pomalu a stojí víc investic.' },
      { t: 'ul', items: [
        'Stabilita je <b>pozitivní vlastnost</b>: chování lze předvídat. Vysoká stabilita ale znamená pomalou, nepružnou reakci na změny.',
        'Stabilita <b>klesá s podílem lidského prvku</b>: hmotné prvky (PS1, TS1, TS2) a PS2, EES jsou nejstabilnější, smíšené a obchodní (OSS, MOS, EIS) střední, čistě lidský ŘSS nejméně.',
        'Stabilita souvisí s investicemi do HP. Velký podnik je proto zákonitě silný, ale pomalý a nepružný; malý podnik je pružný, ale zranitelný.',
        '<b>Hierarchie:</b> nejvýše stojí ŘSS – ve vztahu ke všem ostatním je <b>subjektem řízení</b>, ostatní jsou jeho objekty.'
      ] },
      { t: 'table', head: ['Vztah ŘSS → …', 'ŘSS rozhoduje / zadává', 'Chování objektu'], rows: [
        ['PS1', 'rozhodnutí o nové produkci; zadání přípravy produkce', 'produkce (kontrola a požadavky produkce)'],
        ['OSS', 'návrh a příkaz ke změnám v organizaci; vznik nových OJ, směn', 'důsledky změn (kontrola plnění příkazů)'],
        ['TS1', 'rozhodnutí o technologii; zadání přípravy technologického postupu', 'technologický proces'],
        ['TS2', 'výběr a nákup hmotných prostředků (HP), jejich instalace', 'fungování a výkon HP'],
        ['MOS', 'marketingová a obchodní strategie', 'obchodní případy'],
        ['EIS', 'potřebné informace, struktura informací, tvorba informačních systémů', 'poskytované informace'],
        ['EES', 'návrh řešení požadavků, opatření', 'realizovaná opatření'],
        ['PS2', 'cíle a program plnění, pracovní postupy při spolupráci, úkoly', 'realizovaná spolupráce']
      ] },
      { t: 'p', x: 'Rozhodnutí se někdy realizují přímo, jindy přes organizační, ekonomický nebo produkční subsystém, ale <b>vždy jde o rozhodnutí ŘSS</b> (řídících pracovníků).' }
    ] },
    { title: 'Kompetence subsystémů – výpočet', blocks: [
      { t: 'def', term: 'Kompetence subsystému', x: 'Schopnost nebo předpoklad zvládnout určitou funkci, úkol, očekávané chování.', items: ['měří se číslem <b>0–1</b>', 'kompetence subsystémů zajišťují kompetenci celého systému', '<b>součet = 1</b>, je-li OS správně nastaven'] },
      { t: 'law', ref: 'K<sub>i,j</sub> = PR<sub>i</sub> × SP<sub>j</sub>', x: 'PR<sub>i</sub> = 1 / (počet hierarchických úrovní) – pravomoc pro i-tý stupeň; SP<sub>j</sub> = 1 / (počet subsystémů na dané úrovni) – sféra působnosti. Hierarchické postavení klesá se vzdáleností od ŘSS.' },
      { t: 'svg', title: 'Kompetence subsystémů 1. řádu (5 hierarchických úrovní)', x: TROS.kompetenceGrid(), cap: 'U každého ze subsystémů je jeho kompetence K podle úrovně v hierarchii (ŘSS a OSS po 0,200, MOS, EIS, EES a TS1 po 0,100, PS2, PS1 a TS2 po 0,067); barva rozlišuje lidské, smíšené a hmotné prvky.' },
      { t: 'table', head: ['Úroveň', 'Subsystémy', 'PR', 'SP', 'K'], rows: [
        ['1 (hlavní)', 'ŘSS', '0,2', '1/1 = 1,000', '0,200'],
        ['2 (mezi)', 'MOS, EIS', '0,2', '1/2 = 0,500', '0,100 každý'],
        ['3 (hlavní)', 'OSS', '0,2', '1/1 = 1,000', '0,200'],
        ['4 (mezi)', 'EES, TS1', '0,2', '1/2 = 0,500', '0,100 každý'],
        ['5 (vzdálené)', 'PS2, PS1, TS2', '0,2', '1/3 = 0,333', '0,067 každý']
      ] },
      { t: 'ex', x: 'Kontrola součtu: 0,200 + 2·0,100 + 0,200 + 2·0,100 + 3·0,0667 = <b>1,000</b> = K<sub>cs</sub>. Platí tedy K<sub>cs</sub> = 1; kdyby vyšlo K<sub>cs</sub> &lt; 1, existují „hluchá místa“ bez kompetencí, při K<sub>cs</sub> &gt; 1 se kompetence překrývají.' },
      { t: 'widget', name: 'kompetence', how: ['Pět výběrů nastavuje, kolik subsystémů leží na jednotlivých úrovních.', 'Tabulka počítá PR = 1 / počet úrovní, SP = 1 / počet subsystémů na úrovni a K = PR × SP.', 'Kontrola: součet kompetencí K<sub>cs</sub> musí být 1.'], sol: 'Úrovně 1 až 5 mají 1, 2, 1, 2, 3 subsystémů, PR = 1/5 = 0,2: ŘSS K = 0,200; MOS a EIS po 0,100; OSS 0,200; EES a TS1 po 0,100; PS2, PS1 a TS2 po 0,067. Součet <b>K<sub>cs</sub> = 1,000</b>.', title: 'Kompetence K = PR × SP: změň rozložení subsystémů po úrovních', cap: 'Pravomoc PR i sféra působnosti SP vycházejí z počtu úrovní a subsystémů na úrovni.' },
      { t: 'ul', items: [
        'Nejvyšší kompetenci mají <b>ŘSS a OSS</b> (0,2). OSS je na úrovni ŘSS, protože řídící pracovníci jsou v OSS zastoupeni jako smíšené prvky (mají stejnou rozhodovací pravomoc) a OSS leží v <b>centru systému</b> na hlavní diagonále.',
        'Nejnižší kompetenci mají vzdálené subsystémy bez řídícího lidského prvku (PS2, PS1, TS2) – jejich pravomoci jsou jen zprostředkované.',
        'Kompetence subsystému závisí na přidělené pravomoci, sféře působnosti, umístění v OS a fázích procesu řízení; ovlivňuje hierarchii důležitosti při odstraňování odchylek.'
      ] }
    ] },
    { title: 'Disjunkce a konjunkce', blocks: [
      { t: 'versus', cols: [
        { h: 'Disjunktivní vztah', items: ['subsystémy nemají společné prvky ani vazby', 'např. produkční a řídící subsystém', '<b>logický součet</b>: procesy probíhají po sobě, důsledky se sčítají'] },
        { h: 'Konjunktivní vztah', items: ['mají společné prvky nebo vazby', 'např. marketingově-obchodní a řídící subsystém', '<b>logický součin</b>: procesy probíhají současně, důsledky se násobí'] }
      ], x: 'Součet: pokud chyba v jednom subsystému nastane a pak v druhém, jejich důsledky se jen přičtou. Součin: když dva spolu těsně propojené subsystémy pracují současně, špatný výsledek jednoho znehodnotí všechno – jako když je nula součinitelem. Proto je konjunktivní vazba citlivější (a spolehlivost se v ní násobí). Přednáška uvádí jako příklad produkční × řídící a obchodní × řídící; skripta HE × řídící a sociální × řídící.' }
    ] },
    { title: 'Chování organizačního systému', blocks: [
      { t: 'p', x: 'OS je <b>složitý, rozlehlý, stochastický</b> systém. Deterministicky se chovají jen technologický a technický subsystém, a to jen v krátkém čase; ostatní jsou stochastické i v krátkém časovém intervalu. Chování popisuje transformace <b>y = T(x)</b>.' },
      { t: 'table', head: ['Faktor chování', 'Význam'], rows: [
        ['<b>a</b> – vstupy', 'hmotně-energetické, informační (smíšený např. nakoupená technologie)'],
        ['<b>C</b> – strukturální proměnná', 'působí jako <b>zesilovač</b> (C &gt; 1) nebo <b>tlumič</b> (C &lt; 1) transformačního efektu; lidé zde jako výkonní pracovníci'],
        ['<b>D</b> (f) – proměnná lidského řídícího subjektu', 'kompetence (strategie, produktová struktura, obchodní politika, plánování, organizování, operativní řízení) a motivace (vlastní, přímé, nepřímé); při správné úrovni f = 1, nad úroveň zesiluje, pod ní tlumí'],
        ['<b>e</b> – výsledné chování', 'e = C·(a + f·e) – řízení zesiluje efekt i bez změny struktury']
      ] },
      { t: 'ex', x: 'Vstup <b>a = 100</b> peněžních jednotek, úkol dosáhnout minimálně 120 (20 % zisk) → <b>C = 1,2</b>. Bez dobrého řízení by výsledek byl 120. S řízením f = 0,1: e = 1,2·(100 + 0,1·e) → e = 120 / (1 − 0,12) ≈ <b>136,4</b> (skripta uvádějí 136). Správné řízení zvýšilo výsledek o ≈ 16 jednotek bez zásahu do struktury.' }
    ] },
    { title: 'Výkonnost organizačního systému', blocks: [
      { t: 'table', head: ['Hodnotitel', 'Co pro něj výkonnost znamená'], rows: [
        ['Akcionáři', 'zhodnocení vloženého kapitálu'],
        ['Řídící pracovníci', 'míra dosahování výsledků jednotlivci a skupinami (JOP) v procesech'],
        ['Výkonní zaměstnanci', 'zvyšování platů a jejich včasné vyplácení'],
        ['Zákazníci', 'dodání produktu v potřebném množství, kvalitě, čase a přiměřené ceně'],
        ['Dodavatelé', 'stabilita odběru a včasná úhrada závazků']
      ] },
      { t: 'tip', x: 'ŘP musí brát v úvahu všechny pohledy: když akcionáři nejsou spokojeni, kapitál přesunou; když ŘP nemá výsledky, bude odvolán; když zaměstnanci nedostanou odměnu včas, odejdou; zákazníci koupí jinde; dodavatelé přestanou dodávat.' },
      { t: 'table', head: ['Složka', 'Heslo', 'Podstata', 'Nejvíc se podílejí'], rows: [
        ['<b>Hospodárnost</b> (economy)', '„dělat věci levně“', 'minimalizace vynaložených zdrojů při odpovídající kvalitě, bez plýtvání', 'PTO, EES, PS2; procesy realizační'],
        ['<b>Efektivnost</b> (efficiency)', '„dělat věci správnou cestou“', 'maximální výstup z daných zdrojů (nebo daný výstup s minimem zdrojů)', 'PTO, OSS, MOS; procesy organizační'],
        ['<b>Účelnost</b> (expedience)', '„dělat správné věci“', 'produkovat požadovaný užitek, tedy dosáhnout cílů; neprodukovat nepotřebné', 'PS1, TS1, OSS, MOS, ŘSS; procesy informační']
      ] },
      { t: 'ul', items: [
        'Výkonnost podle oblastí: PTO = množství a kvalita produktů v čase; OEO = optimální rozmístění zdrojů a informace ve správný čas; OŘO = způsob prodeje a servis (přidaná hodnota), těžko měřitelný vliv samotného řízení.',
        'Klasické ukazatele: zisk, cash flow, likvidita, rentabilita. Moderní (spjaté s hodnotou akcií): DCF, MVA, EVA, TSR, SVA, CFROI, CVA.'
      ] }
    ] },
    { title: 'Spolehlivost organizačního systému', blocks: [
      { t: 'def', term: 'Spolehlivost', x: 'Pravděpodobnost <b>p</b>, že systém reaguje na známý podnět očekávanou reakcí (např. bezporuchovost linky p = 0,98).', items: ['<b>nespolehlivost h = 1 − p</b> (zde 0,02)', 'OS je stochastický, nikdy nemá p = 100 %'] },
      { t: 'versus', cols: [
        { h: 'Sériové spojení', items: ['vstup → transformace → chování', 'výsledek = <b>součin</b> spolehlivostí: p = p₁ · p₂ · … · pₙ', 'každý další prvek spolehlivost snižuje'] },
        { h: 'Paralelní spojení', items: ['prvky se zálohují', 'nespolehlivosti se násobí: h = ∏(1 − pᵢ)', 'p = 1 − ∏(1 − pᵢ)', 'každý další prvek spolehlivost zvyšuje'] }
      ], x: 'Při sériovém řetězci stačí, aby selhal jediný článek, a selže celek, proto se pravděpodobnosti násobí a celek je horší než nejslabší článek. Při paralelním zapojení selže celek jen tehdy, když selžou všechny záložní prvky najednou – a to je málo pravděpodobné. Proto firmy mají druhého dodavatele, zástupce vedoucího nebo záložní agregát.' },
      { t: 'svg', title: 'Příklad ze skript: A – (B1 ‖ B2) – (C1 ‖ C2 ‖ C3 ‖ C4)', x: TROS.spolehlivost(), cap: 'Sériově za sebou A, dvojice paralelních B1, B2 a čtveřice paralelních C1 až C4; vpravo je výpočet: p₂ = 0,9896, p₃ = 0,9992, celek ≈ 0,939.' },
      { t: 'ex', x: '<b>Cvičení (úkol 15):</b> tři technologie za sebou, p = 0,95; 0,90; 0,85 → p = 0,95 · 0,90 · 0,85 = <b>0,72675 ≈ 0,727</b>. Celek je nespolehlivější než kterákoli z technologií. <b>Organizační stupně:</b> při spolehlivosti jednoho stupně 0,90 klesá celková na 0,90 (1 stupeň), 0,81 (2), 0,73 (3) a 0,66 (4) – proto má mít podnik co nejméně stupňů.' },
      { t: 'warn', x: 'Ve skriptech je u třetího stupně (C₁–C₄) uvedeno p<sub>C</sub> = 0,989, správně je 1 − 0,14·0,15·0,20·0,19 = <b>0,9992</b>; ve výpočtu celku se již používá 0,999, výsledek ≈ 0,939 (94 %) tedy sedí.' },
      { t: 'widget', name: 'spolehlivost', how: ['Každý stupeň (A, B, C) obsahuje paralelní prvky; stupně jsou řazeny za sebou (sériově).', 'Odškrtnutím prvku ho vypneš (odebereš zálohu); číselné pole mění jeho spolehlivost.', 'Tabulka ukazuje výpočet spolehlivosti každého stupně a pod ní součin.'], sol: 'Stupeň B: p = 1 − (1 − 0,92)(1 − 0,87) = 0,9896; stupeň C: p = 1 − 0,14 · 0,15 · 0,20 · 0,19 = 0,9992; celek <b>p = 0,95 · 0,9896 · 0,9992 ≈ 0,939</b>.', title: 'Spolehlivost série a paralely: zapni a vypni záložní prvky', cap: 'Hodnoty jsou z příkladu A – (B1 ‖ B2) – (C1 ‖ C2 ‖ C3 ‖ C4); měň je a sleduj celkovou spolehlivost.' },
      { t: 'table', head: ['Typ zálohy', 'Co to je', 'Příklad'], rows: [
        ['Nezatížená záloha', 'prvek určený jen pro zálohu', 'vlastní elektrický agregát, záložní baterie, střídání hráčů v hokeji, zásoby, náhradní díly'],
        ['Zatížená záloha', 'plní jinou činnost, ale může plně nahradit jiný prvek', 'zástupce ŘP; stěžejní vývojář zálohovaný kolegou (nikdo nesmí být nenahraditelný)'],
        ['Částečně zatížená záloha', 'nahradí jen některé činnosti důležitějšího prvku', 'vývojář, který ovládá jen jedno ze dvou prostředí; zástupce vedoucího (místopředseda, náměstek, zástupce vedoucího směny)']
      ] },
      { t: 'ul', items: [
        'Spolehlivost lze zvyšovat <b>na vstupu</b> (vstupní kontrola kvality materiálu a informací) a <b>optimalizací uspořádání prvků</b> – zvyšováním spolehlivosti prvků (kvalita, vedení a motivace lidí) a vazeb (záložní větve).',
        'Přesně lze počítat hlavně v produkčně-technické oblasti; u lidí a řízení se spolehlivost přesně určit nedá.'
      ] }
    ] }
  ],
  mistakes: [
    'Posilovat nejviditelnější subsystém místo <b>limitního</b> – proporcionalita.',
    'Říkat, že ŘSS je nejstabilnější, protože je nejdůležitější – je naopak nejméně stabilní (jen lidský prvek, nízké investice, rychlá reakce).',
    'Počítat kompetence jako 1/počet subsystémů (1/9) – správně K = PR × SP s rozdělením do hierarchických úrovní.',
    'Sčítat spolehlivost v sériovém zapojení – násobí se. U paralelního se násobí <i>nespolehlivosti</i>.',
    'Zaměnit hospodárnost („levně“), efektivnost („správnou cestou“) a účelnost („správné věci“).'
  ],
  qa: [
    { q: 'Vyjmenujte vlastnosti subsystémů 1. řádu.', a: 'Nezastupitelnost, vzájemná podmíněnost, proporcionalita (proporcionální rozvoj), různá stabilita, různá kompetentnost, vztah disjunkce a konjunkce.' },
    { q: 'Co je proporcionalita a limitní subsystém?', a: 'OS funguje správně jen při vyváženém rozvoji subsystémů; chování celku odpovídá nejslabšímu (limitnímu) subsystému. Posílení jiného než nejslabšího nevede ke zlepšení; ŘSS má limit odhalit a odstranit.' },
    { q: 'Seřaďte subsystémy podle stability a hierarchie.', a: 'Nízká stabilita, nejvyšší hierarchie: ŘSS (minimum investic, rychlá reakce). Střední: MOS, OSS, EIS. Vysoká stabilita, nízká hierarchie: PS2, EES, PS1, TS1, TS2 (vysoké investice, pomalá reakce).' },
    { q: 'Spočítejte kompetence subsystémů 1. řádu (5 úrovní).', a: 'PR = 1/5 = 0,2. SP: ŘSS 1; MOS, EIS 1/2; OSS 1; EES, TS1 1/2; PS2, PS1, TS2 1/3. K = PR·SP: ŘSS 0,200; MOS, EIS 0,100; OSS 0,200; EES, TS1 0,100; PS2, PS1, TS2 0,067. Součet = 1.' },
    { q: 'Co znamená K<sub>cs</sub> &lt; 1 a &gt; 1?', a: 'K<sub>cs</sub> &lt; 1: v systému existují hluchá místa bez kompetencí. K<sub>cs</sub> &gt; 1: kompetence jednotlivých subsystémů se překrývají. Správné nastavení K<sub>cs</sub> = 1.' },
    { q: 'Vysvětlete disjunkci a konjunkci subsystémů.', a: 'Disjunkce: subsystémy nemají společné prvky ani vazby (produkční × řídící), vztah = logický součet, procesy probíhají po sobě a důsledky se sčítají. Konjunkce: společné prvky/vazby (MOS × ŘSS), logický součin, procesy současně a důsledky se násobí.' },
    { q: 'Co je výkonnost OS a z čeho se skládá?', a: 'Míra dosahování výsledků; skládá se z hospodárnosti (economy – levně), efektivnosti (efficiency – správnou cestou) a účelnosti (expedience – správné věci). Různé zájmové skupiny (akcionáři, ŘP, zaměstnanci, zákazníci, dodavatelé) ji vnímají odlišně.' },
    { q: 'Jak se počítá spolehlivost série a paralely? Spočítejte 0,95; 0,90; 0,85 v sérii.', a: 'Série: p = ∏ pᵢ → 0,95·0,90·0,85 = 0,72675. Paralela: p = 1 − ∏(1 − pᵢ). Nespolehlivost h = 1 − p.' },
    { q: 'Uveďte druhy záložních prvků.', a: 'Nezatížená záloha (agregát, náhradní díly), zatížená záloha (zástupce ŘP plnící jinou činnost) a částečně zatížená záloha (zastoupí jen některé činnosti).' },
    { q: 'Jak řízení ovlivňuje výsledné chování OS?', a: 'Strukturální proměnná C funguje jako zesilovač (C > 1) nebo tlumič; lidský řídící prvek (f) působí zpětnovazebně: e = C(a + f·e). Např. a = 100, C = 1,2, f = 0,1 → e ≈ 136 místo 120.' }
  ]
});
