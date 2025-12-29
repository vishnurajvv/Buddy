BUDDY – Learning & Career Development (Mini Version)

An AI-powered tutor application designed to help students with learning guidance and career development based on their class level and domain of interest, using AI, internet-updated data, and scheduled notifications.

This is a minimal MVP (Mini Version) built with Node.js and JavaScript, suitable for beginners and easy to extend.



 Features

- AI Tutor for learning & career guidance  
- Domain-based personalization (AI, Cybersecurity, Data Science, etc.)  
- Class / Year-based explanations  
- Internet-updated learning & career news  
- Frequency-based notifications (daily – console-based)  
- Lightweight and beginner-friendly (no database required)



 Tech Stack

Frontend: HTML, CSS, JavaScript  
Backend: Node.js, Express  
AI: OpenAI API (can be replaced with Ollama)  
Scheduler: node-cron  
External API: NewsAPI  



 Project Structure (Mini Version)

ai-tutor-mini/
│
├── server.js        # Backend server (AI + updates + notifications)

├── index.html       # Frontend UI

├── style.css        # Basic styling

├── app.js           # Frontend logic

├── package.json     # Dependencies

└── README.md



 Installation & Setup

### Step 1: Clone the Repository
git clone https://github.com/your-username/ai-tutor-mini.git  
cd ai-tutor-mini  

### Step 2: Install Dependencies
npm install  

### Step 3: Add API Keys
Open server.js and replace the following placeholders:

YOUR_OPENAI_API_KEY  
YOUR_NEWS_API_KEY  

with your actual API keys.



 Run the Application

node server.js  

Open your browser and visit:  
http://localhost:3000  



 How It Works

1. Student enters name, class/year, and domain  
2. Student asks a learning or career-related question  
3. AI Tutor provides a clear explanation and career-oriented advice  
4. App fetches latest internet updates related to the selected domain  
5. Daily notifications are triggered using a scheduler (console output)



 Notification System

- Implemented using node-cron  
- Runs daily at 9 AM  
- Can be extended to:
  - Email notifications
  - WhatsApp alerts
  - Push notifications using Firebase



 Example Use Cases

- School and college students  
- Career guidance platforms  
- AI-based learning assistants  
- Academic projects and hackathons  



 Future Enhancements

- AI-based skill-gap analysis  
- Personalized learning roadmaps  
- Voice-based AI tutor  
- Mobile application (React Native / Flutter)  
- Offline AI using Ollama  
- Database integration (MongoDB / Firebase)  

