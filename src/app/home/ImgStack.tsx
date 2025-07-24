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
  { src: '/images/2.jpg', alt: 'APG 68 RADAR', description: 'At the Air Force, my job was to work on the software for the radar computers of the APG 68. Though I can\'t mention details or specifics, I contributed to fixes, updates, and maintenance of the large, mission-critical system.' },
  { src: '/images/3.jpg', alt: 'QRP HF Transceiver', description: 'I ordered the components for a QRP (less than 5W) transceiver, that included the PCB\'s with surface-mount components, and the remaining components that needed to be wound, soldered, and assembled. The radio allows me to communicate with voice, morse-code, and digital modes. I\'ve already been able to get contact from people thousands of miles away, and am working with my family and a ham-radio group to get more practice making targeted contacts.' },
  { src: '/images/4.jpg', alt: 'Ground-Penetrating RADAR', description: 'During the later part of my internship at the Air Force, I was able to serve as the primary developer on a master\'s degree project researching the efficacy of using a low-cost software defined radio as a ground-penetrating radar for explosive device detection. The job allowed me to spend a significant amount of time studying and implementing signal processing theory and techniques.' },
  { src: '/images/11.jpg', alt: 'GPS-Denied Drone Positioning', description: 'As part of a senior machine learning class, I worked on developing the basis of a program that should allow a drone to estimate its location based on comparisons of the drone\'s view with onboard satellite imagery. The image shows features that were matches between the two images, along with the calculated position of the center of the drone\'s image within the larger satellite image. A large emphasis was put on keeping it a computationally simple program, to not consume limited processing power found on medium-grade UAV\'s. The processing is all done real-time and onboard to allow navigation even if jamming is present. I\'m still working on making it more reliable when lighting or seasonal changes make direct comparisons more difficult, but I\'m planning on putting this on drones I\'m building, in conjunction with an IMU-based motion estimation program to further assist in autonomous and reliable navigation.' },
  { src: '/images/6.jpg', alt: 'GPS Spoofing Detection', description: 'This program is made to work with hardware found on most drones and allow a rudimentary detection of potential GNSS manipulation. The accelerometer and gyroscope are used to approximate velocity and position changes and compare that with the received GPS data. If rudimentary spoofing is attempted, detection is reliable, but IMU-based position estimation is somewhat dependent on the accuracy of the sensors. This program can warn when GPS signals indicate motion significanly different than that of the drone, but better accuracy will likely require a combining with other sensors (cameras, air-speed, barometers) and more low-level analysis of the GPS signals themselves to look for other trademarks of spoofing attempts.' },
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
