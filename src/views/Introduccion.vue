<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/if1.svg', alt='mujer con un laptop y un robot')
      .col-md-9
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          p Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje orientado a la inteligencia artificial en los datos. Durante su desarrollo se abordarán los ejes temáticos de Inteligencia Artificial, Machine Learning y predictores. Al finalizar el componente formativo, el estudiante estará en la capacidad de comprender todo lo relacionado con el aprendizaje automático, modelos y metodologías de analítica. Asimismo, podrá preparar los datos de acuerdo conforme a metodologías de análisis de datos, construir predictores y medir indicadores. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje:
          p.mb-0: b ¡Le deseamos una experiencia de aprendizaje significativa y memorable!

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
