// Provides the template where job info is passed to return a 
// single accordion element with the job details

import React, { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface JobProps {
  title: string;
  description: string;
  index: number;
  nestLevel: number;
  isExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
}

const JobTemplate: FC<JobProps> = ({
  title,
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
      </AccordionDetails>
    </Accordion>
  );
};

export default JobTemplate;
