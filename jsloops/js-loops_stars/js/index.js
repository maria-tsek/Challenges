console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 0) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  for (let i = 1; i <= 5; i++) {
    const newStar = document.createElement("img");
    if (i <= filledStars) {
      newStar.src = "assets/star-filled.svg";
    } else {
      newStar.src = "assets/star-empty.svg";
    }

    newStar.addEventListener("click", () => {
      console.log(i);
      renderStars(i);
    });

    starContainer.appendChild(newStar);
  }
}

renderStars();
