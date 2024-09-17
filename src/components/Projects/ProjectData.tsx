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

//

export const projectData = [
  // 3060 projects
  {
    title: "Virtual Machine",
    description: "I wrote a program in C++ that can read byte code (binary data) and execute it as if it is the hardware of a machine. This virtual machine implemented three different caching types that are implemented \"in hardware\" and abstracted from the assembly programmer. Cmake and Google testing framework were used for building and testing.",
    githubLink: "https://github.com/project1",
    course: "4380",
    featured: true,
  },
  {
    title: "Assembler",
    description: "Written in Python, this assembler targets the virtual machine I wrote in C++ and converts assembly code into bytecode. It does error checking of the assembly code, implements a traditional stack and heap memory model. Example programs demonstrate the use of stack frames, recursion, heap memory management.",
    githubLink: "https://github.com/project2",
    course: "4380",
    featured: true,
  },

  // 3320 projects
  {
    title: "Compiler",
    description: "Written in Rust, this compiler was written from scratch to do the lexing, parsing, ... of a language with the most common features of the C++ programming language and convert it into assembly language that targets the assembler I wrote as part of the precursor class.",
    githubLink: "https://github.com/project1",
    course: "4490",
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
