/* ============ Course data ============
   Bilingual explanations: bi(es, fr) marks any text that follows the explanation language.
   French content (examples, vocabulary, verbs) is never translated; Spanish glosses stay as translations.
   Games: first option in every mcq is the correct one (options are shuffled at runtime).
   fill: "___" marks each blank; a[i] = accepted answer(s) for blank i.
   sort: items = [text, bucketIndex, why?]. order: tokens split by "|". */
function bi(es, fr) { return { __bi: 1, es: es, fr: fr }; }
const LP = "https://www.lepointdufle.net/p/";
const LG = "https://francais.lingolia.com/es/gramatica/";

const MODULES = [
  { id: "A", name: "Raconter", sub: bi("Narrar en pasado", "Raconter au passé"), lessons: ["present", "passe-compose", "imparfait", "plus-que-parfait"] },
  { id: "B", name: "Projeter", sub: bi("Futuro, deseos e hipótesis", "Futur, souhaits et hypothèses"), lessons: ["futur", "conditionnel", "hypothese"] },
  { id: "C", name: "Construire la phrase", sub: bi("Pronombres y determinantes", "Pronoms et déterminants"), lessons: ["pronoms", "relatifs", "comparer-nier", "determinants"] },
  { id: "D", name: "Opiner et argumenter", sub: bi("Opinar y argumentar", "Donner son avis et argumenter"), lessons: ["subjonctif", "imperatif", "connecteurs", "mise-en-relief"] },
  { id: "E", name: "Rapporter l'information", sub: bi("Informar y reportar", "Informer et rapporter"), lessons: ["gerondif", "passif", "discours-indirect"] },
  { id: "F", name: "Mots et sons", sub: bi("Léxico y pronunciación", "Lexique et prononciation"), lessons: ["vocabulaire", "faux-amis", "phonetique"] },
  { id: "G", name: "Objectif DELF", sub: bi("Examen y autoevaluación", "Examen et autoévaluation"), lessons: ["delf", "autoevaluation"] }
];

const TOOLS = [
  { id: "verbes", name: "Verbes et prépositions", sub: bi("Verbos para memorizar", "Verbes à mémoriser") },
  { id: "conjugaison", name: "Conjugaison", sub: bi("Tablas de conjugación", "Tableaux de conjugaison") },
  { id: "resume", name: "Résumé des règles", sub: bi("Resumen + PDF", "Résumé + PDF") },
  { id: "plan", name: "Plan d'étude", sub: bi("12 semanas y checklist", "12 semaines et checklist") }
];

const LESSONS = {};
function L(o) { LESSONS[o.id] = o; }
const H = (verb) => `<span class='hint'>(${verb})</span>`;

/* ---------------- Module A ---------------- */
L({
  id: "present", name: "Le présent", sub: bi("El presente, depuis y être en train de", "Le présent, depuis et être en train de"),
  goal: bi("El presente es la base de todo: de sus raíces salen el imperfecto, el subjuntivo y el gerundio. En B1 hay que dominar los irregulares y dos usos clave: <i>depuis</i> y <i>être en train de</i>.",
    "Le présent est la base de tout : de ses radicaux viennent l'imparfait, le subjonctif et le gérondif. Au B1, il faut maîtriser les irréguliers et deux emplois clés : <i>depuis</i> et <i>être en train de</i>."),
  theory: [
    ["table", { h: bi(["Grupo", "Terminaciones", "Ejemplo"], ["Groupe", "Terminaisons", "Exemple"]), r: [
      ["-er", "-e, -es, -e, -ons, -ez, -ent", "je parle, nous parlons"],
      ["-ir (-iss-)", "-is, -is, -it, -issons, -issez, -issent", "je finis, nous finissons"],
      [bi("3.er grupo", "3e groupe"), "-s, -s, -t/-d, -ons, -ez, -ent", "je prends, ils prennent"]] }],
    ["rule", bi("<b>Acción que empezó en el pasado y continúa:</b> presente + <i>depuis</i>. <i>J'étudie le français depuis trois ans</i> = Estudio francés desde hace tres años. También: <i>Ça fait trois ans que j'étudie…</i>",
      "<b>Action commencée dans le passé qui continue :</b> présent + <i>depuis</i>. <i>J'étudie le français depuis trois ans.</i> On dit aussi : <i>Ça fait trois ans que j'étudie…</i>")],
    ["rule", bi("<b>Acción en curso:</b> <i>être en train de</i> + infinitivo. <i>Je suis en train de manger</i> = Estoy comiendo. Nunca <s>je suis mangeant</s>.",
      "<b>Action en cours :</b> <i>être en train de</i> + infinitif. <i>Je suis en train de manger.</i> Jamais <s>je suis mangeant</s>.")],
    ["tip", bi("Las raíces del presente son «semillas»: la de <b>nous</b> da el imperfecto (<i>nous prenons → je prenais</i>) y el gerundio (<i>prenant</i>); la de <b>ils</b> da el subjuntivo (<i>ils prennent → que je prenne</i>).",
      "Les radicaux du présent sont des « graines » : celui de <b>nous</b> donne l'imparfait (<i>nous prenons → je prenais</i>) et le participe présent (<i>prenant</i>) ; celui de <b>ils</b> donne le subjonctif (<i>ils prennent → que je prenne</i>).")],
    ["tip", bi("Verbos «bota»: cambian de raíz en <i>je, tu, il, ils</i> pero no en <i>nous, vous</i> (<i>je viens / nous venons / ils viennent</i>). Dibuja una bota y apréndelos en mini-frases. Consulta la tabla completa en <a href=\"#conjugaison\">Conjugaison</a>.",
      "Les verbes « bottes » changent de radical avec <i>je, tu, il, ils</i> mais pas avec <i>nous, vous</i> (<i>je viens / nous venons / ils viennent</i>). Dessinez une botte et apprenez-les dans des mini-phrases. Tableau complet : <a href=\"#conjugaison\">Conjugaison</a>.")],
    ["trap", bi("Ortografía de -ger y -cer ante <i>-ons</i>: <i>nous mangeons, nous commençons</i> (para conservar el sonido).",
      "Orthographe des verbes en -ger et -cer devant <i>-ons</i> : <i>nous mangeons, nous commençons</i> (pour garder le son).")],
    ["trap", bi("<i>Actuellement</i> = actualmente (en este momento), no «realmente». «Realmente» = <i>vraiment, en fait</i>.",
      "<i>Actuellement</i> signifie « en ce moment », pas « realmente » en espagnol. « Realmente » = <i>vraiment, en fait</i>.")]
  ],
  vocab: [["depuis", "desde (hace)"], ["ça fait… que", "hace… que"], ["il y a… que", "hace… que"], ["être en train de", "estar + gerundio"], ["d'habitude", "normalmente"], ["en ce moment", "en este momento"], ["actuellement", "actualmente"], ["tous les jours", "todos los días"], ["souvent", "a menudo"], ["parfois", "a veces"], ["rarement", "rara vez"], ["toujours", "siempre / todavía"]],
  examples: [
    ["Nous habitons à Lyon depuis 2022.", "Vivimos en Lyon desde 2022."],
    ["Ça fait deux heures que je t'attends !", "¡Hace dos horas que te espero!"],
    ["Ne me dérange pas, je suis en train de travailler.", "No me molestes, estoy trabajando."],
    ["Ils prennent le métro tous les matins.", "Toman el metro todas las mañanas."],
    ["Vous finissez à quelle heure ?", "¿A qué hora terminan ustedes?"],
    ["Actuellement, elle cherche un appartement.", "Actualmente está buscando un apartamento."]
  ],
  links: [
    ["Le Point du FLE · Le présent", LP + "present.htm", bi("Repertorio de ejercicios en línea sobre el presente.", "Répertoire d'exercices en ligne sur le présent.")],
    ["Lingolia · Le présent", LG + "tiempos-indicativo/le-present", bi("Explicación en español con ejercicios.", "Explication en espagnol avec exercices.")],
    ["Le Conjugueur", "https://leconjugueur.lefigaro.fr/", bi("Conjugador completo para consultar cualquier verbo.", "Conjugueur complet pour consulter n'importe quel verbe.")]
  ],
  games: [
    { type: "mcq", title: bi("Elige la forma correcta", "Choisis la bonne forme"), inst: bi("Selecciona la opción que completa la frase.", "Sélectionne l'option qui complète la phrase."), items: [
      { q: "Ils ___ le train tous les jours. " + H("prendre"), o: ["prennent", "prenent", "prendent"] },
      { q: "Nous ___ nos devoirs. " + H("finir"), o: ["finissons", "finons", "finissions"] },
      { q: "J'apprends le français ___ deux ans.", o: ["depuis", "pendant", "dans"], why: bi("La acción continúa hoy → <i>depuis</i>.", "L'action continue aujourd'hui → <i>depuis</i>.") },
      { q: "Chut ! Le bébé ___ dormir.", o: ["est en train de", "est dormant", "va de"] },
      { q: "Vous ___ du café ? " + H("vouloir"), o: ["voulez", "veulez", "voulons"] },
      { q: "Elles ___ au cinéma ce soir. " + H("aller"), o: ["vont", "allent", "vais"] },
      { q: "Tu ___ quoi ce week-end ? " + H("faire"), o: ["fais", "fait", "faites"] },
      { q: "Ça fait une heure ___ je t'attends.", o: ["que", "depuis", "qui"] },
      { q: "Nous ___ du thé. " + H("boire"), o: ["buvons", "boivons", "boirons"] }
    ] },
    { type: "fill", title: bi("Conjuga en presente", "Conjugue au présent"), inst: bi("Escribe el verbo en presente. Usa los botones para los acentos.", "Écris le verbe au présent. Utilise les boutons pour les accents."), items: [
      { q: "Mes parents ___ du Mexique. " + H("venir"), a: [["viennent"]] },
      { q: "Nous ___ à neuf heures. " + H("commencer"), a: [["commençons"]] },
      { q: "Je ___ t'aider. " + H("pouvoir"), a: [["peux"]] },
      { q: "Elles ___ partir tôt. " + H("devoir"), a: [["doivent"]] },
      { q: "Vous ___ toujours la vérité. " + H("dire"), a: [["dites"]] },
      { q: "Nous ___ ensemble le dimanche. " + H("manger"), a: [["mangeons"]] },
      { q: "Tu ___ nager ? " + H("savoir"), a: [["sais"]] }
    ] }
  ]
});

