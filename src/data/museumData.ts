import { Cacicazgo, Cacique, Deidad, CeramicaPieza, PilarMonexico, QuizQuestion, TruequeItem } from '../types/museum';

export const CACICAZGOS_DATA: Cacicazgo[] = [
  {
    id: 'nicaraos',
    nombre: 'Nicaraos',
    etnia: 'Nahua - Pipil',
    familiaLinguistica: 'Uto-Azteca (Náhuatl del Sur)',
    regionHistorica: 'Istmo de Rivas, Isla de Ometepe y costa occidental del Gran Lago de Nicaragua (Cocibolca)',
    ciudadesPrincipales: ['Quauhcapolca (Rivas actual)', 'Ometepe (Dos Montañas)', 'Mistega', 'Pochocoyo'],
    descripcionCorta: 'Población de filiación nahua que emigró desde el centro de México guiada por la profecía sagrada de fundar su imperio donde hallaran un gran lago con dos volcanes en su seno.',
    descripcionCompleta: 'Los Nicaraos constituyeron uno de los señoríos más refinados y complejos de Centroamérica. Según las crónicas indígenas registradas por Oviedo y Bobadilla en el siglo XVI, sus antepasados emprendieron una marcha migratoria milenaria huyendo de los Olmecas y Toltecas. Llegaron a las fértiles tierras del istmo de Rivas alrededor del año 1200 d.C., desplazando a etnias anteriores. Su lengua era una variante musical del náhuatl antiguo y poseían un sistema jerárquico sofisticado con un cacique supremo gobernante, nobleza sacerdotal, calpullis comunitarios y guerreros de élite.',
    organizacionPolitica: 'Cacicazgo teocrático y militarizado encabezado por el gobernante supremo (Cacique o Tlatoani local), asistido por un cuerpo de sacerdotes encargados de los códices astronómicos y sacrificios rituales.',
    economiaYRecursos: [
      'Moneda oficial basada en almendras seleccionadas de cacao',
      'Cultivo intensivo de maíz, frijol negro, chía, tabaco y algodón',
      'Pesca lacustre en el Cocibolca y explotación de sal marina',
      'Textilería teñida con caracol púrpura del Pacífico y añil'
    ],
    legadoCultural: 'Aportaron la cosmovisión nahua del Quinto Sol a Nicaragua, la toponimia náhuatl aún presente (Ometepe, Zapatera, Rivas/Nicaragua), el culto a Tamagastad y la alta elocuencia filosófica.',
    simbolo: 'Cacao Sagrado y Doble Volcán',
    imagenUrl: '/img/mapaNicaraos.jfif'
  },
  {
    id: 'chorotegas',
    nombre: 'Chorotegas',
    etnia: 'Mangue',
    familiaLinguistica: 'Oto-Mangue',
    regionHistorica: 'Pacífico Central y Norte: Masaya, Carazo, Managua, Granada, León y la Península de Nicoya',
    ciudadesPrincipales: ['Diriamba (Colina de los Sabios)', 'Nindirí', 'Jalteva', 'Monimbó', 'Nagarote'],
    descripcionCorta: 'Una de las culturas más antiguas, extensas y guerreras del territorio nicaragüense, pioneros de la alfarería polícroma y gobernados por el democrático consejo del Monexico.',
    descripcionCompleta: 'Los Chorotegas o Mangues habitaron el occidente y centro de Nicaragua desde aproximadamente el año 800 d.C. Sobresalieron por su feroz espíritu de independencia y un modelo cívico extraordinario: a diferencia de las monarquías absolutistas europeas, el poder supremo residía en el "Monexico", un senado de ancianos venerables ("guegues") que elegían y destituían a los capitanes de guerra según su desempeño. Fueron maestros consumados de la cerámica polícroma, la arquitectura de plazas ceremoniales y la fundición de oro aluvional.',
    organizacionPolitica: 'República aristocrática-comunal regida por el Monexico. Las decisiones de paz, guerra, juicios penales y reparto de cosechas se decidían por consenso entre los ancianos electos de cada barrio.',
    economiaYRecursos: [
      'Alfarería polícroma exportada hasta Panamá y el norte de Mesoamérica',
      'Producción de miel de abejas nativas sin aguijón (meliponas)',
      'Caza de venado cola blanca, sahíno y aves de plumaje sagrado',
      'Intercambio en los Tiangues (mercados comunales al aire libre)'
    ],
    legadoCultural: 'Creadores del sistema democrático del Monexico, la tradición alfarera viva de San Juan de Oriente y la memoria inmortal de caciques rebeldes como Diriangén.',
    simbolo: 'Jaguar Solar y Cerámica Polícroma',
    imagenUrl: '/img/mapaChorotegas.jfif'
  },
  {
    id: 'sutiabas',
    nombre: 'Sutiabas',
    etnia: 'Maribios / Subtiava',
    familiaLinguistica: 'Hokano - Tlapaneca (Familia Yopi-Tlapaneca)',
    regionHistorica: 'Llanuras de León, cordillera de los Maribios y costa del Pacífico Occidental',
    ciudadesPrincipales: ['Sutiaba (Gran Poblado)', 'Telica', 'Quezalguaque', 'Posoltega'],
    descripcionCorta: 'Guerreros y artesanos textiles indoblegables del occidente nicaragüense, defensores de su identidad comunal y custodios de la cordillera volcánica de los Maribios.',
    descripcionCompleta: 'Los Sutiabas ocuparon las planicies cálidas y fértiles del occidente nicaragüense, adyacentes a la cadena volcánica de los Maribios. Su lengua poseía raíces emparentadas con los tlapanecos de Guerrero, México, testimonio de las oleadas migratorias arcaicas. Se caracterizaron por su cohesión social inquebrantable, la confección de finísimas mantas de algodón hilado a mano, y una tradición de resistencia comunitaria que perduró tras la conquista española, conservando sus títulos reales de tierras comunitarias.',
    organizacionPolitica: 'Comunidad organizada en hermandades barriales y consejos de ancianos locales que coordinaban las labores agrícolas, la defensa territorial y la custodia de los sitios ceremoniales en los volcanes.',
    economiaYRecursos: [
      'Industria textil de algodón hilado en husos de arcilla decorada',
      'Cultivo de cacao en las faldas húmedas de los volcanes de Telica',
      'Cestería resistente y tallado en jícaras y maderas preciosas',
      'Agricultura de tubérculos nativos, maíz dulce y calabazas'
    ],
    legadoCultural: 'La identidad comunal de la actual Comunidad Indígena de Sutiaba en León, el arte tradicional del aserrín y las celebraciones sincréticas que honran la raíz prehispánica.',
    simbolo: 'Flor de Izote y Hilado de Algodón',
    imagenUrl: '/img/mapaMaribios.jfif'
  }
];

