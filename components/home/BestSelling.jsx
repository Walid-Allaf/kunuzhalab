"use client";
import { Box, Grid, Typography, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { InfoDialog, Title } from "..";
import { WHATSAPPCARD } from "@/assets";

const BestSelling = ({ data }) => {
  return (
    <Box sx={{ my: 5, mx: { xs: "auto", sm: 0 }, width: { xs: "80%", sm: "100%" } }}>
      <Title value={"Best selling products"} />
      <Swiper
        loop
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          639: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {data.length > 0
          ? data.map((soap) => (
              <SwiperSlide key={soap.soapId}>
                <Box
                  sx={{
                    background: "#F2F2F2",
                    display: "grid",
                    placeItems: "center",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    minHeight: { xs: "250px", sm: "150px", lg: "350px" },
                  }}
                >
                  <Image
                    src={`data:image/jpeg;base64,${soap.image1}`}
                    alt="soap image"
                    layout="fill"
                  />
                </Box>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "40px" },
                    fontWeight: 700,
                    color: soap.color + "",
                  }}
                >
                  {soap.name}
                </Typography>
                {/* {soap.soapAge != 0 && (
                  <Typography
                    sx={{
                      fontSize: { xs: "6px", md: "14px" },
                      fontWeight: 700,
                      color: "#FFD401",
                      textAlign: "end",
                    }}
                  >
                    Soap Age: {soap.soapAge} Years
                  </Typography>
                )} */}
                {/* <Typography sx={{ fontSize: { xs: "6px", md: "14px" } }}>Percentage</Typography> */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    my: soap.laurelOil == 0 ? 3.2 : 2,
                  }}
                >
                  {soap.oliveOil != 0 && (
                    <Typography sx={{ fontSize: { xs: "6px", md: "14px" } }}>
                      %{soap.oliveOil} Olive Oil
                    </Typography>
                  )}
                  {soap.laurelOil != 0 && (
                    <Typography sx={{ fontSize: { xs: "6px", md: "14px" } }}>
                      %{soap.laurelOil} Laurel Oil
                    </Typography>
                  )}
                  {soap.soapAge != 0 && (
                    <Typography
                      sx={{
                        fontSize: { xs: "6px", md: "14px" },
                        fontWeight: 700,
                        color: "#FFD401",
                        textAlign: "end",
                      }}
                    >
                      Soap Age: {soap.soapAge} Years
                    </Typography>
                  )}
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button sx={{ bgcolor: soap.color, ":hover": { bgcolor: soap.color + "cc" } }}>
                    <Link href={`https://wa.me/963945534629?text=${soap.name}`}>
                      <Box
                        sx={{
                          position: "relative",
                          width: { md: "24px", xs: "14px" },
                          height: { md: "24px", xs: "14px" },
                        }}
                      >
                        <Image
                          src={WHATSAPPCARD}
                          alt="WHATSAPP CARD"
                          layout="fill"
                          objectFit="cover"
                        />
                      </Box>
                    </Link>
                  </Button>
                  <InfoDialog soap={soap} />
                </Box>
              </SwiperSlide>
            ))
          : "no data"}
      </Swiper>
    </Box>
  );
};

export default BestSelling;
