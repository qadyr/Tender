"use strict";

$(document).ready(function () {

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

  $('.sl1 .o1').click(function() {
    $('.mp1').fadeIn();
  });
  $('.mp1 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.mp1 .o').click(function() {
    $('.mp1d').fadeIn();
  });
  $('.mp1d .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl1 .o2').click(function() {
    $('.mp2').fadeIn();
  });
  $('.mp2 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.mp2 .o').click(function() {
    $('.mp2d').fadeIn();
  });
  $('.mp2d .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl1 .o3').click(function() {
    $('.mp3').fadeIn();
  });
  $('.mp3 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.mp3 .o').click(function() {
    $('.mp3d').fadeIn();
  });
  $('.mp3d .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl1 .o4').click(function() {
    $('.mp4').fadeIn();
  });
  $('.mp4 .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl1 .o5').click(function() {
    $('.mp5').fadeIn();
  });
  $('.mp5 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.mp5 .o').click(function() {
    $('.mp5d').fadeIn();
  });
  $('.mp5d .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl1 .o6').click(function() {
    $('.mp6').fadeIn();
  });
  $('.mp6 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.mp6 .o').click(function() {
    $('.mp6d').fadeIn();
  });
  $('.mp6d .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.main-m .prev-move').click(function() {
    $('.sl._show').removeClass('_show').prev().addClass('_show');
  });
  $('.main-m .next-move').click(function() {
    $('.sl._show').removeClass('_show').next().addClass('_show');
  });

});