L({
  id: "passe-compose", name: "Le passé composé", sub: bi("Acciones terminadas en el pasado", "Les actions terminées dans le passé"),
  goal: bi("Es el tiempo de los hechos: lo que pasó, empezó y terminó. Donde en español dices «comí» o «he comido», en francés dices <i>j'ai mangé</i>.",
    "C'est le temps des faits : ce qui s'est passé, a commencé et s'est terminé. « Comí » et « he comido » se disent tous les deux <i>j'ai mangé</i>."),
  theory: [
    ["rule", bi("<b>Auxiliar <i>avoir</i> o <i>être</i> en presente + participio pasado.</b> Expresa una acción terminada y puntual.",
      "<b>Auxiliaire <i>avoir</i> ou <i>être</i> au présent + participe passé.</b> Il exprime une action terminée et ponctuelle.")],
    ["rule", bi("Con <b><i>être</i></b>: todos los verbos pronominales (<i>je me suis levé</i>) y unos quince verbos de movimiento o cambio de estado.",
      "Avec <b><i>être</i></b> : tous les verbes pronominaux (<i>je me suis levé</i>) et une quinzaine de verbes de mouvement ou de changement d'état.")],
    ["tip", bi("La «casa de ÊTRE»: <i>naître, arriver, entrer, monter, rester, descendre, tomber, sortir, partir, aller, venir, revenir, passer, mourir</i> (+ <i>devenir, retourner</i>). Sigla: <b>DR &amp; MRS VANDERTRAMP</b>.",
      "La « maison d'ÊTRE » : <i>naître, arriver, entrer, monter, rester, descendre, tomber, sortir, partir, aller, venir, revenir, passer, mourir</i> (+ <i>devenir, retourner</i>). Sigle : <b>DR &amp; MRS VANDERTRAMP</b>.")],
    ["table", { h: bi(["Concordancia del participio", "Regla", "Ejemplo"], ["Accord du participe", "Règle", "Exemple"]), r: [
      [bi("Con être", "Avec être"), bi("concuerda con el sujeto", "s'accorde avec le sujet"), "Elle est partie."],
      [bi("Con avoir", "Avec avoir"), bi("no concuerda…", "pas d'accord…"), "Elle a mangé une pomme."],
      [bi("… salvo COD antes", "… sauf si le COD est avant"), bi("concuerda con el COD", "s'accorde avec le COD"), "Les photos que j'ai prises."],
      [bi("Pronominal + COD después", "Pronominal + COD après"), bi("no concuerda", "pas d'accord"), "Elle s'est lavé les mains."]] }],
    ["trap", bi("Con COD, <i>sortir, monter, descendre, passer</i> usan <i>avoir</i>: <i>Je suis sorti</i> (salí) pero <i>J'ai sorti la poubelle</i> (saqué la basura).",
      "Avec un COD, <i>sortir, monter, descendre, passer</i> prennent <i>avoir</i> : <i>Je suis sorti</i> mais <i>J'ai sorti la poubelle</i>.")],
    ["trap", bi("El pretérito español «fui, comí» también se traduce con passé composé: <i>je suis allé, j'ai mangé</i>. El passé simple es solo literario.",
      "Le passé simple espagnol (« fui, comí ») se traduit aussi par le passé composé : <i>je suis allé, j'ai mangé</i>. Le passé simple français est littéraire.")]
  ],
  vocab: [["être → été", "sido/estado"], ["avoir → eu", "tenido"], ["faire → fait", "hecho"], ["dire → dit", "dicho"], ["prendre → pris", "tomado"], ["mettre → mis", "puesto"], ["voir → vu", "visto"], ["venir → venu", "venido"], ["pouvoir → pu", "podido"], ["vouloir → voulu", "querido"], ["devoir → dû", "debido"], ["savoir → su", "sabido"], ["lire → lu", "leído"], ["écrire → écrit", "escrito"], ["boire → bu", "bebido"], ["connaître → connu", "conocido"], ["ouvrir → ouvert", "abierto"], ["naître → né", "nacido"], ["vivre → vécu", "vivido"], ["recevoir → reçu", "recibido"], ["hier / avant-hier", "ayer / anteayer"], ["il y a deux jours", "hace dos días"], ["la semaine dernière", "la semana pasada"], ["tout à coup", "de repente"]],
  examples: [
    ["Hier, nous sommes allés au musée.", "Ayer fuimos al museo."],
    ["Elle est née à Bogotá en 1995.", "Nació en Bogotá en 1995."],
    ["Je me suis levé tôt ce matin.", "Me levanté temprano esta mañana."],
    ["Les photos que j'ai prises sont magnifiques.", "Las fotos que tomé son preciosas."],
    ["Elle s'est lavé les mains avant de manger.", "Se lavó las manos antes de comer."],
    ["J'ai sorti la poubelle, puis je suis sorti.", "Saqué la basura y luego salí."]
  ],
  links: [
    ["Le Point du FLE · Passé composé", LP + "passecompose.htm", bi("Decenas de ejercicios: auxiliares, participios, concordancia.", "Des dizaines d'exercices : auxiliaires, participes, accord.")],
    ["Lingolia · Le passé composé", LG + "tiempos-indicativo/le-passe-compose", bi("Explicación en español y ejercicios.", "Explication en espagnol et exercices.")],
    ["Instant FLE · Passé composé ou imparfait", "https://instantfle.fr/passe-compose-ou-imparfait/", bi("Ejercicios progresivos que mezclan ambos tiempos.", "Exercices progressifs qui mélangent les deux temps.")]
  ],
  games: [
    { type: "sort", title: bi("¿Avoir o être?", "Avoir ou être ?"), inst: bi("Envía cada verbo al auxiliar que usa en passé composé.", "Envoie chaque verbe vers l'auxiliaire qu'il prend au passé composé."), buckets: ["avoir", "être"], items: [
      ["aller", 1], ["manger", 0], ["naître", 1], ["faire", 0], ["se lever", 1], ["rester", 1], ["voir", 0], ["tomber", 1], ["prendre", 0], ["mourir", 1], ["s'habiller", 1], ["écrire", 0], ["revenir", 1], ["dormir", 0], ["devenir", 1], ["sortir la poubelle", 0]
    ] },
    { type: "fill", title: bi("Participios y concordancia", "Participes et accord"), inst: bi("Escribe el participio pasado con la concordancia correcta.", "Écris le participe passé avec le bon accord."), items: [
      { q: "Elle est ___ à huit heures. " + H("partir"), a: [["partie"]] },
      { q: "Nous avons ___ un bon film. " + H("voir"), a: [["vu"]] },
      { q: "Les lettres que j'ai ___ sont sur la table. " + H("écrire"), a: [["écrites"]], why: bi("COD <i>que</i> (= les lettres, fem. pl.) colocado antes → concordancia.", "COD <i>que</i> (= les lettres, fém. pl.) placé avant → accord.") },
      { q: "Ils se sont ___ à Paris. " + H("rencontrer"), a: [["rencontrés"]] },
      { q: "J'ai ___ ton message. " + H("recevoir"), a: [["reçu"]] },
      { q: "Marie et Julie sont ___ en retard. " + H("arriver"), a: [["arrivées"]] },
      { q: "Elle s'est ___ les mains. " + H("laver"), a: [["lavé"]], why: bi("El COD (<i>les mains</i>) va después → sin concordancia.", "Le COD (<i>les mains</i>) est après → pas d'accord.") },
      { q: "Il a ___ partir plus tôt. " + H("devoir"), a: [["dû"]] },
      { q: "Où est la robe que tu as ___ hier ? " + H("mettre"), a: [["mise"]] }
    ] }
  ]
});

