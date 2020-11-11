$(function() {

var imghead = [
    "../images/02/bg.png",
"../images/03/bg.png",
"../images/04/bg.png",
"../images/05/bg.png"
    ];

$('body').append('<div id="deposit"></div>');
$.each(imghead, function() {

    $('#deposit').append('<img src="' + this + '" alt="">');
});




$(window).load(function() {
	
    $('#deposit').remove();
  $('.preloader').fadeOut();
})

});