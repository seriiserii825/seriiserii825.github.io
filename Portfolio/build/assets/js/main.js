$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
      $("html").easeScroll({
        frameRate: 60,
        animationTime: 1000,
        stepSize: 90,
        pulseAlgorithm: 1,
        pulseScale: 8,
        pulseNormalize: 1,
        accelerationDelta: 20,
        accelerationMax: 1,
        keyboardSupport: true,
        arrowScroll: 50,
        touchpadSupport: true,
        fixedBackground: true
      });

  /* slider
  ====================================================*/
  $('#slider').slick({
    appendArrows: $('.buttons-wrap'),
    prevArrow: '<button class="btn btn-left" id="js-btn-left"><i class="icon icon-btn-bg"></i><span>prev</span></button>',
    nextArrow: '<button class="btn btn-right" id="js-btn-right"><span class="icon icon-btn--right-bg"></span><span>next</span></button>',
    asNavFor: '#slider-small',
  });

  $('#slider-small').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '#slider',
    centerMode: true,
    focusOnSelect: true,
    infinite: true
  });

  $('.slider-small__item').on('click', function (e) {
    e.preventDefault();
  });

  /* up
  ====================================================*/
  $('.btn-up').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500);
  });

  let documentHeight = $(document).height();

  $(document).on('scroll', function () {

    if ($(document).scrollTop() > documentHeight / 3) {
      $('.btn-up').addClass('show');
    } else {
      $('.btn-up').removeClass('show');
    }
  });

  /* smooth scroll to site blocks
  ====================================================*/
  $('.main-menu__link').on('click', function (e) {
    e.preventDefault();

    let id = $(this).attr('href');

    let idOffset = $(id).offset().top;

    $('html, body').animate({
      scrollTop: idOffset - 140
    }, 1500);

  });

});