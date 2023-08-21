console.clear();

logSeparator(1);
/*
1: The function below is not executed. Can you figure out why? Find the bug and fix it.
*/

// Uncomment the next line of code and figure out why it does not work:

logText(); // Added parentheses to call the function

function logText() {
  console.log("This text does not appear. Why?");//now this text appears 
}

logSeparator(2);
/*
2: Look at the functions below. They are almost identical. Can you find a way to generalize them into a new function with an input parameter? Replace the function calls below with your new function.
*/

function greetBob() {
  console.log("Welcome Bob, good to see you again!");
}

function greetAlice() {
  console.log("Welcome Alice, good to see you again!");
}

function greetMary() {
  console.log("Welcome Mary, good to see you again!");
}

greetAlice();
greetBob();
greetMary();

// Generalized greeting function
function greet(name) {
  console.log("Welcome " + name + ", good to see you again!");
}

// Using the new generalized greeting function
greet("Alice");
greet("Bob");
greet("Mary");

logSeparator(3);

/*
3: We log a little separation text for each subtask. This is repetitive code, so lets write a function 'logSeparator' 
which takes the number of the exercise as an input parameter and logs the respective separator. 
then use this function to replace the existing separator logs in this javascript file.
*/

// Function to log separators
function logSeparator(exerciseNumber) {
  console.log("-------------");
  console.log(exerciseNumber + ":");
}







