import { datasource } from "./datasource.js";

const phrase = "";

function phraseWords() {
  let words = phrase.split(" ").map((word) => word.toUpperCase());
  return words;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPhrase() {
  let selectedPhrase = "";

  let words = phraseWords();
  words.forEach((word) => {
    if (datasource[word]) {
      let optionPhrase = getRandomInt(datasource[word].length);
      selectedPhrase = datasource[word][optionPhrase];
      // add break
    }
  });

  if (selectedPhrase === "") {
    // fallback api
  }

  if (selectedPhrase === "") {
    return "Assine a Codecon PRO";
  }
  return selectedPhrase;
}

function showAnswer() {
  const divAnswer = document.getElementById("answer");

  selectedPhrase = getPhrase();

  divAnswer.classList.remove("hide");
}

function hideAnswer() {
  const divAnswer = document.getElementById("answer");

  divAnswer.classList.add("hide");
}
