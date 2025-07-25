// holds the info for all of the projects that will be shown on
// the site


// add lists that hold projects organized by course?
// just filter for if course === {course we want to display}?
//
// compiler, assembler, emulator
// missile defense system
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
  {
    title: "Vision-Based Drone Navigation",
    description: "Working with another student in my class, we made a program that will serve as a core utility in the autonomous navigation of a drone. The program takes a downward-looking image from the drone and applies a number of filtering and matching techniques in order to determine where the drone's image matches with onboard satellite imagery. The matching location in the satellite image can be used to extract approximate coordinates for the drone in real time. Because the satellite imagery can be stored on the drone, the drone gains a large amount of autonomous abilities. After pairing with other positioning techniques (like IMU integration), I expect a drone flying a few hundred feet in the air should be able to complete waypoint missions without reliance on GNSS.",
    githubLink: "https://gitlab.com/tylrhnry/drone-nav",
    course: "CS 4700 Machine Learning",
    featured: true,
  },
  {
    title: "GPS Spoofing Detection",
    description: "I wrote a Rust program that, when coupled with common drone hardware (GPS and IMU), can work to detect artificial GPS signals meant to attack the drone. The program performs an integration on the accelerometer and gyroscope readings to estimate its relative position since the last verified location. If the new location is within the margin of error of the received GPS readings, we assume the drone is still receiving accurate GPS data. If the drone starts receiving GPS data that suggests it has been moving contrary to what the IMU has measured, we assume the GPS data is inaccurate. When validation is frequently performed, the sensor error can be continuously removed, leading to more accurate detection of adversarial signals.",
    githubLink: "https://github.com/tylrhnry/gps_spoofing_detection",
    course: "339R (Advanced Programming Language (Rust))",
    featured: true,
  },
  {
    title: "Missile Defense System",
    description: "This missile defense simulator was created from scratch to teach the Rust programming language to dozens of interns and professional C++ developers at the Air Force. This program simulates and visualizes enemy and interceptor missiles. The enemy missile can be given a non-linear path to complicate targeting from the interceptor. Currently, the path prediction is rudimentary, and I would like to add spline regression and a binary search on the predicted path to allow for quicker interception and realistic range limits.",
    githubLink: "https://github.com/tylrhnry/missile_defense_sim",
    course: "Personal",
    featured: true,
  },
  {
    title: "Compiler",
    description: "Written in Rust, this compiler was written from scratch to do the lexing, parsing, semantic analysis, and assembly code generation of a language with the most common features of the C++ programming language. The assembly code generated targets the assembler I wrote as part of the precursor class, which then assembles the code into byte code that runs on a virtual machine I programmed in C++.",
    githubLink: "N/A",
    course: "4490 (Compiler Construction)",
    featured: true,
  },
  {
    title: "Home Server",
    description: "Meant as a file server and backup, as well as a platform to self-host a number of other services, this computer has a large reliability requirement. As such, the hardware has substantial power for the programs it will run, including a 32-thread CPU, error-correcting ECC memory, and large hard drives in a ZFS mirror to provide filesystem-based error correction and account for potential hard drive failures.\n\
    The software shares a declarative Nix configuration with my other computers to persist my updates and configuration settings across all my machines, making development extremely consistent. \n\
    The declarative approach is a dream to work with. Any update or progress I make on any machine can seamlessly be applied to all of my systems, completely removing repetitive configuration, which when setting up and working with many systems, is a huge deal. Backups are extremely simple. Software development and builds are managed the same way, removing the \"It works on my machine\" problem, and is a consistent tool across languages.",
    // The server also uses impermanence, which wipes my whole system to a minimal blank snapshot on every reboot. The only exception are files and directories that I explicitly declare to be bind-mounted to a persistent location. This enforces a stateless system that always maintains a fresh feel and complete reproducibility. I use sops-nix for secrets-management, allowing my to securely include keys and passwords into my configuration. Disko allowed my to set up very advanced file system configurations in a simple and extensible way.\n\
    githubLink: "",
    course: "",
    featured: false,
  },
  {
    title: "Endurance VTOL Drone",
    description: "This plane is still in the early stages of development. I am currently converting my paper designs to CAD models in FreeCAD and assembling the components I have built. The primary purpose of the drone is visual and radio surveillance. I'm taking a very math-focused approach to the design and component selection, which has taught me quite a bit more than my prior drone builds that are less optimised or built with generic components. I'm attempting to maximize endurance on a platform that is compact when disassembled and modular in the motor and payload configurations.\n\
    The plane is being designed to allow vertical takeoff and landing. The primary configuration with have a 2-meter wingspan and should have a total wet weight of 6-8kg depending on payload.\n\
    ",
    githubLink: "",
    course: "",
    featured: false,
  },
  {
    title: "This Website",
    description: "This website is written in Typescript, using React and NextJS. It is hosted by my home server and Github Pages for redundancy. The development and build environment is kept reproducible using Nix.",
    githubLink: "https://github.com/tylrhnry/tylrhnry.github.io",
    course: "",
    featured: false,
  },
  {
    title: "Assembler",
    description: "Written in Python, this assembler targets the virtual machine I wrote in C++ and converts assembly code into bytecode. It does error checking of the assembly code, implements a traditional stack and heap memory model. Example programs demonstrate the use of stack frames, recursion, heap memory management.",
    githubLink: "N/A",
    course: "4380 (Advanced Computer Architecture and Assembly)",
    featured: false,
  },
  {
    title: "Virtual Machine",
    description: "I wrote a program in C++ that can read byte code (binary data) and execute it as if it is the hardware of a machine. This virtual machine implemented three different caching types that are implemented \"in hardware\" and abstracted from the assembly programmer. Cmake and Google testing framework were used for building and testing.",
    githubLink: "N/A",
    course: "4380 (Advanced Computer Architecture and Assembly)",
    featured: false,
  },
  {
    title: "Rust-C++ binding",
    description: "Rust is often a great language to use in scenarios where C and C++ are appropriate, however, complete rewrites are frequently unwise. Implementing new code or replacing small sections, however, might be found to be desirable. Luckily, Rust incorporates with C/C++ very nicely. This project implements a simple linear algebra library and performs cross-language compilation and function calls. The ability to depend on the great legacy and support of C, as well as incorporating the strong behavioral guarantees of Rust is an incredibly useful tool for embedded development.",
    githubLink: "N/A",
    course: "339R (Advanced Programming Language (Rust))",
    featured: true,
  },
  // Add more projects as needed
];

// projects to be displayed on home page
export const FeaturedProjects = 
              projectData.filter(project => project.featured)
