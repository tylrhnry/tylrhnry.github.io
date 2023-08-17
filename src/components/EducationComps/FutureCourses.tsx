// add grade, desc, & projects


import React, {useState, FC} from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


const FutureCourses: FC<{ data: Array<{courseName: string; courseDesc: string; projects: string[]}> }> = ({data}) => {
  const [expandedAccordion, setExpanded] = useState<number | null>(null);

  const handleExpanding = (index: number) => (event: React.ChangeEvent<{}>,
                                              isExpanded: boolean) => {
    setExpanded(isExpanded ? index : null);
  };    
  
  return (
    <div>
      <Box>
          <Typography variant="h5" sx={{
              padding: "1rem",
          }}>Past Courses</Typography>
      </Box>


      <div>
        {data.map((item, index) => (
          <Accordion
            key={index}
            expanded={expandedAccordion === index}
            onChange={handleExpanding(index)}
            sx={{ backgroundColor: index % 2 === 0 ? "lightgrey" : "whitesmoke", }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{item.courseName}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.courseDesc}</Typography>
              {/* list out the projects */}
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}


export default FutureCourses;
