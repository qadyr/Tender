$(document).ready(function() {
var cubes = [$('.start__cube-box')];
$('.play__btn').click(function(){
  $('.start__cube-box')[1].style.animation = 'none';
  $('.start__cube-box')[1].offsetHeight;
  $('.start__cube-box')[1].style.animation = null; 
	
  $('.cube__logo-left')[0].style.animation = 'none';
  $('.cube__logo-left')[0].offsetHeight;
  $('.cube__logo-left')[0].style.animation = null; 
 $('.cube__logo-right')[0].style.animation = 'none';
  $('.cube__logo-right')[0].offsetHeight;
  $('.cube__logo-right')[0].style.animation = null; 
  $('.cube__logo-front')[0].style.animation = 'none';
  $('.cube__logo-front')[0].offsetHeight;
  $('.cube__logo-front')[0].style.animation = null; 
$('.cube__logo-back')[0].style.animation = 'none';
  $('.cube__logo-back')[0].offsetHeight;
  $('.cube__logo-back')[0].style.animation = null; 
	
  });


})