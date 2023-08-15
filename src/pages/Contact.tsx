// Picture
// Contact info and links
    // email, phone, linkedin, github/gitlab, youtube


import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";


const Contact: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            // backgroundColor: "whitesmoke",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="h3">Contact</Typography>
        </Box>
    );
};

export default Contact;
