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

// Play the audio once trigger the button
$(document).on('click', '.project-filter li', function() {
    // Get the audio element
    let audio = document.getElementById("clickSound"); 

    // Ensure the audio has loaded (optional, if you preloaded it)
    audio.addEventListener('canplaythrough', function() {
    audio.play(); 
    });

    // If you didn't preload, load and then play
    if (audio.readyState < 3) { // Check if audio isn't loaded yet
        audio.load();
        audio.play();
    } else {
      audio.currentTime = 0; // Reset audio to the start if already loaded
        audio.play();
    }
});





