$(document).ready(function(){
    $(".slider-promotion").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    });

    $(".slider-banner").owlCarousel({
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        responsive:{
            0:{
                items:0,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $(".slider-new-product").owlCarousel({
        dots: false,
        loop: true,
        margin: 20,
        responsive:{
            0:{
                items:0,
            },
            600:{
                items:4,
            },
            1000:{
                items:4,
            }
        }
    });
  });