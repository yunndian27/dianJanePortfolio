var swiper = new Swiper(".projectSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  speed: 2700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});
var swiper = new Swiper(".threePicSwiper", {
  slidesPerView : 1,
  slidesPerGroup : 1,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  speed: 2700,
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 800,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
});
Fancybox.bind("[data-fancybox]", {
  // Your custom options
});