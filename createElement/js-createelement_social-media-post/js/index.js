console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// New social media post
const newPost = document.createElement("article");
newPost.classList.add("post");

function createText(pText) {
  const pElement = document.createElement("p");
  pElement.textContent = pText;
  return pElement;
}

// Content paragraph
const postContent = createText("It's coding time!!!!!!!!!!!!!!");
postContent.classList.add("post__content");

// The post footer
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");

// Post username
const postUsername = createText("@newuser");
postUsername.classList.add("post__username");

// Like button
const postLikeButton = document.createElement("button");
postLikeButton.setAttribute("type", "button");
postLikeButton.classList.add("post__button");
postLikeButton.setAttribute("data-js", "like-button");
postLikeButton.textContent = "♥ Like";

// Append the elements to the post and postFooter
postFooter.appendChild(postUsername);
postFooter.appendChild(postLikeButton);

newPost.appendChild(postContent);
newPost.appendChild(postFooter);

// Append the new social media post to the body
document.body.appendChild(newPost);
