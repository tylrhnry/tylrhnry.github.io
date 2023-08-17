// Returns the featured projects with the attributes they will have
// when displayed. 

import React from "react";
import FeaturedProducts from "./FeaturedProjects";
import { featuredProjects } from "../Projects.tsx/ProjectData";

const FeaturedProjectsList: React.FC = () => {

  const data = featuredProjects;

  return (
    <div>
        <FeaturedProducts projects={data} />
    </div>
  );
}

export default FeaturedProjectsList;
