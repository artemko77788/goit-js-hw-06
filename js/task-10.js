function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  input: document.querySelector("#controls  input"),
  box: document.querySelector("#boxes"),
};
refs.buttonCreate.addEventListener("click", valueImput);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function valueImput() {
  let amount = document.querySelector("#controls input").value;

  createBoxes(amount);
}
let size = 30;
function createBoxes(amount) {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  refs.box.appendChild(fragment);
}

function destroyBoxes() {
  size = 30;
  refs.box.innerHTML = "";
}
