import { datasource } from "./datasource.js";

const phrase = "É natal hoje?"

function phraseWords() {
    let words = phrase.split(" ").map(word => word.toUpperCase());
    return words;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getPhrase() {
    let words = phraseWords();
    words.forEach(word => {
        if (datasource[word]) {
            optionPhrase = getRandomInt(datasource[word].length)
        }
    })
}

getPhrase();