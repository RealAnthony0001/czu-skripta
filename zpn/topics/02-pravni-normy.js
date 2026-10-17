registerTopic({
  id: 'pravni-normy', order: 2, icon: '📜', title: 'Právní normy', src: 'podklady', where: 'Přednáška 1 + Cvičení 1',
  summary: 'Pojem a struktura právní normy (hypotéza, dispozice, sankce), druhy norem, působnost, platnost a účinnost, publikace ve Sbírce zákonů, aplikace, analogie a výklad (interpretace).',
  vocab: [
    { w: '§, odst., písm.', x: 'Členění zákona: paragraf (§) → odstavec (odst.) → písmeno (písm.); „§ 10 odst. 2 písm. a)“.' },
    { w: 'OZ (NOZ)', x: 'Občanský zákoník, zák. č. 89/2012 Sb., hlavní zákon soukromého práva; „nový“ platí od 1. 1. 2014.' },
    { w: 'Adresát normy', x: 'Osoba, které je norma určena a kterou zavazuje (zpravidla všichni, nebo jen určitá skupina).' },
    { w: 'Skutkový stav', x: 'Co se v konkrétním případě skutečně stalo; na něj se pak použije právní norma.' },
    { w: 'Újma, škoda', x: 'Škoda = majetková ztráta; újma je širší pojem (i na zdraví, cti, citech).' },
    { w: 'Trestný čin × přestupek', x: 'Trestný čin = závažné protiprávní jednání (řeší soud); přestupek = lehčí (řeší úřad, zpravidla pokuta).' },
    { w: 'Dobré mravy', x: 'Nepsaná pravidla slušnosti a poctivosti, která se musí dodržovat i tam, kde je zákon výslovně neříká.' },
    { w: 'Nullum crimen sine lege', x: 'Žádný trestný čin bez zákona – trestat lze jen za to, co zákon předem výslovně označil za trestné.' }
  ],
  key: [
    '<b>Právní norma</b> = obecně závazné pravidlo chování stanovené nebo uznané státem, jehož porušení stát sankcionuje. Znaky: <b>závaznost, formální určitost, obecnost, vynutitelnost</b>.',
    '<b>Struktura</b>: hypotéza (podmínky, adresát, čas, místo) → dispozice (příkaz / zákaz / dovolení / právo) → sankce (následek porušení). Dispozice nemůže chybět.',
    '<b>Kogentní</b> normy se nelze odchýlit (veřejné a procesní právo); <b>dispozitivní</b> lze (soukromé právo).',
    '<b>Čtyři roviny působnosti</b>: věcná, prostorová (místní), osobní (imunita, exempce), časová.',
    '<b>Platnost</b> = vyhlášení ve Sbírce (norma je součástí právního řádu); <b>účinnost</b> = den, od něhož se podle ní musí řídit (uvedený v předpisu, jinak 15. den po vyhlášení).',
    'Publikace: <b>Sbírka zákonů a mezinárodních smluv</b> (zák. 222/2016 Sb., elektronická e-sbírka); samospráva: Sbírka právních předpisů ÚSC (35/2021 Sb.); EU: Úřední věstník EU.',
    '<b>Analogie legis</b> (obdobná norma) a <b>analogie iuris</b> (obecné právní principy); vyloučena v trestním právu, připuštěna v soukromém.',
    '<b>Výklad</b>: podle subjektu (legální/autentický – v ČR neexistuje, oficiální, soudní, doktrinální) a podle metody (jazyková, systematická, logická, historická); logické argumenty <i>a contrario, a fortiori, ad absurdum</i>.'
  ],
  sections: [
    { title: 'Pojem, mody normativnosti, znaky', blocks: [
      { t: 'def', term: 'Právní norma', x: 'Obecně závazné pravidlo lidského chování stanovené nebo uznané státem (resp. mezinárodním společenstvím států), jehož porušení stát sankcionuje (resp. sankcionují instituce vytvořené státy). Je základní jednotkou normativního právního aktu; každá norma má <b>preskriptivní</b> (předpisující) charakter.' },
      { t: 'icons', title: '4 znaky právní normy', items: [
        { i: '⚖️', h: 'Závaznost', x: 'stanovuje oprávnění a povinnosti' },
        { i: '📄', h: 'Formální určitost', x: 'uznána státem v určité právní formě a v ní vyjádřena' },
        { i: '👥', h: 'Obecnost', x: 'adresáti (druhově), práva, povinnosti i sankce stanoveny obecně' },
        { i: '🔨', h: 'Vynutitelnost', x: 'nesplněnou povinnost lze zpravidla vynutit státní mocí' }
      ] },
      { t: 'versus', title: 'Mody normativnosti', cols: [
        { h: 'Objektivní', items: ['příkaz', 'zákaz', 'dovolení'] },
        { h: 'Subjektivní', items: ['oprávnění', 'povinnost'] }
      ] },
      { t: 'versus', title: 'Zásada legální licence × zásada legality', cols: [
        { h: 'Legální licence – soukromé osoby', items: ['„Co není zakázáno, je dovoleno“', 'čl. 2 odst. 4 Ústavy, čl. 2 odst. 3 Listiny'] },
        { h: 'Legality – státní orgány', items: ['„Státní moc slouží všem občanům a lze ji uplatňovat jen v případech, v mezích a způsobem, které stanoví zákon“', 'čl. 2 odst. 3 Ústavy, čl. 2 odst. 2 Listiny'] }
      ] },
      { t: 'tip', x: 'Právní normy × společenské normy (morálka, zvyky): jen právní normy jsou <b>státem vynutitelné</b> (sankce).' }
    ] },
    { title: 'Struktura právní normy', blocks: [
      { t: 'p', x: 'Tradičně <b>trichotomická</b> (trojčlenná) struktura = podmíněná věta (implikace): <i>jestliže p, pak q, není-li q, nastupuje r</i>. Všechny tři části bývají v jediném ustanovení jen výjimečně – jsou rozptýleny v předpisu, někdy i v různých předpisech.' },
      { t: 'flow', title: 'Hypotéza → dispozice → sankce', steps: [
        { h: 'Hypotéza', x: 'JESTLIŽE – adresát a podmínky' },
        { h: 'Dispozice', x: 'PAK – příkaz, zákaz, dovolení, právo' },
        { h: 'Sankce', x: 'NEBUDE-LI – následek porušení' }
      ] },
      { t: 'tree', title: 'Co obsahují jednotlivé části', root: { h: 'Právní norma', kids: [
        { h: 'Hypotéza', x: 'vymezuje okruh adresátů; typicky „kdo…“, „jestliže…“, „pokud…“', kids: [
          { h: 'personálně', x: 'povinná osoba' }, { h: 'lokálně', x: 'místo' }, { h: 'temporálně', x: 'čas' }, { h: 'modálně', x: 'způsob / okolnosti' }
        ] },
        { h: 'Dispozice', x: 'NEMŮŽE CHYBĚT – bez ní by norma ztratila smysl', kids: [
          { h: 'pravidlo chování', x: 'příkaz / zákaz / dovolení / právo (nárok)' }, { h: 'vztah stran', x: 'komplementární (vzájemně se doplňující) práva a povinnosti' }
        ] },
        { h: 'Sankce', x: 'předem stanovený následek = „další dispozice“; funkce preventivní, nahrazovací, represivní', kids: [
          { h: 'může být jinde', x: 'v dispozici, jiné části předpisu nebo jiném předpisu' }, { h: 'lex imperfecta', x: 'norma bez účinné sankce = nedokonalá' }
        ] }
      ] } },
      { t: 'icons', title: 'Co může být sankcí', items: [
        { i: '⛓️', h: 'Trest' },
        { i: '🧭', h: 'Výchovné / ochranné opatření' },
        { i: '🔁', h: 'Náhradní závazek' },
        { i: '👉', h: 'Přenesení závazku', x: 'původní závazek přejde na jinou osobu' },
        { i: '💸', h: 'Náhrada újmy' },
        { i: '📈', h: 'Úrok z prodlení' }
      ] },
      { t: 'ex', x: '„Kdo najde ztracenou věc, je povinen ji vydat vlastníkovi.“<br><b>Hypotéza</b>: kdo najde ztracenou věc (adresát = nálezce; podmínka = nalezení). <b>Dispozice</b>: je povinen ji vydat vlastníkovi (příkaz). <b>Sankce</b>: v ustanovení není – plyne z jiných norem (náhrada újmy, úroky z prodlení, příp. trestní odpovědnost). Poznámka: slajd cituje § 135 starého OZ (40/1964), dnes je úprava nálezu v novém občanském zákoníku (§ 1051 an.).' },
      { t: 'ex', x: '„Každý má právo na příznivé životní prostředí“ (čl. 35 Listiny).<br><b>Hypotéza</b>: „každý“ (nejširší adresáti, bez dalších podmínek). <b>Dispozice</b>: má právo na příznivé ŽP (opravňující). <b>Sankce</b>: v ustanovení není (obecná norma, ochrana se realizuje prostřednictvím navazujících zákonů a soudní ochrany).' },
      { t: 'ex', x: '„Kdo z hrubé nedbalosti zanedbá potřebnou péči o zvíře, které vlastní nebo o něž je povinen se z jiného důvodu starat, a způsobí mu tím trvalé následky na zdraví nebo smrt, bude potrestán odnětím svobody až na šest měsíců, zákazem činnosti nebo propadnutím věci.“<br><b>Hypotéza</b>: kdo vlastní zvíře / je povinen se o ně starat (adresát) a z hrubé nedbalosti zanedbá péči s následkem trvalých následků nebo smrti (podmínky). <b>Dispozice</b>: zákaz zanedbat potřebnou péči o zvíře (v trestních normách je dispozice jen nepřímo, vyplývá z hypotézy). <b>Sankce</b>: odnětí svobody až 6 měsíců, zákaz činnosti nebo propadnutí věci.' },
      { t: 'ex', x: '„Pokud osoba dosáhne plnoletosti (18 let), má právo hlasovat ve volbách.“ Hypotéza = dosažení plnoletosti, dispozice = právo hlasovat (opravňující), sankce = např. trestní odpovědnost za neoprávněné hlasování.' },
      { t: 'tip', x: 'Postup u příkladů „určete H–D–S“: 1) najděte adresáta a podmínky (hypotéza), 2) co má/nesmí/může (dispozice), 3) co hrozí při porušení (sankce) – když v textu není, řekněte, že plyne z jiné normy.' }
    ] },
    { title: 'Druhy právních norem', blocks: [
      { t: 'tree', title: 'Podle způsobu vymezení pravidla chování', root: { h: 'Právní normy', kids: [
        { h: 'Přikazující', x: 'ukládají jednat určitým způsobem – např. přeprav. osoba na motocyklu užívá přilbu' },
        { h: 'Zakazující', x: 'ukládají zdržet se – např. nesmí vyhazovat předměty z vozidla' },
        { h: 'Opravňující', x: 'dovolují chovat se právně relevantně, bez povinnosti – např. právo na ochranu osobnosti' },
        { h: 'Deklaratorní', x: 'vyjadřují principy a cíle – např. úvodní ustanovení občanského zákoníku' }
      ] } },
      { t: 'versus', title: 'Kogentní × dispozitivní (stupeň závaznosti)', cols: [
        { h: 'Kogentní (kategorické)', items: ['tak imperativní, že nedávají prostor vůli adresáta', 'musí se naplnit přesně', 'typické pro veřejné a procesní právo'] },
        { h: 'Dispozitivní', items: ['stanoví pravidlo jen podpůrně', 'strany se mohou dohodnout jinak; jinak nastoupí podpůrné ustanovení', 'typické pro soukromé právo'] }
      ] },
      { t: 'tree', title: 'Další hlediska členění', root: { h: 'Další dělení norem', kids: [
        { h: 'Odvětví práva', kids: [
          { h: 'soukromoprávní × veřejnoprávní' }, { h: 'hmotněprávní × procesní' }, { h: 'vnitrostátní × mezinárodní' }
        ] },
        { h: 'Úplnost výčtu', kids: [
          { h: 'Taxativní', x: 'úplný, uzavřený výčet' }, { h: 'Demonstrativní', x: 'příkladný výčet („zejména“, „například“)' }
        ] },
        { h: 'Věcná působnost', kids: [
          { h: 'Obecné (lex generalis)' }, { h: 'Speciální (lex specialis)', x: 'při kolizi má přednost' }
        ] }
      ] } },
      { t: 'ex', x: 'Kogentní nebo dispozitivní? <b>§ 16 zákoníku práce</b> (zaměstnavatelé jsou povinni zajišťovat rovné zacházení se zaměstnanci) – <b>kogentní</b> (přikazující norma pracovního práva s ochrannou funkcí, nelze se odchýlit). <b>§ 1963 odst. 2 OZ</b> (splatnost delší 60 dnů jen pokud to není vůči věřiteli hrubě nespravedlivé; vůči veřejnoprávní korporaci max. 60 dnů) – norma <b>omezující smluvní volnost</b>: stranám dává prostor k dohodě, ale s kogentním stropem; nejde o čistě dispozitivní ustanovení.' },
      { t: 'tip', x: 'Soukromé právo: strany mohou odchylné ujednání (§ 1 odst. 2 OZ), pokud to zákon výslovně nezakazuje a neporušují dobré mravy, veřejný pořádek ani právo týkající se postavení osob. Typicky dispozitivní jsou ustanovení o místu a době plnění, splatnosti.' }
    ] },
    { title: 'Působnost právních norem', blocks: [
      { t: 'p', x: 'Působnost = vymezení rozsahu realizace a aplikace normy. Při používání předpisu vždy nejprve vyhodnoťte: územní obvod, okruh vztahů, okruh osob, platnost a účinnost.' },
      { t: 'icons', title: '4 roviny působnosti', items: [
        { i: '📋', h: 'Věcná', x: 'jaké případy norma upravuje; lex generalis × lex specialis (OZ × zvláštní zákon)' },
        { i: '🗺️', h: 'Prostorová (místní)', x: 'území, kde platí; celostátní (zákon) × lokální (OZV obce, nařízení kraje); exteritorialita = použití mimo území státu' },
        { i: '👤', h: 'Osobní', x: 'na koho dopadá; rovnost před zákonem; součástí imunita a exempce (OZ všichni, zákoník práce zaměstnanci a zaměstnavatelé)' },
        { i: '⏱️', h: 'Časová', x: 'platnost a účinnost, derogace (např. účinnost od 1. 1.)' }
      ] },
      { t: 'tree', title: 'Imunita – vynětí osob z odpovědnosti nebo omezení postihu', root: { h: 'Imunita', kids: [
        { h: 'Absolutní (indemnita)', x: 'nelze stíhat vůbec (nebo za určitý okruh jednání)', kids: [
          { h: 'Prezident ČR', x: 'za přestupky ani trestně neodpovídá za jednání v době funkce; jen velezrada (ústavní žaloba)' },
          { h: 'Diplomaté', x: 'lze vyhostit jako persona non grata' },
          { h: 'Poslanci a senátoři', x: 'za hlasování v komoře a jejích orgánech nemohou být nijak postiženi' }
        ] },
        { h: 'Relativní', x: 'stíhat lze po splnění podmínky (souhlas orgánu)', kids: [
          { h: 'Poslanci a senátoři', x: 'trestní stíhání / přestupek / projevy podmíněny souhlasem komory, resp. jen disciplinární odpovědnost' },
          { h: 'Soudci Ústavního soudu', x: 'obdobný rozsah imunity a režim odpovědnosti jako členové zákonodárného sboru' }
        ] }
      ] } },
      { t: 'def', term: 'Exempce', x: 'Vynětí z působnosti příslušných orgánů – o protiprávním jednání rozhoduje jiný orgán než v obecném režimu (např. u přestupků soudců, státních zástupců, politiků).' },
      { t: 'tip', x: 'Absolutní imunita = nelze stíhat vůbec (nebo za určitý okruh jednání); relativní = lze po splnění podmínky (souhlas orgánu). Absolutní = <b>indemnita</b>.' }
    ] },
    { title: 'Platnost, účinnost, publikace', blocks: [
      { t: 'timeline', title: 'Od vyhlášení po derogaci', items: [
        { when: 'Den vyhlášení', h: 'PLATNOST', x: 'publikace předepsaným způsobem; norma je součástí právního řádu, ještě se jí není nutné řídit' },
        { when: 'Den z posledního ustanovení', h: 'ÚČINNOST', x: 'norma se uplatňuje, je závazná, lze ji vynucovat' },
        { when: 'Není-li uveden: 15. den po vyhlášení', h: 'ÚČINNOST (výchozí)', x: 'platnost a účinnost mohou splynout (účinnost dnem vyhlášení)' },
        { when: 'Zánik', h: 'Derogace / konec účinnosti', x: 'derogace = vyřazení z právního řádu (zrušení); účinnost končí zrušením nebo uplynutím doby' }
      ] },
      { t: 'versus', title: 'Platnost × účinnost', cols: [
        { h: 'Platnost', items: ['nastává dnem vyhlášení (publikace)', 'norma je v právním řádu, lze se seznámit s obsahem', 'zaniká derogací'] },
        { h: 'Účinnost', items: ['nastává dnem uvedeným v posledním ustanovení, jinak 15. dnem po vyhlášení', 'norma se uplatňuje, je závazná a vynutitelná', 'zaniká zrušením, uplynutím doby'] }
      ] },
      { t: 'icons', title: 'Kde se publikuje', items: [
        { i: '📚', h: 'Sbírka zákonů a mezinárodních smluv', x: 'e-sbirka.gov.cz; zák. č. 222/2016 Sb., účinnost 1. 1. 2024 (dříve Sb. a Sb. m. s. zvlášť)' },
        { i: '🏘️', h: 'Sbírka právních předpisů ÚSC a některých správních úřadů', x: 'sbirkapp.gov.cz; zák. č. 35/2021 Sb., od 1. 1. 2022; obecně závazné vyhlášky a nařízení obcí a krajů' },
        { i: '🇪🇺', h: 'Úřední věstník EU', x: 'eur-lex.europa.eu; nařízení, směrnice, rozhodnutí a další akty EU' }
      ] },
      { t: 'nums', title: 'Čísla k zapamatování', items: [
        { n: '15', u: 'dnů', x: 'výchozí účinnost po vyhlášení' },
        { n: '222/2016', u: 'Sb.', x: 'zákon o Sbírce zákonů a mezinárodních smluv (jedna Sbírka od 1. 1. 2024)' },
        { n: '35/2021', u: 'Sb.', x: 'zákon o Sbírce právních předpisů ÚSC (od 1. 1. 2022)' }
      ] },
      { t: 'ul', items: [
        '<b>Ve Sbírce zákonů a mezinárodních smluv:</b> ústavní zákony, zákony, zákonná opatření Senátu, nařízení vlády, vyhlášky ministerstev, ústředních správních úřadů a ČNB; mezinárodní smlouvy (vč. oznámení o ukončení platnosti a oprav překladu); nálezy ÚS (stanoví-li zákon), sdělení ÚS, usnesení PS o setrvání na vráceném zákonu / o zákonném opatření Senátu, rozhodnutí o vyhlášení volby prezidenta, rozhodnutí předsedy vlády o vyhlášení nouzového stavu, sdělení ministerstev a ČNB, sdělení MV o opravě chyby.',
        'Dříve pro obce a kraje: <b>věstník kraje</b> (vyhlášky a nařízení kraje) a <b>úřední deska obecního úřadu</b> (vyhlášky a nařízení obce).',
        'Sbírka se vede <b>pouze elektronicky</b>; citace: číslo / rok + Sb. + název – <i>zákon č. 89/2012 Sb., občanský zákoník</i>; <i>§ 5 odst. 1 písm. d) zákona č. 252/1997 Sb., o zemědělství</i>.',
        'Předpisy se vydávají v číslovaných částkách (chronologicky v každém roce); předpis nelze přečíslovat, jen zrušit a nahradit.',
        '<b>Okamžik vyhlášení</b> = okamžik zveřejnění ve Sbírce (dříve datum rozeslání částky).',
        '<b>Novela</b> = předpis, který mění nebo doplňuje starší předpis (<b>novelizace</b> = proces změny). <b>Úplné znění</b> = přehledné znění často novelizovaného předpisu po zapracování změn.',
        'Typy aktů ve Sbírce: nový předpis, novela („kterým se mění zákon č. …“), zrušovací předpis, úplné znění.'
      ] },
      { t: 'warn', x: 'Slajdy z cvičení uvádějí zrušený zákon č. 309/1999 Sb., o Sbírce zákonů a o Sbírce mezinárodních smluv. Platí <b>zákon č. 222/2016 Sb.</b> (od 1. 1. 2024 jedna sloučená elektronická Sbírka; zkratka Sb.). Sb. m. s. je už jen historická.' },
      { t: 'ex', x: 'Zákon č. 166/2026 Sb. „kterým se mění zákon č. 375/2022 Sb.“ = <b>novela</b>; Čl. I obsahuje změny, účinnost je uvedena v závěrečném článku. Totéž u nařízení vlády a vyhlášky.' }
    ] },
    { title: 'Aplikace, analogie a interpretace', blocks: [
      { t: 'def', term: 'Aplikace práva', x: 'Kvalifikovaná forma realizace práva orgány veřejné moci (soudy, správní úřady), při níž se konkrétní skutkový stav podřadí pod právní normu; výsledkem je akt aplikace práva (rozhodnutí o právech a povinnostech FO a PO). Šíře: používání norem státními orgány i chování osob podle práva.' },
      { t: 'flow', title: 'Postup při aplikaci práva', steps: [
        { h: 'Skutkový stav', x: 'zjištění přímo nebo dokazováním' },
        { h: 'Právní normy a výklad', x: 'časová, územní, osobní působnost, soulad s ústavou' },
        { h: 'Rozhodnutí ve věci samé', x: 'konstitutivní nebo deklaratorní; v mezích zákona, hospodárně' }
      ] },
      { t: 'p', x: '<b>Případy výslovně neupravené</b>: zákonodárce nepředvídá vše, ale orgán (zpravidla soud) <b>nesmí odmítnout věc rozhodnout</b>.' },
      { t: 'versus', title: 'Analogie legis × analogie iuris', cols: [
        { h: 'Analogie legis (podle zákona)', items: ['vztah není upraven žádnou normou', 'použije se norma upravující případ nejbližší (obdobný)', '§ 10 odst. 1 OZ: ustanovení nejbližší co do obsahu a účelu; signál „obdobně“, „přiměřeně“'] },
        { h: 'Analogie iuris (podle práva)', items: ['neexistuje ani obdobná norma', 'rozhodne se podle obecných principů právního řádu a smyslu systému', '§ 10 odst. 2 OZ: principy spravedlnosti a zásady zákona, s ohledem na ustálenou soudní praxi a doktrínu'] }
      ] },
      { t: 'warn', x: 'Analogie je <b>vyloučena</b> v právu trestním, finančním a správním (zejm. v neprospěch adresáta; zásada <i>nullum crimen sine lege</i>), <b>připuštěna</b> v právu občanském, obchodním, rodinném a pracovním.' },
      { t: 'p', x: '<b>Interpretace (výklad)</b> – norma je abstraktní pravidlo, při použití na případ musí být vyložena. Dělí se podle toho, <b>kdo</b> ji podává, a podle <b>metody</b>.' },
      { t: 'tree', title: 'Členění výkladu', root: { h: 'Výklad (interpretace)', kids: [
        { h: 'Podle subjektu', kids: [
          { h: 'Legální (autentický)', x: 'orgán zmocněný Ústavou; obecně závazný – v ČR takové zmocnění není' },
          { h: 'Oficiální', x: 'státní orgán pro podřízené (metodický pokyn ministerstva; stanoviska NS); nezavazuje nepodřízené, ovlivňuje praxi' },
          { h: 'Soudní', x: 'soud i správní orgány při rozhodování; závazný jen v konkrétním případě' },
          { h: 'Doktrinální', x: 'vědecký (komentáře, učebnice); nezávazný, ovlivňuje praxi' }
        ] },
        { h: 'Podle metody', kids: [
          { h: 'Jazyková (gramatická)', x: 'struktura věty, obvyklý význam výrazů' },
          { h: 'Systematická', x: 'umístění v předpisu (části, hlavy, oddíly, rubriky) a v právním řádu' },
          { h: 'Logická', x: 'a contrario, a fortiori, ad absurdum' },
          { h: 'Historická', x: 'vznik normy, úmysl zákonodárce, důvodová zpráva' }
        ] }
      ] } },
      { t: 'versus', title: 'Logické argumenty', cols: [
        { h: 'A contrario (výklad opaku)', items: ['co zákon výslovně neřadí pod pravidlo, na to neplatí', 'Zákaz vstupu psů → kočky mohou.'] },
        { h: 'A fortiori (silnější důvod)', items: ['a maiori ad minus: kdo smí více, smí i méně; a minori ad maius: kdo nesmí méně, nesmí tím spíše více', 'Zákaz kouření → tím spíš zákaz zapalovat oheň v místnosti.'] },
        { h: 'Ad absurdum (sporem)', items: ['výklad vedoucí k absurdnímu výsledku se odmítá', 'Zákaz „vozidel“ v parku nelze vykládat jako zákaz kočárků pro děti, ani sanitky.'] }
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>platnost</b> a <b>účinnost</b> – platnost nastává vyhlášením, účinnost dnem uvedeným v předpisu (jinak 15. dnem po vyhlášení); účinnost nemůže předcházet vyhlášení.',
    'Hledat všechny tři části normy v jednom ustanovení; dispozice nesmí chybět, sankce a hypotéza ale mohou být skryté nebo v jiném předpisu.',
    'Zaměnit kogentní (kategorické, nelze se odchýlit) a dispozitivní (lze se odchýlit, podpůrné pravidlo) – kogentní = veřejné a procesní právo, dispozitivní = soukromé.',
    'Zaměnit absolutní imunitu (indemnitu – hlasování poslanců, prezident, diplomat) a relativní (souhlas komory ke stíhání) a imunitu s exempcí (jiný orgán rozhoduje).',
    'Tvrdit, že v ČR existuje legální (autentický) výklad – zmocnění v Ústavě není; závazný je jen výklad soudu v konkrétní věci.',
    'Uvádět zrušený zákon č. 309/1999 Sb.; Sbírku zákonů a mezinárodních smluv upravuje zákon č. 222/2016 Sb. (elektronická, od 2024 jedna sbírka).',
    'Zaměnit analogii legis a iuris (obdobná norma × obecné principy) a zapomenout, že v trestním právu je analogie k tíži pachatele zakázána.',
    'Zaměnit novelu (předpis měnící jiný předpis), novelizaci (proces) a úplné znění (přehledné znění po zapracování novel – není nový předpis).'
  ],
  qa: [
    { q: 'Co je právní norma a jaké má znaky?', a: 'Obecně závazné pravidlo chování stanovené nebo uznané státem, jehož porušení stát sankcionuje. Znaky: závaznost, formální určitost, obecnost, vynutitelnost. Objektivní mody: příkaz, zákaz, dovolení; subjektivní: oprávnění, povinnost.' },
    { q: 'Popište strukturu právní normy.', a: 'Trojčlenná: <b>hypotéza</b> (podmínky, adresát, čas, místo), <b>dispozice</b> (příkaz, zákaz, dovolení, právo – nemůže chybět) a <b>sankce</b> (následek porušení dispozice – trest, náhrada škody, úrok z prodlení, přenesení závazku…). Má podobu implikace: jestliže p, pak q, není-li q, nastupuje r.' },
    { q: 'Určete hypotézu, dispozici a sankci: „Kdo najde ztracenou věc, je povinen ji vydat vlastníkovi.“', a: 'Hypotéza: „kdo najde ztracenou věc“ (nálezce). Dispozice: „je povinen ji vydat vlastníkovi“ (přikazující). Sankce: v textu není, plyne z jiných norem (např. náhrada újmy, úroky z prodlení).' },
    { q: 'Určete hypotézu, dispozici a sankci: „Každý má právo na příznivé životní prostředí.“', a: 'Hypotéza: „každý“ (všeobecný adresát). Dispozice: „má právo na příznivé životní prostředí“ (opravňující norma). Sankce: v ustanovení není; ochrana vyplývá z navazujících předpisů a práva domáhat se ochrany soudní cestou.' },
    { q: 'Rozdíl mezi kogentní a dispozitivní normou? Uveďte příklad.', a: 'Kogentní se nelze odchýlit, neponechává prostor vůli adresátů – typicky veřejné a procesní právo (např. § 16 zákoníku práce – rovné zacházení se zaměstnanci). Dispozitivní lze odchýlit ujednáním; platí podpůrně, pokud si strany nedohodly jinak – typicky soukromé právo (např. ustanovení o splatnosti či místě plnění).' },
    { q: 'Rozdíl mezi přikazující, zakazující, opravňující a deklaratorní normou.', a: 'Přikazující ukládá povinnost jednat (užívat přilbu), zakazující ukládá zdržet se (nevyhazovat předměty z vozidla), opravňující dává možnost jednat bez povinnosti (právo na ochranu osobnosti), deklaratorní vyjadřuje principy a cíle (úvodní ustanovení občanského zákoníku).' },
    { q: 'Jaké jsou roviny působnosti právní normy?', a: 'Věcná (jaké případy – lex generalis/specialis), prostorová (celostátní/lokální, exteritorialita), osobní (které osoby – vč. imunity a exempce) a časová (platnost, účinnost, derogace).' },
    { q: 'Co je imunita a exempce? Uveďte příklady.', a: 'Imunita je omezení nebo vyloučení odpovědnosti určitých osob: <b>absolutní</b> (indemnita) – prezident (v době funkce, jen velezrada), diplomat (lze vyhostit jako persona non grata), poslanec/senátor za hlasování; <b>relativní</b> – stíhání poslance/senátora a soudce ÚS podmíněno souhlasem komory (disciplinární odpovědnost). <b>Exempce</b> = vynětí z působnosti obecného orgánu, o jednání rozhoduje jiný orgán (např. přestupky soudců, státních zástupců).' },
    { q: 'Rozdíl mezi platností a účinností. Kazuistika: Zákon byl vyhlášen 1. března a v textu nemá stanovenu účinnost. Kdy se začne uplatňovat?', a: 'Platnost = vyhlášení ve Sbírce (norma je součástí právního řádu); účinnost = den, od kterého se musí podle normy postupovat (v posledním ustanovení). Není-li účinnost určena, nastane <b>15. dnem po vyhlášení</b> – tedy 16. března. Platnost nastala 1. března.' },
    { q: 'Kde a jak se publikují právní předpisy v ČR?', a: 'Ve Sbírce zákonů a mezinárodních smluv (zák. č. 222/2016 Sb., elektronicky, e-sbirka.gov.cz): ústavní zákony, zákony, zákonná opatření Senátu, nařízení vlády, vyhlášky ministerstev/ústředních úřadů/ČNB a mezinárodní smlouvy. Předpisy obcí a krajů ve Sbírce právních předpisů ÚSC (zák. č. 35/2021 Sb., od 2022; dříve věstník kraje a úřední deska). Právo EU v Úředním věstníku EU.' },
    { q: 'Co je novela, novelizace a úplné znění?', a: 'Novela je právní předpis, který mění nebo doplňuje starší předpis; novelizace je proces změny; úplné znění je přehledné znění často měněného předpisu s již zapracovanými změnami (není to nový předpis).' },
    { q: 'Jaký je postup při aplikaci práva?', a: '1) zjištění skutkového stavu (dokazováním), 2) zjištění a výklad právních norem (působnost, soulad s ústavou), 3) rozhodnutí ve věci samé v mezích zákona a hospodárně (konstitutivní nebo deklaratorní). Orgán nesmí odmítnout věc rozhodnout, ani když není výslovně upravena.' },
    { q: 'Kazuistika: Pro vzniklou situaci neexistuje v zákoně přímá úprava. Může soud odmítnout rozhodnutí? Jak postupuje?', a: 'Nemůže odmítnout. Použije <b>analogii legis</b> (nejbližší obdobná norma – § 10 odst. 1 OZ), a není-li, <b>analogii iuris</b> (obecné principy spravedlnosti a zásady zákona – § 10 odst. 2 OZ). V trestním právu k tíži obviněného analogii použít nelze.' },
    { q: 'Rozlište druhy výkladu podle toho, kdo jej podává.', a: 'Legální (autentický) – obecně závazný, podává orgán zmocněný ústavou; v ČR neexistuje. Oficiální – orgán státu pro podřízené orgány (nezavazuje nepodřízené), vč. stanovisek Nejvyššího soudu (vliv na praxi). Soudní (aplikující orgán) – závazný jen v konkrétní věci. Doktrinální – vědecký (komentáře, učebnice), nezávazný.' },
    { q: 'Vysvětlete výkladové metody a argumenty a contrario, a fortiori, ad absurdum.', a: 'Jazyková (text), systematická (umístění v předpisu a systému práva), logická, historická (vznik a záměr). Logické argumenty: <i>a contrario</i> = výklad opaku (co není zahrnuto, neplatí); <i>a fortiori</i> = silnější důvod (kdo smí víc, smí i méně; kdo nesmí méně, nesmí víc); <i>ad absurdum</i> = výklad vedoucí k absurdnímu výsledku se odmítá.' }
  ]
});
