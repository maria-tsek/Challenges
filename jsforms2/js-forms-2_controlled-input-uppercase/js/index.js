console.clear();

// Select the input field using its data-js attribute
const input = document.querySelector('[data-js="toUpperCase"]');

// Add an event listener for the 'input' event using an arrow function
input.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  const uppercaseValue = inputValue.toUpperCase();
  event.target.value = uppercaseValue;
});
