<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 9
      h1 Señales internas y piquetes
    

    .row.justify-content-center.mb-5
      .col-10        
        .cajon.color-acento-contenido.ps-3.pe-5.py-3
          p.mb-0 Las diferentes piezas de un modelo requieren de información marcada al interior del molde, tales como los puntos para botones, la ubicación de bordados, bolsillos, notas o demás aclaraciones importantes que el patronista considere. Para realizarlas se emplean diferentes herramientas tales como:

    div.imagen-fondo(:style="{'background-image': `url(${require('@/assets/curso/tema9/img18.svg')})`}")
      TabSpecial.color-acento-botones
        .py-3.py-md-4(titulo="Botón" :imagen="images[0]" :numero="numbers[0]")
          .row.justify-content-center.mb-5
            .col-10 
              p Ubicada en la Caja de herramientas / Puntos y piquetes / Botón o por medio del atajo de teclado <i>Ctrl</i> + Alt + B. Se emplea para marcar los puntos en donde se ubicarán los botones, broches, ojales o algún elemento a poner, se hace clic en el punto e inmediatamente queda marcado el punto.
          SlyderA.mb-5  
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 142</b>
                  p.mb-0 Herramienta botón - paso 1.
                figure
                  img(src='@/assets/curso/tema9/img01.png')   
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 143</b>
                  p.mb-0 Herramienta botón - paso 2.
                figure
                  img(src='@/assets/curso/tema9/img02.png')  
          .row.justify-content-center
            .col-10 
              p.mb-5 Para cambiar las propiedades de marcación, con la herramienta de selección se hace doble clic sobre la marca del botón, abriendo un menú emergente en el que se puede cambiar el radio de la marca, el tipo de marca en el campo comando (dibujo, taladro, corte) según la necesidad.  

          SlyderA.mb-5  
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 144</b>
                  p.mb-0 Propiedades de botón - paso 1.
                figure
                  img(src='@/assets/curso/tema9/img03.png')   
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 145</b>
                  p.mb-0 Propiedades de botón - paso 2.
                figure
                  img(src='@/assets/curso/tema9/img04.png')  
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 146</b>
                  p.mb-0 Propiedades de botón - paso 3.
                figure
                  img(src='@/assets/curso/tema9/img05.png')   
          .row.justify-content-center.mb-5
            .col-10.py-4(style="background-color:#F2D6E3")
              .row.justify-content-center
                .col-7
                  p.mb-0 Cuando se requiere marcar varios puntos se utiliza la herramienta Distancia entre botones, la cual se encuentra en la Caja de herramientas / Puntos y piquetes / Distancia entre botones. Se hace clic en el primer punto, clic en el último punto, se abre la ventana emergente en la que se decide cuántos botones se marcarán y se pueden marcar las casillas de poner botón en punto de inicio y final (entre otras), e inmediatamente se marcan los puntos de botones. 
                .col-3.px-4
                  figure
                    img(src='@/assets/curso/tema9/img06.svg') 
          .row.justify-content-center.mb-5
            .col-10
              SlyderE(indicadores="derecha")            
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 147</b>
                      p.mb-0 Pasos herramienta distancia entre botones - paso 1.
                    figure
                      img(src='@/assets/curso/tema9/img06.png')   
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 148</b>
                      p.mb-0 Pasos herramienta distancia entre botones - paso 2.
                    figure
                      img(src='@/assets/curso/tema9/img07.png')   
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 149</b>
                      p.mb-0 Pasos herramienta distancia entre botones - paso 3.
                    figure
                      img(src='@/assets/curso/tema9/img08.png') 
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 150</b>
                      p.mb-0 Pasos herramienta distancia entre botones - paso 4.
                    figure
                      img(src='@/assets/curso/tema9/img09.png')  
                .row.justify-content-center
                  .col-12
                    div.mb-2.BorTit
                      p.mb-0 <b>Figura 151</b>
                      p.mb-0 Pasos herramienta distancia entre botones - paso 5.
                    figure
                      img(src='@/assets/curso/tema9/img10.png')   
          .row.justify-content-center.mb-5
            .col-8
              .tarjeta-avatar-b.mb-5
                .tarjeta-avatar-b__img
                  img(src='@/assets/curso/tema9/img11.svg' alt='AvatarTop')
                .tarjeta.color-acento-contenido.py-4.t9-div1               
                  p.mb-0.mt-3.px-4 Al igual que en la opción de botón sencillo, en esta herramienta se pueden modificar las propiedades de los botones haciendo doble clic (con la herramienta selección) sobre el botón.

        .py-3.py-md-4(titulo="Piquetes" :imagen="images[1]" :numero="numbers[1]")
          .row.justify-content-center.mb-5
            .col-10
              .row.justify-content-end(style="background-color:#E7E7E7")
                .col-8.d-flex.align-items-center 
                  p.mb-0 Como es conocido, un piquete es una marca que se hace en un punto del contorno con el fin de indicar un proceso, para realizarla en el sistema existe la herramienta Piquete, la cual se encuentra en la Caja de herramientas / Puntos y Piquetes o la tecla “N” (<i>Notch</i> piquete en inglés). Con la herramienta activa se hace clic en el punto e inmediatamente se marca el piquete. 
                .col-3.border
                  figure.border
                    img(src='@/assets/curso/tema9/img12.png')   
          SlyderA.mb-5  
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 152</b>
                  p.mb-0 Herramienta piquete - paso 1.
                figure
                  img(src='@/assets/curso/tema9/img13.png') 
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 153</b>
                  p.mb-0 Herramienta piquete - paso 2.
                figure
                  img(src='@/assets/curso/tema9/img14.png')   
          
          .row.justify-content-center.mb-5  
            .col-10 
              p.mb-0 Predeterminadamente el sistema marca el piquete interno en forma de T. En algunos tejidos y procesos se requieren piquetes externos en forma de V, para lograrlo se va a las propiedades del piquete haciendo doble clic sobre él. En Principal / Tipo, seleccionar el tipo de piquete, para el ejemplo se elegirá V, en Ángulo / Ángulo, se escribe 270° (esto para que quede hacia afuera).

          SlyderA.mb-5  
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 154</b>
                  p.mb-0 Propiedades de piquete - paso 1.
                figure
                  img(src='@/assets/curso/tema9/img39a.svg') 
            .row.justify-content-center
              .col-10 
                div.mb-2.BorTit
                  p.mb-0 <b>Figura 155</b>
                  p.mb-0 Propiedades de piquete - paso 2.
                figure
                  img(src='@/assets/curso/tema9/img16.png') 
          p.mb-5.text-center Según lo requerido por la empresa o el producto se trabajará con estos tipos de piquete. 

          .row.justify-content-center
              .col-10 
                .row.justify-content-center.mb-5
                  .col-2.p-0
                    img(src='@/assets/curso/tema1/img27.svg') 
                  .col-10.d-flex.align-items-center(style="background-color:#D6EBFB;border-top-right-radius: 100px; border-bottom-right-radius: 100px")
                    p.mb-0 La combinación de herramientas y procedimientos dan como resultado patrones precisos y óptimos para su trazo, corte y confección.

          .row.justify-content-center
            .col-10 
              .row.justify-content-center
                .col-4
                  figure
                    img(src='@/assets/curso/tema9/img17.svg') 
                .col-8
                  a.anexo.mb-4(:href="obtenerLink('/downloads/Material-de-Formacion-AAP2.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Anexo.</b> Diseño básico de productos textiles asistido por computador. Actividad de aprendizaje 2: Herramientas PDS y su funcionalidad. 1-18.

                  a.anexo.mb-4(:href="obtenerLink('/downloads/Material-de-Formacion-AAP3.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Anexo.</b> Diseño básico de productos textiles asistido por computador. Actividad de aprendizaje 3: Creación de patrones.

                  a.anexo.mb-4(:href="obtenerLink('/downloads/Material-de-Formacion-AAP4.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p <b>Anexo.</b> Diseño básico de productos textiles asistido por computador. Actividad de aprendizaje 4: Creación de patrones. 1-21.
          


</template>

<script>
import TabSpecial from '../components/TabSpecial.vue'
const tabicono1 = require('@/assets/curso/tema9/img01.svg')
const tabicono2 = require('@/assets/curso/tema9/img02.svg')
const numerotab1 = require('@/assets/curso/tema9/number1.svg')
const numerotab2 = require('@/assets/curso/tema9/number2.svg')

export default {
  name: 'Tema9',
  components: {
    TabSpecial,
  },
  data: () => ({
    images: [tabicono1, tabicono2],
    numbers: [numerotab1, numerotab2],
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
