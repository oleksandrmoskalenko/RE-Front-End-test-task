const sellSwiper = new Swiper('.sell__slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 0,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
});
