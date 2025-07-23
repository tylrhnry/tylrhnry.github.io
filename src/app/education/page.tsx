import React, {ReactElement, FC} from "react";
import { 
    Box,
    Container,
    Typography,
} from "@mui/material";
import PastCourses from "./PastCourses";
import UVULogo from "./UVULogo";
import ProjectGridTop from "./ProjectGridTop";
import ProjectGridBottom from "./ProjectGridBottom";


const Education: FC = (): ReactElement => {
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
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: { xs: "0", md: "3rem" },
              paddingTop: "2rem",
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
              Bachelor&apos;s of Science, Computer Science
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>
              Computer Science Emphasis<br/>
              Magna Cum Laude<br/>
              GPA: 3.88 <br/>
              Credits: 146<br/>
            </Typography>
          </Box>
          <Box 
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: { xs: "0", md: "3rem" },
              paddingTop: "2.5rem",
              marginBottom: "1rem", // Adds space below the degree name
              minWidth: "20rem",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>
              Jan. 2021 - Dec. 2024
              <br/>
              <br/>
              <br/>
              Focused on low-level programming, electronics integration,<br/>
              machine learning, and computing theory<br/>
            </Typography>
          </Box>
        </Container>

        <Container maxWidth="xl" disableGutters sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: {xs: "center", md: "start"},
          margin: 0,
          paddingBottom: "2rem",
        }}>
          <ProjectGridTop/>
          <PastCourses/>
          <ProjectGridBottom/>
        </Container>
      </Container>

    </Box>
  );
};

export default Education;
