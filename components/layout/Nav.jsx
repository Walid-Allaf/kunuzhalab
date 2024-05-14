"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Drawer, IconButton } from "@mui/material";
import { LOGO } from "@/assets";
import { MENU } from "@/assets";
import Links from "./Links";

const Nav = () => {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <Box
        px={{
          xs: "25px",
          md: "100px",
        }}
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
      >
        <Box
          component={Link}
          href={"/"}
          sx={{
            "& img": {
              width: {
                xs: "73px",
                md: "146px",
              },
              height: {
                xs: "50px",
                md: "100px",
              },
            },
          }}
        >
          <Image src={LOGO} alt="logo" />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Links />
        </Box>

        <IconButton edge="end" onClick={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
          <Image src={MENU} alt="menu" width={15} height={12} />
        </IconButton>
      </Box>

      <Box
        component="nav"
        sx={{
          width: { sm: 240 },
          flexShrink: { sm: 0 },
          display: { xs: "block", sm: "none" },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerClose}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              minHeight: "100vh",
              pl: 3,
            },
          }}
          anchor="left"
        >
          <Links onClose={handleDrawerClose} />
        </Drawer>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "2px",
          bgcolor: "primary.main",
          opacity: "10%",
        }}
      ></Box>
    </>
  );
};

export default Nav;
