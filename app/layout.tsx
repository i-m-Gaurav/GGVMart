// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar"; // Adjust the import path based on your project structure
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GGV Mart",
  description: "Platform for the university students to resell your day to day items",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthContextProvider>
        <body className={inter.className}>
          <Navbar /> {/* Include the Navbar here */}
          <Toaster />
          {children}
        </body>
      </AuthContextProvider>
    </html>
  );
}
