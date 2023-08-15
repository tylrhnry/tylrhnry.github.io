import React from "react";
import FeaturedProducts from "./FeaturedProjects";

const Test: React.FC = () => {
    // Example data for the accordions
    const data = [
        { title: "Project 1", content: "Description for Project 1", url: "https://github.com" },
        { title: "Project 2", content: "Description for Project 2", url: "https://github.com" },
        { title: "Project 3", content: "Description for Project 3", url: "https://github.com" },
        { title: "Project 4", content: "Description for Project 4", url: "https://github.com" },
        
    ];

    return (
        <div>
            <FeaturedProducts data={data} />
        </div>
    );
}

export default Test;
