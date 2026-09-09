import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { getPhrase } from "./src/script.js";
import pensador from "pensador-api";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors("*"));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/resposta", (req, res) => {
  try {
    console.log(req.body);
    const phrase = req.body;
    selectedPhrase = getPhrase(phrase.phrase);
    res.json({ phrase: selectedPhrase });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/pensador", async (req, res) => {
  const phrases = [
    await pensador({ term: "alegria", max: 1 }),
    await pensador({ term: "tristeza", max: 1 }),
    await pensador({ term: "raiva", max: 1 }),
    await pensador({ term: "satisfacao", max: 1 }),
  ];

  const quote = phrases[Math.floor(Math.random() * 4)].phrases[0].text;

  return res.status(200).json(quote);
});

app.listen(3000);
