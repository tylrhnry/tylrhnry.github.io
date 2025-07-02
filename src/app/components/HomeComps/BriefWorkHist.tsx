"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import JobTemplate from "../Jobs/JobTemplate";
import { FeaturedJobs } from "../Jobs/JobsData";

const BriefWorkHist: React.FC = () => {
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
          paddingTop: "1rem",
        }}>
      <Typography variant="h5" >Brief Work History</Typography>
      {FeaturedJobs.map((job, index) => (
        <JobTemplate
          key={index}
          title={job.title}
          company={job.company}
          dates={job.dates}
          description={job.description}
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


export default BriefWorkHist;
