// Picture, name
// Introduction, cv
// Overview/highlights/links

import React, {ReactElement, FC} from "react";
import {
    Box, 
    Typography,
    Container,
} from "@mui/material";
import Portrait from "../components/Portrait";




const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justifyContent: "top",
            alignItems: "center",
            padding: "2rem"
        }}>
            <Container sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row"},
                padding: "1rem",
            }}>

                <Portrait/>

                <Container sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "1rem",
                }}>
                    <Typography variant="h3">Home</Typography>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        interdum nunc nec ante fringilla, eu ultricies odio finibus. 
                        Sed ut ante eu lectus aliquet iaculis.
                        Ut euismod dolor eget ligula vehicula, a gravida libero gravida.
                        Donec nec justo vel elit aliquet fermentum nec ut tellus. 
                        Fusce vestibulum, justo nec auctor facilisis, libero metus 
                        ullamcorper ex.
                    </p>
                </Container>

            </Container>

            <Container sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row"},
                padding: "1rem",
                
            }}>
                <Container sx={{ padding: "1rem" }}>
                    {/* nested list? */}
                    <Typography variant="h5">Featured Projects</Typography>
                    <Typography sx={{ marginTop: "1rem" }}>
                        Curabitur volutpat cursus metus, sit amet tincidunt risus. Sed 
                        vel libero id felis congue laoreet. Praesent aliquam risus nec 
                        nisi accumsan lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        interdum nunc nec ante fringilla, eu ultricies odio finibus. 
                        Sed ut ante eu lectus aliquet iaculis.
                    </Typography>
                </Container>

                <Container sx={{ padding: "1rem" }}>
                    <Typography variant="h5">Brief Work History</Typography>
                    <Typography sx={{ marginTop: "1rem" }}>
                        Curabitur volutpat cursus metus, sit amet tincidunt risus. Sed 
                        vel libero id felis congue laoreet. Praesent aliquam risus nec 
                        nisi accumsan lacinia.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        interdum nunc nec ante fringilla, eu ultricies odio finibus. 
                        Sed ut ante eu lectus aliquet iaculis.
                    </Typography>
                </Container>
            </Container>
            

            
        </Box>
    );
};

export default Home;