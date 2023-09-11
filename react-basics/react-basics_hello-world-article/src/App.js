import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <>
      <article className="article">
        <h1>Hello World</h1>
        <p className="text">How are you?</p>
      </article>
    </>
  );
}
