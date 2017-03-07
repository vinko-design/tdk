$(function() {
    
    var scrollTop = $(window).scrollTop();
    
    if (scrollTop > 15) {
        $('.navbar-default').addClass('bg');
    }
    
    $(window).on('scroll', function(){

        scrollTop = $(window).scrollTop();
        
        if (scrollTop > 15) {
            $('.navbar-default').addClass('bg');
        }
        else {
            $('.navbar-default').removeClass('bg');
        }
        
    });
    
    //Activate Scrollspy
    $('body').scrollspy({
        target: 'header .navbar',
//        offset: topoffset
    });
    
    $('.navbar a[href*=\\#]:not([href=\\#]), .cta-row.about-us a[href*=\\#]:not([href=\\#])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top + 2
                }, 1000);
                return false;
            }
        }
    });
    
    
    
});