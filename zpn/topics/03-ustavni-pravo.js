registerTopic({
  id: 'ustavni-pravo', order: 3, icon: '🏛️', title: 'Ústavní právo, Ústava a Listina', src: 'podklady', where: 'Přednáška 3',
  summary: 'Ústavní pořádek ČR, struktura Ústavy, tři moci (Parlament, prezident, vláda, soudy, Ústavní soud), NKÚ, ČNB, územní samospráva, Listina základních práv a svobod a veřejný ochránce práv – včetně přehledu čísel a lhůt.',
  vocab: [
    { w: 'Aktivní × pasivní volební právo', x: 'Aktivní = právo volit; pasivní = právo být zvolen (kandidovat).' },
    { w: 'Poměrný × většinový volební systém', x: 'Poměrný: mandáty podle podílu hlasů pro strany; většinový: vyhrává kandidát s nejvíce hlasy v obvodu.' },
    { w: 'Mandát', x: 'Pověření vykonávat funkci (poslance, senátora, zastupitele), které dostanete ve volbách.' },
    { w: 'Ratifikace', x: 'Závěrečné potvrzení mezinárodní smlouvy státem, aby pro něj byla závazná (u nás ji provádí prezident).' },
    { w: 'Veto', x: 'Právo prezidenta vrátit schválený zákon Parlamentu k novému projednání.' },
    { w: 'Velezrada', x: 'Nejtěžší jednání proti státu (např. proti jeho svrchovanosti a ústavnímu zřízení).' },
    { w: 'Presumpce neviny', x: 'Každý je považován za nevinného, dokud mu vinu nedokáže pravomocný rozsudek soudu.' },
    { w: 'Zastupitelstvo', x: 'Volený sbor zástupců obce nebo kraje, který o jejich záležitostech rozhoduje.' }
  ],
  key: [
    '<b>Ústava ČR</b> = zákon č. 1/1993 Sb., účinná od 1. 1. 1993; preambule + <b>8 hlav, 113 článků</b>. <b>Listina</b> = ústavní zákon č. 2/1993 Sb. Ústavní pořádek tvoří Ústava, Listina, ústavní zákony (čl. 112) – tzv. polylegální ústava.',
    '<b>Ústavní zákon</b> přijímá Parlament: souhlas <b>3/5 všech poslanců a 3/5 přítomných senátorů</b> (čl. 39 odst. 4). Ústavu lze měnit jen ústavním zákonem (čl. 9).',
    '<b>Poslanecká sněmovna</b>: 200 poslanců, 4 roky, poměrný systém, volit 18, být zvolen 21; lze rozpustit. <b>Senát</b>: 81 senátorů, 6 let, každé 2 roky obměna 1/3, většinový systém, volit 18, být zvolen 40; nelze rozpustit.',
    '<b>Prezident</b>: přímá volba, 5 let, max. 2 období po sobě, od 40 let; z funkce není odpovědný, po dobu funkce nelze trestně stíhat – jen ústavní žaloba pro velezradu nebo hrubé porušení Ústavy.',
    '<b>Vláda</b>: předseda, místopředsedové, ministři; odpovídá Poslanecké sněmovně; předsedu a členy jmenuje prezident. <b>Ústavní soud</b>: Brno, 15 soudců na 10 let, není součástí soustavy obecných soudů.',
    '<b>Listina</b>: 6 hlav – obecná ustanovení, lidská práva a svobody (občanská a politická), práva menšin, hospodářská, sociální a kulturní práva, právo na soudní a jinou ochranu, společná ustanovení. Práva jsou nezadatelná, nezrušitelná, nepromlčitelná, nezcizitelná.',
    '<b>Zásady</b>: každý může činit, co není zákonem zakázáno (čl. 2 odst. 4 Ústavy; čl. 2 odst. 3 Listiny); státní moc jen v případech, mezích a způsoby stanovenými zákonem. ČR je svrchovaný, jednotný a demokratický právní stát.',
    '<b>Veřejný ochránce práv</b> (ombudsman): volen PS na 6 let, max. 2 období po sobě, od 40 let; nemá rozhodovací pravomoc, jen doporučení.'
  ],
  sections: [
    { title: 'Ústavní právo a Ústava ČR', blocks: [
      { t: 'def', term: 'Ústavní právo', x: 'Soubor právních norem regulujících nejdůležitější právní vztahy ve státě: uspořádání státu, rozdělení a výkon státní moci, základní práva a svobody občanů.' },
      { t: 'nums', title: 'Ústava ČR v číslech', items: [
        { n: '1/1993', u: 'Sb.', x: 'Ústava ČR' },
        { n: '8', u: 'hlav', x: '+ preambule' },
        { n: '113', u: 'článků', x: 'čl. 113: účinnost od 1. 1. 1993' },
        { n: '3/5', u: '+ 3/5', x: 'změna jen ústavním zákonem: 3/5 všech poslanců a 3/5 přítomných senátorů' }
      ] },
      { t: 'ul', items: [
        '<b>Ústavní pořádek</b> = Ústava ČR (základní zákon nejvyšší právní síly) + Listina + ostatní ústavní zákony.',
        'Ústavní zákony se liší způsobem přijímání – <b>kvalifikovaná většina</b>.',
        'Patří sem i ústavní zákony ČSR, Federálního shromáždění ČSSR a České národní rady o státních hranicích a ústavní zákony ČNR přijaté po 6. 6. 1992 (čl. 112).',
        '<b>Rigidní</b> ústava (změna složitější než u běžných zákonů) × flexibilní (mění se jako běžné zákony). V ČR je rigidní.',
        '<b>Polylegální ústava</b> – ústavní pořádek tvoří více právních předpisů (Ústava × ústava v širším smyslu).',
        'Všechny nižší normy (zákony, zákonná opatření, nařízení vlády, vyhlášky ministerstev i samosprávy) nesmí být s Ústavou v rozporu; o souladu dbá Ústavní soud.'
      ] },
      { t: 'tree', title: 'Členění Ústavy ČR', root: { h: 'Ústava ČR', x: 'preambule + 8 hlav, čl. 1–113', kids: [
        { h: 'Preambule', x: 'tradice české a československé státnosti, odhodlání budovat a chránit ČR, svoboda a demokracie' },
        { h: '1. Základní ustanovení', x: 'čl. 1–14: charakteristika státu, státní symboly' },
        { h: '2. Moc zákonodárná', x: 'čl. 15–53: Parlament (PS, Senát)' },
        { h: '3. Moc výkonná', x: 'čl. 54–80: prezident (54–66), vláda (67–80)' },
        { h: '4. Moc soudní', x: 'čl. 81–96: Ústavní soud (83–89), soudy (90–96)' },
        { h: '5. NKÚ', x: 'čl. 97' },
        { h: '6. ČNB', x: 'čl. 98' },
        { h: '7. Územní samospráva', x: 'čl. 99–105: obce a kraje' },
        { h: '8. Přechodná a závěrečná ustanovení', x: 'čl. 106–113: ústavní pořádek (112), účinnost 1. 1. 1993 (113)' }
      ] } },
      { t: 'p', x: '<b>Základní ustanovení (hlava 1)</b>:' },
      { t: 'ul', items: [
        'ČR je <b>svrchovaný, jednotný a demokratický právní stát</b> založený na úctě k právům a povinnostem člověka a občana (čl. 1).',
        'Státní moc vykonává <b>lid</b> prostřednictvím moci zákonodárné, výkonné a soudní (zastupitelská demokracie); přímá demokracie = referendum (v praxi jen ústavní zákon k jednotlivému referendu, např. o přistoupení k EU).',
        'Čl. 2 odst. 4: každý občan může činit, co není zákonem zakázáno; nikdo nesmí být nucen činit, co zákon neukládá.',
        'Čl. 3: součástí ústavního pořádku je Listina. Čl. 7: ochrana přírodního bohatství.',
        'Čl. 9: Ústavu lze měnit jen ústavními zákony. Čl. 11: území je nedílný celek, hranice lze měnit jen ústavním zákonem.',
        'Čl. 12: nikdo nemůže být proti své vůli zbaven státního občanství. Čl. 13: hlavní město Praha.'
      ] },
      { t: 'tree', title: 'Tripartita – dělba státní moci', root: { h: 'Státní moc', x: 'vykonává lid (čl. 2)', kids: [
        { h: 'Zákonodárná', kids: [{ h: 'Poslanecká sněmovna' }, { h: 'Senát' }] },
        { h: 'Výkonná', kids: [{ h: 'Prezident' }, { h: 'Vláda' }] },
        { h: 'Soudní', kids: [{ h: 'Ústavní soud' }, { h: 'Obecné soudy' }] }
      ] } },
      { t: 'icons', title: 'Státní symboly (čl. 14)', items: [
        { i: '🛡️', h: 'Velký státní znak', x: 'čtyřpolný štít: 1. a 4. pole stříbrný dvouocasý lev se zlatou korunou (Čechy); 2. pole červeno-stříbrně šachovaná orlice se zlatou korunou na modrém pozadí (Morava); 3. pole černá orlice s červenou zbrojí a zlatou korunou, stříbrný půlměsíc zakončený jetelovými lístky s křížkem na zlatém pozadí (Slezsko)' },
        { i: '🦁', h: 'Malý státní znak', x: 'stříbrný dvouocasý lev ve skoku, zlatá koruna, červené pozadí' },
        { i: '🏳️', h: 'Vlajka a státní barvy', x: 'bílá, červená, modrá; poměr šířky k délce 2:3; modrý klín; visí-li svisle, bílá vlevo, červená vpravo' },
        { i: '🔏', h: 'Státní pečeť', x: 'velký státní znak podložený lipovými ratolestmi, nápis ČESKÁ REPUBLIKA' },
        { i: '🚩', h: 'Vlajka prezidenta', x: 'čtvercová, bílý podklad s bílými, červenými a modrými plaménky; uprostřed velký státní znak, pod ním na červené stužce bílý nápis PRAVDA VÍTĚZÍ' },
        { i: '🎵', h: 'Státní hymna', x: '1. sloka písně „Kde domov můj“ z hry Fidlovačka (text J. K. Tyl, hudba F. Škroup)' }
      ] },
      { t: 'warn', x: 'Slajd uvádí, že modrý trojúhelník zasahuje „do 1/2 šířky“; podle zákona č. 3/1993 Sb. zasahuje modrý klín do <b>poloviny délky</b> vlajky.' }
    ] },
    { title: 'Moc zákonodárná – Parlament', blocks: [
      { t: 'p', x: 'Orgánem moci zákonodárné je <b>Parlament ČR</b> o dvou komorách – Poslanecká sněmovna (PS) a Senát (čl. 15). Nikdo nemůže být současně členem obou komor.' },
      { t: 'versus', title: 'Poslanecká sněmovna × Senát', cols: [
        { h: 'Poslanecká sněmovna', items: ['<b>200</b> poslanců', '<b>4 roky</b>', 'Poměrné zastoupení (hlasy stranám)', 'Aktivní právo <b>18 let</b> (nejpozději v den voleb)', 'Pasivní právo <b>21 let</b>', 'Lze rozpustit (právo prezidenta)'] },
        { h: 'Senát', items: ['<b>81</b> senátorů', '<b>6 let</b>; každé 2 roky se volí 1/3', 'Většinový (zvolen kandidát s nadpoloviční většinou v obvodu, případně 2. kolo)', 'Aktivní právo <b>18 let</b>', 'Pasivní právo <b>40 let</b>', '<b>Nelze</b> rozpustit'] }
      ] },
      { t: 'p', x: 'Obě komory: tajné hlasování, všeobecné, rovné a přímé volební právo.' },
      { t: 'nums', title: 'Kvóra a většiny (čl. 39)', items: [
        { n: '1/3', u: 'členů komory', x: 'usnášeníschopnost – přítomna alespoň 1/3' },
        { n: '> 1/2', u: 'přítomných', x: 'přijetí usnesení (prostá většina)' },
        { n: '3/5', u: 'všech poslanců', x: 'ústavní zákon a souhlas k ratifikaci podle čl. 10a (odst. 4)' },
        { n: '3/5', u: 'přítomných senátorů', x: 'totéž – kvalifikovaná většina v Senátu' }
      ] },
      { t: 'icons', title: 'Kdo má zákonodárnou iniciativu (čl. 41)', items: [
        { i: '🙋', h: 'Jednotliví poslanci' },
        { i: '👥', h: 'Skupina poslanců' },
        { i: '🏛️', h: 'Senát' },
        { i: '🏢', h: 'Vláda' },
        { i: '🗺️', h: 'Zastupitelstvo kraje', x: 'vyšší územní samosprávný celek' }
      ] },
      { t: 'ul', items: [
        'Schůze obou komor jsou <b>veřejné</b> (vyloučení veřejnosti za zákonných podmínek) – čl. 36.',
        '<b>Neslučitelnost funkcí</b> (čl. 21, 22): nelze být poslancem i senátorem; s mandátem je neslučitelný úřad prezidenta, funkce soudce a další funkce stanovené zákonem.',
        '<b>Imunita</b>: trestní stíhání poslance/senátora jen se souhlasem komory, jejímž je členem.'
      ] },
      { t: 'tip', x: 'Hlavní úkol Parlamentu: projednávání a přijímání zákonů (legislativní činnost). Čísla: <b>200 / 4 / 21</b> (PS) × <b>81 / 6 / 40</b> (Senát); aktivní právo 18 let pro obě.' },
      { t: 'flow', title: 'Legislativní proces (zkráceně, doplněno mimo slajdy)', steps: [
        { h: 'Iniciativa', x: 'návrh zákona' },
        { h: 'Poslanecká sněmovna', x: 'tři čtení' },
        { h: 'Senát', x: '30 dnů: schválí, zamítne, vrátí s pozměňovacími návrhy' },
        { h: 'Prezident', x: 'podepíše, nebo vrátí (veto; PS přehlasuje nadpoloviční většinou všech poslanců)' },
        { h: 'Sbírka zákonů', x: 'vyhlášení' }
      ] }
    ] },
    { title: 'Moc výkonná – prezident, vláda, státní zastupitelství', blocks: [
      { t: 'nums', title: 'Prezident republiky', items: [
        { n: '5', u: 'let', x: 'funkční období (čl. 55, 57)' },
        { n: '2', u: 'období po sobě', x: 'nejvýše' },
        { n: '40', u: 'let', x: 'pasivní volební právo (čl. 57)' },
        { n: 'přímá', u: 'volba', x: 'zákon č. 275/2012 Sb., o volbě prezidenta' }
      ] },
      { t: 'ul', items: [
        'Postavení: <b>hlava státu</b>; z výkonu funkce není nikomu odpovědný (čl. 54).',
        'Slib: složí do rukou <b>předsedy Senátu</b> na společné schůzi obou komor (čl. 59).'
      ] },
      { t: 'icons', title: 'Pravomoci prezidenta (čl. 62, 63)', items: [
        { i: '🌐', h: 'Zastupuje stát navenek' },
        { i: '🧑‍💼', h: 'Jmenuje a odvolává vládu', x: 'předsedu a další členy' },
        { i: '🚪', h: 'Svolává a rozpouští PS', x: 'svolává zasedání PS a může ji rozpustit' },
        { i: '🖊️', h: 'Mezinárodní smlouvy', x: 'sjednává a ratifikuje (nepřenesl-li pravomoc na vládu)' },
        { i: '🎖️', h: 'Vrchní velitel', x: 'ozbrojených sil; jmenuje a povyšuje generály' },
        { i: '👨‍⚖️', h: 'Jmenuje soudce', x: 'soudce ÚS se souhlasem Senátu; členy Bankovní rady ČNB' },
        { i: '🕊️', h: 'Amnestie', x: 'hromadné prominutí trestu, částečné nebo úplné' }
      ] },
      { t: 'flow', title: 'Odpovědnost prezidenta (čl. 65)', steps: [
        { h: 'Po dobu funkce', x: 'nelze trestně stíhat' },
        { h: 'Senát se souhlasem PS', x: 'podá ústavní žalobu' },
        { h: 'Ústavní soud', x: 'pro velezradu nebo hrubé porušení Ústavy či jiné součásti ústavního pořádku' }
      ] },
      { t: 'warn', x: 'Slajd uvádí, že slib se skládá „do rukou předsedy PS“ – podle čl. 59 Ústavy jej prezident skládá do rukou <b>předsedy Senátu</b>. Dále: prezident není trestně stíhatelný pro běžné trestné činy po dobu funkce; velezradu řeší ústavní žaloba (ne běžné trestní stíhání).' },
      { t: 'ul', items: [
        '<b>Vláda</b> = vrcholný kolektivní orgán moci výkonné; řídí a kontroluje státní administrativní aparát.',
        'Složení (čl. 67 odst. 2): předseda vlády, místopředsedové, ministři.',
        'Akty: nařízení vlády (čl. 78 – k provedení zákona a v jeho mezích) a usnesení (čl. 76).',
        'Ministerstva lze zřizovat a jejich působnost stanovit jen zákonem (čl. 79); kompetenční zákon č. 2/1969 Sb.'
      ] },
      { t: 'flow', title: 'Vznik a odpovědnost vlády', steps: [
        { h: 'Prezident', x: 'jmenuje předsedu vlády (premiéra)' },
        { h: 'Premiér', x: 'navrhuje ostatní členy' },
        { h: 'Prezident', x: 'jmenuje členy vlády na návrh premiéra' },
        { h: 'Vláda', x: 'odpovídá Poslanecké sněmovně (čl. 68)' }
      ] },
      { t: 'p', x: '<b>Státní zastupitelství</b> (čl. 80, zákon č. 283/1993 Sb.): zejména zastupuje veřejnou žalobu v trestním řízení. Podle slajdů je řazeno k orgánům moci výkonné.' }
    ] },
    { title: 'Moc soudní a Ústavní soud', blocks: [
      { t: 'ul', items: [
        'Ústavou zaručena <b>nezávislost</b> výkonu soudcovské funkce (čl. 81); při rozhodování je soudce <b>vázán pouze zákonem</b>.',
        '<b>Soudce</b>: bezúhonný občan, ukončené právnické vysokoškolské vzdělání, praxe justičního čekatele, odborná justiční zkouška, neslučitelnost funkcí. Jmenuje ho <b>prezident</b> bez časového omezení.'
      ] },
      { t: 'nums', title: 'Soudy a Ústavní soud v číslech', items: [
        { n: '30', u: 'let', x: 'minimální věk soudce' },
        { n: '4', u: 'druhy soudnictví', x: 'civilní, trestní, správní, ústavní' },
        { n: '15', u: 'soudců ÚS', x: 'jmenuje prezident se souhlasem Senátu' },
        { n: '10', u: 'let', x: 'funkční období soudce ÚS' }
      ] },
      { t: 'pyramid', title: 'Soustava soudů (čl. 91)', levels: [
        { h: 'Nejvyšší soud a Nejvyšší správní soud', x: 'oba Brno' },
        { h: 'Vrchní soudy', x: 'Praha, Olomouc' },
        { h: 'Krajské soudy' },
        { h: 'Okresní soudy', x: 'v Praze obvodní' }
      ] },
      { t: 'warn', x: 'Slajd uvádí „krajské soudy (14)“ – krajských soudů (vč. Městského soudu v Praze) je ve skutečnosti 8, ne 14 (14 je počet krajů). U zkoušky počítejte s uvedením soustavy bez čísla.' },
      { t: 'ul', items: [
        '<b>Ústavní soud</b> (čl. 83–89, zákon č. 182/1993 Sb.): samostatný specializovaný nezávislý orgán soudní moci, orgán <b>ochrany ústavnosti</b>; sídlo <b>Brno</b>.',
        '<b>Není součástí soustavy obecných soudů</b> (čl. 91 odst. 1); nerozpustitelný a neodvolatelný.'
      ] },
      { t: 'icons', title: 'Pravomoci Ústavního soudu', items: [
        { i: '✂️', h: 'Ruší předpisy', x: 'na návrh ruší zákony a jiné právní předpisy (nebo jejich části) v rozporu s Ústavou' },
        { i: '🌐', h: 'Mezinárodní smlouvy', x: 'rozhoduje o souladu s ústavním pořádkem' },
        { i: '📮', h: 'Ústavní stížnosti', x: 'proti pravomocným rozhodnutím orgánů veřejné moci porušujícím ústavně zaručená práva a svobody' },
        { i: '📣', h: 'Ústavní žaloba', x: 'proti prezidentovi' }
      ] },
      { t: 'ul', items: [
        '<b>Rozhodnutí = nález</b>; vykonatelný vyhlášením ve Sbírce zákonů (neurčí-li ÚS jinak); závazný pro všechny orgány a osoby.'
      ] },
      { t: 'icons', title: 'Ústavní principy soudnictví', items: [
        { i: '🏛️', h: 'Jménem republiky', x: 'výkon soudní moci' },
        { i: '🛡️', h: 'Nezávislost soudů a soudců' },
        { i: '⚖️', h: 'Nestrannost soudců' },
        { i: '👥', h: 'Senát a samosoudce', x: 'rozhodování senátem i samosoudcem' },
        { i: '🙋', h: 'Účast lidu', x: 'přísedící' },
        { i: '📖', h: 'Vázanost zákonem' },
        { i: '🤝', h: 'Rovnost účastníků řízení' },
        { i: '🗣️', h: 'Ústnost a veřejnost jednání' }
      ] }
    ] },
    { title: 'NKÚ, ČNB, územní samospráva', blocks: [
      { t: 'versus', title: 'Nejvyšší kontrolní úřad × Česká národní banka', cols: [
        { h: 'NKÚ (čl. 97)', items: ['Nezávislý orgán, nezávislost institucionální i finanční; v čele prezident NKÚ', 'Kontroluje hospodaření se státním majetkem, finanční prostředky vybírané podle zákona a plnění státního rozpočtu', 'Cíl: hospodárné nakládání s prostředky daňových poplatníků', 'Zákon č. 166/1993 Sb.; první kontrolní instituce u nás: Dvorská účetní komora (1761)'] },
        { h: 'ČNB (čl. 98)', items: ['Ústřední a emisní banka státu, sídlo Praha', 'Hlavní úkol: péče o stabilitu měny; určuje měnovou politiku, vydává bankovky a mince, řídí peněžní oběh a platební styk', 'Dohlíží na bankovní sektor, kapitálový trh, pojišťovnictví, penzijní připojištění, družstevní záložny a další', 'Zákon č. 6/1993 Sb.'] }
      ] },
      { t: 'nums', title: 'Bankovní rada ČNB', items: [
        { n: '7', u: 'členů', x: 'guvernér, 2 viceguvernéři, 4 další členové' },
        { n: '6', u: 'let', x: 'funkční období' },
        { n: '2×', u: 'nejvýše', x: 'jmenuje je prezident' }
      ] },
      { t: 'warn', x: 'Slajd uvádí u NKÚ zákon „č. 66/1993 Sb.“ – správně je to <b>zákon č. 166/1993 Sb.</b>, o Nejvyšším kontrolním úřadu. Informace o obsazení funkce prezidenta NKÚ a jména funkcionářů (NKÚ, ČNB, ombudsman) ve slajdech jsou zastaralé – ověřte aktuální stav.' },
      { t: 'def', term: 'Územní samospráva', x: 'Prostorově vymezený funkční celek nadaný právem sám rozhodovat o svých záležitostech. Územní samosprávné celky jsou územní společenství občanů s právem na samosprávu, spravovaná zastupitelstvem – volený orgán chráněný proti zásahům státní moci, který může v mezích působnosti vydávat obecně závazné vyhlášky.' },
      { t: 'nums', title: 'Územní samospráva v číslech', items: [
        { n: '6 254', u: 'obcí', x: 'základní ÚSC (čl. 99; údaj slajdů); zákon č. 128/2000 Sb.' },
        { n: '14', u: 'krajů', x: 'vyšší ÚSC vč. Prahy; zákony č. 129/2000 a 131/2000 Sb. (hl. m. Praha)' },
        { n: '2', u: 'stupně', x: 'samospráva obce a kraje (čl. 99, čl. 100 odst. 2)' }
      ] },
      { t: 'p', x: '14 krajů: hl. m. Praha, Jihočeský, Jihomoravský, Karlovarský, Královéhradecký, Liberecký, Moravskoslezský, Olomoucký, Pardubický, Plzeňský, Středočeský, Ústecký, Vysočina, Zlínský.' },
      { t: 'tip', x: 'Přechodná a závěrečná ustanovení: čl. 112 (co tvoří ústavní pořádek a co se ruší), čl. 113 (Ústava účinná od 1. 1. 1993).' }
    ] },
    { title: 'Listina základních práv a svobod', blocks: [
      { t: 'ul', items: [
        'Vyhlášena <b>ústavním zákonem č. 2/1993 Sb.</b> (původně v ČSFR ú. z. č. 23/1991 Sb.); vyhlášení je deklaratorní.',
        'Vychází z Všeobecné deklarace lidských práv (1948) a Mezinárodních paktů o občanských a politických právech a o hospodářských, sociálních a kulturních právech (1966).',
        'Preambule + <b>6 hlav</b>; preambule vyjadřuje principy a zdroje základních práv jako přirozených a neporušitelných, je součástí Listiny a je závazná pro zákonodárce i Ústavní soud.',
        'Zaručují se všem bez rozdílu pohlaví, rasy, barvy pleti, jazyka, víry, politického názoru, původu, příslušnosti k menšině, majetku, rodu aj.; stát je garantuje a zajišťuje jejich dodržování.',
        'Ochrana: nezávislé obecné soudy a Ústavní soud; na mezinárodní úrovni např. Evropský soud pro lidská práva ve Štrasburku.',
        'Základní práva se zaručují <b>každému</b> (nejen občanům), pokud není výslovně řečeno jinak (např. volební právo, právo zakládat politické strany a bezplatné vzdělání jen občanům).'
      ] },
      { t: 'icons', title: 'Lidská práva jsou přirozená', items: [
        { i: '🚫', h: 'Nezadatelná' },
        { i: '♾️', h: 'Nezrušitelná' },
        { i: '⏳', h: 'Nepromlčitelná' },
        { i: '🔒', h: 'Nezcizitelná' }
      ] },
      { t: 'table', head: ['Hlava / skupina práv', 'Články', 'Obsah (příklady)'], rows: [
        ['<b>1. Obecná ustanovení</b>', 'čl. 1–4', 'rovnost v důstojnosti a právech (1); stát založen na demokratických hodnotách, nesmí se vázat na ideologii ani náboženství (2/1); co není zakázáno, je dovoleno (2/3); zákaz diskriminace a právo rozhodnout o své národnosti (3); povinnosti jen na základě zákona (4)'],
        ['<b>2. Lidská práva a základní svobody – základní práva a svobody</b> (občanská)', 'čl. 5–16', 'způsobilost mít práva (5); <b>život</b> (6; zákaz trestu smrti; ochrana i před narozením); osobní nedotknutelnost, zákaz mučení a nelidského zacházení (7); <b>osobní svoboda</b> (8); zákaz nucených prací (9); lidská důstojnost, čest, soukromí (10); <b>vlastnictví</b>, dědění, vlastnictví zavazuje, vyvlastnění jen za náhradu (11); nedotknutelnost obydlí (12); listovní tajemství (13); svoboda pohybu a pobytu (14); svoboda myšlení, svědomí, náboženství (15); projev náboženství a víry (16)'],
        ['<b>2. – politická práva</b>', 'čl. 17–23', 'svoboda projevu a právo na informace, zákaz cenzury (17); petiční právo (18); shromažďovací právo (19); sdružovací právo, politické strany (20); právo podílet se na správě veřejných věcí, volební právo (21); právo na odpor (23)'],
        ['<b>3. Práva národnostních a etnických menšin</b>', 'čl. 24–25', 'příslušnost k menšině nesmí být nikomu na újmu; právo na vlastní kulturu, informace a vzdělání v mateřském jazyce, sdružování'],
        ['<b>4. Hospodářská, sociální a kulturní práva</b>', 'čl. 26–35', 'svobodná volba povolání, právo podnikat (26); odbory a stávka (27); spravedlivá odměna a pracovní podmínky (28); zvýšená ochrana žen, mladistvých, zdravotně postižených při práci (29); hmotné zabezpečení ve stáří, při nezpůsobilosti k práci, ztrátě živitele (30); ochrana zdraví (31); ochrana rodiny, rodičovství, dětí (32); <b>vzdělání</b>, povinná školní docházka, bezplatnost pro občany (33); práva k výsledkům tvůrčí duševní činnosti (34); <b>příznivé životní prostředí</b> (35)'],
        ['<b>5. Právo na soudní a jinou právní ochranu</b>', 'čl. 36–40', 'spravedlivý proces, nezávislý a nestranný soud (36); právní pomoc a tlumočník (37); zákonný soudce, veřejné projednání, bez zbytečných průtahů, právo nevypovídat (38); <i>nullum crimen</i> – jen zákon stanoví, co je trestným činem (39); <b>presumpce neviny</b>, <i>ne bis in idem</i> (40)'],
        ['<b>6. Společná ustanovení</b>', 'čl. 41–44', 'práva lze uplatnit jen v mezích zákonů (41); cizinci (42); azyl (43); omezení některých práv u soudců, státních zástupců, ozbrojených složek (44)']
      ] },
      { t: 'tree', title: 'Členění lidských práv do skupin', root: { h: 'Lidská práva', kids: [
        { h: '1. Občanská', x: 'historicky nejstarší: život, svobody, majetek, ochrana osobnosti' },
        { h: '2. Politická', x: 'volební právo, informace, shromažďování, sdružování' },
        { h: '3. Hospodářská, sociální a kulturní', x: 'rozmach po 2. světové válce' },
        { h: 'Moderní (nová) práva', x: 'příznivé životní prostředí, ochrana spotřebitele' }
      ] } },
      { t: 'nums', title: 'Osobní svoboda – lhůty (čl. 8)', items: [
        { n: '48', u: 'hodin', x: 'nejdéle zadržení policií (totožnost, podezření z TČ) – pak propuštění nebo předání soudu' },
        { n: '24', u: 'hodin', x: 'zatčený se odevzdá soudu; soud ho bez zbytečného odkladu vyslechne a rozhodne o vazbě' },
        { n: '24', u: 'hodin', x: 'ústavní zdravotnická péče: oznámit soudu' },
        { n: '7', u: 'dnů', x: 'soud rozhodne o držení v ústavní péči' }
      ] },
      { t: 'nums', title: 'Volební právo (čl. 21) – kolik let', items: [
        { n: '4', u: 'roky', x: 'Poslanecká sněmovna' },
        { n: '4', u: 'roky', x: 'zastupitelstva obcí a krajů' },
        { n: '5', u: 'let', x: 'Evropský parlament' },
        { n: '6', u: 'let', x: 'Senát (po 1/3 každé 2 roky)' }
      ] },
      { t: 'p', x: 'Volební právo je všeobecné (od 18 let), rovné (1 hlas), přímé, tajné.' },
      { t: 'ul', items: [
        '<b>Nucené práce</b> (čl. 9): zákaz; výjimky – výkon trestu odnětí svobody, vojenská služba, živelné pohromy, ochrana života a zdraví.',
        '<b>Vlastnictví</b> (čl. 11): právo vlastnit a dědit; vlastnictví zavazuje; vyvlastnění nebo omezení jen ve veřejném zájmu, na základě zákona a za náhradu.',
        '<b>Obydlí</b> (čl. 12): domovní prohlídka jen pro účely trestního řízení na písemný příkaz soudce; vstup bez příkazu při ochraně života a zdraví.',
        '<b>Petiční právo</b> (čl. 18): obracet se na státní orgány a samosprávu se žádostmi, návrhy, stížnostmi; právo na řádné řízení o petici a odpověď (ne na vyhovění); nesmí zasahovat do nezávislosti soudu.',
        '<b>Shromažďovací</b> (čl. 19) a <b>sdružovací</b> (čl. 20) právo: shromáždění zaručeno každému; politické strany jen občanům, strany jsou odděleny od státu (nenahrazují státní orgány).'
      ] },
      { t: 'ul', items: [
        '<b>Právo na soudní ochranu (čl. 36–40)</b> – prvky:',
        'nezávislý a nestranný soud; soudní přezkum rozhodnutí orgánů veřejné moci; náhrada škody způsobené nezákonným rozhodnutím',
        'právo odepřít výpověď (kdo by způsobil trestní stíhání sobě nebo osobě blízké); právní pomoc a tlumočník; zákonný soudce',
        'veřejné projednání bez zbytečných průtahů; o vině a trestu rozhoduje soud; presumpce neviny; čas a možnost k přípravě obhajoby',
        'dva znaky trestného činu – formální (v zákoně) a materiální (společenská nebezpečnost)',
        '<i>ne bis in idem</i>: nikdo nesmí být opětovně stíhán pro čin, pro který již byl odsouzen nebo zproštěn obžaloby'
      ] },
      { t: 'warn', x: 'Svoboda vyznání, projevu, shromažďování a sdružování nejsou neomezená – lze je omezit zákonem v případech stanovených Listinou (např. čl. 14 odst. 3 uvádí taxativní důvody pro omezení pohybu a pobytu). Povinnosti lze ukládat jen na základě zákona (čl. 4).' }
    ] },
    { title: 'Ochránce práv a subjekty ústavního práva', blocks: [
      { t: 'versus', title: 'Veřejný ochránce práv × Evropský veřejný ochránce práv', cols: [
        { h: 'Veřejný ochránce práv (ombudsman)', items: [
          'V ČR od roku 2000',
          'Volí <b>Poslanecká sněmovna</b> na <b>6 let</b>, nejvýše 2 po sobě jdoucí období; věk <b>40 let</b>',
          'Chrání před jednáním úřadů i jejich nečinností; dohled nad právy osob omezených na svobodě; pomáhá obětem diskriminace',
          '<b>Nemá rozhodovací pravomoc</b>, jen doporučení; vstup do úřadů, nahlížení do spisů, vysvětlení a důkazy; jedná i z vlastní iniciativy',
          'Obrátit se může každý (FO i PO) ve věci spadající do působnosti'
        ] },
        { h: 'Evropský veřejný ochránce práv', items: [
          'Zřízen Maastrichtskou smlouvou (Smlouva o EU)',
          'Jmenován Evropským parlamentem na <b>5 let</b> (opakovaně)',
          'Vyšetřuje stížnosti na nesprávný úřední postup institucí a orgánů EU (Komise, Rada, EP, Účetní dvůr aj.)',
          'Obrátit se mohou občané členských států, osoby s povolením k pobytu a společnosti či sdružení se sídlem v EU',
          'Sídlo: Štrasburk, budova Evropského parlamentu'
        ] }
      ] },
      { t: 'tree', title: 'Subjekty ústavního práva', root: { h: 'Subjekty ústavního práva', kids: [
        { h: 'Stát a jeho orgány', kids: [
          { h: 'Zákonodárné', x: 'Parlament, PS, Senát, výbory, komise, předsedové, poslanci, senátoři' },
          { h: 'Výkonné', x: 'prezident, vláda, správní úřady, státní zastupitelství, předseda a členové vlády' },
          { h: 'Soudní', x: 'Ústavní soud, soudy, soudci, přísedící, senáty' }
        ] },
        { h: 'Územní útvary', x: 'jednají za ně jejich orgány', kids: [
          { h: 'Územní korporace veřejného práva', x: 'stát, kraje, obce' },
          { h: 'Jiné územní útvary', x: 'volební kraje, volební obvody' }
        ] },
        { h: 'Fyzické osoby', x: 'státní občané, cizinci, osoby bez státního občanství, občané obce' },
        { h: 'Skupiny fyzických osob', kids: [
          { h: 'Organizované s právní subjektivitou', x: 'politické strany a hnutí, spolky, církve' },
          { h: 'Organizované bez právní subjektivity', x: 'přípravný výbor politické strany, petiční výbor' },
          { h: 'Neorganizované', x: 'lid v referendu, národnostní menšina' }
        ] }
      ] } }
    ] }
  ],
  mistakes: [
    'Zaměnit počty a věk: PS = 200 poslanců, 4 roky, pasivní právo <b>21</b>; Senát = 81 senátorů, 6 let, pasivní právo <b>40</b>; prezident 5 let, 40 let.',
    'Tvrdit, že Senát lze rozpustit – nelze; rozpustit lze jen Poslaneckou sněmovnu.',
    'Zaměnit většiny: prostá (nadpoloviční většina přítomných), usnášeníschopnost (1/3 členů), ústavní zákon (3/5 všech poslanců + 3/5 přítomných senátorů).',
    'Zaměnit volební systémy: PS = poměrné zastoupení, Senát = většinový.',
    'Zaměnit vládu a Poslaneckou sněmovnu: vláda odpovídá PS (ne Senátu ani prezidentovi), členy jmenuje prezident.',
    'Zaměnit Ústavní soud a Nejvyšší soud / soustavu obecných soudů – ÚS (Brno) <b>není</b> součástí soustavy obecných soudů a nerozhoduje o věcech jako odvolací soud.',
    'Tvrdit, že Listina je součástí Ústavy jako její kapitola – je samostatným ústavním zákonem (2/1993 Sb.) v ústavním pořádku.',
    'Zaměnit právo na život, osobní svobodu a lhůty (48 h zadržení × 24 h předání soudu zatčeného) a práva, která se týkají jen občanů (volební právo, zakládání politických stran, bezplatné vzdělání).'
  ],
  qa: [
    { q: 'Co tvoří ústavní pořádek ČR?', a: 'Ústava (1/1993 Sb.), Listina základních práv a svobod (2/1993 Sb.), ústavní zákony přijaté podle Ústavy, ústavní zákony ČSR/FS/ČNR upravující státní hranice a ústavní zákony ČNR přijaté po 6. 6. 1992 (čl. 112). Jde o tzv. polylegální ústavu.' },
    { q: 'Jak je členěna Ústava ČR?', a: 'Preambule + 8 hlav (113 článků): 1. základní ustanovení, 2. moc zákonodárná, 3. moc výkonná (prezident, vláda), 4. moc soudní (ÚS, soudy), 5. NKÚ, 6. ČNB, 7. územní samospráva, 8. přechodná a závěrečná ustanovení.' },
    { q: 'Porovnejte Poslaneckou sněmovnu a Senát (počet, volební období, systém, věkové hranice).', a: 'PS: 200 poslanců, 4 roky, poměrný systém, aktivní právo 18, pasivní 21, lze rozpustit. Senát: 81 senátorů, 6 let (1/3 se obměňuje každé 2 roky), většinový systém, aktivní 18, pasivní 40, nelze rozpustit.' },
    { q: 'Jaká většina je potřeba ke schválení ústavního zákona?', a: '3/5 všech poslanců a 3/5 přítomných senátorů (čl. 39 odst. 4); stejná většina i k souhlasu s ratifikací mezinárodní smlouvy o přenosu pravomocí (čl. 10a). Běžný zákon: nadpoloviční většina přítomných (při přítomnosti alespoň 1/3 členů).' },
    { q: 'Kazuistika: Pepovi je 20 let a je občanem ČR. Může volit do Poslanecké sněmovny? Může kandidovat? A do Senátu?', a: 'Volit může (aktivní právo od 18 let). Kandidovat do PS nemůže (pasivní právo od 21 let) a do Senátu také ne (40 let).' },
    { q: 'Kdo může podat návrh zákona (zákonodárná iniciativa)?', a: 'Jednotliví poslanci, skupina poslanců, Senát, vláda a zastupitelstvo vyššího územního samosprávného celku (kraje) – čl. 41 Ústavy.' },
    { q: 'Jaké je postavení prezidenta republiky?', a: 'Hlava státu, volená přímo na 5 let, nejvýše 2 období po sobě, od 40 let; z výkonu funkce není nikomu odpovědný. Zastupuje stát navenek, jmenuje předsedu a členy vlády, soudce, členy Bankovní rady ČNB, rozpouští PS, vrchní velitel ozbrojených sil, uděluje amnestii. Po dobu funkce nelze trestně stíhat; Senát se souhlasem PS může podat ústavní žalobu pro velezradu nebo hrubé porušení Ústavy.' },
    { q: 'Jak se skládá vláda a komu odpovídá?', a: 'Z předsedy, místopředsedů a ministrů; odpovídá Poslanecké sněmovně. Předsedu jmenuje prezident, ostatní členy na návrh předsedy vlády. Vydává nařízení vlády k provedení zákona (čl. 78).' },
    { q: 'Co je Ústavní soud a čím se liší od obecných soudů?', a: 'Samostatný specializovaný nezávislý orgán soudní moci (Brno), ochránce ústavnosti, není součástí soustavy obecných soudů. 15 soudců na 10 let. Ruší zákony a předpisy v rozporu s Ústavou, rozhoduje o ústavních stížnostech proti pravomocným rozhodnutím a o souladu mezinárodních smluv s ústavním pořádkem. Rozhoduje nálezem, závazným pro všechny orgány a osoby.' },
    { q: 'Jakou funkci mají NKÚ a ČNB?', a: 'NKÚ je nezávislý orgán kontrolující hospodaření se státním majetkem a plnění státního rozpočtu (zákon č. 166/1993 Sb.). ČNB je ústřední banka a emisní banka, pečuje o stabilitu měny a dohlíží na finanční trh; Bankovní rada má 7 členů jmenovaných prezidentem na 6 let (max. 2×).' },
    { q: 'Jak je organizována územní samospráva ČR?', a: 'Dvoustupňově: obce (základní ÚSC, cca 6 254; zákon 128/2000 Sb.) a kraje (vyšší ÚSC, 14 vč. Prahy; zákony 129/2000 a 131/2000 Sb.). Samosprávu vykonávají volená zastupitelstva, která mohou vydávat obecně závazné vyhlášky.' },
    { q: 'Jak se člení práva v Listině?', a: 'Obecná ustanovení (čl. 1–4); občanská práva a svobody (5–16); politická práva (17–23); práva menšin (24–25); hospodářská, sociální a kulturní práva (26–35); právo na soudní a jinou ochranu (36–40); společná ustanovení (41–44). Jde o 6 hlav s preambulí.' },
    { q: 'Kazuistika: Policie zadrží Pepu pro podezření z trestného činu. Dokdy ho musí propustit nebo předat soudu? Co když šlo o zatčení na příkaz soudce?', a: 'Zadržení policií smí trvat nejdéle 48 hodin, poté propuštění nebo předání soudu (soud pak rozhoduje o vazbě). Zatčená osoba se musí odevzdat soudu do 24 hodin (čl. 8 Listiny).' },
    { q: 'Jaké jsou znaky lidských práv podle Listiny?', a: 'Jsou přirozená – nezadatelná, nezrušitelná, nepromlčitelná a nezcizitelná; zaručují se všem bez rozdílu a stát je musí garantovat a zajistit jejich dodržování.' },
    { q: 'Kdo je veřejný ochránce práv a jaké má pravomoci?', a: 'Ombudsman, volený Poslaneckou sněmovnou na 6 let (max. 2 po sobě, od 40 let). Chrání před nezákonným jednáním či nečinností úřadů, dohlíží na místa omezení svobody, pomáhá obětem diskriminace. Nemá rozhodovací pravomoc, jen doporučení; může šetřit v úřadech, nahlížet do spisů a jednat i z vlastní iniciativy. Podnět může podat FO i PO.' }
  ]
});
