registerTopic({
  id: 'zivnostenske-podnikani', order: 15, icon: '🏪', title: 'Podnikání a živnostenské právo', src: 'doplneno', where: 'Seminář 4 (veřejnoprávní úprava podnikání; zákon č. 455/1991 Sb.) – psáno ze znalostí, bez podkladů',
  summary: 'Pojem podnikatele podle občanského zákoníku, živnost a její znaky, všeobecné a zvláštní podmínky provozování, druhy živností, provozovna, odpovědný zástupce, živnostenský úřad, vznik a zánik oprávnění a podnikání mimo živnostenský zákon.',
  vocab: [
    { w: 'OZ, ŽZ, Sb.', x: 'OZ = občanský zákoník (č. 89/2012 Sb.), ŽZ = živnostenský zákon (č. 455/1991 Sb.), Sb. = Sbírka zákonů.' },
    { w: 'Fyzická × právnická osoba', x: 'Fyzická osoba je člověk, právnická osoba je uměle vzniklý subjekt (firma, spolek, obec) s vlastní právní osobností.' },
    { w: 'Veřejné × soukromé právo', x: 'Soukromé právo řeší vztahy rovných stran (smlouvy), veřejné vztah státu a jednotlivce (povolení, dozor, pokuty).' },
    { w: 'Obchodní rejstřík', x: 'Veřejný seznam firem (s.r.o., a.s. aj.) vedený soudem; vznik firmy se děje zápisem do něj.' },
    { w: 'OSVČ', x: 'Osoba samostatně výdělečně činná – fyzická osoba, která podniká na vlastní účet (např. živnostník).' },
    { w: 'Statutární orgán', x: 'Orgán, který jedná jménem právnické osoby navenek (např. jednatel s.r.o., představenstvo a.s.).' },
    { w: 'Správní řízení a rozhodnutí', x: 'Postup úřadu, kterým autoritativně rozhoduje o právech a povinnostech (např. udělení povolení nebo pokuta).' },
    { w: 'IČO', x: 'Identifikační číslo osoby – osmimístné číslo, jímž se podnikatel identifikuje v rejstřících a na dokladech.' }
  ],
  key: [
    '<b>Podnikatel (§ 420 OZ):</b> kdo samostatně vykonává výdělečnou činnost živností nebo obdobným způsobem se zřetelem k dosažení zisku.',
    '<b>Živnost (§ 2 ŽZ):</b> soustavná činnost provozovaná <b>samostatně, vlastním jménem, na vlastní odpovědnost, za účelem dosažení zisku</b> a za podmínek stanovených zákonem.',
    '<b>Všeobecné podmínky:</b> <b>18 let</b>, <b>způsobilost k právním úkonům</b> (svéprávnost) a <b>bezúhonnost</b>.',
    '<b>Druhy:</b> <b>ohlašovací</b> (řemeslné, vázané, volné) × <b>koncesované</b> (koncese = správní povolení).',
    '<b>Odpovědný zástupce</b> (u PO povinně, u FO dobrovolně) odpovídá za řádný provoz; musí splnit podmínky (18 let, svéprávnost, bezúhonnost, odborná způsobilost).',
    '<b>Živnostenský úřad</b> (obecní úřad obce s rozšířenou působností) přijímá ohlášení / vydává koncesi a vede živnostenský rejstřík; změny údajů se hlásí do 15 dnů.',
    '<b>Zemědělská prvovýroba není živnost</b> – řídí se zákonem o zemědělství (zemědělský podnikatel). Podnikat lze i ze zákona (advokát, lékař, notář, korporace).'
  ],
  sections: [
    { title: 'Podnikatel a podnikání', blocks: [
      { t: 'law', ref: '§ 420 OZ', x: '<b>Kdo samostatně vykonává na vlastní účet a odpovědnost výdělečnou činnost živností nebo obdobným způsobem se zřetelem k dosažení zisku, je považován ve vztahu k této činnosti za podnikatele.</b> Za podnikatele se považuje též osoba zapsaná v obchodním rejstříku a osoba s živnostenským nebo jiným oprávněním podle zvláštního zákona.' },
      { t: 'ul', items: [
        'Podnikatelem je <b>fyzická osoba</b> (OSVČ – živnostník, zemědělec, svobodné povolání) i <b>právnická osoba</b> (obchodní korporace – a.s., s.r.o., v.o.s., k.s., družstvo).',
        'Pro podnikání platí zvláštní pravidla: <b>odborná péče</b> (§ 5 OZ), přísnější standard odpovědnosti, <b>obchodní firma</b>, obchodní rejstřík, prokura.',
        'Právní úprava je <b>dvojí</b>: soukromoprávní (OZ, zákon o obchodních korporacích 90/2012 Sb.) a <b>veřejnoprávní</b> (živnostenský zákon 455/1991 Sb., zákony pro svobodná povolání, zákon o zemědělství…). Podnikání jako takové nevyžaduje vždy živnostenské oprávnění.'
      ] },
      { t: 'tip', x: 'Zapamatuj: „podnikatel“ je pojem OZ (a ŽZ ho má užší – <b>živnostník</b>). Živnost = jen podmnožina podnikání.' }
    ] },
    { title: 'Živnost – pojem a znaky', blocks: [
      { t: 'def', term: 'Živnost (§ 2 ŽZ)', x: 'Soustavná činnost provozovaná za podmínek stanovených živnostenským zákonem:', items: ['<b>samostatně</b>', '<b>vlastním jménem</b>', '<b>na vlastní odpovědnost</b>', '<b>za účelem dosažení zisku</b>'] },
      { t: 'table', head: ['Znak', 'Co znamená'], rows: [
        ['<b>Soustavnost</b>', 'Činnost je opakovaná, ne nahodilá. Jednorázový prodej osobního majetku není živnost.'],
        ['<b>Samostatnost</b>', 'Podnikatel není podřízen (nejde o závislou práci zaměstnance).'],
        ['<b>Vlastní jméno</b>', 'Nejedná jako zástupce jiného, ale pod svou firmou / jménem.'],
        ['<b>Vlastní odpovědnost</b>', 'Nese riziko podnikání i odpovědnost za škodu.'],
        ['<b>Účel zisku</b>', 'Záměr dosáhnout zisku (nemusí být skutečně dosažen).']
      ] },
      { t: 'ul', items: [
        'Živností <b>nejsou</b> činnosti, na které se ŽZ nevztahuje (§ 3): zejména <b>zemědělská prvovýroba</b>, lesní hospodářství, činnosti advokátů, notářů, lékařů, exekutorů a jiných profesí upravených zvláštními zákony, činnost bank a pojišťoven aj.',
        'Sporné je rozlišení živnosti a „činnosti ve volném čase / příležitostné“ – klíčová je právě soustavnost a záměr zisku.'
      ] },
      { t: 'warn', x: 'Provozování <b>zemědělské výroby</b> není živnost – řídí se zákonem o zemědělství (252/1997 Sb.); zemědělský podnikatel se registruje v evidenci vedené obecním úřadem obce s rozšířenou působností. Navazující činnosti (zpracování, prodej, agroturistika) mohou být živností. Důležité pro studenty ČZU.' }
    ] },
    { title: 'Podmínky provozování živnosti', blocks: [
      { t: 'table', head: ['Podmínky', 'Obsah'], rows: [
        ['<b>Všeobecné</b> (§ 6)', '<b>Dosažení věku 18 let</b>; <b>způsobilost k právním úkonům</b> (svéprávnost); <b>bezúhonnost</b>. Cizinec musí splnit i podmínky pobytu / oprávnění k pobytu.'],
        ['<b>Zvláštní</b> (§ 7)', '<b>Odborná nebo jiná způsobilost</b> – dle druhu živnosti (viz tabulka níže). Pro volné živnosti nevyžaduje se.']
      ] },
      { t: 'p', x: '<b>Bezúhonnost:</b> nebyl pravomocně odsouzen pro trestný čin spáchaný úmyslně, nebo pro trestný čin spáchaný z nedbalosti, pokud skutková podstata souvisí s předmětem podnikání – a to dokud se na něj nehledí, jako by nebyl odsouzen (zahlazení). Pro právnické osoby je bezúhonnost posuzována u členů statutárního orgánu a odpovědného zástupce. Bezúhonnost prokazuje výpis z rejstříku trestů (živnostenský úřad si jej vyžádá sám).' },
      { t: 'ul', items: [
        '<b>Fyzická osoba</b> provozuje živnost osobně nebo prostřednictvím odpovědného zástupce.',
        '<b>Právnická osoba</b> musí mít vždy <b>odpovědného zástupce</b>; všeobecné podmínky se u ní posuzují u členů statutárního orgánu a odpovědného zástupce.',
        'Živnost lze provozovat jen na základě <b>živnostenského oprávnění</b>.'
      ] },
      { t: 'law', ref: 'Odpovědný zástupce (§ 10 ŽZ)', x: 'Fyzická osoba, která za podnikatele odpovídá za <b>řádný provozu živnosti</b> z hlediska odborné způsobilosti. Musí splňovat všeobecné podmínky (18 let, svéprávnost, bezúhonnost) a požadovanou odbornou způsobilost; je v pracovněprávním či obdobném vztahu k podnikateli (nebo je členem statutárního orgánu). U <b>právnické osoby je odpovědný zástupce povinný</b>, u fyzické osoby volitelný (kdy nesplňuje odbornou způsobilost sama). Odpovědný zástupce odpovídá za dodržování předpisů; podnikatel zůstává odpovědný za provoz jako celek.' }
    ] },
    { title: 'Druhy živností', blocks: [
      { t: 'table', head: ['Druh', 'Podmínky', 'Vznik oprávnění', 'Příklady'], rows: [
        ['<b>Ohlašovací – volné</b>', 'Jen všeobecné podmínky (nevyžaduje se odbornost)', 'Dnem <b>ohlášení</b> (doručení ohlášení živnostenskému úřadu)', 'Velkoobchod, maloobchod, zprostředkování obchodu a služeb, poskytování služeb, hostinská činnost (v rozsahu), mnoho dalších obchodních a výrobních činností'],
        ['<b>Ohlašovací – řemeslné</b>', 'Všeobecné + <b>odborná způsobilost</b> (výuční list v oboru či příbuzném + praxe, případně vyšší vzdělání / praxe)', 'Dnem <b>ohlášení</b>', 'Zednictví, truhlářství, kovářství, zámečnictví, pekařství, kadeřnictví…'],
        ['<b>Ohlašovací – vázané</b>', 'Všeobecné + <b>odborná způsobilost stanovená zvláštním předpisem</b> (vzdělání v daném oboru + praxe)', 'Dnem <b>ohlášení</b>', 'Provozování autoškoly, silniční motorová doprava, projektová činnost ve výstavbě, provádění staveb (podle přílohy zákona)'],
        ['<b>Koncesované</b>', 'Všeobecné + zvláštní podmínky + <b>koncese</b> (rozhodnutí o udělení koncese – správní povolení); správní uvážení, ověřuje se veřejný zájem', 'Dnem <b>právní moci rozhodnutí o udělení koncese / dnem uvedeným v koncesní listině</b>', 'Provozování cestovní kanceláře, pohřební služby, bezpečnostní činnost (ostraha), provozování drážní dopravy, výroba a obchod se zbraněmi']
      ] },
      { t: 'tip', x: 'Volná – nic nechce (jen 18 + svéprávnost + bezúhonnost). Řemeslná – vyučení + praxe. Vázaná – specifická odbornost podle zákona. Koncesovaná – musí udělit koncesi úřad (rozhodnutí).' },
      { t: 'warn', x: 'Seznam konkrétních oborů v jednotlivých skupinách (příloha ŽZ, nařízení vlády o volných živnostech) je rozsáhlý a mění se; k zápočtu stačí znát <b>princip rozdělení</b> a pár příkladů. Přesné zařazení konkrétního oboru si ověř v zákoně / na portálu podnikatele.' }
    ] },
    { title: 'Vznik, provozovna a živnostenský úřad', blocks: [
      { t: 'ol', items: [
        '<b>Ohlášení živnosti</b> u živnostenského úřadu (u ohlašovacích živností): formulář (Jednotný registrační formulář, JRF), obsahuje údaje o ohlašovateli, předmět podnikání, sídlo a provozovny; k ohlášení se přikládají doklady o odborné způsobilosti (u řemeslných a vázaných). Ohlásit lze osobně, datovou schránkou, elektronicky nebo přes Czech POINT / jednotné kontaktní místo.',
        '<b>Koncese</b> (u koncesovaných živností): žádost, správní řízení, rozhodnutí; po udělení se vydává koncesní listina.',
        '<b>Zápis do živnostenského rejstříku</b> a vydání dokladu o živnostenském oprávnění; poplatek orientačně 1 000 Kč (ohlašovací) / 2 000 Kč (koncese) – <i>ověř aktuální výši</i>.',
        'Podnikatel musí <b>do 15 dnů</b> ohlásit změnu údajů uvedených v ohlášení (adresa, provozovna, rozsah).',
        'Navazující povinnosti: registrace u finančního úřadu (daň z příjmů, případně DPH), u správy sociálního zabezpečení a zdravotní pojišťovny (OSVČ).'
      ] },
      { t: 'def', term: 'Provozovna (§ 17 ŽZ)', x: 'Prostor, kde se živnost provozuje (kde se trvale provozuje podnikatelská činnost – obchod, dílna, kancelář).', items: ['musí splňovat podmínky stanovené zvláštními předpisy (hygienické, stavební)', 'musí být <b>řádně označena</b> (obchodní firma / jméno podnikatele, IČ, identifikace provozovny)', 'podnikatel ji musí oznámit živnostenskému úřadu'] },
      { t: 'ul', items: [
        '<b>Živnostenský úřad:</b> obecní živnostenský úřad (v obcích s rozšířenou působností), registr živnostenský; dozoruje dodržování předpisů a ukládá pokuty.',
        '<b>Sídlo</b> podnikatele (FO: místo trvalého pobytu / místo podnikání; PO: sídlo v obchodním rejstříku) × <b>místo podnikání</b> × <b>provozovna</b> – nezaměňovat.',
        'Živnost lze provozovat i bez provozovny (např. ambulantní prodej, služby u zákazníka) – pak se uvádí místo podnikání.'
      ] }
    ] },
    { title: 'Zánik, přerušení a podnikání ze zákona', blocks: [
      { t: 'table', head: ['Situace', 'Obsah'], rows: [
        ['<b>Zánik živnostenského oprávnění</b> (§ 57)', 'Smrt podnikatele (FO; živnost lze za určitých podmínek převést na pozůstalé / dědice, pokračovat prostřednictvím správce pozůstalosti), zánik PO, uplynutí doby (u živnosti na dobu určitou), zrušení koncese, zákaz činnosti soudem, ztráta způsobilosti nebo bezúhonnosti, oznámení podnikatele, že živnost ukončuje.'],
        ['<b>Zrušení / odnětí</b> (§ 58)', 'Živnostenský úřad živnost <b>zruší</b> při závažném nebo opakovaném porušení povinností, nesplnění zákonných podmínek, nedodržení podmínek koncese; u koncese může rozhodnout o jejím odnětí.'],
        ['<b>Přerušení / pozastavení provozování</b>', 'Podnikatel může oznámit živnostenskému úřadu <b>pozastavení (přerušení) provozování</b> živnosti na určitou či neurčitou dobu; oprávnění trvá, jen se nevykonává.'],
        ['<b>Sankce</b>', 'Pokuty od živnostenského úřadu za porušení ŽZ (řádově statisíce až miliony Kč podle závažnosti), zrušení oprávnění.']
      ] },
      { t: 'p', x: '<b>Podnikání mimo živnostenský zákon (ze zákona / na základě jiných předpisů):</b>' },
      { t: 'ul', items: [
        '<b>Obchodní korporace</b> (a.s., s.r.o., v.o.s., k.s., družstva) – podnikají na základě zápisu do obchodního rejstříku podle zákona o obchodních korporacích a zákona o veřejných rejstřících; živnostenské oprávnění potřebují k činnostem, které jsou živností (např. obchodování), nikoli k existenci společnosti.',
        '<b>Svobodná povolání</b> a regulované profese: advokáti, notáři, exekutoři, lékaři, daňoví poradci, auditoři, architekti, patentoví zástupci, insolvenční správci, soudní znalci – řídí se zvláštními zákony a komorami.',
        '<b>Zemědělský podnikatel</b> – zákon o zemědělství (252/1997 Sb.); evidence u obce s rozšířenou působností; zemědělská prvovýroba není živnost.',
        '<b>Další:</b> těžba nerostů, výroba energie, pojišťovnictví, bankovnictví – licence nebo povolení podle zvláštních zákonů.'
      ] },
      { t: 'tip', x: 'Soukromoprávní stránka (§ 420 OZ, firma, obchodní rejstřík) × veřejnoprávní stránka (živnostenské oprávnění, koncese, dozor živnostenského úřadu).' }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>podnikatele</b> (pojem OZ, § 420) a <b>živnostníka</b> (ŽZ). Lékař, advokát či zemědělec je podnikatel, ale nepodniká na živnostenský list.',
    'Tvrdit, že jednorázová činnost je živnost – chybí <b>soustavnost</b> (a záměr zisku).',
    'Zapomenout na tři všeobecné podmínky: <b>18 let, svéprávnost, bezúhonnost</b>.',
    'Zaměnit <b>koncesovanou</b> a <b>ohlašovací</b> živnost: koncesi uděluje úřad správním rozhodnutím, ohlašovací živnost vzniká ohlášením (úřad jen zapíše).',
    'Považovat <b>zemědělskou prvovýrobu</b> za živnost – řídí se zákonem o zemědělství.',
    'Zaměnit <b>odpovědného zástupce</b> (odpovídá za odborný provoz; u PO povinný) a statutární orgán.',
    'Zaměnit <b>provozovnu</b>, sídlo a místo podnikání; zapomenout ohlásit změnu do 15 dnů.',
    'Tvrdit, že přerušení = zánik oprávnění; při přerušení oprávnění trvá.'
  ],
  qa: [
    { q: 'Kdo je podnikatel podle občanského zákoníku?', a: 'Podle § 420 OZ ten, kdo samostatně vykonává na vlastní účet a odpovědnost výdělečnou činnost živností nebo obdobným způsobem se zřetelem k dosažení zisku. Za podnikatele se považuje i osoba zapsaná v obchodním rejstříku a osoba s živnostenským či jiným oprávněním podle zvláštního zákona.' },
    { q: 'Definujte živnost podle živnostenského zákona.', a: 'Soustavná činnost provozovaná samostatně, vlastním jménem, na vlastní odpovědnost, za účelem dosažení zisku a za podmínek stanovených zákonem č. 455/1991 Sb. (§ 2).' },
    { q: 'Jaké jsou všeobecné podmínky provozování živnosti?', a: 'Věk 18 let, svéprávnost (způsobilost k právním úkonům) a bezúhonnost. K tomu zvláštní podmínky – odborná způsobilost – podle druhu živnosti.' },
    { q: 'Jak se dělí živnosti?', a: 'Na <b>ohlašovací</b> (volné, řemeslné, vázané) a <b>koncesované</b>. U ohlašovacích vzniká oprávnění ohlášením, u koncesovaných rozhodnutím o udělení koncese.' },
    { q: 'Co je bezúhonnost a jak se prokazuje?', a: 'Nebyl odsouzen za úmyslný trestný čin (ani za nedbalostní čin souvisící s předmětem podnikání) – pokud se na něj hledí jako na neodsouzeného (zahlazení). Prokazuje se výpisem z rejstříku trestů, který živnostenský úřad získá sám.' },
    { q: 'Kdy je nutný odpovědný zástupce?', a: 'U právnické osoby vždy; u fyzické osoby tehdy, pokud sama nesplňuje odbornou způsobilost (nebo se dobrovolně rozhodne ustanovit). Musí splňovat všeobecné podmínky a odbornou způsobilost a odpovídá za řádný provoz.' },
    { q: 'Co je provozovna a jaké má náležitosti?', a: 'Prostor, kde se živnost provozuje. Musí být označena (firma, IČ, údaje o provozovně) a oznámena živnostenskému úřadu; změny údajů se hlásí do 15 dnů. Je třeba odlišit sídlo a místo podnikání.' },
    { q: 'Které činnosti nejsou živností?', a: 'Zemědělská prvovýroba (zákon o zemědělství), lesnictví, činnosti svobodných povolání (advokáti, notáři, lékaři…), bankovnictví a pojišťovnictví a další činnosti upravené zvláštními zákony. Nahodilá činnost bez zisku také není živností.' },
    { q: 'Honza (17 let) chce provozovat volnou živnost. Může?', a: 'Ne. Nesplňuje všeobecnou podmínku věku 18 let; musí počkat do zletilosti.' },
    { q: 'Pepa byl před 2 lety odsouzen za úmyslné ublížení na zdraví a nezahlazen. Může ohlásit živnost?', a: 'Nesplňuje podmínku bezúhonnosti – byl odsouzen pro úmyslný trestný čin a dosud se na něj hledí jako na odsouzeného. Živnostenský úřad živnost neumožní, dokud se na něj nebude hledět jako na neodsouzeného.' },
    { q: 'Pepa se rozhodl otevřít cestovní kancelář. Postačí ohlášení?', a: 'Ne. Cestovní kancelář je koncesovaná živnost; potřebuje koncesi, tj. rozhodnutí živnostenského úřadu o udělení. Oprávnění vznikne až právní mocí rozhodnutí / dnem uvedeným v koncesní listině.' },
    { q: 'Kdy zaniká živnostenské oprávnění a čím se liší od přerušení?', a: 'Zaniká např. smrtí podnikatele, zánikem PO, uplynutím doby, zrušením nebo odnětím, ztrátou způsobilosti/bezúhonnosti. Při přerušení (pozastavení) se jen nevykonává činnost, oprávnění trvá a lze ji obnovit.' }
  ]
});
