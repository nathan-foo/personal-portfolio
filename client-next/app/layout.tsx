import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/tools/smooth-scroll";
import Navbar from "@/components/sections/navbar";

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
    <SmoothScroll>
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    </SmoothScroll>
  );
}
