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
    
    var servicesImgContainerWidth = $('#services .images-container').width();
    var servicesListHeight = $('#services-list').height();
    var imagesInRow = Math.floor(servicesImgContainerWidth/150);
    var imagesInColumn = Math.ceil(servicesListHeight/150);
    
    //Services Page images
    $(window).on('resize', function() {
        $('.services-img-container').show();

        if (imagesInRow === 4 || imagesInRow === 2) {
            $('.services-img-container:last-child').hide();
        }
        
        console.log('IMAGES_IN_ROW: '+imagesInRow+', WIDTH_OF_IMAGES_CONTAINER: '+servicesImgContainerWidth+', HEIGHT_OF_LIST: '+servicesListHeight);
    })
    
    if (imagesInRow === 4 || imagesInRow === 2) {
            $('.services-img-container:last-child').hide();
    }

    if (imagesInRow === 2 && imagesInColumn === 4) {
        $('.services-img-container:nth-child(6)').nextAll().hide();
    }
    
    
    
    
    
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