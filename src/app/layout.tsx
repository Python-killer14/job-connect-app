import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";

// Components
import NavigationBar from "@/components/NavigationBar";
import StoreProvider from "@/redux/StoreProvider";
import SessionProviderWrapper from "@/providers/SessionProvider";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import FilterGroup from "@/components/home/FilterGroup";
import Footer from "@/components/footer/Footer";

// Fonts
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
          <SessionProviderWrapper>
            <StoreProvider>
              <MaxWidthWrapper>
                <NavigationBar />
                {children}
                <Footer />
              </MaxWidthWrapper>
            </StoreProvider>
          </SessionProviderWrapper>
        </main>
      </body>
    </html>
  );
}
