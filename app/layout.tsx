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
  title: {
    default: "Pixel Animation Muzaffarnagar",
    template: "%s | Pixel Animation Muzaffarnagar"
  },

  description: "Best animation institute in Muzaffarnagar offering professional courses in graphic design, video editing, and motion graphics. Get industry-ready training with expert faculty and practical learning.",
  keywords: ["animation institute muzaffarnagar" ,"graphic design course" ,"video editing course","motion graphics training"," animation courses","best animation institute","graphic design institute","video editing institute","motion graphics institute","animation training muzaffarnagar"],
  authors: [{ name: "Pixel Animation", url: "https://thepixelanimation.com" }],
  creator: "Pixe Animation",
  publisher: "Pixel Animation Institute",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Pixel Animation Institute Muzaffarnagar",
    description: "Pixel animation institute in Muzaffarnagar offering expert training in graphic design, video editing, and motion graphics. Start your creative career today!",
    url: "https://pixelanimation.com",
    siteName: "Pixel Animation",
    locale:"en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixel Animation Institute Muzaffarnagar",
    description: "Professional training in graphic design, video editing & motion graphics. Join the best animation institute in Muzaffarnagar!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { AuthProvider } from './context/AuthContext';

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
           <AuthProvider>

        {children}
           </AuthProvider>
      </body>
    </html>
  );
}
