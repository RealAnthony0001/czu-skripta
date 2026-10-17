registerTopic({
  id: 'trestni-pravo', order: 14, icon: '🚔', title: 'Trestní právo', src: 'doplneno', where: 'Přednáška 11 (sylabus – doplněno ze znalostí)',
  summary: 'Pojem trestného činu a zásady trestního práva, znaky skutkové podstaty, zavinění, věk a příčetnost, okolnosti vylučující protiprávnost, stádia, tresty, korupční trestné činy veřejných osob a trestní odpovědnost právnických osob.',
  vocab: [
    { w: 'Sb., §, odst., písm.', x: 'Sbírka zákonů, paragraf, odstavec, písmeno – takto se přesně cituje místo v zákoně (např. § 15 odst. 1 písm. a).' },
    { w: 'Pachatel a poškozený', x: 'Pachatel je ten, kdo čin spáchal; poškozený je ten, komu čin způsobil újmu (na zdraví, majetku, právech).' },
    { w: 'Orgány činné v trestním řízení', x: 'Policie, státní zástupce (žalobce státu) a soud; jen soud rozhoduje o vině a trestu.' },
    { w: 'Obviněný × obžalovaný × odsouzený', x: 'Stádia postavení podezřelého: stíhaný v přípravném řízení, po podání obžaloby, po pravomocném rozsudku.' },
    { w: 'Protiprávní', x: 'Odporující právu; protiprávní čin porušuje právní normu, ale trestný je jen ten, který tak označí trestní zákon.' },
    { w: 'Škoda × újma', x: 'Škoda je újma na majetku (měřitelná penězi), újma obecně zahrnuje i zdraví či čest; pachatel ji může být povinen nahradit.' },
    { w: 'Sazba trestu', x: 'Zákonem určené rozpětí trestu (např. odnětí svobody 1–5 let), v němž soud trest konkrétně ukládá.' },
    { w: 'Retroaktivita', x: 'Zpětná účinnost: použití nového zákona na činy spáchané před jeho účinností (v neprospěch pachatele zakázáno).' }
  ],
  key: [
    '<b>Trestný čin</b> (§ 13 TZ) = protiprávní čin, který trestní zákon označuje za trestný a který vykazuje znaky uvedené v takovém zákoně. Základ: <b>zákon č. 40/2009 Sb., trestní zákoník</b> (hmotné právo), <b>trestní řád č. 141/1961 Sb.</b> (procesní).',
    '<b>Zásady</b>: <i>nullum crimen, nulla poena sine lege</i> (čl. 39 Listiny), zákaz analogie a zpětné účinnosti v neprospěch pachatele, <b>subsidiarita trestní represe</b> (§ 12 odst. 2), presumpce neviny (čl. 40 Listiny), <i>ne bis in idem</i>.',
    '<b>Znaky skutkové podstaty</b>: objekt, objektivní stránka, subjekt, subjektivní stránka (zavinění: <b>úmysl</b> / <b>nedbalost</b>).',
    '<b>Věk trestní odpovědnosti: 15 let</b> (§ 25). Mladiství 15–18 let podle zákona č. 218/2003 Sb. (soudnictví ve věcech mládeže). Podmínkou je též <b>příčetnost</b>.',
    '<b>Přečin</b> (nedbalostní TČ + úmyslné s horní sazbou do 5 let) × <b>zločin</b> (ostatní); <b>zvlášť závažný zločin</b> – horní sazba alespoň 10 let (§ 14).',
    '<b>Okolnosti vylučující protiprávnost</b> (§ 28–32): krajní nouze, nutná obrana, svolení poškozeného, přípustné riziko, oprávněné použití zbraně.',
    '<b>Korupce</b>: přijetí úplatku (§ 331), podplácení (§ 332), nepřímé úplatkářství (§ 333); <b>zneužití pravomoci úřední osoby</b> (§ 329); maření úkolu úřední osoby (§ 330).',
    '<b>TOPO</b> – zákon č. 418/2011 Sb. (od 1. 1. 2012): právnická osoba je trestně odpovědná; netýká se státu a územních samosprávných celků při výkonu veřejné moci; nevylučuje odpovědnost fyzické osoby.'
  ],
  sections: [
    { title: 'Pojem trestného činu, prameny a zásady', blocks: [
      { t: 'def', term: 'Trestný čin', x: 'Protiprávní čin, který trestní zákon označuje za trestný a který vykazuje znaky uvedené v takovém zákoně (§ 13 odst. 1 trestního zákoníku). Pojmové znaky: protiprávnost, určitá míra společenské škodlivosti, vymezení v trestním zákoně (formální a materiální stránka – srov. čl. 39 Listiny a „dva znaky trestného činu“).' },
      { t: 'table', head: ['Předpis', 'Obsah'], rows: [
        ['<b>Zákon č. 40/2009 Sb.</b>', 'trestní zákoník (TZ) – obecná část (zásady, odpovědnost, tresty) a zvláštní část (jednotlivé trestné činy)'],
        ['<b>Zákon č. 141/1961 Sb.</b>', 'trestní řád (TŘ) – postup orgánů činných v trestním řízení'],
        ['<b>Zákon č. 418/2011 Sb.</b>', 'o trestní odpovědnosti právnických osob a řízení proti nim (TOPO)'],
        ['<b>Zákon č. 218/2003 Sb.</b>', 'o soudnictví ve věcech mládeže']
      ] },
      { t: 'table', head: ['Zásada', 'Obsah'], rows: [
        ['<i>Nullum crimen, nulla poena sine lege</i>', 'jen zákon stanoví, co je trestným činem a jaký trest lze uložit (čl. 39 Listiny); zákaz analogie k tíži pachatele a zákaz retroaktivity v neprospěch pachatele'],
        ['<b>Subsidiarita trestní represe</b> (§ 12 odst. 2)', 'trestní odpovědnost jen tam, kde nepostačuje odpovědnost podle jiného právního předpisu (ultima ratio)'],
        ['<b>Presumpce neviny</b> (čl. 40 Listiny)', 'každý je nevinen, dokud soud neodsoudí; <i>in dubio pro reo</i> (pochybnosti v prospěch obviněného)'],
        ['<i>Ne bis in idem</i>', 'nikdo nesmí být stíhán pro čin, pro který již byl pravomocně odsouzen nebo zproštěn obžaloby'],
        ['<b>Zásada odpovědnosti za zavinění</b>', 'trestně odpovědný je jen ten, kdo čin zavinil']
      ] },
      { t: 'tip', x: 'Trestní právo je <b>veřejné právo</b> – normy jsou kogentní, trestá stát; trest ukládá jen soud (čl. 40 Listiny).' }
    ] },
    { title: 'Znaky skutkové podstaty a trestní odpovědnost', blocks: [
      { t: 'table', head: ['Znak', 'Obsah'], rows: [
        ['<b>Objekt</b>', 'zájem chráněný zákonem (život, zdraví, majetek, pravomoc úřední osoby…)'],
        ['<b>Objektivní stránka</b>', 'jednání (čin – konání nebo opomenutí), následek (újma / ohrožení), <b>příčinná souvislost</b> mezi jednáním a následkem; někdy čas, místo, způsob'],
        ['<b>Subjekt</b>', 'pachatel – fyzická osoba, která dovršila 15 let a je příčetná (u některých TČ tzv. zvláštní subjekt, např. úřední osoba); od 2012 i právnická osoba'],
        ['<b>Subjektivní stránka</b>', '<b>zavinění</b> (úmysl nebo nedbalost); motiv, cíl, pohnutka (někdy znak skutkové podstaty)']
      ] },
      { t: 'table', head: ['Forma zavinění', 'Vymezení'], rows: [
        ['<b>Úmysl přímý</b> (§ 15 odst. 1 písm. a)', 'pachatel chtěl způsobit porušení nebo ohrožení zájmu chráněného zákonem'],
        ['<b>Úmysl nepřímý (eventuální)</b> (§ 15 odst. 1 písm. b)', 'věděl, že svým jednáním může takové porušení způsobit, a pro případ, že je způsobí, byl s tím srozuměn'],
        ['<b>Nedbalost vědomá</b> (§ 16 odst. 1 písm. a)', 'věděl, že může způsobit následek, ale bez přiměřených důvodů spoléhal, že jej nezpůsobí'],
        ['<b>Nedbalost nevědomá</b> (§ 16 odst. 1 písm. b)', 'nevěděl, že může způsobit následek, ač o tom vzhledem k okolnostem a osobním poměrům vědět měl a mohl']
      ] },
      { t: 'ul', items: [
        '<b>Věk trestní odpovědnosti</b>: trestně odpovědný není, kdo v době činu nedovršil <b>15 let</b> (§ 25). Mladistvý (15–18) – odpovědnost podle zákona č. 218/2003 Sb. (provinění, zvláštní sankce); dítě mladší 15 let – opatření mimo trestní právo (sociální péče, opatření soudu).',
        '<b>Příčetnost</b>: nepříčetný pachatel (§ 26) trestně odpovědný není; <b>zmenšená příčetnost</b> (§ 27) je okolnost k zohlednění v trestu. Pozor – kdo se opil nebo požil drogu a v tomto stavu čin spáchal, odpovídá za čin spáchaný v nepříčetnosti jako za čin v příčetnosti (tzv. <i>actio libera in causa</i>).',
        '<b>Dělení trestných činů</b> (§ 14): <b>přečiny</b> – všechny nedbalostní TČ a úmyslné TČ s horní hranicí sazby odnětí svobody do 5 let; <b>zločiny</b> – ostatní; <b>zvlášť závažné zločiny</b> – úmyslné TČ s horní hranicí sazby nejméně 10 let.',
        '<b>Pachatelé</b> (§ 22–24): pachatel, spolupachatelé (společné jednání), <b>účastníci</b> – organizátor, návodce, pomocník.'
      ] },
      { t: 'ex', x: 'Pepa, kterému je 14 let, rozbije výlohu. Trestně odpovědný není (pod 15 let) – řeší se opatřeními mimo trestní právo (škoda se uhradí podle občanského práva, odpovědnost rodičů). Totéž Pepa, 16 let → provinění podle zákona o soudnictví ve věcech mládeže; Pepa, 19 let → trestný čin poškození cizí věci.' }
    ] },
    { title: 'Okolnosti vylučující protiprávnost, stádia, tresty', blocks: [
      { t: 'table', head: ['Okolnost (§ 28–32)', 'Podstata'], rows: [
        ['<b>Krajní nouze</b> (§ 28)', 'odvrácení nebezpečí přímo hrozícího zájmu chráněnému zákonem, které nešlo odvrátit jinak; způsobený následek není zřejmě stejně závažný nebo závažnější než hrozící'],
        ['<b>Nutná obrana</b> (§ 29)', 'odvracení přímo hrozícího nebo trvajícího útoku na zájem chráněný zákonem; obrana nesmí být zcela zjevně nepřiměřená způsobu útoku'],
        ['<b>Svolení poškozeného</b>', 'poškozený svolil k zásahu do svého práva, o kterém může svobodně disponovat'],
        ['<b>Přípustné riziko</b>', 'jednání ve společensky užitečné činnosti, kde je riziko neodstranitelné a pachatel učinil všechna opatření'],
        ['<b>Oprávněné použití zbraně</b>', 'použití zbraně v mezích zákona (např. policista, voják)']
      ] },
      { t: 'p', x: '<b>Stádia trestné činnosti</b>: rozhodnutí → <b>příprava</b> (§ 20; trestná jen u zvlášť závažných zločinů, kde to zákon stanoví) → <b>pokus</b> (§ 21; jednání bezprostředně směřující k dokonání, k dokonání nedošlo) → <b>dokonání</b> (naplněny všechny znaky skutkové podstaty) → ukončení. <b>Dobrovolné upuštění</b> od dokonání pokusu a <b>účinná lítost</b> (u některých TČ) mohou založit zánik trestnosti.' },
      { t: 'table', head: ['Tresty (§ 52 an.)', 'Poznámky'], rows: [
        ['Odnětí svobody', 'nepodmíněné nebo podmíněné (podmíněné odsouzení se zkušební dobou 1–5 let, event. s dohledem); věznice s dohledem, s dozorem, s ostrahou, se zvýšenou ostrahou; <b>výjimečný trest</b> (nad 20 do 30 let nebo doživotí)'],
        ['Domácí vězení, obecně prospěšné práce', 'alternativní tresty u méně závažných činů'],
        ['Peněžitý trest, propadnutí majetku, propadnutí věci', 'majetkové tresty'],
        ['Zákaz činnosti, zákaz pobytu, zákaz vstupu na sportovní a jiné akce, vyhoštění, ztráta čestných titulů', 'ostatní tresty'],
        ['Ochranná opatření', 'ochranné léčení, zabezpečovací detence, zabrání věci – nejsou trest']
      ] },
      { t: 'tip', x: 'Trest ukládá <b>jen soud</b>. Při ukládání trestu se přihlíží k okolnostem polehčujícím a přitěžujícím, zmenšené příčetnosti, osobním poměrům. Zahlazení odsouzení – po uplynutí doby se hledí na pachatele, jako by nebyl odsouzen.' },
      { t: 'p', x: '<b>Trestní řízení</b> (TŘ): <b>přípravné řízení</b> (policejní orgán a státní zástupce – zahájení trestního stíhání sdělením obvinění, vyšetřování, podání obžaloby) → <b>řízení před soudem</b> (hlavní líčení, rozsudek; poškozený, obhájce) → opravné prostředky (odvolání, dovolání, stížnost pro porušení zákona) → <b>vykonávací řízení</b>. Dozor nad přípravným řízením má státní zástupce; trest vynáší soud.' }
    ] },
    { title: 'Trestné činy související s činností veřejných osob', blocks: [
      { t: 'def', term: 'Úřední osoba', x: 'Osoba, která se podílí na výkonu pravomoci orgánu veřejné moci a je k tomu oprávněna (§ 127 TZ) – zejména soudce, státní zástupce, policista, člen zastupitelstva a rady obce či kraje, starosta, úředník s rozhodovací pravomocí. Zneužití pravomoci a maření úkolu mohou spáchat jen úřední osoby (zvláštní subjekt).' },
      { t: 'table', head: ['Trestný čin', 'Podstata', 'Poznámky'], rows: [
        ['<b>Zneužití pravomoci úřední osoby</b> (§ 329)', 'Úřední osoba v úmyslu způsobit jinému škodu nebo jinou závažnou újmu nebo opatřit sobě či jinému neoprávněný prospěch vykoná svou pravomoc způsobem odporujícím jinému právnímu předpisu, překročí pravomoc, nebo nesplní povinnost vyplývající z pravomoci.', 'úmyslný čin zvláštního subjektu; kvalifikované skutkové podstaty (větší prospěch / škoda, závažný následek)'],
        ['<b>Maření úkolu úřední osoby</b> (§ 330; z nedbalosti)', 'Úřední osoba z nedbalosti poruší důležitou povinnost vyplývající z její pravomoci a způsobí tím závažnou újmu / zmaří důležitý úkol.', 'nedbalostní čin zvláštního subjektu'],
        ['<b>Přijetí úplatku</b> (§ 331)', 'Kdo v souvislosti s obstaráváním věcí obecného zájmu (příp. v souvislosti s podnikáním) přijme, nechá si slíbit nebo požaduje úplatek.', 'může spáchat kdokoli; úplatek = neoprávněná výhoda (peníze, dar, služba), na kterou není nárok'],
        ['<b>Podplácení</b> (§ 332)', 'Kdo jinému v souvislosti s obstaráváním věcí obecného zájmu úplatek poskytne, nabídne nebo slíbí.', 'druhá strana korupčního jednání; trestný i pokus nabídnutí'],
        ['<b>Nepřímé úplatkářství</b> (§ 333)', 'Kdo žádá, přijme nebo slíbí úplatek za to, že bude působit na výkon pravomoci úřední osoby (obchodování s vlivem), nebo takový úplatek poskytne.', 'zprostředkovatel / „lobbista“ s vlivem']
      ] },
      { t: 'ul', items: [
        'Související: <b>porušení povinnosti při správě cizího majetku</b> (§ 220 úmyslné, § 221 nedbalostní) – starosta, manažer státní firmy, správce majetku; pletichy při zadání veřejné zakázky, ve veřejné soutěži a ve veřejné dražbě; poškození finančních zájmů EU; <b>neoznámení</b> a <b>nepřekažení</b> trestného činu (§ 368, § 367) u nejzávažnějších TČ.',
        'Mimo TZ: povinnosti podle zákona o střetu zájmů (159/2006 Sb.) – oznamovací povinnost veřejných funkcionářů; porušení vede ke správní odpovědnosti (přestupek).',
        '<b>Úplatek</b> je trestný i při pouhém slíbení a při jeho požadování; k dokonání není třeba, aby se skutečně vykonala činnost, za kterou byl úplatek poskytnut.'
      ] },
      { t: 'ex', x: 'Referent stavebního úřadu přijme od stavebníka 20 000 Kč za to, že rychleji vydá povolení → <b>přijetí úplatku</b> (referent) a <b>podplácení</b> (stavebník). Pokud by úředník úmyslně vydal povolení v rozporu se zákonem, aby opatřil prospěch sobě → i <b>zneužití pravomoci úřední osoby</b>.' },
      { t: 'warn', x: 'Znění sazeb a kvalifikovaných podstat korupčních trestných činů se mění (novely TZ). U zkoušky stačí znát pojem, rozdíl mezi přijetím úplatku a podplácením, zvláštní subjekt u § 329 a § 330 a to, že korupce zahrnuje i pouhé slíbení či požadování.' }
    ] },
    { title: 'Trestní odpovědnost právnických osob (TOPO)', blocks: [
      { t: 'p', x: 'Zákon č. 418/2011 Sb., o trestní odpovědnosti právnických osob a řízení proti nim (účinný od 1. 1. 2012) zavedl trestní odpovědnost <b>právnických osob</b> (obchodní společnosti, družstva, spolky, obce – ale ne při výkonu veřejné moci). Řízení se řídí zvláštními pravidly zákona, jinak se přiměřeně užije trestní řád.' },
      { t: 'table', head: ['Otázka', 'Odpověď'], rows: [
        ['<b>Kdo odpovídá</b>', 'právnická osoba (soukromoprávní i veřejnoprávní), ale <b>ne</b> Česká republika a územní samosprávné celky při výkonu veřejné moci (§ 6); odpovídá i právní nástupce při zániku PO.'],
        ['<b>Za co</b>', 'Za trestné činy vymezené zákonem (dříve taxativní výčet, dle novely od 12/2016 v podstatě za všechny TČ s výjimkami – § 7; ověřte aktuální znění).'],
        ['<b>Přičitatelnost</b> (§ 8)', 'TČ spáchaný jménem PO, v jejím zájmu nebo v rámci její činnosti, jestliže ho spáchal statutární orgán nebo člen, osoba ve vedoucím postavení nebo s rozhodující pravomocí, případně zaměstnanec při plnění pracovních úkolů – za podmínky, že TČ byl spáchán na základě rozhodnutí, schválení nebo pokynu orgánu PO, nebo že vedení nepřijalo nutná opatření (kontrola).'],
        ['<b>Liberace</b>', 'PO se může zprostit odpovědnosti, prokáže-li, že vynaložila veškeré úsilí, které lze požadovat, aby TČ zabránila (tzv. compliance programy).'],
        ['<b>Tresty PO</b>', 'zrušení právnické osoby; propadnutí majetku; peněžitý trest; propadnutí věci; zákaz činnosti; zákaz plnění veřejných zakázek, účasti v koncesním řízení a poskytování dotací a subvencí; uveřejnění rozsudku.'],
        ['<b>Vztah k FO</b>', 'odpovědnost PO nevylučuje trestní odpovědnost fyzické osoby (statutárního orgánu, zaměstnance), která čin spáchala.']
      ] },
      { t: 'ex', x: 'Jednatel s. r. o. podplatí úředníka, aby firma získala veřejnou zakázku. Odpovídá <b>jednatel</b> (podplácení) i <b>s. r. o.</b> (TOPO – čin spáchán v jejím zájmu osobou ve vedoucím postavení). Soud může firmě uložit např. peněžitý trest a zákaz účasti ve veřejných zakázkách; jednateli odnětí svobody.' },
      { t: 'tip', x: 'TOPO = „trestní odpovědnost právnických osob“ – zákon 418/2011 Sb., doplňuje trestní zákoník (40/2009 Sb.). PO nelze uložit odnětí svobody.' }
    ] }
  ],
  mistakes: [
    'Zaměnit hmotné trestní právo (trestní zákoník 40/2009 Sb.) a procesní (trestní řád 141/1961 Sb.) a zákon o TOPO (418/2011 Sb.).',
    'Tvrdit, že trestně odpovědné jsou už děti pod 15 let – hranice je <b>15 let</b>; mladiství 15–18 let podléhají zákonu o soudnictví ve věcech mládeže.',
    'Zaměnit <b>přečin</b> a <b>zločin</b> a zapomenout, že všechny nedbalostní trestné činy jsou přečiny.',
    'Zaměnit úmysl (přímý / nepřímý) a nedbalost (vědomá / nevědomá); u vědomé nedbalosti pachatel spoléhá, že se nic nestane, u nepřímého úmyslu je s následkem srozuměn.',
    'Zaměnit přijetí úplatku (přijímá) a podplácení (dává / nabízí); obojí je trestné i pouhým slíbením, a zaměnit s nepřímým úplatkářstvím (působení na úřední osobu).',
    'Myslet si, že trestní odpovědnost PO vylučuje odpovědnost fyzické osoby (jednatele) – nevylučuje; netýká se státu a samosprávných celků při výkonu veřejné moci.',
    'Použít analogii v neprospěch pachatele – v trestním právu je zakázána (<i>nullum crimen sine lege</i>).',
    'Zaměnit krajní nouzi (odvrácení hrozícího nebezpečí z jakéhokoli zdroje) a nutnou obranu (odvrácení útoku); u obou platí přiměřenost.'
  ],
  qa: [
    { q: 'Co je trestný čin a jaké má znaky?', a: 'Protiprávní čin, který trestní zákoník označuje za trestný a který vykazuje znaky uvedené v zákoně (§ 13). Znaky skutkové podstaty: objekt, objektivní stránka (jednání, následek, příčinná souvislost), subjekt (pachatel – 15 let, příčetný) a subjektivní stránka (zavinění – úmysl nebo nedbalost).' },
    { q: 'Které zásady ovládají trestní právo?', a: 'Nullum crimen sine lege (čl. 39 Listiny), zákaz analogie a retroaktivity v neprospěch pachatele, subsidiarita trestní represe (§ 12 odst. 2), presumpce neviny (čl. 40 Listiny), in dubio pro reo, ne bis in idem, odpovědnost za zavinění.' },
    { q: 'Rozdíl mezi přečinem a zločinem, co je zvlášť závažný zločin?', a: 'Přečin = všechny nedbalostní trestné činy a úmyslné s horní hranicí sazby odnětí svobody do 5 let. Zločin = ostatní trestné činy. Zvlášť závažný zločin = úmyslný trestný čin s horní hranicí sazby nejméně 10 let (§ 14).' },
    { q: 'Rozdíl mezi úmyslem a nedbalostí.', a: 'Úmysl: přímý (chtěl způsobit následek) a nepřímý (věděl, že může, a byl srozuměn). Nedbalost: vědomá (věděl, že může způsobit následek, ale spoléhal, že ne) a nevědomá (nevěděl, ale vědět měl a mohl). Nedbalostní činy jsou trestné jen tam, kde to zákon výslovně stanoví.' },
    { q: 'Kazuistika: Pepovi je 14 let, ukradne v obchodě zboží. Je trestně odpovědný? A když mu je 16?', a: 'Ve 14 letech trestně odpovědný není (hranice 15 let) – řeší se opatřeními mimo trestní právo. V 16 letech je mladistvým a posuzuje se podle zákona o soudnictví ve věcech mládeže (provinění), uplatňují se výchovná opatření i sankce.' },
    { q: 'Co je příčetnost? Odpovídá nepříčetný pachatel?', a: 'Schopnost rozpoznat protiprávnost činu a ovládat své jednání. Nepříčetný pachatel (§ 26) není trestně odpovědný (lze uložit ochranné léčení). Zmenšená příčetnost (§ 27) je okolnost zohledňovaná při trestu. Kdo se uvedl do stavu nepříčetnosti sám (alkohol, drogy), nepříčetnosti se dovolat nemůže.' },
    { q: 'Vyjmenujte okolnosti vylučující protiprávnost.', a: 'Krajní nouze (§ 28), nutná obrana (§ 29), svolení poškozeného, přípustné riziko, oprávněné použití zbraně (§ 28–32). Nutná obrana nesmí být zcela zjevně nepřiměřená útoku; při krajní nouzi nesmí být způsobený následek stejně závažný nebo závažnější než hrozící.' },
    { q: 'Kazuistika: Pepa ráno napadne Járu nožem, Jára se brání a Pepu zraní. Je Jára trestně odpovědný?', a: 'Nejspíše ne – jedná v nutné obraně (§ 29): odvrací přímo hrozící útok, a pokud jeho obrana není zcela zjevně nepřiměřená způsobu útoku, protiprávnost jeho jednání je vyloučena. Při excesu (zjevně nepřiměřená obrana) by odpovídal za čin, byť s mírnějším posouzením.' },
    { q: 'Jaká jsou stádia trestné činnosti?', a: 'Příprava (§ 20 – trestná jen u zvlášť závažných zločinů, kde to zákon stanoví), pokus (§ 21 – jednání bezprostředně směřující k dokonání, k němuž nedošlo), dokonání. Trestnost pokusu zaniká dobrovolným upuštěním od dokonání. Účastníci: organizátor, návodce, pomocník.' },
    { q: 'Jaké druhy trestů zná trestní zákoník?', a: 'Odnětí svobody (nepodmíněné, podmíněné, výjimečný trest nad 20 až 30 let a doživotí), domácí vězení, obecně prospěšné práce, peněžitý trest, propadnutí majetku, propadnutí věci, zákaz činnosti, zákaz pobytu, zákaz vstupu na akce, vyhoštění. Vedle toho ochranná opatření (ochranné léčení, zabezpečovací detence, zabrání věci).' },
    { q: 'Kdo je úřední osoba a jaké trestné činy může spáchat?', a: 'Osoba podílející se na výkonu pravomoci orgánu veřejné moci a oprávněná k tomu (soudce, státní zástupce, policista, starosta, člen zastupitelstva, úředník). Spáchá zejména zneužití pravomoci úřední osoby (§ 329, úmyslné), maření úkolu úřední osoby (§ 330, nedbalostní) a může být pachatelem přijetí úplatku (§ 331).' },
    { q: 'Rozdíl mezi přijetím úplatku, podplácením a nepřímým úplatkářstvím.', a: 'Přijetí úplatku (§ 331): kdo úplatek přijme, nechá si slíbit nebo požaduje v souvislosti s obstaráváním věcí obecného zájmu. Podplácení (§ 332): kdo úplatek poskytne, nabídne nebo slíbí. Nepřímé úplatkářství (§ 333): úplatek za působení (vliv) na výkon pravomoci úřední osoby.' },
    { q: 'Kazuistika: Starosta obce zadá zakázku firmě svého bratra bez výběrového řízení, bratr mu za to dá 100 000 Kč. Jaké TČ přicházejí v úvahu?', a: 'Starosta: přijetí úplatku (§ 331) a případně zneužití pravomoci úřední osoby (§ 329), pokud jednal v rozporu s předpisy v úmyslu opatřit neoprávněný prospěch. Bratr: podplácení (§ 332). Případně i porušení povinnosti při správě cizího majetku (§ 220). Odpovídá i firma, pokud byl čin spáchán v jejím zájmu (TOPO).' },
    { q: 'Co je TOPO a kdo za trestný čin právnické osoby odpovídá?', a: 'Zákon č. 418/2011 Sb. (od 2012) zavádí trestní odpovědnost právnických osob. PO odpovídá za čin spáchaný jejím jménem, v jejím zájmu nebo v rámci její činnosti osobou ve vedoucím postavení nebo statutárním orgánem (případně zaměstnancem, pokud vedení neučinilo kontrolní opatření). Odpovědnost fyzické osoby se tím nevylučuje; netýká se státu a samosprávných celků při výkonu veřejné moci.' },
    { q: 'Jaké tresty lze uložit právnické osobě?', a: 'Zrušení PO, propadnutí majetku, peněžitý trest, propadnutí věci, zákaz činnosti, zákaz plnění veřejných zakázek, účasti v koncesním řízení a přijímání dotací, uveřejnění rozsudku. Odnětí svobody uložit nelze.' }
  ]
});
