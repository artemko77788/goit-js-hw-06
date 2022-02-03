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

function valueImput() {
  let amount = document.querySelector("#controls input").value;

  createBoxes(amount);
}

function createBoxes(amount) {
  const sizeBaseEl = 30;
  // const div = document.createElement("div");
  // div.style.cssText = `width: ${sizeBaseEl}px; height: ${sizeBaseEl}px; background-color: ${getRandomHexColor()}`;
  // refs.box.appendChild(div);
  // console.log("sadf");
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const size = sizeBaseEl + i * 10;
    const div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
    fragment.appendChild(div);
  }
  refs.box.appendChild(fragment);
}
// const render = document.querySelector("[data-create]");
// const destroy = document.querySelector("[data-destroy]");
// const box = document.getElementById("boxes");
// render.addEventListener("click", getAmount);
// destroy.addEventListener("click", destroyBoxes);

// function getAmount() {
//   var amount = +document.querySelector("#controls input").value;
//   createBoxes(amount);
// }

// function createBoxes(amount) {
//   var basicSize = 30;
//   var fragment = document.createDocumentFragment();
//   for (var i = 0; i < amount; i++) {
//     var size = basicSize + i * 10;
//     var div = document.createElement("div");
//     div.style.cssText = `width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}`;
//     fragment.appendChild(div);
//   }
//   box.appendChild(fragment);
// }

// function destroyBoxes() {
//   box.innerHTML = "";
// }
