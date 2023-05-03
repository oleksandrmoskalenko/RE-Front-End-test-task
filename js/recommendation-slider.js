const recommendationSwiper = new Swiper('.recommendation__slider', {
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
