const express = require('express');
const router = express.Router();
const openAi = require('openai');
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

const openai = new openAi.OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.get('/testGptRoute', (req, res) => {
  res.send({ message: 'gpt route works.' });
})

router.post('/animeByGenre', (req, res) => {
  const genre = 'action, adventure';
  console.log("requested genre: " + genre);
  const completion = generateAnimeByGenrePrompt(genre);
  console.log("chat gpt response: " + completion);
  res.status(200).json({ result: completion.data.choices[0].text });
})

async function generateAnimeByGenrePrompt(genreInput) {
  const completion = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `hello`,
    temperature: 0.6,
    max_tokens: 30
  });
  return completion;
}

module.exports = router