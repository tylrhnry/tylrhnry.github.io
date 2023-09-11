
import React, { useState } from "react";
import { 
    Box,
    CssBaseline,
    ThemeProvider,
    createTheme,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";



const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const paletteType = darkMode ? "dark" : "light";
  const paletteColors = {
    background: {
      default: paletteType === "dark" ? "#111" : "#eee",
    },
    text: {
      primary: paletteType === "dark" ? "#eee" : "#111",
    },
  }

  const theme = createTheme({
    palette: {
      mode: paletteType, 
      ...paletteColors,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ padding: "8px" }}>
        <DarkModeIcon onClick={toggleDarkMode} />
      </Box>
    </ThemeProvider>
  );
};

export default ThemeSwitcher;


