import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Best House",
    path: "/best-house",
  },
  {
    name: "Low Cost House",
    path: "/lowcast-house",
  },
  {
    name: "High Cost House",
    path: "/high-cost-house",
  },
];

export default function Navbar() {
  const [openDrawer, setOpenDrawer] = useState(false);

  const navigate = useNavigate();

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavigate = (path) => {
    navigate(path);
    setOpenDrawer(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* HEADER */}
      <AppBar
        position="sticky"
       sx={{
    background:
      "linear-gradient(90deg, #0f172a 0%, #1e293b 50%, #334155 100%)",

    color: "#fff",

    boxShadow:
      "0 4px 10px rgba(0,0,0,0.25), 0 8px 25px rgba(0,0,0,0.18)",

    borderBottom: "1px solid rgba(255,255,255,0.08)",
  }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => navigate("/dashboard")}
          >
            HouseFinder
          </Typography>

          {/* DESKTOP MENU */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 3,
              }}
            >
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  color="inherit"
                  onClick={() => handleNavigate(item.path)}
                  sx={{
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}

          {!isMobile ? (
            <Button
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              Logout
            </Button>
          ) : (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          sx={{
            width: 280,
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                p: 2,
                fontWeight: 700,
              }}
            >
              HouseFinder
            </Typography>

            <Divider />

            <List>
              {menuItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                  <ListItemButton
                    onClick={() => handleNavigate(item.path)}
                  >
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* BOTTOM LOGOUT */}
          <Box sx={{ p: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="error"
              onClick={handleLogout}
              sx={{
                textTransform: "none",
                borderRadius: "8px",
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}