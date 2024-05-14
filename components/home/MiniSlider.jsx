"use client";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CLIENT, COUNTRIES, QUANTITY } from "@/assets";
import { useEffect, useRef, useState } from "react";
import { CounterUp } from "..";

export default function MiniSlider({ data }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // When the section comes into view
      if (entry.isIntersecting) {
        setIsVisible(true);
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
    <Box sx={{ textAlign: "center", width: { xs: "80%", sm: "27%" } }}>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={5}
      >
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
                      src={`data:image/jpeg;base64,${item.image1}`}
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
      <Box
        ref={sectionRef}
        className="nums"
        sx={{ display: "flex", justifyContent: "space-between", gap: 0.5 }}
      >
        {isVisible && (
          <>
            <CounterUp image={QUANTITY} title="Quantity" start={0} end={2000} timer={10} />
            <CounterUp image={CLIENT} title="Client" start={0} end={40} timer={50} />
            <CounterUp image={COUNTRIES} title="Countries" start={0} end={6} timer={100} />
          </>
        )}
      </Box>
    </Box>
  );
}
