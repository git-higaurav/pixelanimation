import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Pixel Animation",
  description: "Created By higaurav.com",
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
