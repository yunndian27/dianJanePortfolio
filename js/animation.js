// animation.js
gsap.config({ nullTargetWarn: false }); // 關閉找不到目標物的警告

// js/animation.js
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// 找到畫面上所有需要 reveal 的元件
const revealElements = document.querySelectorAll('.scroll-reveal');

revealElements.forEach((element) => {
    gsap.to(element, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power1.out",
        scrollTrigger: {
            trigger: element,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

// 2. 初始化 GLightbox (它會自動去認畫面上所有 class="glightbox" 的超連結)（加入條件判斷防護）
if (typeof GLightbox !== 'undefined' && document.querySelector('.glightbox')) {
  const lightbox = GLightbox({
    selector: '.glightbox',
    loop: true,
    closeOnOutsideClick: true
  });
};

// 3. 回到頂部按鈕邏輯 (新增)
const backToTopBtn = document.querySelector('#back-to-top-btn');

if (backToTopBtn) {
  // 監聽滾動以控制按鈕顯示/隱藏
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      gsap.to(backToTopBtn, { 
        opacity: 1,
        visibility: 'visible',
        pointerEvents: 'auto', 
        duration: 0.2
      });
    } else {
      gsap.to(backToTopBtn, { 
        opacity: 0, 
        visibility: 'hidden',
        pointerEvents: 'none', 
        duration: 0.2 
      });
    }
  });

  // 點擊滾回頂部
  backToTopBtn.addEventListener('click', () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: 0 },
      ease: "power2.out"
    });
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // 檢查網址列是否帶有 # 錨點 (例如 #works)
  if (window.location.hash) {
    const targetId = window.location.hash; // 抓取 "#works"
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "instant" });
    }
  }
});