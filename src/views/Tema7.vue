<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 7
      h1 Escalado

    div.pt-4.imagen-fondo(:style="{'background-image': `url(${require('@/assets/curso/tema7/img38.svg')})`}")
      .row.justify-content-center.mb-5
        .col-7 Es sabido que el escalado es el proceso mediante el cual el patronista realiza las tallas menores y mayores, a partir de la talla base. Este proceso se logra moviendo los puntos principales en las coordenadas de los ejes X y Y. En el sistema se hace fundamental configurar esta información previamente al escalado, para lo cual se determina la tabla de tallas, que se encuentra en el menú Escalado / Tabla de tallas o por medio del atajo de teclado <i>Shift</i> + F4 (figura 102).
        .col-3
          figure
            img(src='@/assets/curso/tema7/img01.svg')

      .row.justify-content-center.mb5
        .col-10
          div.mb-2.BorTit
            p.mb-0 <b>Figura 102</b>
            p.mb-0 Tabla de medidas.
          figure.mb-5
            img(src='@/assets/curso/tema7/img02.png')

          p.mb-5 Una vez en la tabla de medidas se comienza a configurar el escalado, la talla inicialmente aparece como base, esta se debe cambiar por el número o letra correspondiente a la talla en la que se elaboró (para el ejemplo talla 8).

          div.mb-2.BorTit
            p.mb-0 <b>Figura 103</b>
            p.mb-0 Asignación talla base.
          figure.mb-5
            img(src='@/assets/curso/tema7/img03.png')
    

    .row.justify-content-center
      .col-10
        .row.justify-content-center.mb-5
          .col-4
            figure
              img(src='@/assets/curso/tema7/img04.png')
          .col-8
            .cajon.color-acento-contenido.ps-3.pe-5.py-3.mb-5
              p.mb-0 Luego de la asignación de la talla base, se procede a la creación o asignación de las tallas inferiores y superiores, para lo cual se emplean el botón Insertar tallas: para las tallas menores que la base y Agregar tallas: para las tallas mayores que la base. Frente a cada botón se encuentra un campo en el que se indica el número de tallas a insertar o agregar, para el ejemplo se insertarán dos (2) tallas, es decir las tallas 6 y 4; y se agregarán cuatro (4) tallas, o sea, 10, 12, 14 y 16. 
            p.mb-0 El sistema automáticamente nombra las tallas nuevas, en caso de requerir cambios, simplemente se hace clic sobre el nombre de la talla y se modifica con el teclado. Es importante tener en cuenta, frente a cada talla hay una casilla de para validación, se trata de <=> (menor que, igual, mayor que), es importante activarla en cada talla, la cual indica al sistema que el escalado tomará como referencia la talla inmediatamente anterior, de no activarla se deberá introducir la información a cada talla con respecto a la talla base. En el cuadro de diálogo se encuentran, también, las opciones para borrar tallas y cambiar el orden (figuras 104 a 108).

        SlyderE(indicadores="derecha").mb-5               
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 104</b>
                p.mb-0 Configuración tabla de tallas - paso 1.
              figure
                img(src='@/assets/curso/tema7/img05.png') 
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 105</b>
                p.mb-0 Configuración tabla de tallas - paso 2.
              figure
                img(src='@/assets/curso/tema7/img06.png')
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 106</b>
                p.mb-0 Configuración tabla de tallas - paso 3.
              figure
                img(src='@/assets/curso/tema7/img07.png') 
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 107</b>
                p.mb-0 Configuración tabla de tallas - paso 4.
              figure
                img(src='@/assets/curso/tema7/img08.png') 
          .row.justify-content-center
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 108</b>
                p.mb-0 Configuración tabla de tallas - paso 5.
              figure
                img(src='@/assets/curso/tema7/img09.png') 

        .row.justify-content-center.mb-5
          .col-10.t7-div1
            p.px-3.mb-0 Una vez configurada la tabla de tallas se procede a la asignación del incremento o disminución de cada punto a escalar, es importante recordar que estos puntos deben ser puntos escalados (en las propiedades del punto).

        .row.justify-content-center.mb-5
          .col-2.p-0
            img(src='@/assets/curso/tema1/img27.svg') 
          .col-10.d-flex.align-items-center(style="background-color:#D6EBFB;border-top-right-radius: 100px; border-bottom-right-radius: 100px")
            p.mb-0 Nota: es importante recordar que el escalado tiene como referencia los ejes X y Y del plano cartesiano, en el que X es positivo hacia la derecha y negativo a la izquierda, y Y es positivo hacia arriba y negativo hacia abajo, como se muestra en la figura 92.

        .row.justify-content-center.mb-5
          .col-6
            p.mb-4 Teniendo claras las reglas de escalado correspondientes a la prenda de vestir, al mercado y a las condiciones técnicas de la empresa, se procede a la aplicación de estas en los diferentes puntos de la prenda, proceso que en el sistema optimiza el tiempo debido a su automatización. 
            p.mb-0 Para aplicar el escalado primero se selecciona el punto (recordar que debe ser escalado), se abre la ventana, la cual se encuentra en el menú Ver / Tabla de escalado o por medio de la tecla “2” (sobre la Q y la W), la cual se abre con los valores en blanco (figura 110).
          .col-4.px-4
            div.mb-2.BorTit
              p.mb-0 <b>Figura 109</b>
              p.mb-0 Plano cartesiano.
            figure
              img(src='@/assets/curso/tema7/img10.svg') 

        .row.justify-content-center.mb-5
            .col-12
              div.mb-2.BorTit
                p.mb-0 <b>Figura 110</b>
                p.mb-0 Tabla de escalado.
              figure
                img(src='@/assets/curso/tema7/img11.png') 

        p.mb-5 En este punto se hace imperante entender hacia qué lado decrecen o crecen las tallas; para ingresar los valores en la tabla de escalado (positivos o negativos) se deben ingresar los valores de cada punto en cada una de las dimensiones (dx y dy) para cada talla, si al ingresar los valores no se ve el escalado se debe activar con F4 (activar / desactivar escalado). 

    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 111</b>
            p.mb-0 Registro de valores de escalado - paso 1.
          figure
            img(src='@/assets/curso/tema7/img12.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 112</b>
            p.mb-0 Registro de valores de escalado - paso 2.
          figure
            img(src='@/assets/curso/tema7/img13.png') 

    .row.justify-content-center.mb-5
      .col-10 
        .cajon.color-secundario.ps-3.pe-5.py-3
          p.mb-0 Si el escalado es regular, es decir que todas las tallas presentan el mismo incremento sin rompimiento de tallas, se puede proceder a igualar todo, haciendo clic derecho sobre la dimensión deseada (dx, dy) y luego clic sobre “igual todos”, lo cual replicará el valor en las demás tallas, proceso que ahorra tiempo y garantiza presión del escalado (figuras 113 y 114).

    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 113</b>
            p.mb-0 Igual todos - paso 1.
          figure
            img(src='@/assets/curso/tema7/img14.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 114</b>
            p.mb-0 Igual todos - paso 2.
          figure
            img(src='@/assets/curso/tema7/img15.png')

    .row.justify-content-center.mb-5
      .col-10 
        div(style="position:relative").mb-5
          div(style="width:100%; position:absolute; top:0px")
            .row.justify-content-star
              .col-4
                figure
                  img(src='@/assets/curso/tema7/img16.svg') 
          .row.justify-content-end.mb-4(style="z-index:10000")
              .col-9(style="z-index:10000")
                p.mb-0 Si se requiere invertir el escalado (negativo a positivo o viceversa), se procede haciendo clic sobre la dimensión (dx, dy), luego clic derecho y seleccionar “voltear”; si se requiere voltear ambas dimensiones se hace clic sostenido sobre ambas dimensiones (se selecciona todo), clic derecho y se selecciona “voltear” (figuras 115 a 118) para observar cómo se trabaja una dimensión.
          
    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 115</b>
            p.mb-0 Voltear escalado una dimensión - paso 1.
          figure
            img(src='@/assets/curso/tema7/img16.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 116</b>
            p.mb-0 Voltear escalado una dimensión - paso 2.
          figure
            img(src='@/assets/curso/tema7/img17.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 117</b>
            p.mb-0 Voltear escalado una dimensión - paso 3.
          figure
            img(src='@/assets/curso/tema7/img18.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 118</b>
            p.mb-0 Voltear escalado una dimensión - paso 4.
          figure
            img(src='@/assets/curso/tema7/img19.png') 

    .row.justify-content-center.mb-5 
      .col-8.px-5.py-3(style="background-color: #D6EBFB")
        p.mb-0 En las figuras 103 a 105 se observa el paso a paso para voltear el escalado de las dos dimensiones.

    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 119</b>
            p.mb-0 Voltear escalado ambas dimensiones – paso 1.
          figure
            img(src='@/assets/curso/tema7/img20.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 120</b>
            p.mb-0 Voltear escalado ambas dimensiones – paso 2.
          figure
            img(src='@/assets/curso/tema7/img21.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 121</b>
            p.mb-0 Voltear escalado ambas dimensiones – paso 3.
          figure
            img(src='@/assets/curso/tema7/img22.png') 


    .row.justify-content-center.mb-5
      .col-10 
        p.mb-0 Para una mayor optimización del tiempo, existe la herramienta escalado múltiple, con la que se ingresan los mismos valores en todas las tallas, se entra en la barra de botones del escalado, una vez seleccionada se hace clic sobre el punto a escalar, se abre un cuadro de diálogo, en el que se ingresa el valor de X y el valor de Y, al dar clic en aplicar se visualiza el escalado del punto. 

    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 122</b>
            p.mb-0 Escalado múltiple - paso 1.
          figure
            img(src='@/assets/curso/tema7/img23.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 123</b>
            p.mb-0 Escalado múltiple - paso 2.
          figure
            img(src='@/assets/curso/tema7/img24.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 124</b>
            p.mb-0 Escalado múltiple - paso 3.
          figure
            img(src='@/assets/curso/tema7/img25.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 125</b>
            p.mb-0 Escalado múltiple - paso 4.
          figure
            img(src='@/assets/curso/tema7/img26.png') 
    
    .row.justify-content-center.mb-5
      .col-7.py-3.px-5(style="background-color:#EEEAE7")
        p.mb-0 Una vez se tienen todos los puntos de una pieza escalados (incluyendo los puntos internos y vértices de pinzas), se puede copiar y pegar el escalado de un punto al otro, señalando (herramienta selección) el punto con atributos de escalado, haciendo clic en el botón copiar escalado (o usando el atajo <i>Shift</i> + C), luego haciendo clic en punto al cual se le copiará el escalado y finalizando con clic en el botón pegar escalado (<i>Shift</i> + V) (figuras 126 a 130).
      .col-3(style="background-color:#EEEAE7")
        figure
          img(src='@/assets/curso/tema7/img27.png') 

    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 126</b>
            p.mb-0 Copiar / Pegar escalado - paso 1.
          figure
            img(src='@/assets/curso/tema7/img28.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 127</b>
            p.mb-0 Copiar / Pegar escalado - paso 2.
          figure
            img(src='@/assets/curso/tema7/img29.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 128</b>
            p.mb-0 Copiar / Pegar escalado - paso 3.
          figure
            img(src='@/assets/curso/tema7/img30.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 129</b>
            p.mb-0 Copiar / Pegar escalado - paso 4.
          figure
            img(src='@/assets/curso/tema7/img31.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 130</b>
            p.mb-0 Copiar / Pegar escalado - paso 5.
          figure
            img(src='@/assets/curso/tema7/img32.png') 

    .row.justify-content-center.mb-5
      .col-10
        p.mb-0 En caso requerir pegar una sola de las coordenadas, se procede copiando (de igual manera) el escalado y señalando (herramienta selección) el punto al cual se le va a pegar el escalado, se hace clic en el botón pegar en X o en el botón pegar en Y (según el caso) (figuras 131 a 135).

    SlyderA.mb-5  
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 131</b>
            p.mb-0 Copiar escalado / Pegar en Y - paso 1.
          figure
            img(src='@/assets/curso/tema7/img33.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 132</b>
            p.mb-0 Copiar escalado / Pegar en Y - paso 2.
          figure
            img(src='@/assets/curso/tema7/img34.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 133</b>
            p.mb-0 Copiar escalado / Pegar en Y - paso 3.
          figure
            img(src='@/assets/curso/tema7/img35.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 134</b>
            p.mb-0 Copiar escalado / Pegar en Y - paso 4.
          figure
            img(src='@/assets/curso/tema7/img36.png') 
      .row.justify-content-center
        .col-10 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 135</b>
            p.mb-0 Copiar escalado / Pegar en Y - paso 5.
          figure
            img(src='@/assets/curso/tema7/img37.png') 

    .row.justify-content-center.mb-5
      .col-10
        .row.justify-content-center.mb-5
          .col-2.p-0
            img(src='@/assets/curso/tema1/img27.svg') 
          .col-10.d-flex.align-items-center(style="background-color:#D6EBFB;border-top-right-radius: 100px; border-bottom-right-radius: 100px")
            p.mb-0 Nota: se debe revisar muy bien que todas las piezas del patrón estén debidamente escaladas, una de las herramientas útiles para verificar es la antes vista, caminar, se puede recorrer las piezas con el escalado activo y revisar si los puntos de las demás tallas coinciden.

</template>

<script>
export default {
  name: 'Tema7',
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
