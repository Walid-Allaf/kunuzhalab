import { SocialItemsCallUs } from "@/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { SocialMediaSmall } from "..";

const Communication = () => {
  return (
    <Box sx={{ my: 14, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
      <Typography sx={{ fontSize: { xs: "20px", md: "64px" }, fontWeight: { xs: 700, md: 600 } }}>
        Our Social Media Pages
      </Typography>
      <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3.5 }}>
        {SocialItemsCallUs.map((item, index) => {
          const { path, icon, width, height } = item;
          return (
            <Link href={path} key={index}>
              <Image src={icon} alt={path} width={width} height={height} />
            </Link>
          );
        })}
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <SocialMediaSmall />
      </Box>
    </Box>
  );
};

export default Communication;
