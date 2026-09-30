/* ---------------- Module D ---------------- */
L({
  id: "subjonctif", name: "Le subjonctif présent", sub: bi("Voluntad, obligación, duda y emoción", "Volonté, obligation, doute et émotion"),
  goal: bi("El subjuntivo es la marca de la subjetividad. Pero ojo: en francés se usa menos que en español, y ahí están las trampas.",
    "Le subjonctif est la marque de la subjectivité. Attention : on l'emploie moins qu'en espagnol, et c'est là que se trouvent les pièges."),
  theory: [
    ["rule", bi("<b>Formación:</b> raíz de <i>ils</i> en presente + <i>-e, -es, -e, -ent</i>; para <i>nous</i> y <i>vous</i> se toma la forma del imparfait (<i>que nous prenions</i>).",
      "<b>Formation :</b> radical de <i>ils</i> au présent + <i>-e, -es, -e, -ent</i> ; pour <i>nous</i> et <i>vous</i>, on reprend la forme de l'imparfait (<i>que nous prenions</i>).")],
    ["table", { h: bi(["Verbo", "que je", "que nous"], ["Verbe", "que je", "que nous"]), r: [
      ["être", "sois", "soyons"], ["avoir", "aie", "ayons"], ["aller", "aille", "allions"], ["faire", "fasse", "fassions"], ["pouvoir", "puisse", "puissions"], ["savoir", "sache", "sachions"], ["vouloir", "veuille", "voulions"], ["falloir", "qu'il faille", "—"]] }],
    ["rule", bi("<b>¿Cuándo?</b> Después de <i>que</i>, cuando la principal expresa un juicio subjetivo y hay <b>dos sujetos distintos</b>.",
      "<b>Quand l'employer ?</b> Après <i>que</i>, quand la principale exprime un jugement subjectif et qu'il y a <b>deux sujets différents</b>.")],
    ["tip", bi("<b>V.O.D.E.</b> — <b>V</b>oluntad (<i>vouloir que, souhaiter que, préférer que</i>) · <b>O</b>bligación (<i>il faut que, il est important que</i>) · <b>D</b>uda (<i>douter que, je ne pense pas que</i>) · <b>E</b>moción (<i>être content que, avoir peur que, c'est dommage que</i>).",
      "<b>V.O.D.E.</b> — <b>V</b>olonté (<i>vouloir que, souhaiter que, préférer que</i>) · <b>O</b>bligation (<i>il faut que, il est important que</i>) · <b>D</b>oute (<i>douter que, je ne pense pas que</i>) · <b>É</b>motion (<i>être content que, avoir peur que, c'est dommage que</i>).")],
    ["rule", bi("<b>Conjunciones + subjuntivo:</b> <i>pour que, afin que, bien que, quoique, avant que, jusqu'à ce que, à moins que, sans que, à condition que</i>.",
      "<b>Conjonctions + subjonctif :</b> <i>pour que, afin que, bien que, quoique, avant que, jusqu'à ce que, à moins que, sans que, à condition que</i>.")],
    ["trap", bi("Trampas para hispanohablantes:<ul><li><i>Espérer que</i> + indicativo: <i>J'espère que tu <b>vas</b> bien</i> («que estés»).</li><li><i>Je pense que</i> + indicativo; <i>je ne pense pas que</i> + subjuntivo.</li><li>Un solo sujeto → infinitivo: <i>Je veux partir</i> (no <s>que je parte</s>).</li><li><i>Même si</i> + indicativo. <i>Avant que</i> + subjuntivo, pero <i>après que</i> + indicativo.</li></ul>",
      "Pièges pour hispanophones :<ul><li><i>Espérer que</i> + indicatif : <i>J'espère que tu <b>vas</b> bien</i> (en espagnol : « que estés »).</li><li><i>Je pense que</i> + indicatif ; <i>je ne pense pas que</i> + subjonctif.</li><li>Un seul sujet → infinitif : <i>Je veux partir</i> (pas <s>que je parte</s>).</li><li><i>Même si</i> + indicatif. <i>Avant que</i> + subjonctif, mais <i>après que</i> + indicatif.</li></ul>")],
    ["delf", bi("Cinco frases ancla para el DELF: <i>Il faut que… · Je ne pense pas que… · Bien que… · Pour que… · Il est important que…</i>",
      "Cinq phrases-ancres pour le DELF : <i>Il faut que… · Je ne pense pas que… · Bien que… · Pour que… · Il est important que…</i>")]
  ],
  vocab: [["il faut que", "hace falta que"], ["il est important que", "es importante que"], ["je veux que", "quiero que"], ["je souhaite que", "deseo que"], ["je doute que", "dudo que"], ["je ne pense pas que", "no creo que"], ["je suis content que", "me alegra que"], ["j'ai peur que", "temo que"], ["c'est dommage que", "es una pena que"], ["bien que", "aunque"], ["pour que", "para que"], ["avant que", "antes de que"], ["jusqu'à ce que", "hasta que"], ["sans que", "sin que"]],
  examples: [
    ["Il faut que tu fasses tes devoirs.", "Tienes que hacer tus deberes."],
    ["Je ne pense pas que ce soit une bonne idée.", "No creo que sea una buena idea."],
    ["Bien qu'il pleuve, on sort.", "Aunque llueve, salimos."],
    ["Je suis content que tu sois là.", "Me alegra que estés aquí."],
    ["Parle plus fort pour que tout le monde t'entende.", "Habla más alto para que todos te oigan."],
    ["J'espère que tu vas bien.", "Espero que estés bien. (¡indicativo!)"]
  ],
  links: [
    ["Le Point du FLE · Le subjonctif", LP + "subjonctif.htm", bi("Formación, usos y contraste con el indicativo.", "Formation, emplois et opposition avec l'indicatif.")],
    ["Lingolia · Le subjonctif", LG + "verbos/subjonctif", bi("Explicación en español.", "Explication en espagnol.")],
    ["Ressources FLE · Activité inductive B1", "https://www.ressourcesfle.fr/fle-b1-exercice-grammaire-subjonctif/", bi("Descubre la regla a partir de ejemplos.", "Découvrir la règle à partir d'exemples.")],
    ["Vive le FLE · Subjonctif présent", "https://vivelefle.jimdofree.com/niveau-b1/conjugaison-b1/subjonctif-pr%C3%A9sent/", bi("Lección + ejercicio.", "Leçon + exercice.")],
    ["digiSchool · Quiz B1", "https://www.digischool.fr/fle/b1-niveau-independant/revisions", bi("Quiz de repaso (algunos premium).", "Quiz de révision (certains premium).")]
  ],
  games: [
    { type: "sort", title: bi("¿Subjuntivo, indicativo o infinitivo?", "Subjonctif, indicatif ou infinitif ?"), inst: bi("¿Qué modo sigue a cada expresión?", "Quel mode suit chaque expression ?"), buckets: ["Subjonctif", "Indicatif", "Infinitif"], items: [
      ["Il faut que tu…", 0], ["J'espère que tu…", 1], ["Je pense que…", 1], ["Je ne pense pas que…", 0], ["Bien que…", 0], ["Même si…", 1], ["Après que…", 1], ["Avant que…", 0], [bi("Je veux… (mismo sujeto)", "Je veux… (même sujet)"), 2], ["Pour que…", 0], ["Je suis sûr que…", 1], ["C'est dommage que…", 0], [bi("Avant de… (mismo sujeto)", "Avant de… (même sujet)"), 2]
    ] },
    { type: "fill", title: bi("Conjuga en subjuntivo (o no)", "Conjugue au subjonctif (ou pas)"), inst: bi("Atención: una de las frases lleva indicativo.", "Attention : une des phrases demande l'indicatif."), items: [
      { q: "Il faut que tu ___. " + H("venir"), a: [["viennes"]] },
      { q: "Bien qu'elle ___ fatiguée, elle travaille. " + H("être"), a: [["soit"]] },
      { q: "Il faut que nous ___ les courses. " + H("faire"), a: [["fassions"]] },
      { q: "Je veux que tu ___ la vérité. " + H("savoir"), a: [["saches"]] },
      { q: "C'est dommage qu'il ___. " + H("pleuvoir"), a: [["pleuve"]] },
      { q: "J'espère que vous ___ bien. " + H("aller"), a: [["allez"]], why: bi("<i>Espérer que</i> + indicativo.", "<i>Espérer que</i> + indicatif.") },
      { q: "Je travaille pour que mes enfants ___ étudier. " + H("pouvoir"), a: [["puissent"]] },
      { q: "Attends jusqu'à ce que je ___. " + H("revenir"), a: [["revienne"]] },
      { q: "Je doute qu'ils ___ raison. " + H("avoir"), a: [["aient"]] }
    ] }
  ]
});

