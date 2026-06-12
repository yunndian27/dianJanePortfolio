let visualSwiper = undefined;

function initSwiper() {
  const screenWidth = window.innerWidth;

  // 電腦版 (假設 1024px 以上)：銷毀 Swiper，還原為靜態網格
  if (screenWidth >= 1024) {
    if (visualSwiper !== undefined) {
      visualSwiper.destroy(true, true); // 參數 true 代表清除 Swiper 注入的行內樣式
      visualSwiper = undefined;
    }
  } 
  // 平板與手機 (1023px 以下)：初始化 Swiper
  else {
    if (visualSwiper === undefined) {
      visualSwiper = new Swiper('.visualSwiper', {
        loop: true,
        autoplay: {
          delay: 3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        },
        // 運用 breakpoints 控制平板與手機的顯示數量
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 20
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      });
    }
  }
}

// 1. 頁面載入時先執行一次
window.addEventListener('load', initSwiper);

// 2. 監聽視窗縮放 (加入簡單的防抖或直接監聽)
window.addEventListener('resize', initSwiper);

// var swiper = new Swiper(".visualSwiper", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   lazy: true,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     pauseOnMouseEnter: true,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
// });