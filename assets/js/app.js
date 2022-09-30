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