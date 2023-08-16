

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


const BriefWorkHis: FC<{ data: Array<{ title: string; content: string; }> }> = ({ data }) => {

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
                }}>Brief Work History</Typography>
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
                        <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>{item.content}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
            </div>
        </div>
    );
}


export default BriefWorkHis;