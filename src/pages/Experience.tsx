// Current & past jobs
    // Supervisor contact?
// Projects
    // Non-school projects
    // Link to school projects



import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";




const Experience: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="h3">Experience</Typography>
        </Box>
    );
};

export default Experience;