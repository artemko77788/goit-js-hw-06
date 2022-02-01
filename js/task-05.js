const refs = {
  input: document.querySelector("#name-input"),
  spanText: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", onInput);

const text = refs.spanText.textContent;

function onInput(event) {
  if (event.currentTarget.value.trim() !== "") {
    refs.spanText.textContent = event.currentTarget.value;
  } else {
    refs.spanText.textContent = text;
  }
}
