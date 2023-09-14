console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.log("Network response was not ok");
    } else {
      console.log("Great, the fetch worked");
    }
    const data = await response.json();

    // Log the entire data object
    console.log("Entire data object:", data);

    // Log different values of the data object
    const results = data.results;
    console.log("The results is:", results);
    const firstElement = results[0];
    console.log("First element in the array:", firstElement);
    const elementName = firstElement.name;
    console.log("name:", elementName);

    const fourthElement = results[3];
    console.log("Fourth element in the array:", fourthElement);
    const elementMass = fourthElement.mass;
    console.log("Mass of the 4th elament", elementMass);

    // Bonus: Log the eye color of R2-D2
    const r2d2 = results.find((element) => element.name === "R2-D2");
    if (r2d2) {
      console.log("Eye Color of R2-D2:", r2d2.eye_color);
    } else {
      console.log("R2-D2 not found in the data.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData(url);
