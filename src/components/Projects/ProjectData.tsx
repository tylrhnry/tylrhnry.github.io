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
    course: "4380 (Advanced Computer Architecture and Assembly)",
    featured: true,
  },
  {
    title: "Assembler",
    description: "Written in Python, this assembler targets the virtual machine I wrote in C++ and converts assembly code into bytecode. It does error checking of the assembly code, implements a traditional stack and heap memory model. Example programs demonstrate the use of stack frames, recursion, heap memory management.",
    githubLink: "https://github.com/project2",
    course: "4380 (Advanced Computer Architecture and Assembly)",
    featured: true,
  },
  {
    title: "Compiler",
    description: "*In Progress*\n\
    Written in Rust, this compiler was written from scratch to do the lexing, parsing, ... of a language with the most common features of the C++ programming language and convert it into assembly language that targets the assembler I wrote as part of the precursor class.",
    githubLink: "https://github.com/project1",
    course: "4490 (Compiler Construction)",
    featured: true,
  },
  {
    title: "GPS Spoofing Detection",
    description: "I wrote a Rust program that when coupled with commone drone hardware (GPS and IMU) can work to detect artificial GPS signals meant to attack the drone. The program performs an integration on the accelerometer and gyroscope readings to estimate it's relative position since the last verified location. If the new location is within the margin of error of the received GPS readings, we assume the drone is still receiving accurate GPS data. If the drone starts receiving GPS data that suggests it has been moving contrary to what the IMU has measured, we assume the GPS data is inaccurate. When validation is frequently performed, the sensor error can be continuously removed, leading to more accurate detection of adversarial signals.",
    githubLink: "https://github.com/project2",
    course: "339R (Advanced Programming Language (Rust))",
    featured: true,
  },
  {
    title: "Missile Defense System",
    description: "Created from scratch to teach the Rust programming language to dozens of and interns and professional C++ developers at the Airforce. This program simulates and visualizes enemy and interceptor missiles. The enemy missile can be given a non-linear path to complicate targeting from the interceptor. The interceptor implements spline regression for fast, real-time path prediction of the enemy missile. Once a path is predicted, a form of binary search is implemented on the path to determine the best point of intercept.",
    githubLink: "https://github.com/project1",
    course: "Personal",
    featured: true,
  },
  {
    title: "Rust-C++ binding",
    description: "Rust is often a great language to use in scenarios where C/C++ are appropriate. Most legacy systems build for C/C++ support first. Rust makes it very easy to call Rust code from a C program, or to call C code from a Rust program. This program implements this in a simple linear algebra crate.",
    githubLink: "https://github.com/project2",
    course: "339R (Advanced Programming Language (Rust))",
    featured: true,
  },
  // Add more projects as needed
];

// projects to be displayed on home page
export const FeaturedProjects = 
              projectData.filter(project => project.featured)
