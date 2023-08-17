import React from "react";
import FutureCourses from "./FutureCourses";

const FutureCoursesList: React.FC = () => {
  // Example data for the accordions
  const data = [
    { courseName: "Class 1", courseDesc: "Description for Class 1", 
        projects: ["p1", "p2"] },
    { courseName: "Class 2", courseDesc: "Description for Class 2", 
        projects: ["p1", "p2"] },
    { courseName: "Class 3", courseDesc: "Description for Class 3", 
        projects: ["p1", "p2"] },
    { courseName: "Class 4", courseDesc: "Description for Class 4", 
        projects: ["p1", "p2"] },
      
  ];

  return (
    <div>
      <FutureCourses data={data} />
    </div>
  );
}

export default FutureCoursesList;
