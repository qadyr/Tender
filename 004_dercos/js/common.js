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
  });
  $('.m_pop1 .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl2 .vec2 a').click(function() {
    $('.m_pop2').fadeIn();
  });
  $('.m_pop2 .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl2 .vec3 a').click(function() {
    $('.m_pop3').fadeIn();
    $('.sl2 .ovec').removeClass('ac');
  });
  $('.m_pop3 .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.m_pop3 .o1').click(function() {
    $('.m_pop4').fadeIn();
  });
  $('.m_pop4 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.m_pop3 .o2').click(function() {
    $('.m_pop5').fadeIn();
  });
  $('.m_pop5 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.m_pop3 .o3').click(function() {
    $('.m_pop6').fadeIn();
  });
  $('.m_pop6 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.m_pop3 .o4').click(function() {
    $('.m_pop7').fadeIn();
  });
  $('.m_pop7 .x').click(function() {
    $(this).parent().fadeOut();
  });
  $('.m_pop3 .o5').click(function() {
    $('.m_pop9').fadeIn();
  });
  $('.m_pop9 .x').click(function() {
    $(this).parent().fadeOut();
  });

  $('.sl2 .vec4 a').click(function() {
    // $('.m_pop8').fadeIn();
    alert('Есть вопросы по этому попапу!');
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