import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import { BookProvider } from "@/Components/Context/BookContext";

export const metadata: Metadata = {
  title: "Book Vibe | Discover & Track Your Reads",
  description: "A modern web application to explore books, manage your shelf, and track reading analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="min-h-screen flex flex-col antialiased">
        <BookProvider>
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
        </BookProvider>
      </body>
    </html>
  );
}