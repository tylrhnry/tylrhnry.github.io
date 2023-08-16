import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectTemplate from "../components/Projects.tsx/ProjectTemplate";
import { projectData } from "../components/Projects.tsx/ProjectData";

const ProjectsPage: React.FC = () => {
    const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

    const handleExpandChange = (index: number, isExpanded: boolean) => {
        setExpandedAccordion(isExpanded ? index : null);
    };

    return (
        <Box sx={{
            flexGrow: 1,
            // backgroundColor: "whitesmoke",
            display: "flex",
            flexDirection: "column",
            justifyContent: "top",
            alignItems: "center",
        }}>
            <Container>
            <Typography variant="h3">Projects</Typography>
            {projectData.map((project, index) => (
                <ProjectTemplate
                    key={index}
                    title={project.title}
                    description={project.description}
                    githubLink={project.githubLink}
                    index={index}
                    isExpanded={index === expandedAccordion}
                    onExpandChange={(isExpanded) => handleExpandChange(index, isExpanded)}
                />
            ))}
            </Container>
        </Box>
    );
};

export default ProjectsPage;
