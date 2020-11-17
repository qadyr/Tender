"use strict";

$(window).load(function () {

  var it1 = 768 / 100;
  var it2;
  var it4 = 1024 / 100;
  var newSize;

function ress() {
      var aaaa = window.innerHeight;
      var bbbb = window.innerWidth;
    if ($(window).height() > 768) {
      $('.over-wrap').height(768);
    } else {
      $('.over-wrap').height($(window).height());
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
      $('#page').attr('style', '').css({
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
            $('#page').attr('style', '').css({
        'transform': 'scale(' + (it2 - 1) / 100 + ')'
      }).css({
        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
      });
            
        }else{
      it2 = Math.round($(window).width() / it4);
      newSize = $(window).height() / 1000 + ( ( $(window).height() / 1000 ) / 100 * 29.9 );
      $('#page').attr('style', '').css({
        'transform': 'scale(' + (it2 - 1) / 100 + ')'
      }).css({
        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
      });
    }
    }

    if ($(window).width() > 1024) {
      it2 = Math.round($(window).width() / it4) > Math.round($(window).height() / it1) ? Math.round($(window).height() / it1) : Math.round($(window).width() / it4);
      $('#page').attr('style', '');
      $('#page').css({
        'transform': 'scale(' + it2 / 100 + ')'
      });
      $('#page').css({
        '-webkit-transform': 'scale(' + it2 / 100 + ')'
      });
      $('.over-wrap').height(768 * (it2 / 100));
    }
  }

  ress();
  $(window).resize(function () {
    setTimeout(ress, 100);

  });
  $(window).load(function () {
    setTimeout(ress, 100);
  });
$(document).ready(function () {
    setTimeout(ress, 100);
  });

  setTimeout(function() {
    $('.sl1 .tub1').addClass('ac');
    setTimeout(function() {
      $('.sl1 .tub2').addClass('ac');
    }, 250);
    setTimeout(function() {
      $('.sl1 .tub3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.sl1 .tub4').addClass('ac');
    }, 750);
    setTimeout(function() {
      $('.sl1 .o5').addClass('ac');
      $('.sl1 .o6').addClass('ac');
      $('.sl1 .o7').addClass('ac');
      $('.sl1 .o8').addClass('ac');
    }, 1250);
  }, 500);

  $('.sl1 .o1').click(function() {
    $('.m_pop1').fadeIn();
  });
  $('.m_pop1 .x').click(function() {
    $('.m_pop1').fadeOut();
  });

  // tooltip2
  $('a.abs').click(function(e){
	//e.preventDefault();
	var href = $(this).attr("href");
	$('.tooltip2').hide();
	//window.location = href;
})



});
