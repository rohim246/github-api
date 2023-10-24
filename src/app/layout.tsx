import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github REST API",
  description: "SeToko Test Rohim",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex justify-center items-center min-h-screen`}
      >
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
