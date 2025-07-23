'use client';

import React, { useState } from 'react';
import {
  Container,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type ImageData = {
  src: string;
  alt: string;
  description: string;
};

const images: ImageData[] = [
  { src: '/images/1.jpg', alt: 'HF SDR', description: 'On a backpacking trip, I tested a software defined radio with my HF antenna. Tuned to the 40m Ham band, I was able to quickly find and listen to various conversations from people hundreds of miles away with hardware that fits in a small pouch.' },
  { src: '/images/2.jpg', alt: 'APG 68 RADAR', description: 'Description for project 2' }, // TODO
  { src: '/images/3.jpg', alt: 'Project 3', description: 'Description for project 3' }, // TODO
  { src: '/images/4.jpg', alt: 'Project 4', description: 'Description for project 4' }, // TODO
  { src: '/images/5.jpg', alt: 'Project 5', description: 'Description for project 5' }, // TODO
  { src: '/images/6.jpg', alt: 'Project 6', description: 'Description for project 6' }, // TODO
  { src: '/images/7.jpg', alt: 'Project 7', description: 'Description for project 7' }, // TODO
];

export default function ImageGallery() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  const handleOpen = (image: ImageData) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ paddingBottom: '2rem' }}>
        <Box
          sx={{
            display: 'flex',
            overflowX: 'auto',
            gap: 2,
            paddingY: 2,
            mx: 'auto',
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              component="img"
              src={image.src}
              alt={image.alt}
              onClick={() => handleOpen(image)}
              sx={{
                height: 150,
                width: 'auto',
                borderRadius: 2,
                boxShadow: 2,
                flexShrink: 0,
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
            sx={{ width: '100%', borderRadius: 2 }}
          />
          <Typography variant="body1" mt={2}>
            {selectedImage?.description}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
