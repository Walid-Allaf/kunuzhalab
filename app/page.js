import Image from "next/image";
import { Box } from "@mui/material";
import { Landing, World } from "@/components";
import { FROMTO } from "@/assets";

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Landing />
      <Box px={{ xs: "15px", md: "100px" }} width="100%">
        <Box sx={{ "& img": { width: "100%", height: { xs: "280px", sm: "850px" } } }}>
          <Image src={FROMTO} alt="from-alepoo-to-kuala-lumpur" />
        </Box>
        <World />
      </Box>
    </Box>
  );
}
