"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Navbar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Footer from "./components/Footer";
import GoTop from "./components/GoTop";
import ChatWidget from "./components/ChatBot";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import { ClientOnly } from "./components/ClientOnly";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider store={store}>
          <Header />
          {children}
          {!usePathname().startsWith("/auth/admin") && <ChatWidget />}
          <GoTop />
          <Footer />
          <Toaster position="top-right" reverseOrder={false} />
        </Provider>
      </body>
    </html>
  );
}
