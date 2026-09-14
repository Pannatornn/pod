import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai, Poppins } from "next/font/google";
import "./globals.css";
import "./portfolio-fix.css";

const thai = Noto_Sans_Thai({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-thai", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ปัณณธร ทองรักษ์ | Robotics Engineer Portfolio",
  description: "Pannatorn Thongrak Portfolio — Robotics, AI, Embedded System, Programming และ Engineering Projects",
  keywords: ["Robotics", "AI", "Python", "ESP32", "Engineering", "Portfolio"],
  authors: [{ name: "Pannatorn Thongrak" }],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: {
    type: "website",
    locale: "th_TH",
    url: "/",
    title: "Pannatorn Thongrak | Robotics Engineering",
    description: "Robotics, AI and Engineering Portfolio",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07090d",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body className={`${thai.variable} ${poppins.variable}`}>{children}</body></html>;
}
