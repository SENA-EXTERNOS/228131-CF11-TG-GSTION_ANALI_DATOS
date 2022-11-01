<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Machine learning

    .row.justify-content-center.align-items-center.mb-5
      .col-md-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t2/f1.svg', alt='imagen relacionada')
      .col-md-10
        p 
          em Machine learning 
          | (ML) es el área de las ciencias computacionales que hace parte de la IA, su enfoque es que las computadoras, en vez de ser programadas paso a paso, aprenden a partir de los datos. Cada solución de ML es específica para cada necesidad, tal y como se tiene el enfoque con la programación convencional. Los profesionales de ML se dedican al desarrollo de algoritmos genéricos que pueden extraer patrones de diferentes tipos de datos.

    .row.justify-content-center.align-items-end.mb-5
      .col-md-8.tarjeta(style="background-color: #FFEDB8;box-shadow:1rem 1rem 0 rgba(0,0,0,.3);z-index:1")
        p.p-4.mb-0 El ML enfocado a la ciencia de datos apunta a desarrollar procesos específicos como la identificación de la fuente de datos, desechar información inválida o no útil, limpiar, normalizar, relacionar, datos sesgados, etc.
        p.py-4.mb-0(style="background-color: #FECA2E;padding-left:2rem;margin-left:-0.75rem;padding-right:2rem;margin-right:-0.75rem") Todas estas tareas, podrían encontrar solución eficiente en la selección de soluciones de 
          em machine learning 
          | cuya aplicación resulte apropiada, la elección del algoritmo más adecuado, el ajuste de los parámetros del método elegido, el análisis de los resultados, la identificación de comportamientos incorrectos, la vuelta a procesos anteriores con el fin de cambiar lo que resulte necesario para mejorar los resultados (Bobadilla, 2020).
        .p-4
          p: b Algunas funcionalidades de ML en los datos
          p Si bien la aplicación de 
            em Business Intelligence 
            | (BI) es una manera interesante para el conocimiento de las organizaciones y otros beneficios, la implementación de ML es ir más allá, pues se orienta a mejorar predicciones cada vez más precisas, obtener información más profunda de los datos, reducir sobrecarga de tareas y mejorar las experiencias de clientes, por ejemplo, a través de 
            em Chatbots 
            | que vayan aprendiendo de un humano a cómo responder según las situaciones.
          p.mb-0 Más adelante, se retoman algunas herramientas disponibles para las empresas de una manera fácil y al alcance
      .col-md-4(style="overflow:visible; background-color: #daf0f3;")
        img(src='@/assets/curso/temas/t2/f2.svg', alt='robot',style="height:100%")

    p Un ejemplo ML y la mejora de predicciones es la aplicación Maps y Waze de Google. Hace algunos años, donde no tenía tantos datos no era precisa en la predicción, se limitaba a calcular el tiempo basado en la distancia y los límites de velocidad en las carreteras; actualmente, ha mejorado ostensiblemente aprendiendo de los usuarios que viajan y se autoajusta según las circunstancias y muchas variables más.

    h3 Modo de funcionar

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3
        figure
          img(src='@/assets/curso/temas/t2/f3.svg', alt='')
      .col-md-7
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          p.mb-0 El 
            em machine learning 
            | (ML) está basado en la experiencia o patrones, entre más datos, más es exacto el aprendizaje: el sistema almacena una gran cantidad de datos que usa luego para analizar situaciones y anticiparlas.

    .col-md-10.mx-auto.mb-5
      PasosA.color-acento-botones.mb-5(tipo="n")
        .row(titulo="")
          .col-md-7.mb-4.mb-md-0
            p El fin es que la computadora pueda auto configurarse basada en un “plan interno” o parámetros prestablecidos, de esa manera permite identificar elementos clave en los que se debe centrar. Para esto, debe experimentar con diferentes ejemplos y pruebas para poder mejorar: de ahí que se habla de aprendizaje.
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t2/f4.svg', alt='')
        .row(titulo="")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/f5.svg', alt='')
          .col-md-7
            p No obstante, el ML no es un ente autónomo 100% (al menos por ahora) pues los programas necesitan datos de aprendizaje con los que “entrenarse”. Por lo que significa que, la exploración de datos o minería de datos constituye la base del funcionamiento del machine learning.
        .row(titulo="")
          .col-md-7.mb-4.mb-md-0
            p Estos datos se conocen como datos de entrenamiento (
              em training data set
              | ). Asimismo, es necesario usar un 
              em software 
              | de algoritmos de análisis, así como de un entorno de despliegue. 
          .col-md-5(data-aos="fade-left")
            figure
              img(src='@/assets/curso/temas/t2/f6.svg', alt='')
        .row(titulo="")
          .col-md-5.mb-4.mb-md-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t2/f7.svg', alt='')
          .col-md-7
            p Existen diferentes tipos de aprendizaje, que varían en función de si se conoce o no la respuesta que se busca, del tipo de datos analizados, del entorno de los datos en cuestión y del tipo de análisis realizado (estadísticas, comparaciones, reconocimiento de imágenes, etc.).

    p Los algoritmos de aprendizaje y la potencia de cálculo requerida también difieren en función de la tarea que se realiza.
    p La calidad de los aprendizajes depende de varios elementos:

    .row.justify-content-center.mb-5
      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta ca-ab")
          div(titulo="Cantidad de características que detallan los ejemplos")
            p.mb-0 Cuanto más sencillos y precisos, más rápido y acertado será el análisis (tamaño, peso, cantidad, velocidad, rangos, etc.).
          div(titulo="Calidad de los datos")
            p.mb-0 Si faltan muchos datos o se presentan falencias en las dimensiones de la calidad de datos, el análisis se verá afectado.
      .col-md-4
        figure
          img(src='@/assets/curso/temas/t2/f8.png', alt='')
            
    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-botones.p-4
        p.mb-0 Si se cumplen al máximo estos criterios, el ML de predicción será más preciso y el análisis resultará más ajustado a la realidad. Así que, una vez que haya definido los objetivos y elementos de aprendizaje automático y que las bases de datos estén en óptimas condiciones, podrá empezar a sacar el máximo partido al 
          em machine learning
          | .

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Aprendizaje supervisado

    p El tipo de aprendizaje está dado según el principio del algoritmo -sin afirmar que otro tipo de aprendizaje no sea usado- y es el más implementado en la gestión de datos y otras aplicaciones; asimismo, ampliar la implementación de la inteligencia artificial en las organizaciones y la vida cotidiana.

    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA(tipo='b')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p El aprendizaje supervisado se fundamenta en el descubrimiento o aprendizaje en la relación existente entre unas variables o datos de entrada y unas variables de salida, es decir, el aprendizaje surge de mostrarle a los algoritmos cuál es el resultado que se desea obtener para un determinado valor.
          .col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              br 
              span: em Entrenamiento aprendizaje supervisado
            figure
              img(src='@/assets/curso/temas/t2/f9.png', alt='imagen relacionada')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p En el ejemplo anterior, se han cargado a la máquina diferentes tipos de imágenes (variables de entrada) y el valor que se espera de estas imágenes; al final la máquina deberá aprender a identificar una imagen, incluso sin que antes se le haya mostrado.
            p Esta técnica podría aplicarse en ejemplos más complejos, por ejemplo, en la capacidad de describir imágenes; en este caso estaríamos hablando de aprendizaje profundo (DL).
          .col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4.
              br
              span: em Reconocimiento de objetos, personas, texto, escenas y actividades
            figure
              img(src='@/assets/curso/temas/t2/f10.png', alt='imagen relacionada')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Otro ejemplo para entender el aprendizaje supervisado es la siguiente relación:
            p Por patrones, se sabe que el resultado esperado es el 
              b 24
              | ; por lo cual, el aprendizaje es que al valor de entrada se debe multiplicar por 2. De esa manera, al ingresar un valor que nunca se había visto, por ejemplo, el 20, la máquina completa el valor de salida.

          .col-md-8
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 5.
              br 
              span: em Relación de patrones
            figure
              img(src='@/assets/curso/temas/t2/f11.png', alt='imagen relacionada')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p El patrón anterior es muy simple, pero en la vida real se presentan problemas mucho más complejos para aprender; por ejemplo: ¿cómo descubrir la relación que hay entre un correo electrónico y su clasificación como spam, correo deseado o publicidad?
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/f12.png', alt='imagen relacionada')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Es posible que cualquier usuario pueda leerlos todos y clasificarlos sin problema, pero ¿qué patrones hacen que un correo sea o no deseado? En este caso, la solución más fácil, segura y eficiente es darle a una máquina miles de ejemplos de correos ya clasificados y con seguridad, el programa aprenderá cuáles son las características y al momento de implementar tendrá un acierto con alta confiabilidad.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/f13.png', alt='imagen relacionada')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Un proyecto interesante de este tipo de aprendizaje fue puesto en marcha en 2016 por 
              em Instagram
              | , donde se enseñaron miles de perfiles con depresión a la máquina y, al final, esta fue capaz de diagnosticar personas con depresión con acierto mucho mayor que los profesionales de la salud.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/f14.png', alt='imagen relacionada')
        .row.align-items-center
          .col-md-4.mb-4.mb-md-0
            p Con la pandemia COVID-19, muchas empresas han introducido millones de datos, de esta manera, se podrá gestionar mucho mejor en una zona o país, algún tipo de brote de virus o enfermedades.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t2/f15.png', alt='imagen relacionada')

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Aprendizaje no supervisado 

    .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p.mb-0 Este paradigma de aprendizaje toma como base únicamente los datos de entrada, sin explicarle al sistema qué resultado se espera obtener. Podría ser un poco difícil de concebir, pues si no hay una referencia previa, ¿de qué manera podrían los sistemas aprender?
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/temas/t2/f16.svg', alt='')

    p Este concepto es menos usado porque presenta mayores retos a la ciencia y a los algoritmos: a partir de un parámetro, el sistema deberá tratar de descubrir qué resultado o resultados posibles podría dar ese dato de entrada.

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/f17.svg', alt='')
        p.text-small.text-white Pero tiene una ventaja respecto al entrenamiento en aprendizaje supervisado que implica miles de horas, humanos enseñando y altos costos, pues para que un sistema esté bien entrenado se requieren al menos 100 mil ejemplos, tarea larga y costosa, mientras que el aprendizaje no supervisado solo requiere de los datos de entrada, dar unos pocos parámetros de lo que se quiere y dejar todo a la máquina.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t2/f18.svg', alt='')
        p.text-small La desventaja es que requiere mucho procesamiento, puntos generales que pueda asociar a lo que se le parezca y avance tecnológico con el fin de que la máquina vislumbre y descubra el dato de salida.

    p Ejemplo, se puede dar un rostro de un hombre con gafas, luego restar un hombre sin gafas y como tercer punto sumar una mujer sin gafas, la máquina descubre que el resultado podría ser una mujer con gafas.

    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 6.
        br
        span: em Ejemplo de un resultado de aprendizaje no supervisado
        figure
          img(src='@/assets/curso/temas/t2/f19.png', alt='')
          figcaption Nota: Ejemplo de aprendizaje no supervisado. Tomado de Dot CSV (2019)

    p Si bien, las técnicas ML más usadas están basadas en referencias de salidas, el aprendizaje no supervisado es el futuro; de cierta manera, los sistemas usarán estas referencias y gran capacidad computacional para empezar a asociar.

    .col-md-10.mx-auto.row.justify-content-center.mb-4
      .col-md-7
        img(src='@/assets/curso/temas/t2/f20.svg', alt='')
      .col-md-5.p-4(style="background-color: rgba(254,202,46,.7)")
        p.mb-0 Para una máquina tener sentido común es un objetivo muy difícil, sin embargo, los algoritmos actuales se van acercando un poco, por ejemplo, hay palabras que si bien es la misma para dos cosas o significados diferentes (palabras polisémicas), para los humanos es fácil según el contexto, pero para una máquina es difícil definir estas cosas. 

    .col-md-10.mx-auto.row.justify-content-center.mb-5
      .col-md-5.p-4(style="background-color: rgba(254,202,46,.7)")
        p.mb-0 En el proceso de la formación, al no ser científicos computacionales, no hace falta entender de manera detallada y matemática cómo se produce este aprendizaje, lo pertinente es entender cómo los sistemas de IA interactúan con la información de entrada y la información de salida; esta manera de entender un sistema se conoce como caja negra, o sea, el agente inteligente es una caja de la cual no interesa saber qué es lo que ocurre dentro de ella, sino qué hace con el entorno, es decir, entender bien qué hace más que el cómo lo hace.
      .col-md-7
        img(src='@/assets/curso/temas/t2/f21.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-md-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t2/f22.svg', alt='imagen relacionada')
      .col-md-10
        p Pero si una persona curiosa decide abrir esa caja negra, lo que  encuentra en ella es un mundo de algoritmos interrelacionados entre sí, conteniendo programación con componentes matemáticos, estadísticos y acceso a millones de datos.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Algunos recursos disponibles para el uso de ML

    .col-md-10.mx-auto.mb-5
      .bloque-texto-a.color-primario.p-4.p-md-5.mb-5
        .row.m-0.align-items-center.justify-content-between
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Actualmente no es necesario realizar estudios especializados de IA para usar servicios de esta naturaleza, pues ya existen compañías como Amazon, IBM, Google y otras que ya cuentan con servicios previamente entrenados ofreciendo inteligencia lista para su uso integrando aplicaciones corporativas y flujos de trabajo.
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/temas/t2/f23.svg', alt='')

    .col-md-8.mx-auto.mb-5
      .cajon.color-acento-botones.p-4.mb-4
        p.mb-0 Las marcas prometen que sus servicios de IA se integran con facilidad con las aplicaciones y datos para ocuparse de casos de uso comunes tales como, crear recomendaciones personalizadas, mejorar atención al cliente, optimizar perfiles de clientes para apuntar mejorar campañas para adquirir y fidelizar clientes.

    p Algunos casos de uso más frecuentes de los servicios de 
      em machine learning 
      | (ML) son:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Mantenimiento predictivo" :icono="require('@/assets/curso/temas/t2/f24.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Muchas empresas que utilizan maquinaria o equipos requieren saber con exactitud cuándo hacerles mantenimiento preventivo para preservar su vida útil y, de esta manera, optimizar recursos. Hace mantenimiento a un equipo sin que cumpla con las condiciones de uso es una pérdida de tiempo y dinero, por el contrario, si no se hace, se corre el riesgo de que el mantenimiento ya sea correctivo, en vez de ser predictivo, lo que implicaría un mayor costo y suspensión de servicios de manera no planeada. Si un gestor de analítica de datos suministra toda la información a un sistema ML para que entrene y aprenda el momento adecuado para hacer mantenimientos a cada maquinaria, puede ser un caso de éxito y de disminución de costos por mantenimientos innecesarios.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f25.png', alt='')
      .py-4.py-md-5(titulo="Predicción de abandono" :icono="require('@/assets/curso/temas/t2/f26.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Es uno de los elementos que las empresas emplean para vigilar la fidelización de los clientes. A partir de estos modelos los sistemas identifican aquellos clientes con un porcentaje de riesgo de abandono de compras.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f27.png', alt='')
      .py-4.py-md-5(titulo="Recomendaciones personalizadas" :icono="require('@/assets/curso/temas/t2/f28.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p A partir de técnicas de mercadeo, los sistemas de IA perfilan a cada cliente según sus costumbres de compra y consumo, procurando realizar ventas cruzadas “
              em cross-selling
              | ” o ventas adicionales. De esta manera, la máquina conecta de manera acertada e individual los productos o servicios ofrecidos por la organización con las necesidades específicas detectadas de cada cliente.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f29.png', alt='')
      .py-4.py-md-5(titulo="Detección de fraude" :icono="require('@/assets/curso/temas/t2/f30.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Los sistemas inteligentes detectan comportamientos que se salen de los patrones normales cuando se ofrecen datos a servicios de inteligencia artificial, estos detectan anomalías que podrían traducirse en transacciones o comportamientos fraudulentos; entre muchos otros ejemplos, para un banco, realizar muchas transacciones en pocos valores o ingresar de varias computadoras y de diferentes lugares geográficos a una misma cuenta, hacer transacciones que se salen del promedio normal del usuario. La idea de estos sistemas inteligentes es encender alarmas para que un analista financiero o de la organización de inicio a investigaciones y acciones que lleven a descubrir y evitar fraudes o ataques que vulneren seguridad de sistemas de información o clientes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f31.png', alt='')
      .py-4.py-md-5(titulo="Pronóstico de demanda" :icono="require('@/assets/curso/temas/t2/f32.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p A partir de la analítica y el establecimiento de variables que puedan influir en las ventas futuras se validan y se comparan modelos predictivos para definir cuál se ajusta más a la realidad, según la experiencia. Esta es una funcionalidad importante al establecer una alta probabilidad sobre el comportamiento de los clientes en el futuro y, por tanto, para la toma de decisiones favorables al aumento de los resultados y la optimización de los recursos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f33.png', alt='')
      .py-4.py-md-5(titulo="Extraer datos de imágenes" :icono="require('@/assets/curso/temas/t2/f34.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            p Se trata de servicios de ML que extraen texto, escritura a mano y datos de documentos físicos de manera automática. Para procesar procesos que son manuales y costosos, se emplea el ML con el objetivo de leer y procesar cualquier tipo de documento, como reconocer, escritura a mano, tablas y otros datos sin interferencia humana (excepto si es necesario ajustar los entrenamientos). Puede automatizar el procesamiento de documentos y tomar medidas sobre la información que se extrae con rapidez, ya sea que se automatice información como facturas, recibos u otros según la naturaleza del proceso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/f35.png', alt='')

    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t2/f36.jpg', alt='Texto que describa la imagen')
      div(x="10%" y="0%" numero="1")
        p IBM ofrece diversos servicios para empresas tales como “
          em Watson Text to Speech
          | ”,” que le permite convertir texto escrito en audio de sonido natural en una variedad de idiomas y voces dentro de una aplicación existente o dentro de 
          em Watson Assistant (International Business Machines IBM, 2022)
          | .
        p Para la gestión de datos existen múltiples opciones para implementar IBM como ecosistema digital corporativo ofreciendo tecnología y herramientas para la computación en la nube, prácticamente todos los motores de bases de datos comerciales, herramientas para ETL, gestión de datos maestros y calidad de los datos.
      div(x="30%" y="100%" numero="2")
        p Para el caso específico de 
          em machine learning 
          | (ML), es interesante explorar la herramienta “IA y 
          em Machine Learning 
          | con 
          em Watson Knowledge Catalog
          | ”, pues como se ha tratado, el aprendizaje supervisado es el más exacto, pero también requiere de miles de horas y datos para entrenar los sistemas, IBM cuenta con catálogo impulsado por IA y 
          em machine learning 
          | que sirve como única fuente de la verdad ayudando a los analistas del negocio a encontrar, preparar y gobernar sus datos. IBM, 2022)
      div(x="50%" y="0%" numero="3")
        p Esta herramienta de Amazon “ofrece capacidades de visión artificial (CV) previamente entrenadas y personalizables para extraer información a partir de las imágenes y los videos” (
          em Amazon Web Service
          | , 2022)
        p Si bien, es una herramienta orientada más a la integración de 
          em apps
          | , se pueden integrar funcionalidades como descripción de objetos y actividades, moderar contenidos (detectar niños y evitar contenidos inadecuados), sacar texto de imágenes, detección y análisis de rostros, búsqueda facial, trayectoria de personas.
      div(x="70%" y="100%" numero="4")
        p Orientado para científicos de datos y analistas de negocios. Cuenta con una interfaz donde se puede conectar, configurar el almacenamiento en AWS, y vaciar datos, preparar allí grandes volúmenes de datos tanto estructurados como no estructurados.
        p La herramienta suministra librerías que se necesiten para construir los modelos y elegir algoritmos que procesen los datos y elegir qué parámetros aprender y el uso de caso particular.
        p En relación para analistas del negocio, plantea las opciones de buscar, importar y unir datasets con AWS, cuenta con la posibilidad de conectar varias fuentes de datos.
        p Este servicio de Amazon usa su inteligencia para mostrar posibles errores en los datos, limpiarlos y mejorar la calidad de los mismos.
        p Adicional, automáticamente, saca modelos sugeridos; el analista puede elegir el modelo según las necesidades o requerimientos, como también hacer ajustes o construirlo todo.
        p Una de las ventajas de esta herramienta es la construcción de modelos de ML y generar predicciones precisas sin código (
          em Amazon Web Service
          | , 2022).
      div(x="90%" y="0%" numero="5")
        p Microsoft ofrece herramientas amigables para entrenar e implementar modelos de ML con cuentas Azure.
        p Como el resto de los servicios, está basado en servicios cloud, ofrece servicios No code, en un entorno visual gráfico, con ambientes sencillos y fáciles de entender basado en flujo de datos, procesos, disparadores, entrenamiento de máquina, conexión de datos, etc. Es una herramienta recomendada para quienes desean empezar a explorar y aprender todo el mundo de ML (Microsoft, 2022).
        p Nota. Ambiente de trabajo Microsoft Azure. Tomado de Microsoft (2022)

    h3 Algunas aplicaciones de ML 

    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 7.
        br
        span: em Caso de usos herramienta ML de Amazon
      figure
        img(src='@/assets/curso/temas/t2/f37.svg', alt='')
        figcaption Nota: Casos de usos herramientas ML de Amazon. Tomado de Amazon (2022).

    p: b En la infografía se visibiliza la evolución de la gestión de datos en la inteligencia artificial (IA).

    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 8.
        br
        span: em Infografía evolución de la gestión de datos
      figure
        img(src='@/assets/curso/temas/t2/f38.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
