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
        duration: 0.9, // 介於 0.8~1s 之間的黃金比例
        ease: "power1.out",
        scrollTrigger: {
            trigger: element,       // 以「當前這一個」元件作為觸發點
            start: "top 85%",       // 當該元件接近螢幕底部時觸發
            toggleActions: "play none none none"
        }
    });
});