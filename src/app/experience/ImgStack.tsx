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
  // TODO
  { name: 'c++', image: '/images/c++_logo.png', description: 'A powerful systems programming language.' },
  { name: 'rust', image: '/images/rust_logo.png', description: 'A memory-safe, fast systems language.' },
  { name: 'nix', image: '/images/nix_logo.png', description: 'A functional package manager and build system.' },
  { name: 'postgres', image: '/images/postgres_logo.png', description: 'A powerful open source SQL database.' },
  { name: 'react', image: '/images/react_logo.png', description: 'A JavaScript library for building UIs.' },
  { name: 'solidworks', image: '/images/solidworks_logo.png', description: 'A 3D CAD design software.' },
  { name: 'linux', image: '/images/linux_logo.png', description: 'A family of open-source Unix-like operating systems.' },
  { name: 'python', image: '/images/python_logo.png', description: 'A high-level, interpreted programming language.' },
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
