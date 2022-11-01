import tendenciaDiscursiva from '../assets/images/catagories/tendenciaDiscursiva.gif'
import lienzoSocial from '../assets/images/catagories/lienzoSocial.gif';
import mapaRedesInfluencia from '../assets/images/catagories/mapaRedesInfluencia.gif';
import rentavilidad from '../assets/images/catagories/rentabilidad.png'
import digitalizacion from '../assets/images/catagories/digitalizacion.gif';
import tableros from '../assets/images/catagories/dashboards.gif';
import fintech from '../assets/images/catagories/serviciosFintech.gif';
// import img  from '../assets/images/category-img.png';


import icon1 from '../assets/images/icons/icon1.svg';
import icon2 from '../assets/images/icons/icon2.svg';
import icon3 from '../assets/images/icons/icon3.svg';
import icon4 from '../assets/images/icons/icon4.svg';
import icon5 from '../assets/images/icons/icon5.svg';
import icon6 from '../assets/images/icons/icon6.svg';
import icon7 from '../assets/images/icons/icon7.svg';
import icon8 from '../assets/images/icons/icon8.svg';
import icon9 from '../assets/images/icons/icon4.svg';
import icon10 from '../assets/images/icons/icon10.svg';
import icon11 from '../assets/images/icons/icon11.svg';
import icon14 from '../assets/images/icons/icon14.svg';
import icon15 from '../assets/images/icons/icon15.svg';
import icon16 from '../assets/images/icons/icon16.svg';
import icon17 from '../assets/images/icons/icon17.svg';
import icon18 from '../assets/images/icons/icon18.svg';
import icon19 from '../assets/images/icons/icon19.svg';
import icon20 from '../assets/images/icons/icon20.svg';
import icon21 from '../assets/images/icons/icon21.svg';
import icon22 from '../assets/images/icons/icon22.svg';