L({
  id: "imparfait", name: "L'imparfait", sub: bi("El imperfecto y su contraste con el passé composé", "L'imparfait et son contraste avec le passé composé"),
  goal: bi("Con el imperfecto describes el decorado: cómo era todo, qué solías hacer, qué estaba pasando. Combinado con el passé composé, cuentas historias completas.",
    "L'imparfait décrit le décor : comment étaient les choses, ce qu'on faisait d'habitude, ce qui était en cours. Avec le passé composé, on raconte des histoires complètes."),
  theory: [
    ["rule", bi("<b>Raíz de <i>nous</i> en presente + <i>-ais, -ais, -ait, -ions, -iez, -aient</i>.</b> <i>nous prenons → je prenais</i>. Única excepción: <i>être → j'étais</i>.",
      "<b>Radical de <i>nous</i> au présent + <i>-ais, -ais, -ait, -ions, -iez, -aient</i>.</b> <i>nous prenons → je prenais</i>. Seule exception : <i>être → j'étais</i>.")],
    ["list", [
      bi("<b>Descripción:</b> <i>Il faisait beau.</i>", "<b>Description :</b> <i>Il faisait beau.</i>"),
      bi("<b>Hábito:</b> <i>Je jouais au foot le samedi.</i>", "<b>Habitude :</b> <i>Je jouais au foot le samedi.</i>"),
      bi("<b>Acción en curso interrumpida:</b> <i>Je dormais quand…</i>", "<b>Action en cours interrompue :</b> <i>Je dormais quand…</i>"),
      bi("<b>Cortesía o sugerencia:</b> <i>Je voulais vous demander… / Et si on allait au cinéma ?</i>", "<b>Politesse ou suggestion :</b> <i>Je voulais vous demander… / Et si on allait au cinéma ?</i>")]],
    ["tip", bi("Si en español dirías «-aba / -ía», casi siempre es imparfait en francés.", "Si en espagnol on dit « -aba / -ía », c'est presque toujours un imparfait en français.")],
    ["table", { h: bi(["Imparfait (el decorado)", "Passé composé (el acontecimiento)"], ["Imparfait (le décor)", "Passé composé (l'événement)"]), r: [
      [bi("Descripción, estado", "Description, état"), bi("Acción terminada", "Action terminée")],
      [bi("Hábito (souvent, d'habitude)", "Habitude (souvent, d'habitude)"), bi("Número preciso de veces (trois fois, un jour)", "Nombre précis de fois (trois fois, un jour)")],
      [bi("Acción en curso", "Action en cours"), bi("Acción que interrumpe (soudain, tout à coup)", "Action qui interrompt (soudain, tout à coup)")]] }],
    ["tip", bi("Piensa en una película: el imparfait es el decorado y la ambientación; el passé composé son las acciones que hacen avanzar la historia.",
      "Pensez à un film : l'imparfait, c'est le décor et l'ambiance ; le passé composé, ce sont les actions qui font avancer l'histoire.")],
    ["trap", bi("<i>étudier → nous étudiions</i> (doble i) y <i>manger → je mangeais</i>, <i>commencer → je commençais</i>.",
      "<i>étudier → nous étudiions</i> (deux i), <i>manger → je mangeais</i>, <i>commencer → je commençais</i>.")]
  ],
  vocab: [["autrefois", "antiguamente"], ["avant", "antes"], ["d'habitude", "normalmente"], ["tous les samedis", "todos los sábados"], ["à cette époque-là", "en aquella época"], ["quand j'étais petit(e)", "cuando era pequeño/a"], ["pendant que", "mientras"], ["soudain", "de repente"], ["tout à coup", "de golpe"], ["un jour", "un día"], ["ce jour-là", "ese día"], ["trois fois", "tres veces"]],
  examples: [
    ["Quand j'étais petit, je passais les vacances chez ma grand-mère.", "Cuando era pequeño, pasaba las vacaciones en casa de mi abuela."],
    ["Il faisait beau et les enfants jouaient dans le parc.", "Hacía buen tiempo y los niños jugaban en el parque."],
    ["Je dormais quand le téléphone a sonné.", "Estaba durmiendo cuando sonó el teléfono."],
    ["Samedi, il faisait froid, mais mon amie m'a appelé et j'ai accepté de sortir.", "El sábado hacía frío, pero mi amiga me llamó y acepté salir."],
    ["Et si on allait au cinéma ?", "¿Y si fuéramos al cine?"],
    ["Je voulais vous demander un petit service.", "Quería pedirle un pequeño favor."]
  ],
  links: [
    ["Le Point du FLE · L'imparfait", LP + "imparfait.htm", bi("Formación y usos con ejercicios autocorregibles.", "Formation et emplois avec exercices autocorrectifs.")],
    ["Lingolia · L'imparfait", LG + "tiempos-indicativo/l-imparfait", bi("Explicación en español.", "Explication en espagnol.")],
    ["Instant FLE · PC ou imparfait", "https://instantfle.fr/passe-compose-ou-imparfait/", bi("Ejercicios progresivos de contraste.", "Exercices progressifs d'opposition.")],
    ["Le Baobab Bleu · 3 jeux oraux B1", "https://lebaobabbleu.com/2025/10/27/jeux-alterance-pc-imparfait/", bi("Il était une fois, Photo mystère, Et tout à coup…", "Il était une fois, Photo mystère, Et tout à coup…")],
    ["Assistants FLE · Le jeu de l'Alibi", "https://assistantsdefle.wordpress.com/2022/10/03/reviser-le-passe-compose-et-limparfait-jeu-de-lalibi-a2-b1/", bi("Juego de rol en pareja para narrar en pasado.", "Jeu de rôle à deux pour raconter au passé.")],
    ["Le Point du FLE · Fiches PC/imparfait", "https://www.lepointdufle.net/penseigner/passecomposeimparfait-fiches-pedagogiques.htm", bi("Repertorio de fichas pedagógicas.", "Répertoire de fiches pédagogiques.")]
  ],
  games: [
    { type: "mcq", title: bi("¿Passé composé o imparfait?", "Passé composé ou imparfait ?"), inst: bi("Elige el tiempo adecuado según el contexto.", "Choisis le temps qui convient au contexte."), items: [
      { q: "Quand j'___ enfant, j'habitais à la campagne.", o: ["étais", "ai été", "serai"] },
      { q: "Hier soir, nous ___ un film génial.", o: ["avons vu", "voyions", "verrions"] },
      { q: "Il ___ quand je suis sorti.", o: ["pleuvait", "a plu", "pleuvra"], why: bi("El decorado (la lluvia) → imparfait.", "Le décor (la pluie) → imparfait.") },
      { q: "Tout à coup, la lumière ___.", o: ["s'est éteinte", "s'éteignait", "s'éteint"] },
      { q: "Le samedi, nous ___ au marché.", o: ["allions", "sommes allés", "irons"], why: bi("Hábito → imparfait.", "Habitude → imparfait.") },
      { q: "Je lisais quand quelqu'un ___ à la porte.", o: ["a frappé", "frappait", "frappe"] },
      { q: "Elle ___ trois fois à Rome.", o: ["est allée", "allait", "va"], why: bi("Número preciso de veces → passé composé.", "Nombre précis de fois → passé composé.") },
      { q: "La maison ___ grande et lumineuse.", o: ["était", "a été", "est été"] }
    ] },
    { type: "sort", title: bi("¿Decorado o acontecimiento?", "Décor ou événement ?"), inst: bi("Clasifica cada fragmento de la historia.", "Classe chaque morceau de l'histoire."), buckets: [bi("Imparfait · decorado", "Imparfait · décor"), bi("Passé composé · acontecimiento", "Passé composé · événement")], items: [
      ["Il faisait nuit", 0], ["Soudain, j'ai entendu un bruit", 1], ["Les oiseaux chantaient", 0], ["Un jour, il est parti", 1], ["D'habitude, je me levais tôt", 0], ["Elle a téléphoné trois fois", 1], ["J'avais très faim", 0], ["Tout à coup, la porte s'est ouverte", 1]
    ] },
    { type: "fill", title: bi("Conjuga en imparfait", "Conjugue à l'imparfait"), inst: bi("Escribe el verbo en imparfait.", "Écris le verbe à l'imparfait."), items: [
      { q: "Je ___ le bus tous les matins. " + H("prendre"), a: [["prenais"]] },
      { q: "Tu ___ tard le vendredi. " + H("finir"), a: [["finissais"]] },
      { q: "Nous ___ ensemble à la bibliothèque. " + H("étudier"), a: [["étudiions"]] },
      { q: "Il ___ beaucoup de chocolat. " + H("manger"), a: [["mangeait"]] },
      { q: "Vous ___ contents ? " + H("être"), a: [["étiez"]] },
      { q: "Ils ___ du sport le week-end. " + H("faire"), a: [["faisaient"]] }
    ] }
  ]
});

L({
  id: "plus-que-parfait", name: "Le plus-que-parfait", sub: bi("Lo que había pasado antes", "Ce qui s'était passé avant"),
  goal: bi("Sirve para dar un paso más atrás en el pasado: una acción anterior a otra acción pasada. Es el tiempo más fácil para un hispanohablante: «había comido» = <i>j'avais mangé</i>.",
    "Il permet de reculer encore dans le passé : une action antérieure à une autre action passée. C'est le temps le plus facile pour un hispanophone : « había comido » = <i>j'avais mangé</i>."),
  theory: [
    ["rule", bi("<b><i>Avoir</i> o <i>être</i> en imparfait + participio pasado.</b> Mismas reglas de auxiliar y concordancia que el passé composé: <i>j'avais mangé, elle était partie</i>.",
      "<b><i>Avoir</i> ou <i>être</i> à l'imparfait + participe passé.</b> Mêmes règles d'auxiliaire et d'accord qu'au passé composé : <i>j'avais mangé, elle était partie</i>.")],
    ["timeline", [[bi("Antes", "Avant"), "Plus-que-parfait", "le train était déjà parti"], [bi("Pasado", "Passé"), "Passé composé / imparfait", "quand je suis arrivé"], [bi("Ahora", "Maintenant"), "Présent", "je raconte l'histoire"]]],
    ["list", [
      bi("<b>Anterioridad:</b> <i>Quand je suis arrivé, le train était déjà parti.</i>", "<b>Antériorité :</b> <i>Quand je suis arrivé, le train était déjà parti.</i>"),
      bi("<b>Causa anterior:</b> <i>J'ai réussi parce que j'avais beaucoup étudié.</i>", "<b>Cause antérieure :</b> <i>J'ai réussi parce que j'avais beaucoup étudié.</i>"),
      bi("<b>Arrepentimiento con si:</b> <i>Si j'avais su !</i> (ver Hipótesis)", "<b>Regret avec si :</b> <i>Si j'avais su !</i> (voir L'hypothèse)"),
      bi("<b>Discurso indirecto:</b> <i>Il a dit qu'il avait fini.</i>", "<b>Discours indirect :</b> <i>Il a dit qu'il avait fini.</i>")]],
    ["tip", bi("Coloca <i>déjà, jamais, pas encore</i> entre el auxiliar y el participio: <i>il était déjà parti, je n'avais jamais vu…</i>",
      "Placez <i>déjà, jamais, pas encore</i> entre l'auxiliaire et le participe : <i>il était déjà parti, je n'avais jamais vu…</i>")]
  ],
  vocab: [["déjà", "ya"], ["pas encore", "todavía no"], ["jamais", "nunca"], ["avant", "antes"], ["auparavant", "anteriormente"], ["la veille", "la víspera, el día anterior"], ["juste avant", "justo antes"], ["parce que", "porque"]],
  examples: [
    ["Quand je suis arrivé, le train était déjà parti.", "Cuando llegué, el tren ya había salido."],
    ["Elle m'a dit qu'elle avait perdu ses clés.", "Me dijo que había perdido sus llaves."],
    ["J'ai réussi l'examen parce que j'avais beaucoup étudié.", "Aprobé el examen porque había estudiado mucho."],
    ["Si j'avais su, je serais venu plus tôt !", "¡Si lo hubiera sabido, habría venido antes!"],
    ["Nous n'avions jamais vu la mer avant ce voyage.", "Nunca habíamos visto el mar antes de ese viaje."]
  ],
  links: [
    ["Le Point du FLE · Plus-que-parfait", LP + "plus-que-parfait.htm", bi("Ejercicios de formación y uso.", "Exercices de formation et d'emploi.")],
    ["Lingolia · Plus-que-parfait", "https://francais.lingolia.com/es/gramatica/tiempos-indicativo/le-plus-que-parfait/ejercicios", bi("Ejercicios B1 (una parte es para suscriptores).", "Exercices B1 (une partie est réservée aux abonnés).")],
    ["Le plaisir d'apprendre · Activités B1", "https://www.leplaisirdapprendre.com/portfolio/selection-activites-grammaire-a1-a2-b1-b2/", bi("Selección de actividades de gramática por nivel.", "Sélection d'activités de grammaire par niveau.")]
  ],
  games: [
    { type: "fill", title: bi("Completa con el plus-que-parfait", "Complète au plus-que-parfait"), inst: bi("Escribe el auxiliar en el primer hueco y el participio en el segundo.", "Écris l'auxiliaire dans le premier trou et le participe dans le second."), items: [
      { q: "Quand nous sommes arrivés, le film ___ déjà ___. " + H("commencer"), a: [["avait"], ["commencé"]] },
      { q: "Elle était triste parce qu'elle ___ ___ son chat. " + H("perdre"), a: [["avait"], ["perdu"]] },
      { q: "Ils ___ ___ avant midi. " + H("partir"), a: [["étaient"], ["partis"]] },
      { q: "Je n'ai pas faim : j'___ déjà ___. " + H("manger"), a: [["avais"], ["mangé"]] },
      { q: "Nous n'___ jamais ___ la neige avant ce voyage. " + H("voir"), a: [["avions"], ["vu"]] },
      { q: "Elle a dit qu'elle ___ ___ tard. " + H("se lever"), a: [["s'était"], ["levée"]] }
    ] },
    { type: "order", title: bi("Ordena la frase", "Remets la phrase dans l'ordre"), inst: bi("Toca las palabras en el orden correcto.", "Touche les mots dans le bon ordre."), items: [
      ["Quand|je|suis|arrivé,|le|train|était|déjà|parti.", "Cuando llegué, el tren ya había salido."],
      ["Il|m'a|dit|qu'il|avait|fini.", "Me dijo que había terminado."],
      ["Nous|n'avions|jamais|vu|la|mer.", "Nunca habíamos visto el mar."],
      ["Si|j'avais|su,|je|serais|venu.", "Si lo hubiera sabido, habría venido."]
    ] }
  ]
});

