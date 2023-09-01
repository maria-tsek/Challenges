import { getComputedStyle } from "../../utils/randomColor.js";
export function Circle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getComputedStyle();
  });
  return circle;
}
