const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${input.value}px`;

const inputChange = () => {
  spanText.style.fontSize = `${input.value}px`;
};

input.addEventListener("input", inputChange);
