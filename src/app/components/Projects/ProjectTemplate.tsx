// Provides the template where project info is passed to return a 
// single accordion element with the project details

import React, { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
  Button,
  Divider,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ProjectProps {
  title: string;
  description: string;
  githubLink: string;
  index: number;
  nestLevel: number;
  isExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
}

const ProjectTemplate: FC<ProjectProps> = ({
  title,
  description,
  githubLink,
  index,
  nestLevel,
  isExpanded,
  onExpandChange,
}) => {

  var color;
  if (nestLevel % 2 === 0) {
    color = index % 2 === 0 ? "primary.light" : "primary.dark";
  } else {
    color = index % 2 === 0 ? "secondary.light" : "secondary.dark";
  }

  return (
    <Accordion 
      sx={{ backgroundColor: color }}
      expanded={isExpanded}
      onChange={() => onExpandChange(!isExpanded)}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <Divider/>
      <AccordionDetails>
        <Typography sx={{ whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
        }}>
          {(githubLink === "N/A" || githubLink === "") ? (
            githubLink === "N/A" && (
              <Typography 
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  marginTop: "0.6rem",
                  padding: "0 0.5rem 0.3rem 0.5rem",
                  borderRadius: "0.2rem",
                  border: "1px solid black",
                  width: "fit-content",
                }}
              >
                Due to plagiarism concerns, I cannot publicly link this project.
              </Typography>
            )
          ) : (
            <Link 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "1rem",
                textDecoration: "none",
              }}
            >          
              <Button 
                variant="contained"
                sx={{
                  backgroundColor: "secondary.main",
                  '&:hover': {
                    backgroundColor: "primary.main",
                  },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                View on GitHub/GitLab
              </Button>
            </Link>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProjectTemplate;
