const generate = document.querySelector(".generate-btn");
const passwordLength = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]></-=";
const allChars = upperCase + lowerCase + number + symbol;
const input = document.querySelector(".display-input");
const copy = document.querySelector(".copy");

generate.addEventListener("click", () => {
  let password = " ";
  while (password.length <= 12) {
    const random = Math.floor(Math.random() * allChars.length);
    password += allChars[random];
  }

  input.value = password;
});

copy.addEventListener("click", () => {
  input.select();
  navigator.clipboard.writeText(input.value);
});
