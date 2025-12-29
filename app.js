const API = "http://localhost:3000";

async function register() {
  await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name.value,
      level: level.value,
      domain: domain.value
    })
  });
  alert("Registered successfully!");
}

async function askAI() {
  const res = await fetch(`${API}/ai`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: question.value,
      domain: domain.value,
      level: level.value
    })
  });

  const data = await res.json();
  response.innerText = data.reply;

  loadUpdates();
}

async function loadUpdates() {
  const res = await fetch(`${API}/updates/${domain.value}`);
  const data = await res.json();

  updates.innerHTML = "";
  data.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item.title;
    updates.appendChild(li);
  });
}