/* ---------------- Module B ---------------- */
L({
  id: "futur", name: "Le futur", sub: bi("Futur proche, futur simple y passé récent", "Futur proche, futur simple et passé récent"),
  goal: bi("Tres formas para situarte en el tiempo cercano: lo que vas a hacer, lo que harás y lo que acabas de hacer.",
    "Trois formes pour se situer dans le temps proche : ce qu'on va faire, ce qu'on fera et ce qu'on vient de faire."),
  theory: [
    ["table", { h: bi(["Tiempo", "Formación", "Ejemplo"], ["Temps", "Formation", "Exemple"]), r: [
      ["Futur proche", bi("aller + infinitivo", "aller + infinitif"), "Je vais partir bientôt."],
      ["Futur simple", bi("infinitivo + -ai, -as, -a, -ons, -ez, -ont", "infinitif + -ai, -as, -a, -ons, -ez, -ont"), "Je vivrai à Lyon."],
      ["Passé récent", bi("venir de + infinitivo", "venir de + infinitif"), "Je viens de finir."],
      ["Futur antérieur", bi("aurai / serai + participio", "aurai / serai + participe"), "Quand j'aurai fini, je t'appellerai."]] }],
    ["rule", bi("<b>Raíces irregulares</b> (las mismas del condicional): <i>ser-</i> (être), <i>aur-</i> (avoir), <i>ir-</i> (aller), <i>fer-</i> (faire), <i>viendr-</i> (venir), <i>pourr-</i> (pouvoir), <i>voudr-</i> (vouloir), <i>devr-</i> (devoir), <i>saur-</i> (savoir), <i>verr-</i> (voir), <i>enverr-</i> (envoyer), <i>faudr-</i> (falloir).",
      "<b>Radicaux irréguliers</b> (communs au conditionnel) : <i>ser-</i> (être), <i>aur-</i> (avoir), <i>ir-</i> (aller), <i>fer-</i> (faire), <i>viendr-</i> (venir), <i>pourr-</i> (pouvoir), <i>voudr-</i> (vouloir), <i>devr-</i> (devoir), <i>saur-</i> (savoir), <i>verr-</i> (voir), <i>enverr-</i> (envoyer), <i>faudr-</i> (falloir).")],
    ["tip", bi("Las terminaciones del futuro son el presente de <i>avoir</i>: <b>ai, as, a, ons, ez, ont</b>. Los verbos en -re pierden la -e: <i>prendre → je prendrai</i>.",
      "Les terminaisons du futur sont le présent d'<i>avoir</i> : <b>ai, as, a, ons, ez, ont</b>. Les verbes en -re perdent le -e : <i>prendre → je prendrai</i>.")],
    ["trap", bi("Después de <i>quand, dès que, lorsque</i> se usa <b>futuro</b>, no subjuntivo como en español: <i>Quand je serai grand…</i> (Cuando sea mayor…).",
      "Après <i>quand, dès que, lorsque</i>, on emploie le <b>futur</b>, pas le subjonctif comme en espagnol : <i>Quand je serai grand…</i>")],
    ["trap", bi("<i>Dans deux jours</i> = dentro de dos días. <i>En deux jours</i> = en dos días (duración).",
      "<i>Dans deux jours</i> = à partir de maintenant, deux jours plus tard. <i>En deux jours</i> = durée nécessaire.")]
  ],
  vocab: [["demain", "mañana"], ["après-demain", "pasado mañana"], ["bientôt", "pronto"], ["dans deux jours", "dentro de dos días"], ["la semaine prochaine", "la semana que viene"], ["l'année prochaine", "el año que viene"], ["à l'avenir", "en el futuro"], ["dès que", "en cuanto"], ["lorsque", "cuando"], ["venir de", "acabar de"]],
  examples: [
    ["Je vais partir bientôt.", "Me voy a ir pronto."],
    ["L'année prochaine, je vivrai à Lyon.", "El año que viene viviré en Lyon."],
    ["Quand je serai grand, je serai pilote.", "Cuando sea mayor, seré piloto."],
    ["Dès que tu arriveras, appelle-moi.", "En cuanto llegues, llámame."],
    ["Je viens de finir mes devoirs.", "Acabo de terminar mis deberes."],
    ["Nous verrons bien !", "¡Ya veremos!"]
  ],
  links: [
    ["Le Point du FLE · Le futur", LP + "futur.htm", bi("Futur simple, proche y antérieur.", "Futur simple, proche et antérieur.")],
    ["Lingolia · Le futur simple", LG + "tiempos-indicativo/le-futur-simple", bi("Explicación en español.", "Explication en espagnol.")],
    ["Lingolia · Le futur proche", LG + "tiempos-indicativo/le-futur-proche", bi("Explicación en español.", "Explication en espagnol.")],
    ["TICs en FLE · Jeux", "https://ticsenfle.blogspot.com/p/jeux.html", bi("Incluye el quiz de la bola de cristal.", "Avec le quiz de la boule de cristal.")],
    ["Le FLE pour les curieux · Guide B1", "https://leflepourlescurieux.fr/guide-travail-b1/", bi("Guía de trabajo B1 con ejercicios autocorregibles.", "Guide de travail B1 avec exercices autocorrectifs.")]
  ],
  games: [
    { type: "match", title: bi("Infinitivo ↔ raíz del futuro", "Infinitif ↔ radical du futur"), inst: bi("Toca un verbo y luego su raíz irregular.", "Touche un verbe puis son radical irrégulier."), pairs: [["être", "ser-"], ["avoir", "aur-"], ["aller", "ir-"], ["faire", "fer-"], ["venir", "viendr-"], ["pouvoir", "pourr-"], ["savoir", "saur-"], ["voir", "verr-"], ["envoyer", "enverr-"], ["devoir", "devr-"]] },
    { type: "mcq", title: bi("¿Qué futuro?", "Quel futur ?"), inst: bi("Elige la forma correcta.", "Choisis la bonne forme."), items: [
      { q: "Quand tu ___ à Paris, tu m'appelleras.", o: ["arriveras", "arrives", "arrive"], why: bi("<i>Quand</i> + futuro cuando hablamos del futuro.", "<i>Quand</i> + futur quand on parle de l'avenir.") },
      { q: "Attention, tu ___ tomber !", o: ["vas", "viens de", "iras"] },
      { q: "Je ___ manger, je n'ai plus faim.", o: ["viens de", "vais", "irai"] },
      { q: "Nous ___ en vacances en juillet.", o: ["partirons", "partions", "partirions"] },
      { q: "Ils ___ la réponse demain.", o: ["sauront", "savront", "saveront"] },
      { q: "Il ___ beau ce week-end.", o: ["fera", "faira", "fairera"] },
      { q: "Je te rendrai ton livre ___ trois jours.", o: ["dans", "en", "depuis"] },
      { q: "Dès qu'elle ___ fini, elle sortira.", o: ["aura", "a", "avait"], why: bi("Futur antérieur: acción futura anterior a otra futura.", "Futur antérieur : action future antérieure à une autre action future.") }
    ] }
  ]
});

