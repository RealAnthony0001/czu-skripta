registerTopic({
  id: 'pracovni-pravo', order: 13, icon: '👷', title: 'Pracovní právo', src: 'podklady', lec: [8], where: 'Přednáška Pracovní právo I. (JUDr. Cvik, 10. 12. 2025); sekce označené „doplněno“ jsou mimo podklady',
  summary: 'Pojem, funkce a prameny pracovního práva, vztah k občanskému právu, pracovněprávní vztahy a jejich účastníci, závislá práce, základní pracovněprávní vztahy, vznik pracovního poměru, pracovní smlouva a zkušební doba; doplněno: dohody, skončení PP, pracovní doba, dovolená, mzda, odpovědnost za škodu, BOZP a diskriminace.',
  vocab: [
    {w:'ZP',x:'Zákoník práce – zákon č. 262/2006 Sb., základní předpis pracovního práva.'},
    {w:'Subsidiarita',x:'Obecný předpis (občanský zákoník) se použije jen tam, kde zvláštní předpis (zákoník práce) nic neurčuje (§ 4 ZP).'},
    {w:'Kogentní × dispozitivní norma',x:'Kogentní norma platí vždy a nelze ji smlouvou obejít; od dispozitivní se lze dohodou odchýlit.'},
    {w:'OSVČ, „práce na IČO“',x:'Podnikající fyzická osoba; pokud ve skutečnosti vykonává závislou práci, jde o tzv. švarcsystém.'},
    {w:'Esenciální náležitost',x:'Podstatná část smlouvy, bez které smlouva nevznikne (u pracovní smlouvy druh práce, místo, den nástupu).'},
    {w:'Kolektivní smlouva',x:'Dohoda odborů se zaměstnavatelem o podmínkách platných pro zaměstnance; je pramenem pracovního práva.'},
    {w:'Průměrný výdělek',x:'Průměr mzdy zaměstnance za předchozí čtvrtletí; základ pro odstupné, náhrady a limit odpovědnosti za škodu.'},
    {w:'BOZP',x:'Bezpečnost a ochrana zdraví při práci – pravidla, jak předcházet pracovním úrazům a nemocem.'}
  ],
  key: [
    '<b>Pracovní právo</b>: soubor právních norem upravujících vztahy vznikající nebo související s výkonem <b>závislé práce</b>; samostatné odvětví řazené k „sociálním právům“ – individuální, kolektivní pracovní právo a úprava zaměstnanosti.',
    '<b>Funkce</b>: <b>ochranná</b> (nejdůležitější), organizační, výchovná. <b>Prameny</b>: Ústava a LZPS, mezinárodní smlouvy, zákony (ZP 262/2006 Sb.), vyhlášky a nařízení, <b>kolektivní smlouvy</b>, právo EU.',
    '<b>Vztah k OZ</b>: princip <b>subsidiarity</b> (§ 4 ZP); odchýlení od ZP upravuje § 4a.',
    '<b>Zaměstnavatel</b> = FO nebo PO; <b>zaměstnanec</b> = jen FO. ZP se nevztahuje na OSVČ, výkon veřejné funkce ani „práci na IČO“.',
    '<b>Závislá práce</b> (§ 2): nadřízenost a podřízenost, výlučně osobně jménem zaměstnavatele, podle pokynů; za mzdu, na náklady a odpovědnost zaměstnavatele, v pracovní době, na pracovišti.',
    '<b>Základní pracovněprávní vztahy</b> (§ 3): <b>pracovní poměr</b> a <b>dohody</b> o pracích mimo PP (DPP, DPČ). PP vzniká <b>pracovní smlouvou</b> nebo <b>jmenováním</b> (§ 33).',
    '<b>Pracovní smlouva</b> (§ 34): povinně <b>druh práce, místo výkonu práce, den nástupu</b>. Bez sjednané doby = <b>doba neurčitá</b> (§ 39). Chybějící údaje sdělí zaměstnavatel písemně do <b>1 měsíce</b>.',
    '<b>Zkušební doba</b>: písemně; podle slajdu max. 3 měsíce (vedoucí 6) – od novely 2025 <b>4 měsíce (vedoucí 8)</b>.'
  ],
  sections: [
    { title: 'Pojem, funkce a prameny pracovního práva', blocks: [
      { t: 'def', term: 'Pracovní právo', x: 'Soubor právních norem upravujících společenské vztahy vznikající nebo související s <b>výkonem závislé práce</b>.', items: ['samostatné právní odvětví, řazené k tzv. „sociálním právům“', 'upravuje tři oblasti: <b>individuální</b> pracovní právo, <b>kolektivní</b> pracovní právo a <b>právní úpravu zaměstnanosti</b>'] },
      { t: 'icons', title: 'Funkce pracovního práva', items: [
        { i: '🛡️', h: 'Ochranná', x: 'nejdůležitější a převažující – chrání zaměstnance' },
        { i: '🗂️', h: 'Organizační', x: 'rámec a podmínky pracovního procesu: míra práce, odměny, pravidla trhu práce' },
        { i: '🎓', h: 'Výchovná', x: 'přispívá ke zvyšování kultury výkonu práce' }
      ] },
      { t: 'table', head: ['Pramen pracovního práva', 'Poznámka'], rows: [
        ['Ústava a Listina základních práv a svobod', 'ústavní základ'],
        ['Mezinárodní smlouvy', ''],
        ['Zákony, vyhlášky, nařízení vlády', 'zejm. zákon č. 262/2006 Sb., zákoník práce'],
        ['<b>Kolektivní smlouvy</b>', 'specifický pramen pracovního práva'],
        ['Evropské (komunitární) právo', '']
      ] },
      { t: 'ul', items: [
        '<b>Základní předpisy</b>: zákon č. 262/2006 Sb., zákoník práce; zákon č. 2/1991 Sb., o kolektivním vyjednávání; zákon č. 198/2009 Sb., antidiskriminační zákon; zákon č. 89/2012 Sb., občanský zákoník (účinnost 1. 1. 2014); zákon č. 373/2011 Sb., o specifických zdravotních službách; zákon č. 309/2006 Sb., o zajištění dalších podmínek BOZP; nařízení vlády č. 590/2006 Sb. (jiné důležité osobní překážky v práci).',
        '<b>Vztah k občanskému právu</b>: princip <b>subsidiarity</b> vyjádřený v <b>§ 4 ZP</b> – občanský zákoník se použije, neupravuje-li věc zákoník práce. Možnosti <b>odchýlit se</b> od ZP upravuje <b>§ 4a ZP</b>.'
      ] }
    ] },
    { title: 'Pracovněprávní vztahy a závislá práce', blocks: [
      { t: 'p', x: '<b>Pracovněprávní vztahy</b> (§ 1 ZP) vznikají při výkonu závislé práce mezi <b>zaměstnanci</b> (fyzickými osobami) a <b>zaměstnavateli</b> (fyzickými nebo právnickými osobami). Zákoník práce se <b>nevztahuje</b> na vztahy při výkonu jiné než závislé práce – např. vztahy OSVČ nebo výkon veřejné funkce.' },
      { t: 'versus', title: 'Zaměstnavatel × zaměstnanec', x: 'Subjekty individuálních pracovněprávních vztahů jsou osoby fyzické a právnické, ale ne v obou rolích stejně. Zaměstnavatelem může být firma (s.r.o., a.s.) i člověk, například živnostník, který si najme pomocníka. Zaměstnancem může být jen fyzická osoba, protože závislou práci vykonává výlučně osobně – firma nemůže být „zaměstnancem“ jiné firmy; když spolu firmy spolupracují, jde o obchodní vztah mezi podnikateli, ne o pracovní poměr.', cols: [
        { h: 'Zaměstnavatel', items: ['právnická osoba', 'fyzická osoba', 'zaměstnává FO v pracovněprávním vztahu'] },
        { h: 'Zaměstnanec', items: ['<b>pouze fyzická osoba</b>', 'vykonává závislou práci osobně'] }
      ] },
      { t: 'svg', title: 'Znaky a podmínky závislé práce', x: ZPN.zavislaPrace(), cap: 'Uprostřed pojem závislé práce. Vlevo modře tři znaky podle § 2 odst. 1, vpravo oranžově čtyři podmínky výkonu podle § 2 odst. 2; teprve všechny dohromady tvoří závislou práci. Dole: závislou práci lze konat jen v základním pracovněprávním vztahu.' },
      { t: 'warn', x: '<b>Jiné způsoby výkonu práce</b> – tzv. <b>práce na IČO (švarcsystém)</b> a výkon práce na základě vztahu mezi podnikateli (FO nebo PO) – <b>nespadají pod zákoník práce</b>, nejde o pracovněprávní vztah. Závislou práci lze konat <b>výlučně v základním pracovněprávním vztahu</b>, není-li upravena zvláštními předpisy (§ 3 ZP).' },
      { t: 'svg', title: 'Základní pracovněprávní vztahy', x: ZPN.pracVztahy(), cap: 'Strom § 3 ZP: základní pracovněprávní vztahy jsou pracovní poměr (vzniká pracovní smlouvou nebo jmenováním, § 33) a právní vztahy z dohod o pracích konaných mimo pracovní poměr – dohoda o provedení práce (DPP) a dohoda o pracovní činnosti (DPČ).' }
    ] },
    { title: 'Vznik pracovního poměru a pracovní smlouva', blocks: [
      { t: 'p', x: 'Platná úprava v <b>§ 33 ZP</b> rozlišuje dva základní způsoby vzniku pracovního poměru: <b>pracovní smlouvou</b> a <b>jmenováním</b>.' },
      { t: 'def', term: 'Pracovní smlouva', x: 'Dvoustranné právní jednání mezi zaměstnancem a zaměstnavatelem, na jehož základě vzniká pracovní poměr.', items: ['obsah a náležitosti: <b>§ 34 ZP</b>', 'povinné (podstatné, esenciální) náležitosti: <b>a) druh práce, b) místo výkonu práce, c) den nástupu do práce</b>'] },
      { t: 'table', head: ['Téma', 'Pravidlo podle přednášky'], rows: [
        ['<b>Zkušební doba</b>', 'nesmí být delší než <b>3 měsíce</b> po sobě jdoucí ode dne vzniku PP, u vedoucího zaměstnance <b>6 měsíců</b>; musí být sjednána <b>písemně</b>'],
        ['<b>Doba trvání</b> (§ 39)', 'sjednává se v pracovní smlouvě; není-li o ní nic uvedeno, PP trvá po <b>dobu neurčitou</b>'],
        ['<b>Informace o právech a povinnostech</b>', 'neobsahuje-li je smlouva, zaměstnavatel o nich zaměstnance <b>písemně informuje do 1 měsíce</b> od vzniku PP']
      ] },
      { t: 'warn', x: 'Slajd uvádí zkušební dobu nejvýše 3 měsíce (vedoucí 6). Novela zákoníku práce účinná od <b>1. 6. 2025</b> (zákon č. 120/2025 Sb.) prodloužila maximum na <b>4 měsíce</b>, u vedoucího zaměstnance na <b>8 měsíců</b>. U zkoušky si ověř, kterou verzi vyučující požaduje.' },
      { t: 'ex', x: 'Pepa podepíše smlouvu „programátor, Praha, nástup 1. 3.“ a o době trvání v ní nic není. Smlouva má všechny tři podstatné náležitosti, takže PP vznikne 1. 3., a protože doba není sjednána, je na <b>dobu neurčitou</b>. Zkušební doba platí, jen pokud je sjednána písemně. Údaje o dovolené či pracovní době, které smlouva neobsahuje, mu zaměstnavatel písemně sdělí do měsíce.' }
    ] },
    { title: 'Dohody, druhy a skončení pracovního poměru (doplněno)', blocks: [
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
        ['<b>Výpověď</b> (§ 50)', 'zaměstnavatel (jen z <b>důvodů v § 52</b>) i zaměstnanec (<b>bez udání důvodu</b>); písemně, doručena', 'výpovědní doba <b>min. 2 měsíce</b>; od novely 2025 běží <b>ode dne doručení</b> výpovědi (dříve od 1. dne následujícího měsíce)'],
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
    { title: 'Pracovní doba, odpočinek, dovolená, mzda (doplněno)', blocks: [
      { t: 'table', head: ['Téma', 'Pravidlo'], rows: [
        ['<b>Stanovená týdenní pracovní doba</b> (§ 79)', 'max. <b>40 hodin týdně</b>; při třísměnném provozu 38,75, nepřetržitém 37,5 hodiny'],
        ['<b>Maximální týdenní</b> doba vč. přesčasu', 'průměrně max. <b>48 hodin</b> týdně vč. přesčasu za 26 týdnů (v kolektivní smlouvě až 52 týdnů)'],
        ['<b>Přesčas</b> (§ 93)', 'nařízený max. <b>150 hodin ročně</b>; celkem (i dohodnutý) průměrně max. <b>8 h týdně</b> za 26 týdnů (416 h); příplatek min. <b>25 %</b> průměrného výdělku nebo náhradní volno'],
        ['<b>Noční práce</b>', '22:00–6:00; příplatek min. 10 % průměrného výdělku; zdravotní prohlídky'],
        ['<b>Doba odpočinku</b>', 'mezi směnami min. <b>11 hodin</b> (§ 90); týdenní nepřetržitý odpočinek min. <b>35 hodin</b> (§ 92); přestávka na jídlo a oddech <b>30 min</b> po max. 6 hodinách (§ 88)'],
        ['<b>Práce ve svátek</b>', 'příplatek min. 100 % průměrného výdělku (nebo náhradní volno)'],
        ['<b>Dovolená</b> (§ 211 an.)', 'min. <b>4 týdny</b>; 5 týdnů u zaměstnavatelů ve <b>veřejné sféře</b>; pedagogové až 8 týdnů; poměrně podle odpracované doby; <b>proplácení</b> dovolené jen při skončení PP'],
        ['Pracovní volno', 'překážky v práci (návštěva lékaře, svatba, pohřeb, očekávaný porod)'],
        ['<b>Práce z domova</b>', '§ 317 ZP – dohodou nebo na pokyn zaměstnavatele; náhrada nákladů dle dohody']
      ] },
      { t: 'table', head: ['', 'Mzda (soukromá sféra)', 'Plat (veřejná sféra)'], rows: [
        ['Zdroj', 'sjednaná ve smlouvě / výměr mzdy / mzdový předpis', 'stanoví zákon (platové tarify) – stát, kraje, obce, příspěvkové org.'],
        ['Zaměstnavatel', 'podnikatelé, soukromé PO, veřejné vysoké školy a další', 'stát, územní samosprávné celky, příspěvkové a rozpočtové organizace'],
        ['Splatnost', 'nejpozději do konce kalendářního měsíce následujícího po vzniku nároku', 'po vykonání práce, v pravidelném výplatním termínu'],
        ['Dolní hranice', 'minimální mzda (nařízení vlády 567/2006 Sb., každoročně valorizovaná)', 'platové tarify a tabulky; zaručený plat']
      ] },
      { t: 'p', x: '<b>Minimální mzda</b>: stanovena nařízením vlády a každoročně upravována (aktuální výši si ověř). <b>Splatnost mzdy</b>: nejpozději do konce kalendářního měsíce následujícího po měsíci, ve kterém vznikl nárok. Srážky ze mzdy: přednostní (daň, pojištění), nepřednostní (exekuce) – zákon chrání <b>nezabavitelnou částku</b>.' },
      { t: 'tip', x: 'Přesčasová práce = práce nad stanovenou týdenní dobu nařízená / dohodnutá; příplatek 25 % nebo volno. Rozdíl od <b>práce přes čas</b> (u zaměstnanců s pružným rozvržením).' }
    ] },
    { title: 'Odpovědnost za škodu v pracovním právu (doplněno)', blocks: [
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
    { title: 'BOZP, diskriminace, věk, ochrana zvláštních skupin (doplněno)', blocks: [
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
    'Zaměstnancem může být <b>jen fyzická osoba</b>; zaměstnavatelem FO i PO.',
    'Práce „na IČO“ (švarcsystém) <b>není pracovněprávní vztah</b> – závislou práci lze konat jen v základním pracovněprávním vztahu (§ 3).',
    'Není-li ve smlouvě sjednána doba trvání, je PP na <b>dobu neurčitou</b> (§ 39).',
    '(doplněno) Výpovědní doba min. <b>2 měsíce</b>; od novely 2025 běží ode dne doručení výpovědi.',
    'Pracovní smlouva: povinně druh práce, místo výkonu, den nástupu (mzda nemusí být v pracovní smlouvě; zkušební doba nepovinná).',
    'Zkušební doba musí být sjednána <b>písemně</b>; slajd: max. 3 měsíce (vedoucí 6), od novely 2025: 4 měsíce (vedoucí 8).',
    'Okamžité zrušení = výjimečné, jen z důvodů zákona, do 2 měsíců od zjištění (max. 1 rok).',
    'Mzda × plat: mzda v soukromé sféře, plat ve veřejné. Dovolená se proplácí jen při skončení PP.',
    'Zaměstnavatel odpovídá objektivně za pracovní úraz; zaměstnanec subjektivně (zavinění se neprezumuje).'
  ],
  qa: [
    { q: 'Co je pracovní právo a jaké oblasti upravuje?', a: 'Soubor právních norem upravujících vztahy vznikající nebo související s výkonem závislé práce; samostatné odvětví řazené k sociálním právům. Oblasti: individuální pracovní právo, kolektivní pracovní právo a právní úprava zaměstnanosti.' },
    { q: 'Jaké jsou funkce pracovního práva?', a: 'Ochranná (nejdůležitější, převažující), organizační (rámec pracovního procesu, míra práce, odměny, pravidla trhu práce) a výchovná (kultura výkonu práce).' },
    { q: 'Jaké jsou prameny pracovního práva?', a: 'Ústava a LZPS, mezinárodní smlouvy, zákony, vyhlášky a nařízení vlády (zejm. zákoník práce 262/2006 Sb.), kolektivní smlouvy a evropské právo.' },
    { q: 'Jaký je vztah zákoníku práce a občanského zákoníku?', a: 'Princip subsidiarity (§ 4 ZP): občanský zákoník se použije, neupravuje-li věc zákoník práce. Možnosti odchýlit se od ZP upravuje § 4a.' },
    { q: 'Kdo může být zaměstnavatelem a kdo zaměstnancem?', a: 'Zaměstnavatelem fyzická i právnická osoba; zaměstnancem pouze fyzická osoba.' },
    { q: 'Jaké jsou základní pracovněprávní vztahy a jak vzniká pracovní poměr?', a: 'Pracovní poměr a právní vztahy z dohod o pracích konaných mimo pracovní poměr – DPP a DPČ (§ 3). Pracovní poměr vzniká pracovní smlouvou nebo jmenováním (§ 33).' },
    { q: 'Co je závislá práce a jak se liší od podnikání?', a: 'Závislá práce (§ 2 ZP): osobně, ve vztahu nadřízenosti a podřízenosti, jménem zaměstnavatele, podle pokynů, za mzdu, v pracovní době, na náklady a odpovědnost zaměstnavatele. Podnikatel pracuje samostatně, vlastním jménem a na vlastní odpovědnost.' },
    { q: 'Povinné náležitosti pracovní smlouvy.', a: 'Druh práce, místo výkonu práce a den nástupu do práce (§ 34). Neobsahuje-li smlouva údaje o právech a povinnostech, zaměstnavatel o nich zaměstnance písemně informuje do 1 měsíce od vzniku PP.' },
    { q: 'Jak dlouhá může být zkušební doba?', a: 'Podle přednášky nejvýše 3 měsíce po sobě jdoucí od vzniku PP, u vedoucího zaměstnance 6 měsíců; musí být sjednána písemně. Novela účinná od 1. 6. 2025 prodloužila maximum na 4 měsíce (vedoucí 8).' },
    { q: 'Rozdíl mezi DPP a DPČ.', a: 'DPP: max. 300 hodin za rok u jednoho zaměstnavatele, bez nároku na dovolenou. DPČ: max. polovina týdenní pracovní doby (v průměru za 52 týdnů), s nároky na dovolenou a výpověď 15 dnů. Obě písemně.' },
    { q: 'Jak lze ukončit pracovní poměr?', a: 'Dohodou, výpovědí (zaměstnavatel jen z důvodů § 52; zaměstnanec bez důvodu), okamžitým zrušením, zrušením ve zkušební době, uplynutím doby (u určité doby), smrtí zaměstnance.' },
    { q: 'Jaká je výpovědní doba a kdy začíná? (doplněno)', a: 'Nejméně 2 měsíce; od novely 2025 běží ode dne doručení výpovědi (dříve od prvního dne následujícího měsíce).' },
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
