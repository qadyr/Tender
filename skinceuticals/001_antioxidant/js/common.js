"use strict";

$(window).load(function () {

  var hideEl = function() {
    $('.sl1').removeClass('_show');
    $('.main-m').addClass('hide');
  };
  var showEl = function() {
    $('.sl1').addClass('_show');
    $('.main-m').removeClass('hide');
  };

  var changeToGray = function() {
    $('.wrap .bg1').removeClass('hide');
  };
  var changeToLightBlue = function() {
    $('.wrap .bg1').addClass('hide');
  };

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

  $('.sl1 .o1').click(function() {
    $('.mp1').fadeIn();
    changeToGray();
    hideEl();
    setTimeout(function() {
      $('.mp1 h3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.mp1 .list1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.mp1 .list2').addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.mp1 .cslist li').eq(0).addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.mp1 .cslist li').eq(1).addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.mp1 .cslist li').eq(2).addClass('ac');
    }, 3000);
    setTimeout(function() {
      $('.mp1 .cslist li').eq(3).addClass('ac');
    }, 3500);
  });
  $('.mp1 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
    $('.mp1 h3').removeClass('ac');
    $('.mp1 .flist').removeClass('ac');
    $('.mp1 .slist').removeClass('ac');
    $('.mp1 .cslist li').removeClass('ac');
  });
  $('.mp1 .o').click(function() {
    $('.mp1d').fadeIn();
    $(this).parent().fadeOut();
    setTimeout(function() {
      $('.mp1d .g').addClass('ac');
    }, 500);
  });
  $('.mp1d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp1').fadeIn();
    $('.mp1d .g').removeClass('ac');
  });

  $('.sl1 .o2').click(function() {
    $('.mp2').fadeIn();
    changeToGray();
    hideEl();
    setTimeout(function() {
      $('.mp2 h3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.mp2 .list1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.mp2 .list2').addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.mp2 .cslist li').eq(0).addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.mp2 .cslist li').eq(1).addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.mp2 .cslist li').eq(2).addClass('ac');
    }, 3000);
    setTimeout(function() {
      $('.mp2 .cslist li').eq(3).addClass('ac');
    }, 3500);
  });
  $('.mp2 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
    $('.mp2 h3').removeClass('ac');
    $('.mp2 .list1').removeClass('ac');
    $('.mp2 .list2').removeClass('ac');
    $('.mp2 .cslist li').removeClass('ac');
  });
  $('.mp2 .o').click(function() {
    $('.mp2d').fadeIn();
    $(this).parent().fadeOut();
    setTimeout(function() {
      $('.mp2d .g').addClass('ac');
    }, 500);
  });
  $('.mp2d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp2').fadeIn();
    $('.mp2d .g').removeClass('ac');
  });

  $('.sl1 .o3').click(function() {
    $('.mp3').fadeIn();
    changeToGray();
    hideEl();
    setTimeout(function() {
      $('.mp3 h3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.mp3 .list1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.mp3 .list2').addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.mp3 .cslist li').eq(0).addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.mp3 .cslist li').eq(1).addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.mp3 .cslist li').eq(2).addClass('ac');
    }, 3000);
    setTimeout(function() {
      $('.mp3 .cslist li').eq(3).addClass('ac');
    }, 3500);
  });
  $('.mp3 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
    $('.mp3 h3').removeClass('ac');
    $('.mp3 .list1').removeClass('ac');
    $('.mp3 .list2').removeClass('ac');
    $('.mp3 .cslist li').removeClass('ac');
  });
  $('.mp3 .o').click(function() {
    $('.mp3d').fadeIn();
    $(this).parent().fadeOut();
  });
  $('.mp3d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp3').fadeIn();
  });

  $('.sl1 .o4').click(function() {
    $('.mp4').fadeIn();
    changeToGray();
    hideEl();
    setTimeout(function() {
      $('.mp4 h3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.mp4 .list1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.mp4 .cslist li').eq(0).addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.mp4 .cslist li').eq(1).addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.mp4 .cslist li').eq(2).addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.mp4 .slist').addClass('ac');
    }, 3000);
  });
  $('.mp4 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
    $('.mp4 h3').removeClass('ac');
    $('.mp4 .list1').removeClass('ac');
    $('.mp4 .flist').removeClass('ac');
    $('.mp4 .cslist li').removeClass('ac');
    $('.mp4 .slist').removeClass('ac');
  });

  $('.sl1 .o5').click(function() {
    $('.mp5').fadeIn();
    changeToGray();
    hideEl();
    setTimeout(function() {
      $('.mp5 h3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.mp5 .list1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.mp5 .list1-2').addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.mp5 .cslist li').eq(0).addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.mp5 .cslist li').eq(1).addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.mp5 .cslist li').eq(2).addClass('ac');
    }, 3000);
    setTimeout(function() {
      $('.mp5 .cslist li').eq(3).addClass('ac');
    }, 3500);
    setTimeout(function() {
      $('.mp5 .slist').addClass('ac');
    }, 4000);
  });
  $('.mp5 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
    $('.mp5 h3').removeClass('ac');
    $('.mp5 .list1').removeClass('ac');
    $('.mp5 .list1-2').removeClass('ac');
    $('.mp5 .cslist li').removeClass('ac');
    $('.mp5 .slist').removeClass('ac');
  });
  $('.mp5 .o').click(function() {
    $('.mp5d').fadeIn();
    $(this).parent().fadeOut();
  });
  $('.mp5d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp5').fadeIn();
  });

  $('.sl1 .o6').click(function() {
    $('.mp6').fadeIn();
    changeToGray();
    hideEl();
    setTimeout(function() {
      $('.mp6 h3').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.mp6 .list1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.mp6 .cslist li').eq(0).addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.mp6 .cslist li').eq(1).addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.mp6 .slist').addClass('ac');
    }, 2500);
  });
  $('.mp6 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
    $('.mp6 h3').removeClass('ac');
    $('.mp6 .list1').removeClass('ac');
    $('.mp6 .cslist li').removeClass('ac');
    $('.mp6 .slist').removeClass('ac');
  });
  $('.mp6 .o').click(function() {
    $('.mp6d').fadeIn();
    $(this).parent().fadeOut();
    setTimeout(function() {
      $('.mp6d .gw').addClass('ac');
    }, 500);
  });
  $('.mp6d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp6').fadeIn();
    $('.mp6d .gw').removeClass('ac');
  });

});