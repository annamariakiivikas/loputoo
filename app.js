const header = document.getElementById('header');
const navLinks = document.querySelectorAll('#navLinks a');
const supportBtn = document.getElementById('supportBtn');
const hero = document.getElementById('hero');
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
    if (window.scrollY > heroHeight - 90) {
        // Lisa valge taust ja must tekst
        header.classList.remove('bg-transparent');
        header.classList.add('bg-white', 'shadow');
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-800');
        });
        supportBtn.classList.remove('text-white', 'border-white');
        supportBtn.classList.add('text-gray-800', 'border-gray-800');
    } else {
        // Taasta läbipaistvus ja valge tekst
        header.classList.add('bg-transparent');
        header.classList.remove('bg-white', 'shadow');
        navLinks.forEach(link => {
            link.classList.remove('text-gray-800');
            link.classList.add('text-white');
        });
        supportBtn.classList.remove('text-gray-800', 'border-gray-800');
        supportBtn.classList.add('text-white', 'border-white');
    }
});

// Karusselli andmed
const slides = [
    {
        name: "Juhan Rebane",
        years: "1859–1927",
        description: "Pandivere Tuuliku rajaja. Eluaegne tarmukas põllumees, kes alustas 19. sajandi lõpus tuuliku ehitamist oma talu maadel.",
        image: "./images/mees 1.jpg"
    },
    {
        name: "Leena Rebane",
        years: "1862–1934",
        description: "Juhani abikaasa, kes hoidis kodu ja aitas majapidamist tuuliku kõrval.",
        image: "./images/mees 1.jpg"
    },
    {
        name: "Villu Rebane",
        years: "1901–1981",
        description: "Tuuliku tööstusliku uuendamise eestvedaja 20. sajandi alguses.",
        image: "./images/mees 1.jpg"
    }
];

let currentSlide = 0;
function renderSlide(index) {
    const slide = slides[index];
    const container = document.getElementById("slide-content");
    container.innerHTML = `
    <div class="flex flex-col md:flex-row items-center gap-6">
      <img src="${slide.image}" alt="${slide.name}" class="w-48 h-auto rounded shadow-lg">
      <div class="text-left">
        <h3 class="text-lg font-semibold mb-1">${slide.name}</h3>
        <p class="text-sm font-light mb-1">${slide.years}</p>
        <p class="text-sm text-gray-200">${slide.description}</p>
      </div>
    </div>
  `;
}
document.getElementById("prevBtn").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
});
document.getElementById("nextBtn").addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
});
renderSlide(currentSlide);
setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
}, 10000);