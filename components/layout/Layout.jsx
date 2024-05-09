"use client";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes";
import { usePathname } from "next/navigation";
import { Footer, Nav, Whatsapp } from "..";
import NextTopLoader from "nextjs-toploader";

const Layout = ({ children }) => {
  const path = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: 4 }}>
        <NextTopLoader color="#004D40" showSpinner={false} />
      </Box>
      <Nav />

      {children}

      <Whatsapp />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
