jQuery( document ).ready(function( $ ) {
  "use strict"

  $('.page-scroll').on('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 800, 'easeInOutExpo');
    event.preventDefault();
  });

/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
$("#loader").delay(200).fadeOut("fast");

/*-----------------------------------------------------------------------------------*/
/* 	SLIDER REVOLUTION
/*-----------------------------------------------------------------------------------*/
jQuery('.tp-banner-fix').show().revolution({
	dottedOverlay:"none",
	delay:10000,
	startwidth:1170,
	startheight:670,
	navigationType:"bullet",
	navigationArrows:"solo",
	navigationStyle:"preview4",
	parallax:"mouse",
	parallaxBgFreeze:"on",
	parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	keyboardNavigation:"on",
	fullWidth:"off",
	fullScreen:"off"
});
/*-----------------------------------------------------------------------------------*/
/* 	SINGLE SLIDE
/*-----------------------------------------------------------------------------------*/
  $(".single-slides").owlCarousel({
    items : 1,
    autoplay:false,
    autoplayHoverPause:true,
    singleItem	: true,
    navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    lazyLoad:true,
    nav: true,
    loop: true,
    animateOut: 'fadeOut'	
  });
});
