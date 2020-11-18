$(function(){ 
  var showTooltip = false;
  var canClick = true;
  setTimeout(function() {
    $('.like').addClass('an');
  }, 500);
  $('.like form input').click(function() {
    $(this).attr('disabled', 'disabled');
  });
  $('#arrow-1').click(function(e){
    if (!canClick) return;
    canClick = !canClick;
    e.preventDefault();
    $('.tooltip').fadeOut();
    $('.show-1').css({
      'opacity' : '1',
      'transition' : '2s',
    });
    $('.show-main').css({
      'opacity' : '0',
      'transition' : '2s',
    });
    $('.show-main .text-background, .show-main .header__i, .show-main .text, .show-main .text-1').css({
      'opacity' : '0',
      'transition' : '2s',
    });
    $('.foam, .new').css({
      'opacity' : '0',
      'transition' : '2s',
    });
    $('.show-main .arrows').css({
      'opacity' : '0',
    });
    
    $('.show-1').removeClass('nbg');
    setTimeout(function() {
      $('.cube-1').addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.cube-2').addClass('an');
    }, 1750);
    setTimeout(function() {
      $('.cube-3').addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.cube-4').addClass('an');
    }, 2250);
    setTimeout(function() {
      $('.shadows').addClass('an');
    }, 2500);
    setTimeout(function() {
      $('#cube-1').trigger('click');
    }, 2750);
    setTimeout(function() {
      canClick = !canClick;
      $('.show-1 .arrows').css({
      'opacity' : '1',
    });
    }, 4000);
  });
  $('#arrow-2').click(function(e){
	 if (!canClick) return;
    canClick = !canClick;
    e.preventDefault();
    
    $('.show-1 .arrows').css({
      'opacity' : '0',
    });
    $('.show-main .text-background, .show-main .header__i, .show-main .text, .show-main .text-1').css({
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
    $('.cube-1').removeClass('an');
    $('.cube-2').removeClass('an');
    $('.cube-3').removeClass('an');
    $('.cube-4').removeClass('an');
    $('.shadows').removeClass('an');
    $('.light').removeClass('ac-1');
    $('.show-cube-1, .show-cube-2, .show-cube-3, .show-cube-4').removeClass('ac');
    $('.cubeG1').css('display', 'none');
    $('.show-1').addClass('nbg');
setTimeout(function() {
      canClick = !canClick;
      $('.show-main .arrows').css({
      'opacity' : '1',
    });
    }, 3500);
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
    $('.wrap').css('background', 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)');
    setTimeout(function() {
      $('.cubeG1').fadeIn(250);
    }, 750);
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
    $('.wrap').css({
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
    if (!canClick) return;
    canClick = !canClick;
    e.preventDefault();
    $('.show-1').css({
      'opacity' : '1',
      'transition' : '0.75s',
    });
    $('.show-4').css({
      'opacity' : '0',
      'transition' : '0.75s',
    });
    setTimeout(function() {
      canClick = !canClick;
    }, 1000);
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
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)',
    });
    $('.bottle-38').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.zero').removeClass('an');
    $('.strings-text-1').removeClass('an');
  });

  $('#arrow-7').click(function(e){
    if (!canClick) return;
    canClick = !canClick;
    e.preventDefault();
    $('.show-4').css({
      'opacity' : '1',
      'transition' : '0.75s',
    });
    $('.bottle-screen-2').css({
      'opacity' : '0',
      'transition' : '0.75s',
    });
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-39').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.strings-text-2').removeClass('an');
    setTimeout(function() {
      canClick = !canClick;
    }, 1000);
  });

  $('#arrow-8').click(function(e){
    if (!canClick) return;
    canClick = !canClick;
    e.preventDefault();
    $('.show-4').css({
      'opacity' : '1',
      'transition' : '0.75s',
    });
    $('.bottle-screen-3').css({
      'opacity' : '0',
      'transition' : '0.75s',
    });
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-40, .bottle-41').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.zero-1').removeClass('an');
    $('.strings-text-3, .strings-text-4').removeClass('an');
    setTimeout(function() {
      canClick = !canClick;
    }, 1000);
  });

  $('#arrow-9').click(function(e){
    if (!canClick) return;
    canClick = !canClick;
    e.preventDefault();
    $('.show-4').css({
      'opacity' : '1',
      'transition' : '0.75s',
    });
    $('.bottle-screen-4').css({
      'opacity' : '0',
      'transition' : '0.75s',
    });
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-42').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.zero-1').removeClass('an');
    $('.strings-text-4, .strings-text-5').removeClass('an');
    setTimeout(function() {
      canClick = !canClick;
    }, 1000);
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
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-43').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.zero-1').removeClass('an');
    $('.strings-text-5').removeClass('an');
  });

  $('#arrow-11').click(function(e){
    e.preventDefault();
	$('.tooltip').fadeOut();

    $('.show-4').css({
      'opacity' : '1',
      'transition' : '0.75s',
    });
    $('.bottle-screen-6').css({
      'opacity' : '0',
      'transition' : '0.75s',
    });
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-44').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.zero-1').removeClass('an');
    $('.strings-text-5').removeClass('an');
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
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-45, .bottle-46').removeClass('an');
    $('.strings-text-7, .strings-text-8').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.zero-2').removeClass('an');
    $('.strings-text-6').removeClass('an');
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
    $('.wrap').css({
      'background' : 'linear-gradient(294.36deg, #D0E1FF -1.11%, #ADCDFF 99.15%)'
    });
    $('.bottle-47, .bottle-48').removeClass('an');
    $('.strings-text-9, .strings-text-10').removeClass('an');
    $('.bar').removeClass('an');
    $('.text-p').removeClass('an');
    $('.strings-text-2').removeClass('an');
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
    $('.wrap').css('background', '#FFF');
    $('.cubeG1').css('display', 'none');
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
    $('.wrap').css({
      'background' : 'linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,1) 20.7%,rgba(194,216,254,1) 20.7%,rgba(255,255,255,1) 100%)'
    })
    $('.container').css({
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-38').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.bar').eq(0).addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(1).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(2).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.bar').eq(3).addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.zero').addClass('an');
    }, 3500);
    setTimeout(function() {
      $('.strings-text-1').addClass('an');
    }, 4000);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-39').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.bar').eq(4).addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(5).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(6).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.bar').eq(7).addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.strings-text-2').addClass('an');
    }, 3500);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-40, .bottle-41').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.bar').eq(8).addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(9).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(10).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.zero-1').addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.strings-text-3, .strings-text-4').addClass('an');
    }, 3500);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-42').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.bar').eq(11).addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(12).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.zero-1').addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.strings-text-4, .strings-text-5').addClass('an');
    }, 3000);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-43').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.bar').eq(13).addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(14).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(15).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.zero-1').addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.strings-text-5').addClass('an');
    }, 3500);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-44').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.bar').eq(16).addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(17).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(18).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.bar').eq(19).addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.zero-1').addClass('an');
    }, 3500);
    setTimeout(function() {
      $('.strings-text-5').addClass('an');
    }, 4000);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-45, .bottle-46').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.strings-text-7, .strings-text-8').addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(20).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(21).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.bar').eq(22).addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.bar').eq(23).addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 3500);
    setTimeout(function() {
      $('.zero-2').addClass('an');
    }, 4000);
    setTimeout(function() {
      $('.strings-text-6').addClass('an');
    }, 4500);
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
    $('.wrap').css({
      'background' : '#fff'
    });
    setTimeout(function() {
      $('.bottle-47, .bottle-48').addClass('an');
    }, 500);
    setTimeout(function() {
      $('.strings-text-9, .strings-text-10').addClass('an');
    }, 1000);
    setTimeout(function() {
      $('.bar').eq(24).addClass('an');
    }, 1500);
    setTimeout(function() {
      $('.bar').eq(25).addClass('an');
    }, 2000);
    setTimeout(function() {
      $('.bar').eq(26).addClass('an');
    }, 2500);
    setTimeout(function() {
      $('.bar').eq(27).addClass('an');
    }, 3000);
    setTimeout(function() {
      $('.bar').eq(28).addClass('an');
    }, 3500);
    setTimeout(function() {
      $('.text-p').addClass('an');
    }, 4000);
    setTimeout(function() {
      $('.strings-text-2').addClass('an');
    }, 4500);
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
    setTimeout(function() {
      $('.cubeG1').fadeIn(250);
    }, 250);
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
    $('.cubeG1').css('display', 'none');
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
    $('.cubeG1').css('display', 'none');
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
    $('.cubeG1').css('display', 'none');
  });
});
  var it1 = 768 / 100;
  var it2;
  var it4 = 1024 / 100;
  var newSize;
    function ress() {
        var aaaa = window.innerHeight;
      var bbbb = window.innerWidth;
    if ($(window).height() > 768) {
      $('.container').height(768);
    } else {
      $('.container').height($(window).height());
    }

    it2 = Math.round($(window).height() / it1);

    if ( aaaa < bbbb) {
        
        var wwh = bbbb/aaaa;
        if (wwh>1.8){
            
            var it2 = Math.round(aaaa / it1);
            $('#page').attr('style', '').css({
        'transform': 'scale(' + (it2 - 1) / 100 + ')'
      }).css({
        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
      });
            
        }else{
      newSize = $(window).height() / 1000 + ( ( $(window).height() / 1000 ) / 100 * 29.9 );
      if ( newSize > 1 && $(window).width() < 1024 && $(window).height() < 768 ) {
        newSize = 0.95;
      }
      $('.container-size').attr('style', '').css({
        'transform': 'scale(' + newSize + ')'
      }).css({
        '-webkit-transform': 'scale(' + newSize + ')'
      });
      return;
    }
    }

    if ($(window).height() < 768 || $(window).width() < 1024) {
          var wh = window.innerHeight;
        
        var ww = window.innerWidth;
        var wwh = ww/wh;
        if (wwh>1.8){
            it2 = Math.round(wh / it1);
            $('.container-size').attr('style', '').css({
        'transform': 'scale(' + (it2 - 1) / 100 + ')'
      }).css({
        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
      });
            
        }else{
      it2 = Math.round($(window).width() / it4);
      newSize = $(window).height() / 1000 + ( ( $(window).height() / 1000 ) / 100 * 29.9 );
      $('.container-size').attr('style', '').css({
        'transform': 'scale(' + (it2 - 1) / 100 + ')'
      }).css({
        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
      });
    }
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
     $(document).ready(function () {
      ress();
    });
