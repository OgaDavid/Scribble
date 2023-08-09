// import Skeleton from "@/components/Navbar/Skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import "./globals.css";
import Navbar from '@/components/Navbar/Navbar';

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Scribble - Free Blogging Community for Developers",
    template: "%s | Scribble",
  },
  keywords: [
    "Scribble",
    "Blog",
    "Articles",
    "Hashnode",
    "Medium",
    "Publishing",
    "Newsletter",
    "Technology",
    "Writing platform",
    "Community",
  ],
  description:
    "Scribble is your go-to community space where developers can share and learn from high-quality tech and programming articles or even start their own blog.",
  applicationName: "Scribble",
  authors: [{ name: "Scribble" }],
  openGraph: {
    title: "Scribble",
    description: "Scribble - Free Blogging Community for Developers",
    url: "https://tryscribble.vercel.app",
    siteName: "Scribble",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scribble",
    description: "Scribble - Free Blogging Community for Developers",
    creator: "@scribble",
  },
  category: "Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
