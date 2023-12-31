console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

for (const language in languages) {
  const optionElement = document.createElement("option");
  optionElement.textContent = languages[language];
  select.appendChild(optionElement);
}

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

for (const key in nav) {
  console.log(key);

  const listItem = document.createElement("li");

  const anchor = document.createElement("a");

  anchor.href = nav[key].href;
  anchor.textContent = nav[key].text;
  listItem.appendChild(anchor);
  ul.appendChild(listItem);
}
