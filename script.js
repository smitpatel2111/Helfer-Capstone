// Sidebar active link (highlights on scroll)
const navLinks = document.querySelectorAll('.sidebar nav a');
const sections = document.querySelectorAll('main section');
window.addEventListener('scroll', () => {
    let scrollY = window.scrollY + 60;
    sections.forEach(section => {
        if (scrollY >= section.offsetTop && scrollY < section.offsetTop + section.offsetHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            const activeLink = document.querySelector(`.sidebar nav a[href="#${section.id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Animated stats
function animateStat(stat) {
    const target = +stat.dataset.target;
    let count = 0;
    const increment = Math.ceil(target / 50);
    function update() {
        if (count < target) {
            count += increment;
            if (count > target) count = target;
            stat.textContent = count;
            requestAnimationFrame(update);
        } else {
            stat.textContent = target;
        }
    }
    update();
}
const statNumbers = document.querySelectorAll('.stat-number');
let statsAnimated = false;
window.addEventListener('scroll', () => {
    const statsSection = document.querySelector('.stats-section');
    if (!statsAnimated && window.scrollY + window.innerHeight > statsSection.offsetTop + 60) {
        statsAnimated = true;
        statNumbers.forEach(animateStat);
    }
});

// Floating contact form labels
document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(el => {
    el.addEventListener('input', () => {
        if (el.value) {
            el.classList.add('has-value');
        } else {
            el.classList.remove('has-value');
        }
    });
});

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const msg = document.getElementById("formMessage");
    msg.style.opacity = 0;
    setTimeout(() => {
        msg.textContent = "Thank you for contacting WellMind! We’ll get back to you soon.";
        msg.style.opacity = 1;
    }, 250);
    this.reset();
    document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(el => el.classList.remove('has-value'));
});