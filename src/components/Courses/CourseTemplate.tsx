

import React, { FC, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { projectData } from "../Projects/ProjectData";
import ProjectTemplate from "../Projects/ProjectTemplate";

interface CourseProps {
  title: string;
  courseCode: string;
  description: string;
  index: number;
  nestLevel: number;
  isExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
}

const CourseTemplate: FC<CourseProps> = ({
  title,
  courseCode,
  description,
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

  const [expandedAccordion, setExpanded] = useState<number | null>(null);

  const handleExpanding = (index: number, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : null);
  };

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
          {projectData
            .filter((project) => project.course === courseCode)
            .map((project, index) => (
            <ProjectTemplate
              key={index}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              index={index}
              nestLevel={1}
              isExpanded={index === expandedAccordion}
              onExpandChange={(isExpanded) => handleExpanding(index, isExpanded)}
            />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseTemplate;
