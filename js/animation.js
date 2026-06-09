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
            toggleActions: "play reverse restart reset"
        }
    });
});