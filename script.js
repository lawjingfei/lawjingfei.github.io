// Typed js animation for home section
let typed = new Typed('#animation', {
    strings: ['Photographer.', 
    'Fashion Designer.'],
    typeSpeed: 100,
    backspeed: 5,
    backDelay: 3000,
    loop: true
    });

// Remove active class to make it responsive
$(document).on('click','.project-filter li', function(){
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

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

function handleScroll() {
sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id'); // Get the section's ID

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Corrected selector to find the link by its href attribute
            let targetLink = document.querySelector(`header nav a[href*="${id}"]`); 
            if (targetLink) { 
                targetLink.classList.add('active');
            }
        }
    });
}

let scrolling = false; 
function requestScrollUpdate() {
    if (!scrolling) {
        scrolling = true;
        requestAnimationFrame(() => {
            handleScroll();
            scrolling = false;
        });
    }
}

// Event Listeners (with optimization)
window.addEventListener('scroll', requestScrollUpdate);
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.onload = function() {
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
};





