"use strict";

$(document).ready(function () {

  var hideEl = function() {
    $('.sl4').removeClass('_show');
    $('.main-m').addClass('hide');
  };
  var showEl = function() {
    $('.sl4').addClass('_show');
    $('.main-m').removeClass('hide');
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

  $('.main-m .next-move').click(function() {
    hideEl();
    $('.mp4').fadeIn();
  });

  $('.mp4 .x').click(function() {
    showEl();
    $('.mp4').fadeOut();
  });

});