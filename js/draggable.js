let isDragging = false;
let mouseX, mouseY;

const circle2 = document.getElementById('c2');
const circle4 = document.getElementById('c4');
const circle5 = document.getElementById('c5');
const form = document.getElementById('form');

//---------FUNCTIONS---------------------------------------------------------------
function setCirclePosition(event, cr) {
    mouseX = event.clientX;
    mouseY = event.clientY;

    // Calculate the new position to center the element on the mouse click
    const elementWidth = cr.offsetWidth;
    const elementHeight = cr.offsetHeight;

    const newLeft = mouseX  - elementWidth / 2;
    const newTop = mouseY - elementHeight / 2;

    cr.style.left = `${newLeft}px`;
    cr.style.top = `${newTop}px`;

    // Prevent text selection during drag
    event.preventDefault();
}

function moveCircle(event, cr) {
    const newX = event.clientX - mouseX ;
    const newY = event.clientY - mouseY ;

    const elementLeft = parseFloat(cr.style.left) || 0;
    const elementTop = parseFloat(cr.style.top) || 0;

    cr.style.left = `${elementLeft + newX}px`;
    cr.style.top = `${elementTop + newY}px`;

    mouseX = event.clientX;
    mouseY = event.clientY;

    console.log(cr.style.left, cr.style.top);
}

function isCollision(div1, div2) {
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    return (
      rect1.left < rect2.right &&
      rect1.right > rect2.left &&
      rect1.top < rect2.bottom &&
      rect1.bottom > rect2.top
    );
}

//---------EVENT LISTENERS---------------------------------------------------------------
circle2.addEventListener('mousedown', (e) => {
    isDragging = true;
    setCirclePosition(e, circle2);
});

circle4.addEventListener('mousedown', (e) => {
    isDragging = true;
    setCirclePosition(e, circle4);

});

circle5.addEventListener('mousedown', (e) => {
    isDragging = true;
    setCirclePosition(e, circle5);

});

circle2.addEventListener('mousemove', (e) => {
  if (isDragging) {
    moveCircle(e, circle2);
  }
  if (isCollision(circle2, form)) {
    circle2.style.backgroundImage = 'linear-gradient(45deg, black, rgba(160, 255, 253, 0.1))';
    circle2.style.boxShadow = '3px 3px 100px 3px rgb(0, 255, 145)';
  } else {
    // Reset backgroundImage
    circle2.style.backgroundImage = 'linear-gradient(45deg, black, rgb(160, 255, 253))';
    circle2.style.boxShadow = '4px 4px 50px rgb(17, 0, 255), -4px -4px 50px rgb(255, 0, 191)';
  }
});

circle4.addEventListener('mousemove', (e) => {
    if (isDragging) {
      moveCircle(e, circle4);
    }
    if (isCollision(circle4, form)) {
      circle4.style.backgroundImage = 'linear-gradient(45deg, black, rgba(160, 255, 253, 0.1))';
      circle4.style.boxShadow = '3px 3px 100px 3px rgb(0, 255, 145)';
    } else {
      // Reset backgroundImage
      circle4.style.backgroundImage = 'linear-gradient(45deg, black, rgb(160, 255, 253))';
      circle4.style.boxShadow = '4px 4px 50px rgb(17, 0, 255), -4px -4px 50px rgb(255, 0, 191)';
    }
});

circle5.addEventListener('mousemove', (e) => {
    if (isDragging) {
      moveCircle(e, circle5);
    }
});

//-----------------------------------------------------------
document.addEventListener('mouseup', () => {
  isDragging = false;
});

//-----------------------------------------------------------
var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

if (vw < 1280) {
  // Remove class 'draggable' from circles
  circle2.classList.remove('movable');
  circle4.classList.remove('movable');
  circle5.classList.remove('movable');
  // Set position of circles
  circle2.style.position = 'absolute';
  circle4.style.position = 'absolute';
  circle5.style.position = 'absolute';
  circle2.style.left = '50%';
  circle4.style.left = '70%';
  circle5.style.left = '80%';
}
