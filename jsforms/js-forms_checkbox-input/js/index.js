console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const successMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

hideTosError();

function hideSuccessMessage() {
  successMessage.setAttribute("hidden", "");
}
hideSuccessMessage();

function showSuccessMessage() {
  successMessage.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tos = event.target.elements.tos;
  if (!tos.checked) {
    showTosError();
    hideSuccessMessage();
  } else {
    hideTosError();
    showSuccessMessage();
    alert("Form submitted");
  }
});
