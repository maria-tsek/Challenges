console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = "Pizza gain: " + pizzaGain + "%";
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = "Pizza gain: " + pizzaGain + "%";
  updatePizzaDisplay(pizza1, pizzaSize1);
  updatePizzaDisplay(pizza2, pizzaSize2);
  updateOutputColor(pizzaSize1, pizzaSize2);
});

// Task 1
function calculatePizzaGain(diameter1, diameter2) {
  // Calculate the radii of the pizzas
  var radius1 = diameter1 / 2;
  var radius2 = diameter2 / 2;
  // Calculate the areas of the pizzas
  var area1 = Math.PI * radius1 * radius1;
  var area2 = Math.PI * radius2 * radius2;
  // Calculate the difference in pizza areas
  var pizzaGain = ((area2 - area1) / area1) * 100;
  return Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here

function updatePizzaDisplay(pizzaElement, newSize) {
  const newWidth = (newSize / 24) * 100;
  pizzaElement.style.width = newWidth + "px";
}

// Task 3
// define the function updateOutputColor here

function updateOutputColor(size1, size2) {
  if (size2 >= size1) {
    outputSection.style.backgroundColor = "var(--green)";
  } else {
    outputSection.style.backgroundColor = "var(--red)";
  }
}
