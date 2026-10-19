registerTopic({
  id: 'rizeni', order: 1, icon: '🧭', title: 'Řízení a informační působení', src: 'podklady',
  where: 'Přednáška 1–2 + Cvičení 1',
  summary: 'Co je řízení a management, věda × umění, kybernetika; tři typy informačního působení – ovládání, řízení (se zpětnou vazbou) a regulace.',
  vocab: [
    { w: 'Řízení', x: 'Dosahování cílů prostřednictvím jiných lidí; cílevědomá činnost, která stanovuje cíle, prostředky, průběh a kontrolu činnosti.' },
    { w: 'Kybernetika', x: 'Věda o obecných zákonitostech řízení a sdělování v živých organismech a strojích (N. Wiener).' },
    { w: 'SŘ / OŘ', x: 'Subjekt řízení (ten, kdo řídí) / objekt řízení (ten, kdo je řízen).' },
    { w: 'Zpětná vazba', x: 'Informace o výsledku působení, která se vrací k tomu, kdo působil.' },
    { w: 'Kontrola', x: 'Přímá zpětná vazba: zjištění realizace programu, cílového chování a odchylek.' },
    { w: 'Regulátor', x: 'Systém vložený mezi subjekt a objekt, který sleduje odchylky a udržuje požadované stavy.' },
    { w: 'Cílové chování', x: 'Chování, které se řízením snažíme dosáhnout (žádoucí stav); skutečné se nazývá výsledné chování.' }
  ],
  key: [
    '<b>Řízení je dosahování cílů prostřednictvím jiných lidí</b> (S. M. Silverstein).',
    'Aby řízení proběhlo: řídící systém musí informaci <b>vyslat</b>, řízený ji musí být <b>schopen</b> i <b>ochoten</b> přijmout.',
    'Úspěšně řídit = <b>znát, mít pravomoc, chtít a stačit</b>.',
    'Tři pojetí řízení: <b>informační působení</b>, <b>činnost</b>, <b>proces</b>.',
    'Informační působení podle složitosti: <b>ovládání</b> (bez kontroly) → <b>řízení</b> (kontrola = přímá zpětná vazba) → <b>regulace</b> (vložený regulátor).'
  ],
  sections: [
    { title: 'Co je řízení', blocks: [
      { t: 'def', term: 'Řízení', x: '„Řízení je dosahování cílů prostřednictvím jiných lidí.“ Je to <b>subjektivní, cílevědomá činnost lidí</b>, která je <b>objektivně nutná</b>, poznává a využívá objektivní zákonitosti přírody a společnosti a na jejich základě stanovuje <b>cíle, prostředky, průběh a kontrolu</b> stanovené činnosti.' },
      { t: 'tip', x: 'Úspěšně řídit znamená <b>znát, mít pravomoc, chtít a stačit</b>. „Řízení je nejstarší umění a nejmladší povolání.“' },
      { t: 'p', x: 'Jakmile je lidská činnost založena na <b>dělbě práce</b>, musí někdo součinnost jednotlivců <b>organizovat a koordinovat</b>, <b>určovat cíle</b> a <b>kontrolovat jejich dosažení</b>. Takové činnosti se souhrnně nazývají <b>řízení – management</b>.' },
      { t: 'flow', title: 'Tři podmínky, aby mohlo řízení lidí proběhnout', steps: [
        { h: 'Řídící systém je schopen informaci vyslat', x: 'umí zadání srozumitelně formulovat a předat' },
        { h: 'Řízený systém je schopen informaci přijmout', x: 'rozumí jí, má kapacitu a prostředky' },
        { h: 'Řízený systém je ochoten informaci přijmout', x: 'chce – zde vstupuje motivace' }
      ] },
      { t: 'versus', title: 'Řízení: věda × umění', cols: [
        { h: 'Věda', items: ['organizované znalosti', 'teorie řízení, systémový přístup', '„Teprve na konci díla lze poznat, čím bylo třeba začít.“ (Pascal)'] },
        { h: 'Umění', items: ['praxe v řízení, zkušenost, dovednost', 'schopnost naučené věci využít', '„Podstatou znalosti je schopnost naučené věci využít.“ (Konfucius)'] }
      ], x: 'Teorie je soustava zobecněného poznání, která vysvětluje určité stránky skutečnosti a vzniká z potřeb praxe; praxe (empirie) je zkušenost, dovednost a vědomá, cílevědomá činnost lidí. Jedno bez druhého nefunguje: teorie bez praxe zůstane nepoužitelná a praxe bez teorie se opakuje na vlastních chybách. Dobrý manažer proto kombinuje znalost zákonitostí (věda) s citem pro konkrétní lidi a situace (umění).' }
    ] },
    { title: 'Řízení × management × kybernetika', blocks: [
      { t: 'ul', items: [
        'Slovo „řízení“ má víc významů: řízení auta (<i>drive</i>), řízení letového provozu (<i>steering</i>), řízení automatu, insolvenční či dědické řízení…',
        '<b>Kybernetické pojetí řízení</b> – obecné zákonitosti řízení strojů i živých organismů.',
        '<b>Řízení podniků = management</b> – tomu se věnuje tento předmět.'
      ] },
      { t: 'def', term: 'Kybernetika', x: 'Věda o obecných zákonitostech řízení; jako věda existuje zhruba 60 let. Slovo použil už <b>Platón</b> (řecky <i>kybernétés</i> = kormidelník, ve smyslu „vládnout“). Studuje principy přenosu informací mezi systémem a okolím a zákony řízení <b>pro stroje i živé organismy</b>, takže lze zkušenosti z jednoho oboru použít v jiném. „Kybernetika je věda o řízení a sdělování v živých organizmech a strojích.“ (<b>Norbert Wiener</b>)' }
    ] },
    { title: 'Řízení jako informační působení', blocks: [
      { t: 'p', x: 'Řízení lze chápat třemi způsoby: jako <b>činnost řídících pracovníků</b>, jako <b>proces</b> (fáze a stádia – viz další téma) a jako <b>informační působení</b>. Podle složitosti informací se informační působení dělí na <b>ovládání, řízení a regulaci</b>.' },
      { t: 'table', head: ['Hledisko', 'Ovládání', 'Řízení', 'Regulace'], rows: [
        ['Podstata', 'subjekt pošle příkaz objektu', 'ovládání + kontrola výsledku', 'mezi subjekt a objekt vložen regulátor'],
        ['Zpětná vazba', 'jen vlastní (program subjektu)', 'vlastní SŘ i OŘ + <b>přímá</b> (kontrola)', 'regulátor sleduje odchylky; kontrola nastavení = kalibrace'],
        ['Složitost informací', 'nejjednodušší', 'střední', 'technická, automatizovaná'],
        ['Příklad', 'velitel nařídí četě tichý ústup', 'učitel – student, vedení podniku – provoz', 'termostat v líhni kuřat']
      ] }
    ] },
    { title: 'Ovládání', blocks: [
      { t: 'svg', title: 'Ovládání – nejjednodušší informační působení', x: TROS.ovladani(), cap: 'Subjekt má svůj program (jak zajistit cílové chování), vydá ovládací příkazy a objekt je provede. Výsledek se nekontroluje.' },
      { t: 'ex', x: '<b>Vojsko:</b> velitel (SŘ) vyhodnotí sílu nepřítele, srovná ji s vlastní silou a rozhodne potichu ustoupit. Vydá příkaz, četa vojáků (objekt) provede tichý ústup = cílové chování.' }
    ] },
    { title: 'Řízení (se zpětnou vazbou)', blocks: [
      { t: 'svg', title: 'Řízení = ovládání + kontrola', x: TROS.rizeni(), cap: 'Kontrola zahrnuje realizaci programu, cílové chování a zjištění odchylek; informace o splnění příkazu se vrací subjektu řízení.' },
      { t: 'flow', title: 'Zavedení nového produktu jako informační působení (podnik)', steps: [
        { h: 'Podnikatelský nápad – nový produkt', x: 'vstupní informace' },
        { h: 'Posouzení možností', x: 'informace o trhu, konkurenci, možné spolupráci; zdroje: finanční, personální, odborné („umíme to?“), kapacitní (prostor, čas), termíny' },
        { h: 'Rozhodnutí o realizaci', x: 'vedení podniku (ŘSS)' },
        { h: 'Plán → zadání úkolů', x: 'hodnoty a termíny pro vedení závodu / provozu' },
        { h: 'Vlastní program OŘ', x: 'kdo co bude dělat, jak, zabezpečit prostředky, zabezpečit a vyškolit lidi, termíny' },
        { h: 'Realizace nového produktu', x: 'navazuje obchodní činnost' },
        { h: 'Kontrola', x: 'informace o skutečném stavu, průběhu, uplatnění na trhu; porovnání s cílem' }
      ] },
      { t: 'ex', x: '<b>Škola:</b> subjekt = učitel, objekt = student. Učitel přijme novou informaci (Program 1: zapracuje ji do výkladu, zvolí formu – složitost, cizí pojmy, srozumitelnost), zadá úkoly; student (Program 2) se učí, chápe, vytváří znalostní systém a aplikuje znalosti. <b>Kontrola:</b> zjištění znalostí, ocenění známkou a informace, co změnit ve výkladu.' },
      { t: 'ex', x: '<b>Podnik – produkční problém:</b> vedoucí zpracuje dostupné informace, vytvoří plán řešení (rozhodovací proces), rozhodnutí předá jako úkol zodpovědné osobě s termíny. Podřízený má vlastní program (určit zodpovědné, zabezpečit prostředky, termíny). Kontrola produkce ověří, zda je problém vyřešen. Řetěz: vedoucí → podřízený ŘP → výkonný pracovník (úkolování).' }
    ] },
    { title: 'Regulace', blocks: [
      { t: 'svg', title: 'Regulace – vložení regulačního systému', x: TROS.regulace() },
      { t: 'ex', x: '<b>Líheň kuřat:</b> SŘ = vedoucí líhně, vstupní informace = požadovaný počet kuřat. Objekty řízení: tepelný agregát, zdroj světla, pás s krmivem, ventilátory. Program: interval požadované teploty, intervaly světlo/tma, čas krmení. Regulační systémy: <b>termostat</b>, zapínání a vypínání světla, režim krmení, ventilace. Vedoucí dělá jen namátkovou kontrolu výsledného chování a kontroluje nastavení (teplota, světlo, vzduch, krmení) = <b>kalibrace</b>.' },
      { t: 'ul', items: [
        'Regulace je spjatá hlavně s <b>technickou stránkou produkce</b>: technologické linky, automatizované postupy, zastavení linky při poruše, brzdění rychlovýtahů.',
        'Regulátor může vykonávat i kontrolní činnost.',
        'Při <b>vedení lidí</b> lze zástupce vedoucího pro určitou činnost chápat jako regulátora, který zvyšuje spolehlivost systému.'
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit <b>ovládání</b> a <b>řízení</b>: ovládání nemá kontrolu výsledku (přímou zpětnou vazbu), řízení ano.',
    'Říct, že řízení je jen činnost vedoucího – je to i proces a informační působení.',
    'Zapomenout, že ŘP bývá <b>zároveň subjekt i objekt</b> řízení (podle stupně řízení vůči nadřízenému je objektem).',
    'U regulace zaměnit regulátor se subjektem řízení: regulátor je vložen <b>mezi</b> SŘ a OŘ.'
  ],
  qa: [
    { q: 'Jak lze definovat řízení?', a: '„Dosahování cílů prostřednictvím jiných lidí.“ Subjektivní, cílevědomá, objektivně nutná činnost, která na základě poznaných zákonitostí stanovuje cíle, prostředky, průběh a kontrolu činnosti. Úspěšně řídit = znát, mít pravomoc, chtít a stačit.' },
    { q: 'Jaké jsou tři podmínky řízení lidí?', a: 'Řídící systém musí být schopen informaci vyslat, řízený systém musí být schopen informaci přijmout a musí být ochoten ji přijmout.' },
    { q: 'Co je kybernetika a kdo ji definoval?', a: 'Věda o obecných zákonitostech řízení a sdělování v živých organismech a strojích (Norbert Wiener); slovo pochází z řeckého kybernétés = kormidelník, použil ho už Platón.' },
    { q: 'Proč je řízení věda i umění?', a: 'Věda = organizované znalosti, teorie řízení; umění = praxe, schopnost naučené věci využít (Konfucius). Obojí je nutné.' },
    { q: 'Jak se liší ovládání, řízení a regulace?', a: 'Ovládání: subjekt vydá příkaz a výsledek nekontroluje. Řízení: přidává kontrolu (přímou zpětnou vazbu – zjištění odchylek). Regulace: mezi subjekt a objekt je vložen regulátor, který sleduje odchylky a udržuje požadované stavy; subjekt kontroluje nastavení (kalibrace).' },
    { q: 'Nakreslete a vysvětlete schéma řízení jako informačního působení.', a: 'SŘ (program SŘ – jak zajistit cílové chování) → řídící příkazy → OŘ (program OŘ – jak zajistit řídící příkazy) → výsledné chování. Zpětně: kontrola (realizace programu, cílové chování, odchylky) = přímá zpětná vazba; navíc vlastní zpětná vazba SŘ a OŘ. Vstupní informace do SŘ.' },
    { q: 'Uveďte příklad ovládání a regulace.', a: 'Ovládání: velitel nařídí četě potichu ustoupit. Regulace: líheň kuřat – termostat měří a vyrovnává teplotu, vedoucí líhně kontroluje jen nastavení (kalibrace).' },
    { q: 'Popište zavedení nového produktu jako informační působení.', a: 'Nápad → posouzení možností (trh, konkurence, spolupráce; finanční, personální, odborné, kapacitní zdroje, termíny) → rozhodnutí o realizaci → plán, zadání úkolů → vlastní program provozu (kdo, jak, prostředky, lidé, termíny) → realizace a obchodní činnost → kontrola skutečného stavu.' }
  ]
});
