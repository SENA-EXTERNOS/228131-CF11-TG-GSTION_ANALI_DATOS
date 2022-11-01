<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos sobre inteligencia artificial

    .row.justify-content-center.align-items-center.mb-5
      .col-md-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t1/f1.svg', alt='imagen relacionada')
      .col-md-10
        p La inteligencia artificial (IA) ha jugado un papel destacado en la transformación digital a la que se enfrentan las empresas que deciden ingresar al nuevo entorno global, pero ¿qué papel juegan la IA y los datos en todo esto?, ¿por qué se ha vuelto más accesible y necesario al mismo tiempo? la verdad es que la IA necesita datos, al igual que los datos necesitan IA (PowerData, 2022). Veamos por qué:

    .tarjeta.fcp15.p-4.mb-5
      SlyderA(tipo='b')
        .row
          .col-md-4.mb-4.mb-md-0
            p En el diario vivir, en un hogar promedio actual, el chico de la escuela haciendo sus tareas pregunta en voz alta, “¿Cuántos departamentos tiene Colombia?”, a lo que el padre, quien tradicionalmente debería saberlo, piensa responder que son 33 departamentos, pero mientras está en proceso de recordar, el dispositivo electrónico Alexa- contesta que son 32 departamentos, adicionalmente amplía esta información con algunos datos complementarios.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/f2.png', alt='imagen relacionada')
        .row
          .col-md-4.mb-4.mb-md-0
            p En este instante, la inteligencia artificial es tomada como fuente de información rápida y confiable; los padres y profesores, que han sido tradicionalmente las fuentes de conocimiento, van siendo desplazados en este sentido (para adquirir conocimientos) y empiezan otros retos y roles igual de importantes que deben asumir .
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/f3.png', alt='imagen relacionada')
        .row
          .col-md-4.mb-4.mb-md-0
            p Preguntas: ¿las empresas y la sociedad están preparadas para afrontar los retos actuales y futuros en relación con la tecnología?, ¿qué impactos nos esperan en el futuro?, ¿de qué manera se debe gestionar la incertidumbre cada vez más presente?
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/f4.png', alt='imagen relacionada')
        .row
          .col-md-4.mb-4.mb-md-0
            p La IA está fundamentada en una serie de algoritmos y métodos inspirados en procesos propios del cerebro, es decir, la programación se basa en entradas de datos, el software se programa para realizar procesos y asociar datos en tablas y organizar, sumar o dar reportes. Es un asunto más mecánico y de ejecución de pasos establecidos.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/f5.png', alt='imagen relacionada')
        .row
          .col-md-4.mb-4.mb-md-0
            p En cierta manera los cálculos y guardar datos también son unas características del cerebro, sin embargo, hay otras más donde la programación ha avanzado ostensiblemente en los últimos años. Si el algoritmo tiene poder de decisión, aprendizaje, predicción, usa lenguaje natural humano y automatiza tareas es un componente de IA.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/t1/f6.png', alt='imagen relacionada')

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1.
      br
      span: em Diferencia entre conceptos

    .row.justify-content-center.align-items-center.mb-5
      .col-md.col-sm-10.col-xs-12(data-aos="fade-right")
        .tarjeta.p-4(style="background-color: #FFE595")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t1/f7.svg', alt='Imagen relacionada')
          h3.text-center IA
          p.text-small.text-center Cualquier técnica que permita a las computadoras imitar inteligencia humana (lógica, declaraciones, decisiones, aprendizaje, entre otros)
      .col-md-auto.col-sm-3.col-xs-4(data-aos="zoom-in")
        img.sm90deg.my-3(src='@/assets/curso/temas/t1/f10.svg', alt='flechita', style="width:70px")
      .col-md.col-sm-10.col-xs-12(data-aos="fade-down")
        .tarjeta.p-4(style="background-color: #FFE595")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t1/f8.svg', alt='Imagen relacionada')
          h3.text-center ML
          p.text-small.text-center Parte de la IA que se orienta a encontrar patrones en los datos para construir modelos automáticamente
      .col-md-auto.col-sm-3.col-xs-4(data-aos="zoom-in")
        img.sm90deg.my-3(src='@/assets/curso/temas/t1/f10.svg', alt='flechita', style="width:70px")
      .col-md.col-sm-10.col-xs-12(data-aos="fade-left")
        .tarjeta.p-4(style="background-color: #FFE595")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/t1/f9.svg', alt='Imagen relacionada')
          h3.text-center Aprendizaje profundo
          p.text-small.text-center Parte del ML compuesto por Redes neuronales de múltiples capas profundas. Ej: reconocimiento de imágenes, voz, movimientos, etc.

    .row.justify-content-center.mb-5
      .col-md-4
        figure
          img(src='@/assets/curso/temas/t1/f11.svg', alt='imagen relacionada')
      .col-md-6
        p La inteligencia artificial (IA) es una rama de las ciencias informáticas, si bien, la tecnología en analítica de datos no se enfoca al desarrollo de redes neuronales o aprendizajes de máquina, es interesante saber de qué se trata, pues, aunque no se programen estos sistemas, es una realidad el uso frecuente y útil de herramientas sofisticadas a las cuales conectamos nuestros datos y nos pueden dar conocimientos importantes a partir de la IA.
        p En la siguiente infografía se observan los elementos principales que se involucran en el funcionamiento de la inteligencia artificial (IA) como el reconocimiento facial e imágenes, reconocimiento de la voz, interacción con el lenguaje humano, aprendizaje con la experiencia datos y solución de problemas.

    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 2.
        br
        span: em Infografía ¿Cómo funciona la IA?
      figure
        img(src='@/assets/curso/temas/t1/f12.svg', alt='¿cómo trabaja la IA?') 

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
