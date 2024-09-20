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
        padding: "0",
      }}>

        <Container sx={{ 
          display: "flex",
          flexDirection: "column",
          padding: "0.5rem",
          alignItems: "center",
        }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
          }}>Experience</Typography>
        </Container>

        <Container sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row"},
        }}>

          <div style={{ flex: 1, margin: "0.5rem" }}>
            <ProjectsList />
          </div>

          <div style={{ flex: 1, margin: "0.5rem" }}>
            <WorkHist/>
          </div>

        </Container>

      </Container>
    </Box>
  );
};

export default Experience;
