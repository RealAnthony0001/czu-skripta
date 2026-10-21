registerTopic({
  id: 'pracovni-pravo', order: 11, icon: '👷', title: 'Pracovní právo', src: 'doplneno', lec: [8], where: 'Sylabus – přednáška 8',
  summary: 'Zákoník práce 262/2006 Sb.: zásady, pracovněprávní vztahy, vznik a skončení pracovního poměru, dohody o pracích mimo pracovní poměr, pracovní doba, dovolená, mzda, odpovědnost za škodu, BOZP a zákaz diskriminace.',
  vocab: [
    {w:'Subsidiární použití',x:'Obecný předpis (zde NOZ) se použije jen tam, kde zvláštní předpis (zákoník práce) nic neurčuje.'},
    {w:'Kogentní × dispozitivní norma',x:'Kogentní norma platí vždy a nelze ji smlouvou obejít; od dispozitivní se lze dohodou odchýlit.'},
    {w:'OSVČ',x:'Osoba samostatně výdělečně činná – podnikající fyzická osoba (živnostník), nikoli zaměstnanec.'},
    {w:'Průměrný výdělek',x:'Průměr mzdy zaměstnance za předchozí čtvrtletí; základ pro odstupné, náhrady a limit odpovědnosti za škodu.'},
    {w:'Odbory a kolektivní smlouva',x:'Odbory zastupují zaměstnance a s vedením sjednávají kolektivní smlouvu – dohodu o podmínkách platnou pro celý podnik.'},
    {w:'Pracovní neschopnost',x:'Stav, kdy lékař zaměstnance uzná za nemocného a ten nemůže pracovat; pobírá nemocenské.'},
    {w:'BOZP',x:'Bezpečnost a ochrana zdraví při práci – pravidla, jak předcházet pracovním úrazům a nemocem.'},
    {w:'Doručení písemnosti',x:'Písemnost (např. výpověď) je účinná, až když ji adresát obdrží (osobně, poštou, do datové schránky).'}
  ],
  key: [
    '<b>Zákoník práce (ZP) 262/2006 Sb.</b> – základní pramen; <b>NOZ se použije subsidiárně</b> (jen když ZP výslovně neurčuje; § 4 ZP).',
    '<b>Závislá práce</b>: osobně, ve vztahu nadřízenosti a podřízenosti, jménem zaměstnavatele, podle pokynů, za mzdu, v pracovní době, na náklady a odpovědnost zaměstnavatele.',
    '<b>Pracovní poměr</b> vzniká <b>pracovní smlouvou</b> (písemně): povinně <b>druh práce, místo výkonu práce, den nástupu</b>; zkušební doba max. 3 měsíce (vedoucí 6).',
    '<b>Dohody mimo pracovní poměr</b>: DPP do <b>300 hodin ročně</b>, DPČ nejvýše <b>polovina týdenní pracovní doby</b> (v průměru).',
    '<b>Skončení PP</b>: dohoda, výpověď, okamžité zrušení, zrušení ve zkušební době, uplynutí doby; výpovědní doba <b>min. 2 měsíce</b>; <b>odstupné</b> 1–3násobek průměrného výdělku.',
    '<b>Pracovní doba</b> max. 40 h týdně; <b>odpočinek</b> mezi směnami min. 11 h; <b>dovolená</b> min. 4 týdny (5 týdnů ve veřejné sféře).',
    '<b>Odpovědnost zaměstnance za škodu</b>: z nedbalosti max. <b>4,5násobek průměrného měsíčního výdělku</b>; úmysl / pod vlivem alkoholu = bez limitu; <b>zaměstnavatel</b> odpovídá objektivně.',
    '<b>Zaměstnanec od 15 let</b> a po ukončení povinné školní docházky; zaměstnavatel může být FO i PO; zákaz diskriminace.'
  ],
  sections: [
    { title: 'Základní pojmy, zásady a vztahy', blocks: [
      { t: 'table', head: ['Pojem', 'Obsah'], rows: [
        ['<b>Zaměstnanec</b>', 'fyzická osoba, která pro zaměstnavatele vykonává <b>závislou práci</b> v základním pracovněprávním vztahu (§ 6); způsobilost od <b>15 let</b> po ukončení povinné školní docházky'],
        ['<b>Zaměstnavatel</b>', 'osoba, pro kterou se závislá práce vykonává; fyzická (OSVČ) nebo právnická osoba; zaměstnavatel-FO musí být plně svéprávná'],
        ['<b>Závislá práce</b> (§ 2)', 'osobně, nadřízenost / podřízenost, jménem zaměstnavatele, podle pokynů, za mzdu / plat, v pracovní době, na náklady a odpovědnost zaměstnavatele, na pracovišti'],
        ['<b>Základní pracovněprávní vztahy</b>', 'pracovní poměr; právní vztahy z dohod o pracích konaných mimo pracovní poměr (DPP, DPČ)'],
        ['<b>Individuální × kolektivní</b>', '<b>individuální</b>: zaměstnanec × zaměstnavatel (pracovní smlouva); <b>kolektivní</b>: odbory, zástupci zaměstnanců, kolektivní smlouvy, zaměstnavatelé (dohody, informování, projednání)'],
        ['<b>Zákaz nelegální práce</b>', 'vykonávání závislé práce mimo pracovněprávní vztah (zák. 435/2004 Sb.) – tzv. „švarcsystém“ (pozor: OSVČ jen skutečně nezávislá)']
      ] },
      { t: 'p', x: '<b>Zásady</b> pracovněprávních vztahů (§ 1a): zvláštní ochrana zaměstnance; uspokojivé a bezpečné pracovní podmínky; spravedlivé odměňování; rovné zacházení; zákaz diskriminace; ochrana dobré víry; <b>zásada „co není zakázáno, je dovoleno“</b> pro soukromoprávní složku (kogentní ustanovení ZP se nesmí dohodou porušit v neprospěch zaměstnance); <b>zásada výhodnosti</b> pro zaměstnance (smlouva nemůže zhoršit nároky).' },
      { t: 'table', head: ['Pramen', 'Použití'], rows: [
        ['Ústava, LZPS (čl. 26–32)', 'právo na svobodnou volbu povolání, spravedlivou odměnu, bezpečné podmínky, ochranu mládeže, žen a zdravotně postižených'],
        ['Zákoník práce 262/2006 Sb.', 'hlavní předpis individuálních i kolektivních vztahů'],
        ['Zákon o zaměstnanosti 435/2004 Sb.', 'úřad práce, evidence, nelegální práce'],
        ['Antidiskriminační zákon 198/2009 Sb.', 'zákaz diskriminace'],
        ['Nařízení vlády 567/2006 Sb.', 'minimální mzda a zaručená mzda'],
        ['Zák. 309/2006 Sb. a zák. 251/2005 Sb.', 'BOZP, inspekce práce (Státní úřad inspekce práce)']
      ] },
      { t: 'tip', x: 'ZP je „soukromé právo se silnou veřejnoprávní ochranou“: strany nesmí zhoršit zákonné minimum (kogentní normy). Uvnitř můžeš sjednat výhodnější podmínky (delší dovolená, vyšší odstupné).' }
    ] },
    { title: 'Vznik, změna a skončení pracovního poměru', blocks: [
      { t: 'table', head: ['Vznik PP', 'Pravidlo'], rows: [
        ['<b>Pracovní smlouva</b> (§ 33–34)', 'nejběžnější způsob; musí být <b>písemná</b> (nedodržení formy samo o sobě neplatnost nezpůsobí, pokud zaměstnanec již nastoupil); PP vzniká <b>dnem nástupu do práce</b>'],
        ['<b>Povinné náležitosti</b>', '<b>druh práce</b>, <b>místo nebo místa výkonu práce</b>, <b>den nástupu</b> do práce (bez dohodnutého dne nástupu je podstatné)'],
        ['<b>Jmenování</b>', 'vedoucí zaměstnanci (např. ředitel příspěvkové org.) – jmenování, volba; nebo pracovní smlouva'],
        ['<b>Volba</b>', 'zřídka – zaměstnanec zvolený kolektivním orgánem; PP vzniká přijetím volby'],
        ['Zkušební doba (§ 35)', 'sjednaná <b>písemně před vznikem PP</b>; max. <b>3 měsíce</b> (vedoucí 6 měsíců); u PP na dobu určitou nejvýše polovina sjednané doby'],
        ['Den nástupu', 'zaměstnanec nastoupí; nenastoupí-li bez omluvy do týdne, zaměstnavatel může od smlouvy odstoupit']
      ] },
      { t: 'table', head: ['Druh PP', 'Pravidlo'], rows: [
        ['Na <b>dobu neurčitou</b>', 'výchozí varianta'],
        ['Na <b>dobu určitou</b> (§ 39)', 'nejdéle <b>3 roky</b> od vzniku prvního PP; opakovat (navazovat) lze max. <b>dvakrát</b>; výjimky: vážné provozní důvody, zastupování, sjednání v kolektivní smlouvě (ověřit aktuální § 39)'],
        ['<b>Plný × zkrácený úvazek</b>', 'plná týdenní doba 40 h; zkrácená dohodou'],
        ['<b>Agenturní zaměstnávání</b>', 'agentura (zaměstnavatel) pronajímá zaměstnance uživateli']
      ] },
      { t: 'table', head: ['Dohoda', 'Limit', 'Poznámky'], rows: [
        ['<b>DPP</b> (§ 75) – dohoda o provedení práce', 'rozsah práce max. <b>300 hodin v kalendářním roce</b> u jednoho zaměstnavatele', 'písemná forma povinná; bez nároku na dovolenou, výpovědi; z odměny do určité částky se neplatí odvody (limit každoročně mění)'],
        ['<b>DPČ</b> (§ 76) – dohoda o pracovní činnosti', 'nejvýše <b>polovina</b> stanovené týdenní pracovní doby (v průměru, za max. 52 týdnů)', 'písemná; výpověď 15 dní; dovolená poměrně; od limitu odměny se platí odvody'],
        ['Pracovní poměr', 'bez limitu (do 40 h týdně)', 'plná ochrana, dovolená, výpovědní ochrana']
      ] },
      { t: 'warn', x: 'DPP/DPČ jsou <b>jen doplňkové</b> formy – dlouhodobá pravidelná práce pro jednoho zaměstnavatele v rozsahu plné práce na DPP není přípustná (obcházení = pracovní poměr). Konkrétní limity pro sociální a zdravotní pojištění se pravidelně mění (od 2024 vazba na výši průměrné mzdy) – ověřit aktuální částku.' },
      { t: 'p', x: '<b>Změny PP</b>: dohoda o změně; <b>převedení na jinou práci</b> (jednostranně, jen z důvodů podle ZP – dočasně / trvale); <b>přeložení</b> na jiné pracoviště (jen se souhlasem); dočasné přidělení; přechod práv a povinností při převodu podniku (§ 338). Formou změny je dodatek.' },
      { t: 'table', head: ['Způsob skončení', 'Kdo / jak', 'Poznámky'], rows: [
        ['<b>Dohoda</b> (§ 49)', 'oboustranně, písemně', 'lze kdykoli; může obsahovat podmínky odstupného'],
        ['<b>Výpověď</b> (§ 50)', 'zaměstnavatel (jen z <b>důvodů v § 52</b>) i zaměstnanec (<b>bez udání důvodu</b>); písemně, doručena', 'výpovědní doba <b>min. 2 měsíce</b>, začíná 1. dnem měsíce následujícího po doručení'],
        ['<b>Okamžité zrušení</b> (§ 55 zaměstnavatel, § 56 zaměstnanec)', 'písemně, jen z <b>zákonných důvodů</b>', 'subjektivní lhůta 2 měsíce od zjištění, objektivní 1 rok od vzniku důvodu'],
        ['<b>Zrušení ve zkušební době</b> (§ 66)', 'obě strany, písemně, bez udání důvodu', 'musí být písemné a doručené před koncem zkušební doby; rušení z diskriminačního důvodu je neplatné'],
        ['<b>Uplynutí doby</b>', 'PP na dobu určitou', 'pokračování po uplynutí = přechod na dobu neurčitou'],
        ['<b>Smrt zaměstnance</b>', 'zaniká', 'dědici dostanou nároky na mzdu']
      ] },
      { t: 'p', x: '<b>Výpovědní důvody zaměstnavatele (§ 52)</b>: <b>organizační</b>: zrušení nebo přemístění zaměstnavatele, <b>nadbytečnost</b>; <b>zdravotní</b>: pracovní úraz / nemoc z povolání, dlouhodobá ztráta zdravotní způsobilosti; <b>osobní</b>: nesplňování předpokladů nebo požadavků na práci, neuspokojivé plnění po písemném upozornění, <b>porušení povinnosti zvlášť hrubým způsobem</b> (resp. soustavné méně závažné porušení po upozornění). Výpověď musí být písemná, doručená, důvod jasný (nelze měnit).' },
      { t: 'table', head: ['Odstupné (§ 67)', 'Výše'], rows: [
        ['Výpověď z <b>organizačních důvodů</b> (zrušení, přemístění, nadbytečnost) nebo dohoda z těchto důvodů – PP do 1 roku', '<b>1násobek</b> průměrného měsíčního výdělku'],
        ['– PP 1 až 2 roky', '<b>2násobek</b>'],
        ['– PP 2 a více let', '<b>3násobek</b>'],
        ['Výpověď z důvodu <b>pracovního úrazu / nemoci z povolání</b>', 'min. <b>12násobek</b> průměrného výdělku'],
        ['Výpověď pro porušení povinnosti (osobní důvody)', 'odstupné se <b>nevyplácí</b>']
      ] },
      { t: 'warn', x: '<b>Ochranná doba</b> (§ 53): zaměstnavatel nesmí dát výpověď těhotné ženě, matce na mateřské dovolené, zaměstnanci v době dočasné pracovní neschopnosti, při výkonu vojenské služby; výjimka: zrušení / přemístění zaměstnavatele a hrubé porušení povinností. <b>Zaměstnanec výpověď dát může kdykoli.</b>' },
      { t: 'ex', x: 'Pepa pracuje u firmy 3 roky, firma kvůli reorganizaci zruší jeho pozici. Dostane výpověď z důvodu nadbytečnosti (§ 52 písm. c). Výpovědní doba 2 měsíce, odstupné 3násobek průměrného výdělku. Kdyby Pepa byl v době podání výpovědi nemocný, výpověď by byla neplatná (ochranná doba), pokud se nejedná o organizační změnu.' }
    ] },
    { title: 'Pracovní doba, odpočinek, dovolená, mzda', blocks: [
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['<b>Stanovená týdenní pracovní doba</b> (§ 79)', 'max. <b>40 hodin týdně</b>; při třísměnném provozu 38,75, nepřetržitém 37,5 hodiny'],
        ['<b>Maximální týdenní</b> doba vč. přesčasu', 'průměrně max. <b>48 hodin</b> týdně vč. přesčasu za 26 týdnů (v kolektivní smlouvě až 52 týdnů)'],
        ['<b>Přesčas</b> (§ 93)', 'nařízený max. <b>150 hodin ročně</b>; celkem (i dohodnutý) průměrně max. <b>8 h týdně</b> za 26 týdnů (416 h); příplatek min. <b>25 %</b> průměrného výdělku nebo náhradní volno'],
        ['<b>Noční práce</b>', '22:00–6:00; příplatek min. 10 % průměrného výdělku; zdravotní prohlídky'],
        ['<b>Doba odpočinku</b>', 'mezi směnami min. <b>11 hodin</b> (§ 90); týdenní nepřetržitý odpočinek min. <b>35 hodin</b> (§ 92); přestávka na jídlo a oddech <b>30 min</b> po max. 6 hodinách (§ 88)'],
        ['<b>Práce ve svátek</b>', 'příplatek min. 100 % průměrného výdělku (nebo náhradní volno)'],
        ['<b>Dovolená</b> (§ 211 an.)', 'min. <b>4 týdny</b>; 5 týdnů u zaměstnavatelů ve <b>veřejné sféře</b>; pedagogové až 8 týdnů; poměrně za odpracované týdny (nárok po odpracování 60 dnů); <b>proplácení</b> dovolené jen při skončení PP'],
        ['Pracovní volno', 'překážky v práci (návštěva lékaře, svatba, pohřeb, očekávaný porod)'],
        ['<b>Práce z domova</b>', '§ 317 ZP – dohodou nebo na pokyn zaměstnavatele; náhrada nákladů dle dohody']
      ] },
      { t: 'table', head: ['', 'Mzda (soukromá sféra)', 'Plat (veřejná sféra)'], rows: [
        ['Zdroj', 'sjednaná ve smlouvě / výměr mzdy / mzdový předpis', 'stanoví zákon (platové tarify) – stát, kraje, obce, příspěvkové org.'],
        ['Zaměstnavatel', 'podnikatelé, soukromé PO, veřejné vysoké školy a další', 'stát, územní samosprávné celky, příspěvkové a rozpočtové organizace'],
        ['Splatnost', 'nejpozději do konce kalendářního měsíce následujícího po vzniku nároku', 'po vykonání práce, v pravidelném výplatním termínu'],
        ['Dolní hranice', 'minimální mzda (nařízení vlády 567/2006 Sb., každoročně valorizovaná)', 'platové tarify a tabulky; zaručený plat']
      ] },
      { t: 'p', x: '<b>Minimální mzda</b>: stanovena nařízením vlády (2025: 20 800 Kč měsíčně / 124,40 Kč za hodinu – ověřit aktuální výši; v předchozích letech opakovaně navyšována). <b>Splatnost mzdy</b>: nejpozději do konce kalendářního měsíce následujícího po měsíci, ve kterém vznikl nárok. Srážky ze mzdy: přednostní (daň, pojištění), nepřednostní (exekuce) – zákon chrání <b>nezabavitelnou částku</b>.' },
      { t: 'tip', x: 'Přesčasová práce = práce nad stanovenou týdenní dobu nařízená / dohodnutá; příplatek 25 % nebo volno. Rozdíl od <b>práce přes čas</b> (u zaměstnanců s pružným rozvržením).' }
    ] },
    { title: 'Odpovědnost za škodu v pracovním právu', blocks: [
      { t: 'p', x: 'Odpovědnostní vztahy upravuje ZP (§ 248 an.), NOZ jen subsidiárně. <b>Předpoklady</b> odpovědnosti (stejně jako v občanském právu): porušení povinnosti, škoda, příčinná souvislost, zavinění (zaměstnanec); u zaměstnavatele i bez zavinění.' },
      { t: 'table', head: ['', 'Zaměstnanec', 'Zaměstnavatel'], rows: [
        ['<b>Obecná odpovědnost</b>', 'za <b>zaviněné porušení povinností</b> při plnění pracovních úkolů nebo v přímé souvislosti (§ 250)', '<b>objektivní</b> – za škodu při plnění pracovních úkolů nebo v přímé souvislosti (§ 265)'],
        ['Rozsah (limit)', 'u nedbalosti max. <b>4,5násobek průměrného měsíčního výdělku</b> před porušením; při <b>úmyslu</b> nebo pod vlivem alkoholu / návykové látky <b>bez omezení</b>', 'plná náhrada skutečné škody (+ ušlý zisk)'],
        ['Zavinění', 'nedbalost se <b>nepředpokládá</b> – zaměstnavatel musí prokázat', 'neprokazuje se (objektivní)'],
        ['Zproštění', 'neodpovídá při krajní nouzi nebo při plnění pokynu, kterému se nemohl vyhnout; zaměstnavatel musí prokázat zavinění a příčinnou souvislost', 'liberace jen v případech stanovených zákonem (např. úmysl zaměstnance při pracovním úrazu)'],
        ['Spoluzavinění', 'poškozený se podílí → poměrné snížení náhrady', 'obdobně'],
        ['Zvláštní případy', '<b>schodek</b> na svěřených hodnotách (hmotná odpovědnost – dohoda o hmotné odpovědnosti, od 18 let, prodavači, pokladníci): <b>plná</b> odpovědnost, zprostí se jen prokáže-li, že škoda nastala bez zavinění; <b>ztráta svěřených předmětů</b> (stvrzenka, nářadí, klíče): odpovědnost bez ohledu na limit 4,5násobku', 'za <b>pracovní úraz a nemoc z povolání</b> odpovídá objektivně (odškodnění, bolestné, ztížení společenského uplatnění, ztráta výdělku); za <b>škodu na odložených věcech</b> zaměstnance']
      ] },
      { t: 'warn', x: 'Limit 4,5násobku platí <b>jen</b> pro obecnou odpovědnost z nedbalosti. Neplatí při úmyslu, pod vlivem alkoholu, u hmotné odpovědnosti (schodek) a u ztráty svěřených předmětů. Škodu uhradí zaměstnanec buď dohodou o náhradě, nebo ji zaměstnavatel vymáhá žalobou; zaměstnanec škodu <b>nesmí uhrazovat srážkou ze mzdy bez souhlasu</b>.' },
      { t: 'ex', x: 'Prodavačka v obchodě, která podepsala dohodu o hmotné odpovědnosti, má při inventuře schodek 40 000 Kč. Hradí celý schodek (schodek na svěřených hodnotách, plná odpovědnost), limit 4,5násobku neplatí; zprostí se jen důkazem, že schodek vznikl bez jejího zavinění. Skladník, který z nedbalosti rozbije vysokozdvižný vozík za 500 000 Kč, platí nejvýše 4,5násobek svého průměrného výdělku (např. 4,5 × 30 000 = 135 000 Kč).' },
      { t: 'table', head: ['Škoda zaměstnance', 'Řešení'], rows: [
        ['Pracovní úraz, nemoc z povolání', 'odškodnění (bolestné, ztížení společenského uplatnění, ztráta na výdělku) hradí zaměstnavatel'],
        ['Zničená / poškozená věc zaměstnance', 'zaměstnavatel hradí škodu na věcech, které se obvykle nosí do práce; ostatní jen při dohodě'],
        ['Regres po zaměstnanci', 'zaměstnavatel, který nahradil škodu třetí osobě, ji může po zaměstnanci vymáhat jen v rámci limitu']
      ] }
    ] },
    { title: 'BOZP, diskriminace, věk, ochrana zvláštních skupin', blocks: [
      { t: 'p', x: '<b>BOZP</b> (§ 101 an. ZP a zák. 309/2006 Sb.): zaměstnavatel je povinen zajistit bezpečné pracoviště, školení, vyhodnocovat rizika, poskytovat OOPP (ochranné pomůcky), pracovní lékařské prohlídky, evidovat pracovní úrazy; zaměstnanec dodržovat předpisy a spolupracovat. Inspekce: Státní úřad inspekce práce (SÚIP), oblastní inspektoráty.' },
      { t: 'table', head: ['Diskriminace (zák. 198/2009 Sb., § 16 ZP)', 'Popis'], rows: [
        ['<b>Přímá</b>', 'méně příznivé zacházení z důvodu pohlaví, rasy, věku, zdravotního postižení, náboženství, sexuální orientace apod.'],
        ['<b>Nepřímá</b>', 'zdánlivě neutrální pravidlo, které znevýhodňuje určitou skupinu'],
        ['<b>Obtěžování / sexuální obtěžování</b>', 'nežádoucí chování, které vytváří nepřátelské prostředí'],
        ['<b>Pronásledování</b>', 'postih za uplatnění práv'],
        ['Právní následky', 'žaloba na zdržení se jednání, odstranění následků, zadostiučinění, <b>peněžitá náhrada nemajetkové újmy</b>; důkazní břemeno přechází na žalovaného (zaměstnavatele)']
      ] },
      { t: 'table', head: ['Skupina', 'Ochrana'], rows: [
        ['Mladiství (15–18 let)', 'omezení prací, zákaz nočních, kratší pracovní doba (max. 8 hodin/den, 40/týden), přestávky; zdravotní prohlídky'],
        ['Děti (do 15 let / před ukončením povinné školní docházky)', 'zásadně zakázáno zaměstnávat; výjimka: umělecká, kulturní, sportovní, reklamní činnost se souhlasem úřadu práce'],
        ['Těhotné ženy, matky, rodiče', 'zákaz prací poškozujících zdraví, přeložení, ochranná doba; mateřská a rodičovská dovolená; nárok na návrat na původní práci'],
        ['Zdravotně postižení', 'zvýšená ochrana, kvóta zaměstnávání, rehabilitace'],
        ['Cizinci', 'povolení k zaměstnání / zaměstnanecká karta, evidence; zaměstnavatel odpovídá za nelegální práci']
      ] },
      { t: 'tip', x: 'Věk: pracovní poměr lze uzavřít <b>od 15 let</b>, ale až po splnění povinné školní docházky (9 let). Mladší 15 let: výjimky jen pro uměleckou, kulturní, sportovní a reklamní činnost.' }
    ] }
  ],
  mistakes: [
    'Odpovědnost zaměstnance: limit <b>4,5násobek</b> průměrného měsíčního výdělku platí pro nedbalost – ne pro úmysl, alkohol, schodek, ztrátu svěřených předmětů.',
    'DPP: <b>300 hodin ročně</b> u jednoho zaměstnavatele; DPČ: max. polovina týdenní pracovní doby. DPP = není nárok na dovolenou ani výpověď.',
    'Výpovědní doba min. <b>2 měsíce</b>, začíná první den měsíce po doručení – ne od doručení.',
    'Pracovní smlouva: povinně druh práce, místo výkonu, den nástupu (mzda nemusí být v pracovní smlouvě; zkušební doba nepovinná).',
    'Zkušební dobu nelze sjednat až po vzniku PP; ve zkušební době lze skončit PP bez udání důvodu.',
    'Okamžité zrušení = výjimečné, jen z důvodů zákona, do 2 měsíců od zjištění (max. 1 rok).',
    'Mzda × plat: mzda v soukromé sféře, plat ve veřejné. Dovolená se proplácí jen při skončení PP.',
    'Zaměstnavatel odpovídá objektivně za pracovní úraz; zaměstnanec subjektivně (zavinění se neprezumuje).'
  ],
  qa: [
    { q: 'Co je závislá práce a jak se liší od podnikání?', a: 'Závislá práce (§ 2 ZP): osobně, ve vztahu nadřízenosti a podřízenosti, jménem zaměstnavatele, podle pokynů, za mzdu, v pracovní době, na náklady a odpovědnost zaměstnavatele. Podnikatel pracuje samostatně, vlastním jménem a na vlastní odpovědnost.' },
    { q: 'Povinné náležitosti pracovní smlouvy.', a: 'Druh práce, místo (místa) výkonu práce, den nástupu. Dále se dohaduje mzda, doba trvání, zkušební doba, pracovní doba apod. Smlouva je písemná.' },
    { q: 'Jak dlouhá může být zkušební doba?', a: 'Nejvýše 3 měsíce, u vedoucích 6 měsíců, u PP na dobu určitou nejvýše polovina sjednané doby. Sjednává se písemně nejpozději v den vzniku PP; později ji sjednat nelze.' },
    { q: 'Rozdíl mezi DPP a DPČ.', a: 'DPP: max. 300 hodin za rok u jednoho zaměstnavatele, bez nároku na dovolenou. DPČ: max. polovina týdenní pracovní doby (v průměru za 52 týdnů), s nároky na dovolenou a výpověď 15 dnů. Obě písemně.' },
    { q: 'Jak lze ukončit pracovní poměr?', a: 'Dohodou, výpovědí (zaměstnavatel jen z důvodů § 52; zaměstnanec bez důvodu), okamžitým zrušením, zrušením ve zkušební době, uplynutím doby (u určité doby), smrtí zaměstnance.' },
    { q: 'Jaká je výpovědní doba a kdy začíná?', a: 'Nejméně 2 měsíce; začíná prvním dnem kalendářního měsíce následujícího po doručení výpovědi.' },
    { q: 'Kdy má zaměstnanec nárok na odstupné a v jaké výši?', a: 'Při výpovědi z organizačních důvodů (zrušení, nadbytečnost) nebo zdravotních: 1násobek průměrného výdělku do 1 roku, 2násobek 1–2 roky, 3násobek nad 2 roky. Při pracovním úrazu / nemoci z povolání 12násobek.' },
    { q: 'Kdy nelze dát zaměstnanci výpověď?', a: 'V ochranné době (těhotenství, mateřská / rodičovská dovolená, pracovní neschopnost, výkon vojenské služby); výjimky: zrušení zaměstnavatele, hrubé porušení povinností.' },
    { q: 'Jaká je maximální pracovní doba a doba odpočinku?', a: 'Stanovená týdenní doba max. 40 h; průměrně max. 48 h vč. přesčasu; mezi směnami min. 11 h odpočinku, týdenní 35 h, přestávka 30 min po 6 hodinách.' },
    { q: 'Jak dlouhá je dovolená?', a: 'Minimálně 4 týdny za kalendářní rok; 5 týdnů ve veřejné sféře, pedagogové až 8 týdnů. Dovolená se nahrazuje penězi jen při skončení pracovního poměru.' },
    { q: 'Jak odpovídá zaměstnanec za škodu zaměstnavateli?', a: 'Za zaviněné porušení povinnosti: z nedbalosti max. 4,5násobek průměrného měsíčního výdělku; z úmyslu nebo pod vlivem alkoholu bez omezení. Za schodek na svěřených hodnotách (dohoda o hmotné odpovědnosti) plně; za ztrátu svěřených předmětů podle zákona.' },
    { q: 'Pepa, skladník, nedopatřením (nedbalostí) rozbil techniku za 800 000 Kč. Jeho průměrný výdělek je 30 000 Kč. Kolik zaplatí?', a: 'Obecná odpovědnost z nedbalosti: max. 4,5 × 30 000 = 135 000 Kč. Pokud by jednal úmyslně nebo pod vlivem alkoholu, platil by celou škodu.' },
    { q: 'Marie je těhotná; zaměstnavatel jí dal výpověď kvůli nadbytečnosti. Je výpověď platná?', a: 'Ne – těhotná žena je v ochranné době. Výjimkou je jen <b>zrušení zaměstnavatele</b> (celého), nikoli pouhá nadbytečnost. Výpověď je neplatná; zaměstnankyně se musí neplatnosti dovolat žalobou u soudu do 2 měsíců od data, kdy měl PP skončit.' },
    { q: 'Od kolika let lze uzavřít pracovní poměr?', a: 'Od 15 let po ukončení povinné školní docházky. Děti do 15 let mohou vykonávat jen uměleckou, kulturní, sportovní nebo reklamní činnost se souhlasem úřadu práce.' }
  ]
});
