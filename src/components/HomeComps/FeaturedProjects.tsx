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
      <Container>
        <Typography variant="h5" sx={{
            padding: "1rem",
        }}>Featured Projects</Typography>
        {FeaturedProjects.map((project, index) => (
          <ProjectTemplate
            key={index}
            title={project.title}
            description={project.description}
            githubLink={project.githubLink}
            index={index}
            isExpanded={index === expandedAccordion}
            onExpandChange={(isExpanded) => handleExpanding(index, isExpanded)}
          />
        ))}
      </Container>
    </Box>
  );
}


export default FeaturedProducts;