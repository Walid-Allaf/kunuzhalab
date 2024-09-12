import { MARKER, REDMARKER, WORLDMAP } from "@/assets";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MiniSlider } from "..";
import { Countries } from "@/constants";

async function getImageSlider() {
  const res = await fetch(`${process.env.BASE_URL}/ImageSlider/GetAll`, {
    cache: "force-cache",
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
      <Typography sx={{ fontSize: { xs: "20px", md: "48px" }, fontWeight: 700, textAlign: "center", mb: 2 }}>
        Customers in The World
      </Typography>
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: { xs: "column", sm: "row" } }}>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: { xs: "100%", sm: "75%" },
            "& > img": { width: "100%", height: { xs: "137px", sm: "430px" } },
          }}
        >
          <Image src={WORLDMAP} alt="world map" />
        </Box>
        <Box
          sx={{
            display: { xs: "flex", sm: "none" },
            flexDirection: "column",
            alignItems: "center",
            "& p": { textAlign: "center", textTransform: "uppercase" },
          }}
        >
          <Typography sx={{ color: "#cb2830", fontSize: "18px", fontWeight: 700 }}>We proudly export our products</Typography>
          <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>To all global markets</Typography>
          <Grid container spacing={2} sx={{ mt: 3, mb: 4, width: "80%" }}>
            {Countries.map((country, i) => (
              <Grid xs={6} item key={i} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Image src={REDMARKER} alt="marker" width={14} height={20} />
                {country}
              </Grid>
            ))}
          </Grid>
        </Box>
        <MiniSlider data={imageSlider} />
      </Box>
    </Box>
  );
};

export default World;
