// Typed.js animation for home section
let typed = new Typed('#animation', {
    strings: ['Photographer.', 
    'Fashion Designer.'],
    typeSpeed: 100,
    backspeed: 5,
    backDelay: 3000,
    loop: true
    });

// Deactivate the current project filter
$(document).on('click','.project-filter li', function(){
    // Activate the correct project filter
    $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
});

// Filter image based on series
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value=='all') {
            $('.project-box').show('1000');
        }
        else {
            $('.project-box').not('.'+value).hide('1000');
            $('.project-box').filter('.'+value).show('1000');
        }
    });
});

// Email validation functions 
function validateEmail(email) {
    // regex validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Phone number validation functions 
function validatePhoneNumber(phone) {
    // regex validation
    return /^\d{10,12}$/.test(phone); // check for 10-12 digit numbers
}

// Toast notification after submit the form
function popUp() {

     // Trigger the <a> link to navigate to #contact
    const link = document.getElementById('contact-link');
    if (link) {
        link.click();
    }
    
    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        },
        customClass: {
            container: 'swal2-toast', 
            popup: 'swal2-toast-border'
        }
    });
    
    // bool to check if data fields are null
    let isValid = true; 

    // Get individual input fields
    const fullName = document.querySelector('.input-name');
    const email = document.querySelector('.input-email');
    const phone = document.querySelector('.input-phoneNo');
    const subject = document.querySelector('.input-subject');
    const message = document.querySelector('.input-msg');

    // Validate each field and display the first error encountered
    if (!fullName.value.trim()) {
        Toast.fire({
            icon: "error",
            title: "Invalid name!",
            iconColor: "#FFA31A",
        });
        fullName.focus();
        isValid = false;
        return; 
    }

    if (!validateEmail(email.value.trim())) {
        Toast.fire({
            icon: "error",
            title: "Invalid email!",
            iconColor: "#FFA31A",
        });
        email.focus();
        isValid = false;
        return;
    }

    if (!validatePhoneNumber(phone.value.trim())) {
        Toast.fire({
            icon: "error",
            title: "Invalid phone number!",
            iconColor: "#FFA31A",
        });
        phone.focus();
        isValid = false;
        return;
    }

    if (!subject.value.trim()) {
        Toast.fire({
            icon: "error",
            title: "Invalid subject!",
            iconColor: "#FFA31A",
        });
        subject.focus();
        isValid = false;
        return;
    }

    if (!message.value.trim()) {
        Toast.fire({
            icon: "error",
            title: "Invalid message!",
            iconColor: "#FFA31A",
        });
        message.focus();
        isValid = false;
        return;
    }

    // If all data fields are not null, prompt success message
    if (isValid) {
        Toast.fire({
            icon: "success",
            title: "Send Message Successfully",
            iconColor: "#FFA31A",
        });

        // Clear all input fields
        [fullName, email, phone, subject, message].forEach(field => field.value = '');
    }
}

// Responsive navigation bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Navigation link will be highlighted 
function handleScroll() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); 

        // Check if the section is in view
        if (top >= offset && top < offset + height) {
            // Deactivate all active link
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Activate the correct link
            let targetLink = document.querySelector(`header nav a[href*="${id}"]`); 
            if (targetLink) { 
                targetLink.classList.add('active');
            }
        }
    });
}

let scrolling = false; 

// Optimize scroll handling
function requestScrollUpdate() {
    if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(() => {
            handleScroll();
            // Allow the next scroll update
            scrolling = false;
        });
    }
}

// Event listener for scroll to be responsive
window.addEventListener('scroll', requestScrollUpdate);

// For phone view
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

// Redirect to home section after reload
window.onload = function() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' }); // For smooth scrolling
    }
};
