// color every other list item differently (increase readability)
// add grade, desc, & projects


import React, {ReactElement, FC} from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"


const FutureCourses: FC<any> = () => {
    return (
        <div>
            <Box>
                <Typography variant="h5" sx={{
                    padding: "1rem",
                }}>Future Courses</Typography>
            </Box>

            {/* Spring 2024 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Summer 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Machine Learning I</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Numerical Software Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Summer 2024 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Summer 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Machine Learning II</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Programming for Robotics</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Fall 2024 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Summer 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Artificial Intelligence</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Computer Vision</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default FutureCourses;
