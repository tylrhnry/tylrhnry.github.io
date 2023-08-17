// Creates the list of featured projects and controls the alternating
// colors and auto-closing of tabs

import React, {useState, FC} from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FeaturedProducts: FC<{ projects: Array<{ title: string; 
                                                description: string; 
                                                githubLink: string;
                                                course: string;
                                                featured: boolean;
                                            }> }> = ({ projects }) => {

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
          }}>Featured Projects</Typography>
      </Box>
      <div>
        {projects.map((project, index) => (
          <Accordion
            key={index}
            expanded={expandedAccordion === index}
            onChange={handleExpanding(index)}
            sx={{ backgroundColor: index % 2 === 0 ? "lightgrey" : "whitesmoke", }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{project.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{project.description}</Typography>
              <Link 
                href={project.githubLink}
                target = "_blank"
                rel="noopener noreferrer"
                underline="hover">
                <Button variant="contained">View on GitHub</Button>
              </Link>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}


export default FeaturedProducts;