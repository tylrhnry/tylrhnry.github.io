import React from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from './components/BackToTopButton';


function App() {

  const theme = createTheme({
    palette: {
      background: {
        default: '#111', // dark mode
      },
      primary: {
        main:  '#819c71', // nav & footer
        light: '#FFF',    // tab 1
        dark:  '#bbb',    // tab 2
      },
      secondary: {
        main:  '#447777', // buttons/links
        light: '#9c7181', // nested tab 1
        dark:  '#71819c', // nested tab 2
      },
      text: {
        primary:   '#111',
        secondary: '#eee', // selected tab
      },
    }
  });


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <Router>
          <Navbar/>
            <div style={{paddingTop: "4rem", flex: 1, }}>
            <Routes>
              {appRoutes.map((route) => (
                <Route
                  key={route.key}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
            </Routes>
            </div>
          <BackToTopButton/>
          <Footer/>
        </Router>
      </Box>
    </ThemeProvider>
  );
}

export default App;
