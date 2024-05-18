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
          ):+963 945 534 629
        </Typography>
        <Typography>
          Call (
          <Box component={"span"} color="#4C8279">
            Erbil
          </Box>
          ): +964 751 015 2366
        </Typography>
        <Typography>
          Call (
          <Box component={"span"} color="#4C8279">
            Malaysia
          </Box>
          ): +60 14-537 4930
        </Typography>
      </Box>
    </Box>
  );
};

export default CallUs;
