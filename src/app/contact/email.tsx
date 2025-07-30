'use client';

import React from 'react';
import { Box, Typography, Button, Snackbar, Link, Collapse, } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Image from "next/image";
import { useTheme } from '@mui/material/styles';

const pgpKey = `
-----BEGIN PGP PUBLIC KEY BLOCK-----

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
l/W5QZDMie9VA9Yk7OYqESjo
=u/Pe
-----END PGP PUBLIC KEY BLOCK-----`;

const EmailBlock: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pgpKey);
      setCopied(true);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  const [showPGP, setShowPGP] = React.useState(false);

  const theme = useTheme();
  const isDarkMode = theme.palette.background.default === "#111";
  
  return (
    <Box>
      <Box sx={{ 
        display: 'flex',
        flexDirection: { xs: "column", md: "row" },
        gap: 1,
      }}>
        <Box>
          <Image
            src={"/images/email.png"}
            alt="Email Icon"
            width={20}
            height={20}
            style={{
              filter: isDarkMode ? 'invert(1)' : 'invert(0)',
            }}
          />
          &emsp;Email:&emsp;&emsp;
          <Link
            href="mailto:resume.25@tylrhnry.com"
            underline="hover"
            color="inherit"
          >
            resume.25@tylrhnry.com
          </Link>
        </Box>

        <Button
          onClick={() => setShowPGP(!showPGP)}
          variant="outlined"
          startIcon={showPGP ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
          sx={{
            padding: '0px 6px',
            marginBottom: { xs: "0.5rem", md: "0" },
            marginLeft: { xs: "0", md: "1rem" },
            maxWidth: "150px",
          }}
        >
          {showPGP ? 'Hide PGP' : 'Show PGP'}
        </Button>
      </Box>

      <Collapse in={showPGP}>
        <Box sx={{ my: 0, paddingTop: "1rem" }}>
          <Link
            href="https://www.openpgp.org/"
            color="inherit"
            target="_blank"
            rel="noopener noreferrer"
          >What is OpenPGP?</Link>
          <Box sx={{
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
          }}>
            {/*
            <Typography sx={{ paddingTop: "0.3rem" }}>
              My &nbsp;
              <Link
                href="https://www.openpgp.org/"
                color="inherit"
              >PGP public key </Link>
            </Typography>
            */}
            <Box sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              marginTop: "1rem",
            }}>
              <Button
                onClick={handleCopy}
                variant="outlined"
                startIcon={<ContentCopyIcon />}
                sx={{ 
                  marginLeft: {xs: "0", md: "0rem"},
                  marginRight: {xs: "1rem", md: "0"},
                }}
              >
                Copy
              </Button>
              <Button
                component="a"
                href="/files/Tyler-Henry-pgp-key.asc"
                download
                variant="outlined"
                startIcon={<DownloadIcon />}
                sx={{ 
                  marginLeft: {xs: "1rem", md: "1rem"},
                }}
              >
                Download
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              fontFamily: 'monospace',
              fontSize: {xs: "0.5rem", md: '0.7rem'},
              textAlign: {xs: "center", md: "left"},
              marginBottom: "2rem",
            }}
          >
            {pgpKey}
          </Box>
          <Snackbar
            open={copied}
            autoHideDuration={2000}
            onClose={() => setCopied(false)}
            message="PGP key copied!"
          />
        </Box>
      </Collapse>
    </Box>
  );
};

export default EmailBlock;
