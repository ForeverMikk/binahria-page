
import img  from '../assets/images/category-img.png';
import tableros from '../assets/images/catagories/dashboards.png';
import fintech from '../assets/images/catagories/serviciosFintech.png';
import digitalizacion from '../assets/images/catagories/digitalizacion.png';
import lienzoSocial from '../assets/images/catagories/lienzoSocial.png';
import tendenciaDiscursiva from '../assets/images/catagories/tendenciaDiscursiva.png'


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
import icon12 from '../assets/images/icons/icon12.svg';
import icon13 from '../assets/images/icons/icon13.svg';
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
    {
        id: 1,
        label: 'Escucha de tendencias discursivas',
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
        id: 2,
        label: 'Lienzo social',
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
        id: 3,
        label: 'Mapa de redes de influencia',
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
        img: img,
    },
    {
        id: 4,
        label: 'Análisis de rentabilidad digital y territorial',
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
                icon: icon12
            }
        ],
        value: [
            'Permite identificar dónde reside el poder en la empresa y dentro del proyecto',
        ],
        img: img,
    },
    {
        id: 5,
        label: 'Servicios de digitalización con inteligencia artificial',
        desciption: 'Algoritmo de digitalización de registros físicos masivos, para extraer y ordenar la información en bases de datos. (Folio de Registro Nacional de Proveedores: RNP 202008231137244 -2021A005)',
        howItWorks: [
            'Si cuentas con grandes cantidades de datos, es decir, documentos físicos (como registros de entrada y salida de mercancía, de personal, documentos de ventas y compras, etcétera)',
            'Usamos herramientas tecnológicas con inteligencia artificial para pasar esos archivos físicos a digitales en muy poco tiempo.',
        ],
        adventages: [
            {
                text: 'Útil para la captura de información en grandes cantidades, ordenamiento y sistematización digital en bases de datos.',
                icon: icon13
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
        id: 6,
        label: 'Tableros digitales',
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
        id: 7,
        label: 'Servicios Fintech',
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
    {
        id: 1,
        label: 'Escucha de tendencias discursivas',
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
        id: 2,
        label: 'Lienzo social',
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
        id: 3,
        label: 'Mapa de redes de influencia',
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
        img: img,
    },
    {
        id: 4,
        label: 'Análisis de rentabilidad digital y territorial',
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
                icon: icon12
            },
            {
                text: 'Mejora el enfoque y la asignación de recursos humanos, técnicos y financieros.',
                icon: icon13
            }
        ],
        value: [
            'Identifica costo de operaciones y los beneficios a lograr.',
            'Incrementa tu rentabilidad asignando óptimamente los recursos.'
        ],
        img: img,
    },
    {
        id: 5,
        label: 'Servicios de digitalización con inteligencia artificial',
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
        id: 6,
        label: 'Tableros digitales',
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
        id: 7,
        label: 'Servicios Fintech',
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
    {
        id: 1,
        label: 'Escucha de tendencias discursivas',
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
        id: 2,
        label: 'Lienzo social',
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
        id: 3,
        label: 'Mapa de redes de influencia',
        desciption: 'Diagrama de nodos basado en un estudio cualitativo y cuantitativo para conocer el grado de vinculación y cercanía entre actores clave, así como la identificación de factores de inﬂuencia con respecto a una persona u organización (gobierno o empresa) determinada.',
        howItWorks: [
            `Un mapa de influencia es un modelo visual que muestra las personas que influyen y toman decisiones sobre su proyecto.`,
            'El mapa le ayudará a comprender cómo los actores se relacionan entre ellos, de modo que usted puede ver rápidamente la forma en que influyen en los flujos.'
        ],
        adventages: [
            {
                text: 'Diagrama visual que modela la red de sujetos involucrados cercanos a una persona u organización.',
                icon: icon12
            },
            {
                text: 'Califica el grado de influencia entre los nodos mediante un índice de valoración de las características cualitativas de la relación (afinidad ideológica, frecuencia de réplica, cercanía, etc.)',
                icon: icon13
            },
        ],
        value: [
            'Permite identificar dónde reside el poder de decisión dentro de los partidos políticos, campañas políticas, etcétera.',
        ],
        img: img,
    },
    {
        id: 4,
        label: 'Análisis de rentabilidad digital y territorial',
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
        img: img,
    },
    {
        id: 5,
        label: 'Servicios de digitalización con inteligencia artificial',
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
        id: 6,
        label: 'Tableros digitales',
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
    }
]

export const productList = {
    corporativos,
    politicos,
    gubernamentales
}