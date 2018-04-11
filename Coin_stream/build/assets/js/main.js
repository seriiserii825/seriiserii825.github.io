$(function () {

  /* clock in header
  ====================================================*/
  var now = moment();
  var clock = document.getElementById("js-clock-content");

  moment.locale('en-gb');

  window.setInterval(function(){
    clock.innerHTML = moment().tz("Europe/London").format('HH:mm:ss');
  }, 1000);

  /* animations
  ====================================================*/
  var wow = new WOW(
      {
        offset:       80,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
      }
  );
  wow.init();

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

  /*toggle header-menu
  =======================================*/
  $('#js-menu-btn').on('click', function(){
    $('#js-header-menu').slideToggle();
  });

  /*show tarrif list
  =======================================*/
  var jsItem = $('#js-tarrif .tarrif__item');

  jsItem.on('mouseenter', function(){
    $(this).find('.tarrif__item-list').slideDown(600);
  });

  jsItem.on('mouseleave', function(){
    $(this).find('.tarrif__item-list').slideUp(300);
  });

  /*clients__slider
  =======================================*/
  $('#js-clients__list').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

});