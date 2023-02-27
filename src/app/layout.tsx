import "./globals.css";
import { blogConfig } from "@@/config/blogConfig";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: {
    default: blogConfig.title,
    template: `%s - ${blogConfig.title}`,
  },
  openGraph: {
    title: {
      default: blogConfig.title,
      template: `%s - ${blogConfig.title}`,
    },
  },
  twitter: {
    title: {
      default: blogConfig.title,
      template: `%s - ${blogConfig.title}`,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: [
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
