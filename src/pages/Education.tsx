// Past, present, future courses
// GPA, Transcripts, Credits
// Scholarships, awards, clubs
 
// point out that projects alone are on 'experience'
// nested list colors
// stop nested list open status from persisting
// add semester labels near courses

// Programming projects
    // Tutorial/explanation/requirements
    // Interactive code
    // Program simulator
    // Link to github/gitlab


import React, {ReactElement, FC} from "react";
import { 
    Box,
    Container,
    Typography,
} from "@mui/material";
import PastCourses from "../components/EducationComps/PastCourses";
import FutureCourses from "../components/EducationComps/FutureCourses";
import UVULogo from "../components/EducationComps/UVULogo";


const Education: FC<any> = (): ReactElement => {
  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>

      <Container maxWidth="xl" sx={{
        padding: "0.5rem"
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
            Education
          </Typography>
        </Container>

        <Container maxWidth="xl" sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          alignItems: {xs: "center", md: "start" },
          justifyContent: "flex-start",
          padding: "1rem",
          marginLeft: "0",
        }}>
          <UVULogo/>
          <Typography 
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: { xs: "0", md: "3rem" },
              paddingTop: { xs: "2rem", md: "0" },
              marginBottom: "1rem", // Adds space below the degree name
              minWidth: "20rem",
            }}
          >
            <Typography 
              sx={{
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Bachelor's of Science, Computer Science
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>
              GPA: 3.95/4.0 <br/>
              Credits: 131 completed, 15 in progress <br/>
              Dates: Jan. 2021 - Dec. 2024
            </Typography>
          </Typography>
        </Container>

        <Container maxWidth="xl" disableGutters sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          alignItems: {xs: "center", md: "start"},
          paddingBottom: "0.5rem",
        }}>

          <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
            <PastCourses/>
          </Container>

          <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
            <FutureCourses/>
          </Container>

        </Container>
      </Container>

    </Box>
  );
};

export default Education;
