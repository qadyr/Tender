$(function(){
	$('#arrow-1').click(function(e){
		e.preventDefault();
		$('.bottle').css({
			'transform' : 'translateX(-700px)',
			'transition' : '2s',
			'opacity' : '1'
		});
		setTimeout(function() {
			$('.show-1').css({
			'opacity' : '1',
			'transition' : '2s',
		});
			$('.show-main').css({
			'opacity' : '0',
			'transition' : '2s',
		});
			$('.show-main .text-background, .show-main .header, .show-main .text, .show-main .text-1').css({
			'opacity' : '0',
			'transition' : '2s',
		});
		$('.foam, .new').css({
			'opacity' : '0',
			'transition' : '2s',
		});
		$('.bottle').css({
			'opacity' : '0'
		});
		$('.show-main .arrows').css({
			'opacity' : '0',
		});
		$('.show-1 .arrows').css({
			'opacity' : '1',
		});
		}, 2000);
	});
	$('#arrow-2').click(function(e){
		e.preventDefault();
		setTimeout(function() {
          $('.bottle').css({
			'transform' : 'translateX(0px)',
			'transition' : '2s',
			'opacity' : '1'
		});
		}, 2000);
		$('.show-main .arrows').css({
			'opacity' : '1',
		});
		$('.show-1 .arrows').css({
			'opacity' : '0',
		});
		$('.show-main .text-background, .show-main .header, .show-main .text, .show-main .text-1').css({
			'opacity' : '1',
			'transition' : '3s',
		});
		$('.foam, .new').css({
			'opacity' : '1',
			'transition' : '3s',
		});
		$('.show-1').css({
			'opacity' : '0',
			'transition' : '2s',
		});
		$('.show-main').css({
			'opacity' : '1',
			'transition' : '2s',
		});
	});
	$('#arrow-3').click(function(e){
		e.preventDefault();
		$('.show-1').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.video-site').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
	});
	$('#arrow-4').click(function(e){
		e.preventDefault();
		$('.show-1').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.show-3').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)',
			'transition' : '0.75s',
		})
		$('.white-bar').css({
			'opacity' : '0',
			'transition' : '0.75s',
		})
		$('.white-bar-1').css({
			'opacity' : '0',
			'transition' : '0.75s',
		})
	});
	$('#arrow-5').click(function(e){
		e.preventDefault();
		$('.show-1').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
	});
	$('#arrow-6').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-1').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)',
		});
	});
	$('#arrow-7').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-2').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('#arrow-8').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-3').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('#arrow-9').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('#arrow-10').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-5').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('#arrow-11').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-6').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('#arrow-12').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-7').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('#arrow-13').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.bottle-screen-8').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
		});
	});
	$('.plus-12').click(function(e){
		e.preventDefault();
		$('.show-1').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.video-site').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
	});
	$('.plus-1').click(function(e){
		e.preventDefault();
		$('.show-1').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.show-3').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 20.7%,rgba(194,216,254,1) 20.7%,rgba(255,255,255,1) 100%)',
			'transition' : '0.75s',
		})
		$('.white-bar').css({
			'opacity' : '1',
			'transition' : '0.75s',
		})
		$('.white-bar-1').css({
			'opacity' : '1',
			'transition' : '0.75s',
		})
	});
	$('.plus-2').click(function(e){
		e.preventDefault();
		$('.show-1').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.show-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
	});
	$('.plus-4').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-1').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		setTimeout(function() {
			$('.bar').eq(0).addClass('an');
		}, 500);
		setTimeout(function() {
			$('.bar').eq(1).addClass('an');
		}, 1000);
		setTimeout(function() {
			$('.bar').eq(2).addClass('an');
		}, 1500);
		setTimeout(function() {
			$('.bar').eq(3).addClass('an');
		}, 2000);
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-5').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-2').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-6').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-3').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-7').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-4').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-8').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-5').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-9').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-6').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-10').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-7').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
	});
	$('.plus-11').click(function(e){
		e.preventDefault();
		$('.show-4').css({
			'opacity' : '0',
			'transition' : '0.75s',
		});
		$('.bottle-screen-8').css({
			'opacity' : '1',
			'transition' : '0.75s',
		});
		$('.container').css({
			'background' : '#fff'
		});
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
