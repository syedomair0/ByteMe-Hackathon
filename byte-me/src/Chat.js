// Chat.js
import React, { useState } from 'react';
import axios from 'axios';
import './Chat.css';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();
    const userMessage = input.trim();
    if (userMessage !== '') {
      setMessages(messages.concat({ text: userMessage, sender: 'user' }));
      setInput('');

      try {
        const response = await axios.post('http://localhost:5001/generate-response', { userMessage });
        setMessages(messages.concat({ text: response.data.response, sender: 'bot' }));
      } catch (error) {
        console.error('Error fetching the date plan:', error);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form className="message-form" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="message-input"
          placeholder="Type a message..."
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Chat;
