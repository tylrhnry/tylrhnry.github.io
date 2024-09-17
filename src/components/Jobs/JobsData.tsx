
export const JobData = [
    {
      title: "Radar Researcher",
      description: "Description of Project 1...",
      featured: true,
    },
    {
      title: "Full-Stack Developer",
      description: "Description of Project 2...",
      featured: true,
    },
    {
      title: "Student Engineer",
      description: "Description of Project 3...",
      featured: true,
    },
    {
      title: "Engineering Intern",
      description: "Description of Project 3...",
      featured: true,
    },
    // Add more projects as needed
  ];
  
  // projects to be displayed on home page
  export const FeaturedJobs = 
                JobData.filter(job => job.featured)
