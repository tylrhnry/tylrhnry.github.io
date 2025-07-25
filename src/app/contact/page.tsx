import React from "react";
import {
  Box,
  Container,
  Typography,
  Link,
} from "@mui/material";    
import EmailBlock from "./email";



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
            <EmailBlock/>
            Phone: &emsp;(385) three 6teen - eight eight eight won <br/>
            XMPP: &emsp;th.pers.prof@chatterboxtown.us<br/>
            SimpleX:{'  '}
            <Link
              href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2F6iIcWT_dF2zN_w5xzZEY7HI2Prbh3ldP07YTyDexPjE%3D%40smp10.simplex.im%2FPUzh-p-fxeDFHm2gYDqPjJ5rvIXb2EP4%23%2F%3Fv%3D1-4%26dh%3DMCowBQYDK2VuAyEA4uLhdcbb1Q33tS-29dJsLFPoLRp8eutG2iZDnt21AiU%253D%26q%3Dc%26srv%3Drb2pbttocvnbrngnwziclp2f4ckjq65kebafws6g4hy22cdaiv5dwjqd.onion"
              target="_blank"
              rel="noopener noreferrer"
              underline="always"
              color="inherit"
            >
              Add me
            </Link>
            <br/>
            <br/>
          </Typography>
        </Container>

        <Container maxWidth="xl" sx={{
          // display: "flex",
          // flexDirection: "column",
          // alignItems: "center",
        }}>
          <Box
            sx={{
              width: "70%",
              height: "1300px", // Adjust as needed
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <iframe
              src="/files/resume_25.pdf" // Place your PDF in `public/files/`
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Embedded PDF"
            />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Contact;