L({
  id: "imperatif", name: "L'impératif", sub: bi("Dar órdenes, consejos e instrucciones", "Donner des ordres, des conseils et des consignes"),
  goal: bi("Tres personas, sin sujeto, y un juego de pronombres que cambia de lugar según la frase sea afirmativa o negativa.",
    "Trois personnes, sans sujet, et des pronoms qui changent de place selon que la phrase est affirmative ou négative."),
  theory: [
    ["rule", bi("<b>Tres personas (tu, nous, vous), sin pronombre sujeto.</b> Se forma con el presente: <i>tu prends → Prends ! nous prenons → Prenons ! vous prenez → Prenez !</i>",
      "<b>Trois personnes (tu, nous, vous), sans pronom sujet.</b> On le forme à partir du présent : <i>tu prends → Prends ! nous prenons → Prenons ! vous prenez → Prenez !</i>")],
    ["rule", bi("Los verbos en <i>-er</i> (y <i>aller</i>) pierden la <i>-s</i> en <i>tu</i>: <i>Parle ! Va !</i> — salvo delante de <i>y</i> / <i>en</i>: <i>Vas-y ! Manges-en !</i>",
      "Les verbes en <i>-er</i> (et <i>aller</i>) perdent le <i>-s</i> à la 2e personne du singulier : <i>Parle ! Va !</i> — sauf devant <i>y</i> / <i>en</i> : <i>Vas-y ! Manges-en !</i>")],
    ["table", { h: bi(["Irregulares", "tu", "nous", "vous"], ["Irréguliers", "tu", "nous", "vous"]), r: [["être", "sois", "soyons", "soyez"], ["avoir", "aie", "ayons", "ayez"], ["savoir", "sache", "sachons", "sachez"], ["vouloir", "—", "—", "veuillez"]] }],
    ["rule", bi("<b>Pronombres:</b> en afirmativo van después del verbo con guion (<i>Donne-le-moi !</i>, <i>me → moi, te → toi</i>); en negativo van antes, en el orden normal (<i>Ne me le donne pas !</i>).",
      "<b>Pronoms :</b> à l'affirmatif, ils se placent après le verbe avec un trait d'union (<i>Donne-le-moi !</i>, <i>me → moi, te → toi</i>) ; au négatif, ils se placent avant, dans l'ordre normal (<i>Ne me le donne pas !</i>).")],
    ["rule", bi("<b>Pronominales:</b> <i>Lève-toi ! Levons-nous ! Levez-vous !</i> — negativo: <i>Ne te lève pas !</i>", "<b>Verbes pronominaux :</b> <i>Lève-toi ! Levons-nous ! Levez-vous !</i> — au négatif : <i>Ne te lève pas !</i>")],
    ["delf", bi("En la carta formal: <i>Veuillez trouver ci-joint…</i>, <i>N'hésitez pas à me contacter.</i>", "Dans la lettre formelle : <i>Veuillez trouver ci-joint…</i>, <i>N'hésitez pas à me contacter.</i>")]
  ],
  vocab: [["Vas-y !", "¡Adelante! ¡Ve!"], ["Allons-y !", "¡Vamos!"], ["Tiens !", "¡Toma! / ¡Mira!"], ["Dépêche-toi !", "¡Date prisa!"], ["Ne t'inquiète pas", "No te preocupes"], ["Assieds-toi / Asseyez-vous", "Siéntate / Siéntese"], ["Sois sage", "Pórtate bien"], ["Veuillez…", "Sírvase…"], ["N'hésitez pas à…", "No dude en…"], ["Laisse tomber !", "¡Déjalo!"]],
  examples: [
    ["Parle plus lentement, s'il te plaît.", "Habla más despacio, por favor."],
    ["Donne-le-moi ! Ne me le donne pas !", "¡Dámelo! ¡No me lo des!"],
    ["Dépêchez-vous, le train part !", "¡Dense prisa, el tren sale!"],
    ["Ne t'inquiète pas, tout va bien.", "No te preocupes, todo va bien."],
    ["Soyez prudents sur la route.", "Tengan cuidado en la carretera."],
    ["Veuillez trouver ci-joint mon CV.", "Adjunto mi CV."],
    ["Vas-y, tu peux le faire !", "¡Vamos, tú puedes!"]
  ],
  links: [
    ["Le Point du FLE · L'impératif", LP + "imperatif.htm", bi("Formación, pronombres y ejercicios.", "Formation, pronoms et exercices.")],
    ["Lingolia · L'impératif", LG + "verbos/imperatif", bi("Explicación en español.", "Explication en espagnol.")],
    ["Le Point du FLE · Place des pronoms", "https://www.lepointdufle.net/ressources_fle/place_des_pronoms.htm", bi("Practica el orden de los pronombres.", "Pratiquer l'ordre des pronoms.")]
  ],
  games: [
    { type: "mcq", title: bi("Da la orden", "Donne l'ordre"), inst: bi("Elige la forma correcta del imperativo.", "Choisis la bonne forme de l'impératif."), items: [
      { q: "(tu, parler) ___ plus fort !", o: ["Parle", "Parles", "Tu parles"] },
      { q: "(tu, aller) ___-y !", o: ["Vas", "Va", "Allez"], why: bi("Delante de <i>y</i>, la <i>-s</i> vuelve.", "Devant <i>y</i>, le <i>-s</i> revient.") },
      { q: "(vous, être) ___ patients.", o: ["Soyez", "Êtes", "Soyiez"] },
      { q: "(tu, se lever) ___ !", o: ["Lève-toi", "Te lève", "Lève-te"] },
      { q: bi("Versión negativa de « Lève-toi ! »", "Forme négative de « Lève-toi ! »"), o: ["Ne te lève pas !", "Ne lève-toi pas !", "Lève-toi pas !"] },
      { q: "Donne le livre à moi → ___ !", o: ["Donne-le-moi", "Donne-moi-le", "Me le donne"] },
      { q: "(tu, avoir) N'___ pas peur.", o: ["aie", "as", "aies"] },
      { q: bi("En una carta formal: « ___ agréer mes salutations distinguées. »", "Dans une lettre formelle : « ___ agréer mes salutations distinguées. »"), o: ["Veuillez", "Voulez", "Voulez-vous"] }
    ] },
    { type: "order", title: bi("Ordena la orden", "Remets l'ordre dans l'ordre"), inst: bi("Construye cada frase en imperativo.", "Construis chaque phrase à l'impératif."), items: [
      ["Ne|me|le|donne|pas.", "No me lo des."],
      ["Dis-lui|la|vérité.", "Dile la verdad."],
      ["Ne|t'inquiète|pas|pour|moi.", "No te preocupes por mí."],
      ["Asseyez-vous|ici,|s'il|vous|plaît.", "Siéntese aquí, por favor."]
    ] }
  ]
});

L({
  id: "connecteurs", name: "Les connecteurs logiques", sub: bi("Causa, consecuencia, oposición, concesión, fin", "Cause, conséquence, opposition, concession, but"),
  goal: bi("Los conectores estructuran tu pensamiento. En el DELF, la variedad de conectores es uno de los criterios de evaluación de la producción escrita y oral.",
    "Les connecteurs structurent la pensée. Au DELF, leur variété est l'un des critères d'évaluation de la production écrite et orale."),
  theory: [
    ["table", { h: bi(["Relación", "+ indicativo", "+ subjuntivo", "+ nombre o infinitivo"], ["Relation", "+ indicatif", "+ subjonctif", "+ nom ou infinitif"]), r: [
      [bi("Causa", "Cause"), bi("parce que, puisque, comme (inicio), car", "parce que, puisque, comme (début de phrase), car"), "—", bi("grâce à (+), à cause de (−), en raison de", "grâce à (+), à cause de (−), en raison de")],
      [bi("Consecuencia", "Conséquence"), "donc, c'est pourquoi, par conséquent, si bien que, tellement… que", "—", "—"],
      [bi("Fin", "But"), "—", "pour que, afin que", bi("pour, afin de + inf.", "pour, afin de + inf.")],
      [bi("Oposición", "Opposition"), "alors que, tandis que, en revanche, par contre", "—", "au lieu de"],
      [bi("Concesión", "Concession"), "même si, pourtant, cependant", "bien que, quoique", bi("malgré + nombre", "malgré + nom")],
      [bi("Tiempo", "Temps"), "quand, pendant que, dès que, après que", "avant que, jusqu'à ce que", bi("avant de + inf., après avoir/être + part.", "avant de + inf., après avoir/être + participe")],
      [bi("Condición", "Condition"), bi("si, au cas où (+ cond.)", "si, au cas où (+ conditionnel)"), "à condition que, à moins que", "en cas de"]] }],
    ["trap", bi("«Después de comer» = <i>après avoir mangé</i> (infinitivo pasado), nunca <s>après manger</s>.", "« Después de comer » se dit <i>après avoir mangé</i> (infinitif passé), jamais <s>après manger</s>.")],
    ["tip", bi("<i>Comme</i> causal va al inicio de la frase; <i>car</i> nunca empieza una frase. <i>Grâce à</i> para causas positivas, <i>à cause de</i> para negativas.",
      "<i>Comme</i> se place en début de phrase ; <i>car</i> ne commence jamais une phrase. <i>Grâce à</i> pour une cause positive, <i>à cause de</i> pour une cause négative.")],
    ["rule", bi("<b>Para estructurar un texto:</b> introducir — <i>tout d'abord</i> · añadir — <i>de plus, en outre</i> · ejemplificar — <i>par exemple</i> · oponer — <i>cependant, en revanche</i> · concluir — <i>pour conclure, bref</i>.",
      "<b>Pour structurer un texte :</b> introduire — <i>tout d'abord</i> · ajouter — <i>de plus, en outre</i> · donner un exemple — <i>par exemple</i> · opposer — <i>cependant, en revanche</i> · conclure — <i>pour conclure, bref</i>.")]
  ],
  vocab: [["parce que", "porque"], ["puisque", "ya que"], ["comme", "como (causal)"], ["grâce à", "gracias a"], ["à cause de", "por culpa de"], ["donc", "así que, por lo tanto"], ["c'est pourquoi", "por eso"], ["par conséquent", "por consiguiente"], ["alors que", "mientras que"], ["en revanche", "en cambio"], ["pourtant", "sin embargo"], ["cependant", "no obstante"], ["malgré", "a pesar de"], ["afin de", "con el fin de"], ["tout d'abord", "ante todo"], ["de plus / en outre", "además"], ["bref", "en resumen"]],
  examples: [
    ["Comme il pleuvait, nous sommes restés à la maison.", "Como llovía, nos quedamos en casa."],
    ["J'ai réussi grâce à mon professeur.", "Aprobé gracias a mi profesor."],
    ["Le vol a été annulé à cause de la neige.", "El vuelo fue cancelado por la nieve."],
    ["Il était malade, pourtant il est venu travailler.", "Estaba enfermo; sin embargo, vino a trabajar."],
    ["Malgré la pluie, nous sommes sortis.", "A pesar de la lluvia, salimos."],
    ["Elle aime la ville alors que son mari préfère la campagne.", "A ella le gusta la ciudad, mientras que su marido prefiere el campo."],
    ["Après avoir mangé, nous avons fait une promenade.", "Después de comer, dimos un paseo."]
  ],
  links: [
    ["Le Point du FLE · Relations logiques", LP + "relationslogiques.htm", bi("Con juegos de LearningApps.", "Avec des jeux LearningApps.")],
    ["Vocaverb · Cause et conséquence B1", "https://vocaverb.com/fr/grammaire-fr/exercices-b1-exprimer-la-cause-et-la-consequence-en-francais-pratique-et-corriges/", bi("Ejercicios corregidos.", "Exercices corrigés.")],
    ["Lingolia · Conjunciones", LG + "conjunciones", bi("Tablas de conjunciones en español.", "Tableaux des conjonctions, expliqués en espagnol.")],
    ["Lingolia · Oraciones circunstanciales", LG + "oraciones/compuestas/oraciones-circunstanciales", bi("Causa, consecuencia, fin, concesión…", "Cause, conséquence, but, concession…")]
  ],
  games: [
    { type: "sort", title: bi("Clasifica los conectores", "Classe les connecteurs"), inst: bi("¿Qué relación expresa cada conector?", "Quelle relation exprime chaque connecteur ?"), buckets: [bi("Causa", "Cause"), bi("Consecuencia", "Conséquence"), bi("Oposición / concesión", "Opposition / concession"), bi("Fin", "But")], items: [
      ["parce que", 0], ["puisque", 0], ["grâce à", 0], ["à cause de", 0], ["donc", 1], ["par conséquent", 1], ["si bien que", 1], ["c'est pourquoi", 1], ["pourtant", 2], ["malgré", 2], ["bien que", 2], ["alors que", 2], ["pour que", 3], ["afin de", 3]
    ] },
    { type: "mcq", title: bi("El conector justo", "Le bon connecteur"), inst: bi("Elige el conector que completa la frase.", "Choisis le connecteur qui complète la phrase."), items: [
      { q: "___ la pluie, nous sommes sortis.", o: ["Malgré", "Bien que", "Pourtant"] },
      { q: "Je suis en retard ___ des embouteillages.", o: ["à cause", "grâce", "parce que"], why: bi("<i>à cause de + les = à cause des</i>.", "<i>à cause de + les = à cause des</i>.") },
      { q: "___ il faisait beau, on a mangé dehors.", o: ["Comme", "Car", "Donc"] },
      { q: "Je travaille ___ gagner ma vie.", o: ["pour", "pour que", "afin que"] },
      { q: "___ avoir fini, il est sorti.", o: ["Après", "Avant", "Après de"] },
      { q: "Il est riche, ___ il n'est pas heureux.", o: ["pourtant", "donc", "car"] },
      { q: "Bien qu'il ___ tard, je continue.", o: ["soit", "est", "sera"] },
      { q: "J'ai réussi ___ tes conseils.", o: ["grâce à", "à cause de", "malgré"] }
    ] }
  ]
});

