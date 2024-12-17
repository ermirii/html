
function toggleLoginForm() {
    const form = document.getElementById('loginForm');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}

function saveChanges() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Add your logic to save the changes here
    console.log('Username:', username);
    console.log('Password:', password);
    // Optionally, hide the form after saving
    toggleLoginForm();
}

document.getElementById('home-button').addEventListener('click', function () {
    const video = document.getElementById('fullscreen-video');
    video.style.display = 'block'; // Show the video element
    video.play(); // Start playing the video

    // Request fullscreen mode
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { // Safari
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { // IE/Edge
        video.msRequestFullscreen();
    }
});
document.querySelector('a[href="#footer"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default jump behavior
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
});
  // Smooth scrolling for internal links
  $('a.nav-link').on('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    const target = $(this).attr('href'); // Get the target link
    if (target.startsWith('#')) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000); // Smooth scroll to the target
    } else {
        // Alert for external links
        alert('You are navigating to: ' + target);
        window.open(target, '_blank'); // Open external link in a new tab
    }
})

document.getElementById('toggleMode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class
    const mode = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
    alert('Switched to ' + mode + ' Mode'); // Alert the user
});