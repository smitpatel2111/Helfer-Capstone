// Theme switcher for light/dark mode using :root CSS variables
document.addEventListener('DOMContentLoaded', function () {
  const switcher = document.getElementById('theme-switcher');
  const root = document.documentElement;
  const setTheme = theme => {
    if(theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      localStorage.setItem('helfer-theme', 'dark');
      switcher.innerText = '☀️ Light Mode';
    } else {
      root.removeAttribute('data-theme');
      localStorage.setItem('helfer-theme', 'light');
      switcher.innerText = '🌙 Dark Mode';
    }
  };
  // Initial theme
  const saved = localStorage.getItem('helfer-theme');
  if(saved === 'dark') setTheme('dark');
  else setTheme('light');
  // Toggle
  switcher.addEventListener('click', function () {
    setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  });
});