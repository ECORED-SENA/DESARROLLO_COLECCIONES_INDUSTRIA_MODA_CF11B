<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-lg-6
        div.mb-2.BorTit
          p.mb-0 <b>Figura 1</b>
          p.mb-0 Patronistas.
        figure
          img(src='@/assets/curso/introduccion/img01.png') 
          figcaption Nota. Tomada de shutterstock.com
      .col-lg-6.pt-3
        .bloque-texto-b.color-acento-contenido
          .bloque-texto-b__texto            
            p.mb-0 En la actualidad, el sistema de la moda, al igual que los demás sectores industriales, emplea las tecnologías de la industria 4.0 en los diferentes procesos de la cadena de valor. El patronaje hace parte fundamental en el desarrollo de los productos y ha sido una de las áreas en adoptar sistemas de información y software que permiten agilizar el trabajo y, por ende, los procesos productivos.<br><br>Los patronistas adquieren habilidades en el desarrollo de diseño asistido por computador CAD (Computer Aided Design), lo cual ayuda a optimizar el espacio de almacenaje debido a que los archivos se guardan en carpetas de un ordenador o servidor y, además, ahorran tiempo ya que facilita la búsqueda de modelos en el computador. De igual manera, se hace más fácil y seguro enviar un trabajo o acceder a él por medio de las redes, teniendo la información en tiempo real, por ello, se convierte en una competencia fundamental del desarrollador de colecciones para la industria de la moda. 
    
    .row.justify-content-center.mb-5
      .col-lg-10 El diseño de patrones o moldes asistidos por computador es una de las áreas de desempeño de mayor demanda en el sistema moda. Un patronista integral conoce y domina las técnicas manuales para luego aplicarlas en el uso de softwares de diseño asistido por computador (CAD). 
    
    .row.justify-content-end.mb-0
      .col-lg-4
        div.mb-2.BorTit
          p.mb-0 <b>Figura 2</b>
          p.mb-0 Logo Optitex.
    .row.justify-content-end.py-3(style="background-color:#F2D6E3")   
      .col-lg-7.d-flex.align-items-center
        p.mb-0 Optitex es uno de los softwares más representativos y utilizados en el sistema moda en Colombia; permite el desarrollo de productos de moda asistido por computador en la mayoría de los procesos tales como digitalización, elaboración, escalado, trazo y corte de patrones de prendas de vestir con herramientas propias digitales para tal fin. Por tal motivo este componente se basa en su manejo.
      .col-lg-4
        figure
          img(src='@/assets/curso/introduccion/img02.svg') 
    .row.justify-content-end.mt-0.mb-5
      .col-lg-4.pe-0
        figcaption  Nota. Optitex.com

    .row.justify-content-center.mb-5
      .col-lg-10 Los CAD son programas computacionales para la creación de archivos 2D y 3D vectoriales, es decir, figuras geométricas compuestas por vectores, siendo los puntos, líneas, arcos y polígonos (planos o en dos dimensiones) las 2D, y las 3D la visualización de prototipos digitales (prendas con volumen) para validación de los productos.      
    
    .row.justify-content-end.mb-0
      .col-lg-4
        div.mb-2.BorTit
          p.mb-0 <b>Figura 3</b>
          p.mb-0 Optitex.
      .col-lg-1
    .row.justify-content-end
      .col-lg-6.d-flex.align-items-center.ps-5(style="background-color:#A9EFFF")   
        p.mb-0 Ahora bien, Optitex es un software utilizado en el sector textil - confección -en todos sus campos de acción- para el desarrollo de patronaje, escalado y trazo de prendas de vestir. Funciona a través de CAD, el cual ha digitalizado tareas que antes se hacían de manera manual en la industria de la moda. De igual manera, el programa cuenta con periféricos CAM (por sus siglas en inglés Computer Aided Manufacturing o fabricación asistida por computador) para la sistematización de procesos de manufactura tales como ploteo (impresión), extendido y corte automatizados y semiautomatizados.
      .col-lg-4.pe-0(style="background-color:#A9EFFF")   
        figure
          img(src='@/assets/curso/introduccion/img03.png') 
      .col-lg-1
    .row.justify-content-end.mt-0.mb-5
      .col-lg-6.d-flex.align-items-center.ps-0
        p.mb-0 <b>Nota:</b> las figuras de este componente se derivan de ejercicios en el software Optitex, salvo donde se indique lo contrario.
      .col-lg-4.pe-0
        figcaption  Nota. Optitex.com
      .col-lg-1
         
//- 
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
