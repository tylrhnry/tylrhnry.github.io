// Past, present, future courses
// GPA, Transcripts, Credits
// Scholarships, awards, clubs
 
// point out that projects alone are on 'experience'

// Programming projects
    // Tutorial/explanation/requirements
    // Interactive code
    // Program simulator
    // Link to github/gitlab

// Get rid of "Education" at the top and color tab?

import React, {ReactElement, FC} from "react";
import { 
    Box,
    Container,
    Typography,
} from "@mui/material";
import PastCoursesList from "../components/EducationComps/PastCoursesList";
import FutureCoursesList from "../components/EducationComps/FutureCoursesList";


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
        }}>
          <Typography variant="h3">Education</Typography>
        </Container>

      </Container>

      <Container maxWidth="xl" sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row"},
          padding: "1rem",
          
      }}>
        <Container sx={{ padding: "1rem" }}>
          <PastCoursesList/>
        </Container>

        <Container sx={{ padding: "1rem" }}>
          <FutureCoursesList/>
        </Container>
      </Container>

    </Box>
  );
};

export default Education;