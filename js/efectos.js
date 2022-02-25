$(document).ready(function(){
  /* EFECTO DE LOS MENUS */
  $('.menu a').each(function(index, elemento){

    // this signifia que hacemos referencia al elemento actual
    $(this).css({
      'top': '-200px'
    });

    $(this).animate({
      top: '0'
    }, 2000 + (index * 500))
  });
});

/* PARA EL TEXTO DEL HEADER */
// console.log($(window).width()); calcula el ancho de la pantalla
if($(window).width() > 800) {
  $('header .textos').css({
    opacity: 0,
    marginTop:0,
  });

  $('header .textos').animate({
    opacity: 1,
    marginTop: '-52px'
  }, 1500);
}


// ENLACES DEL MENU

const acercaDe = $('#acerca-de').offset().top; // calculamos la posición en la pantalla de acerca-de con el scroll
const menu = $('#productos').offset().top;  // calculamos la posición en la pantalla de acerca-de con el scroll
const galeria = $('#galeria').offset().top; // calculamos la posición en la pantalla de acerca-de con el scroll
const ubicacion = $('#ubicacion').offset().top; // calculamos la posición en la pantalla de acerca-de con el scroll

$('#btn-acerca-de').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: acercaDe
  }, 500);
});

$('#btn-menu').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: menu
  }, 500);
});

$('#btn-galeria').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: galeria
  }, 500);
});

$('#btn-ubicacion').on('click', function(event){
  event.preventDefault();
  $('html, body').animate({
    scrollTop: ubicacion
  }, 500);
});