L({
  id: "conditionnel", name: "Le conditionnel", sub: bi("Cortesía, deseos, consejos e hipótesis", "Politesse, souhaits, conseils et hypothèses"),
  goal: bi("El condicional es la herramienta de la cortesía y de los sueños. Imprescindible en cartas formales y juegos de rol del DELF.",
    "Le conditionnel est l'outil de la politesse et des rêves. Indispensable dans les lettres formelles et les jeux de rôle du DELF."),
  theory: [
    ["rule", bi("<b>Raíz del futuro + terminaciones del imparfait</b> (<i>-ais, -ais, -ait, -ions, -iez, -aient</i>): <i>je pourrais, nous voudrions, ils feraient</i>.",
      "<b>Radical du futur + terminaisons de l'imparfait</b> (<i>-ais, -ais, -ait, -ions, -iez, -aient</i>) : <i>je pourrais, nous voudrions, ils feraient</i>.")],
    ["table", { h: bi(["Uso", "Ejemplo"], ["Emploi", "Exemple"]), r: [
      [bi("Cortesía", "Politesse"), "Pourriez-vous m'aider ?"],
      [bi("Deseo", "Souhait"), "J'aimerais vivre au bord de la mer."],
      [bi("Consejo", "Conseil"), "Tu devrais te reposer. À ta place, je partirais."],
      [bi("Hipótesis", "Hypothèse"), "Si j'avais le temps, je voyagerais."],
      [bi("Información no confirmada", "Information non confirmée"), "Le ministre serait malade."]] }],
    ["rule", bi("<b>Condicional pasado</b> (<i>aurais / serais</i> + participio): reproche o arrepentimiento. <i>Tu aurais dû me le dire !</i> (¡Deberías habérmelo dicho!)",
      "<b>Conditionnel passé</b> (<i>aurais / serais</i> + participe) : reproche ou regret. <i>Tu aurais dû me le dire !</i>")],
    ["trap", bi("Nunca condicional después de un <i>si</i> de hipótesis: <i>si j'avais</i>, no <s>si j'aurais</s>.",
      "Jamais de conditionnel après un <i>si</i> d'hypothèse : <i>si j'avais</i>, pas <s>si j'aurais</s>.")],
    ["delf", bi("El condicional de cortesía es indispensable en las cartas formales y en el juego de rol (oral, parte 2).",
      "Le conditionnel de politesse est indispensable dans les lettres formelles et le jeu de rôle (oral, partie 2).")]
  ],
  vocab: [["je voudrais", "quisiera"], ["pourriez-vous… ?", "¿podría usted…?"], ["j'aimerais", "me gustaría"], ["tu devrais", "deberías"], ["à ta place", "yo que tú"], ["il vaudrait mieux", "sería mejor"], ["on pourrait", "podríamos"], ["ça me plairait", "me gustaría"], ["selon / d'après", "según"], ["j'aurais dû", "debería haber"]],
  examples: [
    ["Pourriez-vous m'aider, s'il vous plaît ?", "¿Podría ayudarme, por favor?"],
    ["J'aimerais vivre au bord de la mer.", "Me gustaría vivir junto al mar."],
    ["Tu devrais te reposer. À ta place, je partirais.", "Deberías descansar. Yo que tú, me iría."],
    ["Le ministre serait malade.", "El ministro estaría enfermo (según fuentes no confirmadas)."],
    ["Tu aurais dû me le dire !", "¡Deberías habérmelo dicho!"],
    ["Nous voudrions réserver une table pour deux.", "Quisiéramos reservar una mesa para dos."]
  ],
  links: [
    ["Le Point du FLE · Le conditionnel", LP + "conditionnel.htm", bi("Formación y usos con ejercicios.", "Formation et emplois avec exercices.")],
    ["Lingolia · Le conditionnel", LG + "verbos/conditionnel", bi("Condicional presente y pasado en español.", "Conditionnel présent et passé, expliqué en espagnol.")],
    ["Tout en français · Hypothèses avec si", "https://toutenfrancais.tv/hypotheses-avec-si", bi("Vídeo y ejercicios.", "Vidéo et exercices.")]
  ],
  games: [
    { type: "sort", title: bi("¿Para qué se usa?", "À quoi sert-il ?"), inst: bi("Clasifica cada frase según el uso del condicional.", "Classe chaque phrase selon l'emploi du conditionnel."), buckets: [bi("Cortesía", "Politesse"), bi("Consejo", "Conseil"), bi("Deseo", "Souhait"), bi("Info no confirmada", "Info non confirmée")], items: [
      ["Pourriez-vous fermer la porte ?", 0], ["Vous auriez l'heure ?", 0], ["Tu devrais dormir plus.", 1], ["À ta place, j'accepterais.", 1], ["J'aimerais tant voyager au Japon.", 2], ["Je rêverais d'avoir un jardin.", 2], ["Selon la presse, l'accident aurait fait deux blessés.", 3], ["Le président serait en vacances.", 3]
    ] },
    { type: "fill", title: bi("Conjuga en condicional", "Conjugue au conditionnel"), inst: bi("Escribe el verbo en condicional.", "Écris le verbe au conditionnel."), items: [
      { q: "Je ___ un café, s'il vous plaît. " + H("vouloir"), a: [["voudrais"]] },
      { q: "Tu ___ appeler ta mère. " + H("devoir"), a: [["devrais"]] },
      { q: "Nous ___ partir en mai. " + H("aimer"), a: [["aimerions"]] },
      { q: "___-vous répéter ? " + H("pouvoir"), a: [["pourriez"]] },
      { q: "Ils ___ contents de te voir. " + H("être"), a: [["seraient"]] },
      { q: "À ta place, j'___ chez le médecin. " + H("aller"), a: [["irais"]] },
      { q: "Vous ___ une minute ? " + H("avoir"), a: [["auriez"]] },
      { q: bi("Tu ___ me prévenir ! " + H("devoir, condicional pasado"), "Tu ___ me prévenir ! " + H("devoir, conditionnel passé")), a: [["aurais dû"]] }
    ] }
  ]
});

L({
  id: "hypothese", name: "L'hypothèse avec si", sub: bi("Oraciones condicionales: tipos 1, 2 y 3", "Les phrases avec si : types 1, 2 et 3"),
  goal: bi("Tres combinaciones fijas de tiempos para lo probable, lo imaginario y lo que ya no puede cambiar.",
    "Trois combinaisons de temps fixes pour le probable, l'imaginaire et ce qui ne peut plus changer."),
  theory: [
    ["table", { h: bi(["Tipo", "Después de si", "Resultado", "Ejemplo"], ["Type", "Après si", "Résultat", "Exemple"]), r: [
      [bi("1. Real / probable", "1. Réel / probable"), "présent", bi("présent, futur o impératif", "présent, futur ou impératif"), "Si tu viens, on ira au cinéma."],
      [bi("2. Irreal del presente", "2. Irréel du présent"), "imparfait", "conditionnel présent", "Si j'avais de l'argent, j'achèterais une maison."],
      [bi("3. Irreal del pasado", "3. Irréel du passé"), "plus-que-parfait", "conditionnel passé", "Si tu avais étudié, tu aurais réussi."]] }],
    ["trap", bi("El subjuntivo español se vuelve indicativo: «si <b>tuviera</b>» = <i>si j'<b>avais</b></i>; «si <b>hubiera tenido</b>» = <i>si j'<b>avais eu</b></i>.",
      "Le subjonctif espagnol devient un indicatif : « si <b>tuviera</b> » = <i>si j'<b>avais</b></i> ; « si <b>hubiera tenido</b> » = <i>si j'<b>avais eu</b></i>.")],
    ["tip", bi("«Les SI n'aiment pas les -RAIS»: jamás futuro ni condicional justo después de <i>si</i>. Ojo: <i>si + il → s'il</i>, pero <i>si elle</i> no se elide.",
      "« Les SI n'aiment pas les -RAIS » : jamais de futur ni de conditionnel juste après <i>si</i>. Attention : <i>si + il → s'il</i>, mais <i>si elle</i> ne s'élide pas.")],
    ["rule", bi("<b>Otras formas de condición:</b> <i>à condition que</i> + subjuntivo, <i>à moins que</i> + subjuntivo, <i>au cas où</i> + condicional, <i>même si</i> + indicativo.",
      "<b>Autres façons d'exprimer la condition :</b> <i>à condition que</i> + subjonctif, <i>à moins que</i> + subjonctif, <i>au cas où</i> + conditionnel, <i>même si</i> + indicatif.")]
  ],
  vocab: [["si / s'il", "si / si él"], ["même si", "aunque, incluso si"], ["à condition que", "a condición de que"], ["à moins que", "a menos que"], ["au cas où", "por si acaso"], ["sinon", "si no, de lo contrario"], ["imaginons que", "imaginemos que"], ["et si on… ?", "¿y si…?"], ["si j'étais toi", "si yo fuera tú"]],
  examples: [
    ["Si tu viens, on ira au cinéma.", "Si vienes, iremos al cine."],
    ["Si j'avais de l'argent, j'achèterais une maison.", "Si tuviera dinero, compraría una casa."],
    ["Si tu avais étudié, tu aurais réussi.", "Si hubieras estudiado, habrías aprobado."],
    ["S'il pleut demain, nous resterons à la maison.", "Si llueve mañana, nos quedaremos en casa."],
    ["Prends un parapluie au cas où il pleuvrait.", "Toma un paraguas por si llueve."],
    ["Je viendrai à condition que tu m'invites.", "Iré a condición de que me invites."]
  ],
  links: [
    ["Tout en français · Hypothèses avec si", "https://toutenfrancais.tv/hypotheses-avec-si", bi("Vídeo explicativo y ejercicios.", "Vidéo explicative et exercices.")],
    ["Le moteur du FLE · Hypothèses", "https://www.lemoteurdufle.fr/theme/hypotheses/", bi("Buscador de ejercicios sobre la hipótesis.", "Moteur de recherche d'exercices sur l'hypothèse.")],
    ["Lingolia · Oraciones condicionales", LG + "oraciones/compuestas/condicionales", bi("Explicación en español.", "Explication en espagnol.")],
    ["Les Zexperts FLE · Faire du stop", "https://leszexpertsfle.com/produit/faire-du-stop-differentes-structures-pour-exprimer-la-condition-b1-b2/", bi("Actividad oral B1-B2 sobre la condición.", "Activité orale B1-B2 sur la condition.")]
  ],
  games: [
    { type: "mcq", title: bi("¿Qué tiempo va aquí?", "Quel temps ici ?"), inst: bi("Respeta la concordancia de la hipótesis.", "Respecte la concordance de l'hypothèse."), items: [
      { q: "Si j'___ le temps, je voyagerais.", o: ["avais", "aurais", "ai"] },
      { q: "Si tu viens, on ___ au cinéma.", o: ["ira", "irait", "serait allé"] },
      { q: "Si nous avions su, nous ___ plus tôt.", o: ["serions venus", "viendrions", "venions"] },
      { q: "S'il ___ demain, je resterai chez moi.", o: ["pleut", "pleuvait", "pleuvrait"] },
      { q: "Si elle ___ étudié, elle aurait réussi.", o: ["avait", "aurait", "a"] },
      { q: "Si j'étais toi, j'___ ce travail.", o: ["accepterais", "accepterai", "accepte"] },
      { q: "Prends ton manteau au cas où il ___ froid.", o: ["ferait", "fasse", "fera"], why: bi("<i>Au cas où</i> + condicional.", "<i>Au cas où</i> + conditionnel.") },
      { q: "Je t'aide à condition que tu ___ la vaisselle.", o: ["fasses", "fais", "ferais"], why: bi("<i>À condition que</i> + subjuntivo.", "<i>À condition que</i> + subjonctif.") }
    ] },
    { type: "fill", title: bi("Construye la hipótesis", "Construis l'hypothèse"), inst: bi("Conjuga los dos verbos. Puedes escribir formas compuestas en un solo hueco.", "Conjugue les deux verbes. Les formes composées vont dans un seul trou."), items: [
      { q: "Si j'___ riche, je ___ le tour du monde. " + H("être, faire"), a: [["étais"], ["ferais"]] },
      { q: "Si tu ___ demain, nous ___ au musée. " + H("venir, aller"), a: [["viens"], ["irons"]] },
      { q: bi("Si nous ___, nous ___ plus tôt. " + H("savoir → pqp, venir → cond. pasado"), "Si nous ___, nous ___ plus tôt. " + H("savoir → pqp, venir → cond. passé")), a: [["avions su"], ["serions venus"]] },
      { q: bi("S'il ___ beau, on ___ dans le parc. " + H("faire, pique-niquer → futuro"), "S'il ___ beau, on ___ dans le parc. " + H("faire, pique-niquer → futur")), a: [["fait"], ["pique-niquera"]] },
      { q: "Si vous ___ le choix, où ___-vous ? " + H("avoir, vivre"), a: [["aviez"], ["vivriez"]] },
      { q: bi("Si elle m'___, elle ___. " + H("écouter → pqp, réussir → cond. pasado"), "Si elle m'___, elle ___. " + H("écouter → pqp, réussir → cond. passé")), a: [["avait écoutée", "avait écouté"], ["aurait réussi"]] }
    ] }
  ]
});

