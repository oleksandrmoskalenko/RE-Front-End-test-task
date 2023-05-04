const recommendationSwiper = new Swiper('.recommendation__slider', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 0,
  grabCursor: true,
  
  loop: true,

  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: '.recommendation__button-next',
    prevEl: '.recommendation__button-prev',
  },

  breakpoints: {
    320: {
      centeredSlides: true,
    },
    1200: {
      centeredSlides: false,
    }
  }
});

function filterSlides(button) {
  return button.on("click", function(){
    const filter = $(this).html().toLowerCase();
  
    $(".swiper-slide").not("[data-filter='"+filter+"']").addClass("non-swiper-slide").removeClass("swiper-slide").hide();
      $("[data-filter='"+filter+"']").removeClass("non-swiper-slide").addClass("swiper-slide").attr("style", null).show();
      recommendationSwiper.update();
      recommendationSwiper.destroy();
      recommendationSwiper = new Swiper('.recommendation__slider', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        grabCursor: true,
        spaceBetween: 0,
        loop: true,
  
        autoplay: {
          delay: 3000,
        },
      
        navigation: {
          nextEl: '.recommendation__button-next',
          prevEl: '.recommendation__button-prev',
        },
    });
  });
}

filterSlides($(".recommendation__buttons-wrapper button"));
