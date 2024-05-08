import { ALEPPO } from "@/assets";
import { SocialItems } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CallUs, SocialMedia } from "..";

const Footer = () => {
  return (
    <Box
      sx={{
        px: { xs: "25px", md: "100px" },
        pt: 6,
        pb: 8,
        bgcolor: "primary.main",
        "& p": { color: "#fff" },
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", sm: "row" },
        gap: 4,
      }}
    >
      <CallUs />
      <Box
        sx={{
          "& img": {
            width: { xs: "275px", sm: "385px" },
            height: { xs: "161px", sm: "244px" },
          },
        }}
      >
        <Image src={ALEPPO} alt="aleppo" />
      </Box>
      <SocialMedia />
    </Box>
  );
};

export default Footer;
