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

  var changeBGtoWhite = function() {
    $('.wrap .common-bg').removeClass('hide');
  };

  var changeBGtoBlue = function() {
    $('.wrap .common-bg').addClass('hide');
  };

  var changeOne = function() {
    $('.wrap .common-bg2').removeClass('hide');
  };

  var removeOne = function() {
    $('.wrap .common-bg2').addClass('hide');
  };

  var changeTwo = function() {
    $('.wrap .common-bg3').removeClass('hide');
  };

  var removeTwo = function() {
    $('.wrap .common-bg3').addClass('hide');
  };

  var it1 = 768 / 100;
  var it2;
  var it4 = 1024 / 100;

  function ress() {
    if ($(window).height() > 768) {
      $('.over-wrap').height(768);
    } else {
      $('.over-wrap').height($(window).height());
    }

    it2 = Math.round($(window).height() / it1);

    if ($(window).height() < 768 || $(window).width() < 1024) {
      it2 = Math.round($(window).width() / it4);
      console.log(it2, (it2 - 1) / 100);
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

  $('.sl2 .vec1 a').click(function() {
    $('.m_pop1').fadeIn();
    changeBGtoWhite();
  });
  $('.m_pop1 .x').click(function() {
    $(this).parent().fadeOut();
    changeBGtoBlue();
  });

  $('.sl2 .vec2 a').click(function() {
    $('.m_pop2').fadeIn();
    hideEl();
  });
  $('.m_pop2 .x').click(function() {
    $(this).parent().fadeOut();
    showEl();
  });

  $('.sl2 .vec3 a').click(function() {
    $('.m_pop3').fadeIn();
    hideEl();
  });
  $('.m_pop3 .x').click(function() {
    $(this).parent().fadeOut();
    showEl();
  });

  $('.m_pop3 .o1').click(function() {
    $('.m_pop4').fadeIn();
    changeOne();
  });
  $('.m_pop4 .x').click(function() {
    $(this).parent().fadeOut();
    removeOne();
  });
  $('.m_pop3 .o2').click(function() {
    $('.m_pop5').fadeIn();
    changeTwo();
  });
  $('.m_pop5 .x').click(function() {
    $(this).parent().fadeOut();
    removeTwo();
  });
  $('.m_pop3 .o3').click(function() {
    changeBGtoWhite();
    $('.m_pop6').fadeIn();
  });
  $('.m_pop6 .x').click(function() {
    $(this).parent().fadeOut();
    changeBGtoBlue();
  });
  $('.m_pop3 .o4').click(function() {
    changeBGtoWhite();
    $('.m_pop7').fadeIn();
  });
  $('.m_pop7 .x').click(function() {
    $(this).parent().fadeOut();
    changeBGtoBlue();
  });
  $('.m_pop3 .o5').click(function() {
    changeBGtoWhite();
    $('.m_pop9').fadeIn();
  });
  $('.m_pop9 .x').click(function() {
    $(this).parent().fadeOut();
    changeBGtoBlue();
  });

  $('.sl2 .vec4 a').click(function() {
    $('.m_pop8').fadeIn();
    changeBGtoWhite();
  });

  $('.main-m .prev-move').click(function() {
    $('.sl._show').removeClass('_show').prev().addClass('_show');
    $(this).addClass('hide');
    $('.main-m .next-move').removeClass('hide');
  });
  $('.main-m .next-move').click(function() {
    $('.sl._show').removeClass('_show').next().addClass('_show');
    $(this).addClass('hide');
    $('.main-m .prev-move').removeClass('hide');
  });

});