/* ---------------- Module C ---------------- */
L({
  id: "pronoms", name: "Les pronoms compléments", sub: bi("COD, COI, y, en y su orden", "COD, COI, y, en et leur ordre"),
  goal: bi("Los pronombres evitan repetir y hacen que tu francés suene natural. La clave: saber si el verbo lleva <i>à</i> o no, y el orden cuando hay dos.",
    "Les pronoms évitent les répétitions et rendent le français naturel. La clé : savoir si le verbe se construit avec <i>à</i> ou non, et l'ordre quand il y en a deux."),
  theory: [
    ["table", { h: bi(["Persona", "COD", "COI (+ à)"], ["Personne", "COD", "COI (+ à)"]), r: [
      ["il / elle", "le, la, l'", "lui"],
      ["ils / elles", "les", "leur"],
      ["je, tu, nous, vous", "me, te, nous, vous", "me, te, nous, vous"]] }],
    ["trap", bi("<i>Aider, remercier, appeler, attendre, écouter</i> llevan COD: <i>Je <b>l'</b>aide</i> (no <s>je lui aide</s>). <i>Téléphoner à, parler à, répondre à</i> llevan COI: <i>Je <b>lui</b> téléphone</i>.",
      "<i>Aider, remercier, appeler, attendre, écouter</i> prennent un COD : <i>Je <b>l'</b>aide</i> (pas <s>je lui aide</s>). <i>Téléphoner à, parler à, répondre à</i> prennent un COI : <i>Je <b>lui</b> téléphone</i>.")],
    ["rule", bi("<b><i>y</i></b> reemplaza un lugar o <i>à</i> + cosa: <i>J'y vais. J'y pense.</i> <b><i>en</i></b> reemplaza <i>de</i> + cosa o una cantidad: <i>J'en veux. J'en ai deux.</i> Para personas con <i>penser à</i>, se usa el pronombre tónico: <i>Je pense à elle.</i>",
      "<b><i>y</i></b> remplace un lieu ou <i>à</i> + chose : <i>J'y vais. J'y pense.</i> <b><i>en</i></b> remplace <i>de</i> + chose ou une quantité : <i>J'en veux. J'en ai deux.</i> Pour une personne après <i>penser à</i>, on utilise le pronom tonique : <i>Je pense à elle.</i>")],
    ["table", { h: ["1", "2", "3", "4", "5"], r: [["me, te, se, nous, vous", "le, la, les", "lui, leur", "y", "en"]] }],
    ["tip", bi("Orden de dos pronombres: <b>M-L-L-Y-E</b> (me, le, lui, y, en). Inventa una frase absurda con esas iniciales: cuanto más rara, mejor se recuerda.",
      "Ordre des pronoms doubles : <b>M-L-L-Y-E</b> (me, le, lui, y, en). Inventez une phrase absurde avec ces initiales : plus elle est bizarre, mieux elle se retient.")],
    ["rule", bi("<b>Posición:</b> antes del verbo conjugado (<i>je le vois</i>), antes del infinitivo (<i>je vais le voir</i>), antes del auxiliar en passé composé (<i>je l'ai vu</i>). En imperativo afirmativo, después: <i>Donne-le-moi !</i>",
      "<b>Place :</b> avant le verbe conjugué (<i>je le vois</i>), avant l'infinitif (<i>je vais le voir</i>), avant l'auxiliaire au passé composé (<i>je l'ai vu</i>). À l'impératif affirmatif, après : <i>Donne-le-moi !</i>")],
    ["trap", bi("Con COD antes de <i>avoir</i>, el participio concuerda: <i>Ces fleurs, je les ai achet<b>ées</b> au marché.</i>",
      "Avec un COD placé avant <i>avoir</i>, le participe s'accorde : <i>Ces fleurs, je les ai achet<b>ées</b> au marché.</i>")]
  ],
  vocab: [["aider qqn", "ayudar a alguien"], ["appeler qqn", "llamar a alguien"], ["attendre qqn", "esperar a alguien"], ["remercier qqn", "agradecer a alguien"], ["téléphoner à qqn", "llamar por teléfono a alguien"], ["parler à qqn", "hablar con alguien"], ["répondre à qqn", "responder a alguien"], ["ressembler à qqn", "parecerse a alguien"], ["penser à qqch → y penser", "pensar en algo"], ["avoir besoin de → en avoir besoin", "necesitar"], ["s'occuper de → s'en occuper", "ocuparse de"], ["il y en a", "hay (de eso)"]],
  examples: [
    ["Tu connais Paul ? Oui, je le connais bien.", "¿Conoces a Paul? Sí, lo conozco bien."],
    ["Tu as parlé à tes parents ? Oui, je leur ai parlé hier.", "¿Hablaste con tus padres? Sí, les hablé ayer."],
    ["Tu vas à la fête ? Oui, j'y vais.", "¿Vas a la fiesta? Sí, voy."],
    ["Tu veux du gâteau ? Oui, j'en veux un peu.", "¿Quieres pastel? Sí, quiero un poco."],
    ["Je le lui explique.", "Se lo explico."],
    ["Il y en a trois.", "Hay tres."],
    ["Ces fleurs, je les ai achetées au marché.", "Estas flores las compré en el mercado."]
  ],
  links: [
    ["Le Point du FLE · Pronoms compléments", LP + "pronomscomplements.htm", bi("Ejercicios con audio e interactivos.", "Exercices audio et interactifs.")],
    ["Le Point du FLE · Place des pronoms", "https://www.lepointdufle.net/ressources_fle/place_des_pronoms.htm", bi("Ejercicio para reconstruir el orden.", "Exercice pour reconstituer l'ordre.")],
    ["Lingolia · Pronombres personales", LG + "pronombres-determinantes/personales", bi("Explicación en español.", "Explication en espagnol.")],
    ["Lingolia · Pronombres y / en", LG + "pronombres-determinantes/adverbiales", bi("Cuándo usar y y en.", "Quand employer y et en.")]
  ],
  games: [
    { type: "mcq", title: bi("¿Qué pronombre?", "Quel pronom ?"), inst: bi("Elige el pronombre que sustituye al complemento.", "Choisis le pronom qui remplace le complément."), items: [
      { q: "Tu vois Marie ? Oui, je ___ vois.", o: ["la", "lui", "y"] },
      { q: "Tu téléphones à tes parents ? Oui, je ___ téléphone.", o: ["leur", "les", "lui"] },
      { q: "Tu aides ton frère ? Oui, je ___ aide.", o: ["l'", "lui", "en"], why: bi("<i>Aider qqn</i> → COD.", "<i>Aider qqn</i> → COD.") },
      { q: "Vous allez à Paris ? Oui, nous ___ allons.", o: ["y", "en", "la"] },
      { q: "Tu as des frères ? Oui, j'___ ai deux.", o: ["en", "y", "les"] },
      { q: "Tu penses à ton examen ? Oui, j'___ pense.", o: ["y", "en", "lui"] },
      { q: "Tu penses à ta sœur ? Oui, je pense ___.", o: ["à elle", "lui", "y"], why: bi("<i>Penser à</i> + persona → pronombre tónico.", "<i>Penser à</i> + personne → pronom tonique.") },
      { q: "Il donne le livre à Marie. → Il ___ donne.", o: ["le lui", "lui le", "la lui"] },
      { q: "Tu as parlé de ce problème ? Oui, j'___ ai parlé.", o: ["en", "y", "le"] },
      { q: "Tu m'expliques la règle ? Oui, je ___ explique.", o: ["te l'", "la te", "t'en"] }
    ] },
    { type: "order", title: bi("Ordena los pronombres", "Remets les pronoms dans l'ordre"), inst: bi("Construye la frase con el orden correcto.", "Construis la phrase dans le bon ordre."), items: [
      ["Je|le|lui|explique.", "Se lo explico."],
      ["Il|y|en|a|trois.", "Hay tres."],
      ["Ne|me|le|donne|pas.", "No me lo des."],
      ["Je|vais|leur|en|parler.", "Les voy a hablar de ello."],
      ["Elle|nous|les|a|montrées.", "Nos las mostró."]
    ] }
  ]
});

