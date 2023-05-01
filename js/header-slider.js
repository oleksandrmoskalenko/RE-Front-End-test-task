const swiper = new Swiper('.header__slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween : 0,
  loop: true,

  autoplay: {
    delay: 3000,
  },
});