L({
  id: "mise-en-relief", name: "Mise en relief et nominalisation", sub: bi("Destacar ideas y transformar verbos en nombres", "Mettre en valeur et transformer les verbes en noms"),
  goal: bi("Dos recursos de estilo B1: resaltar lo importante (<i>C'est moi qui…</i>) y condensar frases en titulares (<i>Ouverture du musée en mai</i>).",
    "Deux outils de style du B1 : mettre en valeur l'essentiel (<i>C'est moi qui…</i>) et condenser une phrase en titre (<i>Ouverture du musée en mai</i>)."),
  theory: [
    ["table", { h: bi(["Estructura", "Ejemplo"], ["Structure", "Exemple"]), r: [
      ["C'est… qui", "C'est moi qui ai organisé la fête."],
      ["C'est… que", "C'est à Lyon que j'ai étudié."],
      ["Ce qui…, c'est…", "Ce qui me plaît, c'est l'ambiance."],
      ["Ce que…, c'est…", "Ce que je veux, c'est voyager."],
      ["Ce dont…, c'est…", "Ce dont j'ai besoin, c'est de repos."]] }],
    ["trap", bi("El verbo concuerda con el pronombre: <i>c'est moi qui <b>ai</b>…, c'est nous qui <b>sommes</b>…</i>", "Le verbe s'accorde avec le pronom : <i>c'est moi qui <b>ai</b>…, c'est nous qui <b>sommes</b>…</i>")],
    ["table", { h: bi(["Sufijo", "Ejemplo", "Género"], ["Suffixe", "Exemple", "Genre"]), r: [
      ["-tion / -sion", "augmenter → l'augmentation", bi("femenino", "féminin")],
      ["-ment", "changer → le changement", bi("masculino", "masculin")],
      ["-age", "nettoyer → le nettoyage", bi("masculino", "masculin")],
      ["-ure", "ouvrir → l'ouverture", bi("femenino", "féminin")],
      ["-ée", "arriver → l'arrivée", bi("femenino", "féminin")],
      [bi("adj. → -té / -esse", "adj. → -té / -esse"), "libre → la liberté ; jeune → la jeunesse", bi("femenino", "féminin")]] }],
    ["delf", bi("La nominalización aparece en titulares de prensa (comprensión escrita) y ayuda a resumir: <i>Le musée ouvrira en mai</i> → <i>Ouverture du musée en mai</i>.",
      "La nominalisation apparaît dans les titres de presse (compréhension écrite) et aide à résumer : <i>Le musée ouvrira en mai</i> → <i>Ouverture du musée en mai</i>.")]
  ],
  vocab: [["augmenter → l'augmentation", "aumento"], ["changer → le changement", "cambio"], ["nettoyer → le nettoyage", "limpieza"], ["ouvrir → l'ouverture", "apertura"], ["fermer → la fermeture", "cierre"], ["arriver → l'arrivée", "llegada"], ["partir → le départ", "salida"], ["vendre → la vente", "venta"], ["choisir → le choix", "elección"], ["libre → la liberté", "libertad"], ["jeune → la jeunesse", "juventud"], ["décider → la décision", "decisión"]],
  examples: [
    ["C'est moi qui ai organisé la fête.", "Fui yo quien organizó la fiesta."],
    ["C'est à Lyon que j'ai étudié.", "Fue en Lyon donde estudié."],
    ["Ce qui me plaît, c'est l'ambiance.", "Lo que me gusta es el ambiente."],
    ["Ce dont j'ai besoin, c'est de repos.", "Lo que necesito es descanso."],
    ["C'est nous qui avons gagné !", "¡Somos nosotros quienes ganamos!"],
    ["Fermeture de la piscine municipale en août.", "Cierre de la piscina municipal en agosto."]
  ],
  links: [
    ["Le FLE pour les curieux · Guide B1", "https://leflepourlescurieux.fr/guide-travail-b1/", bi("Guía con ejercicios autocorregibles.", "Guide avec exercices autocorrectifs.")],
    ["Le Point du FLE", "https://www.lepointdufle.net/", bi("Busca «mise en relief» y «nominalisation» en su repertorio.", "Cherchez « mise en relief » et « nominalisation » dans le répertoire.")],
    ["Lingolia · Género de los sustantivos", LG + "sustantivos/genero", bi("Reglas del género por terminación.", "Règles du genre selon la terminaison.")]
  ],
  games: [
    { type: "match", title: bi("Verbo ↔ nombre", "Verbe ↔ nom"), inst: bi("Une cada verbo con su nominalización.", "Relie chaque verbe à sa nominalisation."), pairs: [["augmenter", "l'augmentation"], ["changer", "le changement"], ["nettoyer", "le nettoyage"], ["ouvrir", "l'ouverture"], ["arriver", "l'arrivée"], ["partir", "le départ"], ["vendre", "la vente"], ["choisir", "le choix"]] },
    { type: "mcq", title: bi("Pon el foco", "Mets en relief"), inst: bi("Elige la forma correcta.", "Choisis la bonne forme."), items: [
      { q: "C'est moi qui ___ organisé la fête.", o: ["ai", "a", "avons"] },
      { q: "___ me plaît, c'est l'ambiance.", o: ["Ce qui", "Ce que", "Ce dont"] },
      { q: "___ j'ai besoin, c'est de repos.", o: ["Ce dont", "Ce que", "Ce qui"] },
      { q: "___ je veux, c'est voyager.", o: ["Ce que", "Ce qui", "Ce dont"] },
      { q: "C'est à Lyon ___ j'ai étudié.", o: ["que", "qui", "où"] },
      { q: "C'est nous qui ___ en retard.", o: ["sommes", "sont", "est"] },
      { q: bi("Nominalización de « libre »:", "Nominalisation de « libre » :"), o: ["la liberté", "le libreté", "la librerie"] },
      { q: bi("« Le musée ouvrira en mai » → titular:", "« Le musée ouvrira en mai » → titre :"), o: ["Ouverture du musée en mai", "Ouvrir le musée en mai", "Le musée ouvert en mai"] }
    ] }
  ]
});

/* ---------------- Module E ---------------- */
L({
  id: "gerondif", name: "Le gérondif et le participe présent", sub: bi("en + -ant: simultaneidad, modo, condición", "en + -ant : simultanéité, manière, condition"),
  goal: bi("El gerundio francés no es el gerundio español: no sirve para «estoy comiendo», pero sí para «al entrar» o «aprendió viendo series».",
    "Le gérondif français n'est pas le gérondif espagnol : il ne sert pas à dire « estoy comiendo », mais il traduit « al entrar » ou « aprendió viendo series »."),
  theory: [
    ["rule", bi("<b>Formación:</b> raíz de <i>nous</i> + <i>-ant</i> (<i>nous parlons → parlant</i>). Irregulares: <i>étant, ayant, sachant</i>.",
      "<b>Formation :</b> radical de <i>nous</i> + <i>-ant</i> (<i>nous parlons → parlant</i>). Irréguliers : <i>étant, ayant, sachant</i>.")],
    ["table", { h: ["Gérondif (en + -ant)", "Participe présent (-ant)"], r: [
      [bi("Mismo sujeto; simultaneidad, modo, condición", "Même sujet ; simultanéité, manière, condition"), bi("Sustituye a qui + verbo; registro escrito", "Remplace qui + verbe ; registre écrit")],
      ["Elle écoute la radio en cuisinant.", "Les étudiants ayant un diplôme…"]] }],
    ["tip", bi("«Al + infinitivo» en español = <i>en + -ant</i>: <i>al entrar = en entrant</i>. Para marcar oposición: <i>tout en</i> + gerundio (<i>Il sourit tout en étant triste</i>).",
      "« Al + infinitivo » en espagnol = <i>en + -ant</i> : <i>al entrar = en entrant</i>. Pour marquer l'opposition : <i>tout en</i> + gérondif (<i>Il sourit tout en étant triste</i>).")],
    ["trap", bi("«Pasé el día leyendo» = <i>J'ai passé la journée <b>à lire</b></i>. «Sigo estudiando» = <i>Je continue <b>à étudier</b></i>. «Estoy comiendo» = <i>Je suis en train de manger</i>.",
      "« Pasé el día leyendo » = <i>J'ai passé la journée <b>à lire</b></i>. « Sigo estudiando » = <i>Je continue <b>à étudier</b></i>. « Estoy comiendo » = <i>Je suis en train de manger</i>.")]
  ],
  vocab: [["en entrant", "al entrar"], ["en sortant", "al salir"], ["en faisant", "haciendo"], ["en attendant", "mientras tanto"], ["tout en", "a la vez que, aunque"], ["ayant", "teniendo"], ["étant", "siendo"], ["sachant", "sabiendo"], ["passer du temps à", "pasar tiempo + gerundio"], ["continuer à", "seguir + gerundio"]],
  examples: [
    ["Elle écoute la radio en cuisinant.", "Escucha la radio mientras cocina."],
    ["En arrivant à la gare, j'ai vu Paul.", "Al llegar a la estación, vi a Paul."],
    ["Il a appris l'anglais en regardant des séries.", "Aprendió inglés viendo series."],
    ["Étant malade, il n'est pas venu.", "Estando enfermo, no vino."],
    ["C'est en forgeant qu'on devient forgeron.", "La práctica hace al maestro. (proverbio)"],
    ["J'ai passé la journée à lire.", "Pasé el día leyendo."]
  ],
  links: [
    ["Lingolia · Le gérondif", LG + "verbos/participe-gerondif/gerondif", bi("Explicación en español.", "Explication en espagnol.")],
    ["Lingolia · Participe présent", LG + "verbos/participe-gerondif/participe-present", bi("Diferencias con el gérondif.", "Différences avec le gérondif.")],
    ["Le FLE pour les curieux · Guide B1", "https://leflepourlescurieux.fr/guide-travail-b1/", bi("Curso y ejercicios autocorregibles.", "Cours et exercices autocorrectifs.")]
  ],
  games: [
    { type: "fill", title: bi("Forma el gérondif", "Forme le gérondif"), inst: bi("Escribe el participio presente del verbo.", "Écris le participe présent du verbe."), items: [
      { q: "Elle chante en ___. " + H("cuisiner"), a: [["cuisinant"]] },
      { q: "Il s'est cassé la jambe en ___ du ski. " + H("faire"), a: [["faisant"]] },
      { q: "En ___ patient, tu réussiras. " + H("être"), a: [["étant"]] },
      { q: "On apprend en ___. " + H("lire"), a: [["lisant"]] },
      { q: "Ne parle pas en ___ ! " + H("manger"), a: [["mangeant"]] },
      { q: "J'ai trouvé mes clés en ___ ma chambre. " + H("ranger"), a: [["rangeant"]] },
      { q: "En ___ le métro, tu arriveras plus vite. " + H("prendre"), a: [["prenant"]] },
      { q: "En ___ la vérité, il a pleuré. " + H("savoir"), a: [["sachant"]] }
    ] },
    { type: "mcq", title: bi("Del español al francés", "De l'espagnol au français"), inst: bi("Elige la traducción correcta.", "Choisis la bonne traduction de la phrase espagnole."), items: [
      { q: "Al entrar, saludó.", o: ["En entrant, il a salué.", "En entrer, il a salué.", "À entrer, il a salué."] },
      { q: "Pasé el día leyendo.", o: ["J'ai passé la journée à lire.", "J'ai passé la journée en lisant.", "J'ai passé la journée lisant."] },
      { q: "Sigo estudiando francés.", o: ["Je continue à étudier le français.", "Je continue étudiant le français.", "Je suis étudiant le français."] },
      { q: "Estoy comiendo.", o: ["Je suis en train de manger.", "Je suis mangeant.", "Je mange en."] },
      { q: "Los estudiantes que tienen un diploma…", o: ["Les étudiants ayant un diplôme…", "Les étudiants en ayant un diplôme…", "Les étudiants avoir un diplôme…"] }
    ] }
  ]
});

