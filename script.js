// ========================
// NAVIGATION FUNCTIONALITY
// ========================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// ========================
// SMOOTH SCROLL FUNCTION
// ========================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================
// SCROLL ANIMATIONS
// ========================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and content
document.querySelectorAll('.experience-card, .tour-card, .testimonial-card, .blog-card, .destination-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================
// QUICK SEARCH FORM
// ========================

function handleQuickSearch() {
    const destination = document.querySelector('.quick-search select:first-of-type').value;
    const dates = document.querySelector('input[placeholder="Select dates"]').value;
    const guests = document.querySelector('.quick-search select:last-of-type').value;

    if (destination && dates && guests) {
        console.log('Searching for:', { destination, dates, guests });
        alert(`Searching for ${destination} for ${guests} on ${dates}`);
        // In a real application, this would trigger a search
    } else {
        alert('Please fill in all fields');
    }
}

// ========================
// BOOKING MODAL
// ========================

const modal = document.getElementById('booking-modal');
const closeBtn = document.querySelector('.close');

if (closeBtn) {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// ========================
// BOOKING FORM SUBMISSION
// ========================

function handleBooking() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const experience = document.getElementById('experience').value;
    const guests = document.getElementById('guests').value;
    const startDate = document.getElementById('start-date').value;
    const duration = document.getElementById('duration').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !experience || !guests || !startDate || !duration) {
        alert('Please fill in all required fields');
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Create booking object
    const booking = {
        name,
        email,
        phone,
        experience,
        guests,
        startDate,
        duration,
        message,
        submittedAt: new Date().toLocaleString()
    };

    // Log booking (in production, this would be sent to a server)
    console.log('Booking Submitted:', booking);
    
    // Show success message
    alert(`Thank you, ${name}! We've received your booking inquiry. Our luxury travel specialist will contact you within 24 hours to customize your perfect journey.`);

    // Reset form
    document.querySelector('.booking-form').reset();
    modal.style.display = 'none';

    // In production, you would send this data to your backend:
    // fetch('/api/bookings', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(booking)
    // });
}

// ========================
// NAVBAR SCROLL EFFECT
// ========================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// ========================
// ACTIVE NAV LINK
// ========================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link:not(.cta-nav)');

    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ========================
// IMAGE LAZY LOADING
// ========================

const imageElements = document.querySelectorAll('[style*="background-image"]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            // In production, you'd load the actual image here
            observer.unobserve(element);
        }
    });
}, {
    threshold: 0.1
});

imageElements.forEach(img => {
    imageObserver.observe(img);
});

// ========================
// PARALLAX EFFECT
// ========================

const parallaxElements = document.querySelectorAll('[style*="background-attachment: fixed"]');

window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
        const scrollPosition = window.pageYOffset;
        element.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
});

// ========================
// ENHANCED TOUCH SUPPORT
// ========================

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
        // Swiped left
        closeNavMenu();
    }
}

function closeNavMenu() {
    if (navMenu) {
        navMenu.classList.remove('active');
    }
}

// ========================
// FORM VALIDATION HELPERS
// ========================

const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && !input.value) {
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = '';
        }
    });

    input.addEventListener('focus', () => {
        input.style.borderColor = '';
    });
});

// ========================
// TESTIMONIAL ROTATION
// ========================

let testimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');
const testimonialCount = testimonials.length;

function rotateTestimonials() {
    testimonials.forEach((card, index) => {
        if (index === testimonialIndex) {
            card.style.order = 0;
            card.style.opacity = 1;
        } else {
            card.style.order = index > testimonialIndex ? 1 : -1;
            card.style.opacity = 0.5;
        }
    });
}

// ========================
// GALLERY LIGHTBOX
// ========================

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img) {
            openLightbox(img.src, img.alt);
        }
    });
});

function openLightbox(src, alt) {
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.95);
        z-index: 3000;
        animation: fadeIn 0.3s ease;
    `;

    const imgContainer = document.createElement('div');
    imgContainer.style.cssText = `
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    `;

    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
    `;

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        font-size: 2.5rem;
        cursor: pointer;
    `;

    closeBtn.addEventListener('click', () => {
        lightbox.remove();
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.remove();
        }
    });

    imgContainer.appendChild(image);
    imgContainer.appendChild(closeBtn);
    lightbox.appendChild(imgContainer);
    document.body.appendChild(lightbox);
}

// ========================
// KEYBOARD NAVIGATION
// ========================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close modal if open
        if (modal && modal.style.display === 'block') {
            modal.style.display = 'none';
        }

        // Close lightbox if open
        const lightbox = document.querySelector('.lightbox');
        if (lightbox) {
            lightbox.remove();
        }
    }
});

// ========================
// PERFORMANCE: THROTTLE SCROLL
// ========================

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttledUpdateActiveNavLink = throttle(updateActiveNavLink, 100);
window.addEventListener('scroll', throttledUpdateActiveNavLink);

// ========================
// INIT ON PAGE LOAD
// ========================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Hillborn Organic Coffee website loaded successfully');
    updateActiveNavLink();
});

// ========================
// CLICK TRACKING FOR ANALYTICS
// ========================

document.addEventListener('click', (e) => {
    const btn = e.target.closest('button, a[href^="#"]');
    if (btn) {
        console.log('User clicked:', btn.textContent || btn.innerHTML);
    }
});

// ========================
// CONTACT FORM EMAIL PLACEHOLDER
// ========================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{7,}$/;
    return re.test(phone);
}

// ========================
// UTILITY FUNCTIONS
// ========================

function formatDate(date) {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getCurrentYear() {
    return new Date().getFullYear();
}

// Update copyright year if present
const copyrightElements = document.querySelectorAll('footer p');
copyrightElements.forEach(el => {
    if (el.textContent.includes('2026')) {
        el.textContent = el.textContent.replace('2026', getCurrentYear().toString());
    }
});
