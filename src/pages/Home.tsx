// Picture, name
// Introduction, cv
// Overview/highlights/links

import React, {ReactElement, FC} from "react";
import {
    Box, 
    Typography,
    Container,
    useTheme,
} from "@mui/material";
import Portrait from "../components/Portrait";
import FeaturedProducts from "../components/FeaturedProjects";
import BriefWorkHis from "../components/BriefWorkHis";




const Home: FC<any> = (): ReactElement => {
    return (
        <Box sx={{
            flexGrow: 1,
            backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justifyContent: "top",
            alignItems: "center",
        }}>
            {/* consolodate the maxWidth into 1 container */}
            <Container maxWidth="xl" sx={{
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

            <Container maxWidth="xl" sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row"},
                padding: "1rem",
                
            }}>
                <Container sx={{ padding: "1rem" }}>
                    <FeaturedProducts></FeaturedProducts>
                </Container>

                <Container sx={{ padding: "1rem" }}>
                    <BriefWorkHis></BriefWorkHis>
                </Container>
            </Container>
            

            
        </Box>
    );
};

export default Home;