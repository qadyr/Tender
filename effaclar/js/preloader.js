$(function() {

var imghead = [
    "../images/02/pop3.png"
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