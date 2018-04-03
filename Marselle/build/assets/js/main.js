'use strict';

$(function () {
  /*
      https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
      ===========================*/
  $("html").easeScroll({
    frameRate: 60,
    animationTime: 1000,
    stepSize: 190,
    pulseAlgorithm: 1,
    pulseScale: 8,
    pulseNormalize: 1,
    accelerationDelta: 20,
    accelerationMax: 1,
    keyboardSupport: true,
    arrowScroll: 50,
    touchpadSupport: true,
    fixedBackground: false
  });

  /*colorized input in filters-block
  =======================================*/
  var filterBlockInput = $('#js-filters-block input');

  filterBlockInput.on('click', function () {
    if ($(this).prop('checked')) {
      $(this).parent('div').css('borderBottomColor', 'green');
    } else {
      $(this).parent('div').css('borderBottomColor', '');
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJmaWx0ZXJCbG9ja0lucHV0Iiwib24iLCJwcm9wIiwicGFyZW50IiwiY3NzIl0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVk7QUFDWjs7O0FBR0lBLElBQUUsTUFBRixFQUFVQyxVQUFWLENBQXFCO0FBQ25CQyxlQUFXLEVBRFE7QUFFbkJDLG1CQUFlLElBRkk7QUFHbkJDLGNBQVUsR0FIUztBQUluQkMsb0JBQWdCLENBSkc7QUFLbkJDLGdCQUFZLENBTE87QUFNbkJDLG9CQUFnQixDQU5HO0FBT25CQyx1QkFBbUIsRUFQQTtBQVFuQkMscUJBQWlCLENBUkU7QUFTbkJDLHFCQUFpQixJQVRFO0FBVW5CQyxpQkFBYSxFQVZNO0FBV25CQyxxQkFBaUIsSUFYRTtBQVluQkMscUJBQWlCO0FBWkUsR0FBckI7O0FBZUY7O0FBRUEsTUFBSUMsbUJBQW1CZCxFQUFFLHlCQUFGLENBQXZCOztBQUVBYyxtQkFBaUJDLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVU7QUFDckMsUUFBR2YsRUFBRSxJQUFGLEVBQVFnQixJQUFSLENBQWEsU0FBYixDQUFILEVBQTJCO0FBQ3hCaEIsUUFBRSxJQUFGLEVBQVFpQixNQUFSLENBQWUsS0FBZixFQUFzQkMsR0FBdEIsQ0FBMEIsbUJBQTFCLEVBQStDLE9BQS9DO0FBQ0YsS0FGRCxNQUVLO0FBQ0hsQixRQUFFLElBQUYsRUFBUWlCLE1BQVIsQ0FBZSxLQUFmLEVBQXNCQyxHQUF0QixDQUEwQixtQkFBMUIsRUFBK0MsRUFBL0M7QUFDRDtBQUNGLEdBTkQ7QUFRSCxDQS9CRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcbiAgLypcclxuICAgICAgaHR0cHM6Ly93d3cuanF1ZXJ5c2NyaXB0Lm5ldC9hbmltYXRpb24vU21vb3RoLU1vdXNlLVdoZWVsLVNjcm9sbGluZy1QbHVnaW4tV2l0aC1qUXVlcnktZWFzZVNjcm9sbC5odG1sXHJcbiAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAgICQoXCJodG1sXCIpLmVhc2VTY3JvbGwoe1xyXG4gICAgICAgIGZyYW1lUmF0ZTogNjAsXHJcbiAgICAgICAgYW5pbWF0aW9uVGltZTogMTAwMCxcclxuICAgICAgICBzdGVwU2l6ZTogMTkwLFxyXG4gICAgICAgIHB1bHNlQWxnb3JpdGhtOiAxLFxyXG4gICAgICAgIHB1bHNlU2NhbGU6IDgsXHJcbiAgICAgICAgcHVsc2VOb3JtYWxpemU6IDEsXHJcbiAgICAgICAgYWNjZWxlcmF0aW9uRGVsdGE6IDIwLFxyXG4gICAgICAgIGFjY2VsZXJhdGlvbk1heDogMSxcclxuICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXHJcbiAgICAgICAgYXJyb3dTY3JvbGw6IDUwLFxyXG4gICAgICAgIHRvdWNocGFkU3VwcG9ydDogdHJ1ZSxcclxuICAgICAgICBmaXhlZEJhY2tncm91bmQ6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIC8qY29sb3JpemVkIGlucHV0IGluIGZpbHRlcnMtYmxvY2tcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovIFxyXG4gICAgdmFyIGZpbHRlckJsb2NrSW5wdXQgPSAkKCcjanMtZmlsdGVycy1ibG9jayBpbnB1dCcpO1xyXG5cclxuICAgIGZpbHRlckJsb2NrSW5wdXQub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgaWYoJCh0aGlzKS5wcm9wKCdjaGVja2VkJykpe1xyXG4gICAgICAgICAkKHRoaXMpLnBhcmVudCgnZGl2JykuY3NzKCdib3JkZXJCb3R0b21Db2xvcicsICdncmVlbicpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAkKHRoaXMpLnBhcmVudCgnZGl2JykuY3NzKCdib3JkZXJCb3R0b21Db2xvcicsICcnKVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn0pOyJdfQ==
