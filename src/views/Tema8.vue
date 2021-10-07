<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 8
      h1 Industrialización, aplomo y marcado de piezas

    .row.justify-content-center.mb-5
        .col-10 
          p.mb-5 La industrialización de las piezas corresponde a la marcada de las propiedades de cada una de ellas y los puntos de marcada internos (tratados anteriormente), lo cual en el sistema se hace por la opción propiedades de pieza, que se activa haciendo doble clic sobre uno de los moldes. 
          div.mb-2.BorTit
            p.mb-0 <b>Figura 136</b>
            p.mb-0 Propiedades de la pieza.
          figure
            img(src='@/assets/curso/tema8/img01.png') 

    .row.justify-content-center.mb-5
      .col-6.px-5.py-3(style="background-color:#F2D6E3")
        p.mb-0.text-center En el menú se pueden modificar los siguientes ítems:

    .row.justify-content-center.mb-5
      .col-10 
        .row.justify-content-center
          .col-10
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                p.mb-0 <b>Nombre</b>: hace referencia al nombre de la pieza, este se maneja en las empresas de manera abreviada para efectos de optimizar recursos (tiempo - tinta).
              li 
                .lista-ol--cuadro__vineta
                  span 2
                p.mb-0 <b>Cantidad</b>:  se refiere al número de veces que se cortará la pieza, es importante tener en cuenta que si la pieza se requiere reflejada (frentes, mangas, perneras, puños) se debe dejar en cantidad 1 y se activa la opción Par.
              li 
                .lista-ol--cuadro__vineta
                  span 3
                p.mb-0 <b>Código</b>:  se diligencia en los casos que la empresa lo requiera y según su codificación.
              li 
                .lista-ol--cuadro__vineta
                  span 4
                p.mb-0 <b>Material</b>:   en este campo se marca el material en el que se cortará, es muy importante que coincida con la nomenclatura marcada en la ficha técnica y según los requerimientos de la empresa.
              li 
                .lista-ol--cuadro__vineta
                  span 5
                p.mb-0 <b>Descripción</b>:   en este campo se da información que el patronista considere importante para trazo y corte, o para las demás dependencias, como el número de veces que se corta la pieza, Ej. 2xT. 
          .col-2
            figure
              img(src='@/assets/curso/tema8/img02.svg') 

    .row.justify-content-center.mb-5
        .col-10        
          div.mb-2.BorTit
            p.mb-0 <b>Figura 137</b>
            p.mb-0 Propiedades principales de la pieza.
          figure
            img(src='@/assets/curso/tema8/img03.png') 

    .row.justify-content-center.mb-5
      .col-10.py-3(style="background-color: #D6EBFB")  
        p.mb-0.text-center En el grupo de opciones Texto de descripción, se modifica el tamaño, ángulo y ubicación del texto descriptivo de la pieza.   
    
    .row.justify-content-center.mb-5
        .col-10        
          div.mb-2.BorTit
            p.mb-0 <b>Figura 138</b>
            p.mb-0 Texto de descripción.
          figure
            img(src='@/assets/curso/tema8/img04.png') 
    p.text-center.mb-5 En el conjunto Atributos de trazo, se toman las decisiones sobre cómo se comportará la pieza al momento del trazo.    

    //a(@click="mostrarCollapse()")

    .row.justify-content-center.mb-5
      .col-10  
        #MapaGroup01(data-aos="zoom-in")
          .row.mb-5.justify-content-center
            .col-3.col-md-2.col-lg-1.mb-3.mb-lg-0(v-for="num of 8")
              button.ClasePripiaBtn.collapsed(
                :id="`boton${num}`"
                data-bs-toggle="collapse" 
                :data-bs-target="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`" 
                aria-expanded="true" 
                :aria-controls="`#collapse${num < 10 ? '0'+num : num}, #collapse${num < 10 ? '0'+num : num}s`"
              )
                img.img-a.boton_wid(:src="require(`@/assets/curso/tema8/img${num + 4}.svg`)", alt="")
              img.img-a.collapse(
                :id="`collapse${num < 10 ? '0'+num : num}s`"
                src="@/assets/curso/tema8/img13.svg" 
                data-bs-parent="#MapaGroup01"
                :class="{show: num == hash}"
              )           
          
          #collapse01.collapse(:class="{show: hash ? hash == 1 : false}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo Piezas opuestas
            p.mb-0 Se refieren a la forma en que se reflejan las piezas cuando tienen pieza par, por predeterminación el sistema asigna Arriba/Abajo, se recomienda dejar esta opción, ya que en el trazo las piezas se ubican de manera horizontal (línea de aplome horizontal), reflejándose las piezas de arriba abajo.
          
          #collapse02.collapse(:class="{show: hash == 2}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo Orientación
            p.mb-0 En este campo se define si la pieza que se está trabajando es la del lado derecho o el izquierdo, generalmente se deja en automático.
          
          #collapse03.collapse(:class="{show: hash == 3}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo  Rotación
            p.mb-5 Hace referencia a la forma en que la pieza se puede ubicar en el trazo con respecto a su ángulo, es decir: 
            PasosA.color-primario.mb-5(tipo="n")
              div
                p.mb-0 <b>1 dirección:</b> solamente se podrá trazar en un sentido, esta opción se utiliza en telas con brillo, peine o gráficos de un solo sentido, con el fin de que todas las piezas queden cortadas para al mismo lado. 
              div
                p.mb-0 <b>2 direcciones:</b> se utiliza cuando las piezas se pueden ubicar en ambos sentidos del aplome (hilo) de la tela, o sea, la urdimbre. 
              div
                p.mb-0 <b>4 direcciones:</b> las piezas se podrán cortar en ambas direcciones del aplome y en las dos direcciones de la trama. 
              div
                p.mb-0 <b>8 direcciones:</b> la pieza se traza en las dos direcciones del hilo, en las dos de trama y las cuatro direcciones diagonales (45°, 135°, 225°, 315°). 
              div
                p.mb-0 <b>Cualquier dirección:</b> la pieza no tiene restricciones de dirección en el trazo. 
            figure
              img(src='@/assets/curso/tema8/img14.svg') 
          #collapse04.collapse(:class="{show: hash == 4}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo  Inclinación de la pieza
            p.mb-0 Esta opción, aunque no es muy común utilizarla, se emplea para darle inclinación a la pieza a la hora del trazo, es muy útil cuando la tela presenta hilo virado (comúnmente conocido como pierna virada), se compensa el ángulo de virado hacia el lado contrario para que la prenda terminada quede con el hilo como debe ser.
          
          #collapse05.collapse(:class="{show: hash == 5}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo  Encogimiento
            p.mb-5 Se puede manejar el encogimiento desde estas opciones o desde escalizar (cómo se vio en el tema) (figura 139).
            div.mb-2.BorTit
              p.mb-0 <b>Figura 139</b>
              p.mb-0 Atributos de trazo.
            figure
              img(src='@/assets/curso/tema8/img15.png') 

          #collapse06.collapse(:class="{show: hash == 6}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo Atributos del espaciado
            p.mb-5 Cuando se cortan algunas telas es recomendable dejar una margen de corte o un espacio entre piezas trazadas, en esta opción se asigna dicho espacio (figura 140).
            div.mb-2.BorTit
              p.mb-0 <b>Figura 140</b>
              p.mb-0  Atributos de espaciado.
            figure
              img(src='@/assets/curso/tema8/img16.png') 

          #collapse07.collapse(:class="{show: hash == 7}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo Información tallas
            p.mb-0 En esta opción se visualiza la información de la pieza correspondiente a cada talla, como: perímetro, área, máximo en X y máximo en Y.
          
          #collapse08.collapse(:class="{show: hash == 8}" data-bs-parent='#MapaGroup01')
            h4.t8-titulo Reporte
            p.mb-5 Sirve para guardar o imprimir el reporte de la información de la talla. 
            div.mb-2.BorTit
              p.mb-0 <b>Figura 141</b>
              p.mb-0  Información de tallas y reporte.
            figure.mb-5
              img(src='@/assets/curso/tema8/img17.png') 
            p.mb-0 A cada pieza se le debe completar la información de la industrialización, ya que es fundamental para el desarrollo del trazo, corte y confección.
</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    //hash: 0,
  }),
  watch: {
    $route(to) {
      console.log('route: ' + to)
      if (to.hash?.length) {
        const numero = to.hash.split('_')[1]
        this.mostrarCollapse(numero)
        document.getElementById('MapaGroup01').scrollIntoView({
          behavior: 'smooth',
        })
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      console.log('nextTick')
      if (this.$route.hash.length) {
        console.log('if')
        const numero = this.$route.hash.split('_')[1]
        this.hash = numero
        setTimeout(() => {
          document.getElementById('MapaGroup01').scrollIntoView({
            behavior: 'smooth',
          })
        }, 500)
      }
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
  methods: {
    mostrarCollapse(id) {
      alert('hola')
      //console.log(document.querySelector('#boton' + id))
      //document.querySelector('#boton' + id).click()
    },
  },
}
</script>

<style lang="sass" scoped></style>
