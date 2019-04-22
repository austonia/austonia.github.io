var austonia = {} || "";

austonia.init = function(){
    austonia.onNavbarScroll();
    austonia.swiperCarousel();
    // setTimeout(function(){
    // }, 3000);
}

austonia.onNavbarScroll = function(){
  var swiper = new Swiper('.instagram-slider', {
    slidesPerView: 7,
    loop: true,
  });

  swiperStory = new Swiper('.slider-about', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });
}

austonia.swiperCarousel = function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 30 && $(document).width() >= 992) {
        $('nav').addClass('navbar-shrink');
    }
  
    else if ($(document).width() <= 991){
        $('nav').addClass('navbar-shrink');
    }
    else {
        $('nav').removeClass('navbar-shrink');
    }
  });
  
  if ($(document).width() <= 991) {
    $('nav').addClass('navbar-shrink');
  }
}

$(function(){
  austonia.init();
});


