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
    
    //SERVICES IMG HEIGHT SETTING/RESPONSIVITY
    var servicesListHeight = $('#services-list').innerHeight();
    
    $('#services .images-container').css('height',servicesListHeight+'px');
    
    $(window).on('resize', function(){
//        console.log('resizing bitch!');
        servicesListHeight = $('#services-list').innerHeight();
        $('#services .images-container').css('height',servicesListHeight+'px');
    });
    
    //SERVICES IMAGE ROTATION
    var servicesImgArray = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7' ];
    var activeImg = 0;
    
    setInterval(function(){
        activeImg++;
        if (activeImg > 6) {
            activeImg = 0;
        }
        $('.services-images').removeClass('active');
        $('.services-images.'+servicesImgArray[activeImg]).addClass('active');
        
        console.log('Active Image: '+activeImg);
    },5000);
    
    //ARRANGE A MEETING CTA
    $('#arrange-meeting-cta').on('click', function(){
        $('#arrange-meeting-overlay').addClass('clicked');
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