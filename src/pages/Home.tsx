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
} from "@mui/material";
import Portrait from "../components/HomeComps/Portrait";
import BriefWorkHis from "../components/HomeComps/BriefWorkHis";
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
            display: {md: "none"}
          }}>Home</Typography>
          <Typography sx={{ paddingTop: {xs: "1rem", md: "2rem" } }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            interdum nunc nec ante fringilla, eu ultricies odio finibus. 
            Sed ut ante eu lectus aliquet iaculis.
            Ut euismod dolor eget ligula vehicula, a gravida libero gravida.
            Donec nec justo vel elit aliquet fermentum nec ut tellus. 
            Fusce vestibulum, justo nec auctor facilisis, libero metus 
            ullamcorper ex.
          </Typography>
        </Container>

      </Container>

      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row"},
      }}>
        <Container sx={{ padding: "1rem" }}>
          <FeaturedProjects />
        </Container>

        <Container sx={{ padding: "1rem" }}>
          <BriefWorkHis />
        </Container>
      </Container>

    </Box>
  );
};

export default Home;