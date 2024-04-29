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






