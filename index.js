const quotes = [
  "Let no man pull you low enough to hate him.",
  "Don't watch the clock; do what it does. Keep going.",
  "The secret of getting ahead is getting started.",
  "Well done is better than well said.",
  "You miss 100% of the shots you don’t take.",
  "A goal is a dream with a deadline.",
  "In this business you either sink or swim or you don't.",
  "Trying is winning in the moment.",
  "Fall down seven times and stand up eight.",
  "You just can't beat the person who never gives up.",
  "There is little success where there is little laughter.",
  "I think age is a very high price to pay for maturity.",
  "When you have given nothing, ask for nothing.",
  "A bully is not reasonable - he is persuaded only by threats.",
];

function randomQuoteGenerator() {
  const random = Math.trunc(Math.random() * 11) + 1;
  //console.log(input);
  return (input.value = quotes[random]);
}

const input = document.querySelector(".input");
const button = document.querySelector("button");

button.addEventListener("click", randomQuoteGenerator);
window.addEventListener("load", randomQuoteGenerator);
