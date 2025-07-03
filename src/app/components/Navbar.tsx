'use client';
import React, { FC, ReactElement, useEffect, useState } from 'react';
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { routes } from '../../routes';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pathname = usePathname();
  const [openPage, setOpenPage] = useState<string | null>(null);

  useEffect(() => {
    const currentRoute = routes.find((page) => page.path === pathname);
    setOpenPage(currentRoute?.title || null);
  }, [pathname]);

  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'primary.main',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link component={NextLink} href="/home" rel="noopener noreferrer">
            <Typography
              variant="h4"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                paddingLeft: '2.5rem',
                color: 'text.primary',
                fontFamily: "'Georgia', serif",
              }}
            >
              Tyler Henry
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {routes.map((page) => (
                <MenuItem
                  key={page.key}
                  component={NextLink}
                  href={page.path}
                  onClick={() => {
                    setOpenPage(page.title);
                    handleCloseNavMenu();
                  }}
                  sx={{
                    color: page.title === openPage ? 'gray' : 'black',
                    textDecoration: 'none',
                  }}
                >
                  <Typography textAlign="center" variant="button">
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            component={NextLink}
            href="/home"
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' },
              color: 'text.primary',
              textAlign: 'center',
              textDecoration: 'none',
            }}
          >
            <Typography variant="h4" noWrap component="div">
              Tyler Henry
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginLeft: '2.5rem',
              }}
            >
              {routes.map((page) => (
                <Link
                  key={page.key}
                  component={NextLink}
                  href={page.path}
                  onClick={() => setOpenPage(page.title)}
                  color={page.title === openPage ? 'text.secondary' : 'text.primary'}
                  underline="none"
                  variant="button"
                  sx={{
                    fontSize: 'large',
                    marginLeft: '1rem',
                    '&:hover': {
                      color: 'white',
                    },
                  }}
                >
                  {page.title}
                </Link>
              ))}
            </Box>
          </Box>
          <ThemeSwitcher />
        </Toolbar>
      </Container>
    </Box>
  );
};

export default Navbar;