L({
  id: "passif", name: "La voix passive", sub: bi("Poner el foco en la acción y no en quien la hace", "Mettre l'accent sur l'action plutôt que sur son auteur"),
  goal: bi("Muy frecuente en la prensa y, por tanto, en la comprensión escrita del DELF.", "Très fréquente dans la presse, donc dans la compréhension écrite du DELF."),
  theory: [
    ["rule", bi("<b><i>Être</i> (en el tiempo del verbo activo) + participio concordado + <i>par</i>.</b> <i>Le musée a été inauguré par le maire.</i> Con verbos de sentimiento se usa <i>de</i>: <i>Il est aimé de tous.</i>",
      "<b><i>Être</i> (au temps du verbe actif) + participe passé accordé + <i>par</i>.</b> <i>Le musée a été inauguré par le maire.</i> Avec les verbes de sentiment, on emploie <i>de</i> : <i>Il est aimé de tous.</i>")],
    ["table", { h: bi(["Tiempo", "Activa", "Pasiva"], ["Temps", "Actif", "Passif"]), r: [
      [bi("Presente", "Présent"), "Le maire inaugure le musée.", "Le musée est inauguré par le maire."],
      ["Passé composé", "Le maire a inauguré le musée.", "Le musée a été inauguré par le maire."],
      [bi("Futuro", "Futur"), "Ils construiront un pont.", "Un pont sera construit."],
      ["Plus-que-parfait", "Ils avaient validé les résultats.", "Les résultats avaient été validés."]] }],
    ["rule", bi("<b>Alternativas:</b> <i>on</i> (<i>On a construit un pont</i>) o la forma pronominal (<i>Ce plat se mange froid</i>).", "<b>Alternatives :</b> <i>on</i> (<i>On a construit un pont</i>) ou la forme pronominale (<i>Ce plat se mange froid</i>).")],
    ["tip", bi("Para identificar el tiempo de una pasiva, mira el verbo <i>être</i>: <i>a été</i> = passé composé, <i>sera</i> = futuro.", "Pour trouver le temps d'un passif, regardez le verbe <i>être</i> : <i>a été</i> = passé composé, <i>sera</i> = futur.")],
    ["delf", bi("La voz pasiva es muy frecuente en los artículos de la comprensión escrita.", "La voix passive est très fréquente dans les articles de presse de la compréhension écrite.")]
  ],
  vocab: [["être construit", "ser construido"], ["être élu", "ser elegido"], ["être fondé", "ser fundado"], ["être inauguré", "ser inaugurado"], ["être publié", "ser publicado"], ["être accusé de", "ser acusado de"], ["être aimé de", "ser querido por"], ["être entouré de", "estar rodeado de"], ["on", "se (impersonal)"], ["se vendre", "venderse"]],
  examples: [
    ["Ce roman a été écrit par Victor Hugo.", "Esta novela fue escrita por Victor Hugo."],
    ["La maire sera élue dimanche.", "La alcaldesa será elegida el domingo."],
    ["Il est respecté de tous.", "Es respetado por todos."],
    ["Ce plat se mange froid.", "Este plato se come frío."],
    ["On a volé mon vélo !", "¡Me han robado la bici!"],
    ["La maison est entourée d'arbres.", "La casa está rodeada de árboles."]
  ],
  links: [
    ["Le Point du FLE · La voix passive", LP + "passif.htm", bi("Transformaciones activa ↔ pasiva.", "Transformations actif ↔ passif.")],
    ["Lingolia · Le passif", LG + "verbos/passif", bi("Explicación en español.", "Explication en espagnol.")],
    ["MOddou FLE · Voix passive", "https://www.estudiodefrances.com/?p=5281", bi("Vídeo + quiz.", "Vidéo + quiz.")]
  ],
  games: [
    { type: "fill", title: bi("Pasa a pasiva", "Mets au passif"), inst: bi("Escribe la forma pasiva completa (auxiliar + participio) en el hueco.", "Écris la forme passive complète (auxiliaire + participe) dans le trou."), items: [
      { q: "Le chef prépare le repas. → Le repas ___ par le chef.", a: [["est préparé"]] },
      { q: "Victor Hugo a écrit ce roman. → Ce roman ___ par Victor Hugo.", a: [["a été écrit"]] },
      { q: "La ville construira un pont. → Un pont ___ par la ville.", a: [["sera construit"]] },
      { q: "Ils avaient validé les résultats. → Les résultats ___.", a: [["avaient été validés"]] },
      { q: "Tout le monde aime cette chanteuse. → Cette chanteuse ___ de tout le monde.", a: [["est aimée"]] },
      { q: "La police a arrêté deux voleurs. → Deux voleurs ___ par la police.", a: [["ont été arrêtés"]] }
    ] },
    { type: "mcq", title: bi("¿Par, de, on o se?", "Par, de, on ou se ?"), inst: bi("Elige la opción natural en francés.", "Choisis la forme la plus naturelle."), items: [
      { q: "La maison est entourée ___ arbres.", o: ["d'", "par", "des"] },
      { q: "Le tableau a été volé ___ deux hommes.", o: ["par", "de", "à"] },
      { q: "Elle est aimée ___ tous.", o: ["de", "par des", "à"] },
      { q: "Ce plat ___ froid.", o: ["se mange", "est mangé par", "mange"] },
      { q: "___ a construit une nouvelle école dans mon quartier.", o: ["On", "Il", "Se"] }
    ] }
  ]
});

L({
  id: "discours-indirect", name: "Le discours indirect", sub: bi("Contar lo que otro dijo o preguntó", "Rapporter ce que quelqu'un a dit ou demandé"),
  goal: bi("Imprescindible para resumir documentos y relatar conversaciones. La clave: la concordancia de tiempos cuando el verbo introductor está en pasado.",
    "Indispensable pour résumer un document ou rapporter une conversation. La clé : la concordance des temps quand le verbe introducteur est au passé."),
  theory: [
    ["rule", bi("Si el verbo introductor está en <b>presente</b>, los tiempos no cambian. Si está en <b>pasado</b>, se aplica la concordancia de tiempos.",
      "Si le verbe introducteur est au <b>présent</b>, les temps ne changent pas. S'il est au <b>passé</b>, on applique la concordance des temps.")],
    ["table", { h: bi(["Discurso directo", "Indirecto (Il a dit que…)"], ["Discours direct", "Discours indirect (Il a dit que…)"]), r: [
      ["présent", "imparfait"], ["passé composé", "plus-que-parfait"], ["futur", "conditionnel"], [bi("aller + infinitivo", "aller + infinitif"), bi("allait + infinitivo", "allait + infinitif")], ["imparfait, plus-que-parfait, conditionnel", bi("no cambian", "ne changent pas")], ["impératif", bi("de + infinitivo", "de + infinitif")]] }],
    ["rule", bi("<b>Preguntas:</b> <i>Tu viens ?</i> → <i>Il demande <b>si</b> je viens.</i> · <i>Qu'est-ce que tu fais ?</i> → <i>Il demande <b>ce que</b> je fais.</i> · <i>Qu'est-ce qui se passe ?</i> → <i>Il demande <b>ce qui</b> se passe.</i>",
      "<b>Questions :</b> <i>Tu viens ?</i> → <i>Il demande <b>si</b> je viens.</i> · <i>Qu'est-ce que tu fais ?</i> → <i>Il demande <b>ce que</b> je fais.</i> · <i>Qu'est-ce qui se passe ?</i> → <i>Il demande <b>ce qui</b> se passe.</i>")],
    ["table", { h: bi(["Directo", "Indirecto en pasado"], ["Direct", "Indirect au passé"]), r: [["aujourd'hui", "ce jour-là"], ["hier", "la veille"], ["demain", "le lendemain"], ["la semaine prochaine", "la semaine suivante"], ["la semaine dernière", "la semaine précédente"], ["ici", "là"]] }],
    ["trap", bi("Nunca <i>est-ce que</i> en el discurso indirecto.", "Jamais de <i>est-ce que</i> dans le discours indirect.")]
  ],
  vocab: [["il dit que", "dice que"], ["il a affirmé que", "afirmó que"], ["il a expliqué que", "explicó que"], ["il a demandé si", "preguntó si"], ["il a répondu que", "respondió que"], ["il m'a conseillé de", "me aconsejó que"], ["ce jour-là", "ese día"], ["la veille", "el día anterior"], ["le lendemain", "el día siguiente"], ["la semaine suivante", "la semana siguiente"]],
  examples: [
    ["« Je suis fatigué. » → Il a dit qu'il était fatigué.", "Dijo que estaba cansado."],
    ["« J'ai fini. » → Elle a dit qu'elle avait fini.", "Dijo que había terminado."],
    ["« Je viendrai demain. » → Il a dit qu'il viendrait le lendemain.", "Dijo que vendría al día siguiente."],
    ["« Tu viens ? » → Il m'a demandé si je venais.", "Me preguntó si iba."],
    ["« Ferme la porte ! » → Il m'a dit de fermer la porte.", "Me dijo que cerrara la puerta."]
  ],
  links: [
    ["Le Point du FLE · Discours rapporté", LP + "discoursrapporte.htm", bi("Transformaciones y concordancia.", "Transformations et concordance.")],
    ["Lingolia · Estilo indirecto", LG + "oraciones/estilo-indirecto", bi("Explicación en español.", "Explication en espagnol.")],
    ["Lingolia · Interrogativas indirectas", LG + "oraciones/compuestas/interrogativas-indirectas", bi("si, ce que, ce qui…", "si, ce que, ce qui…")]
  ],
  games: [
    { type: "mcq", title: bi("Transforma al indirecto", "Passe au discours indirect"), inst: bi("Elige la forma correcta.", "Choisis la bonne forme."), items: [
      { q: "« Je suis fatigué. » → Il a dit qu'il ___ fatigué.", o: ["était", "est", "serait"] },
      { q: "« J'ai fini. » → Elle a dit qu'elle ___ fini.", o: ["avait", "a", "aurait"] },
      { q: "« Je viendrai demain. » → Il a dit qu'il viendrait ___.", o: ["le lendemain", "demain", "la veille"] },
      { q: "« Tu viens ? » → Il m'a demandé ___ je venais.", o: ["si", "que", "est-ce que"] },
      { q: "« Qu'est-ce que tu fais ? » → Elle m'a demandé ___ je faisais.", o: ["ce que", "qu'est-ce que", "ce qui"] },
      { q: "« Qu'est-ce qui se passe ? » → Il a demandé ___ se passait.", o: ["ce qui", "ce que", "qu'est-ce qui"] },
      { q: "« Ferme la porte ! » → Il m'a dit ___ la porte.", o: ["de fermer", "que je ferme", "fermer"] },
      { q: "« Je vais partir. » → Il a dit qu'il ___ partir.", o: ["allait", "va", "irait"] },
      { q: "« Nous avons vu ce film hier. » → Ils ont dit qu'ils avaient vu ce film ___.", o: ["la veille", "hier", "le lendemain"] },
      { q: "Il dit : « Je suis content. » → Il dit qu'il ___ content.", o: ["est", "était", "serait"], why: bi("Verbo introductor en presente → sin cambio.", "Verbe introducteur au présent → pas de changement.") }
    ] },
    { type: "fill", title: bi("Escribe el discurso indirecto", "Écris le discours indirect"), inst: bi("Completa con los tiempos y marcadores correctos.", "Complète avec les bons temps et marqueurs."), items: [
      { q: "« Je viendrai demain. » → Il a dit qu'il ___ ___.", a: [["viendrait"], ["le lendemain"]] },
      { q: "« Qu'est-ce que tu fais ? » → Elle m'a demandé ___ je faisais.", a: [["ce que"]] },
      { q: "« J'ai perdu mon passeport. » → Il a expliqué qu'il ___ son passeport.", a: [["avait perdu"]] },
      { q: "« Appelle-moi ! » → Elle m'a demandé ___ l'appeler.", a: [["de"]] },
      { q: "« Vous aimez Paris ? » → Il nous a demandé ___ nous aimions Paris.", a: [["si"]] }
    ] }
  ]
});

