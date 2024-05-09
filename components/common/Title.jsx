import { LEFTTITLE, RIGHTTITLE } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

const Title = ({ value }) => {
  return (
    <Box sx={{ position: "relative", width: "100%", mb: { xs: 5, md: 10 } }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "50vw",
          width: "160px",
          height: "130px",
          zIndex: -1,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image src={LEFTTITLE} alt="left title" layout="fill" />
      </Box>
      <Typography
        sx={{ fontSize: { xs: "20px", md: "48px" }, fontWeight: 700, textAlign: "center" }}
      >
        {value}
      </Typography>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50vw",
          width: "160px",
          height: "130px",
          zIndex: -1,
          display: { xs: "none", md: "block" },
        }}
      >
        <Image src={RIGHTTITLE} alt="right title" layout="fill" />
      </Box>
    </Box>
  );
};

export default Title;
