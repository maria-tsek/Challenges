console.clear();

const people = [
  {
    name: "Homer",
    age: 39,
    parents: { mothersName: "Mona", fathersName: "Abe" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    friend: { name: "Moe Szyslak", work: "owner of Moes Tavern" },
    "other friends": ["Barney Gumble", "Carl Carlson", "Lenny Leonard"],
    color_cloth: "white",
  },
  {
    name: "Marge",
    age: 36,
    parents: {
      mothersName: "Jacqueline Bouvier",
      fathersName: "Clancy Bouvier",
    },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    kids: [
      { name: "Bart", child_number: "first" },
      { name: "Lisa", child_number: "second" },
      { name: "Maggie", child_number: "third" },
    ],
    color_cloth: "lightgreen",
  },
  {
    name: "Bart",
    age: 10,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: ["Ay Caramba!", "Eat my shorts!", "I didnt do it!"],
    color_cloth: "red",
  },
  {
    name: "Lisa",
    age: 8,
    parents: { mothersName: "Marge", fathersName: "Homer" },
    pet: { animal: "dog", name: "Santa's Little Helper" },
    quotes: [
      "Bart!",
      "If anyone wants me, Ill be in my room.",
      "Quit it, Bart!",
    ],
    color_cloth: "orange",
  },
];

// EXERCISE 1
// Change the value of the variable nameOfFirstPerson to equal the name of the first person.

<<<<<<< Updated upstream
const nameOfFirstPerson = "Homer"; 
=======
const nameOfFirstPerson = people[0].name;
>>>>>>> Stashed changes

// EXERCISE 2
// Change the value of the variable homersOtherFriends to equal the other friends of Homer.

<<<<<<< Updated upstream
const homersOtherFriends = ["Barney Gumble", "Carl Carlson", "Lenny Leonard"];
=======
const homersOtherFriends = people[0]["other friends"];
>>>>>>> Stashed changes

// EXERCISE 3
// Change the value of the variable ageOfThirdPerson to equal the age of the third person.

<<<<<<< Updated upstream
const ageOfThirdPerson = 10;
=======
const ageOfThirdPerson = people[2].age;
>>>>>>> Stashed changes

// EXERCISE 4
// Change the value of the variable mothersNameOfSecondPerson to equal the mothers name of the second person.

<<<<<<< Updated upstream
const mothersNameOfSecondPerson = "Jacqueline Bouvier";
=======
const mothersNameOfSecondPerson = people[1].parents.mothersName;


>>>>>>> Stashed changes

// EXERCISE 5
// Change the value of the variable animaltypeOfLisasPet to equal the type of animal of Lisas pet.

<<<<<<< Updated upstream
const animaltypeOfLisasPet =  "dog";
=======
const animaltypeOfLisasPet = people[3].pet.animal;
>>>>>>> Stashed changes

export {
  nameOfFirstPerson,
  homersOtherFriends,
  ageOfThirdPerson,
  mothersNameOfSecondPerson,
  animaltypeOfLisasPet,
};
