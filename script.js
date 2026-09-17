const modalOverlay = document.getElementById('modalOverlay');
const openModalBtn = document.getElementById('openModalBtn');
const heroBookBtn = document.getElementById('heroBookBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const bookingForm = document.getElementById('bookingForm');
const successMsg = document.getElementById('successMsg');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
const filterBtns = document.querySelectorAll('.filter-btn');
const menuCards = document.querySelectorAll('.menu-card');
const menuSearchInput = document.getElementById('menuSearchInput');
const contactForm = document.getElementById('contactForm');
const contactSuccessMsg = document.getElementById('contactSuccessMsg');

function openModal() {
    modalOverlay.style.display = 'flex';
    successMsg.style.display = 'none';
    bookingForm.reset();
}

function closeModal() {
    modalOverlay.style.display = 'none';
}

function handleFilterClick(btn) {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filterValue = btn.getAttribute('data-filter');

    menuCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function handleOutsideClick(e) {
    if (e.target === modalOverlay) {
        closeModal();
    }
}

function handleBookingSubmit(e) {
    e.preventDefault();
    successMsg.style.display = 'block';
    setTimeout(() => {
        closeModal();
    }, 1800);
}

function toggleMobileMenu() {
    navLinks.classList.toggle('active');
}

function handleMenuSearch(e) {
    const term = e.target.value.toLowerCase();
    
    menuCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(term)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function handleContactSubmit(e) {
    e.preventDefault();
    contactSuccessMsg.style.display = 'block';
    contactForm.reset();
    setTimeout(() => {
        contactSuccessMsg.style.display = 'none';
    }, 2500);
}

openModalBtn.addEventListener('click', openModal);
heroBookBtn.addEventListener('click', openModal);
closeModalBtn.addEventListener('click', closeModal);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => handleFilterClick(btn));
});

window.addEventListener('click', handleOutsideClick);
bookingForm.addEventListener('submit', handleBookingSubmit);
hamburger.addEventListener('click', toggleMobileMenu);

if (menuSearchInput) {
    menuSearchInput.addEventListener('keyup', handleMenuSearch);
}

if (contactForm) {
    contactForm.addEventListener('submit', handleContactSubmit);
}