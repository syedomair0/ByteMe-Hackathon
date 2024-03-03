import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import OpenAI from 'openai';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.PORT || 5001;

// Assuming you have set OPENAI_API_KEY in your environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/generate-plan', async (req, res) => {
  const { locations } = req.body;

  if (!locations || locations.length === 0) {
    return res.status(400).json({ error: 'No locations provided' });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{
        role: "system",
        content: `Create a date plan for the following locations: ${locations.join(', ')}.`
      }]
    });

    res.json({ plan: response.choices[0].message.content });
  } catch (error) {
    console.error("Failed to call OpenAI API:", error);
    res.status(500).json({ error: 'Error generating plan' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
