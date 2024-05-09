import { WORLDMAP } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MiniSlider } from "..";

async function getImageSlider() {
  const res = await fetch(`${process.env.BASE_URL}/ImageSlider/GetAll`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const World = async () => {
  const imageSlider = await getImageSlider();
  return (
    <Box>
      <Typography
        sx={{ fontSize: { xs: "20px", md: "48px" }, fontWeight: 700, textAlign: "center", mb: 2 }}
      >
        Customers in The World
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "75%" },
            "& > img": { width: "100%", height: { xs: "137px", sm: "430px" } },
          }}
        >
          <Image src={WORLDMAP} alt="world map" />
        </Box>
        <MiniSlider data={imageSlider} />
      </Box>
    </Box>
  );
};

export default World;
