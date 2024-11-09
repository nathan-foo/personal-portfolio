import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/sections/navbar";
import Links from "@/components/sections/links";
import SmoothScroll from "@/components/tools/smooth-scroll";

export const metadata: Metadata = {
  title: "Nathan Foo",
  description: "Nathan's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SmoothScroll>
        <body>
          <Navbar />
          <Links />
          {children}
        </body>
      </SmoothScroll>
    </html>
  );
}
