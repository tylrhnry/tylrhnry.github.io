'use client';

import React from "react";
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Container,
  Typography,
  Link,
} from "@mui/material";
import Image from "next/image";
import EmailBlock from "./email";



const Contact: React.FC = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.background.default === "#111";

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
          <Typography variant="h4" sx={{
            // display: {md: "none"},
          }}>
            Get in Contact With Me
          </Typography>
        </Container>

        <Container maxWidth="xl" sx={{ paddingTop: "1rem" }}>
          <Typography sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
          }}>
            <Box>
              <EmailBlock/>
              <Image
                src={"/images/phone.png"}
                alt="Phone Icon"
                width={20}
                height={20}
                style={{
                  filter: isDarkMode ? 'invert(1)' : 'invert(0)',
                }}
              />
              {/*&emsp;Phone: &emsp;(385) three 6teen - triple eight won <br/>*/}
              &emsp;Phone: &emsp;See resume below<br/>
            </Box>

            <Box sx={{ 
              paddingLeft: { xs: "0", md: "3rem" },
              paddingBottom: "2rem",
            }}>
              <Image
                src={"/images/xmpp.png"}
                alt="XMPP Icon"
                width={20}
                height={20}
                style={{
                  filter: isDarkMode ? 'invert(1)' : 'invert(0)',
                }}
              />
              &emsp;
              
              <Link
                href="https://xmpp.org/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
              >
                XMPP
              </Link>
              :&emsp;th.pers.prof@chatterboxtown.us<br/>
              <Image
                src={"/images/simplex.png"}
                alt="SimpleX Icon"
                width={20}
                height={20}
              />
              &emsp;
              <Link
                href="https://simplex.chat/"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
              >
                SimpleX
              </Link>
              :&emsp;
              <Link
                href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2F6iIcWT_dF2zN_w5xzZEY7HI2Prbh3ldP07YTyDexPjE%3D%40smp10.simplex.im%2FPUzh-p-fxeDFHm2gYDqPjJ5rvIXb2EP4%23%2F%3Fv%3D1-4%26dh%3DMCowBQYDK2VuAyEA4uLhdcbb1Q33tS-29dJsLFPoLRp8eutG2iZDnt21AiU%253D%26q%3Dc%26srv%3Drb2pbttocvnbrngnwziclp2f4ckjq65kebafws6g4hy22cdaiv5dwjqd.onion"
                target="_blank"
                rel="noopener noreferrer"
                underline="always"
                color="inherit"
              >
                Add me
              </Link>
            </Box>
            <br/>
            <br/>
          </Typography>
        </Container>

        <Container maxWidth="xl" sx={{ paddingBottom: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              width: {xs: "100%", md: "70%"},
              height: {xs: "475px", md: "1300px"},
              border: "1px solid #ccc",
              borderRadius: 2,
              boxShadow: 2,
            }}
          >
            <iframe
              src="/files/resume_25.pdf"
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
