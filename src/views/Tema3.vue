<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Punto escalado y punto no escalado

    .row.justify-content-center
      .col-lg-10 
        p.mb-4 El programa construye los patrones por medio de puntos, para lo cual es preciso diferenciar entre los puntos escalados y no escalados.
        .row.justify-content-center.mb-5
          .col-lg-6.d-flex   
            .cardBox
              .card2
                .front
                  figure
                    img(src='@/assets/curso/tema3/img01.svg') 
                .back.p-4(style="background-color:#D6EBFB")
                  p Es el punto que como su nombre lo indica sirve para escalar, son los puntos principales de un patrón y se toman como referencia para la construcción de las piezas.
                  
          .col-lg-6.d-flex 
            .cardBox
              .card2
                .front
                  figure
                    img(src='@/assets/curso/tema3/img02.svg') 
                .back.p-4(style="background-color:#D6EBFB")
                  p Estos puntos son puntos de apoyo que no son tenidos como referencia y que generalmente sirven para la creación de curvas.

        p.mb-4 Al igual que con las piezas para abrir la ventana de propiedades de los puntos, con la herramienta de selección se hace doble clic sobre un punto y de inmediato se abrirá a la izquierda de la pantalla la ventana de propiedades.                 

        div.mb-2.BorTit
          p.mb-0 <b>Figura 36</b>
          p.mb-0  Ventana de propiedades del punto.
        figure.mb-5
          img(src='@/assets/curso/tema3/img03.png') 

        .cajon.color-secundario.p-4.mb-5
          .row.justify-content-center
            .col-lg-2
              img(src='@/assets/curso/tema3/img04.svg') 
            .col-lg-10 
              p.mb-0 Los puntos son elementos fundamentales en la creación de los patrones, pues, como se vio al crear la figura, esta se compone de puntos, por lo que es fundamental conocer y emplear la herramienta “Punto sobre contorno” –para adicionar o crear puntos– y se encuentra en la Caja de herramientas / Puntos y piquetes / Punto sobre el contorno; en la barra de botones o con el atajo de teclado “O”, tal como se ve en las figuras 21 y 22.

    div.imagen-fondo(:style="{'background-image': `url(${require('@/assets/curso/tema3/img11.svg')})`}")

      SlyderA.mb-5  
        .row.justify-content-center
          .col-10 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 37</b>
              p.mb-0 Herramienta Punto sobre contorno - paso 1.
            figure
              img(src='@/assets/curso/tema3/img05.png')  
        .row.justify-content-center
          .col-10 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 38</b>
              p.mb-0 Herramienta Punto sobre contorno - paso 2.
            figure
              img(src='@/assets/curso/tema3/img06.png')  

      .row.justify-content-center.mb-5
        .col-10 
          p.mb-0 Esta herramienta ayuda a construir los patrones, permitiendo agregar puntos en cualquiera parte de los segmentos o contornos; para activarla, se hace clic en el punto deseado sobre el contorno e inmediatamente se abre un cuadro de diálogo –llamado “Atributos de punto”– en el que se indica la distancia en la que se ubicará el punto (tener en cuenta que el <i>software</i> solamente se referencia con los demás puntos escalados), desde esta ventana se puede marcar si este punto será escalado o curvo según sea necesario. Si posteriormente se requieren cambiar estos atributos a un punto, con la herramienta selección se hace doble clic y se abrirá la caja de propiedades de punto en la que se podrán hacer los cambios necesarios.

      .row.justify-content-center.mb-5
        .col-8
          div.mb-2.BorTit
            p.mb-0 <b>Figura 39</b>
            p.mb-0 Atributos de Puntos en Optitex.
          figure
            img(src='@/assets/curso/tema3/img09.svg')  

      
    .row.justify-content-center.mb-5(style="position:relative;") 
      .col-1(style="background-color:#F2D6E3").px-0
        img(src='@/assets/curso/tema3/img10.svg')(style="position:relative;top:-25px") 
      .col-5.d-flex.align-items-center(style="background-color:#F2D6E3")
        p.mb-0 Nota: el <i>software</i> solamente toma como referencia los puntos escalados.

    .row.justify-content-center
      .col-10 
        p.mb-5 En el patrón se pueden distinguir los puntos escalados de los no escalados por su tamaño y fuerza de marcado, siendo los puntos escalados más grandes y fuertes, mientras que los no escalados son más pequeños y menos notorios (figura 40).
        .row.justify-content-center
          .col-5.px-4
            div.mb-2.BorTit
              p.mb-0 <b>Figura 40</b>
              p.mb-0 Puntos en Optitex.
            figure
              img(src='@/assets/curso/tema3/img07.svg')  
          .col-7            
            img(src='@/assets/curso/tema3/img08.png')  
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

<style lang="sass" scoped></style>
