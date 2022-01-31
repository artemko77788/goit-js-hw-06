function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

ref.button.addEventListener("click", changeColor);

function changeColor() {
  ref.span.textContent = getRandomHexColor();

  document.body.style.backgroundColor = getRandomHexColor();
}
