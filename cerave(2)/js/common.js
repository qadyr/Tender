"use strict";

$(document).ready(function () {

  var hideEl = function(data) {
    $('.sl2').removeClass('_show');
    $('.main-m').addClass('hide');
  };

  var showEl = function(data) {
    $('.sl2').addClass('_show');
    $('.main-m').removeClass('hide');
  };

  var it1 = 768 / 100;
  var it2;
  var it4 = 1024 / 100;
  var newSize;

  function ress() {
    if ($(window).height() > 768) {
      $('.over-wrap').height(768);
    } else {
      $('.over-wrap').height($(window).height());
    }

    it2 = Math.round($(window).height() / it1);

    if ( $(window).width() > $(window).height() ) {
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

    if ($(window).height() < 768 || $(window).width() < 1024) {
      it2 = Math.round($(window).width() / it4);
      newSize = $(window).height() / 1000 + ( ( $(window).height() / 1000 ) / 100 * 29.9 );
      $('#page').attr('style', '').css({
        'transform': 'scale(' + (it2 - 1) / 100 + ')'
      }).css({
        '-webkit-transform': 'scale(' + (it2 - 1) / 100 + ')'
      });
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
    ress();
  });
  $(window).load(function () {
    ress();
  });

  $('.m_pop3 .like form input').click(function() {
    $(this).attr('disabled', 'disabled');
  });

  $('.sl2 .sl2-link1').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec1').addClass('ac');
  });
  $('.sl2 .sl2-link2').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec2').addClass('ac');
  });
  $('.sl2 .sl2-link3').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec3').addClass('ac');
  });
  $('.sl2 .sl2-link4').click(function() {
    $('.sl2 .ovec').removeClass('ac');
    $('.sl2 .vec4').addClass('ac');
  });

  var changeBGtoWhite = function() {
    $('.wrap .common-bg1').addClass('hide');
  };

  var removeWhite = function() {
    $('.wrap .common-bg1').removeClass('hide');
  };

  var changeBGtoFirstColor = function() {
    $('.wrap .common-bg2').removeClass('hide');
  };

  var removeFirstColor = function() {
    $('.wrap .common-bg2').addClass('hide');
  };

  $('.sl2 .vec1 a').click(function() {
    $('.m_pop1').fadeIn();
    changeBGtoWhite();
    hideEl();
  });
  $('.m_pop1 .x').click(function() {
    $(this).parent().fadeOut();
    removeWhite();
    showEl();
  });

  $('.sl2 .vec2 a').click(function() {
    $('.m_pop2').fadeIn();
    changeBGtoFirstColor();
    hideEl();
  });
  $('.m_pop2 .x').click(function() {
    $(this).parent().fadeOut();
    removeFirstColor();
    showEl();
  });

  $('.sl2 .vec3 a').click(function() {
    $('.m_pop3').fadeIn();
    changeBGtoFirstColor();
    hideEl();
  });
  $('.m_pop3 .x').click(function() {
    $(this).parent().fadeOut();
    removeFirstColor();
    showEl();
  });

  $('.sl2 .vec4 a').click(function() {
    $('.m_pop4').fadeIn();
    changeBGtoWhite();
    hideEl();
  });

  $('.m_pop3 .o1').click(function() {
    $('.x_pop1').fadeIn();
    setTimeout(function() {
      $('.x_pop1 .tub').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.x_pop1 h3').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.x_pop1 .l1').addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.x_pop1 .l2').addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.x_pop1 h4').addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.x_pop1 .r1').addClass('ac');
    }, 3000);
    setTimeout(function() {
      $('.x_pop1 .b').addClass('ac');
    }, 3500);
  });

  $('.x_pop1 .x').click(function() {
    $(this).parent().fadeOut();
    $('.x_pop1 .tub').removeClass('ac');
    $('.x_pop1 h3').removeClass('ac');
    $('.x_pop1 .l1').removeClass('ac');
    $('.x_pop1 .l2').removeClass('ac');
    $('.x_pop1 h4').removeClass('ac');
    $('.x_pop1 .r1').removeClass('ac');
    $('.x_pop1 .b').removeClass('ac');
  });

  $('.m_pop3 .o2').click(function() {
    $('.x_pop2').fadeIn();
    setTimeout(function() {
      $('.x_pop2 .tub').addClass('ac');
    }, 500);
    setTimeout(function() {
      $('.x_pop2 .l1').addClass('ac');
      $('.x_pop2 .r1').addClass('ac');
    }, 1000);
    setTimeout(function() {
      $('.x_pop2 .l2').addClass('ac');
      $('.x_pop2 .r2').addClass('ac');
    }, 1500);
    setTimeout(function() {
      $('.x_pop2 .l3').addClass('ac');
      $('.x_pop2 .r3').addClass('ac');
    }, 2000);
    setTimeout(function() {
      $('.x_pop2 .r4').addClass('ac');
    }, 2500);
    setTimeout(function() {
      $('.x_pop2 .r5').addClass('ac');
    }, 3000);
  });

  $('.x_pop2 .x').click(function() {
    $(this).parent().fadeOut();
    $('.x_pop2 .tub').removeClass('ac');
    $('.x_pop2 .l').removeClass('ac');
    $('.x_pop2 .r').removeClass('ac');
  });

  $('.main-m .prev-move').click(function() {
    // $('.sl._show').removeClass('_show').prev().addClass('_show');
    // $(this).addClass('hide');
    // $('.main-m .next-move').removeClass('hide');
  });
  $('.main-m .next-move').click(function() {
    $('.sl._show').removeClass('_show').next().addClass('_show');
    $(this).addClass('hide');
    $('.main-m .prev-move').removeClass('hide');
  });

});