export const CACIQUES_DATA: Cacique[] = [
  {
    id: 'diriangen',
    nombre: 'Diriangén',
    nombreNativo: 'Diriangén ("Señor de las Alturas")',
    titulo: 'Guerrero Supremo y Cacique de los Chorotegas',
    pueblo: 'Pueblo Chorotega (Diriamba / Carazo)',
    periodo: 'Siglo XVI (Aprox. 1490 - 1530)',
    imagenUrl: '/img/caciqueDiriangen.jfif',
    fallbackIcon: 'warrior',
    resumen: 'El primer gran caudillo de la resistencia indígena armada contra la conquista española en Centroamérica. Encabezó la heroica emboscada de Nequecheri el 17 de abril de 1523.',
    historiaCompleta: `Diriangén fue el señor principal del cacicazgo chorotega con cabecera en Diriamba. Joven, apuesto y de imponente presencia marcial, se presentó ante el conquistador Gil González Dávila en abril de 1523 rodeado de un séquito de quinientos guerreros, cada uno portando un pavo de la tierra, hachas de oro fino y penachos de quetzal.

Cuando los españoles le exigieron someterse al Rey de Castilla y bautizarse, Diriangén escuchó con serenidad y diplomacia, prometiendo regresar con una respuesta definitiva en el término de tres días.

Cumplido el plazo, el 17 de abril de 1523, Diriangén no regresó a arrodillarse: volvió a la cabeza de cuatro mil guerreros armados con flechas envenenadas, macanas con filosas navajas de obsidiana y lanzas de madera dura, atacando a los españoles en el histórico paraje de Nequecheri. Esta batalla obligó a las tropas invasoras a emprender una humillante retirada hacia el sur, consagrando a Diriangén como símbolo eterno de dignidad e insumisión indígena.`,
    hazañaHistorica: 'Obligó a Gil González Dávila a retroceder y huir de tierras nicaragüenses tras una táctica militar brillante en la batalla de Nequecheri.',
    fraseCelebre: '"Regresaré dentro de tres días con mi respuesta..." (Cumplió su promesa apareciendo al frente de miles de guerreros)',
    rasgosLiderazgo: [
      'Estratega militar impecable y maestro del engaño táctico',
      'Orgullo absoluto por la soberanía de sus antepasados',
      'Liderazgo carismático capaz de unir a diversos clanes chorotegas',
      'Rechazo inquebrantable a entregar sus tierras y dioses'
    ],
    region: 'Meseta de los Pueblos (Diriamba, Jinotepe, San Marcos)'
  },
  {
    id: 'nicarao',
    nombre: 'Nicarao (Macuilmiquiztli)',
    nombreNativo: 'Macuilmiquiztli ("Cinco Muerte" en Náhuatl)',
    titulo: 'Sabio Filósofo y Gobernante Supremo de los Nicaraos',
    pueblo: 'Pueblo Nahua - Nicarao (Quauhcapolca / Rivas)',
    periodo: 'Siglo XVI (Aprox. 1485 - 1528)',
    imagenUrl: '/img/caciqueNicarao.jfif',
    fallbackIcon: 'sage',
    resumen: 'El líder intelectual y político que protagonizó el más célebre diálogo filosófico y ontológico entre el mundo mesoamericano y el pensamiento renacentista europeo.',
    historiaCompleta: `Macuilmiquiztli gobernaba el fértil y próspero señorío de Quauhcapolca (actual departamento de Rivas) a orillas del inmenso lago Cocibolca. Los cronistas castellanos lo denominaron erróneamente "Cacique Nicaragua" o "Nicarao", nombre que con el tiempo bautizó a toda la nación.

En marzo de 1523 recibió pacíficamente a la expedición de Gil González Dávila. Lejos de ser un encuentro pasivo, Macuilmiquiztli interrogó al sacerdote Diego de Agüero y al capitán español con preguntas de una hondura metafísica y científica asombrosa:
¿Quién sostiene al Sol, la Luna y las Estrellas en el firmamento sin que caigan?
¿De dónde viene el viento y hacia dónde marcha el agua que riega la tierra?
¿Cuándo y cómo se acabará el mundo terrenal?
¿Por qué tan pocos hombres aman con tanta codicia un metal amarillo (el oro) que no alimenta ni viste?

Macuilmiquiztli demostró la enorme madurez científica y espiritual del pensamiento mesoamericano, protegiendo a su pueblo mediante la astucia diplomática mientras evaluaba el peligro real de las armas de fuego y la caballería enemiga.`,
    hazañaHistorica: 'Formuló el cuestionario filosófico más profundo registrado en las crónicas de Indias y dio su raíz histórica al nombre de Nicaragua.',
    fraseCelebre: '"¿Por qué tan pocos hombres desean tanto oro, si no lo pueden comer ni beber?"',
    rasgosLiderazgo: [
      'Profundo conocimiento astronómico, teológico y ético',
      'Capacidad dialéctica superior a la de sus interlocutores extranjeros',
      'Prudencia de Estado para salvaguardar a su población civil',
      'Maestría en la negociación geopolítica'
    ],
    region: 'Istmo de Rivas y Ometepe'
  },
  {
    id: 'agateyte',
    nombre: 'Agateyte',
    nombreNativo: 'Acatl-teyte ("El Señor del Cañaveral")',
    titulo: 'Soberano de Tezoatega y Gran Administrador del Comercio',
    pueblo: 'Pueblo Chorotega / Nahua-Influenciado (Occidente)',
    periodo: 'Siglo XVI (Aprox. 1475 - 1526)',
    imagenUrl: '/img/caciqueAgateyte.jfif',
    fallbackIcon: 'council',
    resumen: 'Gobernante del señorío más populoso y rico del Pacífico occidental (Chinandega), recordado por el esplendor de sus plazas comerciales y su hábil administración tributaria.',
    historiaCompleta: `Agateyte dominaba el extenso señorío de Tezoatega, ubicado en los alrededores de lo que hoy es El Viejo y Chinandega. Su capital contaba con más de veinte mil habitantes y poseía uno de los Tiangues (mercados) más concurridos de toda la América Central prehispánica.

Por sus plazas transitaban comerciantes que intercambiaban oro de las minas del norte, sal de las costas, miel de abejas nativas, obsidiana volcánica y plumas finas de quetzal provenientes de las tierras altas.

Agateyte administraba este enclave cosmopolita con una red de jueces de mercado y vigilantes de pesas y medidas que aseguraban que ninguna almendra de cacao fuera adulterada. Su habilidad política le permitió mantener el equilibrio entre los pueblos circundantes y conservar una prosperidad económica sin precedentes en la región.`,
    hazañaHistorica: 'Consolidó a Tezoatega como el epicentro financiero, comercial y diplomático del litoral pacífico nicaragüense prehispánico.',
    fraseCelebre: '"El mercado es el corazón de la paz: donde los hombres comercian con justicia, las armas reposan."',
    rasgosLiderazgo: [
      'Visión económica de vanguardia y fomento de los mercados libres',
      'Habilidad para regular normas judiciales y comerciales estrictas',
      'Protector de las artes orfebres y la cerámica utilitaria',
      'Poder de convocatoria regional ante múltiples etnias'
    ],
    region: 'Chinandega y El Viejo'
  },
  {
    id: 'tenderi',
    nombre: 'Tenderí',
    nombreNativo: 'Tenderí ("Guardián del Fuego de Nindirí")',
    titulo: 'Sabio Consejero de Nindirí y Orador del Monexico',
    pueblo: 'Pueblo Chorotega (Nindirí / Masaya)',
    periodo: 'Siglo XVI (Aprox. 1480 - 1529)',
    imagenUrl: '/img/caciqueTenderí.jfif',
    fallbackIcon: 'sage',
    resumen: 'Líder venerado de Nindirí y voz rectora del Monexico. Destacó por su elocuencia en la defensa de los derechos ancestrales y su consulta constante a la asamblea comunitaria.',
    historiaCompleta: `Tenderí fue el cacique y orador principal del señorío chorotega de Nindirí, asentado en el borde de la exuberante laguna y a la sombra del humeante volcán Masaya (Popogatepe). 

A diferencia de otros gobernantes que decidían en solitario, Tenderí era el máximo defensor de la autoridad soberana del Monexico. Jamás tomaba una decisión militar o de hospitalidad sin convocar previamente al círculo de los "guegues" en la plaza sagrada.

Fray Francisco de Bobadilla y otros cronistas registraron con admiración la solemnidad con que Tenderí consultaba la voluntad colectiva de su pueblo. En sus discursos denunciaba la codicia colonial y explicaba que el verdadero valor de una sociedad reside en la memoria de los abuelos, la fertilidad de las tierras comunales y el respeto sagrado al fuego de los volcanes.`,
    hazañaHistorica: 'Defendió la soberanía de las decisiones asamblearias y el rol supremo del Monexico frente al autoritarismo absolutista invasor.',
    fraseCelebre: '"Un líder que no escucha la voz del Monexico camina ciego hacia el abismo."',
    rasgosLiderazgo: [
      'Profundo respeto a la deliberación democrática y comunitaria',
      'Elocuente orador en lengua mangue y mediador en disputas tribales',
      'Custodio de los ritos sagrados vinculados al volcán Popogatepe',
      'Guardián de la memoria y genealogías de los ancianos'
    ],
    region: 'Nindirí, Masaya y Meseta de los Pueblos'
  }
];

