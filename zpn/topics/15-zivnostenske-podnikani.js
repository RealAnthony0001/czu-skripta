registerTopic({
  id: 'zivnostenske-podnikani', order: 17, icon: '🏪', title: 'Podnikání a živnostenské právo', src: 'podklady', where: 'IV. seminář – veřejnoprávní úprava podnikání (JUDr. Cvik) + 4. seminární cvičení (Dodamgoda) + seznam oborů volné živnosti + domácí úloha k IV. semináři',
  summary: 'Pojmy podnikání, podnikatel, podnik, obchodní firma, živnost; prameny; všeobecné a zvláštní podmínky a překážky provozování živnosti; ohlašovací (řemeslné, vázané, volné) a koncesované živnosti; vznik, rozsah a zánik oprávnění; živnostenská kontrola a přestupky; živnostenské úřady a rejstřík; svobodná povolání a zemědělské podnikání; podnikání × zaměstnání.',
  vocab: [
    { w: 'OZ, ŽZ, ŽÚ, ŽR', x: 'Občanský zákoník (89/2012 Sb.), živnostenský zákon (455/1991 Sb.), živnostenský úřad, živnostenský rejstřík.' },
    { w: 'OSVČ', x: 'Osoba samostatně výdělečně činná – fyzická osoba, která podniká na vlastní účet a odpovědnost (živnostník).' },
    { w: 'IČO', x: 'Identifikační číslo osoby – jedinečný identifikátor podnikatele nebo jiné právnické osoby.' },
    { w: 'Koncese', x: 'Správní rozhodnutí, kterým úřad povolí provozovat koncesovanou živnost.' },
    { w: 'Příloha ŽZ', x: 'Seznam živností v zákoně: příloha 1 řemeslné, 2 vázané, 3 koncesované, 4 obory volné živnosti.' },
    { w: 'Přenesená působnost', x: 'Obec nebo kraj vykonává státní správu svěřenou zákonem (např. živnostenský úřad) – ne vlastní samosprávu.' },
    { w: 'Bezúhonnost', x: 'Osoba nebyla pravomocně odsouzena pro úmyslný trestný čin spáchaný v souvislosti s podnikáním či předmětem podnikání.' },
    { w: 'Lex specialis', x: 'Zvláštní předpis, který má přednost před obecným (např. zákon o advokacii před živnostenským zákonem).' }
  ],
  key: [
    '<b>Podnikání</b> (§ 420 odst. 1 OZ): činnost vykonávaná <b>samostatně, na vlastní účet a odpovědnost, soustavně, za účelem dosažení zisku</b>. Podnikatel může být FO (OSVČ) i PO (s.r.o., a.s.).',
    '<b>Živnost</b>: soustavná činnost provozovaná samostatně, vlastním jménem, na vlastní odpovědnost, za účelem zisku a <b>za podmínek ŽZ</b>; provozovat ji lze jen na základě <b>živnostenského oprávnění</b>. Živností není činnost lékařů, advokátů, soudních exekutorů aj.',
    '<b>Všeobecné podmínky</b>: <b>plná svéprávnost</b> a <b>bezúhonnost</b>. <b>Zvláštní</b>: odborná nebo jiná způsobilost (řemeslné, vázané, koncesované).',
    '<b>Ohlašovací</b> živnosti: <b>řemeslné</b> (př. 1), <b>vázané</b> (př. 2), <b>volné</b> (př. 4, bez odborné způsobilosti); <b>koncesované</b> (př. 3) potřebují koncesi.',
    '<b>Vznik oprávnění</b>: ohlašovací – <b>dnem ohlášení</b>; koncesované – <b>dnem právní moci rozhodnutí o koncesi</b>. Zápis do ŽR do <b>5 pracovních dnů</b>.',
    '<b>Překážka</b>: konkurz na majetek; 3 roky po zamítnutí insolvenčního návrhu nebo zrušení konkurzu pro nedostatek majetku (ŽÚ může prominout).',
    '<b>Úřady</b>: obecní ŽÚ → krajský ŽÚ → MPO (působnost Živnostenského úřadu ČR, správce ŽR); obecní a krajské ŽÚ v přenesené působnosti.',
    '<b>Mimo ŽZ</b>: svobodná povolání (zvláštní zákony, komory) a zemědělské podnikání (evidence na ORP podle zákona č. 252/1997 Sb.).'
  ],
  sections: [
    { title: 'Základní pojmy podnikání', blocks: [
      { t: 'table', head: ['Pojem', 'Význam'], rows: [
        ['<b>Podnikání</b>', 'činnost vykonávaná samostatně, na vlastní účet a odpovědnost, soustavně, za účelem dosažení zisku (§ 420 odst. 1 OZ)'],
        ['<b>Podnikatel</b>', 'osoba, která podnikání vykonává – fyzická (OSVČ, živnostník) nebo právnická (např. s.r.o., a.s.)'],
        ['<b>Podnik</b>', 'organizovaný soubor jmění, který podnikatel vytvořil a který slouží k provozování jeho činnosti'],
        ['<b>Obchodní firma</b>', 'jméno, pod kterým je podnikatel zapsán do veřejného rejstříku a vystupuje v právních vztazích („xxx, s.r.o.“); u OSVČ zpravidla jméno a příjmení'],
        ['<b>Živnostník (OSVČ)</b>', 'fyzická osoba podnikající na základě živnostenského oprávnění'],
        ['<b>Spotřebitel</b>', 'každý člověk, který <b>mimo rámec své podnikatelské činnosti</b> uzavírá smlouvu s podnikatelem nebo s ním jinak jedná'],
        ['<b>Provozovna</b>', 'prostor, ve kterém se podnikatelská činnost vykonává (prodejna, kancelář, dílna, restaurace)'],
        ['<b>Obchodní rejstřík</b>', 'veřejný rejstřík vedený soudy, do kterého se zapisují zejména obchodní společnosti a některé další osoby'],
        ['<b>IČO</b>', 'jedinečný identifikátor podnikatele nebo jiné právnické osoby']
      ] },
      { t: 'table', head: ['Právní úprava podnikání', 'Obsah'], rows: [
        ['Zákon č. 89/2012 Sb., občanský zákoník', 'podnikatel, obchodní firma, závazky'],
        ['Zákon č. 90/2012 Sb., o obchodních korporacích', 'obchodní společnosti a družstva – viz téma <a href="#/obchodni-korporace">Obchodní korporace</a>'],
        ['Zákon č. 455/1991 Sb., živnostenský zákon', 'podmínky živnostenského podnikání a jejich kontrola'],
        ['Zákon č. 304/2013 Sb., o veřejných rejstřících', 'obchodní rejstřík a další veřejné rejstříky']
      ] }
    ] },
    { title: 'Správa živností: prameny a pojem živnosti', blocks: [
      { t: 'law', ref: 'Listina základních práv a svobod, čl. 26', x: 'Každý má právo na svobodnou volbu povolání a přípravu k němu, jakož i právo podnikat a provozovat jinou hospodářskou činnost.' },
      { t: 'ul', items: [
        '<b>Prameny</b>: zákon č. 455/1991 Sb., o živnostenském podnikání; zákon č. 570/1991 Sb., o živnostenských úřadech; zákon č. 18/2004 Sb., o uznávání odborné kvalifikace; nařízení vlády č. 278/2008 Sb. (obsahové náplně jednotlivých živností); zákon č. 500/2004 Sb., správní řád; zákon č. 250/2016 Sb., o odpovědnosti za přestupky; občanský zákoník.',
        '<b>Předmět ŽZ</b>: podmínky provozování živnostenského podnikání a kontrola nad jejich dodržováním.',
        '<b>Podnikatel podle ŽZ</b>: FO nebo PO, která provozuje živnost a splnila podmínky ŽZ.',
        'Živnostenské podnikání je specifická oblast podnikání ve <b>výrobě, obchodu a službách</b>.'
      ] },
      { t: 'def', term: 'Živnost', x: 'Soustavná činnost provozovaná za podmínek stanovených živnostenským zákonem:', items: ['<b>samostatně</b>', '<b>vlastním jménem</b>', '<b>na vlastní odpovědnost</b>', '<b>za účelem dosažení zisku</b>', 'provozovat ji lze <b>jen na základě živnostenského oprávnění</b>', 'živností <b>není</b> např. činnost lékařů, advokátů, soudních exekutorů'] }
    ] },
    { title: 'Podmínky a překážky provozování živnosti', blocks: [
      { t: 'versus', title: 'Všeobecné × zvláštní podmínky', x: 'Všeobecné podmínky musí splnit každý, kdo chce provozovat jakoukoli živnost: být plně svéprávný a bezúhonný. Zvláštní podmínky přistupují jen u některých živností – řemeslných, vázaných a koncesovaných – a spočívají v odborné nebo jiné způsobilosti. Proto si volnou živnost (např. maloobchod) může ohlásit každý svéprávný a bezúhonný člověk, kdežto na řeznictví už potřebuje doklad o vyučení v oboru.', cols: [
        { h: 'Všeobecné', items: ['<b>plná svéprávnost</b> – lze ji nahradit přivolením soudu k souhlasu zákonného zástupce nezletilého se samostatným podnikáním', '<b>bezúhonnost</b>'] },
        { h: 'Zvláštní', items: ['<b>odborná způsobilost</b> – znalosti a dovednosti ze vzdělání, praxe, jejich kombinace nebo zkoušky', '<b>jiná způsobilost</b> – jiné než všeobecné podmínky a odborná způsobilost', 'vyžaduje ji ŽZ nebo zvláštní předpis'] }
      ] },
      { t: 'def', term: 'Bezúhonnost pro účely ŽZ', x: 'Za bezúhonnou se <b>nepovažuje</b> osoba, která byla pravomocně odsouzena:', items: ['pro trestný čin spáchaný <b>úmyslně</b>,', 'jestliže byl spáchán <b>v souvislosti s podnikáním</b> nebo s předmětem podnikání, o který žádá či který ohlašuje,', 'pokud se na ni nehledí, jako by nebyla odsouzena.'] },
      { t: 'table', head: ['Překážka provozování živnosti (FO i PO)', 'Trvání'], rows: [
        ['na majetek byl prohlášen <b>konkurz</b>', 'po dobu konkurzu'],
        ['<b>zamítnutí insolvenčního návrhu</b>, protože majetek nepostačoval k úhradě nákladů insolvenčního řízení; nebo <b>zastavení</b> insolvenčního řízení, protože majetek byl nedostačující', '<b>3 roky</b> od právní moci rozhodnutí'],
        ['<b>zrušení konkurzu</b>, protože majetek byl zcela nedostačující pro uspokojení věřitelů', '<b>3 roky</b> od právní moci rozhodnutí']
      ] },
      { t: 'tip', x: 'Živnostenský úřad může tyto překážky <b>prominout</b>, prokáže-li dlužník, že splňuje předpoklady pro řádné plnění povinností při podnikání a finančních závazků.' }
    ] },
    { title: 'Druhy živností', blocks: [
      { t: 'svg', title: 'Rozdělení živností', x: ZPN.zivnostiStrom(), cap: 'Živnosti se dělí na ohlašovací a koncesované. Ohlašovací se dál dělí na řemeslné, vázané (obě s odbornou způsobilostí, oranžově) a volné (bez ní, modře). U každé větve je příloha ŽZ, kde jsou vyjmenované, a okamžik vzniku oprávnění.' },
      { t: 'table', head: ['Druh', 'Podmínka', 'Příklady'], rows: [
        ['<b>Řemeslná</b> (příloha 1)', 'odborná způsobilost – např. doklad o středním vzdělání s výučním listem v oboru, doklad o uznání odborné kvalifikace', 'řeznictví, uzenářství, pekařství, cukrářství'],
        ['<b>Vázaná</b> (příloha 2, taxativně)', 'odborná způsobilost stanovená v příloze', 'geologické práce, zpracování tabáku, provádění staveb, projektová činnost ve výstavbě'],
        ['<b>Volná</b> (příloha 4)', 'odborná ani jiná způsobilost se <b>neprokazuje</b>; předmět je „výroba, obchod a služby neuvedené v přílohách 1–3“', 'zprostředkování obchodu a služeb, velkoobchod, maloobchod'],
        ['<b>Koncesovaná</b> (příloha 3, taxativně)', 'odborná způsobilost + <b>koncese</b> (povolení)', 'výroba a zpracování paliv a maziv, distribuce pohonných hmot, vnitrozemská vodní doprava, ostraha majetku a osob, provozování střelnic, taxislužba, prodej zbraní a střeliva, pyrotechnika']
      ] },
      { t: 'p', x: '<b>Volné živnosti</b> jsou u podnikatelů nejrozšířenější. Formulář Centrálního registračního místa „Seznam oborů činností náležejících do živnosti volné“ (MPO, vzor č. 08) jich vyjmenovává <b>82</b>; ohlašovatel u volné živnosti uvádí obory, které bude vykonávat. Například: 47 Zprostředkování obchodu a služeb, 48 Velkoobchod a maloobchod, 55 Ubytovací služby, 56 Poskytování software, poradenství v oblasti IT, zpracování dat, hostingové činnosti a webové portály, 60 Poradenská a konzultační činnost, 66 Reklamní činnost, marketing, mediální zastoupení, 69 Překladatelská a tlumočnická činnost, 72 Mimoškolní výchova a vzdělávání, pořádání kurzů a školení, 81 Služby spojené s virtuálním aktivem, 82 Výroba, obchod a služby jinde nezařazené.' },
      { t: 'warn', x: 'Slajd IV. semináře uvádí, že všechny ohlašovací živnosti (kromě volných) „nepodléhají udělení povolení, resp. regulaci ze strany státu“. Přesněji: <b>nevyžadují povolení (koncesi)</b>, ale stát je reguluje požadavkem odborné způsobilosti.' }
    ] },
    { title: 'Vznik, rozsah a zánik živnostenského oprávnění', blocks: [
      { t: 'versus', title: 'Ohlášení × žádost o koncesi', x: 'U ohlašovací živnosti stačí úřadu oznámit, že ji budu provozovat, a oprávnění vzniká už dnem ohlášení; úřad jen zkontroluje podmínky a do pěti pracovních dnů podnikatele zapíše do živnostenského rejstříku. U koncesované živnosti se žádá o povolení a oprávnění vzniká až právní mocí rozhodnutí o koncesi; je-li třeba souhlas jiného orgánu státní správy, ten má na stanovisko 30 dní a úřad je jím vázán. Kdo chce otevřít e-shop (volná živnost), může začít hned po ohlášení; kdo chce provozovat taxislužbu, musí počkat na koncesi.', cols: [
        { h: 'Ohlašovací (ohlašovatel)', items: ['ohlásí živnost ŽÚ a <b>dostatečně určitě</b> vymezí předmět podnikání', 'u volné živnosti uvede <b>obory činnosti</b>; řemeslné a vázané v souladu s přílohami 1 a 2', 'na <b>Jednotném registračním formuláři</b>', 'oprávnění vzniká <b>dnem ohlášení</b>', 'splní-li podmínky, ŽÚ zapíše do ŽR do <b>5 pracovních dnů</b> a vydá <b>výpis</b>, kterým podnikatel prokazuje oprávnění'] },
        { h: 'Koncesovaná (žadatel)', items: ['podá u ŽÚ <b>žádost o koncesi</b>', 'je-li nutné oprávnění, souhlas či vyjádření orgánu státní správy, ŽÚ mu žádost předloží; orgán zaujme stanovisko do <b>30 dnů</b> a ŽÚ je jím <b>vázán</b>', 'splní-li podmínky, ŽÚ vydá <b>rozhodnutí o udělení koncese</b>', 'oprávnění vzniká <b>právní mocí</b> rozhodnutí', 'zápis do ŽR do <b>5 pracovních dnů</b> od právní moci'] }
      ] },
      { t: 'p', x: '<b>Rozsah oprávnění</b> vymezuje u každé živnosti soubor činností, které jsou jí vlastní (např. pekařství, cukrářství); podrobně <b>nařízení vlády o obsahových náplních jednotlivých živností</b>. <b>Překročení rozsahu</b> oprávnění je přestupkem podle ŽZ.' },
      { t: 'versus', title: 'Pozastavení a zrušení × zánik oprávnění', x: 'Živnostenský úřad může do oprávnění zasáhnout: pozastavit provozování živnosti (celé nebo jen v provozovně) nebo oprávnění zrušit, například když podnikatel závažně poruší podmínky koncese. Vedle toho oprávnění zaniká samo z objektivních důvodů – smrtí podnikatele, zánikem právnické osoby nebo uplynutím doby, na kterou bylo omezeno. Když živnostník zemře, oprávnění zanikne bez jakéhokoli rozhodnutí; když opakovaně porušuje podmínky koncese, musí úřad vést správní řízení a oprávnění zrušit rozhodnutím.', cols: [
        { h: 'Zásah úřadu', items: ['pozastavení provozování živnosti', 'pozastavení provozování živnosti v provozovně', 'zrušení oprávnění (např. závažné porušení podmínek koncese)'] },
        { h: 'Zánik oprávnění', items: ['smrt podnikatele', 'zánik právnické osoby', 'uplynutí doby, bylo-li oprávnění omezeno na dobu', 'výmaz zahraniční osoby nebo jejího předmětu podnikání z OR', 'stanoví-li to zvláštní předpis', 'rozhodnutí ŽÚ o zrušení (ve správním řízení)'] }
      ] }
    ] },
    { title: 'Kontrola, přestupky, úřady a rejstřík', blocks: [
      { t: 'ul', items: [
        '<b>Živnostenská kontrola</b>: provádějí ji živnostenské úřady podle zákona č. 255/2012 Sb., o kontrole; fakticky zpravidla obecní ŽÚ, jejichž zaměstnanci se musí prokázat pověřením nebo průkazem.',
        'ŽÚ kontrolují plnění povinností podle <b>ŽZ i jiných předpisů</b> vztahujících se k živnostenskému podnikání; kontrolují podnikatele i osoby, které podnikají <b>bez oprávnění</b>.',
        'Na kontrolu navazuje oprávnění ŽÚ uložit podnikateli rozhodnutím <b>povinnost odstranit nedostatky</b>.',
        '<b>Správní trestání</b>: povinnostem ze ŽZ odpovídají skutkové podstaty přestupků FO, podnikajících FO a PO – např. provozování živnosti <b>bez oprávnění</b>. Sankcí může být i <b>pozastavení</b> práva provozovat živnost nebo <b>zrušení</b> oprávnění.'
      ] },
      { t: 'svg', title: 'Živnostenské úřady', x: ZPN.zivnostUrady(), cap: 'Tři úrovně státní správy na úseku živností, zdola nahoru: obecní ŽÚ, krajský ŽÚ a ministerstvo. Šipka „odvolání“ ukazuje, kdo rozhoduje o odvolání proti rozhodnutí nižšího úřadu. Vpravo hlavní úkoly každé úrovně.' },
      { t: 'ul', items: [
        '<b>Obecní a krajské ŽÚ</b> vykonávají státní správu v <b>přenesené působnosti</b>. <b>Živnostenský úřad ČR</b> dosud nebyl zřízen – jeho působnost vykonává Odbor živností <b>Ministerstva průmyslu a obchodu</b>.',
        '<b>Obecní ŽÚ</b> jako <b>centrální registrační místo</b> přijímá přihlášky k registraci a oznámení pro správce daně, oznámení pro sociální zabezpečení a zdravotní pojišťovny a oznámení o volných pracovních místech.',
        '<b>Krajský ŽÚ</b>: řídící, koordinační, kontrolní a metodická činnost vůči obecním ŽÚ; může nařídit kontrolu; rozhoduje o odvoláních proti obecním ŽÚ; spolupracuje s úřady, komorami a svazy; provozuje rejstřík.',
        '<b>MPO</b>: koncepce živnostenského podnikání; řízení a kontrola krajských ŽÚ; odvolání proti krajským ŽÚ; v zákonem stanovených případech rozhoduje v 1. stupni; <b>správce</b> živnostenského rejstříku.'
      ] },
      { t: 'def', term: 'Živnostenský rejstřík', x: 'Informační systém veřejné správy (zákon č. 365/2000 Sb.).', items: ['správce: Živnostenský úřad ČR – jeho působnost vykonává MPO; provozovatelé: obecní a krajské ŽÚ', 'vede se elektronicky; z velké většiny je <b>veřejným seznamem</b> – dálkový přístup na www.rzp.cz', '<b>neveřejné</b> jsou jen údaje o sankcích a pokutách, adresy pro doručování a rodná čísla FO'] }
    ] },
    { title: 'Podnikání mimo živnostenský zákon', blocks: [
      { t: 'def', term: 'Svobodná povolání', x: 'Podnikání fyzické osoby na základě <b>jiného než živnostenského zákona</b>.', items: [
        'nejčastěji příjmy podle autorského zákona nebo zvláštních předpisů',
        'vykonávají je jen <b>fyzické osoby, přímo</b>; formou PO jen za stanovených podmínek, kdy rozhoduje výkon FO (např. advokacie formou obchodní společnosti)',
        'zákony o těchto povoláních jsou <b>lex specialis</b> vůči ŽZ a mají přednost',
        'pro většinu svobodných povolání jsou na základě čl. 26 odst. 2 LZPS zřízeny <b>komory</b> – veřejnoprávní korporace (podobně jako obce)'
      ] },
      { t: 'def', term: 'Zemědělské podnikání', x: 'Evidence zemědělských podnikatelů podle § 2e až 2ha zákona č. 252/1997 Sb., o zemědělství.', items: [
        'kdo hodlá provozovat zemědělskou výrobu soustavně, samostatně, vlastním jménem, na vlastní odpovědnost a za účelem zisku, musí se <b>zaevidovat jako zemědělský podnikatel</b>',
        'na <b>jakémkoli obecním úřadu obce s rozšířenou působností</b> (ORP); ORP jsou provozovateli, správcem systému je <b>Ministerstvo zemědělství</b>',
        'evidence je veřejná v části se jménem / firmou, bydlištěm či sídlem, IČO a datem zápisu'
      ] }
    ] },
    { title: 'Podnikání × zaměstnání (domácí úloha k IV. semináři)', blocks: [
      { t: 'p', x: 'K semináři se připravuje písemné srovnání (asi 1 strana A4) samostatného podnikání (zejména OSVČ) a zaměstnání v pracovním poměru a vlastní argumentované stanovisko. Hodnotí se kvalita argumentace, kritické uvažování a odůvodnění – ne to, co si vyberete. U každé výhody a nevýhody je třeba vysvětlit, <b>proč</b> to výhoda či nevýhoda je.' },
      { t: 'table', head: ['Hledisko', 'Podnikání (OSVČ)', 'Zaměstnání'], rows: [
        ['Příjmy a jejich stabilita', 'neomezený, ale kolísavý zisk; riziko ztráty', 'sjednaná mzda, pravidelná výplata'],
        ['Pracovní doba, samostatnost', 'sám si určuje čas i postup; pracuje <b>samostatně, vlastním jménem</b>', 'práce <b>podle pokynů</b>, v pracovní době, ve vztahu podřízenosti'],
        ['Odpovědnost a riziko', 'na <b>vlastní účet a odpovědnost</b>; OSVČ ručí <b>celým svým majetkem</b>', 'práce <b>na náklady a odpovědnost zaměstnavatele</b>'],
        ['Úprava vztahu', 'živnostenský zákon, OZ; vztahy s odběrateli smlouvami mezi podnikateli', 'zákoník práce – ochranná funkce pracovního práva'],
        ['Administrativa', 'ohlášení živnosti, registrace přes centrální registrační místo (daně, sociální a zdravotní pojištění)', 'odvody a daň zajišťuje zaměstnavatel']
      ] },
      { t: 'tip', x: 'Tabulka shrnuje rozdíly, které plynou z podkladů (znaky podnikání a závislé práce, ručení OSVČ, centrální registrační místo). Další hlediska ze zadání – nemocenské, dovolená, výše odvodů – si doplň sám z aktuálních předpisů; to je součást úlohy.' }
    ] }
  ],
  mistakes: [
    'Všeobecné podmínky jsou jen <b>plná svéprávnost a bezúhonnost</b>; odborná způsobilost je podmínka <b>zvláštní</b>.',
    'Bezúhonnost neztrácí každý odsouzený – jen za <b>úmyslný</b> TČ spáchaný v souvislosti s podnikáním nebo s ohlašovaným předmětem podnikání.',
    'Oprávnění k ohlašovací živnosti vzniká <b>dnem ohlášení</b>, ne zápisem do rejstříku; ke koncesované <b>právní mocí</b> rozhodnutí o koncesi.',
    'Volná živnost = <b>příloha 4</b>, bez odborné způsobilosti; řemeslná (př. 1) a vázaná (př. 2) s odbornou způsobilostí; koncesovaná = <b>příloha 3</b>.',
    'Lékař, advokát nebo soudní exekutor <b>nepodniká na živnost</b> – jde o svobodná povolání podle zvláštních zákonů.',
    'Zemědělský podnikatel se neohlašuje na ŽÚ, ale <b>eviduje na obecním úřadu obce s rozšířenou působností</b>.',
    'Živnostenský úřad ČR neexistuje – jeho působnost vykonává <b>MPO</b>, které je správcem živnostenského rejstříku.'
  ],
  qa: [
    { q: 'Jak OZ definuje podnikání a kdo je podnikatel?', a: 'Podnikání je činnost vykonávaná samostatně, na vlastní účet a odpovědnost, soustavně, za účelem dosažení zisku (§ 420 odst. 1 OZ). Podnikatel je osoba, která ji vykonává – FO (OSVČ, živnostník) nebo PO (s.r.o., a.s.).' },
    { q: 'Co je podnik, obchodní firma a provozovna?', a: 'Podnik je organizovaný soubor jmění, který podnikatel vytvořil k provozování činnosti. Obchodní firma je jméno zapsané ve veřejném rejstříku, pod kterým podnikatel vystupuje (u OSVČ zpravidla jméno a příjmení). Provozovna je prostor, kde se činnost vykonává.' },
    { q: 'Co je živnost a co živností není?', a: 'Soustavná činnost provozovaná samostatně, vlastním jménem, na vlastní odpovědnost, za účelem zisku a za podmínek ŽZ; jen na základě živnostenského oprávnění. Živností není např. činnost lékařů, advokátů a soudních exekutorů.' },
    { q: 'Jaké jsou všeobecné a zvláštní podmínky provozování živnosti?', a: 'Všeobecné: plná svéprávnost (lze nahradit přivolením soudu k souhlasu zákonného zástupce nezletilého) a bezúhonnost. Zvláštní: odborná nebo jiná způsobilost, vyžaduje-li ji ŽZ nebo zvláštní předpis.' },
    { q: 'Kdo není bezúhonný podle ŽZ?', a: 'Osoba pravomocně odsouzená pro úmyslný trestný čin spáchaný v souvislosti s podnikáním nebo s předmětem podnikání, o který žádá či který ohlašuje – pokud se na ni nehledí, jako by nebyla odsouzena.' },
    { q: 'Kdy nemůže FO nebo PO provozovat živnost kvůli insolvenci?', a: 'Je-li na její majetek prohlášen konkurz; a po 3 roky od právní moci zamítnutí insolvenčního návrhu či zastavení řízení pro nedostatek majetku, nebo od zrušení konkurzu pro zcela nedostačující majetek. ŽÚ může překážku prominout.' },
    { q: 'Jak se dělí živnosti?', a: 'Na ohlašovací – řemeslné (příloha 1, odborná způsobilost, např. pekařství), vázané (příloha 2, odborná způsobilost, např. provádění staveb) a volné (příloha 4, bez odborné způsobilosti, např. maloobchod) – a koncesované (příloha 3, koncese, např. ostraha majetku a osob, taxislužba).' },
    { q: 'Kdy vzniká živnostenské oprávnění?', a: 'U ohlašovacích živností dnem ohlášení, u koncesovaných dnem nabytí právní moci rozhodnutí o udělení koncese. ŽÚ zapíše podnikatele do ŽR do 5 pracovních dnů (u koncese od právní moci) a vydá výpis.' },
    { q: 'Jak probíhá řízení o koncesi?', a: 'Žadatel podá žádost u ŽÚ. Je-li třeba oprávnění, souhlas nebo vyjádření jiného orgánu státní správy, ŽÚ mu žádost předloží; orgán zaujme stanovisko do 30 dnů a ŽÚ je jím vázán. Splní-li žadatel podmínky, ŽÚ vydá rozhodnutí o udělení koncese.' },
    { q: 'Čím je vymezen rozsah živnostenského oprávnění?', a: 'Souborem činností vlastních dané živnosti, podrobně nařízením vlády o obsahových náplních jednotlivých živností (č. 278/2008 Sb.). Překročení rozsahu je přestupek podle ŽZ.' },
    { q: 'Kdy živnostenské oprávnění zaniká?', a: 'Smrtí podnikatele, zánikem PO, uplynutím doby (bylo-li omezeno na dobu), výmazem zahraniční osoby či jejího předmětu podnikání z OR, stanoví-li to zvláštní předpis, a rozhodnutím ŽÚ o zrušení ve správním řízení.' },
    { q: 'Kdo provádí živnostenskou kontrolu a co může uložit?', a: 'Živnostenské úřady (prakticky obecní ŽÚ) podle zákona o kontrole č. 255/2012 Sb.; kontrolují podnikatele i osoby podnikající bez oprávnění. Mohou rozhodnutím uložit odstranění nedostatků; za přestupky i pozastavení nebo zrušení oprávnění.' },
    { q: 'Jaká je soustava živnostenských úřadů?', a: 'Obecní ŽÚ (přenesená působnost; centrální registrační místo, rejstřík, kontroly), krajský ŽÚ (řízení a kontrola obecních, odvolání proti nim) a MPO, které vykonává působnost nezřízeného Živnostenského úřadu ČR (koncepce, odvolání proti krajským ŽÚ, správce ŽR).' },
    { q: 'Co je živnostenský rejstřík a co v něm není veřejné?', a: 'Elektronický informační systém veřejné správy (zákon č. 365/2000 Sb.), převážně veřejný (www.rzp.cz). Neveřejné jsou údaje o sankcích a pokutách, adresy pro doručování a rodná čísla FO.' },
    { q: 'Co jsou svobodná povolání?', a: 'Podnikání FO podle jiného než živnostenského zákona (např. podle autorského zákona nebo zvláštních předpisů). Vykonávají je FO přímo, formou PO jen za zákonných podmínek; tyto zákony jsou lex specialis k ŽZ a pro většinu povolání existují profesní komory (čl. 26 odst. 2 LZPS).' },
    { q: 'Jak se stane člověk zemědělským podnikatelem?', a: 'Zaeviduje se jako zemědělský podnikatel podle § 2e až 2ha zákona č. 252/1997 Sb. o zemědělství na kterémkoli obecním úřadu obce s rozšířenou působností; správcem evidence je Ministerstvo zemědělství.' }
  ]
});
