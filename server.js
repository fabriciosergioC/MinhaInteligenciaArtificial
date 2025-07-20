const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req, res) => {
  try {
    const response = await axios.post(
      'https://api.mistral.ai/v1/chat/completions',
      {
        model: "mistral-tiny", // ou "mistral-small", "mistral-medium"
        messages: [
          { role: "user", content: req.body.message }
        ]
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    res.json({ response: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Erro:", error.response?.data || error.message);
    res.status(500).json({ error: "Erro ao processar sua requisição" });
  }
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));