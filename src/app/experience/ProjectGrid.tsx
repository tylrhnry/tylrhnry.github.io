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
  { id: 12, src: '/images/12.jpg', alt: 'LoRa Modulation', description: 'This is an FFT waterfall display of the transmissions from one of my radios that uses LoRa modulation. The frequency chirps draw a line across the frequency spectrum in a relatively slow manner as to allow very distant communication with very limited power. These radios have been very convenient when in places without reliable cell-service as a way to share our location, send messages, or even integrate with the mapping app, ATAK, to share pins, routes, and data and have them update in real-time with an entire party. Because of the low power and frequency spectrum they utilize, you can create separate encryption channels to ensure your messages and data can only be read by those with whom you intend.' },
  { id: 18, src: '/images/18.jpg', alt: 'Soldering Radio Components', description: 'This was during the first assembly steps of my HF transceiver. Installing the first resistors would be the beginning of a many hour assembly process, involving winding toroids and testing hundreds of connections. It was a great little project with some real utility. More assembled versions can be seen in a few other pictures on this site.' },
  { id: 9,  src: '/images/9.jpg',  alt: 'Air Force Trainings',  description: 'As a part of my job with the Air Force, I was able to work on a time-tested system. The F-16 is a workhorse of a system, and the radar is quite impressive for a technological system that is close to 40 years old. Aside from my work on the radar, I was also able to participate in a couple of other projects and many other trainings to help gain a comprehensive understanding of how the different subsystems integrate and operate together to support the aircraft\'s role.' },
  { id: 13, src: '/images/13.jpg', alt: 'Training VS Accuracy in Machine Learning', description: 'Description for project 13.' },
  { id: 8,  src: '/images/8.jpg',  alt: 'Assembled HF Radio',  description: 'Assembled, tested, waterproofed, and with a tuned EFHW antenna, this little radio might be the smallest HF transceivers capable of digital modes and voice communication. After receiving clear audio and many data packets from thousands of miles away, I\'m extremely satisfied with the build and the performance. I still need to make a compact microphone to allow me to transmit voice, but I\'m already testing my digital mode capabilities with a family member to see if we can make targeted contacts from hundreds of miles away with no intermediary infrastructure.' },
  { id: 7, src: '/images/7.jpg', alt: 'Home Server', description: 'This computer acts as both my desktop computer and a server. I have been using Nixos for quite some time and have found it to be an incredibly useful tool for building software. Nixos is used to build my entire system\'s software on all of my machines, down to the disk partitioning and up to user\'s package configuration. It would take a bit of time to go into detail on the entire system, but this computer is allowing me to self-host a number of useful services, as well as be a strong machine to do my development on and to host and back up important data. I\'m planning on creating an offsite backup that syncs with this one so that I can reliably store many terabytes of media, photos & video, and documents for myself, family, and friends in a secure manner.' },
  { id: 10, src: '/images/10.jpg', alt: 'Meshtastic Radio', description: 'This is an example of one of my Meshtastic radios. This one was specifically made to be as compact as possible while still containing a GPS module and a low-power-consumption e-ink screen. I clearly need to add a 3D printed case, but the size made it useful to bring anywhere and allow GPS tracking and location sharing with family or friends if we plan on getting separated during a hike or road trip.' },
  { id: 14, src: '/images/14.jpg', alt: 'Compiler', description: 'For my capstone project, I wrote a language compiler that converts source code to assembly code. An assembler and virtual machine that I wrote in a precursor class then converts the assembly code into machine code and then executes the source code. This image shows an example of the source code and the resulting assembly code that the compiler generated. This project gave me a much better understanding of the fundamental application that state machines have to computing. The theory that was learned and lightly practiced in other courses was applied heavily here, and it added an important key to completing my understanding of how the code I write finally makes it to hardware. I still have a passion for having a comprehensive understanding of the tools I work with, and enjoy working in domains where I can see the execution and performance that comes from the high-level languages we tend to work with.' },
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
