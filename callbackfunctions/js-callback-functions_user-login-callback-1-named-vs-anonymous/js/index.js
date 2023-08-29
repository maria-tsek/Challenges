console.clear();
//callback function
function showWelcomeMessage() {
  console.log("Welcome!You are logged in now.");
}
//higher-order function
function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call the higher-order function and pass the callback function as the first argument
handleUserLogin(showWelcomeMessage);

// Call the higher-order function without passing a callback function
handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});