export const PILARES_MONEXICO: PilarMonexico[] = [
  {
    id: 'asamblea_guegues',
    titulo: 'El Círculo de los "Guegues" (Ancianos Sabios)',
    subtitulo: 'Autoridad moral y experiencia acumulada',
    descripcion: 'El Monexico estaba integrado por los ancianos más respetados de cada calpulli o barrio comunitario. Se consideraba que solo quien había vivido suficientes ciclos agrícolas y batallas poseía la serenidad de juicio para decidir el destino colectivo.',
    significadoDemocrático: 'Freno absoluto al capricho individual: ningún cacique ni joven guerrero podía imponer su voluntad personal sobre la comunidad sin el consenso deliberado del consejo.',
    detallePractico: 'Se reunían al atardecer en la plaza del Tiangue, sentados en petates ceremoniales y acompañados por braseros de copal que purificaban el ambiente de la asamblea.',
    icono: 'Users',
    imagenUrl: '/img/monexico.jfif'
  },
  {
    id: 'eleccion_teythe',
    titulo: 'Elección y Revocabilidad del "Teythe" (Capitán)',
    subtitulo: 'Poder militar subordinado al poder civil',
    descripcion: 'Para tiempos de guerra o crisis territorial, el Monexico nombraba a un líder militar llamado "Teythe". Sin embargo, este nombramiento no era vitalicio ni hereditario: estaba condicionado a su rectitud y victorias.',
    significadoDemocrático: 'Si el Teythe abusaba de su posición, actuaba con cobardía o traicionaba los pactos comunales, el Monexico tenía la facultad legítima de destituirlo de inmediato y juzgarlo.',
    detallePractico: 'Este principio de revocatoria de mandato prehispánico representó un avance democrático siglos antes de que se teorizara en las constituciones modernas de occidente.',
    icono: 'ShieldCheck',
    imagenUrl: '/img/caciqueDiriangen.jfif'
  },
  {
    id: 'justicia_reparadora',
    titulo: 'Sistema Judicial Oral y Reparación del Daño',
    subtitulo: 'La palabra empeñada como ley suprema',
    descripcion: 'Los conflictos por linderos de siembra, robos o afrentas personales no se resolvían mediante cárceles, sino a través de juicios públicos orales donde acusador y acusado exponían sus razones frente al Monexico.',
    significadoDemocrático: 'Justicia accesible, transparente y sin burocracias: el castigo principal era la compensación a la víctima (frecuentemente en almendras de cacao, mantas o trabajo comunitario forzado).',
    detallePractico: 'Mentir deliberadamente ante el Monexico era castigado con el destierro o la servidumbre comunal, pues la palabra oral era el pilar que sostenía la confianza social.',
    icono: 'Scale',
    imagenUrl: '/img/Gemini_Generated_Image_2qdu7k2qdu7k2qdu.jfif'
  },
  {
    id: 'distribucion_comunal',
    titulo: 'Custodia y Reparto de las Tierras Comunales',
    subtitulo: 'La tierra como madre colectiva, no mercancía privada',
    descripcion: 'Entre los pueblos originarios de Nicaragua no existía la propiedad latifundista de la tierra. Las parcelas de cultivo eran patrimonio colectivo asignado temporalmente a cada familia según su necesidad de sustento.',
    significadoDemocrático: 'Garantía del derecho a la alimentación: el Monexico redistribuía periódicamente las tierras comunales para evitar la concentración de riqueza y el desamparo de viudas y huérfanos.',
    detallePractico: 'Parte de la cosecha de maíz y frijol de cada familia se destinaba a silos públicos ("trojes") administrados por el consejo para tiempos de sequía o plagas.',
    icono: 'Sprout',
    imagenUrl: '/img/mapaChorotegas.jfif'
  }
];

