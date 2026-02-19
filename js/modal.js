  (function () {
    const modal = document.getElementById("quoteModal");
    const panel = document.getElementById("quoteModalPanel");

    function openModal() {
      // show overlay
      modal.classList.remove("hidden");
      modal.classList.add("flex");

      // lock scroll
      document.body.classList.add("overflow-hidden");

      // animate in (next frame)
      requestAnimationFrame(() => {
        panel.classList.remove("opacity-0", "scale-95");
        panel.classList.add("opacity-100", "scale-100");
      });

      modal.setAttribute("aria-hidden", "false");
    }

    function closeModal() {
      // animate out
      panel.classList.remove("opacity-100", "scale-100");
      panel.classList.add("opacity-0", "scale-95");

      // after animation, hide overlay
      setTimeout(() => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.classList.remove("overflow-hidden");
        modal.setAttribute("aria-hidden", "true");
      }, 300);
    }

    // Open triggers
    document.querySelectorAll('[data-modal-open="quoteModal"]').forEach((btn) => {
      btn.addEventListener("click", openModal);
    });

    // Close triggers (button)
    modal.querySelectorAll("[data-modal-close]").forEach((btn) => {
      btn.addEventListener("click", closeModal);
    });

    // Outside click
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });

    // ESC close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
      }
    });

    // Optional: expose functions if you want onclick usage
    window.openQuoteModal = openModal;
    window.closeQuoteModal = closeModal;
  })();