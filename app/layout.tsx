import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/shared";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Lunar Fair",
  description: "Moon-moon is here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} antialiased`}
      >
      <main className="min-h-screen">
          <Header />
          {children}
      </main>
      </body>
    </html>
  );
}