/* ---------------- Module F ---------------- */
L({
  id: "vocabulaire", name: "Vocabulaire thématique", sub: bi("Léxico por temas y frases útiles para la clase", "Lexique par thèmes et phrases utiles en classe"),
  goal: bi("Aprende cada palabra con su artículo y un ejemplo que hable de ti. Para cada tema, prepara tres frases sobre tu vida y una opinión.",
    "Apprenez chaque mot avec son article et un exemple qui vous concerne. Pour chaque thème, préparez trois phrases sur vous et une opinion."),
  theory: [
    ["tip", bi("<b>Método:</b> palabra + artículo + ejemplo personal. <i>le loyer → Mon loyer est trop cher.</i> Añade las palabras nuevas a tus tarjetas de repaso (ver <a href=\"#plan\">Plan de estudio</a>).",
      "<b>Méthode :</b> mot + article + exemple personnel. <i>le loyer → Mon loyer est trop cher.</i> Ajoutez les mots nouveaux à vos cartes de révision (voir <a href=\"#plan\">Plan d'étude</a>).")],
    ["trap", bi("<i>Passer un examen</i> = presentarse a un examen, no aprobarlo. Aprobar = <i>réussir un examen</i>.", "<i>Passer un examen</i> signifie le présenter, pas le réussir : pour réussir, on dit <i>réussir un examen</i>.")],
    ["h", bi("Frases útiles para la clase", "Phrases utiles pour la classe")],
    ["list", [
      bi("<b>Pedir aclaraciones:</b> <i>Vous pouvez répéter, s'il vous plaît ? · Vous pourriez parler plus lentement ? · Qu'est-ce que ça veut dire ? · Comment on dit… en français ? · Ça s'écrit comment ? · Je n'ai pas compris la consigne. · C'est masculin ou féminin ?</i>",
        "<b>Demander une clarification :</b> <i>Vous pouvez répéter, s'il vous plaît ? · Vous pourriez parler plus lentement ? · Qu'est-ce que ça veut dire ? · Comment on dit… en français ? · Ça s'écrit comment ? · Je n'ai pas compris la consigne. · C'est masculin ou féminin ?</i>"),
      bi("<b>Dar tu opinión:</b> <i>À mon avis… / Selon moi… / Je trouve que…</i> (+ indicativo) · <i>Je ne pense pas que…</i> (+ subjuntivo) · <i>Ça dépend… / D'un côté…, de l'autre…</i>",
        "<b>Donner son opinion :</b> <i>À mon avis… / Selon moi… / Je trouve que…</i> (+ indicatif) · <i>Je ne pense pas que…</i> (+ subjonctif) · <i>Ça dépend… / D'un côté…, de l'autre…</i>"),
      bi("<b>Acuerdo y desacuerdo:</b> <i>Je suis tout à fait d'accord. · Tu as raison.</i> — <i>D'accord, mais… · C'est vrai, cependant…</i> — <i>Je ne suis pas d'accord. · Je ne partage pas ton avis.</i>",
        "<b>Accord et désaccord :</b> <i>Je suis tout à fait d'accord. · Tu as raison.</i> — <i>D'accord, mais… · C'est vrai, cependant…</i> — <i>Je ne suis pas d'accord. · Je ne partage pas ton avis.</i>"),
      bi("<b>Contar:</b> <i>À cette époque-là… · Un jour… · Tout à coup… · Ensuite… · Finalement…</i>", "<b>Raconter :</b> <i>À cette époque-là… · Un jour… · Tout à coup… · Ensuite… · Finalement…</i>"),
      bi("<b>Imaginar:</b> <i>Si j'étais toi… · À ta place… · Imaginons que… · Et si on + imparfait ?</i>", "<b>Imaginer :</b> <i>Si j'étais toi… · À ta place… · Imaginons que… · Et si on + imparfait ?</i>"),
      bi("<b>Argumentar:</b> <i>D'abord… · Prenons l'exemple de… · Le problème, c'est que… · En conclusion…</i>", "<b>Argumenter :</b> <i>D'abord… · Prenons l'exemple de… · Le problème, c'est que… · En conclusion…</i>"),
      bi("<b>Con los compañeros:</b> <i>On travaille ensemble ? · C'est ton tour. · Tu peux me corriger si je me trompe ?</i>", "<b>Avec les camarades :</b> <i>On travaille ensemble ? · C'est ton tour. · Tu peux me corriger si je me trompe ?</i>")]],
    ["tip", bi("Elige una frase nueva cada semana y úsala al menos tres veces en clase.", "Choisissez une nouvelle phrase chaque semaine et utilisez-la au moins trois fois en classe.")]
  ],
  vocabGroups: [
    { t: bi("Vivienda", "Logement"), items: [["le loyer", "el alquiler"], ["le / la locataire", "el / la inquilino/a"], ["la colocation", "piso compartido"], ["déménager", "mudarse"], ["les charges", "los gastos comunes"], ["un quartier bien desservi", "un barrio bien comunicado"]] },
    { t: bi("Trabajo y estudios", "Travail et études"), items: [["postuler à une offre", "postularse a una oferta"], ["un entretien d'embauche", "una entrevista de trabajo"], ["une lettre de motivation", "una carta de presentación"], ["un CDI / un CDD", "contrato indefinido / temporal"], ["le télétravail", "el teletrabajo"], ["le chômage", "el desempleo"], ["réussir un examen", "aprobar un examen"]] },
    { t: bi("Viajes", "Voyages"), items: [["un aller-retour", "un billete de ida y vuelta"], ["la correspondance", "el transbordo, la conexión"], ["annulé", "cancelado"], ["l'hébergement", "el alojamiento"], ["le covoiturage", "el coche compartido"], ["les embouteillages", "los atascos"]] },
    { t: bi("Salud", "Santé"), items: [["avoir mal au dos", "dolerle a uno la espalda"], ["être enrhumé", "estar resfriado"], ["une ordonnance", "una receta médica"], ["prendre rendez-vous", "pedir cita"], ["la mutuelle", "el seguro médico complementario"], ["le sommeil", "el sueño"]] },
    { t: bi("Medio ambiente", "Environnement"), items: [["le réchauffement climatique", "el calentamiento global"], ["trier les déchets", "separar la basura"], ["gaspiller", "desperdiciar"], ["les énergies renouvelables", "las energías renovables"], ["l'empreinte carbone", "la huella de carbono"], ["consommer local", "consumir productos locales"]] },
    { t: bi("Tecnología", "Technologie"), items: [["les réseaux sociaux", "las redes sociales"], ["publier / partager", "publicar / compartir"], ["un abonné", "un seguidor, suscriptor"], ["la vie privée", "la privacidad"], ["être accro à", "estar enganchado a"], ["les infox", "las noticias falsas"], ["le harcèlement en ligne", "el acoso en línea"]] },
    { t: bi("Cultura y ocio", "Culture et loisirs"), items: [["une exposition", "una exposición"], ["une pièce de théâtre", "una obra de teatro"], ["un film en VO sous-titré", "una película en versión original subtitulada"], ["une œuvre", "una obra"], ["une critique", "una reseña"], ["ça m'a bouleversé", "me conmovió profundamente"]] },
    { t: bi("Compras", "Achats"), items: [["les soldes", "las rebajas"], ["rembourser", "reembolsar"], ["échanger", "cambiar (un artículo)"], ["une réclamation", "una reclamación"], ["la livraison", "la entrega"], ["d'occasion", "de segunda mano"], ["défectueux", "defectuoso"]] },
    { t: bi("Relaciones", "Relations"), items: [["s'entendre bien avec", "llevarse bien con"], ["se disputer", "pelearse"], ["se réconcilier", "reconciliarse"], ["faire confiance à", "confiar en"], ["un malentendu", "un malentendido"], ["le bénévolat", "el voluntariado"]] },
    { t: bi("Medios", "Médias"), items: [["la une", "la portada"], ["un gros titre", "un titular"], ["une émission", "un programa"], ["l'actualité", "la actualidad"], ["une source fiable", "una fuente fiable"], ["vérifier une information", "verificar una información"]] },
    { t: bi("Debate", "Débat"), items: [["un avantage", "una ventaja"], ["un inconvénient", "una desventaja"], ["être pour / contre", "estar a favor / en contra"], ["favoriser", "favorecer"], ["nuire à", "perjudicar"], ["un phénomène de société", "un fenómeno social"]] }
  ],
  examples: [
    ["Le loyer est trop élevé, c'est pourquoi je vais déménager.", "El alquiler es demasiado alto, por eso voy a mudarme."],
    ["J'ai postulé à trois offres cette semaine.", "Me postulé a tres ofertas esta semana."],
    ["Mon vol a été annulé.", "Mi vuelo fue cancelado."],
    ["Il faudrait que tu prennes rendez-vous chez le médecin.", "Deberías pedir cita con el médico."],
    ["Il faudrait que chacun trie ses déchets.", "Cada uno debería separar su basura."],
    ["Je suis accro à mon téléphone.", "Estoy enganchado a mi teléfono."],
    ["Je voudrais échanger cet article défectueux.", "Quisiera cambiar este artículo defectuoso."],
    ["On s'est disputés, puis on s'est réconciliés.", "Nos peleamos y luego nos reconciliamos."],
    ["Cette mesure nuit aux plus fragiles.", "Esta medida perjudica a los más vulnerables."]
  ],
  links: [
    ["Vive le FLE · Vocabulaire B1", "https://vivelefle.jimdofree.com/niveau-b1/vocabulaire-b1/", bi("Quizlet y LearningApps por tema.", "Quizlet et LearningApps par thème.")],
    ["Wordwall · Ressources FLE B1", "https://wordwall.net/fr-fr/community/fle-b1", bi("Ruletas, tarjetas y quiz tipo concurso.", "Roues, cartes et quiz télévisés.")],
    ["Quizlet · Travail et vie étudiante", "https://quizlet.com/ca/200652311/edito-niveau-b1-et-b2-unite-2-vocabulaire-du-travail-et-la-vie-etudiante-flash-cards/", bi("Tarjetas (Édito B1-B2).", "Cartes (Édito B1-B2).")],
    ["Académie de l'UE · Mon cours de français B1", "https://academy.europa.eu/courses/mon-cours-de-francais-b1", bi("Curso B1 gratuito con zona de juegos.", "Cours B1 gratuit avec un espace jeux.")],
    ["Le Point du FLE · Vocabulaire", LP + "vocabulaire.htm", bi("Repertorio de vocabulario temático.", "Répertoire de vocabulaire thématique.")]
  ],
  games: [
    { type: "flash", title: bi("Tarjetas de memoria", "Cartes mémoire"), inst: bi("Toca la tarjeta para girarla. Sé honesto: ¿lo sabías?", "Touche la carte pour la retourner. Sois honnête : tu savais ?"), fromVocab: 14 },
    { type: "sort", title: bi("¿De qué tema es?", "De quel thème ?"), inst: bi("Envía cada palabra a su tema.", "Envoie chaque mot vers son thème."), buckets: [bi("Vivienda", "Logement"), bi("Trabajo", "Travail"), bi("Medio ambiente", "Environnement"), bi("Tecnología", "Technologie")], items: [
      ["le loyer", 0], ["déménager", 0], ["la colocation", 0], ["un entretien d'embauche", 1], ["postuler à une offre", 1], ["le télétravail", 1], ["trier les déchets", 2], ["gaspiller", 2], ["l'empreinte carbone", 2], ["un abonné", 3], ["les infox", 3], ["la vie privée", 3]
    ] },
    { type: "match", title: bi("Francés ↔ español", "Français ↔ espagnol"), inst: bi("Une cada expresión con su traducción.", "Relie chaque expression à sa traduction espagnole."), pairs: [["les soldes", "las rebajas"], ["une ordonnance", "una receta médica"], ["les embouteillages", "los atascos"], ["nuire à", "perjudicar"], ["un malentendu", "un malentendido"], ["d'occasion", "de segunda mano"], ["la une", "la portada"], ["être enrhumé", "estar resfriado"]] }
  ]
});

