"use client";
import { Box, Button, Typography } from "@mui/material";
import { useState, useRef, useEffect } from "react";
const CounterUp = ({ title, start, end, timer = 50 }) => {
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
      <Button className="num" data-goal="100" sx={{ color: "#FFF", fontWeight: 500 }}>
        {state}
      </Button>
    </Box>
  );
};
export default CounterUp;
