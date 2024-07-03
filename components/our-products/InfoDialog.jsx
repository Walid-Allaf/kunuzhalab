"use client";
import { CLOSESQUARE, CONTACT } from "@/assets";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const InfoDialog = ({ soap }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        onClick={handleClickOpen}
        sx={{
          fontSize: { xs: "8px", md: "14px" },
          color: "#162625",
          bgcolor: soap.color,
          ":hover": { bgcolor: soap.color + "cc" },
          flexGrow: 1,
        }}
      >
        More Details
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "#FFF",
            p: 0,
            zIndex: 2,
            ":hover": {
              background: "#FFF",
            },
          }}
        >
          <Image src={CLOSESQUARE} alt="CLOSE SQUARE" width={30} height={30} />
        </IconButton>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1, sm: 4 },
            bgcolor: "#EBF1F080",
            m: { xs: 0, sm: 3 },
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              position: "relative",
              background: "#F2F2F2",
              borderRadius: "10px",
              overflow: "hidden",
              minWidth: { xs: "200px", sm: "200px", md: "400px", lg: "400px" },
              aspectRatio: { xs: "1 / 1.1", sm: "1 / 1" },
            }}
          >
            <Image src={`data:image/jpeg;base64,${soap.image1}`} alt="soap image" layout="fill" />
          </Box>
          <Box>
            <DialogTitle
              sx={{ px: 0, pl: 2, fontSize: { xs: "24px", md: "40px" }, fontWeight: 700 }}
            >
              {soap.name}
            </DialogTitle>
            <DialogContentText sx={{ fontSize: { xs: "18px", md: "24px", lg: "32px" }, pl: 2 }}>
              {soap.description}
            </DialogContentText>
            {soap.oliveOil !== "0" ||
              (soap.laurelOil != "0" && (
                <Typography sx={{ fontSize: { xs: "16px", md: "24px" }, fontWeight: 700, mt: 3 }}>
                  Percentage
                </Typography>
              ))}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt: 1,
                mb: 3,
              }}
            >
              {soap.oliveOil != "0" && (
                <Typography sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                  %{soap.oliveOil} Olive Oil
                </Typography>
              )}
              {soap.laurelOil != "0" && (
                <Typography sx={{ fontSize: { xs: "16px", md: "24px" } }}>
                  %{soap.laurelOil} Laurel Oil
                </Typography>
              )}
            </Box>
            <DialogActions sx={{ display: "flex", gap: 2, p: 0 }}>
              <Button
                sx={{
                  bgcolor: "#35C536",
                  ":hover": { bgcolor: "#35C536aa" },
                  a: { display: "flex", alignItems: "center", gap: 1 },
                  color: "#FFF",
                  px: 4,
                  flexGrow: 1,
                }}
                // onClick={handleClose}
              >
                <Link href={`https://wa.me/963945534629?text=${soap.name}`}>
                  <Image src={CONTACT} alt="contact" width={23} height={23} />
                  <Box component={"span"}>Contact</Box>
                </Link>
              </Button>
              {soap.soapAge != "0" && (
                <Box
                  sx={{
                    bgcolor: "#EBF1F0",
                    p: 0.9,
                    borderRadius: "4px",
                    fontWeight: 700,
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  Soap age: {soap.soapAge} years
                </Box>
              )}
            </DialogActions>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default InfoDialog;
