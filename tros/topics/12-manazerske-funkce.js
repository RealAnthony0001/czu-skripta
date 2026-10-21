registerTopic({
  id: 'manazerske-funkce', order: 12, icon: '📚', title: 'Manažerské funkce a historie managementu', src: 'podklady', lec: [11],
  where: 'Přednáška 11 (historie managementu) + seminární téma',
  summary: 'Fayol a jeho funkce a principy, sekvenční a paralelní funkce, Urwick, POSDCORB, Drucker, Koontz a Weihrich, Mintzbergových 10 rolí a koncepce 7 S.',
  vocab: [
    { w: 'Manažerské funkce', x: 'Typické, podstatné činnosti, které manažer ve své práci vykonává a musí zvládnout.' },
    { w: 'Sekvenční funkce', x: 'Realizují se postupně: plánování, organizování, výběr a rozmístění pracovníků, vedení lidí, kontrola.' },
    { w: 'Paralelní funkce', x: 'Probíhají průběžně: analýza problémů, rozhodování, realizace (implementace) včetně koordinace.' },
    { w: 'POSDCORB', x: 'Gulickova zkratka sedmi funkcí: Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting.' },
    { w: 'CSF', x: 'Critical Success Factors – kritické faktory úspěchu (např. koncepce 7 S, K. H. Chung).' }
  ],
  key: [
    '<b>Fayol (1841–1925, 1916):</b> plánování, organizování, přikazování, koordinace, kontrola + 14 principů managementu.',
    '<b>Sekvenční</b> funkce (5: PL, ORG, výběr pracovníků, vedení, kontrola) × <b>paralelní</b> (analýza, rozhodování, realizace).',
    '<b>Urwick</b> přidal zkoumání a komunikaci; <b>Gulick</b> sestavil POSDCORB (7).',
    '<b>Mintzberg:</b> 10 rolí ve 3 skupinách – interpersonální (3), informační (3), rozhodovací (4).',
    '<b>7 S:</b> strategie, struktura, systémy, styl, schopnosti, spolupráce + sdílené hodnoty (podniková kultura).'
  ],
  sections: [
    { title: 'Henri Fayol a klasická škola řízení', blocks: [
      { t: 'p', x: 'Koncepci manažerských funkcí založil Francouz <b>Henri Fayol</b> (1841–1925), průkopník teorie managementu: roku <b>1916</b> definoval pět funkcí, které tehdy nazval funkcemi správy. Patří do vývojové etapy <b>technokratického přístupu – klasických škol řízení</b>, konkrétně <b>správního řízení</b> (vědecké zkoumání principů organizace a řídících činností).' },
      { t: 'flow', title: 'Fayolových 5 funkcí (správní činnosti)', steps: [
        { h: 'Plánování (planning)', x: 'stanovení budoucích cílů a postupu, jak jich dosáhnout' },
        { h: 'Organizování (organizing)', x: 'zabezpečení zdrojů (hmotných, finančních, lidských) a podmínek pro uskutečňování plánu' },
        { h: 'Přikazování (directing)', x: 'dávání úkolů a instrukcí podřízeným' },
        { h: 'Koordinace (coordinating)', x: 'slaďování činností spolupracovníků' },
        { h: 'Kontrola (controlling)', x: 'ověřování souladu plánu a skutečnosti a přijetí závěrů' }
      ] },
      { t: 'table', head: ['Fayolova činnost podniku', 'Obsah', 'Odpovídající subsystém OS'], rows: [
        ['Technická (technologická)', 'výroba, těžba', 'PS1, TS1, TS2'],
        ['Obchodní', 'nákup, prodej, směna', 'MOS'],
        ['Finanční', 'opatřování a efektivní využití kapitálu', 'EIS'],
        ['Ochranná', 'ochrana vlastnictví a osobnosti', 'ŘSS – majetkový subsystém'],
        ['Účetní', 'výkazy, kalkulace, inventarizace', 'EIS'],
        ['Správní', 'předvídání, organizování, přikazování, koordinace a kontrola', 'ŘSS, OSS']
      ] },
      { t: 'ul', items: [
        '<b>Požadavky na ŘP:</b> tělesné (zdraví, kondice), duševní (chápavost, schopnost učit se, soudnost, pružnost), mravní (zásadovost, odvaha, odpovědnost, iniciativa, taktnost), všeobecné vzdělání, speciální znalosti a zkušenosti z praxe.'
      ] },
      { t: 'table', head: ['Principy managementu podle Fayola', 'Význam'], rows: [
        ['1. Specializace pracovníků', 'podněcuje sebezlepšování schopností a metod'],
        ['2. Autorita', 'právo dávat příkazy a moc vyžadovat poslušnost'],
        ['3. Disciplína', 'žádné uvolňování pravidel'],
        ['4. Jednota přikazování', 'každý zaměstnanec má jen jednoho nadřízeného'],
        ['5. Jednota vedení', 'jedna mysl, jednotný plán, v němž každý hraje svou roli'],
        ['6. Podřízenost osobních zájmů', 'v práci jen pracovní zájmy'],
        ['7. Odměňování', 'odpovídající ohodnocení, ne víc, než může podnik postrádat'],
        ['8. Centralizace', 'upevnění manažerských funkcí, rozhodnutí shora'],
        ['9. Skalární řetěz', 'formální řetěz příkazů shora dolů jako v armádě'],
        ['10. Pořádek', 'materiál i personál mají své předepsané místo'],
        ['11. Rovnost', 'rovnocenné nakládání'],
        ['12. Držení personálu', 'co nejmenší obměna, doživotní zaměstnání pro výborné lidi'],
        ['13. Iniciativa', 'vymyslet plán a udělat vše pro jeho uskutečnění'],
        ['14. Morálka kolektivu', 'harmonie a soudržnost']
      ] },
      { t: 'tip', x: 'Nejsnáze se pletou: <b>jednota přikazování</b> (jeden šéf) × <b>jednota vedení</b> (jeden plán); dále <b>skalární řetěz</b> (formální řetěz příkazů) a <b>centralizace</b>.' }
    ] },
    { title: 'Sekvenční a paralelní funkce', blocks: [
      { t: 'versus', cols: [
        { h: 'Sekvenční (postupně)', items: ['1. plánování', '2. organizování', '3. výběr a rozmístění pracovníků', '4. vedení lidí', '5. kontrola'] },
        { h: 'Paralelní (průběžně)', items: ['analýza problémů (analysis)', 'rozhodování (decision making)', 'realizace – implementace včetně koordinace'] }
      ], x: 'Sekvenční funkce na sebe navazují v čase: firma, která chce zvýšit měsíční produkci, nejdřív naplánuje potřeby, pak je zorganizuje, vybere a vede lidi a nakonec vše kontroluje a případně upraví. Paralelní funkce probíhají ve všech těch krocích zároveň: manažer analyzuje plán i výkonnost, rozhoduje o podobě plánu, systému práce i kontroly a při realizaci koordinuje pracovníky a výrobu. Kombinace vytvářejí matici 5 funkcí × 3 činnosti (analýza, rozhodování, implementace).' },
      { t: 'table', head: ['Typický manažer', 'Typické činnosti'], rows: [
        ['Manažer kvality', 'vyhodnocování výsledků kvality, zjišťování příčin nekvality, interní audity'],
        ['Manažer logistiky', 'organizace logistických procesů, komunikace se zákazníky'],
        ['Produktový manažer', 'analýza potřeb zákazníků, návrhy na zvýšení prodejů'],
        ['Projektový manažer', 'sestavení týmu, dílčí cíle, určení odpovědností za úkoly'],
        ['Finanční manažer', 'roční plány, rozbor hospodářských výsledků, daňová optimalizace'],
        ['Výrobní manažer', 'implementace strategie, rozvoj a hodnocení pracovníků']
      ] }
    ] },
    { title: 'Další koncepce funkcí', blocks: [
      { t: 'timeline', title: 'Autoři a jejich členění', items: [
        { when: '1916', h: 'H. Fayol – 5 funkcí', x: 'plánování, organizování, přikazování, koordinace, kontrola' },
        { when: '30. léta', h: 'L. F. Urwick', x: 'rozšířil Fayola o <b>zkoumání</b> (investigating) a <b>komunikaci</b> (communicating) → 7 funkcí' },
        { when: '30. léta', h: 'L. Gulick – POSDCORB', x: 'Planning, Organizing, Staffing, Directing, Coordinating, Reporting, Budgeting (plánování, organizování, výběr a umísťování pracovníků, vedení, koordinování, reportování, rozpočtování)' },
        { when: '1909–2005', h: 'P. F. Drucker', x: 'stanovení cílů a způsobu jejich dosažení (plánování), organizování, motivace a komunikace (volba spolupracovníků a vedení lidí), měření (vyhodnocování výsledků) – zkráceně <b>plánování, organizování, integrování, měření</b>' },
        { when: 'dnes', h: 'H. Koontz a H. Weihrich', x: 'nejužívanější klasifikace: plánování, organizování, výběr a rozmístění spolupracovníků (personální zajištění), vedení lidí, kontrola' }
      ] },
      { t: 'warn', x: 'Seminární témata píšou „POSDCOORB“, přednáška „POSDCORB“ – jde o tutéž Gulickovu zkratku sedmi funkcí (P-O-S-D-CO-R-B).' }
    ] },
    { title: 'Mintzbergových 10 rolí', blocks: [
      { t: 'p', x: 'Koncept manažerských funkcí kritizuje např. <b>H. Mintzberg</b> (*1939, Kanada; <i>The Nature of Management Work</i>). Činnosti vedoucích pracovníků podle něj shrnuje <b>deset rolí ve třech skupinách</b>.' },
      { t: 'table', head: ['Skupina rolí', 'Role (anglicky)', 'Charakteristika'], rows: [
        ['<b>Interpersonální</b> (z formální pravomoci a odpovědnosti; kontakty uvnitř i vně organizace)', 'představitel organizace (figurehead)', 'právní, sociální oblast – manažer s autoritou'],
        ['', 'vůdce (leader)', 'motivování, vzdělávání, rozvoj'],
        ['', 'spojovací článek (liaison)', 'budování vnějších vztahů podniku'],
        ['<b>Informační</b> (vytváření, sběr, přenos, třídění, filtrace, využití informací)', 'monitor', 'monitorující příjemce informací – organizace prostředí'],
        ['', 'šiřitel (disseminator)', 'transfer informací uvnitř'],
        ['', 'mluvčí (spokesperson)', 'transfer informací vně'],
        ['<b>Rozhodovací</b> (cílevědomá činnost k dosažení cílů)', 'podnikatel (entrepreneur)', 'příležitosti, změny'],
        ['', 'řešitel problémů (disturbance-handler)', 'krizový manažer, nápravná opatření'],
        ['', 'alokátor zdrojů (resource-allocator)', 'alokování zdrojů organizace'],
        ['', 'vyjednavač (negotiator)', 'jednání v zájmu podniku']
      ] },
      { t: 'tip', x: 'Zapamatuj: <b>3 + 3 + 4 = 10</b>. Interpersonální = lidé (představitel, vůdce, spojka), informační = informace (monitor, šiřitel, mluvčí), rozhodovací = rozhodnutí (podnikatel, řešitel problémů, alokátor, vyjednavač).' }
    ] },
    { title: 'Koncepce 7 S a kritické faktory úspěchu', blocks: [
      { t: 'p', x: 'Úspěšnost manažerské práce zkoumají koncepce <b>kritických faktorů úspěchu (CSF)</b>; nejrozšířenější jsou „7 S“ konzultační firmy <b>McKinsey</b> a koncepce K. H. Chunga. 7 S jsou propojené prvky podnikové kultury (ve středu <b>sdílené hodnoty</b>):' },
      { t: 'table', head: ['S', 'Obsah'], rows: [
        ['Strategie', 'vychází z vize a poslání; dlouhodobá orientace a směřování k cílům; volné pokyny a popisy aktivit nutných k cílům'],
        ['Struktura', 'organizační a řídící struktura'],
        ['Systémy', 'především informační systémy'],
        ['Styl', 'styl řízení: autoritativní, demokratický, liberální'],
        ['Schopnosti', 'adaptace a rozvoj, řídící struktura'],
        ['Spolupráce', 'zvyšování výkonnosti × provozní riziko'],
        ['Sdílené hodnoty', 'střed koncepce – podniková kultura']
      ] }
    ] },
    { title: 'Širší historie managementu (doplněno)', blocks: [
      { t: 'warn', x: 'Tato sekce není v dodaných podkladech (přednáška „Historie managementu“ ve slajdech uvádí jen Fayola a následující koncepce funkcí). Doplněno jako orientační přehled; pro zkoušku ověř s materiály k 11. přednášce.' },
      { t: 'timeline', items: [
        { when: 'kolem 1900', h: 'Klasické školy – vědecké řízení (F. W. Taylor)', x: 'zvyšování produktivity práce dělbou práce, normováním a stimuly' },
        { when: 'kolem 1900', h: 'Klasické školy – byrokratický model (M. Weber)', x: 'pevná pravidla, hierarchie, formální vztahy' },
        { when: '1916', h: 'Klasické školy – správní řízení (H. Fayol)', x: 'funkce a principy managementu (viz výše)' },
        { when: '20.–30. léta', h: 'Škola lidských vztahů (E. Mayo)', x: 'důraz na člověka, skupinu a motivaci (Hawthorne)' },
        { when: 'od 60. let', h: 'Systémový a situační přístup', x: 'organizace jako systém v okolí – navazuje na téma Systém' }
      ] }
    ] }
  ],
  mistakes: [
    'Zaměnit Fayolových 5 funkcí s Gulickovými 7 (POSDCORB) a Urwickovým rozšířením o zkoumání a komunikaci.',
    'Zaměnit sekvenční (plánování, organizování, výběr lidí, vedení, kontrola) a paralelní funkce (analýza, rozhodování, realizace).',
    'U Mintzberga zapomenout, že rolí je 10 (3 + 3 + 4).',
    'Brát Fayolův princip „jednota přikazování“ jako „jednotu vedení“ – první znamená jednoho nadřízeného, druhé jeden plán.'
  ],
  qa: [
    { q: 'Jak Fayol vymezil manažerské funkce?', a: 'V roce 1916 pět funkcí správy: plánování (cíle a postup), organizování (zdroje a podmínky), přikazování (úkoly a instrukce), koordinace (slaďování činností) a kontrola (ověřování souladu plánu a skutečnosti).' },
    { q: 'Vyjmenujte aspoň osm z 14 Fayolových principů.', a: 'Specializace, autorita, disciplína, jednota přikazování, jednota vedení, podřízenost osobních zájmů, odměňování, centralizace, skalární řetěz, pořádek, rovnost, držení personálu, iniciativa, morálka kolektivu.' },
    { q: 'Co jsou sekvenční a paralelní manažerské funkce?', a: 'Sekvenční (postupně): plánování, organizování, výběr a rozmístění pracovníků, vedení lidí, kontrola. Paralelní (průběžně): analýza problémů, rozhodování, realizace včetně koordinace.' },
    { q: 'Co přidal Urwick a co je POSDCORB?', a: 'Urwick k Fayolovi přidal zkoumání (rozbor) a komunikaci. Gulick uspořádal funkce do POSDCORB: planning, organizing, staffing, directing, coordinating, reporting, budgeting.' },
    { q: 'Jaké hlavní činnosti manažera uvádí Drucker a Koontz s Weihrichem?', a: 'Drucker: plánování, organizování, integrování (motivace a komunikace) a měření. Koontz a Weihrich: plánování, organizování, výběr a rozmístění spolupracovníků, vedení lidí, kontrola.' },
    { q: 'Popište Mintzbergových 10 rolí.', a: 'Interpersonální: představitel, vůdce, spojovací článek. Informační: monitor, šiřitel, mluvčí. Rozhodovací: podnikatel, řešitel problémů, alokátor zdrojů, vyjednavač.' },
    { q: 'Co je koncepce 7 S?', a: 'Koncepce McKinsey (kritické faktory úspěchu): strategie, struktura, systémy, styl, schopnosti, spolupráce a sdílené hodnoty (podniková kultura) ve středu.' }
  ]
});
