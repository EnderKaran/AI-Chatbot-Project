import { useState, useRef, useEffect } from 'react';

// Bileşenler
import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";

// Material UI Bileşenleri
import { Box, Fab, Grow, Paper, AppBar, Toolbar, Typography, IconButton, Stack } from '@mui/material';

// İkonlar
import { MdModeComment, MdClose, MdOpenInFull, MdCloseFullscreen } from "react-icons/md";

const App = () => {
    // Başlangıç mesajını ve benzersiz ID'yi state'in ilk değerine ekliyoruz
    const [chatHistory, setChatHistory] = useState([
        { id: Date.now(), role: 'model', text: "Hey there! I'm your AI chatbot. How can I assist you today?" }
    ]);
    const [showChatbot, setShowChatbot] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const chatBodyRef = useRef();

    const handleFullScreenToggle = () => setIsFullScreen(prev => !prev);

    // Sohbeti temizleme fonksiyonu
    const handleClearChat = () => {
        setChatHistory([
            { id: Date.now(), role: 'model', text: "Hey there! I'm your AI chatbot. How can I assist you today?" }
        ]);
    };

    // API isteğini yöneten ana fonksiyon
    const generateBotResponse = async (userMessage) => {
        const userMessageData = { id: Date.now(), role: 'user', text: userMessage };
        const thinkingMessageData = { id: Date.now() + 1, role: 'model', text: 'Thinking...' };

        // Kullanıcı mesajını ve "Thinking..." mesajını tek seferde state'e ekle
        const newHistory = [...chatHistory, userMessageData, thinkingMessageData];
        setChatHistory(newHistory);
        
        const apiHistory = newHistory
            .filter(msg => msg.text !== 'Thinking...') // API'ye "Thinking..." mesajını gönderme
            .map(({ role, text }) => ({ role, parts: [{ text }] }));

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: apiHistory })
        };

        try {
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message || 'Something went wrong!');
            
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            
            // "Thinking..." mesajını silip yerine botun gerçek cevabını koy
            setChatHistory(prev => [
                ...prev.filter(msg => msg.text !== "Thinking..."),
                { id: Date.now(), role: "model", text: apiResponseText }
            ]);

        } catch (error) {
            console.error("API request failed:", error);
            // Hata durumunda da "Thinking..." mesajını kaldırıp bir hata mesajı göster
            setChatHistory(prev => [
                ...prev.filter(msg => msg.text !== "Thinking..."),
                { id: Date.now(), role: "model", text: "Sorry, something went wrong. Please try again." }
            ]);
        }
    };

    // Her yeni mesajda sohbeti en alta kaydır
    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTo({ top: chatBodyRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [chatHistory]);

    return (
        <Box>
            <Fab
                color="primary"
                onClick={() => setShowChatbot(prev => !prev)}
                sx={{ position: 'fixed', bottom: 30, right: 35, transition: 'transform 0.2s ease', transform: showChatbot ? 'rotate(90deg)' : 'rotate(0deg)' }}
            >
                {showChatbot ? <MdClose size={24} /> : <MdModeComment size={24} />}
            </Fab>

            <Grow in={showChatbot}>
                <Paper
                    elevation={8}
                    sx={{ position: 'fixed', ...(isFullScreen ? { top: 0, left: 0, width: '100%', height: '100%', borderRadius: 0 } : { right: 35, bottom: 90, width: 420, borderRadius: '15px' }), overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
                >
                    <AppBar position="static">
                        <Toolbar>
                            <Stack direction="row" alignItems="center" spacing={1.5}>
                                <ChatbotIcon />
                                <Typography variant="h6" component="div">Chatbot</Typography>
                                <IconButton color="inherit" onClick={handleFullScreenToggle}>
                                    {isFullScreen ? <MdCloseFullscreen size={22} /> : <MdOpenInFull size={22} />}
                                </IconButton>
                            </Stack>
                            <Box sx={{ flexGrow: 1 }} />
                            <IconButton color="inherit" onClick={() => setShowChatbot(false)}>
                                <MdClose size={28} />
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <Box
                        ref={chatBodyRef}
                        sx={{ p: 2.5, flexGrow: 1, overflowY: 'auto', bgcolor: 'grey.100', display: 'flex', flexDirection: 'column', gap: 2 }}
                    >
                        {chatHistory.map((chat) => (
                            <ChatMessage key={chat.id} chat={chat} />
                        ))}
                    </Box>

                    <Box sx={{ p: 1.5, bgcolor: 'background.paper', borderTop: 1, borderColor: 'divider' }}>
                        <ChatForm
                            onSendMessage={generateBotResponse}
                            onClearChat={handleClearChat}
                        />
                    </Box>
                </Paper>
            </Grow>
        </Box>
    );
};

export default App;