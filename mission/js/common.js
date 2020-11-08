"use strict";

$(window).load(function () {

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

  $('.c1').click(function() {
    $('.sl1 .mp1').addClass('ac');
  });
  $('.sl1 .mp1 .back').click(function() {
    $('.sl1 .mp1').removeClass('ac');
  });
  $('.c2').click(function() {
    $('.sl1 .mp2').addClass('ac');
  });
  $('.sl1 .mp2 .back').click(function() {
    $('.sl1 .mp2').removeClass('ac');
  });
  $('.c3').click(function() {
    $('.sl1 .mp3').addClass('ac');
  });
  $('.sl1 .mp3 .back').click(function() {
    $('.sl1 .mp3').removeClass('ac');
  });
  $('.c4').click(function() {
    $('.sl1 .mp4').addClass('ac');
  });
  $('.sl1 .mp4 .back').click(function() {
    $('.sl1 .mp4').removeClass('ac');
  });
  $('.c5').click(function() {
    $('.sl1 .mp5').addClass('ac');
  });
  $('.sl1 .mp5 .back').click(function() {
    $('.sl1 .mp5').removeClass('ac');
  });

});