import { LOGO } from "@/assets";
import { NavItems } from "@/constants";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = (props) => {
  const { onClose } = props;
  const pathname = usePathname();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "flex-start", sm: "center" },
        mt: { xs: 3, sm: 0 },
        gap: 3,
      }}
    >
      <Box component={Link} href={"/"} sx={{ width: "100%", display: { xs: "block", sm: "none" } }}>
        <Image src={LOGO} alt="logo" width={90} height={50} />
        <Divider sx={{ mt: 1 }} />
      </Box>
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
              onClick={onClose}
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
  );
};

export default Links;
