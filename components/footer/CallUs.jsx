import { MobileNumbers } from "@/constants";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const CallUs = () => {
  return (
    <Box>
      <Typography sx={{ mb: 3, fontSize: "20px", fontWeight: 700 }}>CALL US</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
        {MobileNumbers.map((mobileNumber) => (
          <Typography key={mobileNumber.country}>
            Call (
            <Box component={"span"} color="#4C8279">
              {mobileNumber.country}
            </Box>
            ): <Link href={`tel:${mobileNumber.number}`}>{mobileNumber.number}</Link>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default CallUs;
