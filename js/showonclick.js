// Get the hidden element
const div = document.getElementById("hidden-div");
// Get clickable element
const clickme = document.getElementById("secret");

// Add event listener
clickme.addEventListener("click", function() {
    console.log("Clicked");
    div.style.visibility='visible';
});