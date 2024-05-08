import { OURSTORY } from "@/assets";
import { HeroTitle } from "@/components";
import { Box } from "@mui/material";
import React from "react";

const page = () => {
  return (
    <Box
      px={{
        xs: "25px",
        md: "100px",
      }}
    >
      <Box sx={{ my: 10 }}>
        <HeroTitle title="OUR STORY" image={OURSTORY} />
      </Box>
    </Box>
  );
};

export default page;
