"use strict";

$(document).ready(function () {

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

  $('.sl1 .o1').click(function() {
    $('.mp1').fadeIn();
    changeToGray();
    hideEl();
  });
  $('.mp1 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
  });
  $('.mp1 .o').click(function() {
    $('.mp1d').fadeIn();
    $(this).parent().fadeOut();
  });
  $('.mp1d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp1').fadeIn();
  });

  $('.sl1 .o2').click(function() {
    $('.mp2').fadeIn();
    changeToGray();
    hideEl();
  });
  $('.mp2 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
  });
  $('.mp2 .o').click(function() {
    $('.mp2d').fadeIn();
    $(this).parent().fadeOut();
  });
  $('.mp2d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp2').fadeIn();
  });

  $('.sl1 .o3').click(function() {
    $('.mp3').fadeIn();
    changeToGray();
    hideEl();
  });
  $('.mp3 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
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
  });
  $('.mp4 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
  });

  $('.sl1 .o5').click(function() {
    $('.mp5').fadeIn();
    changeToGray();
    hideEl();
  });
  $('.mp5 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
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
  });
  $('.mp6 .x').click(function() {
    $(this).parent().fadeOut();
    changeToLightBlue();
    showEl();
  });
  $('.mp6 .o').click(function() {
    $('.mp6d').fadeIn();
    $(this).parent().fadeOut();
  });
  $('.mp6d .x').click(function() {
    $(this).parent().fadeOut();
    $('.mp6').fadeIn();
  });

});