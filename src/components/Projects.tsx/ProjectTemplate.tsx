// Provides the template where project info is passed to return a 
// single accordion element with the project details

import React, { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface ProjectProps {
  title: string;
  description: string;
  githubLink: string;
  index: number;
  isExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
}

const ProjectTemplate: FC<ProjectProps> = ({
  title,
  description,
  githubLink,
  index,
  isExpanded,
  onExpandChange,
}) => {
  const color = index % 2 === 0 ? "lightgrey" : "whitesmoke";

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
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </Link>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProjectTemplate;
