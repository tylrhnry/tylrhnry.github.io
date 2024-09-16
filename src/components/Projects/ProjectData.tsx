// holds the info for all of the projects that will be shown on
// the site


// add lists that hold projects organized by course?
// just filter for if course === {course we want to display}?
//
// compiler, assembler, emulator
// missile defense system
// deep learning behavior analysis
// gps spoofing detection
// 
// school projects:
//  rust stuff
//  c++ stuff
//  python stuff
//  analysis of algorithms
//  numerical software dev
//  data structures & algos
//

export const projectData = [
  // 3060 projects
  {
    title: "Project 1",
    description: "Description of Project 1...",
    githubLink: "https://github.com/project1",
    course: "3060",
    featured: true,
  },
  {
    title: "Project 2",
    description: "Description of Project 2...",
    githubLink: "https://github.com/project2",
    course: "3060",
    featured: true,
  },

  // 3320 projects
  {
    title: "Project 3",
    description: "Description of Project 3...",
    githubLink: "https://github.com/project1",
    course: "3320",
    featured: false,
  },
  {
    title: "Project 4",
    description: "Description of Project 4...",
    githubLink: "https://github.com/project2",
    course: "3320",
    featured: false,
  },
  {
    title: "Project 5",
    description: "Description of Project 5...",
    githubLink: "https://github.com/project1",
    course: "3320",
    featured: true,
  },
  {
    title: "Project 6",
    description: "Description of Project 6...",
    githubLink: "https://github.com/project2",
    course: "339R",
    featured: false,
  },
  // Add more projects as needed
];

// projects to be displayed on home page
export const FeaturedProjects = 
              projectData.filter(project => project.featured)