L({
  id: "faux-amis", name: "Faux amis et erreurs fréquentes", sub: bi("Trampas típicas de los hispanohablantes", "Pièges typiques des hispanophones"),
  goal: bi("Palabras que se parecen al español pero significan otra cosa, y errores que delatan al hispanohablante. Conocerlos te ahorra malentendidos.",
    "Des mots qui ressemblent à l'espagnol mais veulent dire autre chose, et des erreurs typiques des hispanophones. Les connaître évite les malentendus."),
  theory: [
    ["info", bi("Esta sección compara directamente con el español.", "Cette partie reste en espagnol : c'est là que la confusion se produit.")],
    ["table", { h: bi(["Francés", "Significa", "NO significa (se dice…)"], ["Français", "Signifie (en espagnol)", "Ne signifie PAS (on dit…)"]), r: [
      ["constipé", "estreñido", "constipado (→ enrhumé)"], ["embarrassé", "incómodo", "embarazada (→ enceinte)"], ["rester", "quedarse", "restar"], ["quitter", "dejar, irse de", "quitar (→ enlever)"], ["salir", "ensuciar", "salir (→ sortir)"], ["subir", "sufrir", "subir (→ monter)"], ["attendre", "esperar", "atender"], ["entendre", "oír", "entender (→ comprendre)"], ["large", "ancho", "largo (→ long)"], ["le sol", "el suelo", "el sol (→ le soleil)"], ["la librairie", "la librería", "biblioteca (→ bibliothèque)"], ["discuter", "conversar", "discutir (→ se disputer)"], ["rare", "escaso", "raro (→ bizarre)"], ["la location", "el alquiler", "localización"], ["la recette", "receta de cocina", "receta médica (→ ordonnance)"], ["la robe", "el vestido", "la ropa (→ vêtements)"], ["un stage", "unas prácticas", "etapa (→ étape)"]] }],
    ["table", { h: bi(["Incorrecto", "Correcto"], ["Faux", "Correct"]), r: [["Je suis 25 ans", "J'ai 25 ans"], ["Je mange pain", "Je mange du pain"], ["beaucoup des amis", "beaucoup d'amis"], ["Je vais au médecin", "Je vais chez le médecin"], ["Les gens est", "Les gens sont"], ["Après manger", "Après avoir mangé"]] }],
    ["rule", bi("<b>Géneros que cambian:</b> <i>la couleur, la peur, la douleur, la valeur</i> (el color, el miedo, el dolor, el valor) · <i>le lait, le sel, le sang, le nez</i> (la leche, la sal, la sangre, la nariz).",
      "<b>Genres qui changent :</b> <i>la couleur, la peur, la douleur, la valeur</i> (masculins en espagnol) · <i>le lait, le sel, le sang, le nez</i> (féminins en espagnol).")],
    ["tip", bi("«Las emociones en <b>-EUR</b> son femeninas» (excepciones: <i>le bonheur, le cœur</i>).", "« Les émotions en <b>-EUR</b> sont féminines » (exceptions : <i>le bonheur, le cœur</i>).")]
  ],
  vocab: [["enrhumé", "resfriado"], ["enceinte", "embarazada"], ["enlever", "quitar"], ["sortir", "salir"], ["monter", "subir"], ["comprendre", "entender"], ["long", "largo"], ["la bibliothèque", "la biblioteca"], ["se disputer", "discutir, pelearse"], ["bizarre", "raro"], ["une ordonnance", "una receta médica"], ["les vêtements", "la ropa"]],
  examples: [
    ["Je suis enrhumé, pas constipé !", "¡Estoy resfriado, no estreñido!"],
    ["Elle est enceinte de trois mois.", "Está embarazada de tres meses."],
    ["J'ai quitté Paris en 2020.", "Me fui de París en 2020."],
    ["J'attends le bus depuis vingt minutes.", "Espero el autobús desde hace veinte minutos."],
    ["J'ai fait un stage dans une entreprise.", "Hice unas prácticas en una empresa."],
    ["Il a peur du noir.", "Tiene miedo a la oscuridad. (la peur, femenino)"]
  ],
  links: [
    ["Le Point du FLE", "https://www.lepointdufle.net/", bi("Busca «faux amis» en el repertorio.", "Cherchez « faux amis » dans le répertoire.")],
    ["Lingolia · Género de los sustantivos", LG + "sustantivos/genero", bi("Reglas de género por terminación.", "Règles du genre selon la terminaison.")],
    ["CNRTL · Dictionnaire", "https://www.cnrtl.fr/", bi("Diccionario de referencia para verificar significados.", "Dictionnaire de référence pour vérifier le sens des mots.")]
  ],
  games: [
    { type: "mcq", title: bi("¿Qué significa?", "Que signifie-t-il ?"), inst: bi("Elige la traducción correcta del falso amigo.", "Choisis la bonne traduction espagnole du faux ami."), items: [
      { q: "constipé", o: ["estreñido", "resfriado", "cansado"] },
      { q: "embarrassé", o: ["incómodo", "embarazada", "embarrado"] },
      { q: "rester", o: ["quedarse", "restar", "descansar"] },
      { q: "quitter", o: ["dejar, irse de", "quitar", "quedar"] },
      { q: "salir", o: ["ensuciar", "salir", "saltar"] },
      { q: "subir", o: ["sufrir", "subir", "sobrar"] },
      { q: "attendre", o: ["esperar", "atender", "entender"] },
      { q: "entendre", o: ["oír", "entender", "tender"] },
      { q: "large", o: ["ancho", "largo", "grande"] },
      { q: "la location", o: ["el alquiler", "la localización", "la locución"] },
      { q: "un stage", o: ["unas prácticas", "una etapa", "un escenario"] },
      { q: "la robe", o: ["el vestido", "la ropa", "el robo"] }
    ] },
    { type: "sort", title: bi("¿Correcto o incorrecto?", "Correct ou faux ?"), inst: bi("Detecta los errores típicos.", "Repère les erreurs typiques."), buckets: [bi("Correcto", "Correct"), bi("Incorrecto", "Faux")], items: [
      ["J'ai 25 ans", 0], ["Je suis 25 ans", 1], ["Je vais chez le médecin", 0], ["Je vais au médecin", 1], ["beaucoup d'amis", 0], ["beaucoup des amis", 1], ["Les gens sont gentils", 0], ["Les gens est gentils", 1], ["Après avoir mangé", 0], ["Après manger", 1], ["la couleur rouge", 0], ["le couleur rouge", 1], ["le lait froid", 0], ["la lait froide", 1]
    ] }
  ]
});

L({
  id: "phonetique", name: "Phonétique", sub: bi("Los sonidos difíciles para hispanohablantes", "Les sons difficiles pour les hispanophones"),
  goal: bi("Las vocales [y] y [œ], las tres nasales, [b]/[v], [z], [ʃ], [ʒ] y la R francesa. En el DELF, la fonología cuenta en la nota de la producción oral. Pulsa los altavoces para escuchar cada par.",
    "Les voyelles [y] et [œ], les trois nasales, [b]/[v], [z], [ʃ], [ʒ] et le R français. Au DELF, la phonologie compte dans la note de production orale. Cliquez sur les haut-parleurs pour écouter chaque paire."),
  theory: [
    ["table", { h: bi(["Sonido", "Cómo producirlo", "Pares mínimos"], ["Son", "Comment le produire", "Paires minimales"]), r: [
      ["[y] tu", bi("Di «i» con los labios redondeados", "Dites « i » avec les lèvres arrondies"), "tu / tout · rue / roue"],
      ["[ø] / [œ] deux / peur", bi("«e» con los labios redondeados", "« e » avec les lèvres arrondies"), "deux / de"],
      ["[ɑ̃] enfant", bi("«a» por la nariz, sin pronunciar la n", "« a » par le nez, sans prononcer le n"), "vent / vin / vont"],
      ["[ɛ̃] vin", bi("«e» abierta por la nariz", "« e » ouvert par le nez"), "pain / pont"],
      ["[ɔ̃] bon", bi("«o» cerrada por la nariz", "« o » fermé par le nez"), "bon / banc"],
      [bi("[v] y [b]", "[v] et [b]"), bi("Dientes sobre el labio inferior para [v]", "Dents sur la lèvre inférieure pour [v]"), "vous / bout"],
      [bi("[z] y [s]", "[z] et [s]"), bi("[z] vibra en la garganta", "[z] vibre dans la gorge"), "poison / poisson"],
      ["[R]", bi("Al fondo de la garganta", "Au fond de la gorge"), "rue, Paris"]] }],
    ["tip", bi("Para [y]: pon la boca de dar un beso y di «i».", "Pour [y] : faites la bouche du baiser et dites « i ».")],
    ["list", [
      bi("La <i>-e</i> final es muda.", "Le <i>-e</i> final est muet."),
      bi("Las consonantes finales casi nunca se pronuncian, salvo <b>C, R, F, L</b> (piensa en «<b>CaReFuL</b>»): <i>le sac, la mer, le chef, le sel</i>.", "Les consonnes finales ne se prononcent presque jamais, sauf <b>C, R, F, L</b> (pensez à « <b>CaReFuL</b> ») : <i>le sac, la mer, le chef, le sel</i>."),
      bi("La terminación <i>-ent</i> de <i>ils parlent</i> es muda.", "La terminaison <i>-ent</i> de <i>ils parlent</i> est muette."),
      bi("Haz los enlaces obligatorios: <i>les‿amis, ils‿ont</i> [z]. <i>Ils ont</i> [z] ≠ <i>ils sont</i> [s].", "Faites les liaisons obligatoires : <i>les‿amis, ils‿ont</i> [z]. <i>Ils ont</i> [z] ≠ <i>ils sont</i> [s]."),
      bi("Nunca enlace después de <i>et</i>.", "Pas de liaison après <i>et</i>."),
      bi("El acento tónico cae en la última sílaba del grupo rítmico.", "L'accent tonique tombe sur la dernière syllabe du groupe rythmique.")]]
  ],
  vocab: [["tu / tout", "[y] / [u]"], ["rue / roue", "[y] / [u]"], ["dessus / dessous", "[y] / [u]"], ["deux / de", "[ø] / [ə]"], ["vent / vin / vont", "[ɑ̃] / [ɛ̃] / [ɔ̃]"], ["bon / banc", "[ɔ̃] / [ɑ̃]"], ["pain / pont", "[ɛ̃] / [ɔ̃]"], ["vous / bout", "[v] / [b]"], ["poison / poisson", "[z] / [s]"], ["ils ont / ils sont", "[z] / [s]"], ["cousin / coussin", "[z] / [s]"], ["boire / voir", "[b] / [v]"]],
  examples: [
    ["Tu as vu tout ce qu'il y a dans la rue ?", "¿Viste todo lo que hay en la calle? — [y] / [u]"],
    ["Un bon vin blanc.", "Un buen vino blanco. — las tres nasales"],
    ["Les chaussettes de l'archiduchesse sont-elles sèches ?", "Trabalenguas clásico para [ʃ] y [s]."],
    ["Un chasseur sachant chasser doit savoir chasser sans son chien.", "Trabalenguas clásico para [ʃ] y [s]."],
    ["Ils ont des amis ; ils sont amis.", "Tienen amigos; son amigos. — [z] / [s]"]
  ],
  links: [
    ["Phonétique progressive (Middlebury)", "https://sites.middlebury.edu/french-phonetique/300-2/3-4-les-voyelles-nasales/", bi("Vocales nasales con audio.", "Voyelles nasales avec audio.")],
    ["Fonetix · Voyelles nasales", "https://www.fonetix.fr/ressources-pour-les-apprenants/les-voyelles-nasales-en-francais/", bi("Actividad interactiva.", "Activité interactive.")],
    ["Université de Jyväskylä · Nasales", "https://research.jyu.fi/phonfr/ex10.html", bi("Ejercicios para repetir.", "Exercices de répétition.")],
    ["Le Point du FLE · Phonétique", LP + "phonetique.htm", bi("Repertorio de ejercicios de pronunciación.", "Répertoire d'exercices de prononciation.")]
  ],
  games: [
    { type: "listen", title: bi("¿Qué palabra oyes?", "Quel mot entends-tu ?"), inst: bi("Pulsa el altavoz y elige la palabra pronunciada. Usa auriculares si puedes.", "Clique sur le haut-parleur et choisis le mot prononcé. Utilise des écouteurs si possible."), pairs: [["tu", "tout"], ["rue", "roue"], ["dessus", "dessous"], ["vent", "vin"], ["bon", "banc"], ["pain", "pont"], ["vous", "bout"], ["poison", "poisson"], ["ils ont", "ils sont"], ["cousin", "coussin"], ["deux", "de"], ["boire", "voir"]] },
    { type: "mcq", title: bi("¿Se pronuncia?", "Ça se prononce ?"), inst: bi("Aplica las reglas de oro: CaReFuL, -ent mudo y enlaces.", "Applique les règles d'or : CaReFuL, -ent muet et liaisons."), items: [
      { q: bi("La <b>c</b> final de « le sac »", "Le <b>c</b> final de « le sac »"), o: [bi("Se pronuncia", "Se prononce"), bi("Es muda", "Est muet")] },
      { q: bi("La <b>t</b> final de « le lit »", "Le <b>t</b> final de « le lit »"), o: [bi("Es muda", "Est muet"), bi("Se pronuncia", "Se prononce")] },
      { q: bi("La terminación <b>-ent</b> de « ils parlent »", "La terminaison <b>-ent</b> de « ils parlent »"), o: [bi("Es muda", "Est muette"), bi("Se pronuncia [ɑ̃]", "Se prononce [ɑ̃]")] },
      { q: bi("El enlace en « les‿amis »", "La liaison dans « les‿amis »"), o: [bi("Obligatorio, suena [z]", "Obligatoire, en [z]"), bi("Prohibido", "Interdite"), bi("Suena [s]", "En [s]")] },
      { q: bi("El enlace en « et / on »", "La liaison dans « et / on »"), o: [bi("Nunca se hace", "Ne se fait jamais"), bi("Obligatorio", "Obligatoire"), bi("Suena [t]", "En [t]")] },
      { q: bi("La <b>f</b> final de « le chef »", "Le <b>f</b> final de « le chef »"), o: [bi("Se pronuncia", "Se prononce"), bi("Es muda", "Est muet")] },
      { q: bi("La <b>r</b> final de « avoir »", "Le <b>r</b> final de « avoir »"), o: [bi("Se pronuncia", "Se prononce"), bi("Es muda", "Est muet")] },
      { q: bi("La <b>p</b> final de « beaucoup »", "Le <b>p</b> final de « beaucoup »"), o: [bi("Es muda", "Est muet"), bi("Se pronuncia", "Se prononce")] },
      { q: bi("La <b>l</b> final de « le sel »", "Le <b>l</b> final de « le sel »"), o: [bi("Se pronuncia", "Se prononce"), bi("Es muda", "Est muet")] }
    ] }
  ]
});

