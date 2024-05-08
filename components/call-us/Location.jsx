import { MAP, MARKER } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Location = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: 700, mb: 4 }}>
        Local Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5 }}>
        <Box
          sx={{
            maxWidth: "788px",
            maxHeight: "308px",
            img: { width: "100%", height: "100%" },
            flexGrow: 1,
          }}
        >
          <Image src={MAP} alt="map" />
        </Box>
        <Box sx={{ "& p": { mb: 2 }, flexGrow: 1 }}>
          <Typography sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: 700 }}>
            The Address
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "16px", md: "24px" }, color: "#1B4E7A", img: { mr: 2 } }}
          >
            <Image src={MARKER} alt="marker" width={18} height={22} />
            Syria , Aleppo
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "24px" }, color: "#1B4E7A" }}>
            The laboratory
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
