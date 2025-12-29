import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import cron from "node-cron";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;


let students = [];


app.post("/ai", async (req, res) => {
  const { question, domain, level } = req.body;

  const prompt = `
You are an AI tutor.
Student Level: ${level}
Domain: ${domain}
Question: ${question}
Give a simple and clear explanation with career advice.
`;

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer YOUR_OPENAI_API_KEY`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await response.json();
  res.json({ reply: data.choices[0].message.content });
});


app.get("/updates/:domain", async (req, res) => {
  const domain = req.params.domain;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${domain}&apiKey=YOUR_NEWS_API_KEY`
  );

  const data = await response.json();
  res.json(data.articles.slice(0, 3));
});


app.post("/register", (req, res) => {
  students.push(req.body);
  res.json({ message: "Student Registered" });
});


cron.schedule("0 9 * * *", () => {
  students.forEach(s => {
    console.log(`🔔 Daily Notification for ${s.name}`);
    console.log(`📚 Domain: ${s.domain}`);
    console.log(`🚀 Tip: Learn one new concept today!`);
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
