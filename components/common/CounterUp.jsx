"use client";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
const CounterUp = ({ image, title, start, end, timer = 50 }) => {
  const [state, setstate] = useState(null);
  const ref = useRef(start);
  const accumulator = end / 200;
  const updateCounterState = () => {
    if (ref.current < end) {
      const result = Math.ceil(ref.current + accumulator);
      if (result > end) return setstate(end);
      setstate(result);
      ref.current = result;
    }
    setTimeout(updateCounterState, timer);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      updateCounterState();
    }
    return () => (isMounted = false);
  }, [end, start]);
  return (
    <Box
      sx={{
        width: "100px",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#ECECEC",
        borderRadius: "4px",
      }}
    >
      <Typography
        sx={{ fontSize: { xs: "12px", sm: "14px" }, fontWeight: 500, color: "#000", py: 1 }}
      >
        {title}
      </Typography>
      <Button sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Typography sx={{ color: "#FFF", fontWeight: 500 }}>{state}</Typography>
        {title === "Countries" ? (
          <Image src={image} alt="couter icon" width={14} height={24} />
        ) : (
          <Image src={image} alt="couter icon" width={24} height={18} />
        )}
      </Button>
    </Box>
  );
};
export default CounterUp;
