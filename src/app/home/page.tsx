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
import Portrait from "./Portrait";
import BriefWorkHist from "./BriefWorkHist";
import FeaturedProjects from "./FeaturedProjects";
import ImageGallery from "./ImgStack";


const Home: FC = (): ReactElement => {
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
            Hello! I’m Tyler Henry, a computer scientist passionate about signal processing. I'm currently working for Anduril Industries working on bringing
            up some new radars for active vehicle protection. Prior to that, I was working for the United States Air Force, supporting the fire control radar for the F-16.
            I studied Computer Science from Utah Valley University. I love employing systems and tools that offer many behavioral guarantees through strong type-systems and reproducible environments.
          </Typography>
          <Typography sx={{ 
            textIndent: "1.5rem",
          }}>
            In my personal time, I recently set up a fully-declarative and reproducible personal server using the Nix functional language and package manager. The software is built with impermanence to enforce a stateless system, while ZFS RAID, snapshots, ECC memory, and Nix generations lead to an extremely reliable and accurate system. All of my machines share the same Nix configuration repository, allowing for extreme homogeneity without needing to repeat improvements on machines separately.
          </Typography>
          <Typography sx={{ 
            textIndent: "1.5rem",
            paddingBottom: {sx: "1rem", md: "0.5rem"},
          }}>
            I've recently learned about the Clash programming language, which uses Haskell as a hardware description language for FPGA's. I'm currently studying
            Haskell and VHDL in an attempt to use the high-level functional language to speed up FPGA development.
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

      <ImageGallery />

    </Box>
  );
};

export default Home;
