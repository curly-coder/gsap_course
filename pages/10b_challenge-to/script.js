import gsap from "gsap";

const toasts = document.querySelectorAll(".toast");


toasts.forEach((toast, i) => {
  gsap.to(toast, {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 2,
    ease: "power2.inOut",
    delay: i * 2, 
    onComplete: () => {
      gsap.to(toast, {
        y: 0,
        opacity: 0,
        scale: 0.95,
        duration: 2,
        ease: "power2.inOut",
      });
    }
  });
});
