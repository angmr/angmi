// When dropdown content is visible, update aria-expanded attribute

const droplinks = document.getElementsByClassName('droplink');

for (let i=0; i<droplinks.length; i++) {
    droplinks[i].addEventListener('mouseover', function() {
        droplinks[i].setAttribute('aria-expanded', 'true');
    });
}