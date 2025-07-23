"use client";

import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectTemplate from "../components/Projects/ProjectTemplate";
import { projectData } from "../components/Projects/ProjectData";

const ProjectsList: React.FC = () => {
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
      <Typography variant="h5">Projects</Typography>
      {projectData.map((project, index) => (
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
};

export default ProjectsList;
