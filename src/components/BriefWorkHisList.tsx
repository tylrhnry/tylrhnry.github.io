import React from "react";
import BriefWorkHis from "./BriefWorkHis";

const Test: React.FC = () => {
    // Example data for the accordions
    const data = [
        { title: "Software Intern", content: "Description for Project 1" },
        { title: "Manufacturing Engineering Intern", content: "Description for Project 2" },
        { title: "Student Engineer", content: "Description for Project 3" },
        
    ];

    return (
        <div>
            <BriefWorkHis data={data} />
        </div>
    );
}

export default Test;
