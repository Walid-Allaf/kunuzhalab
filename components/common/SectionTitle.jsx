import { TITLEBG } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const SectionTitle = ({ value }) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: "187px", md: "511px" },
        height: { xs: "99px", md: "270px" },
        display: "grid",
        placeItems: "center",
        mx: "auto",
        my: 5,
        img: {
          position: "absolute",
          top: 0,
          left: 0,
          width: { xs: "187px", md: "511px" },
          height: { xs: "99px", md: "270px" },
        },
      }}
    >
      <Image src={TITLEBG} alt="title background" />
      <Typography sx={{ fontWeight: 700, fontSize: { xs: "24px", md: "64px" } }}>
        {value}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
