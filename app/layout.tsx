import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavButton from "@/components/nav-button";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CO-IMPACT Registry | PSMA PET & Radiotherapy",
  description: "Consortium for Implementation of PSMA-PET in Prostate Cancer therapy Trials",
  icons: {
    icon: "/images/coimpact.png",
    shortcut: "/images/coimpact.png",
    apple: "/images/coimpact.png",
    other: {
      rel: "icon",
      url: "/images/coimpact.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavButton />
        {children}
      </body>
    </html>
  );
}
