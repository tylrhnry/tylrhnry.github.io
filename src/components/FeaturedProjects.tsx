

import React, {ReactElement, FC} from "react";
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const FeaturedProducts: FC<any> = () => {
    return (
        <div>
            <Box>
                <Typography variant="h5" sx={{
                    padding: "1rem",
                }}>Featured Projects</Typography>
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


export default FeaturedProducts;