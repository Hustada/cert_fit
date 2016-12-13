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

    /* Waypoints */

    $('.js--scroll-to-about').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1000); 
    });

    $('.js--scroll-to-packages').click(function () {
       $('html, body').animate({scrollTop: $('.js--group-member-packages').offset().top}, 1000); 
    });

    $('.js--scroll-to-trainers').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-trainers').offset().top}, 1000); 
    });

    $('.js--scroll-to-footer').click(function () {
       $('html, body').animate({scrollTop: $('.js--footer').offset().top}, 1000); 
    });

    $('.js--scroll-to-nutrition').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-nutrition').offset().top}, 1000); 
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