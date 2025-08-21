import React, { useRef } from 'react';

const ChatForm = ({chatHistory,setChatHistory,generateBotResponse}) => {

    const inputRef = useRef();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    // Değişkeni DOĞRU ve TUTARLI bir şekilde (küçük harfle) tanımlıyoruz
    const userMessage = inputRef.current.value.trim();
    
    // Eğer input boşsa hiçbir şey yapma
    if (!userMessage) return;

    // YENİ GEÇMİŞİ OLUŞTURURKEN DOĞRU DEĞİŞKENİ KULLANIYORUZ
    const newHistory = [...chatHistory, { role: 'user', text: userMessage }];
    
    // State'i en güncel geçmiş ile güncelliyoruz
    setChatHistory(newHistory);

    // "Thinking..." mesajını zamanlayıcı ile ekliyoruz
    setTimeout(() => {
      setChatHistory(currentHistory => [...currentHistory, { role: "model", text: "Thinking..." }]);
    }, 600);

    // Bot fonksiyonuna, kullanıcının mesajını içeren güncel geçmişi gönderiyoruz
    generateBotResponse(newHistory);

    // İşlem bittikten sonra input alanını temizliyoruz
    inputRef.current.value = '';
};

  return (
    <form action="" className="chat-form" onSubmit={handleFormSubmit}>
            <input ref={inputRef} type="text" placeholder="Message..." className="message-input" required />
            <button class="material-symbols-rounded send-btn"> 
                keyboard_arrow_up
            </button>
            
          </form>
  )
}

export default ChatForm