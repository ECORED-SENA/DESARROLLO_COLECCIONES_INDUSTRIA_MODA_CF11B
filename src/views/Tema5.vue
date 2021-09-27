<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Trazo de curvas

    .row.justify-content-center.mb-5
      .col-10 
        figure.mb-5
          img(src='@/assets/curso/tema5/img01.png') 
        p.mb-0 Una curva es la sucesión de puntos o el recorrido que traza un punto al desplazarse alejándose de su dirección (recta) sin formar ángulos. En los patrones son fundamentales para trazar segmentos como el escote, la sisa, la cintura, la cadera, tiros, entre otros. Para trazar una curva se pueden emplear variadas herramientas, tales como dibujar, mover punto, arco y onda, entre otras.

    .row.justify-content-center.mb-5
      .col-2
        button.btn3(id="button2" style="width:100%" autofocus v-on:click="clickBoton(1)") 
          b Dibujar
      .col-2
        button.btn3(style="width:100%" v-on:click="clickBoton(2)") 
          b Punto curvo
      .col-2
        button.btn3(style="width:100%" v-on:click="clickBoton(3)") 
          b Mover punto
      .col-2
        button.btn3(style="width:100%" v-on:click="clickBoton(4)") 
          b Arco
      .col-2
        button.btn3(style="width:100%" v-on:click="clickBoton(5)") 
          b Onda

    div.mb-5(v-if="mostrardiv==1")
      .row.justify-content-center.mb-5
        .col-10
          .cajon.color-secundario.ps-3.pe-5.py-3.mb-5
            .row.justify-content-center
              .col-4
                img(src='@/assets/curso/tema5/img02.svg') 
              .col-8              
                p.mb-0 La herramienta dibujar, como se vio anteriormente, se emplea para dibujar líneas en sobre el patrón. Al igual que las demás funciones estas líneas deberán estar enganchadas a un punto sobre el contorno. Para trazar líneas curvas con la herramienta dibujar, se activa la herramienta (tecla “O” o con en la ubicación presentada con antelación) se hace clic sobre el punto del contorno (existente o no), se ingresa la información en el cuadro de diálogo de atributos del punto, y se comienza a dibujar el interno o la línea que se requiera. 

          p.mb-5 Cuando se necesite un punto curvo se debe mantener presionada la tecla Shift (mayúscula) antes de hacer clic, lo que le indicará al sistema que ese punto será curvo, como en las demás operaciones con puntos se abrirá un cuadro de diálogo en el que se deben especificar las coordenadas de este punto (si es necesario), así se adicionarán los puntos curvos requeridos hasta llegar al siguiente punto en el contorno, el cual será el punto final de la línea, una vez finalizado el trazo o dibujo se debe dar la orden al programa de finalizar, para lo cual se emplea la tecla fin o End (según el idioma en que se encuentre el teclado(figuras 50 a 54).

          SlyderE(indicadores="derecha")                
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 61</b>
                  p.mb-0 Trazado de curvas - paso 1.
                figure
                  img(src='@/assets/curso/tema5/img02.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 62</b>
                  p.mb-0 Trazado de curvas - paso 2.
                figure
                  img(src='@/assets/curso/tema5/img03.png')
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 63</b>
                  p.mb-0 Trazado de curvas - paso 3.
                figure
                  img(src='@/assets/curso/tema5/img04.png')   
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 64</b>
                  p.mb-0 Trazado de curvas - paso 4.
                figure
                  img(src='@/assets/curso/tema5/img05.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 65</b>
                  p.mb-0 Trazado de curvas - paso 5.
                figure
                  img(src='@/assets/curso/tema5/img06.png')   

    div.mb-5(v-if="mostrardiv==2")
      .row.justify-content-center.mb-5
        .col-10          
          p.mb-5 Otra manera es convertir un punto que ya está creado como recto en uno curvo, para realizarlo se procede así: con la herramienta selección se hace doble clic sobre el punto a convertir y en la caja de propiedades del punto (que se despliega a la izquierda de la pantalla), se activa la opción “curvo”. De igual manera que cuando se activa o desactiva el escalado, la opción de punto curvo se puede activar o desactivar (figuras 55 y 56).

          SlyderE(indicadores="derecha")                
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 66</b>
                  p.mb-0 Punto curvo - paso 1.
                figure
                  img(src='@/assets/curso/tema5/img07.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 67</b>
                  p.mb-0 Punto curvo - paso 2.
                figure
                  img(src='@/assets/curso/tema5/img08.png')  

    div.mb-5(v-if="mostrardiv==3")
      .row.justify-content-center.mb-5
        .col-10          
          p.mb-5 Una forma alternativa de convertir una recta en curva es utilizando la herramienta mover punto (M), así: con la herramienta mover activada y la tecla mayúscula (Shift) presionada se hace clic sobre un tramo recto de la pieza o línea interna (donde no haya un punto), luego se mueve al lugar deseado y ese tramo se habrá convertido en curvo.

          SlyderE(indicadores="derecha")                
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 68</b>
                  p.mb-0 Mover punto curvo - paso 1.
                figure
                  img(src='@/assets/curso/tema5/img09.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 69</b>
                  p.mb-0 Mover punto curvo - paso 2.
                figure
                  img(src='@/assets/curso/tema5/img10.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 70</b>
                  p.mb-0 Mover punto curvo - paso 3.
                figure
                  img(src='@/assets/curso/tema5/img11.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 71</b>
                  p.mb-0 Mover punto curvo - paso 4.
                figure
                  img(src='@/assets/curso/tema5/img12.png') 
      .row.justify-content-center.mb-5
        .col-8    
          .cajon.color-secundario.ps-3.pe-5.py-3.mb-5
            p.mb-0.text-center De estas formas, y dependiendo del requerimiento, el patronista que trabaja en el programa Optitex puede crear curvas en líneas existentes.
    div.mb-5(v-if="mostrardiv==4")
      .row.justify-content-center.mb-5
        .col-10          
          p.mb-5 Para la elaboración de curvas sobre un contorno, por ejemplo un escote o una sisa, se puede emplear la herramienta Arco, la cual se encuentra en la Caja de herramientas / Contorno / Arco o por medio de la tecla “A”. Haciendo clic en el primer punto sobre el contorno, clic en el último punto del contorno (recordar el sentido horario), mover hacia donde se requiere la curvatura, en caso de necesitar que la curva sea asimétrica – presionar y mantener presionada la tecla Shift, mientras se hace el movimiento–, hacer clic en el punto final del movimiento, se abre el cuadro de diálogo en el que se pueden modificar las propiedades (en caso de ser necesario).

          SlyderE(indicadores="derecha")                
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 72</b>
                  p.mb-0 Herramienta Arco - paso 1.
                figure
                  img(src='@/assets/curso/tema5/img13.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 73</b>
                  p.mb-0 Herramienta Arco - paso 2.
                figure
                  img(src='@/assets/curso/tema5/img14.png')
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 74</b>
                  p.mb-0 Herramienta Arco - paso 3.
                figure
                  img(src='@/assets/curso/tema5/img15.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 75</b>
                  p.mb-0 Herramienta Arco - paso 4.
                figure
                  img(src='@/assets/curso/tema5/img16.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 76</b>
                  p.mb-0 Herramienta Arco - paso 5.
                figure
                  img(src='@/assets/curso/tema5/img17.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 77</b>
                  p.mb-0 Herramienta Arco - paso 6.
                figure
                  img(src='@/assets/curso/tema5/img18.png')  
      .row.justify-content-center.mb-5
        .col-8    
          .cajon.color-acento-contenido.ps-3.pe-5.py-3.mb-5
            p.mb-0.text-center Es necesario recordar que, al igual que las demás herramientas, el provecho que se obtenga de estas, dependerá del patronista, el uso que les dé y su creatividad.

    div.mb-5(v-if="mostrardiv==5")
      .row.justify-content-center.mb-5
        .col-10          
          p.mb-5 Al igual que la herramienta Arco, la de Onda se emplea para hacer curvaturas sobre un contorno y resulta útil para el desarrollo de curvatura de los ruedos, la copa de la manga, entre otros. La herramienta se encuentra en la Caja de herramientas / Contorno / Onda (no tiene atajo de teclado). Se emplea de la misma manera que la herramienta arco (figuras 67 a 72).

          SlyderE(indicadores="derecha")                
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 78</b>
                  p.mb-0 Herramienta Onda - paso 1.
                figure
                  img(src='@/assets/curso/tema5/img19.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 79</b>
                  p.mb-0 Herramienta Onda - paso 2.
                figure
                  img(src='@/assets/curso/tema5/img20.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 80</b>
                  p.mb-0 Herramienta Onda - paso 3.
                figure
                  img(src='@/assets/curso/tema5/img21.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 81</b>
                  p.mb-0 Herramienta Onda - paso 4.
                figure
                  img(src='@/assets/curso/tema5/img22.png')
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 82</b>
                  p.mb-0 Herramienta Onda - paso 5.
                figure
                  img(src='@/assets/curso/tema5/img23.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 83</b>
                  p.mb-0 Herramienta Onda - paso 6.
                figure
                  img(src='@/assets/curso/tema5/img24.png') 
      .row.justify-content-center.mb-5
        .col-8    
          .cajon.color-secundario.ps-3.pe-5.py-3.mb-5
            p.mb-0.text-center El patronista utiliza las diferentes herramientas para lograr los resultados esperados; es recomendable practicar y explorarlas para perfeccionar su uso.
    .row.justify-content-center
      .col-8
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/img07.svg' alt='AvatarTop')        
          .tarjeta.color-custom1
            div.p-4       
              p.text-center.mb-0 El software cuenta con más opciones de movimiento, en este componente se presentan las más empleadas y se recomienda a los aprendices practicarlas y explorar las otras opciones.    
</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrardiv: 1,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    clickBoton: function(capa) {
      if (capa == 1) {
        this.mostrardiv = 1
      } else if (capa == 2) {
        this.mostrardiv = 2
      } else if (capa == 3) {
        this.mostrardiv = 3
      } else if (capa == 4) {
        this.mostrardiv = 4
      } else if (capa == 5) {
        this.mostrardiv = 5
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
