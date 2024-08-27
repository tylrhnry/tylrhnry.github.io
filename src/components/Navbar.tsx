

import React, { FC, ReactElement } from "react";
import {
  Box,
  Link,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "../routes";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLocation } from 'react-router-dom';


const Navbar: FC = (): ReactElement => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const location = useLocation();
  const currentPath = location.pathname;
  const initialOpenPage = routes.find(page => page.path === currentPath)?.title || null;
  const [openPage, setOpenPage] = React.useState<string | null>(initialOpenPage);

  const handleOpenNavMenu = (event: any) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "primary.main",
        position: "fixed",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              paddingLeft: "3.5rem",
              color: "text.primary"
            }}
          >
            Tyler Henry
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none", } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((page) => (
                <Link
                  onClick={() => setOpenPage(page.title)}
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color={page.title === openPage ? "gray" : "black"}
                  underline="none"
                  variant="button"
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: { xs: "flex", md: "none" },
              color: "text.primary",
             }}
          >
            Tyler Henry
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex"} }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                marginLeft: "1rem",
              }}
            >
              {routes.map((page) => (
                <Link
                  onClick={() => setOpenPage(page.title)}
                  key={page.key}
                  component={NavLink}
                  to={page.path}
                  color={page.title === openPage ? "text.secondary" : "text.primary"}
                  underline="none"
                  variant="button"
                  sx={{ 
                    fontSize: "large", 
                    marginLeft: "1rem",
                    "&:hover": {
                      color: "white",
                    }
                  
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