console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = cards.map((card) => {
  return card.answer.toLowerCase();
});
console.log("lowerCaseAnswers", lowerCaseAnswers);

const questionsAndAnswersTogether = cards.map((card) => {
  return `${card.question} - ${card.answer}`;
});
console.log("questionsAndAnswersTogether", questionsAndAnswersTogether);

const questionAndAnswer = cards.map((card) => {
  const newCard = {};
  newCard["question"] = card.question;
  newCard["answer"] = card.answer;
  return newCard;
});
console.log("questionAndAnswer", questionAndAnswer); // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
