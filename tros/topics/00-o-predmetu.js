registerTopic({
  id: 'o-predmetu', order: 0, icon: 'ℹ️', title: 'O předmětu, zkoušce a státnicích', src: 'podklady', where: 'Organizace + brožura SZZ + Jak napsat seminárku',
  summary: 'Organizace výuky, zápočet a zkouška, sylabus, studijní materiály, seminární práce a okruhy otázek ke státnicím, které se k předmětu vážou.',
  key: [
    '<b>Zápočet:</b> docházka na cvičení (6 cvičení); o zápočtu rozhoduje plně cvičící.',
    '<b>Zkouška:</b> písemný test (řádný a 1. opravný termín), možné ústní dozkoušení; <b>2. opravný termín = ústní</b>.',
    '12 přednášek (poslední souhrnná) + 6 cvičení.',
    'Hlavní literatura: Hron, Traxler: <i>Teorie řízení organizačních systémů</i> (2017) a <i>Dovednosti v řízení</i> (2018); Kříž: <i>Základy řízení</i> (2019).',
    'Látka se opakuje u <b>státnic</b> (komplexní předmět „Základy řízení“, u Informatiky „Ekonomie a řízení“).'
  ],
  sections: [
    { title: 'Organizace výuky', blocks: [
      { t: 'nums', title: 'Předmět v číslech', items: [
        { n: '12', u: 'přednášek', x: 'čtvrtek 17:30–19:00; poslední je souhrnná' },
        { n: '6', u: 'cvičení', x: 'podle rozvrhu v IS ČZU; individuální náhrada jen výjimečně po konzultaci' },
        { n: '1', u: 'písemný test', x: 'řádný a 1. opravný termín; případně ústní dozkoušení' }
      ] },
      { t: 'ul', items: [
        '<b>Přednášející:</b> Ing. Monika Jadrná, Ph.D., MBA, MSc. (Katedra managementu a marketingu, kancelář E442). Konzultace v době uvedené v rozvrhu, jinak přes MS Teams po domluvě e-mailem.',
        '<b>Cvičící:</b> Jadrná, Ing. Jana Horáková, Ing. Pavel Pánek (podle rozvrhu).',
        'Po každé přednášce se vkládá prezentace; ke cvičením jsou podklady („šablony“ s úkoly, které se na cvičení vyplňují).'
      ] },
      { t: 'tip', x: 'Podmínky se mohou mírně lišit podle cvičícího (např. aktivní účast, průběžné semináře testy). Vždy platí to, co řekl váš cvičící na prvním cvičení.' }
    ] },
    { title: 'Zápočet a zkouška', blocks: [
      { t: 'flow', title: 'Cesta ke zkoušce', steps: [
        { h: 'Zápočet', x: 'docházka na cvičení, aktivní účast, případné seminární testy; plně v kompetenci cvičícího' },
        { h: 'Písemný test', x: 'řádný termín a 1. opravný termín (Moodle)' },
        { h: 'Ústní dozkoušení', x: 'možné po písemném testu' },
        { h: 'Ústní zkouška', x: 'forma zkoušky pro 2. opravný termín' }
      ] },
      { t: 'ul', items: [
        'Doporučuje se studovat nejen povinnou literaturu, ale i další zdroje k probíraným tématům (např. bookport, SIC ČZU, techlib).',
        'Na cvičeních se plní úkoly ze „šablon“ (kreslení schémat, příklady) a krátké diagnostické testy (např. test pracovní motivace a dotazník manažerských stylů – viz témata Motivace a Vedení lidí).'
      ] }
    ] },
    { title: 'Sylabus přednášek a cvičení', blocks: [
      { t: 'timeline', title: 'Přednášky', items: [
        { when: '1', h: 'Úvod', x: 'seznámení s organizací výuky' },
        { when: '2', h: 'Řízení jako činnost, proces a informační působení', x: 'téma <b>Řízení</b> a <b>Proces řízení</b>' },
        { when: '3', h: 'Systém, agregace, integrace, typologie systémů', x: 'téma <b>Systém</b>' },
        { when: '4', h: 'Organizační systém, subsystémy 1. řádu, vlastnosti subsystémů, oblasti a procesy', x: 'témata <b>Organizační systém</b>, <b>Vlastnosti subsystémů</b>' },
        { when: '5', h: 'Organizační a řídící struktury', x: 'téma <b>Struktury</b>' },
        { when: '6', h: 'Motivace pracovníků' },
        { when: '7', h: 'Komunikace a řešení konfliktů' },
        { when: '8', h: 'Rozhodování' },
        { when: '9', h: 'Vedení lidí a delegování', x: 'témata <b>Rozhodování a delegování</b>, <b>Vedení lidí a styly řízení</b>' },
        { when: '10', h: 'Time management' },
        { when: '11', h: 'Historie managementu', x: 'téma <b>Manažerské funkce</b>' },
        { when: '12', h: 'Souhrnná přednáška' }
      ] },
      { t: 'timeline', title: 'Cvičení', items: [
        { when: '1', h: 'Řízení jako činnost a proces, typy informačního působení' },
        { when: '2', h: 'Definice systému, organizační systém' },
        { when: '3', h: 'Naplnění subsystémů 1. řádu a vyšších řádů' },
        { when: '4', h: 'Organizační a řídící struktury (v dřívějším rozvrhu i chování a vlastnosti OS, kompetence, spolehlivost)' },
        { when: '5', h: 'Motivace a komunikace (konflikty)' },
        { when: '6', h: 'Vedení lidí a rozhodování' }
      ] },
      { t: 'warn', x: 'Pořadí a názvy cvičení se mezi ročníky mírně liší (v podkladech 2023/24 se čtvrté cvičení věnuje chování OS, v 2025/26 struktur a motivace s komunikací). Obsahově je pokryto vše v tomto skriptu.' }
    ] },
    { title: 'Studijní materiály', blocks: [
      { t: 'table', head: ['Zdroj', 'K čemu slouží'], rows: [
        ['HRON, TRAXLER: <i>Teorie řízení organizačních systémů</i> (2017), ISBN 978-80-213-2768-9', 'systémová část: řízení, systém, organizační systém, subsystémy, chování, struktury, řídící kapacita, kvalifikace a kompetence'],
        ['HRON, TRAXLER: <i>Dovednosti v řízení</i> (2018), ISBN 978-80-213-2833-4', 'dovednosti ŘP: osobnost, rozhodování, delegování, motivace, komunikace, konflikty, vedení lidí, styly, čas'],
        ['KŘÍŽ, J.: <i>Základy řízení</i> (ČZU, 2019)', 'skriptum k Základům řízení'],
        ['Přednášky M. Jadrné (2024/25, 2025/26)', 'zkouškové jádro – skriptum z nich vychází nejvíc']
      ] },
      { t: 'tip', x: 'Přednášky jsou zkratkovité, skripta vysvětlují souvislosti. Tam, kde se obě liší, je v tomto skriptu upozornění (⚠ Pozor).' }
    ] },
    { title: 'Seminární práce', blocks: [
      { t: 'p', x: '<b>Okruhy témat</b>' },
      { t: 'ul', items: [
        'organizační struktura vybraného podniku – analýza',
        'role člověka v organizaci, formální a neformální vztahy',
        'osobnost manažera, manažerské role',
        'manažerské funkce a vývoj jejich definování (POSDCORB)',
        'vedení lidí a motivace',
        'dovednost manažera delegovat',
        'styly řízení',
        'rozhodování',
        'racionalizace řízení – time management',
        'význam komunikace pro řízení'
      ] },
      { t: 'p', x: '<b>Jak na ni (podle návodu „Jak napsat dobrou seminárku“)</b>' },
      { t: 'ol', items: [
        '<b>Nejdřív si odpovězte:</b> jaký problém řeším, kterými metodami a k čemu chci dojít.',
        '<b>Pracujte se zdroji:</b> kvalitu autora prozradí výběr zdrojů, ne délka práce; Wikipedie je rozcestník, ne citovatelný zdroj; zdroje citujte podle normy předepsané oborem.',
        '<b>Forma:</b> řádkování 1,5, zarovnání do bloku, maximálně 5 stran textu. Titulní strana (katedra, předmět, název, jméno, datum) → obsah → úvod → kapitoly a podkapitoly (popis problému, metodologie, vlastní příklady nebo analýza reálného systému, řešení a doporučení) → závěr → použité zdroje → přílohy (grafy, obrázky).',
        '<b>Závěr nepodceňte:</b> zopakujte, proč jste se problémem zabývali, na co jste přišli, co z toho plyne a pro koho jsou informace užitečné.',
        '<b>Jazyk:</b> bez gramatických chyb, odborný, ale jen se slovy, kterým rozumíte; text si po sobě přečtěte.',
        '<b>Poctivost:</b> nekopírujte celá již zpracovaná díla.'
      ] }
    ] },
    { title: 'Státnice: okruhy, které sem patří', blocks: [
      { t: 'p', x: 'Předmět je součástí komplexního předmětu státní závěrečné zkoušky: <b>Základy řízení</b> (Ekonomika a management: Teorie řízení organizačních systémů + Obchodní nauka + Ekonomika podniku; Podnikání a administrativa: Účetnictví + TŘOS + Informační systémy) a <b>Ekonomie a řízení</b> (Informatika: Obecná ekonomie + TŘOS + Ekonomika podniku). Okruhy z řízení:' },
      { t: 'table', head: ['Okruh otázky u státnic', 'Kde ve skriptu'], rows: [
        ['Charakteristika managementu, řízení jako informační působení, proces a činnost', 'Řízení · Proces řízení'],
        ['Proces řízení, fáze, stádia cyklu a jejich prolínání', 'Proces řízení'],
        ['Organizační systém podniku, dekompozice, vztahy mezi subsystémy, chování OS (vstupy, transformace, výstupy)', 'Systém · Organizační systém · Vlastnosti subsystémů'],
        ['Organizační a řídící struktura, prvky, typy, řídící kapacita a její faktory; rozdíly a podmíněnost struktur', 'Struktury'],
        ['Osobnost manažera, role manažera, manažerské funkce', 'Manažerské funkce · Vedení lidí'],
        ['Styl řízení, typy, individuální styl, vnitřní a vnější stránka, přirozený a vynucený styl; princip delegování, jeho formální a obsahová stránka', 'Vedení lidí a styly · Rozhodování a delegování'],
        ['Vedení lidí, motivace jako způsob vedení, motivační mechanismus, motivační teorie; vnitřní motivace, stimuly, Herzberg; motivace k výkonu × k setrvání', 'Motivace'],
        ['Racionalizace řídící práce manažera, komunikace v organizaci, formy, kanály, modely; konflikty – typy, řešení; porady', 'Time management · Komunikace a konflikty'],
        ['Rozhodování, rozhodovací proces, kritéria, objektivní a subjektivní, intuitivní rozhodování, pravomoci a odpovědnost ŘP', 'Rozhodování a delegování']
      ] }
    ] }
  ],
  qa: [
    { q: 'Jak se získá zápočet a jak probíhá zkouška?', a: 'Zápočet: docházka na cvičení, plně v kompetenci cvičícího. Zkouška: písemný test pro řádný a 1. opravný termín (možné ústní dozkoušení), ústní forma pro 2. opravný termín.' },
    { q: 'Z jakých materiálů se učit?', a: 'Z přednášek M. Jadrné a ze skript Hron, Traxler – Teorie řízení organizačních systémů (2017) a Dovednosti v řízení (2018); doplňkově Kříž – Základy řízení (2019).' },
    { q: 'Jaká je doporučená forma seminární práce?', a: 'Max. 5 stran, řádkování 1,5, zarovnání do bloku; titulní strana, obsah, úvod, kapitoly (problém, metodologie, vlastní analýza, řešení a doporučení), závěr, použité zdroje, přílohy; citace podle normy oboru.' }
  ]
});
