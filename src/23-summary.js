/* ============ Rules summary (page + PDF share this source) ============ */
const SUMMARY = [
  { t: bi("Tiempos del pasado", "Les temps du passé"), r: [
    [bi("<b>Presente + depuis</b> = acción que empezó en el pasado y continúa.", "<b>Présent + depuis</b> = action commencée dans le passé qui continue."), "J'étudie le français depuis trois ans."],
    [bi("<b>Être en train de</b> + infinitivo = acción en curso (nunca «je suis mangeant»).", "<b>Être en train de</b> + infinitif = action en cours (jamais « je suis mangeant »)."), "Je suis en train de manger."],
    [bi("<b>Passé composé</b> = avoir/être en presente + participio. Acción terminada y puntual.", "<b>Passé composé</b> = avoir/être au présent + participe passé. Action terminée et ponctuelle."), "Hier, j'ai vu un film."],
    [bi("Llevan <b>être</b>: los pronominales y ~15 verbos de movimiento (DR & MRS VANDERTRAMP).", "Avec <b>être</b> : les pronominaux et une quinzaine de verbes de mouvement (DR & MRS VANDERTRAMP)."), "Elle est partie. Je me suis levé."],
    [bi("Participio con <b>être</b> → concuerda con el sujeto; con <b>avoir</b> → solo con el COD colocado antes.", "Participe avec <b>être</b> → accord avec le sujet ; avec <b>avoir</b> → accord seulement avec le COD placé avant."), "Les photos que j'ai prises."],
    [bi("<b>Imparfait</b> = raíz de nous + -ais, -ais, -ait, -ions, -iez, -aient (être → ét-).", "<b>Imparfait</b> = radical de nous + -ais, -ais, -ait, -ions, -iez, -aient (être → ét-)."), "nous prenons → je prenais"],
    [bi("<b>Imparfait</b> = decorado, hábito, acción en curso. <b>Passé composé</b> = acontecimiento, acción puntual.", "<b>Imparfait</b> = décor, habitude, action en cours. <b>Passé composé</b> = événement, action ponctuelle."), "Je dormais quand le téléphone a sonné."],
    [bi("<b>Plus-que-parfait</b> = avoir/être en imparfait + participio: acción anterior a otra pasada.", "<b>Plus-que-parfait</b> = avoir/être à l'imparfait + participe : action antérieure à une autre action passée."), "Le train était déjà parti."]
  ] },
  { t: bi("Futuro, condicional e hipótesis", "Futur, conditionnel et hypothèse"), r: [
    [bi("<b>Futur proche</b> = aller + inf. · <b>Passé récent</b> = venir de + inf.", "<b>Futur proche</b> = aller + inf. · <b>Passé récent</b> = venir de + inf."), "Je vais partir. Je viens de finir."],
    [bi("<b>Futur simple</b> = infinitivo + -ai, -as, -a, -ons, -ez, -ont. Raíces irregulares: ser-, aur-, ir-, fer-, viendr-, pourr-, voudr-, devr-, saur-, verr-.", "<b>Futur simple</b> = infinitif + -ai, -as, -a, -ons, -ez, -ont. Radicaux irréguliers : ser-, aur-, ir-, fer-, viendr-, pourr-, voudr-, devr-, saur-, verr-."), "Je vivrai à Lyon."],
    [bi("Después de <b>quand, dès que, lorsque</b> → futuro (no subjuntivo).", "Après <b>quand, dès que, lorsque</b> → futur (pas de subjonctif)."), "Quand je serai grand…"],
    [bi("<b>Conditionnel</b> = raíz del futuro + terminaciones del imparfait. Usos: cortesía, deseo, consejo, hipótesis, información no confirmada.", "<b>Conditionnel</b> = radical du futur + terminaisons de l'imparfait. Emplois : politesse, souhait, conseil, hypothèse, information non confirmée."), "Pourriez-vous m'aider ?"],
    [bi("<b>Si + présent</b> → présent, futur o impératif.", "<b>Si + présent</b> → présent, futur ou impératif."), "Si tu viens, on ira au cinéma."],
    [bi("<b>Si + imparfait</b> → conditionnel présent.", "<b>Si + imparfait</b> → conditionnel présent."), "Si j'avais le temps, je voyagerais."],
    [bi("<b>Si + plus-que-parfait</b> → conditionnel passé.", "<b>Si + plus-que-parfait</b> → conditionnel passé."), "Si tu avais étudié, tu aurais réussi."],
    [bi("Nunca futuro ni condicional justo después de <b>si</b>. Si + il = s'il.", "Jamais de futur ni de conditionnel juste après <b>si</b>. Si + il = s'il."), "Si j'avais (≠ si j'aurais)."]
  ] },
  { t: bi("Subjuntivo e imperativo", "Subjonctif et impératif"), r: [
    [bi("<b>Subjonctif</b> = raíz de ils + -e, -es, -e, -ions, -iez, -ent. Irregulares: sois, aie, aille, fasse, puisse, sache, veuille.", "<b>Subjonctif</b> = radical de ils + -e, -es, -e, -ions, -iez, -ent. Irréguliers : sois, aie, aille, fasse, puisse, sache, veuille."), "ils prennent → que je prenne"],
    [bi("Se usa tras <b>voluntad, obligación, duda y emoción</b> (V.O.D.E.) con dos sujetos distintos. Mismo sujeto → infinitivo.", "Il s'emploie après la <b>volonté, l'obligation, le doute et l'émotion</b> (V.O.D.E.) avec deux sujets différents. Même sujet → infinitif."), "Je veux que tu viennes. / Je veux venir."],
    [bi("<b>Indicativo</b> tras espérer que, penser que, même si, après que. <b>Subjuntivo</b> tras je ne pense pas que, bien que, pour que, avant que.", "<b>Indicatif</b> après espérer que, penser que, même si, après que. <b>Subjonctif</b> après je ne pense pas que, bien que, pour que, avant que."), "J'espère que tu vas bien."],
    [bi("<b>Impératif</b>: tu / nous / vous sin sujeto; los verbos en -er pierden la -s (salvo ante y / en).", "<b>Impératif</b> : tu / nous / vous sans sujet ; les verbes en -er perdent le -s (sauf devant y / en)."), "Parle ! Vas-y !"],
    [bi("Imperativo afirmativo: pronombres detrás con guion. Negativo: delante.", "Impératif affirmatif : pronoms après, avec un trait d'union. Négatif : avant."), "Donne-le-moi ! Ne me le donne pas !"]
  ] },
  { t: bi("Pronombres", "Pronoms"), r: [
    [bi("<b>COD</b>: le, la, les. <b>COI</b> (verbo + à + persona): lui, leur.", "<b>COD</b> : le, la, les. <b>COI</b> (verbe + à + personne) : lui, leur."), "Je l'aide. Je lui téléphone."],
    [bi("<b>y</b> = lugar o à + cosa. <b>en</b> = de + cosa o cantidad. Personas tras penser à → pronombre tónico.", "<b>y</b> = lieu ou à + chose. <b>en</b> = de + chose ou quantité. Personne après penser à → pronom tonique."), "J'y vais. J'en ai deux. Je pense à elle."],
    [bi("<b>Orden</b>: me/te/se/nous/vous → le/la/les → lui/leur → y → en.", "<b>Ordre</b> : me/te/se/nous/vous → le/la/les → lui/leur → y → en."), "Je le lui explique. Il y en a trois."],
    [bi("<b>Relativos</b>: qui (sujeto), que (COD), dont (de + nombre), où (lugar y tiempo), lequel (tras preposición).", "<b>Relatifs</b> : qui (sujet), que (COD), dont (de + nom), où (lieu et temps), lequel (après une préposition)."), "Le livre dont je t'ai parlé. Le jour où…"]
  ] },
  { t: bi("Informar y reportar", "Informer et rapporter"), r: [
    [bi("<b>Gérondif</b> = en + raíz de nous + -ant: mismo sujeto; simultaneidad, modo o condición.", "<b>Gérondif</b> = en + radical de nous + -ant : même sujet ; simultanéité, manière ou condition."), "Elle chante en cuisinant."],
    [bi("<b>Voz pasiva</b> = être (en el tiempo del verbo activo) + participio concordado + par (de con sentimientos).", "<b>Voix passive</b> = être (au temps du verbe actif) + participe accordé + par (de avec les sentiments)."), "Le musée a été inauguré par le maire."],
    [bi("<b>Discurso indirecto en pasado</b>: présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel, impératif → de + inf.", "<b>Discours indirect au passé</b> : présent → imparfait, passé composé → plus-que-parfait, futur → conditionnel, impératif → de + inf."), "Il a dit qu'il viendrait le lendemain."],
    [bi("Preguntas indirectas con <b>si, ce que, ce qui</b>; nunca est-ce que.", "Questions indirectes avec <b>si, ce que, ce qui</b> ; jamais est-ce que."), "Il m'a demandé ce que je faisais."]
  ] },
  { t: bi("Frase, conectores y comparación", "Phrase, connecteurs et comparaison"), r: [
    [bi("<b>Causa</b>: parce que, puisque, comme (al inicio), car; grâce à (+), à cause de (−).", "<b>Cause</b> : parce que, puisque, comme (en début de phrase), car ; grâce à (+), à cause de (−)."), "Comme il pleuvait, je suis resté."],
    [bi("<b>Concesión</b>: bien que + subj.; même si + ind.; malgré + nombre.", "<b>Concession</b> : bien que + subj. ; même si + ind. ; malgré + nom."), "Malgré la pluie, nous sommes sortis."],
    [bi("«Después de + infinitivo» = <b>après avoir / être</b> + participio.", "« Después de + infinitivo » = <b>après avoir / être</b> + participe."), "Après avoir mangé, nous sommes partis."],
    [bi("<b>Comparativos</b>: plus / aussi / moins + adj. + que; plus de / autant de / moins de + nombre. bon → meilleur, bien → mieux, mauvais → pire.", "<b>Comparatifs</b> : plus / aussi / moins + adj. + que ; plus de / autant de / moins de + nom. bon → meilleur, bien → mieux, mauvais → pire."), "Elle parle mieux que moi."],
    [bi("<b>Negación</b>: ne… plus / jamais / rien / personne / aucun / que. En passé composé: je n'ai rien vu, je n'ai vu personne.", "<b>Négation</b> : ne… plus / jamais / rien / personne / aucun / que. Au passé composé : je n'ai rien vu, je n'ai vu personne."), "Personne n'est venu."],
    [bi("<b>Posesivos</b> concuerdan con la cosa poseída; mon / ton / son ante femenino con vocal.", "Les <b>possessifs</b> s'accordent avec l'objet possédé ; mon / ton / son devant un féminin à voyelle."), "sa voiture (de Paul), mon amie"],
    [bi("<b>Mise en relief</b>: c'est… qui / que; ce qui / ce que / ce dont…, c'est… El verbo concuerda con el pronombre.", "<b>Mise en relief</b> : c'est… qui / que ; ce qui / ce que / ce dont…, c'est… Le verbe s'accorde avec le pronom."), "C'est moi qui ai organisé la fête."],
    [bi("<b>Nominalización</b>: -tion, -sion, -ure, -ée, -té, -esse → femenino; -ment, -age → masculino.", "<b>Nominalisation</b> : -tion, -sion, -ure, -ée, -té, -esse → féminin ; -ment, -age → masculin."), "l'ouverture, le changement"]
  ] },
  { t: bi("Pronunciación y errores frecuentes", "Prononciation et erreurs fréquentes"), r: [
    [bi("La -e final es muda; las consonantes finales también, salvo <b>C, R, F, L</b> (CaReFuL). La -ent de ils parlent es muda.", "Le -e final est muet ; les consonnes finales aussi, sauf <b>C, R, F, L</b> (CaReFuL). Le -ent de ils parlent est muet."), "le sac, la mer, le chef, le sel"],
    [bi("<b>Enlace</b> obligatorio tras determinantes y pronombres (les‿amis, ils‿ont [z]); nunca después de et.", "<b>Liaison</b> obligatoire après les déterminants et les pronoms (les‿amis, ils‿ont [z]) ; jamais après et."), "ils ont [z] ≠ ils sont [s]"],
    [bi("<b>Errores típicos</b>: J'ai 25 ans · je vais chez le médecin · beaucoup d'amis · les gens sont · je mange du pain.", "<b>Erreurs typiques</b> : J'ai 25 ans · je vais chez le médecin · beaucoup d'amis · les gens sont · je mange du pain."), bi("Emociones en -eur: femeninas (la peur, la douleur).", "Émotions en -eur : féminines (la peur, la douleur).")]
  ] }
];

