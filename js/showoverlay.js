// Get the link and overlay element by their IDs
var showOverlayLink = document.getElementById('showOverlay');
var overlay = document.getElementById('overlay');
var hideOverlayButton = document.getElementById('hideOverlay');

// Add a click event listener to the link
showOverlayLink.addEventListener('click', function(event) {
    // Prevent the default behavior of the link (e.g., navigating to a new page)
    event.preventDefault();

    // Show the overlay
    overlay.style.display = 'block';
});

// Add a click event listener to the close button
hideOverlayButton.addEventListener('click', function() {
    // Hide the overlay
    overlay.style.display = 'none';
});