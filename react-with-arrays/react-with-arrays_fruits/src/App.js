import React from "react";
import Card from "./components/Card";

export default function App() {
  // Create an array of fruits
  const fruits = [
    {
      id: 1,
      name: "🍌 banana",
      color: "yellow",
    },
    {
      id: 2,
      name: "🍎 apple",
      color: "red",
    },
    {
      id: 3,
      name: "🥑 avocado",
      color: "green",
    },
    {
      id: 4,
      name: "🍉 watermelon",
      color: "green",
    },
    {
      id: 5,
      name: "🍊 Orange",
      color: "orange",
    },
    {
      id: 6,
      name: "🍓 Strawberry",
      color: "red",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => {
        return <Card key={fruit.id} name={fruit.name} color={fruit.color} />;
      })}
    </div>
  );
}
