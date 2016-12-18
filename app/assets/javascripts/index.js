$(document).ready(function() {
    
    /* For the sticky navigation  something here*/
    $('.js--section-trainers').waypoint(function(direction) {
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

    $('.js--section-services').waypoint(function(direction) {
        $('.consult-button').addClass('animated bounceInUp');
    }, {
        offset: '40%'
    });

    $('.js--nutrition-col').waypoint(function(direction) {
        $('.nutrition-paragraph').addClass('animated fadeInRightBig');
    }, {
      offset: '100%'
    });

    $('.js--wellness-col').waypoint(function(direction) {
        $('.wellness-paragraph').addClass('animated fadeInLeftBig');
    }, {
      offset: '100%'
    });

    $('.js--performance-col').waypoint(function(direction) {
        $('.performance-paragraph').addClass('animated fadeInRightBig');
    }, {
      offset: '100%'
    });


    $('.js--nutrition-col').waypoint(function(direction) {
        $('.js--programs-title-nutrition').addClass('change-to-red animated pulse');
    }, {
      offset: '90%'
    });


    $('.js--wellness-col').waypoint(function(direction) {
        $('.js--programs-title-wellness').addClass('change-to-red animated pulse');
    }, {
      offset: '90%'
    });

    $('.js--performance-col').waypoint(function(direction) {
        $('.js--programs-title-performance').addClass('change-to-red animated pulse');
    }, {
      offset: '90%'
    });

    /* Waypoints */

    $('.js--scroll-to-about').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-about').offset().top - 10 }, 1000); 
    });

    $('.js--scroll-to-memberships').click(function () {
       $('html, body').animate({scrollTop: $('.js--group-member-packages').offset().top - 73 }, 1000); 
    });

    $('.js--scroll-to-trainers').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-trainers').offset().top - 55 }, 1000); 
    });

    $('.js--scroll-to-footer').click(function () {
       $('html, body').animate({scrollTop: $('.js--footer').offset().top}, 1000); 
    });

    $('.js--scroll-to-programs').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-nutrition').offset().top - 60 }, 1000); 
    });

    $('.js--scroll-to-products').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-products').offset().top}, 1000); 
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

    $('.js--alt-nav-icon').click(function() {
        var nav = $('.js--alt-main-nav');
        var icon = $('.js--alt-nav-icon i');
        
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

    /* Read more functionality */
    $('.trainer-cody').readmore({
      speed: 250,
      collapsedHeight: 215,
      lessLink: '<a href="#">Read less</a>'
    });

    $('.trainer-jacob').readmore({
      speed: 250,
      collapsedHeight: 215,
      lessLink: '<a href="#">Read less</a>'
    });

    $('#toggle').click(function () {
      $('.expand').slideToggle(500);
      $(this).text( $(this).text() == 'View Training Packages' ? "Show Less" : "View Training Packages"); 
    });

    $('#toggle-group').click(function () {
      $('.expand-group').slideToggle(500);
      $('.group-container').slideToggle(500);
      $(this).text( $(this).text() == 'View Group Rates' ? "Show Less" : "View Group Rates"); 
    });

  

    // $('.flash-message').fadeIn('fast').delay(5000).fadeOut('fast');
    
});