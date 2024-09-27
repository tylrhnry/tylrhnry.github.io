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
      padding: "0.5rem",
    }}>

      <Container maxWidth="xl" disableGutters sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
        // margin: "0.5rem",
        // alignItems: "center",
        alignItems: "start",
      }}>

        <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
          <Portrait/>
        </Container>

        <Container disableGutters sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: {xs: "0", md: "0.5rem"},
          padding: {xs: "1.5rem"},
          alignItems: {xs: "center", md: "start"},
        }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
            textAlign: "center",
          }}>Home</Typography>
          <Typography sx={{ 
            paddingTop: {xs: "1rem", md: "0rem"},
            textIndent: "1.5rem",
          }}>
            Hello! I’m Tyler Henry, a passionate software developer dedicated to creating functional and performant software that bridges the digital and physical worlds. My commitment to constantly stretch myself to learn new things has led me to explore an array of powerful tools and technologies, including Rust, Nix, and software-defined radio.<br/>
          </Typography>
          <Typography sx={{ 
            textIndent: "1.5rem",
          }}>
            I'm currently in my last semester of my Bachelor's degree in Computer Science and am in the depths of writing a compiler in Rust and developing computer vision software to identify human behaviors. For my job as a Computer Science Intern at the Airforce, I am the primary developer for a Ground Penetrating Radar research project aimed at determining the efficacy of using software-defined radio as radar for bomb detection. In my personal time, I'm bringing a VTOL drone design from paper to CAD and setting up a number of mesh-networking LoRa radios and repeaters for emergency communication between my family, friends, and neighborhood.<br/>
          </Typography>
          <Typography sx={{ 
            textIndent: "1.5rem",
            paddingBottom: {sx: "1rem", md: "0.5rem"},
          }}>
            I’m very optimistic and enthusiastic about the impactful possibilities of well-designed software, and I intend to be at the forefront of implementing solutions that make it easier for less tech-savvy individuals to take advantage of these innovations.
          </Typography>
        </Container>
      </Container>

      <Container maxWidth="xl" >
        <Divider sx={{ backgroundColor: "gray" }} />
      </Container>

      <Container maxWidth="xl" disableGutters sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
        alignItems: {xs: "center", md: "start"},
        paddingBottom: "1.5rem",
      }}>

        <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
          <FeaturedProjects/>
        </Container>

        <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
          <BriefWorkHist/>
        </Container>

      </Container>
    </Box>
  );
};

export default Home;
