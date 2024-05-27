particlesJS("particles-js", {
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ff6699"
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },

    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100
        },
        push: {
          particles_nb: 40
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
});

// get viewport width and welcome button
const welcome = document.getElementById("welcome");
var vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// if viewport width is less than 800px, remove particles-js
if (vw < 800) {
  document.getElementById("particles-js").remove();
  welcome.style.cursor = "default";
} else {
  welcome.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("particles-js").style.opacity = "100%";
  });
}