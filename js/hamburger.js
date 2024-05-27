// Function to toggle the menu
function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('open');
    document.body.classList.toggle('menu-open');
}

function toggleSubMenu(elem) {
    var content = document.getElementById(`drop-content-${elem}`);
    content.classList.toggle('visible');

    var dropdown = document.querySelector(`#dropdown-${elem}`);
    dropdown.classList.toggle('open');
}

const allDroplinks = document.getElementsByClassName('droplink');
for (let i = 0; i < allDroplinks.length; i++) {
    allDroplinks[i].addEventListener('click', function() {
        // pass a reference to the function without invoking it
        toggleSubMenu(i);
    });
}