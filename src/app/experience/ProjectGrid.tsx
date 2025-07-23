'use client';

import React, { useState } from 'react';
import {
  Container,
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
  // TODO
  { id: 12, src: '/images/12.jpg', alt: 'Project 12', description: 'Description for project 12.' },
  { id: 18, src: '/images/18.jpg', alt: 'Project 18', description: 'Description for project 18.' },
  { id: 9,  src: '/images/9.jpg',  alt: 'Project 9',  description: 'Description for project 9.' },
  { id: 13, src: '/images/13.jpg', alt: 'Project 13', description: 'Description for project 13.' },
  { id: 8,  src: '/images/8.jpg',  alt: 'Project 8',  description: 'Description for project 8.' },
  { id: 11, src: '/images/11.jpg', alt: 'Project 11', description: 'Description for project 11.' },
  { id: 10, src: '/images/10.jpg', alt: 'Project 10', description: 'Description for project 10.' },
  { id: 14, src: '/images/14.jpg', alt: 'Project 14', description: 'Description for project 14.' },
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
      <Container sx={{ paddingBottom: '0.5rem' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: 2,
            maxHeight: { md: 800 },
            overflowY: 'auto',
            paddingY: 1,
            paddingTop: '2rem',
          }}
        >
          {projectImages.map((img) => (
            <Box
              key={img.id}
              component="img"
              src={img.src}
              alt={img.alt}
              onClick={() => handleOpen(img)}
              sx={{
                height: 250,
                width: '100%',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 2,
                cursor: 'pointer',
              }}
            />
          ))}
        </Box>
      </Container>

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
