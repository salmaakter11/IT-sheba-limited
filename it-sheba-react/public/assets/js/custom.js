"use strict";


jQuery(function ($) {
  'use strict'; // 1. preloader

  $(window).ready(function () {
    $('#preloader').delay(200).fadeOut('fade');
  }); // 2. mega menu js

  $('.js-mega-menu').HSMegaMenu({
    event: 'hover',
    pageContainer: $('.container'),
    breakpoint: 1000.98,
    hideTimeOut: 0
  }); //  fixed navbar

  $(window).on('scroll', function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop() > 100) {
      $('.main-header-menu-wrap').addClass('affix');
    } else {
      $('.main-header-menu-wrap').removeClass('affix');
    }
  }); //  scroll bottom to top

  $(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height()) {
      $('.scroll-to-target').addClass('open');
    } else {
      $('.scroll-to-target').removeClass('open');
    }

    if ($('.scroll-to-target').length) {
      $(".scroll-to-target").on('click', function () {
        var target = $(this).attr('data-target');
        var new_time = new Date();

        if (!this.old_time || new_time - this.old_time > 1000) {
          // animate
          $('html, body').animate({
            scrollTop: $(target).offset().top
          }, 500);
          this.old_time = new_time;
        }
      });
    }
  }); 

 // hero slider 

  $('.hero-slider-one').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    autoplayHoverPause: true,
    items: 1,
    autoplayTimeout: 3500,
    autoplaySpeed: 1800,
  });


  $('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: true,
    slideTransition: 'linear',
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    navText: ["<i class='fas fa-arrow-left'></i>", "<i class=' fas fa-arrow-right' ></i>"],
    responsive: {
      0: {
        items: 2
      },
      500: {
        items: 3
      },
      600: {
        items: 4
      },
      800: {
        items: 5
      },
      1200: {
        items: 8
      }
    }
  });

   // sticky sidebar

  $(function () {
    // document ready
    if ($('#sticky').length) {
      // make sure "#sticky" element exists
      var el = $('#sticky');
      var stickyTop = $('#sticky').offset().top; // returns number

      var stickyHeight = $('#sticky').height();
      $(window).scroll(function () {
        // scroll event
        var limit = $('#section-footer').offset().top - stickyHeight - 20;
        var windowTop = $(window).scrollTop(); // returns number

        if (stickyTop < windowTop) {
          el.css({
            position: 'fixed',
            top: 20,
            width: 350
          });
        } else {
          el.css('position', 'static');
        }

        if (limit < windowTop) {
          var diff = limit - windowTop;
          el.css({
            top: diff
          });
        }
      });
    }
  }); 


}); // JQuery end