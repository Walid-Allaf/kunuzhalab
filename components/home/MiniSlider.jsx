"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CLIENT, COUNTRIES, MNIISLIDER, QUANTITY } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { CounterUp } from "..";

const data = [MNIISLIDER, MNIISLIDER, MNIISLIDER, MNIISLIDER, MNIISLIDER];

export default function MiniSlider() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // When the section comes into view
      if (entry.isIntersecting) {
        setIsVisible(true);
        console.log("Section is now visible");
      } else {
        setIsVisible(false);
      }
    });

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup: stop observing when component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <Box sx={{ textAlign: "center", width: { xs: "100%", sm: "27%" } }}>
      <Swiper slidesPerView={1} spaceBetween={5}>
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
                    <Image src={item} alt="slider-img" width={0} height={0} />
                  </Box>
                </Stack>
              </SwiperSlide>
            ))
          : "no images"}
      </Swiper>
      <Box
        ref={sectionRef}
        className="nums"
        sx={{ display: "flex", justifyContent: "space-between", gap: 0.5 }}
      >
        {isVisible && (
          <>
            <CounterUp image={QUANTITY} title="Quantity" start={0} end={2000} timer={50} />
            <CounterUp image={CLIENT} title="Client" start={0} end={40} timer={300} />
            <CounterUp image={COUNTRIES} title="Countries" start={0} end={6} timer={3000} />
          </>
        )}
      </Box>
    </Box>
  );
}
