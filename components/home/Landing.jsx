import { LANDINGLEFT, LANDINGRIGHT } from "@/assets";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <Box
      className="landing-background"
      sx={{
        width: "100%",
        minHeight: { xs: "350px", md: "634px" },
        display: "grid",
        placeItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: { xs: "-40px", md: "-100px" },
          "& img": { width: { xs: "186px", md: "530px" }, height: { xs: "266px", md: "760px" } },
        }}
      >
        <Image src={LANDINGLEFT} alt="landing left" width={0} height={0} />
      </Box>

      <Box
        sx={{
          height: { xs: "182px", sm: "264px" },
          maxWidth: { xs: "283px", sm: "860px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: { textAlign: "center" },
          mx: "auto",
          position: "relative",
          zIndex: 10,
        }}
      >
        <Typography sx={{ fontSize: { xs: "20px", sm: "48px" }, fontWeight: 700 }}>
          Kunuz Halab
        </Typography>
        <Typography sx={{ fontSize: { xs: "20px", sm: "48px" }, fontWeight: 700 }}>
          Organic Aleppo soap
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", sm: "32px" } }}>
          Made from the finest natural materials, including olive oil and laurel oil, using ancient
          traditional methods
        </Typography>
        <Button variant="contained" sx={{ alignSelf: "center" }}>
          <Link href={"/our-products"}>Our products</Link>
        </Button>
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: { xs: "-60px", md: "-150px" },
          "& img": { width: { xs: "170px", md: "485px" }, height: { xs: "266px", md: "760px" } },
        }}
      >
        <Image src={LANDINGRIGHT} alt="landing right" width={0} height={0} />
      </Box>
    </Box>
  );
};

export default Landing;
