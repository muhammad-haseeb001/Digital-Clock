const allTime = document.querySelectorAll(".time");
const ampm = document.querySelector(".ampm");
const date = document.querySelector("#date");
function clockUpdate() {
  const now = new Date();
  date.textContent = now.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  if (hours < 12) {
    ampm.textContent = "AM";
  } else {
    ampm.textContent = "PM";
  }
  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
  }
  minutes = String(minutes).padStart(2, "0");
  allTime[1].textContent = minutes;
  seconds = String(seconds).padStart(2, "0");
  allTime[2].textContent = seconds;
  hours = String(hours).padStart(2, "0");
  allTime[0].textContent = hours;
}
clockUpdate();
setInterval(clockUpdate, 1000);