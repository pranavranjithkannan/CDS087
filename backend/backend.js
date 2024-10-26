import express from 'express';
import openAI from 'openai';
import cors from 'cors';
import bodyParser from 'body-parser';

const openai = new openAI({
  apiKey: 'sk-proj-nt5DSpxOkLcKS2gzDkXJT3BlbkFJIXGyR3zF7nfzYAmfTDZp',
});

const app = express();
const port = 5123;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is up & running");
});

app.post('/api/chat', async (req, res) => {
  try {
    const question = req.body["prompt"];
    const response = await getAnswer(question);
    res.json(response);
  } catch (error) {
    console.error('Error in chat endpoint:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log("Server is started on port", port);
});

async function getAnswer(question) {
  console.log("Received question:", question);
  
  // Create the messages array with the user's question
  const messages = [
    {
      "role": "system",
      "content": `You are an Indian law assistant. You must:
1. Only answer questions related to Indian law
2. Explicitly refuse to answer any non-legal questions
3. For legal questions, provide detailed responses with relevant Indian legal codes and precedents
4. If unsure whether a question is law-related, ask for clarification
5. Also give reference links if any`
    },
    {
      "role": "user",
      "content": question
    }
  ];

  try {
    const chat = await openai.chat.completions.create({
      model: "ft:gpt-4o-2024-08-06:personal:lawww:AMdAgKXT",
      messages: messages,
      temperature: 0.7, // Reduced for more focused responses
      max_tokens: 1000,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    console.log("AI response:", chat.choices[0].message.content);
    return chat;
  } catch (error) {
    console.error('Error calling OpenAI:', error);
    throw error;
  }
}