/* ============ Conjugation reference ============ */
const CONJ_PARLER = {
  h: ["", "Présent", "Passé composé", "Imparfait", "Futur", "Conditionnel", "Subjonctif"],
  r: [
    ["je", "parle", "ai parlé", "parlais", "parlerai", "parlerais", "parle"],
    ["tu", "parles", "as parlé", "parlais", "parleras", "parlerais", "parles"],
    ["il / elle", "parle", "a parlé", "parlait", "parlera", "parlerait", "parle"],
    ["nous", "parlons", "avons parlé", "parlions", "parlerons", "parlerions", "parlions"],
    ["vous", "parlez", "avez parlé", "parliez", "parlerez", "parleriez", "parliez"],
    ["ils / elles", "parlent", "ont parlé", "parlaient", "parleront", "parleraient", "parlent"]
  ]
};
const CONJ_ETRE_AVOIR = {
  h: ["", "ÊTRE", "AVOIR"],
  r: [
    ["Présent", "suis, es, est, sommes, êtes, sont", "ai, as, a, avons, avez, ont"],
    ["Imparfait", "étais, étais, était, étions, étiez, étaient", "avais, avais, avait, avions, aviez, avaient"],
    ["Futur", "serai, seras, sera, serons, serez, seront", "aurai, auras, aura, aurons, aurez, auront"],
    ["Conditionnel", "serais, serais, serait, serions, seriez, seraient", "aurais, aurais, aurait, aurions, auriez, auraient"],
    ["Subjonctif", "sois, sois, soit, soyons, soyez, soient", "aie, aies, ait, ayons, ayez, aient"]
  ]
};
/* [verbe, présent je/nous/ils, participe, radical futur, subjonctif que je] */
const IRREG = [
  ["aller", "vais / allons / vont", "allé (être)", "ir-", "aille"],
  ["faire", "fais / faisons / font", "fait", "fer-", "fasse"],
  ["venir", "viens / venons / viennent", "venu (être)", "viendr-", "vienne"],
  ["pouvoir", "peux / pouvons / peuvent", "pu", "pourr-", "puisse"],
  ["vouloir", "veux / voulons / veulent", "voulu", "voudr-", "veuille"],
  ["devoir", "dois / devons / doivent", "dû", "devr-", "doive"],
  ["savoir", "sais / savons / savent", "su", "saur-", "sache"],
  ["prendre", "prends / prenons / prennent", "pris", "prendr-", "prenne"],
  ["voir", "vois / voyons / voient", "vu", "verr-", "voie"],
  ["dire", "dis / disons / disent", "dit", "dir-", "dise"],
  ["boire", "bois / buvons / boivent", "bu", "boir-", "boive"],
  ["mettre", "mets / mettons / mettent", "mis", "mettr-", "mette"],
  ["écrire", "écris / écrivons / écrivent", "écrit", "écrir-", "écrive"],
  ["lire", "lis / lisons / lisent", "lu", "lir-", "lise"],
  ["connaître", "connais / connaissons / connaissent", "connu", "connaîtr-", "connaisse"],
  ["recevoir", "reçois / recevons / reçoivent", "reçu", "recevr-", "reçoive"]
];

