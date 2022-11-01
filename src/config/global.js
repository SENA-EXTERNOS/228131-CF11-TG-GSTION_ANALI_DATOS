export default {
  global: {
    componenteFormativo: 'Inteligencia artificial en los datos',
    descripcionCurso:
      'El recurso educativo presenta un contenido conceptual y técnico sobre elementos, métodos y herramientas empleadas en sistematización de datos, así como los ecosistemas dominantes del mercado. Se realiza ejercicios de aproximaciones de lo que se espera en la industria y modos de producción futuros.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/decorativo4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos sobre inteligencia artificial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Titulo de segundo nivel',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Machine learning',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Aprendizaje supervisado',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Aprendizaje no supervisado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Algunos recursos disponibles para el uso de ML',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Predictores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Inteligencia artificial',
      referencia:
        'Discovery Channel, 2018. <em>Inteligencia artificial</em> [Video]. Youtube. ',
      tipo: 'Documental',
      link: 'https://youtu.be/5rvZBsueMoc',
    },

    {
      tema: 'Amazon Rekognition',
      referencia:
        'Amazon Web Service, 2022. <em>¿Qué es Amazon Rekognition?</em> [Video]. ',
      tipo: 'Portafolio de servicios',
      link: 'https://aws.amazon.com/es/rekognition/',
    },

    {
      tema: '<em>Machine learning</em>',
      referencia:
        'Misión TIC2022, 2021. <em>Aplicaciones con Python en Inteligencia Artificial y Ciencia de datos</em>. [Video]. Youtube.',
      tipo: 'Conferencia. ',
      link: 'https://youtu.be/3JSp0ENOazQ',
    },

    {
      tema: '<em>Deep learning</em>: principios y fundamentos',
      referencia: 'Bosch Rué, A. Casas Roma, J. & Lozano Bagén, T. (2019).',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/126167',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'Pasos programados para que las máquinas realicen una función o tarea. Los algoritmos pueden programarse o en caso de la IA se auto ajustan o calibran sin necesidad de intervención humana.',
    },
    {
      termino: 'AWS',
      significado:
        '<em>Amazon Web Service</em>. Plataforma de computación o servicios en la nube, cuenta con múltiples servicios entre los cuales muchas herramientas tienen grandes componentes de inteligencia artificial y gestión de datos.',
    },
    {
      termino: '<em>Chatbots</em>',
      significado:
        '<em>Chats</em> operados por robots, o chats inteligentes que interactúan con personas o clientes sin necesidad de intervención humana.',
    },
    {
      termino: '<em>Datasets</em>',
      significado:
        'Conjunto de datos guardados en un sistema, ya sea en una o varias bases de datos. Por lo general son datos estructurados y están disponibles para gestión y uso que se desee dar según los objetivos del negocio.',
    },
    {
      termino: '<em>Deep Learning</em>',
      significado:
        'El aprendizaje profundo se refiere a los programas que emplean redes neuronales programadas para tener procesos de <em>machine learning</em> más avanzados y complejos.',
    },
    {
      termino: 'Disparadores',
      significado:
        '<em>Trigger</em>, bajo el contexto de programación o configuración de herramientas, se basa en reglas que, cuando se cumplen, se ejecuta una acción o comportamiento en los datos o procesos. ',
    },
    {
      termino: 'Minería de datos',
      significado:
        '<em>Data mining</em>. Es el uso de grandes volúmenes de datos para la obtención de situación, circunstancias o verdades a partir de patrones y características de los datos. Existen varias técnicas para la aplicación de minería de datos.',
    },
    {
      termino: '<em>No code</em>',
      significado:
        'Se asocia con el desarrollo de herramientas informáticas sin necesidad de aplicar o saber un lenguaje de programación; se puede asociar al desarrollo de proyectos basado en herramientas con ambientes visuales.',
    },
    {
      termino: 'Palabras polisémicas',
      significado:
        'Se trata de las palabras que tienen varios significados, el significado lo da el contexto sobre el que se da la comunicación.',
    },
    {
      termino: '<em>Servicios cloud</em>',
      significado:
        'Servicios ejecutados en internet, generalmente ofrecido por un proveedor; además no se conoce necesariamente, el lugar físico donde se encuentren los servidores o almacenamiento de los datos y aplicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Agrawal, A., Gans, J., & Goldfarb, A.  (2019). <em>Máquinas predictivas: la sencilla economía de la inteligencia artificial</em>. Barcelona: Reverté. Obtenido de ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/122310 ',
    },
    {
      referencia:
        'Amazon Web Service. (2022). <em>Amazon Rekognition</em>. Recuperado el 17 de septiembre de 2022 de ',
      link: 'https://aws.amazon.com/es/rekognition/ ',
    },
    {
      referencia:
        'Amazon Web Service. (s.f.). <em>Amazon SageMaker</em>. Recuperado el 16 de septiembre de 2022 de ',
      link: 'https://aws.amazon.com/es/sagemaker/',
    },
    {
      referencia:
        'Bobadilla, J. (2020). <em>Machine Learning y Deep Learning</em>. Bogotá, D.C: Ediciones de la U. Obtenido de ',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=10277 ',
    },
    {
      referencia:
        'Dot CSV. (2019). <em>¿Qué es el Aprendizaje Supervisado y No Supervisado?</em> [Video]. Youtube. ',
      link: 'https://youtu.be/oT3arRRB2Cw ',
    },
    {
      referencia:
        'International Business Machines [IBM]. (s.f.). <em>IA y Machine Learning con Watson Knowledge Catalog</em>. Recuperado el 16 de septiembre de 2022 de ',
      link: 'https://www.ibm.com/co-es/cloud/watson-knowledge-catalog ',
    },
    {
      referencia:
        'International Business Machines [IBM]. (s.f.). <em>Watson Text to Speech</em>. Recuperado el 16 de septiembre de 2022 de ',
      link: 'https://www.ibm.com/co-es/cloud/watson-text-to-speech',
    },
    {
      referencia:
        'Microsoft Corporation. (s.f.). <em>Microsoft Azure</em>. Recuperado el 16 de septiembre de 2022de ',
      link: 'https://azure.microsoft.com/es-es/',
    },
    {
      referencia:
        'PowerData. (19 de mayo de 2022). <em>El poder de la inteligencia artificial centrada en datos</em>. Recuperado el 16 de septiembre de 2022 de ',
      link:
        'https://blog.powerdata.es/el-valor-de-la-gestion-de-datos/el-poder-de-la-inteligencia-artificial-centrada-en-datos',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
