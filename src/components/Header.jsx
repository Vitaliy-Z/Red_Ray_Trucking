import * as React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { ThemeProvider } from "@mui/material/styles";
import { headerTheme } from "../styles/components/header";

const pages = ["Про нас", "Наші послуги", "Відгуки"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ThemeProvider theme={headerTheme}>
      <AppBar
        position="static"
        color="neutral"
        sx={{ maxWidth: "lg", margin: "0 auto" }}
      >
        <Container>
          <Toolbar disableGutters>
            <Box
              sx={{
                width: "100%",
                display: { xs: "flex" },
                alignItems: "center",
                justifyContent: {
                  xs: "space-between",
                  sm: "center",
                  md: "space-evenly"
                }
              }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  display: { sm: "none" },
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  fontStyle: "italic",
                  color: "red"
                }}
              >
                Red Ray Trucking
              </Typography>
              <Link
                href="tel:+380937937399"
                color="#fff"
                underline="none"
                sx={{
                  display: { sm: "none", md: "inline-block" },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  borderBottom: "2px solid red"
                }}
              >
                +38 093 793 73 99
              </Link>
              <IconButton
                sx={{
                  display: { sm: "none" }
                }}
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
                  horizontal: "left"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left"
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", sm: "none" }
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  justifyContent: { sm: "space-around", md: "center" }
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ mx: 3, my: 2, color: "white", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
              <Link
                href="mailto:redraytrucking@gmail.com"
                color="#fff"
                underline="none"
                sx={{
                  display: { xs: "none", md: "inline-block" },
                  fontSize: { xs: "0.9rem", md: "1rem" },
                  borderBottom: "2px solid red"
                }}
              >
                redraytrucking@gmail.com
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};
export default Header;
