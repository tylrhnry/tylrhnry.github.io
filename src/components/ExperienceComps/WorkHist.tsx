import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import JobTemplate from "../Jobs/JobTemplate";
import { JobData } from "../Jobs/JobsData";

const WorkHist: React.FC = () => {
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
          paddingTop: {xs: "1rem", md: "0"},
        }}>
      <Typography variant="h5" >Work History</Typography>
      {JobData.map((job, index) => (
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


export default WorkHist;
