<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Hardware y software

    p.mb-5 Todos los dispositivos tecnológicos que se encuentran en el mercado como computadores, smartphones, tablets, entre otros, están compuestos por hardware y software.

    .row.justify-content-center
      .col-lg-10        
        div.mb-2.BorTit
          p.mb-0 <b>Figura 4</b>
          p.mb-0 Hardware.  
        figure.mb-5
          img(src='@/assets/curso/tema1/img01.png') 
         
        .row.justify-content-center.mb-5
          .col-lg-6.d-flex   
            .cardBox
              .card
                .front
                  figure
                    img(src='@/assets/curso/tema1/img02.svg') 
                .back.p-4(style="background-color:#D6EBFB")
                  p Se conoce como hardware a el conjunto de componentes físicos de los que está hecho el equipo; son las partes que puedes ver y tocar de los dispositivos. Para el caso de Optitex, aparte de los dispositivos comunes del computador, este está acompañado por otros como Tablero digitalizador, plotter de trazo, mesa de extendido y mesa de corte.
                  
          .col-lg-6.d-flex 
            .cardBox
              .card
                .front
                  figure
                    img(src='@/assets/curso/tema1/img03.svg') 
                .back.p-4(style="background-color:#D6EBFB")
                  p El software es el conjunto de programas o aplicaciones, instrucciones y reglas informáticas que hacen posible el funcionamiento de los equipos en este caso el Software Optitex requiere de un dispositivo USB (hardware) al que se le conoce como “llave”, la cual hace posible la ejecución de las tareas específicas del programa, al igual que el funcionamiento los dispositivos del hardware.
                         
        div(style="position:relative")
          .row.justify-content-star.mb-4
            .col-9
              p.mb-0 El software y el hardware trabajan de la mano, mientras que el software aporta las operaciones, el hardware es el canal físico por el cual dichas funciones pueden realizarse, ambos son la base del desarrollo tecnológico.
          .row.justify-content-star.mb-5(style="background-color:#D6EBFB")
            .col-9
              p.mb-0.ps-5.py-4 Para el correcto uso del software Optitex se debe tener conocimiento en el manejo del sistema operativo Windows, debido a que es el sistema operativo en el cual funciona el programa.
          div(style="width:100%; position:absolute; top:-25px")
            .row.justify-content-end
              .col-3
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 5</b>
                  p.mb-0 Software.  
                figure
                  img(src='@/assets/curso/tema1/img04.png') 
    
    Separador
    #t_1_1.titulo-segundo
      h2 1.1  Reconocimiento del sistema

    p.mb-5 El programa fue creado específicamente como una solución al desarrollo automatizado de patrones y, aunque se le conoce en todo lo concerniente al vestuario, también comprende lo relacionado a los interiores del transporte, tapicería, marroquinería y la industria textil. A continuación, se presentan los módulos que componen Optitex             
    SlyderB(:datos="datosSlyder")

    Separador
    #t_1_2.titulo-segundo
      h2 1.2  Interfaz gráfica y herramientas

    p.mb-5 El primer paso para conocer las funciones de Optitex es familiarizarse con su interfaz gráfica mediante la identificación de las herramientas en el programa. Al igual que todos los softwares que funcionan bajo Windows, el programa distribuye su espacio de trabajo en ventanas; a la ubicación de estas ventanas, los menús y las herramientas que ofrece se le llaman interfaz. Al hacer el reconocimiento de la ubicación de estos elementos se tendrá la oportunidad no solo de hacer uso de ellas, sino realizar los patrones de forma rápida, optimizando así tiempo y recursos.

    .row.justify-content-center.mb-4
      .col-8
        div.mb-2.BorTit
          p.mb-0 <b>Figura 6</b>
          p.mb-0 Interfaz gráfica Optitex.
        figure.mb-5
           img(src='@/assets/curso/tema1/img10.png')
        
        p.mb-5.px-5.py-3(style="background-color:#F2D6E3") A continuación, se presentan las características y los usos principales de la interfaz gráfica, veamos:

    InfografiaPopup.mb-5(v-on:clicked="activateModal")
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img11.svg')
          
      .tarjeta.color-secundario.p-3.border(x="17.0%" y="34%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion
      .tarjeta.color-secundario.p-3.border(x="25.3%" y="65%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion

      .tarjeta.color-secundario.p-3.border(x="33.5%" y="34%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion
      .tarjeta.color-secundario.p-3.border(x="41.8%" y="65%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion

      .tarjeta.color-secundario.p-3.border(x="50%" y="34%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion
      .tarjeta.color-secundario.p-3.border(x="58.3%" y="65%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion

      .tarjeta.color-secundario.p-3.border(x="66.5%" y="34%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion
      .tarjeta.color-secundario.p-3.border(x="74.8%" y="65%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion

      .tarjeta.color-secundario.p-3.border(x="83%" y="34%", color="color-secundario")
        p.mb-0.text-white Haga click para mas informacion

    ModalA(:abrir-modal.sync="modalShow")
      .row(v-if="modalActive === 0")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 01
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Área de trabajo
            p.mb-5 Al ingresar al software, el espacio más grande, semejante a un rectángulo en el centro de la pantalla, es el área de trabajo. Cuando se selecciona un diseño, las piezas aparecerán dentro de esta área. Allí se podrá iniciar desde cero un patrón, dibujar o realizar los cambios necesarios en la construcción de estos.
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 7</b>
                  p.mb-0 Área de trabajo Optitex®.
                figure
                  img(src='@/assets/curso/tema1/img12.png')      
      .row(v-if="modalActive === 1")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 02
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Barra de Menú
            p.mb-5 Es la primera barra que se encuentra al inicio superior de la pantalla, desde la cual se despliegan las herramientas contenidas en menús desplegables, de ahí su nombre. Cada menú contiene diferentes herramientas agrupadas que sirven para dibujar, editar, cambiar, modificar, guardar, plotear, cortar los patrones, entre otras funciones.
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 8</b>
                  p.mb-0 Barra de Menú Optitex®.
                figure.mb-3
                  img(src='@/assets/curso/tema1/img13.png')      
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 9</b>
                  p.mb-0 Menús desplegables.
                figure.mb-3
                  img(src='@/assets/curso/tema1/img14.png')      
      .row(v-if="modalActive === 2")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 03
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Barras de Herramientas o de botones
            p.mb-5 Debajo de la barra de Menú se encuentran las barras de herramientas para la elaboración de los patrones; están diseñadas cómodamente como icono gráfico o botón, agrupadas según su tipología o uso, cada uno representa una herramienta o acción, permitiendo un acceso rápido a ellas. 
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 10</b>
                  p.mb-0  Barra de Herramientas.
                figure.mb-3
                  img(src='@/assets/curso/tema1/img15.png')      
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 11</b>
                  p.mb-0 Barras de botones.
                figure.mb-3
                  img(src='@/assets/curso/tema1/img16.png')      
      .row(v-if="modalActive === 3")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 04
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Ventana de piezas
            p.mb-5 Ubicada debajo de las barras de herramientas, en ella se visualiza (marcada con su nombre) cada una de las piezas que conforman el patrón o modelo. En caso de no encontrar una pieza en el área de trabajo se puede seleccionar desde la ventana piezas y esta aparecerá para trabajarla; para guardarla de nuevo en la ventana de piezas (y dejar de visualizarla en el área de trabajo) se utiliza la tecla Supr o Del. Para seleccionar todas las piezas de un modelo se emplea el atajo de teclado Ctrl + A, de esta forma, quedarán todas seleccionadas y puestas en el área de trabajo. 
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 12</b>
                  p.mb-0  Ventana de piezas.
                figure.mb-3
                  img(src='@/assets/curso/tema1/img17.png')                     
                figure.mb-3
                  img(src='@/assets/curso/tema1/img18.png')        
      .row(v-if="modalActive === 4")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 05
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Caja de herramientas
            p.mb-5 Tal cual como la caja de herramientas física en la que el patronista guarda sus herramientas e instrumentos, este espacio agrupa por cajones las diferentes herramientas que se emplean durante el proceso. 
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 13</b>
                  p.mb-0 Caja de herramientas.
                figure
                  img(src='@/assets/curso/tema1/img19.png')   
      .row(v-if="modalActive === 5")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 06
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Ventanas de propiedades o información
            p.mb-5 Al lado izquierdo del área de trabajo al dar doble clic en las piezas se activa la ventana de propiedades de piezas donde se consigna todo lo referente a la información de la pieza. Algunas otras ventanas se muestran al momento de activar una herramienta solicitando información.
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 14</b>
                  p.mb-0 Ventanas de propiedades o información
                figure
                  img(src='@/assets/curso/tema1/img26.png')        
      .row(v-if="modalActive === 6")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 07
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Fichas o fichero
            p.mb-5 Estas aparecen a los lados del área de trabajo y representan algunas ventanas que se han desacoplado (contraído), ya sea porque se arrastren con el mouse sostenido o porque están sueltas en la interfaz y al cerrarlas se acoplan a los lados de esta. Se dividen en dos categorías:
            .row.justify-content-center
              .col-9
                ul.lista-ul--color
                  li 
                    i.fas.fa-circle.fa-xs
                    | Ventanas 3D se relacionan con las herramientas para trabajar modelos 3D.
                  li 
                    i.fas.fa-circle.fa-xs
                    | Diseño de asistencia de Windows las cuales contiene propiedades, mediciones valores y otros de los patrones. 

                div.mb-2.BorTit
                  p.mb-0 <b>Figura 15</b>
                  p.mb-0 Fichas o ficheros.
                figure
                  img(src='@/assets/curso/tema1/img20.png')      
      .row(v-if="modalActive === 7")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 08
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Barra de estado
            p.mb-5 Ubicada en la parte inferior izquierda de la pantalla, en esta barra se visualiza la herramienta que se está utilizando y se constituye en una ayuda fundamental para el uso de cada una de ellas, pues va direccionando cada uno de los pasos para proceder con la herramienta, es decir, va indicando qué hacer paso a paso.
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 16</b>
                  p.mb-0 Barra de estado.
                figure.mb-5
                  img(src='@/assets/curso/tema1/img21.png')     
                .row.justify-content-center.mb-5
                  .col-2.d-flex.align-items-center.justify-content-center.t1-border1.p-4
                    figure.m-2
                      img(src='@/assets/curso/tema1/img23.svg') 
                  .col-10.px-4.py-3.d-flex.align-items-center.justify-content-center.t1-border2
                    p.mb-0 NOTA. Desde el menú “Ver” se activan y desactivan cada una de las ventanas o herramientas, en el caso de no visualizar alguna las herramientas o ventanas explicadas, desde este menú se puede volver a activar.
                figure.mb-5
                  img(src='@/assets/curso/tema1/img22.png')      
      .row(v-if="modalActive === 8")
        .col-12.col-md-auto.mb-4.mb-md-0.p-3.colum-modal.color-primario
          p.mb-0 09
        .col-12.col-md.mb-4.mb-md-0
          .p-5
            h4 Atajos de teclado
            p.mb-5 El programa cuenta con atajos de teclado, los cuales llevan a las herramientas desde una combinación de teclas, lo cual agiliza y facilita el trabajo del patronista, por lo cual se recomienda su uso. Cada uno de estos atajos se encuentran luego de la descripción o nombre de la herramienta entre paréntesis, o posicionando el cursor sobre la herramienta (sin hacer clic) aparece durante unos segundos la descripción en un recuadro emergente.
            .row.justify-content-center
              .col-9
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 17</b>
                  p.mb-0 Atajo herramienta Costura.
                figure
                  img(src='@/assets/curso/tema1/img24.png')      
       
       

</template>

<script>
import InfografiaPopup from '../components/InfografiaPopup.vue'
export default {
  name: 'Tema1',
  components: {
    InfografiaPopup,
  },
  data: () => ({
    modalActive: 'none',
    modalShow: false,
    datosSlyder: [
      {
        titulo:
          'PDS (<i>Pattern Design System</i> - Sistema de diseño de patrones)',
        texto:
          'Este módulo del <i>software</i> permite crear patrones o modificar los existentes de forma rápida y exacta, realizando marcaciones especiales internas o externas y proporcionar toda la información de la pieza. Este permite a cada desarrollador de patrones personalizar su propio espacio de trabajo de acuerdo con sus necesidades ya que cuenta con barras de herramientas móviles y cajas de diálogo que pueden ubicarse a necesidad al igual que atajos de teclado personalizables.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: '<i>Marker</i> – Trazo',
        texto:
          'Este módulo del programa se constituye en un espacio que facilita la disposición (colocación) de las piezas o moldes simulando una mesa de corte. Su principal ventaja es minimizar el desperdicio de tela y así ahorrar en costos de material y tiempo de trabajo. Estos trazos en el sistema permiten hacerse de forma manual, semiautomática o automática. Al igual que en el anterior módulo PDS, las barras de herramientas, las cajas de diálogo y los atajos de teclado pueden disponerse según las necesidades personalizando el espacio de trabajo',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: '<i>Digitizer</i> – Digitalizador',
        texto:
          'Optitex <i>Digitizer</i> permite digitalizar o escanear moldes físicos, es decir, pasarlos al programa por medio de un <i>hardware</i> periférico de entrada (bien sea cámara o tablero digitalizador) que toma fielmente cada uno de los puntos y contornos del molde, los cuales (luego de terminar el proceso) podrán ser modificados y escalados posteriormente, igual que con un patrón creado desde cero directamente en el programa.<br>La digitalización puede hacerse usando una mesa digitalizadora que traslada los contornos de un molde al sistema por medio de un ratón (<i>mouse</i>) digitalizador o a través de la fotografía digital con una cámara especial para el proceso.',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
      {
        titulo: '<i>Grade</i> – Escalado',
        texto:
          'Optitex permite realizar escalados de patrones tanto para aumentar como para disminuir tallas. Este proceso se realiza mediante un proceso vectorial, es decir por medio de coordenadas en las dimensiones del plano cartesiano, las cuáles serán abordadas más adelante.',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
      {
        titulo: '3D <i>Runway</i>',
        texto:
          'Incluye maniquíes virtuales con más de 65 medidas diferentes que modelan la prenda exponiendo los patrones ya sobre el maniquí y mostrando cómo se verá en forma real, es decir, un prototipo digital de la prenda. Permite hacer correcciones de los patrones en 2D y ver los resultados inmediatamente en 3D antes y después de ellas. OPTITEX 3D simula los efectos y propiedades de los materiales tales como la caída, transparencia, brillo, drapeado de las telas dando un ejemplo de las arrugas o pliegues y cómo caen sobre el cuerpo.',
        imagen: require('@/assets/curso/tema1/img09.png'),
      },
    ],
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
    activateModal(modal) {
      this.modalActive = modal
      this.modalShow = true
    },
  },
}
</script>

<style lang="sass" scoped></style>
