<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Plano cartesiano, sentido horario y movimiento de puntos

    div(style="position:relative")
          .row.justify-content-star.mb-4
            .col-9
              p.mb-0 <br><br>
          .row.justify-content-end.mb-5(style="background-color:#D6EBFB")
            .col-9
              p.mb-0.py-4 A continuación, se explicará la forma en que se presentan en pantalla las diferentes utilidades del <i>software</i> en lo referente a la interfaz del sistema y la interpretación de la información representada en el plano cartesiano y la forma en que se representan y transforman los patrones elaborados en el <i>software</i>.
          div(style="width:100%; position:absolute; top:-25px")
            .row.justify-content-start
              .col-3                
                img(src='@/assets/curso/tema4/img01.svg') 

    .row.justify-content-center.mb-5
      .col-7
        .row.justify-content-center.mb-4
          .col-1
            img(src='@/assets/curso/tema4/img03.svg') 
          .col-11.d-flex.align-items-center
            h2.mb-0(style="color:#8F2B58") Plano cartesiano
        p.mb-5 Optitex es un <i>software</i> vectorial, por lo tanto, sus elementos se ubican en un espacio conocido como plano cartesiano o coordenadas cartesianas, es decir, en dos dimensiones o ejes: el horizontal denominado “X” y el vertical denominado “Y”. El eje “X” tiene dirección de izquierda a derecha, es decir que incrementa en este sentido, o sea hacia la derecha es positivo y a la izquierda es negativo, mientras que “Y” va de abajo hacia arriba, por lo cual, arriba es positivo y abajo negativo. A la ubicación en el espacio con respecto a los ejes X y Y se le denomina coordenada e indica la posición del punto o el elemento. Esta información es fundamental para la construcción de las figuras y el movimiento de los puntos en los sistemas vectoriales. 
        .row.justify-content-center.mb-4
          .col-1
            img(src='@/assets/curso/tema4/img04.svg') 
          .col-11.d-flex.align-items-center
            h2.mb-0(style="color:#8F2B58") Sentido horario
        p.mb-4 Se podría decir que las representaciones que se pueden realizar sobre el plano cartesiano son infinitas con líneas rectas, curvas, figuras y una de estas, los ángulos, son fundamentales para la creación de patrones. Los ángulos generalmente tienen una recta como referencia que gira en torno al origen del sistema cartesiano. 
        p.mb-0 Según el giro que se presente en la recta se determina el signo que tiene el ángulo a trabajar, es decir que el sentido del giro permite identificar los ángulos positivos o negativos (Planocartesiano.net, s. f.).       
      .col-5.pt-5
        div.mb-2.BorTit
          p.mb-0 <b>Figura 41</b>
          p.mb-0 Plano cartesiano.
        figure
          img(src='@/assets/curso/tema4/img02.svg')  

    div.mb-5
      div.mb-2.BorTit
        p.mb-0 <b>Figura 42</b>
        p.mb-0 Ángulos positivo y negativo.
      
      .row.justify-content-center
        .col-6.d-flex.t4-div1.py-5
          div(style="width:100%")
            .row.justify-content-center.mb-5
              .col-4
                img(src='@/assets/curso/tema4/img05.svg')  
            .row.justify-content-center
              .col-10
                h1.text-center Ángulos positivos
            .row.justify-content-center
              .col-10
                p.mb-4 Son ángulos con giros en sentido antihorario, es decir que van en sentido contrario al giro de las manecillas del reloj. 
                p.mb-0 Además, es importante acotar que la magnitud de dicho ángulo se toma desde el eje de las coordenadas hasta el punto en la recta más cercano al seguir el giro en el sentido mencionado.


        .col-6.d-flex.t4-div2.py-5
          div(style="width:100%")
            .row.justify-content-center.mb-5
              .col-4
                img(src='@/assets/curso/tema4/img06.svg')  
            .row.justify-content-center
              .col-10
                h1.text-center Ángulos negativos
            .row.justify-content-center
              .col-10
                p.mb-4 Los ángulos negativos son aquellos cuyo giro se realiza con un sentido horario, tomando como referencia el eje de las coordenadas. 
                p.mb-0 Su magnitud será la existente entre el eje ya mencionado y el punto de la gráfica más cercano en el sentido de las agujas del reloj. 


      figcaption Nota: Tomado de Plano cartesiano (s. f).

    p.text-center Para realizar patrones en Optitex se aplica la ley de trabajo en sentido del reloj.

    .row.justify-content-center.mb-5
      .col-8
        div.mb-2.BorTit
          p.mb-0 <b>Figura 43</b>
          p.mb-0 Sentido horario.
        figure.mb-4
          img(src='@/assets/curso/tema4/img07.png')
        p.mb-4 Lo cual quiere decir que siempre se trabajará de izquierda a derecha y de arriba hacia abajo, para cualquier acción, ya sea para agregar un punto, seleccionar un segmento o realizar un movimiento.   
        div(style="background-color:#F2D6E3").p-4
          p.mb-0 A continuación, se observa el patrón de un delantero de blusa y el sentido en que se trabajará en el sistema.

    div.imagen-fondo(:style="{'background-image': `url(${require('@/assets/curso/tema4/img33.svg')})`}")

      .row.justify-content-center.mb-5
        .col-10
          div.mb-2.BorTit
            p.mb-0 <b>Figura 44</b>
            p.mb-0 Movimiento de puntos sentido horario Optitex.

          figure.mb-4
            img(src='@/assets/curso/tema4/img08.png')
          p.mb-0 Es así como al agregar un punto, teniendo en cuenta el sentido horario, el punto de referencia siguiente será el que continúe al avanzar en el sentido de las manecillas y el anterior será el que se deja atrás en el movimiento. 

      .row.justify-content-center.mb-5
        .col-10
          div.mb-2.BorTit
            p.mb-0 <b>Figura 45</b>
            p.mb-0 Puntos anterior y siguiente.

          figure.mb-4
            img(src='@/assets/curso/tema4/img09.png')
      
    .row.justify-content-start.mb-4
      .col-6
        .row.justify-content-start
          .col-1
            img(src='@/assets/curso/tema4/img10.svg') 
          .col-11.d-flex.align-items-center
            h2.mb-0(style="color:#8F2B58") Movimiento de puntos

    p.mb-5 Al igual que para la creación de figuras o puntos, al mover un punto es fundamental tener en cuenta su posición actual en el plano cartesiano y hacia la coordenada que se va a desplazar.
    
    div.mb-5
      .row.justify-content-center
        .col-4
          button.btn2(id="button1" style="width:100%" autofocus v-on:click="clickBoton(1)") 
            b Movimiento sencillo de punto
        .col-4
          button.btn2(style="width:100%" v-on:click="clickBoton(2)") 
            b Movimiento múltiple de puntos      

    div.mb-5(v-if="mostrardiv==1")
      .row.justify-content-center.mb-4
        .col-10
          p Para mover un solo punto se emplea la herramienta mover punto, ubicada en la caja de herramientas / Movimiento / Mover punto; en la barra de botones Mover punto, o por medio del atajo de teclado “M”. 
          
      SlyderA.mb-5  
        .row.justify-content-center
          .col-10 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 46</b>
              p.mb-0 Herramienta mover punto - paso 1.
            figure
              img(src='@/assets/curso/tema4/img11.png')  
        .row.justify-content-center
          .col-10 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 47</b>
              p.mb-0 Herramienta mover punto - paso 2.
            figure
              img(src='@/assets/curso/tema4/img12.png')  

      .row.justify-content-center.mb-5
        .col-3
          figure
            img(src='@/assets/curso/tema4/img13.svg')  
        .col-7
          p.mb-4 Una vez activa la herramienta, se hace clic sobre el punto a mover, se hace un desplazamiento previo con el mouse hacia el nuevo punto y al hacer clic se abre un cuadro de diálogo en el que se establece el movimiento por medio de las coordenadas X y Y. Es fundamental tener en cuenta el sentido de las coordenadas y su signo positivo o negativo.
          .cajon.color-secundario.px-4.py-3
            p.mb-0 Cuando es positivo no es necesario utilizar el signo, mientras que para los movimientos negativos es fundamental escribir el signo menos antes del valor. De igual manera, es importante cerciorarse que en el cuadro de diálogo esté seleccionada la opción desde el último punto, así el movimiento se realizará desde la posición original en la que se encuentra el punto a mover. 
      .row.justify-content-center
        .col-10 
          SlyderE(indicadores="derecha").mb-5  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 48</b>
                  p.mb-0 Movimiento de punto - paso 1.
                figure
                  img(src='@/assets/curso/tema4/img14.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 49</b>
                  p.mb-0 Movimiento de punto - paso 2.
                figure
                  img(src='@/assets/curso/tema4/img15.png')  
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 50</b>
                  p.mb-0 Movimiento de punto - paso 3.
                figure
                  img(src='@/assets/curso/tema4/img16.png') 
            .row.justify-content-center
              .col-12
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 51</b>
                  p.mb-0 Movimiento de punto - paso 4.
                figure
                  img(src='@/assets/curso/tema4/img17.png') 
      .row.justify-content-center.mb-5
        .col-8.px-4.py-3(style="background-color:#D6EBFB")
          p.mb-0 De esta manera, se pueden hacer todos los movimientos necesarios tales como entrar, salir, subir o bajar.
      

    div.mb-5(v-if="mostrardiv==2")
      .row.justify-content-center.mb-4
        .col-8
          p En algunas ocasiones se requiere mover varios puntos a la vez, como ejemplo: alargar una prenda, dar un aumento a un punto de sisa, entre otros, para lo cual se emplean las siguientes herramientas:
      .row.justify-content-center.mb-4
        .col-10
          AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta")            
            .row(titulo="Movimiento paralelo") 
              p.mb-5 Se usa para mover todos los puntos de un segmento de manera paralela, se encuentra en la Caja de Herramientas / Movimiento / Movimiento paralelo (o mover segmentos fijos en versiones superiores) o la combinación de <i>Ctrl</i> + <i>Shift</i> + M; se hace clic en el primer punto, clic en el último punto (recordar el sentido horario), luego clic en un punto del segmento que servirá como referencia del movimiento, clic hacia donde se va a mover el tramo y se abre un cuadro de diálogo en el que se especifica, al igual que con el movimiento de punto, las nuevas coordenadas del movimiento. 
              SlyderE(indicadores="derecha")                
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 52</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 1.
                    figure
                      img(src='@/assets/curso/tema4/img18.png')  
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 53</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 2.
                    figure
                      img(src='@/assets/curso/tema4/img19.png')  
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 54</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 3.
                    figure
                      img(src='@/assets/curso/tema4/img20.png')  
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 55</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 4.
                    figure
                      img(src='@/assets/curso/tema4/img21.png')  
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 56</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 5.
                    figure
                      img(src='@/assets/curso/tema4/img22.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 57</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 6.
                    figure
                      img(src='@/assets/curso/tema4/img23.png')  
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 58</b>
                      p.mb-0 Pasos herramienta movimiento paralelo - paso 7.
                    figure
                      img(src='@/assets/curso/tema4/img24.png')  
            .row(titulo="Movimiento proporcional")    
              p.mb-5 Es un movimiento múltiple que se realiza a partir del movimiento de un solo punto de referencia y en el cual los demás puntos (preseleccionados) se mueven de manera proporcional. Se encuentra en la Caja de Herramientas / Movimiento / Movimiento proporcionalmente o el atajo de teclado <i>Ctrl</i> + M. Se procede de igual manera que en la anterior, se hace clic en el primer punto a mover, clic en el último punto (sentido horario), clic en el punto de referencia del movimiento y luego clic en el lugar al que se va a mover, se abre el cuadro de diálogo en el que se dan las coordenadas de movimiento (figuras 59 a 65).
              SlyderE(indicadores="derecha")                
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 59</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 1.
                    figure
                      img(src='@/assets/curso/tema4/img25.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 60</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 2.
                    figure
                      img(src='@/assets/curso/tema4/img26.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 61</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 3.
                    figure
                      img(src='@/assets/curso/tema4/img27.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 62</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 4.
                    figure
                      img(src='@/assets/curso/tema4/img28.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 63</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 5.
                    figure
                      img(src='@/assets/curso/tema4/img29.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 64</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 6.
                    figure
                      img(src='@/assets/curso/tema4/img30.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 65</b>
                      p.mb-0 Pasos herramienta movimiento proporcional - paso 7.
                    figure
                      img(src='@/assets/curso/tema4/img31.png') 
  
      .row.justify-content-center
        .col-9
          .tarjeta-avatar
            img(src='@/assets/curso/tema4/img32.svg' alt='AvatarTop')
            //- .tarjeta debe ir acompañado de una de una de estas clases => 
            //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
            //- estas clases tambien tienen un modificador --borde
            .tarjeta.color-acento-contenido(style="background-color:#D6EBFB").px-4
              br
              p.text-center El <i>software</i> cuenta con más opciones de movimiento, en este componente se presentan las más empleadas y se recomienda a los aprendices practicarlas y explorar las otras opciones.
</template>

<script>
export default {
  name: 'Tema4',
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
      } else {
        this.mostrardiv = 2
      }
    },
  },
}
</script>

<style lang="sass" scoped></style>
