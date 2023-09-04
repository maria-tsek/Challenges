import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;

  try {
    const response = await fetch(colorApiUrl);

    if (!response.ok) {
      console.log("Network response was not ok");
    } else {
      const data = await response.json();

      // Extract the hex value and name of the closest named color from the response data
      const closestNamedHex = data.name.closest_named_hex;
      const randomColorName = data.name.value;

      // Call the setColorToGuess function to set the color to guess
      setColorToGuess(closestNamedHex, randomColorName);
    }
  } catch (error) {
    console.error("Error fetching color data:", error);
  }
}
