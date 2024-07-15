const inputEl = document.querySelector(".inputbox");
const buttonEl = document.querySelector(".butt");
const listEl = document.querySelector(".list-container");

buttonEl.addEventListener("click", () => {
  if (inputEl.value == "") {
    alert("please enter something first");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputEl.value;
    listEl.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputEl.value = "";
});

listEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
