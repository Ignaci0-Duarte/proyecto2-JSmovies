var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  freeMode: true,
  /* paginacion, las pelotitas abajo del slider */
  /* pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }, */
  rewind: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  watchOverFlow: true,
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});
