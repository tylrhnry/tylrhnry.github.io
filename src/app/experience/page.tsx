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
  Tooltip,
} from "@mui/material";
import WorkHist from "./WorkHist";
import ProjectsList from "./ProjectsList";
import TechGrid from "./ImgStack";
import ProjectGrid from "./ProjectGrid";



const Experience: React.FC = () => {
  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      <Container maxWidth="xl" disableGutters sx={{
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

        <TechGrid/>

        <Container maxWidth="xl" disableGutters sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},

        }}>
          <Container disableGutters sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: {xs: "center", md: "start"},
            margin: 0,
            marginBottom: {xs: "0", md: "2rem"},
            padding: {xs: "0.5rem", md: "0"},
            width: {xs: "100%", md: "50%"},
          }}>
            <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, paddingBottom: "1rem",}}>
              <WorkHist/>
            </Container>

            <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
              <ProjectsList />
            </Container>
          </Container>

          <ProjectGrid/>
        </Container>

        <Container maxWidth="xl" sx={{
          padding: {xs: "1.5rem", md: "1.5rem"},
          paddingTop: {xs: "0"},
        }}>
          <Tooltip title="This is just the tree representation of some character analysis that was done in a data structures class. Mostly for decoration">
            <Box
              component="img"
              src={'/images/28.jpg'}
              alt={'Letter Occurance Tree'}
              sx={{
                height: 120,
                width: "100%",
                borderRadius: 2,
                boxShadow: 2,
                flexShrink: 0,
              }}
            />
          </Tooltip>
          </Container>
      </Container>
    </Box>
  );
};

export default Experience;
