(function($){
  $(function(){

   
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {
    $('#modal1').modal();
    $('#modal2').modal();
    $('#modal3').modal();
    $('#modal4').modal();
    $('#modal6').modal();
    $('.collapsible').collapsible();
        $('.carousel').carousel();

    autoplay()   
    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 4500);
}

$('.carousel.carousel-slider').carousel({fullWidth: true});
        
});

