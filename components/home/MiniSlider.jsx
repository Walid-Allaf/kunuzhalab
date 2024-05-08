"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CALLUS, MNIISLIDER } from "@/assets";
import { useEffect, useState } from "react";

const data = [MNIISLIDER, MNIISLIDER, MNIISLIDER, MNIISLIDER, MNIISLIDER];

export default function MiniSlider() {
  let nums = document.querySelectorAll(".nums .num");
  let section = document.querySelector(".three");
  let started = false;
  window.onscroll = function () {
    if (window.scrollY >= section.offsetTop) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };

  function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  return (
    <Box sx={{ textAlign: "center", width: { xs: "100%", sm: "25%" } }} className="three">
      <Swiper slidesPerView={1} spaceBetween={10}>
        {data.length > 0
          ? data.map((item, index) => (
              <SwiperSlide key={index}>
                <Stack>
                  <Box
                    sx={{
                      "& img": {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      },
                    }}
                  >
                    <Image
                      // src={`data:image/jpeg;base64,${item.image1}`}
                      src={item}
                      alt="slider-img"
                      width={0}
                      height={0}
                    />
                  </Box>
                </Stack>
              </SwiperSlide>
            ))
          : "no images"}
      </Swiper>
      <Box className="nums" sx={{ display: "flex", justifyContent: "space-between", gap: 0.5 }}>
        <Box
          sx={{
            width: "100px",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ECECEC",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500, color: "#000", py: 1 }}
          >
            Quantity
          </Typography>
          <Button className="num" data-goal="100" sx={{ color: "#FFF", fontWeight: 500 }}>
            0
          </Button>
        </Box>
        <Box
          sx={{
            width: "100px",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ECECEC",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500, color: "#000", py: 1 }}
          >
            Client
          </Typography>
          <Button className="num" data-goal="40" sx={{ color: "#FFF", fontWeight: 500 }}>
            0
          </Button>
        </Box>
        <Box
          sx={{
            width: "100px",
            display: "flex",
            flexDirection: "column",
            bgcolor: "#ECECEC",
            borderRadius: "4px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500, color: "#000", py: 1 }}
          >
            Countries
          </Typography>
          <Button className="num" data-goal="6" sx={{ color: "#FFF", fontWeight: 500 }}>
            0
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
