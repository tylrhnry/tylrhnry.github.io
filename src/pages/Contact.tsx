
import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";    


const Experience: React.FC = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      // backgroundColor: "whitesmoke",
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      <Container maxWidth="xl" sx={{
        padding: "1rem",
      }}>
        <Container sx={{ padding: "1rem" }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
          }}>Contact</Typography>
        </Container>

          <Container maxWidth="xl" sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}>
            <div></div>
        </Container>
      </Container>
    </Box>
  );
};

export default Experience;