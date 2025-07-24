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
  { id: 26, src: '/images/26.jpg', alt: 'Machine Learning Classifiers', description: 'This program compares several supervised machine learning classifiers on a common dataset. It splits the data into training and testing sets, trains each classifier, tests them, and displays the accuracy with a visual representation of the decision boundaries.' },
  { id: 25, src: '/images/25.jpg', alt: 'Line Equation Calculation', description: 'For my final project in a computer architecture class, I decided to write my assembly program as one that would calculate the y=mx+b formula of a line based on two sets of x and y coordinates that lie on the line. I had to write all of the math functions, including division, manually with 2\'s complement \'and\', \'or\', and \'not\' combinations. The program is limited to lines with slopes that are multiples of 0.5 and single digit inputs for x and y, but even with some of the limitations, this simple program required more than 700 lines of assembly code for the prompts, calculation, and output.' },
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
          gap: 0.5,
          paddingY: 1,
          paddingTop: '2rem',
          width: '100%',
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

