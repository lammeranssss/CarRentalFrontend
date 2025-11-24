import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Header: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#004d40', color: 'white', p: 2 }}>
      <Container maxWidth="lg">
        <Typography variant="h6">
        </Typography>
      </Container>
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f4f4f4' }}>
      <Header />
      <Container maxWidth="lg" sx={{ mt: 4, pt: 4 }}>
      </Container>
    </Box>
  );
};

export default App;