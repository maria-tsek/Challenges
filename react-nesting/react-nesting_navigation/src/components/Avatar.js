import React from "react";
import Image from "./Image";

function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src="./src/img/avatar.jpg" alt="avatar" />
    </button>
  );
}

export default Avatar;
