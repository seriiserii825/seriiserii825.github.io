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

    /* show header-menu
    ====================================================*/
    $('#js-show-menu').on('click', function () {
        $('#js-menu').slideToggle();
    });

    /* show categories in header
    ====================================================*/
    $('#js-show-categories').on('click', function () {
        $('#js-categories').slideToggle();
    });

    /* gost slider arrows hover
    ====================================================*/
    $('#js-gost-slider .fa-chevron-right, #js-gost-slider-wrap .block-right').on('mouseenter', function () {
        $('#js-gost-slider-wrap .block-right').css('opacity', '1');
    });

    $('#js-gost-slider .fa-chevron-right, #js-gost-slider-wrap .block-right').on('mouseleave', function () {
        $('#js-gost-slider-wrap .block-right').css('opacity', '0');
    });

    $('#js-gost-slider .fa-chevron-left, #js-gost-slider-wrap .block-left').on('mouseenter', function () {
        $('#js-gost-slider-wrap .block-left').css('opacity', '1');
    });

    $('#js-gost-slider .fa-chevron-left, #js-gost-slider-wrap .block-left').on('mouseleave', function () {
        $('#js-gost-slider-wrap .block-left').css('opacity', '0');
    });

    /* equal heightfor blocks in for-what
    ====================================================*/
    //$('#js-for-what .for-what__item').equalHeights();

    /* show sidebar category list
    ====================================================*/
    $('#js-sidebar__list .sidebar__list-item').on('click', function (e) {
        e.preventDefault();

        var sidebarListLink = 'sidebar__list-link';
        var sidebarInnerLink = 'sidebar__inner-list-link';

        //console.log(e.target.className);

        if (e.target.getAttribute('class') === sidebarListLink) {
            var innerList = $(this).find('.sidebar__inner-list');

            if (innerList.is(':visible')) {
                $(this).removeClass('active');
                innerList.slideUp();
            } else {
                $('#js-sidebar__list .sidebar__inner-list').slideUp();
                $('#js-sidebar__list .sidebar__list-item').removeClass('active');
                $(this).addClass('active');
                innerList.slideDown();
            }
        } else if (e.target.getAttribute('class') === sidebarInnerLink) {
            if ($(e.target).parent('li').hasClass('active')) {
                $(e.target).parent('li').removeClass('active');
            } else {
                $('#js-sidebar__list .sidebar__inner-list-item').removeClass('active');
                $(e.target).parent('li').addClass('active');
            }
        }
    });

    /* show modal
    ====================================================*/
    $('#js-show-modal').on('click', function () {
        $('#js-overlay').fadeIn('600');
        $('#js-modal').fadeIn(1000);
    });

    $('#js-close-modal, #js-overlay').on('click', function () {
        $('#js-overlay').fadeOut('600');
        $('#js-modal').fadeOut('200');
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImVhc2VTY3JvbGwiLCJmcmFtZVJhdGUiLCJhbmltYXRpb25UaW1lIiwic3RlcFNpemUiLCJwdWxzZUFsZ29yaXRobSIsInB1bHNlU2NhbGUiLCJwdWxzZU5vcm1hbGl6ZSIsImFjY2VsZXJhdGlvbkRlbHRhIiwiYWNjZWxlcmF0aW9uTWF4Iiwia2V5Ym9hcmRTdXBwb3J0IiwiYXJyb3dTY3JvbGwiLCJ0b3VjaHBhZFN1cHBvcnQiLCJmaXhlZEJhY2tncm91bmQiLCJvbiIsInNsaWRlVG9nZ2xlIiwiY3NzIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2lkZWJhckxpc3RMaW5rIiwic2lkZWJhcklubmVyTGluayIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImlubmVyTGlzdCIsImZpbmQiLCJpcyIsInJlbW92ZUNsYXNzIiwic2xpZGVVcCIsImFkZENsYXNzIiwic2xpZGVEb3duIiwicGFyZW50IiwiaGFzQ2xhc3MiLCJmYWRlSW4iLCJmYWRlT3V0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVU7QUFDUjs7O0FBR0FBLE1BQUUsTUFBRixFQUFVQyxVQUFWLENBQXFCO0FBQ2pCQyxtQkFBVyxFQURNO0FBRWpCQyx1QkFBZSxJQUZFO0FBR2pCQyxrQkFBVSxFQUhPO0FBSWpCQyx3QkFBZ0IsQ0FKQztBQUtqQkMsb0JBQVksQ0FMSztBQU1qQkMsd0JBQWdCLENBTkM7QUFPakJDLDJCQUFtQixFQVBGO0FBUWpCQyx5QkFBaUIsQ0FSQTtBQVNqQkMseUJBQWlCLElBVEE7QUFVakJDLHFCQUFhLEVBVkk7QUFXakJDLHlCQUFpQixJQVhBO0FBWWpCQyx5QkFBaUI7QUFaQSxLQUFyQjs7QUFlQTs7QUFFQWIsTUFBRSxlQUFGLEVBQW1CYyxFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFVO0FBQ3JDZCxVQUFFLFVBQUYsRUFBY2UsV0FBZDtBQUNILEtBRkQ7O0FBSUE7O0FBRUFmLE1BQUUscUJBQUYsRUFBeUJjLEVB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S0FIRDtBQUtILENBbkdEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XHJcbiAgICAvKlxyXG4gICAgICAgIGh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvYW5pbWF0aW9uL1Ntb290aC1Nb3VzZS1XaGVlbC1TY3JvbGxpbmctUGx1Z2luLVdpdGgtalF1ZXJ5LWVhc2VTY3JvbGwuaHRtbFxyXG4gICAgICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAkKFwiaHRtbFwiKS5lYXNlU2Nyb2xsKHtcclxuICAgICAgICBmcmFtZVJhdGU6IDYwLFxyXG4gICAgICAgIGFuaW1hdGlvblRpbWU6IDEwMDAsXHJcbiAgICAgICAgc3RlcFNpemU6IDkwLFxyXG4gICAgICAgIHB1bHNlQWxnb3JpdGhtOiAxLFxyXG4gICAgICAgIHB1bHNlU2NhbGU6IDgsXHJcbiAgICAgICAgcHVsc2VOb3JtYWxpemU6IDEsXHJcbiAgICAgICAgYWNjZWxlcmF0aW9uRGVsdGE6IDIwLFxyXG4gICAgICAgIGFjY2VsZXJhdGlvbk1heDogMSxcclxuICAgICAgICBrZXlib2FyZFN1cHBvcnQ6IHRydWUsXHJcbiAgICAgICAgYXJyb3dTY3JvbGw6IDUwLFxyXG4gICAgICAgIHRvdWNocGFkU3VwcG9ydDogdHJ1ZSxcclxuICAgICAgICBmaXhlZEJhY2tncm91bmQ6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIHNob3cgaGVhZGVyLW1lbnVcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgJCgnI2pzLXNob3ctbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2pzLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyogc2hvdyBjYXRlZ29yaWVzIGluIGhlYWRlclxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAkKCcjanMtc2hvdy1jYXRlZ29yaWVzJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjanMtY2F0ZWdvcmllcycpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBnb3N0IHNsaWRlciBhcnJvd3MgaG92ZXJcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgJChcclxuICAgICAgICAnI2pzLWdvc3Qtc2xpZGVyIC5mYS1jaGV2cm9uLXJpZ2h0LCAjanMtZ29zdC1zbGlkZXItd3JhcCAuYmxvY2stcmlnaHQnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2pzLWdvc3Qtc2xpZGVyLXdyYXAgLmJsb2NrLXJpZ2h0JykuY3NzKCdvcGFjaXR5JywgJzEnKTtcclxuICAgIH0pO1xyXG5cclxuICAgICQoJyNqcy1nb3N0LXNsaWRlciAuZmEtY2hldnJvbi1yaWdodCwgI2pzLWdvc3Qtc2xpZGVyLXdyYXAgLmJsb2NrLXJpZ2h0Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJyNqcy1nb3N0LXNsaWRlci13cmFwIC5ibG9jay1yaWdodCcpLmNzcygnb3BhY2l0eScsICcwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjanMtZ29zdC1zbGlkZXIgLmZhLWNoZXZyb24tbGVmdCwgI2pzLWdvc3Qtc2xpZGVyLXdyYXAgLmJsb2NrLWxlZnQnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2pzLWdvc3Qtc2xpZGVyLXdyYXAgLmJsb2NrLWxlZnQnKS5jc3MoJ29wYWNpdHknLCAnMScpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2pzLWdvc3Qtc2xpZGVyIC5mYS1jaGV2cm9uLWxlZnQsICNqcy1nb3N0LXNsaWRlci13cmFwIC5ibG9jay1sZWZ0Jykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJyNqcy1nb3N0LXNsaWRlci13cmFwIC5ibG9jay1sZWZ0JykuY3NzKCdvcGFjaXR5JywgJzAnKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIGVxdWFsIGhlaWdodGZvciBibG9ja3MgaW4gZm9yLXdoYXRcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgLy8kKCcjanMtZm9yLXdoYXQgLmZvci13aGF0X19pdGVtJykuZXF1YWxIZWlnaHRzKCk7XHJcblxyXG4gICAgLyogc2hvdyBzaWRlYmFyIGNhdGVnb3J5IGxpc3RcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgJCgnI2pzLXNpZGViYXJfX2xpc3QgLnNpZGViYXJfX2xpc3QtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICB2YXIgc2lkZWJhckxpc3RMaW5rID0gJ3NpZGViYXJfX2xpc3QtbGluayc7XHJcbiAgICAgICAgdmFyIHNpZGViYXJJbm5lckxpbmsgPSAnc2lkZWJhcl9faW5uZXItbGlzdC1saW5rJztcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhlLnRhcmdldC5jbGFzc05hbWUpO1xyXG5cclxuICAgICAgICBpZihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgPT09IHNpZGViYXJMaXN0TGluayl7XHJcbiAgICAgICAgICAgIHZhciBpbm5lckxpc3QgPSAkKHRoaXMpLmZpbmQoJy5zaWRlYmFyX19pbm5lci1saXN0Jyk7XHJcblxyXG4gICAgICAgICAgICBpZihpbm5lckxpc3QuaXMoJzp2aXNpYmxlJykpe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBpbm5lckxpc3Quc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICQoJyNqcy1zaWRlYmFyX19saXN0IC5zaWRlYmFyX19pbm5lci1saXN0Jykuc2xpZGVVcCgpO1xyXG4gICAgICAgICAgICAgICAgJCgnI2pzLXNpZGViYXJfX2xpc3QgLnNpZGViYXJfX2xpc3QtaXRlbScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgaW5uZXJMaXN0LnNsaWRlRG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdjbGFzcycpID09PSBzaWRlYmFySW5uZXJMaW5rKXtcclxuICAgICAgICAgICAgaWYoJChlLnRhcmdldCkucGFyZW50KCdsaScpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCdsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAkKCcjanMtc2lkZWJhcl9fbGlzdCAuc2lkZWJhcl9faW5uZXItbGlzdC1pdGVtJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgJChlLnRhcmdldCkucGFyZW50KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBzaG93IG1vZGFsXHJcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICQoJyNqcy1zaG93LW1vZGFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcjanMtb3ZlcmxheScpLmZhZGVJbignNjAwJyk7XHJcbiAgICAgICAgJCgnI2pzLW1vZGFsJykuZmFkZUluKDEwMDApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgJCgnI2pzLWNsb3NlLW1vZGFsLCAjanMtb3ZlcmxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2pzLW92ZXJsYXknKS5mYWRlT3V0KCc2MDAnKTtcclxuICAgICAgICAkKCcjanMtbW9kYWwnKS5mYWRlT3V0KCcyMDAnKTtcclxuICAgIH0pO1xyXG5cclxufSk7Il19
