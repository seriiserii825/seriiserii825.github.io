'use strict';

$(function () {

    /* show header-top-menu
      ====================================================*/
    $('.close-menu').on('click', function () {
        var menu = $(this).next('.menu');
        menu.slideToggle();
    });

    /* close modal
    ====================================================*/
    $('.show-modal').on('click', function () {
        $('#js-overlay').fadeIn('400');
        $('#js-modal').fadeIn('800');
    });

    $('#js-icon-close, #js-overlay').on('click', function () {
        $('#js-overlay').fadeOut('200');
        $('#js-modal').fadeOut('600');
    });

    /* show footer contacts
    ====================================================*/
    $('.footer-bar').on('click', function () {
        var $this = $(this);
        var target = $this.data('footer-content');
        var content = '#' + target;

        if ($(content).is(':visible')) {
            $this.removeClass('active');
            $(content).slideUp();
        } else {
            $this.addClass('active');
            $(content).slideDown();
        }
    });

    /* sticky header
    ====================================================*/

    $(window).scroll(function () {

        if ($(this).scrollTop() > $(document).height() / 4) {

            $('.header-main.not-index').addClass("sticky");
        } else {
            $('.header-main.not-index').removeClass("sticky");
        }
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm9uIiwibWVudSIsIm5leHQiLCJzbGlkZVRvZ2dsZSIsImZhZGVJbiIsImZhZGVPdXQiLCIkdGhpcyIsInRhcmdldCIsImRhdGEiLCJjb250ZW50IiwiaXMiLCJyZW1vdmVDbGFzcyIsInNsaWRlVXAiLCJhZGRDbGFzcyIsInNsaWRlRG93biIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImRvY3VtZW50IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFLFlBQVk7O0FBRVY7O0FBRUFBLE1BQUUsYUFBRixFQUFpQkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVTtBQUNuQyxZQUFJQyxPQUFPRixFQUFFLElBQUYsRUFBUUcsSUFBUixDQUFhLE9BQWIsQ0FBWDtBQUNBRCxhQUFLRSxXQUFMO0FBQ0gsS0FIRDs7QUFLQTs7QUFFQUosTUFBRSxhQUFGLEVBQWlCQyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFVO0FBQ25DRCxVQUFFLGFBQUYsRUFBaUJLLE1BQWpCLENBQXdCLEtBQXhCO0FBQ0FMLFVBQUUsV0FBRixFQUFlSyxNQUFmLENBQXNCLEtBQXRCO0FBQ0gsS0FIRDs7QUFLQUwsTUFBRSw2QkFBRixFQUFpQ0MsRUFBakMsQ0FBb0MsT0FBcEMsRUFBNkMsWUFBVTtBQUNuREQsVUFBRSxhQUFGLEVBQWlCTSxPQUFqQixDQUF5QixLQUF6QjtBQUNBTixVQUFFLFdBQUYsRUFBZU0sT0FBZixDQUF1QixLQUF2QjtBQUNILEtBSEQ7O0FBS0E7O0FBRUFOLE1BQUUsYUFBRixFQUFpQkMsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBVTtBQUNuQyxZQUFJTSxRQUFRUCxFQUFFLElBQUYsQ0FBWjtBQUNBLFlBQUlRLFNBQVNELE1BQU1FLElBQU4sQ0FBVyxnQkFBWCxDQUFiO0FBQ0EsWUFBSUMsVUFBVSxNQUFNRixNQUFwQjs7QUFFQSxZQUFHUixFQUFFVSxPQUFGLEVBQVdDLEVBQVgsQ0FBYyxVQUFkLENBQUgsRUFBNkI7QUFDekJKLGtCQUFNSyxXQUFOLENBQWtCLFFBQWxCO0FBQ0FaLGNBQUVVLE9BQUYsRUFBV0csT0FBWDtBQUNILFNBSEQsTUFHTTtBQUNGTixrQkFBTU8sUUFBTixDQUFlLFFBQWY7QUFDQWQsY0FBRVUsT0FBRixFQUFXSyxTQUFYO0FBQ0g7QUFFSixLQWJEOztBQWVBOzs7QUFHQWYsTUFBRWdCLE1BQUYsRUFBVUMsTUFBVixDQUFpQixZQUFXOztBQUV4QixZQUFJakIsRUFBRSxJQUFGLEVBQVFrQixTQUFSLEtBQXNCbEIsRUFBRW1CLFFBQUYsRUFBWUMsTUFBWixLQUF1QixDQUFqRCxFQUFtRDs7QUFFL0NwQixjQUFFLHdCQUFGLEVBQTRCYyxRQUE1QixDQUFxQyxRQUFyQztBQUVILFNBSkQsTUFLSTtBQUNBZCxjQUFFLHdCQUFGLEVBQTRCWSxXQUE1QixDQUF3QyxRQUF4QztBQUNIO0FBRUosS0FYRDtBQWFILENBdEREIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICAvKiBzaG93IGhlYWRlci10b3AtbWVudVxyXG4gICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuICAgICQoJy5jbG9zZS1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgbWVudSA9ICQodGhpcykubmV4dCgnLm1lbnUnKTtcclxuICAgICAgICBtZW51LnNsaWRlVG9nZ2xlKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBjbG9zZSBtb2RhbFxyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAkKCcuc2hvdy1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnI2pzLW92ZXJsYXknKS5mYWRlSW4oJzQwMCcpO1xyXG4gICAgICAgICQoJyNqcy1tb2RhbCcpLmZhZGVJbignODAwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAkKCcjanMtaWNvbi1jbG9zZSwgI2pzLW92ZXJsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoJyNqcy1vdmVybGF5JykuZmFkZU91dCgnMjAwJyk7XHJcbiAgICAgICAgJCgnI2pzLW1vZGFsJykuZmFkZU91dCgnNjAwJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBzaG93IGZvb3RlciBjb250YWN0c1xyXG4gICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgICAkKCcuZm9vdGVyLWJhcicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuZGF0YSgnZm9vdGVyLWNvbnRlbnQnKTtcclxuICAgICAgICB2YXIgY29udGVudCA9ICcjJyArIHRhcmdldDtcclxuXHJcbiAgICAgICAgaWYoJChjb250ZW50KS5pcygnOnZpc2libGUnKSl7XHJcbiAgICAgICAgICAgICR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgJChjb250ZW50KS5zbGlkZVVwKCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAkdGhpcy5hZGRDbGFzcygnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICQoY29udGVudCkuc2xpZGVEb3duKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIHN0aWNreSBoZWFkZXJcclxuICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gJChkb2N1bWVudCkuaGVpZ2h0KCkgLyA0KXtcclxuXHJcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWFpbi5ub3QtaW5kZXgnKS5hZGRDbGFzcyhcInN0aWNreVwiKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICQoJy5oZWFkZXItbWFpbi5ub3QtaW5kZXgnKS5yZW1vdmVDbGFzcyhcInN0aWNreVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSk7XHJcblxyXG59KTsiXX0=
