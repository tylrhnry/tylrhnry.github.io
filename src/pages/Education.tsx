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

      <Container maxWidth="xl" sx={{
        padding: "0.5rem"
      }}>

        <Container sx={{ 
          margin: "0.5rem",
          alignItems: "center",
        }}>
          <Typography variant="h3" sx={{
            display: {md: "none"},
          }}>
            Education
          </Typography>
        </Container>

        <Container>
          {/*Summary of school*/}
          <Typography>
            UVU logo image <br/>
            Degree: Bachelor's of Science, Computer Science<br/>
            GPA: 3.95/4.0 <br/>
            Credits: 120 completed, 15 in progress <br/>
            Dates: Jan. 2021 - Dec. 2024 <br/>
            View transcripts <br/><br/>
          </Typography>
        </Container>

        <Container disableGutters sx={{
          display: "flex",
          flexDirection: {xs: "column", md: "row"},
          alignItems: {xs: "center", md: "start"},
          paddingBottom: "0.5rem",
        }}>

          <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
            <FutureCourses/>
          </Container>

          <Container disableGutters sx={{ flex: 1, margin: {xs: "0.5rem", md: "0"}, }}>
            <PastCourses/>
          </Container>

        </Container>
      </Container>

    </Box>
  );
};

export default Education;
