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
});
