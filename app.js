// =======================
// Pinnacle AI Assistant JS
// =======================

// References to DOM elements
const output = document.getElementById('output');
const input = document.getElementById('input-text');
const sendBtn = document.getElementById('send-btn');

// Function to append messages to output
function addMessage(message, sender='user') {
    const msgDiv = document.createElement('div');
    msgDiv.textContent = (sender === 'user' ? 'You: ' : 'AI: ') + message;
    msgDiv.style.marginBottom = '10px';
    output.appendChild(msgDiv);
    output.scrollTop = output.scrollHeight;
}

// Event listener for Send button
sendBtn.addEventListener('click', () => {
    const userMessage = input.value.trim();
    if (!userMessage) return;
    addMessage(userMessage, 'user');
    input.value = '';

    // Placeholder for API call
    setTimeout(() => {
        addMessage('This is where the AI response will appear.', 'ai');
    }, 500);

    // TODO: Replace above with real API call when ready
    // callGeminiAPI(userMessage);
});

// Allow pressing Enter to send
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendBtn.click();
});

// =======================
// API integration placeholder
// =======================

// Example structure for later Gemini API call (do NOT include your key directly)
async function callGeminiAPI(prompt) {
    // const API_KEY = process.env.GEMINI_KEY; // Use environment variables on Vercel
    // const response = await fetch('https://api.gemini.ai/v1/chat', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${API_KEY}`
    //     },
    //     body: JSON.stringify({ prompt })
    // });
    // const data = await response.json();
    // addMessage(data.answer, 'ai');
}
