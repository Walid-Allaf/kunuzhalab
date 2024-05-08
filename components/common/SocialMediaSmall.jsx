import { SocialItems } from "@/constants";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const SocialMediaSmall = () => (
  <Box sx={{ display: "flex", gap: 1.5 }}>
    {SocialItems.map((item, index) => {
      const { path, icon } = item;
      return (
        <Link href={path} key={index}>
          <Box
            sx={{
              width: "32px",
              height: "32px",
              bgcolor: "#4C8279",
              borderRadius: "4px",
              display: "grid",
              placeItems: "center",
            }}
          >
            <Image src={icon} alt={path} width={16} height={16} />
          </Box>
        </Link>
      );
    })}
  </Box>
);

export default SocialMediaSmall;
