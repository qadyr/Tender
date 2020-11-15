"use strict";

$(window).load(function () {

   var hideEl = function() {
    $('.sl2').removeClass('_show');
    $('.main-m .next-move').addClass('hide');
    $('.main-m .prev-move').addClass('hide');
    $('.x').css('z-index', 3);
  };
  var showEl = function() {
    $('.sl2').addClass('_show');
    $('.main-m .next-move').removeClass('hide');
    $('.main-m .prev-move').removeClass('hide');
	 $('.main-m .home-move').removeClass('hide');
  };

  var pop3Hide = function() {
    $('.m_pop3').fadeOut();
  };

  var pop3Show = function() {
    $('.m_pop3').fadeIn();
  };

  var changeBGtoWhite = function() {
    $('.wrap .common-bg').removeClass('hide');
  };

  var changeBGtoBlue = function() {
    $('.wrap .common-bg').addClass('hide');
  };

  var changeBGtoLightGreen = function() {
    $('.wrap .common-bg2').removeClass('hide');
  };

  var removeLightGreenBG = function() {
    $('.wrap .common-bg2').addClass('hide');
  };

  var changeToOne = function() {
    $('.wrap .common-bg3').removeClass('hide');
  };

  var removeOne = function() {
    $('.wrap .common-bg3').addClass('hide');
  };

  var changeTwo = function() {
    $('.wrap .common-bg4').removeClass('hide');
  };

  var removeTwo = function() {
    $('.wrap .common-bg4').addClass('hide');
  };

  var canClick = true;

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
    $('.sl1 .like').addClass('ac');
  }, 500);

  $('.sl1 .like form input').click(function() {
    $(this).attr('disabled', 'disabled');
  });

  $('.sl2 .sl2-link1').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec1').addClass('ac');
    $(this).parent().addClass('vid');
    $(this).parent().removeClass('vid2');
    $(this).parent().removeClass('vid3');
    $('.mvid').removeClass('ac');
    $('.main-vid').addClass('ac')/* .get(0).play() */;
  });
  $('.sl2 .sl2-link2').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec2').addClass('ac');
    $(this).parent().removeClass('vid');
    $(this).parent().addClass('vid2');
    $(this).parent().removeClass('vid3');
    $('.mvid').removeClass('ac');
    $('.main-vid2').addClass('ac')/* .get(0).play() */;
  });
  $('.sl2 .sl2-link3').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec3').addClass('ac');
    $(this).parent().removeClass('vid');
    $(this).parent().removeClass('vid2');
    $(this).parent().removeClass('vid3');
    $('.mvid').removeClass('ac');
  });
  $('.sl2 .sl2-link4').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec4').addClass('ac');
    $(this).parent().removeClass('vid');
    $(this).parent().removeClass('vid2');
    $(this).parent().addClass('vid3');
    $('.mvid').removeClass('ac');
    $('.main-vid3').addClass('ac')/* .get(0).play() */;
  });

  $('.sl2 .vec1 a').click(function() {
    $('.m_pop1').fadeIn();
    $('.main-vid').removeClass('ac')/* .get(0).pause() */;
    setTimeout(function() {
      hideEl();
      changeBGtoWhite();
    }, 500);
  });
  $('.m_pop1 .x').click(function() {
    $(this).parent().fadeOut();
    $('.main-vid').addClass('ac')/* .get(0).play() */;
    showEl();
    changeBGtoBlue();
  });

  $('.sl2 .vec2 a').click(function() {
    $('.m_pop2').fadeIn();
    $('.main-vid2')
      .css('transition', 'all 0s')
      .removeClass('ac')/* .get(0).pause() */;
    changeBGtoLightGreen();
    hideEl();
    setTimeout(function() {
      $('.m_pop2 .g2').addClass('ac');
      $('.m_pop2 .g4').addClass('ac');
      $('.m_pop2 .g6').addClass('ac');
      $('.main-m .home-move').addClass('hide');
    }, 500);
  });
  $('.m_pop2 .x').click(function() {
    $(this).parent().fadeOut();
    $('.main-vid2')
      .css('transition', 'all 0.5s')
      .addClass('ac')/* .get(0).play() */;
    $('.m_pop2 .g2').removeClass('ac');
    $('.m_pop2 .g4').removeClass('ac');
    $('.m_pop2 .g6').removeClass('ac');
    removeLightGreenBG();
    showEl();
  });

  $('.sl2 .vec3 a').click(function() {
    $('.m_pop3').fadeIn();
    changeTwo();
    hideEl();
  });
  $('.m_pop3 .x').click(function() {
    $(this).parent().fadeOut();
    removeTwo();
    showEl();
  });

  $('.m_pop3 .o1').click(function() {
    $('.m_pop4').fadeIn();
    pop3Hide();
    removeTwo();
    changeBGtoWhite();
    setTimeout(function() {
      $('.m_pop4 .tub1').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.m_pop4 .plsh1').addClass('ac');
    }, 1250);
    setTimeout(function() {
      $('.m_pop4 .plsh2').addClass('ac');
    }, 1750);
    setTimeout(function() {
      $('.m_pop4 .plsh3').addClass('ac');
    }, 2250);
    setTimeout(function() {
      $('.m_pop4 .plsh4').addClass('ac');
    }, 2750);
    setTimeout(function() {
      $('.m_pop4 .mlist').addClass('ac');
    }, 3250);
    setTimeout(function() {
      $('.m_pop4 .e6').addClass('ac');
    }, 3750);
  });
  $('.m_pop4 .x').click(function() {
    $(this).parent().fadeOut();
    pop3Show();
    changeTwo();
    changeBGtoBlue();
    $('.m_pop4 .tub1').removeClass('ac');
    $('.m_pop4 .plsh1').removeClass('ac');
    $('.m_pop4 .plsh2').removeClass('ac');
    $('.m_pop4 .plsh3').removeClass('ac');
    $('.m_pop4 .plsh4').removeClass('ac');
    $('.m_pop4 .mlist').removeClass('ac');
    $('.m_pop4 .e6').removeClass('ac');
  });
  $('.m_pop3 .o2').click(function() {
    $('.m_pop5').fadeIn();
    pop3Hide();
    removeTwo();
    changeBGtoWhite();
    setTimeout(function() {
      $('.m_pop5 .tub1').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.m_pop5 .plsh1').addClass('ac');
    }, 1250);
    setTimeout(function() {
      $('.m_pop5 .plsh2').addClass('ac');
    }, 1750);
    setTimeout(function() {
      $('.m_pop5 .plsh3').addClass('ac');
    }, 2250);
    setTimeout(function() {
      $('.m_pop5 .plsh4').addClass('ac');
    }, 2750);
    setTimeout(function() {
      $('.m_pop5 .mlist').addClass('ac');
    }, 3250);
    setTimeout(function() {
      $('.m_pop5 .e6').addClass('ac');
    }, 3750);
  });
  $('.m_pop5 .x').click(function() {
    $(this).parent().fadeOut();
    pop3Show();
    changeTwo();
    changeBGtoBlue();
    $('.m_pop5 .tub1').removeClass('ac');
    $('.m_pop5 .plsh1').removeClass('ac');
    $('.m_pop5 .plsh2').removeClass('ac');
    $('.m_pop5 .plsh3').removeClass('ac');
    $('.m_pop5 .plsh4').removeClass('ac');
    $('.m_pop5 .mlist').removeClass('ac');
    $('.m_pop5 .e6').removeClass('ac');
  });
  $('.m_pop3 .o3').click(function() {
    $('.m_pop6').fadeIn();
    pop3Hide();
    changeBGtoWhite();
    removeTwo();
    setTimeout(function() {
      $('.m_pop6 .tub1').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.m_pop6 .plsh1').addClass('ac');
    }, 1250);
    setTimeout(function() {
      $('.m_pop6 .plsh2').addClass('ac');
    }, 1750);
    setTimeout(function() {
      $('.m_pop6 .plsh3').addClass('ac');
    }, 2250);
    setTimeout(function() {
      $('.m_pop6 .mlist').addClass('ac');
    }, 2750);
  });
  $('.m_pop6 .x').click(function() {
    $(this).parent().fadeOut();
    pop3Show();
    changeTwo();
    changeBGtoBlue();

    $('.m_pop6 .tub1').removeClass('ac');
    $('.m_pop6 .plsh1').removeClass('ac');
    $('.m_pop6 .plsh2').removeClass('ac');
    $('.m_pop6 .plsh3').removeClass('ac');
    $('.m_pop6 .mlist').removeClass('ac');
  });
  $('.m_pop3 .o4').click(function() {
    $('.m_pop7').fadeIn();
    pop3Hide();
    changeBGtoWhite();
    removeTwo();
    setTimeout(function() {
      $('.m_pop7 .tub1').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.m_pop7 .plsh1').addClass('ac');
    }, 1250);
    setTimeout(function() {
      $('.m_pop7 .plsh2').addClass('ac');
    }, 1750);
    setTimeout(function() {
      $('.m_pop7 .plsh3').addClass('ac');
    }, 2250);
    setTimeout(function() {
      $('.m_pop7 .plsh4').addClass('ac');
    }, 2750);
    setTimeout(function() {
      $('.m_pop7 .mlist').addClass('ac');
    }, 3250);
  });
  $('.m_pop7 .x').click(function() {
    $(this).parent().fadeOut();
    pop3Show();
    changeTwo();
    changeBGtoBlue();
    $('.m_pop7 .tub1').removeClass('ac');
    $('.m_pop7 .plsh1').removeClass('ac');
    $('.m_pop7 .plsh2').removeClass('ac');
    $('.m_pop7 .plsh3').removeClass('ac');
    $('.m_pop7 .plsh4').removeClass('ac');
    $('.m_pop7 .mlist').removeClass('ac');
  });
  $('.m_pop3 .o5').click(function() {
    $('.m_pop9').fadeIn();
    pop3Hide();
    changeToOne();
    removeTwo();
    setTimeout(function() {
      $('.m_pop9 .tub1').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.m_pop9 .plsh1').addClass('ac');
    }, 1250);
    setTimeout(function() {
      $('.m_pop9 .plsh2').addClass('ac');
    }, 1750);
    setTimeout(function() {
      $('.m_pop9 .plsh3').addClass('ac');
    }, 2250);
    setTimeout(function() {
      $('.m_pop9 .mlist').addClass('ac');
    }, 2750);
  });
  $('.m_pop9 .x').click(function() {
    $(this).parent().fadeOut();
    pop3Show();
    changeTwo();
    removeOne();
    $('.m_pop9 .tub1').removeClass('ac');
    $('.m_pop9 .plsh1').removeClass('ac');
    $('.m_pop9 .plsh2').removeClass('ac');
    $('.m_pop9 .plsh3').removeClass('ac');
    $('.m_pop9 .mlist').removeClass('ac');
  });
  $('.m_pop3 .o6').click(function() {
    $('.m_pop10').fadeIn();
    pop3Hide();
    changeBGtoWhite();
    removeTwo();
    setTimeout(function() {
      $('.m_pop10 .tub1').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.m_pop10 .plsh1').addClass('ac');
    }, 1250);
    setTimeout(function() {
      $('.m_pop10 .plsh2').addClass('ac');
    }, 1750);
    setTimeout(function() {
      $('.m_pop10 .plsh3').addClass('ac');
    }, 2250);
    setTimeout(function() {
      $('.m_pop10 .mlist').addClass('ac');
    }, 2750);
  });
  $('.m_pop10 .x').click(function() {
    $(this).parent().fadeOut();
    pop3Show();
    changeTwo();
    changeBGtoBlue();
    $('.m_pop10 .tub1').removeClass('ac');
    $('.m_pop10 .plsh1').removeClass('ac');
    $('.m_pop10 .plsh2').removeClass('ac');
    $('.m_pop10 .plsh3').removeClass('ac');
    $('.m_pop10 .mlist').removeClass('ac');
  });

  // $('.sl2 .vec4 a').click(function() {
  //   $('.m_pop8').fadeIn();
  //   hideEl();
  //   changeBGtoWhite();
  // });

  $('.main-m .prev-move').click(function(e) {
    if ( $('.sl2').hasClass('_show') ) e.preventDefault();
    if (!canClick) return;
    canClick = !canClick;
    $('.main-m .next-move').removeClass('hide');
    $('.sl._show').removeClass('_show').prev().addClass('_show');
    $('.sl1 .drop').removeClass('hide');
    $('.sl2 .sl2-links').removeClass('ac');
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2').removeClass('vid vid2 vid3');
    $('.mvid').removeClass('ac');
    setTimeout(function() {
      canClick = !canClick;
    }, 1000);
  });
  $('.main-m .next-move').click(function() {
    if (!canClick) return;
    canClick = !canClick;
    $(this).addClass('hide');
    $('.sl1 .drop').addClass('hide');
    setTimeout(function() {
      $('.sl._show').removeClass('_show').next().addClass('_show');
      setTimeout(function() {
        $('.sl2 .sl2-link1').addClass('ac');
      }, 500);
      setTimeout(function() {
        $('.sl2 .sl2-link2').addClass('ac');
      }, 750);
      setTimeout(function() {
        $('.sl2 .sl2-link3').addClass('ac');
      }, 1000);
      setTimeout(function() {
        $('.sl2 .sl2-link4').addClass('ac');
      }, 1250);
      setTimeout(function() {
        $('.sl2 .sl2-link1').trigger('click');
      }, 1500);
      setTimeout(function() {
        canClick = !canClick;
      }, 1750);
    }, 1250);
  });

  // lazy img
  var $lazyImg = $('img.lazy');
  $.each($lazyImg, function() {
      this.src = this.dataset.src;
  });
});