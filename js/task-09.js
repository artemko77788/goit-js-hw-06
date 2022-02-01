function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

ref.button.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  ref.span.textContent = color;

  document.body.style.backgroundColor = color;
}
