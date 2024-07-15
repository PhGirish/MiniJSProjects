let hourEl = document.getElementById("hour");
let minEl = document.getElementById("minutes");
let secEl = document.getElementById("seconds");
let ampmEl = document.getElementById("ampm");

function ani() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hourEl.innerText = (hour < 10 ? "0" : "") + hour;
  minEl.innerText = (minutes < 10 ? "0" : "") + minutes;
  secEl.innerText = (seconds < 10 ? "0" : "") + seconds;

  if (hour > 12) {
    hourEl.innerText = (hour < 10 ? "0" : "") + hour - 12;
  } else if (hour >= 12) {
    ampmEl.innerText = "PM";
  } else {
    ampmEl.innerText = "AM";
  }

  requestAnimationFrame(ani);
}
requestAnimationFrame(ani);
