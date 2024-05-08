"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Typography } from "@mui/material";
import { LOGO } from "@/assets";
import { NavItems } from "@/constants";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <>
      <Box
        px={{
          xs: "25px",
          md: "100px",
        }}
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Box
          component={Link}
          href={"/"}
          sx={{
            "& img": {
              width: {
                xs: "82px",
                md: "169px",
              },
              height: {
                xs: "50px",
                md: "102px",
              },
            },
          }}
        >
          <Image src={LOGO} alt="logo" />
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 3 }}>
          {NavItems.map((item, index) => {
            const { title, icon, active, path } = item;
            return (
              <Link href={path} key={index}>
                <Box
                  sx={{
                    px: 1,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Image
                    src={pathname.split("/")[1] === path.split("/")[1] ? active : icon}
                    alt={title}
                    width={20}
                    height={20}
                  />
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: 500,
                      color: pathname.split("/")[1] === path.split("/")[1] ? "#F2B155" : "",
                    }}
                  >
                    {title}
                  </Typography>
                  <Box
                    sx={{
                      width: "100%",
                      height: "3px",
                      bgcolor:
                        pathname.split("/")[1] === path.split("/")[1] ? "#F2B155" : "transparent",
                      borderRadius: "5px",
                      position: "absolute",
                      bottom: "-10px",
                      left: 0,
                    }}
                  ></Box>
                </Box>
              </Link>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ width: "100%", height: "2px", bgcolor: "primary.main", opacity: "10%" }}></Box>
    </>
  );
};

export default Nav;
