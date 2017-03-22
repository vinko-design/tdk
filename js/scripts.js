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
    var servicesListHeight;
    var imagesInRow = Math.floor(servicesImgContainerWidth/150);
    var imagesWidth = $('#services .images-container img').width();
    var imagesInColumn = Math.ceil(servicesListHeight/150);
    var thirdOfServicesListHeight;
    
    
    function imageSizing() {
        servicesListHeight = $('#services-list').innerHeight();
//        $('.services-img-container').show();
//
//        thirdOfServicesListHeight = servicesListHeight/3;
//        console.log(thirdOfServicesListHeight);
//        
//        if (servicesListHeight) {
//        
//        }
//        
//        if (servicesListHeight > servicesImgContainerWidth) {
//            console.log('TEXT IS TALLER');
//            $('.services-img-container').css({
//                'height': thirdOfServicesListHeight+'px',
//                'width': thirdOfServicesListHeight+'px',
//            });
//        }
//        
//        if (imagesInColumn > 3 && imagesInRow < 3) {
//            $('.services-img-container:nth-child(6)').nextAll().hide();
//        }
//        
//        console.log('IMAGES_IN_ROW: '+imagesInRow+', WIDTH_OF_IMAGES_CONTAINER: '+servicesImgContainerWidth+', HEIGHT_OF_LIST: '+servicesListHeight);
        $('.services-img-container').css({
            'height': servicesListHeight/3+'px',
            'width': servicesListHeight/3+'px',
        });
    }
    
    imageSizing();
    
    //Services Page images
    $(window).on('resize', function() {
        imageSizing();
    })
    
    
    
    
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