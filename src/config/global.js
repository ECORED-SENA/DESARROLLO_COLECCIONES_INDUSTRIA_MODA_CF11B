export default {
  global: {
    componenteFormativo: 'CAD: Diseño Asistido por Computador',
    descripcionCurso:
      'Se abordan las herramientas básicas y su manejo para la realización de patrones básicos en formato digital, por medio del <i>software</i> Optitex.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
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
        titulo: '<i>Hardware</i> y <i>software</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Reconocimiento del sistema',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Interfaz gráfica y herramientas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Geometría básica: punto, línea, figura geométrica, crear pieza',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Punto escalado y punto no escalado',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Plano cartesiano, sentido horario y movimiento de puntos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Trazo de curvas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Construcción de piezas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Escalado',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Industrialización, aplomo y marcado de piezas',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Señales internas y piquetes',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Planocartesiano.net. (s. f.). Ángulos positivos y negativos en el plano cartesiano. ',
      link:
        'https://planocartesiano.net/angulos-positivos-y-negativos-en-el-plano-cartesiano',
    },
    {
      referencia:
        'Real Academia Española. (s. f.). Diccionario de la lengua española. RAE - ASALE. ',
      link: 'https://dle.rae.es/ ',
    },
    {
      referencia:
        'Significados.com. (s. f.). Vector: qué es, características, tipos y ejemplos. ',
      link: 'https://www.significados.com/vector/ ',
    },
  ],
  glosario: [
    {
      termino: 'Adyacente',
      significado:
        '1. adj. Situado en la inmediación o proximidad de algo.<br>Inmediación: 1. f. Cualidad de inmediato. 3. f. pl. Proximidad en torno a un lugar. (Real Academia Española, s. f.).',
    },
    {
      termino: 'Cadena de valor',
      significado:
        'modelo teórico que permite describir el desarrollo de las actividades de una organización empresarial generando valor al producto final, descrito y popularizado por Porter (1985) en su obra, Competitive Advantage: Creating and Sustaining Superior Performance.',
    },
    {
      termino: 'Digitalización',
      significado:
        '1. f. Acción y efecto de digitalizar.<br>Digitalizar: 1. tr. Registrar datos en forma digital. 2. tr. Convertir o codificar en números dígitos datos o informaciones de carácter continuo, como una imagen fotográfica, un documento o un libro (Real Academia Española, s. f.). ',
    },
    {
      termino: 'Drapeado',
      significado:
        '1. m. Acción y efecto de drapear.<br>Drapear: 1. tr. Colocar o plegar los paños de la vestidura, y, más especialmente, darles la caída conveniente. U. t. c. prnl. (Real Academia Española, s. f.).',
    },
    {
      termino: '<i>Hardware</i>',
      significado:
        '1. m. Inform. Equipo. (‖ conjunto de aparatos de una computadora) (Real Academia Española, s. f.).',
    },
    {
      termino: 'Ícono',
      significado:
        '3. m. Signo que mantiene una relación de semejanza con el objeto representado; p. ej., las señales de cruce, badén o curva en las carreteras. 4. m. Inform. Símbolo gráfico que aparece en la pantalla de una computadora u otro dispositivo electrónico y que representa un programa, un sistema operativo, etc. (Real Academia Española, s. f.).',
    },
    {
      termino: 'Industria 4.0',
      significado:
        'industria 4.0 y su cuasisinónimo cuarta revolución industrial, son expresiones que denominan una hipotética cuarta mega etapa de la evolución técnico-económica de la humanidad, contando a partir de la Primera Revolución industrial. Esta cuarta etapa habría comenzado recientemente y su desarrollo estaría proyectado hacia la tercera década del siglo XXI. La inteligencia artificial es señalada como elemento central de esta transformación, íntimamente relacionada con la acumulación creciente de grandes cantidades de datos (Big data), el uso de algoritmos para procesarlos, y la interconexión masiva de sistemas y dispositivos digitales.<br>Esta cuarta etapa que aún no podemos caracterizar completamente, correspondería a una nueva manera de organizar los medios de producción. El objetivo que así pretendería alcanzarse es la puesta en marcha de un gran número de «fábricas inteligentes» (en inglés: smart factories) capaces de una mayor adaptabilidad a las necesidades y a los procesos de producción, así como a una asignación más eficiente de los recursos, abriendo así la vía a una nueva revolución industrial o revolución industrial 4.0.1',
    },
    {
      termino: 'Interfaz',
      significado:
        '1. f. Conexión o frontera común entre dos aparatos o sistemas independientes.<br>2. f. Inform. Conexión, física o lógica, entre una computadora y el usuario, un dispositivo periférico o un enlace de comunicaciones. (Real Academia Española, s. f.)',
    },
    {
      termino: 'Magnitud',
      significado: '1. f. Tamaño de un cuerpo (Real Academia Española, s. f.).',
    },
    {
      termino: 'Periférico',
      significado:
        '2. m. Inform. Aparato auxiliar e independiente conectado a la unidad central de una computadora u otro dispositivo electrónico (Real Academia Española, s. f.).',
    },
    {
      termino: 'Plóter',
      significado:
        '1. m. Periférico de una computadora u otro dispositivo electrónico que dibuja o representa diagramas y gráficos (Real Academia Española, s. f.).',
    },
    {
      termino: '<i>Software</i>',
      significado:
        '1. m. Inform. Conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora (Real Academia Española, s. f.).',
    },
    {
      termino: 'Vector',
      significado:
        'en física, es un segmento de recta en el espacio que parte de un punto hacia otro, es decir, que tiene dirección y sentido. Los vectores en física tienen por función expresar las llamadas magnitudes vectoriales. El término vector proviene del latín vector, vectores, cuyo significado es ‘el que conduce’, o ‘el que transporta’. Los vectores se representan gráficamente con una flecha. Asimismo, cuando deben ser expresados en una fórmula, se representan con una letra coronada por una flecha (Significados, s. f.).',
    },
    {
      termino: 'Zoom- Zum',
      significado:
        '2. m. Efecto de acercamiento o alejamiento de la imagen obtenido con el zum (Real Academia Española, s. f.).',
    },
  ],
  complementario: [
    {
      texto: 'Lisandro L. (2020). Cómo aprender Optitex de forma fácil.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=v0kaYW7Xm4s',
    },
    {
      texto: 'Sublimoldes. (2019). Curso de Optitex.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IaajCr-DdwA',
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
      {
        nombre: 'Marisol Osorio',
        cargo: 'Líder Sennova',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'María Luisa Yepes',
        cargo: 'Instructora',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Fabio Andrés Gaviria Londoño',
        cargo: 'Instructor',
        centro:
          'Centro de Formación en Diseño, Confección y Moda - Regional Antioquia',
      },
      {
        nombre: 'Liliana Victoria Morales Gualdrón',
        cargo: 'Diseñadora Instruccional',
        centro:
          '.Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluación instruccional ',
        centro: 'Centro de gestión industrial - Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios  - Regional Tolima',
      },
      {
        nombre: 'Oscar Ivan Uribe Ortiz ',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura  - Regional Santander',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
