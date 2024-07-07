import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import NavigationBar from "@/components/NavigationBar";
import StoreProvider from "@/redux/StoreProvider";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: "Find jobs in Ethiopia easily",
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
          <StoreProvider>
            <NavigationBar />
          </StoreProvider>
          {children}
        </main>
      </body>
    </html>
  );
}
