import React from 'react'
import ChatbotIcon from "./components/ChatbotIcon"

const App = () => {
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
          <div className="message user-message">
            <p className="message-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, a, praesentium ad pariatur impedit possimus corrupti dolor aliquam asperiores tempore blanditiis !
            </p>
          </div>
        </div>

        {/* Chatbot Footer */}
        <div className="chat-footer">
          <form action="" className="chat-form">
            <input type="text" placeholder="Message..." className="message-input" required />
            <button class="material-symbols-rounded send-btn"> 
                keyboard_arrow_up
            </button>
            
          </form>
        </div>


      </div>
    </div>
  )
}

export default App