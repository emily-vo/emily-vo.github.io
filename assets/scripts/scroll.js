$(document).ready(function(){
$(".about-icon").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-section").offset().top
    }, 1000);
});
$(".art-icon").click(function() {
    $('html, body').animate({
        scrollTop: $("#art-section").offset().top
    }, 1000);
});
$(".code-icon").click(function() {
    $('html, body').animate({
        scrollTop: $("#code-section").offset().top
    }, 1000);
});
$(".contact-icon").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact-section").offset().top
    }, 1000);
});
$(".back-icon").click(function() {
    $('html, body').animate({
        scrollTop: $("body").offset().top
    }, 1000);
});
$("#modeling-slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#modeling-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#modeling-slideshow');
},  6000);
$("#photo-slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#photo-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#photo-slideshow');
},  6000); 

$("#studies-slideshow > div:gt(0)").hide();
setInterval(function() { 
  $('#studies-slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#studies-slideshow');
},  6000);

});




