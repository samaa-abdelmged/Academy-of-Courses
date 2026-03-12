# Courses Website – Frontend (HTML, CSS, Sass, JavaScript ES6+)

A modern and responsive **Courses Website** built using **HTML, CSS, Sass (SCSS), and modern JavaScript (ES6+)**.
The website showcases educational courses online and provides an interactive learning experience with smooth animations, responsive design, and user-friendly interface.

This project emphasizes **clean UI design, responsive layouts, modern frontend techniques, and interactive functionality**.

---

# Technologies Used

**Frontend:** HTML5, CSS3, Sass (SCSS), JavaScript (Vanilla JS, ES6+)

**Styling & Layout:** CSS Variables, Flexbox, CSS Grid, Media Queries

**Libraries & Assets:** Google Fonts, Remix Icons

**Development Tools:** VS Code, Git, GitHub

---

# Key Features

* Fully responsive navigation menu for mobile devices with hamburger toggle
* Modern and clean courses website design
* About section with smooth scroll and animation effects
* Courses section displaying multiple course cards with hover effects
* Interactive buttons with press effect using JavaScript
* Contact form with dynamic confirmation message
* Clean SCSS structure for easy maintenance and scalability
* Optimized for mobile, tablet, and desktop devices

---

# Website Sections

**Home Section**
Hero banner welcoming users with a call-to-action button to explore courses.

**About Section**
Describes the purpose of the website and highlights the learning experience.

**Courses Section**
Displays various courses such as:

* Web Development (HTML, CSS, JavaScript)
* Graphic Designing
* Digital Marketing

Each course card has an image, title, description, and a registration button.

**Contact Section**
Contains a form for users to send messages with a dynamic success message.

**Footer**
Includes copyright notice and website information.

---

# Main Functionality

## Responsive Navigation Menu

Hamburger menu opens and closes on mobile devices:

```javascript
hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});
```

## About Section Animation

Smooth fade-in and translate animations when section is in viewport:

```javascript
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
```

## Interactive Buttons & Links

All buttons and navbar links have a press effect implemented with JavaScript:

```javascript
function addPressEffect(element) {
    if (!element) return;
    element.classList.add('pressed');
    setTimeout(() => element.classList.remove('pressed'), 150);
}
```

## Contact Form Confirmation

Shows a dynamic confirmation message without refreshing the page:

```javascript
formMessage.textContent = "Your message has been sent successfully! Thank you for contacting us.";
formMessage.style.display = "block";
```

---

# Project Structure

```
courses-website
│
├── index.html
├── assets
│   ├── css
│   │   └── styles.css  (compiled from SCSS)
│   ├── scss
│   │   └── main.scss
│   ├── js
│   │   └── script.js
│   └── imgs
│       ├── web_development.jpg
│       ├── Graphic-designing.jpg
│       ├── DIGITAL_MARKETING.webp
│       └── hero.avif
└── README.md
```

# Future Improvements

* Add animations using **AOS or GSAP**
* Connect contact form to backend API
* Add user authentication and dashboard for students
* Add more courses with filters and search functionality
* Improve performance, accessibility, and SEO

---

# Developer Info

| Field    | Details                                                     |
| -------- | ----------------------------------------------------------- |
| Name     | Samaa Abdelmged                                             |
| Role     | Full Stack .Net Web Developer                               |
| Location | Egypt                                                       |
| Email    | [samaaabdelmged@gmail.com](mailto:samaaabdelmged@gmail.com) |
| LinkedIn | linkedin.com/in/samaa-abdelmged                             |

---
