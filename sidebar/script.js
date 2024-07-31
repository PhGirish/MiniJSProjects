const menuEl = document.querySelector(".menuIcon");
const containerEl = document.querySelector(".container");
const closeIconEl = document.querySelector(".closeIcon");

menuEl.addEventListener("click", () => {
  if (containerEl.style.display === "block") {
    containerEl.style.display = "none";
  } else {
    containerEl.style.display = "block";
  }
});

closeIconEl.addEventListener("click", () => {
  containerEl.style.display = "none";
});
