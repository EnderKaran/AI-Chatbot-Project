import { useRef } from 'react';

// Gerekli MUI bileşenleri ve özel bileşen
import { Box, TextField, IconButton, Tooltip, Stack } from '@mui/material';
import { MdDeleteOutline } from "react-icons/md";
import SuggestionChips from './SuggestionChips'; // SuggestionChips'i burada import ediyoruz

const ChatForm = ({ onSendMessage, onClearChat, suggestions }) => {
    const inputRef = useRef();

    // Form gönderildiğinde (Enter'a basıldığında) çalışır
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        onSendMessage(userMessage); // Ana App bileşenindeki fonksiyonu tetikle
        inputRef.current.value = ''; // Input'u temizle
    };

    return (
        <Stack
            component="form"
            onSubmit={handleFormSubmit}
            spacing={1.5} // Çipler ve input alanı arasına boşluk koy
        >
            {/* Öneri Çipleri */}
            <SuggestionChips
                suggestions={suggestions}
                onChipClick={onSendMessage} // Bir çipe tıklandığında direkt mesajı gönder
            />

            {/* Input Alanı ve Temizle Butonu */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Tooltip title="Clear Chat">
                    <IconButton onClick={onClearChat} aria-label="clear chat">
                        <MdDeleteOutline />
                    </IconButton>
                </Tooltip>
                
                <TextField
                    inputRef={inputRef}
                    placeholder="Message..."
                    variant="outlined"
                    size="small"
                    fullWidth
                    autoComplete="off"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '25px', 
                            backgroundColor: 'grey.100',
                        },
                    }}
                />
            </Box>
        </Stack>
    );
}

export default ChatForm;