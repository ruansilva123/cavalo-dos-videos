import express from "express";
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import { getPhrase } from "./src/script.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.post("/resposta", (req, res) => {
    console.log(req.body);
    const phrase = req.body;
    selectedPhrase = getPhrase(phrase.phrase);
    res.json({ phrase: selectedPhrase });
})

app.listen(3000);