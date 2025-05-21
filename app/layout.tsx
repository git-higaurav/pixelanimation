import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const Jost = localFont({
  src:"../public/fonts/Jost.ttf",
  variable:"--font-jost"
})

const Roboto = localFont({
  src:"../public/fonts/Roboto.ttf",
  variable:"--font-roboto"
})
export const metadata: Metadata = {
  title: "Pixel Animation | Pixel Animation Muzaffarnagar | The Pixel Animation",
  description: "Best animation institute in Muzaffarnagar offering professional courses in graphic design, video editing, and motion graphics. Get industry-ready training with expert faculty and practical learning.",
  authors: [{ name: "pixelanimation" }],
  openGraph: {
    title: "Pixel Animation | Pixel Animation Muzaffarnagar | The Pixel Animation",
    siteName: "Pixel Animation Website",
    url: "https://www.thepixelanimation.com/",
    description: "Best animation institute in Muzaffarnagar offering professional courses in graphic design, video editing, and motion graphics. Get industry-ready training with expert faculty and practical learning.",
    type: "website",
  },
  metadataBase: new URL("https://www.thepixelanimation.com"),
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Jost.variable} ${Roboto.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
