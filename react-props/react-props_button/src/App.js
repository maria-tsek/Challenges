import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Button color="blue" disabled={false} text="Click me" />
      <Button color="red" disabled={true} text="Disabled button" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  const buttonStyle = {
    color: color,
  };

  return (
    <button disabled={disabled} style={buttonStyle}>
      {text}
    </button>
  );
}
