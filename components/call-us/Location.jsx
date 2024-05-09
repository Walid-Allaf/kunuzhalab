"use client";
import { MAP, MARKER } from "@/assets";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Location = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Typography sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: 700, mb: 4 }}>
        Local Information
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 5 }}>
        <Box
          sx={{
            maxWidth: { xs: "400px", sm: "788px", md: "1000px" },
            maxHeight: { xs: "150px", sm: "308px", md: "500px" },
            flexGrow: 1,
            img: { width: "100%", height: "100%" },
            // "& .leaflet-container": { width: "100%", height: "100%" },
          }}
        >
          <Image src={MAP} alt="map" />
          {/* <MapContainer center={[36.1853, 37.1355]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.{ext}"
              ext="png"
            />
            <Marker position={[36.1853, 37.1355]}>
              <Popup>
                <Typography sx={{ textAlign: "center" }}>
                  Kounoz Halab <br /> Organic aleppo soap
                </Typography>
              </Popup>
            </Marker>
          </MapContainer> */}
        </Box>
        <Box sx={{ "& p": { mb: 2 }, flexGrow: 1 }}>
          <Typography sx={{ fontSize: { xs: "20px", md: "32px" }, fontWeight: 700 }}>
            The Address
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "16px", md: "24px" }, color: "#1B4E7A", img: { mr: 2 } }}
          >
            <Image src={MARKER} alt="marker" width={18} height={22} />
            Syria , Aleppo
          </Typography>
          <Typography sx={{ fontSize: { xs: "16px", md: "24px" }, color: "#1B4E7A" }}>
            The laboratory
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Location;
