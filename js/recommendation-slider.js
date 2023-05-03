const recommendationSwiper = new Swiper('.recommendation__slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 0,
  // centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 5000,
  },
});
