$(function () {
	/*toggle-menu
	===============================*/
	$('#js-close-menu').on('click', function(){
		$(this).toggleClass('active');
		$('#js-main-menu').slideToggle();
	});

	/*services__list slide-toggle
	===============================*/
	$('#js-services__list > li').on('click', function(){
		var $this = $(this);
		if($this.hasClass('active') && $this.find('.services__sublist').is(':visible')){
			$this.removeClass('active').find('.services__sublist').slideUp('fast');
		}else if($this.hasClass('active') && $this.find('.services__sublist').is(':hidden')){
			$this.find('.services__sublist').slideDown();
		}
		
		return false;
	}).eq(0).find('.services__sublist').slideDown();

	$('#js-services__list > li').hover(function(){
		$(this).addClass('active');
	},function(){
		if($(this).find('.services__sublist').is(':hidden')){
			$(this).removeClass('active');
		}
	});

	/*advantages equalheights
	===============================*/
	$('.advantages__item-content p').equalHeights();

	/*show-modal
	===============================*/
	$('.show-modal').on('click', function(e){
		e.preventDefault();
		$('body').append('<div class="overlay" id="js-overlay"></div>');
		$('.modal').fadeIn(1000);
		$(this).fadeOut();
		$('body').css({
			'overflow': 'hidden',
			'paddingRight': '17px'
		});
	});

	$('.modal .close').on('click', function(){
		$('.modal').fadeOut();
		$('.show-modal').fadeIn();
		$('#js-overlay').remove();
		$('body').css({
			'overflow': 'visible',
			'paddingRight': '0'
		});
	});

	/*fixed menu on scroll
	===============================*/
	var windowScroll = $(window).scrollTop();
	var headerHeight = $('#js-header-main').outerHeight();
	var mainMenuHeight = $('#js-main-menu-wrap').outerHeight(true);

	$(document).on('scroll', function(){
		var documentScroll = $(this).scrollTop();

		if(documentScroll > headerHeight - 100){
			$('#js-main-menu-wrap').addClass('fixed');
			$('#js-logo').addClass('fixed');
			$('#js-header-main').css('marginTop', mainMenuHeight);
		}else{
			$('#js-main-menu-wrap').removeClass('fixed');
			$('#js-header-main').removeAttr('style');
			$('#js-logo').removeClass('fixed');
		}
		
	});

	/*smooth scroll to menu plains
	===============================*/
	$('#js-main-menu li, #js-logo').on('click', function(e){
		e.preventDefault();
		var link = $(this).find('a');
		var idItem; 
		var attr = link.attr('href');

		if(attr === '#js-header-main'){
			idItem = 0;			
			$('#js-main-menu li').removeClass('active');
		}else{
			$('#js-main-menu li').removeClass('active');
			$(this).addClass('active');
			idItem = $(attr).offset().top;	
		}

		$('html, body').animate({
			'scrollTop': idItem
		}, 700);
	});



	/*mail
	===============================*/
	$(".modal__form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function(){
				$(".form").trigger("reset");
			});
		});
		return false;
	});

	/*animate wow 
	===============================*/
	$('h2').addClass('wow zoomIn');
	$('#js-advantages .img-wrap').addClass('wow rollIn');
	$('#js-advantages .col-sm-3:nth-child(2) .img-wrap').attr('data-wow-delay', '.5s');
	$('#js-advantages .col-sm-3:nth-child(3) .img-wrap').attr('data-wow-delay', '1s');
	$('#js-advantages .col-sm-3:nth-child(4) .img-wrap').attr('data-wow-delay', '1.5s');
	$('#js-services__list li').addClass('wow slideInLeft');
	$('#js-reviews .reviews__item:nth-child(1)').addClass('wow slideInLeft');
	$('#js-reviews .reviews__item:nth-child(2)').addClass('wow slideInRight');
	$('#js-reviews .reviews__item:nth-child(3)').addClass('wow slideInLeft');
	$('#js-reviews .reviews__item').addClass('wow zoomIn');

	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       80,          // distance to the element when triggering the animation (default is 0)
    mobile:       false,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();

});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblx0Lyp0b2dnbGUtbWVudVxyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdCQoJyNqcy1jbG9zZS1tZW51Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCgnI2pzLW1haW4tbWVudScpLnNsaWRlVG9nZ2xlKCk7XHJcblx0fSk7XHJcblxyXG5cdC8qc2VydmljZXNfX2xpc3Qgc2xpZGUtdG9nZ2xlXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLXNlcnZpY2VzX19saXN0ID4gbGknKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdGlmKCR0aGlzLmhhc0NsYXNzKCdhY3RpdmUnKSAmJiAkdGhpcy5maW5kKCcuc2VydmljZXNfX3N1Ymxpc3QnKS5pcygnOnZpc2libGUnKSl7XHJcblx0XHRcdCR0aGlzLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5maW5kKCcuc2VydmljZXNfX3N1Ymxpc3QnKS5zbGlkZVVwKCdmYXN0Jyk7XHJcblx0XHR9ZWxzZSBpZigkdGhpcy5oYXNDbGFzcygnYWN0aXZlJykgJiYgJHRoaXMuZmluZCgnLnNlcnZpY2VzX19zdWJsaXN0JykuaXMoJzpoaWRkZW4nKSl7XHJcblx0XHRcdCR0aGlzLmZpbmQoJy5zZXJ2aWNlc19fc3VibGlzdCcpLnNsaWRlRG93bigpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSkuZXEoMCkuZmluZCgnLnNlcnZpY2VzX19zdWJsaXN0Jykuc2xpZGVEb3duKCk7XHJcblxyXG5cdCQoJyNqcy1zZXJ2aWNlc19fbGlzdCA+IGxpJykuaG92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdH0sZnVuY3Rpb24oKXtcclxuXHRcdGlmKCQodGhpcykuZmluZCgnLnNlcnZpY2VzX19zdWJsaXN0JykuaXMoJzpoaWRkZW4nKSl7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvKmFkdmFudGFnZXMgZXF1YWxoZWlnaHRzXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnLmFkdmFudGFnZXNfX2l0ZW0tY29udGVudCBwJykuZXF1YWxIZWlnaHRzKCk7XHJcblxyXG5cdC8qc2hvdy1tb2RhbFxyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdCQoJy5zaG93LW1vZGFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCdib2R5JykuYXBwZW5kKCc8ZGl2IGNsYXNzPVwib3ZlcmxheVwiIGlkPVwianMtb3ZlcmxheVwiPjwvZGl2PicpO1xyXG5cdFx0JCgnLm1vZGFsJykuZmFkZUluKDEwMDApO1xyXG5cdFx0JCh0aGlzKS5mYWRlT3V0KCk7XHJcblx0XHQkKCdib2R5JykuY3NzKHtcclxuXHRcdFx0J292ZXJmbG93JzogJ2hpZGRlbicsXHJcblx0XHRcdCdwYWRkaW5nUmlnaHQnOiAnMTdweCdcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cclxuXHQkKCcubW9kYWwgLmNsb3NlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5tb2RhbCcpLmZhZGVPdXQoKTtcclxuXHRcdCQoJy5zaG93LW1vZGFsJykuZmFkZUluKCk7XHJcblx0XHQkKCcjanMtb3ZlcmxheScpLnJlbW92ZSgpO1xyXG5cdFx0JCgnYm9keScpLmNzcyh7XHJcblx0XHRcdCdvdmVyZmxvdyc6ICd2aXNpYmxlJyxcclxuXHRcdFx0J3BhZGRpbmdSaWdodCc6ICcwJ1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblxyXG5cdC8qZml4ZWQgbWVudSBvbiBzY3JvbGxcclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHR2YXIgd2luZG93U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cdHZhciBoZWFkZXJIZWlnaHQgPSAkKCcjanMtaGVhZGVyLW1haW4nKS5vdXRlckhlaWdodCgpO1xyXG5cdHZhciBtYWluTWVudUhlaWdodCA9ICQoJyNqcy1tYWluLW1lbnUtd3JhcCcpLm91dGVySGVpZ2h0KHRydWUpO1xyXG5cclxuXHQkKGRvY3VtZW50KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuXHRcdHZhciBkb2N1bWVudFNjcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XHJcblxyXG5cdFx0aWYoZG9jdW1lbnRTY3JvbGwgPiBoZWFkZXJIZWlnaHQgLSAxMDApe1xyXG5cdFx0XHQkKCcjanMtbWFpbi1tZW51LXdyYXAnKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdFx0JCgnI2pzLWxvZ28nKS5hZGRDbGFzcygnZml4ZWQnKTtcclxuXHRcdFx0JCgnI2pzLWhlYWRlci1tYWluJykuY3NzKCdtYXJnaW5Ub3AnLCBtYWluTWVudUhlaWdodCk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0JCgnI2pzLW1haW4tbWVudS13cmFwJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHRcdCQoJyNqcy1oZWFkZXItbWFpbicpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0XHRcdCQoJyNqcy1sb2dvJykucmVtb3ZlQ2xhc3MoJ2ZpeGVkJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9KTtcclxuXHJcblx0LypzbW9vdGggc2Nyb2xsIHRvIG1lbnUgcGxhaW5zXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLW1haW4tbWVudSBsaSwgI2pzLWxvZ28nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdHZhciBsaW5rID0gJCh0aGlzKS5maW5kKCdhJyk7XHJcblx0XHR2YXIgaWRJdGVtOyBcclxuXHRcdHZhciBhdHRyID0gbGluay5hdHRyKCdocmVmJyk7XHJcblxyXG5cdFx0aWYoYXR0ciA9PT0gJyNqcy1oZWFkZXItbWFpbicpe1xyXG5cdFx0XHRpZEl0ZW0gPSAwO1x0XHRcdFxyXG5cdFx0XHQkKCcjanMtbWFpbi1tZW51IGxpJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdCQoJyNqcy1tYWluLW1lbnUgbGknKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRpZEl0ZW0gPSAkKGF0dHIpLm9mZnNldCgpLnRvcDtcdFxyXG5cdFx0fVxyXG5cclxuXHRcdCQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuXHRcdFx0J3Njcm9sbFRvcCc6IGlkSXRlbVxyXG5cdFx0fSwgNzAwKTtcclxuXHR9KTtcclxuXHJcblxyXG5cclxuXHQvKm1haWxcclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHQkKFwiLm1vZGFsX19mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwibWFpbC5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0YWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyEg0KHQutC+0YDQviDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8uXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JChcIi5mb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0LyphbmltYXRlIHdvdyBcclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHQkKCdoMicpLmFkZENsYXNzKCd3b3cgem9vbUluJyk7XHJcblx0JCgnI2pzLWFkdmFudGFnZXMgLmltZy13cmFwJykuYWRkQ2xhc3MoJ3dvdyByb2xsSW4nKTtcclxuXHQkKCcjanMtYWR2YW50YWdlcyAuY29sLXNtLTM6bnRoLWNoaWxkKDIpIC5pbWctd3JhcCcpLmF0dHIoJ2RhdGEtd293LWRlbGF5JywgJy41cycpO1xyXG5cdCQoJyNqcy1hZHZhbnRhZ2VzIC5jb2wtc20tMzpudGgtY2hpbGQoMykgLmltZy13cmFwJykuYXR0cignZGF0YS13b3ctZGVsYXknLCAnMXMnKTtcclxuXHQkKCcjanMtYWR2YW50YWdlcyAuY29sLXNtLTM6bnRoLWNoaWxkKDQpIC5pbWctd3JhcCcpLmF0dHIoJ2RhdGEtd293LWRlbGF5JywgJzEuNXMnKTtcclxuXHQkKCcjanMtc2VydmljZXNfX2xpc3QgbGknKS5hZGRDbGFzcygnd293IHNsaWRlSW5MZWZ0Jyk7XHJcblx0JCgnI2pzLXJldmlld3MgLnJldmlld3NfX2l0ZW06bnRoLWNoaWxkKDEpJykuYWRkQ2xhc3MoJ3dvdyBzbGlkZUluTGVmdCcpO1xyXG5cdCQoJyNqcy1yZXZpZXdzIC5yZXZpZXdzX19pdGVtOm50aC1jaGlsZCgyKScpLmFkZENsYXNzKCd3b3cgc2xpZGVJblJpZ2h0Jyk7XHJcblx0JCgnI2pzLXJldmlld3MgLnJldmlld3NfX2l0ZW06bnRoLWNoaWxkKDMpJykuYWRkQ2xhc3MoJ3dvdyBzbGlkZUluTGVmdCcpO1xyXG5cdCQoJyNqcy1yZXZpZXdzIC5yZXZpZXdzX19pdGVtJykuYWRkQ2xhc3MoJ3dvdyB6b29tSW4nKTtcclxuXHJcblx0dmFyIHdvdyA9IG5ldyBXT1coXHJcbiAge1xyXG4gICAgYm94Q2xhc3M6ICAgICAnd293JywgICAgICAvLyBhbmltYXRlZCBlbGVtZW50IGNzcyBjbGFzcyAoZGVmYXVsdCBpcyB3b3cpXHJcbiAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGFuaW1hdGlvbiBjc3MgY2xhc3MgKGRlZmF1bHQgaXMgYW5pbWF0ZWQpXHJcbiAgICBvZmZzZXQ6ICAgICAgIDgwLCAgICAgICAgICAvLyBkaXN0YW5jZSB0byB0aGUgZWxlbWVudCB3aGVuIHRyaWdnZXJpbmcgdGhlIGFuaW1hdGlvbiAoZGVmYXVsdCBpcyAwKVxyXG4gICAgbW9iaWxlOiAgICAgICBmYWxzZSwgICAgICAgLy8gdHJpZ2dlciBhbmltYXRpb25zIG9uIG1vYmlsZSBkZXZpY2VzIChkZWZhdWx0IGlzIHRydWUpXHJcbiAgICBsaXZlOiAgICAgICAgIHRydWUsICAgICAgIC8vIGFjdCBvbiBhc3luY2hyb25vdXNseSBsb2FkZWQgY29udGVudCAoZGVmYXVsdCBpcyB0cnVlKVxyXG4gICAgY2FsbGJhY2s6ICAgICBmdW5jdGlvbihib3gpIHtcclxuICAgICAgLy8gdGhlIGNhbGxiYWNrIGlzIGZpcmVkIGV2ZXJ5IHRpbWUgYW4gYW5pbWF0aW9uIGlzIHN0YXJ0ZWRcclxuICAgICAgLy8gdGhlIGFyZ3VtZW50IHRoYXQgaXMgcGFzc2VkIGluIGlzIHRoZSBET00gbm9kZSBiZWluZyBhbmltYXRlZFxyXG4gICAgfSxcclxuICAgIHNjcm9sbENvbnRhaW5lcjogbnVsbCAvLyBvcHRpb25hbCBzY3JvbGwgY29udGFpbmVyIHNlbGVjdG9yLCBvdGhlcndpc2UgdXNlIHdpbmRvd1xyXG4gIH1cclxuKTtcclxud293LmluaXQoKTtcclxuXHJcbn0pOyJdLCJmaWxlIjoiY3VzdG9tLmpzIn0=
