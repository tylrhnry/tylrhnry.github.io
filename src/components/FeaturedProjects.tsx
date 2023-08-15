

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


const FeaturedProducts: FC<{ data: Array<{ title: string; content: string }> }> = ({ data }) => {

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
            {data.map((item, index) => (
                <Accordion
                    key={index}
                    expanded={expandedAccordion === index}
                    onChange={handleExpanding(index)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>Prime Factors with Multithreading</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>Language: C</Typography>
                        <Typography>
                            Desc: This project does this.
                            It takes these parameters/inputs.
                            It does this stuff with it.
                            It returns these values/outputs                    </Typography>
                        <Link 
                            href="https://github.com"
                            target = "_blank"
                            rel="noopener noreferrer"
                            underline="hover">
                            <Button variant="contained">View on GitHub</Button>
                        </Link>
                    </AccordionDetails>
                </Accordion>
                // <Accordion>
                //     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                //         <Typography>Numerical Calculus</Typography>
                //     </AccordionSummary>
                //     <AccordionDetails>
                //         <Typography>Details 2</Typography>
                //     </AccordionDetails>
                // </Accordion>
                // <Accordion>
                //     <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                //         <Typography>Data Smoothing with C++</Typography>
                //     </AccordionSummary>
                //     <AccordionDetails>
                //         <Typography>Details 3</Typography>
                //     </AccordionDetails>
                // </Accordion>
            ))}
            </div>
        </div>
    );
}


export default FeaturedProducts;