/* ---------------- Module G ---------------- */
L({
  id: "delf", name: "Préparer le DELF B1", sub: bi("Formato, estrategias y modelos", "Format, stratégies et modèles"),
  goal: bi("Cuatro pruebas, cada una sobre 25 puntos. Hace falta un total de 50/100 y al menos 5/25 en cada prueba: un 60 con un 4/25 en una prueba es un suspenso.",
    "Quatre épreuves notées chacune sur 25 points. Il faut 50 points sur 100 et au moins 5 sur 25 à chaque épreuve : un total de 60 avec un 4 sur 25 dans une épreuve reste un échec."),
  theory: [
    ["table", { h: bi(["Prueba", "Duración", "Contenido", "Nota"], ["Épreuve", "Durée", "Contenu", "Note"]), r: [
      [bi("Comprensión oral", "Compréhension de l'oral"), bi("unos 25 min", "environ 25 min"), bi("3 ejercicios, 2 escuchas, documentos de 6 min máx.", "3 exercices, 2 écoutes, documents de 6 min maximum"), "/25"],
      [bi("Comprensión escrita", "Compréhension des écrits"), "45 min", bi("3 ejercicios", "3 exercices"), "/25"],
      [bi("Producción escrita", "Production écrite"), "45 min", bi("1 texto de al menos 160 palabras", "1 texte d'au moins 160 mots"), "/25"],
      [bi("Producción oral", "Production orale"), bi("unos 15 min + 10 min de preparación", "environ 15 min + 10 min de préparation"), bi("3 partes", "3 parties"), "/25"]] }],
    ["h", bi("Comprensión oral", "Compréhension de l'oral")],
    ["p", bi("Según el ejemplo oficial del nuevo formato, el ejercicio 1 es un diálogo cotidiano y los ejercicios 2 y 3 son documentos radiofónicos; las preguntas son de opción múltiple (A, B o C).",
      "D'après l'exemple officiel du nouveau format, l'exercice 1 est un dialogue de la vie quotidienne et les exercices 2 et 3 sont des documents radiophoniques ; les questions sont à choix multiples (A, B ou C).")],
    ["list", [
      bi("Lee las preguntas antes de escuchar y subraya las palabras clave.", "Lisez les questions avant l'écoute et soulignez les mots clés."),
      bi("En la primera escucha, identifica la situación; en la segunda, los detalles.", "À la première écoute, repérez la situation ; à la seconde, les détails."),
      bi("Desconfía de la respuesta que repite el audio palabra por palabra: la buena suele ser una reformulación.", "Méfiez-vous de la réponse qui répète mot pour mot l'audio : la bonne réponse est souvent une reformulation."),
      bi("No dejes ninguna pregunta sin responder.", "Ne laissez aucune question sans réponse.")]],
    ["h", bi("Comprensión escrita", "Compréhension des écrits")],
    ["p", bi("Tres ejercicios de preguntas cerradas. El primero compara varios anuncios con los criterios de una persona; los otros dos tratan sobre artículos. Haz una tabla (documentos × criterios) con marcas. En los artículos, lee primero el título, la entradilla y la primera frase de cada párrafo: las preguntas suelen seguir el orden del texto. Reparto orientativo: 12 min para el ejercicio 1 y 15 min por artículo.",
      "Trois exercices à questions fermées. Le premier compare plusieurs annonces avec les critères d'une personne ; les deux autres portent sur des articles. Faites un tableau (documents × critères) avec des coches. Pour les articles, lisez d'abord le titre, le chapeau et la première phrase de chaque paragraphe : les questions suivent souvent l'ordre du texte. Répartition indicative : 12 minutes pour l'exercice 1 et 15 minutes par article.")],
    ["h", bi("Producción escrita", "Production écrite")],
    ["table", { h: bi(["Etapa", "Duración", "Qué hacer"], ["Étape", "Durée", "À faire"]), r: [
      [bi("Consigna", "Consigne"), "5 min", bi("tipo de texto, destinatario, tu o vous", "type de texte, destinataire, tu ou vous")],
      ["Plan", "10 min", bi("introducción, 2 o 3 argumentos con ejemplos, conclusión", "introduction, 2 ou 3 arguments avec exemples, conclusion")],
      [bi("Redacción", "Rédaction"), "20 min", bi("170 a 190 palabras", "170 à 190 mots")],
      [bi("Relectura", "Relecture"), "10 min", bi("concordancias, acentos, conectores, recuento de palabras", "accords, accents, connecteurs, comptage des mots")]] }],
    ["trap", bi("Nunca firmes con tu nombre real: inventa uno.", "Ne signez jamais avec votre vrai nom : inventez un prénom.")],
    ["model", [bi("Modelo A · Mensaje amistoso", "Modèle A · Message amical"), "Salut Léa, merci pour ton message ! Tu me demandes mon avis sur… Moi, l'année dernière, j'ai… C'était… À ta place, je + conditionnel… Par contre, fais attention à… J'espère que ça t'aidera. Tiens-moi au courant ! Bises, Alex"]],
    ["model", [bi("Modelo B · Carta formal", "Modèle B · Lettre formelle"), "Madame, Monsieur, je vous écris au sujet de… Le 12 mars dernier, j'ai… Or,… C'est pourquoi je vous serais reconnaissant(e) de bien vouloir… Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. Alex Martin"]],
    ["model", [bi("Ejemplo completo (unas 170 palabras) · Tema: tu ciudad quiere hacer gratuito el transporte público; da tu opinión en el correo de los lectores.", "Exemple complet (environ 170 mots) · Sujet : votre ville envisage de rendre les transports en commun gratuits ; donnez votre avis dans le courrier des lecteurs."),
      "Madame, Monsieur,<br>Je vous écris pour réagir au projet de gratuité des transports en commun. À mon avis, c'est une excellente idée, même si elle présente quelques difficultés.<br>Tout d'abord, la gratuité encouragerait les habitants à laisser leur voiture. Par conséquent, il y aurait moins d'embouteillages et l'air serait moins pollué. Par exemple, depuis que je prends le bus, je suis beaucoup moins stressé.<br>De plus, grâce à cette mesure, les étudiants et les personnes âgées pourraient se déplacer librement.<br>Cependant, il faut que la mairie trouve un autre financement. Bien que ce soit un défi, d'autres villes l'ont déjà relevé.<br>Pour conclure, si j'étais maire, je lancerais ce projet dès l'année prochaine.<br>Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées. Alex"]],
    ["p", bi("Este modelo muestra un registro formal, conectores variados, el subjuntivo, una frase con <i>si</i> + imparfait y un ejemplo personal.", "Ce modèle montre un registre formel, des connecteurs variés, le subjonctif, une phrase avec <i>si</i> + imparfait et un exemple personnel.")],
    ["h", bi("Producción oral", "Production orale")],
    ["table", { h: bi(["Parte", "Duración", "Qué hacer"], ["Partie", "Durée", "Ce qu'il faut faire"]), r: [
      [bi("1. Entrevista dirigida", "1. Entretien dirigé"), bi("2 a 3 min, sin preparación", "2 à 3 min, sans préparation"), bi("hablar de ti, tus estudios, tus aficiones y tus proyectos", "parler de vous, de vos études, de vos loisirs et de vos projets")],
      [bi("2. Ejercicio en interacción", "2. Exercice en interaction"), bi("3 a 4 min, sin preparación", "3 à 4 min, sans préparation"), bi("juego de rol: convencer, negociar, quejarse", "jeu de rôle : convaincre, négocier, se plaindre")],
      [bi("3. Expresión de un punto de vista", "3. Expression d'un point de vue"), bi("5 a 7 min, con 10 min de preparación", "5 à 7 min, avec 10 min de préparation"), bi("presentar el tema de un documento y defender tu opinión", "présenter le thème d'un document et défendre votre opinion")]] }],
    ["list", [
      bi("<b>Parte 1:</b> prepara un monólogo de dos minutos con presente, pasado, futuro y una opinión. Nunca respondas con una sola palabra.", "<b>Partie 1 :</b> préparez un monologue de deux minutes avec du présent, du passé, du futur et une opinion. Ne répondez jamais par un seul mot."),
      bi("<b>Parte 2:</b> saluda, expón el problema, argumenta, propone (<i>Et si on… ?</i>), concluye. Respeta el registro: <i>vous</i> con un desconocido, <i>tu</i> con un amigo.", "<b>Partie 2 :</b> saluer, exposer le problème, argumenter, proposer (<i>Et si on… ?</i>), conclure. Respectez le registre : <i>vous</i> avec un inconnu, <i>tu</i> avec un ami."),
      bi("<b>Parte 3:</b> <i>Ce document parle de… · Personnellement, je pense que… · D'abord… Par exemple… · Ensuite… · Cependant… · Pour conclure…</i>", "<b>Partie 3 :</b> <i>Ce document parle de… · Personnellement, je pense que… · D'abord… Par exemple… · Ensuite… · Cependant… · Pour conclure…</i>")]],
    ["delf", bi("En la rejilla de evaluación oral, gran parte de los puntos se refiere a la lengua (léxico, morfosintaxis, fonología) y no a la tarea: cuida tu vocabulario y tu pronunciación.",
      "Sur la grille d'évaluation de l'oral, une grande partie des points porte sur la langue (lexique, morphosyntaxe, phonologie) et non sur la tâche : soignez votre vocabulaire et votre prononciation.")],
    ["h", bi("Temas frecuentes", "Sujets fréquents")],
    ["p", bi("El móvil en la escuela · la gratuidad del transporte · el teletrabajo · estudiar en el extranjero · comprar en línea o en el comercio de barrio · la gratuidad de los museos · la comida rápida · la ciudad o el campo · informarse por las redes sociales · el turismo responsable.",
      "Le portable à l'école · la gratuité des transports · le télétravail · étudier à l'étranger · acheter en ligne ou dans les commerces de quartier · la gratuité des musées · la restauration rapide · la ville ou la campagne · s'informer par les réseaux sociaux · le tourisme responsable.")],
    ["tip", bi("Prepara una ficha por tema: dos argumentos a favor, dos en contra, un ejemplo personal y cinco palabras clave.", "Préparez une fiche par sujet : deux arguments pour, deux contre, un exemple personnel et cinq mots clés.")]
  ],
  vocab: [["Madame, Monsieur,", "Estimados señores:"], ["Je vous écris au sujet de…", "Le escribo en relación con…"], ["Je vous serais reconnaissant(e) de…", "Le agradecería que…"], ["Dans l'attente de votre réponse", "A la espera de su respuesta"], ["Je vous prie d'agréer…", "Reciba un cordial saludo (fórmula formal)"], ["Salut ! / Coucou !", "¡Hola! (informal)"], ["Tiens-moi au courant !", "¡Mantenme informado!"], ["Bises / Je t'embrasse", "Besos / Un abrazo"], ["À mon avis / Personnellement", "En mi opinión / Personalmente"], ["Ce document parle de…", "Este documento trata de…"]],
  examples: [
    ["Je vous écris pour réagir au projet de gratuité des transports.", "Le escribo para reaccionar al proyecto de transporte gratuito."],
    ["À mon avis, c'est une excellente idée, même si elle présente quelques difficultés.", "En mi opinión, es una excelente idea, aunque presenta algunas dificultades."],
    ["Bien que ce soit un défi, d'autres villes l'ont déjà relevé.", "Aunque sea un reto, otras ciudades ya lo han asumido."],
    ["Si j'étais maire, je lancerais ce projet dès l'année prochaine.", "Si fuera alcalde, lanzaría este proyecto a partir del año que viene."],
    ["Et si on partageait les frais ?", "¿Y si compartimos los gastos?"]
  ],
  links: [
    ["France Éducation international · DELF B1", "https://france-education-international.fr/diplome/delf-tout-public/niveau-b1", bi("Web oficial: formato y ejemplos de exámenes.", "Site officiel : format et exemples de sujets.")],
    ["Vidyalaya · 20 sujets blancs", "https://www.vidyalaya.fr/fr/articles/delf-b1-entrainement-gratuit", bi("Con corrección automática y cronómetro.", "Avec correction automatique et minuteur.")],
    ["Polyglottes · Compréhension orale", "https://polyglottes.org/delf-b1-exercices-de-comprehension-orale-gratuits/", bi("Ejercicios con corrección.", "Exercices avec correction.")],
    ["Polyglottes · Compréhension écrite", "https://polyglottes.org/comprehension-ecrite-b1-exercice-gratuit/", bi("Ejercicios con corrección.", "Exercices avec correction.")],
    ["France Podcasts · Oral DELF B1", "https://www.francepodcasts.com/2019/11/28/delf-b1-comprehension-orale/", bi("Práctica de comprensión oral.", "Entraînement à la compréhension orale.")],
    ["RFI · Journal en français facile", "https://www.rfi.fr/fr/podcasts/journal-en-fran%C3%A7ais-facile/", bi("Diez minutos de escucha diaria.", "Dix minutes d'écoute par jour.")]
  ],
  games: [
    { type: "sort", title: bi("¿Formal o amistoso?", "Formel ou amical ?"), inst: bi("Clasifica cada fórmula según el registro.", "Classe chaque formule selon le registre."), buckets: [bi("Carta formal (vous)", "Lettre formelle (vous)"), bi("Mensaje amistoso (tu)", "Message amical (tu)")], items: [
      ["Madame, Monsieur,", 0], ["Salut Léa !", 1], ["Je vous prie d'agréer…", 0], ["Bises", 1], ["Je vous serais reconnaissant de…", 0], ["Tiens-moi au courant !", 1], ["Dans l'attente de votre réponse", 0], ["À plus !", 1], ["Veuillez trouver ci-joint…", 0], ["Je t'embrasse", 1]
    ] },
    { type: "mcq", title: bi("¿Conoces el examen?", "Connais-tu l'examen ?"), inst: bi("Preguntas sobre el formato del DELF B1.", "Questions sur le format du DELF B1."), items: [
      { q: bi("¿Qué hace falta para aprobar?", "Que faut-il pour réussir ?"), o: [bi("50/100 y al menos 5/25 en cada prueba", "50/100 et au moins 5/25 à chaque épreuve"), bi("60/100 en total", "60/100 au total"), bi("50/100, sin mínimo por prueba", "50/100, sans minimum par épreuve")] },
      { q: bi("Mínimo de palabras en la producción escrita:", "Nombre minimum de mots en production écrite :"), o: ["160", "100", "250"] },
      { q: bi("Duración de la comprensión escrita:", "Durée de la compréhension des écrits :"), o: ["45 min", "25 min", "1 h 30"] },
      { q: bi("¿Cuántas partes tiene la producción oral?", "Combien de parties compte la production orale ?"), o: ["3", "2", "4"] },
      { q: bi("60/100 con un 4/25 en una prueba es…", "60/100 avec un 4/25 dans une épreuve, c'est…"), o: [bi("un suspenso", "un échec"), bi("un aprobado", "une réussite"), bi("un aprobado con mención", "une réussite avec mention")] },
      { q: bi("Preparación de la parte 3 del oral:", "Préparation de la partie 3 de l'oral :"), o: ["10 min", bi("Ninguna", "Aucune"), "30 min"] },
      { q: bi("¿Cuántas veces se escuchan los documentos orales?", "Combien de fois écoute-t-on les documents oraux ?"), o: ["2", "1", "3"] },
      { q: bi("¿Firmas la producción escrita con tu nombre real?", "Signe-t-on la production écrite avec son vrai nom ?"), o: [bi("No, inventas uno", "Non, on invente un prénom"), bi("Sí, siempre", "Oui, toujours"), bi("Solo en la carta formal", "Seulement dans la lettre formelle")] }
    ] }
  ]
});

