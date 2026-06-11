// animation.js
gsap.config({ nullTargetWarn: false }); // 關閉找不到目標物的警告

// js/animation.js
gsap.registerPlugin(ScrollTrigger);

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

// 2. 初始化 GLightbox (它會自動去認畫面上所有 class="glightbox" 的超連結)
const lightbox = GLightbox({
  selector: '.glightbox',
  loop: true,               // 燈箱滑到最後一張時可以循環回第一張
  closeOnOutsideClick: true, // 點擊旁邊黑底也可以關閉 (貼心 UX)
});