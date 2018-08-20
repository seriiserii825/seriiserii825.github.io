'use strict';

$(function () {
	/*
   https://www.jqueryscript.net/animation/Smooth-Mouse-Wheel-Scrolling-Plugin-With-jQuery-easeScroll.html
   ===========================*/
	var mainHeaderToggle = $('#js-main-header-toggle');
	var showMenuClose = $('#show-menu__close-image');
	var showMenuShow = $('#show-menu__show-image');

	$('#js-show-menu').on('click', function () {
		var isVisible = mainHeaderToggle.is(':visible');
		console.log(isVisible);

		mainHeaderToggle.slideToggle();

		if (isVisible === true) {
			showMenuShow.show();
			showMenuClose.hide();
		} else {
			showMenuClose.show();
			showMenuShow.hide();
		}
	});

	/*slider-index
 =======================================*/
	$('#js-slider-index').slick({
		arrows: false,
		dots: true
	});

	/*my-projects-slider
 =======================================*/
	$('#js-my-projects-slider').slick({
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 8,
		arrows: true,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 1400,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		}, {
			breakpoint: 1000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false
			}
		}]
	});

	/* my-projects-slider-up
 ===================================================*/
	$('#js-my-projects-slider-up').slick({
		asNavFor: '#js-my-projects-slider-index'
	});

	/* my-projects-slider-index
 ===================================================*/
	$('#js-my-projects-slider-index').slick({
		asNavFor: '#js-my-projects-slider-up',
		focusOnSelect: true,
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 8,
		arrows: true,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 1400,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		}, {
			breakpoint: 1000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false
			}
		}]
	});

	/* unit slider
 ===================================================*/
	$('#js-unit-slider').slick({
		asNavFor: '#js-my-projects-slider-unit'
	});

	$('#js-my-projects-slider-unit').slick({
		asNavFor: '#js-unit-slider',
		focusOnSelect: true,
		dots: false,
		slidesToShow: 8,
		slidesToScroll: 2,
		arrows: true,
		responsive: [{
			breakpoint: 1600,
			settings: {
				slidesToShow: 8,
				slidesToScroll: 2
			}
		}, {
			breakpoint: 1400,
			settings: {
				slidesToShow: 6,
				slidesToScroll: 6
			}
		}, {
			breakpoint: 1200,
			settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			}
		}, {
			breakpoint: 1000,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			}
		}, {
			breakpoint: 700,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		}, {
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				arrows: false
			}
		}]
	});

	/*gallery slider
 =======================================*/
	$('#js-gallery-slider-big').slick({
		asNavFor: '#js-gallery-slider-small',
		arrows: false
	});

	/*gallery slider small
 =======================================*/
	$('#js-gallery-slider-small').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '#js-gallery-slider-big',
		focusOnSelect: true,
		responsive: [{
			breakpoint: 990,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 800,
			settings: {
				slidesToShow: 4
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		}]
	});

	/*gallery slider
 =======================================*/
	$(window).on("load resize", function () {
		var width = $(document).width();

		if (width > 656) {
			/*show gallery
   =======================================*/
			$('#js-gallery-content .gallery__item .gallery__title a').on('click', function (e) {
				e.preventDefault();

				$('body').addClass('hidden');
				$('#js-overlay').fadeIn('300');
				$('#js-gallery-modal').css('display', 'block');
				$('#js-gallery-slider-big').slick("refresh");
				$('#js-gallery-slider-small').slick("refresh");
			});
			$('#js-gallery-content').slick('unslick');
		} else {
			$('#js-gallery-content').not('.slick-initialized').slick({});
		}
	});

	$('#js-close-gallery-modal').on('click', function () {
		$('body').removeClass('hidden');
		$('#js-overlay').fadeOut('600');
		$('#js-gallery-modal').fadeOut('300');
	});

	/*show header-modal
 =======================================*/
	$('.show-header-popup').on('click', function () {
		$('#js-overlay').fadeIn('300');
		$('.header-popup').fadeIn('600');
		$('body').addClass('hidden');
	});

	$('.close-header-popup').on('click', function () {
		$('#js-overlay').fadeOut('300');
		$('.header-popup').fadeOut('600');
		$('body').removeClass('hidden');
	});

	/* validate header-top-popup
 ===================================================*/
	// $('#js-measure-form .mask').inputmask("+7 (999) 999-9999", {"clearIncomplete": true});

	var headerPopup = $('#js-header-popup');
	var headerPopupForm = $('#js-header-popup .header-popup__form');
	var headerPopupThanks = $('#js-header-popup .thanks');

	headerPopupForm.validate({
		rules: {
			header_popup_name: {
				required: true
			},
			header_popup_phone: {
				required: true,
				digits: true
			},
			header_popup_email: {
				required: true
			}
		},
		messages: {
			header_popup_name: {
				required: 'поле обязательно!!!'
			},
			header_popup_phone: {
				required: 'поле обязательно!!!',
				digits: 'введите цифры'
			},
			header_popup_email: {
				email: 'введите email!!!',
				required: 'поле обязательно!!!'
			}
		},
		invalidHandler: function invalidHandler(event, validator) {
			//$(this).find('input').attr('placeholder', '');
		},
		submitHandler: function submitHandler(form) {
			$(form)[0].reset();

			headerPopupForm.fadeOut('400');
			headerPopupThanks.fadeIn('600');

			setTimeout(function () {
				$(form).ajaxSubmit();
			}, 2000);
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsIm1haW5IZWFkZXJUb2dnbGUiLCJzaG93TWVudUNsb3NlIiwic2hvd01lbnVTaG93Iiwib24iLCJpc1Zpc2libGUiLCJpcyIsImNvbnNvbGUiLCJsb2ciLCJzbGlkZVRvZ2dsZSIsInNob3ciLCJoaWRlIiwic2xpY2siLCJhcnJvd3MiLCJkb3RzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiYXNOYXZGb3IiLCJmb2N1c09uU2VsZWN0Iiwid2luZG93Iiwid2lkdGgiLCJkb2N1bWVudCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImFkZENsYXNzIiwiZmFkZUluIiwiY3NzIiwibm90IiwicmVtb3ZlQ2xhc3MiLCJmYWRlT3V0IiwiaGVhZGVyUG9wdXAiLCJoZWFkZXJQb3B1cEZvcm0iLCJoZWFkZXJQb3B1cFRoYW5rcyIsInZhbGlkYXRlIiwicnVsZXMiLCJoZWFkZXJfcG9wdXBfbmFtZSIsInJlcXVpcmVkIiwiaGVhZGVyX3BvcHVwX3Bob25lIiwiZGlnaXRzIiwiaGVhZGVyX3BvcHVwX2VtYWlsIiwibWVzc2FnZXMiLCJlbWFpbCIsImludmFsaWRIYW5kbGVyIiwiZXZlbnQiLCJ2YWxpZGF0b3IiLCJzdWJtaXRIYW5kbGVyIiwiZm9ybSIsInJlc2V0Iiwic2V0VGltZW91dCIsImFqYXhTdWJtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUFBLEVBQUUsWUFBVztBQUNaOzs7QUFHQSxLQUFJQyxtQkFBbUJELEVBQUUsd0JBQUYsQ0FBdkI7QUFDQSxLQUFJRSxnQkFBZ0JGLEVBQUUseUJBQUYsQ0FBcEI7QUFDQSxLQUFJRyxlQUFlSCxFQUFFLHdCQUFGLENBQW5COztBQUVBQSxHQUFFLGVBQUYsRUFBbUJJLEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDekMsTUFBSUMsWUFBWUosaUJBQWlCSyxFQUFqQixDQUFvQixVQUFwQixDQUFo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QzFDO0FBQ0EsR0E1QnVCO0FBNkJ4QkMsaUJBQWUsdUJBQVNDLElBQVQsRUFBZTtBQUM3QmpELEtBQUVpRCxJQUFGLEVBQVEsQ0FBUixFQUFXQyxLQUFYOztBQUVBaEIsbUJBQWdCRixPQUFoQixDQUF3QixLQUF4QjtBQUNBRyxxQkFBa0JQLE1BQWxCLENBQXlCLEtBQXpCOztBQUVBdUIsY0FBVyxZQUFVO0FBQ3BCbkQsTUFBRWlELElBQUYsRUFBUUcsVUFBUjtBQUNBLElBRkQsRUFFRyxJQUZIO0FBR0E7QUF0Q3VCLEVBQXpCO0FBd0NBLENBalZEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCkge1xuXHQvKlxuXHQgIGh0dHBzOi8vd3d3LmpxdWVyeXNjcmlwdC5uZXQvYW5pbWF0aW9uL1Ntb290aC1Nb3VzZS1XaGVlbC1TY3JvbGxpbmctUGx1Z2luLVdpdGgtalF1ZXJ5LWVhc2VTY3JvbGwuaHRtbFxuXHQgID09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cdGxldCBtYWluSGVhZGVyVG9nZ2xlID0gJCgnI2pzLW1haW4taGVhZGVyLXRvZ2dsZScpO1xuXHRsZXQgc2hvd01lbnVDbG9zZSA9ICQoJyNzaG93LW1lbnVfX2Nsb3NlLWltYWdlJyk7XG5cdGxldCBzaG93TWVudVNob3cgPSAkKCcjc2hvdy1tZW51X19zaG93LWltYWdlJyk7XG5cblx0JCgnI2pzLXNob3ctbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdGxldCBpc1Zpc2libGUgPSBtYWluSGVhZGVyVG9nZ2xlLmlzKCc6dmlzaWJsZScpO1xuXHRcdGNvbnNvbGUubG9nKGlzVmlzaWJsZSk7XG5cblx0XHRtYWluSGVhZGVyVG9nZ2xlLnNsaWRlVG9nZ2xlKCk7XG5cblx0XHRpZiAoaXNWaXNpYmxlID09PSB0cnVlKSB7XG5cdFx0XHRzaG93TWVudVNob3cuc2hvdygpO1xuXHRcdFx0c2hvd01lbnVDbG9zZS5oaWRlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNob3dNZW51Q2xvc2Uuc2hvdygpO1xuXHRcdFx0c2hvd01lbnVTaG93LmhpZGUoKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8qc2xpZGVyLWluZGV4XG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cdCQoJyNqcy1zbGlkZXItaW5kZXgnKS5zbGljayh7XG5cdFx0YXJyb3dzOiBmYWxzZSxcblx0XHRkb3RzOiB0cnVlXG5cdH0pO1xuXG5cdC8qbXktcHJvamVjdHMtc2xpZGVyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cdCQoJyNqcy1teS1wcm9qZWN0cy1zbGlkZXInKS5zbGljayh7XG5cdFx0ZG90czogZmFsc2UsXG5cdFx0c2xpZGVzVG9TaG93OiA4LFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiA4LFxuXHRcdGFycm93czogdHJ1ZSxcblx0XHRyZXNwb25zaXZlOiBbe1xuXHRcdFx0XHRicmVha3BvaW50OiAxNjAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogOCxcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMixcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogMTQwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDYsXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDYsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDEyMDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiA1LFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiA1LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiAxMDAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogNCxcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogNCxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogNzAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMyxcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMyxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogNTAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMyxcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMyxcblx0XHRcdFx0XHRhcnJvd3M6IGZhbHNlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRdXG5cdH0pO1xuXG5cdC8qIG15LXByb2plY3RzLXNsaWRlci11cFxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXHQkKCcjanMtbXktcHJvamVjdHMtc2xpZGVyLXVwJykuc2xpY2soe1xuXHRcdGFzTmF2Rm9yOiAnI2pzLW15LXByb2plY3RzLXNsaWRlci1pbmRleCdcblx0fSk7XG5cblx0LyogbXktcHJvamVjdHMtc2xpZGVyLWluZGV4XG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cdCQoJyNqcy1teS1wcm9qZWN0cy1zbGlkZXItaW5kZXgnKS5zbGljayh7XG5cdFx0YXNOYXZGb3I6ICcjanMtbXktcHJvamVjdHMtc2xpZGVyLXVwJyxcblx0XHRmb2N1c09uU2VsZWN0OiB0cnVlLFxuXHRcdGRvdHM6IGZhbHNlLFxuXHRcdHNsaWRlc1RvU2hvdzogOCxcblx0XHRzbGlkZXNUb1Njcm9sbDogOCxcblx0XHRhcnJvd3M6IHRydWUsXG5cdFx0cmVzcG9uc2l2ZTogW3tcblx0XHRcdFx0YnJlYWtwb2ludDogMTYwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDgsXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDE0MDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiA2LFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiA2LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiAxMjAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogNSxcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogNSxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogMTAwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDQsXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDQsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDcwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDMsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDUwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDMsXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDMsXG5cdFx0XHRcdFx0YXJyb3dzOiBmYWxzZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XVxuXHR9KTtcblxuXHQvKiB1bml0IHNsaWRlclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXHQkKCcjanMtdW5pdC1zbGlkZXInKS5zbGljayh7XG5cdFx0YXNOYXZGb3I6ICcjanMtbXktcHJvamVjdHMtc2xpZGVyLXVuaXQnXG5cdH0pO1xuXG5cdCQoJyNqcy1teS1wcm9qZWN0cy1zbGlkZXItdW5pdCcpLnNsaWNrKHtcblx0XHRhc05hdkZvcjogJyNqcy11bml0LXNsaWRlcicsXG5cdFx0Zm9jdXNPblNlbGVjdDogdHJ1ZSxcblx0XHRkb3RzOiBmYWxzZSxcblx0XHRzbGlkZXNUb1Nob3c6IDgsXG5cdFx0c2xpZGVzVG9TY3JvbGw6IDIsXG5cdFx0YXJyb3dzOiB0cnVlLFxuXHRcdHJlc3BvbnNpdmU6IFt7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDE2MDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiA4LFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAyLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiAxNDAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogNixcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogNixcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogMTIwMCxcblx0XHRcdFx0c2V0dGluZ3M6IHtcblx0XHRcdFx0XHRzbGlkZXNUb1Nob3c6IDUsXG5cdFx0XHRcdFx0c2xpZGVzVG9TY3JvbGw6IDUsXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGJyZWFrcG9pbnQ6IDEwMDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiA0LFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiA0LFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiA3MDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAzLFxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0e1xuXHRcdFx0XHRicmVha3BvaW50OiA1MDAsXG5cdFx0XHRcdHNldHRpbmdzOiB7XG5cdFx0XHRcdFx0c2xpZGVzVG9TaG93OiAzLFxuXHRcdFx0XHRcdHNsaWRlc1RvU2Nyb2xsOiAzLFxuXHRcdFx0XHRcdGFycm93czogZmFsc2Vcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdF1cblx0fSk7XG5cblxuXHQvKmdhbGxlcnkgc2xpZGVyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cdCQoJyNqcy1nYWxsZXJ5LXNsaWRlci1iaWcnKS5zbGljayh7XG5cdFx0YXNOYXZGb3I6ICcjanMtZ2FsbGVyeS1zbGlkZXItc21hbGwnLFxuXHRcdGFycm93czogZmFsc2Vcblx0fSk7XG5cblx0LypnYWxsZXJ5IHNsaWRlciBzbWFsbFxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXHQkKCcjanMtZ2FsbGVyeS1zbGlkZXItc21hbGwnKS5zbGljayh7XG5cdFx0c2xpZGVzVG9TaG93OiA2LFxuXHRcdHNsaWRlc1RvU2Nyb2xsOiAxLFxuXHRcdGFycm93czogdHJ1ZSxcblx0XHRhc05hdkZvcjogJyNqcy1nYWxsZXJ5LXNsaWRlci1iaWcnLFxuXHRcdGZvY3VzT25TZWxlY3Q6IHRydWUsXG5cdFx0cmVzcG9uc2l2ZTogW3tcblx0XHRcdFx0YnJlYWtwb2ludDogOTkwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogNSxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogODAwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogNCxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YnJlYWtwb2ludDogNDgwLFxuXHRcdFx0XHRzZXR0aW5nczoge1xuXHRcdFx0XHRcdHNsaWRlc1RvU2hvdzogMSxcblx0XHRcdFx0XHRzbGlkZXNUb1Njcm9sbDogMVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBZb3UgY2FuIHVuc2xpY2sgYXQgYSBnaXZlbiBicmVha3BvaW50IG5vdyBieSBhZGRpbmc6XG5cdFx0XHQvLyBzZXR0aW5nczogXCJ1bnNsaWNrXCJcblx0XHRcdC8vIGluc3RlYWQgb2YgYSBzZXR0aW5ncyBvYmplY3Rcblx0XHRdXG5cdH0pO1xuXG5cdC8qZ2FsbGVyeSBzbGlkZXJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblx0JCh3aW5kb3cpLm9uKFwibG9hZCByZXNpemVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHdpZHRoID0gJChkb2N1bWVudCkud2lkdGgoKTtcblxuXHRcdGlmICh3aWR0aCA+IDY1Nikge1xuXHRcdFx0LypzaG93IGdhbGxlcnlcblx0XHRcdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cdFx0XHQkKCcjanMtZ2FsbGVyeS1jb250ZW50IC5nYWxsZXJ5X19pdGVtIC5nYWxsZXJ5X190aXRsZSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0JCgnYm9keScpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0XHRcdFx0JCgnI2pzLW92ZXJsYXknKS5mYWRlSW4oJzMwMCcpO1xuXHRcdFx0XHQkKCcjanMtZ2FsbGVyeS1tb2RhbCcpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xuXHRcdFx0XHQkKCcjanMtZ2FsbGVyeS1zbGlkZXItYmlnJykuc2xpY2soXCJyZWZyZXNoXCIpO1xuXHRcdFx0XHQkKCcjanMtZ2FsbGVyeS1zbGlkZXItc21hbGwnKS5zbGljayhcInJlZnJlc2hcIik7XG5cdFx0XHR9KTtcblx0XHRcdCQoJyNqcy1nYWxsZXJ5LWNvbnRlbnQnKS5zbGljaygndW5zbGljaycpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKCcjanMtZ2FsbGVyeS1jb250ZW50Jykubm90KCcuc2xpY2staW5pdGlhbGl6ZWQnKS5zbGljayh7XG5cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG5cblx0JCgnI2pzLWNsb3NlLWdhbGxlcnktbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuXHRcdCQoJyNqcy1vdmVybGF5JykuZmFkZU91dCgnNjAwJyk7XG5cdFx0JCgnI2pzLWdhbGxlcnktbW9kYWwnKS5mYWRlT3V0KCczMDAnKTtcblx0fSk7XG5cblx0LypzaG93IGhlYWRlci1tb2RhbFxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXHQkKCcuc2hvdy1oZWFkZXItcG9wdXAnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0XHQkKCcjanMtb3ZlcmxheScpLmZhZGVJbignMzAwJyk7XG5cdFx0JCgnLmhlYWRlci1wb3B1cCcpLmZhZGVJbignNjAwJyk7XG5cdFx0JCgnYm9keScpLmFkZENsYXNzKCdoaWRkZW4nKTtcblx0fSk7XG5cblx0JCgnLmNsb3NlLWhlYWRlci1wb3B1cCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRcdCQoJyNqcy1vdmVybGF5JykuZmFkZU91dCgnMzAwJyk7XG5cdFx0JCgnLmhlYWRlci1wb3B1cCcpLmZhZGVPdXQoJzYwMCcpO1xuXHRcdCQoJ2JvZHknKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG5cdH0pO1xuXG5cdC8qIHZhbGlkYXRlIGhlYWRlci10b3AtcG9wdXBcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblx0Ly8gJCgnI2pzLW1lYXN1cmUtZm9ybSAubWFzaycpLmlucHV0bWFzayhcIis3ICg5OTkpIDk5OS05OTk5XCIsIHtcImNsZWFySW5jb21wbGV0ZVwiOiB0cnVlfSk7XG5cblx0bGV0IGhlYWRlclBvcHVwID0gJCgnI2pzLWhlYWRlci1wb3B1cCcpO1xuXHRsZXQgaGVhZGVyUG9wdXBGb3JtID0gJCgnI2pzLWhlYWRlci1wb3B1cCAuaGVhZGVyLXBvcHVwX19mb3JtJyk7XG5cdGxldCBoZWFkZXJQb3B1cFRoYW5rcyA9ICQoJyNqcy1oZWFkZXItcG9wdXAgLnRoYW5rcycpO1xuXG5cdGhlYWRlclBvcHVwRm9ybS52YWxpZGF0ZSh7XG5cdFx0cnVsZXM6IHtcblx0XHRcdGhlYWRlcl9wb3B1cF9uYW1lOiB7XG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9LFxuXHRcdFx0aGVhZGVyX3BvcHVwX3Bob25lOiB7XG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRkaWdpdHM6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRoZWFkZXJfcG9wdXBfZW1haWw6IHtcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1lc3NhZ2VzOiB7XG5cdFx0XHRoZWFkZXJfcG9wdXBfbmFtZToge1xuXHRcdFx0XHRyZXF1aXJlZDogJ9C/0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4hISEnXG5cdFx0XHR9LFxuXHRcdFx0aGVhZGVyX3BvcHVwX3Bob25lOiB7XG5cdFx0XHRcdHJlcXVpcmVkOiAn0L/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviEhIScsXG5cdFx0XHRcdGRpZ2l0czogJ9Cy0LLQtdC00LjRgtC1INGG0LjRhNGA0YsnXG5cdFx0XHR9LFxuXHRcdFx0aGVhZGVyX3BvcHVwX2VtYWlsOiB7XG5cdFx0XHRcdGVtYWlsOiAn0LLQstC10LTQuNGC0LUgZW1haWwhISEnLFxuXHRcdFx0XHRyZXF1aXJlZDogJ9C/0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4hISEnXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0aW52YWxpZEhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50LCB2YWxpZGF0b3IpIHtcblx0XHRcdC8vJCh0aGlzKS5maW5kKCdpbnB1dCcpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJycpO1xuXHRcdH0sXG5cdFx0c3VibWl0SGFuZGxlcjogZnVuY3Rpb24oZm9ybSkge1xuXHRcdFx0JChmb3JtKVswXS5yZXNldCgpO1xuXG5cdFx0XHRoZWFkZXJQb3B1cEZvcm0uZmFkZU91dCgnNDAwJyk7XG5cdFx0XHRoZWFkZXJQb3B1cFRoYW5rcy5mYWRlSW4oJzYwMCcpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdFx0XHRcdCQoZm9ybSkuYWpheFN1Ym1pdCgpO1xuXHRcdFx0fSwgMjAwMCk7XG5cdFx0fSxcblx0fSk7XG59KTsiXX0=
