'use client';

import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import FaviconHandler from './components/FaviconHandler';

const theme = createTheme({
  palette: {
    background: {
      default: '#111', // Dark mode
    },
    primary: {
      main: '#819c71', // Nav & footer (green)
      // main: '#bf5524', // orange
      // main: '#548e43', // green
      // main: '#438e7b', // teal
      // main: '#5e96b5', // blue
      // main: '#705eb5', // purple
      // main: '#a05968', // maroon
      // main: '#a35753', // redish
      light: '#FFF', // Tab 1
      dark: '#CCC', // Tab 2
    },
    secondary: {
      main: '#447777', // Buttons/links
      light: '#9c7181', // Nested tab 1
      dark: '#71819c', // Nested tab 2
    },
    text: {
      primary: '#111',
      secondary: '#eee', // Selected tab
    },
  },
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box minHeight="100vh" display="flex" flexDirection="column">
        <FaviconHandler />
        <Navbar />
        <Box component="main" flex={1}>
          {children}
        </Box>
        <BackToTopButton />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
