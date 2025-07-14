// Innerlight Chat JavaScript
// Emotional support chat functionality

// Gentle, supportive AI responses
const supportiveResponses = [
    "I hear you, and your feelings are completely valid.",
    "Thank you for sharing that with me. You're being so brave.",
    "It's okay to feel this way. You're not alone in this.",
    "I'm here with you, and I'm listening to every word.",
    "Your emotions matter, and so do you.",
    "Take a deep breath. You're doing better than you think.",
    "It's perfectly normal to feel overwhelmed sometimes.",
    "You have the strength to get through this, one step at a time.",
    "I believe in you, even when you might not believe in yourself.",
    "Your feelings are important, and they deserve to be heard.",
    "It's okay to take things slowly. There's no rush.",
    "You're showing such courage by reaching out today.",
    "Every small step forward is still progress.",
    "You don't have to carry this burden alone.",
    "It's okay to not be okay sometimes. That's part of being human.",
    "You're worthy of love and compassion, especially from yourself.",
    "Your journey matters, and I'm honored to be part of it.",
    "Sometimes the bravest thing you can do is ask for help.",
    "You're doing the best you can with what you have right now.",
    "It's okay to rest when you need to. Self-care isn't selfish.",
    "Your voice matters, and your story deserves to be told.",
    "You're not broken. You're healing, and that takes time.",
    "I see your strength, even in your vulnerability.",
    "You're allowed to feel proud of yourself for being here.",
    "It's okay to have difficult days. Tomorrow is a new beginning."
];

// DOM elements
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messagesContainer = document.getElementById('messagesContainer');

// Auto-resize textarea function
function autoResizeTextarea() {
    messageInput.style.height = 'auto';
    const scrollHeight = messageInput.scrollHeight;
    const maxHeight = 120;
    
    if (scrollHeight > maxHeight) {
        messageInput.style.height = maxHeight + 'px';
        messageInput.style.overflowY = 'auto';
    } else {
        messageInput.style.height = scrollHeight + 'px';
        messageInput.style.overflowY = 'hidden';
    }
}

// Create and add message to chat
function addMessage(content, type) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${type}`;
    messageElement.textContent = content;
    
    // Add fade-in animation
    messageElement.style.opacity = '0';
    messageElement.style.transform = 'translateY(10px)';
    
    messagesContainer.appendChild(messageElement);
    
    // Trigger animation
    setTimeout(() => {
        messageElement.style.opacity = '1';
        messageElement.style.transform = 'translateY(0)';
    }, 50);
    
    // Auto-scroll to bottom
    scrollToBottom();
}

// Scroll chat to bottom
function scrollToBottom() {
    setTimeout(() => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 100);
}

// Get random supportive response
function getRandomResponse() {
    return supportiveResponses[Math.floor(Math.random() * supportiveResponses.length)];
}

// Send message function
function sendMessage() {
    const message = messageInput.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    
    // Clear input and reset height
    messageInput.value = '';
    messageInput.style.height = 'auto';
    
    // Disable send button temporarily
    sendButton.disabled = true;
    sendButton.textContent = 'Sending...';
    
    // Add AI response after 1 second delay
    setTimeout(() => {
        const aiResponse = getRandomResponse();
        addMessage(aiResponse, 'ai');
        
        // Re-enable send button
        sendButton.disabled = false;
        sendButton.textContent = 'Send';
        
        // Focus back on input
        messageInput.focus();
    }, 1000);
}

// Event listeners
sendButton.addEventListener('click', sendMessage);

messageInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

messageInput.addEventListener('input', autoResizeTextarea);

// Initialize
messageInput.focus();

// Welcome message on page load
window.addEventListener('load', () => {
    setTimeout(() => {
        addMessage("Hello there. I'm here to listen and support you. Feel free to share whatever is on your mind today.", 'ai');
    }, 500);
});
