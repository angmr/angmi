// Get the animated element
const paragraph = document.getElementById("typewriter");
// Get clickable element
const clickme = document.getElementById("secret");

// Add event listener
clickme.addEventListener("click", function() {
    console.log("Clicked");
    paragraph.classList.add('animateWidth');
});