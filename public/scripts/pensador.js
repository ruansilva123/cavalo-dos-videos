import pensador from "pensador-api";
import { addHistory } from "./history.js";

// Buscar frases por termo
// const result = await pensador({ term: "Fernando Pessoa", max: 3 });
const phrases = [
  await pensador({ term: "alegria", max: 1 }),
  await pensador({ term: "tristeza", max: 1 }),
  await pensador({ term: "raiva", max: 1 }),
  await pensador({ term: "satisfacao", max: 1 }),
];

export const getQuote = () => {
  const quote = phrases[Math.floor(Math.random() * 4)].phrases[0].text;

  return quote;
};
