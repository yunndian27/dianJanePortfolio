var swiper = new Swiper(".otherSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  lazy: true,
  loop: true,
  autoplay: {
    delay: 2500,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// var swiper = new Swiper(".projectSwiper", {
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   loop: true,
//   speed: 2700,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 2000,
//     pauseOnMouseEnter: true,
//     disableOnInteraction: false,
//   },
// });
// var swiper = new Swiper(".threePicSwiper", {
//   slidesPerView : 1,
//   slidesPerGroup : 1,
//   spaceBetween: 30,
//   freeMode: true,
//   loop: true,
//   speed: 2700,
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//     992: {
//       slidesPerView: 3,
//       slidesPerGroup: 3,
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
//     delay: 800,
//     pauseOnMouseEnter: true,
//     disableOnInteraction: false,
//   },
// });
// Fancybox.bind("[data-fancybox]", {
//   // Your custom options
// });