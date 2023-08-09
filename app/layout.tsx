// import Skeleton from "@/components/Navbar/Skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from  'react-loading-skeleton'
import "./globals.css";
const DynamicHeader = dynamic(() => import("@/components/Navbar/Navbar"), {
  ssr: false,
  loading: () => <Skeleton height={56} borderRadius={0} baseColor='#ffff' />,
});

import type { Metadata } from "next";
import dynamic from "next/dynamic";
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
    images: [
      {
        url: "https://raw.githubusercontent.com/OgaDavid/Scribble/master/public/assets/images/bannner.png?token=GHSAT0AAAAAACDYPQP3QW6QIZDXTIF6F3UOZGTFGAA",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scribble",
    description: "Scribble - Free Blogging Community for Developers",
    creator: "@scribble",
    images: ["https://raw.githubusercontent.com/OgaDavid/Scribble/master/public/assets/images/bannner.png?token=GHSAT0AAAAAACDYPQP3QW6QIZDXTIF6F3UOZGTFGAA"],
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
        <DynamicHeader />
        {children}
      </body>
    </html>
  );
}
