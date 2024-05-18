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
          Office (
          <Box component={"span"} color="#4C8279">
            Aleppo
          </Box>
          ): +963 945 534 629
        </Typography>
        <Typography>
          Office (
          <Box component={"span"} color="#4C8279">
            Erbil
          </Box>
          ): +964 751 015 2366
        </Typography>
        <Typography>
          Office (
          <Box component={"span"} color="#4C8279">
            Malaysia
          </Box>
          ): +60 14-537 4930
        </Typography>
      </Box>
      <Typography sx={{ mt: 6, textAlign: "center", fontSize: { xs: "16px", md: "32px" } }}>
        Email: info@kunuzhalab.com
      </Typography>
      {/* <SectionTitle value="OUR TEAM" /> */}
      {/* <TeamMembers data={teamMembers} /> */}
      {/* <Location /> */}
      <Communication />
    </Box>
  );
};

export default page;
