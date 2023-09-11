import React from "react";
import "./styles.css";

export default function App() {
  const valueA = 1;
  const valueB = 2;
  return (
    <div>
      <Sum valueA={valueA} valueB={valueB} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  const sum = valueA + valueB;
  return <p>{`${valueA} + ${valueB} = ${sum}`}</p>;
}
