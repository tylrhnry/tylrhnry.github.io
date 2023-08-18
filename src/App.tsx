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
        paper:   '#eee', // light mode
      },
      primary: {
        main:  '#699', // nav & footer
        light: '#eee', // tab 1
        dark:  '#ccc', // tab 2
      },
      secondary: {
        main:  '#699', // buttons/links
        light: '#aaa', // nested tab 1
        dark:  '#888', // nested tab 2
      },
      text: {
        primary:   '#000',
        secondary: '#fff', // selected tab
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
