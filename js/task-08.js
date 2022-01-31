const inputForm = document.querySelector(".login-form");

inputForm.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  let email = formElement.email.value;
  let password = formElement.password.value;

  if (email.length === 0 || password.length === 0) {
    alert("Заполните все поля");
  } else {
    const formData = new FormData(event.currentTarget);
    // console.log(formData);
    formData.forEach((value, name) => {
      const dataValue = { [name]: value };

      console.log(dataValue);
    });
  }

  inputForm.reset();
}
