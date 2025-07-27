"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { CourseData } from "./CoursesData";
import CourseTemplate from "./CourseTemplate";

const PastCourses: React.FC = () => {
  const [expandedAccordionFirst, setExpandedAccordionFirst] = useState<number | null>(null);
  const [expandedAccordionSecond, setExpandedAccordionSecond] = useState<number | null>(null);

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const handleExpandingFirst = (index: number, isExpanded: boolean) => {
    setExpandedAccordionFirst(isExpanded ? index : null);
  };

  const handleExpandingSecond = (index: number, isExpanded: boolean) => {
    setExpandedAccordionSecond(isExpanded ? index : null);
  };

  const half = Math.ceil(CourseData.length / 2);
  const firstHalf = CourseData.slice(0, half);
  const secondHalf = CourseData.slice(half);

  return (
    <Box>
      <Typography variant="h5" gutterBottom sx={{ paddingTop: "1.5rem", paddingLeft: "1.5rem" }}>
        Relevant Courses
      </Typography>

      {isXs ? (
        <Container disableGutters sx={{ padding: "1.5rem", paddingTop: 0 }}>
          {CourseData.map((course, idx) => (
            <CourseTemplate
              key={idx}
              title={course.title}
              courseCode={course.courseCode}
              description={course.description}
              visualRow={idx}
              nestLevel={0}
              isExpanded={idx === expandedAccordionFirst}
              onExpandChange={(isExpanded) =>
                handleExpandingFirst(idx, isExpanded)
              }
            />
          ))}
        </Container>
      ) : (
        <Container
          maxWidth="xl"
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "start",
          }}
        >
          <Container
            disableGutters
            sx={{
              flex: 1,
              margin: 0,
              padding: "1.5rem",
              paddingTop: 0,
            }}
          >
            {firstHalf.map((course, idx) => (
              <CourseTemplate
                key={idx}
                title={course.title}
                courseCode={course.courseCode}
                description={course.description}
                visualRow={idx}
                nestLevel={0}
                isExpanded={idx === expandedAccordionFirst}
                onExpandChange={(isExpanded) =>
                  handleExpandingFirst(idx, isExpanded)
                }
              />
            ))}
          </Container>

          <Container
            disableGutters
            sx={{
              flex: 1,
              margin: 0,
              padding: "1.5rem",
              paddingTop: 0,
            }}
          >
            {secondHalf.map((course, idx) => {
              const overallIdx = idx + half;
              return (
                <CourseTemplate
                  key={overallIdx}
                  title={course.title}
                  courseCode={course.courseCode}
                  description={course.description}
                  visualRow={overallIdx}
                  nestLevel={0}
                  isExpanded={overallIdx === expandedAccordionSecond}
                  onExpandChange={(isExpanded) =>
                    handleExpandingSecond(overallIdx, isExpanded)
                  }
                />
              );
            })}
          </Container>
        </Container>
      )}
    </Box>
  );
};

export default PastCourses;
