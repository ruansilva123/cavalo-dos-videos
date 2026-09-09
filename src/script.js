import { datasource } from "./datasource.js";
import { getQuote } from "./pensador.js";

function phraseWords(phrase) {
  let words = phrase.split(" ").map((word) => word.toUpperCase());
  return words;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getPhrase(phrase) {
  let selectedPhrase = "";

  let words = phraseWords(phrase);
  words.forEach((word) => {
    if (datasource[word]) {
      let optionPhrase = getRandomInt(datasource[word].length);
      selectedPhrase = datasource[word][optionPhrase];
      // add break
    }
  });

  if (selectedPhrase === "") {
    selectedPhrase = getQuote();
  }

  if (selectedPhrase === "") {
    return "Assine a Codecon PRO";
  }
  return selectedPhrase;
}