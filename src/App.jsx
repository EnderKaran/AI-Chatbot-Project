import React from 'react'
import ChatbotIcon from "./components/ChatbotIcon"
import ChatForm from "./components/ChatForm"
import { useState } from "react";
import ChatMessage from "./components/ChatMessage";

const App = () => {

  const [chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history) => {
    history = history.map(({role, text}) => ({role, parts: [{text}]}));
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: history })
    }

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();
      if(!response.ok) throw new Error(data.error.message || 'Something went wrong!'); 
        
      const apiResponseText = data.candidates[0].parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();


    } catch (error) {
        console.log(error);
    }
}


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
            <ChatForm 
            setChatHistory={setChatHistory}
            chatHistory={chatHistory} 
            generateBotResponse={generateBotResponse}
            />
        </div>


      </div>
    </div>
  )

}
export default App;