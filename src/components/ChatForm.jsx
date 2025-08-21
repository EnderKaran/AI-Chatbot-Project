import { useRef } from 'react';

// Material UI Bileşenlerini import ediyoruz
import { Box, TextField } from '@mui/material';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {

    const inputRef = useRef();

    // Bu fonksiyonun mantığında herhangi bir değişiklik yok, aynı kalıyor.
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        const newHistory = [...chatHistory, { role: 'user', text: userMessage }];
        setChatHistory(newHistory);

        setTimeout(() => {
            setChatHistory(currentHistory => [...currentHistory, { role: "model", text: "Thinking..." }]);
        }, 600);

        generateBotResponse(newHistory);
        inputRef.current.value = '';
    };

    return (
        // 'form' yerine MUI'nin 'Box' bileşenini form olarak kullanıyoruz
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            {/* 'input' yerine MUI'nin 'TextField' bileşenini kullanıyoruz */}
            <TextField
                inputRef={inputRef} // Ref'i inputRef prop'u ile bağlıyoruz
                placeholder="Message..."
                variant="outlined"
                size="small" // Daha kompakt bir görünüm için
                fullWidth // Mevcut tüm alanı kaplaması için
                autoComplete="off" // Tarayıcının otomatik tamamlama önerilerini kapatır
                required // Alanın boş gönderilmesini engeller
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '25px', // Köşeleri yuvarlatıyoruz
                        backgroundColor: 'grey.100', // Hafif gri arka plan
                    },
                }}
            />
        </Box>
    );
}

export default ChatForm;