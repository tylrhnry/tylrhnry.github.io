
export const JobData = [
    {
      title: "Job 1",
      description: "Description of Project 1...",
      featured: true,
    },
    {
      title: "Job 2",
      description: "Description of Project 2...",
      featured: true,
    },
    {
      title: "Job 3",
      description: "Description of Project 3...",
      featured: true,
    },
    // Add more projects as needed
  ];
  
  // projects to be displayed on home page
  export const FeaturedJobs = 
                JobData.filter(job => job.featured)