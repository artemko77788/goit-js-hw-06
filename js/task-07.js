const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

input.addEventListener("input", inputChange);

function inputChange(event) {
  console.log(event.currentTarget.value);
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
