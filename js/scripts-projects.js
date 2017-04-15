$(function() {
    
    var imgWidth = $('.projects-carousel').width();
    
    $('.projects-carousel-nav').css('width', imgWidth+'px');
    
    //CAROUSEL INITIATE
    $('.projects-carousel').slick({
        centerMode: true,
        centerPadding: 0,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 4000,
        cssEase: 'ease-out',
        asNavFor: '.projects-carousel-nav',
    });
    
    $('.projects-carousel-nav').slick({
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: 'ease-out',
        asNavFor: '.projects-carousel',
    });
    
    
});