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

  $('.ellipse-1 .dot-1').click(function() {
    $('.sl1 .mp1').addClass('ac');
  });
  $('.sl1 .mp1 .back').click(function() {
    $('.sl1 .mp1').removeClass('ac');
  });
  $('.ellipse-1 .dot-2').click(function() {
    $('.sl1 .mp2').addClass('ac');
  });
  $('.sl1 .mp2 .back').click(function() {
    $('.sl1 .mp2').removeClass('ac');
  });
  $('.ellipse-1 .dot-3').click(function() {
    $('.sl1 .mp3').addClass('ac');
  });
  $('.sl1 .mp3 .back').click(function() {
    $('.sl1 .mp3').removeClass('ac');
  });
  $('.ellipse-1 .dot-4').click(function() {
    $('.sl1 .mp4').addClass('ac');
  });
  $('.sl1 .mp4 .back').click(function() {
    $('.sl1 .mp4').removeClass('ac');
  });
  $('.ellipse-1 .dot-5').click(function() {
    $('.sl1 .mp5').addClass('ac');
  });
  $('.sl1 .mp5 .back').click(function() {
    $('.sl1 .mp5').removeClass('ac');
  });

  var X      = 137,
      Y      = 290,
      R      = 155,
      ANGLE  = 0,
      ANGLE2 = 1.2,
      ANGLE3 = 2.4,
      ANGLE4 = 3.6,
      ANGLE5 = 4.8;

  setInterval(function() {

    let q1 = Y + 2 * R * Math.cos(ANGLE);
    let w1 = X + R * Math.sin(ANGLE);

    let e1 = Y + 2 * R * Math.cos(ANGLE2);
    let r1 = X + R * Math.sin(ANGLE2);

    let t1 = Y + 2 * R * Math.cos(ANGLE3);
    let y1 = X + R * Math.sin(ANGLE3);

    let d1 = Y + 2 * R * Math.cos(ANGLE4);
    let f1 = X + R * Math.sin(ANGLE4);

    let g1 = Y + 2 * R * Math.cos(ANGLE5);
    let h1 = X + R * Math.sin(ANGLE5);

    $(".ellipse-1 .dot-1").css({left: q1 + "px", top: w1 + "px"});
    $(".ellipse-1 .dot-2").css({left: e1 + "px", top: r1 + "px"});
    $(".ellipse-1 .dot-3").css({left: t1 + "px", top: y1 + "px"});
    $(".ellipse-1 .dot-4").css({left: d1 + "px", top: f1 + "px"});
    $(".ellipse-1 .dot-5").css({left: g1 + "px", top: h1 + "px"});

    ANGLE += 0.02;
    ANGLE2 += 0.02;
    ANGLE3 += 0.02;
    ANGLE4 += 0.02;
    ANGLE5 += 0.02;

  }, 75);

});