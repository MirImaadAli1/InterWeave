/*  ---------------------------------------------------
  Template Name: Deerhost
  Description:  Deerhost Hosting HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas__menu__wrapper").addClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").addClass("active");
    });

    $(".canvas__close, .offcanvas__menu__overlay").on('click', function () {
        $(".offcanvas__menu__wrapper").removeClass("show__offcanvas__menu");
        $(".offcanvas__menu__overlay").removeClass("active");
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        dots: true,
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {
            320: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    /*------------------
        Radio btn
    --------------------*/
    $(".pricing__swipe-btn label").on('click', function (e) {
        $(".pricing__swipe-btn label").removeClass("active");
        $(this).addClass("active");

        // Get the ID of the clicked label
        var clickedLabelId = $(this).find('input').attr('id');

        // Hide all plan categories
        $(".app__plans, .web__plans, .data__plans, .block__plans, .cloud__plans, .it__plans").removeClass('active');

        // Show the corresponding plan category based on the clicked label
        $("." + clickedLabelId + "__plans").addClass('active');
 
    });
    /*------------------
        Achieve Counter
    --------------------*/
    $('.achieve-counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

})(jQuery);