/**
 * Created by User on 04.03.2017.
 */
$('.owl-carousel').owlCarousel({
    stagePadding: 50,
    loop:true,
    // margin:10,
    nav:true,
    navText: ["<i class='fa fa-angle-left slider-icon fa-4x' aria-hidden='true'></i>","<i class='fa fa-angle-right slider-icon fa-4x' aria-hidden='true'></i>"],

    responsive:{
        0:{
            items:1,
            stagePadding: 35
        },
        600:{
            items:1,
            stagePadding: 45
        },
        1000:{
            items:1,
            stagePadding: 55
        },
        1200:{
            items:1,
            stagePadding: 65
        },
        1400:{
            items:1,
            stagePadding: 75
        },
        1600:{
            items:1,
            stagePadding: 85
        },
        1800:{
            items:1,
            stagePadding: 95
        }
    }
})


