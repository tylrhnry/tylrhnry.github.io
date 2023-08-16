// Current & past jobs
    // Supervisor contact?
// Projects
    // Non-school projects
    // Link to school projects



import React from "react";
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



const Experience: React.FC = () => {
  const accordionData = [
    {
      title: "Project 1",
      content: "Content for Accordion 1",
    },
    {
      title: "Project 2",
      content: "Content for Accordion 2",
    },
    {
      title: "Project 3",
      content: "Content for Accordion 3",
    },
    {
      title: "Project 4",
      content: "Content for Accordion 4",
    },
    {
      title: "Project 5",
      content: "Content for Accordion 5",
    },
    // Add more accordion items
  ];

  return (
      <Box sx={{
            flexGrow: 1,
            // backgroundColor: "whitesmoke",
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
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                sx={{
                  backgroundColor: index % 2 === 0 ? "lightgrey" : "whitesmoke",
              }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{item.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{item.content}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Container>
        </Container>
      </Box>
  );
};

export default Experience;