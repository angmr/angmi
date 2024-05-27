// Get the link and audio element by their IDs
var audioLink = document.getElementById('audioLink');
var audioPlayer = document.getElementById('audioPlayer');

// Add a click event listener to the link
audioLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link (e.g., navigating to a new page)
    event.preventDefault();

    // Check if the audio is paused, if yes, play it; if not, pause it
    if (audioPlayer.paused) {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
        audioPlayer.currentTime = 0; // Rewind to the beginning
    }});