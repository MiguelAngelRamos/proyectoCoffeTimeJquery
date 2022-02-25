$(document).ready(function(){

  const windowWidth = $(window).width(); // calculo el ancho de la pantalla

  if(windowWidth > 800) {
  // Cuando el usuario haga scroll en la página
  $(window).scroll(function(){
    const scroll = $(window).scrollTop();
    //console.log(scroll/2);

    $('header .textos').css({
      // translate(horizontal, vertical)
      'transform': 'translate(0px,' + scroll/2 + '%)'
      // transform : translate(0px, 76%);
    });

    $('.acerca-de article').css({
      'transform': 'translate(0px,-' + scroll/4 + '%)'
    })
  });
  }
});