export const DEIDADES_PANTEON: Deidad[] = [
  {
    id: 'tamagastad',
    nombre: 'Tamagastad y Cipattoval',
    dominio: 'Pareja Creadora Primordial del Sol y el Universo',
    descripcion: 'Espíritus divinos supremos que crearon el cielo, la tierra, las fuentes de agua dulce y a la humanidad. Habitan en el oriente cósmico donde nace el sol radiante.',
    simbologia: 'El disco solar naciente y la energía vital creadora.',
    imagenUrl: '/img/tamagastad.jfif'
  },
  {
    id: 'quiateot',
    nombre: 'Quiateot',
    dominio: 'Señor de las Lluvias, el Trueno y las Cosechas',
    descripcion: 'Deidad análoga a Tláloc en la tradición mesoamericana. De su voluntad dependía que las nubes regaran los maizales del Pacífico o que la sequía azotara los sembrados.',
    simbologia: 'Nubes oscuras, gotas de lluvia y el relámpago serpentino.',
    imagenUrl: '/img/quiateot.jfif'
  },
  {
    id: 'chiquinaut',
    nombre: 'Chiquinaut',
    dominio: 'Señor del Viento y Mensajero de los Cerros',
    descripcion: 'El aliento vital que limpia el aire, dispersa las semillas y conecta la voz de los chamanes con los antepasados que habitan en los volcanes.',
    simbologia: 'Espiral de viento y caracol marino ceremonial.',
    imagenUrl: '/img/Gemini_Generated_Image_fbin9rfbin9rfbin.jfif'
  },
  {
    id: 'mixcoatl',
    nombre: 'Mixcoatl',
    dominio: 'Patrono de la Cacería, las Nubes y la Vía Láctea',
    descripcion: 'Protector de los rastreadores en la espesura de la selva y guía de las almas guerreras a través del río celeste de estrellas.',
    simbologia: 'Arco, flecha con punta de pedernal y jaguar acechante.',
    imagenUrl: '/img/Gemini_Generated_Image_x1x2ycx1x2ycx1x2.jfif'
  }
];

