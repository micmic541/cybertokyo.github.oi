'use strict'; 

/*change color when it's scrolled*/
$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 355) {
            $('.mobile_menu').addClass('scroll');
        } else {
            $('.mobile_menu').removeClass('scroll');
        }
    });
});

/*change ghost animation*/
$('.mobile_menu').click(function(){
	$('.ghost, #menu_text, .exit, #close_text, .global-nav').toggleClass('clicked'); 
});

/*delete global-nav once it's clicked*/
$('.global-nav ul a').click(function(){
	$('.global-nav, .ghost, #menu_text, .exit, #close_text').toggleClass('clicked');
});