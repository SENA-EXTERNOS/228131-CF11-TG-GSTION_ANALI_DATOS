<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p En el siguiente mapa conceptual se visibilizan los conceptos y su relación entre las diferentes temáticas desarrolladas en este proceso de aprendizaje.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Inteligencia artificial").mb-4
          figcaption
            p.mb-0 Nota: 
              em Adaptado de: Inteligencia artificial. 
              | s/f (2014-2015). 
              a(href="https://cmapscloud.ihmc.us:443/rid=1YF7CSVJ3-197CHJ7-LVPZ3V" target="_blank") https://cmapscloud.ihmc.us:443/rid=1YF7CSVJ3-197CHJ7-LVPZ3V
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
