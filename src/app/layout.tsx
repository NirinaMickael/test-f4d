// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from '../app/ClientLayout';
import { ThemeProvider } from "@/lib/ThemeContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F4D",
  description: "French4 Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="dark:bg-gradient-to-b from-[#070b14] to-[#07071b] bg-white dark:bg-gray-900 dark:text-white text-black w-screen h-screen">
            <Navbar />
            <ClientLayout>{children}</ClientLayout>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
