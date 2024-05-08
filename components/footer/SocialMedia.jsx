import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { SocialItems } from "@/constants";
import { SocialMediaSmall } from "..";

const SocialMedia = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", sm: "flex-start" },
      }}
    >
      <Typography sx={{ mb: 3, fontSize: "20px", fontWeight: 700 }}>SOCIAL MEDIA</Typography>
      <SocialMediaSmall />
      <Typography sx={{ mt: 4 }}>Email: goldenAleppo@soap.com</Typography>
    </Box>
  );
};

export default SocialMedia;
