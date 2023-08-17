console.clear();

// Initialize and assign values to variables
const mealCost = 50;       
const tipPercentage = 15; 
//Calculate the tip amount by multiplying the meal cost by the tip percentage, and store the result in a variable called tipAmount.
const tipAmount = (mealCost * tipPercentage) / 100;
//Calculate the total cost of the meal, including tip, by adding the mealCost variable and the tipAmount variable, and store the result in a variable called totalCost.
const totalCost =(mealCost + tipAmount);
//Log out a message using the console.log() method that should look like this: // The total cost of your bill is: 33 euros
console.log("The total cost of you bill is:" , totalCost);