// ROSTERY — interaction layer

(() => {
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');

  // Sticky nav state
  const onScroll = () => {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');

    // Subtle parallax on hero background
    const bg = document.querySelector('.hero__bg');
    if (bg && window.scrollY < window.innerHeight) {
      const offset = window.scrollY * 0.35;
      bg.style.transform = `translate3d(0, ${offset}px, 0) scale(1.05)`;
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu — simple toggle (visual only here, kept minimal)
  if (burger) {
    burger.addEventListener('click', () => {
      const links = document.querySelector('.nav__links');
      if (!links) return;
      const isOpen = links.style.display === 'flex';
      if (isOpen) {
        links.style.display = '';
        links.style.position = '';
      } else {
        links.style.display = 'flex';
        links.style.position = 'absolute';
        links.style.flexDirection = 'column';
        links.style.top = '100%';
        links.style.left = '0';
        links.style.right = '0';
        links.style.background = 'var(--cream)';
        links.style.padding = '24px var(--pad)';
        links.style.borderBottom = '1px solid var(--line)';
        links.style.gap = '20px';
      }
    });
  }

  // Reveal-on-scroll
  const revealTargets = document.querySelectorAll(
    '.story__copy, .story__media, .menu__head, .menu-card, .gallery__head, .gallery__item, .visit__copy, .visit__media'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // small stagger for cards/gallery items
          setTimeout(() => entry.target.classList.add('is-visible'), Math.min(i * 60, 240));
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  // Smooth scroll fallback for older browsers (CSS handles modern)
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
})();
