document.getElementById('send-btn').addEventListener('click', function() {
    const chatInput = document.getElementById('chat-input');
    const message = chatInput.value.trim();
    
    if (message !== '') {
        const chatboxBody = document.getElementById('chatbox-body');
        
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent');
        newMessage.textContent = message;
        
        chatboxBody.appendChild(newMessage);
        chatInput.value = '';
        
        chatboxBody.scrollTop = chatboxBody.scrollHeight;
    }
});
