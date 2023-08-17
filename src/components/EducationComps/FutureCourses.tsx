// add grade, desc, & projects


import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import { FutureCourseData } from "../Courses/CoursesData";
import CourseTemplate from "../Courses/CourseTemplate";


const FutureCourses: React.FC = () => {
  const [expandedAccordion, setExpanded] = useState<number | null>(null);

  const handleExpanding = (index: number, isExpanded: boolean) => {
      setExpanded(isExpanded ? index : null);
  };     
  
  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "top",
      alignItems: "center",
    }}>
      <Container>
      <Typography variant="h5">Future Courses</Typography>
      {FutureCourseData.map((course, index) => (
        <CourseTemplate
          key={index}
          title={course.title}
          courseCode={course.courseCode}
          description={course.description}
          index={index}
          isExpanded={index === expandedAccordion}
          onExpandChange={(isExpanded) => handleExpanding(index, isExpanded)}
        />
      ))}
      </Container>
    </Box>
  );
}


export default FutureCourses;