export const corporativos = [
    // {
    //     id: 1,
    //     label: 'SIGs para Retail',
    //     desciption: 'Utilizar técnicas de análisis territorial para ayuda a solucionar las preguntas más frecuentes de empresas en el sector de Retail, como por ejemplo: ¿Dónde están mis clientes? ¿Cuál es mi cobertura? ¿Qué productos han adquirido mis clientes en una zona?',
    //     howItWorks: [
    //         'Como funciona',
    //     ],
    //     adventages: [
    //         {
    //             title: '',
    //             text: 'Mejorar ventas, dar herramientas para mejorar la toma de decisiones',
    //             icon: icon3
    //         }
    //     ],
    //     value: [
    //         'valor añadido 1',
    //         'valor añadido 2',
    //         'valor añadido 3'
    //     ],
    //     // CAMBIAR
    //     img: tendenciaDiscursiva,
    // },
    {
        id: 2,
        label: 'Mapeo de variables de interés',
        header: 'Descubre nuevas relaciones',
        subtitle: 'Tu futuro es variable',
        desciption: 'Mapa de identificación de frecuencia clasificado por temas y variables de interés, principalmente aplicado a redes sociales, y clasiﬁcados de acuerdo con parámetros específicos como zona geográfica hasta nivel colonia, sección, edad, género, entre otras.',
        howItWorks: [
            'Observar las plataformas en busca de conversaciones relacionadas con un tema específico (una organización o empresa) y analizar la información en búsqueda de oportunidades.',
            'Es un proceso en tres pasos: 1. Monitorear los canales de redes sociales en busca de menciones de tu marca, competidores, productos y palabras clave relacionadas con tu negocio.',
            '2. Recopilación de datos referentes a un tema específico',
            '3. Analizar la información en búsqueda de tendencias y recomendación de plan de acción'
        ],
        adventages: [
            {
                title: 'Tendencias del mercado',
                text:'Permite la identificación de tendencias de mercado de acuerdo con interés del consumidor.',
                icon: icon1
            },
            {
                title: 'Discursos de impacto',
                text: 'Útil para el desarrollo de discursos de impacto con un alto sentido de pertenencia comunitaria',
                icon: icon2
            },
            {
                title: 'Posicionamiento de marca',
                text: 'Permite el posicionamiento de marcas personales y comerciales para la atracción de segmentos de mercado específicos.',
                icon: icon3
            }
        ],
        value: [
            'Conoce las necesidades de tus clientes y crea los productos ideales para satisfacer sus necesidades',
            'Descubre la imagen que tiene tu marca y toma acciones para mantener tu imagen o mejorarla.',
            'Crea los mejores discursos y mensajes para el interior de tu empresa o para expresarte mejor a la audiencia en general'
        ],
        img: tendenciaDiscursiva,
    },
    {
        id: 3,
        label: 'Análisis sociodemográfico',
        header: 'Manténgase por delante de la competencia',
        subtitle: 'Manténgase a la vanguardia',
        desciption: 'Análisis socio demográﬁco acotado a una o varias zonas geográficas de interés (municipio, estado, región) basado en estadística descriptiva. Se muestra en formato de informe de indicadores estratégicos de distintas fuentes y variables de interés.',
        howItWorks: [
            'Consiste en la elección de una zona geográfica y variables sociales, una vez seleccionada comienza la búsqueda y/o creación de la información.',
            'Para posteriormente hacer análisis socio demográfico y realizar un informe con los hallazgos más sobresalientes.',
        ],
        adventages: [
            {
                title: 'Identificación de variables',
                text: 'Provee una panorama descriptivo general de diversas variables de interés para una zona determinada.',
                icon: icon4
            },
            {
                title: 'Segmentado',
                text: 'Útil para la confección de estrategias comerciales acotado a segmentos o nichos de mercado.',
                icon: icon5
            },
            {
                title: 'Decisiones bajo escenarios',
                text: 'Proporciona información oportuna para la proyección de escenarios de acción y operación.',
                icon: icon6
            },
            {   
                title: 'Variedad de formatos',
                text: 'Puede desplegarse en formato estático (pdf) o en un tablero dinámico con inteligencia de negocios para el monitoreo de información en tiempo real.',
                icon: icon7
            }
        ],
        value: [
            'Desarrolla un estudio demográfico de un nicho de mercado',
            'Conoce las necesidades de tus posibles clientes',
            'Planifica estrategias para la entrada de un producto en una zona geográfica'
        ],
        img: lienzoSocial,
    },
    {
        id: 4,
        label: 'Mapeo de indicadores de influencia',
        header: 'La influencia está en todas partes',
        subtitle: 'Aporta valor a tus decisiones',
        desciption: 'Diagrama de nodos basado en un estudio cualitativo y cuantitativo para conocer el grado de vinculación y cercanía entre actores clave, así como la identificación de factores de inﬂuencia con respecto a una organización (o empresa) determinada.',
        howItWorks: [
            'Un mapa de influencia es un modelo visual que muestra las personas que influyen y toman decisiones sobre su proyecto.',
            'El mapa le ayudará a comprender cómo los actores se relacionan entre ellos, de modo que usted puede ver rápidamente la forma en que influyen en los flujos.',
        ],
        adventages: [
            {
                text: 'Diagrama visual que modela la red de sujetos involucrados cercanos a una persona u organización.',
                icon: icon8
            },
            {
                text: 'Califica el grado de influencia entre los nodos mediante un índice de valoración de las características cualitativas de la relación (afinidad ideológica, frecuencia de réplica, cercanía, etc.)',
                icon: icon9
            }
        ],
        value: [
            'Permite identificar dónde reside el poder en la empresa y dentro del proyecto',
        ],
        img: mapaRedesInfluencia,
    },
    {
        id: 5,
        label: 'Análisis de rentabilidad digital y territorial',
        header: 'Haz que tu dinero trabaje para ti',
        subtitle: 'Haz crecer tu riqueza',
        desciption: 'Modelo de series de tiempo para pronosticar la rentabilidad de un bien o servicio dentro de una zona geográfica específica y en el mercado en línea. ',
        howItWorks: [
            `Contempla una serie de pasos que se pueden dividir en dos principales:
            1. Recolección de datos históricos y del mercado actual, así como de los productos y servicios a ofrecer`,
            '2. Análisis de los beneficios que se pueden obtener y los gastos que se requieren',
        ],
        adventages: [
            {
                text: 'Permite identiﬁcar la rentabilidad digital, territorial e híbrida agilizando la toma de decisiones.',
                icon: icon10
            },
            {
                text: 'Categoriza zonas de media, baja y alta probabilidad de triunfo con base en los registros históricos.',
                icon: icon11
            },
            {
                text: 'Mejora el enfoque y la asignación de recursos humanos, técnicos y financieros.',
                icon: icon16
            }
        ],
        value: [
            'Permite identificar dónde reside el poder en la empresa y dentro del proyecto',
        ],
        img: rentavilidad,
    },
    {
        id: 6,
        label: 'Digitalización de datos con IA',
        header: 'Seamos inteligentes, digitalicemos nuestros datos',
        subtitle: 'Aprovechemos la inteligencia artificial para digitalizar nuestros datos',
        desciption: 'Algoritmo de digitalización de registros físicos masivos, para extraer y ordenar la información en bases de datos. (Folio de Registro Nacional de Proveedores: RNP 202008231137244 -2021A005)',
        howItWorks: [
            'Si cuentas con grandes cantidades de datos, es decir, documentos físicos (como registros de entrada y salida de mercancía, de personal, documentos de ventas y compras, etcétera)',
            'Usamos herramientas tecnológicas con inteligencia artificial para pasar esos archivos físicos a digitales en muy poco tiempo.',
        ],
        adventages: [
            {
                text: 'Útil para la captura de información en grandes cantidades, ordenamiento y sistematización digital en bases de datos.',
                icon: icon17
            },
            {
                text: 'Reducción del tiempo en dar el salto tecnológico en tu empresa u organización',
                icon: icon14
            }
        ],
        value: [
            'Permite identificar dónde reside el poder en la empresa y dentro del proyecto',
        ],
        img: digitalizacion,
    },
    {
        id: 7,
        label: 'Tableros digitales',
        header: 'Datos para transformar el mundo',
        subtitle: 'Con datos, todo es posible',
        desciption: 'Visualización dinámica de información a partir de diversos elementos visuales interactivos, incluidos mapas, gráﬁcos e indicadores. Los tableros se basan en una tecnología poderosa que puede admitir varios ﬂujos de trabajo, puede cargar diferentes funciones que garantizan que los tableros funcionen como se espera y que se adapten para transmitir la información más relevante a audiencias especíﬁcas.',
        howItWorks: [
            'Consiste en la selección de los datos más relevantes de la empresa y se diseña una visualización fácil de entender, actualizable y vinculada a la base de datos, para tener visualizaciones en tiempo real, diarias, semanales o mensuales.',
        ],
        adventages: [
            {
                text: 'Simplifican la forma en la que se explora y describe la información haciéndola más sencilla de entender y analizar',
                icon: icon15
            },
            {
                text: 'Agilizan el consumo de datos haciéndolo más fácil y conveniente.',
                icon: icon16
            },
            {
                text: 'Los tableros dinámicos permiten contar historias basadas en temáticas específicas.',
                icon: icon17
            },
            {
                text: 'A partir de la gestión de datos en tiempo real o en momentos concretos de análisis es posible realizar análisis en retrospectiva (en el pasado) o prospectiva (hacia el futuro).',
                icon: icon18
            }
        ],
        value: [
            'Permite conocer el estado actual de la empresa u organización',
            'Facilita la comprensión de grandes bases de datos'
        ],
        img: tableros,
    },
    {
        id: 8,
        label: 'Servicios Fintech',
        header: 'La innovación que necesitas para tus finanzas',
        subtitle: 'Mejora tu experiencia financiera',
        desciption: 'Seleccionamos e integramos tecnologías fintech mediante interfaces de programación de aplicaciones (API), diseñamos y conectamos a bases de datos, gestionamos plataformas en la nube y desarrollamos algoritmos de aprendizaje automático para ayudar a las empresas a incrementar sus utilidades a partir de nuevas propuestas de negocios.',
        howItWorks: [
            'Consultoría, plan de acción, desarrollo de proyecto Fintech, propuesta de valor e integración de tecnologías para facilitar los procesos financieros a los clientes finales.',
            'Nuestro mayor enfoque es incorporar herramientas tecnológicas en las empresas Fintech.'
        ],
        adventages: [
            {
                text: 'Análisis de bases de datos para la generación de modelos de calificación crediticia basados en data alternativa.',
                icon: icon19
            },
            {
                text: 'Diseño de estrategias de negocio con enfoque fintech.',
                icon: icon20
            },
            {
                text: 'Investigación de usuario y análisis de comportamientos de consumo.',
                icon: icon21
            },
            {
                text: 'Gestión de la innovación en nuevos modelos de negocios.',
                icon: icon22
            },
            {
                text: 'Análisis del marco jurídico aplicable a la operación de negocios fintech.',
                icon: icon1
            },
            {
                text: 'Análisis e integraciones tecnológicas estratégicas para reducción de costos y maximización de utilidades.',
                icon: icon2
            }
        ],
        value: [
            'Permite otorgar servicios financieros de manera eficiente, ágil, cómoda y confiable',
            'Incorpora herramientas tecnológicas para mejorar o automatizar los servicios y procesos financieros.',
            'Aplica nuevas tecnologías a actividades financieras y de inversión.'
        ],
        img: fintech,
    },
]