L({
  id: "relatifs", name: "Les pronoms relatifs", sub: bi("qui, que, dont, où, lequel", "qui, que, dont, où, lequel"),
  goal: bi("Unen dos frases en una y hacen tus textos más fluidos. El B1 exige sobre todo dominar <i>dont</i> y <i>où</i>.",
    "Ils relient deux phrases en une seule et rendent les textes plus fluides. Au B1, il faut surtout maîtriser <i>dont</i> et <i>où</i>."),
  theory: [
    ["table", { h: bi(["Relativo", "Uso", "Ejemplo"], ["Relatif", "Emploi", "Exemple"]), r: [
      ["qui", bi("sujeto", "sujet"), "La femme qui parle…"],
      ["que", "COD", "Le film que j'ai vu…"],
      ["dont", bi("reemplaza de + nombre", "remplace de + nom"), "Le livre dont je t'ai parlé."],
      ["où", bi("lugar y tiempo", "lieu et temps"), "Le jour où je t'ai rencontré."],
      ["lequel, laquelle…", bi("después de preposición", "après une préposition"), "La table sur laquelle… / Le projet auquel je pense."]] }],
    ["tip", bi("<i>Qui</i> va seguido de un verbo; <i>que</i> va seguido de un sujeto. <i>L'homme <b>qui</b> <u>parle</u></i> / <i>l'homme <b>que</b> <u>je</u> connais</i>.",
      "<i>Qui</i> est suivi d'un verbe ; <i>que</i> est suivi d'un sujet. <i>L'homme <b>qui</b> <u>parle</u></i> / <i>l'homme <b>que</b> <u>je</u> connais</i>.")],
    ["trap", bi("«El día <b>que</b>…» se dice <i>le jour <b>où</b></i>. Con <i>avoir besoin de, parler de, avoir peur de, être fier de, se souvenir de</i> se usa siempre <i>dont</i>.",
      "« El día <b>que</b>… » se dit <i>le jour <b>où</b></i>. Avec <i>avoir besoin de, parler de, avoir peur de, être fier de, se souvenir de</i>, on emploie toujours <i>dont</i>.")],
    ["rule", bi("<b>Contracciones de lequel:</b> <i>à + lequel = auquel, à + lesquels = auxquels, de + lequel = duquel</i>. Para personas se prefiere <i>qui</i>: <i>l'ami avec qui je travaille</i>.",
      "<b>Contractions de lequel :</b> <i>à + lequel = auquel, à + lesquels = auxquels, de + lequel = duquel</i>. Pour les personnes, on préfère <i>qui</i> : <i>l'ami avec qui je travaille</i>.")]
  ],
  vocab: [["parler de → dont", "hablar de"], ["avoir besoin de → dont", "necesitar"], ["avoir peur de → dont", "tener miedo de"], ["se souvenir de → dont", "acordarse de"], ["être fier de → dont", "estar orgulloso de"], ["avec lequel", "con el cual"], ["pour laquelle", "por la cual"], ["grâce auquel", "gracias al cual"], ["le jour où", "el día (en) que"], ["ce qui / ce que / ce dont", "lo que"]],
  examples: [
    ["La femme qui parle est ma professeure.", "La mujer que habla es mi profesora."],
    ["Le film que j'ai vu hier était génial.", "La película que vi ayer era genial."],
    ["C'est le livre dont je t'ai parlé.", "Es el libro del que te hablé."],
    ["Je me souviens du jour où je t'ai rencontré.", "Me acuerdo del día en que te conocí."],
    ["La ville où je suis né est au bord de la mer.", "La ciudad donde nací está junto al mar."],
    ["Voici l'ordinateur avec lequel je travaille.", "Este es el ordenador con el que trabajo."],
    ["Le projet auquel je pense est ambitieux.", "El proyecto en el que pienso es ambicioso."]
  ],
  links: [
    ["Le Point du FLE · Pronoms relatifs", LP + "pronomsrelatifs.htm", bi("Ejercicios de simples a compuestos.", "Exercices des simples aux composés.")],
    ["École suisse · Quiz progressif", "https://www.ecolesuisse-fle.fr/jeux-de-grammaire-quiz-progressif-sur-les-pronoms-relatifs", bi("Quiz por niveles.", "Quiz par niveaux.")],
    ["Le jeu des définitions", "https://www.lepointdufle.net/ressources_fle/pdf_pronoms_relatifs_jeu.htm", bi("Crucigrama para imprimir.", "Mots croisés à imprimer.")],
    ["Lingolia · Pronombres relativos", LG + "pronombres-determinantes/relativos", bi("Explicación en español.", "Explication en espagnol.")]
  ],
  games: [
    { type: "mcq", title: bi("¿Qué relativo?", "Quel relatif ?"), inst: bi("Elige el pronombre relativo correcto.", "Choisis le bon pronom relatif."), items: [
      { q: "C'est le film ___ je t'ai parlé.", o: ["dont", "que", "où"], why: bi("<i>Parler de</i> → dont.", "<i>Parler de</i> → dont.") },
      { q: "C'est la ville ___ je suis né.", o: ["où", "dont", "que"] },
      { q: "L'homme ___ attend là-bas est mon oncle.", o: ["qui", "que", "dont"] },
      { q: "Le gâteau ___ tu as fait est délicieux.", o: ["que", "qui", "dont"] },
      { q: "Le jour ___ il est parti, il pleuvait.", o: ["où", "que", "quand"] },
      { q: "C'est l'outil ___ j'ai besoin.", o: ["dont", "que", "duquel"] },
      { q: "La table sur ___ j'écris est vieille.", o: ["laquelle", "lequel", "qui"] },
      { q: "Le collègue ___ je travaille est sympa.", o: ["avec qui", "avec que", "dont"] },
      { q: "Les projets ___ je pense sont ambitieux.", o: ["auxquels", "dont", "que"], why: bi("<i>Penser à</i> → à + lesquels = auxquels.", "<i>Penser à</i> → à + lesquels = auxquels.") },
      { q: "Voilà la maison ___ elle est si fière.", o: ["dont", "que", "où"] }
    ] },
    { type: "match", title: bi("Une las dos mitades", "Relie les deux moitiés"), inst: bi("Toca el principio y luego el final que le corresponde.", "Touche le début puis la fin qui lui correspond."), pairs: [
      ["C'est l'actrice", "qui a gagné le prix."], ["Voici le pull", "que ma mère m'a tricoté."], ["C'est le quartier", "où j'ai grandi."], ["C'est un projet", "dont je suis très fier."], ["C'est la raison", "pour laquelle je suis parti."], ["C'est l'ami", "à qui j'ai prêté mon vélo."]
    ] }
  ]
});