export const CERAMICA_PIEZAS: CeramicaPieza[] = [
  {
    id: 'papagayo_policromo',
    nombre: 'Vasija Trípode Papagayo Polícromo',
    estilo: 'Papagayo Polícromo (Periodo Policromo Medio, 800 - 1200 d.C.)',
    periodoAproximado: 'Gran Nicoya, circa 900 d.C.',
    material: 'Arcilla cocida con engobe blanco marfil y pigmentos minerales rojos, ocres y negro de manganeso.',
    descripcion: 'Una de las cumbres estéticas de la alfarería precolombina de Nicaragua. Con tres soportes modelados en forma de cabezas de jaguar o aves rapaces, decorada con franjas geométricas y efigies de serpientes emplumadas.',
    motivosDecorativos: ['Serpiente Emplumada (Quetzalcóatl / Gugumatz)', 'Efigies zoomorfas de jaguar', 'Volutas de nubes y rayos solares'],
    usoCeremonial: 'Utilizada para servir y brindar con chicha de maíz fermentada y cacao amargo durante los tratados de paz y elecciones del Monexico.',
    imagenUrl: '/img/vasijatripode.jfif'
  },
  {
    id: 'luna_policromo',
    nombre: 'Urna Efigie Luna Polícromo',
    estilo: 'Luna Polícromo (Periodo Policromo Tardío, 1200 - 1520 d.C.)',
    periodoAproximado: 'Isla de Ometepe y Zapatera, circa 1350 d.C.',
    material: 'Pasta de arcilla de grano fino con engobe cremoso y líneas extremadamente delgadas en rojo vino y negro carbón.',
    descripcion: 'Elegante y enigmática cerámica funeraria y ritual hallada principalmente en las islas del lago Cocibolca. Sus trazos finos recuerdan los códices mayas y mixtecos.',
    motivosDecorativos: ['Monos araña estilizados con colas enrolladas', 'Caras humanas esquemáticas con antifaz ceremonial', 'Grecas escalonadas'],
    usoCeremonial: 'Custodiaba reliquias sagradas de antepasados ilustres y se ofrendaba en los santuarios de piedra volcánica de Zapatera.',
    imagenUrl: '/img/urna.jfif'
  },
  {
    id: 'metate_zoomorfo',
    nombre: 'Metate Ceremonial de Piedra Volcánica',
    estilo: 'Escultura Lítica Gran Nicoya',
    periodoAproximado: 'Circa 500 - 1400 d.C.',
    material: 'Piedra basáltica porosa volcánica esculpida en una sola pieza con cinceles de pedernal.',
    descripcion: 'Mesa de molienda ritual tallada en bulto con cabeza esculpida de jaguar felino y tres patas caladas con motivos geométricos entrelazados.',
    motivosDecorativos: ['Mandíbula feroz de jaguar con colmillos salientes', 'Entrelazados textiles en los soportes', 'Plataforma cóncava pulida'],
    usoCeremonial: 'Destinado exclusivamente a la molienda del cacao ceremonial y hierbas medicinales utilizadas por los chamanes de la corte.',
    imagenUrl: '/img/metate.jfif'
  }
];

