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
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJvbiIsInNsaWRlVG9nZ2xlIiwianNJdGVtQ29udGVudCIsImpzSXRlbUxpc3QiLCJqc1Nob3dUYXJyaWZMaXN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibmV4dCIsImhhc0NsYXNzIiwic2xpZGVVcCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJzbGlkZURvd24iXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUUsWUFBWTtBQUNaOzs7QUFHQUEsSUFBRSxNQUFGLEVBQVVDLFVBQVYsQ0FBcUI7QUFDbkJDLGVBQVcsRUFEUTtBQUVuQkMsbUJBQWUsSUFGSTtBQUduQkMsY0FBVSxFQUhTO0FBSW5CQyxvQkFBZ0IsQ0FKRztBQUtuQkMsZ0JBQVksQ0FMTztBQU1uQkMsb0JBQWdCLENBTkc7QUFPbkJDLHVCQUFtQixFQVBBO0FBUW5CQyxxQkFBaUIsQ0FSRTtBQVNuQkMscUJBQWlCLElBVEU7QUFVbkJDLGlCQUFhLEVBVk07QUFXbkJDLHFCQUFpQixJQVhFO0FBWW5CQyxxQkFBaUI7QUFaRSxHQUFyQjs7QUFlQTs7QUFFQWIsSUFBRSxjQUFGLEVBQWtCYyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFVO0FBQ3RDZCxNQUFFLGlCQUFGLEVBQXFCZSxXQUFyQjtBQUNELEdBRkQ7O0FBSUE7O0FBRUEsTUFBSUMsZ0JBQWdCaEIsRUFBRSwwQkFBRixDQUFwQjtBQUNBLE1BQUlpQixhQUFhakIsRUFBRSx1QkFBRixDQUFqQjtBQUNBLE1BQUlrQixtQkFBbUJsQixFQUFFLG1CQUFGLENBQXZCOztBQUVBa0IsbUJBQWlCSixFQUFqQixDQUFvQixPQUFwQixFQUE2QixVQUFTSyxDQUFULEVBQVc7QUFDdENBLE1BQUVDLGNBQUY7O0FBRUEsUUFBR3BCLEVBQUUsSUFBRixFQUFRcUIsSUFBUixHQUFlQyxRQUFmLENBQXdCLFFBQXhCLENBQUgsRUFBcUM7QUFDbEN0QixRQUFFLElBQUYsRUFBUXFCLElBQVIsR0FBZUUsT0FBZixDQUF1QixNQUF2QixFQUErQkMsV0FBL0IsQ0FBMkMsUUFBM0M7QUFDQU4sdUJBQWlCTSxXQUFqQixDQUE2QixRQUE3QjtBQUNGLEtBSEQsTUFHSztBQUNGeEIsUUFBRSxJQUFGLEVBQVF5QixRQUFSLENBQWlCLFFBQWpCO0FBQ0F6QixRQUFFLElBQUYsRUFBUXFCLElBQVIsR0FBZUssU0FBZixDQUF5QixNQUF6QixFQUFpQ0QsUUFBakMsQ0FBMEMsUUFBMUM7QUFDRjtBQUNGLEdBVkQ7QUFhRCxDQTVDRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgLypcclxuICAgICAgaHR0cHM6Ly93d3cuanF1ZXJ5c2NyaXB0Lm5ldC9hbmltYXRpb24vU21vb3RoLU1vdXNlLVdoZWVsLVNjcm9sbGluZy1QbHVnaW4tV2l0aC1qUXVlcnktZWFzZVNjcm9sbC5odG1sXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgJChcImh0bWxcIikuZWFzZVNjcm9sbCh7XHJcbiAgICBmcmFtZVJhdGU6IDYwLFxyXG4gICAgYW5pbWF0aW9uVGltZTogMTAwMCxcclxuICAgIHN0ZXBTaXplOiA5MCxcclxuICAgIHB1bHNlQWxnb3JpdGhtOiAxLFxyXG4gICAgcHVsc2VTY2FsZTogOCxcclxuICAgIHB1bHNlTm9ybWFsaXplOiAxLFxyXG4gICAgYWNjZWxlcmF0aW9uRGVsdGE6IDIwLFxyXG4gICAgYWNjZWxlcmF0aW9uTWF4OiAxLFxyXG4gICAga2V5Ym9hcmRTdXBwb3J0OiB0cnVlLFxyXG4gICAgYXJyb3dTY3JvbGw6IDUwLFxyXG4gICAgdG91Y2hwYWRTdXBwb3J0OiB0cnVlLFxyXG4gICAgZml4ZWRCYWNrZ3JvdW5kOiB0cnVlXHJcbiAgfSk7XHJcblxyXG4gIC8qdG9nZ2xlIGhlYWRlci1tZW51XHJcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki8gXHJcbiAgJCgnI2pzLW1lbnUtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICQoJyNqcy1oZWFkZXItbWVudScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgfSk7XHJcblxyXG4gIC8qc2hvdyB0YXJyaWYgbGlzdFxyXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIFxyXG4gIHZhciBqc0l0ZW1Db250ZW50ID0gJCgnI2pzLXRhcnJpZl9faXRlbS1jb250ZW50Jyk7XHJcbiAgdmFyIGpzSXRlbUxpc3QgPSAkKCcjanMtdGFycmlmX19pdGVtLWxpc3QnKTtcclxuICB2YXIganNTaG93VGFycmlmTGlzdCA9ICQoJy5zaG93LXRhcnJpZi1saXN0Jyk7XHJcblxyXG4gIGpzU2hvd1RhcnJpZkxpc3Qub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBcclxuICAgIGlmKCQodGhpcykubmV4dCgpLmhhc0NsYXNzKCdhY3RpdmUnKSl7XHJcbiAgICAgICAkKHRoaXMpLm5leHQoKS5zbGlkZVVwKCdmYXN0JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAganNTaG93VGFycmlmTGlzdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgJCh0aGlzKS5uZXh0KCkuc2xpZGVEb3duKCdzbG93JykuYWRkQ2xhc3MoJ2FjdGl2ZScpOyAgICAgIFxyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBcclxufSk7Il19
