const d = document;

const clock = (idHours, idMinutes, idSecond) => {
  let $hours = d.getElementById(idHours),
    $minutes = d.getElementById(idMinutes),
    $seconds = d.getElementById(idSecond),
    $days = d.querySelectorAll(".days-container > p");

  let now = new Date(),
    hours = now.getHours(),
    minutes = ("0" + now.getMinutes()).slice(-2),
    seconds = ("0" + now.getSeconds()).slice(-2),
    ampm,
    day = now.getDay(),
    date = ("0" + now.getDate()).slice(-2),
    month = now.getMonth(),
    year = now.getFullYear();

  let days = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
  let months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "Ma",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];

  if (hours >= 12) {
    hours -= 12;
    d.getElementById("am").classList.add("disabled");
    d.getElementById("pm").classList.remove("disabled");
  } else {
    d.getElementById("am").classList.remove("disabled");
    d.getElementById("pm").classList.add("disabled");
  }

  if (hours === 0) hours = 12;
  if (hours < 10) hours = "0" + hours;

  $hours.textContent = hours;
  $minutes.textContent = minutes;
  $seconds.textContent = seconds;
  $days[day].classList.remove("disabled");
};

d.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    clock("hours", "minutes", "seconds");
  }, 1000);
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
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
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
