
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

   