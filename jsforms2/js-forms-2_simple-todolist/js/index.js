console.clear();

const form = document.querySelector('[data-js="form"]');
const todoList = document.querySelector('[data-js="todoList"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  form.reset();
  event.target.elements.headline.focus();
  addTodoToList(data);
});

function addTodoToList(data) {
  const listItem = document.createElement("li");
  const headline = document.createElement("h2");
  headline.textContent = data.headline;
  const text = document.createElement("p");
  text.textContent = data.task;
  listItem.appendChild(headline);
  listItem.appendChild(text);
  todoList.appendChild(listItem);
}
