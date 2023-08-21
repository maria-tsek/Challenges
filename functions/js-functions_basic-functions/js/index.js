console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

var bookTitle = "Lord of the Rings";
var author = "J.R.R. Tolkien";
var rating = 4.7;
var numberOfSales = 1200;

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120*/

console.log("Title: " + bookTitle);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Sales: " + numberOfSales);



/*Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

numberOfSales += 300; // Increasing sales by 300
rating = 4.9; // Changing rating to 4.9

// Log updated book information to the console
console.log("Title: " + bookTitle);
console.log("Author: " + author);
console.log("Rating: " + rating);
console.log("Sales: " + numberOfSales);

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/
// Function to log book data
function logBookData() {
  console.log("Title: " + bookTitle);
  console.log("Author: " + author);
  console.log("Rating: " + rating);
  console.log("Sales: " + numberOfSales);
}

// Initial log using the function
console.log("Initial Book Data:");
logBookData();

// Increase sales and log data
numberOfSales += 300;
console.log("After 1st Increase:");
logBookData();

// Increase sales again and log data
numberOfSales += 200;
console.log("After 2nd Increase:");
logBookData();

// Increase sales once more and log data
numberOfSales += 500;
console.log("After 3rd Increase:");
logBookData();
