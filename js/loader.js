// jQuery
// waits for the document to be ready, then loads the contents of "header.html" into 
// any elements with the class "topnav", and "footer.html" into any elements with 
// the class "footer".
// $(document).ready(function() {
//     $(".topnav").load("/html/header.html");
// });

// $(document).ready(function() {
//     $(".footer").load("/html/footer.html");
// });

//----------------------------------------------------------------------------------------------------

// Vanilla JS
// This code uses the fetch API to load the HTML files, and the DOMContentLoaded event to wait until the initial HTML 
// document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The fetch() method is used to make a request to the server to load the HTML files.
// fetch returns a Promise that resolves to the Response to that request, whether it is successful or not. You can then use the text() method,
// which returns a Promise that resolves with a USVString (Unrestricted Scalar Value String) object (basically a string) 
// representing the response's text.
// querySelector is used instead of jQuery's $ function to select elements. It returns the first 
// Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
// innerHTML is used to insert the loaded HTML into the selected elements.

document.addEventListener('DOMContentLoaded', function() {
    fetch('/html/header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('.topnav').forEach(element => {
                element.innerHTML = data;
                executeScripts(element);
            });
        });

    fetch('/html/footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelectorAll('.footer').forEach(element => {
                element.innerHTML = data;
            });
        });
});

/**
 * This function takes an element as a parameter, finds all script tags within the element,
 * and for each one, creates a new script tag, copies over the attributes and code,
 * and replaces the old script tag with the new one. This is necessary because innerHTML
 * does not execute scripts when it inserts the HTML into the DOM.
 * @param {*} element 
 */
function executeScripts(element) {
    Array.from(element.getElementsByTagName("script")).forEach(oldScript => {
        const newScript = document.createElement("script");
        Array.from(oldScript.attributes)
            .forEach(attr => newScript.setAttribute(attr.name, attr.value) );
        newScript.appendChild(document.createTextNode(oldScript.innerHTML));
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}