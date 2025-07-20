// ...existing code...
(async () => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent("Teste de chave Gemini");
    console.log("Resposta Gemini:", result.response.text());
  } catch (error) {
    console.error("Erro ao testar chave Gemini:", error.message);
  }
})();
// ...existing code...