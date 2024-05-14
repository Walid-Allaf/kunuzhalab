import { Inter } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kunuz Halab",
  description:
    "Made from the finest natural materials, including olive oil and laurel oil, using ancient traditional methods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
