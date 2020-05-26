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

    $('.nav-title').click(function(){
        $(this).closest('.menu-wrapper').find('ul').slideUp();
        $(this).children('ul').slideToggle();
    });