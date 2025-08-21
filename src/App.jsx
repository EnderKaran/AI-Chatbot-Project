import  { useState, useRef, useEffect } from 'react';


import ChatbotIcon from "./components/ChatbotIcon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";


import { Box, Fab, Grow, Paper, AppBar, Toolbar, Typography, IconButton, Stack } from '@mui/material';

import { MdModeComment, MdClose, MdOpenInFull, MdCloseFullscreen } from "react-icons/md";

const App = () => {
    
    const [chatHistory, setChatHistory] = useState([]);
    const [showChatbot, setShowChatbot] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const chatBodyRef = useRef();

    
    const handleFullScreenToggle = () => setIsFullScreen(prev => !prev);

    const generateBotResponse = async (history) => {
        const updateHistory = (text) => {
            setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), { role: "model", text }]);
        };
        history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: history })
        };
        try {
            const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
            const data = await response.json();
            if (!response.ok) throw new Error(data.error.message || 'Something went wrong!');
            const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
            updateHistory(apiResponseText);
        } catch (error) {
            console.log(error);
        }
    };

    
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
                sx={{
                    position: 'fixed',
                    bottom: 30,
                    right: 35,
                    transition: 'transform 0.2s ease',
                    transform: showChatbot ? 'rotate(90deg)' : 'rotate(0deg)', // İkon döndürme animasyonu
                }}
            >
                
                {showChatbot ? <MdClose size={24} /> : <MdModeComment size={24} />}
            </Fab>

            
            <Grow in={showChatbot}>
                {/* Chatbot penceresi için 'Paper' */}
                <Paper
                    elevation={8}
                    sx={{
                        position: 'fixed',
                        
                        ...(isFullScreen
                            ? { top: 0, left: 0, width: '100%', height: '100%', borderRadius: 0 }
                            : { right: 35, bottom: 90, width: 420, borderRadius: '15px' }
                        ),
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {/* Header için 'AppBar' ve 'Toolbar' */}
                    <AppBar position="static">
                        <Toolbar>
                            <Stack direction="row" alignItems="center" spacing={1.5}>
                                <ChatbotIcon />
                                <Typography variant="h6" component="div">
                                    Chatbot
                                </Typography>
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

                    {/* Chat Body için 'Box' */}
                    <Box
                        ref={chatBodyRef}
                        sx={{
                            p: 2.5, 
                            flexGrow: 1, 
                            overflowY: 'auto',
                            bgcolor: 'grey.100', 
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2, 
                        }}
                    >
                        {/* Başlangıç mesajı */}
                        <Box sx={{ display: 'flex' }}>
                             <ChatMessage chat={{ role: 'model', text: "Hey there! I'm your AI chatbot. How can I assist you today?" }} />
                        </Box>

                        {/* Sohbet geçmişi */}
                        {chatHistory.map((chat, index) => (
                            <ChatMessage key={index} chat={chat} />
                        ))}
                    </Box>

                    {/* Footer için 'Box' */}
                    <Box
                        sx={{
                            p: 1.5,
                            bgcolor: 'background.paper',
                            borderTop: 1,
                            borderColor: 'divider',
                        }}
                    >
                        <ChatForm
                            setChatHistory={setChatHistory}
                            chatHistory={chatHistory}
                            generateBotResponse={generateBotResponse}
                        />
                    </Box>
                </Paper>
            </Grow>
        </Box>
    );
};

export default App;