L({
  id: "comparer-nier", name: "Comparer et nier", sub: bi("Comparativos, superlativos y negación", "Comparatifs, superlatifs et négation"),
  goal: bi("Comparar opciones y negar con precisión son habilidades básicas para argumentar y para contar lo que no pasó.",
    "Comparer des options et nier avec précision sont des compétences de base pour argumenter et raconter ce qui ne s'est pas passé."),
  theory: [
    ["rule", bi("<b>Comparativos:</b> <i>plus / aussi / moins</i> + adjetivo + <i>que</i> · <i>plus de / autant de / moins de</i> + nombre · verbo + <i>plus / autant / moins</i>.",
      "<b>Comparatifs :</b> <i>plus / aussi / moins</i> + adjectif + <i>que</i> · <i>plus de / autant de / moins de</i> + nom · verbe + <i>plus / autant / moins</i>.")],
    ["rule", bi("<b>Irregulares:</b> <i>bon → meilleur</i>, <i>bien → mieux</i>, <i>mauvais → pire</i>. Superlativo con artículo repetido: <i>la ville <b>la</b> plus belle du monde</i>. Progresión: <i>de plus en plus</i>.",
      "<b>Irréguliers :</b> <i>bon → meilleur</i>, <i>bien → mieux</i>, <i>mauvais → pire</i>. Superlatif avec article répété : <i>la ville <b>la</b> plus belle du monde</i>. Progression : <i>de plus en plus</i>.")],
    ["trap", bi("Nunca <s>plus bon</s> ni <s>plus bien</s>: se dice <i>meilleur</i> y <i>mieux</i>.", "Jamais <s>plus bon</s> ni <s>plus bien</s> : on dit <i>meilleur</i> et <i>mieux</i>.")],
    ["table", { h: bi(["Negación", "Español"], ["Négation", "Espagnol"]), r: [
      ["ne… plus", "ya no"], ["ne… jamais", "nunca"], ["ne… rien", "nada"], ["ne… personne", "nadie"], ["ne… aucun(e)", "ningún/ninguna"], ["ne… pas encore", "todavía no"], ["ne… que", "solo"], ["ne… ni… ni", "ni… ni"]] }],
    ["rule", bi("<b>Sujeto negativo:</b> <i>Personne n'est venu. Rien ne marche.</i>", "<b>Sujet négatif :</b> <i>Personne n'est venu. Rien ne marche.</i>")],
    ["trap", bi("En passé composé: <i>je n'ai <b>rien</b> vu</i> pero <i>je n'ai vu <b>personne</b></i>. Nunca <i>pas</i> junto a otro negativo: <s>je n'ai pas vu personne</s>.",
      "Au passé composé : <i>je n'ai <b>rien</b> vu</i> mais <i>je n'ai vu <b>personne</b></i>. Jamais <i>pas</i> avec un autre mot négatif : <s>je n'ai pas vu personne</s>.")],
    ["delf", bi("Escribe siempre el <i>ne</i> en tus producciones escritas.", "Écrivez toujours le <i>ne</i> dans vos productions écrites.")]
  ],
  vocab: [["plus… que", "más… que"], ["moins… que", "menos… que"], ["aussi… que", "tan… como"], ["autant de… que", "tanto(s)… como"], ["meilleur(e)", "mejor (adjetivo)"], ["mieux", "mejor (adverbio)"], ["pire", "peor"], ["de plus en plus", "cada vez más"], ["de moins en moins", "cada vez menos"], ["le/la plus… de", "el/la más… de"]],
  examples: [
    ["Lyon est moins grande que Paris.", "Lyon es menos grande que París."],
    ["Elle parle français mieux que moi.", "Ella habla francés mejor que yo."],
    ["C'est le meilleur restaurant du quartier.", "Es el mejor restaurante del barrio."],
    ["Il y a de plus en plus de vélos en ville.", "Hay cada vez más bicicletas en la ciudad."],
    ["Je n'ai rien vu, et je n'ai vu personne.", "No vi nada, y no vi a nadie."],
    ["Personne n'est venu à la réunion.", "Nadie vino a la reunión."],
    ["Je ne bois que de l'eau.", "Solo bebo agua."],
    ["Il ne mange ni viande ni poisson.", "No come ni carne ni pescado."]
  ],
  links: [
    ["Le Point du FLE · La comparaison", LP + "comparaison.htm", bi("Comparativos y superlativos.", "Comparatifs et superlatifs.")],
    ["Le Point du FLE · La négation", LP + "negation.htm", bi("Ejercicios de negación simple y compuesta.", "Exercices sur la négation simple et composée.")],
    ["Lingolia · Grados del adjetivo", LG + "adjetivos/grados", bi("Comparativo y superlativo en español.", "Comparatif et superlatif, expliqués en espagnol.")],
    ["Lingolia · Negación compuesta", LG + "oraciones/negativa-compuesta", bi("ne… plus, ne… jamais, ne… personne…", "ne… plus, ne… jamais, ne… personne…")]
  ],
  games: [
    { type: "mcq", title: bi("Compara y niega", "Compare et nie"), inst: bi("Elige la opción correcta.", "Choisis la bonne option."), items: [
      { q: "Ce gâteau est ___ que l'autre.", o: ["meilleur", "plus bon", "mieux"] },
      { q: "Tu chantes ___ que moi.", o: ["mieux", "meilleur", "plus bien"] },
      { q: "J'ai ___ livres que toi.", o: ["autant de", "aussi", "autant"] },
      { q: "C'est la ville ___ belle du monde.", o: ["la plus", "plus", "le plus"] },
      { q: "Je n'ai ___ vu.", o: ["rien", "personne", "pas rien"] },
      { q: "Je n'ai vu ___.", o: ["personne", "rien", "pas personne"] },
      { q: "Il ne fume ___ : il a arrêté l'année dernière.", o: ["plus", "jamais", "pas encore"] },
      { q: "Elle n'a ___ fini ; elle a encore besoin de temps.", o: ["pas encore", "plus", "jamais"] },
      { q: "___ ne marche dans cette maison !", o: ["Rien", "Pas rien", "Aucun"] },
      { q: "Je n'ai ___ idée.", o: ["aucune", "aucun", "rien"] }
    ] },
    { type: "order", title: bi("Ordena la frase negativa", "Remets la phrase négative dans l'ordre"), inst: bi("Atención a la posición de los negativos.", "Attention à la place des mots négatifs."), items: [
      ["Je|n'ai|jamais|vu|la|mer.", "Nunca he visto el mar."],
      ["Il|n'y|a|personne|ici.", "No hay nadie aquí."],
      ["Elle|ne|mange|que|des|légumes.", "Solo come verduras."],
      ["C'est|le|plus|beau|jour|de|ma|vie.", "Es el día más bonito de mi vida."]
    ] }
  ]
});

L({
  id: "determinants", name: "Indéfinis, démonstratifs, possessifs", sub: bi("Determinantes y pronombres", "Déterminants et pronoms"),
  goal: bi("Palabras pequeñas y muy frecuentes: <i>chaque, celui, le mien</i>… Usarlas bien evita repeticiones y errores de concordancia.",
    "De petits mots très fréquents : <i>chaque, celui, le mien</i>… Bien les employer évite les répétitions et les erreurs d'accord."),
  theory: [
    ["rule", bi("<b>Indefinidos:</b> <i>chaque</i> (adj.) / <i>chacun</i> (pron.), <i>quelques</i> / <i>quelques-uns</i>, <i>plusieurs, certains, tout / tous / toute / toutes, aucun, quelqu'un, quelque chose, n'importe qui / quoi / où</i>.",
      "<b>Indéfinis :</b> <i>chaque</i> (adj.) / <i>chacun</i> (pron.), <i>quelques</i> / <i>quelques-uns</i>, <i>plusieurs, certains, tout / tous / toute / toutes, aucun, quelqu'un, quelque chose, n'importe qui / quoi / où</i>.")],
    ["rule", bi("<b>Demostrativos:</b> <i>ce / cet / cette / ces</i>; pronombres <i>celui, celle, ceux, celles</i> + <i>-ci / -là</i>, + <i>qui / que / dont</i>, + <i>de</i>: <i>Celui que tu m'as offert. Celle de Julie.</i>",
      "<b>Démonstratifs :</b> <i>ce / cet / cette / ces</i> ; pronoms <i>celui, celle, ceux, celles</i> + <i>-ci / -là</i>, + <i>qui / que / dont</i>, + <i>de</i> : <i>Celui que tu m'as offert. Celle de Julie.</i>")],
    ["rule", bi("<b>Posesivos (pronombres):</b> <i>le mien, la mienne, les miens · le tien… · le sien… · le nôtre, le vôtre, le leur</i>.",
      "<b>Pronoms possessifs :</b> <i>le mien, la mienne, les miens · le tien… · le sien… · le nôtre, le vôtre, le leur</i>.")],
    ["trap", bi("El posesivo concuerda con la cosa poseída, no con el poseedor: <i>sa voiture</i> (el coche de Paul). Ante femenino con vocal: <i>mon amie, son école</i>.",
      "Le possessif s'accorde avec l'objet possédé, pas avec le possesseur : <i>sa voiture</i> (celle de Paul). Devant un féminin qui commence par une voyelle : <i>mon amie, son école</i>.")]
  ],
  vocab: [["chaque", "cada"], ["chacun(e)", "cada uno/a"], ["quelques", "algunos/as"], ["quelques-uns", "algunos (pron.)"], ["plusieurs", "varios/as"], ["certains", "ciertos, algunos"], ["tout le monde", "todo el mundo"], ["n'importe qui", "cualquiera"], ["n'importe quoi", "cualquier cosa, tonterías"], ["celui-ci / celle-là", "este / aquella"], ["le mien / la mienne", "el mío / la mía"], ["le nôtre / les leurs", "el nuestro / los suyos"]],
  examples: [
    ["Chaque élève a son livre ; chacun travaille seul.", "Cada alumno tiene su libro; cada uno trabaja solo."],
    ["Quelques amis sont venus ; quelques-uns sont restés tard.", "Vinieron algunos amigos; algunos se quedaron hasta tarde."],
    ["Tu préfères cette veste-ci ou celle-là ?", "¿Prefieres esta chaqueta o aquella?"],
    ["Celui que tu m'as offert est mon préféré.", "El que me regalaste es mi favorito."],
    ["Ce n'est pas mon stylo, c'est le tien.", "No es mi bolígrafo, es el tuyo."],
    ["Ne dis pas n'importe quoi !", "¡No digas tonterías!"]
  ],
  links: [
    ["Le Point du FLE · Possessifs", LP + "possessifs.htm", bi("Adjetivos y pronombres posesivos.", "Adjectifs et pronoms possessifs.")],
    ["Le Point du FLE · Démonstratifs", LP + "demonstratifs.htm", bi("Adjetivos y pronombres demostrativos.", "Adjectifs et pronoms démonstratifs.")],
    ["Lingolia · Indefinidos", LG + "pronombres-determinantes/indefinidos", bi("Explicación en español.", "Explication en espagnol.")],
    ["Lingolia · Demostrativos", LG + "pronombres-determinantes/demostrativos", bi("Explicación en español.", "Explication en espagnol.")]
  ],
  games: [
    { type: "mcq", title: bi("Elige el determinante", "Choisis le déterminant"), inst: bi("Completa con la forma correcta.", "Complète avec la bonne forme."), items: [
      { q: "___ étudiant doit s'inscrire.", o: ["Chaque", "Chacun", "Tous"] },
      { q: "Ce livre-ci est à moi. ___ est à toi.", o: ["Celui-là", "Celle-là", "Ce-là"] },
      { q: "C'est ta valise ? Oui, c'est ___.", o: ["la mienne", "le mien", "ma"] },
      { q: "Pierre adore ___ sœur.", o: ["sa", "son", "leur"] },
      { q: "Je te présente ___ amie Sophie.", o: ["mon", "ma", "m'"], why: bi("Femenino que empieza por vocal → <i>mon</i>.", "Féminin qui commence par une voyelle → <i>mon</i>.") },
      { q: "Ils ont vendu leur maison ; nous gardons ___.", o: ["la nôtre", "notre", "le nôtre"] },
      { q: "Il invite ___ : même des inconnus !", o: ["n'importe qui", "quelqu'un", "chacun"] },
      { q: "___ les jours, je marche une heure.", o: ["Tous", "Toutes", "Tout"] },
      { q: "La voiture de Marc et ___ de Julie.", o: ["celle", "celui", "ceux"] }
    ] },
    { type: "match", title: bi("Posesivos", "Possessifs"), inst: bi("Une cada pronombre con su traducción.", "Relie chaque pronom à sa traduction espagnole."), pairs: [["le mien", "el mío"], ["la tienne", "la tuya"], ["les siens", "los suyos (de él/ella)"], ["le nôtre", "el nuestro"], ["la vôtre", "la vuestra / la suya (usted)"], ["les leurs", "los suyos (de ellos)"]] }
  ]
});
