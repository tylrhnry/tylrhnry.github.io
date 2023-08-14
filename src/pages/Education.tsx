// Past, present, future courses
// GPA, Transcripts, Credits
// Scholarships, awards, clubs
// Programming projects
    // Tutorial/explanation/requirements
    // Interactive code
    // Program simulator
    // Link to github/gitlab


import React, {ReactElement, FC} from "react";
import {Box, Typography} from "@mui/material";




const Education: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem"
        }}>
            <Typography variant="h3">Education</Typography>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum nunc nec ante fringilla, eu ultricies odio finibus. Sed ut ante eu lectus aliquet iaculis.
            </p>

            <p>
                Ut euismod dolor eget ligula vehicula, a gravida libero gravida. Donec nec justo vel elit aliquet fermentum nec ut tellus. Fusce vestibulum, justo nec auctor facilisis, libero metus ullamcorper ex.
            </p>

            <p>
                Curabitur volutpat cursus metus, sit amet tincidunt risus. Sed vel libero id felis congue laoreet. Praesent aliquam risus nec nisi accumsan lacinia.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum nunc nec ante fringilla, eu ultricies odio finibus. Sed ut ante eu lectus aliquet iaculis.
            </p>

            <p>
                Ut euismod dolor eget ligula vehicula, a gravida libero gravida. Donec nec justo vel elit aliquet fermentum nec ut tellus. Fusce vestibulum, justo nec auctor facilisis, libero metus ullamcorper ex.
            </p>

            <p>
                Curabitur volutpat cursus metus, sit amet tincidunt risus. Sed vel libero id felis congue laoreet. Praesent aliquam risus nec nisi accumsan lacinia.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum nunc nec ante fringilla, eu ultricies odio finibus. Sed ut ante eu lectus aliquet iaculis.
            </p>

            <p>
                Ut euismod dolor eget ligula vehicula, a gravida libero gravida. Donec nec justo vel elit aliquet fermentum nec ut tellus. Fusce vestibulum, justo nec auctor facilisis, libero metus ullamcorper ex.
            </p>

            <p>
                Curabitur volutpat cursus metus, sit amet tincidunt risus. Sed vel libero id felis congue laoreet. Praesent aliquam risus nec nisi accumsan lacinia.
            </p>
        </Box>
    );
};

export default Education;