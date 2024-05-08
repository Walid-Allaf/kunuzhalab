import { FRAGRANT, HEROTITLEBG, LAUUREL, OLIVE, SOAP, WHATSAPPCARD } from "@/assets";
import { HeroTitle } from "@/components";
import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

async function getCategories() {
  const res = await fetch(`${process.env.BASE_URL}/Categories/GetAll`, {
    // cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getSoaps(id) {
  const res = await fetch(`${process.env.BASE_URL}/Categories/WithSoaps/${id}`, {
    // cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async ({ params }) => {
  const categories = await getCategories();
  const soaps = await getSoaps(params.category);
  console.log(soaps);
  const imageStyle = {
    width: { xs: 14, md: 24 },
    height: { xs: 14, md: 24 },
  };
  return (
    <Box px={{ xs: "25px", md: "100px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", mt: 4 }}>
        {categories.map((category) => (
          <Link href={`/our-products/${category.categoryId}`} key={category.categoryId}>
            <Tab
              sx={{
                bgcolor: params.category == category.categoryId ? "#EBF1F080" : "#FFF",
                color: params.category == category.categoryId ? "primary.main" : "#596063B2",
                fontWeight: 700,
                fontSize: { xs: "6px", md: "16px" },
                minHeight: "20px",
              }}
              label={category.categoryName}
            />
          </Link>
        ))}
      </Box>
      <HeroTitle
        title={soaps.categoryName}
        image={soaps.categoryName.includes("Fragrant") ? FRAGRANT : LAUUREL}
      />
      <Grid container spacing={2} className="special-colors" sx={{ mt: 8 }}>
        {soaps.soaps.map((soap, index) => (
          <Grid item xs={6} sm={4} key={index}>
            <Box
              sx={{
                background: "#F2F2F2",
                display: "grid",
                placeItems: "center",
                borderRadius: "10px",
                position: "relative",
                // width: { md: "100%", xs: "150px" },
                width: "100%",
                minHeight: { xs: "140px", sm: "250", md: "290px" },
              }}
            >
              <Image
                // src={`data:image/jpeg;base64,${soap.image1}`}
                src={SOAP}
                alt="soap image"
                layout="fill"
                // objectFit="cover"
              />
            </Box>
            <Typography sx={{ fontSize: { xs: "16px", md: "40px" }, fontWeight: 700 }}>
              {soap.name}
            </Typography>
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
            <Typography sx={{ fontSize: { xs: "6px", md: "14px" } }}>Percentage</Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 1 }}
            >
              <Typography sx={{ fontSize: { xs: "6px", md: "14px" } }}>
                %{soap.oliveOil} Olive Oil
              </Typography>
              <Typography sx={{ fontSize: { xs: "6px", md: "14px" } }}>
                %{soap.laurelOil} Laurel Oil
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: 1,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Button>
                <Box
                  sx={{
                    position: "relative",
                    width: { md: "24px", xs: "14px" },
                    height: { md: "24px", xs: "14px" },
                  }}
                >
                  <Image src={WHATSAPPCARD} alt="WHATSAPP CARD" layout="fill" objectFit="cover" />
                </Box>
              </Button>
              <Button sx={{ fontSize: { xs: "8px", md: "14px" }, color: "#162625", flexGrow: 1 }}>
                More Details
              </Button>
            </Box>
          </Grid>
        ))}
        <Grid
          item
          xs={6}
          sm={4}
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: "140px", sm: "250", md: "290px" },
          }}
        >
          <Image src={OLIVE} alt="olive" layout="fill" objectFit="contain" />
        </Grid>
      </Grid>

      {/* <Image
        src={HEROTITLEBG}
        alt="hero image"
        height={271}
        style={{ margin: "100px 0", marginLeft: "auto", marginRight: "auto" }}
      /> */}
      <Box
        className="background"
        sx={{ width: "100%", height: { xs: "60px", sm: "150px", md: "271px" }, my: 5 }}
      ></Box>
    </Box>
  );
};

export default page;
