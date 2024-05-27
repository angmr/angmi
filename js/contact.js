document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Collect form data
        var formData = new FormData(form);

        // Send form data via AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "contact.php");
        xhr.onload = function() {
            if (xhr.status === 200) {
                alert("Thank you! Your message has been sent.");
                form.reset(); // Reset the form
            } else {
                alert("Oops! Something went wrong.");
            }
        };
        xhr.send(formData);
    });
});