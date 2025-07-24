const express = require('express');
const cors = require('cors');
const { OpenAIApi, Configuration } = require('openai');

const app = express();
app.use(express.json());
app.use(cors());

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/llm', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
      temperature: 0.5,
    });
    res.json(completion.data.choices[0].message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'LLM request failed' });
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
