console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}

// The exercise starts here!
//callback function

function showWelcomeMessage(userName) {
  console.log(`Welcome ${userName}! You are logged in now.`);
}

handleUserLogin(showWelcomeMessage);

handleUserLogin((userName) => {
  console.log(`Welcome ${userName}!You are logged in naow.`);
});
