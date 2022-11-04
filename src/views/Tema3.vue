<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Predictores

    .row.justify-content-center.align-items-center.mb-5
      .col-md-2(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/t3/f1.svg', alt='imagen relacionada')
      .col-md-10
        p Adivinar el futuro ha sido uno de los factores más fascinantes que, a lo largo de toda la historia humana, las civilizaciones y líderes se han ocupado de ello hasta el punto de desarrollar ansiedades por tal incertidumbre.

    .tarjeta.fcp15.p-4.mb-5
      SlyderA(tipo='b')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Con frecuencia el futuro es un insumo para historias de cine que atrapan y fascinan a todo el público; aparecen objetos como oráculos, bolas de cristal y profecías alrededor de múltiples films e historias.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f2.svg', alt='imagen relacionada')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Si bien la predicción, culturalmente se considera como saber el futuro, no necesariamente es así, la predicción enfatiza la capacidad de ver información oculta, ya sea en el pasado, el presente o futuro; tal como se concibe la bola de cristal de algunas historias mágicas, dónde este objeto no solo permite ver el futuro, sino también ver qué sucede en el presente en otros lugares; esta utilidad ya dejó de ser fascinante porque se convirtió en algo normal después del avance de los medios de comunicación, pero igual se sigue llamando predicción.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f3.svg', alt='imagen relacionada')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Predicción es la capacidad para aportar la información que falta. La predicción toma la información que se tiene como referencia y la usa para generar información que no se tiene (Agrawal et al. 2019) 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f4.svg', alt='imagen relacionada')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p: b Predictores como funciones de herramientas
            p Un ejemplo de predictores usados por todos, ha sido la función autocompletar de Google en sus búsquedas y los teclados de celular, donde al escribir una palabra o parte el sistema procura autocompletar lo que se desea escribir ahorrando tiempo y disminuyendo errores de digitación de manera ostensible. Esto se hace a partir de unas métricas y del aprendizaje que la máquina detectó por las tendencias propias del usuario o tendencias de búsqueda masiva localizada o mundial.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f5.svg', alt='imagen relacionada')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p En las aplicaciones, también su predicción avanza según va aprendiendo; es el caso del traductor de Google, cuando esta herramienta era nueva, su traducción no tenía buena calidad, actualmente con el aporte de los mismos usuarios las traducciones tienen en cuenta incluso ciertos contextos que la máquina ha aprendido a diferenciar.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f6.svg', alt='imagen relacionada')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p La predicción no es un asunto nuevo, se podría resumir como el resultado de una acción, es decir, la IA es mucho más que esto, y se responsabiliza de elementos más complejos. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f7.svg', alt='imagen relacionada')
        .row.align-items-center
          .col-md-6.mb-4.mb-md-0
            p: b Análisis predictivo
            p El objetivo de este análisis es la estimación de eventos futuros a partir de datos históricos, o incluso descubrir fenómenos presentes que podrían desencadenar situaciones más adelante como, por ejemplo, la No satisfacción de clientes. Este es uno de los casos de usos más empleados en los servicios de machine learning actualmente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/t3/f8.svg', alt='imagen relacionada')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t3/f9.png', alt='')
      .col-lg-8
        p Construir algoritmos o funciones de programación básicos no suele ser difícil; por ejemplo, en una ferretería se podría implementar un campo calculado que sugiera pedidos para comprar a proveedores basado en la cantidad de productos vendidos los últimos tres meses, o los meses que se definan, según la dinámica del negocio, otro parámetro podría estar basado en las ventas del mismo mes del año anterior, etc. Si bien, este es un componente que podría funcionar, no se considera exacto; ahora, si estos datos se entregan a modelos ML de un proveedor de este servicio y se define el objetivo con claridad que son el número de unidades a comprar a los proveedores, a medida que pasa el tiempo las predicciones de ventas y las decisiones de compra para el stock de inventarios serán cada vez más exactas, pues la inteligencia artificial tendrá muchísimas más variables para definir la decisión de compra, además de las ventas, podría tener en cuenta el mes, según comportamiento del mismo mes de los años anteriores, el precio de divisas, impuestos, incluso si hay épocas de lluvia o no podrían incidir en las ventas, entre otras variables más.

    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 9.
        br 
        span: em Caso de uso predictivo de ventas
      figure
        img(src='@/assets/curso/temas/t3/f10.svg', alt='')

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3
        figure
          img(src='@/assets/curso/temas/t3/f11.svg', alt='')
      .col-md-9
        .cajon-b.color-primario.abajo-derecha.p-3.mb-5
          p Para la construcción de estos modelos, una vez desarrollado el algoritmo predictivo (y reglas de negocio que apliquen) y configurado con claridad las metas y objetivos en el entorno del proveedor de IA, es necesario disponer de un conjunto de datos históricos. Por lo general, se tienen dos conjuntos: uno de datos de entrenamiento y otro de prueba. 
          p.mb-0 Al modelo se le pasan como entrada los datos de entrenamiento para calibrar la predicción y, posteriormente, los datos de prueba. Después se compara el resultado de la predicción con los valores reales (históricos) para comprobar su exactitud.

</template>

<script>
export default {
  name: 'Tema3',
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
