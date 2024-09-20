// Provides the template where job info is passed to return a 
// single accordion element with the job details

import React, { FC } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface JobProps {
  title: string;
  company: string;
  dates: string;
  description: string;
  index: number;
  nestLevel: number;
  isExpanded: boolean;
  onExpandChange: (isExpanded: boolean) => void;
}

const JobTemplate: FC<JobProps> = ({
  title,
  company,
  dates,
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
      <Divider/>
      <AccordionDetails>
        <div style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: "0.5rem",
        }}>
          <Typography>{company}</Typography>
          <Typography>{dates}</Typography>
        </div>
        <Typography sx={{ whiteSpace: 'pre-line' }}>
          {description}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default JobTemplate;
