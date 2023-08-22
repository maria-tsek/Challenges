console.clear();

/*
Convert the input value to uppercase when clicking the button
Hint: Access the value by using `.value` on the input element
*/
// Assign the input element to a variable
const inputElement = document.getElementById("first-input");

// Assign the button element to a variable
const buttonElement = document.querySelector('[data-js="button-uppercase"]');

// Add an event listener to the button
buttonElement.addEventListener("click", function () {
  // Access the input value and convert it to uppercase
  const inputValue = inputElement.value;
  const uppercaseValue = inputValue.toUpperCase();

  // Update the input value with the uppercase version
  inputElement.value = uppercaseValue;
});
