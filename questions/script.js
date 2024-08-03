const plusButton = document.querySelectorAll(".fa-plus");
const minusButton = document.querySelectorAll(".fa-minus");
const answer = document.querySelectorAll(".answer");

plusButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    answer[index].style.display = "block";
  });
});

minusButton.forEach((button, index) => {
  button.addEventListener("click", () => {
    answer[index].style.display = "none";
  });
});

plusButton.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.parentElement.parentElement);
  });
});
