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
  { icon: FACEBOOK, path: "https://www.facebook.com/kunuzhalab" },
  { icon: INSTAGRAM, path: "https://www.instagram.com/kunuzhalab?igsh=OXpnNzRieWZhejI3" },
  { icon: TELEGRAM, path: "https://t.me/kunuzhalab" },
  { icon: TIKTOK, path: "https://tiktok.com/@kunuzhalab" },
  { icon: YOUTUBE, path: "https://www.youtube.com/@kunuzHallab" },
];
export const SocialItemsCallUs = [
  { icon: CALLUSTELEGRAM, width: 51, height: 51, path: "https://t.me/kunuzhalab" },
  {
    icon: CALLUSINSTAGRAM,
    width: 64,
    height: 64,
    path: "https://www.instagram.com/kunuzhalab?igsh=OXpnNzRieWZhejI3",
  },
  { icon: CALLUSYOUTUBE, width: 56, height: 56, path: "https://www.youtube.com/@kunuzHallab" },
  { icon: CALLUSFACEBOOK, width: 56, height: 56, path: "https://www.facebook.com/kunuzhalab" },
  { icon: CALLUSTIKTOK, width: 44, height: 50, path: "https://tiktok.com/@kunuzhalab" },
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
