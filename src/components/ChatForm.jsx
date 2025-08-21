import { useRef } from 'react';
import { Box, TextField, IconButton, Tooltip } from '@mui/material';
import { MdDeleteOutline } from "react-icons/md";

const ChatForm = ({ onSendMessage, onClearChat }) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if (!userMessage) return;

        onSendMessage(userMessage);

        inputRef.current.value = ''; // Input'u temizle
    };

    return (
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
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
                required
                sx={{ '& .MuiOutlinedInput-root': { borderRadius: '25px', backgroundColor: 'grey.100' } }}
            />
        </Box>
    );
}

export default ChatForm;