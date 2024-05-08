import { Communication, HeroTitle, Location, SectionTitle, TeamMembers } from "@/components";
import { Box, Typography } from "@mui/material";

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
        <Typography>
          Call (
          <Box component={"span"} color="#4C8279">
            Aleppo
          </Box>
          ): (405) 555-0128
        </Typography>
        <Typography>
          Call (
          <Box component={"span"} color="#4C8279">
            Iraq
          </Box>
          ): (405) 555-0128
        </Typography>
        <Typography>
          Call (
          <Box component={"span"} color="#4C8279">
            Malaysia
          </Box>
          ): (405) 555-0128
        </Typography>
      </Box>
      <Typography sx={{ mt: 6, textAlign: "center", fontSize: { xs: "16px", md: "32px" } }}>
        Email: goldenAleppo@soap.com
      </Typography>
      <SectionTitle value="OUR TEAM" />
      <TeamMembers data={teamMembers} />
      <Location />
      <Communication />
    </Box>
  );
};

export default page;
