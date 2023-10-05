import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //Declare a state variable for the entered passcode
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  // Implement a function to handle button clicks and update the state
  const handleClick = (emoji) => {
    setCode((prevCode) => prevCode + emoji);
  };

  // Modify the JSX to use the state variable for displaying the entered passcode
  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleClick("🐡")}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐋")}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐠")}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => {
          setCode(""); // Clear the entered passcode
        }}
      >
        Reset
      </button>
      <h2>{code}</h2>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
