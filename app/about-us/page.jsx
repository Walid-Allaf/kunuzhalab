import { OURSTORY } from "@/assets";
import { HeroTitle } from "@/components";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

async function getStories() {
  const res = await fetch(`${process.env.BASE_URL}/Stories/GetAll`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const stories = await getStories();
  console.log("stories", stories);
  return (
    <Box
      px={{
        xs: "25px",
        md: "100px",
      }}
    >
      <Box sx={{ my: 10 }}>
        <HeroTitle title="OUR STORY" image={OURSTORY} />

        <Grid spacing={5} sx={{ my: 8 }} container>
          {stories.map((item, i) => {
            const { title, description, image1 } = item;
            return (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 5,
                  flexDirection: { xs: "column", sm: i % 2 == 0 ? "row" : "row-reverse" },
                }}
                key={title}
              >
                <Box sx={{ width: { xs: "100%", sm: "55%" } }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "24px", md: "48px" },
                      fontWeight: 700,
                      mb: { xs: 2, sm: 4 },
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "16px", md: "32px" }, lineHeight: 1.8 }}>
                    {description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    background: "#F2F2F2",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                    width: { xs: "100%", sm: "45%" },
                    minHeight: { xs: "250px", sm: "250", md: "250px", lg: "400px" },
                  }}
                >
                  <Image
                    src={`data:image/jpeg;base64,${image1}`}
                    alt="about us image"
                    layout="fill"
                  />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default page;
