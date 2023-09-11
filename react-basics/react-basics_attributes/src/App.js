import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <article className="article">
        <h2 className="article__title">Hello Honey!</h2>
        <label htmlFor="articleInput">Label:</label>
        <input type="text" id="articleInput" name="article_greece" />
        <a
          className="article__link"
          href="https://en.wikipedia.org/wiki/Greece"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia Article
        </a>
      </article>
    </div>
  );
}