export const gubernamentales = [
    // {
    //     id: 1,
    //     label: 'Asesoría Técnica para la Autoprodución del Espacio Habitable',
    //     header: 'Autoproducir para vivir mejor',
    //     subtitle: 'El espacio habitable que necesitas',
    //     desciption: 'Desarrollar un sistema que brinde asesoría técnica a la población que se encuentre iniciando un proceso de autoconstrucción de la vivienda mediante una aplicación que sirva para generar un diagnóstico del proyecto, asi como entregar avances y llevar un seguimiento del proceso creativo. El objetivo es entregar un proyecto ejecutivo (planos arquitectónicos, estructurales, instalaciones, catálogo de conceptos y volumetría) diseñado a medida de las necesidades familiares y el contexto urbano.',
    //     howItWorks: [
    //         'La Asesoría Técnica para la Autoproducción del Espacio Habitable es un servicio de asesoría técnica especializada en la planificación y ejecución de proyectos de autoproducción de espacio habitable.',
    //         'Ofrecemos asesoría en todas las etapas de un proyecto de autoproducción de espacio habitable, desde la planificación inicial hasta la finalización de la construcción.',
    //         'También ofrecemos asesoría técnica especializada en la selección y uso de materiales eficientes en términos de energía y de impacto ambiental, así como en el diseño y la construcción de estructuras sostenibles.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Vivienda Digna y Asequible.',
    //             icon: icon1
    //         },
    //         {
    //             text: 'Conciliar la autoconstrucción y la asesoría técnica.',
    //             icon: icon2
    //         },
    //         {
    //             text: 'Oportunidad de financiamiento de la asesoría técnica. ',
    //             icon: icon4
    //         }
    //     ],
    //     value: [
    //         'Servicio de asesoría técnica especializada en la planificación y ejecución de proyectos de autoproducción de espacio habitable.',
    //         'Ofrece asesoría en todas las etapas de un proyecto de autoproducción de espacio habitable, desde la planificación inicial hasta la finalización de la construcción.',
    //         'Asesoría técnica especializada en la selección y uso de materiales eficientes en términos de energía y de impacto ambiental, así como en el diseño y la construcción de estructuras sostenibles.',
    //         'Servicio personalizado de acuerdo a las necesidades y características de cada proyecto.',
    //         'Disponemos de una amplia gama de recursos técnicos y tecnológicos para el desarrollo de proyectos de autoproducción de espacio habitable.'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 2,
    //     label: 'Diseño e implementación de metodologías participativas ',
    //     header: 'El cambio comienza con la participación ciudadana.',
    //     subtitle: 'Juntos podemos mejorar nuestra comunidad',
    //     desciption: 'Diseñar e mplementar instrumentos participativos que contribuyan a fomentar y fortalecer los mecanismos de profundización de la democracia colocando en el centro a los ciudadanos y/o comunidades para construir un proceso de reflexión sobre el entorno y sus dinamicas sociales. Se trata de guiar a los ciudadanos, colectivos y comunidades en el proceso de identificación de necesidades y problemáticas que existen en su entorno y realidad inmediata.',
    //     howItWorks: [
    //         'Es un proceso en el que se involucran a los ciudadanos de una comunidad en el diseño y la ejecución de proyectos de desarrollo.',
    //         'Se busca que los ciudadanos se sientan involucrados y tengan voz en el desarrollo de sus comunidades, y que puedan aportar sus necesidades y perspectivas a los proyectos.',
    //         'Se utilizan diversas técnicas de participación, como talleres, grupos focales y encuestas, para involucrar a la mayor cantidad de personas posible.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Favorece los procesos políticos y sociales de cualquier proyecto que se contemple. ',
    //             icon: icon10
    //         },
    //         {
    //             text: ' Si se orienta y guía adecuadamente puden servir como instrumentos de gestión política, social o empresarial.',
    //             icon: icon11
    //         },
    //         {
    //             text: 'Mejora la percepción de la comunidad e individuos respecto a los procesos de planificación e implementación de acciones.',
    //             icon: icon14
    //         },
    //         {
    //             text: 'Crea un proceso de aprendizaje donde la comunidad y los ciudadanos aprenden a elaborar y gestionar proyectos.',
    //             icon: icon11
    //         },
    //         {
    //             text: 'Favorece e impulsa la responsabilidad compartida entre los actores.',
    //             icon: icon2
    //         },
    //         {
    //             text: 'Posibilita cambios sociales profundos, ya que promueve la integración y cohesión social y promueve el cambio de visión individualista e instrumental hacia la integración de lo comunitario.',
    //             icon: icon15
    //         }

    //     ],
    //     value: [
    //         'Permite que los ciudadanos tengan voz en el desarrollo de sus comunidades.',
    //         'Fomenta el sentido de comunidad y el espíritu de colaboración.',
    //         'Identifica las necesidades de la comunidad y busca soluciones creativas.',
    //         'La participación ciudadana da a los ciudadanos un sentido de ownership (pertenencia) de sus comunidades.'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 3,
    //     label: 'Planeación urbana',
    //     header: 'La clave para una ciudad sostenible, eficiente y próspera',
    //     subtitle: 'Desarrollando un mundo mejor',
    //     desciption: 'Desarrollar proyectos de carácter urbano con un enfoque de planeación estratégica que garantice el cumplimiento de los objetivos del desarrollo, sea habitacional, comercial, industrial o de movilidad.',
    //     howItWorks: [
    //         'La planeación urbana es el proceso de planificar el desarrollo de una ciudad o un área urbana. Se trata de un proceso continuo que implica la participación de diversos actores, incluidos los líderes comunales, el sector privado y el sector público.',
    //         'La planeación urbana tiene como objetivo mejorar la calidad de vida de los habitantes de una ciudad o un área urbana al proporcionar un entorno urbano seguro, eficiente y sostenible.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Planeación',
    //             icon: icon10
    //         },
    //         {
    //             text: 'Desarrollo',
    //             icon: icon11
    //         },
    //         {
    //             text: 'Urbanismo',
    //             icon: icon2
    //         },
    //     ],
    //     value: [
    //         'Mejora el desarrollo económico de las ciudades.',
    //         'Favorece la convivencia social en las ciudades.',
    //         'Permite el desarrollo sostenible de una ciudad, lo que significa que se puede mejorar la calidad de vida de las personas sin comprometer el medio ambiente.'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 4,
    //     label: 'Talleres de sensibilización y formación ciudadana.',
    //     header: 'La participación ciudadana empieza aquí.',
    //     subtitle: 'Sensibilización y formación para una mejor participación ciudadana',
    //     desciption: 'Sensibilizar y formar a funcionarios públicos, comunidades, promotores, agentes y personas en general sobre la participación ciudadana y las herramientas participativas como elementos fundamentales para el desarrollo comunitario, la cohesión e integración social y la mejora de la transparencia y rendición de cuentas.',
    //     howItWorks: [
    //         'Los talleres de sensibilización y formación en mecanismos de participación ciudadana son eventos organizados por entidades públicas o privadas con el objetivo de promover la participación de la ciudadanía en la vida pública.',
    //         'En estos talleres, se ofrecen charlas y actividades dirigidas a fomentar el conocimiento sobre los mecanismos de participación ciudadana y a sensibilizar y formar a funcionarios públicos, comunidades, promotores, agentes y personas en general sobre la importancia de su participación en la toma de decisiones públicas.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Identificación  y comprención los mecanismos de participación ciudadana como herramienta para fortalecer las relaciones entre las instituciones gubernamentales y las comunidades, así como las relaciones entre los mismos individuos. ',
    //             icon: icon10
    //         },
    //         {
    //             text: 'Mejoramiento de la eficacia, eficiencia y efectividad de las acciones gubernamentales, políticas públicas y proyectos de desarrollo comunitario orientando acciones de participación ciudadana.',
    //             icon: icon11
    //         },
    //     ],
    //     value: [
    //         'Fomentar el diálogo y el debate sobre temas de interés público',
    //         'Facilitar el acceso de la ciudadanía a la información y a los canales adecuados para participar en la vida pública',
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 5,
    //     label: 'Curso-Taller Ética pública y los valores cívicos',
    //     header: 'Ética pública y valores cívicos, pilares de una nación',
    //     subtitle: 'Valores cívicos para una democracia sólida',
    //     desciption: 'Comprender y aplicar los conceptos que implican la ética pública y los valores cívicos en el diario acontecer de las dependencias públicas y la vida cotidiana para transformar estos espacios desde el interior y mejorar significativamente los ambientes de trabajo.',
    //     howItWorks: [
    //         '1. El curso-taller Ética pública y los valores cívicos está dirigido a todos los ciudadanos que quieran mejorar su formación ética y cívica.',
    //         '2. El curso está compuesto por 10 módulos que tratan temas como la democracia, los derechos humanos, la justicia, la tolerancia o el respeto.',
    //         '3. Cada módulo consta de una parte teórica y una práctica, en la que los participantes pondrán en práctica lo aprendido.',
    //         '4. Al finalizar el curso, los participantes recibirán un diploma acreditativo.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Reconocer la complejidad de la administración pública y de la sociedad  desde la ética publica y los valores cívicos para impulsar y fortalecer buenas prácticas éticas y de transparencia en la gestión de lo público. ',
    //             icon: icon10
    //         },
    //         {
    //             text: 'Sensibilización de los conceptos éticos para relacionarlos con los principios rectores de las instituciones democráticas (la administración pública).',
    //             icon: icon11
    //         },
    //     ],
    //     value: [
    //         'Los participantes recibirán orientación sobre cómo aplicar los valores cívicos en su vida diaria',
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 6,
    //     label: 'Gobernautas (estrategia digital local)',
    //     header: 'Mejora como te ve la ciudadanía',
    //     subtitle: 'Piensa digitalmente',
    //     desciption: 'Acciones orientadas a mejorar la percepción de los gobiernos locales a través del uso de medios digitales. La estrategia puede incluir: 1I) diagnóstico del estado de gobernanza digital 2) pauta de acciones de gobierno con microsegmentación en sitios estratégicos; 3) análisis de redes sociales; 4) diseño administrativo de oficina digital local; 5) sistema de monitoreo digital de incidencias ',
    //     howItWorks: [
    //         '1. Investigación: Es importante hacer una investigación exhaustiva sobre la percepción del público general, la brecha tecnológica y el estado actual de gobernanza digital.',
    //         '2. Planificación: Generar el plan de acción.',
    //         '3. Ejecución: Una vez que se haya planificado cuidadosamente la estrategia, se lanza y comienza a generar tráfico. Se trata de medir y analizar los resultados para poder ajustar y mejorar sus estrategias en consecuencia.',
    //         '4. Mantenimiento: Es importante mantener una visión a largo plazo y ser consistente en la ejecución de las acciones para lograr los mejores resultados.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Aumento de la percepción positiva del gobierno; acercamiento de las demandas ciudadanas en espacios digitales',
    //             icon: icon10
    //         },
    //         {
    //             title: 'Mejorar la toma de decisiones:',
    //             text: ' La percepción de los gobiernos locales permite a los líderes tomar decisiones más acertadas y alineadas con las necesidades y expectativas de la población.',
    //             icon: icon5
    //         },
    //         {
    //             title: 'Mejorar la toma de decisiones:',
    //             text: 'Una mejor percepción de los gobiernos locales facilita la rendición de cuentas y promueve la transparencia en la gestión pública.',
    //             icon: icon6
    //         },
    //         {
    //             title: 'Mejorar la toma de decisiones:',
    //             text: ' La percepción positiva de los gobiernos locales contribuye al desarrollo económico y social de las comunidades, al atraer inversiones y talentos.',
    //             icon: icon7
    //         }
    //     ],
    //     value: [
    //         'Permite a los gobiernos locales ser más eficientes en la prestación de servicios a los ciudadanos.',
    //         'Facilita el acceso a la información por parte de la ciudadanía, lo que promueve la transparencia y la rendición de cuentas.',
    //         'Permite reducir los costos de operación, al optimizar los procesos y eliminar la necesidad de papel.'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 7,
    //     label: 'Matriz de indicadores de resultados (MIR)',
    //     header: 'Indicadores de resultados clave',
    //     subtitle: 'Indicadores que dan resultados',
    //     desciption: 'La MIR organiza los objetivos, indicadores y metas en la estructura programática, vinculados a demandas presupuetarias',
    //     howItWorks: [
    //         'Asegurar el sostenimiento financiero de programas derivados de la plataforma de gobierno, mediante indicadores que permitan la evaluación continua de la política pública',
    //     ],
    //     adventages: [
    //         {
    //             text: 'ventaja 1',
    //             icon: icon10
    //         },
    //     ],
    //     value: [
    //         'valor añadido 1',
    //         'valor añadido 2',
    //         'valor añadido 3'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 8,
    //     label: 'Evaluación de política social (programas)',
    //     desciption: 'Medición de impacto de programas orientados a mejorar el bienestar de la población; permite que los tomadores de decisiones puedan optimizar sus acciones a través de evidencia empírica, conforme a los estándares de la plataforma de gobierno',
    //     howItWorks: [
    //         'Como funciona',
    //     ],
    //     adventages: [
    //         {
    //             text: 'Diseñar política social eficiente e incluyente',
    //             icon: icon10
    //         },
    //     ],
    //     value: [
    //         'valor añadido 1',
    //         'valor añadido 2',
    //         'valor añadido 3'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 9,
    //     label: 'Predictor de delitos',
    //     desciption: 'Plataforma para pronosticar de manera espaciotemporal los cambios positivos en la incidencia delictiva',
    //     howItWorks: [
    //         'Como funciona',
    //     ],
    //     adventages: [
    //         {
    //             text: 'Orientación de estrategia de seguridad conforme a campañas de prevención, deterrance y movilización de recursos en puntos y horarios estratégicos del espacio urbano',
    //             icon: icon10
    //         },
    //     ],
    //     value: [
    //         'valor añadido 1',
    //         'valor añadido 2',
    //         'valor añadido 3'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    {
        id: 10,
        label: 'Frecuencia del discurso',
        header: 'Descubre la frecuencia de tu discurso para un mejor análisis',
        subtitle: 'Transforma tus resultados',
        desciption: 'Mapa de identificación de frecuencia clasificado por temas y variables de interés, principalmente aplicado a redes sociales, y clasiﬁcados de acuerdo con parámetros específicos como zona geográfica hasta nivel colonia, sección, edad, género, entre otras.',
        howItWorks: [
            'Observar las plataformas en busca de conversaciones relacionadas con un tema específico (Una secretaria gubernamental, una paraestatal o directamente con un ayuntamiento) y analizar la información en búsqueda de oportunidades.',
            'Es un proceso en tres pasos:  1. Monitorear los canales de redes sociales para conocer la opinión pública, las necesidades de las personas, lo que opinan de los servicios gubernamentales o de los gobernantes.',
            '2. Recopilación de datos referentes a un tema específico',
            '3. Analizar la información en búsqueda de tendencias y recomendación de plan de acción'
        ],
        adventages: [
            {
                text: 'Permite la identificación de tendencias sociales.',
                icon: icon3
            },
            {
                text: 'Útil para el desarrollo de discursos de impacto con un alto sentido de pertenencia comunitaria.',
                icon: icon4
            },
            {
                text: 'Permite el posicionamiento de servicios gubernamentales, apoyos o campañas sociales.',
                icon: icon5
            },
        ],
        value: [
            'Conocer las necesidades de las personas y  los problemas sociales.',
            'Conocer la opinión pública.',
            'Construye discursos claros y concisos para las audiencias.'
        ],
        img: tendenciaDiscursiva,
    },
    {
        id: 11,
        label: 'Lienzo social',
        header: 'Conozca más sobre las necesidades de sus ciudadanos',
        subtitle: 'Mejora la toma de decisiones',
        desciption: 'Análisis socio demográﬁco acotado a una o varias zonas geográficas de interés (municipio, estado, región) basado en estadística descriptiva. Se muestra en formato de informe de indicadores estratégicos de distintas fuentes y variables de interés.',
        howItWorks: [
            'Consiste en la elección de una zona geográfica y variables sociales, una vez seleccionada comienza la búsqueda y/o creación de la información, para posteriormente hacer análisis socio demográfico y realizar un informe con los hallazgos más sobresalientes. ',
        ],
        adventages: [
            {
                text: 'Provee una panorama descriptivo general de diversas variables de interés para una zona determinada.',
                icon: icon4
            },
            {
                text: 'Útil para la confección de estrategias de posicionamiento acotado a segmentos de la población',
                icon: icon5
            },
            {
                text: 'Insumo valioso para el diseño y localización de propuestas electorales y agendas políticas',
                icon: icon6
            },
            {
                text: 'Proporciona información oportuna para la proyección de escenarios de acción y operación',
                icon: icon7
            },
            {
                text: 'Puede desplegarse en formato estático (pdf) o en un tablero dinámico con inteligencia de negocios para el monitoreo de información en tiempo real.',
                icon: icon8
            },
        ],
        value: [
            'Desarrolla un estudio demográfico de un segmento poblacional.',
            'Conoce las necesidades de la población',
            'Planifica estrategias para la entrada de un producto en una zona geográfica.'
        ],
        img: lienzoSocial,
    },
    {
        id: 12,
        label: 'Diagrama de vinculación gubernamental',
        header: 'Conoce el grado de importancia de las partes del gobierno',
        subtitle: 'Conecta con las personas y recursos adecuados',
        desciption: 'Diagrama de nodos basado en un estudio cualitativo y cuantitativo para conocer el grado de vinculación y cercanía entre actores clave, así como la identificación de factores de inﬂuencia con respecto a una persona u organización (gobierno o empresa) determinada.',
        howItWorks: [
            'Un mapa de influencia es un modelo visual que muestra las personas que influyen y toman decisiones sobre su proyecto.',
            'El mapa le ayudará a comprender cómo los actores se relacionan entre ellos, de modo que usted puede ver rápidamente la forma en que influyen en los flujos.'
        ],
        adventages: [
            {
                text: 'Diagrama visual que modela la red de sujetos involucrados cercanos a una persona u organización.',
                icon: icon9
            },
            {
                text: 'Califica el grado de influencia entre los nodos mediante un índice de valoración de las características cualitativas de la relación (afinidad ideológica, frecuencia de réplica, cercanía, etc.)',
                icon: icon10
            },
        ],
        value: [
            'Permite identificar dónde reside el poder de decisión dentro de la instituciones, secretarías, paraestatales, o ayuntamientos de gobierno.',
        ],
        img: mapaRedesInfluencia,
    },
    {
        id: 13,
        label: 'Pronóstico de viabilidad digital y territorial',
        header: 'La herramienta indispensable para el éxito',
        subtitle: 'La forma más eficiente de análisis',
        desciption: 'Modelo de series de tiempo para pronosticar el voto duro y la meta para un candidato o partido político. Insumo vital para la confección de la estrategia electoral.',
        howItWorks: [
            `Contempla una serie de pasos que se pueden dividir en dos principales:
            1. Recolección de datos históricos, costos y beneficios.
            `,
            '2. Análisis de los beneficios que se pueden obtener y los gastos que se requieren'
        ],
        adventages: [
            {
                text: 'Permite identiﬁcar la rentabilidad digital, territorial e híbrida por sección electoral agilizando la toma de decisiones. ',
                icon: icon11
            },
            {
                text: 'Categoriza zonas de media, baja y alta probabilidad de triunfo con base en los registros históricos.',
                icon: icon14
            },
            {
                text: 'Mejora el enfoque y la asignación de recursos humanos, técnicos y financieros.',
                icon: icon15
            }
        ],
        value: [
            'Identifica costo de operaciones y los beneficios a lograr.',
            'Incrementa tu rentabilidad asignando óptimamente los recursos.'
        ],
        img: rentavilidad,
    },
    {
        id: 14,
        label: 'Servicios de digitalización con inteligencia artificial',
        header: 'El poder de la inteligencia artificial para digitalizar nuestros datos',
        subtitle: 'La inteligencia artificial para una digitalización más eficiente',
        desciption: 'Algoritmo de digitalización de registros físicos masivos, para extraer y ordenar la información en bases de datos. (Folio de Registro Nacional de Proveedores: RNP 202008231137244 -2021A005',
        howItWorks: [
            `Si cuentas con grandes cantidades de datos, es decir, documentos físicos (como registros de entrada y salida de personal, documentos de compra de insumos, etcétera)`,
            'Usamos herramientas tecnológicas con inteligencia artificial para pasar esos archivos físicos a digitales en muy poco tiempo.'
        ],
        adventages: [
            {
                text: 'Útil para la captura de información en grandes cantidades, ordenamiento y sistematización digital en bases de datos. ',
                icon: icon14
            }
        ],
        value: [
            'Reducción del tiempo en dar el salto tecnológico en alguna institución gubernamental',
        ],
        img: digitalizacion,
    },
    {
        id: 15,
        label: 'Servicio de visualización de datos',
        header: 'El poder de los datos, al alcance de tu mano',
        subtitle: 'El futuro basado en la visualización de datos',
        desciption: 'Visualización dinámica de información a partir de diversos elementos visuales interactivos, incluidos mapas, gráﬁcos e indicadores. Los tableros se basan en una tecnología poderosa que puede admitir varios ﬂujos de trabajo, puede cargar diferentes funciones que garantizan que los tableros funcionen como se espera y que se adapten para transmitir la información más relevante a audiencias especíﬁcas.',
        howItWorks: [
            `Consiste en la selección de los datos más relevantes de alguna dependencia gubernamental y se diseña una visualización fácil de entender, actualizable y vinculada a la base de datos, para tener visualizaciones en tiempo real, diarias, semanales o mensuales.`,
        ],
        adventages: [
            {
                text: 'Simplifican la forma en la que se explora y describe la información haciéndola más sencilla de entender y analizar.',
                icon: icon15
            },
            {
                text: 'Agilizan el consumo de datos haciéndolo más fácil y conveniente',
                icon: icon16
            },
            {
                text: 'Los tableros dinámicos permiten contar historias basadas en temáticas específicas',
                icon: icon17
            },
            {
                text: 'A partir de la gestión de datos en tiempo real o en momentos concretos de análisis es posible realizar análisis en retrospectiva (en el pasado) o prospectiva (hacia el futuro).',
                icon: icon18
            },
        ],
        value: [
            'Permite conocer el estado actual de la institución, secretaria, ayuntamiento o paraestatal gubernamental',
            'Facilita la comprensión de grandes bases de datos'
        ],
        img: tableros,
    },
    {
        id: 16,
        label: 'Análisis e integraciones tecnológicas Fintech',
        header: 'La solución definitiva para tus problemas tecnológicos',
        subtitle: 'Toma el control de tus finanzas',
        desciption: 'Seleccionamos e integramos tecnologías fintech mediante interfaces de programación de aplicaciones (API), diseñamos y conectamos a bases de datos, gestionamos plataformas en la nube y desarrollamos algoritmos de aprendizaje automático para ayudar a las empresas a incrementar sus utilidades a partir de nuevas propuestas de negocios.',
        howItWorks: [
            `Consultoría, plan de acción, desarrollo de proyecto Fintech, propuesta de valor e integración de tecnologías para facilitar los procesos financieros a los clientes finales.`,
            'Nuestro mayor enfoque es incorporar herramientas tecnológicas en las organizaciones Fintech.'
        ],
        adventages: [
            {
                text: 'Análisis de bases de datos para la generación de modelos de calificación crediticia basados en data alternativa',
                icon: icon19
            },
            {
                text: 'Diseño de estrategias de negocio con enfoque fintech',
                icon: icon20
            },
            {
                text: 'Investigación de usuario y análisis de comportamientos de consumo',
                icon: icon21
            },
            {
                text: 'Gestión de la innovación en nuevos modelos de negocios.',
                icon: icon22
            },
            {
                text: 'Panorama estadístico y determinación del tamaño del mercado.',
                icon: icon1
            },
            {
                text: 'Análisis del marco jurídico aplicable a la operación negocios fintech.',
                icon: icon2
            },
            {
                text: 'Análisis e integraciones tecnológicas estratégicas para reducción de costos y maximización de utilidades.',
                icon: icon3
            },
        ],
        value: [
            'Permite conocer el estado actual de la institución, secretaria, ayuntamiento o paraestatal gubernamental',
            'Facilita la comprensión de grandes bases de datos'
        ],
        img: fintech,
    },
]

