const express = require('express');
const cors = require('cors');
const { OpenAIApi, Configuration } = require('openai');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

// Root route to deliver index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/llm', async (req, res) => {
  try {
    const { messages } = req.body;
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages,
      temperature: 0.5,
    });
    res.json(completion.choices[0].message);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'LLM request failed' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
