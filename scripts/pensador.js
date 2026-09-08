import pensador from "pensador-api";

// Buscar frases por termo
// const result = await pensador({ term: "Fernando Pessoa", max: 3 });
const phrases = [
  await pensador({ term: "alegria", max: 1 }),
  await pensador({ term: "tristeza", max: 1 }),
  await pensador({ term: "raiva", max: 1 }),
  await pensador({ term: "satisfacao", max: 1 }),
];

const history = [
  {
    topic: "bug",
    message: "A alegria não está nas coisas, está em nós.",
    approved: true,
  },
];

const topics = ["bug", "carreira", "deploy", "gestão", "rinha"];

const getQuote = (topic) => {
  const quote = phrases[Math.floor(Math.random() * 4)];

  history.push({
    topic: topic,
    message: quote,
    approved: null,
  });

  console.log(quote.phrases.text);
};

getQuote(topics[0]);
