import { Box, Typography } from "@mui/material";

const CallUs = () => {
  return (
    <Box>
      <Typography sx={{ mb: 3, fontSize: "20px", fontWeight: 700 }}>CALL US</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
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
    </Box>
  );
};

export default CallUs;
