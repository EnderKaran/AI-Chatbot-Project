import React, { useRef } from 'react';

const ChatForm = ({setChatHistory}) => {

    const InputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const Usermessage = InputRef.current.value.trim();
      if (!Usermessage) return;
    InputRef.current.value = '';
        setChatHistory(history => [...history, { type: 'user', text: Usermessage }]);
    }

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={InputRef} type="text" placeholder="Message..." className="message-input" required />
            <button class="material-symbols-rounded send-btn"> 
                keyboard_arrow_up
            </button>
            
          </form>
  )
}

export default ChatForm