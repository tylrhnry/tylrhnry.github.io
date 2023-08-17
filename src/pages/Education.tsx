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


const Education: FC<any> = (): ReactElement => {
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

        <Container sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          alignItems: "center",
        }}>
          <Typography variant="h3" sx={{ 
            display: {md: "none"},
          }}>
            Education</Typography>
        </Container>

      </Container>

      <Container maxWidth="xl" sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row"},
          padding: "1rem",
          
      }}>
        <Container sx={{ padding: "1rem" }}>
          <PastCourses/>
        </Container>

        <Container sx={{ padding: "1rem" }}>
          <FutureCourses/>
        </Container>
      </Container>

    </Box>
  );
};

export default Education;