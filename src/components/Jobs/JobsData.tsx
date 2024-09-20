
export const JobData = [
  {
    title: "Radar Researcher",
    company: "Air Force",
    dates: "Apr. 2024 - Present",
    description: `* Led the development of a drone-mounted Ground Penetrating Radar (GPR) system, integrating a Software Defined Radio (SDR) and custom signal processing algorithms, which achieved an 80x reduction in system cost compared to existing methods.

      * Served as the primary software developer for a GPR system project, contributing to a Master’s Degree research project focused on innovative explosive device detection.

      * Developed and integrated software for seamless communication between ground station and drone-mounted systems, enabling real-time exchange of commands and signal data.
    `,
    featured: true,
  },
  {
    title: "Full-Stack Developer",
    company: "Air Force",
    dates: "Jul. 2023 - Apr. 2024",
    description: `* Developed a website with the PERN stack to host trainings, information, and forms that were previously done on paper, saving administrators 15 hours a week.

      * Added complex site features to allow employees and operators to submit, maintain, and fulfill project-critical 3D print requests.
    `,
    featured: true,
  },
  {
    title: "Student Engineer",
    company: "Bull Frog Spas",
    dates: "Jun. 2021 - Aug. 2021",
    description: `* Led the design and initial implementation of a software interface that dynamically displayed assembly processes for 17 products with hundreds of configurations.

      * Designed the structure of a digital tracking system for dozens of products, collaborating with software developers and production teams to accurately define and meet system requirements.
    `,
    featured: true,
  },
  {
    title: "Engineering Intern",
    company: "Blendtec Inc.",
    dates: "Jan. 2021 - Apr. 2023",
    description: `* Designed and tested new assembly aids and tools using Solidworks and microcontrollers to update and revise assembly processes.

      * Planned, formulated, and oversaw the fabrication of updated assembly lines, doubling the output potential of production teams.
    `,
    featured: true,
  },
  // Add more projects as needed
];
  
// projects to be displayed on home page
export const FeaturedJobs = 
              JobData.filter(job => job.featured)
