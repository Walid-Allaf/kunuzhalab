"use client";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/themes";
import { usePathname } from "next/navigation";
import { Footer, Nav, Whatsapp } from "..";

const Layout = ({ children }) => {
  const path = usePathname();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Nav />

      {children}

      <Whatsapp />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
