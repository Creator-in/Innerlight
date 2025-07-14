const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const chatMessages = document.getElementById('chatMessages');

const responses = [
  "I hear you. That sounds really difficult to carry.",
  "Thank you for sharing that with me. Your feelings make complete sense.",
  "It takes courage to open up about what you're going through.",
  "You're being so brave by talking about this. I'm here with you.",
  "That sounds overwhelming. You don't have to face this alone.",
  "I can feel how much this means to you. Your emotions are valid.",
  "Sometimes just having someone listen can help lighten the load a little.",
  "You're showing such strength by reaching out. That matters.",
  "I'm holding space for everything you're feeling right now.",
  "Thank you for trusting me with your thoughts. I'm here to listen."
];

function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user' : 'ai'}`;
  messageDiv.textContent = text;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message, true);
    messageInput.value = '';

    setTimeout(() => {
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse);
    }, 1000 + Math.random() * 1000);
  }
}

sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
});

// Auto-resize textarea
messageInput.addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});

// Save moment functionality
document.querySelector('.save-moment').addEventListener('click', function () {
  this.textContent = 'Moment saved ✨';
  this.style.background = 'rgba(106, 90, 205, 0.3)';
  setTimeout(() => {
    this.textContent = 'Save this moment';
    this.style.background = 'rgba(255, 255, 255, 0.08)';
  }, 2000);
});
