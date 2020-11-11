$(function() {

var imghead = [
    "../images/02/pop3.png"
    ];

$.each(imghead, function() {

    $('#deposit').append('<img src="' + this + '" alt="">');
});

$('body').append('<div id="deposit"></div>');


$(window).load(function() {
	
    $('#deposit').remove();
  $('.preloader').fadeOut();
})

});