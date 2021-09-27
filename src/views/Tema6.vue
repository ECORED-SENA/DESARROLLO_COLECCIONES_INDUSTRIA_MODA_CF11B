<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Construcción de piezas

    .row.justify-content-center.mb-5
      .col-10 
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema6/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Una vez marcados los contornos sobre la pieza inicial se requiere tener el molde o patrón de la pieza sin las líneas de construcción ni el recuadro externo, para lo cual se pueden emplear varias herramientas.

    .row.justify-content-start.mb-4
      .col-6
        .row.justify-content-start
          .col-1
            img(src='@/assets/curso/tema6/img02.svg') 
          .col-11.d-flex.align-items-center
            h2.mb-0(style="color:#8F2B58") Herramienta construir piezas

    p.mb-5 Esta herramienta se utiliza para construir piezas a partir de los elementos trazados, se encuentra en la Caja de herramientas / Construir y cortar / Construir piezas, en la barra de herramientas superior o con la tecla “B”. Esta es una herramienta muy utilizada, ya que agiliza la labor del patronista. Para usarla se selecciona la herramienta, se hace clic en el área a convertir (se le puede adicionar partes adyacentes para complementar), la pieza se torna de un color diferente (dependiendo de la configuración del sistema) y para finalizar se vuelve a hacer clic sobre ella, la cual se construirá como una nueva pieza independiente y se visualizará en la ventana de piezas.    
    SlyderA.mb-5  
          .row.justify-content-center
            .col-10 
              div.mb-2.BorTit
                p.mb-0 <b>Figura 84</b>
                p.mb-0 Herramienta construir pieza - paso 1.
              figure
                img(src='@/assets/curso/tema6/img04.png') 
          .row.justify-content-center
            .col-10 
              div.mb-2.BorTit
                p.mb-0 <b>Figura 85</b>
                p.mb-0 Herramienta construir pieza - paso 2.
              figure
                img(src='@/assets/curso/tema6/img05.png') 
          .row.justify-content-center
            .col-10 
              div.mb-2.BorTit
                p.mb-0 <b>Figura 86</b>
                p.mb-0 Herramienta construir pieza - paso 3.
              figure
                img(src='@/assets/curso/tema6/img06.png') 
    .row.justify-content-center.mb-5 
      .col-10 
        .cajon.color-secundario.ps-3.pe-5.py-3
          p.mb-0.text-center La pieza que sirvió como construcción (el rectángulo) se puede borrar en el momento en que ya no se requiera más, para realizarlo se selecciona con la herramienta selección y con la combinación de teclas mayúsculas más suprimir (Shift + Sup) se elimina del todo, es importante tener en cuenta que esta acción es determinante y solamente se puede retroceder una vez, es decir con Ctrl + Z.


    .row.justify-content-start.mb-4
      .col-6
        .row.justify-content-start
          .col-1
            img(src='@/assets/curso/tema6/img04.svg') 
          .col-11.d-flex.align-items-center
            h2.mb-0(style="color:#8F2B58") Delinear segmentos

    div(style="position:relative").mb-5
          div(style="width:100%; position:absolute; top:0px")
            .row.justify-content-end
              .col-4
                figure
                  img(src='@/assets/curso/tema6/img05.svg') 
              .col-1
          .row.justify-content-star.mb-4(style="z-index:10000")
            .col-9(style="z-index:10000")
              p.mb-4 La herramienta delinear segmentos funciona de manera similar a construir piezas, diferenciándose por construirse directamente por las líneas o segmentos y no por el área. Al igual que con las demás herramientas, se recomienda explorar las diferentes opciones ya que para unos trabajos serán más apropiadas unas que otras.
              p.mb-0 La herramienta se encuentra en: Caja de herramientas / Construir y cortar / Delinear segmentos o por medio del atajo de teclado Ctrl + B. Una vez seleccionada la herramienta, se selecciona cada uno de los segmentos que harán parte del contorno de la pieza, es fundamental tener en cuenta el sentido horario y que cada segmento estén uno junto al otro, al terminar de seleccionar todo el contorno de la pieza aparecerá un cuadro de diálogo en el que se informa que la digitalización de la pieza ha sido finalizada, se presiona “aceptar” y queda construida la pieza.           
          
    .row.justify-content-center
      .col-10                 
        SlyderE(indicadores="derecha").mb-5               
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 87</b>
                p.mb-0 Herramienta delinear segmentos - paso 1.
              figure
                img(src='@/assets/curso/tema6/img07.png') 
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 88</b>
                p.mb-0 Herramienta delinear segmentos - paso 2.
              figure
                img(src='@/assets/curso/tema6/img08.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 89</b>
                p.mb-0 Herramienta delinear segmentos - paso 3.
              figure
                img(src='@/assets/curso/tema6/img09.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 90</b>
                p.mb-0 Herramienta delinear segmentos - paso 4.
              figure
                img(src='@/assets/curso/tema6/img10.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 91</b>
                p.mb-0 Herramienta delinear segmentos - paso 5.
              figure
                img(src='@/assets/curso/tema6/img11.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 92</b>
                p.mb-0 Herramienta delinear segmentos - paso 6.
              figure
                img(src='@/assets/curso/tema6/img12.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 93</b>
                p.mb-0 Herramienta delinear segmentos - paso 7.
              figure
                img(src='@/assets/curso/tema6/img13.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 94</b>
                p.mb-0 Herramienta delinear segmentos - paso 8.
              figure
                img(src='@/assets/curso/tema6/img14.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 95</b>
                p.mb-0 Herramienta delinear segmentos - paso 9.
              figure
                img(src='@/assets/curso/tema6/img15.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 96</b>
                p.mb-0 Herramienta delinear segmentos - paso 10.
              figure
                img(src='@/assets/curso/tema6/img16.png')
        
        .cajon.color-acento-contenido.ps-3.pe-5.py-3
              p.mb-0.text-center Estas herramientas son esenciales para la construcción de patrones básicos y desarrollos, por lo cual se recomienda su práctica.

</template>

<script>
export default {
  name: 'Tema6',
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

<style lang="sass" scoped></style>
