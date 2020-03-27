$(document).ready(function() {
    $(".windowWrap").delay(2000).fadeOut("slow");
    
    // $('#nav-icon1').click(function() {
    //     $(this).addClass('open');
    //     $("header nav").addClass('active');
    //     $('#nav-icon2').addClass('active');
    //     $("header").addClass('zIndex993');
    // });
    
    // $('#nav-icon2').click(function() {
    //     $('#nav-icon1').removeClass('open');
    //     $("header nav").removeClass('active');
    //     $('#nav-icon2').removeClass('active');
    //     $("header").removeClass('zIndex993');
    // });
    
    $("header nav .navMenu li.dropmenu").click(function(){
        $("header nav .navMenu li.dropmenu .subMenu").slideToggle();
        $("header nav .navMenu li.dropmenu2 .subMenu").slideUp();
        $("header nav .navMenu li:nth-child(4) > a").removeClass('upArrow');
        $("header nav .navMenu li:nth-child(2) > a").toggleClass('upArrow');
    });
    $("header nav .navMenu li.dropmenu2").click(function(){
        $("header nav .navMenu li.dropmenu2 .subMenu").slideToggle();
        $("header nav .navMenu li.dropmenu .subMenu").slideUp();
        $("header nav .navMenu li:nth-child(4) > a").toggleClass('upArrow');
        $("header nav .navMenu li:nth-child(2) > a").removeClass('upArrow');
    });
    
    if (screen.width < 1170) {
        $(".shareWrap ul li:nth-child(1)").click(function(){
            $(".shareWrap").toggleClass("active");        
        });
        
        $(".buyNow").click(function(){
            $(".buyNow ul").toggleClass("active");        
        });
    }
    
    $('.news_videoGallerySlider').slick({
        slidesToShow: 5,
        speed: 1000,
        arrows: true,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 4,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                variableWidth: true,
            }
        }, ]
    });
    $(".play-video").click(function(event) {
        event.preventDefault();
        var videoUrl = $(this).attr('href');
        $('.inner_videoBox').html('<iframe src="https://www.youtube.com/embed/' + videoUrl + '?autoplay=1&rel=0" frameborder="0" allowfullscreen></iframe>');
        $('.targetDiv').hide();
        $('#div' + $(this).attr('data-target')).show();
    });
    
    if (screen.width < 767) {
        $('.veggiList ul').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            speed: 1000,
            arrows: false,
            swipe: true,
            centerMode:true,
            centerPadding:'110px',
            focusOnSelect: true,
            responsive: [
                {
                  breakpoint: 550,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding:'150px',
                  }
                },
                {
                    breakpoint: 415,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerPadding:'100px',
                    }
                },
                {
                    breakpoint: 370,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerPadding:'100px',
                    }
                  }
              ]
        });
        
        /*$('.veggiList ul').on('afterChange', function(event, slick, currentSlide){   
          $('.targetDiv').hide();
          $('.targetDiv[data-id=' + (currentSlide + 1) + ']').show();
        });*/
        
        
        /*$('.findyourFlavour .veggiList ul li[data-slide]').click(function() {
           //e.preventDefault();
           var slideno = $(this).data('slide');
           $('.veggiList ul').slick('slickGoTo', slideno - 1);
         });*/
        
    }
    
    // $(".aboutCopy").mCustomScrollbar({});
    
    
    
    
    /*if (screen.width > 767) {
        $('.findyourFlavour .veggiList ul li a').click(function(event) {
            event.preventDefault();
            $(".findyourFlavour .veggiList ul li a").removeClass("active");
            $(this).addClass("active");
            $('.targetDiv').hide();
            $('#div' + $(this).attr('target')).show();
        });
    }*/
    
    
    window.setInterval(function() {
        if (jQuery('.fp-completely').attr("id") == "section5") {
            $('.fourthScreen').addClass("intro_AD");
        } else {
            $('.fourthScreen').removeClass("intro_AD");
        }
    }, 1000);
    
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('#') + 1);
    // console.log(id);
    if (typeof(id) != "undefined" && id !== null) {
        try {    
            $("#" + id + " > a").trigger("click");
            window.location = window.location.href + '?r';
          }
          catch(err) { 
          }
    }
    

    
    
    
    
});


$(".menuiconbx").click(function(){
    $('.firstHeader').removeClass('up-header');
    $('.menuiconbx').removeClass('menuactive');
    $('.logo').removeClass('smlLogo');
    $("header").removeClass('showIcon'); 

    $("header nav").addClass('mobileMenu');
    $("#nav-icon2").addClass('showMe');
    console.log('clicked');
});
$("#nav-icon2").click(function(){
    $("header nav").removeClass('mobileMenu');
    $("#nav-icon2").removeClass('showMe');
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 10) {
        $("header").addClass('showIcon');    
    } else {
        $("header").removeClass('showIcon');    
    }

    if ($(window).scrollTop() > 100) {
        $('.firstHeader').addClass('up-header');
        $('.menuiconbx').addClass('menuactive');
        $('.logo').addClass('smlLogo');
    }
    else {
        $('.firstHeader').removeClass('up-header');
        $('.menuiconbx').removeClass('menuactive');
        $('.logo').removeClass('smlLogo');
    }


    /* For scroll */
    // if ($(document).height() <= ($(window).height() + $(window).scrollTop())) {
    //     //Bottom Reached
    //     $('#scroll-down').hide();
    // } else{
    //     $('#scroll-down').show();
    // }
    if ($(this).scrollTop() > 600) { // this refers to window
        $('#scroll-down').hide();
    } else if ($(this).scrollTop() < 600) {
        $('#scroll-down').show();
    }
});