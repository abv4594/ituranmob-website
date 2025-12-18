// --- GLOBAL FUNCTIONS & UI LOGIC ---

// Modal Logic
function openModal(context) {
    const modal = document.getElementById('leadModal');
    if(modal) {
        modal.classList.add('active');
        const title = document.getElementById('modalTitle');
        if(title) title.innerText = context || "Request Demo";
    }
}

function closeModal() {
    const modal = document.getElementById('leadModal');
    if(modal) modal.classList.remove('active');
}

// FAQ Logic
function toggleFAQ(element) {
    const wasActive = element.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    if (!wasActive) element.classList.add('active');
}

function toggleMoreFAQs() {
    const moreFaqs = document.getElementById('faq-more');
    const btn = document.getElementById('faq-toggle-btn');
    if (moreFaqs.style.display === 'none') {
        moreFaqs.style.display = 'block';
        btn.textContent = 'Show Fewer Questions';
    } else {
        moreFaqs.style.display = 'none';
        btn.textContent = 'Show More Questions';
    }
}

// Navigation & Scroll
function scrollToSection(id) {
    const element = document.getElementById(id);
    if(element) element.scrollIntoView({ behavior: 'smooth' });
}

// --- INITIALIZATION ---
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if(navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '70px';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = '#0c1c33';
                navMenu.style.padding = '2rem';
            }
        });
    }

    // 2. Modal Close on Outside Click
    window.onclick = function(event) {
        const modal = document.getElementById('leadModal');
        if (event.target === modal) closeModal();
    }
});