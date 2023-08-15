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


const PastCourses: FC<any> = () => {
    return (
        <div>
            <Box>
                <Typography variant="h5" sx={{
                    padding: "1rem",
                }}>Past Courses</Typography>
            </Box>

            {/* Fall 2023 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Fall 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Rust Programming</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Python Software Development</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Data Privacy & Security</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 3</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Analysis of Programming Languages</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 3</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Computer Networks</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 3</Typography>
                </AccordionDetails>
            </Accordion>
            
            {/* Summer 2023 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Summer 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Operating Systems Theory</Typography>
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
            
            {/* Spring 2023 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Spring 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 3</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Fall 2022 */}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Fall 2023</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 3</Typography>
                </AccordionDetails>
            </Accordion>

            {/* Spring 2022*/}
            <Box>
                <Typography sx={{
                    paddingLeft: ".5rem",
                    paddingTop: ".5rem",
                }}>Spring 2022</Typography>
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 1</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 2</Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Summary 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>Details 3</Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}


export default PastCourses;
