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
})

app.listen(3000);