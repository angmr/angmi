class Carousel {
  constructor(containerId) {
    this.carousel = document.getElementById(containerId);
    this.prevBtn = document.getElementById(`prev-btn${containerId.charAt(containerId.length - 1)}`);
    this.nextBtn = document.getElementById(`next-btn${containerId.charAt(containerId.length - 1)}`);
    this.containerWidth = this.carousel.parentElement.offsetWidth;
    this.currentIndex = 0;
    this.totalImages = this.carousel.querySelectorAll('.carousel-image').length;

    this.nextBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex + 1) % this.totalImages;
      this.updateCarousel();
      console.log("clicked on next button");
    });

    this.prevBtn.addEventListener('click', () => {
      this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
      this.updateCarousel();
      console.log("clicked on prev button");
    });
  }

  updateCarousel() {
      const newTransformValue = -this.currentIndex * 100 + '%';
      this.carousel.style.transform = `translateX(${newTransformValue})`;
    }
}

// Add all page carousels to a NodeList
var allCarousels = document.querySelectorAll('.carousel');

var realCarousels = [];

//Iterate over NodeList with a loop and create as many carousels as list items
for (var i = 0; i < allCarousels.length; i++) {
    var carsousel = new Carousel(`carousel${i}`);
    realCarousels.push(carsousel);
}

// Get viewport width
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

if (vw < 800) {
  for (let i = 0; i < realCarousels.length; i++) {
    realCarousels[i].addEventListener('click', enterLandscapeMode);
    realCarousels[i].style.width = "100%";
    const exitBtn = document.createElement('button');
    exitBtn.innerHTML = "Exit Full Screen";
    exitBtn.style.position = "absolute";
    exitBtn.style.top = "0";
    exitBtn.style.right = "0";
    exitBtn.style.zIndex = "100";
    exitBtn.addEventListener('click', exitLandscapeMode);
  }
}

function enterLandscapeMode() {
  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock('landscape');
  } else if (screen.lockOrientation) {
    screen.lockOrientation('landscape');
  } else if (screen.mozLockOrientation) {
    screen.mozLockOrientation('landscape');
  } else if (screen.msLockOrientation) {
    screen.msLockOrientation('landscape');
  }
}

function exitLandscapeMode() {
  if (screen.orientation && screen.orientation.unlock) {
    screen.orientation.unlock();
  } else if (screen.unlockOrientation) {
    screen.unlockOrientation();
  } else if (screen.mozUnlockOrientation) {
    screen.mozUnlockOrientation();
  } else if (screen.msUnlockOrientation) {
    screen.msUnlockOrientation();
  }
}