const PLAN_WEEKS = [
  ["1-2", bi("Pasados y su contraste", "Les passés et leur contraste"), bi("Formato del examen, primera comprensión oral", "Format de l'examen, première compréhension orale")],
  ["3-4", bi("Plus-que-parfait, futuros, pronombres", "Plus-que-parfait, futurs, pronoms"), bi("Mensaje amistoso, oral parte 1", "Message amical, oral partie 1")],
  ["5-6", bi("Condicional, frases con si, relativos", "Conditionnel, phrases avec si, relatifs"), bi("Carta formal, oral parte 2", "Lettre formelle, oral partie 2")],
  ["7-8", bi("Subjuntivo, conectores", "Subjonctif, connecteurs"), bi("Texto de opinión, oral parte 3", "Texte d'opinion, oral partie 3")],
  ["9-10", bi("Discurso indirecto, voz pasiva, gerundio", "Discours indirect, voix passive, gérondif"), bi("Primer examen de práctica", "Premier examen blanc")],
  ["11-12", bi("Mise en relief, nominalización, repaso", "Mise en relief, nominalisation, révision"), bi("Segundo y tercer examen de práctica", "Deuxième et troisième examens blancs")]
];
const PLAN_DAYS = [
  [bi("Lunes", "Lundi"), bi("Nueva regla + ejercicios", "Nouvelle règle + exercices"), "Journal en français facile (RFI)"],
  [bi("Martes", "Mardi"), bi("Vocabulario + 5 frases personales", "Vocabulaire + 5 phrases personnelles"), bi("Pares mínimos en voz alta", "Paires minimales à voix haute")],
  [bi("Miércoles", "Mercredi"), bi("Artículo tipo DELF", "Article de type DELF"), bi("Escucha con transcripción", "Écoute avec transcription")],
  [bi("Jueves", "Jeudi"), bi("Texto de 170 palabras", "Texte de 170 mots"), bi("Autocorrección", "Autocorrection")],
  [bi("Viernes", "Vendredi"), bi("Grábate 3 minutos (oral parte 3)", "Enregistrez-vous 3 minutes (oral partie 3)"), bi("Anota 3 errores", "Notez 3 erreurs")],
  [bi("Sábado", "Samedi"), bi("Serie o pódcast en francés", "Série ou podcast en français"), bi("5 expresiones nuevas", "5 expressions nouvelles")],
  [bi("Domingo", "Dimanche"), bi("Mini-test (autoevaluación)", "Mini-test (autoévaluation)"), bi("Planifica la semana", "Planifier la semaine")]
];
