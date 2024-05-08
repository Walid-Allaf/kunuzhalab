import { WHATSAPPLOGO } from "@/assets";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Whatsapp = () => {
  return (
    <Box sx={{ pl: 3, pb: 1, position: "fixed", left: "10px", bottom: "10px", zIndex: 10 }}>
      <Link href={"https://wa.me/963947769501?text=Hello from Golden Aleppo Soap"}>
        <Image src={WHATSAPPLOGO} alt="whatsapp" width={60} height={60} />
      </Link>
    </Box>
  );
};

export default Whatsapp;
