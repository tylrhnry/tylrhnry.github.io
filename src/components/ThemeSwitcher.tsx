
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
    primary: {
      main: paletteType == "dark" ? "#ffddcc" : "#3f51b5",
    },
    secondary: {
      main: paletteType == "dark" ? "#eec107" : "#3f50057",
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


