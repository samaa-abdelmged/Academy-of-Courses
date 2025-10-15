// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
    addPressEffect(hamburger);
});

document.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    if (e.target.tagName === 'A') addPressEffect(e.target);
});

// About Section Animation
const aboutElements = document.querySelectorAll('.about h2, .about p');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.2 });

aboutElements.forEach(el => observer.observe(el));

// Buttons and Menu Press Effect
function addPressEffect(element) {
    if (!element) return;
    element.classList.add('pressed');
    setTimeout(() => {
        element.classList.remove('pressed');
    }, 150);
}

// Apply press effect on all buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => btn.addEventListener('click', () => addPressEffect(btn)));

// Apply press effect on all navbar links
const menuLinks = document.querySelectorAll('.navbar nav a');
menuLinks.forEach(link => link.addEventListener('click', () => addPressEffect(link)));

// Smooth scroll & Active menu highlight
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 70;
        if (scrollY >= sectionTop) current = section.getAttribute('id');
    });
    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
});

// Contact form confirmation message
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', e => {
    e.preventDefault();
    // إضافة تأثير الضغط على زر الإرسال
    const submitBtn = contactForm.querySelector('button');
    addPressEffect(submitBtn);

    // هنا ممكن تضيف ارسال البيانات للسيرفر إذا عندك API
    // حاليا هنكتفي بعرض رسالة تأكيد

    formMessage.textContent = "تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا.";
    formMessage.style.display = "block";

    // إعادة تعيين الفورم بعد ثانيتين
    setTimeout(() => {
        formMessage.style.display = "none";
        contactForm.reset();
    }, 3000);
});
