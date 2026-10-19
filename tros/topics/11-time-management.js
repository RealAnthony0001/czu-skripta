registerTopic({
  id: 'time-management', order: 11, icon: '⏱️', title: 'Time management (řízení času)', src: 'podklady',
  where: 'Přednáška 10 + Dovednosti v řízení kap. 7',
  summary: 'Proč řídit čas, čtyři generace plánování času, Paretovo pravidlo, deset zásad, pět omylů D. Wetmora a „planning fallacy“.',
  vocab: [
    { w: 'Time management', x: 'Metody a techniky, které pomáhají efektivněji plánovat a využívat čas.' },
    { w: 'Paretovo pravidlo 80/20', x: 'Malá část činností (cca 20 %) přináší většinu výsledků (cca 80 %).' },
    { w: 'Planning fallacy', x: 'Přehnaný optimismus v odhadu, jak dlouho úkol potrvá.' },
    { w: 'Prokrastinace', x: 'Odkládání důležitých úkolů a nahrazování jich zástupnými činnostmi.' }
  ],
  key: [
    'Čas je <b>omezený zdroj</b>, který nelze obnovit; „kdo neřídí, je řízen“.',
    '<b>4 generace:</b> poznámky → kalendáře → priority → osobní řízení a rovnováha (umění říct NE).',
    '<b>10 zásad:</b> priority, delegování, nástroje, plánování, říct NE, bleskové zpracování, informovanost, rušivé vlivy, časová rezerva (60 : 40), pracovní místo.',
    'Plánovat jen cca <b>60 % času</b>, 40 % nechat jako rezervu.',
    '<b>Planning fallacy:</b> pesimistický odhad vynásobit <b>1,5–2</b>.'
  ],
  sections: [
    { title: 'Proč řídit čas', blocks: [
      { t: 'ul', items: [
        'Kdo neřídí, je řízen; kdo řídí, určuje čas sobě i jiným.',
        'Všichni máme <b>24 hodin</b> – jedna z mála spravedlností. Čas jsou peníze, hospodařit s ním je nutné jako s penězi; ztrátu peněz lze nahradit, <b>ztrátu času ne</b>.',
        'Řízení času zvyšuje produktivitu, pomáhá dosáhnout cílů, odstraňuje zbytečné činnosti a snižuje stres (kontrola nad úkoly).'
      ] },
      { t: 'versus', title: 'Hlavní cíle time managementu', cols: [
        { h: 'Co chceme', items: ['<b>prioritizovat</b> úkoly podle důležitosti', '<b>efektivně organizovat</b> pracovní procesy', '<b>minimalizovat stres a časové ztráty</b>'] },
        { h: 'Jak', items: ['stanovit si životní a pracovní cíle a priority a řídit se jimi', 'efektivně plánovat čas', 'získat časový rozvrh pod kontrolu'] }
      ], x: 'Cílem není stihnout víc za každou cenu, ale vytěžit ze svého času co nejvíc při nízkém stresu. Proto se cení volná pracovní doba: kdo má časový rozvrh pod kontrolou, nemusí pospíchat a může se soustředit na to, co je opravdu důležité.' },
      { t: 'tip', x: 'Time management se začal rozvíjet v 70. letech 20. století jako reakce na rostoucí nároky moderního života; s technologiemi se dál vyvíjí.' }
    ] },
    { title: 'Čtyři generace plánování času', blocks: [
      { t: 'table', head: ['Generace', 'Zaměření', 'Hodnocení'], rows: [
        ['<b>I.</b> Poznámky a upomínky', 'zaznamenání úkolů, které je třeba udělat', 'praktický a jednoduchý, chybí strategický rozměr'],
        ['<b>II.</b> Kalendáře a diáře', 'systematické plánování pomocí kalendářů', 'spíše organizace než prioritizace'],
        ['<b>III.</b> Prioritizace úkolů', 'stanovení priorit podle důležitosti a naléhavosti', 'dosažení efektivity (Eisenhowerova matice)'],
        ['<b>IV.</b> Osobní řízení a rovnováha', 'rovnováha mezi prací a osobním životem', 'umění říkat „NE“']
      ] },
      { t: 'p', x: 'Každá generace odráží, jak lidé postupně chápou a organizují svůj čas: od zápisu, přes kalendář a priority až k rovnováze celého života.' },
      { t: 'def', term: 'Paretovo pravidlo 80/20', x: 'Zhruba 20 % činností přináší 80 % výsledků – a naopak velká část času se ztrácí řešením nepodstatných problémů (chyba už ve škole: učit se nepodstatné). Proto je nutné stanovit si priority a řídit se jimi.' }
    ] },
    { title: 'Deset hlavních zásad', blocks: [
      { t: 'table', head: ['Zásada', 'Co to znamená'], rows: [
        ['1. Priority důležitosti', 'napsat je, řídit se jimi, včas informovat účastníky, nedopustit, aby urgentní záležitost vytěsnila důležitou'],
        ['2. Delegování', 'přesunout, co jde; podle priorit vybrat, co řeším sám; dle pravidel delegování vymezit pravomoci a požadovat spoluúčast na odpovědnosti; důvěřovat; nestát se nepostradatelným'],
        ['3. Efektivní nástroje', 'výpočetní technika (využít, co je k dispozici, ne jen co umím), informační systémy podniku, vlastní SW pro opakující se operace'],
        ['4. Systematické plánování času', 'diář, plánovací SW, přehled den–týden–měsíc, dodržovat termíny („termín je svatá věc“), zamezit kolizi termínů; kdo neustále nestíhá, obvykle nemá žádný rozvrh'],
        ['5. Umět říci NE', 'NE neznamená odmítnutí člověka, ale jeho nabídky; říct je, když vás chce někdo připravit o čas; režim návštěv (otevřené dveře)'],
        ['6. Zpracovat úkoly „bleskově“', 'co neumím nebo nenávidím, ať dělá někdo jiný – bude to dělat lépe; včasné uvědomění, co mi nejde, ušetří čas'],
        ['7. Informovanost', 'včasná a úplná; časový rámec pro plánování jiné činnosti; snížení stresu'],
        ['8. Odstranit rušivé vlivy', 'nečekané návštěvy, telefon při jednání (ztráta koncentrace) – před důležitým jednáním vypnout telefon'],
        ['9. Časová rezerva', 'plánovat cca <b>60 %</b> času, <b>40 %</b> na mezeru – zvláště před důležitým bodem; téměř nic netrvá tak dlouho, jak si naplánujete'],
        ['10. Uspořádání pracovního místa', 'vytvořit si vlastní systém (jinak vám ho vytvoří někdo jiný), omezit hledání, přehledné složky v počítači, zálohovat']
      ] },
      { t: 'tip', x: 'Zkratka: <b>P-D-N-P · NE · B-I-R-R · M</b> – priority, delegování, nástroje, plánování, NE, bleskově, informovanost, rušení, rezerva, místo.' }
    ] },
    { title: 'Pět omylů D. Wetmora a planning fallacy', blocks: [
      { t: 'table', head: ['Omyl', 'Důsledek / náprava'], rows: [
        ['1. Začít den bez jasného plánu', 'neúměrně se rozvine rutina; často je potřeba víc lidí; podívat se, jak to dělají jinde'],
        ['2. Nevyrovnanost v osobním životě', 'přepracovanost → problémy v rodině, zdraví, nespokojenost'],
        ['3. Smetiště na pracovním stole (v počítači)', 'neustálé hledání a ztráty; archivovat, vyhazovat'],
        ['4. Pracovat na úkor spánku', 'funguje jen krátce; horší výkon a zdraví'],
        ['5. Přestávka na oběd není čas určený k práci', 'regenerace, kondice; chodit na oběd bez telefonu (výjimka: pracovní oběd)']
      ] },
      { t: 'p', x: 'Shrnutí: <b>1 000 (ne)dokončených nedůležitých věcí &lt; jedna důležitá dokončená!</b>' },
      { t: 'ex', x: '<b>Planning fallacy</b> – lidé jsou přespříliš optimističtí v odhadu doby úkolu. Experiment: studenti psychologie odhadli psaní závěrečné práce v průměru na <b>34 dnů</b>, ve skutečnosti trvalo <b>56 dnů</b>; jen 30 % odhadlo dobu správně (průměr se mýlil o 22 dnů, tj. skutečnost byla ≈ 1,65× delší). <b>Protilék:</b> svůj pesimistický odhad vynásobit <b>1,5–2</b> – počítáte-li s 14 dny, začněte 21 dní předem; se 3 dny počítejte 5 dnů (3 × 1,5 = 4,5 ≈ 5).' }
    ] }
  ],
  mistakes: [
    'Plánovat 100 % času – správně cca 60 %, zbytek rezerva.',
    'Zaměnit Eisenhowerovu matici (priority) s Paretovým pravidlem (20 % → 80 % výsledků).',
    'Brát „NE“ jako odmítnutí člověka – odmítá se nabídka.',
    'Snažit se stát nepostradatelným – zásada delegování říká opak (nestát se nepostradatelným).'
  ],
  qa: [
    { q: 'Proč je důležité řídit čas?', a: 'Čas je omezený, neobnovitelný zdroj; řízení času zvyšuje produktivitu, pomáhá plnit cíle, eliminuje zbytečné činnosti a snižuje stres.' },
    { q: 'Popište čtyři generace plánování času.', a: 'I. poznámky a upomínky, II. kalendáře a diáře, III. prioritizace úkolů (důležitost a naléhavost), IV. osobní řízení a rovnováha mezi prací a osobním životem (umění říkat NE).' },
    { q: 'Co říká Paretovo pravidlo?', a: 'Asi 20 % činností přináší 80 % výsledků; ŘP má identifikovat podstatné činnosti a neztrácet čas nepodstatnými problémy.' },
    { q: 'Vyjmenujte zásady time managementu.', a: 'Priority, delegování, efektivní nástroje, systematické plánování, umět říci NE, zpracovat úkoly bleskově, informovanost, odstranit rušivé vlivy, časová rezerva (60 : 40), uspořádání pracovního místa.' },
    { q: 'Které omyly v plánování času uvádí Wetmor?', a: 'Začít den bez plánu, nevyrovnanost v osobním životě, smetiště na stole, práce na úkor spánku, přestávka na oběd není určena k práci.' },
    { q: 'Co je planning fallacy a jak s ní bojovat?', a: 'Přílišný optimismus v odhadu doby úkolů (studenti odhadovali 34 dnů, skutečně 56). Pesimistický odhad se násobí 1,5–2, např. 14 dnů → začít o 21 dnů dříve.' }
  ]
});
