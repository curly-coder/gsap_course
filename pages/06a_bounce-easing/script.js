import gsap from "gsap";

const toast = document.getElementById("toast");
      const btn = document.getElementById("showToastBtn");

      btn.addEventListener("click", () => {
        // Показываем toast с bounce
        gsap.fromTo(
          toast,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "bounce.out" }
        );

        setTimeout(() => {
          gsap.to(toast, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power1.in",
          });
        }, 3000);
      });

      console.log(toast, btn)