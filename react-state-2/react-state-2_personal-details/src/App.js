import React, { useState } from "react";
import "./styles.css";
import Form from "./components/Form.js";

export default function App() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Get the form field values from the event target

    setName(event.target.elements.name.value);
    setEmail(event.target.elements.email.value);
    // Reset the form fields
    event.target.reset();
  }
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name}</span>
      </p>
      <p>
        Email: <span className="output">{email}</span>
      </p>
    </div>
  );
}
