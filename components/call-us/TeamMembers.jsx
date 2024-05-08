"use client";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CALLUS } from "@/assets";
import { useEffect, useState } from "react";

export default function TeamMembers({ data }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      // console.log(window.innerHeight, window.innerWidth);
      setWidth(window.innerWidth);
    });
  }, [width]);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Swiper
        slidesPerView={width <= 600 ? 1 : width <= 1000 ? 2 : width <= 2000 ? 3 : 4}
        spaceBetween={10}
      >
        {data.length > 0
          ? data.map((item) => (
              <SwiperSlide key={item.teamMemberId}>
                <Stack
                  sx={{
                    maxWidth: "380px",
                    maxHeight: "370px",
                    border: "10px solid #00968833",
                    borderRadius: "10px",
                    p: 2,
                  }}
                >
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "100%",
                        borderRadius: "10px",
                        objectFit: "cover",
                      },
                    }}
                  >
                    <Image
                      src={`data:image/jpeg;base64,${item.image1}`}
                      alt={item.firstName}
                      width={0}
                      height={0}
                    />
                  </Box>
                </Stack>
                <Typography
                  sx={{
                    textAlign: "start",
                    color: "#009688",
                    fontSize: { xs: "24px", md: "48px" },
                    fontWeight: 700,
                    mt: 2,
                  }}
                >
                  {item.firstName} {item.lastName}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    maxWidth: "100%",
                  }}
                >
                  <Box
                    sx={{
                      px: "20px",
                      py: "6px",
                      borderRadius: "4px",
                      background: "#F1F8F6",
                      display: "grid",
                      placeItems: "center",
                      cursor: "pointer",
                    }}
                  >
                    <Image src={CALLUS} alt="phone" width={24} height={24} />
                  </Box>
                  <Typography sx={{ color: "#162625", fontWeight: 500 }}>{item.phone}</Typography>
                </Box>
              </SwiperSlide>
            ))
          : "no data"}
      </Swiper>
    </Box>
  );
}
