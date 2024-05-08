import Image from "next/image";
import { Box, Typography } from "@mui/material";

const HeroTitle = ({ title, image }) => (
  <Box
    className="background"
    sx={{
      position: "relative",
      minHeight: { xs: "65px", md: "271px" },
      width: "100%",
      mx: "auto",
      display: "grid",
      placeItems: "center",
      borderRadius: "10px",
      background: "#ECECEC",
    }}
  >
    <Typography
      sx={{
        fontSize: { xs: "16px", md: "64px" },
        fontWeight: 700,
        position: "relative",
        zIndex: 2,
      }}
    >
      {title}
    </Typography>
    {image && (
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: "-35px", md: "-80px" },
          right: { xs: "-12px", md: "-60px" },
          zIndex: 1,
          img: { width: { xs: "84px", md: "294px" }, height: { xs: "89px", md: "329px" } },
        }}
      >
        <Image src={image} alt="hero title right img" />
      </Box>
    )}
  </Box>
);

export default HeroTitle;
