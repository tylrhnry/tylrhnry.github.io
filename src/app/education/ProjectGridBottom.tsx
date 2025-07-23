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
  // TODO
  { id: 19, src: '/images/19.jpg', alt: 'Project 19', description: 'Description for project 12.' },
  { id: 22,  src: '/images/22.jpg',  alt: 'Project 22',  description: 'Description for project 9.' },
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

