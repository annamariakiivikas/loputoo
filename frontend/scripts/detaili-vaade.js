const thumbs = document.querySelectorAll('.thumb');
      const mainImage = document.getElementById('main-image');
      const images = Array.from(thumbs).map((thumb) => thumb.src);
      let currentIndex = 0;

      thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
          thumbs.forEach((t) => t.classList.remove('active-thumb'));
          thumb.classList.add('active-thumb');
          mainImage.src = thumb.src;
          currentIndex = index;
        });
      });

      function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateMainImage();
      }

      function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateMainImage();
      }

      function updateMainImage() {
        mainImage.src = images[currentIndex];
        thumbs.forEach((thumb, i) => {
          thumb.classList.toggle('active-thumb', i === currentIndex);
        });
      }

      function changeQty(change) {
        const qtyEl = document.getElementById('qty');
        let current = parseInt(qtyEl.innerText);
        if (current + change >= 1) qtyEl.innerText = current + change;
      }

      function toggleInfo() {
        const content = document.getElementById('info-content');
        const arrow = document.getElementById('arrow');
        content.classList.toggle('hidden');
        arrow.textContent = content.classList.contains('hidden') ? '+' : '-';
      }

      thumbs[0].classList.add('active-thumb');