// Creates the list of featured projects and controls the alternating
// colors and auto-closing of tabs

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import ProjectTemplate from "../Projects/ProjectTemplate";
import { FeaturedProjects } from "../Projects/ProjectData";


const FeaturedProducts: React.FC = () => {
  const [expandedAccordion, setExpanded] = useState<number | null>(null);

  const handleExpanding = (index: number, isExpanded: boolean) => {
    setExpanded(isExpanded ? index : null);
  };

  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      <Container sx={{
            padding: "1rem",
        }}>
        <Typography variant="h5" >Featured Projects</Typography>
        {FeaturedProjects.map((project, index) => (
          <ProjectTemplate
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            index={index}
            nestLevel={0}
            isExpanded={index === expandedAccordion}
            onExpandChange={(isExpanded) => handleExpanding(index, isExpanded)}
          />
        ))}
      </Container>
    </Box>
  );
}


export default FeaturedProducts;
