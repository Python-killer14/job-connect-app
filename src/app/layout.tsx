import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import NavigationBar from "@/components/NavigationBar";

const outfit = Outfit({ subsets: ["latin"], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main>
          <NavigationBar />
          {children}
        </main>
        </body>
    </html>
  );
}
