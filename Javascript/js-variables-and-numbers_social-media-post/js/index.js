console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

const title = "Media Post";
const text = "Explore my media post";
let numberOfLikes = 50;
const postCreator="Maria";
const isReported=false;




/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

console.log("Title", title);
console.log("Text", text);
console.log("Likes", numberOfLikes);
console.log("Creator of the post:", postCreator);
console.log("Reported", isReported);
//increase the likes by one
numberOfLikes = numberOfLikes + 1;

console.log("New number of like", numberOfLikes);

