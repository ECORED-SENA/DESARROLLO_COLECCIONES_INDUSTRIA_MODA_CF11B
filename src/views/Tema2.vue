<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Geometría básica: punto, línea, figura geométrica, crear pieza

    .row.justify-content-center
      .col-4.mb-5
        p.mb-0 Para comprender el patronaje sistematizado y su funcionamiento, se hace necesario comenzar por los conceptos básicos de geometría asociándolos al manejo del <i>software</i> Optittex.
      .col-6.mb-5
        //- div.mb-2.BorTit
        //-   p.mb-0 <b>Figura 23</b>
        //-   p.mb-0  Patrón geométrico.
        figure
           img(src='@/assets/curso/tema2/img01.svg')  

    .row.justify-content-center.mb-5
      .col-1(style="background-color:#F2D6E3")
      .col-8.py-3(style="background-color:#F2D6E3")
        p.mb-0 El programa Optitex, como se explicó, funciona por medio de vectores que conforman figuras geométricas a partir de:
      .col-1(style="background-color:#F2D6E3")

    .row.justify-content-center
      .col-8
        ul.lista-ul--separador
          li 
          li 
            .row.justify-content-center.align-items-center
              .col-1
                img(src='@/assets/curso/tema2/img02.svg')  
              .col-11
                h4 Punto
                p.mb-0 Marca o señal que se realiza en el plano, en este caso es el área de trabajo y los puntos son cada una de las marcas con las que se construye el patrón o la figura.
          li 
            .row.justify-content-center.align-items-center
              .col-1
                img(src='@/assets/curso/tema2/img03.svg')  
              .col-11
                h4 Línea
                p.mb-0 Es la sucesión de puntos o el recorrido que marca un punto sobre el plano, en el <i>software</i> las hay externas, que delimitan el contorno de las piezas o figuras, e internas, que se marcan al interior del patrón en caso de ser necesario, por ejemplo: un bolsillo, un corte, etc.
          li 
            .row.justify-content-center.align-items-center
              .col-1
                img(src='@/assets/curso/tema2/img04.svg')  
              .col-11
                h4 Figura geométrica
                p.mb-0 Se refiere a cada una de las formas delimitadas por el contorno, que a su vez está constituido por líneas y puntos.
          li
      
      //- .row.justify-content-center.mb-0(style="position:relative; top: -100px")
      //-     .col-1
      //-       figure
      //-         img(src='@/assets/curso/tema2/img05.svg')  
      //-     .col-9.d-flex.align-items-end
      //-       p.mb-0 Para crear una pieza en el <i>software</i> existen varias rutas, dependerá de la necesidad utilizar una u otra. La más común es partir de una figura, generalmente de un rectángulo y, sobre este, marcar los puntos y líneas necesarias. Puede hacerse desde el menú Pieza / Nueva Pieza / Crear rectángulo, polígono, círculo, arco o la que se requiera (figura 19).
            
    div(style="position:relative").mb-5          
          .row.justify-content-end
            .col-9.d-flex.align-items-end
              p.mb-0.py-4 <br>Para crear una pieza en el <i>software</i> existen varias rutas, dependerá de la necesidad utilizar una u otra. La más común es partir de una figura, generalmente de un rectángulo y, sobre este, marcar los puntos y líneas necesarias. Puede hacerse desde el menú Pieza / Nueva Pieza / Crear rectángulo, polígono, círculo, arco o la que se requiera (figura 24).
            .col-1
          div(style="width:100%; position:absolute; top:-50px")
            .row.justify-content-star
              .col-1
              .col-1                
                figure
                  img(src='@/assets/curso/tema2/img05.svg') 
    

    div.imagen-fondo(:style="{'background-image': `url(${require('@/assets/curso/tema2/img19.svg')})`}")
      .row.justify-content-center.mb-5      
        .col-10
          div.mb-2.BorTit
            p.mb-0 <b>Figura 24</b>
            p.mb-0 Interfaz gráfica Optitex.
          figure
            img(src='@/assets/curso/tema2/img06.png')  

      
      .row.justify-content-center.mb-5      
        .col-10
          p.mb-4 Otra forma de hacer una pieza por figura es hacer clic derecho (con la herramienta selección “Z” activada) sobre un espacio libre en el área de trabajo, se desplegará un menú emergente en el que se puede escoger entre las mismas opciones que brinda el menú como se indica en la siguiente figura.
          div.mb-2.BorTit
            p.mb-0 <b>Figura 25</b>
            p.mb-0 Crear pieza clic derecho.
          figure
            img(src='@/assets/curso/tema2/img07.png')  

      .row.justify-content-center.mb-5  
        .col-8 
          p.mb-4 Debido a que es la más común de las opciones, para el ejemplo se creará una pieza desde un rectángulo, así:
          p.mb-0 Una vez se elige crear rectángulo, se abre un cuadro de diálogo emergente en el que se le da un nombre a la pieza, este paso es muy importante, ya que facilitará al patronista distinguir cada una de las piezas entre todas; el largo de la pieza y el ancho cabe recordar que, en los <i>software</i>s de patronaje, se asume de manera horizontal el hilo de la tela, por lo cual la pieza se creará apaisada o acostada (figuras 26 y 27). 
        .col-2                
          img(src='@/assets/curso/tema2/img08.svg')  

      SlyderA.mb-5  
        .row.justify-content-center
          .col-10 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 26</b>
              p.mb-0 Crear pieza - Paso 1.
            figure
              img(src='@/assets/curso/tema2/img09.png')  
        .row.justify-content-center
          .col-10 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 27</b>
              p.mb-0 Crear pieza - Paso 2.
            figure
              img(src='@/assets/curso/tema2/img08.png')  

    .row.justify-content-center.mb-5  
      .col-4                
        img(src='@/assets/curso/tema2/img10.svg')  
      .col-6 
        p.mb-4 De esta manera, se crean las figuras y, como se observa, aparece la pieza en la ventana de piezas, así se crearán las diferentes partes que componen un molde. 
        p.mb-0 Otra manera de crear una pieza es dibujando o digitalizando el contorno, para lo cual se emplea la herramienta Dibujo, representada en la barra de herramientas por una pluma o desde el atajo de teclado “D”. Una vez activada la herramienta se va haciendo clic en cada uno de los puntos y en el menú emergente se ingresan las coordenadas del punto siguiente, hasta cerrar la pieza (figuras 28 a 35).

    .row.justify-content-center.mb-5
      .col-2.p-0
        img(src='@/assets/curso/tema1/img27.svg') 
      .col-8.d-flex.align-items-center(style="background-color:#D6EBFB;border-top-right-radius: 100px; border-bottom-right-radius: 100px")
        p.mb-0 Nota: es fundamental cerrar la pieza para poder crearla, de lo contrario el programa no asumirá la digitalización.
      
    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 28</b>
            p.mb-0 Crear pieza por dibujo - paso 1.
          figure
            img(src='@/assets/curso/tema2/img10.png')  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 29</b>
            p.mb-0 Crear pieza por dibujo - paso 2.
          figure
            img(src='@/assets/curso/tema2/img11.png')  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 30</b>
            p.mb-0 Crear pieza por dibujo - paso 3.
          figure
            img(src='@/assets/curso/tema2/img12.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 31</b>
            p.mb-0 Crear pieza por dibujo - paso 4.
          figure
            img(src='@/assets/curso/tema2/img13.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 32</b>
            p.mb-0 Crear pieza por dibujo - paso 5.
          figure
            img(src='@/assets/curso/tema2/img14.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 33</b>
            p.mb-0 Crear pieza por dibujo - paso 6.
          figure
            img(src='@/assets/curso/tema2/img15.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 34</b>
            p.mb-0 Crear pieza por dibujo - paso 7.
          figure
            img(src='@/assets/curso/tema2/img16.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 35</b>
            p.mb-0 Crear pieza por dibujo - paso 8.
          figure
            img(src='@/assets/curso/tema2/img17.png') 

    //- .row.justify-content-center
    //-   .col-8.pt-5(:style="{'background-image': `url(${require('@/assets/curso/tema2/img18.svg')})`}")
    //-     br
    //-     br
    //-     p Para alejar o acercar la visualización de las piezas se emplea el scroll del mouse (botón en forma de pequeña rueda o perilla ubicado sobre el mouse), así: hacia arriba alejar, hacia abajo acercar y al hacer clic sobre el scroll o en la tecla inicio del teclado se encajan las piezas en el área de trabajo.

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

<style lang="sass" scoped></style>
