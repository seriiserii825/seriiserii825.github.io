'use strict';

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

  /*toggle header-menu
  =======================================*/
  $('#js-menu-btn').on('click', function () {
    $('#js-header-menu').slideToggle();
  });

  /*show tarrif list
  =======================================*/
  var jsItemContent = $('#js-tarrif__item-content');
  var jsItemList = $('#js-tarrif__item-list');
  var jsShowTarrifList = $('.show-tarrif-list');

  jsShowTarrifList.on('click', function (e) {
    e.preventDefault();

    if ($(this).next().hasClass('active')) {
      $(this).next().slideUp('fast').removeClass('active');
      jsShowTarrifList.removeClass('active');
    } else {
      $(this).addClass('active');
      $(this).next().slideDown('slow').addClass('active');
    }
  });

  /*clients__slider
  =======================================*/
  $('#js-clients__list').slick({
    slidesToShow: 4,
    slidesToScroll: 3,
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    }]
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJvbiIsInNsaWRlVG9nZ2xlIiwianNJdGVtQ29udGVudCIsImpzSXRlbUxpc3QiLCJqc1Nob3dUYXJyaWZMaXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV4dCIsImhhc0NsYXNzIiwic2xpZGVVcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iLCJzbGljayIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImluZmluaXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVk7QUFDWjs7O0FBR0FBLElBQUUsTUFBRixFQUFVQyxVQUFWLENBQXFCO0FBQ25CQyxlQUFXLEVBRFE7QUFFbkJDLG1CQUFlLElBRkk7QUFHbkJDLGNBQVUsRUFIUztBQUluQkMsb0JBQWdCLENBSkc7QUFLbkJDLGdCQUFZLENBTE87QUFNbkJDLG9CQUFnQixDQU5HO0FBT25CQyx1QkFBbUIsRUFQQTtBQVFuQkMscUJBQWlCLENBUkU7QUFTbkJDLHFCQUFpQixJQVRFO0FBVW5CQyxpQkFBYSxFQVZNO0FBV25CQyxxQkFBaUIsSUFYRTtBQVluQkMscUJBQWlCO0FBWkUsR0FBckI7O0FBZUE7O0FBRUFiLElBQUUsY0FBRixFQUFrQmMsRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUN0Q2QsTUFBRSxpQkFBRixFQUFxQmUsV0FBckI7QUFDRCxHQUZEOztBQUlBOztBQUVBLE1BQUlDLGdCQUFnQmhCLEVBQUUsMEJBQUYsQ0FBcEI7QUFDQSxNQUFJaUIsYUFBYWpCLEVBQUUsdUJBQUYsQ0FBakI7QUFDQSxNQUFJa0IsbUJBQW1CbEIsRUFBRSxtQkFBRixDQUF2Qjs7QUFFQWtCLG1CQUFpQkosRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBU0ssQ0FBVCxFQUFXO0FBQ3RDQSxNQUFFQyxjQUFGOztBQUVBLFFBQUdwQixFQUFFLElBQUYsRUFBUXFCLElBQVIsR0FBZUMsUUFBZixDQUF3QixRQUF4QixDQUFILEVBQXFDO0FBQ2xDdEIsUUFBRSxJQUFGLEVBQVFxQixJQUFSLEdBQWVFLE9BQWYsQ0FBdUIsTUFBdkIsRUFBK0JDLFdBQS9CLENBQTJDLFFBQTNDO0FBQ0FOLHVCQUFpQk0sV0FBakIsQ0FBNkIsUUFBN0I7QUFDRixLQUhELE1BR0s7QUFDRnhCLFFBQUUsSUFBRixFQUFReUIsUUFBUixDQUFpQixRQUFqQjtBQUNBekIsUUFBRSxJQUFGLEVBQVFxQixJQUFSLEdBQWVLLFNBQWYsQ0FBeUIsTUFBekIsRUFBaUNELFFBQWpDLENBQTBDLFFBQTFDO0FBQ0Y7QUFDRixHQVZEOztBQVlBOztBQUVBekIsSUFBRSxtQkFBRixFQUF1QjJCLEtBQXZCLENBQTZCO0FBQzNCQyxrQkFBYyxDQURhO0FBRTNCQyxvQkFBZ0IsQ0FGVztBQUczQkMsZ0JBQVksQ0FDWjtBQUNFQyxrQkFBWSxJQURkO0FBRUVDLGdCQUFVO0FBQ1JKLHNCQUFjLENBRE47QUFFUkMsd0JBQWdCLENBRlI7QUFHUkksa0JBQVU7QUFIRjtBQUZaLEtBRFksRUFTWjtBQUNFRixrQkFBWSxHQURkO0FBRUVDLGdCQUFVO0FBQ1JKLHNCQUFjLENBRE47QUFFUkMsd0JBQWdCO0FBRlI7QUFGWixLQVRZLEVBZ0JaO0FBQ0VFLGtCQUFZLEdBRGQ7QUFFRUMsZ0JBQVU7QUFDUkosc0JBQWMsQ0FETjtBQUVSQyx3QkFBZ0I7QUFGUjtBQUtaO0FBQ0E7QUFDQTtBQVRBLEtBaEJZO0FBSGUsR0FBN0I7QUFpQ0QsQ0E5RUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gIC8qXHJcbiAgICAgIGh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvYW5pbWF0aW9uL1Ntb290aC1Nb3VzZS1XaGVlbC1TY3JvbGxpbmctUGx1Z2luLVdpdGgtalF1ZXJ5LWVhc2VTY3JvbGwuaHRtbFxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICQoXCJodG1sXCIpLmVhc2VTY3JvbGwoe1xyXG4gICAgZnJhbWVSYXRlOiA2MCxcclxuICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXHJcbiAgICBzdGVwU2l6ZTogOTAsXHJcbiAgICBwdWxzZUFsZ29yaXRobTogMSxcclxuICAgIHB1bHNlU2NhbGU6IDgsXHJcbiAgICBwdWxzZU5vcm1hbGl6ZTogMSxcclxuICAgIGFjY2VsZXJhdGlvbkRlbHRhOiAyMCxcclxuICAgIGFjY2VsZXJhdGlvbk1heDogMSxcclxuICAgIGtleWJvYXJkU3VwcG9ydDogdHJ1ZSxcclxuICAgIGFycm93U2Nyb2xsOiA1MCxcclxuICAgIHRvdWNocGFkU3VwcG9ydDogdHJ1ZSxcclxuICAgIGZpeGVkQmFja2dyb3VuZDogdHJ1ZVxyXG4gIH0pO1xyXG5cclxuICAvKnRvZ2dsZSBoZWFkZXItbWVudVxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIFxyXG4gICQoJyNqcy1tZW51LWJ0bicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcjanMtaGVhZGVyLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gIH0pO1xyXG5cclxuICAvKnNob3cgdGFycmlmIGxpc3RcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qLyBcclxuICB2YXIganNJdGVtQ29udGVudCA9ICQoJyNqcy10YXJyaWZfX2l0ZW0tY29udGVudCcpO1xyXG4gIHZhciBqc0l0ZW1MaXN0ID0gJCgnI2pzLXRhcnJpZl9faXRlbS1saXN0Jyk7XHJcbiAgdmFyIGpzU2hvd1RhcnJpZkxpc3QgPSAkKCcuc2hvdy10YXJyaWYtbGlzdCcpO1xyXG5cclxuICBqc1Nob3dUYXJyaWZMaXN0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgXHJcbiAgICBpZigkKHRoaXMpLm5leHQoKS5oYXNDbGFzcygnYWN0aXZlJykpe1xyXG4gICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVVcCgnZmFzdCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgIGpzU2hvd1RhcnJpZkxpc3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICQodGhpcykubmV4dCgpLnNsaWRlRG93bignc2xvdycpLmFkZENsYXNzKCdhY3RpdmUnKTsgICAgICBcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLypjbGllbnRzX19zbGlkZXJcclxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qLyBcclxuICAkKCcjanMtY2xpZW50c19fbGlzdCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA5OTIsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gWW91IGNhbiB1bnNsaWNrIGF0IGEgZ2l2ZW4gYnJlYWtwb2ludCBub3cgYnkgYWRkaW5nOlxyXG4gICAgLy8gc2V0dGluZ3M6IFwidW5zbGlja1wiXHJcbiAgICAvLyBpbnN0ZWFkIG9mIGEgc2V0dGluZ3Mgb2JqZWN0XHJcbiAgXVxyXG4gIH0pO1xyXG5cclxuICBcclxufSk7Il19
