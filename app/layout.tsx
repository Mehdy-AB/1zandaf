import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata: Metadata = {
  title: "@1.zndaf — Creator Hub",
  description:
    "Tech, PC setups, gaming gear & viral content creator from Algeria. Gear store, viral case studies and brand partnerships.",
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title: "@1.zndaf — Creator Hub",
    description: "High-Impact Viral Reels & Clean Aesthetic Desk Setups.",
    images: ["/logo.jpg"],
  },
};

export const viewport: Viewport = { themeColor: "#05060a" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${grotesk.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