L({
  id: "autoevaluation", name: "Autoévaluation finale", sub: bi("17 preguntas para comprobar tu nivel", "17 questions pour vérifier ton niveau"),
  goal: bi("La última estación. Completa las 17 frases sin mirar las lecciones. <b>15 a 17 aciertos:</b> B1 sólido. <b>11 a 14:</b> repasa los puntos fallados. <b>Menos de 11:</b> vuelve a los tramos A a E.",
    "Le terminus. Complétez les 17 phrases sans regarder les leçons. <b>15 à 17 bonnes réponses :</b> niveau B1 solide. <b>11 à 14 :</b> revoyez les points manqués. <b>Moins de 11 :</b> reprenez les tronçons A à E."),
  theory: [
    ["h", bi("Checklist B1", "Checklist B1")],
    ["list", "@CHECKLIST"],
    ["tip", bi("Puedes marcar esta checklist en la página <a href=\"#plan\">Plan de estudio</a>.", "Vous pouvez cocher cette checklist dans la page <a href=\"#plan\">Plan d'étude</a>.")]
  ],
  vocab: [["le COD / le COI", "complemento directo / indirecto"], ["l'auxiliaire", "el verbo auxiliar"], ["l'accord", "la concordancia"], ["la subordonnée", "la oración subordinada"], ["le discours rapporté", "el discurso referido"], ["la concordance des temps", "la concordancia de tiempos"], ["la liaison", "el enlace"], ["la consigne", "la consigna, el enunciado"], ["registre soutenu / courant / familier", "registro culto / estándar / coloquial"]],
  examples: [
    ["Quand j'étais petit, j'habitais à la campagne.", "Cuando era pequeño, vivía en el campo."],
    ["Si j'avais le temps, je ferais du sport.", "Si tuviera tiempo, haría deporte."],
    ["C'est le film dont je t'ai parlé.", "Es la película de la que te hablé."],
    ["Il a dit qu'il viendrait le lendemain.", "Dijo que vendría al día siguiente."]
  ],
  links: [
    ["Vidyalaya · Sujets blancs", "https://www.vidyalaya.fr/fr/articles/delf-b1-entrainement-gratuit", bi("20 exámenes completos con corrección.", "20 sujets complets avec correction.")],
    ["digiSchool · Quiz B1", "https://www.digischool.fr/fle/b1-niveau-independant/revisions", bi("Repaso general del nivel.", "Révision générale du niveau.")],
    ["France Éducation international · DELF B1", "https://france-education-international.fr/diplome/delf-tout-public/niveau-b1", bi("Ejemplos oficiales.", "Exemples officiels.")]
  ],
  games: [
    { type: "fill", title: bi("Autoevaluación (17 preguntas)", "Autoévaluation (17 questions)"), inst: bi("Completa cada frase. Al final verás tu nivel.", "Complète chaque phrase. À la fin, tu verras ton niveau."), final: true, items: [
      { q: "Quand j'___ petit, j'___ à la campagne. " + H("être, habiter"), a: [["étais"], ["habitais"]] },
      { q: "Hier, je ___ quand quelqu'un ___. " + H("lire, sonner"), a: [["lisais"], ["a sonné"]] },
      { q: "Elle ___ à 8 h. " + H("partir, passé composé"), a: [["est partie"]] },
      { q: "Les lettres que j'___ sont sur la table. " + H("écrire, passé composé"), a: [["ai écrites"]] },
      { q: "Il faut que tu ___. " + H("venir"), a: [["viennes"]] },
      { q: "J'espère que vous ___ bien. " + H("aller"), a: [["allez"]] },
      { q: "Bien qu'elle ___ fatiguée, elle travaille. " + H("être"), a: [["soit"]] },
      { q: "Si j'___ le temps, je ___ du sport. " + H("avoir, faire"), a: [["avais"], ["ferais"]] },
      { q: "Si tu ___, tu ___ hier. " + H("étudier, réussir"), a: [["avais étudié"], ["aurais réussi"]] },
      { q: "Tu parles à ta mère ? Oui, je ___ parle.", a: [["lui"]] },
      { q: "Tu as des enfants ? J'___ ai deux.", a: [["en"]] },
      { q: "C'est le film ___ je t'ai parlé.", a: [["dont"]] },
      { q: "C'est la ville ___ je suis né.", a: [["où"]] },
      { q: "« Je viendrai demain. » → Il a dit qu'il ___ ___.", a: [["viendrait"], ["le lendemain"]] },
      { q: "« Qu'est-ce que tu fais ? » → Elle m'a demandé ___ je faisais.", a: [["ce que"]] },
      { q: "___ la pluie, nous sommes sortis.", a: [["malgré"]] },
      { q: "Je travaille ___ mes enfants puissent étudier.", a: [["pour que", "afin que"]] }
    ] }
  ]
});

/* Checklist B1, shared by the final lesson and the study plan page */
const CHECKLIST = [
  bi("Narro con passé composé, imparfait y plus-que-parfait, y concuerdo el participio.", "Je raconte avec le passé composé, l'imparfait et le plus-que-parfait, et j'accorde le participe passé."),
  bi("Uso el futuro (con raíces irregulares) y el condicional (cortesía, consejo, hipótesis).", "J'emploie le futur (avec les radicaux irréguliers) et le conditionnel (politesse, conseil, hypothèse)."),
  bi("Sé cuándo usar el subjuntivo y cuándo evitarlo (espérer, penser que).", "Je sais quand employer le subjonctif et quand l'éviter (espérer, penser que)."),
  bi("Construyo frases con si de los tipos 1, 2 y 3.", "Je construis des phrases avec si des types 1, 2 et 3."),
  bi("Coloco bien COD, COI, y, en, los pronombres dobles y qui / que / dont / où / lequel.", "Je place correctement COD, COI, y, en, les pronoms doubles et qui / que / dont / où / lequel."),
  bi("Transformo frases al discurso indirecto en pasado.", "Je transforme des phrases en discours indirect au passé."),
  bi("Uso tres conectores para cada relación lógica.", "J'utilise trois connecteurs pour chaque relation logique."),
  bi("Hablo dos minutos de mí y defiendo una opinión con ejemplos.", "Je parle deux minutes de moi et je défends une opinion avec des exemples."),
  bi("Resuelvo un juego de rol respetando el registro.", "Je réussis un jeu de rôle en respectant le registre."),
  bi("Escribo 170 palabras organizadas en 45 minutos (texto formal e informal).", "J'écris 170 mots organisés en 45 minutes (texte formel et informel)."),
  bi("Entiendo un informativo de radio en francés fácil.", "Je comprends un journal radio en français facile."),
  bi("Pronuncio [y] / [u], las nasales, [v] / [b] y [z] / [s], y hago los enlaces.", "Je prononce [y] / [u], les nasales, [v] / [b] et [z] / [s], et je fais les liaisons.")
];
LESSONS.autoevaluation.theory[1][1] = CHECKLIST;
