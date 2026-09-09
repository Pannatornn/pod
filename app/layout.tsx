import type { Metadata, Viewport } from "next";
import { Noto_Sans_Thai, Poppins } from "next/font/google";
import "./globals.css";

const thai = Noto_Sans_Thai({ subsets: ["thai", "latin"], weight: ["400", "500", "600", "700"], variable: "--font-thai", display: "swap" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-poppins", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pod-ptum.onrender.com"),
  title: "ปัณณธร ทองรักษ์ | Robotics, Code & Engineering",
  description: "รู้จักปัน — Pannatorn Thongrak ผ่านโปรเจกต์หุ่นยนต์พลังงานแสงอาทิตย์ การเขียนโปรแกรม ประสบการณ์ค่ายวิศวกรรม และเกียรติบัตร",
  authors: [{ name: "Pannatorn Thongrak" }],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  openGraph: { type: "website", locale: "th_TH", url: "/", title: "ปัณณธร ทองรักษ์", description: "จากความสงสัย สู่การลงมือสร้าง — Robotics, Programming & Engineering", siteName: "Pannatorn" },
  twitter: { card: "summary", title: "Pannatorn Thongrak", description: "Robotics, Programming & Engineering" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body className={`${thai.variable} ${poppins.variable}`}>{children}</body></html>;
}
