console.clear();

// Select the input field using its data-js attribute
const input = document.querySelector('[data-js="toUpperCase"]');

// Add an event listener for the 'input' event using an arrow function
input.addEventListener("input", (event) => {
  // Get the current value of the input field
  const inputValue = event.target.value;

  // Convert the input value to uppercase and store it in a new variable
  const uppercaseValue = inputValue.toUpperCase();

  // Set the input field's value to the uppercase value
  event.target.value = uppercaseValue;
});
