/**
 * Created by user on 3/2/2017.
 */
$(document).ready(function(){
    $("header #header-content .header-menu ul li:last-child a").click(function(){
        $(".login-inner").addClass('open-btn')
    });
});

$ (".login-inner .times-list").on('click', function () {
    /*$(".login-inner").toggle(500, function () {

     })*/
    if($(".login-inner").hasClass('open-btn')){
        $(".login-inner").removeClass('open-btn')
    }
})

/*$(document).ready(function(){
    $("header #header-content .header-menu ul li:last-child a").click(function(){
        $(".login-inner").addClass('open-btn')
    });
});*/

/*
$ (".login-inner .times-list").on('click', function () {
    /!*$(".login-inner").toggle(500, function () {

     })*!/
    if($(".login-inner").hasClass('open-btn')){
        $(".login-inner").removeClass('open-btn')
    }
})
*/

$ (".nav-icon").on('click', function () {

    if($('header').hasClass('menu-open')){
        $('header').removeClass('menu-open')
    }else{
        $('header').addClass('menu-open')
    }
})

