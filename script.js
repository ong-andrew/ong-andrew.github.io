// --- Smooth Scrolling for Navigation Links ---
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// --- Fade-in Animation on Scroll ---
// This is a simple example. For more complex animations,
// you might want to use the Intersection Observer API.
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null, // observes intersections relative to the viewport
    rootMargin: '0px',
    threshold: 0.1 // trigger when 10% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // Stop observing the element once it has faded in
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    // Initially hide the sections that will be animated
    if (section.id !== 'home') {
        section.style.opacity = 0;
    }
    observer.observe(section);
});
