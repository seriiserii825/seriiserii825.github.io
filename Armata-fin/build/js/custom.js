$(function () {
	/*img svg
	===============================*/
	if(!Modernizr.svg){
		$('img[src*="svg"]').attr('src', function(){
			return $(this).attr().replace('svg', 'png');
		});
	}	

	/*toggle menu
	===============================*/
	$('.toggle-menu').on('click', function(){
		$(".main-menu").slideToggle('fast');	
		$(this).children('span').toggleClass('active');
	});

	$('.main-footer .toggle-menu').on('click', function(){
		$('html, body').animate({
			scrollTop: $(document).height()
		}, 'slow');
	});

	/*equalheights
	===============================*/
	$('#js-services-content .info-wrap').equalHeights();

	/*advantages animation
	===============================*/
	$('#js-advantages .features').waypoint(function(){
		$('#js-advantages .features__item').each(function(index){
			var ths = $(this);
			setInterval(function(){
				ths.addClass('on');
			}, index*200);
		});
	}, {offset: '70%'});

	/*connection animation
	===============================*/
	$('#js-connection .features').waypoint(function(){
		$('#js-connection .features__item').each(function(index){
			var ths1 = $(this);
			setInterval(function(){
				ths1.addClass('on');
			}, index*200);
		});
	}, {offset: '70%'});

	/*slider
	===============================*/
	$('#js-slider').slick();

	/*click to top
	===============================*/
	$('.to_top').on('click', function(e){
		e.preventDefault();
		$( "html, body" ).animate({
    		scrollTop: 0
  		}, 'slow');
		});

	/*animation
	===============================*/
	$('#js-valuation .info-wrap, #js-services-content .info-wrap').addClass('wow bounce');
	$('.deal__content .row:first-child .deal__item').addClass('wow fadeInLeftBig');
	$('.deal__content .row:last-child .deal__item').addClass('wow fadeInRightBig');
	$('.home-section__title').addClass('wow zoomIn');
	$('#js-work .work__item').addClass('wow zoomIn');
	$('#js-work .work__item:nth-child(2)').attr('data-wow-delay', '.2s');
	$('#js-work .work__item:nth-child(3)').attr('data-wow-delay', '.4s');
	$('#js-work .work__item:last-child').attr('data-wow-delay', '.6s');
	$('#js-contacts form').addClass('wow flipInY');
	$('#js-contacts .contacts__item').addClass('wow fadeInLeftBig');
	$('#js-contacts .contacts__item:nth-child(2)').attr('data-wow-delay', '.5s');
	$('#js-contacts .contacts__item:nth-child(3)').attr('data-wow-delay', '1s');
	$('#js-contacts .contacts__item:last-child').attr('data-wow-delay', '1.5s');
	
	var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       300,          // distance to the element when triggering the animation (default is 0)
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

	/*form
	===============================*/
	$(".forms").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function(){
				$(".form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	/*magnificPopup
	===============================*/

	$('.btn').on('click', function(e){
		e.preventDefault();
		$('#callback h3').html($(this).text());
	}).magnificPopup({
		type: 'inline'
	});

}());
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjdXN0b20uanMiXSwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbiAoKSB7XHJcblx0LyppbWcgc3ZnXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0aWYoIU1vZGVybml6ci5zdmcpe1xyXG5cdFx0JCgnaW1nW3NyYyo9XCJzdmdcIl0nKS5hdHRyKCdzcmMnLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gJCh0aGlzKS5hdHRyKCkucmVwbGFjZSgnc3ZnJywgJ3BuZycpO1xyXG5cdFx0fSk7XHJcblx0fVx0XHJcblxyXG5cdC8qdG9nZ2xlIG1lbnVcclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHQkKCcudG9nZ2xlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0JChcIi5tYWluLW1lbnVcIikuc2xpZGVUb2dnbGUoJ2Zhc3QnKTtcdFxyXG5cdFx0JCh0aGlzKS5jaGlsZHJlbignc3BhbicpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcclxuXHR9KTtcclxuXHJcblx0JCgnLm1haW4tZm9vdGVyIC50b2dnbGUtbWVudScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHQkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcblx0XHRcdHNjcm9sbFRvcDogJChkb2N1bWVudCkuaGVpZ2h0KClcclxuXHRcdH0sICdzbG93Jyk7XHJcblx0fSk7XHJcblxyXG5cdC8qZXF1YWxoZWlnaHRzXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLXNlcnZpY2VzLWNvbnRlbnQgLmluZm8td3JhcCcpLmVxdWFsSGVpZ2h0cygpO1xyXG5cclxuXHQvKmFkdmFudGFnZXMgYW5pbWF0aW9uXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLWFkdmFudGFnZXMgLmZlYXR1cmVzJykud2F5cG9pbnQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNqcy1hZHZhbnRhZ2VzIC5mZWF0dXJlc19faXRlbScpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0XHR2YXIgdGhzID0gJCh0aGlzKTtcclxuXHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR0aHMuYWRkQ2xhc3MoJ29uJyk7XHJcblx0XHRcdH0sIGluZGV4KjIwMCk7XHJcblx0XHR9KTtcclxuXHR9LCB7b2Zmc2V0OiAnNzAlJ30pO1xyXG5cclxuXHQvKmNvbm5lY3Rpb24gYW5pbWF0aW9uXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLWNvbm5lY3Rpb24gLmZlYXR1cmVzJykud2F5cG9pbnQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJyNqcy1jb25uZWN0aW9uIC5mZWF0dXJlc19faXRlbScpLmVhY2goZnVuY3Rpb24oaW5kZXgpe1xyXG5cdFx0XHR2YXIgdGhzMSA9ICQodGhpcyk7XHJcblx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dGhzMS5hZGRDbGFzcygnb24nKTtcclxuXHRcdFx0fSwgaW5kZXgqMjAwKTtcclxuXHRcdH0pO1xyXG5cdH0sIHtvZmZzZXQ6ICc3MCUnfSk7XHJcblxyXG5cdC8qc2xpZGVyXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnI2pzLXNsaWRlcicpLnNsaWNrKCk7XHJcblxyXG5cdC8qY2xpY2sgdG8gdG9wXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblx0JCgnLnRvX3RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCggXCJodG1sLCBib2R5XCIgKS5hbmltYXRlKHtcclxuICAgIFx0XHRzY3JvbGxUb3A6IDBcclxuICBcdFx0fSwgJ3Nsb3cnKTtcclxuXHRcdH0pO1xyXG5cclxuXHQvKmFuaW1hdGlvblxyXG5cdD09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cdCQoJyNqcy12YWx1YXRpb24gLmluZm8td3JhcCwgI2pzLXNlcnZpY2VzLWNvbnRlbnQgLmluZm8td3JhcCcpLmFkZENsYXNzKCd3b3cgYm91bmNlJyk7XHJcblx0JCgnLmRlYWxfX2NvbnRlbnQgLnJvdzpmaXJzdC1jaGlsZCAuZGVhbF9faXRlbScpLmFkZENsYXNzKCd3b3cgZmFkZUluTGVmdEJpZycpO1xyXG5cdCQoJy5kZWFsX19jb250ZW50IC5yb3c6bGFzdC1jaGlsZCAuZGVhbF9faXRlbScpLmFkZENsYXNzKCd3b3cgZmFkZUluUmlnaHRCaWcnKTtcclxuXHQkKCcuaG9tZS1zZWN0aW9uX190aXRsZScpLmFkZENsYXNzKCd3b3cgem9vbUluJyk7XHJcblx0JCgnI2pzLXdvcmsgLndvcmtfX2l0ZW0nKS5hZGRDbGFzcygnd293IHpvb21JbicpO1xyXG5cdCQoJyNqcy13b3JrIC53b3JrX19pdGVtOm50aC1jaGlsZCgyKScpLmF0dHIoJ2RhdGEtd293LWRlbGF5JywgJy4ycycpO1xyXG5cdCQoJyNqcy13b3JrIC53b3JrX19pdGVtOm50aC1jaGlsZCgzKScpLmF0dHIoJ2RhdGEtd293LWRlbGF5JywgJy40cycpO1xyXG5cdCQoJyNqcy13b3JrIC53b3JrX19pdGVtOmxhc3QtY2hpbGQnKS5hdHRyKCdkYXRhLXdvdy1kZWxheScsICcuNnMnKTtcclxuXHQkKCcjanMtY29udGFjdHMgZm9ybScpLmFkZENsYXNzKCd3b3cgZmxpcEluWScpO1xyXG5cdCQoJyNqcy1jb250YWN0cyAuY29udGFjdHNfX2l0ZW0nKS5hZGRDbGFzcygnd293IGZhZGVJbkxlZnRCaWcnKTtcclxuXHQkKCcjanMtY29udGFjdHMgLmNvbnRhY3RzX19pdGVtOm50aC1jaGlsZCgyKScpLmF0dHIoJ2RhdGEtd293LWRlbGF5JywgJy41cycpO1xyXG5cdCQoJyNqcy1jb250YWN0cyAuY29udGFjdHNfX2l0ZW06bnRoLWNoaWxkKDMpJykuYXR0cignZGF0YS13b3ctZGVsYXknLCAnMXMnKTtcclxuXHQkKCcjanMtY29udGFjdHMgLmNvbnRhY3RzX19pdGVtOmxhc3QtY2hpbGQnKS5hdHRyKCdkYXRhLXdvdy1kZWxheScsICcxLjVzJyk7XHJcblx0XHJcblx0dmFyIHdvdyA9IG5ldyBXT1coXHJcbiAge1xyXG4gICAgYm94Q2xhc3M6ICAgICAnd293JywgICAgICAvLyBhbmltYXRlZCBlbGVtZW50IGNzcyBjbGFzcyAoZGVmYXVsdCBpcyB3b3cpXHJcbiAgICBhbmltYXRlQ2xhc3M6ICdhbmltYXRlZCcsIC8vIGFuaW1hdGlvbiBjc3MgY2xhc3MgKGRlZmF1bHQgaXMgYW5pbWF0ZWQpXHJcbiAgICBvZmZzZXQ6ICAgICAgIDMwMCwgICAgICAgICAgLy8gZGlzdGFuY2UgdG8gdGhlIGVsZW1lbnQgd2hlbiB0cmlnZ2VyaW5nIHRoZSBhbmltYXRpb24gKGRlZmF1bHQgaXMgMClcclxuICAgIG1vYmlsZTogICAgICAgZmFsc2UsICAgICAgIC8vIHRyaWdnZXIgYW5pbWF0aW9ucyBvbiBtb2JpbGUgZGV2aWNlcyAoZGVmYXVsdCBpcyB0cnVlKVxyXG4gICAgbGl2ZTogICAgICAgICB0cnVlLCAgICAgICAvLyBhY3Qgb24gYXN5bmNocm9ub3VzbHkgbG9hZGVkIGNvbnRlbnQgKGRlZmF1bHQgaXMgdHJ1ZSlcclxuICAgIGNhbGxiYWNrOiAgICAgZnVuY3Rpb24oYm94KSB7XHJcbiAgICAgIC8vIHRoZSBjYWxsYmFjayBpcyBmaXJlZCBldmVyeSB0aW1lIGFuIGFuaW1hdGlvbiBpcyBzdGFydGVkXHJcbiAgICAgIC8vIHRoZSBhcmd1bWVudCB0aGF0IGlzIHBhc3NlZCBpbiBpcyB0aGUgRE9NIG5vZGUgYmVpbmcgYW5pbWF0ZWRcclxuICAgIH0sXHJcbiAgICBzY3JvbGxDb250YWluZXI6IG51bGwgLy8gb3B0aW9uYWwgc2Nyb2xsIGNvbnRhaW5lciBzZWxlY3Rvciwgb3RoZXJ3aXNlIHVzZSB3aW5kb3dcclxuICB9XHJcblx0KTtcclxuXHR3b3cuaW5pdCgpO1xyXG5cclxuXHQvKmZvcm1cclxuXHQ9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHQkKFwiLmZvcm1zXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwibWFpbC5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0YWxlcnQoXCLQodC/0LDRgdC40LHQviDQt9CwINC30LDRj9Cy0LrRgyEg0KHQutC+0YDQviDQvNGLINGBINCy0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8uXCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0JChcIi5mb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdFx0fSwgMTAwMCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHJcblx0LyptYWduaWZpY1BvcHVwXHJcblx0PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcblxyXG5cdCQoJy5idG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNjYWxsYmFjayBoMycpLmh0bWwoJCh0aGlzKS50ZXh0KCkpO1xyXG5cdH0pLm1hZ25pZmljUG9wdXAoe1xyXG5cdFx0dHlwZTogJ2lubGluZSdcclxuXHR9KTtcclxuXHJcbn0oKSk7Il0sImZpbGUiOiJjdXN0b20uanMifQ==