export const TRUEQUE_MERCADO_ITEMS: TruequeItem[] = [
  {
    id: 'conejo',
    nombre: 'Un Conejo Silvestre de Monte',
    costoCacaoAlmendras: 10,
    categoria: 'animal',
    descripcion: 'Carne fresca y piel cazada en los matorrales del Pacífico. Registro exacto del cronista Gonzalo Fernández de Oviedo (1528).',
    fuenteCronista: 'Gonzalo Fernández de Oviedo, Historia General y Natural de las Indias',
    imagenUrl: '/img/Gemini_Generated_Image_2qdu7k2qdu7k2qdu.jfif'
  },
  {
    id: 'esclavo',
    nombre: 'Un Esclavo Prisionero de Guerra',
    costoCacaoAlmendras: 100,
    categoria: 'bien_lujo',
    descripcion: 'Cautivo de guerra empleado para las labores agrícolas pesadas o asignado como pago por compensación judicial.',
    fuenteCronista: 'Fray Francisco de Bobadilla, Cuestionario a los caciques (1528)',
  },
  {
    id: 'calabaza',
    nombre: 'Una Calabaza o Ayote Grande',
    costoCacaoAlmendras: 4,
    categoria: 'alimento',
    descripcion: 'Alimento básico de la huerta indígena, utilizado tanto su pulpa para guisos como su cáscara seca como huacal contenedor.',
    fuenteCronista: 'Gonzalo Fernández de Oviedo',
  },
  {
    id: 'tamal',
    nombre: 'Un Tamal Caliente de Maíz Dulce',
    costoCacaoAlmendras: 1,
    categoria: 'alimento',
    descripcion: 'Comida callejera habitual en el Tiangue de Tezoatega y Masaya, cocinado con hojas de plátano silvestre o bijao.',
    fuenteCronista: 'Crónicas coloniales de Nicaragua'
  },
  {
    id: 'nisperos',
    nombre: 'Ocho Nísperos Maduros Dulces',
    costoCacaoAlmendras: 1,
    categoria: 'alimento',
    descripcion: 'Fruta silvestre exquisita recolectada en los montes templados de Carazo y Masaya.',
    fuenteCronista: 'Oviedo, tomo IV, fol. 102'
  },
  {
    id: 'manta_algodon',
    nombre: 'Manta Fina de Algodón Hilado y Teñido',
    costoCacaoAlmendras: 65,
    categoria: 'textil',
    descripcion: 'Tejido artesanal confeccionado por tejedoras sutiabas con bordados geométricos y teñido con añil natural.',
    fuenteCronista: 'Relaciones de viaje de Gil González Dávila (1523)'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    pregunta: '¿Cuál era el valor de un conejo silvestre en los mercados prehispánicos de Nicaragua según las crónicas de Oviedo?',
    contextoHistorico: 'El cacao funcionaba como moneda corriente estandarizada en todos los Tiangues del Pacífico de Nicaragua.',
    opciones: [
      '10 almendras de cacao',
      '2 almendras de cacao',
      '50 almendras de cacao',
      '100 almendras de cacao'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: 'Exacto. Gonzalo Fernández de Oviedo constató que un conejo costaba exactamente 10 almendras de cacao, un tamal costaba 1 almendra, y un cautivo de guerra 100 almendras. ¡Incluso existían falsificadores que vaciaban la cáscara del cacao y la rellenaban con tierra o cera!',
    fuenteHistorica: 'Historia General y Natural de las Indias (Gonzalo Fernández de Oviedo, 1528)'
  },
  {
    id: 2,
    pregunta: '¿Qué institución política indígena representaba el consejo de ancianos con poder para destituir jefes militares?',
    contextoHistorico: 'A diferencia de las monarquías absolutistas europeas, este modelo cívico se basaba en la deliberación y el consenso comunal.',
    opciones: [
      'El Monexico',
      'El Tiangue',
      'El Calpulli',
      'El Teoba'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: '¡Correcto! El Monexico era la asamblea suprema de ancianos sabios ("guegues") entre los Chorotegas y otros pueblos. Tenían la facultad jurídica de elegir y remover al capitán militar ("Teythe") y administrar las tierras comunitarias.',
    fuenteHistorica: 'Crónicas de Fray Toribio de Benavente y Fray Francisco de Bobadilla'
  },
  {
    id: 3,
    pregunta: '¿Cuál fue la táctica del Cacique Diriangén al encontrarse con Gil González Dávila en abril de 1523?',
    contextoHistorico: 'Diriangén se presentó con un imponente séquito ricamente ataviado ante el contingente español.',
    opciones: [
      'Pidió tres días de plazo y regresó atacando con 4,000 guerreros',
      'Aceptó de inmediato el bautismo cristiano y entregó sus minas',
      'Huyó hacia la selva de Chontales sin combatir',
      'Propuso vender cacao a cambio de caballos y armaduras'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: '¡Brillante! Diriangén escuchó las demandas españolas con serenidad y prometió una respuesta en 3 días. El 17 de abril de 1523 regresó con 4,000 guerreros en Nequecheri, asestando el primer gran golpe de resistencia armada en Nicaragua.',
    fuenteHistorica: 'Relación del viaje de Gil González Dávila a la corte española (1524)'
  },
  {
    id: 4,
    pregunta: '¿Qué célebre cacique nahua de Rivas formuló profundas preguntas ontológicas y filosóficas sobre quién sostiene al Sol y por qué los españoles codiciaban tanto el oro?',
    contextoHistorico: 'Este diálogo es considerado uno de los hitos intelectuales más fascinantes del choque cultural en América.',
    opciones: [
      'Nicarao (Macuilmiquiztli)',
      'Diriangén',
      'Agateyte',
      'Adiact'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: '¡Correcto! Macuilmiquiztli (bautizado por los cronistas como Cacique Nicarao) interrogó a los sacerdotes y capitanes españoles sobre astronomía, el origen del viento, el fin de los tiempos y criticó su codicia por el oro.',
    fuenteHistorica: 'Diálogos de Quauhcapolca registrados por cronistas de Indias'
  },
  {
    id: 5,
    pregunta: '¿Cuál de estos pueblos hablaba una variante de la lengua Náhuatl tras migrar desde el centro de México guiados por la profecía de los volcanes en un lago?',
    contextoHistorico: 'Se asentaron estratégicamente en el istmo de Rivas y la mágica Isla de Ometepe.',
    opciones: [
      'Los Nicaraos',
      'Los Chorotegas',
      'Los Sutiabas',
      'Los Chontales'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: 'Así es. Los Nicaraos eran de filiación nahua-pipil y hablaban náhuatl. Los Chorotegas hablaban mangue (oto-mangue) y los Sutiabas hablaban maribio (hokano-tlapaneca).',
    fuenteHistorica: 'Lingüística histórica y arqueología mesoamericana de Nicaragua'
  },
  {
    id: 6,
    pregunta: 'En la cosmovisión religiosa politeísta de los Nicaraos, ¿quiénes eran considerados los dioses creadores primordiales del universo y el sol?',
    contextoHistorico: 'Habitaban en el oriente cósmico, donde nace cada mañana la luz bienhechora.',
    opciones: [
      'Tamagastad y Cipattoval',
      'Quiateot y Mixcoatl',
      'Chiquinaut y Popogatepe',
      'Xipe Tótec y Mictlantecuhtli'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: '¡Muy bien! Tamagastad y Cipattoval eran la pareja divina creadora del cielo, las aguas y los seres humanos según las confesiones recogidas por el fraile Bobadilla en 1528.',
    fuenteHistorica: 'Interrogatorio de Bobadilla a los sacerdotes y sabios indígenas en Rivas'
  },
  {
    id: 7,
    pregunta: '¿Cómo se denominaban los vibrantes mercados públicos al aire libre donde los indígenas intercambiaban productos mediante trueque y almendras de cacao?',
    contextoHistorico: 'Eran centros neurálgicos de la vida social, supervisados por jueces que garantizaban la honestidad de las transacciones.',
    opciones: [
      'Tiangues',
      'Monexicos',
      'Teobas',
      'Petates'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: '¡Acertaste! El "Tiangue" era el mercado tradicional indígena (palabra aún viva en el habla popular nicaragüense). Grandes tiangues florecieron en Tezoatega (Chinandega), Nindirí y Jalteva.',
    fuenteHistorica: 'Etnografía precolombina de Centroamérica'
  },
  {
    id: 8,
    pregunta: '¿Qué famoso estilo cerámico de la Gran Nicoya se caracterizaba por su engobe blanco marfil y elaboradas decoraciones en rojo y negro con la serpiente emplumada?',
    contextoHistorico: 'Estas vasijas eran objeto de admiración y comercio en toda el área intermedia centroamericana.',
    opciones: [
      'Papagayo Polícromo',
      'Barro negro de Jinotega',
      'Porcelana de ultramar',
      'Estilo Chontaleño Rústico'
    ],
    respuestaCorrecta: 0,
    explicacionDidactica: '¡Excelente! El estilo "Papagayo Polícromo" es la joya arqueológica de la Gran Nicoya (800-1200 d.C.). Sus tres soportes zoomorfos y su fino acabado con figuras serpentinas demuestran la destreza alfarera de los antepasados nicaragüenses.',
    fuenteHistorica: 'Arqueología de la Gran Nicoya (Museo Nacional de Nicaragua)'
  }
];

export const GLOSARIO_TERMINOS = [
  { termino: 'Monexico', significado: 'Consejo o asamblea deliberativa de ancianos ("guegues") que ejercía el gobierno judicial, político y social supremo en los pueblos chorotegas.' },
  { termino: 'Guegue', significado: 'Anciano sabio y respetado de la comunidad, consejero indispensable para la toma de decisiones.' },
  { termino: 'Teythe', significado: 'Capitán o jefe militar elegido por el Monexico para dirigir a los guerreros en combate, sujeto a rendición de cuentas.' },
  { termino: 'Tiangue', significado: 'Mercado indígena público y al aire libre donde se realizaba el trueque y el comercio con almendras de cacao.' },
  { termino: 'Cocibolca', significado: '"El Gran Lago Dulce" (Lago de Nicaragua), vía fluvial sagrada y fuente de sustento para los pueblos del istmo.' },
  { termino: 'Teoba', significado: 'Templo sagrado o recinto ceremonial indígena donde residían los sacerdotes y se resguardaban las ofrendas sagradas.' },
  { termino: 'Huacal', significado: 'Recipiente hondo elaborado con la cáscara leñosa del jícaro, utilizado tradicionalmente para beber cacao o chicha.' },
  { termino: 'Comal', significado: 'Disco plano de barro cocido empleado desde tiempos inmemoriales para tostar granos de cacao y cocer tortillas de maíz.' }
];
