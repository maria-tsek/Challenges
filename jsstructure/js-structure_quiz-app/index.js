import { App } from "./App/App.js";

function render() {
  const root = document.querySelector("#root");
  root.append(App());
}
render();
