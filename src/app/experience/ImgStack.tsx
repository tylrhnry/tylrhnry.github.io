'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type TechItem = {
  name: string;
  image: string;
  description: string;
};

const techList: TechItem[] = [
  { name: 'c++', image: '/images/c++_logo.png', description: 'The majority of my programming has been with C++ and C. After having a thorough understanding of assembly programming, I really enjoy the straightforward and pure feel of the programming language. The performance and legacy of the language also largely contribute to it being in sharp competition for my favorite programming language.' },
  { name: 'rust', image: '/images/rust_logo.png', description: 'With a similar application to C, Rust competes for the slot of best performing general-purpose programming languages. One of my favorite aspects of the language is the strong type system. That, paired with the memory safety, leads to a language that allows immense behavioral guarantees. Even though there is some friction with Rust, a lot of the software development lessons that have been learned over the decades and applied to Rust make the development experience very enjoyable.' },
  { name: 'nix', image: '/images/nix_logo.png', description: 'Nix is essentially a software build tool. It uses a purely functional language to describe the resulting software and Nix builds it according to the configuration. The language it uses to do the configuration is called the Nix language and a package manager has been built from this build tool called the Nix package manager. NixOS is a Linux distribution that uses the Nix package manager (though the Nix package manager can be installed on any Unix system). So the naming can be a little confusing, but the tool is incredibly useful. Aside from just configuring your system\'s software, you can also use Nix for general software development. It can be used to configure your development environments for basically any language and integrated into the building of your software project. The declarative nature results in complete reproducibility, ensuring a consistent and reliable development and deployment.' },
  { name: 'postgres', image: '/images/postgres_logo.png', description: 'With an in-depth databases course and my experience working on a dynamic website, I have a fair bit of SQL experience, both Postgres and MySQL. While I don’t use it extensively day to day, I retain a strong understanding of relational database concepts.' },
  { name: 'react', image: '/images/react_logo.png', description: 'This website is built with TypeScript, React, and MUI. TypeScript allows for static typing and better tooling, MUI provides a fast and accessible component library, and React enables dynamic, component-based UI development. After doing some pure HTML, CSS, and Javascript, I enjoyed the flexible and capable tools that this site is built with. Because of my experience and enjoyment with Rust, I\'m also curious to try WebAssembly.' },
  { name: 'solidworks', image: '/images/solidworks_logo.png', description: 'I have certifications and several years experience with CAD in SolidWorks. It is an extremely powerful design tool and I\'ve enjoyed using for many personal projects. I\'ve used the concepts I\'ve learned and started to apply them to projects in FreeCAD. I enjoy contributing to and using open-source software, and I also enjoy not booting into my Windows operating system where Microsoft generously removed the function of my physical keyboard with no way of installing drivers or reverting updates to fix it. Though FreeCAD is not as refined as SolidWorks, it is very impressive and useful. I am especially happy to know that, unlike SolidWorks, I don\'t rely on a license to open the app and view my previous designs. My designs will also be able to be used by anyone on basically any operating system.' },
  { name: 'linux', image: '/images/linux_logo.png', description: 'The operating system that runs the world, Linux is an incredibly powerful and flexible operating system. I\'ve been using it for years and have learned how much easier it makes most things. Especially software-related things. Granted, I\'m not a gamer or reliant on any Windows-only software, but for someone who enjoys control and customization of my things, Linux is a wonderful tool.' },
  { name: 'python', image: '/images/python_logo.png', description: 'Though I think Python\'s core strength is its simple syntax, this has led to a large user base, extensive support, and many useful libraries. I\'ve used it quite extensively and find it helpful for a wide range of applications. While it may not seem as \'cool,\' its popularity gives it a lot of relevance.' },
];

export default function TechGrid() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null);

  const handleOpen = (tech: TechItem) => {
    setSelectedTech(tech);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTech(null);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: '1rem' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(4, 1fr)',
              md: 'repeat(8, 1fr)',
            },
            gap: 2,
            justifyItems: 'center',
            alignItems: 'center',
            width: '100%',
            paddingTop: '2rem',
          }}
        >
          {techList.map((tech) => (
            <Tooltip
              key={tech.name}
              title={tech.name.charAt(0).toUpperCase() + tech.name.slice(1)}
              arrow
            >
              <Box
                component="img"
                src={tech.image}
                alt={`${tech.name} logo`}
                onClick={() => handleOpen(tech)}
                sx={{
                  height: 40,
                  width: 'auto',
                  cursor: 'pointer',
                }}
              />
            </Tooltip>
          ))}
        </Box>
      </Container>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {selectedTech?.name.toUpperCase()}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={selectedTech?.image}
            alt={selectedTech?.name}
            sx={{ width: '100%', maxHeight: 300, objectFit: 'contain', borderRadius: 1 }}
          />
          <Typography variant="body1" mt={2}>
            {selectedTech?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
