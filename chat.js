function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";
  
  setTimeout(() => {
    const reply = getBotReply(text.toLowerCase());
    addMessage(reply, "bot");
  }, 400);
}

function addMessage(text, sender) {
  const msgBox = document.getElementById("messages");
  const div = document.createElement("div");
  div.className = "bubble";
  if (sender === "user") div.classList.add("user");
  div.innerText = text;
  msgBox.appendChild(div);
  msgBox.scrollTop = msgBox.scrollHeight;
}

function getBotReply(message) {
  const feelings = [
    { keywords: ["sad", "depressed", "unhappy", "hurt"], reply: "I’m really sorry you're feeling that way. You don’t need to hide your sadness here. I'm with you." },
    { keywords: ["anxious", "panic", "nervous", "afraid"], reply: "It’s okay to feel overwhelmed sometimes. Breathe with me for a moment... in... out... you're doing great." },
    { keywords: ["alone", "lonely", "nobody"], reply: "You’re not alone right now. I’m here, quietly listening, whenever you need to talk." },
    { keywords: ["angry", "frustrated", "rage"], reply: "That sounds really hard. I respect you for expressing it. You’re allowed to feel this way." },
    { keywords: ["tired", "exhausted", "drained"], reply: "Rest is not weakness. Maybe for now... just sit here with me. No pressure, just presence." },
    { keywords: ["help", "suicide", "end", "die"], reply: "I'm really concerned about you. Please call someone you trust or reach out to a helpline. You are deeply important. 📞 1860 266 2345" },
    { keywords: ["okay", "better", "fine"], reply: "Even small okay moments matter. I’m happy you're feeling that. Keep going at your pace." },
    { keywords: ["love", "heartbroken", "relationship"], reply: "Matters of the heart are heavy. But you are still whole — even when you feel broken." },
  ];

  for (let group of feelings) {
    if (group.keywords.some(kw => message.includes(kw))) {
      return group.reply;
    }
  }

  const generalReplies = [
    "I'm listening. Tell me more, if you’d like to.",
    "You don’t have to carry everything alone.",
    "It’s okay not to be okay. I’m here beside you.",
    "Let’s sit here for a bit, no need to rush.",
    "I hear you. Your feelings are valid."
  ];

  return generalReplies[Math.floor(Math.random() * generalReplies.length)];
}
