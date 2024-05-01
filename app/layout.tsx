import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Navneet Gupta Portfolio",
  description: "An Portfolio website of navneet gupta. I'm a software engineer with an entrepreneurial mindset, born and raised in India. Graduated with a Bachelor of Technology degree in 2023 and currently working as a Software Engineer (SE 1) at Climbax Entertainment Pvt. Ltd, leading frontend development projects and contributing as a feature flow writer. Passionate about entrepreneurship, I co-founded a startup called Faco Care during the COVID-19 pandemic, focusing on helping people detect and manage medical problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics/>
      </body>
    </html>
  );
}
