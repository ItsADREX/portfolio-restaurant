document.addEventListener('DOMContentLoaded', () => {
// mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  menuBtn?.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

  // nav background on scroll
  const nav = document.getElementById('nav');
  const onScroll = () => {
    if (window.scrollY > 50) {
      nav.classList.add('bg-ink/80', 'backdrop-blur-md', 'border-b', 'border-bronze-500/10');
    } else {
      nav.classList.remove('bg-ink/80', 'backdrop-blur-md', 'border-b', 'border-bronze-500/10');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // menu tabs
  const tabs = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('[data-panel]');
  tabs.forEach(t => {
    t.addEventListener('click', () => {
      tabs.forEach(x => { x.classList.remove('tab-active'); x.classList.add('text-bone/60','border-transparent'); });
      t.classList.add('tab-active'); t.classList.remove('text-bone/60','border-transparent');
      const target = t.dataset.tab;
      panels.forEach(p => p.dataset.panel === target ? p.classList.remove('hidden') : p.classList.add('hidden'));
    });
  });

  // reservation submit
  document.getElementById('resForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
    document.getElementById('resOk').classList.remove('hidden');
  });
});
