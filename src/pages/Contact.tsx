import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";    


const Contact: React.FC = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      <Container maxWidth="xl" sx={{
        padding: "0.5rem",
      }}>

        <Container sx={{ 
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem",
          alignItems: "center",
        }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
          }}>
            Contact
          </Typography>
        </Container>

        <Container maxWidth="xl">
          <Typography>
            Name<br/>
            email (public one?)<br/>
            phone number?<br/>
            linkedin?<br/>
            signal (have a public version? Like with voip number on work user)<br/>
            matrix<br/>

            Availability?<br/>
          </Typography>
        </Container>
      </Container>
    </Box>
  );
};

export default Contact;