export const politicos = [
    // {
    //     id: 1,
    //     label: 'Evaluación de Politicas Públicas ',
    //     header: 'Evaluando lo más importante o Evaluando lo que nos importa',
    //     subtitle: 'La evaluación como herramienta de cambio',
    //     desciption: 'Seguimiento y evaluación de normas, programas o acciones que requieran ser medidas, evaluadas, en cuanto a resultados e impacto ',
    //     howItWorks: [
    //         'La evaluación de políticas públicas es un proceso mediante el cual se analizan y evalúan los resultados y el impacto de las políticas públicas.',
    //         'Este proceso permite identificar qué políticas públicas son efectivas y cómo se pueden mejorar.',
    //         'La evaluación de políticas públicas es una herramienta importante para el gobierno, ya que le permite tomar decisiones basadas en datos y evidencia.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Generar acciones de evaluación a las politicas publicas de los diferentes ordenes de gobierno. ',
    //             icon: icon1
    //         },
    //         {
    //             text: 'Mostrar recomendaciones de mejores practicas para el desarrollo de politicas publicas en beneficio de la población.',
    //             icon: icon2
    //         },
    //         {
    //             text: 'Diseñar indicadores y sistemas de información con enfoque social',
    //             icon: icon4
    //         }
    //     ],
    //     value: [
    //         'Permite medir el impacto de las políticas y programas públicos.',
    //         'Identificar las políticas y programas que funcionan y aquellos que no.',
    //         'Contribuye a mejorar la toma de decisiones en el sector público.',
    //         'Herramienta de gestión para asegurar que los recursos se destinen a aquellas políticas y programas que son más efectivos.',
    //         'Importante para la rendición de cuentas, ya que permite evaluar si se están logrando los objetivos previstos.'
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    // {
    //     id: 2,
    //     label: 'Diseño de proyectos político-electorales ',
    //     header: 'La clave para el éxito',
    //     subtitle: 'El mejor diseño de proyectos',
    //     desciption: 'Diseño e implementación de estrategias en materia politico electoral, posicionamiento, seguimiento, construcción de agenda, discurso politico, sistematizacion geoelectoral.',
    //     howItWorks: [
    //         'El diseño de proyectos político-electorales es una herramienta que ayuda a los partidos y candidatos a planificar y llevar a cabo sus campañas políticas.',
    //         'Se centra en la identificación de los objetivos de la campaña, el público objetivo, el mensaje y la estrategia de comunicación.',
    //         'También puede incluir la identificación de recursos necesarios, la planificación de actividades y el seguimiento y evaluación del progreso.'
    //     ],
    //     adventages: [
    //         {
    //             text: 'Apoyar en el posicionamiento de la persona u organización en materia electoral, mapeo de actores politicos, diseño de discurso politico, diseño de encuestas, tracking electoral, diseño de planes de campaña, plataforma politica y de propuestas ',
    //             icon: icon1
    //         },
    //     ],
    //     value: [
    //         'Ayuda a los partidos y candidatos a mantenerse enfocados en los resultados y a asegurarse de que sus actividades están orientadas a alcanzar sus objetivos.',
    //         'Ayuda a los equipos de campaña a comprender mejor el entorno en el que se desarrollará su trabajo y a identificar las oportunidades y amenazas que podrían afectar el éxito de la campaña.',
    //     ],
    //     img: tendenciaDiscursiva,
    // },
    {
        id: 3,
        label: 'Escucha de tendencias discursivas',
        header: 'Estar al día nunca fue tan fácil',
        subtitle: 'El mejor modo de estar al tanto',
        desciption: 'Mapa de identificación de frecuencia clasificado por temas y variables de interés, principalmente aplicado a redes sociales, y clasiﬁcados de acuerdo con parámetros específicos como zona geográfica hasta nivel colonia, sección, edad, género, entre otras.',
        howItWorks: [
            `Observar las plataformas en busca de conversaciones relacionadas con un tema específico (Opinión pública, estadísticas de votantes, necesidades de la población, afinidad política, etcétera) y analizar la información en búsqueda de oportunidades.
            Es un proceso en tres pasos:
            `,
            '1. Monitorear los canales de redes sociales para conocer la opinión pública, las necesidades de las personas, lo que opinan de los servidores público y candidatos.',
            '2. Recopilación de datos referentes a un tema específico',
            '3. Analizar la información en búsqueda de tendencias y recomendación de plan de acción.'
        ],
        adventages: [
            {
                text: 'Permite la identificación de tendencias de mercado de acuerdo con interés del consumidor.',
                icon: icon4
            },
            {
                text: 'Útil para el desarrollo de discursos de impacto con un alto sentido de pertenencia comunitaria',
                icon: icon5
            },
            {
                text: 'Permitan el posicionamiento de marcas personales y comerciales para la atracción de segmentos de mercado específicos.',
                icon: icon6
            },
            
        ],
        value: [
            'Conocer las necesidades de las personas y  los problemas sociales.',
            'Conocer la opinión pública',
            'Construye discursos claros y concisos para las audiencias'
        ],
        img: tendenciaDiscursiva,
    },
    {
        id: 4,
        label: 'Informe de indicadores estratégicos',
        header: 'Descubre los elementos clave de los votantes',
        subtitle: 'Incrementa los votos a tu favor',
        desciption: 'Análisis socio demográﬁco acotado a una o varias zonas geográficas de interés (municipio, estado, región) basado en estadística descriptiva. Se muestra en formato de informe de indicadores estratégicos de distintas fuentes y variables de interés.',
        howItWorks: [
            `Consiste en la elección de una zona geográfica y variables sociales, una vez seleccionada comienza la búsqueda y/o creación de la información, para posteriormente hacer análisis socio demográfico y realizar un informe con los hallazgos más sobresalientes.`,
        ],
        adventages: [
            {
                text: 'Provee una panorama descriptivo general de diversas variables de interés para una zona determinada.',
                icon: icon7
            },
            {
                text: 'Útil para la confección de estrategias comerciales acotado a segmentos o nichos de mercado.',
                icon: icon8
            },
            {
                text: 'Insumo valioso para el diseño y localización de propuestas electorales y agendas políticas.',
                icon: icon9
            },
            {
                text: 'Proporciona información oportuna para la proyección de escenarios de acción y operación',
                icon: icon10
            },
            {
                text: 'Puede desplegarse en formato estático (pdf) o en un tablero dinámico con inteligencia de negocios para el monitoreo de información en tiempo real.',
                icon: icon11
            },
        ],
        value: [
            'Desarrolla un estudio demográfico de un segmento poblacional.',
            'Conoce las necesidades de la población.',
            'Planifica estrategias políticas para la obtención de la mayoría de votantes.'
        ],
        img: lienzoSocial,
    },
    {
        id: 5,
        label: 'Mapa de redes de influencia',
        header: 'Visualiza donde residen las tomas de decisiones',
        subtitle: 'Descubre los factores de inﬂuencia',
        desciption: 'Diagrama de nodos basado en un estudio cualitativo y cuantitativo para conocer el grado de vinculación y cercanía entre actores clave, así como la identificación de factores de inﬂuencia con respecto a una persona u organización (gobierno o empresa) determinada.',
        howItWorks: [
            `Un mapa de influencia es un modelo visual que muestra las personas que influyen y toman decisiones sobre su proyecto.`,
            'El mapa le ayudará a comprender cómo los actores se relacionan entre ellos, de modo que usted puede ver rápidamente la forma en que influyen en los flujos.'
        ],
        adventages: [
            {
                text: 'Diagrama visual que modela la red de sujetos involucrados cercanos a una persona u organización.',
                icon: icon17
            },
            {
                text: 'Califica el grado de influencia entre los nodos mediante un índice de valoración de las características cualitativas de la relación (afinidad ideológica, frecuencia de réplica, cercanía, etc.)',
                icon: icon18
            },
        ],
        value: [
            'Permite identificar dónde reside el poder de decisión dentro de los partidos políticos, campañas políticas, etcétera.',
        ],
        img: mapaRedesInfluencia,
    },
    {
        id: 6,
        label: 'Proyección electoral',
        header: 'Pronostica el resultado de tu campaña ',
        subtitle: 'Haz que tu voz sea escuchada',
        desciption: 'Modelo de series de tiempo para pronosticar el voto duro y la meta para un candidato o partido político. Insumo vital para la confección de la estrategia electoral.',
        howItWorks: [
            `Contempla una serie de pasos que se pueden dividir en dos principales:
            1. Recolección de datos históricos, costos y beneficios.
            `,
            '2. Análisis de los beneficios que se pueden obtener y los gastos que se requieren para una campaña política'
        ],
        adventages: [
            {
                text: 'Permite identiﬁcar la rentabilidad digital, territorial e híbrida por sección electoral agilizando la toma de decisiones.',
                icon: icon14
            },
            {
                text: 'Categoriza zonas de media, baja y alta probabilidad de triunfo con base en los registros históricos.',
                icon: icon15
            },
            {
                text: 'Mejora el enfoque y la asignación de recursos humanos, técnicos y financieros.',
                icon: icon16
            },
        ],
        value: [
            'Identifica costo de operaciones y los beneficios a lograr.',
            'Incrementa tu rentabilidad asignando óptimamente los recursos.'
        ],
        img: rentavilidad,
    },
    {
        id: 7,
        label: 'Digitalización de registros físicos masivos',
        header: 'Convertimos registros físicos en datos digitales de manera inteligente',
        subtitle: 'La inteligencia artificial al servicio de la digitalización de documentos físicos',
        desciption: 'Algoritmo de digitalización de registros físicos masivos, para extraer y ordenar la información en bases de datos. (Folio de Registro Nacional de Proveedores: RNP 202008231137244 -2021A005)',
        howItWorks: [
            `Si cuentas con grandes cantidades de datos, es decir, documentos físicos (como registros estadisticos, documentos de compra de insumos, etcétera)`,
            'Usamos herramientas tecnológicas con inteligencia artificial para pasar esos archivos físicos a digitales en muy poco tiempo.'
        ],
        adventages: [
            {
                text: 'Útil para la captura de información en grandes cantidades, ordenamiento y sistematización digital en bases de datos. ',
                icon: icon17
            }
        ],
        value: [
            'Reducción del tiempo en dar el salto tecnológico en tu campaña o partido político.',
        ],
        img: digitalizacion,
    },
    {
        id: 8,
        label: 'Tableros dinámicos',
        header: 'Aumenta tu productividad con un tablero de datos dinámico',
        subtitle: 'Tus datos, a tu manera',
        desciption: 'Visualización dinámica de información a partir de diversos elementos visuales interactivos, incluidos mapas, gráﬁcos e indicadores. Los tableros se basan en una tecnología poderosa que puede admitir varios ﬂujos de trabajo, puede cargar diferentes funciones que garantizan que los tableros funcionen como se espera y que se adapten para transmitir la información más relevante a audiencias especíﬁcas.',
        howItWorks: [
            `Consiste en la selección de los datos más relevantes de alguna campaña o partido político y se diseña una visualización fácil de entender, actualizable y vinculada a la base de datos, para tener visualizaciones en tiempo real, diarias, semanales o mensuales.`,
        ],
        adventages: [
            {
                text: 'Simplifican la forma en la que se explora y describe la información haciéndola más sencilla de entender y analizar.',
                icon: icon18
            },
            {
                text: 'Agilizan el consumo de datos haciéndolo más fácil y conveniente',
                icon: icon19
            },
            {
                text: 'Los tableros dinámicos permiten contar historias basadas en temáticas específicas.',
                icon: icon20
            },
            {
                text: 'A partir de la gestión de datos en tiempo real o en momentos concretos de análisis es posible realizar análisis en retrospectiva (en el pasado) o prospectiva (hacia el futuro).',
                icon: icon21
            },
        ],
        value: [
            'Permite conocer el estado actual del partido político',
            'Facilita la comprensión de grandes bases de datos'
        ],
        img: tableros,
    },
    {
        id: 9,
        label: 'Herramientas Fintech',
        header: 'La innovación que necesitas',
        subtitle: 'Optimiza tus finanzas con herramientas Fintech',
        desciption: 'Seleccionamos e integramos tecnologías fintech mediante interfaces de programación de aplicaciones (API), diseñamos y conectamos a bases de datos, gestionamos plataformas en la nube y desarrollamos algoritmos de aprendizaje automático para ayudar a las empresas a incrementar sus utilidades a partir de nuevas propuestas de negocios.',
        howItWorks: [
            `Consultoría, plan de acción, desarrollo de proyecto Fintech, propuesta de valor e integración de tecnologías para facilitar los procesos financieros a los clientes finales.`,
            'Nuestro mayor enfoque es incorporar herramientas tecnológicas en las organizaciones Fintech.'
        ],
        adventages: [
            {
                text: 'Análisis de bases de datos para la generación de modelos de calificación crediticia basados en data alternativa',
                icon: icon19
            },
            {
                text: 'Diseño de estrategias de negocio con enfoque fintech',
                icon: icon20
            },
            {
                text: 'Investigación de usuario y análisis de comportamientos de consumo',
                icon: icon21
            },
            {
                text: 'Gestión de la innovación en nuevos modelos de negocios.',
                icon: icon22
            },
            {
                text: 'Panorama estadístico y determinación del tamaño del mercado.',
                icon: icon1
            },
            {
                text: 'Análisis del marco jurídico aplicable a la operación negocios fintech.',
                icon: icon2
            },
            {
                text: 'Análisis e integraciones tecnológicas estratégicas para reducción de costos y maximización de utilidades.',
                icon: icon3
            },
        ],
        value: [
            'Permite conocer el estado actual de la institución, secretaria, ayuntamiento o paraestatal gubernamental',
            'Facilita la comprensión de grandes bases de datos'
        ],
        img: fintech,
    },
]

export const productList = {
    corporativos,
    politicos,
    gubernamentales
}