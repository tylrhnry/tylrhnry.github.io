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
import ProjectsPage from "../components/ExperienceComps/ProjectsList";



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
        padding: "1rem",
      }}>
        <Container sx={{ padding: "1rem" }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
          }}>Experience</Typography>
        </Container>

          <Container maxWidth="xl" sx={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}>
            <ProjectsPage/>
        </Container>
      </Container>
    </Box>
  );
};

export default Experience;