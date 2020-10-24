$(function(){
	$('#arrow-1, #arrow-2').click(function(e){
		e.preventDefault();
		$('.show-1').toggleClass('show');
		$('.show-main').toggleClass('show');
	});
	$('#arrow-3').click(function(e){
		e.preventDefault();
		$('.show-1').toggleClass('show');
		$('.video-site').toggleClass('show');
	});
	$('#arrow-4').click(function(e){
		e.preventDefault();
		$('.show-1').toggleClass('show');
		$('.show-3').toggleClass('show');
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		})
		$('.white-bar').css({
			'opacity' : '0'
		})
	});
	$('#arrow-5').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.show-1').toggleClass('show');
	});
	$('#arrow-6').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-1').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-7').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-2').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-8').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-3').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-9').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-4').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-10').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-5').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-11').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-6').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-12').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-7').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('#arrow-13').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-8').toggleClass('show');
		$('.container').removeClass('container-white');
	});
	$('.plus-12').click(function(e){
		e.preventDefault();
		$('.show-1').toggleClass('show');
		$('.video-site').removeClass('show');
	});
	$('.plus-1').click(function(e){
		e.preventDefault();
		$('.show-1').toggleClass('show');
		$('.show-3').removeClass('show');
		$('.container').css({
			'background' : 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 20.7%,rgba(194,216,254,1) 20.7%,rgba(255,255,255,1) 100%)'
		})
		$('.white-bar').css({
			'opacity' : '1'
		})
	});
	$('.plus-2').click(function(e){
		e.preventDefault();
		$('.show-1').toggleClass('show');
		$('.show-4').removeClass('show');
	});
	$('.plus-4').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-1').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-5').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-2').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-6').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-3').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-7').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-4').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-8').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-5').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-9').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-6').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-10').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-7').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('.plus-11').click(function(e){
		e.preventDefault();
		$('.show-4').toggleClass('show');
		$('.bottle-screen-8').removeClass('show');
		$('.container').addClass('container-white');
	});
	$('#cube-1').click(function(e){
		e.preventDefault();
		$('.show-cube-1').addClass('ac');
		$('.light-1').addClass('ac-1');
		$('.light-2').removeClass('ac-1');
		$('.light-3').removeClass('ac-1');
		$('.light-4').removeClass('ac-1');
		$('.show-cube-2').removeClass('ac');
		$('.show-cube-3').removeClass('ac');
		$('.show-cube-4').removeClass('ac');
	});
	$('#cube-2').click(function(e){
		e.preventDefault();
		$('.show-cube-2').addClass('ac');
		$('.light-2').addClass('ac-1');
		$('.light-1').removeClass('ac-1');
		$('.light-3').removeClass('ac-1');
		$('.light-4').removeClass('ac-1');
		$('.show-cube-1').removeClass('ac');
		$('.show-cube-3').removeClass('ac');
		$('.show-cube-4').removeClass('ac');
	});
	$('#cube-3').click(function(e){
		e.preventDefault();
		$('.show-cube-3').addClass('ac');
		$('.light-3').addClass('ac-1');
		$('.light-2').removeClass('ac-1');
		$('.light-1').removeClass('ac-1');
		$('.light-4').removeClass('ac-1');
		$('.show-cube-2').removeClass('ac');
		$('.show-cube-1').removeClass('ac');
		$('.show-cube-4').removeClass('ac');
	});
	$('#cube-4').click(function(e){
		e.preventDefault();
		$('.show-cube-4').addClass('ac');
		$('.light-4').addClass('ac-1');
		$('.light-2').removeClass('ac-1');
		$('.light-3').removeClass('ac-1');
		$('.light-1').removeClass('ac-1');
		$('.show-cube-2').removeClass('ac');
		$('.show-cube-3').removeClass('ac');
		$('.show-cube-1').removeClass('ac');
	});
});
	var it1 = 768 / 100;
	var it2;
	var it4 = 1024 / 100;

	function ress() {
	    if ($(window).height() > 768) {
	      $('.container').height(768);
	    } else {
	      $('.container').height($(window).height());
	    }

	    it2 = Math.round($(window).height() / it1);

	    if ($(window).height() < 768 || $(window).width() < 1024) {
	      it2 = Math.round($(window).width() / it4);
	      $('.container-size').attr('style', '').css({
	        'transform': 'scale(' + (it2 - 1) / 100 + ')'
	      }).css({
	        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
	      });
	    }

	    if ($(window).width() > 1024) {
	      it2 = Math.round($(window).width() / it4) > Math.round($(window).height() / it1) ? Math.round($(window).height() / it1) : Math.round($(window).width() / it4);
	      $('.container-size').attr('style', '');
	      $('.container-size').css({
	        'transform': 'scale(' + it2 / 100 + ')'
	      });
	      $('.container-size').css({
	        '-webkit-transform': 'scale(' + it2 / 100 + ')'
	      });
	      $('.container').height(768 * (it2 / 100));
	    }
	  }

	  ress();
	  $(window).resize(function () {
	    ress();
	  });
	  $(window).load(function () {
	    ress();
	  });
