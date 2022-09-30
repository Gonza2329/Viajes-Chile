$(function(){

$(function() {
        $('[data-toggle="tooltip"]').tooltip()
      })

    $('#enviar').click(function(){
        alert('El mensaje ya fue enviado')
    });

    $(".card-title").click(function(){
        $(".card-text").toggle();
    });
});

//Js para ocultar el navbar cuando se hace scroll hacia abajo
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}