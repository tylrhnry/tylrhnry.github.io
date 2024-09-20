// Current & past jobs
    // Supervisor contact?
// Projects
    // Non-school projects
    // Link to school projects


import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import WorkHist from "../components/ExperienceComps/WorkHist";
import ProjectsList from "../components/ExperienceComps/ProjectsList";



const Experience: React.FC = () => {
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
            Experience
          </Typography>
        </Container>

        <Container disableGutters sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          alignItems: {xs: "center", md: "start"},
          paddingBottom: "0.5rem",
        }}>

          <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
            <ProjectsList />
          </Container>

          <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
            <WorkHist/>
          </Container>

        </Container>

      </Container>
    </Box>
  );
};

export default Experience;
