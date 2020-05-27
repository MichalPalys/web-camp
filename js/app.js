// function setClickPossibility(ww) {
    //     console.log(ww);
    //     if(ww < 960) {
    //         // console.log('mniej' + window.innerWidth);
    //         $('.nav-title').click(function(){
    //             // $(this).closest('.menu-wrapper').find('ul').slideUp();
    //             $(this).children('ul').slideToggle();
    //         });
    //     } else {
    //         // console.log('more then 960px' + window.innerWidth);
    //     }
    // }

    // // setClickPossibility ();

    // // $(window).bind('resize',function(){
    // //     // console.log('width' + window.innerWidth);
    // //     setClickPossibility ();
    // // });

    // $('.nav-title').hover(function(){
    //     var windowWidth = $(window).width();
    //     // console.log(windowWidth);
    //     // console.log(window.innerWidth);
    //     var w = window.innerWidth
    //     || document.documentElement.clientWidth
    //     || document.body.clientWidth;
    //     // console.log(w);
    //     setClickPossibility(windowWidth);
    // });

    $(document).ready(function(){
        $('.main-slider-container').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });

        $('.company-slider-container').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev custom-slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next custom-slick-next">Next</button>',
            responsive: [
                {
                  breakpoint: 960,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                  }
                }
            ]
        });

        $('.insta-container__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button type="button" class="slick-prev insta-container__slider__custom-slick-prev">Previous</button>',
            nextArrow: '<button type="button" class="slick-next insta-container__slider__custom-slick-next">Next</button>',
            responsive: [
                {
                  breakpoint: 960,
                  settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="slick-prev custom-slick-prev">Previous</button>',
                    nextArrow: '<button type="button" class="slick-next custom-slick-next">Next</button>',
                  }
                }
            ]
        });

        $('.nav-title').click(function(){
            $(this).closest('.menu-wrapper').find('ul').slideUp();
            $(this).children('ul').slideToggle();
        });
      });