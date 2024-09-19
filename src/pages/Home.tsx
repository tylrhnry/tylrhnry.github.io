// Picture, name
// Introduction, cv
// Overview/highlights/links

// Add actual values for intro, photo, projects, work

// Get rid of "Home" at the top and color tab?

import React, {ReactElement, FC} from "react";
import {
  Box, 
  Typography,
  Container,
  Divider,
} from "@mui/material";
import Portrait from "../components/HomeComps/Portrait";
import BriefWorkHist from "../components/HomeComps/BriefWorkHist";
import FeaturedProjects from "../components/HomeComps/FeaturedProjects";



const Home: FC<any> = (): ReactElement => {
  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      {/* consolodate the maxWidth into 1 container */}
      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
        padding: "1rem",
      }}>

        <Portrait/>

        <Container sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
            textAlign: "center",
          }}>Home</Typography>
          <Typography sx={{ 
            paddingTop: {xs: "1rem", md: "2rem" },
          }}>
            Hello! I'm Tyler Henry, and I'm passionate about functional software.<br/>
            I love software that interacts with the real world.<br/>
            <br/>
            Consistently trying to learn new things has introduced me to some of the best tools.<br/>
            Rust, Nix, Neovim, SDR, textbooks<br/>
            Hardware integration. (radios, cameras, drones, sensors)<br/>
            I have deployed many lora nodes, including a remote, solar-powered repeater.<br/>
            I am currently bringing a VTOL design to CAD.<br/>
            
          </Typography>
        </Container>
      </Container>

      <Container maxWidth="xl" >
        <Divider sx={{ backgroundColor: "gray", margin: "0 1.5rem" }} />
      </Container>

      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
        padding: "1rem",
      }}>
        <div style={{ flex: 1, margin: "0.5rem" }}>
          <FeaturedProjects />
        </div>
        <div style={{ flex: 1, margin: "0.5rem" }}>
          <BriefWorkHist />
        </div>
      </Container>
    </Box>
  );
};

export default Home;
