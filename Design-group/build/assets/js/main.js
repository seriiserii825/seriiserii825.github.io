$(function(){
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

    /* show menu
    ====================================================*/
    $('#js-show-menu').on('click', function(){
        $('#js-main-menu').slideToggle(1000);
    });

    /* slider
    ====================================================*/
    $('#js-slider').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 2500,
        fade: true,
        cssEase: 'linear',
        pauseOnHover: false
    });

    /* smooth scroll to up
    ====================================================*/
    /**
     *
     * @param cls {string}
     * @param src {string}
     * @param type {string}
     * @returns {HTMLAudioElement}
     */
    function addAudio(cls, src, type){
        let audio = document.createElement('audio');
        audio.setAttribute('autoplay', 'autoplay');
        audio.classList.add(cls);
        let source = document.createElement('source');
        source.setAttribute('src', src);
        source.setAttribute('type', type);

        audio.appendChild(source);

        return audio;
    }

    $('#js-btn-up').on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 3600);

        let audio = addAudio('audio-up', 'assets/audio/up.mp3', 'audio/mpeg');

        if($(document).scrollTop() > 0){
            $('body').append(audio);
        }

    });


    let documentHeight = $(document).height();

    $(document).on('scroll', function(){

        if($(this).scrollTop() < documentHeight/3){
            $('#js-btn-up').addClass('disabled');
        }else {
            $('#js-btn-up').removeClass('disabled');
        }

        if($(this).scrollTop() === 0){
            $('.audio-up').remove();
        }
    });

    /* smooth scroll to site blocks
    ====================================================*/
    $('.js-menu__link').on('click', function(e){
        e.preventDefault();

        let $this = $(this);
        let href = $this.attr('href');
        let menuOffsetTop = $(href).offset().top - 50;

        $('html, body').animate({
            scrollTop: menuOffsetTop
        }, 1900);

        let audioMenu = addAudio('audio-menu', 'assets/audio/button.mp3', 'audio/mpeg');

        $('body').append(audioMenu);

        setTimeout(function(){
            $('.audio-menu').remove();
        }, 2000);

    });

    /* animate
    ====================================================*/
    let wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       150,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
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