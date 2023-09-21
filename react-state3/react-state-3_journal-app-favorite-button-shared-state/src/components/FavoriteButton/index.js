// import { useState } from "react";
import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";

export default function FavoriteButton({ isFavorite, id, onToggleFavorite }) {
  // const [isFavorite, setIsFavorite] = useState(false); //remove

  return (
    <button
      className="favorite-button"
      onClick={() => {
        // setIsFavorite(!isFavorite);
        onToggleFavorite(id); // Call onToggleFavorite and pass the id
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
