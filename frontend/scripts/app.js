const header = document.getElementById('header');
const navLinks = document.querySelectorAll('#navLinks a');
const supportBtn = document.getElementById('supportBtn');
const logou = document.getElementById('lougou');
const hero = document.getElementById('hero');
const heroHeight = hero.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY > heroHeight - 90) {
    header.classList.remove('bg-transparent');
    header.classList.add('bg-[#f3efeb]', 'shadow');
    navLinks.forEach(link => {
      link.classList.remove('text-[#f3efeb]');
      link.classList.add('text-[#5f4234]');
    });
    supportBtn.classList.remove('text-[#f3efeb]', 'border-[#f3efeb]', 'hover:bg-[#f3efeb]', 'hover:text-[#5f4234]');
    supportBtn.classList.add('text-[#5f4234]', 'border-[#5f4234]', 'hover:bg-[#5f4234]', 'hover:text-[#f3efeb]');
    logou.src = '../images/pandivere-12-t.svg';
  } else {
    header.classList.add('bg-transparent');
    header.classList.remove('bg-[#f3efeb]', 'shadow');
    navLinks.forEach(link => {
      link.classList.remove('text-[#5f4234]');
      link.classList.add('text-[#f3efeb]');
    });
    supportBtn.classList.remove('text-[#5f4234]', 'border-[#5f4234]', 'hover:bg-[#5f4234]', 'hover:text-[#f3efeb]');
    supportBtn.classList.add('text-[#f3efeb]', 'border-[#f3efeb]', 'hover:bg-[#f3efeb]', 'hover:text-[#5f4234]');
    logou.src = '../images/pandivere-12-b.svg';
  }
});