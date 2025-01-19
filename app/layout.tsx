import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import {
  metadata as importedMetadata,
  structuredData,
  analyticsConfig,
  performanceConfig,
  accessibilityConfig,
} from "./textExport";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = importedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={accessibilityConfig.htmlAttributes.lang}
      dir={accessibilityConfig.htmlAttributes.dir}
    >
      <head>
        {/* Google Analytics Tags */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: analyticsConfig.googleAnalytics.script,
          }}
        /> */}
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <main role={accessibilityConfig.landmarks.mainRole}>{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
