'use client';

import React, { useState } from 'react';
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ProjectImage = {
  id: number;
  src: string;
  alt: string;
  description: string;
};

const projectImages: ProjectImage[] = [
  { id: 19, src: '/images/19.jpg', alt: 'Mandelbrot Fractal', description: 'This program started as a simple image generator that used a common command-line parsing library to customize the quality and location shown of this popular fractal. This project was later incorporated into web servers we wrote in Rust, where the server would provide the fractal image with the custom quality, zoom, and location based on arguments passed in the URL.' },
  { id: 22,  src: '/images/22.jpg',  alt: 'Missile Defense Simulator',  description: 'This was some trigonometry that was being performed to figure out how to give a simulated "enemy missile" a non-linear path. The missile simulation was created as a project to teach coworkers the basics of the Rust programming language. In this step of augmenting the program, we converted the flight path of our enemy missile from a linear one to one that followed a sinusoidal path. This would later be used to complicate our interceptor missile\'s task of efficiently destroying the enemy missile. The training was ultimately too short to implement these more complicated tasks, though for other projects, path prediction is still something I\'m interested in, so I may come back to add that feature.' },
];

export default function ProjectGrid() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  const handleOpen = (image: ProjectImage) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
          paddingY: 1,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          width: "100%",
        }}
      >
        {projectImages.map((img) => (
          <Box
            key={img.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Box
              component="img"
              src={img.src}
              alt={img.alt}
              onClick={() => handleOpen(img)}
              sx={{
                height: 400,
                width: '95%',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                cursor: 'pointer',
              }}
            />
          </Box>
        ))}
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {selectedImage?.alt}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box
            component="img"
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            sx={{ width: '100%', maxHeight: 500, objectFit: 'contain', borderRadius: 2 }}
          />
          <Typography variant="body1" mt={2}>
            {selectedImage?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}

