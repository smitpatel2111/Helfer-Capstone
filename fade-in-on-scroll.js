// Pure JS scroll-triggered fade-in for [data-animate="fade-in"]
document.addEventListener('DOMContentLoaded', function () {
  function onScrollFadeIn() {
    document.querySelectorAll('[data-animate="fade-in"]').forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80) {
        el.classList.add('in-view');
      }
    });
  }
  window.addEventListener('scroll', onScrollFadeIn, { passive: true });
  window.addEventListener('resize', onScrollFadeIn);
  setTimeout(onScrollFadeIn, 120);
});