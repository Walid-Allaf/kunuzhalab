import { Typography } from "@mui/material";

const Title = ({ value }) => {
  return <Typography sx={{ fontSize: "48px", fontWeight: 700 }}>{value}</Typography>;
};

export default Title;
