

import React, { FC, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { projectData } from "../Projects/ProjectData";
import ProjectTemplate from "../Projects/ProjectTemplate";

interface CourseProps {
  title: string;
  courseCode: string;
  description: string;
  index: number;
  isExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
}

const CourseTemplate: FC<CourseProps> = ({
  title,
  courseCode,
  description,
  index,
  isExpanded,
  onExpandChange,
}) => {
  const color = index % 2 === 0 ? "lightgrey" : "whitesmoke";

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
      <AccordionDetails>
        <Typography>{description}</Typography>
          {projectData
            .filter((project) => project.course === courseCode)
            .map((project, index) => (
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
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseTemplate;