const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMobileMenu = document.getElementById('closeMobileMenu');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
    });

    closeMobileMenu.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
    });

    mobileMenu.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        mobileMenu.classList.add('translate-x-full');
      }
    });

    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll("[data-category]");

    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        products.forEach((product) => {
          const category = product.getAttribute("data-category");
          if (filter === "Kõik" || category === filter) {
            product.style.display = "block";
          } else {
            product.style.display = "none";
          }
        });

        filterButtons.forEach((btn) => btn.classList.remove("bg-[#5f4234]", "text-[#f3efeb]"));
        button.classList.add("bg-[#5f4234]", "text-[#f3efeb]");
      });
    });

    const sortSelect = document.getElementById("sort");
    const productSection = document.querySelector("section.grid");

    function extractPrice(product) {
      const priceText = product.querySelector("p.font-semibold")?.innerText || "0€";
      return parseFloat(priceText.replace("€", "").replace(",", "."));
    }

    function sortProductsByPrice(order = "asc") {
      const productCards = Array.from(productSection.children);

      const sorted = productCards.sort((a, b) => {
        const priceA = extractPrice(a);
        const priceB = extractPrice(b);
        return order === "asc" ? priceA - priceB : priceB - priceA;
      });

      sorted.forEach(card => productSection.appendChild(card));
    }

    sortSelect.addEventListener("change", function () {
      const value = sortSelect.value;

      if (value === "price-asc") {
        sortProductsByPrice("asc");
      } else if (value === "price-desc") {
        sortProductsByPrice("desc");
      }
    });