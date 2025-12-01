import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-sans-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "นับถอยหลังปีใหม่ 2026 | New Year Countdown",
  description: "นับถอยหลังสู่ปีใหม่ 2026 พร้อมเอฟเฟกต์สวยงามและอนิเมชั่นดอกไม้ไฟ",
  keywords: ["ปีใหม่", "นับถอยหลัง", "New Year", "Countdown", "2026"],
  openGraph: {
    title: "นับถอยหลังปีใหม่ 2026",
    description: "นับถอยหลังสู่ปีใหม่ 2026 พร้อมเอฟเฟกต์สวยงาม",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoSansThai.variable} antialiased`}
        style={{ fontFamily: "var(--font-noto-sans-thai), var(--font-geist-sans), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
