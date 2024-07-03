import { Communication, HeroTitle, Location, SectionTitle, TeamMembers } from "@/components";
import { EmailAddress, MobileNumbers } from "@/constants";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

async function getTeamMembers() {
  const res = await fetch(`${process.env.BASE_URL}/TeamMembers/GetAll`, {
    cache: "no-cache",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const page = async () => {
  const teamMembers = await getTeamMembers();
  return (
    <Box
      px={{
        xs: "25px",
        md: "100px",
      }}
    >
      <Box sx={{ my: { xs: 5, md: 10 } }}>
        <HeroTitle title="CONTACT US" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          "& p": { fontSize: { xs: "16px", md: "24px" }, fontWeight: 500 },
        }}
      >
        {MobileNumbers.map((mobileNumber) => (
          <Typography key={mobileNumber.country}>
            Office (
            <Box component={"span"} color="#4C8279">
              {mobileNumber.country}
            </Box>
            ): <Link href={`tel:${mobileNumber.number}`}>{mobileNumber.number}</Link>
          </Typography>
        ))}
      </Box>
      <Typography sx={{ mt: 6, textAlign: "center", fontSize: { xs: "16px", md: "32px" } }}>
        Email: <Link href={`mailto:${EmailAddress}`}>{EmailAddress}</Link>
      </Typography>
      <Communication />
    </Box>
  );
};

export default page;
