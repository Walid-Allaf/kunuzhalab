import {
  ABOUTUS,
  ABOUTUSACTIVE,
  CALLUS,
  CALLUSACTIVE,
  CALLUSFACEBOOK,
  CALLUSINSTAGRAM,
  CALLUSTELEGRAM,
  CALLUSTIKTOK,
  CALLUSYOUTUBE,
  FACEBOOK,
  HOME,
  HOMEACTIVE,
  INSTAGRAM,
  OURPRODUCTS,
  OURPRODUCTSACTIVE,
  TELEGRAM,
  TIKTOK,
  YOUTUBE,
} from "@/assets";

export const NavItems = [
  {
    title: "Home",
    icon: HOME,
    active: HOMEACTIVE,
    path: "/",
  },
  {
    title: "Our products",
    icon: OURPRODUCTS,
    active: OURPRODUCTSACTIVE,
    path: "/our-products",
  },
  {
    title: "About us",
    icon: ABOUTUS,
    active: ABOUTUSACTIVE,
    path: "/about-us",
  },
  {
    title: "Call us",
    icon: CALLUS,
    active: CALLUSACTIVE,
    path: "/call-us",
  },
];
export const SocialItems = [
  { icon: FACEBOOK, path: "/" },
  { icon: INSTAGRAM, path: "/" },
  { icon: TELEGRAM, path: "/" },
  { icon: TIKTOK, path: "/" },
  { icon: YOUTUBE, path: "/" },
];
export const SocialItemsCallUs = [
  { icon: CALLUSTELEGRAM, width: 51, height: 51, path: "/" },
  { icon: CALLUSINSTAGRAM, width: 64, height: 64, path: "/" },
  { icon: CALLUSYOUTUBE, width: 56, height: 56, path: "/" },
  { icon: CALLUSFACEBOOK, width: 56, height: 56, path: "/" },
  { icon: CALLUSTIKTOK, width: 44, height: 50, path: "/" },
];
export const Countries = [
  "Iraq",
  "Saudi Arabia",
  "Malaysia",
  "Emirates",
  "China",
  "Europe",
  "Kuwait",
  "Lebanon",
];
