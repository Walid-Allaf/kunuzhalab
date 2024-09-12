import Image from "next/image";
import { Box } from "@mui/material";
import { BestSelling, Landing, World } from "@/components";
import { FROMTO } from "@/assets";

async function getBestSelling() {
  const res = await fetch(`${process.env.BASE_URL}/Soaps/GetAllMostWanted`, {
    cache: "force-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Landing />
      <Box px={{ xs: "15px", md: "100px" }} width="100%">
        <Box sx={{ "& img": { width: "100%", height: { xs: "280px", sm: "850px" } } }}>
          <Image src={FROMTO} alt="from-alepoo-to-kuala-lumpur" />
        </Box>
        <World />
        <BestSelling data={await getBestSelling()} />
      </Box>
    </Box>
  );
}
