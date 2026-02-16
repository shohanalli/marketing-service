document.addEventListener("DOMContentLoaded", () => {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const mobilePanel = document.getElementById("mobileMenuPanel");
  if (!mobileBtn || !mobilePanel) return;

  function setMenu(open) {
    if (open) {
      mobilePanel.classList.remove("hidden");
      requestAnimationFrame(() => mobilePanel.classList.add("open"));
    } else {
      mobilePanel.classList.remove("open");
      mobileBtn.setAttribute("aria-expanded", "false");
      setTimeout(() => mobilePanel.classList.add("hidden"), 200); // transition time match
      return;
    }
    mobileBtn.setAttribute("aria-expanded", "true");
  }

  mobileBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = mobilePanel.classList.contains("open");
    setMenu(!isOpen);
  });

  mobilePanel.querySelectorAll("a, button").forEach((el) => {
    el.addEventListener("click", () => setMenu(false));
  });
});





      // Swiper for Client Success
      const successSwiper = new Swiper("#successSwiper", {
        loop: true,
        speed: 900,
        autoplay: {
          delay: 2200,
          disableOnInteraction: false,
        },
        slidesPerView: 1,
        spaceBetween: 16,
        breakpoints: {
          768: { slidesPerView: 2, spaceBetween: 18 },
        },
        pagination: {
          el: "#successSwiper .swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: "#successSwiper .swiper-button-next",
          prevEl: "#successSwiper .swiper-button-prev",
        },
      });

      // FAQ accordion toggle (plus icon works)
      const faqCards = document.querySelectorAll(".faq-btn");
      faqCards.forEach((btn) => {
        const panel = btn.parentElement.querySelector(".faq-panel");
        const icon = btn.querySelector(".faq-icon");

        const expanded = btn.getAttribute("aria-expanded") === "true";
        if (expanded) {
          panel.classList.remove("hidden");
          icon.classList.add("rotate-45");
        } else {
          panel.classList.add("hidden");
          icon.classList.remove("rotate-45");
        }

        btn.addEventListener("click", () => {
          const isOpen = btn.getAttribute("aria-expanded") === "true";
          btn.setAttribute("aria-expanded", isOpen ? "false" : "true");

          panel.classList.toggle("hidden", isOpen);
          icon.classList.toggle("rotate-45", !isOpen);
        });
      });