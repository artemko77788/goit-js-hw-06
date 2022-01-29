const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (
    String(event.currentTarget.value.length) !==
    input.getAttribute("data-length")
  ) {
    input.classList.add("invalid");
    input.classList.remove("valid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
