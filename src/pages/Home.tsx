// Picture, name
// Introduction, cv
// Overview/highlights/links

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
            Hello! I’m Tyler Henry, a computer scientist passionate about signal processing. I've been working for the United States Air Force on the F-16's APG-68 Radar since graduating with a Bachelor's in Computer Science from UVU. I love employing systems and tools that offer strong behavioral guarantees through well-defined semantics, type systems, and build environments.
          </Typography>
          <Typography sx={{ 
            textIndent: "1.5rem",
          }}>
            In my personal time, I recently set up a fully-declarative and reproducible personal server using the Nix functional language and package manager. The software is built with impermanence to enforce a stateless system, while ZFS RAID, snapshots, ECC memory, and nix generations lead to an extremely reliable and accurate system.
          </Typography>
          <Typography sx={{ 
            textIndent: "1.5rem",
            paddingBottom: {sx: "1rem", md: "0.5rem"},
          }}>
            I've been helping with the software development and design advising for Hive Dynamics, a recent start-up designing low-cost cruise missiles meant for mass production.
            I also have quite a few radio projects, including writing signal processing software for an SDR, studying for my Ham extra class licence, and building an HF Ham radio to allow me to communicate to a home radio server and send texts to family and friends via an XMPP to SMS service from nearly anywhere in the world. 
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
