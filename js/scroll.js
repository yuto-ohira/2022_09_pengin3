$(function(){
    var logo = jQuery('#header');
    $(window).scroll(function(){
        if($(this).scrollTop() > 270){
            logo.addClass('header-color');
        }else{
            logo.removeClass('header-color');
        }
    });
});