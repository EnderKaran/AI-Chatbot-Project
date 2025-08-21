import React from 'react';
import { Box, Chip, Stack } from '@mui/material';

const SuggestionChips = ({ suggestions, onChipClick }) => {
  return (
    // Dış kapsayıcı: Yatay kaydırmayı sağlar
    <Box 
      sx={{ 
        overflowX: 'auto',
        // Kaydırma çubuğunu estetik hale getirelim
        '&::-webkit-scrollbar': { height: 4 },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'grey.300', borderRadius: 2 }
      }}
    >
      {/* İç kapsayıcı: Çipleri tek bir satırda tutar */}
      <Stack 
        direction="row" 
        spacing={1}
        sx={{
          // EN ÖNEMLİ DÜZELTME BURADA:
          // Çiplerin alt satıra kaymasını engeller, böylece yatay kaydırma çalışır.
          flexWrap: 'nowrap',
          // Kenarlarda biraz boşluk bırakmak daha iyi görünür
          px: 1, 
          py: 0.5,
        }}
      >
        {suggestions.map((suggestion) => (
          <Chip
            key={suggestion}
            label={suggestion}
            onClick={() => onChipClick(suggestion)}
            variant="outlined"
          />
        ))}
      </Stack>
    </Box>
  );
};

export default SuggestionChips;