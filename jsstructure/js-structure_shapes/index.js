import { getComputedStyle } from "./utils/randomColor.js";
import { Circle } from "./components/Circle/Circle.js";

console.clear();

const root = document.getElementById("root");

const square = document.createElement("div");
square.classList.add("square");
square.addEventListener("click", () => {
  square.style.backgroundColor = getComputedStyle();
});

const pentagon = document.createElement("div");
pentagon.classList.add("pentagon");
pentagon.addEventListener("click", () => {
  pentagon.style.backgroundColor = getComputedStyle();
});

const circleElement = Circle();

root.append(circleElement, square, pentagon);
