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
})