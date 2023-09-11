import React from "react";
import "./styles.css";

export default function App() {
  return (
    <>
      <Button
        onButtonclick={() => {
          console.log("click 1");
        }}
        color="green"
        disabled={false}
        text="Hi"
      />
      <Button
        onButtonclick={() => {
          console.log("click 2");
        }}
        color="green"
        disabled={false}
        text="Hello"
      />
    </>
  );
}

function Button({ color = "blue", disabled, text, onButtonclick }) {
  return (
    <button
      onClick={onButtonclick}
      disabled={disabled}
      style={{ backgroundColor: color, color: "white" }}
    >
      {text}
    </button>
  );
}
