import { WHATSAPPLOGO } from "@/assets";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whatsapp = () => {
  return (
    <Box
      sx={{
        pl: 3,
        pb: 1,
        position: "fixed",
        left: "10px",
        bottom: "10px",
        zIndex: 10,
        "& img": { width: { xs: 70, sm: 92 }, height: { xs: 70, sm: 92 } },
      }}
    >
      <Link href={"https://wa.me/963945534629?text=Hello from Kounoz Halab"}>
        <Image src={WHATSAPPLOGO} alt="whatsapp" position="relative" />
      </Link>
    </Box>
  );
};

export default Whatsapp;
