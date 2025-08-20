import React from 'react'
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import { useState } from "react";
import ChatMessage from "./components/ChatMessage";

const App = () => {

  const [chatHistory, setChatHistory] = useState([]);

  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon/>
            <h2 className="logo-text">Chatbot</h2>
          </div>
          <button class="material-symbols-rounded toggle-btn"> 
              keyboard_arrow_down
            </button>
        </div>
        {/* Chatbot Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              hey there! I'm your AI chatbot. How can I assist you today?
            </p>
          </div>

          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}

        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
            <ChatForm setChatHistory={setChatHistory} />
        </div>


      </div>
    </div>
  )
}

export default App