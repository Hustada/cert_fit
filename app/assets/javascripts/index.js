$(document).ready(function() {
    
    
    /* For the sticky navigation  something here*/
    $('.js--section-services').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

    /* Animations on scroll */
    $('.js--section-services').waypoint(function(direction) {
        $('.js--service-col').addClass('animated fadeIn');
    }, {
        offset: '80%'
    });

    /* Animations on scroll */
    $('.js--section-about').waypoint(function(direction) {
        $('.js--about').addClass('animated bounceInRight');
    }, {
        offset: '90%'
    });

    $('.js--sign-up').waypoint(function(direction) {
        $('.js--arrow').addClass('animated bounceInUp');
    }, {
        offset: '90%'
    });

    /* Waypoints */

    $('.js--arrow').click(function () {
       $('html, body').animate({scrollTop: $('.js--about').offset().top}, 1000); 
    });

     /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon');
        } else {
            icon.addClass('ion-navicon');
            icon.removeClass('ion-close-round');
        }        
    });

    /* Fade carousel with slick */

    $('.section-facilities').slick({
      fade: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2500,
      cssEase: 'linear'
    });



    // $('.flash-message').fadeIn('fast').delay(5000).fadeOut('fast');
    
});